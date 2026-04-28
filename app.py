from flask import Flask, render_template_string

app = Flask(__name__)

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطبيق تخصصنا</title>
    <style>
        body { font-family: sans-serif; background: #f4f7f6; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .card { background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 85%; max-width: 400px; text-align: center; border-top: 8px solid #007bff; }
        h1 { color: #007bff; margin-bottom: 5px; }
        p { color: #555; font-size: 15px; margin-bottom: 25px; }
        .btn { display: block; padding: 12px; margin: 10px 0; border-radius: 12px; text-decoration: none; font-weight: bold; color: white; transition: 0.3s; }
        .btn-blue { background: #007bff; }
        .btn-green { background: #28a745; }
        .btn-orange { background: #fd7e14; }
        .footer { margin-top: 20px; font-size: 12px; color: #aaa; }
    </style>
</head>
<body>
    <div class="card">
        <h1>تطبيق تخصصنا 🎓</h1>
        <p>منصة الخدمات الطلابية والاستفسارات</p>
        
        <a href="https://wa.me/967000000000" class="btn btn-green">💬 تواصل مع المختصة (واتساب)</a>
        <a href="#" class="btn btn-blue">📖 دليل التخصصات</a>
        <a href="#" class="btn btn-orange">📁 المصادر الدراسية</a>
        
        <div class="footer">تم التطوير بواسطة المختصة غيداء عبر Termux</div>
    </div>
</body>
</html>
'''

@app.route('/')
def home():
    return render_template_string(HTML_TEMPLATE)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)
