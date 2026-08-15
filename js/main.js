/**
 * Main Liquid Glass vCard Portfolio Script for Jeevan Paila
 */

document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  initNavigationTabs();
  initGlassBorderSpotlight();
  renderMetrics();
  renderExperience();
  renderSkills();
  renderProjects('all');
  initPortfolioFilters();
  initContactForm();
});

// Dynamic Edge Border Spotlight following cursor direction
function initGlassBorderSpotlight() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.liquid-glass');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Sidebar Toggle Logic for Mobile
function initSidebarToggle() {
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
}

// vCard Page Navigation Logic (Tab Switching)
function initNavigationTabs() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const selectedPage = this.getAttribute('data-nav-link');

      // Update Nav Buttons
      navLinks.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      // Update Active Article Page
      pages.forEach(page => {
        if (page.getAttribute('data-page') === selectedPage) {
          page.classList.add('active');
          window.scrollTo(0, 0);

          // If Data Lab tab opened, re-render ML Simulator Canvas
          if (selectedPage === 'datalab' && window.mlSim) {
            setTimeout(() => window.mlSim.render(), 100);
          }

          // Trigger Skill bar fill animations if Resume tab opened
          if (selectedPage === 'resume') {
            setTimeout(animateSkillBars, 150);
          }
        } else {
          page.classList.remove('active');
        }
      });
    });
  });
}

// Render Metrics Grid with Liquid Glass cards
function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container || !window.PORTFOLIO_DATA) return;

  container.innerHTML = PORTFOLIO_DATA.metrics.map(m => `
    <div class="metric-item liquid-glass">
      <div class="metric-number">${m.value}${m.suffix}</div>
      <div class="metric-label">${m.label}</div>
    </div>
  `).join('');
}

// Render Work Experience Timeline
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !window.PORTFOLIO_DATA) return;

  container.innerHTML = PORTFOLIO_DATA.experiences.map(exp => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${exp.role}</h4>
      <div class="timeline-item-company">${exp.company} • (${exp.period})</div>
      <p class="timeline-text">${exp.summary}</p>
      <div class="tech-tags" style="margin-top: 8px;">
        ${exp.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
      </div>
    </li>
  `).join('');
}

// Render Skills Matrix with Progress Bars
function renderSkills() {
  const container = document.getElementById('skills-matrix-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const s = PORTFOLIO_DATA.skills;
  const allSkills = [
    ...s.languages.map(x => ({ ...x, cat: "Languages" })),
    ...s.mlAndAi.map(x => ({ ...x, cat: "Machine Learning" })),
    ...s.dataEngineering.map(x => ({ ...x, cat: "Data Engineering" })),
    ...s.cloudAndTools.map(x => ({ ...x, cat: "Cloud & MLOps" }))
  ];

  container.innerHTML = allSkills.map(sk => `
    <div class="skills-item">
      <div class="title-wrapper">
        <h5 class="skill-title">${sk.name}</h5>
        <data value="${sk.level}" class="skill-pct">${sk.level}%</data>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-level="${sk.level}%"></div>
      </div>
    </div>
  `).join('');
}

function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');
  fills.forEach(fill => {
    fill.style.width = fill.getAttribute('data-level');
  });
}

// Render Projects Grid with Liquid Glass Cards
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !window.PORTFOLIO_DATA) return;

  const filtered = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <li class="project-item">
      <div class="project-card liquid-glass">
        <div>
          <div class="project-category">${proj.categoryName}</div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
        </div>
        <div class="tech-tags">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </li>
  `).join('');
}

// Filter Buttons
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-item button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

// Contact Form Submission Handler
function initContactForm() {
  const form = document.querySelector('[data-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[data-form-btn]');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> Message Sent!`;
      form.reset();
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 3000);
    }
  });
}
