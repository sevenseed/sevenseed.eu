import { NextResponse } from "next/server";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "info@sevenseed.eu";
const CONTACT_FROM = process.env.CONTACT_FROM || "notifications@sevenseed.eu";

const SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
		const email = typeof body.email === "string" ? body.email.trim() : "";
		const organisation =
			typeof body.organisation === "string" ? body.organisation.trim() : "";
		const message = typeof body.message === "string" ? body.message.trim() : "";

		if (!fullName || !email || !message) {
			return NextResponse.json(
				{ error: "Please complete all required fields." },
				{ status: 400 },
			);
		}

		if (!SENDGRID_API_KEY) {
			return NextResponse.json(
				{ error: "Email service is not configured." },
				{ status: 500 },
			);
		}

		const htmlContent = `
			<div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
				<h2 style="color: #111827;">New contact form submission</h2>
				<p style="color: #1f2937;">You received a new message via the Seven Seed website.</p>
				<table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
					<tbody>
						<tr>
							<td style="padding: 8px 12px; font-weight: 600; color: #1f2937;">Full name</td>
							<td style="padding: 8px 12px; color: #374151;">${fullName}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; font-weight: 600; color: #1f2937;">Email</td>
							<td style="padding: 8px 12px; color: #374151;">${email}</td>
						</tr>
						${
							organisation
								? `<tr>
							<td style="padding: 8px 12px; font-weight: 600; color: #1f2937;">Organisation</td>
							<td style="padding: 8px 12px; color: #374151;">${organisation}</td>
						</tr>`
								: ""
						}
					</tbody>
				</table>
				<div style="margin-top: 24px;">
					<h3 style="color: #111827; font-size: 16px;">Message</h3>
					<p style="white-space: pre-wrap; background: #f9fafb; border-radius: 12px; padding: 16px; color: #374151; border: 1px solid #e5e7eb;">${message}</p>
				</div>
				<p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
					This message was submitted via the contact form on sevenseed.eu
				</p>
			</div>
		`;

		const textContent = `New contact form submission\n\nFull name: ${fullName}\nEmail: ${email}\n${organisation ? `Organisation: ${organisation}\n` : ""}\nMessage:\n${message}\n\nSent from sevenseed.eu`;

		const payload = {
			personalizations: [
				{
					to: [{ email: CONTACT_RECIPIENT }],
					subject: `Contact form: ${fullName}`,
				},
			],
			from: { email: CONTACT_FROM, name: "Seven Seed" },
			reply_to: { email, name: fullName },
			content: [
				{ type: "text/plain", value: textContent },
				{ type: "text/html", value: htmlContent },
			],
		};

		const emailResponse = await fetch(SENDGRID_ENDPOINT, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${SENDGRID_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		if (!emailResponse.ok) {
			const errorBody = await emailResponse.text();
			console.error("SendGrid error:", errorBody);
			return NextResponse.json(
				{
					error: "We could not send your message. Please try again later.",
				},
				{ status: 502 },
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Contact form error", error);
		return NextResponse.json(
			{ error: "Something went wrong. Please try again later." },
			{ status: 500 },
		);
	}
}
