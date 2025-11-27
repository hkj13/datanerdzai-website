"use client";

import { useState } from "react";

type Event = {
  title: string;
  mode: string;
  type: string;
  description: string;
  status: "upcoming" | "past";
};

const events: Event[] = [
  {
    title: "Career in Data Science - Roadmap for Students",
    mode: "Online",
    type: "Webinar",
    description:
      "Join us for an interactive session on how to build a successful career in Data Science. Learn about skills, certifications, projects, and job opportunities.",
    status: "upcoming",
  },
  {
    title: "Build Your First ML Model Workshop",
    mode: "Online",
    type: "Workshop",
    description:
      "Hands-on workshop where you'll build and deploy your first machine learning model using Python and scikit-learn. Perfect for beginners!",
    status: "upcoming",
  },
  {
    title: "Resume Building & LinkedIn Optimization",
    mode: "Online",
    type: "Workshop",
    description:
      "Learn how to craft ATS-friendly resumes, optimize your LinkedIn profile, and stand out to recruiters. Includes resume reviews and templates.",
    status: "upcoming",
  },
  {
    title: "Full Stack Development Crash Course",
    mode: "Online",
    type: "Workshop",
    description:
      "3-hour intensive workshop covering basics of MERN stack development. Build a simple web app from scratch and understand frontend-backend integration.",
    status: "upcoming",
  },
  {
    title: "AI & ChatGPT for Students - Productivity Hacks",
    mode: "Online",
    type: "Webinar",
    description:
      "Explored how students can use AI tools like ChatGPT, Notion AI, and more to boost productivity, learn faster, and complete assignments efficiently.",
    status: "past",
  },
  {
    title: "Web Development Bootcamp - Day 1",
    mode: "Online",
    type: "Workshop",
    description:
      "Kickoff session of our 3-day web development bootcamp. Covered HTML, CSS, JavaScript basics and built a landing page together.",
    status: "past",
  },
  {
    title: "Mock Interview & Career Guidance Session",
    mode: "Online",
    type: "Workshop",
    description:
      "Students participated in live mock interviews with industry professionals. Got feedback on technical and HR rounds, resume tips, and career advice.",
    status: "past",
  },
  {
    title: "Python for Beginners - Zero to Hero",
    mode: "Online",
    type: "Webinar",
    description:
      "Introduction to Python programming for absolute beginners. Covered variables, loops, functions, and simple projects. Over 200 students attended!",
    status: "past",
  },
];

export default function EventsPage() {
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = events.filter((event) => event.status === selectedTab);

  return (
    <div className="bg-surface">
      {/* EVENTS: Hero Section */}
      <section className="border-b border-slate-200 bg-slate-900 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Events</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Join our free webinars, workshops, hackathons, and community sessions.
            Learn from experts, network with peers, and stay ahead in your tech journey.
          </p>
        </div>
      </section>

      {/* EVENTS: Tabs */}
      <section className="border-b border-slate-200 bg-slate-50/60 py-6">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedTab("upcoming")}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${
                selectedTab === "upcoming"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setSelectedTab("past")}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${
                selectedTab === "past"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              Past Events
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Showing {filteredEvents.length} {selectedTab} event
            {filteredEvents.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* EVENTS: Event Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        {filteredEvents.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">
              No {selectedTab} events at the moment
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Check back soon or switch tabs to see other events!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => {
              const whatsappMessage = selectedTab === "upcoming"
                ? `Hi! I'm interested in registering for the "${event.title}" event. Can you share more details?`
                : `Hi! I'd like to know more about the "${event.title}" event.`;
              const whatsappLink = `https://wa.me/919360393272?text=${encodeURIComponent(whatsappMessage)}`;
              
              return (
                <div
                  key={event.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-2 text-xs">
                    <span
                      className={`rounded-full px-2 py-1 font-medium ${
                        event.type === "Webinar"
                          ? "bg-blue-100 text-blue-700"
                          : event.type === "Workshop"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-slate-500">• {event.mode}</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {event.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {event.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                      selectedTab === "upcoming"
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {selectedTab === "upcoming" ? "Register Now" : "View Highlights"}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* EVENTS: Why Join */}
      <section className="border-t border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why Join Our Events?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Benefits of participating in Datanerdz AI community events
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🎓",
                title: "Learn from Experts",
                description:
                  "Get insights from industry professionals and experienced mentors",
              },
              {
                icon: "🤝",
                title: "Network with Peers",
                description:
                  "Connect with fellow students and learners from across India",
              },
              {
                icon: "💡",
                title: "Practical Knowledge",
                description:
                  "Hands-on workshops with real projects and actionable tips",
              },
              {
                icon: "🎁",
                title: "Free Resources",
                description:
                  "Get templates, guides, certificates, and exclusive materials",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-3xl">{benefit.icon}</div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS: CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-primary to-slate-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Never miss an event!
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Join our community to get notifications about upcoming webinars, workshops,
            and exclusive sessions
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919360393272"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
              Join WhatsApp Community
            </a>
            <a
              href="mailto:contact@datanerdzai.com"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get Email Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
