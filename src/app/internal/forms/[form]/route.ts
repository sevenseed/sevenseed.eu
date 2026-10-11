import { fromAddress, sendEmail } from "@ingram-tech/nk-email";
import {
	createFormsHandler,
	defineForm,
	renderNotificationEmail,
} from "@ingram-tech/nk-forms";
import { contactFormSchema } from "@/lib/schemas";

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "info@sevenseed.eu";

const contact = defineForm({
	schema: contactFormSchema,
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

export const { GET, POST } = createFormsHandler({ contact }, { logger: console });
