import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-lab flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-6xl font-extrabold text-cobalt">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">
        This process wasn&apos;t on the conveyor.
      </h1>
      <p className="mt-2 max-w-md text-slate">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to something
        useful.
      </p>
      <Button href="/" className="mt-6">
        Back to home
      </Button>
    </div>
  );
}
