'use client';

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { supabase } from '../supabase';

interface Service {
  id: number;
  title: string;
  description: string;
  visible: boolean;
  icon_name: string;
}

export default function Page() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const SECRET_ACCESS_CODE = 'Z999'; 

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('id', { ascending: true });
      
      if (!error && data) {
        setServices(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();

    const checkHash = () => {
      if (window.location.hash === '#z-vault') {
        setIsAdminMode(true);
      } else {
        setIsAdminMode(false);
        setIsAdminLoggedIn(false);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === SECRET_ACCESS_CODE) {
      setIsAdminLoggedIn(true);
      setPasswordError('');
    } else {
      setPasswordError('رمز التشفير غير صحيح!');
    }
  };

  const toggleServiceVisibility = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from('services')
      .update({ visible: !currentStatus })
      .eq('id', id);

    if (!error) {
      setServices(services.map(s => s.id === id ? { ...s, visible: !currentStatus } : s));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a12] text-gray-200" dir="rtl">
      <header className="border-b border-gray-800 bg-[#121225]/80 backdrop-blur-md sticky top-0 px-4 py-3 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gray-900 border border-[#00f0ff]"><Icons.GraduationCap className="w-5 h-5 text-[#00f0ff]" /></div>
          <div>
            <h1 className="text-lg font-bold text-white">منصة <span className="text-[#00f0ff]">Z</span></h1>
            <p className="text-[10px] text-gray-400 font-mono">للحـدمات الطـلابية والأكاديـمية</p>
          </div>
        </div>
        <span className="text-xs bg-gray-900 border border-gray-800 px-2 py-1 rounded-full text-gray-400 font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> سحابي آمن
        </span>
      </header>

      <main className="flex-1 p-4 pb-12 max-w-md mx-auto w-full">
        {loading ? (
          <div className="text-center py-20 text-xs text-gray-500 font-mono animate-pulse">جاري الاتصال بالقاعدة المشفرة...</div>
        ) : !isAdminMode ? (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121225] to-[#161630] border border-gray-800 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-2">مرحباً بك في منصة Z</h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                نقدم حلولاً أكاديمية واستشارية متكاملة لدعم مسيرتك التعليمية والمشاريع الجامعية بأعلى مستويات الجودة والاحترافية.
              </p>
            </div>

            <h3 className="text-sm font-bold text-gray-400 px-1 border-r-2 border-[#00f0ff] pr-2">الخدمات المتاحة حالياً</h3>
            
            <div className="space-y-3">
              {services.filter(s => s.visible).map((service) => {
                const IconComponent = (Icons as any)[service.icon_name] || Icons.Info;
                return (
                  <div key={service.id} className="p-4 rounded-xl bg-[#111122] border border-gray-850 flex gap-3">
                    <div className="p-3 bg-gray-950 rounded-lg h-fit border border-gray-800 text-[#00f0ff]"><IconComponent className="w-5 h-5" /></div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-white">{service.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-gray-950 border border-gray-900 text-center space-y-2">
              <p className="text-xs text-gray-400">بحاجة إلى خدمة مخصصة أو مناقشة مشروعك؟</p>
              <button className="w-full py-2 bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] rounded-lg text-xs font-bold text-black">تواصل معنا الآن عبر الواتساب</button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {!isAdminLoggedIn ? (
              <div className="p-5 rounded-xl bg-[#121225] border border-gray-800 space-y-4">
                <div className="text-center space-y-2">
                  <Icons.Lock className="w-8 h-8 text-rose-500 mx-auto animate-pulse" />
                  <h2 className="text-base font-bold text-white">منطقة مشفرة بسيادة كاملة</h2>
                  <p className="text-xs text-gray-400">التحقق يتم عبر جدار حماية السيرفر الخلفي المباشر.</p>
                </div>
                <form onSubmit={handleAdminLogin} className="space-y-3">
                  <input 
                    type="password" 
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="أدخل رمز الدخول السيادي" 
                    className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg font-mono text-center text-sm text-[#00f0ff] focus:outline-none" 
                  />
                  {passwordError && <p className="text-[10px] text-rose-500 text-center">{passwordError}</p>}
                  <button type="submit" className="w-full py-2 bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs font-bold rounded-lg">تحقق من الصلاحية وفك التشفير</button>
                </form>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-950 p-3 rounded-xl border border-gray-900">
                  <span className="text-xs font-bold text-white flex items-center gap-2"><Icons.ShieldCheck className="w-5 h-5 text-emerald-400" /> لوحة التحكم السيادية</span>
                  <button onClick={() => { window.location.hash = ''; }} className="text-[10px] text-rose-400 bg-rose-950/20 px-2 py-1 rounded border border-rose-900/40">خروج وتأمين</button>
                </div>

                <div className="p-4 bg-[#121225] border border-gray-800 rounded-xl space-y-3">
                  <h3 className="text-xs font-bold text-gray-300 border-b border-gray-800 pb-2">التحكم في الخدمات السحابية الحية</h3>
                  <div className="space-y-2">
                    {services.map((service) => {
                      const IconCtrl = (Icons as any)[service.icon_name] || Icons.Info;
                      return (
                        <div key={service.id} className="flex justify-between items-center bg-gray-950 p-2 rounded-lg border border-gray-900">
                          <span className="text-xs text-gray-200 truncate pl-2 flex items-center gap-1"><IconCtrl className="w-3 h-3 text-gray-500" /> {service.title}</span>
                          <button 
                            onClick={() => toggleServiceVisibility(service.id, service.visible)} 
                            className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded border ${service.visible ? 'bg-emerald-950/30 text-emerald-400 border-emerald-900' : 'bg-gray-900 text-gray-500 border-gray-800'}`}
                          >
                            {service.visible ? <Icons.Eye className="w-3 h-3" /> : <Icons.EyeOff className="w-3 h-3" />}
                            {service.visible ? 'معروضة للعامة' : 'مخفية بالسيرفر'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
