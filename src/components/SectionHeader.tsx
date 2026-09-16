interface SectionHeaderProps {
  index: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  index,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <header className={`mb-10 sm:mb-12 max-w-2xl ${alignment}`}>
      <p className="section-kicker mb-3">{index}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-3">
        {title}
      </h2>
      <p className="text-muted text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </header>
  );
}
