/**
 * Interactive Data Science Playground
 * 1. Live Interactive ML Model Simulator (Linear Regression Scatter & Model Curve Fitting)
 * 2. Interactive Data Pipeline Flow Visualizer (Ingestion -> ETL -> Feature Store -> ML Inference -> BI Dashboard)
 */

class MLModelSimulator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    // Default hyperparameters
    this.lr = 0.05;
    this.pointCount = 35;
    this.noise = 0.25;
    this.epochs = 50;
    
    // Weights
    this.slope = 0;
    this.intercept = 0;

    this.points = [];
    this.generateData();
    this.fitModel();
    this.render();
    this.bindControls();
  }

  generateData() {
    this.points = [];
    // Target true model: y = 0.65 * x + 0.15 + noise
    for (let i = 0; i < this.pointCount; i++) {
      let x = (Math.random() - 0.5) * 2; // -1 to 1
      let trueY = 0.65 * x + 0.15;
      let y = trueY + (Math.random() - 0.5) * this.noise * 2;
      this.points.push({ x, y });
    }
  }

  fitModel() {
    // Gradient descent simulation
    this.slope = 0.1;
    this.intercept = 0.0;
    
    for (let epoch = 0; epoch < this.epochs; epoch++) {
      let dSlope = 0;
      let dIntercept = 0;
      const n = this.points.length;

      for (let p of this.points) {
        let pred = this.slope * p.x + this.intercept;
        let err = pred - p.y;
        dSlope += (2 / n) * err * p.x;
        dIntercept += (2 / n) * err;
      }

      this.slope -= this.lr * dSlope;
      this.intercept -= this.lr * dIntercept;
    }

    // Calculate MSE loss & R2 score
    let totalErr = 0;
    let meanY = this.points.reduce((acc, p) => acc + p.y, 0) / this.points.length;
    let totalSS = 0;
    let resSS = 0;

    for (let p of this.points) {
      let pred = this.slope * p.x + this.intercept;
      totalErr += Math.pow(pred - p.y, 2);
      totalSS += Math.pow(p.y - meanY, 2);
      resSS += Math.pow(p.y - pred, 2);
    }

    let mse = (totalErr / this.points.length).toFixed(4);
    let r2 = Math.max(0, (1 - (resSS / (totalSS || 1)))).toFixed(3);

    // Update UI metric counters
    const mseEl = document.getElementById('sim-mse');
    const r2El = document.getElementById('sim-r2');
    const slopeEl = document.getElementById('sim-slope');
    
    if (mseEl) mseEl.textContent = mse;
    if (r2El) r2El.textContent = (r2 * 100).toFixed(1) + '%';
    if (slopeEl) slopeEl.textContent = this.slope.toFixed(3);
  }

  render() {
    if (!this.canvas) return;
    const w = this.canvas.width = this.canvas.clientWidth || 400;
    const h = this.canvas.height = 260;

    this.ctx.clearRect(0, 0, w, h);
    const isDark = !document.body.classList.contains('light-theme');

    // Draw coordinate grid
    this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
    this.ctx.lineWidth = 1;

    // Grid lines
    for (let x = 40; x < w; x += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }
    for (let y = 40; y < h; y += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    // Map point coordinates to canvas pixel space
    const toCanvasX = (x) => ((x + 1.2) / 2.4) * w;
    const toCanvasY = (y) => h - ((y + 1.2) / 2.4) * h;

    // Draw Scatter Points
    for (let p of this.points) {
      let cx = toCanvasX(p.x);
      let cy = toCanvasY(p.y);

      this.ctx.beginPath();
      this.ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      this.ctx.fillStyle = isDark ? '#00F2FE' : '#0284C7';
      this.ctx.shadowBlur = isDark ? 8 : 4;
      this.ctx.shadowColor = isDark ? '#00F2FE' : '#0284C7';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    // Draw Fitted Regression Line
    let xStart = -1.2;
    let yStart = this.slope * xStart + this.intercept;
    let xEnd = 1.2;
    let yEnd = this.slope * xEnd + this.intercept;

    this.ctx.beginPath();
    this.ctx.moveTo(toCanvasX(xStart), toCanvasY(yStart));
    this.ctx.lineTo(toCanvasX(xEnd), toCanvasY(yEnd));
    this.ctx.strokeStyle = isDark ? '#7F56D9' : '#9333EA';
    this.ctx.lineWidth = 3;
    this.ctx.shadowBlur = isDark ? 10 : 4;
    this.ctx.shadowColor = isDark ? '#7F56D9' : '#9333EA';
    this.ctx.stroke();
    this.ctx.shadowBlur = 0;
  }

  bindControls() {
    const lrInput = document.getElementById('sim-lr-input');
    const ptsInput = document.getElementById('sim-pts-input');
    const epochsInput = document.getElementById('sim-epochs-input');
    const resetBtn = document.getElementById('sim-reset-btn');

    if (lrInput) {
      lrInput.addEventListener('input', (e) => {
        this.lr = parseFloat(e.target.value);
        document.getElementById('sim-lr-val').textContent = this.lr.toFixed(2);
        this.fitModel();
        this.render();
      });
    }

    if (ptsInput) {
      ptsInput.addEventListener('input', (e) => {
        this.pointCount = parseInt(e.target.value);
        document.getElementById('sim-pts-val').textContent = this.pointCount;
        this.generateData();
        this.fitModel();
        this.render();
      });
    }

    if (epochsInput) {
      epochsInput.addEventListener('input', (e) => {
        this.epochs = parseInt(e.target.value);
        document.getElementById('sim-epochs-val').textContent = this.epochs;
        this.fitModel();
        this.render();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.generateData();
        this.fitModel();
        this.render();
      });
    }

    window.addEventListener('resize', () => this.render());
  }
}

// Data Pipeline Interactive Highlights
function initPipelineVisualizer() {
  const steps = document.querySelectorAll('.pipeline-step');
  const detailTitle = document.getElementById('pipeline-detail-title');
  const detailDesc = document.getElementById('pipeline-detail-desc');
  const detailMetrics = document.getElementById('pipeline-detail-metrics');

  const pipelineDetails = {
    ingestion: {
      title: "1. Data Ingestion & Streaming Layer",
      desc: "Connects multi-cloud REST APIs, PostgreSQL DB replicas, Kafka streams, and IoT event logs into raw Bronze storage tables.",
      metrics: "• Latency: <100ms | Ingestion Speed: 50,000 events/sec | Format: Parquet & JSON"
    },
    transformation: {
      title: "2. PySpark ETL & Delta Lake Transformation",
      desc: "Distributed schema validation, deduplication, null remediation, and Silver table medallion data transformation.",
      metrics: "• Compute: Apache Spark 3.4 | Schema Evolution: Enabled | Error Handling: Automated"
    },
    featurestore: {
      title: "3. ML Feature Store & Data Governance",
      desc: "Centralized repository for versioned ML training features, historical time-series embeddings, and data drift detection.",
      metrics: "• Storage: Snowflake & AWS S3 | Feature Versioning: Git & Feast | Governance: Great Expectations"
    },
    inference: {
      title: "4. Real-Time ML Inference & Scoring Engine",
      desc: "Containerized FastAPI microservices running PyTorch / XGBoost models for live prediction, anomaly detection, and scoring.",
      metrics: "• Latency: <25ms p99 | Monitoring: Prometheus + Grafana | Auto-scaling: K8s"
    },
    analytics: {
      title: "5. Executive Dashboards & Automated Actions",
      desc: "Interactive Tableau/PowerBI visual intelligence reports, webhook alerts, and downstream CRM automation.",
      metrics: "• Refresh Rate: Real-time | Users: C-Suite & Ops Teams | Uptime: 99.8%"
    }
  };

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      const stepKey = step.getAttribute('data-step');
      if (pipelineDetails[stepKey]) {
        if (detailTitle) detailTitle.textContent = pipelineDetails[stepKey].title;
        if (detailDesc) detailDesc.textContent = pipelineDetails[stepKey].desc;
        if (detailMetrics) detailMetrics.textContent = pipelineDetails[stepKey].metrics;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  window.mlSim = new MLModelSimulator('sim-canvas');
  initPipelineVisualizer();
});
