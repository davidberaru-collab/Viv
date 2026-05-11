import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
export const metadata: Metadata = { title: "Speaking", description: "Invite speaking for conferences and church events." };
export default function Page(){return <main className="mx-auto w-[92vw] max-w-5xl py-16"><SectionHeader title="Speaking" description="Keynotes, workshops, retreats, and team sessions." /><p className="text-slate-700">Placeholder list of speaking topics and booking process.</p></main>;}
