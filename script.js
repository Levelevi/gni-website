/* ============================================================
   GNI — Guru Nanak Institute of Technology
   Master JavaScript v1.0
   File: script.js (root of project)
   Rule: Every HTML page links ONLY this file
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   BASE PATH — change this if you move the project folder
══════════════════════════════════════════════════════════ */
const BASE = '/gni-website';

/* ══════════════════════════════════════════════════════════
   FAKE CREDENTIALS (hardcoded demo data)
══════════════════════════════════════════════════════════ */
const STUDENTS = [
  { rollNo: 'BCA2301', password: 'student123', name: 'Rajveer Singh',  sem: 'BCA 3rd Sem', initials: 'RS' },
  { rollNo: 'BCA2302', password: 'student123', name: 'Simran Kaur',    sem: 'BCA 3rd Sem', initials: 'SK' },
  { rollNo: 'BCA2303', password: 'student123', name: 'Arjun Sharma',   sem: 'BCA 3rd Sem', initials: 'AS' },
  { rollNo: 'BCA2304', password: 'student123', name: 'Navjot Gill',    sem: 'BCA 3rd Sem', initials: 'NG' },
  { rollNo: 'BCA2305', password: 'student123', name: 'Priya Mehta',    sem: 'BCA 3rd Sem', initials: 'PM' },
];

const TEACHERS = [
  { empId: 'TCH001', password: 'teacher123', name: 'Prof. Parminder Kaur', dept: 'Computer Science Dept.', initials: 'PK' },
  { empId: 'TCH002', password: 'teacher123', name: 'Dr. Harpreet Singh',   dept: 'Mathematics',            initials: 'HS' },
];

/* ══════════════════════════════════════════════════════════
   AUTH — LOGIN
══════════════════════════════════════════════════════════ */

function studentLogin() {
  const rollNo   = document.getElementById('student-roll').value.trim().toUpperCase();
  const password = document.getElementById('student-pass').value;
  const errorEl  = document.getElementById('student-error');

  if (!rollNo || !password) {
    showError(errorEl, 'Please enter your Roll Number and Password.');
    return;
  }

  const student = STUDENTS.find(s => s.rollNo === rollNo && s.password === password);

  if (student) {
    localStorage.setItem('gni_role',     'student');
    localStorage.setItem('gni_name',     student.name);
    localStorage.setItem('gni_id',       student.rollNo);
    localStorage.setItem('gni_sem',      student.sem);
    localStorage.setItem('gni_initials', student.initials);
    window.location.href = BASE + '/student/dashboard.html';
  } else {
    showError(errorEl, 'Invalid Roll Number or Password. Try BCA2301 / student123');
  }
}

function teacherLogin() {
  const empId    = document.getElementById('teacher-emp').value.trim().toUpperCase();
  const password = document.getElementById('teacher-pass').value;
  const errorEl  = document.getElementById('teacher-error');

  if (!empId || !password) {
    showError(errorEl, 'Please enter your Employee ID and Password.');
    return;
  }

  const teacher = TEACHERS.find(t => t.empId === empId && t.password === password);

  if (teacher) {
    localStorage.setItem('gni_role',     'teacher');
    localStorage.setItem('gni_name',     teacher.name);
    localStorage.setItem('gni_id',       teacher.empId);
    localStorage.setItem('gni_dept',     teacher.dept);
    localStorage.setItem('gni_initials', teacher.initials);
    window.location.href = BASE + '/teacher/dashboard.html';
  } else {
    showError(errorEl, 'Invalid Employee ID or Password. Try TCH001 / teacher123');
  }
}

/* ══════════════════════════════════════════════════════════
   AUTH — GUARD & LOGOUT
══════════════════════════════════════════════════════════ */

function requireLogin(role) {
  const storedRole = localStorage.getItem('gni_role');
  if (!storedRole || storedRole !== role) {
    window.location.href = BASE + '/login.html';
  }
}

function logout() {
  localStorage.removeItem('gni_role');
  localStorage.removeItem('gni_name');
  localStorage.removeItem('gni_id');
  localStorage.removeItem('gni_sem');
  localStorage.removeItem('gni_dept');
  localStorage.removeItem('gni_initials');
  window.location.href = BASE + '/login.html';
}

/* ══════════════════════════════════════════════════════════
   AUTH — SESSION HELPERS
══════════════════════════════════════════════════════════ */

function getSessionName()     { return localStorage.getItem('gni_name')     || ''; }
function getSessionId()       { return localStorage.getItem('gni_id')       || ''; }
function getSessionSem()      { return localStorage.getItem('gni_sem')      || ''; }
function getSessionDept()     { return localStorage.getItem('gni_dept')     || ''; }
function getSessionInitials() { return localStorage.getItem('gni_initials') || 'GN'; }
function getSessionRole()     { return localStorage.getItem('gni_role')     || ''; }

/* ══════════════════════════════════════════════════════════
   UI HELPERS
══════════════════════════════════════════════════════════ */

function showError(el, message) {
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 4000);
}

function showSuccess(elId, message) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = message;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 3500);
}

function populateSidebarUser() {
  const nameEl   = document.getElementById('sidebar-name');
  const roleEl   = document.getElementById('sidebar-role');
  const avatarEl = document.getElementById('sidebar-avatar');

  if (nameEl)   nameEl.textContent   = getSessionName();
  if (avatarEl) avatarEl.textContent = getSessionInitials();

  if (roleEl) {
    roleEl.textContent = getSessionRole() === 'student'
      ? getSessionSem()
      : getSessionDept();
  }
}

/* ══════════════════════════════════════════════════════════
   LOGIN PAGE — TAB TOGGLE
══════════════════════════════════════════════════════════ */

