import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-surface">
      {/* HOME: Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-primary text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 md:py-20">
          <div className="max-w-xl space-y-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Learn. Build. Grow.{" "}
              <span className="text-sky-300">Together</span> with Datanerdz AI
            </h1>
            <p className="text-balance text-base leading-relaxed text-slate-200 sm:text-lg">
              A student-first learning community helping college students and freshers 
              master tech skills, get mentorship, and build successful careers.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/join-student"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600"
              >
                Join as Student
              </Link>
              <Link
                href="/join-mentor"
                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Become a Mentor
              </Link>
              <Link
                href="/courses"
                className="text-sm font-medium text-sky-300 underline underline-offset-4 transition hover:text-sky-200"
              >
                View Courses →
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-slate-700 pt-6 text-sm text-slate-300">
              <div>
                <p className="text-2xl font-bold text-white">7000+</p>
                <p>Students Enrolled</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p>Expert Mentors</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p>Courses & Workshops</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md">
            <div className="rounded-2xl bg-white/10 p-1 backdrop-blur">
              <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <p className="text-lg font-semibold">Your learning journey starts here</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Join a thriving community of 7000+ students and 50+ mentors learning together, building together, and growing together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME: What We Do */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Datanerdz AI is your complete learning ecosystem—from courses to community
            to career support
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📚",
              title: "Skill-Based Courses",
              description:
                "Learn Data Science, Web Dev, App Dev, AI/ML through structured, hands-on courses",
            },
            {
              icon: "👥",
              title: "1:1 & Group Mentorship",
              description:
                "Get personalized guidance from industry experts and working professionals",
            },
            {
              icon: "🎯",
              title: "Community & Events",
              description:
                "Join webinars, workshops, hackathons and connect with peers across India",
            },
            {
              icon: "💼",
              title: "Career Support",
              description:
                "Resume building, interview prep, project guidance to land your dream job",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOME: Why Datanerdz AI? */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why Datanerdz AI?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              We understand the challenges Indian students face—and we've built solutions
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🌱",
                title: "Beginner-Friendly",
                description:
                  "Start from zero. Our courses assume no prior experience and build step-by-step",
              },
              {
                icon: "⚡",
                title: "Real-Time Mentor Support",
                description:
                  "Stuck? Get instant doubt-clearing from mentors on WhatsApp/Slack",
              },
              {
                icon: "🤝",
                title: "Community-Driven",
                description:
                  "Learn with peers, share projects, collaborate on assignments",
              },
              {
                icon: "🛠️",
                title: "Practical Projects",
                description:
                  "Build real dashboards, apps, ML models—portfolio-ready work",
              },
              {
                icon: "📝",
                title: "Resume & Interview Prep",
                description:
                  "Get your resume reviewed, practice mock interviews, improve communication",
              },
              {
                icon: "💰",
                title: "Affordable & Flexible",
                description:
                  "Student-friendly pricing, EMI options, weekend/evening batches",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME: Featured Courses Preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Featured Courses
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Start your learning journey with our most popular courses
            </p>
          </div>
          <Link
            href="/courses"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Analytics Bootcamp",
              description: "Master Excel, SQL, Power BI, Tableau with real business cases",
              level: "Beginner",
              duration: "8 weeks",
              format: "Live + Recorded",
            },
            {
              title: "Full Stack Web Development",
              description: "Build modern web apps with React, Node.js, MongoDB",
              level: "Intermediate",
              duration: "12 weeks",
              format: "Live + Recorded",
            },
            {
              title: "Python for Data Science & AI",
              description: "Learn Python, Data Analysis, Machine Learning fundamentals",
              level: "Beginner",
              duration: "10 weeks",
              format: "Live + Recorded",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 inline-flex items-center gap-2 text-xs">
                <span className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-700">
                  {course.level}
                </span>
                <span className="text-slate-500">• {course.duration}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {course.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{course.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-medium text-slate-500">
                  {course.format}
                </span>
                <Link
                  href="/courses"
                  className="text-xs font-semibold text-primary hover:text-primary-dark"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOME: Upcoming Events Preview */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Join our free webinars, workshops and community sessions
              </p>
            </div>
            <Link
              href="/events"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Career in Data Science - Roadmap for Students",
                date: "Dec 5, 2025",
                time: "7:00 PM IST",
                type: "Webinar",
                mode: "Online",
              },
              {
                title: "Build Your First ML Model Workshop",
                date: "Dec 10, 2025",
                time: "6:00 PM IST",
                type: "Workshop",
                mode: "Online",
              },
              {
                title: "Resume Building & LinkedIn Optimization",
                date: "Dec 15, 2025",
                time: "8:00 PM IST",
                type: "Workshop",
                mode: "Online",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-700">
                    {event.type}
                  </span>
                  <span className="text-slate-500">• {event.mode}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{event.title}</h3>
                <div className="mt-3 space-y-1 text-xs text-slate-600">
                  <p>📅 {event.date}</p>
                  <p>🕐 {event.time}</p>
                </div>
                <button className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-dark">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME: Community & Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            What Our Community Says
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Real stories from students and mentors across India
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Priya Sharma",
              role: "B.Tech CSE, VIT Chennai",
              content:
                "Datanerdz AI helped me transition from a confused fresher to landing a Data Analyst role. The mentors were super supportive and the projects were exactly what I needed for my resume!",
              rating: 5,
            },
            {
              name: "Arjun Reddy",
              role: "Career Switcher, Ex-Mechanical Engineer",
              content:
                "I was scared of coding. The community here made learning so easy and fun. Now I'm confident building full-stack apps. Best decision I made!",
              rating: 5,
            },
            {
              name: "Divya Krishnan",
              role: "BCA Final Year, Kerala",
              content:
                "The 1:1 mentorship was a game-changer. My mentor helped me with interview prep, resume and even connected me with opportunities. Forever grateful!",
              rating: 5,
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                "{testimonial.content}"
              </p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOME: Final CTA Banner */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-primary to-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to start your Datanerdz AI journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200">
            Join hundreds of students who are building skills, portfolios, and careers
            with us
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/join-student"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Join as Student
            </Link>
            <Link
              href="/join-mentor"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
