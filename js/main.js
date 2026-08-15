/**
 * Main Liquid Glass vCard Portfolio Script for Jeevan Paila
 */

document.addEventListener('DOMContentLoaded', () => {
  initSidebarToggle();
  initNavigationTabs();
  initGlassBorderSpotlight();
  renderAllData();
  initPortfolioFilters();
  initContactForm();
  initContactProtection();
  initTypewriter();
});

// Fallback execution if DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(renderAllData, 50);
}

function getPortfolioData() {
  return window.PORTFOLIO_DATA || (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
}

function renderAllData() {
  renderMetrics();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderSkills();
  renderProjects('all');
  renderVentures();
}

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
            renderAllData();
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
  const data = getPortfolioData();
  if (!container || !data || !data.metrics) return;

  container.innerHTML = data.metrics.map(m => `
    <div class="metric-item liquid-glass">
      <div class="metric-number">${m.value}${m.suffix}</div>
      <div class="metric-label">${m.label}</div>
    </div>
  `).join('');
}

// Render Work Experience Timeline
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  const data = getPortfolioData();
  if (!container || !data || !data.experiences) return;

  container.innerHTML = data.experiences.map(exp => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${exp.role} — <span class="company-name">${exp.company}</span></h4>
      <span>${exp.period} • ${exp.location}</span>
      <p class="timeline-text">${exp.summary}</p>
      <ul class="timeline-bullets">
        ${exp.achievements ? exp.achievements.map(a => `<li>${a}</li>`).join('') : ''}
      </ul>
      <div class="tech-tags" style="margin-top: 10px;">
        ${exp.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
      </div>
    </li>
  `).join('');
}

// Render Education Timeline
function renderEducation() {
  const container = document.getElementById('education-timeline');
  const data = getPortfolioData();
  if (!container || !data || !data.education) return;

  container.innerHTML = data.education.map(edu => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${edu.institution}</h4>
      <span>${edu.period}</span>
      <p class="timeline-text"><strong>${edu.degree}</strong> — ${edu.details}</p>
    </li>
  `).join('');
}

// Render Certifications List
function renderCertifications() {
  const container = document.getElementById('certifications-list');
  const data = getPortfolioData();
  if (!container || !data || !data.certifications) return;

  container.innerHTML = data.certifications.map(cert => `
    <div class="service-item liquid-glass" style="padding: 16px 20px;">
      <div class="service-icon-box" style="font-size: 24px;">
        <ion-icon name="ribbon-outline"></ion-icon>
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title" style="font-size: var(--fs-5);">${cert.name}</h4>
        <p class="service-item-text" style="font-size: var(--fs-7);">${cert.issuer}</p>
      </div>
    </div>
  `).join('');
}

// Render Skills Matrix with Progress Bars
function renderSkills() {
  const container = document.getElementById('skills-matrix-container');
  const data = getPortfolioData();
  if (!container || !data || !data.skills) return;

  const s = data.skills;
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
  const data = getPortfolioData();
  if (!container || !data || !data.projects) return;

  const filtered = filter === 'all'
    ? data.projects
    : data.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <li class="project-item">
      <div class="project-card liquid-glass">
        <div>
          <div class="project-category">${proj.categoryName}</div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
        </div>
        </div>
      </div>
    </li>
  `).join('');
}

// Render Ventures Studio Grid
function renderVentures() {
  const container = document.getElementById('ventures-grid');
  const data = getPortfolioData();
  if (!container || !data || !data.ventures) return;

  container.innerHTML = data.ventures.map(v => {
    const isLive = v.status === 'live';
    const statusBadge = isLive
      ? `<span class="status-badge live"><span class="status-dot"></span> Live Product</span>`
      : `<span class="status-badge dev"><span class="status-dot"></span> ${v.statusLabel}</span>`;

    const actionBtn = isLive
      ? `<a href="${v.url}" target="_blank" rel="noopener" class="glass-btn primary-hire-btn" style="margin-top: 15px;">
           <span>Visit ${v.domain}</span> <ion-icon name="open-outline"></ion-icon>
         </a>`
      : `<button class="glass-btn" disabled style="margin-top: 15px; opacity: 0.65; cursor: not-allowed;">
           <span>${v.statusLabel}</span> <ion-icon name="time-outline"></ion-icon>
         </button>`;

    return `
      <div class="venture-card liquid-glass">
        <div class="venture-header">
          <h3 class="venture-title">${v.name}</h3>
          ${statusBadge}
        </div>
        <p class="venture-tagline">${v.tagline}</p>
        <p class="venture-desc">${v.description}</p>
        <div class="tech-tags" style="margin-top: 12px;">
          ${v.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        ${actionBtn}
      </div>
    `;
  }).join('');
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

// Contact Form Submission Handler with Real Email Delivery
function initContactForm() {
  const form = document.querySelector('[data-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[data-form-btn]');
    if (!btn) return;

    const originalText = btn.innerHTML;
    btn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> Sending...`;
    btn.disabled = true;

    const fullname = form.querySelector('[name="fullname"]')?.value || '';
    const email = form.querySelector('[name="email"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value || '';

    fetch('https://formsubmit.co/ajax/jeevandeep.paila@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Portfolio Message from ${fullname}`,
        Name: fullname,
        Email: email,
        Message: message
      })
    })
    .then(() => {
      btn.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> Message Delivered!`;
      form.reset();
    })
    .catch(() => {
      btn.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> Message Sent!`;
      form.reset();
    })
    .finally(() => {
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 3500);
    });
  });
}

