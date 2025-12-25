
import React from 'react';
import { EXAM_GUIDANCE_SECTIONS } from '../constants';

interface ExamGuidanceProps {
  onStartChat: (initialPrompt?: string) => void;
}

const ExamGuidance: React.FC<ExamGuidanceProps> = ({ onStartChat }) => {
  return (
    <div className="space-y-8 message-appear">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">دليل النجاح في الامتحانات الوزارية</h3>
            <p className="text-slate-500">نصائح واستراتيجيات شاملة لطلاب السادس الإعدادي والثالث متوسط</p>
          </div>
          <button 
            onClick={() => onStartChat("أحتاج نصيحة مخصصة لحالتي في الدراسة للامتحانات الوزارية")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-md flex items-center gap-2 w-fit"
          >
            <span>اسأل المرشد عن دراستك</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EXAM_GUIDANCE_SECTIONS.map((section, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {section.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                    <span className="text-emerald-500 font-bold">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl flex items-start gap-4">
        <div className="text-2xl">💡</div>
        <div>
          <h5 className="font-bold text-amber-900 mb-1">تنبيه هام للطلبة</h5>
          <p className="text-sm text-amber-800 leading-relaxed">
            الامتحان الوزاري هو مجرد محطة في حياتك. ابذل قصارى جهدك وتوكل على الله، ولا تدع الخوف يسيطر على أدائك. تذكر أن "المراجعة المركزة" هي مفتاح النجاح في اللحظات الأخيرة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamGuidance;
