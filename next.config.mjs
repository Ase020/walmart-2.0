/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "walmartimages.com",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "content.syndigo.com",
      },
    ],
  },
};

export default nextConfig;
