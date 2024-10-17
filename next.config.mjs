/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gtech.com.tr",
      },
    ],
  },
};

export default nextConfig;
