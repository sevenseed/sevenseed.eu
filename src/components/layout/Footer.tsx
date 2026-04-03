import { GridPattern } from "@/components/GridPattern";
import Image from "next/image";

import logo from "@/images/logo.svg";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function Footer() {
	return (
		<footer className="flex justify-center relative mt-16 pt-32 px-8 pb-8">
			<div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 mask-[linear-gradient(white,transparent)]">
				<GridPattern x="50%" />
			</div>
			<div className="flex flex-col gap-y-12 w-full max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and description column */}
					<div>
						<Link href="/">
							<Image
								className="w-32 mb-4"
								src={logo}
								alt="Seven Seed logo"
								aria-hidden
							/>
						</Link>
						<span className="sr-only">Seven Seed</span>
						<p className="text-sm text-gray-600 mt-2">
							Building the future of European startups.
						</p>
					</div>

					{/* Pages column */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Pages</h3>
						<nav
							className="flex flex-col gap-y-2"
							aria-label="Footer navigation"
						>
							<Link
								href="/about"
								className="text-sm text-gray-600 hover:text-blue-600 duration-200"
							>
								About
							</Link>
							<Link
								href="/contact"
								className="text-sm text-gray-600 hover:text-blue-600 duration-200"
							>
								Contact
							</Link>
							<a
								href="mailto:press@sevenseed.eu"
								className="text-sm text-gray-600 hover:text-blue-600 duration-200"
							>
								Press
							</a>
						</nav>
					</div>

					{/* Partners column */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Partners</h3>
						<nav className="flex flex-col gap-y-2">
							<a
								href="https://eu-inc.org"
								className="text-sm text-gray-600 hover:text-blue-600 duration-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								EU-Inc
							</a>
							<a
								href="https://beci.be"
								className="text-sm text-gray-600 hover:text-blue-600 duration-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								BECI
							</a>
						</nav>
					</div>

					{/* Connect column */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
						<div className="flex gap-x-4">
							<a
								href="https://www.linkedin.com/company/seven-seed"
								className="text-gray-400 hover:text-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">LinkedIn</span>
								<LinkedInIcon />
							</a>
							<a
								href="https://github.com/sevenseed"
								className="text-gray-400 hover:text-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">GitHub</span>
								<GithubIcon />
							</a>
						</div>
					</div>
				</div>
				{/* Bottom section with copyright */}
				<div className="pt-8 border-t border-gray-200">
					<p className="text-xs text-center text-gray-500">
						&copy; {new Date().getUTCFullYear()} Seven Seed SRL. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
