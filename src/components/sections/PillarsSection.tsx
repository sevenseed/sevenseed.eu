import Image from "next/image";

const pillars = [
	{
		name: "Seven Capital",
		description:
			"A dual-use investment fund backing startups at the intersection of commercial technology and defence applications.",
		href: "https://sevencapital.vc",
		logo: "/images/logo/sevencapital.svg",
		svg: true,
	},
	{
		name: "Seven Camp",
		description:
			"A startup accelerator program helping early-stage companies scale through mentorship, resources, and network access.",
		href: "https://seven.camp",
		logo: "/images/logo/sevencamp.svg",
		svg: true,
	},
	{
		name: "Seven Events",
		description:
			"A corporate events producer bringing together founders, investors, and policymakers at high-impact gatherings.",
		href: "https://sevenevents.brussels",
		logo: "/images/logo/sevenevents.png",
		svg: false,
	},
];

const projects = [
	{
		name: "BelDoc",
		href: "https://beldoc.be",
		logo: "/images/logo/beldoc.svg",
		svg: true,
	},
	{
		name: "AI in Defence Summit",
		href: "https://aidefencesummit.eu",
		logo: "/images/logo/aidefencesummit.svg",
		svg: true,
	},
];

export default function PillarsSection() {
	return (
		<section className="py-24 px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">
				<div className="text-center mb-16">
					<h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Our Pillars
					</h2>
					<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
						Three complementary initiatives working together to build a
						stronger European startup ecosystem.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{pillars.map((pillar) => (
						<a
							key={pillar.name}
							href={pillar.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
						>
							<div className="flex items-center gap-4 mb-4 h-10">
								<Image
									src={pillar.logo}
									alt={pillar.name}
									width={160}
									height={40}
									className="h-8 w-auto"
									unoptimized={pillar.svg}
								/>
							</div>
							<p className="text-gray-600 text-sm leading-6 flex-1">
								{pillar.description}
							</p>
							<span className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
								Visit website &rarr;
							</span>
						</a>
					))}
				</div>

				{/* Projects */}
				<div className="mt-24">
					<div className="flex items-center justify-center gap-x-6">
						<span className="text-xs font-medium uppercase tracking-wider text-gray-400">
							Projects
						</span>
						{projects.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="opacity-50 hover:opacity-100 transition-opacity duration-200"
							>
								<Image
									src={item.logo}
									alt={item.name}
									width={100}
									height={28}
									className="h-6 w-auto"
									unoptimized={item.svg}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
