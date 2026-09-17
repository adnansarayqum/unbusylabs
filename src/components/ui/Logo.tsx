import clsx from "clsx";

interface LogoProps {
  variant?: "default" | "dark" | "mono";
  showWordmark?: boolean;
  className?: string;
}

/**
 * Flask-and-spark mark. Kept as inline, editable SVG (not a raster asset) so
 * colours can respond to variant/theme without shipping multiple images.
 */
export function Logo({ variant = "default", showWordmark = true, className }: LogoProps) {
  const flaskColor =
    variant === "dark" ? "#FFFFFF" : variant === "mono" ? "currentColor" : "#101828";
  const sparkColor =
    variant === "mono" ? "currentColor" : variant === "dark" ? "#C8FF3D" : "#3563FF";

  return (
    <span className={clsx("inline-flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="UnbusyLabs"
      >
        <path
          d="M13 4H19V10.5L24.5 21C25.6 23.1 24.1 25.6 21.7 25.6H10.3C7.9 25.6 6.4 23.1 7.5 21L13 10.5V4Z"
          stroke={flaskColor}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M11.5 4H20.5" stroke={flaskColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M10.5 18H21.5" stroke={flaskColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path
          d="M24 6L25 8.2L27.2 9.2L25 10.2L24 12.4L23 10.2L20.8 9.2L23 8.2L24 6Z"
          fill={sparkColor}
        />
      </svg>
      {showWordmark && (
        <span
          className={clsx(
            "font-display text-lg font-bold tracking-tight",
            variant === "dark" ? "text-white" : "text-ink"
          )}
        >
          unbusylabs
        </span>
      )}
    </span>
  );
}
