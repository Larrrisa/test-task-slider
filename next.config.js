/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "celes.club",
        port: "",
        pathname: "/uploads/posts/2021-12/**",
      },
    ],
  },
};
