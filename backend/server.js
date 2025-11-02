const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// تخزين مؤقت للبيانات (سيتم استبداله بقاعدة بيانات لاحقاً)
let users = [];
let services = [];
let orders = [];

// إعداد multer لرفع الملفات
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// إنشاء مجلد uploads إذا لم يكن موجوداً
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// 🔐 Routes للمستخدمين
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, phone, userType = 'student' } = req.body;
    
    // التحقق من وجود المستخدم
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني مسجل مسبقاً' 
      });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // إنشاء المستخدم
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
      phone,
      userType,
      createdAt: new Date()
    };
    
    users.push(newUser);
    
    res.json({ 
      success: true, 
      message: 'تم إنشاء الحساب بنجاح',
      user: { id: newUser.id, name, email, userType }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'خطأ في إنشاء الحساب',
      error: error.message 
    });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' 
      });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        success: false, 
        message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' 
      });
    }
    
    // إنشاء token
    const token = jwt.sign(
      { userId: user.id, email: user.email }, 
      process.env.JWT_SECRET || 'xeab-secret-key',
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      message: 'تم تسجيل الدخول بنجاح',
      token,
      user: { id: user.id, name: user.name, email: user.email, userType: user.userType }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'خطأ في تسجيل الدخول',
      error: error.message 
    });
  }
});

// 📦 Routes للخدمات
app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    services: services.map(service => ({
      id: service.id,
      title: service.title,
      description: service.description,
      category: service.category,
      price: service.price,
      provider: service.provider
    }))
  });
});

app.post('/api/services', (req, res) => {
  try {
    const { title, description, category, price, providerId } = req.body;
    
    const newService = {
      id: services.length + 1,
      title,
      description,
      category,
      price,
      providerId,
      createdAt: new Date()
    };
    
    services.push(newService);
    
    res.json({
      success: true,
      message: 'تم إضافة الخدمة بنجاح',
      service: newService
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'خطأ في إضافة الخدمة',
      error: error.message 
    });
  }
});

// 🎯 Route أساسي للاختبار
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 مرحباً بكم في منصة XEAB التعليمية!',
    version: '1.0.0',
    status: 'يعمل بنجاح',
    features: [
      'التسجيل وتسجيل الدخول',
      'إدارة الخدمات',
      'رفع الملفات',
      'نظام طلبات'
    ],
    note: 'قاعدة البيانات مؤقتة في الذاكرة - سيتم إضافة SQLite لاحقاً'
  });
});

// بدء السيرفر
app.listen(PORT, () => {
  console.log(`🎯 سيرفر XEAB يعمل على المنفذ ${PORT}`);
  console.log(`📱 http://localhost:${PORT}`);
  console.log('✅ النظام يعمل بدون قاعدة بيانات (بيانات مؤقتة)');
});
