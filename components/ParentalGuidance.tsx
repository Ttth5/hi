
import React from 'react';
import { PARENTAL_GUIDANCE_SECTIONS } from '../constants';

interface ParentalGuidanceProps {
  onStartChat: (initialPrompt?: string) => void;
}

const ParentalGuidance: React.FC<ParentalGuidanceProps> = ({ onStartChat }) => {
  return (
    <div className="space-y-8 message-appear">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">ركن أولياء الأمور</h3>
            <p className="text-slate-500">كيف تكون الداعم الأول لابنك في مسيرته التعليمية؟</p>
          </div>
          <button 
            onClick={() => onStartChat("أنا ولي أمر وأحتاج نصيحة حول كيفية التعامل مع ضغوط ابني في فترة الامتحانات الوزارية")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-md flex items-center gap-2 w-fit"
          >
            <span>استشارة تربوية للأهل</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PARENTAL_GUIDANCE_SECTIONS.map((section, idx) => (
            <div key={idx} className="bg-indigo-50/30 p-6 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {section.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                    <span className="text-indigo-500 font-bold">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4">
        <div className="text-2xl">👨‍👩‍👧‍👦</div>
        <div>
          <h5 className="font-bold text-blue-900 mb-1">رسالة للأهل</h5>
          <p className="text-sm text-blue-800 leading-relaxed">
            تذكروا أن صحتكم النفسية تنعكس على أبنائكم. كونوا صبورين، فالمراهقة وفترة الامتحانات تتطلب احتواءً أكثر من الحزم المفرط. النجاح الحقيقي هو بناء شخصية واثقة ومتوازنة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentalGuidance;
