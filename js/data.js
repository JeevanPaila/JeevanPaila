/**
 * Personal & Professional Data Configuration for Jeevan Paila
 * Data Scientist | Data Integration Specialist | ML Engineer
 * 
 * Edit this file to update profile details, work experience, education, projects, skills, or contact info.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Jeevan Paila",
    title: "Data Scientist & Data Integration Specialist",
    subtitle: "Architecting Scalable Data Pipelines, Predictive AI Models & Enterprise Intelligence Systems",
    bio: "Passionate Data Scientist with 5+ years of expertise in building enterprise-grade ETL pipelines, machine learning models, and real-time data integration systems. Specialized in transforming high-volume unstructured and structured data into high-impact predictive insights and scalable automated workflows.",
    location: "Bengaluru & Bhubaneswar, India",
    email: "jeevandeep.paila@gmail.com",
    phone: "+91 9559554884",
    status: "Available for high-impact Data Science & AI leadership roles",
    cvLink: "./resume.pdf",
    socials: {
      github: "https://github.com/JeevanPaila",
      linkedin: "https://www.linkedin.com/in/jeevanpaila/",
      whatsapp: "https://wa.me/919559554884/",
      kaggle: "https://www.kaggle.com/jeevanpaila",
      email: "mailto:jeevandeep.paila@gmail.com"
    }
  },

  metrics: [
    { label: "Years Experience", value: 5, suffix: "+", description: "In Data Science, Analytics & ETL Systems" },
    { label: "Data Processed", value: 10, suffix: "M+", description: "Records Processed Daily via PySpark Pipelines" },
    { label: "Pipeline Uptime", value: 99.8, suffix: "%", description: "Enterprise Data Reliability Standard" },
    { label: "ML Models Deployed", value: 15, suffix: "+", description: "Production Predictive Models & Analytics Tools" }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Senior Data Integration Specialist & Data Scientist",
      company: "Enterprise AI & Data Solutions",
      period: "2021 — Present",
      location: "Bengaluru, India",
      summary: "Leading end-to-end data architecture, multi-source ingestion pipelines, and ML feature store development for enterprise analytics platforms.",
      achievements: [
        "Architected distributed PySpark & Databricks Delta Lake pipelines processing 10M+ daily records with 99.8% operational uptime.",
        "Engineered predictive machine learning models for customer churn and real-time transaction anomaly detection.",
        "Optimized complex SQL queries and snowflake schema transformations, reducing pipeline execution latency by 45%.",
        "Implemented automated MLOps CI/CD pipelines with Docker and Airflow for continuous model retrain and inference."
      ],
      skills: ["PySpark", "Databricks", "Python", "SQL", "Scikit-Learn", "AWS", "Snowflake", "Docker", "MLOps"]
    },
    {
      id: "exp-2",
      role: "Data Integration Engineer",
      company: "Global Tech Solutions",
      period: "2019 — 2021",
      location: "Bhubaneswar, India",
      summary: "Designed and deployed enterprise ETL/ELT workflows, data integration hubs, and executive BI dashboards.",
      achievements: [
        "Developed automated ingestion pipelines connecting REST APIs, PostgreSQL replicas, and Cloud Storage into central data lakes.",
        "Built custom Python data validation frameworks that cut data ingestion error rates by 60%.",
        "Designed interactive PowerBI and Tableau dashboards providing executive leadership with real-time KPI tracking.",
        "Streamlined database migration project transferring legacy data models into scalable cloud architecture."
      ],
      skills: ["Python", "ETL Pipelines", "PostgreSQL", "Airflow", "Tableau", "Git", "REST APIs", "SQL"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "State Technological University",
      period: "2015 — 2019",
      location: "India",
      details: "Specialized in Big Data Architectures, Machine Learning Algorithms, Database Management Systems, and Software Engineering."
    }
  ],

  certifications: [
    { name: "Databricks Certified Data Engineer Professional", issuer: "Databricks" },
    { name: "AWS Certified Data Analytics & Cloud Specialist", issuer: "Amazon Web Services" },
    { name: "Machine Learning & AI Specialization", issuer: "DeepLearning.AI / Coursera" }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Real-Time Streaming Anomaly Detection Engine",
      category: "ml",
      categoryName: "Machine Learning",
      description: "Distributed real-time anomaly detection system built with PySpark and Isolation Forest to identify fraud and operational anomalies in live transaction data streams.",
      highlights: [
        "Ingests 50,000 events/second using Apache Kafka and PySpark Structured Streaming.",
        "Uses automated feature extraction and custom Isolation Forest model with sub-second prediction latency.",
        "Real-time alerting integration via Webhooks & Prometheus metrics."
      ],
      tech: ["PySpark", "Kafka", "Python", "Isolation Forest", "Docker", "Prometheus"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-2",
      title: "Enterprise Multi-Source Data Lake & Feature Store",
      category: "de",
      categoryName: "Data Engineering",
      description: "Unified cloud data lake architecture integrating heterogeneous relational databases, unstructured JSON logs, and REST APIs into a curated Snowflake data warehouse.",
      highlights: [
        "Automated orchestration using Apache Airflow with automated schema evolution handling.",
        "Implemented Medallion architecture (Bronze -> Silver -> Gold tables) in Databricks.",
        "Decreased query runtime by 50% using optimized partitioning and Z-Ordering."
      ],
      tech: ["Databricks", "Airflow", "Snowflake", "AWS S3", "PySpark", "SQL"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-3",
      title: "Predictive Churn & Customer Lifetime Value Model",
      category: "ml",
      categoryName: "Machine Learning",
      description: "End-to-end customer churn prediction pipeline featuring automated feature engineering, XGBoost classification, and SHAP explainability analysis.",
      highlights: [
        "Achieved 92.4% ROC-AUC score on complex multi-dimensional customer behavioral data.",
        "Integrated SHAP (SHapley Additive exPlanations) for clear model interpretability for business stakeholders.",
        "Deployed via FastAPI microservice with automated model performance monitoring."
      ],
      tech: ["Python", "XGBoost", "Scikit-Learn", "SHAP", "FastAPI", "Pandas"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-4",
      title: "LLM-Powered Technical Documentation Query System",
      category: "nlp",
      categoryName: "NLP & LLMs",
      description: "Retrieval-Augmented Generation (RAG) system enabling natural language semantic search over massive technical specifications and API docs.",
      highlights: [
        "Vector database integration using FAISS and LangChain for sub-100ms vector similarity lookup.",
        "Custom chunking strategy optimized for code blocks and complex tables.",
        "Reduced internal developer support queries by 35% through instant answers."
      ],
      tech: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit", "Vector DB"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-5",
      title: "Automated Data Quality & Validation Framework",
      category: "de",
      categoryName: "Data Engineering",
      description: "Declarative python data validation library enforcing schema contracts, null-checks, distribution shifts, and business rules across ETL pipelines.",
      highlights: [
        "Great Expectations integration with custom validation rules.",
        "Automated slack/email notification alerts on data drift detection.",
        "Seamless integration with Airflow DAGs and PySpark pipelines."
      ],
      tech: ["Python", "Great Expectations", "PySpark", "Airflow", "CI/CD"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-6",
      title: "Interactive Executive KPI & Analytics Dashboard",
      category: "analytics",
      categoryName: "Analytics",
      description: "Dynamic business intelligence portal visualizing revenue velocity, customer retention cohorts, and operational bottleneck metrics.",
      highlights: [
        "Interactive cross-filtering and drill-down capabilities.",
        "Automated daily refresh connected directly to Snowflake data warehouse.",
        "Custom metric alerts and anomaly highlighting."
      ],
      tech: ["Tableau", "SQL", "Snowflake", "Data Modeling", "Python"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 95, icon: "code-slash-outline" },
      { name: "SQL", level: 92, icon: "server-outline" },
      { name: "R", level: 80, icon: "analytics-outline" },
      { name: "Bash / Shell", level: 85, icon: "terminal-outline" }
    ],
    mlAndAi: [
      { name: "Scikit-Learn", level: 92 },
      { name: "PyTorch & TensorFlow", level: 85 },
      { name: "XGBoost & LightGBM", level: 90 },
      { name: "NLP & LLM RAG Pipelines", level: 85 },
      { name: "Feature Engineering & SHAP", level: 90 }
    ],
    dataEngineering: [
      { name: "PySpark & Apache Spark", level: 92 },
      { name: "Databricks & Delta Lake", level: 90 },
      { name: "Snowflake & PostgreSQL", level: 88 },
      { name: "Apache Airflow & Kafka", level: 85 },
      { name: "ETL / ELT Architecture", level: 95 }
    ],
    cloudAndTools: [
      { name: "AWS (S3, ECR, Lambda, EC2)", level: 85 },
      { name: "Docker & Containerization", level: 88 },
      { name: "Git & GitHub CI/CD", level: 92 },
      { name: "Firebase Hosting & Cloud Functions", level: 85 },
      { name: "Tableau & PowerBI", level: 85 }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
