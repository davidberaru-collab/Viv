import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
export const metadata: Metadata = { title: "Resources", description: "Download guides, frameworks, and leadership tools." };
export default function Page(){return <main className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader title="Resources" description="Practical tools to support healthy leadership." /><div className="grid gap-4 md:grid-cols-3">{["Leadership Audit PDF","Vision Clarity Worksheet","Team Culture Checklist"].map(r=><div key={r} className="rounded-xl border border-slate-200 bg-white p-5">{r}</div>)}</div></main>;}
