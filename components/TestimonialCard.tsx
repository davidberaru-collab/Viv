type Props = { quote: string; name: string; role: string };
export default function TestimonialCard({ quote, name, role }: Props) {
  return <article className="rounded-xl border border-slate-200 bg-white p-6"><p className="text-slate-700">“{quote}”</p><p className="mt-4 font-semibold">{name}</p><p className="text-sm text-slate-500">{role}</p></article>;
}
