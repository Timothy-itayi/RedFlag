

interface ImageLoaderProps {
  src: string;
}

const ImageLoader = ({ src }: ImageLoaderProps): string => {
  // const imageUrl = `${basePath}/${src}`;
  const imageUrl = `${src}`;
  console.log('Generated URL:', imageUrl); // Debugging line
  return imageUrl;
};

export default ImageLoader;
