/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
    domains: ['randomuser.me','startup-template-sage.vercel.app'],
  },
  
};
module.exports = nextConfig
