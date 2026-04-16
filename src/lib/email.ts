/**
 * Cloudflare Email Sending client.
 * Self-contained, zero dependencies beyond fetch.
 *
 * Required env vars:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_EMAIL_API_TOKEN
 *   EMAIL_FROM_DOMAIN  — sending domain (e.g. "mail.financica.app")
 */

export interface EmailAttachment {
	content: string;
	filename: string;
	type: string;
	disposition: "attachment";
}

export interface EmailOptions {
	to: string | string[];
	subject: string;
	text?: string;
	html?: string;
	/** Override the default sender. */
	from?: string;
	replyTo?: string;
	attachments?: EmailAttachment[];
}

/** Build a "Name <local@domain>" sender address from the env domain. */
export const fromAddress = (name: string, localPart = "notifications"): string => {
	const domain = process.env.EMAIL_FROM_DOMAIN;
	if (!domain) {
		throw new Error("EMAIL_FROM_DOMAIN environment variable not configured");
	}
	return `${name} <${localPart}@${domain}>`;
};

export const sendEmail = async (options: EmailOptions): Promise<void> => {
	const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
	const apiToken = process.env.CLOUDFLARE_EMAIL_API_TOKEN;

	if (!accountId || !apiToken) {
		throw new Error(
			"Cloudflare email credentials not configured (CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_EMAIL_API_TOKEN)",
		);
	}

	if (!options.text && !options.html) {
		throw new Error("Email must have either text or html content");
	}

	const from = options.from;
	if (!from) {
		throw new Error("No sender address: pass `from`");
	}

	const body: Record<string, unknown> = {
		to: options.to,
		from,
		subject: options.subject,
	};
	if (options.text) body.text = options.text;
	if (options.html) body.html = options.html;
	if (options.replyTo) body.reply_to = options.replyTo;
	if (options.attachments && options.attachments.length > 0) {
		body.attachments = options.attachments;
	}

	const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`;
	const res = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiToken}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	if (!res.ok) {
		const errorBody = await res.text().catch(() => "");
		console.error("[email] Cloudflare API error", {
			status: res.status,
			body: errorBody,
		});
		throw new Error(`Cloudflare email API returned ${res.status}: ${errorBody}`);
	}
};
