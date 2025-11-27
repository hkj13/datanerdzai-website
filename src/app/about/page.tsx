import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Datanerdz AI",
  description:
    "Learn about Datanerdz AI - a student-first learning community helping college students master tech skills through mentorship, courses, and community support.",
};

export default function AboutPage() {
  return (
    <div className="bg-surface">
      {/* ABOUT: Hero Section */}
      <section className="border-b border-slate-200 bg-slate-900 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            About Datanerdz AI
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
            A student-first learning community bridging the gap between college education
            and real-world tech careers
          </p>
        </div>
      </section>

      {/* ABOUT: Our Story */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Our Story
          </h2>
          <div className="mx-auto mt-6 space-y-4 text-left text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              Datanerdz AI was born from a simple observation: <strong>thousands of talented 
              students graduate every year, but many feel lost</strong> when it comes to building 
              a tech career.
            </p>
            <p>
              They face confusion about which skills to learn, lack of hands-on practice, 
              no mentorship, fear of coding, and pressure to "figure it all out" alone. 
              Traditional education often doesn't prepare them for the real demands of the 
              industry.
            </p>
            <p>
              We started Datanerdz AI to solve exactly this. <strong>We believe every student 
              deserves clarity, guidance, and a supportive community</strong> as they navigate 
              their tech journey. Whether you're in your first year or a final-year student 
              looking to switch careers, we're here to help you build skills that matter.
            </p>
            <p>
              Today, we're a growing community of <strong>7000+ students and 50+ mentors</strong>{" "}
              across India, learning together, building together, and growing together.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT: Mission & Vision */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                To empower every Indian college student with the skills, mentorship, and 
                community support they need to build successful tech careers—regardless of 
                their background, branch, or starting point.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                To become India's most trusted student learning community, where every 
                learner has access to world-class education, personalized mentorship, and 
                a network that accelerates their career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT: How We Work */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            How We Work
          </h2>
          <p className="mx-auto mt-3 text-sm text-slate-600 md:text-base">
            Your journey from confusion to clarity to career success
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {[
            {
              step: "1",
              title: "Discover",
              description:
                "Understand your goals, assess your current skill level, and get clarity on which path suits you best—Data, Web, App, AI/ML, or Career Skills.",
              icon: "🔍",
            },
            {
              step: "2",
              title: "Learn",
              description:
                "Join structured courses designed for beginners. Learn through live sessions, recorded content, assignments, and real-world examples.",
              icon: "📚",
            },
            {
              step: "3",
              title: "Build",
              description:
                "Work on hands-on projects, capstones, and case studies. Build a portfolio that showcases your skills to potential employers.",
              icon: "🛠️",
            },
            {
              step: "4",
              title: "Get Mentored",
              description:
                "Connect with experienced mentors for 1:1 doubt-clearing, career guidance, resume reviews, and mock interviews.",
              icon: "👨‍🏫",
            },
            {
              step: "5",
              title: "Grow Career",
              description:
                "Apply to opportunities, get referrals through our network, ace interviews, and land your dream job or internship.",
              icon: "💼",
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className="flex gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {phase.step}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                  <span className="text-2xl">{phase.icon}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT: Our Values */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Our Values
            </h2>
            <p className="mx-auto mt-3 text-sm text-slate-600 md:text-base">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🤝",
                title: "Community",
                description: "We believe in learning together, not alone",
              },
              {
                icon: "💡",
                title: "Clarity",
                description: "We remove confusion and provide clear, actionable paths",
              },
              {
                icon: "🔄",
                title: "Consistency",
                description: "We show up for our students, every single day",
              },
              {
                icon: "📈",
                title: "Growth",
                description: "We're obsessed with helping you grow, personally and professionally",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-4xl">{value.icon}</div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT: CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-primary to-slate-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Want to be part of our story?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Whether you want to learn or mentor, there's a place for you in the Datanerdz AI community
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/join-student"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Join as Student
            </Link>
            <Link
              href="/join-mentor"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}