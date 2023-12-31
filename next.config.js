/** @type {import('next').NextConfig} */
const nextConfig = {
  // remove comment if you want to run as docker image
  // output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehol.co",
      },
      {
        protocol: "https",
        hostname: "camo.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "certificates.cs50.io",
      },
    ],
  },
};

module.exports = nextConfig;
