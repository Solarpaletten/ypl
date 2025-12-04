# 🚀 YPL Next Version Plan

**Version Planning Document** | Last Updated: January 2025

---

## 📋 Overview

This document outlines the development roadmap from YPL v1.0 (current) to v1.4, detailing features, technical requirements, and implementation priorities.

---

## 📊 Version Timeline

```
═══════════════════════════════════════════════════════════════════════════════
  v1.0           v1.1           v1.2           v1.3           v1.4
  Landing        Routes         AI Engine      User Auth      Billing
  ───────        ───────        ─────────      ──────────     ────────
  [████████]     [░░░░░░░░]     [░░░░░░░░]     [░░░░░░░░]     [░░░░░░░░]
  CURRENT        NEXT           PLANNED        PLANNED        PLANNED
  Jan 2025       Feb 2025       Mar 2025       Apr 2025       May 2025
═══════════════════════════════════════════════════════════════════════════════
```

---

## ✅ Version 1.0 — Landing (CURRENT)

**Status**: ✅ COMPLETED

### Deliverables

| Item | Status |
|------|--------|
| Domain ypl.app | ✅ |
| Landing page | ✅ |
| Next.js setup | ✅ |
| Vercel deploy | ✅ |
| Documentation | ✅ |
| CI/CD pipeline | ✅ |

### Tech Stack

```
Frontend:   Next.js 14 + TypeScript + Tailwind
Backend:    Node.js + Express (placeholder)
Hosting:    Vercel
Domain:     ypl.app (Namecheap)
```

---

## 🟣 Version 1.1 — Routes & Pages

**Status**: 📋 NEXT  
**ETA**: February 2025  
**Priority**: 🔥 HIGH

### New Routes

```
/ypl.app
├── /                    # Landing (existing)
├── /login               # User login page
├── /register            # User registration
├── /dashboard           # Main user dashboard
├── /dashboard/settings  # User settings
├── /dashboard/projects  # User projects
└── /api
    ├── /api/health      # Health check
    ├── /api/init        # App initialization
    └── /api/status      # System status
```

### Features

| Feature | Description | Priority |
|---------|-------------|----------|
| `/login` | Email/password login form | HIGH |
| `/register` | Registration with validation | HIGH |
| `/dashboard` | Protected user area | HIGH |
| `/api/init` | App bootstrap endpoint | MEDIUM |
| Middleware | Auth protection for routes | HIGH |
| Loading states | Skeleton loaders | MEDIUM |
| Error pages | 404, 500 custom pages | MEDIUM |

### Technical Tasks

```typescript
// app/login/page.tsx
export default function LoginPage() {
  // - Email input
  // - Password input
  // - Remember me checkbox
  // - Forgot password link
  // - Submit button
  // - Social login buttons (prep for v1.3)
}

// app/dashboard/page.tsx
export default function DashboardPage() {
  // - Protected route (redirect if not logged in)
  // - User greeting
  // - Quick stats
  // - Recent activity
  // - Navigation sidebar
}

// app/api/init/route.ts
export async function GET() {
  return Response.json({
    version: '1.1.0',
    status: 'operational',
    features: ['routes', 'api'],
    timestamp: new Date().toISOString()
  });
}
```

### File Structure v1.1

```
/frontend/app
├── page.tsx                 # Landing
├── layout.tsx               # Root layout
├── globals.css
├── /login
│   └── page.tsx             # NEW
├── /register
│   └── page.tsx             # NEW
├── /dashboard
│   ├── page.tsx             # NEW
│   ├── layout.tsx           # NEW (dashboard layout)
│   ├── /settings
│   │   └── page.tsx         # NEW
│   └── /projects
│       └── page.tsx         # NEW
├── /api
│   ├── /health
│   │   └── route.ts         # NEW
│   ├── /init
│   │   └── route.ts         # NEW
│   └── /status
│       └── route.ts         # NEW
└── not-found.tsx            # NEW (404 page)
```

### Dependencies to Add

```json
{
  "dependencies": {
    "zod": "^3.22.0",           // Form validation
    "react-hook-form": "^7.49.0" // Form handling
  }
}
```

### Acceptance Criteria

- [ ] `/login` renders login form
- [ ] `/register` renders registration form
- [ ] `/dashboard` is protected (redirects to login)
- [ ] `/api/init` returns JSON status
- [ ] 404 page displays custom design
- [ ] All routes mobile-responsive

---

## 🟣 Version 1.2 — AI Engine

**Status**: 📋 PLANNED  
**ETA**: March 2025  
**Priority**: 🔥 HIGH

### Core Components

```
AI Engine Architecture
═══════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────┐
│                   AI ENGINE v1.2                    │
└─────────────────────────────────────────────────────┘
                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
     ▼                   ▼                   ▼
┌─────────┐        ┌─────────┐        ┌─────────┐
│ Whisper │        │   GPT   │        │  Token  │
│  (STT)  │        │ Engine  │        │ Manager │
└─────────┘        └─────────┘        └─────────┘
     │                   │                   │
     └───────────────────┼───────────────────┘
                         │
                         ▼
              ┌─────────────────┐
              │   API Gateway   │
              │  /api/ai/*      │
              └─────────────────┘
```

