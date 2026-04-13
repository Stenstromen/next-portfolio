import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-gray-200 max-w-md">
        This page does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-md bg-[#4f5d75] px-4 py-2 text-white underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
