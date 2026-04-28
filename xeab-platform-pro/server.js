// 🌐 منصة XEAB Pro - نسخة Termux المبسطة
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 🔧 حل مشكلة __dirname في ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 🛠️ إعدادات البيئة
const JWT_SECRET = process.env.JWT_SECRET || 'xeab-secret-key-2024';
const PORT = process.env.PORT || 5000;

// ----------------------------------------------------
// 💻 إعداد Express Server
// ----------------------------------------------------

const app = express();
app.use(cors());
app.use(express.json());

// إعداد مجلد التحميلات
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use('/uploads', express.static(uploadsDir));

// ----------------------------------------------------
// 🗃️ قاعدة البيانات المؤقتة
// ----------------------------------------------------

let users = [];
let services = [];
let orders = [];

// إضافة بيانات تجريبية
users.push({
  id: "1",
  name: "أحمد محمد",
  email: "ahmed@test.com", 
  password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password
  phone: "123456789",
  userType: "student",
  createdAt: new Date()
});

services.push({
  id: "1",
  title: "إعداد بحوث جامعية",
  description: "إعداد بحوث علمية دقيقة ومنهجية لطلاب الجامعات",
  category: "بحوث",
  price: 100,
  providerId: "2", 
  providerName: "د. محمد علي",
  imageUrl: null,
  createdAt: new Date()
});

// ----------------------------------------------------
// 🛡️ Middleware: حماية المسارات
// ----------------------------------------------------

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'مطلوب توكن مصادقة.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find(u => u.id === decoded.userId);
    
    if (!user) {
      return res.status(401).json({ success: false, message: 'المستخدم غير موجود.' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'توكن غير صالح.' });
  }
};

// ----------------------------------------------------
// 🔐 المسارات العامة
// ----------------------------------------------------

// 🏠 الصفحة الرئيسية
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 مرحباً بكم في منصة XEAB Pro!',
    version: '2.0.0',
    status: 'يعمل بنجاح',
    endpoints: [
      'GET  /              - الصفحة الرئيسية',
      'POST /api/register   - تسجيل مستخدم جديد',
      'POST /api/login      - تسجيل الدخول', 
      'GET  /api/services   - عرض الخدمات',
      'GET  /api/stats      - إحصائيات المنصة'
    ]
  });
});

// 📊 إحصائيات المنصة
app.get('/api/stats', (req, res) => {
  const stats = {
    totalUsers: users.length,
    totalServices: services.length,
    totalOrders: orders.length,
    activeUsers: users.length
  };
  
  res.json({ success: true, stats });
});

// 👤 تسجيل مستخدم جديد
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, phone, userType = 'student' } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'الاسم، البريد الإلكتروني وكلمة المرور مطلوبة.' 
      });
    }

    // التحقق من وجود المستخدم
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني مسجل مسبقاً.' 
      });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // إنشاء المستخدم
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      phone: phone || '',
      userType: userType === 'provider' ? 'provider' : 'student',
      createdAt: new Date()
    };
    
    users.push(newUser);
    
    // إنشاء توكن
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email }, 
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({ 
      success: true, 
      message: 'تم إنشاء الحساب بنجاح',
      token,
      user: { 
        id: newUser.id, 
        name, 
        email, 
        userType: newUser.userType 
      }
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'خطأ في إنشاء الحساب'
    });
  }
});

// 🔐 تسجيل الدخول
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني وكلمة المرور مطلوبان.' 
      });
    }
    
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' 
      });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' 
      });
    }
    
    const token = jwt.sign(
      { userId: user.id, email: user.email }, 
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      message: 'تم تسجيل الدخول بنجاح',
      token,
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        userType: user.userType 
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'خطأ في تسجيل الدخول'
    });
  }
});

// 📦 الخدمات
app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    services: services.map(service => ({
      id: service.id,
      title: service.title,
      description: service.description,
      category: service.category,
      price: service.price,
      providerName: service.providerName
    }))
  });
});

// 👤 معلومات المستخدم
app.get('/api/me', authMiddleware, (req, res) => {
  const { id, name, email, userType } = req.user;
  res.json({
    success: true,
    user: { id, name, email, userType }
  });
});

// ----------------------------------------------------
// 🏁 بدء التشغيل
// ----------------------------------------------------

app.listen(PORT, () => {
  console.log(`🎯 سيرفر XEAB Pro يعمل على المنفذ ${PORT}`);
  console.log(`📱 http://localhost:${PORT}`);
  console.log('✅ جاهز لاستقبال الطلبات...');
  console.log(`👤 مستخدم تجريبي: ahmed@test.com / password`);
});
