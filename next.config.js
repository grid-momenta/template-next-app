/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		// external ts files
		externalDir: true,
	},
};

module.exports = nextConfig;
