/* ============================================================
   GNI — Guru Nanak Institute of Technology
   Master JavaScript v3.0
   File: script.js (root of project)
   ============================================================ */

const BASE = '/gni-website';

/* ══════════════════════════════════════════════════════════
   STUDENT CREDENTIALS
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
   STUDENT DATA — per student, per semester
   attendance: % per subject (3rd sem subjects)
   marks: { internal, external } per subject
   Semesters 1 & 2 have older subjects
══════════════════════════════════════════════════════════ */
const STUDENT_DATA = {

  'BCA2301': { // Rajveer Singh — average student, one subject at risk
    attendance: {
      'Data Structures': 82,
      'DBMS': 67,
      'Web Technologies': 91,
      'Discrete Mathematics': 58,
      'Operating Systems': 76,
    },
    semesters: {
      1: {
        label: 'BCA 1st Semester',
        sgpa: 6.8,
        percentage: 62.4,
        subjects: [
          { name: 'Fundamentals of Computers', code: 'BCA101', internal: 16, external: 46, total: 62, grade: 'C' },
          { name: 'Mathematics - I',            code: 'BCA102', internal: 14, external: 42, total: 56, grade: 'C' },
          { name: 'Communication Skills',       code: 'BCA103', internal: 18, external: 52, total: 70, grade: 'B' },
          { name: 'Programming in C',           code: 'BCA104', internal: 15, external: 45, total: 60, grade: 'C' },
          { name: 'PC Software Lab',            code: 'BCA105', internal: 20, external: 52, total: 72, grade: 'B' },
        ],
      },
      2: {
        label: 'BCA 2nd Semester',
        sgpa: 7.1,
        percentage: 65.6,
        subjects: [
          { name: 'Data Structures',            code: 'BCA201', internal: 17, external: 50, total: 67, grade: 'C' },
          { name: 'Mathematics - II',           code: 'BCA202', internal: 15, external: 44, total: 59, grade: 'C' },
          { name: 'Object Oriented Prog. (C++)',code: 'BCA203', internal: 19, external: 56, total: 75, grade: 'A' },
          { name: 'Computer Networks',          code: 'BCA204', internal: 16, external: 47, total: 63, grade: 'C' },
          { name: 'OOP Lab (C++)',              code: 'BCA205', internal: 21, external: 55, total: 76, grade: 'A' },
        ],
      },
      3: {
        label: 'BCA 3rd Semester',
        sgpa: 7.4,
        percentage: 68.2,
        subjects: [
          { name: 'Data Structures',       code: 'BCA301', internal: 18, external: 52, total: 70, grade: 'B' },
          { name: 'DBMS',                  code: 'BCA302', internal: 16, external: 48, total: 64, grade: 'C' },
          { name: 'Web Technologies',      code: 'BCA303', internal: 22, external: 61, total: 83, grade: 'A' },
          { name: 'Discrete Mathematics',  code: 'BCA304', internal: 14, external: 44, total: 58, grade: 'D' },
          { name: 'Operating Systems',     code: 'BCA305', internal: 19, external: 55, total: 74, grade: 'B' },
        ],
      },
    },
  },

  'BCA2302': { // Simran Kaur — top student, excellent attendance
    attendance: {
      'Data Structures': 92,
      'DBMS': 88,
      'Web Technologies': 95,
      'Discrete Mathematics': 84,
      'Operating Systems': 90,
    },
    semesters: {
      1: {
        label: 'BCA 1st Semester',
        sgpa: 8.6,
        percentage: 79.8,
        subjects: [
          { name: 'Fundamentals of Computers', code: 'BCA101', internal: 22, external: 62, total: 84, grade: 'A' },
          { name: 'Mathematics - I',            code: 'BCA102', internal: 20, external: 58, total: 78, grade: 'A' },
          { name: 'Communication Skills',       code: 'BCA103', internal: 23, external: 65, total: 88, grade: 'A' },
          { name: 'Programming in C',           code: 'BCA104', internal: 19, external: 55, total: 74, grade: 'B' },
          { name: 'PC Software Lab',            code: 'BCA105', internal: 24, external: 66, total: 90, grade: 'A' },
        ],
      },
      2: {
        label: 'BCA 2nd Semester',
        sgpa: 8.4,
        percentage: 78.0,
        subjects: [
          { name: 'Data Structures',            code: 'BCA201', internal: 21, external: 60, total: 81, grade: 'A' },
          { name: 'Mathematics - II',           code: 'BCA202', internal: 19, external: 55, total: 74, grade: 'B' },
          { name: 'Object Oriented Prog. (C++)',code: 'BCA203', internal: 22, external: 63, total: 85, grade: 'A' },
          { name: 'Computer Networks',          code: 'BCA204', internal: 20, external: 58, total: 78, grade: 'A' },
          { name: 'OOP Lab (C++)',              code: 'BCA205', internal: 23, external: 64, total: 87, grade: 'A' },
        ],
      },
      3: {
        label: 'BCA 3rd Semester',
        sgpa: 8.2,
        percentage: 76.4,
        subjects: [
          { name: 'Data Structures',       code: 'BCA301', internal: 21, external: 61, total: 82, grade: 'A' },
          { name: 'DBMS',                  code: 'BCA302', internal: 20, external: 58, total: 78, grade: 'A' },
          { name: 'Web Technologies',      code: 'BCA303', internal: 23, external: 65, total: 88, grade: 'A' },
          { name: 'Discrete Mathematics',  code: 'BCA304', internal: 18, external: 54, total: 72, grade: 'B' },
          { name: 'Operating Systems',     code: 'BCA305', internal: 20, external: 42, total: 62, grade: 'C' },
        ],
      },
    },
  },

  'BCA2303': { // Arjun Sharma — consistently good, steady performer
    attendance: {
      'Data Structures': 88,
      'DBMS': 91,
      'Web Technologies': 86,
      'Discrete Mathematics': 79,
      'Operating Systems': 93,
    },
    semesters: {
      1: {
        label: 'BCA 1st Semester',
        sgpa: 8.2,
        percentage: 75.6,
        subjects: [
          { name: 'Fundamentals of Computers', code: 'BCA101', internal: 20, external: 58, total: 78, grade: 'A' },
          { name: 'Mathematics - I',            code: 'BCA102', internal: 18, external: 52, total: 70, grade: 'B' },
          { name: 'Communication Skills',       code: 'BCA103', internal: 21, external: 60, total: 81, grade: 'A' },
          { name: 'Programming in C',           code: 'BCA104', internal: 19, external: 56, total: 75, grade: 'A' },
          { name: 'PC Software Lab',            code: 'BCA105', internal: 22, external: 57, total: 79, grade: 'A' },
        ],
      },
      2: {
        label: 'BCA 2nd Semester',
        sgpa: 8.5,
        percentage: 78.6,
        subjects: [
          { name: 'Data Structures',            code: 'BCA201', internal: 20, external: 59, total: 79, grade: 'A' },
          { name: 'Mathematics - II',           code: 'BCA202', internal: 18, external: 54, total: 72, grade: 'B' },
          { name: 'Object Oriented Prog. (C++)',code: 'BCA203', internal: 22, external: 64, total: 86, grade: 'A' },
          { name: 'Computer Networks',          code: 'BCA204', internal: 19, external: 57, total: 76, grade: 'A' },
          { name: 'OOP Lab (C++)',              code: 'BCA205', internal: 21, external: 59, total: 80, grade: 'A' },
        ],
      },
      3: {
        label: 'BCA 3rd Semester',
        sgpa: 8.7,
        percentage: 80.4,
        subjects: [
          { name: 'Data Structures',       code: 'BCA301', internal: 22, external: 63, total: 85, grade: 'A' },
          { name: 'DBMS',                  code: 'BCA302', internal: 21, external: 62, total: 83, grade: 'A' },
          { name: 'Web Technologies',      code: 'BCA303', internal: 20, external: 58, total: 78, grade: 'A' },
          { name: 'Discrete Mathematics',  code: 'BCA304', internal: 19, external: 56, total: 75, grade: 'A' },
          { name: 'Operating Systems',     code: 'BCA305', internal: 22, external: 61, total: 83, grade: 'A' },
        ],
      },
    },
  },

  'BCA2304': { // Navjot Gill — struggling, low attendance, below average marks
    attendance: {
      'Data Structures': 65,
      'DBMS': 60,
      'Web Technologies': 70,
      'Discrete Mathematics': 55,
      'Operating Systems': 62,
    },
    semesters: {
      1: {
        label: 'BCA 1st Semester',
        sgpa: 6.2,
        percentage: 57.4,
        subjects: [
          { name: 'Fundamentals of Computers', code: 'BCA101', internal: 14, external: 42, total: 56, grade: 'C' },
          { name: 'Mathematics - I',            code: 'BCA102', internal: 13, external: 38, total: 51, grade: 'C' },
          { name: 'Communication Skills',       code: 'BCA103', internal: 16, external: 46, total: 62, grade: 'C' },
          { name: 'Programming in C',           code: 'BCA104', internal: 12, external: 40, total: 52, grade: 'C' },
          { name: 'PC Software Lab',            code: 'BCA105', internal: 15, external: 41, total: 56, grade: 'C' },
        ],
      },
      2: {
        label: 'BCA 2nd Semester',
        sgpa: 6.5,
        percentage: 60.0,
        subjects: [
          { name: 'Data Structures',            code: 'BCA201', internal: 14, external: 44, total: 58, grade: 'C' },
          { name: 'Mathematics - II',           code: 'BCA202', internal: 13, external: 40, total: 53, grade: 'C' },
          { name: 'Object Oriented Prog. (C++)',code: 'BCA203', internal: 15, external: 48, total: 63, grade: 'C' },
          { name: 'Computer Networks',          code: 'BCA204', internal: 14, external: 45, total: 59, grade: 'C' },
          { name: 'OOP Lab (C++)',              code: 'BCA205', internal: 16, external: 51, total: 67, grade: 'C' },
        ],
      },
      3: {
        label: 'BCA 3rd Semester',
        sgpa: 6.8,
        percentage: 62.2,
        subjects: [
          { name: 'Data Structures',       code: 'BCA301', internal: 15, external: 48, total: 63, grade: 'C' },
          { name: 'DBMS',                  code: 'BCA302', internal: 14, external: 46, total: 60, grade: 'C' },
          { name: 'Web Technologies',      code: 'BCA303', internal: 17, external: 52, total: 69, grade: 'C' },
          { name: 'Discrete Mathematics',  code: 'BCA304', internal: 13, external: 43, total: 56, grade: 'C' },
          { name: 'Operating Systems',     code: 'BCA305', internal: 14, external: 49, total: 63, grade: 'C' },
        ],
      },
    },
  },

  'BCA2305': { // Priya Mehta — very low attendance, detention risk, but decent marks when present
    attendance: {
      'Data Structures': 52,
      'DBMS': 58,
      'Web Technologies': 61,
      'Discrete Mathematics': 49,
      'Operating Systems': 55,
    },
    semesters: {
      1: {
        label: 'BCA 1st Semester',
        sgpa: 6.0,
        percentage: 55.0,
        subjects: [
          { name: 'Fundamentals of Computers', code: 'BCA101', internal: 13, external: 40, total: 53, grade: 'C' },
          { name: 'Mathematics - I',            code: 'BCA102', internal: 12, external: 36, total: 48, grade: 'D' },
          { name: 'Communication Skills',       code: 'BCA103', internal: 15, external: 44, total: 59, grade: 'C' },
          { name: 'Programming in C',           code: 'BCA104', internal: 14, external: 42, total: 56, grade: 'C' },
          { name: 'PC Software Lab',            code: 'BCA105', internal: 16, external: 43, total: 59, grade: 'C' },
        ],
      },
      2: {
        label: 'BCA 2nd Semester',
        sgpa: 6.3,
        percentage: 58.0,
        subjects: [
          { name: 'Data Structures',            code: 'BCA201', internal: 13, external: 43, total: 56, grade: 'C' },
          { name: 'Mathematics - II',           code: 'BCA202', internal: 12, external: 38, total: 50, grade: 'C' },
          { name: 'Object Oriented Prog. (C++)',code: 'BCA203', internal: 16, external: 50, total: 66, grade: 'C' },
          { name: 'Computer Networks',          code: 'BCA204', internal: 14, external: 44, total: 58, grade: 'C' },
          { name: 'OOP Lab (C++)',              code: 'BCA205', internal: 15, external: 45, total: 60, grade: 'C' },
        ],
      },
      3: {
        label: 'BCA 3rd Semester',
        sgpa: 6.1,
        percentage: 56.4,
        subjects: [
          { name: 'Data Structures',       code: 'BCA301', internal: 14, external: 44, total: 58, grade: 'C' },
          { name: 'DBMS',                  code: 'BCA302', internal: 13, external: 41, total: 54, grade: 'C' },
          { name: 'Web Technologies',      code: 'BCA303', internal: 16, external: 50, total: 66, grade: 'C' },
          { name: 'Discrete Mathematics',  code: 'BCA304', internal: 12, external: 38, total: 50, grade: 'C' },
          { name: 'Operating Systems',     code: 'BCA305', internal: 13, external: 41, total: 54, grade: 'C' },
        ],
      },
    },
  },

};

