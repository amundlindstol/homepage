import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		viewTransition: true,
	},
	images: {
		remotePatterns: [new URL(`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`)],
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	typescript: {
		ignoreBuildErrors: false,
	},
}

export default nextConfig
