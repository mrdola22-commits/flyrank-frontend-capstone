import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({
  label,
  error,
  id,
  className = "",
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={textareaId} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <textarea
        id={textareaId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`min-h-32 resize-y rounded-lg border bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
          error
            ? "border-red-500/70 focus:border-red-500"
            : "border-slate-600 focus:border-indigo-500"
        } ${className}`}
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          role="alert"
          className="text-sm text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
