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
  // Removed experimental keys that are not recognized
  // experimental: {
  //   serverExternalPackages: ['mongodb'],  // Not supported
  //   turbopack: {                          // Not supported
  //     root: '/Users/travix/Downloads/MunchBook'
  //   }
  // }
}

export default nextConfig