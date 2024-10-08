/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dragonball-api.com",
      },
    ],
    domains: ["e7.pngegg.com"],
  },
};

export default nextConfig;
