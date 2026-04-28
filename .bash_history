    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* ألوان عصرية وفخمة */
        :root {
            --primary-color: #1a2a6c;
            --secondary-color: #b21f1f;
            --accent-color: #fdbb2d;
            --bg-gradient: linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);
            --glass: rgba(255, 255, 255, 0.9);
        }

        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f9;
            color: #333;
        }

        /* رأس الصفحة المتحرك */
        .hero {
            background: var(--bg-gradient);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            height: 40vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            padding: 20px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .hero h1 { font-size: 2.5rem; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .hero p { font-size: 1.2rem; opacity: 0.9; }

        /* حاوية المحتوى */
        .container {
            max-width: 900px;
            margin: -50px auto 20px auto;
            padding: 0 15px;
        }

        /* بطاقة الترحيب */
        .main-card {
            background: var(--glass);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 25px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            text-align: center;
            border: 1px solid rgba(255,255,255,0.3);
        }

        .main-card h2 { color: var(--primary-color); font-size: 1.8rem; }
        .main-card p { line-height: 1.8; font-size: 1.1rem; color: #555; }

        /* أزرار سريعة وجذابة */
        .action-buttons {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 30px;
        }

        .btn {
            padding: 18px;
            border-radius: 15px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .btn-primary { background: var(--primary-color); color: white; }
        .btn-whatsapp { background: #25d366; color: white; }
        .btn i { margin-left: 10px; font-size: 1.4rem; }

        .btn:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }

        .footer { padding: 30px; text-align: center; color: #888; font-size: 0.9rem; }
    </style>
</head>
<body>

    <div class="hero">
        <h1>منصة EAB التعليمية 🎓</h1>
        <p>مستقبلك الأكاديمي يبدأ من هنا</p>
    </div>

    <div class="container">
        <div class="main-card">
            <h2>أهلاً بكِ في عالم التميز</h2>
            <p>
                نحن لسنا مجرد منصة، نحن رفيقكِ في مشواركِ الجامعي. تحت إشراف 
                <b>المختصة غيداء الهواشيم</b>، نقدم لكِ خدمات تعليمية متكاملة 
                تضمن لكِ التفوق والإبداع في كل واجب، بحث، أو اختبار.
            </p>

            <div class="action-buttons">
                <a href="services.html" class="btn btn-primary">
                    <i class="fas fa-list-check"></i> استعراض كافة الخدمات
                </a>
                <a href="https://wa.me/967784948116" class="btn btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> اطلب خدمتك الآن (مباشر)
                </a>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>بني بكل حب لصالح منصة EAB &copy; 2026</p>
    </div>

</body>
</html>
EOF

cat <<EOF > index.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة EAB | المختصة غيداء الهواشيم</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

        :root {
            --primary: #1e3a8a;
            --accent: #f59e0b;
            --bg: #f8fafc;
        }

        body {
            font-family: 'Tajawal', sans-serif;
            background-color: var(--bg);
            margin: 0;
            color: #1e293b;
        }

        .hero-section {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .hero-section h1 { font-size: 2.2rem; margin: 0; }
        .hero-section p { font-size: 1.1rem; opacity: 0.9; margin-top: 10px; }

        .container { max-width: 500px; margin: -40px auto 40px; padding: 0 20px; }

        .feature-card {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.05);
            text-align: center;
        }

        .main-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            color: var(--primary);
            padding: 18px;
            border-radius: 15px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
            border: 2px solid var(--primary);
            transition: 0.3s;
        }

        .whatsapp-btn {
            background: #25d366;
            color: white;
            border: none;
        }

        .main-btn i { margin-left: 10px; font-size: 1.2rem; }

        .services-preview {
            margin-top: 30px;
            display: grid;
            gap: 15px;
        }

        .s-item {
            background: #eff6ff;
            padding: 15px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            font-weight: bold;
            color: #1e40af;
        }

        .s-item i { color: var(--accent); margin-left: 10px; }
    </style>
</head>
<body>

    <div class="hero-section">
        <h1>منصة EAB التعليمية 🎓</h1>
        <p>بإشراف المختصة غيداء الهواشيم</p>
    </div>

    <div class="container">
        <div class="feature-card">
            <h3>شريككِ الأكاديمي الأول</h3>
            <p>نقدم خدماتنا لطلاب الجامعات في عمان والمملكة لضمان أفضل النتائج والدرجات النهائية.</p>
            
            <div class="services-preview">
                <div class="s-item"><i class="fas fa-file-signature"></i> أبحاث وتقارير (Zero AI)</div>
                <div class="s-item"><i class="fas fa-laptop-code"></i> حل الكويزات والواجبات</div>
                <div class="s-item"><i class="fas fa-chalkboard-teacher"></i> شروح تدريس عبر Zoom</div>
            </div>

            <a href="https://wa.me/967784948116" class="main-btn whatsapp-btn">
                <i class="fab fa-whatsapp"></i> اطلب خدمتك الآن
            </a>
            
            <a href="services.html" class="main-btn">
                <i class="fas fa-stream"></i> تفاصيل الخدمات والأسعار
            </a>
        </div>
    </div>

    <p style="text-align: center; color: #94a3b8; font-size: 0.8rem;">
        جميع الحقوق محفوظة - منصة EAB © 2026
    </p>

</body>
</html>
EOF

cat <<EOF > services.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خدماتنا | منصة EAB</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');
        body { font-family: 'Tajawal', sans-serif; background-color: #f8fafc; margin: 0; color: #1e293b; padding-bottom: 40px; }
        .nav-back { background: #1e3a8a; padding: 15px; display: flex; align-items: center; color: white; text-decoration: none; font-weight: bold; }
        .nav-back i { margin-left: 10px; }
        .header { text-align: center; padding: 40px 20px; background: white; border-bottom: 1px solid #e2e8f0; margin-bottom: 30px; }
        .container { max-width: 600px; margin: auto; padding: 0 20px; }
        .service-card { background: white; border-radius: 20px; padding: 20px; margin-bottom: 20px; box-shadow: 0 10px 15px rgba(0,0,0,0.05); border-right: 6px solid #1e3a8a; transition: 0.3s; }
        .service-card:hover { transform: scale(1.02); }
        .service-card h3 { color: #1e3a8a; margin-top: 0; display: flex; align-items: center; }
        .service-card i { margin-left: 10px; color: #f59e0b; }
        .service-card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; }
        .badge { background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; display: inline-block; margin-top: 10px; }
    </style>
</head>
<body>

    <a href="index.html" class="nav-back"><i class="fas fa-arrow-right"></i> العودة للرئيسية</a>

    <div class="header">
        <h1>قائمة الخدمات الأكاديمية</h1>
        <p>نخبة من المختصين لخدمتكم بأعلى معايير الجودة</p>
    </div>

    <div class="container">
        <div class="service-card">
            <h3><i class="fas fa-edit"></i> الأبحاث والتقارير</h3>
            <p>كتابة أبحاث جامعية وتقارير متكاملة، خالية من الاقتباس (Zero Plagiarism) ومن الذكاء الاصطناعي (Zero AI)، بأسلوب أكاديمي رصين.</p>
            <span class="badge">الأكثر طلباً</span>
        </div>

        <div class="service-card">
            <h3><i class="fas fa-check-double"></i> حل الاختبارات والواجبات</h3>
            <p>مساعدة احترافية في حل الكويزات (Quizzes) والواجبات الدورية لضمان الدرجة النهائية (Full Mark) في كافة التخصصات.</p>
        </div>

        <div class="service-card">
            <h3><i class="fas fa-video"></i> تدريس مباشر (Zoom)</h3>
            <p>جلسات شرح وتدريس خصوصية عبر تطبيق زووم لتبسيط المواد المعقدة وشرح التكليفات خطوة بخطوة.</p>
        </div>

        <div class="service-card">
            <h3><i class="fas fa-file-powerpoint"></i> العروض والملخصات</h3>
            <p>تصميم عروض باوربوينت احترافية وعمل ملخصات شاملة للمناهج الدراسية تسهل عليكِ عملية المذاكرة.</p>
        </div>

        <div class="service-card">
            <h3><i class="fas fa-key"></i> اشتراكات الترم</h3>
            <p>توفير أكواد اشتراك لترم كامل لكافة المواد، لتكوني جاهزة ومستعدة من بداية الفصل الدراسي.</p>
        </div>
    </div>

</body>
</html>
EOF

cat <<EOF > request_form.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>طلب خدمة | منصة EAB</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');
        body { font-family: 'Tajawal', sans-serif; background-color: #f8fafc; margin: 0; padding-bottom: 40px; }
        .nav-back { background: #1e3a8a; padding: 15px; display: flex; align-items: center; color: white; text-decoration: none; font-weight: bold; }
        .container { max-width: 500px; margin: 30px auto; padding: 0 20px; }
        .form-card { background: white; border-radius: 20px; padding: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        h2 { color: #1e3a8a; text-align: center; margin-bottom: 25px; }
        .input-group { margin-bottom: 20px; text-align: right; }
        label { display: block; margin-bottom: 8px; font-weight: bold; color: #475569; }
        input, select, textarea { width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 12px; font-family: inherit; font-size: 1rem; box-sizing: border-box; }
        input:focus { border-color: #3b82f6; outline: none; }
        .submit-btn { background: #25d366; color: white; border: none; width: 100%; padding: 15px; border-radius: 15px; font-size: 1.1rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
        .submit-btn:hover { background: #128c7e; transform: translateY(-2px); }
        .submit-btn i { margin-left: 10px; }
    </style>
</head>
<body>

    <a href="index.html" class="nav-back"><i class="fas fa-arrow-right"></i> العودة للرئيسية</a>

    <div class="container">
        <div class="form-card">
            <h2>نموذج طلب خدمة 📋</h2>
            <div class="input-group">
                <label>الاسم الكريم</label>
                <input type="text" id="name" placeholder="أدخل اسمك هنا">
            </div>
            <div class="input-group">
                <label>نوع الخدمة</label>
                <select id="service">
                    <option value="بحث أو تقرير">بحث أو تقرير</option>
                    <option value="حل واجب/كويز">حل واجب أو كويز</option>
                    <option value="شرح عبر زووم">شرح مباشر عبر زووم</option>
                    <option value="عرض باوربوينت">تصميم عرض باوربوينت</option>
                </select>
            </div>
            <div class="input-group">
                <label>تفاصيل الطلب (المادة والموعد)</label>
                <textarea id="details" rows="4" placeholder="اكتب تفاصيل مادتك والموعد المطلوب"></textarea>
            </div>
            <button class="submit-btn" onclick="sendToWhatsApp()">
                <i class="fab fa-whatsapp"></i> إرسال الطلب عبر واتساب
            </button>
        </div>
    </div>

    <script>
        function sendToWhatsApp() {
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const details = document.getElementById('details').value;
            const phoneNumber = "967784948116"; // رقمك المعتمد
            
            const message = "مرحباً منصة EAB، أنا " + name + "\nأريد طلب خدمة: " + service + "\nالتفاصيل: " + details;
            const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
            window.open(url, '_blank');
        }
    </script>
</body>
</html>
EOF

termux-setup-storage
git clone https://github.com/eabplatform/EAB-platform.git
cd EAB-platform
python -m http.server 8080
fuser -k 8080/tcp
python -m http.server 9090
ssh -R 80:localhost:8081 nokey@localhost.run
cat <<EOF > index.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة تخصصنا | غيداء الهاشم</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root { --primary: #2563eb; --secondary: #7c3aed; --accent: #10b981; --bg: #f8fafc; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: var(--bg); margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        .container { background: white; width: 90%; max-width: 450px; padding: 40px 20px; border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.05); text-align: center; border: 1px solid #e2e8f0; }
        .profile-icon { font-size: 60px; color: var(--primary); margin-bottom: 20px; }
        h1 { color: #1e293b; font-size: 26px; margin: 0; }
        p { color: #64748b; margin-top: 10px; margin-bottom: 30px; }
        .links-gap { display: grid; gap: 15px; }
        .link-card { display: flex; align-items: center; justify-content: center; padding: 16px; border-radius: 18px; text-decoration: none; color: white; font-weight: 600; font-size: 17px; transition: 0.3s; }
        .wa { background: #22c55e; }
        .tg { background: #0ea5e9; }
        .folder { background: #f59e0b; }
        .link-card i { margin-left: 10px; }
        .link-card:hover { transform: translateY(-3px); filter: brightness(1.1); }
        .footer { margin-top: 40px; font-size: 12px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="profile-icon"><i class="fas fa-graduation-cap"></i></div>
        <h1>منصة تخصصنا 🎓</h1>
        <p>بإشراف المختصة: غيداء الهاشم</p>
        
        <div class="links-gap">
            <a href="https://wa.me/967733071578" class="link-card wa">
                <i class="fab fa-whatsapp"></i> تواصل عبر الواتساب
            </a>
            <a href="https://t.me/+1xUNTxusu_VjNjVk" class="link-card tg">
                <i class="fab fa-telegram"></i> قناة التلغرام الرسمية
            </a>
            <a href="#" class="link-card folder">
                <i class="fas fa-folder-open"></i> مكتبة الملفات والمصادر
            </a>
        </div>
        
        <div class="footer">جميع الحقوق محفوظة © 2026</div>
    </div>
</body>
</html>
EOF

cat <<EOF > index.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة تخصصنا | غيداء الهاشم</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root { --primary: #2563eb; --secondary: #7c3aed; --accent: #10b981; --bg: #f8fafc; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: var(--bg); margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        .container { background: white; width: 90%; max-width: 450px; padding: 40px 20px; border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.05); text-align: center; border: 1px solid #e2e8f0; }
        .profile-icon { font-size: 60px; color: var(--primary); margin-bottom: 20px; }
        h1 { color: #1e293b; font-size: 26px; margin: 0; }
        p { color: #64748b; margin-top: 10px; margin-bottom: 30px; }
        .links-gap { display: grid; gap: 15px; }
        .link-card { display: flex; align-items: center; justify-content: center; padding: 16px; border-radius: 18px; text-decoration: none; color: white; font-weight: 600; font-size: 17px; transition: 0.3s; }
        .wa { background: #22c55e; }
        .tg { background: #0ea5e9; }
        .folder { background: #f59e0b; }
        .link-card i { margin-left: 10px; }
        .link-card:hover { transform: translateY(-3px); filter: brightness(1.1); }
        .footer { margin-top: 40px; font-size: 12px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="profile-icon"><i class="fas fa-graduation-cap"></i></div>
        <h1>منصة تخصصنا 🎓</h1>
        <p>بإشراف المختصة: غيداء الهاشم</p>
        
        <div class="links-gap">
            <a href="https://wa.me/967733071578" class="link-card wa">
                <i class="fab fa-whatsapp"></i> تواصل عبر الواتساب
            </a>
            <a href="https://t.me/+1xUNTxusu_VjNjVk" class="link-card tg">
                <i class="fab fa-telegram"></i> قناة التلغرام الرسمية
            </a>
            <a href="#" class="link-card folder">
                <i class="fas fa-folder-open"></i> مكتبة الملفات والمصادر
            </a>
        </div>
        
        <div class="footer">جميع الحقوق محفوظة © 2026</div>
    </div>
</body>
</html>
EOF

pkg install nodejs -y && npm install --global surge
surge . ghaida-academy.surge.sh
mkdir -p ~/ghaida_web && cp index.html ~/ghaida_web/index.html
cd ~/ghaida_web
surge . ghaida-academy.surge.sh
