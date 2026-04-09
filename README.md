<div align="center">

# 🏛️ GNI — Guru Nanak Institute of Technology
### College Portal Website · BCA Final Project · 2024–25

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/No_Framework-Pure_Vanilla-1a3c5e?style=for-the-badge)

> A fully functional college website with student & teacher portals, built using **pure HTML, CSS and JavaScript** — no frameworks, no backend, no database.

</div>

---

## 🌟 What Is This?

This is a college website project for **Guru Nanak Institute of Technology, Ludhiana, Punjab** — built as a BCA final year project. It includes a public-facing website AND a full dual-portal system where students and teachers can log in and interact with each other in real time (via localStorage).

---

## ✨ Features

### 🌐 Public Pages
| Page | Description |
|------|-------------|
| `index.html` | Home page with hero, highlights, stats |
| `about.html` | About the college, faculty, mission |
| `courses.html` | Programs offered, admission process |
| `contact.html` | Contact form + appointment booking |
| `login.html` | Shared login for students & teachers |

### 🎓 Student Portal
| Page | What it does |
|------|-------------|
| `dashboard.html` | Attendance rings per subject (colour coded), notices, stats |
| `timetable.html` | Full weekly timetable with today's column highlighted |
| `results.html` | Marks across **3 semesters** with grade card |
| `queries.html` | Submit questions to teachers, see replies |

### 👨‍🏫 Teacher Portal
| Page | What it does |
|------|-------------|
| `dashboard.html` | Student list with attendance bars, quick stats |
| `notices.html` | Post & manage notices by category |
| `queries.html` | View all student questions, reply to them |

---

## 🔥 The Cool Part — Real Student↔Teacher Communication

The query system is actually **wired up** between portals using `localStorage` as a shared mini-database:

```
Student submits query → saved to localStorage
        ↓
Teacher opens portal → reads same localStorage → sees the query
        ↓
Teacher types reply → saved back to localStorage
        ↓
Student refreshes → reply appears with green "Answered" badge ✅
```

Both portals run in the same browser = same localStorage = they're connected. Perfect for a demo!

---

## 👥 Demo Credentials

### Students — all use password `student123`

| Roll No | Name | Vibe |
|---------|------|------|
| `BCA2301` | Rajveer Singh | Average — Math attendance in danger zone 🔴 |
| `BCA2302` | Simran Kaur | Top student — all green, A grades 🌟 |
| `BCA2303` | Arjun Sharma | Steady performer — consistent B/A 👍 |
| `BCA2304` | Navjot Gill | Struggling — low attendance warnings 🟡 |
| `BCA2305` | Priya Mehta | Detention risk — multiple subjects below 60% 🚨 |

### Teachers — all use password `teacher123`

| Emp ID | Name | Department |
|--------|------|-----------|
| `TCH001` | Prof. Parminder Kaur | Computer Science |
| `TCH002` | Dr. Harpreet Singh | Mathematics |

---

## 🗂️ Project Structure

```
gni-website/
│
├── 📄 index.html          ← Home (public)
├── 📄 about.html          ← About Us (public)
├── 📄 courses.html        ← Courses (public)
├── 📄 contact.html        ← Contact (public)
├── 📄 login.html          ← Login (shared)
│
├── 🎨 style.css           ← Master CSS (all pages use this ONE file)
├── ⚙️  script.js           ← Master JS (auth, data, shared logic)
│
├── student/
│   ├── 📊 dashboard.html  ← Attendance + Notices
│   ├── 📅 timetable.html  ← Weekly schedule
│   ├── 📝 results.html    ← Marks (3 semesters)
│   └── 💬 queries.html    ← Ask teacher a question
│
└── teacher/
    ├── 🏠 dashboard.html  ← Student overview
    ├── 📢 notices.html    ← Post notices
    └── 💬 queries.html    ← Reply to students
```

**Total: 11 HTML files + 1 CSS + 1 JS**

---

## 🎨 Design System

| Token | Value | Used For |
|-------|-------|----------|
| `--primary` | `#1a3c5e` | Navy blue — main brand |
| `--accent` | `#f4a807` | Gold — Punjab feel, highlights |
| `--success` | `#2ecc71` | Good attendance, pass status |
| `--warning` | `#e67e22` | Low attendance, borderline |
| `--danger` | `#e74c3c` | At risk, fail, detention |

**Fonts:** `Playfair Display` (headings) + `Inter` (body)

---

## 🚀 How to Run

No install. No server. No commands.

```
1. Download / clone this repo
2. Open gni-website/index.html in your browser
3. That's it. Done. 🎉
```

> For the portal pages to work correctly, open via a local server or just open the HTML files directly — localStorage works either way.

---

## 📽️ Demo Walkthrough (for viva)

1. Open `login.html` → login as **BCA2301** → show Rajveer's dashboard (red danger alert on Math)
2. Logout → login as **BCA2302** → show Simran's dashboard (all green, completely different data)
3. On Results page → click **Sem 1 / Sem 2 / Sem 3** tabs — marks update live
4. Go to **My Queries** → submit a new question
5. Open new tab → login as **TCH001** → go to Student Queries → the question is already there
6. Type a reply → Send
7. Switch back to student tab → refresh → reply appears ✅

**Total demo time: ~3 minutes. Examiner goes wow. You pass. 🔥**

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, flexbox, grid, SVG animations
- **Vanilla JavaScript** — auth, localStorage, dynamic DOM rendering
- **Google Fonts** — Playfair Display + Inter
- **No libraries. No frameworks. No backend.**

---


---

<div align="center">

Made with ☕ and a lot of `console.log()` debugging

⭐ If this helped you, star the repo!

</div>
