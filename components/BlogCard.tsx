import Link from "next/link";

type Props = { title: string; excerpt: string; href?: string };
export default function BlogCard({ title, excerpt, href = "#" }: Props) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 h-36 rounded-lg bg-slate-100" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{excerpt}</p>
      <Link href={href} className="mt-4 inline-block font-semibold text-brand-600">Read More →</Link>
    </article>
  );
}
