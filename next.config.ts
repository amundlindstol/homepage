import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		viewTransition: true,
	},
	images: {
		remotePatterns: [new URL(`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`)],
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if the project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
