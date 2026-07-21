import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(
  data: ContactFormData,
): ContactFormErrors {
  const result = contactFormSchema.safeParse(data);

  if (result.success) return {};

  const errors: ContactFormErrors = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as keyof ContactFormData;
    errors[field] = issue.message;
  });

  return errors;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 900));
}