/* ══════════════════════════════════════════════════════════
   HELPER — get current student's data
══════════════════════════════════════════════════════════ */
function getStudentData() {
  const rollNo = getSessionId();
  return STUDENT_DATA[rollNo] || null;
}

function getStudentSemData(semNumber) {
  const data = getStudentData();
  if (!data) return null;
  return data.semesters[semNumber] || null;
}

function getStudentAttendance() {
  const data = getStudentData();
  if (!data) return {};
  return data.attendance;
}

/* ══════════════════════════════════════════════════════════
   SHARED QUERY STORAGE
══════════════════════════════════════════════════════════ */
const QUERIES_KEY = 'gni_queries';

function seedDefaultQueries() {
  if (localStorage.getItem(QUERIES_KEY)) return;
  const defaults = [
    {
      id: 'seed_001', rollNo: 'BCA2301', name: 'Rajveer Singh', initials: 'RS',
      subject: 'Data Structures',
      text: 'Can you explain the difference between a stack implemented using an array versus a linked list? Which one is better for memory usage?',
      date: '12 Nov 2024', status: 'answered',
      reply: 'Array-based stacks have fixed size but offer O(1) access. Linked list stacks are dynamic but have pointer overhead. For exams, array-based is simpler. For real apps, linked list is preferred.',
      repliedBy: 'Prof. Parminder Kaur'
    },
    {
      id: 'seed_002', rollNo: 'BCA2301', name: 'Rajveer Singh', initials: 'RS',
      subject: 'Web Technologies',
      text: 'What is the difference between position: absolute and position: fixed in CSS?',
      date: '8 Nov 2024', status: 'answered',
      reply: 'position: absolute is relative to its nearest positioned ancestor. position: fixed is relative to the viewport — stays fixed on scroll.',
      repliedBy: 'Prof. Parminder Kaur'
    },
    {
      id: 'seed_003', rollNo: 'BCA2301', name: 'Rajveer Singh', initials: 'RS',
      subject: 'Discrete Mathematics',
      text: 'I\'m confused about the difference between a relation being "reflexive" vs "symmetric". Can you give an example?',
      date: '18 Nov 2024', status: 'pending', reply: null, repliedBy: null
    },
    {
      id: 'seed_004', rollNo: 'BCA2301', name: 'Rajveer Singh', initials: 'RS',
      subject: 'Operating Systems',
      text: 'In the Banker\'s algorithm, what exactly is the "safe state"?',
      date: '20 Nov 2024', status: 'pending', reply: null, repliedBy: null
    },
    {
      id: 'seed_005', rollNo: 'BCA2304', name: 'Navjot Gill', initials: 'NG',
      subject: 'DBMS',
      text: 'What is the difference between 2NF and 3NF normalization?',
      date: '19 Nov 2024', status: 'pending', reply: null, repliedBy: null
    },
    {
      id: 'seed_006', rollNo: 'BCA2302', name: 'Simran Kaur', initials: 'SK',
      subject: 'Data Structures',
      text: 'Can you explain how merge sort works step by step? Specifically the merge step.',
      date: '21 Nov 2024', status: 'pending', reply: null, repliedBy: null
    },
  ];
  localStorage.setItem(QUERIES_KEY, JSON.stringify(defaults));
}

