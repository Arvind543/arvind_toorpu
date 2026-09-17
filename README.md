# Enterprise DBA & Database Migration Specialist Portfolio

A modern, high-impact portfolio website engineered specifically for a **Senior Database Administrator, Principal Database Architect, and Cloud Migration Specialist (15+ Years Experience)**.

---

## 🚀 Quick Start (View Immediately)

You can open and view this portfolio immediately in any web browser:
1. Double-click **`index.html`** in File Explorer, or
2. Launch a lightweight local development server:

```powershell
# Option A: Using Python (already installed)
python -m http.server 3000

# Option B: Using Node.js npx
npx serve .
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ How to Customize Your Information

All content is cleanly decoupled into **`data.js`**. You don't need to hunt through HTML tags to modify your information.

Open **`data.js`** to customize:
- **`profile`**: Your name, title, bio, contact email, phone, LinkedIn, and GitHub links.
- **`keyMetrics`**: Your career numbers (e.g. Years of Experience, SLA Uptime %, Data Volume managed in TB/PB, TCO Savings, Peak TPS).
- **`pillars`**: The 6 core architecture pillars highlighting your specialties.
- **`migrationAdvisorRules`**: Supported database engines and migration options.
- **`caseStudies`**: Detailed real-world enterprise migration & performance case studies.
- **`skillsMatrix`**: Grouped technology ratings and years of experience.
- **`careerTimeline`**: 15+ year chronological progression and key project outcomes.
- **`certifications`**: AWS, Azure, Oracle, and Postgres certifications.

---

## 🌟 Key Features

1. **Interactive Migration Strategy & Architecture Advisor**:
   - Allows clients, recruiters, and engineering leaders to select source DB (Oracle RAC, SQL Server, PostgreSQL, MySQL), target cloud DBaaS (AWS Aurora, Azure SQL MI, GCP AlloyDB), data volume, and downtime tolerance.
   - Instantly calculates an end-to-end tactical migration blueprint: schema conversion tooling, CDC replication pipeline, cutover window, and rollback strategy.

2. **Enterprise Case Studies with Architecture Blueprints**:
   - Filterable showcase of real-world scenarios: 35 TB Oracle RAC to AWS Aurora PG heterogeneous migration, multi-region SQL Server AlwaysOn DR, e-commerce latency turnaround, and GitOps DBRE automation.
   - Click "Inspect Full Architectural Blueprint" for an in-depth modal deep dive.

3. **Filterable Technical Competency Matrix**:
   - Categorized by RDBMS, Cloud DBaaS, Migration/CDC, Diagnostics/Tuning, DevOps/IaC, and Security/Compliance.
   - Interactive live search filter.

4. **Interactive DBA Terminal CLI Console (Easter Egg)**:
   - Built-in terminal simulation modal with custom commands (`help`, `metrics`, `skills`, `migrate`, `uptime`, `whoami`, `contact`, `clear`).
   - Supports keyboard command history (Up/Down arrow keys).

5. **Print & PDF-Ready Resume Export**:
   - Click **"Resume PDF"** or **"Print / PDF"** to trigger a clean, printer-optimized executive resume view with navigation and dark backgrounds stripped away.

---

## 🌐 Deploying to the Web

### GitHub Pages (Free & Instant)
1. Push this folder to a GitHub repository (e.g. `your-username/dba-portfolio`).
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/dba-portfolio/`.

### Vercel / Netlify
- Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop) or deploy directly with Vercel CLI (`npx vercel`).
