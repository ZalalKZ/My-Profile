/* ============================================================
   ✏️  EDIT YOUR CONTENT HERE
   ============================================================ */
const PROFILE = {
  name:    "Zalaluddin",          // shown as big vertical text
  ghost:   "PORTOFOLIO",          // faded word above the name
  wallet:  "¥ 52,163",           // fun money tag
  role:    "Web Developer / Designer",
  status:  "Active // Select a command",
};

const SECTIONS = {
  about: {
    title: "About Me", jp: "プロフィール", command: "Check Status",
    html: `
      <div class="block">
        <p>Hi! I'm <b>${PROFILE.name}</b> — a ${PROFILE.role.toLowerCase()} who enjoys turning
        ideas into fast, clean and delightful web experiences.</p>
        <p>I care about details: the little transitions, the typography, the way a page feels
        when it responds to you.</p>
      </div>
      <div class="block">
        <h2>Current Focus</h2>
        <div class="tag-list">
          <span class="tag">Frontend Engineering</span>
          <span class="tag">UI Animation</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Creative Coding</span>
        </div>
      </div>
    `,
  },
  skills: {
    title: "Skills", jp: "スキル", command: "Use a Skill",
    html: `
      <div class="block">
        <h2>Everyday Carry</h2>
        <div class="tag-list">
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">React</span>
          <span class="tag">Figma</span>
          
        </div>
      </div>
      <div class="block">
        <h2>Also Equipped</h2>
        <div class="tag-list">
          <span class="tag">Tailwind</span>
          <span class="tag">MsExcel</span>
          <span class="tag">MsWord</span>
          <span class="tag">Canva</span>
          <span class="tag">Capcut</span>
          <span class="tag">Python</span>
          <span class="tag">Cisco</span>
        </div>
      </div>
      <div class="block">
        <h2>Support Skills</h2>
        <div class="entry"><div class="t">Communication</div><div class="d">Explain technical things to normal humans. Works in teams and solo.</div></div>
        <div class="entry"><div class="t">Problem Solving</div><div class="d">Debugs calmly even when the build breaks at 2 AM. (It's always at 2 AM.)</div></div>
      </div>
    `,
  },
  projects: {
    title: "Projects", jp: "プロジェクト", command: "Inspect Item",
    html: `
      <div class="block">
        <h2>Featured</h2>
        <div class="entry">
          <div class="t">Project One</div>
          <div class="s">HTML · CSS · JavaScript</div>
          <div class="d">My first Ever Website and Assignment From University. <a href="https://zalalkz.github.io/Tugas-Latihan-JavaScript/" target="_blank">Live demo ↗</a></div>
        </div>
      </div>
    `,
  },
  experience: {
    title: "Experience", jp: "経歴", command: "View Record",
    html: `
      <div class="block">
        <h2>Calendar Log</h2>
        <div class="entry">
          <div class="t">Junior Network Engineer</div>
          <div class="s">2024 — 2025 · Telkom Subang</div>
          <div class="d">Worked on network maintenance installationand troubleshooting.</div>
        </div>
        <div class="entry">
          <div class="t">Education</div>
          <div class="s">2026 — Now · University</div>
          <div class="d">Degree, bootcamp, or the self-taught path — all valid.</div>
        </div>
      </div>
    `,
  },
  socials: {
    title: "Social Link", jp: "コミュニティ", command: "Open Social Link",
    html: `
      <div class="block">
        <h2>Social Stats</h2>
        <div class="links">
          <a class="link-card" href="https://github.com/ZalalKZ" target="_blank"><span class="ico">GH</span><span><span class="l1">GitHub</span><br/><span class="l2">Code &amp; experiments</span></span></a>
          <a class="link-card" href="https://www.instagram.com/mozalaluddin14_/" target="_blank"><span class="ico">IN</span><span><span class="l1">Instagram</span><br/><span class="l2">Social Media</span></span></a>
      </div>
    `,
  },
  contact: {
    title: "Contact", jp: "コンタクト", command: "Send Signal",
    html: `
      <div class="block">
        <h2>Reach Out</h2>
        <div class="contact-row">
          <div class="contact-line"><span class="k">Email</span><a href="mailto:jala647893@gmail.com">jala647893@gmail.com</a></div>
          <div class="contact-line"><span class="k">Location</span><span>Subang, Indonesia — remote friendly</span></div>
          <div class="contact-line"><span class="k">Status</span><span>Open to freelance &amp; full-time opportunities</span></div>
          <div class="contact-line"><span class="k">Response</span><span>Usually within 24 hours</span></div>
        </div>
      </div>
      <div class="block">
        <p>The fastest way to reach me is email. Tell me about your project, timeline,
        and what success looks like — I'll take it from there.</p>
      </div>
    `,
  },
};

/* menu items: label / section / per-item styling like the P3R menu */
const MENU = [
  { id: "about",      label: "About Me",    size: 76, mx: 0,  my: 6,  skewX: -6,  skewY: 10 },
  { id: "skills",     label: "Skills",      size: 72, mx: 22, my: 8,  skewX: -11, skewY: -9 },
  { id: "projects",   label: "Projects",     size: 62, mx: 10, my: 6,  skewX: -3,  skewY: 5  },
  { id: "experience", label: "Experience",   size: 54, mx: 16, my: 8,  skewX: -7,  skewY: 8  },
  { id: "socials",    label: "Social Link", size: 58, mx: 8,  my: 6,  skewX: 0,   skewY: -4 },
  { id: "contact",    label: "Contact",      size: 60, mx: 20, my: 10, skewX: -5,  skewY: 7  },
];

