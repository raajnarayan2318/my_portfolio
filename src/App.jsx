import raajPhoto from "./assets/IMG_6246.jpg"; // <-- put your photo in /src/assets and update the name if needed

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f1] via-[#fdfcf9] to-[#f3eee6] text-[#2a2a2a] scroll-smooth font-sans">
      {/* ===== TOP NAV / BRAND BAR ===== */}
      <header className="sticky top-0 z-20 border-b border-[#d8d1c5]/70 bg-[#fcfbf8]/80 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left: Name + contact summary */}
          <div className="flex items-start gap-4">
            {/* Mini avatar badge with initials */}
            <div className="h-11 w-11 bg-[#2f2b25] text-[#fdfcf9] flex items-center justify-center rounded-xl font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              RT
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold text-[#2f2b25] tracking-tight">
                RAAJ NARAYAN RAO THIPPARTHY
              </div>
              <div className="text-[12px] text-[#6a5f4e]">
                832-519-7135 | raajnarayan.vgf287@gmail.com
              </div>
              <div className="text-[12px] text-[#6a5f4e] break-all">
                www.linkedin.com/in/raajnarayan
              </div>
            </div>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-medium">
            <a
              href="#summary"
              className="text-[#2f2b25] visited:text-[#2f2b25] hover:text-[#6a5f4e] hover:underline underline-offset-4 transition-colors duration-150"
            >
              Summary
            </a>

            <a
              href="#skills"
              className="text-[#2f2b25] visited:text-[#2f2b25] hover:text-[#6a5f4e] hover:underline underline-offset-4 transition-colors duration-150"
            >
              Skills
            </a>

            {/* ===== Experience (hover dropdown, centered below, trigger does NOT navigate) ===== */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center text-[#2f2b25] hover:text-[#6a5f4e] hover:underline underline-offset-4 transition-colors duration-150 focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Experience
              </button>

              <div
                className="
                  absolute top-full left-1/2 -translate-x-1/2 mt-1 z-30 w-[22rem]
                  rounded-xl border border-[#e6dfd3] bg-[#fffcf7]
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  opacity-0 translate-y-1 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                "
              >
                {/* LotusPetal AI */}
                <a
                  href="#exp-lotuspetal"
                  className="block rounded-lg px-4 py-3 hover:bg-[#f5f0e6] transition-colors"
                >
                  <div className="flex items-baseline justify-between text-[#2f2b25]">
                    <span className="text-[13px] font-medium">LotusPetal AI</span>
                    <span className="text-[12px] text-[#7a6e5c]">Jan 2025 – Present</span>
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#6a5f4e]">
                    AI Research Data Analyst
                  </div>
                </a>

                {/* Sakesh Solutions LLC */}
                <a
                  href="#exp-sakesh"
                  className="block rounded-lg px-4 py-3 hover:bg-[#f5f0e6] transition-colors"
                >
                  <div className="flex items-baseline justify-between text-[#2f2b25]">
                    <span className="text-[13px] font-medium">Sakesh Solutions LLC</span>
                    <span className="text-[12px] text-[#7a6e5c]">Sep 2024 – Dec 2024</span>
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#6a5f4e]">
                    Data Analyst Intern
                  </div>
                </a>

                {/* Radiant Infosystems */}
                <a
                  href="#exp-radiant"
                  className="block rounded-lg px-4 py-3 hover:bg-[#f5f0e6] transition-colors"
                >
                  <div className="flex items-baseline justify-between text-[#2f2b25]">
                    <span className="text-[13px] font-medium">Radiant Infosystems</span>
                    <span className="text-[12px] text-[#7a6e5c]">May 2020 – May 2022</span>
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#6a5f4e]">
                    Data Analyst / Power BI Developer
                  </div>
                </a>
              </div>
            </div>
            {/* ===== end Experience ===== */}

            {/* ===== Projects (hover dropdown, centered below, trigger does NOT navigate) ===== */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center text-[#2f2b25] hover:text-[#6a5f4e] hover:underline underline-offset-4 transition-colors duration-150 focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </button>

              <div
                className="
                  absolute top-full left-1/2 -translate-x-1/2 mt-1 z-30 w-[26rem]
                  rounded-xl border border-[#e6dfd3] bg-[#fffcf7]
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  opacity-0 translate-y-1 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                "
              >
                <a
                  href="#proj-gtm"
                  className="block rounded-lg px-4 py-3 hover:bg-[#f5f0e6] transition-colors"
                >
                  <div className="text-[#2f2b25] text-[13px] font-medium">
                    GTM Project
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#6a5f4e]">
                    Data-backed go-to-market strategy
                  </div>
                </a>

                <a
                  href="#proj-agency"
                  className="block rounded-lg px-4 py-3 hover:bg-[#f5f0e6] transition-colors"
                >
                  <div className="text-[#2f2b25] text-[13px] font-medium">
                    Agency–Contractor Relationship
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#6a5f4e]">
                    Multi-source ingestion & scoring
                  </div>
                </a>

                <a
                  href="#proj-churn"
                  className="block rounded-lg px-4 py-3 hover:bg-[#f5f0e6] transition-colors"
                >
                  <div className="text-[#2f2b25] text-[13px] font-medium">
                    Customer Churn Model
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#6a5f4e]">
                    Student ML pipeline & dashboards
                  </div>
                </a>
              </div>
            </div>
            {/* ===== end Projects ===== */}

            <a
              href="#education"
              className="text-[#2f2b25] visited:text-[#2f2b25] hover:text-[#6a5f4e] hover:underline underline-offset-4 transition-colors duration-150"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-[#2f2b25] visited:text-[#2f2b25] hover:text-[#6a5f4e] hover:underline underline-offset-4 transition-colors duration-150"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ===== MAIN CONTENT WRAPPER ===== */}
      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-16 space-y-20">

        {/* ===== HERO / INTRO ===== */}
        <section className="relative">
          <div
            className="absolute inset-x-0 -top-10 -z-10 mx-auto h-64 w-64 rounded-full blur-[110px] opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.28)_0%,rgba(255,255,255,0)_70%)]"
          />

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            {/* left side: headline card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#e6dfd3] bg-[#fffcf7]/80 shadow-[0_30px_120px_rgba(0,0,0,0.12)] p-8">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#d6c7aa]/20 blur-2xl opacity-40" />
                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#fff7e6]/50 blur-xl opacity-80" />
              </div>

              <div className="relative space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#2f2b25] leading-tight tracking-tight">
                    Data Analyst
                  </h1>
                  <p className="mt-2 text-[14px] text-[#5a4f3e] leading-relaxed tracking-normal">
                    SQL • Python • Power BI • KPI Design • Dashboard Development • ETL Pipelines • Automation
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href="#contact"
                    style={{ color: "#ffffff" }}
                    className="inline-flex items-center rounded-xl bg-[#2f2b25] text-[#fdfcf9] font-medium px-4 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:bg-[#4a4234] transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raajnarayan"
                    className="inline-flex items-center rounded-xl border border-[#d8d1c5] bg-[#fcfbf8] px-4 py-2 font-medium text-[#4d4435] shadow hover:bg-[#f5f0e6] hover:text-[#2f2b25] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="text-[12px] leading-relaxed text-[#7a6e5c]">
                  Houston, TX
                </div>
              </div>
            </div>

            {/* right side: headshot / profile card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative overflow-hidden rounded-3xl border border-[#e6dfd3] bg-[#fffcf7]/80 shadow-[0_30px_120px_rgba(0,0,0,0.12)] p-8 w-full max-w-xs text-center">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#e8d9ba]/40 blur-2xl opacity-60" />
                </div>

                <div className="relative">
                  <div className="mx-auto h-32 w-32 rounded-2xl overflow-hidden ring-2 ring-[#d8d1c5] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                    <img
                      src={raajPhoto}
                      alt="Raaj Narayan Rao Thipparthy headshot"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-5">
                    <div className="text-base font-semibold text-[#2f2b25] leading-tight tracking-tight">
                      RAAJ NARAYAN RAO THIPPARTHY
                    </div>
                    <div className="text-[13px] text-[#6a5f4e] leading-tight">
                      Houston, TX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SUMMARY SECTION ===== */}
        <section id="summary" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-semibold text-[#7a6e5c] tracking-wide uppercase">
              SUMMARY
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#d1c4ad] to-transparent" />
          </div>

          <div className="rounded-2xl border border-[#e6dfd3] bg-[#fffcf7]/80 shadow-[0_30px_120px_rgba(0,0,0,0.08)] p-6 text-[#4a4234] leading-relaxed text-[15px]">
            <p>
              Data Analyst with 3+ years of experience in SQL, Python, and Power BI, delivering analytics solutions and KPI
              frameworks that improved decision-making speed by 30%. Skilled in ETL pipelines, dashboarding, and automation
              to drive business outcomes.
            </p>
          </div>
        </section>

        {/* ===== SKILLS SECTION ===== */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-semibold text-[#7a6e5c] tracking-wide uppercase">
              SKILLS AND CERTIFICATIONS
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#d1c4ad] to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            <div className="rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow">
              <h3 className="font-semibold text-[#2f2b25] mb-3 text-[12px] uppercase tracking-wide">
                Core Competencies
              </h3>
              <p className="text-[14px] text-[#4a4234] leading-relaxed">
                Dashboard Development, Data Pipeline Automation, Project Management, KPI Design,
                Predictive Analytics, Statistical Planning, Revenue Analytics, Strategic Planning, Stakeholder Engagement, Data
                Analysis, AI Product Insights, Problem Solving, Communication Skills
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow">
              <h3 className="font-semibold text-[#2f2b25] mb-3 text-[12px] uppercase tracking-wide">
                Analytics &amp; Visualization
              </h3>
              <p className="text-[14px] text-[#4a4234] leading-relaxed">
                Python (pandas, numpy, etc.), Power BI (DAX, Power Query), Tableau, Excel (VBA
                Macros, Pivot Tables, VLOOKUP), PowerPoint, SQL (MySQL, PostgreSQL, SQL Server), Google Analytics, Looker
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow">
              <h3 className="font-semibold text-[#2f2b25] mb-3 text-[12px] uppercase tracking-wide">
                ETL &amp; Cloud
              </h3>
              <p className="text-[14px] text-[#4a4234] leading-relaxed">
                Azure Data Factory, SSIS, Github, AWS (S3, Lambda), Snowflake, GCP
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow">
              <h3 className="font-semibold text-[#2f2b25] mb-3 text-[12px] uppercase tracking-wide">
                Project Management, ERP &amp; Automation
              </h3>
              <p className="text-[14px] text-[#4a4234] leading-relaxed">
                JIRA, Scrum, Trello, Microsoft Office, Selenium (Python), Alteryx
                (Foundation Micro-Credential certification), SAP, Dynamics 365, Salesforce
              </p>
            </div>
          </div>
        </section>

        /* ===== EXPERIENCE SECTION ===== */
        <section id="experience" className="space-y-8 scroll-mt-24">
          {/* section header */}
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-semibold text-[#7a6e5c] tracking-wide uppercase">
              EXPERIENCE
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#d1c4ad] to-transparent" />
          </div>

          <div className="space-y-8">
            {/* LotusPetal AI */}
            <div
              id="exp-lotuspetal"
              className="hash-highlight relative overflow-hidden rounded-2xl border border-[#e6dfd3] bg-[#fffdf9]/80 shadow-[0_30px_120px_rgba(0,0,0,0.08)] p-6 scroll-mt-28"
            >
              {/* warm accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-300 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.6)] rounded-tr-lg rounded-br-lg" />

              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="text-[15px] font-semibold text-[#2f2b25] leading-tight tracking-tight">
                    AI Research Data Analyst, LotusPetal AI – Houston, TX
                  </div>
                  <div className="text-[12px] text-[#7a6e5c] mt-2 sm:mt-0 font-medium">
                    Jan 2025 – Present
                  </div>
                </div>

                <ul className="mt-4 text-[14px] text-[#4a4234] space-y-3 leading-relaxed list-disc pl-5">
                  <li>
                    Designed and delivered 10+ executive dashboards analyzing SaaS B2B AI platform performance metrics, enabling
                    data-driven marketing and sales strategies that improved decision-making speed by 30%
                  </li>
                  <li>
                    Engineered 80+ Python/Selenium automation scripts to extract and structure AI/ML dataset metadata,
                    generating analytical datasets that reduced manual data collection time by 90% and enhanced reporting accuracy
                  </li>
                  <li>
                    Developed an AI-powered scraping and data ingestion framework (Ollama/OpenAI) capable of adapting to new
                    data sources without code rewrites, increasing analytical scalability and dataset coverage by 70%
                  </li>
                  <li>
                    Defined and implemented Go-to-Market KPI frameworks with executive teams to monitor customer pipeline
                    health, usage patterns, and retention metrics — improving visibility and driving a 40% increase in conversion
                    insights
                  </li>
                  <li>
                    Authored 11+ QA test scripts that produced benchmark datasets used for model performance analysis, directly
                    improving product reliability and enabling consistent data validation
                  </li>
                  <li>
                    Mentored a 4-member analytics team on data visualization, report automation, and metric tracking —
                    strengthening analytical capabilities and accelerating business insight delivery
                  </li>
                  <li>
                    Represented the company at the AI4 Conference, demoing products and converting 47% of booth visitors into
                    pilot agreements
                  </li>
                  <li>
                    Led data module development for product version 2.0, scraping, cleaning, and analyzing 5M+ contract records
                    from open web sources using Python (Selenium, Pandas, Numpy, Matplotlib) and PostgreSQL to build structured
                    datasets and visualizations that uncovered market trends and boosted product insight capabilities by 25%.
                  </li>
                </ul>
              </div>
            </div>

            {/* Sakesh Solutions LLC */}
            <div
              id="exp-sakesh"
              className="hash-highlight relative overflow-hidden rounded-2xl border border-[#e6dfd3] bg-[#fffdf9]/80 shadow-[0_30px_120px_rgba(0,0,0,0.08)] p-6 scroll-mt-28"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-300 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.6)] rounded-tr-lg rounded-br-lg" />

              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="text-[15px] font-semibold text-[#2f2b25] leading-tight tracking-tight">
                    Data Analyst Intern, Sakesh Solutions LLC – Houston, TX
                  </div>
                  <div className="text-[12px] text-[#7a6e5c] mt-2 sm:mt-0 font-medium">
                    Sep 2024 – Dec 2024
                  </div>
                </div>

                <ul className="mt-4 text-[14px] text-[#4a4234] space-y-3 leading-relaxed list-disc pl-5">
                  <li>Perform data research for analysis</li>
                  <li>Analyze and Visualize data for product insights</li>
                  <li>Monitor and help maintain up-to-date data in the database</li>
                  <li>Work with the team in meetings and project discussions.</li>
                </ul>
              </div>
            </div>

            {/* Radiant Infosystems Pvt. Ltd. */}
            <div
              id="exp-radiant"
              className="hash-highlight relative overflow-hidden rounded-2xl border border-[#e6dfd3] bg-[#fffdf9]/80 shadow-[0_30px_120px_rgba(0,0,0,0.08)] p-6 scroll-mt-28"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-300 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.6)] rounded-tr-lg rounded-br-lg" />

              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="text-[15px] font-semibold text-[#2f2b25] leading-tight tracking-tight">
                    Data Analyst / Power BI Developer, Radiant Infosystems Pvt. Ltd. – Bengaluru, India
                  </div>
                  <div className="text-[12px] text-[#7a6e5c] mt-2 sm:mt-0 font-medium">
                    May 2020 – May 2022
                  </div>
                </div>

                <ul className="mt-4 text-[14px] text-[#4a4234] space-y-3 leading-relaxed list-disc pl-5">
                  <li>
                    Delivered 50+ BI dashboards for healthcare clients, improving KPI visibility and business insights by 40%.
                  </li>
                  <li>
                    Built ETL pipelines (SSIS, Azure Data Factory, Snowflake), ensuring data quality, governance, and metadata
                    alignment.
                  </li>
                  <li>
                    Optimized SQL queries and Spark-based workflows, reducing execution time by 40%.
                  </li>
                  <li>
                    Automated recurring reporting with Python &amp; Power BI, reducing workload by 25% and providing real-time
                  </li>
                  <li>
                    Partnered with cross-functional teams to define business-driven reporting requirements, improving alignment
                    with strategies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ===== EDUCATION SECTION ===== */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-semibold text-[#7a6e5c] tracking-wide uppercase">
              EDUCATION
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#d1c4ad] to-transparent" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow">
              <p className="text-[15px] font-semibold text-[#2f2b25] leading-snug tracking-tight">
                Master of Science in Management Information Systems – University of Houston, Houston, TX (GPA: 3.85) •
                Graduated May 2024
              </p>
            </div>

            <div className="rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow">
              <p className="text-[15px] font-semibold text-[#2f2b25] leading-snug tracking-tight">
                Bachelors in Electronics and Communications Engineering – BML Munjal University, Gurgaon, India (GPA:
                7.33) • Graduated May 2022
              </p>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-semibold text-[#7a6e5c] tracking-wide uppercase">
              ACADEMIC PROJECTS
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#d1c4ad] to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* GTM Project */}
            <div
              id="proj-gtm"
              className="hash-highlight rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow scroll-mt-28"
            >
              <h4 className="text-[14px] font-semibold text-[#2f2b25] leading-snug tracking-tight">
                GTM Project
              </h4>
              <p className="mt-2 text-[13px] text-[#4a4234] leading-relaxed">
                I built a data-backed go-to-market strategy for an AI RFP automation product by extracting and structuring market data from multiple sources (custom scraping + ingestion), then engineering a set of comparative parameters to score segments and opportunities. Using those signals, I prioritized four segments (government/public sector, enterprise, SMB, consulting), defined validation criteria and positioning per segment, and designed the channels and pricing model (PLG/free trial + enterprise outbound + content/SEO; tiered/usage-based) with KPIs and feedback loops to move from pilot → beachhead → scale.
              </p>
            </div>

            {/* Agency–Contractor Relationship */}
            <div
              id="proj-agency"
              className="hash-highlight rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow scroll-mt-28"
            >
              <h4 className="text-[14px] font-semibold text-[#2f2b25] leading-snug tracking-tight">
                Agency–Contractor Relationship Strength &amp; Insights
              </h4>
              <p className="mt-2 text-[13px] text-[#4a4234] leading-relaxed">
                Developed an end-to-end analytics pipeline in PostgreSQL and Python (Pandas, NumPy, Selenium, Matplotlib) to ingest multi-source contract data, normalize it, and quantify agency–contractor relationship strength. Engineered signals (recent spend, interaction volume, tenure, recency) into a composite score, then built visuals and scorecards that segment vendors into tiers and surface re-engagement and greenfield opportunities. The deliverable gives BD teams market size/share and account-health insights to prioritize outreach and measure impact over time.
              </p>
            </div>

            {/* Customer Churn Model */}
            <div
              id="proj-churn"
              className="hash-highlight rounded-2xl border border-[#e6dfd3] bg-[#ffffff]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_140px_rgba(0,0,0,0.12)] transition-shadow scroll-mt-28"
            >
              <h4 className="text-[14px] font-semibold text-[#2f2b25] leading-snug tracking-tight">
                Customer Churn Model
              </h4>
              <p className="mt-2 text-[13px] text-[#4a4234] leading-relaxed">
                Built a supervised learning pipeline as a student data analyst to predict churn: performed data cleaning and feature engineering (tenure, usage frequency, recency, support tickets), trained baseline logistic regression and tree-based models in Python (pandas, NumPy, scikit-learn), evaluated with ROC-AUC/precision-recall, and created cohort/driver visuals in Power BI. Used SQL for feature aggregation and delivered retention recommendations based on top drivers.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-semibold text-[#7a6e5c] tracking-wide uppercase">
              CONTACT
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#d1c4ad] to-transparent" />
          </div>

          <div className="rounded-2xl border border-[#e6dfd3] bg-[#fffcf7]/80 shadow-[0_30px_120px_rgba(0,0,0,0.08)] p-6 max-w-xl">
            <div className="text-[14px] text-[#4a4234] space-y-3 leading-relaxed">
              <p>
                <span className="font-semibold text-[#2f2b25]">Phone: </span>
                832-519-7135
              </p>
              <p>
                <span className="font-semibold text-[#2f2b25]">Email: </span>
                <a
                  className="text-[#6a5f4e] !underline underline-offset-[3px] decoration-2 decoration-[#6a5f4e] hover:text-[#2f2b25] hover:decoration-[#2f2b25] transition-colors"
                  href="mailto:raajnarayan.vgf287@gmail.com"
                >
                  raajnarayan.vgf287@gmail.com
                </a>
              </p>
              <p className="break-all">
                <span className="font-semibold text-[#2f2b25]">LinkedIn: </span>
                <a
                  className="text-[#6a5f4e] visited:text-[#6a5f4e] !underline underline-offset-[3px] decoration-2 decoration-[#6a5f4e] hover:text-[#2f2b25] hover:decoration-[#2f2b25] transition-colors"
                  href="https://www.linkedin.com/in/raajnarayan"
                >
                  www.linkedin.com/in/raajnarayan
                </a>
              </p>

              <div className="pt-4">
                <a
                  href="mailto:raajnarayan.vgf287@gmail.com"
                  style={{ color: "#ffffff" }}
                  className="inline-flex items-center rounded-lg bg-[#2f2b25] text-[#fdfcf9] px-4 py-2 text-[13px] font-medium shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:bg-[#4a4234] transition-colors"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="text-center text-[11px] text-[#7a6e5c] pt-10 pb-20">
          © {new Date().getFullYear()} RAAJ NARAYAN RAO THIPPARTHY. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;