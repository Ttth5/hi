
import React from 'react';

const HostingGuide: React.FC = () => {
  const steps = [
    {
      id: "1",
      title: "الحصول على مفتاح الـ API",
      desc: "هذا هو 'عقل' التطبيق. يجب أن تحصل على مفتاح مجاني من جوجل.",
      link: "https://aistudio.google.com/app/apikey",
      linkText: "احصل على المفتاح من هنا",
      icon: "🔑"
    },
    {
      id: "2",
      title: "إنشاء مستودع GitHub",
      desc: "انسخ الملفات التي أعطيتك إياها وضعها في مستودع جديد باسم 'morshid'.",
      link: "https://github.com/new",
      linkText: "إنشاء مستودع جديد",
      icon: "📁"
    },
    {
      id: "3",
      title: "الربط مع Vercel",
      desc: "اربط حساب GitHub الخاص بك بـ Vercel واطلق الموقع للعالم.",
      link: "https://vercel.com/new",
      linkText: "ابدأ الاستضافة الآن",
      icon: "🚀"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 message-appear pb-24">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-800 p-10 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-black mb-6">جاهز لإطلاق تطبيقك؟ 🚀</h3>
          <p className="text-emerald-100 text-lg max-w-2xl leading-relaxed">
            لقد صممت لك الأكواد لتكون متوافقة تماماً مع الاستضافات السحابية المجانية. اتبع الخطوات الثلاث أدناه وسيكون موقعك متاحاً برابط `iraqi-morshid.vercel.app` خلال دقائق.
          </p>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {step.id}
              </span>
              <h4 className="text-xl font-black text-slate-800">{step.title}</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              {step.desc}
            </p>
            <a 
              href={step.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors shadow-lg"
            >
              {step.linkText}
            </a>
          </div>
        ))}
      </div>

      {/* Critical Configuration Box */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white border border-slate-800 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-grow space-y-4">
            <h4 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-emerald-500">⚠️</span>
              خطوة لا تنساها في Vercel
            </h4>
            <p className="text-slate-400 leading-relaxed">
              عندما تصل إلى صفحة <b>Configure Project</b> في Vercel، ابحث عن قسم <b>Environment Variables</b> وأضف التالي:
            </p>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 font-mono text-emerald-400 flex justify-between items-center">
              <span>Key: API_KEY</span>
              <span className="text-slate-500 text-xs">Value: [المفتاح الذي حصلت عليه]</span>
            </div>
          </div>
          <div className="shrink-0">
            <div className="w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
              <svg className="w-16 h-16 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-slate-400 text-sm">
          أنت الآن تملك تطبيقاً تعليمياً متطوراً.. العراق ينتظر إبداعك! 🇮🇶
        </p>
      </div>
    </div>
  );
};

export default HostingGuide;
