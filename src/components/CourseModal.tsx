"use client";

import { useEffect } from "react";

type CourseModalProps = {
  course: {
    title: string;
    description: string;
    level: string;
    duration: string;
    format: string;
    category: string;
  } | null;
  onClose: () => void;
};

const courseContent: Record<string, string[]> = {
  "Data Analytics Bootcamp": [
    "Excel Fundamentals - Functions, Pivot Tables, Data Cleaning",
    "SQL - Queries, Joins, Subqueries, Window Functions",
    "Power BI - Dashboards, DAX, Data Modeling",
    "Tableau - Visual Analytics, Story telling with Data",
    "Business Case Studies - Real-world Analytics Projects",
  ],
  "Python for Data Science": [
    "Python Basics - Variables, Data Types, Control Flow",
    "NumPy & Pandas - Data Manipulation and Analysis",
    "Data Visualization - Matplotlib, Seaborn, Plotly",
    "Statistics for Data Science",
    "Real Data Projects - End-to-end Analysis",
  ],
  "Machine Learning Fundamentals": [
    "Introduction to ML - Supervised vs Unsupervised Learning",
    "Regression & Classification Algorithms",
    "Model Evaluation & Validation Techniques",
    "Scikit-learn Library - Hands-on Implementation",
    "ML Project - Build & Deploy a Predictive Model",
  ],
  "Deep Learning & Neural Networks": [
    "Neural Networks Basics - Activation, Backpropagation",
    "CNNs - Image Classification & Computer Vision",
    "RNNs & LSTMs - Sequence Models, NLP",
    "TensorFlow & Keras - Model Building",
    "Capstone - Build an AI Application",
  ],
  "Full Stack Web Development (MERN)": [
    "MongoDB - Database Design, CRUD Operations",
    "Express.js - RESTful APIs, Middleware",
    "React.js - Components, Hooks, State Management",
    "Node.js - Server-side JavaScript, Authentication",
    "Deploy Full Stack Application - AWS/Vercel",
  ],
  "Frontend Development with React": [
    "HTML, CSS, JavaScript - Foundations",
    "React Fundamentals - JSX, Components, Props",
    "React Hooks - useState, useEffect, Custom Hooks",
    "State Management - Context API, Redux",
    "Build & Deploy - Portfolio Website Project",
  ],
  "Backend Development with Node.js": [
    "Node.js Basics - Event Loop, Modules",
    "Express Framework - Routing, Middleware",
    "Database Integration - MongoDB, PostgreSQL",
    "Authentication & Authorization - JWT, OAuth",
    "API Design - REST, GraphQL, Deployment",
  ],
  "Mobile App Development (React Native)": [
    "React Native Basics - Setup, Components",
    "Navigation - React Navigation Library",
    "State Management - Redux, Context",
    "Native Features - Camera, Location, Push Notifications",
    "Build & Publish - App Store & Play Store",
  ],
  "Android Development with Kotlin": [
    "Kotlin Language Fundamentals",
    "Android Studio - UI Design, Layouts",
    "Activities, Fragments, Intents",
    "Firebase Integration - Auth, Firestore, Cloud Messaging",
    "Publish App on Google Play Store",
  ],
  "Resume Building & Interview Prep": [
    "ATS-Friendly Resume Writing",
    "LinkedIn Profile Optimization",
    "Mock Interviews - Technical & HR Rounds",
    "Communication Skills & Body Language",
    "Salary Negotiation Strategies",
  ],
  "Git, GitHub & Portfolio Building": [
    "Version Control - Git Basics, Branching",
    "GitHub - Repositories, Pull Requests, Collaboration",
    "Building a Portfolio - Showcase Projects",
    "README Files - Documentation Best Practices",
    "Contributing to Open Source",
  ],
};

export default function CourseModal({ course, onClose }: CourseModalProps) {
  useEffect(() => {
    if (course) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [course]);

  if (!course) return null;

  const content = courseContent[course.title] || [
    "Comprehensive course content",
    "Hands-on projects and assignments",
    "Live doubt-solving sessions",
    "Industry-relevant case studies",
    "Certificate upon completion",
  ];

  const whatsappMessage = `Hi! I'm interested in the "${course.title}" course. Can you share more details about batch timings, fees, and enrollment?`;
  const whatsappLink = `https://wa.me/919360393272?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">{course.title}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-700">
                  {course.level}
                </span>
                <span className="text-slate-600">Duration: {course.duration}</span>
                <span className="text-slate-600">Format: {course.format}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-900">About this course</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {course.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">What you'll learn</h3>
            <ul className="mt-3 space-y-2">
              {content.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex-shrink-0 text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-slate-900">Course Format</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs">
              <div className="flex items-center gap-2">
                <span>📹</span>
                <span className="text-slate-700">Live & Recorded Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💻</span>
                <span className="text-slate-700">Hands-on Assignments</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <span className="text-slate-700">Real-world Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span>
                <span className="text-slate-700">Doubt Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-600">
              <p>Want to enroll or learn more?</p>
              <p className="text-xs text-slate-500">We'll help you choose the right batch</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              <span>Apply / Enquire</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
