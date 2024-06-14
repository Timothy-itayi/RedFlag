// next.config.js

const path = require('path');
const fs = require('fs');

// Function to recursively find all directories under a given directory
const getAllDirs = (baseDir) => {
  const dirs = [];
  
  const findDirs = (currentDir) => {
    const files = fs.readdirSync(currentDir, { withFileTypes: true });
    files.forEach((file) => {
      if (file.isDirectory()) {
        const dirPath = path.join(currentDir, file.name);
        dirs.push(path.relative(baseDir, dirPath)); // Store relative path
        findDirs(dirPath); // Recursive call for subdirectories
      }
    });
  };

  findDirs(baseDir);
  return dirs;
};

// Assuming your images are under the 'public' directory
const publicDir = 'public';
const imagePaths = getAllDirs(publicDir);

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['formula1heritage.cc'],
    path: imagePaths, // Array of all directories under 'public'
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
