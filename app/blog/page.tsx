import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
export const metadata: Metadata = { title: "Blog", description: "Leadership and ministry insights." };
export default function Page(){return <main className="mx-auto w-[92vw] max-w-6xl py-16"><SectionHeader title="Blog" description="Fresh leadership insights and biblical encouragement." /><div className="grid gap-5 md:grid-cols-3"><BlogCard title="Post Title" excerpt="Placeholder excerpt for future CMS-driven blog." /><BlogCard title="Post Title" excerpt="Placeholder excerpt for future CMS-driven blog." /><BlogCard title="Post Title" excerpt="Placeholder excerpt for future CMS-driven blog." /></div>{/* Future CMS integration: map posts from content API here. */}</main>;}
