/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.BASE_URL,
    },
    images: {
        domains: ['formula1heritage.cc'],
        path: `${basePath}/_next/images`,
        loader: "custom",
        loaderFile: "./ImageLoader.ts",
        
    },
    experimental: {
        appDir: true,
    },
    distDir: "out",
    output: "export",
};

export default nextConfig;
