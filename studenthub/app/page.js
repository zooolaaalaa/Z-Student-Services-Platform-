"use client";
import { motion } from 'framer-motion';
import { Users, FileText, CheckCircle, GraduationCap } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: "إجمالي الطلاب", value: "1250", icon: <Users />, color: "text-blue-400" },
    { label: "طلبات نشطة", value: "320", icon: <FileText />, color: "text-amber-400" },
    { label: "نسبة الإنجاز", value: "85%", icon: <CheckCircle />, color: "text-green-400" },
    { label: "منح متاحة", value: "12", icon: <GraduationCap />, color: "text-red-400" }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 font-sans" dir="rtl">
      {/* الهيدر الاحترافي */}
      <section className="max-w-5xl mx-auto text-center py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-l from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
        >
          StudentHub+ الأخصائية غيداء الحواشم
        </motion.h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          نظام محاكاة متكامل للخدمات الطلابية، مصمم لإدارة البيانات الأكاديمية بدقة واحترافية.
        </p>
      </section>

      {/* لوحة الإحصائيات (من ملفك السابق) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#111] border border-white/10 rounded-2xl shadow-xl"
          >
            <div className={`mb-4 ${stat.color}`}>{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-500 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* زر البدء */}
      <div className="text-center mt-16">
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-10 rounded-full transition-all transform hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
          ابدأ إدارة النظام الآن
        </button>
      </div>
    </main>
  );
}

