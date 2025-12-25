
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { UserProfile } from "../types";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  private init() {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY is missing. AI features will not work.");
      return null;
    }
    if (!this.ai) {
      this.ai = new GoogleGenAI({ apiKey });
    }
    return this.ai;
  }

  async getGuidance(prompt: string, history: { role: string, content: string }[] = [], profile?: UserProfile | null): Promise<string> {
    const genAI = this.init();
    if (!genAI) {
      return "عذراً، يبدو أن مفتاح الـ API غير مهيأ بشكل صحيح في إعدادات الاستضافة. يرجى مراجعة دليل الاستضافة في التطبيق.";
    }

    try {
      let profileContext = "";
      if (profile) {
        profileContext = `[سياق الطالب: الاسم ${profile.name}, المرحلة ${profile.grade}, المواد الصعبة: ${profile.challengingSubjects.join(', ')}]. `;
      }

      const response: GenerateContentResponse = await genAI.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ 
            role: h.role === 'assistant' ? 'model' : 'user', 
            parts: [{ text: h.content }] 
          })),
          { parts: [{ text: `${profileContext}${prompt}` }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "عذراً، لم أتمكن من توليد رد مناسب حالياً.";
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      if (error?.message?.includes('403')) {
        return "خطأ 403: يبدو أن مفتاح الـ API غير صالح أو غير مفعل. تأكد من تفعيل Gemini API في Google Cloud Console.";
      }
      return "عذراً عيني، صار عندي خطأ تقني. حاول مرة ثانية أو تأكد من الإنترنت.";
    }
  }
}

export const geminiService = new GeminiService();
