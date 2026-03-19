/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    SECRET_API_KEY: process.env.SECRET_API_KEY,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "formula1heritage.cc",
      },
    ],
  },
  distDir: "out",
  output: "export",
};

export default nextConfig;
