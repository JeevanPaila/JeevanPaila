/**
 * Main Application Script for Jeevan Paila Portfolio
 * Handles UI rendering, theme management, scroll observers, dynamic filtering, modal popups.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize App
  renderProfile();
  renderMetrics();
  renderExperience();
  renderProjects('all');
  renderSkills();
  bindThemeToggle();
  bindProjectFilters();
  bindContactForm();
  initScrollAnimations();
  initMetricCounters();
});

// Render Hero & Profile Details
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  
  // Set elements
  setTextContent('hero-name', p.name);
  setTextContent('hero-subtitle', p.subtitle);
  setTextContent('about-bio', p.bio);
  setTextContent('status-pill', p.status);
  setTextContent('contact-email', p.email);
  setTextContent('contact-phone', p.phone);
  setTextContent('contact-location', p.location);

  // Links
  setHref('cv-btn-hero', p.cvLink);
  setHref('cv-btn-nav', p.cvLink);
  setHref('github-link-nav', p.socials.github);
  setHref('linkedin-link-nav', p.socials.linkedin);
  setHref('github-link-footer', p.socials.github);
  setHref('linkedin-link-footer', p.socials.linkedin);
  setHref('whatsapp-link-contact', p.socials.whatsapp);
  setHref('email-link-contact', p.socials.email);
}

// Render Key Metrics
function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;
  
  container.innerHTML = PORTFOLIO_DATA.metrics.map(m => `
    <div class="metric-card glass-card">
      <div class="metric-value-box">
        <span class="metric-value" data-target="${m.value}">${m.value}</span>
        <span class="metric-suffix">${m.suffix}</span>
      </div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-desc">${m.description}</div>
    </div>
  `).join('');
}

// Render Experience Timeline
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experiences.map((exp, index) => `
    <div class="timeline-item glass-card reveal">
      <div class="timeline-badge">${index + 1}</div>
      <div class="timeline-header">
        <div>
          <h3 class="timeline-role">${exp.role}</h3>
          <h4 class="timeline-company">${exp.company}</h4>
        </div>
        <div class="timeline-meta">
          <span class="timeline-period"><ion-icon name="calendar-outline"></ion-icon> ${exp.period}</span>
          <span class="timeline-location"><ion-icon name="location-outline"></ion-icon> ${exp.location}</span>
        </div>
      </div>
      <p class="timeline-summary">${exp.summary}</p>
      <ul class="timeline-achievements">
        ${exp.achievements.map(ach => `<li><ion-icon name="checkmark-circle-outline"></ion-icon> ${ach}</li>`).join('')}
      </ul>
      <div class="tech-tags">
        ${exp.skills.map(sk => `<span class="tech-tag">${sk}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render Filterable Projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <div class="project-card glass-card reveal" data-category="${proj.category}">
      <div class="project-header">
        <span class="project-category-badge">${proj.categoryName}</span>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener" title="GitHub Repo" class="icon-link">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.description}</p>
      <ul class="project-highlights">
        ${proj.highlights.slice(0, 2).map(h => `<li><ion-icon name="chevron-forward-outline"></ion-icon> ${h}</li>`).join('')}
      </ul>
      <div class="tech-tags">
        ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render Skills Matrix
function renderSkills() {
  const s = PORTFOLIO_DATA.skills;
  
  // Render Skill Bars / Cards
  renderSkillGroup('skills-lang', s.languages);
  renderSkillGroup('skills-ml', s.mlAndAi);
  renderSkillGroup('skills-de', s.dataEngineering);
  renderSkillGroup('skills-cloud', s.cloudAndTools);
}

function renderSkillGroup(elementId, items) {
  const container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = items.map(sk => `
    <div class="skill-item">
      <div class="skill-info">
        <span class="skill-name">${sk.name}</span>
        <span class="skill-pct">${sk.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width: 0%;" data-level="${sk.level}%"></div>
      </div>
    </div>
  `).join('');
}

// Bind Category Filter Buttons
function bindProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

// Theme Toggle Engine
function bindThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  // Check stored theme preference
  const savedTheme = localStorage.getItem('jeevan_portfolio_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('jeevan_portfolio_theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
    if (window.dataCanvas) window.dataCanvas.init();
    if (window.mlSim) window.mlSim.render();
  });
}

function updateThemeIcon(isLight) {
  const icon = document.querySelector('#theme-toggle-btn ion-icon');
  if (icon) {
    icon.setAttribute('name', isLight ? 'moon-outline' : 'sunny-outline');
  }
}

// Contact Form & Quick Email Copy
function bindContactForm() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Copied!`;
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.classList.remove('copied');
        }, 2500);
      });
    });
  }
}

// Intersection Observer for Reveal Animations & Skill Bars Fill
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger skill bars animation if inside
        const skillFills = entry.target.querySelectorAll('.skill-bar-fill');
        skillFills.forEach(fill => {
          fill.style.width = fill.getAttribute('data-level');
        });
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .skill-group-card').forEach(el => observer.observe(el));
}

// Metric Count-Up Animation
function initMetricCounters() {
  const metricsSection = document.getElementById('metrics-grid');
  if (!metricsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.metric-value').forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const duration = 1800; // ms
          const start = 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const currentVal = start + (target - start) * (1 - (1 - progress) * (1 - progress));
            
            counter.textContent = target % 1 === 0 ? Math.floor(currentVal) : currentVal.toFixed(1);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }

          requestAnimationFrame(updateCounter);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(metricsSection);
}

// Utility Helpers
function setTextContent(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function setHref(id, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute('href', val);
}
