import Container from "@/components/Container";
import EmailLink from "@/components/EmailLink";
import Link from "next/link";

const AboutPage = () => (
	<div className="relative flex flex-auto justify-center px-4 mb-8">
		<Container className="prose">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
				About Seven Seed
			</h1>
			<p>
				Seven Seed is a Brussels-based group dedicated to building the future of
				European startups. We focus on the technologies that matter most —{" "}
				<strong>Artificial Intelligence</strong> and <strong>Defence</strong> —
				working to strengthen the continent&apos;s tech sovereignty and startup
				ecosystem.
			</p>
			<p>
				Founded in 2023, Seven Seed operates at the intersection of
				entrepreneurship, technology, and policy. From our base in Brussels, the
				heart of European decision-making, we connect startups with investors,
				policymakers, and industry leaders to accelerate innovation where
				it&apos;s needed most.
			</p>

			<h2>Our Pillars</h2>
			<p>Seven Seed is the group behind three complementary initiatives:</p>
			<ul>
				<li>
					<Link
						href="https://sevencapital.vc"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-800 font-semibold"
					>
						Seven Capital
					</Link>{" "}
					— A dual-use investment fund backing startups at the intersection of
					commercial technology and defence applications.
				</li>
				<li>
					<Link
						href="https://seven.camp"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-800 font-semibold"
					>
						Seven Camp
					</Link>{" "}
					— A startup accelerator helping early-stage companies scale through
					mentorship, resources, and network access.
				</li>
				<li>
					<Link
						href="https://sevenevents.brussels"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-800 font-semibold"
					>
						Seven Events
					</Link>{" "}
					— A corporate events producer bringing together founders, investors,
					and policymakers at high-impact gatherings.
				</li>
			</ul>

			<p>
				For press inquiries, please email{" "}
				<EmailLink className="text-blue-800" email="press@sevenseed.eu" />.
			</p>
		</Container>
	</div>
);

export default AboutPage;
