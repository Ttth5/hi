
import React from 'react';
import { PRIVATE_LESSONS_SECTIONS } from '../constants';

interface PrivateLessonsProps {
  onStartChat: (initialPrompt?: string) => void;
}

const PrivateLessons: React.FC<PrivateLessonsProps> = ({ onStartChat }) => {
  return (
    <div className="space-y-8 message-appear">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">دليل الدروس الخصوصية والبدائل</h3>
            <p className="text-slate-500">كيف تختار طريقك الصحيح للدعم الدراسي دون إهقاق ميزانية العائلة؟</p>
          </div>
          <button 
            onClick={() => onStartChat("أحتاج مساعدة في اختيار دروس خصوصية لمواد السادس الإعدادي، وما هي أفضل البدائل المجانية؟")}
            className="bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-amber-700 transition shadow-md flex items-center gap-2 w-fit"
          >
            <span>استشر المرشد حول الدروس</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRIVATE_LESSONS_SECTIONS.map((section, idx) => (
            <div key={idx} className="bg-amber-50/40 p-6 rounded-2xl border border-amber-100 hover:border-amber-300 transition group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {section.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                    <span className="text-amber-500 font-bold">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
        <div className="text-2xl">💡</div>
        <div>
          <h5 className="font-bold text-emerald-900 mb-1">نصيحة اقتصادية</h5>
          <p className="text-sm text-emerald-800 leading-relaxed">
            قبل التوجه للدروس الخصوصية المكلفة، جرب "المراجعة المركزة" لأساتذة مشهورين على اليوتيوب. الكثير من طلاب العراق حققوا درجات كاملة بالاعتماد كلياً على الدروس الإلكترونية المجانية.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h4 className="text-xl font-bold text-slate-800 mb-4">أهم المنصات والبدائل في العراق</h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "منصة نيوتن", type: "رسمية", color: "bg-blue-100 text-blue-700" },
            { name: "التلفزيون التربوي", type: "حكومي", color: "bg-emerald-100 text-emerald-700" },
            { name: "تطبيق أبواب", type: "إلكتروني", color: "bg-purple-100 text-purple-700" },
            { name: "قنوات التليجرام", type: "اجتماعي", color: "bg-sky-100 text-sky-700" }
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl text-center border border-transparent hover:border-slate-200 transition ${item.color}`}>
              <div className="font-bold">{item.name}</div>
              <div className="text-xs opacity-80">{item.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivateLessons;
