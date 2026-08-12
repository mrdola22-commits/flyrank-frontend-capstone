import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  isLoading?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:ring-indigo-400",
  secondary:
    "border border-slate-600 bg-slate-800 text-slate-100 hover:border-slate-500 hover:bg-slate-700",
  ghost: "text-slate-300 hover:bg-slate-800 hover:text-white",
};

export function Button({
  variant = "primary",
  isLoading = false,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60 ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          <span>Sending…</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