### Modules

#### 1. Whisper Integration (Speech-to-Text)

```typescript
// /api/ai/whisper/route.ts
interface WhisperRequest {
  audio: Blob;           // Audio file
  language?: string;     // Optional language hint
  prompt?: string;       // Optional context
}

interface WhisperResponse {
  text: string;          // Transcribed text
  language: string;      // Detected language
  duration: number;      // Audio duration
  confidence: number;    // Confidence score
}
```

**Features:**
- Audio file upload (mp3, wav, m4a)
- Real-time streaming transcription
- Multiple language support
- Confidence scoring

#### 2. GPT Engine

```typescript
// /api/ai/chat/route.ts
interface ChatRequest {
  messages: Message[];
  model?: 'gpt-4' | 'gpt-3.5-turbo' | 'claude';
  temperature?: number;
  max_tokens?: number;
}

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}
```

**Features:**
- Multi-model support (GPT-4, Claude)
- Streaming responses
- Context management
- Rate limiting

#### 3. Secure Token Manager

```typescript
// /lib/ai/token-manager.ts
class TokenManager {
  private encryptedKeys: Map<string, string>;
  
  async getKey(provider: 'openai' | 'anthropic'): Promise<string>;
  async rotateKey(provider: string): Promise<void>;
  async validateKey(key: string): Promise<boolean>;
}
```

**Features:**
- Encrypted API key storage
- Key rotation support
- Usage tracking
- Rate limit management

### API Endpoints v1.2

```
/api/ai
├── /chat           # GPT chat completion
├── /whisper        # Speech-to-text
├── /embeddings     # Text embeddings
├── /models         # List available models
└── /usage          # API usage stats
```

### Environment Variables

```env
# .env.local
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
AI_RATE_LIMIT=100        # requests per minute
AI_MAX_TOKENS=4096
ENCRYPTION_KEY=...       # For token encryption
```

### Dependencies to Add

```json
{
  "dependencies": {
    "openai": "^4.20.0",
    "ai": "^2.2.0",            // Vercel AI SDK
    "@anthropic-ai/sdk": "^0.9.0"
  }
}
```

### Acceptance Criteria

- [ ] `/api/ai/chat` returns streaming response
- [ ] `/api/ai/whisper` transcribes audio files
- [ ] API keys encrypted at rest
- [ ] Rate limiting functional
- [ ] Usage tracking operational

---

## 🟣 Version 1.3 — User Accounts

**Status**: 📋 PLANNED  
**ETA**: April 2025  
**Priority**: 🔥 HIGH

### Authentication Methods

```
┌─────────────────────────────────────────────────────┐
│              AUTHENTICATION v1.3                    │
└─────────────────────────────────────────────────────┘
                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
     ▼                   ▼                   ▼
┌─────────┐        ┌─────────┐        ┌─────────┐
│   JWT   │        │  OAuth  │        │  Email  │
│  Token  │        │ Google  │        │  Code   │
└─────────┘        └─────────┘        └─────────┘
```

### 1. JWT Authentication

```typescript
// /lib/auth/jwt.ts
interface JWTPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin';
  iat: number;
  exp: number;
}

// Token lifecycle
Access Token:  15 minutes
Refresh Token: 7 days
```

**Features:**
- Short-lived access tokens
- Refresh token rotation
- Secure HTTP-only cookies
- Token revocation

### 2. OAuth Google

```typescript
// /api/auth/google/route.ts
// OAuth 2.0 flow with Google

// Required scopes
const SCOPES = [
  'openid',
  'email',
  'profile'
];
```

**Features:**
- One-click Google sign-in
- Profile picture sync
- Email verification bypass
- Account linking

### 3. Email Code Login (Passwordless)

```typescript
// /api/auth/magic-link/route.ts
interface MagicLinkRequest {
  email: string;
}

// Flow:
// 1. User enters email
// 2. System sends 6-digit code
// 3. User enters code
// 4. System verifies and creates session
```

**Features:**
- 6-digit verification code
- 10-minute expiration
- Rate limiting (3 attempts)
- Resend cooldown (60 seconds)

### Database Schema

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  role VARCHAR(50) DEFAULT 'user',
  email_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Sessions table
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  token_hash VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- OAuth accounts
CREATE TABLE oauth_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  provider VARCHAR(50) NOT NULL,
  provider_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(provider, provider_id)
);
```

### API Endpoints v1.3

```
/api/auth
├── /login           # Email/password login
├── /register        # Create account
├── /logout          # End session
├── /refresh         # Refresh tokens
├── /google          # Google OAuth
├── /google/callback # OAuth callback
├── /magic-link      # Send email code
├── /verify-code     # Verify email code
├── /me              # Current user
└── /forgot-password # Password reset
```

### Dependencies to Add

```json
{
  "dependencies": {
    "next-auth": "^5.0.0",     // Or custom implementation
    "bcryptjs": "^2.4.3",
    "jose": "^5.2.0",          // JWT library
    "@prisma/client": "^5.8.0",
    "nodemailer": "^6.9.0",    // Email sending
    "resend": "^2.1.0"         // Alternative email
  }
}
```

### Acceptance Criteria

- [ ] Users can register with email/password
- [ ] Users can login with Google
- [ ] Passwordless email code works
- [ ] JWT tokens refresh correctly
- [ ] Protected routes enforce auth
- [ ] User profile page functional

---

## 🟣 Version 1.4 — Billing

**Status**: 📋 PLANNED  
**ETA**: May 2025  
**Priority**: 🔥 HIGH

### Stripe Integration

```
┌─────────────────────────────────────────────────────┐
│                  BILLING v1.4                       │
└─────────────────────────────────────────────────────┘
                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
     ▼                   ▼                   ▼
