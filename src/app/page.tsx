import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-surface">
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-primary text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 md:py-20">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              EdTech for data-driven careers
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Crafting tomorrow&apos;s success for
              <span className="text-sky-300"> students</span> and
              <span className="text-sky-300"> working professionals</span>.
            </h1>
            <p className="text-balance text-sm leading-relaxed text-slate-200 sm:text-base">
              DatanerdzAI helps you build real-world skills in Data Science, Analytics,
              Programming, Finance, and Product—through industry-designed courses,
              live projects, and personalised mentorship.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/courses"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                Explore courses
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-500/60 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-white/80 hover:bg-white/5"
              >
                Book a counselling call
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-300">
              <div>
                <p className="font-semibold text-white">3K+ learners</p>
                <p>Students, graduates & working pros upskilled</p>
              </div>
              <div>
                <p className="font-semibold text-white">Industry projects</p>
                <p>Hands-on case studies & capstones</p>
              </div>
              <div>
                <p className="font-semibold text-white">Job-focused</p>
                <p>Interview prep & placement support</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md rounded-2xl bg-white/5 p-5 text-sm backdrop-blur md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              Start free career assessment
            </p>
            <p className="mt-2 text-sm text-slate-100">
              Share your current background and goals. We&apos;ll recommend the
              right DatanerdzAI path for you.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-2">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-500/20 text-center text-xs font-semibold leading-6 text-sky-200">
                  1
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Choose your goal
                  </p>
                  <p className="text-xs text-slate-200">
                    Data analyst, data scientist, software engineer, product or
                    finance.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-500/20 text-center text-xs font-semibold leading-6 text-sky-200">
                  2
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Assess your readiness
                  </p>
                  <p className="text-xs text-slate-200">
                    Understand gaps in your skills, portfolio and resume.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-6 w-6 rounded-full bg-sky-500/20 text-center text-xs font-semibold leading-6 text-sky-200">
                  3
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Get a learning roadmap
                  </p>
                  <p className="text-xs text-slate-200">
                    Receive a personalised plan with courses, projects and
                    timelines.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Start with a free call
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Learn with a structured path, practice with real data, get ready
              for real careers.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Every learner is different. We combine concept clarity, hands-on
              projects and placement-focused support so that you move from
              &quot;watching tutorials&quot; to actually solving problems that hiring
              managers care about.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-4 rounded-full bg-primary" />
                <span>
                  <strong>Live & recorded classes</strong> designed for busy
                  college schedules and working professionals.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-4 rounded-full bg-primary" />
                <span>
                  <strong>Capstone projects</strong> using real-world datasets
                  and case studies across domains.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-4 rounded-full bg-primary" />
                <span>
                  <strong>Career support</strong> including resume reviews,
                  mock interviews and LinkedIn optimisation.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-700 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Popular learning paths
            </p>
            <ul className="mt-3 space-y-3">
              <li className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-900">
                  TechSkill Foundation Kit
                </p>
                <p>Programming, problem-solving & computer science basics.</p>
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-900">
                  Data Analytics & Visualisation
                </p>
                <p>Excel / SQL / Power BI / Tableau with business case studies.</p>
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-900">
                  Data Science & Machine Learning
                </p>
                <p>Python, ML, projects and MLOps fundamentals.</p>
              </li>
              <li className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-900">
                  Studentpreneurship & Product Thinking
                </p>
                <p>From idea to MVP, with GTM, marketing and finance basics.</p>
              </li>
            </ul>
            <Link
              href="/courses"
              className="mt-4 inline-flex text-xs font-semibold text-primary hover:text-primary-dark"
            >
              View detailed curriculum →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-slate-900">
                Trusted by learners from multiple colleges & companies
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                You&apos;ll soon see logos of our partner institutions and
                corporate clients here.
              </p>
            </div>
            <Link
              href="/clients"
              className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
            >
              Explore our client stories
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Ready to take the next step?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Whether you&apos;re in college, a fresher, or already working,
              DatanerdzAI can help you move to the next level. Share your
              aspirations and we&apos;ll help you shortlist the right course and
              projects.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✓ Guidance on which course or track to start with</li>
              <li>✓ Roadmap for 3–6 months based on your schedule</li>
              <li>✓ Clarity on fees, batches, offers and EMI options</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Talk to our team
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Fill in your details on the contact page and our counsellor will
              get in touch within 24 hours.
            </p>
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[11px] font-medium text-slate-700">
                    Ideal for
                  </p>
                  <p className="text-[11px] text-slate-500">
                    B.Tech, B.Com, BBA, MCA, freshers & early-career
                    professionals.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-700">
                    Modes
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Weekend, weekday evening and fast-track batches.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              Go to Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
