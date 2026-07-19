import { fromAddress, sendEmail } from "@ingram-tech/nk-email";
import { handleFormSubmission, renderNotificationEmail } from "@ingram-tech/nk-forms";
import { contactFormSchema } from "@/lib/schemas";

// Mints the signed timing token the contact form embeds in its submission.
export { mintFormToken as GET } from "@ingram-tech/nk-forms";

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "info@sevenseed.eu";

export function POST(request: Request) {
	return handleFormSubmission(request, {
		schema: contactFormSchema,
		label: "contact",
		logger: console,
		onSubmit: async ({ fullName, email, organisation, message }) => {
			const { html, text } = renderNotificationEmail({
				heading: "New contact form submission",
				fields: [
					{ label: "Full name", value: fullName },
					{ label: "Email", value: email },
					{ label: "Organisation", value: organisation },
				],
				message,
				footer: "This message was submitted via the contact form on sevenseed.eu",
			});

			await sendEmail({
				to: CONTACT_RECIPIENT,
				subject: `Contact form: ${fullName}`,
				from: fromAddress("Seven Seed"),
				replyTo: email,
				text,
				html,
			});
		},
	});
}
