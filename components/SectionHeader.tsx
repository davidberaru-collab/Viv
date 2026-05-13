type Props = { eyebrow?: string; title: string; description?: string };

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-lg text-slate-600">{description}</p>}
    </div>
  );
}
