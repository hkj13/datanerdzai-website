import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join as Mentor | Datanerdz AI",
  description:
    "Become a mentor at Datanerdz AI and help students build successful tech careers. Share your expertise, build your personal brand, and make an impact.",
};

export default function JoinMentorPage() {
  return (
    <div className="bg-surface">
      {/* JOIN MENTOR: Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-primary to-slate-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Become a Datanerdz AI Mentor
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
            Share your expertise, shape careers, and make a lasting impact on the next
            generation of tech professionals
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#application-form"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Apply Now
            </a>
            <a
              href="#why-mentor"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* JOIN MENTOR: Why Mentor */}
      <section id="why-mentor" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Why Mentor with Datanerdz AI?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Benefits of joining our mentoring community
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "💫",
              title: "Impact Students' Careers",
              description:
                "Help students navigate their tech journey, build skills, and land their dream jobs. Your guidance can change lives.",
            },
            {
              icon: "🚀",
              title: "Build Personal Brand",
              description:
                "Establish yourself as a thought leader. Get featured on our platform, social media, and community events.",
            },
            {
              icon: "🤝",
              title: "Networking Opportunities",
              description:
                "Connect with fellow mentors, industry professionals, and passionate learners from across India.",
            },
            {
              icon: "⏰",
              title: "Flexible Contribution",
              description:
                "Mentor on weekends or evenings. Dedicate as much or as little time as you want. No fixed commitments.",
            },
            {
              icon: "📚",
              title: "Keep Learning",
              description:
                "Teaching is the best way to learn. Stay updated, sharpen your own skills, and explore new perspectives.",
            },
            {
              icon: "🎓",
              title: "Recognition & Rewards",
              description:
                "Get certificates, LinkedIn recommendations, and exclusive invitations to partner events and webinars.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-4xl">{benefit.icon}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN MENTOR: Who Can Apply */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Who Can Apply?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              We're looking for passionate professionals with real-world experience
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Working Professionals",
                description:
                  "Data Scientists, Software Engineers, Product Managers, Designers with 2+ years of industry experience",
                icon: "💼",
              },
              {
                title: "Startup Founders",
                description:
                  "Entrepreneurs who've built products, raised funding, or scaled teams and want to share their journey",
                icon: "🚀",
              },
              {
                title: "Freelancers & Consultants",
                description:
                  "Independent professionals with client experience in Data, Web, App, or Business domains",
                icon: "🎯",
              },
              {
                title: "Industry Experts",
                description:
                  "Specialists in AI/ML, Analytics, DevOps, Cloud, Marketing, Finance willing to guide students",
                icon: "⭐",
              },
            ].map((profile) => (
              <div
                key={profile.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-3xl">{profile.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {profile.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{profile.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              Key requirement: You should be willing to help students with doubts,
              review projects, share career advice, or conduct sessions.
            </p>
          </div>
        </div>
      </section>

      {/* JOIN MENTOR: Process */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Simple 3-step process to start mentoring
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {[
            {
              step: "1",
              title: "Apply",
              description:
                "Fill out the application form below. Share your background, expertise, and why you want to mentor.",
              icon: "📝",
            },
            {
              step: "2",
              title: "Short Discussion",
              description:
                "Our team will reach out for a quick call to understand your availability, interests, and how you'd like to contribute.",
              icon: "💬",
            },
            {
              step: "3",
              title: "Start Mentoring",
              description:
                "Get onboarded, join our mentor community, and start helping students. We'll match you with learners based on your expertise.",
              icon: "🎓",
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className="flex gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
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

      {/* JOIN MENTOR: Application Form */}
      <section
        id="application-form"
        className="border-t border-slate-200 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Mentor Application Form
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Fill in your details and we'll get back to you within 48 hours
            </p>
          </div>

          <form className="mt-10 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="John Doe"
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
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Current Role & Company */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-900">
                Current Role & Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Senior Data Scientist at XYZ Corp"
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-slate-900"
              >
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <select
                id="experience"
                name="experience"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select experience</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            {/* Areas of Expertise */}
            <div>
              <label className="block text-sm font-medium text-slate-900">
                Areas of Expertise <span className="text-red-500">*</span>
              </label>
              <p className="mt-1 text-xs text-slate-500">Select all that apply</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "Data Analytics",
                  "Data Science",
                  "Machine Learning",
                  "Web Development",
                  "Mobile App Development",
                  "AI & Deep Learning",
                  "Cloud & DevOps",
                  "Product Management",
                  "UI/UX Design",
                  "Marketing & Growth",
                  "Career Guidance",
                  "Entrepreneurship",
                ].map((expertise) => (
                  <label
                    key={expertise}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <input
                      type="checkbox"
                      name="expertise"
                      value={expertise}
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    {expertise}
                  </label>
                ))}
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-slate-900">
                LinkedIn Profile URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            {/* Why Mentor */}
            <div>
              <label htmlFor="why" className="block text-sm font-medium text-slate-900">
                Why do you want to mentor with Datanerdz AI?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="why"
                name="why"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Share your motivation, what you hope to contribute, and how you can help students..."
              />
            </div>

            {/* Preferred Time Slots */}
            <div>
              <label className="block text-sm font-medium text-slate-900">
                Preferred Time Slots for Mentoring{" "}
                <span className="text-red-500">*</span>
              </label>
              <p className="mt-1 text-xs text-slate-500">
                Select when you're typically available
              </p>
              <div className="mt-3 space-y-2">
                {[
                  "Weekday Mornings (6 AM - 12 PM)",
                  "Weekday Afternoons (12 PM - 6 PM)",
                  "Weekday Evenings (6 PM - 10 PM)",
                  "Weekend Mornings (6 AM - 12 PM)",
                  "Weekend Afternoons (12 PM - 6 PM)",
                  "Weekend Evenings (6 PM - 10 PM)",
                ].map((slot) => (
                  <label
                    key={slot}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <input
                      type="checkbox"
                      name="timeslots"
                      value={slot}
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    {slot}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
              >
                Submit Application
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                By submitting, you agree to our terms and conditions. We'll contact you
                within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
