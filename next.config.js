/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/agents',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
