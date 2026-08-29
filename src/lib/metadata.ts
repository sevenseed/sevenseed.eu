import { createMetadata } from "@ingram-tech/nk-seo";

import { SITE_URL } from "@/constants";

/**
 * Site-wide metadata factory. `pageMetadata.root()` powers the root layout
 * (metadataBase + default title); `pageMetadata({ title, description, path })`
 * builds a page's canonical + OpenGraph + Twitter card.
 */
export const pageMetadata = createMetadata({
	baseUrl: SITE_URL,
	siteName: "Seven Seed",
	defaultImage: "/images/sevenseed-og.png",
	locale: "en_US",
});
