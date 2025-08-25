# TradeLens ⚡

**TradeLens** is your all-in-one platform to **trade, track, and stay updated on the financial markets**. Whether you're a beginner or a pro, TradeLens gives you real-time insights and data-driven guidance to make smarter financial decisions. 📈💰

---

## 🚀 Features

- **Real-time Market Updates** – Stay ahead with instant updates from Binance and Zerodha APIs.
- **Portfolio Tracking** – Monitor your investments and watch trends over time.
- **Microservices Architecture** – Built with scalability in mind using Next.js, Prisma, and Redis.
- **Seamless Experience** – Fast, responsive UI for both web and mobile platforms.
- **Notifications & Alerts** – Get notified about market changes instantly. 🔔

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Node.js, Express, Bun runtime (planned)
- **Database:** PostgreSQL with Prisma ORM
- **Caching & Messaging:** Redis
- **APIs:** Binance API, Zerodha API
- **Other:** Docker for containerization, Microservices architecture

---

## ⚡ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/TradeLens.git
cd TradeLens
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up Prisma**
```bash
bunx prisma generate
```

4. **Configure environment variables** in `.env` for database and API keys.

5. **Run the application**
```bash
bun run dev
```

---

## 📂 Project Structure

```
TradeLens/
├─ frontend/       # Next.js frontend
├─ backend/        # Node.js / Bun backend with microservices
├─ prisma/         # Database schema & migrations
├─ services/       # Microservices modules
└─ README.md
```

---

## 🤝 Contributing

We welcome contributions! Please follow the standard Git workflow:

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m "feat(scope): your message"`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request  

---

## 📜 License

MIT License © 2025 LAKHANPAL MANIK

