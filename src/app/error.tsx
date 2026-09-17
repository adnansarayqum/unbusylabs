"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-lab flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-2xl font-bold text-ink">Something went sideways.</h1>
      <p className="mt-2 max-w-md text-slate">
        An unexpected error occurred. You can try again, or head back to the homepage.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-ink"
        >
          Try again
        </button>
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}
