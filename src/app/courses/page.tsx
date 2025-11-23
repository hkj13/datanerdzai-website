import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses Offered | DatanerdzAI",
  description:
    "Explore DatanerdzAI courses in TechSkill foundations, Data Analytics, Data Science, Finance, Development, Marketing and Studentpreneurship.",
};

export default function CoursesPage() {
  return (
    <div className="bg-surface">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-900 py-10 text-white md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Courses Offered
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Structured, industry-ready programs for every stage of your career.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Whether you are starting from basics or upskilling for your next role,
            DatanerdzAI courses combine strong fundamentals, hands-on projects and
            interview-focused preparation.
          </p>
        </div>
      </section>

      {/* Categories overview */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "TechSkill Foundation Kit",
              level: "Beginner",
              description:
                "Programming logic, problem-solving, OOPs, data structures and core CS concepts.",
            },
            {
              title: "Data Analytics & Visualisation",
              level: "Beginner to Intermediate",
              description:
                "Excel, SQL, Power BI / Tableau with business dashboards and case studies.",
            },
            {
              title: "Data Science & Machine Learning",
              level: "Intermediate to Advanced",
              description:
                "Python, statistics, ML algorithms, model deployment basics and end-to-end projects.",
            },
            {
              title: "Development (Java / Web / Python)",
              level: "Beginner to Intermediate",
              description:
                "Core Java, web development, APIs and projects aligned to software engineering roles.",
            },
            {
              title: "Finance & Business Analytics",
              level: "Beginner to Intermediate",
              description:
                "Financial modelling, Excel, dashboards and analytics for business decision-making.",
            },
            {
              title: "Marketing & Growth",
              level: "Beginner to Intermediate",
              description:
                "Digital marketing, performance campaigns, social media and analytics.",
            },
          ].map((course) => (
            <article
              key={course.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {course.level}
                </p>
                <h2 className="mt-2 text-sm font-semibold text-slate-900">
                  {course.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {course.description}
                </p>
              </div>
              <div className="mt-3 text-[11px] text-slate-500">
                <p>Includes live sessions, recordings, assignments and projects.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Highlights from existing site themes */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-700 md:px-6 md:py-14">
          <h2 className="text-base font-semibold tracking-tight text-slate-900 md:text-lg">
            What makes DatanerdzAI courses different?
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Thousands of premium lessons
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Concept videos, live problem-solving and doubt-clearing sessions
                inspired by top-rated global courses.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Projects, workshops & studentpreneurship
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Build industry-style projects, participate in themed workshops
                and learn how to turn ideas into real products.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Career & placement support
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Resume and LinkedIn reviews, mock interviews and referrals
                through our hiring network wherever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm md:grid-cols-[1.2fr,1fr] md:p-7">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-900 md:text-lg">
              Not sure which course to choose?
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Share your background—branch, year of study or current role—and
              our team will help you choose between TechSkill foundations, data,
              development, finance or marketing tracks.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-700">
              <li>• Tailored path based on your goals (placements, switch, higher studies)</li>
              <li>• Details on duration, fees, EMIs and available batches</li>
              <li>• Guidance on required pre-requisites and time commitment</li>
            </ul>
          </div>
          <div className="space-y-3 text-xs text-slate-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              How to get started
            </p>
            <ol className="space-y-2 list-decimal pl-4">
              <li>Visit the Contact Us page.</li>
              <li>Share your course interest and preferred batch timing.</li>
              <li>Our counsellor will call/WhatsApp you with next steps.</li>
            </ol>
            <p className="mt-1 text-[11px] text-slate-500">
              We currently support online/live formats with limited in-person
              workshops based on city and demand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