function getAllQueries() {
  try { return JSON.parse(localStorage.getItem(QUERIES_KEY)) || []; }
  catch { return []; }
}

function saveAllQueries(queries) {
  localStorage.setItem(QUERIES_KEY, JSON.stringify(queries));
}

function getQueriesForStudent(rollNo) {
  return getAllQueries().filter(q => q.rollNo === rollNo);
}

function addQuery(subject, text) {
  const queries  = getAllQueries();
  const rollNo   = getSessionId();
  const name     = getSessionName();
  const initials = getSessionInitials();
  const now      = new Date();
  const date     = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const newQuery = {
    id: 'q_' + Date.now() + '_' + rollNo,
    rollNo, name, initials, subject, text, date,
    status: 'pending', reply: null, repliedBy: null
  };
  queries.unshift(newQuery);
  saveAllQueries(queries);
  return newQuery;
}

function replyToQuery(queryId, replyText) {
  const queries     = getAllQueries();
  const teacherName = getSessionName();
  const idx         = queries.findIndex(q => q.id === queryId);
  if (idx === -1) return false;
  queries[idx].status    = 'answered';
  queries[idx].reply     = replyText;
  queries[idx].repliedBy = teacherName;
  saveAllQueries(queries);
  return true;
}

/* ══════════════════════════════════════════════════════════
   AUTH — LOGIN
══════════════════════════════════════════════════════════ */
function studentLogin() {
  const rollNo   = document.getElementById('student-roll').value.trim().toUpperCase();
  const password = document.getElementById('student-pass').value;
  const errorEl  = document.getElementById('student-error');

  if (!rollNo || !password) { showError(errorEl, 'Please enter your Roll Number and Password.'); return; }

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

  if (!empId || !password) { showError(errorEl, 'Please enter your Employee ID and Password.'); return; }

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
  if (!storedRole || storedRole !== role) window.location.href = BASE + '/login.html';
}

