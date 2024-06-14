interface ImageLoaderProps {
    src: string;
}

const  ImageLoader = ({ src }: ImageLoaderProps): string => {

    return `https://formula1heritage.cc/${src}`;
}

export default ImageLoader;