┌─────────┐        ┌─────────┐        ┌─────────┐
│ Stripe  │        │   API   │        │  Usage  │
│ Connect │        │  Keys   │        │ Billing │
└─────────┘        └─────────┘        └─────────┘
```

### 1. Stripe Connection

```typescript
// /lib/billing/stripe.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
});

// Products
const PRODUCTS = {
  FREE: 'free',
  PRO: 'price_xxx',      // $29/month
  BUSINESS: 'price_xxx'  // $99/month
};
```

### 2. Pricing Tiers

```
┌─────────────────┬─────────────────┬─────────────────┐
│      FREE       │       PRO       │    BUSINESS     │
├─────────────────┼─────────────────┼─────────────────┤
│   $0/month      │   $29/month     │   $99/month     │
├─────────────────┼─────────────────┼─────────────────┤
│ 100 AI calls    │ 5,000 AI calls  │ Unlimited       │
│ 1 project       │ 10 projects     │ Unlimited       │
│ Community       │ Email support   │ Priority support│
│ Basic features  │ All features    │ All features    │
│                 │                 │ API access      │
│                 │                 │ Custom branding │
└─────────────────┴─────────────────┴─────────────────┘
```

### 3. API Keys Management

```typescript
// /api/keys/route.ts
interface APIKey {
  id: string;
  name: string;
  key: string;           // Shown once: ypl_xxx
  prefix: string;        // ypl_xxx...xxx
  created_at: Date;
  last_used_at: Date;
  permissions: string[];
}

// Key format
// Live: ypl_live_xxxxxxxxxxxx
// Test: ypl_test_xxxxxxxxxxxx
```

### 4. Test Mode → Live Mode

```typescript
// Environment switching
interface BillingConfig {
  mode: 'test' | 'live';
  stripeKey: string;
  webhookSecret: string;
}

// Test mode
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

// Live mode
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### API Endpoints v1.4

```
/api/billing
├── /checkout        # Create checkout session
├── /portal          # Customer portal
├── /webhook         # Stripe webhooks
├── /subscription    # Current subscription
├── /invoices        # Invoice history
└── /usage           # Usage statistics

/api/keys
├── /create          # Generate new API key
├── /list            # List user's keys
├── /revoke          # Revoke a key
└── /rotate          # Rotate a key
```

### Database Schema Additions

```sql
-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  plan VARCHAR(50) DEFAULT 'free',
  status VARCHAR(50),
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- API Keys
CREATE TABLE api_keys (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(255),
  key_hash VARCHAR(255) NOT NULL,
  prefix VARCHAR(20),
  permissions JSONB DEFAULT '[]',
  last_used_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Usage tracking
CREATE TABLE usage (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(50),          -- 'ai_call', 'api_request'
  count INTEGER DEFAULT 1,
  period_start DATE,
  period_end DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Dependencies to Add

```json
{
  "dependencies": {
    "stripe": "^14.12.0",
    "@stripe/stripe-js": "^2.4.0"
  }
}
```

### Acceptance Criteria

- [ ] Stripe checkout works in test mode
- [ ] Subscription upgrades/downgrades work
- [ ] API keys can be generated
- [ ] Usage tracking operational
- [ ] Webhooks handle payment events
- [ ] Switch to live mode documented

---

## 📊 Summary Table

| Version | Focus | Key Features | ETA |
|---------|-------|--------------|-----|
| v1.0 | Landing | Domain, CI/CD, Docs | ✅ Done |
| v1.1 | Routes | /login, /dashboard, /api | Feb 2025 |
| v1.2 | AI | Whisper, GPT, Token Mgr | Mar 2025 |
| v1.3 | Auth | JWT, OAuth, Magic Link | Apr 2025 |
| v1.4 | Billing | Stripe, API Keys, Plans | May 2025 |

---

## 🎯 Next Steps

### Immediate (v1.1)

1. Create `/login` page structure
2. Create `/dashboard` layout
3. Implement API routes
4. Add form validation
5. Test deployment

### Preparation (v1.2)

1. Get OpenAI API key
2. Get Anthropic API key
3. Design AI interface
4. Plan rate limiting

---

## 📞 Contact

Version planning questions?

| Role | Contact |
|------|---------|
| Architect | Leanid |
| Tech Lead | Dashka |
| Engineer | Claude |

---

© 2025 YPL GRUP INC. All rights reserved.
