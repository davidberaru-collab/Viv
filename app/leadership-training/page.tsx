import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
export const metadata: Metadata = { title: "Leadership Training", description: "Cohorts, team intensives, and coaching." };
export default function Page(){return <main className="mx-auto w-[92vw] max-w-5xl py-16"><SectionHeader title="Leadership Training" description="Programs for pastors, teams, and entrepreneurs." /><div className="grid gap-4 md:grid-cols-2">{["Cohort Program","Church Intensive","Executive Coaching","Team Development"].map(i=><div key={i} className="rounded-xl border border-slate-200 bg-white p-5">{i}</div>)}</div></main>;}
