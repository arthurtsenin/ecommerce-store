/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLICK_API_URL: process.env.NEXT_PUBLICK_API_URL,
  },
};

module.exports = nextConfig;
