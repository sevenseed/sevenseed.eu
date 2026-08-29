import { createSitemap } from "@ingram-tech/nk-seo";

import { SITE_URL } from "@/constants";

const routes = ["/", "/about", "/contact", "/privacy"];

export default () => createSitemap({ baseUrl: SITE_URL, routes });
