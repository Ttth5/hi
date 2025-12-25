
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message, UserProfile } from '../types';
import { SUGGESTED_TOPICS } from '../constants';

interface ChatInterfaceProps {
  initialPrompt?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialPrompt }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  
  const initialMessage: Message = {
    id: '1',
    role: 'assistant',
    content: 'أهلاً بك في المرشد الذكي. أنا هنا لمساعدتك في أي استفسار تربوي أو نفسي يخص الطالب العراقي. كيف يمكنني مساعدتك اليوم؟',
    timestamp: new Date()
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitedRef = useRef(false);

  // جلب الملف الشخصي عند التحميل
  useEffect(() => {
    const saved = localStorage.getItem('iraqi_student_profile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && !hasInitedRef.current) {
      handleSend(initialPrompt);
      hasInitedRef.current = true;
    }
  }, [initialPrompt]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const response = await geminiService.getGuidance(text, history, profile);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "عذراً عيني، واجهت مشكلة في الاتصال بالخادم. يرجى التأكد من مفتاح الـ API الخاص بك أو جودة الإنترنت.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm('هل أنت متأكد من مسح جميع الرسائل وبدء محادثة جديدة؟')) {
      setMessages([{ ...initialMessage, timestamp: new Date() }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 message-appear">
      {/* Chat Header */}
      <div className="px-6 py-4 bg-white border-b border-slate-100 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 leading-none">المرشد التربوي الذكي</h4>
            <span className="text-[10px] text-emerald-600 font-medium">متصل الآن {profile ? `• يساعد ${profile.name}` : ''}</span>
          </div>
        </div>
        <button
          onClick={clearChat}
          className="text-slate-400 hover:text-red-500 transition-all flex items-center gap-1.5 text-xs font-semibold p-2 hover:bg-red-50 rounded-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          مسح السجل
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#fcfdfe]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} message-appear`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
            }`}>
              <div className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">
                {msg.role === 'user' ? 'أنت' : 'المرشد'}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.content}</div>
              <div className={`text-[10px] mt-2 text-right opacity-60 font-medium`}>
                {msg.timestamp.toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end message-appear">
            <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-200 rounded-tl-none flex items-center gap-3">
              <div className="flex items-center">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
              <span className="text-xs font-semibold text-slate-400">المرشد يكتب ردك...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Topics */}
      {messages.length < 3 && (
        <div className="px-6 py-3 bg-white border-t border-slate-100 overflow-x-auto shrink-0">
          <div className="flex gap-2 min-w-max">
            {SUGGESTED_TOPICS.map((topic, i) => (
              <button
                key={i}
                onClick={() => handleSend(topic)}
                className="text-xs bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all font-medium whitespace-nowrap shadow-sm"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-slate-200 shrink-0">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب سؤالك أو استفسارك هنا..."
            className="flex-grow px-5 py-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition shadow-sm placeholder:text-slate-400"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-emerald-600 text-white p-4 rounded-2xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg group"
          >
            <svg className="w-6 h-6 rotate-180 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </form>
        <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">
          تم تصميم الردود آلياً لتناسب البيئة التربوية العراقية. استخدم الإرشادات بوعي.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
