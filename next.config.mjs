/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverExternalPackages: ['mongodb'],
    turbopack: {
      root: '/Users/travix/Downloads/MunchBook'
    }
  }
}

export default nextConfig
