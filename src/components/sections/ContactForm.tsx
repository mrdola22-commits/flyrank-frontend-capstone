import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import {
  type ContactFormData,
  type ContactFormErrors,
  submitContactForm,
  validateContactForm,
} from "../../utils/contactForm";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  function handleChange(
    field: keyof ContactFormData,
    value: string,
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setStatus("error");
      setSubmitError("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center"
        role="status"
      >
        <CheckCircle2 className="size-12 text-emerald-400" aria-hidden="true" />
        <div>
          <h3 className="text-lg font-semibold text-white">Message sent!</h3>
          <p className="mt-2 text-sm text-slate-300">
            Thanks for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          name="name"
          label="Name"
          placeholder="Your name"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <Input
        name="subject"
        label="Subject"
        placeholder="What's this about?"
        value={formData.subject}
        onChange={(e) => handleChange("subject", e.target.value)}
        error={errors.subject}
      />

      <Textarea
        name="message"
        label="Message"
        placeholder="Tell me about your project or opportunity…"
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
      />

      {status === "error" && submitError && (
        <div
          className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>{submitError}</p>
        </div>
      )}

      <Button type="submit" isLoading={status === "submitting"} className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
