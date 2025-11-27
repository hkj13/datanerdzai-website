import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join as Student | Datanerdz AI",
  description:
    "Join Datanerdz AI as a student. Learn tech skills, get mentored, build projects, and kickstart your career with India's fastest-growing learning community.",
};

export default function JoinStudentPage() {
  return (
    <div className="bg-surface">
      {/* JOIN STUDENT: Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-primary to-slate-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Start Your Tech Journey Today
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
            Join Datanerdz AI and become part of a community that learns together, builds
            together, and grows together
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#signup-form"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Join Now - It's Free
            </a>
            <a
              href="#who-is-this-for"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* JOIN STUDENT: Who Is This For */}
      <section id="who-is-this-for" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Who Is This For?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Datanerdz AI is perfect for anyone looking to build a career in tech
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🎓",
              title: "College Students",
              description:
                "Engineering, B.Sc, B.Com, BBA, BCA students who want to learn in-demand tech skills alongside their degree",
            },
            {
              icon: "🚀",
              title: "Final Year & Recent Graduates",
              description:
                "Freshers preparing for placements or looking to upskill before entering the job market",
            },
            {
              icon: "🔄",
              title: "Career Switchers",
              description:
                "Working professionals from non-tech backgrounds looking to transition into Data, Development, or Product roles",
            },
          ].map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-4xl">{audience.icon}</div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN STUDENT: What You Get */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What You Get
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Everything you need to go from beginner to job-ready
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📚",
                title: "Live & Recorded Classes",
                description:
                  "Join live sessions with industry experts or watch recordings at your own pace. Lifetime access to all course materials.",
              },
              {
                icon: "👨‍🏫",
                title: "1:1 Mentor Support",
                description:
                  "Get personalized guidance from experienced mentors. Doubt-clearing, career advice, and project reviews.",
              },
              {
                icon: "🛠️",
                title: "Hands-On Projects",
                description:
                  "Build real-world projects, capstones, and case studies. Create a portfolio that impresses recruiters.",
              },
              {
                icon: "📝",
                title: "Resume & Interview Prep",
                description:
                  "Get your resume reviewed, practice mock interviews, improve LinkedIn, and learn negotiation skills.",
              },
              {
                icon: "🤝",
                title: "Community & Networking",
                description:
                  "Join our WhatsApp/Slack community. Connect with peers, collaborate on projects, attend events.",
              },
              {
                icon: "🎯",
                title: "Job Referrals & Opportunities",
                description:
                  "Access exclusive job postings, internship opportunities, and referrals through our hiring network.",
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
        </div>
      </section>

      {/* JOIN STUDENT: Sign-Up Form */}
      <section
        id="signup-form"
        className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Student Sign-Up Form
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Fill in your details and our team will get back to you within 24 hours
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
              placeholder="Your full name"
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
              placeholder="you@example.com"
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

          {/* College/Company */}
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-slate-900"
            >
              College / Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your college or company name"
            />
          </div>

          {/* Current Year / Experience Level */}
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-slate-900">
              Current Year / Experience Level <span className="text-red-500">*</span>
            </label>
            <select
              id="level"
              name="level"
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select your level</option>
              <option value="1st-year">1st Year College</option>
              <option value="2nd-year">2nd Year College</option>
              <option value="3rd-year">3rd Year College</option>
              <option value="4th-year">4th Year / Final Year</option>
              <option value="recent-grad">Recent Graduate (0-1 year exp)</option>
              <option value="professional">Working Professional (1+ years)</option>
            </select>
          </div>

          {/* Interested Areas */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Interested Areas <span className="text-red-500">*</span>
            </label>
            <p className="mt-1 text-xs text-slate-500">Select all that apply</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Data Analytics",
                "Data Science",
                "Machine Learning & AI",
                "Web Development",
                "Mobile App Development",
                "Career & Interview Prep",
                "Resume Building",
                "Not sure yet",
              ].map((area) => (
                <label
                  key={area}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={area}
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  {area}
                </label>
              ))}
            </div>
          </div>

          {/* How Did You Hear */}
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-slate-900">
              How did you hear about us?
            </label>
            <select
              id="source"
              name="source"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select source</option>
              <option value="friend">Friend / Classmate Referral</option>
              <option value="social-media">Social Media (LinkedIn/Instagram/Twitter)</option>
              <option value="college">College Event / Workshop</option>
              <option value="whatsapp">WhatsApp Group</option>
              <option value="google">Google Search</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              Submit & Join Community
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              By submitting, you agree to receive updates from Datanerdz AI. We'll contact
              you within 24 hours.
            </p>
          </div>
        </form>
      </section>

      {/* JOIN STUDENT: FAQ */}
      <section className="border-t border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Got questions? We've got answers
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                question: "Is there any joining fee or cost?",
                answer:
                  "Joining the Datanerdz AI community is completely free. Individual courses have their own pricing, which varies based on duration and content. We also offer EMI options for paid courses.",
              },
              {
                question: "What language are the courses taught in?",
                answer:
                  "All our courses are primarily taught in English with occasional Tamil/Hinglish words for relatability. Content is designed to be clear and easy to understand for Indian students.",
              },
              {
                question: "How much time do I need to commit?",
                answer:
                  "It depends on the course. On average, you need 5-10 hours per week. We offer flexible schedules with weekend and evening batches designed for busy students.",
              },
              {
                question: "Do I need prior coding experience?",
                answer:
                  "No! Most of our courses are beginner-friendly and start from the basics. We also have intermediate and advanced courses for those with some experience.",
              },
              {
                question: "Will I get placement support?",
                answer:
                  "Yes. We provide resume reviews, mock interviews, LinkedIn optimization, and job referrals through our hiring network. However, placements depend on your skills and performance.",
              },
              {
                question: "Can I access courses after completion?",
                answer:
                  "Yes! Once you enroll in a course, you get lifetime access to all course materials, recordings, assignments, and projects.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer text-base font-semibold text-slate-900 group-open:text-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-slate-900">
              Have more questions?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              WhatsApp us at{" "}
              <a
                href="https://wa.me/919500795194"
                className="font-semibold text-primary hover:underline"
              >
                +91 9500795194
              </a>{" "}
              or email{" "}
              <a
                href="mailto:contact@datanerdzai.com"
                className="font-semibold text-primary hover:underline"
              >
                contact@datanerdzai.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
