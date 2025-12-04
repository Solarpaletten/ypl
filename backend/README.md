# ⚙️ YPL Backend

**API Server for YPL CORE Platform**

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev

# Run production server
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api` | API information |
| GET | `/api/status` | Platform status |

---

## 🔧 Environment Variables

```env
PORT=3001
NODE_ENV=development
```

---

## 📁 Structure

```
/backend
├── server.js        # Main server file
├── /routes          # API routes (future)
├── /controllers     # Business logic (future)
├── /models          # Data models (future)
├── /middleware      # Custom middleware (future)
└── package.json
```

---

## 🔐 Security

Built-in security features:
- **Helmet.js** - Security headers
- **CORS** - Cross-origin protection
- **Rate limiting** - Coming soon

---

## 📊 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Security**: Helmet, CORS
- **Logging**: Morgan

---

© 2025 YPL GRUP INC
