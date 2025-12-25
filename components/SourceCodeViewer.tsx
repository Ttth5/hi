
import React, { useState } from 'react';

const SourceCodeViewer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('App.tsx');
  const [copied, setCopied] = useState(false);

  // ملاحظة: هذه الملفات تمثل هيكلية المشروع الحالية
  const files: Record<string, string> = {
    'index.html': `<!-- ملف الواجهة الرئيسي -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
... محتوى الملف ...
</html>`,
    'App.tsx': `// المكون الرئيسي للموقع
import React from 'react';
... محتوى الملف ...`,
    'constants.ts': `// الثوابت والتعليمات البرمجية
export const APP_NAME = "المرشد الذكي";
... محتوى الملف ...`,
    'vercel.json': `{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}`,
    'metadata.json': `{
  "name": "المرشد الذكي",
  "requestFramePermissions": ["microphone"]
}`
  };

  const copyToClipboard = () => {
    // في الواقع، سنقوم بنسخ محتوى الملف المختار
    // هنا نقوم بمحاكاة العملية لتوجيه المستخدم
    navigator.clipboard.writeText(files[selectedFile] || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 message-appear">
      <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800">
        {/* Header */}
        <div className="bg-slate-800 px-6 py-4 flex justify-between items-center border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-slate-400 text-sm font-mono mr-4">مركز إدارة الأكواد</span>
          </div>
          <button 
            onClick={copyToClipboard}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
              copied ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {copied ? 'تم النسخ!' : 'نسخ الكود'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
            </svg>
          </button>
        </div>

        <div className="flex h-[500px]">
          {/* Sidebar */}
          <div className="w-64 bg-slate-900 border-l border-slate-800 p-4 overflow-y-auto">
            <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">ملفات المشروع</h4>
            <div className="space-y-1">
              {Object.keys(files).map(fileName => (
                <button
                  key={fileName}
                  onClick={() => setSelectedFile(fileName)}
                  className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-3 ${
                    selectedFile === fileName ? 'bg-emerald-600/10 text-emerald-400 font-bold' : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  {fileName}
                </button>
              ))}
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-grow bg-[#0d1117] p-6 font-mono text-sm overflow-auto text-emerald-500/90 leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
            <div className="mb-4 text-slate-500 text-xs italic">// محتوى ملف {selectedFile} - جاهز للنسخ</div>
            <pre className="whitespace-pre">
              <code>{`تحذير: لعرض الأكواد البرمجية الكاملة لهذا المشروع، 
يمكنك النقر على زر "View Code" الموجود في أسفل يمين المنصة الحالية، 
أو نسخ الملفات من القائمة الجانبية هنا عند استضافتها حقيقياً.

حالياً، يمكنك الاعتماد على الملفات المذكورة في دليل الاستضافة.`}</code>
            </pre>
          </div>
        </div>
      </div>
      
      <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex items-center gap-4">
        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl shrink-0 shadow-lg">🚀</div>
        <div>
          <h4 className="font-bold text-emerald-900 mb-1">كيف تحصل على هذه الملفات فعلياً؟</h4>
          <p className="text-sm text-emerald-800 leading-relaxed">
            جميع الأكواد تظهر لك في شاشة الدردشة هنا. للحصول على ملف معين، ببساطة ابحث عنه في الرسائل السابقة وانسخ المحتوى الموجود داخل مربع الكود.
            نحن نستخدم لغات <b>React</b> و <b>TypeScript</b> مع <b>Tailwind CSS</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourceCodeViewer;
