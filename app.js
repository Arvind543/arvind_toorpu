// Application Logic for Arvind Toorpu Portfolio
// Cloud Ops Database Manager & Principal Database Architect

document.addEventListener('DOMContentLoaded', () => {
  initProfileAndHero();
  initHonors();
  initKeyMetrics();
  initPillars();
  initMigrationAdvisor();
  initCaseStudies();
  initPublications();
  initSkillsMatrix();
  initCareerTimeline();
  initEducationAndMentorship();
  initCertifications();
  initTerminal();
  initContactForm();
  initLucideIcons();
  initNavigation();
});

// Helper for Lucide icons initialization
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// 1. Profile & Hero Initialization
function initProfileAndHero() {
  const profile = PORTFOLIO_DATA.profile;

  // Title, Name & Taglines
  const nameEls = document.querySelectorAll('.hero-name');
  nameEls.forEach(el => el.textContent = profile.name);

  const titleEls = document.querySelectorAll('.hero-title');
  titleEls.forEach(el => el.textContent = profile.title);

  const currentRoleEl = document.getElementById('hero-current-role');
  if (currentRoleEl) currentRoleEl.textContent = profile.currentRole;

  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = profile.tagline;

  const bioEl = document.getElementById('about-bio');
  if (bioEl) bioEl.textContent = profile.bio;

  const locationEl = document.getElementById('profile-location');
  if (locationEl) locationEl.textContent = profile.location;

  const websiteEls = document.querySelectorAll('.profile-website');
  websiteEls.forEach(el => {
    el.textContent = profile.website.replace('https://', '');
    el.href = profile.website;
  });

  const emailEls = document.querySelectorAll('.profile-email');
  emailEls.forEach(el => {
    el.href = `mailto:${profile.email}`;
  });

  const linkedinEl = document.getElementById('profile-linkedin');
  if (linkedinEl) linkedinEl.href = profile.linkedin;

  const githubEl = document.getElementById('profile-github');
  if (githubEl) githubEl.href = profile.github;
}

