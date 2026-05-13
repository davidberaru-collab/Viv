import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-900 via-slate-900 to-brand-600 py-24 text-white">
      <div className="mx-auto grid w-[92vw] max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Christian Leadership & Ministry Development</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Build leaders who carry conviction, clarity, and Kingdom impact.</h1>
          <p className="mt-5 text-lg text-blue-100">Training pastors, ministry leaders, and Christian entrepreneurs to lead with biblical wisdom and practical excellence.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/leadership-training" className="rounded-lg bg-white px-5 py-3 font-semibold text-brand-900">Explore Training</Link>
            <Link href="/contact" className="rounded-lg border border-white/50 px-5 py-3 font-semibold">Book a Conversation</Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
          <p className="text-sm text-blue-100">Placeholder image block</p>
          <div className="mt-4 h-72 rounded-xl bg-white/20" />
        </div>
      </div>
    </section>
  );
}
