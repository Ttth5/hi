
import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatInterface from './components/ChatInterface';
import ExamGuidance from './components/ExamGuidance';
import ParentalGuidance from './components/ParentalGuidance';
import StudentProfile from './components/StudentProfile';
import PrivateLessons from './components/PrivateLessons';
import HostingGuide from './components/HostingGuide';
import { CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'chat' | 'exams' | 'parents' | 'profile' | 'lessons' | 'hosting'>('home');
  const [initialChatPrompt, setInitialChatPrompt] = useState<string | undefined>(undefined);

  const startChat = (prompt?: string) => {
    setInitialChatPrompt(prompt);
    setActiveTab('chat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (tab: any) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout onNavigate={handleNavigation} activeTab={activeTab}>
      {activeTab === 'home' && (
        <div className="space-y-0">
          {/* Hero Website Section */}
          <section className="relative bg-white pt-16 pb-24 overflow-hidden">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 text-right">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold text-xs mb-6 shadow-sm border border-emerald-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  أول مرشد ذكي عراقي متوفر الآن
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
                  نصنع طريقك نحو <span className="text-emerald-600">النجاح</span> بذكاء.
                </h2>
                <p className="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-light">
                  منصة "المرشد الذكي" هي وجهتك المتكاملة للإرشاد التربوي والنفسي، مصممة بأحدث تقنيات الذكاء الاصطناعي لتناسب الطالب والبيت العراقي.
                </p>
                <div className="flex flex-wrap gap-4 justify-start">
                  <button 
                    onClick={() => startChat()}
                    className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all"
                  >
                    ابدأ محادثة فورية
                  </button>
                  <button 
                    onClick={() => setActiveTab('exams')}
                    className="bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg"
                  >
                    دليل الامتحانات الوزارية
                  </button>
                </div>
                
                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-10">
                  <div>
                    <div className="text-3xl font-black text-slate-800">+10K</div>
                    <div className="text-sm text-slate-500 font-bold">طالب عراقي</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-800">+50</div>
                    <div className="text-sm text-slate-500 font-bold">خبير تربوي</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-800">24/7</div>
                    <div className="text-sm text-slate-500 font-bold">دعم آلي فوري</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-white p-2 rounded-[3rem] shadow-2xl border border-slate-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                    alt="Education" 
                    className="rounded-[2.8rem] w-full h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 max-w-[240px] animate-bounce-slow">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <div className="font-bold text-slate-800">تقييم 4.9/5</div>
                     </div>
                     <p className="text-xs text-slate-500 font-medium">من قبل آلاف الطلاب في بغداد والمحافظات.</p>
                  </div>
                </div>
                {/* Background Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-4">خدماتنا التعليمية</h3>
                <h2 className="text-4xl font-black text-slate-900 mb-6">حلول ذكية لكل تحدي يواجهك</h2>
                <p className="text-lg text-slate-500">نوفر لك مجموعة شاملة من الأدوات التي تضمن لك تفوقاً أكاديمياً واستقراراً نفسياً.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {CATEGORIES.map(cat => (
                  <div 
                    key={cat.id} 
                    onClick={() => {
                      if (cat.id === 'family') setActiveTab('parents');
                      else if (cat.id === 'lessons') setActiveTab('lessons');
                      else startChat(`أريد معرفة المزيد عن ${cat.label}`);
                    }}
                    className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-100 transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-slate-50 text-slate-800 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {cat.icon}
                    </div>
                    <h4 className="text-xl font-black text-slate-800 mb-3">{cat.label}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">نصائح مخصصة وتوجيهات شاملة مصممة للواقع التعليمي العراقي.</p>
                    <div className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:translate-x-[-4px] transition-transform">
                      اكتشف المزيد
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Pages Content Area */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'chat' && <ChatInterface initialPrompt={initialChatPrompt} />}
        {activeTab === 'exams' && <ExamGuidance onStartChat={startChat} />}
        {activeTab === 'parents' && <ParentalGuidance onStartChat={startChat} />}
        {activeTab === 'profile' && <StudentProfile />}
        {activeTab === 'lessons' && <PrivateLessons onStartChat={startChat} />}
        {activeTab === 'hosting' && <HostingGuide />}

        {activeTab !== 'home' && (
           <div className="mt-12 flex justify-center">
             <button 
               onClick={() => setActiveTab('home')}
               className="bg-slate-100 text-slate-500 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 flex items-center gap-2 transition"
             >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
               العودة للصفحة الرئيسية للموقع
             </button>
           </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
