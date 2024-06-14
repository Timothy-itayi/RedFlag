/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['formula1heritage.cc'], // Ensure your domain is listed here for Next.js to allow image loading
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/tracks`, // Adjust this path based on your actual asset structure
    loader: 'custom',
    loaderFile: './ImageLoader.ts',
  },
  experimental: {
    appDir: true,
  },
  distDir: 'out',
  output: 'export',
};

module.exports = nextConfig;
