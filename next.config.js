const PROXY = process.env

console.log('base proxy', PROXY);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${PROXY}/:path*` // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
