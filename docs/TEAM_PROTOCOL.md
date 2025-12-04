# 📋 YPL Team Protocol

**Version 1.0.0** | Last Updated: January 2025

---

## 🎯 Purpose

This document defines the official communication protocol for YPL GRUP INC development team. Following this protocol ensures clear, efficient, and traceable communication across all team members.

---

## 👥 Team Structure

```
╔═══════════════════════════════════════════════════════════════╗
║                    YPL GRUP INC TEAM                          ║
╚═══════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   🏛️ LEANID                                                │
│   Role: Architect                                           │
│   Focus: Strategy, Technical Oversight, Structural Guidance │
│   Code: L                                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│               │    │               │    │               │
│ 👩‍💼 DASHKA     │    │ 🇺🇸 VASIL      │    │ 🤖 CLAUDE     │
│               │    │               │    │               │
│ Senior        │    │ President     │    │ Engineer      │
│ Coordinator   │    │ USA Office    │    │               │
│               │    │               │    │               │
│ Task Mgmt     │    │ Operations    │    │ Development   │
│ Coordination  │    │ Legal/Finance │    │ Documentation │
│               │    │               │    │               │
│ Code: D       │    │ Code: V       │    │ Code: C       │
│               │    │               │    │               │
└───────────────┘    └───────────────┘    └───────────────┘
```

---

## 📨 Communication Notation

### Standard Format

All team communications use the following notation:

```
[SENDER]=>[RECEIVER]: [MESSAGE]
```

### Examples

| Notation | Meaning |
|----------|---------|
| `D=>C` | Dashka to Claude |
| `C=>D` | Claude to Dashka |
| `L=>C` | Leanid to Claude |
| `C=>L` | Claude to Leanid |
| `D=>L` | Dashka to Leanid |
| `L=>D` | Leanid to Dashka |
| `V=>D` | Vasil to Dashka |
| `D=>V` | Dashka to Vasil |
| `D=>L/C` | Dashka to Leanid and Claude |
| `C=>D/L/V` | Claude to all team members |

---

## 🔄 Communication Flow

### Task Assignment Flow

```
┌──────────┐     ТЗ (Task)      ┌──────────┐
│          │ ─────────────────► │          │
│  DASHKA  │                    │  CLAUDE  │
│   (D)    │ ◄───────────────── │   (C)    │
│          │     Отчёт (Report) │          │
└──────────┘                    └──────────┘
     │                               │
     │  Escalation                   │  Questions
     ▼                               ▼
┌──────────┐                    ┌──────────┐
│          │                    │          │
│  LEANID  │ ◄────────────────► │  VASIL   │
│   (L)    │    Coordination    │   (V)    │
│          │                    │          │
└──────────┘                    └──────────┘
```

### Decision Hierarchy

1. **Strategic Decisions** → Leanid (Architect)
2. **Task Prioritization** → Dashka (Coordinator)
3. **Technical Implementation** → Claude (Engineer)
4. **Operations/Legal** → Vasil (President)

---

## 📋 Message Types

### 1. ТЗ (Technical Task)

Used when assigning development tasks.

**Format:**
```
D=>C: ТЗ #[ID]
Название: [Task Name]
Приоритет: [HIGH/MEDIUM/LOW]
Срок: [Deadline]

Описание:
[Detailed description]

Deliverables:
- [ ] Item 1
- [ ] Item 2

Критерии приёмки:
- [Acceptance criteria]
```

**Example:**
```
D=>C: ТЗ #YPL-CORE-SETUP-01
Название: DNS Configuration
Приоритет: HIGH
Срок: Немедленно

Описание:
Configure DNS records for ypl.app domain.

Deliverables:
- [ ] A record → Vercel IP
- [ ] CNAME → www redirect
- [ ] TXT → SPF record
```

---

### 2. Отчёт (Report)

Used when reporting task completion.

**Format:**
```
C=>D: ОТЧЁТ по ТЗ #[ID]

Статус: [ВЫПОЛНЕНО/В ПРОЦЕССЕ/ЗАБЛОКИРОВАНО]

Выполнено:
✅ [Completed item 1]
✅ [Completed item 2]

В процессе:
🔄 [In progress item]

Проблемы:
⚠️ [Issues if any]

Следующие шаги:
→ [Next steps]
```

---

### 3. Вопрос (Question)

Used for clarifications.

