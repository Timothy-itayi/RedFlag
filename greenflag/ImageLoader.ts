const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface ImageLoaderProps {
  src: string;
}

const ImageLoader = ({ src }: ImageLoaderProps): string => {
  
  const imageUrl = `${basePath}/${src}`;
  console.log('Generated URL:', imageUrl); // Debugging line
  return imageUrl;
};


export default ImageLoader;
