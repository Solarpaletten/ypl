# 🌿 YPL Branching Strategy

**Version 1.0.0** | Last Updated: January 2025

---

## 📋 Overview

This document defines the Git branching strategy for YPL CORE project, ensuring clean deployments and organized development workflow.

---

## 🌳 Branch Structure

```
                              ┌─────────────────────┐
                              │       main          │
                              │   (production)      │
                              │   ypl.app           │
                              └──────────┬──────────┘
                                         │
                                         │ merge (after review)
                                         │
                              ┌──────────┴──────────┐
                              │        dev          │
                              │     (staging)       │
                              │   dev.ypl.app       │
                              └──────────┬──────────┘
                                         │
                    ┌────────────────────┼────────────────────┐
                    │                    │                    │
           ┌────────┴────────┐  ┌────────┴────────┐  ┌────────┴────────┐
           │  feature/auth   │  │ feature/ai-eng  │  │  feature/billing │
           │                 │  │                 │  │                  │
           └─────────────────┘  └─────────────────┘  └──────────────────┘
```

---

## 🏷️ Branch Types

### 1. `main` — Production

| Property | Value |
|----------|-------|
| **URL** | https://ypl.app |
| **Environment** | Production |
| **Protection** | ✅ Protected |
| **Direct push** | ❌ Forbidden |
| **Merge from** | `dev` only |
| **Auto-deploy** | ✅ Vercel |

**Rules:**
- Only stable, tested code
- Merge only via Pull Request
- Requires review from Dashka or Leanid
- All tests must pass

---

### 2. `dev` — Staging

| Property | Value |
|----------|-------|
| **URL** | https://dev.ypl.app |
| **Environment** | Staging |
| **Protection** | ⚠️ Semi-protected |
| **Direct push** | ⚠️ Emergency only |
| **Merge from** | `feature/*` branches |
| **Auto-deploy** | ✅ Vercel Preview |

**Rules:**
- Integration testing environment
- Feature branches merge here first
- QA testing before production
- Can be reset if needed

---

### 3. `feature/*` — Development

| Property | Value |
|----------|-------|
| **URL** | Preview URLs (Vercel) |
| **Environment** | Development |
| **Protection** | ❌ None |
| **Naming** | `feature/[name]` |
| **Lifespan** | Until merged |
| **Auto-deploy** | ✅ Vercel Preview |

**Naming Convention:**
```
feature/auth          # Authentication feature
feature/ai-engine     # AI module
feature/billing       # Payment system
feature/dashboard     # User dashboard
feature/api-v2        # API improvements
```

---

### 4. `hotfix/*` — Emergency Fixes

| Property | Value |
|----------|-------|
| **Branch from** | `main` |
| **Merge to** | `main` AND `dev` |
| **Naming** | `hotfix/[issue]` |
| **Priority** | 🚨 Critical |

**When to use:**
- Production bugs
- Security vulnerabilities
- Critical errors

**Example:**
```bash
git checkout main
git checkout -b hotfix/ssl-fix
# fix the issue
git push origin hotfix/ssl-fix
# Create PR to main AND dev
```

---

## 🔄 Workflow

### Feature Development

```
1. Create feature branch from dev
   └─► git checkout dev
   └─► git pull origin dev
   └─► git checkout -b feature/my-feature

2. Develop & commit
   └─► git add .
   └─► git commit -m "feat: description"

3. Push to remote
   └─► git push origin feature/my-feature

4. Create Pull Request to dev
   └─► Review by team
   └─► Tests pass
   └─► Merge

5. Test on dev.ypl.app
   └─► QA verification

6. Create Pull Request: dev → main
   └─► Final review
   └─► Merge to production
```

### Visual Flow

```
feature/auth ──PR──► dev ──PR──► main
                      │           │
                      ▼           ▼
              dev.ypl.app    ypl.app
```

---

## 📝 Commit Convention

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(auth): add Google OAuth` |
| `fix` | Bug fix | `fix(api): resolve timeout issue` |
| `docs` | Documentation | `docs: update README` |
| `style` | Formatting | `style: fix indentation` |
| `refactor` | Code refactoring | `refactor(db): optimize queries` |
| `test` | Tests | `test: add auth unit tests` |
| `chore` | Maintenance | `chore: update dependencies` |

### Examples

```bash
# Feature
git commit -m "feat(dashboard): add user analytics chart"

# Bug fix
git commit -m "fix(auth): resolve token expiration bug"

# Documentation
git commit -m "docs: add API endpoint documentation"

# Breaking change
git commit -m "feat(api)!: change response format

BREAKING CHANGE: API v2 response structure changed"
```

---

## 🚀 Deployment Flow

### Automatic Deployments (Vercel)

```
┌─────────────────┬────────────────────┬─────────────────────┐
│     Branch      │    Environment     │        URL          │
├─────────────────┼────────────────────┼─────────────────────┤
│     main        │    Production      │    ypl.app          │
│     dev         │    Staging         │    dev.ypl.app      │
│   feature/*     │    Preview         │    *.vercel.app     │
└─────────────────┴────────────────────┴─────────────────────┘
```

### Manual Deployment (Emergency)

```bash
# Deploy specific commit to production
vercel --prod --force

# Rollback to previous deployment
vercel rollback
```

---

## 🛡️ Protection Rules

### `main` Branch

```yaml
Protection Rules:
  - Require pull request before merging: ✅
  - Required reviewers: 1 (Dashka or Leanid)
  - Require status checks: ✅
    - build
    - test
    - lint
  - Require branches to be up to date: ✅
  - Include administrators: ✅
```

### `dev` Branch

```yaml
Protection Rules:
  - Require pull request before merging: ✅
  - Required reviewers: 0 (optional)
  - Require status checks: ✅
    - build
  - Allow force push: ⚠️ (admins only)
```

---

## 📊 Example Scenarios

### Scenario 1: New Feature

```bash
# 1. Start from dev
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/user-profile

# 3. Work on feature
# ... make changes ...
git add .
git commit -m "feat(profile): add user avatar upload"

# 4. Push
git push origin feature/user-profile

# 5. Create PR: feature/user-profile → dev
# 6. After review & merge, test on dev.ypl.app
# 7. Create PR: dev → main
# 8. After merge, live on ypl.app
```

### Scenario 2: Hotfix

```bash
# 1. Start from main
git checkout main
git pull origin main

# 2. Create hotfix branch
git checkout -b hotfix/critical-bug

# 3. Fix the issue
git add .
git commit -m "fix: resolve critical authentication bug"

# 4. Push
git push origin hotfix/critical-bug

# 5. Create PR to main (expedited review)
# 6. After merge to main, also merge to dev
git checkout dev
git merge hotfix/critical-bug
git push origin dev
```

---

## 🔧 Git Commands Reference

### Daily Commands

```bash
# Update your branch
git checkout dev
git pull origin dev

# Create feature branch
git checkout -b feature/name

# Stage and commit
git add .
git commit -m "type: description"

# Push changes
git push origin feature/name

# Sync with dev
git checkout feature/name
git merge dev
```

### Cleanup

```bash
# Delete local branch
git branch -d feature/name

# Delete remote branch
git push origin --delete feature/name

# Prune stale branches
git fetch --prune
```

---

## 📞 Contact

Questions about branching?

| Role | Contact |
|------|---------|
| Tech Lead | Dashka |
| Architect | Leanid |
| DevOps | Claude |

---

© 2025 YPL GRUP INC. All rights reserved.
