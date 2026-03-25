import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  solid:
    "bg-sky-600 text-white shadow-[0_10px_30px_-18px_rgba(2,132,199,0.9)] hover:bg-sky-500",
  outline:
    "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-100",
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}