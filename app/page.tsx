import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader eyebrow="Mission" title="Forming transformational leaders anchored in Scripture." description="Placeholder mission statement you can edit later to match your exact ministry voice." /></section>
      <section className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader eyebrow="Training" title="Leadership pathways" /><div className="grid gap-5 md:grid-cols-3">{["Leadership Cohorts","Church Team Intensives","Executive Coaching"].map((t)=><div key={t} className="rounded-xl border border-slate-200 bg-white p-6"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-slate-600">Editable overview content for this training offer.</p></div>)}</div></section>
      <section className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader eyebrow="Featured" title="Latest from blog & resources" /><div className="grid gap-5 md:grid-cols-3"><BlogCard title="Leading through transition" excerpt="Biblical practices for guiding teams in uncertain seasons." /><BlogCard title="5 rhythms of healthy leaders" excerpt="Spiritual and strategic habits that sustain leaders long-term." /><BlogCard title="A vision framework for churches" excerpt="Simple resource to align mission, people, and execution." /></div></section>
      <section className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader eyebrow="Testimonials" title="Trusted by leaders and churches" /><div className="grid gap-5 md:grid-cols-3"><TestimonialCard quote="The training sharpened our team spiritually and strategically." name="Pastor Daniel R." role="Lead Pastor" /><TestimonialCard quote="Clear, biblical, and deeply practical leadership development." name="Alicia M." role="Ministry Director" /><TestimonialCard quote="Exactly what our leadership retreat needed." name="Marcus T." role="Church Executive" /></div></section>
      <section className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader eyebrow="Speaking" title="Invite a transformational speaking experience" description="Conference keynotes, church intensives, and leadership workshops tailored to your context." /></section>
      <section className="mx-auto w-[92vw] max-w-3xl py-16"><SectionHeader eyebrow="Newsletter" title="Receive leadership insights" /><form className="rounded-xl border border-slate-200 bg-white p-6"><label className="block text-sm font-medium">Email</label><input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2" type="email" placeholder="you@example.com" /><button className="mt-4 rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white">Subscribe</button>{/* CMS/email provider integration hook here */}</form></section>
      <CTA />
    </>
  );
}
