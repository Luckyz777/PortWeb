---
name: portfolio-advanced
overview: พัฒนา personal portfolio บน Next.js 15 (App Router) ที่มีธีม/ภาษาอยู่แล้ว โดยเพิ่ม Contact form แบบ local-first (ไม่พึ่ง CMS ภายนอก) พร้อม validation, i18n, ความปลอดภัยขั้นพื้นฐาน และอัปเดต Playwright e2e ให้ครอบคลุมการใช้งานจริง.
todos:
  - id: contact-form-ui
    content: เพิ่ม Contact form UI ใน `components/sections/contact.tsx` (หรือย้ายเป็น `components/contact/ContactForm.tsx`) พร้อม validation บน client และ aria-live
    status: completed
  - id: contact-backend
    content: สร้าง backend endpoint สำหรับรับฟอร์ม (`app/api/contact/route.ts` หรือ Server Action) ทำ server-side validation + ส่งอีเมลผ่าน SMTP + รองรับ test mode
    status: completed
  - id: contact-i18n
    content: เพิ่มข้อความ label/error/success ใน `data/portfolio.ts` แล้วผูกกับ `useT()`
    status: completed
  - id: contact-security
    content: ใส่ honeypot/ขนาดข้อความ/กัน double-submit และ sanitize บน server
    status: completed
  - id: playwright-tests
    content: อัปเดต `tests/portfolio.spec.ts` ให้ทดสอบ render + validation + success โดย mock request/response
    status: completed
  - id: deploy-docs
    content: อัปเดต `DEPLOY.md` ด้วย environment variables ที่ต้องใช้สำหรับ SMTP/CONTACT_TO_EMAIL และ CONTACT_EMAIL_DISABLED
    status: completed
isProject: false
---

## เป้าหมาย (ตามที่คุณเลือก)

- ใช้สแต็กเดิม: `Next.js 15 App Router` + `Tailwind (v4 via app/globals.css)`
- ข้อมูลโปรเจกต์/คอนเทนต์เก็บแบบ local ในโค้ด (เช่น `data/portfolio.ts`)
- ปรับส่วน `Contact` จากลิงก์ `mailto/tel` เป็น `Contact form` ที่ส่งข้อความถึงอีเมล (ผ่าน backend ของโปรเจกต์)
- อัปเดต `Playwright` ให้ทดสอบ UI/validation/การตอบกลับได้ โดยไม่ต้องส่งอีเมลจริงระหว่างเทสต์

## สภาพปัจจุบันใน repo (ใช้เป็นฐาน)

- หน้า Portfolio หลัก: `[app/page.tsx](app/page.tsx)`
- Resume: `[app/resume/page.tsx](app/resume/page.tsx)`
- Project detail (case study): `[app/projects/[id]/page.tsx](app/projects/[id]/page.tsx)`
- Contact section ปัจจุบันเป็น client component และใช้ `mailto/tel` อยู่: `[components/sections/contact.tsx](components/sections/contact.tsx)`
- Data และ i18n copy รวมอยู่ในไฟล์เดียว: `[data/portfolio.ts](data/portfolio.ts)`
- Theme + i18n provider: `[lib/theme.tsx](lib/theme.tsx)`, `[lib/i18n.tsx](lib/i18n.tsx)`
- Test e2e มีอยู่แล้ว: `[tests/portfolio.spec.ts](tests/portfolio.spec.ts)`

## แผนงาน (Milestones)

### 1. วาง flow ของ Contact form (UI -> Backend -> Success/Error)

- ออกแบบ UX ของฟอร์มให้รองรับ EN/TH และ accessibility:
  - มี `label` ชัดเจน, แสดง error แบบอ่านรู้เรื่อง, ใช้ `aria-live` กับข้อความ error/success
  - จำกัดความยาว input และ sanitize ข้อความฝั่งเซิร์ฟเวอร์
- เลือกวิธีส่งข้อมูล:
  - (แนะนำ) ใช้ `Server Action` หรือ `Route Handler` ฝั่ง `app/` เพื่อ validate แล้วส่งอีเมล
- Diagram การไหล:

```mermaid
flowchart LR
  User[User] -->|กรอกฟอร์มและกดส่ง| ContactUI[Contact UI]
  ContactUI -->|POST/Action| ContactAPI[Contact Backend]
  ContactAPI -->|ส่งอีเมลหรือจำลองใน test mode| Email[Email provider (SMTP/skip in tests)]
  ContactAPI -->|JSON result| ContactUI
  ContactUI -->|แสดงสถานะสำเร็จ/ข้อผิดพลาด| User
```



### 2. เพิ่ม Contact form UI ใน `ContactSection`

