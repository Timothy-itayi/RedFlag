// next.config.mjs

import path from 'path';
import { promises as fs } from 'fs';

// Function to recursively find all directories under a given directory
const getAllDirs = async (baseDir) => {
  const dirs = [];

  const findDirs = async (currentDir) => {
    const files = await fs.readdir(currentDir, { withFileTypes: true });
    for (const file of files) {
      if (file.isDirectory()) {
        const dirPath = path.join(currentDir, file.name);
        dirs.push(path.relative(baseDir, dirPath));
        await findDirs(dirPath);
      }
    }
  };

  await findDirs(baseDir);
  return dirs;
};

// Assuming your images are under the 'public' directory
const publicDir = 'public';

// Exporting the function as a default export
export default async () => {
  const imagePaths = await getAllDirs(publicDir);

  const nextConfig = {
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.BASE_URL,
      NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
      domains: ['formula1heritage.cc'],
      path: `${publicDir}/*`, // Adjust this pattern based on your actual asset structure
      loader: 'custom',
      loaderFile: './ImageLoader.ts',
    },
    distDir: 'out',
    output: 'export',
  };

  return nextConfig; // Return the configuration object
};