function logout() {
  ['gni_role','gni_name','gni_id','gni_sem','gni_dept','gni_initials'].forEach(k => localStorage.removeItem(k));
  window.location.href = BASE + '/login.html';
}

/* ══════════════════════════════════════════════════════════
   SESSION HELPERS
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

function populateSidebarUser() {
  const nameEl   = document.getElementById('sidebar-name');
  const roleEl   = document.getElementById('sidebar-role');
  const avatarEl = document.getElementById('sidebar-avatar');
  if (nameEl)   nameEl.textContent   = getSessionName();
  if (avatarEl) avatarEl.textContent = getSessionInitials();
  if (roleEl)   roleEl.textContent   = getSessionRole() === 'student' ? getSessionSem() : getSessionDept();
}

/* ══════════════════════════════════════════════════════════
   LOGIN PAGE — TAB TOGGLE
══════════════════════════════════════════════════════════ */
function switchTab(tab) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.login-tab[data-tab="${tab}"]`)?.classList.add('active');
  document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
  document.getElementById(`${tab}-form`)?.classList.add('active');
}

/* ══════════════════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════════════════ */
function submitAppointment(e) {
  if (e) e.preventDefault();
  const form      = document.getElementById('appointment-form');
  const successEl = document.getElementById('appointment-success');
  if (!form) return;
  const name  = document.getElementById('appt-name')?.value.trim();
  const phone = document.getElementById('appt-phone')?.value.trim();
  const email = document.getElementById('appt-email')?.value.trim();
  if (!name || !phone || !email) { alert('Please fill in all required fields.'); return; }
  if (successEl) { successEl.style.display = 'block'; setTimeout(() => successEl.style.display = 'none', 5000); }
  form.reset();
}

/* ══════════════════════════════════════════════════════════
   TEACHER NOTICES
══════════════════════════════════════════════════════════ */
function postNotice(e) {
  if (e) e.preventDefault();
  const title    = document.getElementById('notice-title')?.value.trim();
  const category = document.getElementById('notice-category')?.value;
  const body     = document.getElementById('notice-body')?.value.trim();
  const listEl   = document.getElementById('notices-list');
  if (!title || !category || !body) { alert('Please fill in all fields.'); return; }
  const now  = new Date();
  const date = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const badgeClass = { 'Exam': 'badge-danger', 'Event': 'badge-accent', 'Holiday': 'badge-warning', 'General': 'badge-info' }[category] || 'badge-info';
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
  btn.closest('.notice-card')?.remove();
}

/* ══════════════════════════════════════════════════════════
   FILTER QUERIES
══════════════════════════════════════════════════════════ */
function filterQueries(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.query-card').forEach(card => {
    const status = card.querySelector('.badge')?.textContent.trim().toLowerCase();
    if (filter === 'all')      card.style.display = '';
    else if (filter === 'pending')  card.style.display = status === 'pending'  ? '' : 'none';
    else if (filter === 'answered') card.style.display = status === 'answered' ? '' : 'none';
  });
}

/* ══════════════════════════════════════════════════════════
   UTILITY
══════════════════════════════════════════════════════════ */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function gradeClass(grade) {
  return { 'A': 'grade-a', 'B': 'grade-b', 'C': 'grade-c', 'D': 'grade-d' }[grade] || 'grade-d';
}

function attendanceBadge(pct) {
  if (pct >= 75) return pct >= 90 ? 'Excellent' : 'Safe';
  if (pct >= 60) return 'Low';
  return 'At Risk';
}

function attendanceBadgeClass(pct) {
  if (pct >= 75) return 'badge-success';
  if (pct >= 60) return 'badge-warning';
  return 'badge-danger';
}

function ringClass(pct) {
  if (pct >= 75) return 'ring-success';
  if (pct >= 60) return 'ring-warning';
  return 'ring-danger';
}

// Circumference of circle r=30 is 188.5
// stroke-dashoffset = 188.5 * (1 - pct/100)
function ringOffset(pct) {
  return (188.5 * (1 - pct / 100)).toFixed(2);
}

function setActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.endsWith(href.replace('/', ''))) link.classList.add('active');
  });
}

function setActiveSidebarLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && path.includes(href.split('/').pop().replace('.html', ''))) link.classList.add('active');
  });
}

/* ══════════════════════════════════════════════════════════
   AUTO-INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  seedDefaultQueries();
  setActiveNavLink();
  setActiveSidebarLink();
  if (document.querySelector('.login-tabs')) switchTab('student');
  document.getElementById('student-pass')?.addEventListener('keydown', e => { if (e.key === 'Enter') studentLogin(); });
  document.getElementById('teacher-pass')?.addEventListener('keydown', e => { if (e.key === 'Enter') teacherLogin(); });
});