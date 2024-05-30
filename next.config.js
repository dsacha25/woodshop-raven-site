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
};

module.exports = nextConfig;
