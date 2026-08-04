/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/qr/card",
				destination: "/?utm_source=business-card&utm_medium=qrcode",
				permanent: false,
			},
			{
				source: "/mentors",
				destination: "/",
				permanent: true,
			},
			{
				source: "/funding",
				destination: "/",
				permanent: true,
			},
			{
				source: "/incorporate",
				destination: "/",
				permanent: true,
			},
			{
				source: "/private-challenges",
				destination: "/",
				permanent: true,
			},
			{
				source: "/program",
				destination: "/",
				permanent: true,
			},
			{
				source: "/apply",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
