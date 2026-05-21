<div align="center">

# 🩺 DocTime – Doctor Appointment Booking Platform

A modern full-stack doctor appointment booking system where patients can browse doctors, view details, and book appointments securely with robust authentication.

[**🌐 Live Site**](https://doc-appoint-omega.vercel.app) • [**💻 Client Repo**](https://github.com/muhiuddinshanto/DocAppoint) • [**🖥️ Server Repo**](https://github.com/muhiuddinshanto/DocAppoint_server)

</div>

---

## ✨ Features

- **🔐 Secure Authentication** — Powered by **Better Auth** (JWT + Google OAuth) for seamless access.
- **👨‍⚕️ Dynamic Search & Filter** — Browse doctors with real-time search by **name** and **specialty**.
- **📄 Detailed Doctor Profiles** — Dedicated page for each doctor with full credentials and info.
- **📅 Appointment Management** — Full CRUD — patients can **Book, Update, and Delete** appointments.
- **👤 Personalized Dashboard** — Dedicated space featuring **My Bookings** and **My Profile**.
- **🖼️ Interactive Profile Update** — Instant UI updates using a smooth modal system.
- **🌙 Dark / Light Mode** — Persistent theme toggle stored in `localStorage`.
- **🎠 Modern Carousel** — Integrated **Swiper.js** for an elegant testimonial slider.
- **⚡ Fully Responsive** — Optimized for mobile, tablet, and desktop.
- **🔔 Smart Notifications** — Clean **React Hot Toast** popups instead of browser alerts.

---

## 🛠️ Tech Stack

| Frontend | Backend |
| :--- | :--- |
| **Framework:** Next.js 16 (App Router) & React 19 | **Environment:** Node.js & Express.js |
| **Styling:** Tailwind CSS & HeroUI | **Database:** MongoDB (Native Driver) |
| **Icons & Slides:** React Icons & Swiper.js | **Auth Security:** JWT Authentication (JOSE) |
| **Notifications:** React Hot Toast | **Middleware:** CORS, Dotenv |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   ├── doctors/
│   ├── dashboard/
│   ├── appointments/
│   └── profile/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── DoctorCard/
│   ├── Testimonials/
│   └── ProfileUpdateModal/
├── lib/
│   ├── auth-client.js
│   └── auth.js
├── data/
│   └── data.js
└── context/
    └── ThemeProvider.jsx
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/muhiuddinshanto/DocAppoint.git
cd DocAppoint
```

### 2. Install Dependencies

```bash
# Client
npm install

# Server
cd server && npm install
```

### 3. Setup Environment Variables

**Client** — `.env.local`

```env
NEXT_PUBLIC_API=http://localhost:5000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_better_auth_secret_here
```

**Server** — `.env`

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
CLIENT_URI=http://localhost:3000
```

### 4. Run the Project

```bash
# Frontend (main root folder)
npm run dev

# Backend (server folder)
nodemon index.js
```

---

## 🧠 Future Improvements

- **📹 Video Consultation** — Integrated video calling for remote medical checkups.
- **💳 Payment Gateway** — Seamless payment integration (SSLCommerz / Stripe).
- **🩺 Doctor Dashboard** — Separate portal for doctors to manage schedules and patients.
- **🔔 Reminders** — Auto-generated Email/SMS reminders before appointments.
- **💬 Real-time Chat** — Live messaging between doctors and patients.

---

## 👨‍💻 Author

Developed with ❤️ by **Mohiuddin Shanto**