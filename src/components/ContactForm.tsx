"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
	fullName: string;
	email: string;
	organisation: string;
	message: string;
};

const initialFormState: FormState = {
	fullName: "",
	email: "",
	organisation: "",
	message: "",
};

const inputClassName =
	"rounded-xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-slate-100";

export default function ContactForm() {
	const [form, setForm] = useState<FormState>(initialFormState);
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
		"idle",
	);
	const [error, setError] = useState<string | null>(null);

	const handleChange =
		(field: keyof FormState) =>
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setForm((previous) => ({
				...previous,
				[field]: event.target.value,
			}));
		};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (status === "submitting") {
			return;
		}

		setStatus("submitting");
		setError(null);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (!response.ok) {
				const data = await response.json().catch(() => ({}));
				const message =
					"error" in data
						? data.error
						: "Something went wrong. Please try again.";
				throw new Error(message);
			}

			setStatus("success");
		} catch (submissionError) {
			setStatus("error");
			setError(
				submissionError instanceof Error
					? submissionError.message
					: "We could not send your message. Please try again later.",
			);
		}
	};

	if (status === "success") {
		return (
			<div className="rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 p-8 text-center">
				<h4 className="text-xl font-semibold text-slate-900">
					Message received!
				</h4>
				<p className="mt-3 text-base text-slate-600">
					We&apos;ll get back to you within 1 business day.
				</p>
			</div>
		);
	}

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<label
					className="flex flex-col gap-2 text-sm text-slate-700"
					htmlFor="contact-full-name"
				>
					<span className="font-semibold">Full name</span>
					<input
						required
						id="contact-full-name"
						type="text"
						autoComplete="name"
						value={form.fullName}
						onChange={handleChange("fullName")}
						className={inputClassName}
						disabled={status === "submitting"}
					/>
				</label>

				<label
					className="flex flex-col gap-2 text-sm text-slate-700"
					htmlFor="contact-email"
				>
					<span className="font-semibold">Email</span>
					<input
						required
						id="contact-email"
						type="email"
						autoComplete="email"
						value={form.email}
						onChange={handleChange("email")}
						className={inputClassName}
						disabled={status === "submitting"}
					/>
				</label>
			</div>

			<label
				className="flex flex-col gap-2 text-sm text-slate-700"
				htmlFor="contact-organisation"
			>
				<span className="font-semibold">Organisation</span>
				<input
					id="contact-organisation"
					type="text"
					autoComplete="organization"
					value={form.organisation}
					onChange={handleChange("organisation")}
					className={inputClassName}
					disabled={status === "submitting"}
				/>
			</label>

			<label
				className="flex flex-col gap-2 text-sm text-slate-700"
				htmlFor="contact-message"
			>
				<span className="font-semibold">Message</span>
				<textarea
					required
					id="contact-message"
					rows={4}
					placeholder="How can we help?"
					value={form.message}
					onChange={handleChange("message")}
					className={inputClassName}
					disabled={status === "submitting"}
				/>
			</label>

			{error && <p className="text-sm font-medium text-red-600">{error}</p>}

			<button
				type="submit"
				className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
				disabled={status === "submitting"}
			>
				{status === "submitting" ? "Sending…" : "Send message"}
			</button>
		</form>
	);
}
