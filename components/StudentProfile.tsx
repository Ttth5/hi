
import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { IRAQI_GRADES, IRAQI_SUBJECTS } from '../constants';

const StudentProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [tempProfile, setTempProfile] = useState<UserProfile>({
    name: '',
    role: 'student',
    grade: IRAQI_GRADES[0],
    challengingSubjects: [],
    goals: ''
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('iraqi_student_profile');
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfile(parsed);
      setTempProfile(parsed);
    } else {
      setIsEditing(true);
    }
  }, []);

  const handleSave = () => {
    if (!tempProfile.name.trim()) {
      alert("يرجى إدخال الاسم");
      return;
    }
    const updated = { ...tempProfile, lastUpdated: new Date().toISOString() };
    localStorage.setItem('iraqi_student_profile', JSON.stringify(updated));
    setProfile(updated);
    setIsEditing(false);
    
    // Trigger success animation
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const toggleSubject = (subject: string) => {
    setTempProfile(prev => ({
      ...prev,
      challengingSubjects: prev.challengingSubjects.includes(subject)
        ? prev.challengingSubjects.filter(s => s !== subject)
        : [...prev.challengingSubjects, subject]
    }));
  };

  if (!isEditing && profile) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 message-appear relative">
        {/* Success Toast Animation */}
        {showSuccess && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-xl z-50 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-bold text-sm">تم حفظ بياناتك بنجاح عيني</span>
          </div>
        )}

        <div className="bg-emerald-700 p-8 text-white relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-1">{profile.name}</h3>
            <p className="opacity-90">{profile.grade}</p>
          </div>
          <button 
            onClick={() => setIsEditing(true)}
            className="absolute top-8 left-8 bg-white/20 hover:bg-white/30 p-2 rounded-xl transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </button>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-3">المواد التي تحتاج تركيزاً أكبر</h4>
              <div className="flex flex-wrap gap-2">
                {profile.challengingSubjects.length > 0 ? (
                  profile.challengingSubjects.map(s => (
                    <span key={s} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm border border-amber-100">
                      {s}
                    </span>
                  ))
                ) : (
                  <p className="text-slate-400 text-sm">لم يتم تحديد مواد بعد.</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-3">الأهداف الأكاديمية</h4>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-slate-700 leading-relaxed">
              {profile.goals || "اجعل هدفك واضحاً لنسعى لتحقيقه معاً..."}
            </div>
          </div>
        </div>
        
        <div className="px-8 pb-8">
          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center gap-4">
            <div className="text-2xl">🎓</div>
            <div className="text-sm text-emerald-800">
              بناءً على ملفك، سيقوم المرشد الذكي بتخصيص النصائح لتناسب احتياجاتك في <strong>{profile.grade}</strong>.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 message-appear">
      <div className="p-8 border-b border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800">تحديث الملف الشخصي للطلبة</h3>
        <p className="text-slate-500">ساعدنا لنتعرف عليك أكثر ونقدم لك توجيهاً أفضل.</p>
      </div>

      <div className="p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">الاسم الثلاثي</label>
            <input 
              type="text" 
              value={tempProfile.name}
              onChange={(e) => setTempProfile({...tempProfile, name: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              placeholder="مثال: محمد علي أحمد"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">المرحلة الدراسية</label>
            <select 
              value={tempProfile.grade}
              onChange={(e) => setTempProfile({...tempProfile, grade: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none transition"
            >
              {IRAQI_GRADES.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-700">المواد التي تجدها صعبة أو تحتاج دعماً فيها</label>
          <div className="flex flex-wrap gap-2">
            {IRAQI_SUBJECTS.map(subject => (
              <button
                key={subject}
                onClick={() => toggleSubject(subject)}
                className={`px-4 py-2 rounded-full text-sm transition border ${
                  tempProfile.challengingSubjects.includes(subject)
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700">طموحاتك وأهدافك الأكاديمية</label>
          <textarea 
            rows={4}
            value={tempProfile.goals}
            onChange={(e) => setTempProfile({...tempProfile, goals: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none transition"
            placeholder="ما الكلية التي تحلم بها؟ أو ما هو التخصص الذي تطمح له؟"
          ></textarea>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            onClick={handleSave}
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg flex items-center gap-2"
          >
            حفظ البيانات
          </button>
          {profile && (
            <button 
              onClick={() => setIsEditing(false)}
              className="bg-slate-100 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
            >
              إلغاء
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