**Format:**
```
C=>D: ВОПРОС по [Topic]

Контекст:
[Background]

Вопрос:
[Specific question]

Варианты:
A) [Option A]
B) [Option B]

Рекомендация:
[My recommendation]
```

---

### 4. Срочно (Urgent)

Used for critical issues.

**Format:**
```
C=>D: 🚨 СРОЧНО

Проблема:
[Critical issue description]

Влияние:
[Impact on project]

Нужно решение:
[What decision is needed]
```

---

## 🏷️ Priority Levels

| Level | Icon | Response Time | Example |
|-------|------|---------------|---------|
| CRITICAL | 🚨 | Immediate | Production down |
| HIGH | 🔥 | Same day | Core feature block |
| MEDIUM | 📋 | 2-3 days | Enhancement |
| LOW | 📝 | 1 week | Nice-to-have |

---

## ✅ Acknowledgment Protocol

### Receiving Tasks

When receiving a task, acknowledge immediately:

```
C=>D: ПРИНЯТО! ТЗ #[ID]
Начинаю работу.
Ожидаемое время: [estimate]
```

### Blocking Issues

If blocked, escalate immediately:

```
C=>D: ЗАБЛОКИРОВАНО! ТЗ #[ID]
Причина: [reason]
Нужна помощь: [what's needed]
```

---

## 📊 Status Updates

### Daily Format

```
C=>D: Ежедневный статус

Вчера:
- [Completed tasks]

Сегодня:
- [Planned tasks]

Блокеры:
- [Issues] (или "Нет")
```

### Weekly Summary

```
C=>D: Недельный отчёт (Week #X)

Выполнено:
✅ [Task 1]
✅ [Task 2]

В процессе:
🔄 [Task 3]

Метрики:
- Tasks completed: X
- Blockers resolved: X
- Hours worked: X
```

---

## 🔐 Confidentiality

### Internal Only

All communications using this protocol are **INTERNAL ONLY**.

Do not share:
- ТЗ documents externally
- Internal discussions
- Strategic plans
- Financial information

### External Communication

For external communication, route through:
- **PR/Marketing** → Dashka
- **Legal** → Vasil
- **Technical** → Leanid

---

## 📁 Documentation Standards

### File Naming

```
[TYPE]-[NAME]-[VERSION].[ext]

Examples:
ТЗ-DNS-SETUP-v1.md
REPORT-WEEKLY-W01.md
SPEC-API-AUTH-v2.pdf
```

### Code Comments

```javascript
/**
 * @author Claude (Engineer)
 * @task ТЗ #YPL-CORE-SETUP-01
 * @date 2025-01-XX
 */
```

---

## 🚀 Escalation Path

```
Issue Detected
      │
      ▼
┌─────────────┐  No   ┌─────────────┐
│ Can Claude  │──────►│ Escalate to │
│ resolve?    │       │ Dashka (D)  │
└─────────────┘       └─────────────┘
      │ Yes                  │
      ▼                      ▼
┌─────────────┐       ┌─────────────┐  No   ┌─────────────┐
│   Resolve   │       │ Can Dashka  │──────►│ Escalate to │
│   & Report  │       │ resolve?    │       │ Leanid (L)  │
└─────────────┘       └─────────────┘       └─────────────┘
                            │ Yes                  │
                            ▼                      ▼
                      ┌─────────────┐       ┌─────────────┐
                      │   Resolve   │       │  Strategic  │
                      │   & Update  │       │  Decision   │
                      └─────────────┘       └─────────────┘
```

---

## 📞 Contact Reference

| Member | Role | Reach Via |
|--------|------|-----------|
| Leanid | Architect | Chat (L=>X) |
| Dashka | Coordinator | Chat (D=>X) |
| Vasil | President | Email, Chat |
| Claude | Engineer | Chat (C=>X) |

---

## 🔄 Protocol Updates

This protocol may be updated by:
- **Leanid** (strategic changes)
- **Dashka** (operational changes)

Version history tracked in Git.

---

## ✨ Team Values

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🎯 EFFICIENCY - Clear communication, fast execution         ║
║   🤝 COLLABORATION - Support each other, share knowledge      ║
║   📈 GROWTH - Learn, improve, scale                           ║
║   🔒 TRUST - Reliable, accountable, transparent               ║
║                                                               ║
║   "Мы суперкоманда. Мы как космический корабль               ║
║    с заправленными баками строго к цели."                    ║
║                                                               ║
║                                        — Team YPL, 2025       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

© 2025 YPL GRUP INC. All rights reserved.
