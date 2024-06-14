// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['formula1heritage.cc'],
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/tracks`,
    loader: 'custom',
    loaderFile: './ImageLoader.ts',
  },
  experimental: {
    appDir: true,
  },
  distDir: 'out',
  output: 'export',
};

export default nextConfig;
