/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  // Add this section for path aliases
  experimental: {
    appDir: false,
  },
  compiler: {
    styledComponents: true,
  },
  // Path aliases
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}
