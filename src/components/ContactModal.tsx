"use client";

import { useEffect, useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form state when closed
      setTimeout(() => {
        setSubmitted(false);
        setIsSubmitting(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      formType: "contact"
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        // Close after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        alert('Failed to send message. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Talk to Us</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
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
          <p className="mt-2 text-sm text-slate-600">
            Fill in your details and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {submitted ? (
            <div className="rounded-lg bg-green-50 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="mt-3 font-semibold text-green-900">Thank you!</p>
              <p className="mt-1 text-sm text-green-700">
                We'll contact you soon via email or WhatsApp
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                  Email <span className="text-red-500">*</span>
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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>

        {/* Footer - Quick contact */}
        {!submitted && (
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
            <p className="text-center text-xs text-slate-600">
              Or reach us directly:
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm">
              <a
                href="https://wa.me/919360393272"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium text-green-600 hover:underline"
              >
                <span>WhatsApp</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="mailto:contact@datanerdzai.com"
                className="font-medium text-primary hover:underline"
              >
                Email
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="tel:+919360393272"
                className="font-medium text-primary hover:underline"
              >
                Call
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
