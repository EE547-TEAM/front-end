const PROXY = process.env.PROXY

console.log(PROXY);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://${PROXY}/:path*` // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
