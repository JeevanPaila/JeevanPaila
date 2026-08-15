/**
 * Interactive Neural Constellation & Data Particle Canvas
 * Renders dynamic particle nodes, interconnecting synapses, and mouse interaction effects.
 */

class DataConstellationCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.particles = [];
    this.particleCount = 60;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 180 };
    
    this.init();
    this.animate();
    this.bindEvents();
  }

  init() {
    this.resize();
    this.particles = [];
    const isDark = document.body.classList.contains('dark-theme') || !document.body.classList.contains('light-theme');
    
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
        color: isDark ? (Math.random() > 0.3 ? '#00F2FE' : '#4FACFE') : (Math.random() > 0.3 ? '#0284C7' : '#2563EB'),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.02
      });
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.particleCount = Math.floor(Math.min(this.width, this.height) / 18);
    this.particleCount = Math.max(35, Math.min(this.particleCount, 85));
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const isDark = !document.body.classList.contains('light-theme');

    // Update & draw particles
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];

      // Pulse radius
      p.pulse += p.pulseSpeed;
      let currentRadius = p.radius + Math.sin(p.pulse) * 0.8;

      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Bounce at boundary
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse attraction / repulsion
      if (this.mouse.x !== null && this.mouse.y !== null) {
        let dx = this.mouse.x - p.x;
        let dy = this.mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          let force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      // Draw particle glow node
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = isDark ? 12 : 6;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset

      // Connect nearby particles with glowing lines
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          let alpha = (1 - dist / this.maxDistance) * (isDark ? 0.35 : 0.2);
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = isDark 
            ? `rgba(0, 242, 254, ${alpha})`
            : `rgba(2, 132, 199, ${alpha})`;
          this.ctx.lineWidth = 1 - dist / this.maxDistance;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.dataCanvas = new DataConstellationCanvas('bg-canvas');
});