const TRIANGLE = (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`;

/* ============================================================
   RENDER
   ============================================================ */
const menuInner  = document.getElementById("menuInner");
const panel      = document.getElementById("panel");
const panelBody  = document.getElementById("panelBody");
const panelTitle = document.getElementById("panelTitle");
const panelJp    = document.getElementById("panelJp");
const commandMain= document.getElementById("commandMain");
const commandSub = document.getElementById("commandSub");
const statusLine = document.getElementById("statusLine");
const intro      = document.getElementById("intro");
const bgVideo    = document.getElementById("bg");

let active = 0;
let mounted = false;
let openId = null;

// name tag
document.getElementById("nameGhost").textContent = PROFILE.ghost;
document.getElementById("nameSolid").textContent = PROFILE.name;
document.getElementById("walletAmount").textContent = PROFILE.wallet;

// menu rows
MENU.forEach((item, i) => {
  const w = item.label.length * item.size * 0.62 + 80;
  const h = item.size * 0.96;
  const clip = TRIANGLE(w, h);

  const a = document.createElement("a");
  a.href = "#";
  a.className = "row";
  a.style.marginLeft = item.mx + "px";
  a.style.marginTop  = item.my + "px";
  a.setAttribute("role", "menuitem");
  a.innerHTML = `
    <div class="glow"></div>
    <div class="skew-wrap" style="transform: skewX(${item.skewX}deg) skewY(${item.skewY}deg)">
      <div class="shadow-tri" style="width:${w}px;height:${h}px;clip-path:${clip}"></div>
      <div class="highlight" style="width:${w}px;height:${h}px;clip-path:${clip}"></div>
      <div class="label-wrap"><span class="label label-base" style="font-size:${item.size}px">${item.label}</span></div>
    </div>`;
  a.addEventListener("mouseenter", () => setActive(i));
  a.addEventListener("click", (e) => { e.preventDefault(); confirm(i); });
  menuInner.appendChild(a);
});

const rows = [...menuInner.children];

function setActive(i) {
  if (i === active) return;
  active = i;
  renderActive();
}

function renderActive() {
  rows.forEach((r, i) => {
    const isActive = i === active;
    r.classList.toggle("active", isActive);
    const tri = r.querySelector(".shadow-tri");
    if (isActive) {
      // retrigger the pop animation
      tri.classList.remove("pop");
      void tri.offsetWidth; // force reflow so the animation restarts
      tri.classList.add("pop");
    } else {
      // release the wedge so it scales back to 0 after the item loses focus
      tri.classList.remove("pop");
    }
  });
  const sec = SECTIONS[MENU[active].id];
  commandMain.textContent = sec.command;
  commandSub.textContent  = "Command";
  statusLine.textContent  = "Active // " + MENU[active].label;
}

function confirm(i) {
  if (i !== active) { active = i; renderActive(); }
  openSection(MENU[active].id);
}

function openSection(id) {
  const sec = SECTIONS[id];
  openId = id;
  panelTitle.textContent = sec.title;
  panelJp.textContent = sec.jp;
  panelBody.innerHTML = sec.html;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  statusLine.textContent = "Open // " + sec.title;
  commandMain.textContent = "Close";
  commandSub.textContent = "Press Ⓑ / Esc";
}

function closeSection() {
  openId = null;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  const sec = SECTIONS[MENU[active].id];
  commandMain.textContent = sec.command;
  commandSub.textContent = "Command";
  statusLine.textContent = "Active // " + MENU[active].label;
}

document.getElementById("closeBtn").addEventListener("click", closeSection);

// keyboard — just like the game
window.addEventListener("keydown", (e) => {
  if (openId) {
    if (e.key === "Escape" || e.key === "Backspace") { e.preventDefault(); closeSection(); }
    return;
  }
  if (e.key === "ArrowUp" || e.key === "w")   { e.preventDefault(); setActive(Math.max(0, active - 1)); }
  if (e.key === "ArrowDown" || e.key === "s") { e.preventDefault(); setActive(Math.min(MENU.length - 1, active + 1)); }
  if (e.key === "Enter" || e.key === " ")     { e.preventDefault(); confirm(active); }
});

// party chips (decorative, mirrors the right-side HUD)
const PARTY = ["ME", "PJ", "YK"];
const partyEl = document.getElementById("party");
PARTY.forEach((p, i) => {
  const chip = document.createElement("div");
  chip.className = "chip" + (i === 0 ? " active-chip" : "");
  chip.innerHTML = `<div class="face">${p}</div>
    <div class="bars">
      <div class="bar"><i style="width:${90 - i * 12}%"></i></div>
      <div class="bar"><i style="width:${70 + i * 8}%"></i></div>
    </div>`;
  partyEl.appendChild(chip);
});

// clock — P3R style date/time
function tick() {
  const d = new Date();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateLine = `${d.getMonth() + 1}/${String(d.getDate()).padStart(2, "0")} ${days[d.getDay()]}`;
  let h = d.getHours();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  document.getElementById("dateLine").textContent = dateLine;
  document.getElementById("timeLine").textContent =
    `${h}:${String(d.getMinutes()).padStart(2, "0")} ${ampm}`;
}
tick();
setInterval(tick, 1000);

// mount animation
setTimeout(() => {
  rows.forEach((r, i) => {
    r.style.transitionDelay = (i * 70) + "ms";
    r.classList.add("mounted");
  });
  renderActive();
  setTimeout(() => rows.forEach((r) => (r.style.transitionDelay = "0ms")), 900);
}, 300);

// intro: browsers block autoplay audio; video is muted so start right away,
// but keep a click-to-dismiss splash for style
bgVideo.play().catch(() => {});
function hideIntro() {
  intro.classList.add("hide");
  window.removeEventListener("keydown", hideIntro);
}
intro.addEventListener("click", hideIntro);
window.addEventListener("keydown", hideIntro);
setTimeout(hideIntro, 2200);
