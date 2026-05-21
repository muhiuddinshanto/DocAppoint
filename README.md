<div align="center">

# 🩺 DocTime

**A modern full-stack doctor appointment booking platform**

DocTime lets patients browse doctors, view profiles, book appointments, and authenticate securely — all in one clean, responsive interface.

</div>

---

## ✨ Features

### 🔐 Authentication
- Email & password login / registration
- Google OAuth
- JWT-based session management via **Better Auth**
- Middleware-protected routes with automatic redirect

### 👨‍⚕️ Doctors
- Browse all doctors with card-based layout
- Search by name or specialty (MongoDB regex)
- Detailed doctor profile pages with dynamic SEO metadata

### 📅 Appointments
- Book, update, and cancel appointments
- View all appointments tied to the logged-in user

### 👤 Profile
- Update display name and profile photo
- Real-time UI updates with a clean modal interface

### 🎨 UI & UX
- Fully responsive — mobile, tablet, desktop
- Dark / Light theme toggle (persisted in localStorage)
- Smooth animations, HeroUI modals, Swiper testimonial slider

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js 16, React 19, Tailwind CSS, HeroUI, Swiper.js |
| **Backend** | Express.js, MongoDB |
| **Auth** | Better Auth (JWT plugin, Google OAuth, MongoDB adapter) |
| **Utilities** | React Icons, React Hot Toast, JOSE |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── login/
│   ├── register/
│   ├── doctors/
│   ├── dashboard/
│   └── profile/
├── components/
│   ├── Modal/
│   ├── Navbar/
│   ├── Testimonials/
│   └── ProfileUpdateModal/
├── context/
│   └── ThemeProvider/
├── data/
│   └── data.js
├── lib/
│   ├── auth.js
│   └── auth-client.js
└── proxy.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/muhiuddinshanto/DocAppoint
cd docappoint
```

### 2. Install dependencies

```bash
# Frontend
npm install

# Backend
cd server && npm install
```


### 3. Run the project

```bash
# Frontend
npm run dev

# Backend
nodemon index.js
```

---

## 🎯 Roadmap

- [ ] Payment integration
- [ ] Video consultation
- [ ] Admin dashboard
- [ ] Doctor dashboard
- [ ] Email notifications & appointment reminders
- [ ] Real-time chat
- [ ] Prescription system

---

## 👨‍💻 Author

Developed with ❤️ by **MuhiuddinShanto**

---
