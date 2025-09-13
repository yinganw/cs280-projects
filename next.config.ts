import type { NextConfig } from 'next'

// const isProd = process.env.NODE_ENV === 'production'
// const repo = 'yinganw.github.io' // 🔁 Replace with your GitHub username

const nextConfig: NextConfig = {
  // assetPrefix: isProd ? `/${repo}/` : '',
  // basePath: isProd ? `/${repo}` : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig