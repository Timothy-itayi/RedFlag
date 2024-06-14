const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface ImageLoaderProps {
  src: string;
}

const ImageLoader = ({ src }: ImageLoaderProps): string => {
   console.log('Generated URL:', url); // Debugging line
  return `${basePath}/tracks/${src}`;
  
};

export default ImageLoader;