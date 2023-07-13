/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental:{
    scrollRestoration:true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: `${process.env.NEXT_PUBLIC_BASE_PATH}/`,
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['src']
  }
}


module.exports = nextConfig