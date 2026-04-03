import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
	return (
		<div className="flex flex-col max-w-2xl mx-auto gap-y-4 px-4 mb-8">
			<div className="space-y-2">
				<h2 className="font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-center">
					Get in touch
				</h2>
				<p className="leading-7 text-gray-600 text-lg text-balance sm:text-center">
					Have questions about Seven Seed, our initiatives, or potential
					collaborations? Reach out and we&apos;ll respond within 1 business
					day.
				</p>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