function switchTab(tab) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.login-tab[data-tab="${tab}"]`);
  if (activeTab) activeTab.classList.add('active');

  document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
  const activeForm = document.getElementById(`${tab}-form`);
  if (activeForm) activeForm.classList.add('active');
}

/* ══════════════════════════════════════════════════════════
   CONTACT PAGE — APPOINTMENT FORM
══════════════════════════════════════════════════════════ */

function submitAppointment(e) {
  if (e) e.preventDefault();

  const form      = document.getElementById('appointment-form');
  const successEl = document.getElementById('appointment-success');

  if (!form) return;

  const name  = document.getElementById('appt-name')?.value.trim();
  const phone = document.getElementById('appt-phone')?.value.trim();
  const email = document.getElementById('appt-email')?.value.trim();

  if (!name || !phone || !email) {
    alert('Please fill in all required fields.');
    return;
  }

  if (successEl) {
    successEl.style.display = 'block';
    setTimeout(() => { successEl.style.display = 'none'; }, 5000);
  }

  form.reset();
}

/* ══════════════════════════════════════════════════════════
   STUDENT QUERIES PAGE
══════════════════════════════════════════════════════════ */

function submitQuery(e) {
  if (e) e.preventDefault();

  const subject = document.getElementById('query-subject')?.value;
  const text    = document.getElementById('query-text')?.value.trim();
  const listEl  = document.getElementById('queries-list');

  if (!subject || !text) {
    alert('Please select a subject and write your query.');
    return;
  }

  const now  = new Date();
  const date = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const card = document.createElement('div');
  card.className = 'query-card';
  card.innerHTML = `
    <div class="query-card-header">
      <div class="query-meta">
        <strong>${subject}</strong> &nbsp;·&nbsp; ${date}
      </div>
      <span class="badge badge-warning">Pending</span>
    </div>
    <div class="query-text">${escapeHtml(text)}</div>
  `;

  if (listEl) listEl.prepend(card);

  document.getElementById('query-text').value    = '';
  document.getElementById('query-subject').value = '';
}

/* ══════════════════════════════════════════════════════════
   TEACHER NOTICES PAGE
══════════════════════════════════════════════════════════ */

function postNotice(e) {
  if (e) e.preventDefault();

  const title    = document.getElementById('notice-title')?.value.trim();
  const category = document.getElementById('notice-category')?.value;
  const body     = document.getElementById('notice-body')?.value.trim();
  const listEl   = document.getElementById('notices-list');

  if (!title || !category || !body) {
    alert('Please fill in all fields before posting.');
    return;
  }

  const now  = new Date();
  const date = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const badgeClass = {
    'Exam':    'badge-danger',
    'Event':   'badge-accent',
    'Holiday': 'badge-warning',
    'General': 'badge-info',
  }[category] || 'badge-info';

  const card = document.createElement('div');
  card.className = 'notice-card';
  card.innerHTML = `
    <div class="notice-card-header">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
          <span class="badge ${badgeClass}">${category}</span>
          <span class="text-xs text-muted">${date}</span>
        </div>
        <div class="notice-card-title">${escapeHtml(title)}</div>
      </div>
      <button class="btn-secondary btn-sm" onclick="deleteNotice(this)">Delete</button>
    </div>
    <div class="notice-card-body">${escapeHtml(body)}</div>
  `;

  if (listEl) listEl.prepend(card);

  document.getElementById('notice-title').value    = '';
  document.getElementById('notice-body').value     = '';
  document.getElementById('notice-category').value = '';
}

function deleteNotice(btn) {
  const card = btn.closest('.notice-card');
  if (card) card.remove();
}

/* ══════════════════════════════════════════════════════════
   TEACHER QUERIES PAGE
══════════════════════════════════════════════════════════ */

function sendReply(btn) {
  const card      = btn.closest('.query-card');
  const textarea  = card.querySelector('.reply-input');
  const replyText = textarea?.value.trim();

  if (!replyText) {
    alert('Please write a reply before sending.');
    return;
  }

  const badge = card.querySelector('.badge');
  if (badge) {
    badge.textContent = 'Answered';
    badge.className   = 'badge badge-success';
  }

  const replyArea = card.querySelector('.reply-area');
  if (replyArea) {
    replyArea.innerHTML = `
      <div class="query-reply">
        <div class="query-reply-label">✅ Teacher's Reply</div>
        ${escapeHtml(replyText)}
      </div>
    `;
  }

  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter;
  if (activeFilter === 'pending') card.style.display = 'none';
}

function filterQueries(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.query-card');
  cards.forEach(card => {
    const badge  = card.querySelector('.badge');
    const status = badge?.textContent.trim().toLowerCase();

    if (filter === 'all') {
      card.style.display = '';
    } else if (filter === 'pending') {
      card.style.display = status === 'pending' ? '' : 'none';
    } else if (filter === 'answered') {
      card.style.display = status === 'answered' ? '' : 'none';
    }
  });
}

/* ══════════════════════════════════════════════════════════
   UTILITY
══════════════════════════════════════════════════════════ */

function escapeHtml(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}

function setActiveNavLink() {
  const path  = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.endsWith(href.replace('/', ''))) {
      link.classList.add('active');
    }
  });
}

function setActiveSidebarLink() {
  const path  = window.location.pathname;
  const links = document.querySelectorAll('.sidebar-link');
  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && path.includes(href.split('/').pop().replace('.html', ''))) {
      link.classList.add('active');
    }
  });
}

/* ══════════════════════════════════════════════════════════
   AUTO-INIT on DOM ready
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  setActiveSidebarLink();

  if (document.querySelector('.login-tabs')) {
    switchTab('student');
  }

  document.getElementById('student-pass')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') studentLogin();
  });
  document.getElementById('teacher-pass')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') teacherLogin();
  });
});