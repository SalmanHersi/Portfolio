'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="rounded-md border border-border px-4 py-2 text-sm hover:bg-secondary"
      >
        Try again
      </button>
    </div>
  );
}
