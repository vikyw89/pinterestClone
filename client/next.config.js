/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash:true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
}

module.exports = nextConfig