// 2. Honors & Global Awards Grid
function initHonors() {
  const container = document.getElementById('honors-grid');
  if (!container || !PORTFOLIO_DATA.honors) return;

  container.innerHTML = PORTFOLIO_DATA.honors.map(honor => `
    <div class="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/30">${honor.year}</span>
          <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
            <i data-lucide="${honor.icon}" class="w-4 h-4"></i>
          </div>
        </div>
        <h3 class="text-base font-bold text-white group-hover:text-amber-400 transition-colors">${honor.title}</h3>
        <div class="text-xs font-mono text-slate-400 mt-0.5">${honor.organization}</div>
        <p class="text-slate-300 text-xs leading-relaxed mt-3">${honor.description}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-800/80">
        <a href="${honor.link}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors">
          <span>Verify Credential</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// 3. Key Metrics Counter Grid
function initKeyMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.keyMetrics.map(metric => `
    <div class="glass-panel p-6 rounded-xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-center justify-between mb-2">
        <span class="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-mono-code">${metric.value}</span>
        <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <i data-lucide="${metric.icon}" class="w-5 h-5"></i>
        </div>
      </div>
      <div class="text-sm font-semibold text-slate-200 mt-1">${metric.label}</div>
      <div class="text-xs text-slate-400 mt-1">${metric.detail}</div>
    </div>
  `).join('');
}

// 4. Core Pillars / Specializations
function initPillars() {
  const container = document.getElementById('pillars-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.pillars.map(pillar => `
    <div class="glass-panel p-7 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
        <i data-lucide="${pillar.icon}" class="w-6 h-6"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">${pillar.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed mb-4">${pillar.description}</p>
      <ul class="space-y-2 border-t border-slate-800/80 pt-4">
        ${pillar.bulletPoints.map(bp => `
          <li class="flex items-start text-xs text-slate-300">
            <span class="text-emerald-400 mr-2 font-bold font-mono-code">❯</span>
            <span>${bp}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// 5. Interactive Migration Strategy & Architecture Advisor
function initMigrationAdvisor() {
  const sourceSelect = document.getElementById('advisor-source');
  const targetSelect = document.getElementById('advisor-target');
  const scaleSelect = document.getElementById('advisor-scale');
  const toleranceSelect = document.getElementById('advisor-tolerance');
  const runBtn = document.getElementById('advisor-run-btn');
  const outputContainer = document.getElementById('advisor-output');

  if (!sourceSelect || !targetSelect || !runBtn) return;

  sourceSelect.innerHTML = PORTFOLIO_DATA.migrationAdvisorRules.sources.map(s => `
    <option value="${s.id}">${s.name}</option>
  `).join('');

  targetSelect.innerHTML = PORTFOLIO_DATA.migrationAdvisorRules.targets.map(t => `
    <option value="${t.id}">${t.name}</option>
  `).join('');

  scaleSelect.innerHTML = PORTFOLIO_DATA.migrationAdvisorRules.dataScales.map(sc => `
    <option value="${sc.id}">${sc.label}</option>
  `).join('');

  toleranceSelect.innerHTML = PORTFOLIO_DATA.migrationAdvisorRules.tolerances.map(tol => `
    <option value="${tol.id}">${tol.label}</option>
  `).join('');

  // Default selection: Oracle RAC -> AWS Aurora PG
  sourceSelect.value = "oracle_rac";
  targetSelect.value = "aws_aurora_pg";
  scaleSelect.value = "large";
  toleranceSelect.value = "zero_downtime";

  function computeBlueprint() {
    const src = sourceSelect.value;
    const tgt = targetSelect.value;
    const scale = scaleSelect.value;
    const tol = toleranceSelect.value;

    const isHeterogeneous = (src.includes('oracle') || src.includes('mssql')) && (tgt.includes('aurora') || tgt.includes('alloy') || tgt.includes('pg'));
    const isZeroDowntime = tol === 'zero_downtime';

    let strategyType = isHeterogeneous ? "Heterogeneous Zero-Trust Refactor & CDC Replatform" : "Homogeneous Cloud Modernization & Autonomous Rehost";
    let toolchain = [];
    let cutoverTime = isZeroDowntime ? "10 – 15 Minutes (Final CDC Drain & CNAME Switch)" : "2 – 4 Hours (Maintenance Window)";
    let rollbackStrategy = "Bidirectional CDC Replication (GoldenGate/DMS) with Instant DNS Fallback";

    if (isHeterogeneous) {
      toolchain = [
        "AWS Schema Conversion Tool (SCT) for automated schema & PL/SQL translation",
        "AWS Database Migration Service (DMS) / GoldenGate for continuous CDC replication",
        "Zero-Trust TLS 1.3 cryptographic transport & KMS customer-managed keys",
        "Liquibase / Flyway for target PostgreSQL schema revision control"
      ];
    } else {
      toolchain = [
        "Oracle GoldenGate / OCI Database Migration Service for zero-downtime replication",
        "Active Data Guard & RMAN cross-cloud synchronization",
        "Terraform for automated multi-cloud DBaaS provisioning & IAM configuration",
        "Automated AWR / ADDM diagnostic delivery telemetry"
      ];
    }

    const phases = [
      {
        phase: "Phase 1: Zero-Trust Discovery & Security Assessment",
        desc: "Extract object metadata, analyze proprietary stored procedures/packages, evaluate LOB structures, and establish cryptographic perimeter controls."
      },
      {
        phase: "Phase 2: Target Infrastructure Provisioning & DDL Baseline",
        desc: `Deploy high-availability ${targetSelect.options[targetSelect.selectedIndex].text} with Multi-AZ / multi-node clustering and baseline DDL converted via automated schema tooling.`
      },
      {
        phase: "Phase 3: Bulk Data Load & Continuous Change Data Capture (CDC)",
        desc: "Launch high-throughput replication tasks with continuous transaction log synchronization to maintain near-zero replication lag across private interconnect."
      },
      {
        phase: "Phase 4: Automated Data Reconciliation & Hash Verification",
        desc: "Execute multi-threaded block and row-level SHA-256 hash comparisons across primary keys. Validate transaction counts, numeric precision, and date stamps."
      },
      {
        phase: "Phase 5: Cutover, DNS Switchover & Reverse CDC Safety Net",
        desc: "Quiesce application writes, allow target replica to capture remaining delta queue, redirect application connection strings / DNS CNAMEs, and activate reverse-replication for 48-hour rollback protection."
      }
    ];

    outputContainer.innerHTML = `
      <div class="bg-slate-900/90 border border-emerald-500/40 rounded-xl p-6 glow-emerald">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
          <div>
            <span class="text-xs uppercase tracking-wider text-emerald-400 font-mono-code font-bold">Migration Strategy Blueprint</span>
            <h4 class="text-xl font-bold text-white mt-1">${strategyType}</h4>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-mono-code font-semibold">Cutover: ${cutoverTime}</span>
            <span class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-mono-code font-semibold">RPO = 0</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div class="bg-slate-950/60 p-4 rounded-lg border border-slate-800">
            <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono-code">Recommended Toolchain</h5>
            <ul class="space-y-1.5 text-xs text-slate-200">
              ${toolchain.map(t => `<li class="flex items-start"><span class="text-emerald-400 mr-2 font-bold font-mono-code">✔</span>${t}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-slate-950/60 p-4 rounded-lg border border-slate-800">
            <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono-code">Safety Net & Rollback Mechanism</h5>
            <p class="text-xs text-slate-300 leading-relaxed">${rollbackStrategy}</p>
            <div class="mt-2 text-[11px] text-amber-400/90 font-mono-code">⚡ Zero-Trust encryption & automated pre-flight checks active</div>
          </div>
        </div>

        <div>
          <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-mono-code">5-Stage Execution Roadmap</h5>
          <div class="space-y-2.5">
            ${phases.map((p, idx) => `
              <div class="flex items-start bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono-code mr-3 shrink-0">${idx+1}</span>
                <div>
                  <div class="text-xs font-bold text-slate-200">${p.phase}</div>
                  <div class="text-xs text-slate-400 mt-0.5 leading-relaxed">${p.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    initLucideIcons();
  }

  runBtn.addEventListener('click', computeBlueprint);
  computeBlueprint();
}

// 6. Enterprise Case Studies
function initCaseStudies() {
  const container = document.getElementById('case-studies-grid');
  const filterBtns = document.querySelectorAll('.case-filter-btn');
  if (!container) return;

  function render(category = 'all') {
    const list = category === 'all' 
      ? PORTFOLIO_DATA.caseStudies 
      : PORTFOLIO_DATA.caseStudies.filter(c => c.category === category);

    container.innerHTML = list.map(cs => `
      <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group">
        <div class="p-6 lg:p-7">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-1 rounded text-[11px] font-mono-code font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">${cs.clientType}</span>
            <span class="px-2.5 py-1 rounded text-[11px] font-mono-code font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">${cs.badge}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">${cs.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">${cs.summary}</p>
          
          <div class="grid grid-cols-2 gap-3 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            ${cs.results.slice(0, 2).map(r => `
              <div>
                <div class="text-lg font-bold text-emerald-400 font-mono-code">${r.metric}</div>
                <div class="text-xs text-slate-400">${r.text}</div>
              </div>
            `).join('')}
          </div>

          <div class="flex flex-wrap gap-1.5 mb-2">
            ${cs.architectureTags.map(tag => `
              <span class="px-2 py-0.5 bg-slate-900 text-slate-300 rounded text-[11px] font-mono-code border border-slate-800">${tag}</span>
            `).join('')}
          </div>
        </div>

        <div class="p-6 lg:p-7 pt-0 border-t border-slate-800/60 mt-auto">
          <button onclick="openCaseStudyModal('${cs.id}')" class="w-full mt-4 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 text-xs font-bold text-slate-200 hover:text-cyan-400 transition-all flex items-center justify-center gap-2">
            <span>Inspect Full Architectural Blueprint</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `).join('');

    initLucideIcons();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('bg-emerald-500', 'text-slate-950', 'font-bold'));
      filterBtns.forEach(b => b.classList.add('bg-slate-900', 'text-slate-400'));
      btn.classList.remove('bg-slate-900', 'text-slate-400');
      btn.classList.add('bg-emerald-500', 'text-slate-950', 'font-bold');
      render(btn.getAttribute('data-category'));
    });
  });

  render('all');
}

// Case Study Detail Modal
window.openCaseStudyModal = function(id) {
  const cs = PORTFOLIO_DATA.caseStudies.find(c => c.id === id);
  if (!cs) return;

  const modal = document.getElementById('case-modal');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');

  titleEl.textContent = cs.title;
  bodyEl.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-3">
        <span class="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono-code border border-slate-700">${cs.clientType}</span>
        <span class="px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono-code font-bold border border-cyan-500/30">${cs.category}</span>
        <span class="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono-code font-bold border border-emerald-500/30">${cs.badge}</span>
      </div>

      <div>
        <h4 class="text-xs uppercase font-mono-code font-bold text-slate-400 mb-2">The Enterprise Challenge</h4>
        <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-sm leading-relaxed">
          ${cs.problem}
        </div>
      </div>

      <div>
        <h4 class="text-xs uppercase font-mono-code font-bold text-slate-400 mb-2">Architectural Solution & Execution</h4>
        <div class="space-y-2.5">
          ${cs.solution.map((step, idx) => `
            <div class="flex items-start bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
              <span class="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold font-mono-code mr-3 shrink-0">${idx+1}</span>
              <p class="text-slate-300 text-xs leading-relaxed">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="text-xs uppercase font-mono-code font-bold text-slate-400 mb-2">Quantified Business & Technical Impact</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${cs.results.map(r => `
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div class="text-lg font-bold text-emerald-400 font-mono-code">${r.metric}</div>
              <div class="text-xs text-slate-400 mt-1">${r.text}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="text-xs uppercase font-mono-code font-bold text-slate-400 mb-2">Technical Toolchain</h4>
        <div class="flex flex-wrap gap-2">
          ${cs.architectureTags.map(tag => `
            <span class="px-3 py-1 bg-slate-900 text-slate-200 rounded-lg text-xs font-mono-code border border-slate-800">${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  initLucideIcons();
};

window.closeCaseStudyModal = function() {
  const modal = document.getElementById('case-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

// 7. Publications & Thought Leadership
function initPublications() {
  const container = document.getElementById('publications-grid');
  if (!container || !PORTFOLIO_DATA.publications) return;

  container.innerHTML = PORTFOLIO_DATA.publications.map(pub => `
    <div class="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[11px] font-mono font-semibold border border-cyan-500/20">${pub.category}</span>
          <span class="text-xs text-slate-500 font-mono">${pub.platform}</span>
        </div>
        <h4 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mt-2">${pub.title}</h4>
        <p class="text-xs text-slate-400 leading-relaxed mt-2">${pub.summary}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-800/80">
        <a href="${pub.link}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
          <span>Read on arvindtoorpu.com</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// 8. Education, Executive Learning & Mentorship
function initEducationAndMentorship() {
  const container = document.getElementById('education-grid');
  if (!container || !PORTFOLIO_DATA.educationAndMentorship) return;

  container.innerHTML = PORTFOLIO_DATA.educationAndMentorship.map(item => `
    <div class="glass-panel p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all">
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
          <i data-lucide="graduation-cap" class="w-4 h-4"></i>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white">${item.title}</h4>
          <div class="text-xs font-mono text-cyan-400 mt-0.5">${item.institution}</div>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">${item.detail}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 9. Skills Matrix with Search & Filter
function initSkillsMatrix() {
  const container = document.getElementById('skills-container');
  const searchInput = document.getElementById('skills-search');
  if (!container) return;

  function render(searchQuery = '') {
    const query = searchQuery.toLowerCase().trim();

    container.innerHTML = PORTFOLIO_DATA.skillsMatrix.map(group => {
      const filteredItems = group.items.filter(item => 
        !query || item.name.toLowerCase().includes(query) || group.category.toLowerCase().includes(query)
      );

      if (filteredItems.length === 0) return '';

      return `
        <div class="glass-panel p-6 rounded-2xl border border-slate-800">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <h4 class="font-bold text-slate-200 text-sm uppercase tracking-wide font-mono-code flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              ${group.category}
            </h4>
            <span class="text-xs text-slate-500 font-mono-code">${filteredItems.length} technologies</span>
          </div>

          <div class="space-y-4">
            ${filteredItems.map(item => `
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-semibold text-slate-300 flex items-center gap-1.5">
                    ${item.highlight ? `<span class="text-emerald-400 text-xs">★</span>` : ''}
                    ${item.name}
                  </span>
                  <span class="text-slate-400 font-mono-code">${item.exp}</span>
                </div>
                <div class="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800/80">
                  <div class="h-full rounded-full ${item.highlight ? 'bg-gradient-to-r from-emerald-500 to-cyan-400' : 'bg-slate-600'}" style="width: ${item.level}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      render(e.target.value);
    });
  }

  render('');
}

// 10. Career Timeline
function initCareerTimeline() {
  const container = document.getElementById('career-timeline-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.careerTimeline.map((item, idx) => `
    <div class="relative pl-8 sm:pl-10 pb-10 border-l-2 border-slate-800 last:pb-0 last:border-transparent group">
      <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:scale-125 transition-transform flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
      </div>

      <div class="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono-code font-bold border border-emerald-500/20">${item.period}</span>
          ${item.scope ? `<span class="text-xs text-cyan-400 font-mono-code">${item.scope}</span>` : ''}
        </div>

        <h3 class="text-lg font-bold text-white mt-1">${item.role}</h3>
        <div class="text-sm font-semibold text-slate-400 mb-4">${item.company}</div>

        <ul class="space-y-2 mb-5">
          ${item.achievements.map(ach => `
            <li class="flex items-start text-xs text-slate-300 leading-relaxed">
              <span class="text-emerald-400 mr-2 font-mono-code font-bold">❯</span>
              <span>${ach}</span>
            </li>
          `).join('')}
        </ul>

        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
          ${item.technologies.map(tech => `
            <span class="px-2.5 py-1 bg-slate-900 text-slate-300 rounded text-[11px] font-mono-code border border-slate-800">${tech}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// 11. Certifications
function initCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="glass-panel p-5 rounded-xl border ${cert.highlight ? 'border-cyan-500/30 hover:border-cyan-400/60' : 'border-slate-800 hover:border-indigo-500/40'} transition-all flex items-start gap-4">
      <div class="w-10 h-10 rounded-lg ${cert.highlight ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400' : 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400'} flex items-center justify-center shrink-0 mt-0.5">
        <i data-lucide="${cert.icon}" class="w-5 h-5"></i>
      </div>
      <div class="flex-1">
        <h4 class="text-sm font-bold text-white">${cert.title}</h4>
        <div class="text-xs text-slate-400 mt-0.5">${cert.issuer}</div>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">${cert.date}</span>
          ${cert.link ? `
            <a href="${cert.link}" target="_blank" class="text-[10px] font-mono-code text-amber-400 hover:underline flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 font-bold">
              <span>${cert.code}</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          ` : `
            <span class="text-[10px] font-mono-code text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">${cert.code}</span>
          `}
        </div>
      </div>
    </div>
  `).join('');
}

// 12. Interactive DBA Terminal Modal & CLI Simulation
function initTerminal() {
  const terminalModal = document.getElementById('dba-terminal-modal');
  const openBtn = document.getElementById('open-terminal-btn');
  const closeBtn = document.getElementById('close-terminal-btn');
  const termOutput = document.getElementById('terminal-output');
  const termInput = document.getElementById('terminal-input');

  if (!terminalModal || !termInput) return;

  let commandHistory = [];
  let historyIdx = -1;

  window.openTerminalModal = () => {
    terminalModal.classList.add('active');
    termInput.focus();
    document.body.style.overflow = 'hidden';
  };

  window.closeTerminalModal = () => {
    terminalModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openBtn) openBtn.addEventListener('click', window.openTerminalModal);
  if (closeBtn) closeBtn.addEventListener('click', window.closeTerminalModal);

  function printLine(html) {
    const line = document.createElement('div');
    line.className = "mb-1 text-xs font-mono-code leading-relaxed";
    line.innerHTML = html;
    termOutput.appendChild(line);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function handleCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    commandHistory.push(rawCmd);
    historyIdx = commandHistory.length;

    // Echo command
    printLine(`<span class="text-emerald-400 font-bold">arvind@cluster-01:~$</span> <span class="text-slate-100">${rawCmd}</span>`);

    if (cmd === 'help') {
      let output = `<div class="text-cyan-400 font-bold mb-1">Available Arvind Toorpu CLI Commands:</div>`;
      PORTFOLIO_DATA.terminalHelp.forEach(h => {
        output += `<div><span class="text-emerald-300 w-28 inline-block font-bold">${h.cmd}</span> <span class="text-slate-400">- ${h.desc}</span></div>`;
      });
      printLine(output);
    } else if (cmd === 'whoami') {
      const p = PORTFOLIO_DATA.profile;
      printLine(`
        <div class="text-slate-200">
          <div class="text-cyan-300 font-bold">${p.name} - ${p.title}</div>
          <div class="text-amber-400 text-xs font-bold mt-0.5">★ <a href="${p.oracleAce}" target="_blank" class="underline text-amber-300">Oracle ACE Pro (ACE ID: 2658)</a> | <a href="${p.awsBuilder}" target="_blank" class="underline text-cyan-300">AWS Community Builder</a> | 2024 GRA Winner</div>
          <div class="text-slate-400 text-xs mt-1 leading-relaxed">${p.bio}</div>
          <div class="text-emerald-400 text-xs mt-2">Current Role: ${p.currentRole}</div>
          <div class="text-cyan-400 text-xs">Official Site: <a href="${p.website}" target="_blank" class="underline">${p.website}</a></div>
          <div class="text-amber-400 text-xs">Oracle ACE Profile: <a href="${p.oracleAce}" target="_blank" class="underline">${p.oracleAce}</a></div>
          <div class="text-cyan-400 text-xs">AWS Builder Center: <a href="${p.awsBuilder}" target="_blank" class="underline">${p.awsBuilder}</a></div>
        </div>
      `);
    } else if (cmd === 'awards' || cmd === 'honors') {
      let output = `<div class="text-amber-400 font-bold mb-1">Global Honors & Industry Recognitions:</div>`;
      PORTFOLIO_DATA.honors.forEach(h => {
        output += `<div class="mt-1"><span class="text-amber-300 font-bold">★ ${h.title}</span> <span class="text-slate-400">(${h.organization}, ${h.year})</span> <a href="${h.link}" target="_blank" class="text-cyan-400 underline text-xs font-mono">[Verify]</a><div class="text-slate-300 text-[11px] pl-3">${h.description}</div></div>`;
      });
      printLine(output);
    } else if (cmd === 'metrics') {
      let output = `<div class="text-cyan-400 font-bold mb-1">Production Reliability & Impact Metrics:</div>`;
      PORTFOLIO_DATA.keyMetrics.forEach(m => {
        output += `<div><span class="text-emerald-400 font-bold w-24 inline-block">${m.value}</span> <span class="text-slate-300">${m.label}</span> <span class="text-slate-500">(${m.detail})</span></div>`;
      });
      printLine(output);
    } else if (cmd === 'publications') {
      let output = `<div class="text-cyan-400 font-bold mb-1">Published Research & Thought Leadership:</div>`;
      PORTFOLIO_DATA.publications.forEach(pub => {
        output += `<div class="mt-1"><span class="text-emerald-400 font-bold">📄 ${pub.title}</span> <span class="text-slate-500">(${pub.platform})</span><div class="text-slate-400 text-[11px] pl-3">${pub.summary}</div></div>`;
      });
      printLine(output);
    } else if (cmd === 'skills') {
      let output = `<div class="text-cyan-400 font-bold mb-1">Core Database & Cloud Competencies:</div>`;
      PORTFOLIO_DATA.skillsMatrix.forEach(grp => {
        output += `<div class="text-emerald-400 font-bold mt-2 text-xs">== ${grp.category} ==</div>`;
        grp.items.forEach(it => {
          output += `<div class="text-slate-300 text-xs pl-2">❯ ${it.name} <span class="text-slate-500">(${it.exp})</span></div>`;
        });
      });
      printLine(output);
    } else if (cmd.startsWith('migrate')) {
      printLine(`
        <div class="text-emerald-400 font-bold">Initiating Zero-Trust Cloud Database Migration Simulation...</div>
        <div class="text-slate-300">[1/5] Cryptographic Schema Inspection: Oracle 19c RAC ... <span class="text-emerald-400">VERIFIED</span></div>
        <div class="text-slate-300">[2/5] Target Provisioning: AWS Aurora PostgreSQL Multi-AZ ... <span class="text-emerald-400">ONLINE</span></div>
        <div class="text-slate-300">[3/5] Zero-Trust CDC Bridge: Continuous replication active (Lag: 0.08s) ... <span class="text-emerald-400">SYNCED</span></div>
        <div class="text-slate-300">[4/5] Multi-Threaded Checksum Validation: 1,400,000,000 records ... <span class="text-emerald-400">100% MATCH</span></div>
        <div class="text-slate-300">[5/5] CNAME Switchover Complete (Cutover window: 11m 42s) ... <span class="text-emerald-400">SUCCESS</span></div>
        <div class="text-cyan-300 font-bold mt-1">Status: Zero data loss, RPO=0, RTO verified.</div>
      `);
    } else if (cmd === 'uptime') {
      printLine(`
        <div class="text-slate-200">
          <div><span class="text-slate-400">Cluster Status:</span> <span class="text-emerald-400 font-bold">HEALTHY (Multi-Cloud Active-Active)</span></div>
          <div><span class="text-slate-400">Uptime:</span> <span class="text-slate-100">1,460 days, 18 hrs, 22 mins</span></div>
          <div><span class="text-slate-400">SLA Achievement:</span> <span class="text-emerald-400 font-bold">99.999% Availability</span></div>
          <div><span class="text-slate-400">Replication Lag:</span> <span class="text-emerald-400 font-bold">< 15ms across primary & cross-region replicas</span></div>
        </div>
      `);
    } else if (cmd === 'case-studies') {
      let output = `<div class="text-cyan-400 font-bold mb-1">Architectural Case Studies:</div>`;
      PORTFOLIO_DATA.caseStudies.forEach(cs => {
        output += `<div class="mt-1"><span class="text-emerald-400 font-bold">★ ${cs.title}</span><div class="text-slate-400 text-xs pl-3">${cs.summary}</div></div>`;
      });
      printLine(output);
    } else if (cmd === 'contact') {
      const p = PORTFOLIO_DATA.profile;
      printLine(`
        <div class="text-slate-200">
          <div>Website: <a href="${p.website}" target="_blank" class="text-cyan-400 underline">${p.website}</a></div>
          <div>LinkedIn: <a href="${p.linkedin}" target="_blank" class="text-cyan-400 underline">${p.linkedin}</a></div>
          <div>Email: <a href="mailto:${p.email}" class="text-cyan-400 underline">Email</a></div>
          <div>Location: <span class="text-slate-300">${p.location}</span></div>
        </div>
      `);
    } else if (cmd === 'clear') {
      termOutput.innerHTML = '';
    } else {
      printLine(`<span class="text-rose-400">Command not found: '${rawCmd}'. Type <span class="text-emerald-400 font-bold underline cursor-pointer" onclick="runQuickCommand('help')">help</span> for available commands.</span>`);
    }
  }

  window.runQuickCommand = (cmdStr) => {
    termInput.value = cmdStr;
    handleCommand(cmdStr);
    termInput.value = '';
    termInput.focus();
  };

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = termInput.value;
      termInput.value = '';
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        historyIdx--;
        termInput.value = commandHistory[historyIdx] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < commandHistory.length - 1) {
        historyIdx++;
        termInput.value = commandHistory[historyIdx] || '';
      } else {
        historyIdx = commandHistory.length;
        termInput.value = '';
      }
    }
  });

  printLine(`
    <div class="text-emerald-400 font-bold mb-1">=== Arvind Toorpu Enterprise Telemetry Console ===</div>
    <div class="text-slate-400 text-xs mb-2">Connected to cluster: <span class="text-cyan-300">cloud-ops.allspring.global</span> (TLS 1.3)</div>
    <div class="text-slate-300 text-xs mb-3">Type <span class="text-emerald-300 font-bold">help</span>, <span class="text-amber-300 font-bold">awards</span>, or click below.</div>
  `);
}

// 13. Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const scope = document.getElementById('contact-scope').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      alert('Please complete all required fields.');
      return;
    }

    if (alertBox) {
      alertBox.classList.remove('hidden');
      alertBox.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs leading-relaxed">
          <span class="font-bold">Thank you, ${name}!</span> Your inquiry regarding <strong>${scope}</strong> has been received. ${PORTFOLIO_DATA.profile.name} will respond via <strong>${email}</strong> within 24 hours.
        </div>
      `;
    }

    form.reset();
  });
}

// 14. Navigation & Smooth Scrolling
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-emerald-400', 'border-emerald-500');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-emerald-400');
      }
    });
  });

  const printResumeBtns = document.querySelectorAll('.btn-print-resume');
  printResumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });
}
