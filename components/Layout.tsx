
import React from 'react';
import { APP_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (tab: any) => void;
  activeTab: string;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeTab }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Top Professional Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-emerald-100">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">{APP_NAME}</h1>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">المنصة التعليمية الأولى</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden xl:flex items-center gap-6">
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'chat', label: 'المرشد الآلي' },
                { id: 'exams', label: 'دليل الامتحانات' },
                { id: 'parents', label: 'ركن الأهل' },
                { id: 'lessons', label: 'الدروس الخصوصية' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-bold transition-colors relative py-2 ${
                    activeTab === item.id ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-500'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-emerald-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* Action Button */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('profile')}
                className="hidden sm:flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                ملفي الدراسي
              </button>
              <button 
                className="xl:hidden p-2 text-slate-600"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  menu?.classList.toggle('hidden');
                }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden xl:hidden bg-white border-t border-slate-100 p-4 space-y-2">
          {['home', 'chat', 'exams', 'parents', 'lessons', 'profile'].map(id => (
            <button
              key={id}
              onClick={() => {
                onNavigate(id);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="w-full text-right px-4 py-3 text-slate-700 font-bold hover:bg-emerald-50 rounded-lg transition"
            >
              {id === 'home' ? 'الرئيسية' : id === 'chat' ? 'المرشد الآلي' : id === 'exams' ? 'دليل الامتحانات' : id === 'parents' ? 'ركن الأهل' : id === 'lessons' ? 'الدروس والبدائل' : 'ملفي الدراسي'}
            </button>
          ))}
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-600 p-1.5 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">{APP_NAME}</h2>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                المنصة التعليمية الشاملة لدعم الطلبة العراقيين وأولياء الأمور بأحدث تقنيات الذكاء الاصطناعي والإرشاد النفسي المتخصص.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">روابط سريعة</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="hover:text-emerald-400 transition cursor-pointer" onClick={() => onNavigate('chat')}>المرشد الآلي</li>
                <li className="hover:text-emerald-400 transition cursor-pointer" onClick={() => onNavigate('exams')}>دليل الامتحانات</li>
                <li className="hover:text-emerald-400 transition cursor-pointer" onClick={() => onNavigate('lessons')}>الدروس الخصوصية</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">اتصل بنا</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   info@morshid.iq
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p className="mb-2">جميع الحقوق محفوظة &copy; {new Date().getFullYear()} {APP_NAME}</p>
            <p>صنع بكل حب لدعم مستقبل أجيالنا في العراق 🇮🇶</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
