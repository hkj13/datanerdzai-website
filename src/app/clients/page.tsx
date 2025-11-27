import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners | Datanerdz AI",
  description:
    "Datanerdz AI partners with colleges, universities, and companies to deliver training, workshops, and upskilling programs for students and professionals.",
};

export default function ClientsPage() {
  return (
    <div className="bg-surface">
      {/* CLIENTS: Hero Section */}
      <section className="border-b border-slate-200 bg-slate-900 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Clients & Partners
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Datanerdz AI works with colleges, universities, and companies to deliver
            impactful training programs, workshops, and upskilling initiatives
          </p>
        </div>
      </section>

      {/* CLIENTS: Client Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Who We Work With
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Partnering with organizations to empower learners and professionals
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "🎓",
              title: "Colleges & Universities",
              description:
                "Department-level training programs, placement readiness bootcamps, final-year projects, and guest lectures for students.",
              examples: "Engineering, Commerce, Management colleges across India",
            },
            {
              icon: "🏢",
              title: "Corporates & Startups",
              description:
                "Customized upskilling programs for employees in Data, AI/ML, Web Development, and Product Management.",
              examples: "Tech companies, consulting firms, product startups",
            },
            {
              icon: "🤝",
              title: "Training & Community Partners",
              description:
                "Co-branded bootcamps, hackathons, workshops, and community events focused on emerging technologies.",
              examples: "Incubators, EdTech platforms, developer communities",
            },
          ].map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-4xl">{category.icon}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {category.description}
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                {category.examples}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS: Placeholder Logos Section */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Our Partners
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Trusted by educational institutions and companies
            </p>
          </div>

          <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-4"
              >
                <span className="text-xs font-medium text-slate-400">Logo {i + 1}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Coming Soon
            </p>
            <p className="mt-2 text-sm text-slate-600">
              We're adding detailed case studies, client logos, and success stories.
              Check back soon or contact us to learn more about our partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS: Sample Case Studies */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Impact Stories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Examples of our work with partners (placeholder content)
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Data Analytics Workshop for College Students",
              partner: "Engineering College, Tamil Nadu",
              description:
                "Conducted a 3-day intensive workshop on Data Analytics for 120+ final-year students. Covered Excel, SQL, and Power BI with hands-on projects.",
              outcome: "85% of students built their first dashboard",
            },
            {
              title: "Corporate Upskilling Program",
              partner: "Tech Startup, Bangalore",
              description:
                "Designed and delivered a 6-week Machine Learning program for the engineering team to transition into AI-driven product development.",
              outcome: "Team launched 2 ML-powered features",
            },
            {
              title: "Placement Readiness Bootcamp",
              partner: "University, Chennai",
              description:
                "Organized a bootcamp covering resume building, interview prep, and technical mock interviews for 200+ students preparing for placements.",
              outcome: "60% improvement in placement rate",
            },
          ].map((caseStudy) => (
            <div
              key={caseStudy.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {caseStudy.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-primary">
                {caseStudy.partner}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {caseStudy.description}
              </p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-xs font-medium text-slate-900">Outcome:</p>
                <p className="mt-1 text-xs text-slate-600">{caseStudy.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS: Collaboration Form */}
      <section className="border-t border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Want to Collaborate with Datanerdz AI?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Fill in the form below and our team will get in touch within 48 hours
            </p>
          </div>

          <form className="mt-10 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Full name"
              />
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-slate-900"
              >
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="College / Company / Partner name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="you@organization.com"
              />
            </div>

            {/* Requirement Type */}
            <div>
              <label
                htmlFor="requirement"
                className="block text-sm font-medium text-slate-900"
              >
                Requirement Type <span className="text-red-500">*</span>
              </label>
              <select
                id="requirement"
                name="requirement"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select type</option>
                <option value="training">Training / Workshop for Students</option>
                <option value="corporate">Corporate Upskilling Program</option>
                <option value="projects">Industry Projects / Internships</option>
                <option value="hiring">Hiring / Placement Support</option>
                <option value="partnership">General Partnership Enquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Share details about your requirement, number of participants, timeline, budget, etc."
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                Submit Enquiry
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                We'll review your request and get back to you within 48 hours
              </p>
            </div>
          </form>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 text-center">
            <p className="text-sm font-semibold text-slate-900">Prefer to talk directly?</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="mailto:contact@datanerdzai.com"
                className="font-medium text-primary hover:underline"
              >
                contact@datanerdzai.com
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="tel:+919500795194"
                className="font-medium text-primary hover:underline"
              >
                +91 9500795194
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
