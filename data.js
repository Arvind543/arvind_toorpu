// Portfolio Data Configuration for Arvind Toorpu
// Cloud Ops Database Manager | Principal Database Architect | DB Migration Specialist
// Oracle ACE Pro | AWS Community Builder | 2024 Global Recognition Award Winner

const PORTFOLIO_DATA = {
  profile: {
    name: "Arvind Toorpu",
    title: "Cloud Ops Database Manager & Principal Database Architect",
    currentRole: "Cloud Ops Database Manager at Allspring Global Investments",
    tagline: "Oracle ACE Pro • AWS Community Builder • 2024 Global Recognition Award Winner • 15+ Years Architecting Enterprise Database Systems & Zero-Downtime Cloud Migrations",
    location: "Dallas, TX (Open to Remote & Global Engagements)",
    website: "https://arvindtoorpu.com",
    email: "arvindtoorpu.dba@gmail.com",
    linkedin: "https://www.linkedin.com/in/arvind-toorpu",
    github: "https://github.com/arvindtoorpu",
    oracleAce: "https://ace.oracle.com/ords/f?p=700000:2:::::ACE_ID:2658",
    awsBuilder: "https://builder.aws.com/community/@arvindtoorpu?tab=articles",
    medium: "https://medium.com/@arvindtoorpu",
    devto: "https://dev.to/arvindtoorpu",
    availability: "Leading Enterprise Cloud Database Operations, Architecture & Migration Advisory",
    bio: `Arvind Toorpu is a distinguished Database Administrator, Cloud Operations Manager, and Enterprise Architect with over 15 years of hands-on experience designing, scaling, and safeguarding mission-critical database infrastructure. Recognized globally as an Oracle ACE Pro and an AWS Community Builder, Arvind has spearheaded the successful migration of hundreds of enterprise databases across AWS, Microsoft Azure, and Oracle Cloud Infrastructure (OCI). Winner of the prestigious 2024 Global Recognition Award for IT infrastructure transformation, he is a leading industry voice on zero-trust migration frameworks, Oracle 23ai vector architectures, automated diagnostics, and modern database reliability engineering.`
  },

  honors: [
    {
      title: "Oracle ACE Pro (2026)",
      organization: "Oracle Corporation",
      year: "2026",
      icon: "award",
      description: "Conferred by Oracle for profound technical expertise, architecture leadership, and high-impact contributions to the worldwide Oracle database ecosystem.",
      link: "https://ace.oracle.com/ords/f?p=700000:2:::::ACE_ID:2658"
    },
    {
      title: "AWS Community Builder",
      organization: "Amazon Web Services (AWS)",
      year: "2025 – 2026",
      icon: "cloud",
      description: "Selected into the official AWS Community Builder program in the Data & Database category for cloud architecture advocacy and technical publications.",
      link: "https://builder.aws.com/community/@arvindtoorpu?tab=articles"
    },
    {
      title: "2024 Global Recognition Award",
      organization: "Global Recognition Awards™",
      year: "2024",
      icon: "shield-check",
      description: "International award honoring exceptional leadership in transforming IT infrastructure, modernizing legacy estates, and executing large-scale, zero-downtime cloud database migrations.",
      link: "https://globalrecognitionawards.org"
    },
    {
      title: "CTODAY Award",
      organization: "CTODAY Global Tech Awards",
      year: "2025",
      icon: "cpu",
      description: "Honored for excellence in cloud database operations, enterprise reliability architecture, and technical innovation.",
      link: "https://arvindtoorpu.com"
    },
    {
      title: "Allspring Allstar Award",
      organization: "Allspring Global Investments",
      year: "2024",
      icon: "star",
      description: "Distinguished internal excellence award recognizing critical technical leadership and operational resilience in managing financial services data systems.",
      link: "https://arvindtoorpu.com"
    },
    {
      title: "Claro Award",
      organization: "Claro Enterprise Honors",
      year: "2024",
      icon: "zap",
      description: "Awarded for outstanding technical achievement in multi-cloud database engineering and high-availability design.",
      link: "https://arvindtoorpu.com"
    }
  ],

  keyMetrics: [
    {
      id: "experience",
      value: "15+",
      label: "Years Enterprise Experience",
      detail: "Leading Tier-1 Financial & Multi-Cloud Infrastructure",
      icon: "calendar"
    },
    {
      id: "uptime",
      value: "99.999%",
      label: "Production Availability SLA",
      detail: "Maintained Across Global Mission-Critical Financial Data",
      icon: "activity"
    },
    {
      id: "migrations",
      value: "100s",
      label: "Cloud DBs Migrated",
      detail: "Successfully Moved to AWS, Azure & Oracle Cloud (OCI)",
      icon: "database"
    },
    {
      id: "volume",
      value: "850+ TB",
      label: "Production Data Architected",
      detail: "High-Throughput OLTP & Scalable Distributed Analytics",
      icon: "hard-drive"
    },
    {
      id: "honors_count",
      value: "6+",
      label: "Global Honors & Awards",
      detail: "Oracle ACE Pro, AWS Community Builder, GRA Winner",
      icon: "award"
    },
    {
      id: "tps",
      value: "65,000+",
      label: "Peak TPS Scaled",
      detail: "Sub-Millisecond Query Response & Zero-Downtime Failover",
      icon: "zap"
    }
  ],

  pillars: [
    {
      title: "Multi-Cloud & Zero-Trust Migrations",
      icon: "refresh-cw",
      description: "Pioneering zero-trust, near-zero downtime migrations across AWS, Microsoft Azure, and Oracle Cloud Infrastructure (OCI). Expert in continuous CDC replication, automated schema refactoring, and rollback safety nets.",
      bulletPoints: [
        "AWS DMS, Oracle GoldenGate, Azure DMS, and Debezium CDC pipelines",
        "Schema conversion from proprietary engines (Oracle/MSSQL) to PostgreSQL/Aurora",
        "Zero-trust database migration framework minimizing attack surfaces during transit"
      ]
    },
    {
      title: "High Availability & Mission-Critical DR",
      icon: "shield",
      description: "Designing geo-redundant Active-Active and Active-Passive topologies with sub-minute failovers for financial and enterprise services where downtime is measured in millions per hour.",
      bulletPoints: [
        "Oracle Real Application Clusters (RAC), Active Data Guard, RMAN",
        "SQL Server AlwaysOn Availability Groups with multi-subnet clustering",
        "Rigorous automated chaos engineering drills achieving RPO=0 and RTO<3m"
      ]
    },
    {
      title: "Performance Tuning & Diagnostics Automation",
      icon: "gauge",
      description: "Deep-dive diagnostic analysis with custom automation engines that schedule, generate, and email AWR/ADDM reports and pgBadger telemetry directly to engineering teams.",
      bulletPoints: [
        "Execution plan analysis, wait event profiling, and memory/buffer optimization",
        "Automated delivery of AWR, ADDM, and ASH diagnostic telemetry",
        "Elimination of blocking locks, deadlocks, and table latch contention"
      ]
    },
    {
      title: "AI-Augmented Databases (Oracle 23ai)",
      icon: "cpu",
      description: "At the vanguard of AI-driven database technology—implementing Oracle 23ai features including AI Vector Search, JSON-Relational Duality, and hybrid vector indexing for enterprise LLMs.",
      bulletPoints: [
        "Oracle 23ai AI Vector Search integration with enterprise retrieval pipelines",
        "JSON-Relational Duality models bridging document flexibility with relational ACID",
        "Autonomous Database optimization and serverless data warehousing"
      ]
    },
    {
      title: "Database Reliability Eng. & GitOps Automation",
      icon: "layers",
      description: "Modernizing database operations through automated schema versioning, Infrastructure as Code, continuous integration/delivery, and proactive multi-cloud observability.",
      bulletPoints: [
        "Certified Liquibase Practitioner & Flyway CI/CD pipeline automation",
        "Terraform & Ansible for immutable multi-cloud DBaaS provisioning",
        "Prometheus, Grafana, Datadog, and CloudWatch custom alerting topologies"
      ]
    },
    {
      title: "Security, Governance & Financial Compliance",
      icon: "lock",
      description: "Hardening databases against advanced cyber threats and maintaining strict compliance postures across SEC, SOX, PCI-DSS, and SOC2 financial audit frameworks.",
      bulletPoints: [
        "Transparent Data Encryption (TDE), KMS, Column-level encryption, dynamic masking",
        "Fine-grained auditing, least-privilege Role-Based Access Control (RBAC)",
        "Automated backup validation, immutable air-gapped snapshots & disaster testing"
      ]
    }
  ],

  migrationAdvisorRules: {
    sources: [
      { id: "oracle_rac", name: "Oracle 19c/23ai RAC / Exadata (On-Prem / Cloud)" },
      { id: "mssql_alwayson", name: "Microsoft SQL Server AlwaysOn (2016-2022)" },
      { id: "postgres_onprem", name: "PostgreSQL (On-Premise / Bare Metal)" },
      { id: "mysql_enterprise", name: "MySQL Enterprise / MariaDB Cluster" }
    ],
    targets: [
      { id: "aws_aurora_pg", name: "AWS Aurora PostgreSQL (Serverless / Multi-AZ)" },
      { id: "oci_autonomous", name: "Oracle Cloud (OCI) Autonomous Database / Exadata CS" },
      { id: "azure_sql_mi", name: "Azure SQL Managed Instance / Azure DB for PG" },
      { id: "gcp_alloydb", name: "Google Cloud AlloyDB / Cloud SQL PostgreSQL" }
    ],
    dataScales: [
      { id: "small", label: "< 5 TB (Midsize Enterprise)", sizeNum: 5 },
      { id: "medium", label: "5 TB - 25 TB (Large Enterprise)", sizeNum: 25 },
      { id: "large", label: "25 TB - 100 TB (High Scale)", sizeNum: 100 },
      { id: "massive", label: "100+ TB (Petabyte / Hyperscale)", sizeNum: 250 }
    ],
    tolerances: [
      { id: "zero_downtime", label: "Strict Near-Zero Downtime (< 15 min Cutover)" },
      { id: "maintenance_window", label: "Standard Maintenance Window (2 - 4 Hours)" },
      { id: "flexible_batch", label: "Flexible Offline Cutover (Weekend Window)" }
    ]
  },

  caseStudies: [
    {
      id: "oracle-aurora-fintech",
      title: "35 TB Heterogeneous Migration: Oracle RAC to AWS Aurora PostgreSQL",
      clientType: "Tier-1 Financial Services & Core Ledger",
      category: "Cloud Migration",
      badge: "Zero Data Loss",
      summary: "Architected and executed a high-stakes heterogeneous migration of a 35 TB transactional core ledger from on-premise Oracle 19c RAC to AWS Aurora PostgreSQL, achieving a 12-minute final cutover window and slashing annual licensing fees by $480,000.",
      problem: "The financial institution suffered from escalating Oracle licensing renewal costs and hardware bottlenecks during peak market settlement hours. Continuous 24/7 transaction volume and proprietary PL/SQL packages precluded traditional offline data pump export/import.",
      solution: [
        "Conducted automated schema assessment using AWS SCT, converting 85% of DDL and stored procedures while refactoring remaining complex PL/SQL packages into optimized PostgreSQL PL/pgSQL functions.",
        "Engineered continuous change data capture (CDC) using AWS DMS with GoldenGate parallel pipelines over a dedicated 10 Gbps AWS Direct Connect interconnect.",
        "Implemented a Zero-Trust Database Migration security envelope with TLS 1.3 in-flight encryption, KMS data-at-rest keys, and automated SHA-256 checksum reconciliation across 1.4 billion transaction records.",
        "Executed final switchover in an ultra-tight 12-minute maintenance window by quiescing incoming writes, validating replication queue drainage, repointing DNS CNAMEs, and pre-warming the Aurora buffer cache."
      ],
      architectureTags: ["AWS Aurora PG", "AWS DMS", "AWS SCT", "Zero-Trust CDC", "Direct Connect", "PL/pgSQL"],
      results: [
        { metric: "$480K / Year", text: "Direct proprietary licensing and maintenance fees eliminated" },
        { metric: "12 Minutes", text: "Total cutover window executed with zero transaction loss (RPO=0)" },
        { metric: "35% Faster", text: "Average analytical query runtime on financial settlement batches" },
        { metric: "Auto-Scaling", text: "Automated read-replica burst handling up to 45,000 TPS" }
      ]
    },
    {
      id: "oci-autonomous-migration",
      title: "Exadata Modernization & Migration to OCI Autonomous Database",
      clientType: "Global Asset Management Firm",
      category: "Cloud Migration",
      badge: "Oracle ACE Pro Architecture",
      summary: "Led the migration of multi-terabyte on-premise Oracle databases to Oracle Cloud Infrastructure (OCI) Autonomous Transaction Processing (ATP) and Autonomous Data Warehouse (ADW), eliminating manual DBA patching and boosting query throughput.",
      problem: "Legacy on-premise Exadata hardware was reaching end-of-life, requiring substantial capital expenditure renewals. Patching, index tuning, and backup validation consumed hundreds of manual DBA hours quarterly.",
      solution: [
        "Orchestrated zero-downtime migration to OCI Autonomous Database using Oracle GoldenGate for continuous bidirectional replication.",
        "Leveraged OCI Zero Data Loss Recovery Appliance (ZDLRA) and automated RMAN cross-cloud synchronization.",
        "Implemented OCI auto-scaling CPU cores and autonomous indexing, reducing maintenance overhead to zero.",
        "Built automated AWR/ADDM diagnostic delivery to monitor execution plans before and after migration."
      ],
      architectureTags: ["Oracle OCI", "Autonomous DB", "Oracle GoldenGate", "Data Guard", "AWR/ADDM Automation"],
      results: [
        { metric: "99.999%", text: "High-availability SLA maintained across financial trading desks" },
        { metric: "0 Hours", text: "Manual patching overhead eliminated via autonomous maintenance" },
        { metric: "50% Faster", text: "Batch processing turnaround on daily asset rebalancing runs" },
        { metric: "3x Scale", text: "Instant auto-scaling elasticity during high market volatility" }
      ]
    },
    {
      id: "mssql-azure-healthcare",
      title: "Multi-Region Disaster Recovery & Migration to Azure SQL Managed Instance",
      clientType: "Financial & Regulatory Data Network",
      category: "High Availability",
      badge: "RTO < 3 min | RPO = 0",
      summary: "Modernized on-premise SQL Server 2016 instances into Azure SQL Managed Instance with multi-region failover groups, enabling strict regulatory compliance, TDE encryption, and sub-minute recovery.",
      problem: "The firm's core data resided on aging on-premise SAN storage with synchronous replication limited to a single physical data center, presenting catastrophic business continuity risks.",
      solution: [
        "Designed an active-passive multi-region topology on Azure SQL Managed Instance with auto-failover groups spanning East US and West US 2.",
        "Automated non-disruptive migration using Azure Database Migration Service (Azure DMS) with continuous log shipping.",
        "Implemented Always Encrypted with secure enclaves, Customer-Managed Keys (CMK) via Azure Key Vault, and comprehensive auditing into Log Analytics.",
        "Formulated and orchestrated quarterly automated disaster recovery drills simulating complete regional loss with verified RTO < 3 minutes."
      ],
      architectureTags: ["Azure SQL MI", "Azure DMS", "Failover Groups", "TDE & Always Encrypted", "Terraform", "PowerShell"],
      results: [
        { metric: "RPO = 0", text: "Zero data loss guaranteed across regional catastrophic events" },
        { metric: "< 3 Mins", text: "Verified Recovery Time Objective (RTO) during simulated DR drill" },
        { metric: "100% Audit", text: "Fully passed strict regulatory financial security assessments" },
        { metric: "99.995%", text: "Operational uptime maintained over 3 consecutive years" }
      ]
    },
    {
      id: "oracle23ai-vector-search",
      title: "Oracle 23ai AI Vector Search & JSON-Relational Duality Implementation",
      clientType: "Enterprise Financial Intelligence Platform",
      category: "DBRE / Automation",
      badge: "Oracle 23ai Innovation",
      summary: "Architected and deployed Oracle 23ai's cutting-edge AI Vector Search and JSON-Relational Duality Views for real-time semantic document search and fraud pattern detection alongside relational financial ledgers.",
      problem: "The client needed to perform real-time semantic document searching across unstructured financial reports while maintaining relational ACID compliance on the underlying transactional records without syncing data to external vector databases.",
      solution: [
        "Designed and implemented Oracle 23ai AI Vector Search storing 1536-dimensional embedding vectors natively in database tables using `VECTOR` data types.",
        "Created HNSW (Hierarchical Navigable Small World) in-memory vector indexes for ultra-fast cosine similarity lookups.",
        "Deployed JSON-Relational Duality Views allowing application developers to read and write data as JSON documents while storing data in normalized relational tables.",
        "Published findings and implementation guides on DZone and arvindtoorpu.com to educate the global database community."
      ],
      architectureTags: ["Oracle 23ai", "AI Vector Search", "JSON-Relational Duality", "HNSW Indexes", "Embeddings", "PL/SQL"],
      results: [
        { metric: "Sub-10ms", text: "Semantic similarity query latency across 10M+ financial documents" },
        { metric: "Zero Sync", text: "Eliminated external vector database synchronization overhead" },
        { metric: "100% ACID", text: "Unified semantic AI search with transactional integrity" },
        { metric: "Published", text: "Featured technical article recognized by Oracle ACE program" }
      ]
    }
  ],

  publications: [
    {
      title: "Oracle 23ai Read-Only Users: Locking Down Accounts Without Breaking the App",
      platform: "arvindtoorpu.com • Oracle Database",
      category: "Security & 23ai",
      link: "https://arvindtoorpu.com/2026/09/17/oracle-23ai-read-only-users-locking-down-accounts-without-breaking-the-app/",
      summary: "How Oracle 23ai's account-level READ ONLY flag replaces traditional SELECT-only grants, and dissecting the ORA-28194 error when report jobs trigger unanticipated lockouts."
    },
    {
      title: "A Week With GitHub Copilot in SSMS: What Natural-Language T-SQL Got Right (and Wrong)",
      platform: "arvindtoorpu.com • SQL Server & AI",
      category: "AI & DBA Tooling",
      link: "https://arvindtoorpu.com/2026/09/08/a-week-with-github-copilot-in-ssms-what-natural-language-t-sql-got-right-and-wrong/",
      summary: "Field-testing GitHub Copilot in SQL Server Management Studio on real enterprise report queries, blocking triage, and crucial documentation warnings to heed."
    },
    {
      title: "Migrating Off NVARCHAR JSON Hacks to SQL Server 2025's Native JSON Type",
      platform: "arvindtoorpu.com • Database Migration",
      category: "SQL Server 2025",
      link: "https://arvindtoorpu.com/2026/09/03/migrating-off-nvarchar-json-hacks-to-sql-server-2025s-native-json-type/",
      summary: "Decommissioning legacy NVARCHAR(MAX) JSON storage in favor of SQL Server 2025's native json type, covering ALTER TABLE migrations, EF Core gotchas, and indexing strategies."
    },
    {
      title: "Fixing Replication Lag with Parallel Logical Replication in Aurora PostgreSQL",
      platform: "arvindtoorpu.com • Cloud Databases",
      category: "AWS Aurora & Replication",
      link: "https://arvindtoorpu.com/2026/08/27/fixing-replication-lag-with-parallel-logical-replication-in-aurora-postgresql/",
      summary: "Resolving downstream reporting lag during heavy nightly batch commits by enabling and tuning parallel logical replication workers in Amazon Aurora PostgreSQL."
    },
    {
      title: "SQL Server 2025 Intelligent Query Processing: Compatibility Level 170",
      platform: "arvindtoorpu.com • Query Optimization",
      category: "Performance Tuning",
      link: "https://arvindtoorpu.com/2026/08/27/sql-server-2025-intelligent-query-processing-what-changed-at-compatibility-level-170/",
      summary: "Analyzing execution plan behavior changes under Compatibility Level 170, Parameter Sensitive Plan (PSP) optimization for DML, and Optional Parameter Plan Optimization."
    },
    {
      title: "Priority Transactions: Letting the Database Roll Back Its Own Blockers in Oracle 26ai",
      platform: "arvindtoorpu.com • Oracle AI Database",
      category: "High Availability & Oracle",
      link: "https://arvindtoorpu.com/2026/08/22/priority-transactions-letting-the-database-roll-back-its-own-blockers-in-oracle-ai-database-26ai/",
      summary: "Configuring automated blocker rollback in Oracle AI Database 26ai to eliminate manual session killing while protecting mission-critical OLTP transactions."
    }
  ],

  educationAndMentorship: [
    {
      title: "Master of Science in Information Technology",
      institution: "Graduate University Program",
      detail: "Advanced Database Systems, Distributed Computing & Systems Architecture"
    },
    {
      title: "Master of Science in Management Information Technology",
      institution: "Graduate University Program",
      detail: "IT Governance, Enterprise Architecture & Strategic Data Management"
    },
    {
      title: "Executive Program in AI for Executives",
      institution: "University of California, Berkeley (UC Berkeley)",
      detail: "Artificial Intelligence Strategy, Machine Learning & Enterprise Data Applications"
    },
    {
      title: "CodeDay & MentorsInTech Mentor",
      institution: "CodeDay / MentorsInTech / IEEE",
      detail: "Volunteering as a technical mentor helping aspiring software engineers and students build coding and database problem-solving skills."
    },
    {
      title: "Globee Business Awards Judge",
      institution: "Globee® Awards",
      detail: "Invited industry judge evaluating enterprise technology, cloud innovations, and infrastructure excellence on a global scale."
    }
  ],

  skillsMatrix: [
    {
      category: "Relational Database Engines (RDBMS)",
      items: [
        { name: "Oracle Database (11g, 12c, 19c RAC, 23ai, Exadata)", level: 99, exp: "15+ yrs", highlight: true },
        { name: "Microsoft SQL Server (2008 - 2022, AlwaysOn)", level: 94, exp: "12+ yrs", highlight: true },
        { name: "PostgreSQL (9.6 - 16, Aurora, Patroni)", level: 92, exp: "10+ yrs", highlight: true },
        { name: "MySQL & MariaDB (Galera, InnoDB)", level: 88, exp: "8+ yrs", highlight: false }
      ]
    },
    {
      category: "Cloud Platforms & Managed DBaaS",
      items: [
        { name: "Oracle Cloud Infrastructure (OCI ATP, ADW, Exadata CS)", level: 98, exp: "8+ yrs", highlight: true },
        { name: "Amazon Web Services (AWS Aurora, RDS, DynamoDB)", level: 95, exp: "9+ yrs", highlight: true },
        { name: "Microsoft Azure (Azure SQL DB, Managed Instance)", level: 90, exp: "7+ yrs", highlight: true },
        { name: "Google Cloud Platform (Cloud SQL, AlloyDB)", level: 85, exp: "5+ yrs", highlight: false }
      ]
    },
    {
      category: "Migration, CDC & Replication Tooling",
      items: [
        { name: "Oracle GoldenGate & Active Data Guard", level: 98, exp: "14+ yrs", highlight: true },
        { name: "AWS Database Migration Service (DMS) & SCT", level: 94, exp: "7+ yrs", highlight: true },
        { name: "Azure DMS & Qlik Replicate", level: 88, exp: "6+ yrs", highlight: false },
        { name: "Debezium / Apache Kafka CDC", level: 86, exp: "5+ yrs", highlight: false },
        { name: "PostgreSQL Logical Replication & pg_dump", level: 90, exp: "8+ yrs", highlight: false }
      ]
    },
    {
      category: "Performance Diagnostics & Internals",
      items: [
        { name: "Oracle AWR, ASH, ADDM & SQL Tuning Sets", level: 99, exp: "15+ yrs", highlight: true },
        { name: "Execution Plan Dissection & Index Tuning", level: 98, exp: "15+ yrs", highlight: true },
        { name: "pgBadger, pg_stat_statements & EXPLAIN ANALYZE", level: 92, exp: "10+ yrs", highlight: true },
        { name: "Locking, Deadlock & Latch Contention Triage", level: 96, exp: "15+ yrs", highlight: true },
        { name: "Operating Systems (RHEL, AIX, Solaris, Windows)", level: 94, exp: "15+ yrs", highlight: false }
      ]
    },
    {
      category: "Automation, DBRE & Schema GitOps",
      items: [
        { name: "Liquibase (Certified Practitioner) & Flyway", level: 95, exp: "7+ yrs", highlight: true },
        { name: "Automated Diagnostic Delivery (Shell / Python)", level: 98, exp: "15+ yrs", highlight: true },
        { name: "Terraform (Infrastructure as Code)", level: 90, exp: "6+ yrs", highlight: true },
        { name: "Ansible, GitHub Actions CI/CD", level: 88, exp: "6+ yrs", highlight: false },
        { name: "Prometheus, Grafana, Datadog & CloudWatch", level: 92, exp: "8+ yrs", highlight: false }
      ]
    },
    {
      category: "AI & Next-Gen Data Systems",
      items: [
        { name: "Oracle 23ai AI Vector Search & Vector Data Types", level: 95, exp: "Specialist", highlight: true },
        { name: "JSON-Relational Duality Views", level: 94, exp: "Specialist", highlight: true },
        { name: "Enterprise LLM Integration & Hybrid Retrieval", level: 90, exp: "Specialist", highlight: true },
        { name: "Zero-Trust Database Security Architecture", level: 96, exp: "Specialist", highlight: true }
      ]
    }
  ],

  careerTimeline: [
    {
      period: "PRESENT",
      role: "Cloud Ops Database Manager",
      company: "Allspring Global Investments",
      scope: "Enterprise Financial Services & Asset Management",
      achievements: [
        "Leads the cloud database operations team responsible for multi-cloud database reliability, security, and performance across financial asset management platforms.",
        "Directs enterprise database modernization and migration initiatives moving workloads to AWS, Azure, and OCI.",
        "Recipient of the Allspring Allstar Award (2024) for operational excellence and disaster recovery resilience."
      ],
      technologies: ["Oracle 19c/23ai", "OCI", "AWS", "Azure SQL", "GoldenGate", "Liquibase", "Python"]
    },
    {
      period: "2018 — 2022",
      role: "Principal Database Architect & Cloud Migration Lead",
      company: "Enterprise Cloud Solutions & Financial Services",
      scope: "Large-Scale Multi-Cloud Database Transformations",
      achievements: [
        "Honored with the 2024 Global Recognition Award for spearheading IT infrastructure transformations and leading large-scale cloud database migrations.",
        "Architected zero-downtime cutover frameworks for hundreds of production databases, achieving strict RPO=0 and sub-15-minute cutover windows.",
        "Standardized enterprise DBRE practices, automated Terraform provisioning, and established automated AWR/ADDM diagnostic delivery."
      ],
      technologies: ["Oracle RAC", "AWS Aurora PG", "AWS DMS", "Azure DMS", "Terraform", "Shell"]
    },
    {
      period: "2014 — 2018",
      role: "Lead Database Administrator & Migration Specialist",
      company: "Global Enterprise Technology & Healthcare Systems",
      scope: "24/7 Production Systems, Multi-Region High Availability",
      achievements: [
        "Managed large fleets of Oracle RAC, SQL Server AlwaysOn, and MySQL clusters serving millions of active users.",
        "Engineered disaster recovery topologies meeting strict RTO < 3 minutes across geographically separated data centers.",
        "Conducted deep performance turnaround sprints, eliminating systemic query locks and reducing peak transaction latency by 75%."
      ],
      technologies: ["Oracle Data Guard", "SQL Server AlwaysOn", "MySQL", "RMAN", "Performance Tuning"]
    },
    {
      period: "2009 — 2014",
      role: "Senior Database Administrator & Systems Engineer",
      company: "Telecommunications & Data Infrastructure Services",
      achievements: [
        "Managed mission-critical Oracle and SQL Server instances on Red Hat Linux, AIX, and Solaris.",
        "Developed custom Unix shell automation scripts for database health checks, backup verification, and proactive alerting.",
        "Executed core schema upgrades, tablespace capacity management, and disaster recovery drill simulations."
      ],
      technologies: ["Oracle 10g/11g", "SQL Server", "AIX", "Solaris", "RHEL", "Bash/Perl"]
    }
  ],

  certifications: [
    {
      title: "AWS Cloud Architect Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Active / Verified",
      icon: "cloud",
      code: "AWS-ARCH-ASSOC",
      highlight: true
    },
    {
      title: "Azure Cloud Architect",
      issuer: "Microsoft Azure",
      date: "Active / Verified",
      icon: "cloud",
      code: "AZURE-ARCH-PRO",
      highlight: true
    },
    {
      title: "Oracle Cloud Architect",
      issuer: "Oracle Cloud Infrastructure (OCI)",
      date: "Active / Verified",
      icon: "cloud",
      code: "OCI-ARCH-PRO",
      highlight: true
    },
    {
      title: "Oracle Database Admin Professional (OCP)",
      issuer: "Oracle Corporation",
      date: "Certified Professional",
      icon: "database",
      code: "OCP-DBA-PRO",
      highlight: true
    },
    {
      title: "Oracle ACE Pro",
      issuer: "Oracle Corporation",
      date: "2026 Conferred",
      icon: "award",
      code: "ACE ID: 2658",
      link: "https://ace.oracle.com/ords/f?p=700000:2:::::ACE_ID:2658",
      highlight: true
    },
    {
      title: "AWS Community Builder",
      issuer: "Amazon Web Services (AWS)",
      date: "2025 – 2026",
      icon: "cloud",
      code: "@arvindtoorpu",
      link: "https://builder.aws.com/community/@arvindtoorpu?tab=articles",
      highlight: true
    },
    {
      title: "Liquibase Certified Practitioner",
      issuer: "Liquibase Academy",
      date: "Certified",
      icon: "layers",
      code: "LIQUIBASE-CP",
      highlight: false
    },
    {
      title: "AI for Executives",
      issuer: "UC Berkeley Executive Education",
      date: "Completed",
      icon: "cpu",
      code: "UC-BERKELEY-AI",
      highlight: false
    }
  ],

  terminalHelp: [
    { cmd: "help", desc: "Display all available terminal commands" },
    { cmd: "whoami", desc: "Display Arvind Toorpu's profile, role & awards" },
    { cmd: "awards", desc: "List international honors (Oracle ACE Pro, AWS Builder, GRA Award)" },
    { cmd: "metrics", desc: "Show enterprise uptime (99.999%), data scale, and migrations" },
    { cmd: "skills", desc: "Print core database engines, cloud platforms & AI expertise" },
    { cmd: "publications", desc: "List published articles on Oracle 23ai & Zero-Trust Migrations" },
    { cmd: "migrate", desc: "Simulate a live zero-downtime cloud migration runbook" },
    { cmd: "uptime", desc: "Inspect current cluster telemetry and SLA health" },
    { cmd: "case-studies", desc: "List major real-world migration case studies" },
    { cmd: "contact", desc: "Output direct website, LinkedIn, and email details" },
    { cmd: "clear", desc: "Clear the terminal console screen" }
  ]
};

// Export for module or browser window usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
