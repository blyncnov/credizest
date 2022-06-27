/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com", "uploads-ssl.webflow.com"],
  },
};

module.exports = nextConfig;
