const basePath = process.env.NEXT_PUBLIC_BASE_PATH || 'Image Undefined'; // Fallback to empty string if not defined

interface ImageLoaderProps {
  src: string;
}

const ImageLoader = ({ src }: ImageLoaderProps): string => {
  return `https://formula1heritage.cc${basePath}/${src}`;
};

export default ImageLoader;