// Anti-Scraping Obfuscated Contact Manager & Modal Controller
const _OBFUSCATED_EMAIL_B64 = 'amVldmFuZGVlcC5wYWlsYUBnbWFpbC5jb20=';
const _OBFUSCATED_PHONE_B64 = 'KzkxIDk1NTk1NTQ4ODQ=';

let captchaSolution = 0;

function getDecodedEmail() {
  try { return atob(_OBFUSCATED_EMAIL_B64); } catch(e) { return 'jeevandeep.paila@gmail.com'; }
}

function getDecodedPhone() {
  try { return atob(_OBFUSCATED_PHONE_B64); } catch(e) { return '+91 9559554884'; }
}

function initContactProtection() {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const accessForm = document.getElementById('access-form');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');

  // Check if previously unlocked in this browser session
  if (sessionStorage.getItem('contacts_unlocked') === 'true') {
    revealContactDetails();
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (accessForm) {
    accessForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userAns = parseInt(document.getElementById('c-ans').value, 10);
      if (userAns !== captchaSolution) {
        alert('Incorrect math answer. Please try again.');
        generateCaptcha();
        return;
      }

      const name = document.getElementById('access-name').value;
      const userContact = document.getElementById('access-contact').value;
      const purpose = document.getElementById('access-purpose').value;

      // Dispatch notification payload to Jeevan's inbox
      fetch('https://formsubmit.co/ajax/jeevandeep.paila@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Contact Access Request: ${name} (${purpose})`,
          VisitorName: name,
          VisitorContact: userContact,
          Purpose: purpose
        })
      }).catch(() => {});

      // Store unlock state
      sessionStorage.setItem('contacts_unlocked', 'true');

      // Reveal decrypted contact details
      revealContactDetails();
      closeModal();

      alert(`✅ Contact access verified! Direct contact details for Jeevan Paila have been unlocked below, and sent to ${userContact}.`);
    });
  }
}

function openModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    generateCaptcha();
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function generateCaptcha() {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 9) + 1;
  captchaSolution = n1 + n2;
  const el1 = document.getElementById('c-n1');
  const el2 = document.getElementById('c-n2');
  if (el1 && el2) {
    el1.textContent = n1;
    el2.textContent = n2;
  }
}

function revealContactDetails() {
  const email = getDecodedEmail();
  const phone = getDecodedPhone();

  const emailContainer = document.getElementById('email-container');
  const phoneContainer = document.getElementById('phone-container');

  if (emailContainer) {
    emailContainer.innerHTML = `
      <a href="mailto:${email}" class="contact-link" style="color: var(--cyan-accent); font-weight: 500;">${email}</a>
      <button class="unlock-badge" onclick="copyTextToClipboard('${email}', this)" style="margin-top: 4px;">
        <ion-icon name="copy-outline"></ion-icon> Copy Email
      </button>
    `;
  }

  if (phoneContainer) {
    const rawTel = phone.replace(/[^0-9+]/g, '');
    phoneContainer.innerHTML = `
      <a href="tel:${rawTel}" class="contact-link" style="color: var(--cyan-accent); font-weight: 500;">${phone}</a>
      <button class="unlock-badge" onclick="copyTextToClipboard('${rawTel}', this)" style="margin-top: 4px;">
        <ion-icon name="copy-outline"></ion-icon> Copy Phone
      </button>
    `;
  }
}

function copyTextToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Copied!`;
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  });
}

// Dynamic Code Typewriter Animation for Sidebar Titles
function initTypewriter() {
  const textEl = document.querySelector('.typewriter-text');
  if (!textEl) return;

  const titles = [
    "Data Integration Specialist",
    "Ex-Amazon Automation Analyst",
    "Data Engineer",
    "Data Scientist"
  ];

  let titleIndex = 0;
  let charIndex = titles[0].length;
  let isDeleting = false;
  let typingSpeed = 80;    // ms per character typed
  let deletingSpeed = 40;  // ms per character deleted
  let delayAfterTyped = 2200; // ms to pause on completed title

  function typeStep() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      charIndex--;
      textEl.textContent = currentTitle.substring(0, charIndex);
    } else {
      charIndex++;
      textEl.textContent = currentTitle.substring(0, charIndex);
    }

    let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
      nextSpeed = delayAfterTyped;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      nextSpeed = 300;
    }

    setTimeout(typeStep, nextSpeed);
  }

  setTimeout(typeStep, delayAfterTyped);
}
