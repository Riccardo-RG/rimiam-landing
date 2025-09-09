/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better performance
  trailingSlash: true,

  // Configure redirects for SEO
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
