import EasterEgg from "./EasterEgg";
import ScrollToTop from "./ScrollToTop";

const focusAreas = [
  {
    label: "Kubernetes",
    className: "border-accent/40 bg-accent/10 text-accent",
  },
  {
    label: "Linux",
    className: "border-honey/40 bg-honey/10 text-honey",
  },
  {
    label: "CI/CD",
    className: "border-lilac/40 bg-lilac/10 text-lilac",
  },
  {
    label: "OpenTofu",
    className: "border-mint/40 bg-mint/10 text-mint",
  },
  {
    label: "GitOps",
    className: "border-sky/40 bg-sky/10 text-sky",
  },
] as const;

const highlights = [
  {
    label: "Platform",
    value: "Internal platforms, clusters, and delivery pipelines",
    tone: "text-honey",
  },
  {
    label: "Certified",
    value: "Linux Foundation credentials across Kubernetes, GitOps, and IaC",
    tone: "text-lilac",
  },
  {
    label: "Open source",
    value: "kubectl plugins and CLIs in Go and Rust",
    tone: "text-mint",
  },
] as const;

interface FirstPageProps {
  nonce?: string;
}

export default function FirstPage({ nonce }: FirstPageProps) {
  return (
    <div
      id="home"
      data-nonce={nonce}
      className="page-grid relative overflow-x-clip min-h-[100svh]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16 items-center">
          <div className="fade-in-left space-y-6">
            <EasterEgg />
            <h1 className="text-ink text-[clamp(2.4rem,7vw,4.75rem)] leading-[1.05] font-semibold tracking-tight">
              Hello, I&apos;m <span className="text-accent">Filip</span>.
            </h1>
            <h2 className="text-ink/90 text-[clamp(1.15rem,2.6vw,1.7rem)] leading-snug font-medium text-balance max-w-2xl">
              Platform engineer with deep Kubernetes experience — automation,
              reliability, and shipping change safely.
            </h2>
            <p className="text-muted text-[clamp(0.95rem,1.6vw,1.125rem)] leading-relaxed max-w-2xl">
              I build and operate internal platforms, clusters, and delivery
              pipelines, and I still love turning ideas into code on the side.
            </p>
            <p className="text-subtle text-sm sm:text-base">
              Based in Stockholm, Sweden.
            </p>
            <ul
              className="flex flex-wrap gap-2 pt-1 list-none"
              aria-label="Focus areas"
            >
              {focusAreas.map((item) => (
                <li key={item.label}>
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs sm:text-sm ${item.className}`}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center min-h-11 rounded-full bg-accent px-5 text-sm font-semibold text-canvas hover:bg-accent/90 transition-colors"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center min-h-11 rounded-full border border-honey/55 bg-transparent px-5 text-sm font-semibold text-honey hover:bg-honey/10 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          <aside className="fade-in-right hero-panel rounded-2xl p-6 sm:p-7">
            <p className="section-kicker mb-5">Currently</p>
            <ul className="space-y-5">
              {highlights.map((item) => (
                <li key={item.label} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                  <p className={`font-mono text-xs uppercase tracking-wider mb-1.5 ${item.tone}`}>
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base text-ink/90 leading-relaxed">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
