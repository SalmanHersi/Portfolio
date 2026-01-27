import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Page not found</h2>
      <Link
        href="/"
        className="rounded-md border border-border px-4 py-2 text-sm hover:bg-secondary"
      >
        Go home
      </Link>
    </div>
  );
}
