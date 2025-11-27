"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface">
      {/* HOME: Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center border-b border-slate-200 text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/853919-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-950/85 to-blue-900/75 z-[1]"></div>
        
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 md:py-20">
          <div className="max-w-xl space-y-6 animate-fade-in-up">
            <div className="inline-block rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-300 mb-4">
              🚀 Crafting Tomorrow's Success
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
              Learn. Build. Grow.{" "}
              <span className="gradient-text">Together</span> with Datanerdz AI
            </h1>
            <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl delay-100">
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
          <div className="w-full max-w-md animate-scale-in delay-200">
            <div className="glass-dark rounded-3xl p-8 transition-all hover:scale-105 pulse-glow">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 animate-float shadow-2xl">
                  <span className="text-4xl">🎓</span>
                </div>
                <p className="text-2xl font-bold mb-3">Your Learning Journey Starts Here</p>
                <p className="text-base text-slate-300 leading-relaxed">
                  Join a thriving community of <span className="text-sky-300 font-bold">7000+ students</span> and <span className="text-purple-300 font-bold">50+ mentors</span> learning together, building together, and growing together.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="glass rounded-lg p-3">
                    <p className="text-2xl font-bold text-cyan-400">7K+</p>
                    <p className="text-xs text-slate-400">Students</p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-400">50+</p>
                    <p className="text-xs text-slate-400">Mentors</p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <p className="text-2xl font-bold text-sky-400">20+</p>
                    <p className="text-xs text-slate-400">Courses</p>
                  </div>
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
              icon: "🎯",
              title: "Industry-Relevant Courses",
              description:
                "Learn practical skills that companies actually look for. Updated curriculum, live projects, and certifications.",
            },
            {
              icon: "👨‍🏫",
              title: "Expert Mentors",
              description:
                "Get guidance from professionals working in top companies. 1:1 doubt sessions and career advice.",
            },
            {
              icon: "🤝",
              title: "Community Learning",
              description:
                "Connect with peers, work on group projects, participate in hackathons, and grow your network.",
            },
            {
              icon: "💼",
              title: "Career Support",
              description:
                "Resume building, mock interviews, LinkedIn optimization, and referral opportunities to land your dream job.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up delay-${index * 100 + 100}`}
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

      {/* HOME: Premium Split Video Section - Collaboration & Learning */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Video Side */}
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover aspect-[9/16]"
                >
                  <source src="/videos/5495896-hd_1080_1920_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 glass-dark rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Live Sessions</p>
                    <p className="text-xs text-slate-300">Interactive Learning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="reveal order-1 lg:order-2 space-y-6">
              <div className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                💡 Learn Together
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Collaborative Learning,{" "}
                <span className="gradient-text">Real Results</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join live interactive sessions, work on team projects, and build your network while learning from industry experts. Our community-driven approach ensures you're never stuck alone.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Live</p>
                  <p className="text-sm text-slate-600 mt-1">Interactive Sessions</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">24/7</p>
                  <p className="text-sm text-slate-600 mt-1">Mentor Support</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/courses"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-105"
                >
                  Explore Courses →
                </Link>
                <Link
                  href="/events"
                  className="rounded-full border-2 border-slate-300 px-8 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                >
                  Join Free Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME: Featured Courses Preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 reveal">
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
          ].map((course, index) => (
            <div
              key={course.title}
              className={`flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 animate-scale-in delay-${index * 100 + 100}`}
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

      {/* HOME: Data Visualization Video Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 text-center text-white">
          <div className="reveal">
            <div className="inline-block rounded-full glass px-6 py-2 text-sm font-semibold uppercase tracking-wider text-sky-300 mb-6">
              📊 Data-Driven Learning
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Master Skills That <span className="gradient-text">Matter</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              From Data Analytics to Full Stack Development, learn industry-relevant skills with hands-on projects, real datasets, and expert mentorship.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { num: "100+", label: "Projects Built" },
                { num: "95%", label: "Success Rate" },
                { num: "500+", label: "Hiring Partners" },
                { num: "₹8L", label: "Avg. Package" }
              ].map((stat, i) => (
                <div key={i} className="glass-dark rounded-2xl p-6 animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.num}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl transition hover:scale-105 hover:shadow-blue-500/50"
            >
              Start Your Journey
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOME: Upcoming Events Preview */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16 reveal">
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
                type: "Webinar",
                mode: "Online",
                description: "Learn about skills, certifications, projects, and job opportunities in Data Science",
              },
              {
                title: "Build Your First ML Model Workshop",
                type: "Workshop",
                mode: "Online",
                description: "Hands-on workshop to build and deploy your first ML model with Python",
              },
              {
                title: "Resume Building & LinkedIn Optimization",
                type: "Workshop",
                mode: "Online",
                description: "Craft ATS-friendly resumes and optimize your LinkedIn profile",
              },
            ].map((event, index) => (
              <div
                key={event.title}
                className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in delay-${index * 100 + 100}`}
              >
                <div className="mb-3 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-700">
                    {event.type}
                  </span>
                  <span className="text-slate-500">• {event.mode}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{event.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{event.description}</p>
                <button className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-dark">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME: Community & Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 reveal">
        <div className="text-center">
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white mb-4">
            ⭐ Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            What Our Community Says
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
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
              avatar: "👩‍💻"
            },
            {
              name: "Arjun Reddy",
              role: "Career Switcher, Ex-Mechanical Engineer",
              content:
                "I was scared of coding. The community here made learning so easy and fun. Now I'm confident building full-stack apps. Best decision I made!",
              rating: 5,
              avatar: "👨‍💼"
            },
            {
              name: "Divya Krishnan",
              role: "BCA Final Year, Kerala",
              content:
                "The 1:1 mentorship was a game-changer. My mentor helped me with interview prep, resume and even connected me with opportunities. Forever grateful!",
              rating: 5,
              avatar: "👩‍🎓"
            },
          ].map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 reveal"
              style={{transitionDelay: `${i * 0.1}s`}}
            >
              <div className="mb-4 flex gap-1 text-amber-400 text-lg">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-700 italic">
                "{testimonial.content}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOME: Final CTA with Coding Video Background */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center border-t border-slate-200">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/3130284-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90 z-[1]"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center md:px-6 text-white">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Ready to Start Your{" "}
              <span className="gradient-text">Datanerdz AI</span> Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300 leading-relaxed">
              Join <span className="font-bold text-sky-300">7000+ students</span> who are building skills, portfolios, and careers with us. Your future starts today!
            </p>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/join-student"
                className="group relative overflow-hidden rounded-full bg-white px-10 py-5 text-base font-semibold text-slate-900 shadow-2xl transition hover:scale-105"
              >
                <span className="relative z-10">Join as Student</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition group-hover:opacity-100"></div>
              </Link>
              <Link
                href="/join-mentor"
                className="rounded-full border-2 border-white px-10 py-5 text-base font-semibold text-white transition hover:bg-white/20 hover:scale-105"
              >
                Become a Mentor
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Industry-Recognized Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Job Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
