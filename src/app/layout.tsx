import clsx from "clsx";
import { Inter, Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { pageMetadata } from "@/lib/metadata";
import "@/styles/tailwind.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
	weight: ["400", "500", "700", "900"],
});

const DESCRIPTION =
	"Seven Seed is a Brussels-based think tank for European startups, focused on Artificial Intelligence and Defence.";

export const metadata = pageMetadata.root({
	title: "Seven Seed - Think Tank for European Startups",
	description: DESCRIPTION,
});

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html
			lang="en"
			className={clsx(
				"h-full scroll-smooth bg-white antialiased",
				inter.variable,
				roboto.variable,
			)}
		>
			<body className="flex min-h-full flex-col font-sans">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
