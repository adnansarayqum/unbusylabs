import Link from "next/link";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-ink",
  secondary: "bg-white text-ink border border-border hover:border-ink",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition min-h-[44px] focus-visible:outline-2 focus-visible:outline-cobalt";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  onClick?: () => void;
  type?: never;
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = clsx(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
