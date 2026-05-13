import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Leadership Training", "/leadership-training"],
  ["Speaking", "/speaking"],
  ["Blog", "/blog"],
  ["Resources", "/resources"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-[92vw] max-w-6xl items-center justify-between py-4">
        <Link href="/" className="text-lg font-bold text-brand-900">Apostolic Alignment</Link>
        <div className="hidden gap-6 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-slate-700 hover:text-brand-600">{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
