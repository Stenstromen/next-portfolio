import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center gap-4 px-4 py-24 text-center page-grid">
      <p className="section-kicker">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="text-muted max-w-md">
        This page does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-canvas hover:bg-accent/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
