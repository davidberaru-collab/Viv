export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex w-[92vw] max-w-6xl flex-col gap-3 text-sm text-slate-600 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Apostolic Alignment School of Ministry</p>
        <p>Equipping pastors, entrepreneurs, and ministry teams for transformational leadership.</p>
      </div>
    </footer>
  );
}
