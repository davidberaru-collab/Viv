import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
export const metadata: Metadata = { title: "About", description: "About the ministry and leadership mission." };
export default function Page(){return <main className="mx-auto w-[92vw] max-w-5xl py-16"><SectionHeader title="About" description="We help leaders grow in conviction, character, and capability." /><p className="text-slate-700">Placeholder founder story, doctrinal alignment, and ministry values.</p></main>;}
