# 🚀 YPL CORE v1.0

**The Future Starter Platform**

[![Deploy Status](https://img.shields.io/badge/status-pre--launch-yellow)](https://ypl.app)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org)

---

## 🏢 About

**YPL CORE** is the foundation platform developed by **YPL GRUP INC** (Florida, USA).

| Role | Team Member |
|------|-------------|
| Architect | Leanid |
| Senior Coordinator | Dashka |
| President (USA Office) | Vasil Siniahub |
| Engineer | Claude |

---

## 🌐 Links

| Resource | URL |
|----------|-----|
| **Production** | https://ypl.app |
| **Staging** | https://dev.ypl.app |
| **Repository** | https://github.com/Solarpaletten/ypl |

---

## 📁 Project Structure

```
/ypl
├── /frontend              # Next.js 14 application
│   ├── /app               # App Router pages
│   ├── /components        # React components
│   ├── /public            # Static assets
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── /backend               # API server (Express)
│   ├── server.js
│   └── package.json
│
├── /docs                  # Documentation
│   ├── ARCHITECTURE.md    # System architecture
│   ├── ROADMAP.md         # Development roadmap
│   ├── TEAM_PROTOCOL.md   # Communication protocol
│   ├── BRANCHING.md       # Git branching strategy
│   ├── DNS_SETUP.md       # Domain configuration
│   ├── GITHUB_PUSH_GUIDE.md
│   └── YPL_NEXT_VERSION_PLAN.md
│
├── vercel.json            # Vercel deployment config
├── LICENSE                # MIT License
└── README.md              # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Frontend Development

```bash
# Clone repository
git clone https://github.com/Solarpaletten/ypl.git
cd ypl

# Install dependencies
cd frontend
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
cd frontend
npm run build
npm start
```

---

## 🌿 Branching Strategy

| Branch | Environment | URL |
|--------|-------------|-----|
| `main` | Production | https://ypl.app |
| `dev` | Staging | https://dev.ypl.app |
| `feature/*` | Preview | *.vercel.app |

See [BRANCHING.md](./docs/BRANCHING.md) for details.

---

## 📊 Version Roadmap

| Version | Focus | Status |
|---------|-------|--------|
| v1.0 | Landing & Setup | ✅ Current |
| v1.1 | Routes & Pages | 📋 Next |
| v1.2 | AI Engine | 📋 Planned |
| v1.3 | User Auth | 📋 Planned |
| v1.4 | Billing | 📋 Planned |

See [YPL_NEXT_VERSION_PLAN.md](./docs/YPL_NEXT_VERSION_PLAN.md) for details.

---

## 📜 Documentation

| Document | Description |
|----------|-------------|
| [Architecture](./docs/ARCHITECTURE.md) | System design & modules |
| [Roadmap](./docs/ROADMAP.md) | Development phases |
| [Team Protocol](./docs/TEAM_PROTOCOL.md) | Communication rules |
| [Branching](./docs/BRANCHING.md) | Git workflow |
| [DNS Setup](./docs/DNS_SETUP.md) | Domain configuration |
| [Next Versions](./docs/YPL_NEXT_VERSION_PLAN.md) | v1.1-1.4 plan |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS |
| Backend | Node.js, Express |
| Hosting | Vercel |
| Domain | Namecheap (.app) |

---

## 📞 Contact

**YPL GRUP INC**  
4291 S. Tamiami Trail, Venice, FL 34293, USA  
Email: yplvenice@gmail.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

© 2025 YPL GRUP INC. All rights reserved.
