// next.config.mjs

import path from 'path';
import { promises as fs } from 'fs'; // Using fs/promises for async operations

// Function to recursively find all directories under a given directory
const getAllDirs = async (baseDir) => {
  const dirs = [];

  const findDirs = async (currentDir) => {
    const files = await fs.readdir(currentDir, { withFileTypes: true });
    for (const file of files) {
      if (file.isDirectory()) {
        const dirPath = path.join(currentDir, file.name);
        dirs.push(path.relative(baseDir, dirPath)); // Store relative path
        await findDirs(dirPath); // Recursive call for subdirectories
      }
    }
  };

  await findDirs(baseDir);
  return dirs;
};

// Assuming your images are under the 'public' directory
const publicDir = 'public';
let imagePaths = [];
getAllDirs(publicDir).then((dirs) => {
  imagePaths = dirs;

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

  export default nextConfig; // Export the configuration object
});
