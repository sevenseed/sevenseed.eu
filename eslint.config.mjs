import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
	{
		extends: [...nextCoreWebVitals],
		rules: {
			"@next/next/no-html-link-for-pages": "off",
		},
	},
]);
