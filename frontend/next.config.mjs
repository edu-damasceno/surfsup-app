/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost:1337'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "artistic-card-296c81d2a1.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ],
  },
};

export default nextConfig;