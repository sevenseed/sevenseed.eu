import { organization, type OrganizationInput, website } from "@ingram-tech/nk-seo";
import { JsonLd } from "@ingram-tech/nk-seo/components";

import HeroSection from "@/components/sections/HeroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import { SITE_URL } from "@/constants";
import { pageMetadata } from "@/lib/metadata";

const DESCRIPTION =
	"Seven Seed is a Brussels-based think tank for European startups, focused on Artificial Intelligence and Defence.";

export const metadata = pageMetadata({
	title: "Seven Seed - Think Tank for European Startups",
	description: DESCRIPTION,
	path: "/",
});

const orgInput: OrganizationInput = {
	name: "Seven Seed",
	url: SITE_URL,
	logo: `${SITE_URL}/images/sevenseed-og.png`,
	description: DESCRIPTION,
	sameAs: [
		"https://www.linkedin.com/company/seven-seed",
		"https://github.com/sevenseed",
	],
};

export default function Home() {
	return (
		<main className="min-h-screen bg-white mx-auto">
			<JsonLd
				data={[
					organization(orgInput),
					website({
						name: "Seven Seed",
						url: SITE_URL,
						publisher: orgInput,
					}),
				]}
			/>
			<HeroSection />
			<PillarsSection />
		</main>
	);
}
