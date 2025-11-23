import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | DatanerdzAI",
  description:
    "Our client portfolio page is under construction. DatanerdzAI partners with colleges and companies for training, projects and workshops.",
};

export default function ClientsPage() {
  return (
    <div className="bg-surface">
      <section className="border-b border-slate-200 bg-slate-900 py-10 text-white md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Our Clients & Partners
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Client portfolio page under construction.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
            We&apos;re compiling case studies and logos of the colleges, universities,
            startups and companies that DatanerdzAI works with. This section will
            go live soon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-700 md:px-6 md:py-14">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-6 text-xs text-slate-700">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Coming soon
          </p>
          <p className="mt-2">
            This page will soon showcase:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            <li>College & university partners for training and placement bootcamps.</li>
            <li>Corporate and startup clients for customised upskilling programs.</li>
            <li>Short impact stories from workshops, projects and studentpreneurship initiatives.</li>
          </ul>
          <p className="mt-3 text-slate-600">
            If you&apos;re a college or company interested in partnering with DatanerdzAI,
            please reach out through the Contact Us page and we&apos;ll share more
            details with you directly.
          </p>
        </div>
      </section>
    </div>
  );
}
