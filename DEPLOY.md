# Deploy แบบ public link และเก็บ source code เป็น private

วิธีที่แนะนำสำหรับ portfolio นี้:

1. สร้าง GitHub repository ใหม่เป็น **Private**
2. Push โฟลเดอร์ `industrial-portfolio` นี้ขึ้น repo นั้นเท่านั้น
3. เข้า Vercel แล้วเลือก **Add New Project**
4. Import private GitHub repo ที่สร้างไว้
5. ใช้ค่า default ของ Vercel สำหรับ Next.js แล้วกด Deploy

ผลลัพธ์:

- คนทั่วไปเปิดดูเว็บผ่าน Vercel public link ได้
- คนทั่วไปจะไม่เห็น source code ใน GitHub เพราะ repo เป็น private
- แต่ frontend ที่ browser โหลดไปแล้ว เช่น HTML/CSS/JS บางส่วน ยังดูหรือ copy ได้ผ่าน DevTools ตามธรรมชาติของเว็บทุกเว็บ

ห้าม push ทั้งโฟลเดอร์ `Downloads` ขึ้น GitHub เพราะมีไฟล์ส่วนตัวจำนวนมากอยู่ด้านนอกโปรเจกต์นี้
