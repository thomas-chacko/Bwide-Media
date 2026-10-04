import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />

      <div className="relative">
        <p className="font-display text-[10rem] font-bold leading-none text-white/[0.03] md:text-[16rem]">
          404
        </p>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="font-display text-3xl font-bold text-text md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-md text-base text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_24px_var(--primary-glow)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
