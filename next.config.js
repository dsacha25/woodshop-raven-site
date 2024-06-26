/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
       ssr: true,
       displayName: true, 
       fileName: false,
    },
    styledComponents: true,
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
