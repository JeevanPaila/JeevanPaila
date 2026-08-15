/**
 * Personal & Professional Data Configuration for Jeevan Paila
 * Extracted directly from official resume Profile.pdf
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Jeevan Paila",
    title: "Data Integration Specialist | Ex-Amazon Analyst",
    subtitle: "Data Integration Specialist @ Virtual Employee | Ex- Automation Analyst & Pricing Data Analyst @ Amazon",
    bio: "Experienced data professional with over half a decade of expertise in the e-commerce industry, specializing in analyzing price trends, manipulating pricing data, building automated ETL pipelines, and collaborating with retail teams to determine optimal pricing strategies, rebates, and shipping. Proven track record in executing major sale events resulting in significant revenue growth.",
    location: "Bengaluru, Karnataka, India",
    email: "jeevandeep.paila@gmail.com",
    phone: "+91 9559554884",
    status: "Available for high-impact Data Science & Integration roles",
    cvLink: "./resume.pdf",
    socials: {
      github: "https://github.com/JeevanPaila",
      linkedin: "https://www.linkedin.com/in/jeevanpaila/",
      whatsapp: "https://wa.me/919559554884/",
      email: "mailto:jeevandeep.paila@gmail.com"
    }
  },

  metrics: [
    { label: "Years Experience", value: 5, suffix: "+", description: "In Data Analytics, Integration & E-Commerce" },
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
      summary: "Leading end-to-end data cleanup, robust ETL pipeline development, automated product categorization algorithms, and executive PowerBI analytics.",
      achievements: [
        "Developed and implemented robust ETL pipelines incorporating data cleanup and analysis to ensure high output precision.",
        "Enhanced data quality by 32% using Python (Regex) and SQL for cleaning and preprocessing multi-source data.",
        "Automated product categorization using advanced algorithms, achieving 97.5% accuracy and significantly reducing manual effort.",
        "Created and optimized guardrails to improve resource prioritization and time management in a KPI-driven environment.",
        "Utilized PowerBI to build interactive pricing dashboards analyzing trends and providing actionable insights to senior stakeholders.",
        "Received, cleaned, and integrated diverse data formats (JSON, CSV, TSV, XML) into central repositories."
      ],
      skills: ["Python", "SQL", "ETL Pipelines", "PowerBI", "Regex", "JSON / XML Parsing", "Data Cleaning", "Data Integration"]
    },
    {
      id: "exp-2",
      role: "Automation Analyst",
      company: "Amazon",
      period: "Dec 2020 — Oct 2022",
      location: "Bengaluru, Karnataka, India",
      summary: "Managed cross-functional retail teams, led a 20-person team, optimized pricing/rebate systems, and supported the launch of Amazon-NL.",
      achievements: [
        "Collaborated with retail teams and internal/external stakeholders to optimize workflows, improving data processing efficiency by 26%.",
        "Developed and maintained a centralized tracking system for shipping, rebate, delivery policy, and price changes, reducing errors by 90%.",
        "Optimized data extraction performance using tuned SQL queries, achieving an average 1.5-hour reduction in query execution times.",
        "Owned process-related projects, managing and training a team of 20 while adding key features to Amazon promotion and rebate tools.",
        "Led a dynamic team shaping pricing strategies, rebate structures, and shipping policies, ensuring the successful launch of Amazon-NL."
      ],
      skills: ["Amazon Retail Systems", "SQL Query Optimization", "Automation Analytics", "Team Leadership", "Pricing & Rebates", "Process Improvement"]
    },
    {
      id: "exp-3",
      role: "Pricing Data Analyst",
      company: "Amazon",
      period: "May 2019 — Nov 2020",
      location: "Bengaluru, Karnataka, India",
      summary: "Monitored European & American retail markets, automated competitor web scraping, and executed major sale campaigns.",
      achievements: [
        "Implemented comprehensive data validation processes to ensure pricing data accuracy, reducing errors by 20%.",
        "Automated competitor website web scraping and reporting to track price fluctuations during Black Friday, Prime Day, and Festival Sales.",
        "Monitored and analyzed competitor activities across Europe and America regions to inform pricing, shipping, and rebate decisions."
      ],
      skills: ["Web Scraping", "Competitor Analysis", "Data Validation", "E-Commerce Pricing", "SQL", "Market Research"]
    },
    {
      id: "exp-4",
      role: "Software Developer",
      company: "Sandeepana Academy",
      period: "Mar 2018 — Feb 2019",
      location: "Bhubaneswar, Odisha, India",
      summary: "Built and managed company web applications, student SQL databases, and engagement analytics.",
      achievements: [
        "Developed and executed the company website with traffic tracking, increasing engagement conversion rates by 150%.",
        "Managed SQL databases for student and test-related records and created survey/result reporting dashboards."
      ],
      skills: ["Web Development", "SQL Databases", "Analytics Dashboards", "Conversion Optimization"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Postgraduate Degree in Computational Data Science",
      institution: "Indian Institute of Science (IISc)",
      period: "Oct 2023 — Nov 2024",
      location: "Bengaluru, India",
      details: "Advanced study in computational statistics, machine learning algorithms, big data processing, and data science methodology at India's premier research institute."
    },
    {
      id: "edu-2",
      degree: "Bachelor's Degree in Mechatronics, Robotics, and Automation Engineering",
      institution: "Bharath University",
      period: "2013 — 2017",
      location: "Chennai, India",
      details: "Engineering foundation in automated systems, control engineering, data structures, and mathematical modeling."
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
      description: "AI-driven knowledge synthesis platform and browser extension extracting key entities, summaries, and action items from web content.",
      highlights: [
        "Shipped KogNote App and companion Chrome Web Clipper Extension.",
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

  skills: {
    languages: [
      { name: "Python", level: 95 },
      { name: "SQL (MySQL / SQL Server / BigQuery)", level: 94 },
      { name: "TypeScript & JavaScript", level: 88 },
      { name: "Regex & Text Mining", level: 92 }
    ],
    mlAndAi: [
      { name: "Generative AI & LLM Pipelines", level: 92 },
      { name: "Enterprise RAG & Vector Search", level: 94 },
      { name: "Autonomous AI Agents (KogniBots)", level: 90 },
      { name: "Machine Learning & Product Categorization", level: 95 }
    ],
    dataEngineering: [
      { name: "ETL / ELT Pipelines & PySpark", level: 96 },
      { name: "Data Integration (JSON, XML, Rest API)", level: 95 },
      { name: "Intelligent Document Extraction (KogniExtract)", level: 92 },
      { name: "Data Validation & Quality Assurance", level: 94 }
    ],
    cloudAndTools: [
      { name: "Next.js & SaaS Infrastructure", level: 88 },
      { name: "Chrome Extension API Architecture", level: 90 },
      { name: "Microsoft PowerBI & Tableau", level: 92 },
      { name: "Git & Web Scraping Systems", level: 92 }
    ]
  },

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
