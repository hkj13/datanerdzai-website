import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | DatanerdzAI",
  description:
    "Contact DatanerdzAI for course enquiries, counselling calls, college or corporate partnerships.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface">
      <section className="border-b border-slate-200 bg-slate-900 py-10 text-white md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s craft your learning journey together.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            Have questions about courses, fees, batches or partnerships? Share a
            few details and the DatanerdzAI team will get back to you within 24
            business hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:grid md:grid-cols-[1.1fr,0.9fr] md:gap-10 md:px-6 md:py-14">
        <div className="space-y-4 text-sm text-slate-700">
          <h2 className="text-base font-semibold tracking-tight text-slate-900 md:text-lg">
            Share your details
          </h2>
          <p className="text-xs text-slate-600">
            This is a simple enquiry section. Replace the placeholders below
            with your preferred email, phone number, WhatsApp link or contact
            form provider.
          </p>

          <div className="mt-4 space-y-3 text-xs text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="text-slate-600">contact@datanerdzai.com</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
              <p className="text-slate-600">+91-XXXXXXXXXX (update with actual number)</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Location</p>
              <p className="text-slate-600">India (update with city / HQ if you prefer)</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-xs shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Suggestion
            </p>
            <p className="mt-2 text-slate-600">
              You can integrate a simple form tool (like Google Forms, Tally,
              Typeform, or a custom Next.js API route) and embed it here. For
              now, visitors can reach you through the contact details above.
            </p>
          </div>
        </div>

        <aside className="mt-10 space-y-4 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-sm md:mt-0">
          <h2 className="text-sm font-semibold text-slate-900">
            When should you contact us?
          </h2>
          <ul className="list-disc space-y-1 pl-4">
            <li>You are a student or fresher exploring skill-building options.</li>
            <li>You are a working professional planning a career switch.</li>
            <li>You represent a college / university placement or training cell.</li>
            <li>You are a company looking for customised training or hiring support.</li>
          </ul>
          <p className="mt-2 text-[11px] text-slate-500">
            Mention your college/organisation, current role/semester and the
            course you are most interested in. This helps us respond with a more
            personalised plan.
          </p>
        </aside>
      </section>
    </div>
  );
}
