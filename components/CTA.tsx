import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[92vw] max-w-6xl rounded-2xl bg-slate-900 p-10 text-white">
        <h3 className="text-3xl font-bold">Ready to strengthen your leadership assignment?</h3>
        <p className="mt-3 text-slate-200">Invite us to train your team, equip your church, or speak at your next event.</p>
        <Link href="/contact" className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-slate-900">Start Here</Link>
      </div>
    </section>
  );
}
