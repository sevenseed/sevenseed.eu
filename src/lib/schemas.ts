import { z } from "zod";

export const contactFormSchema = z.object({
	fullName: z
		.string()
		.trim()
		.min(1, "Full name is required")
		.max(200, "Full name is too long"),
	email: z.email("Invalid email address").max(320, "Email is too long"),
	organisation: z
		.string()
		.trim()
		.max(200, "Organisation name is too long")
		.optional(),
	message: z
		.string()
		.trim()
		.min(1, "Message is required")
		.max(5000, "Message is too long"),
});