- แก้ไฟล์: `[components/sections/contact.tsx](components/sections/contact.tsx)`
  - คง panel “Direct Contact” (mailto/tel) ไว้ได้ แต่เพิ่ม/เปลี่ยนเป็นฟอร์ม
  - สร้าง component ใหม่เช่น `components/contact/ContactForm.tsx` (client)
- ฟอร์มประกอบด้วย (อย่างน้อย):
  - `name` (required)
  - `email` (required)
  - `message` (required)
  - (กันสแปมแบบเบื้องต้น) `honeypot` field ที่ซ่อนไว้ + ตรวจ `submittedAt`/ความยาว
- ตอบกลับใน UI:
  - success: toast/ข้อความบนฟอร์ม
  - error: แสดง field-level validation (เช่น email format, required)

### 3. สร้าง backend สำหรับรับฟอร์ม + validation + ส่งอีเมล

- เพิ่มไฟล์ฝั่ง backend (เลือกอย่างใดอย่างหนึ่ง):
  - `app/api/contact/route.ts` หรือ
  - `app/actions/contact.ts`
- หน้าที่ backend:
  - รับ payload จากฟอร์ม
  - validate (เช่น required, length, email regex)
  - sanitize message (กัน header injection / script injection)
  - ส่งอีเมลไปยัง `profile.email` หรือ `copy.cta.mailto`
- วิธีส่งอีเมล (local-first):
  - ใช้ SMTP ผ่าน env vars (แนะนำ): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL`
  - หลีกเลี่ยงการ “โพสต์ไป external API” แบบไม่จำเป็น: ให้ส่งผ่าน SMTP เท่านั้น
- เพิ่ม “test mode”:
  - ถ้า env `CONTACT_EMAIL_DISABLED=true` ให้ไม่ส่งจริง แต่ตอบกลับ success เพื่อให้ e2e ทำงานได้

### 4. เพิ่มข้อความ i18n สำหรับฟอร์ม

- แก้ไฟล์: `[data/portfolio.ts](data/portfolio.ts)`
  - เพิ่ม key ใน `copy.contact` สำหรับ label/error/button/success
- อัปเดต `ContactForm` ให้ใช้ `useT()` เพื่อดึงข้อความ EN/TH

### 5. Security & Spam mitigation (ระดับพื้นฐานที่ implement ง่าย)

- Server-side:
  - จำกัด size ของ `message`
  - honeypot field (bot มักกรอก)
  - rate limiting แบบง่ายในหน่วยความจำเฉพาะ dev (ถ้าจะทำ) และอย่างน้อยบันทึก timestamp ต่อ IP (ใน route handler)
- Client-side:
  - ปิดปุ่มส่งระหว่างกำลัง submit เพื่อกัน double submit

### 6. อัปเดต Playwright e2e ให้ครอบคลุม Contact form

- แก้ไฟล์: `[tests/portfolio.spec.ts](tests/portfolio.spec.ts)`
  - เพิ่ม test สำหรับ:
    - render ฟอร์มมี input/ปุ่ม
    - submit ว่างแล้วแสดง error
    - submit ข้อมูลถูกต้องแล้วแสดง success
    - (แนะนำ) mock network ระหว่างเทสต์ เช่น intercept `**/api/contact` แล้ว return `{ ok: true }` เพื่อไม่ต้องส่งอีเมลจริง
- ใช้ benefit จาก test infra เดิม: `webServer` มีอยู่แล้ว และ viewport/tabs ถูกครอบคลุม

### 7. อัปเดตเอกสารการ Deploy (ENV vars)

- แก้ไฟล์: `[DEPLOY.md](DEPLOY.md)` (หรือ README ถ้าต้อง)
  - เพิ่มหัวข้อ `Environment variables` สำหรับ SMTP/CONTACT_TO_EMAIL
  - ระบุ test mode ที่ใช้กับ e2e

## Acceptance criteria (สรุปให้ชัด)

- หน้า `#contact` แสดงฟอร์มที่ใช้งานได้จริง
- ส่งฟอร์มแล้วได้ feedback success/error ที่ถูกต้อง และรองรับ EN/TH
- Backend validate แล้วไม่ปล่อยข้อความอันตรายเข้าระบบ
- `npm run test:e2e` ผ่าน โดยไม่ต้องส่งอีเมลจริง

## ไฟล์ที่คาดว่าจะถูกแก้/เพิ่ม (ภาพรวม)

- แก้: `components/sections/contact.tsx`
- เพิ่ม: `components/contact/ContactForm.tsx` (หรือโครงสร้างใกล้เคียง)
- เพิ่ม: `app/api/contact/route.ts` หรือ `app/actions/contact.ts`
- แก้: `data/portfolio.ts` (i18n keys ของฟอร์ม)
- แก้: `tests/portfolio.spec.ts`
- แก้: `DEPLOY.md` (ENV vars)

