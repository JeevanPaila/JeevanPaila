/**
 * Personal & Professional Data Configuration for Jeevan Paila
 * Extracted directly from official resume Profile.pdf
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Jeevan Paila",
    title: "Data Integration Specialist | Ex-Amazon Analyst",
    subtitle: "Data Integration Specialist @ Virtual Employee | Ex- Automation Analyst & Pricing Data Analyst @ Amazon",
    bio: "Experienced data professional with over 8 years of expertise in the e-commerce industry, specializing in analyzing price trends, manipulating pricing data, building automated ETL pipelines, and collaborating with retail teams to determine optimal pricing strategies, rebates, and shipping. Proven track record in executing major sale events resulting in significant revenue growth.",
    location: "Bengaluru & Bhubaneswar, India",
    status: "Available for high-impact Data Science & Integration roles",
    cvLink: "./resume.pdf",
    socials: {
      github: "https://github.com/JeevanPaila",
      linkedin: "https://www.linkedin.com/in/jeevanpaila/",
      twitter: "https://x.com/jdpaila"
    }
  },

  metrics: [
    { label: "Years Experience", value: 8, suffix: "+", description: "In Data Analytics, Integration & E-Commerce" },
    { label: "Data Quality Boost", value: 32, suffix: "%", description: "Enhanced via Python & SQL Preprocessing" },
    { label: "Auto Categorization", value: 97.5, suffix: "%", description: "Accuracy with Automated ML Algorithms" },
    { label: "Error Reduction", value: 90, suffix: "%", description: "In Delivery, Rebate & Price Changes Tracking" }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Data Integration Specialist",
      company: "Virtual Employee Pvt. Ltd.",
      period: "Oct 2022 — Present",
      location: "Bengaluru, Karnataka, India",
      summary: "Lead Data Integration Specialist driving enterprise data engineering, Databricks PySpark transformations, automated retail inventory classification, and executive PowerBI business intelligence.",
      achievements: [
        "Architected and deployed enterprise ETL/ELT pipelines with PySpark and Databricks, processing multi-source raw feeds (JSON, CSV, TSV, XML) into centralized data warehouses.",
        "Enhanced pricing and catalog data quality by 32% using Python (Regex) and SQL for advanced preprocessing, anomaly detection, and schema validation.",
        "Engineered automated product categorization algorithms leveraging machine learning and NLP, achieving 97.5% classification accuracy and eliminating hundreds of manual cataloging hours.",
        "Designed resource prioritization guardrails and automated queue pipelines in a fast-paced KPI-driven environment.",
        "Built executive PowerBI pricing dashboards tracking competitive trends, margin thresholds, and rebate performance for senior leadership."
      ],
      skills: ["PySpark", "Databricks", "Python", "SQL Query Tuning", "ETL Pipelines", "PowerBI", "Regex", "Data Cleaning", "Data Integration", "JSON/XML Schema Mapping"]
    },
    {
      id: "exp-2",
      role: "Automation Analyst",
      company: "Amazon",
      period: "Dec 2020 — Oct 2022",
      location: "Bengaluru, Karnataka, India",
      summary: "Owned retail process automation, optimized pricing/rebate workflows, led a 20-person operations team, and supported the international launch of Amazon-NL.",
      achievements: [
        "Collaborated with cross-functional retail teams and international stakeholders to optimize promotion workflows, improving operational data processing efficiency by 26%.",
        "Engineered and maintained a centralized tracking system for shipping policies, rebate structures, delivery policy changes, and price adjustments, reducing tracking errors by 90%.",
        "Optimized SQL data extraction queries, achieving an average 1.5-hour reduction in query execution times across heavy retail databases.",
        "Managed, trained, and mentored a team of 20 analysts while owning critical software feature additions for internal Amazon promotion and rebate tools.",
        "Co-led pricing and rebate strategy formulation for European retail operations, ensuring a flawless launch for Amazon-NL."
      ],
      skills: ["Amazon Retail Systems", "SQL Optimization", "Process Automation", "Team Leadership", "Pricing & Rebate Strategy", "E-Commerce Operations"]
    },
    {
      id: "exp-3",
      role: "Pricing Data Analyst",
      company: "Amazon",
      period: "May 2019 — Nov 2020",
      location: "Bengaluru, Karnataka, India",
      summary: "Monitored European and American retail markets, automated competitor web scraping pipelines, and validated pricing during major peak sale events.",
      achievements: [
        "Implemented strict data validation algorithms to inspect competitor price feeds and promotional discounts, reducing data errors by 20%.",
        "Automated multi-threaded web scraping engines and alert reporting tools to capture price fluctuations during Black Friday, Prime Day, and Festival Sale events.",
        "Analyzed pricing trends and competitor shipping policies across Europe and North America to inform strategic pricing and discount decisions."
      ],
      skills: ["Web Scraping Systems", "Competitor Price Intelligence", "Data Validation", "E-Commerce Pricing", "SQL Server", "Market Analysis"]
    },
    {
      id: "exp-4",
      role: "Software Developer",
      company: "Sandeepana Academy",
      period: "Mar 2018 — Feb 2019",
      location: "Bhubaneswar, Odisha, India",
      summary: "Developed web applications, managed student database architecture, and engineered conversion analytics dashboards.",
      achievements: [
        "Designed and deployed the official institution website with integrated traffic analytics, boosting engagement conversion rates by 150%.",
        "Managed MySQL databases for student records, test evaluations, and automated result reporting dashboards."
      ],
      skills: ["Web Development", "MySQL", "Analytics Dashboards", "Conversion Optimization", "JavaScript"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Postgraduate Degree in Computational Data Science",
      institution: "Indian Institute of Science (IISc)",
      period: "Oct 2023 — Nov 2024",
      location: "Bengaluru, India",
      details: "Advanced curriculum covering computational statistics, machine learning theory, big data processing (PySpark), neural networks, and data science methodology at India's #1 ranked research institution."
    },
    {
      id: "edu-2",
      degree: "Bachelor's Degree in Mechatronics, Robotics, and Automation Engineering",
      institution: "Bharath University",
      period: "2013 — 2017",
      location: "Chennai, India",
      details: "Engineering foundation in automated control systems, robotics programming, data structures, linear algebra, and mathematical modeling."
    }
  ],

  certifications: [
    { name: "Databases and SQL for Data Science", issuer: "IBM / Coursera" },
    { name: "Data Science Methodology", issuer: "IBM / Coursera" },
    { name: "Tools for Data Science", issuer: "IBM / Coursera" },
    { name: "Data Analysis with Python", issuer: "IBM / Coursera" },
    { name: "Data Visualization with Python", issuer: "IBM / Coursera" }
  ],

  projects: [
    {
      id: "proj-kognitec-rag",
      title: "KogniRAG & KogniExtract — Enterprise AI & RAG Engine",
      category: "ml",
      categoryName: "Generative AI & RAG",
      description: "Privacy-first Retrieval-Augmented Generation (RAG) and intelligent multimodal document extraction engine shipped under Kognitec.",
      highlights: [
        "Architected client-side and cloud-hybrid RAG pipelines for zero-leak enterprise search.",
        "Built KogniExtract API for automated table, invoice, and unstructured document parsing.",
        "Integrated Vector DBs (Chroma/FAISS) with custom embedding reranking."
      ],
      tech: ["Generative AI", "RAG Systems", "Vector DBs", "Python", "FastAPI", "NLP"],
      github: "https://github.com/JeevanPaila",
      demo: "https://kognitec.com"
    },
    {
      id: "proj-kognote",
      title: "KogNote AI & Intelligent Web Clipper",
      category: "ml",
      categoryName: "AI Apps & Extensions",
      description: "AI-driven knowledge synthesis platform and companion browser extension extracting key entities, summaries, and action items from web content.",
      highlights: [
        "Shipped KogNote Web Application and companion Chrome Web Clipper Extension.",
        "Engineered real-time browser text extraction and background LLM summarization.",
        "Implemented offline-first local storage and vector indexing."
      ],
      tech: ["Chrome Extension API", "Next.js", "Generative AI", "TypeScript", "Python"],
      github: "https://github.com/JeevanPaila",
      demo: "https://kognitec.com"
    },
    {
      id: "proj-1",
      title: "E-Commerce Competitor Price Scraping & Tracking Engine",
      category: "de",
      categoryName: "Data Engineering",
      description: "Automated web scraping and ETL pipeline collecting real-time competitor pricing, shipping policies, and deal offers across Europe and America retail sites.",
      highlights: [
        "Automated price fluctuation monitoring during major sale events (Black Friday, Prime Day).",
        "Cleansed and parsed complex JSON, XML, and HTML web responses.",
        "Integrated alert triggers for competitive price drops."
      ],
      tech: ["Python", "Web Scraping", "SQL", "Regex", "ETL Pipelines", "Data Validation"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-2",
      title: "Automated E-Commerce Product Categorization ML Engine",
      category: "ml",
      categoryName: "Machine Learning",
      description: "Advanced classification algorithms categorizing multi-source retail inventory data with high accuracy.",
      highlights: [
        "Achieved 97.5% classification accuracy on retail product catalog data.",
        "Significantly reduced manual cataloging effort across cross-functional teams.",
        "Processed multi-format feeds (JSON, CSV, TSV, XML)."
      ],
      tech: ["Python", "Scikit-Learn", "Machine Learning", "NLP", "Pandas", "SQL"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-3",
      title: "Interactive Retail Pricing & KPI Dashboard",
      category: "analytics",
      categoryName: "Analytics",
      description: "Executive PowerBI analytics portal visualizing pricing trends, rebate margins, and shipping policy metrics.",
      highlights: [
        "Provided actionable insights directly to senior leadership and cross-functional teams.",
        "Enhanced pricing data quality by 32% through automated Regex & SQL preprocessing.",
        "Interactive trend filtering and cross-regional comparisons."
      ],
      tech: ["PowerBI", "SQL Server", "Data Modeling", "Tableau", "Data Analysis"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    },
    {
      id: "proj-4",
      title: "Centralized Promotion, Rebate & Shipping Tracking System",
      category: "de",
      categoryName: "Data Engineering",
      description: "Unified data tracking system built for Amazon retail operations, managing promotion changes, rebate structures, and delivery policy tracking.",
      highlights: [
        "Reduced tracking errors by 90%.",
        "Optimized SQL query performance, saving an average of 1.5 hours in query execution times.",
        "Supported the successful retail launch of Amazon-NL."
      ],
      tech: ["SQL Query Tuning", "Data Processing", "Process Automation", "Amazon Systems"],
      github: "https://github.com/JeevanPaila",
      demo: "#"
    }
  ],

  skills: [
    {
      category: "Programming & Query Languages",
      icon: "code-slash-outline",
      items: [
        "Python",
        "SQL (PostgreSQL, MySQL, T-SQL)",
        "PySpark SQL",
        "BigQuery SQL",
        "TypeScript",
        "JavaScript (ES6+)",
        "Regex & Text Processing",
        "HTML5 / CSS3"
      ]
    },
    {
      category: "Data Integration & ETL Engineering",
      icon: "git-network-outline",
      items: [
        "PySpark & Databricks",
        "ETL / ELT Pipelines",
        "REST APIs & Webhooks",
        "Multimodal Data Integration",
        "JSON & XML Schema Mapping",
        "Batch & Real-Time Ingestion",
        "Data Validation & Cleaning",
        "Airflow / Workflow Orchestration"
      ]
    },
    {
      category: "Generative AI & Machine Learning",
      icon: "sparkles-outline",
      items: [
        "Retrieval-Augmented Generation (RAG)",
        "Vector DBs (Chroma, FAISS, Pinecone)",
        "Autonomous AI Agents (KogniBots)",
        "Product Categorization ML Models",
        "Intelligent Document Extraction",
        "LLM Prompt Engineering",
        "NLP & Text Mining",
        "Embeddings & Reranking"
      ]
    },
    {
      category: "Analytics & Business Intelligence",
      icon: "bar-chart-outline",
      items: [
        "Microsoft PowerBI",
        "Tableau Dashboards",
        "Retail Pricing & KPI Analytics",
        "Data Warehousing",
        "Competitor Web Scraping",
        "Executive Reporting Portals",
        "Margin & Promotion Optimization"
      ]
    },
    {
      category: "Developer Tools & Infrastructure",
      icon: "cloud-done-outline",
      items: [
        "Git & GitHub Actions",
        "Docker & Containerization",
        "Chrome Extension API (Manifest V3)",
        "Linux Shell & PowerShell",
        "Firebase & App Hosting",
        "FastAPI & Node.js",
        "CI / CD Deployment"
      ]
    }
  ],

  ventures: [
    {
      id: "v-1",
      name: "Kognitec",
      domain: "kognitec.com",
      url: "https://kognitec.com",
      status: "live",
      statusLabel: "Live Product Suite",
      tagline: "Automate the Mundane. Engineer the Impossible.",
      description: "Premium AI ecosystem and SaaS infrastructure. Ships flagship products including KogNote (AI Notes & Web Clipper), KogniRAG (Private Data Search), KogniExtract (Document Extraction), and KogniBots (Autonomous Workflow Agents).",
      tech: ["Generative AI", "RAG Systems", "KogNote App", "Chrome Extension", "KogniBots", "Next.js"]
    },
    {
      id: "v-2",
      name: "Unboxful",
      domain: "unboxful.com",
      url: "#",
      status: "dev",
      statusLabel: "In Development",
      tagline: "Next-Gen E-Commerce Product Discovery & Price Tracking",
      description: "Smart consumer product discovery and competitive price intelligence engine tracking deals, price histories, and unboxing reviews across major retail platforms.",
      tech: ["E-Commerce Analytics", "Price Scraping", "Retail Intelligence", "Next.js"]
    },
    {
      id: "v-3",
      name: "IndiWize",
      domain: "indiwize.com",
      url: "#",
      status: "dev",
      statusLabel: "In Development",
      tagline: "AI-Powered Knowledge & Market Intelligence for India",
      description: "Hyper-localized data analytics platform aggregating financial indicators, regional trend models, and market intelligence for Indian growth ecosystems.",
      tech: ["Market Intelligence", "Financial Analytics", "NLP", "Python"]
    },
    {
      id: "v-4",
      name: "HustleBase",
      domain: "hustlebase.com",
      url: "#",
      status: "stealth",
      statusLabel: "Building in Stealth",
      tagline: "All-in-One OS for Creators, Solopreneurs & Freelancers",
      description: "Workspace productivity suite and workflow automation engine empowering independent creators and data consultants to run operations seamlessly.",
      tech: ["Workflow Automation", "SaaS", "Productivity OS", "FullStack"]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
