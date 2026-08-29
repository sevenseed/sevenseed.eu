import { createRobots } from "@ingram-tech/nk-seo";

import { SITE_URL } from "@/constants";

export default () =>
	createRobots({
		baseUrl: SITE_URL,
		isProduction: process.env.VERCEL_ENV === "production",
		disallow: ["/api/"],
	});
