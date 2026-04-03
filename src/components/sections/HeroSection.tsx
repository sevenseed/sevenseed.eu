import { Button } from "@/components/Button";

export default function HeroSection() {
	return (
		<section className="relative px-6 lg:px-8 pb-24">
			<div className="mx-auto max-w-4xl text-center">
				<h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
					Building the Future of European Startups
				</h1>
				<p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
					Seven Seed is a Brussels-based group dedicated to empowering the
					European startup ecosystem, focused on the technologies that matter
					most:{" "}
					<strong className="text-gray-900">Artificial Intelligence</strong>{" "}
					and <strong className="text-gray-900">Defence</strong>.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Button href="/about" variant="solid" color="blue">
						Learn more
					</Button>
					<Button href="/contact" variant="outline" color="blue">
						Get in touch
					</Button>
				</div>
			</div>
		</section>
	);
}
