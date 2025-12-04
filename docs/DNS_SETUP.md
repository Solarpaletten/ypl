# 🌐 DNS Setup Guide for ypl.app

**ТЗ #YPL-CORE-SETUP-01 — Пункт 1: DNS Configuration**

---

## 📋 Overview

This guide covers DNS configuration for ypl.app domain on Namecheap, optimized for Vercel deployment.

---

## 🔧 Required DNS Records

### Step 1: Login to Namecheap

1. Go to [namecheap.com](https://www.namecheap.com)
2. Login to your account
3. Navigate to: **Domain List** → **ypl.app** → **Manage**
4. Click: **Advanced DNS**

---

### Step 2: Configure A Records

**For Vercel deployment:**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | Automatic |

> **Note**: `@` means the root domain (ypl.app)

---

### Step 3: Configure CNAME Records

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | Automatic |
| CNAME | dev | cname.vercel-dns.com | Automatic |

---

### Step 4: Email/SPF Records (for future email)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | @ | v=spf1 include:_spf.google.com ~all | Automatic |

> **Note**: This is a placeholder for future Google Workspace integration

---

### Step 5: Domain Verification (placeholders)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | @ | google-site-verification=PLACEHOLDER | Automatic |
| TXT | @ | _dmarc.ypl.app | Automatic |

---

## 📊 Complete DNS Table

```
╔══════════╦══════════╦═══════════════════════════════════════╦═══════════╗
║ Type     ║ Host     ║ Value                                 ║ TTL       ║
╠══════════╬══════════╬═══════════════════════════════════════╬═══════════╣
║ A        ║ @        ║ 76.76.21.21                           ║ Automatic ║
║ CNAME    ║ www      ║ cname.vercel-dns.com                  ║ Automatic ║
║ CNAME    ║ dev      ║ cname.vercel-dns.com                  ║ Automatic ║
║ TXT      ║ @        ║ v=spf1 include:_spf.google.com ~all   ║ Automatic ║
╚══════════╩══════════╩═══════════════════════════════════════╩═══════════╝
```

---

## 🔄 DNS Propagation

After saving changes:

1. **Wait time**: 5 minutes to 48 hours (usually ~30 minutes)
2. **Check propagation**: Use [dnschecker.org](https://dnschecker.org)
3. **Verify**: Run `dig ypl.app` or `nslookup ypl.app`

### Check Commands

```bash
# Check A record
dig ypl.app A +short
# Expected: 76.76.21.21

# Check CNAME
dig www.ypl.app CNAME +short
# Expected: cname.vercel-dns.com

# Check all records
dig ypl.app ANY
```

---

## 🔐 SSL/HTTPS Configuration

### .app Domain Requirements

The `.app` TLD requires HTTPS. All .app domains are on the HSTS preload list.

**What this means:**
- HTTP connections are automatically redirected to HTTPS
- Browsers will ONLY connect via HTTPS
- You MUST have a valid SSL certificate

### SSL Options

| Option | Cost | Recommended |
|--------|------|-------------|
| Vercel Auto SSL | FREE | ✅ Yes |
| Let's Encrypt | FREE | ✅ Yes |
| Cloudflare SSL | FREE | ✅ Yes |
| Namecheap SSL | $5.99/yr | ❌ Not needed |

**Recommendation**: Use Vercel's automatic SSL (free, auto-renewing)

---

## 🚀 Vercel Domain Setup

### Step 1: Add Domain in Vercel

1. Go to [vercel.com](https://vercel.com)
2. Select your project (ypl-core)
3. Go to: **Settings** → **Domains**
4. Click: **Add Domain**
5. Enter: `ypl.app`
6. Click: **Add**

### Step 2: Verify DNS

Vercel will show verification status:

```
✅ Valid Configuration
   ypl.app → Vercel
   
✅ SSL Certificate
   Issued and active
```

### Step 3: Add Subdomains

Repeat for:
- `www.ypl.app` (redirect to ypl.app)
- `dev.ypl.app` (staging environment)

---

## 📊 Expected Configuration

After setup, your domains should work as:

| URL | Environment | Branch |
|-----|-------------|--------|
| https://ypl.app | Production | main |
| https://www.ypl.app | Redirect → ypl.app | - |
| https://dev.ypl.app | Staging | dev |

---

## ⚠️ Troubleshooting

### Issue: "DNS not configured"

**Solution:**
1. Wait for propagation (up to 48h)
2. Verify A record points to `76.76.21.21`
3. Check for typos in DNS values

### Issue: "SSL certificate error"

**Solution:**
1. Wait 24h for Vercel to issue certificate
2. Ensure DNS points to Vercel IPs
3. Check HSTS settings

### Issue: "www redirect not working"

**Solution:**
1. Add CNAME: `www` → `cname.vercel-dns.com`
2. In Vercel: Set www.ypl.app to redirect to ypl.app

---

## ✅ Verification Checklist

```
[ ] A record: @ → 76.76.21.21
[ ] CNAME: www → cname.vercel-dns.com
[ ] CNAME: dev → cname.vercel-dns.com
[ ] TXT: SPF record added
[ ] DNS propagation complete
[ ] SSL certificate active
[ ] https://ypl.app loads
[ ] https://www.ypl.app redirects
[ ] https://dev.ypl.app loads (staging)
```

---

## 📞 Support

Issues with DNS?
- **Namecheap Support**: support.namecheap.com
- **Vercel Support**: vercel.com/support
- **Team**: Escalate via D=>L

---

© 2025 YPL GRUP INC
