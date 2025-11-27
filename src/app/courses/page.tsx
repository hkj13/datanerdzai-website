"use client";

import { useState } from "react";
import Link from "next/link";
import CourseModal from "@/components/CourseModal";

type Course = {
  title: string;
  description: string;
  level: string;
  duration: string;
  format: string;
  category: string;
};

const courses: Course[] = [
  {
    title: "Data Analytics Bootcamp",
    description:
      "Master Excel, SQL, Power BI, and Tableau. Learn to build business dashboards, perform data analysis, and create insightful visualizations using real business cases.",
    level: "Beginner",
    duration: "8 weeks",
    format: "Live + Recorded",
    category: "Data & Analytics",
  },
  {
    title: "Python for Data Science",
    description:
      "Learn Python programming, data manipulation with Pandas, NumPy, data visualization, and statistical analysis for data-driven decision making.",
    level: "Beginner",
    duration: "10 weeks",
    format: "Live + Recorded",
    category: "Data & Analytics",
  },
  {
    title: "Machine Learning Fundamentals",
    description:
      "Understand ML algorithms, build predictive models, work with scikit-learn, and deploy basic ML projects. Includes hands-on case studies.",
    level: "Intermediate",
    duration: "12 weeks",
    format: "Live + Recorded",
    category: "AI & Machine Learning",
  },
  {
    title: "Deep Learning & Neural Networks",
    description:
      "Explore neural networks, CNNs, RNNs, TensorFlow, Keras. Build image classification, NLP models and understand modern AI applications.",
    level: "Advanced",
    duration: "14 weeks",
    format: "Live + Recorded",
    category: "AI & Machine Learning",
  },
  {
    title: "Full Stack Web Development (MERN)",
    description:
      "Build complete web applications with MongoDB, Express, React, Node.js. Learn REST APIs, authentication, deployment, and modern web practices.",
    level: "Intermediate",
    duration: "16 weeks",
    format: "Live + Recorded",
    category: "Web Development",
  },
  {
    title: "Frontend Development with React",
    description:
      "Master React, hooks, state management, routing, and component-based architecture. Build responsive, modern web interfaces.",
    level: "Beginner",
    duration: "8 weeks",
    format: "Live + Recorded",
    category: "Web Development",
  },
  {
    title: "Backend Development with Node.js",
    description:
      "Learn server-side development, Express framework, databases (SQL & NoSQL), authentication, API design, and deployment strategies.",
    level: "Intermediate",
    duration: "10 weeks",
    format: "Live + Recorded",
    category: "Web Development",
  },
  {
    title: "Mobile App Development (React Native)",
    description:
      "Build cross-platform mobile apps for iOS and Android using React Native. Learn navigation, state management, and app deployment.",
    level: "Intermediate",
    duration: "12 weeks",
    format: "Live + Recorded",
    category: "Mobile App Development",
  },
  {
    title: "Android Development with Kotlin",
    description:
      "Create native Android apps with Kotlin, Android Studio, Material Design, Firebase integration, and Play Store publishing.",
    level: "Beginner",
    duration: "14 weeks",
    format: "Live + Recorded",
    category: "Mobile App Development",
  },
  {
    title: "Resume Building & Interview Prep",
    description:
      "Craft ATS-friendly resumes, optimize LinkedIn, practice mock interviews, improve communication skills, and learn salary negotiation tactics.",
    level: "Beginner",
    duration: "4 weeks",
    format: "Hybrid",
    category: "Career & Soft Skills",
  },
  {
    title: "Git, GitHub & Portfolio Building",
    description:
      "Master version control, collaborate on projects, build a stunning GitHub portfolio, and showcase your work to recruiters.",
    level: "Beginner",
    duration: "3 weeks",
    format: "Recorded",
    category: "Career & Soft Skills",
  },
];

const categories = [
  "All Courses",
  "Data & Analytics",
  "AI & Machine Learning",
  "Web Development",
  "Mobile App Development",
  "Career & Soft Skills",
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <>
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
      <div className="bg-surface">
      {/* COURSES: Hero Section */}
      <section className="border-b border-slate-200 bg-slate-900 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Courses We Offer
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Structured, hands-on courses designed to take you from beginner to
            job-ready. Learn with live sessions, build real projects, get mentored.
          </p>
        </div>
      </section>

      {/* COURSES: Category Filter */}
      <section className="border-b border-slate-200 bg-slate-50/60 py-6">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* COURSES: Course Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-700">
                  {course.level}
                </span>
                <span className="text-slate-500">• {course.duration}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{course.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {course.description}
              </p>
              <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-500">Format:</span>
                  <span className="text-slate-700">{course.format}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-500">Category:</span>
                  <span className="text-slate-700">{course.category}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCourse(course)}
                className="mt-4 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                View Details / Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES: How Our Courses Work */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How Our Courses Work
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              A complete learning experience designed for real-world success
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📹",
                title: "Live & Recorded Sessions",
                description: "Join live classes or watch recordings at your own pace",
              },
              {
                icon: "💻",
                title: "Hands-On Assignments",
                description: "Practice with real tasks after every module",
              },
              {
                icon: "🎯",
                title: "Capstone Projects",
                description: "Build portfolio-ready projects with mentor guidance",
              },
              {
                icon: "💬",
                title: "Doubt Support",
                description: "Get your questions answered on WhatsApp/Slack instantly",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES: CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
            Not sure which course to choose?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Book a free counselling call and we'll help you find the perfect course
            based on your goals, background, and schedule.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/join-student"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              Join as Student
            </Link>
            <a
              href="https://wa.me/919360393272"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
