interface BadgeProps {
  name: string;
  label: string;
}

export default function Badge({ name, label }: BadgeProps) {
  return (
    <span
      data-tech={name}
      className="inline-flex items-center rounded-full border border-line bg-canvas px-2 py-0.5 text-[11px] font-medium leading-4 text-ink/80"
    >
      {label}
    </span>
  );
}
