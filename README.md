# 🎓 Alumni Networking Platform

## 📌 Overview
The *Alumni Networking Platform* is a *SaaS-based* web application designed to connect students with alumni for career guidance, networking, and mentorship. It includes *real-time chat*, event management, knowledge sharing, and a video call scheduling system.

## 🚀 Features
### 🔹 User Authentication
- Separate *Student* and *Alumni* logins
- Secure authentication with *JWT & Multi-Factor Authentication* (MFA)

### 🔹 Chat System
- *Real-time messaging* using WebSockets or Firebase Firestore
- *Career-based alumni search* to find relevant alumni
- *No video calls inside chat* (for privacy)

### 🔹 Events & Scheduling
- Alumni can *create career guidance sessions & webinars*
- Students receive *notifications & RSVP options*
- *Scheduled Video Calls*: Students request a call, and alumni approve & schedule it

### 🔹 Knowledge Hub
- Alumni post *industry insights & learning resources*
- Students can *browse blogs & guides*

### 🔹 Alumni Recognition
- *Badging System & Leaderboard* for top contributors
- Colleges can offer *gifts & incentives* for active alumni

### 🔹 AI-Powered Chatbot
- Integrated *Gemini Free API chatbot* for support & career guidance
- Appears as a *floating window* in the bottom left corner

## 🛠 Tech Stack
- *Frontend:* HTML, CSS, JavaScript / React.js
- *Backend:* Node.js (Express.js) + MongoDB / PostgreSQL
- *Authentication:* JWT, Multi-Factor Authentication
- *Hosting:* Vercel (Frontend) + Render/Railway (Backend)

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
sh
 git clone https://github.com/yourusername/alumni-network-platform.git
 cd alumni-network-platform


### 2️⃣ Install Dependencies
sh
npm install  # Install backend dependencies
cd frontend && npm install  # Install frontend dependencies (if using React)


### 3️⃣ Configure Environment Variables
Create a .env file in the backend folder:
env
MONGODB_URI=your_database_url
JWT_SECRET=your_secret_key


### 4️⃣ Run the Application
sh
# Start backend
npm start

# Start frontend (if using React)
npm run dev


## 🚀 Deployment
- *Frontend:* Deploy on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
- *Backend:* Deploy on [Render](https://render.com/) or [Railway](https://railway.app/)

## 📜 License
This project is open-source. You can modify and distribute it freely.

---
### 💡 Future Enhancements
✅ LinkedIn Integration  
✅ Mobile App (Flutter)  
✅ AI Resume Review System  

📢 *Contributions are welcome!* Fork the repo, make changes, and submit a pull request. 😊
