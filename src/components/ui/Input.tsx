import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className = "", ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`rounded-lg border bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
          error
            ? "border-red-500/70 focus:border-red-500"
            : "border-slate-600 focus:border-indigo-500"
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
