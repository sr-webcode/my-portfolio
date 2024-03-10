import {
	Image as ChakraImage,
	ImageProps as ChakraImageProps
} from '@chakra-ui/react';

interface ImageProps extends ChakraImageProps {
	imageSize?: number;
}

const Image = ({ imageSize = 200, ...rest }: ImageProps) => {
	return (
		<ChakraImage
			width="100%"
			height="100%"
			objectFit="cover"
			fallbackSrc={`https://via.placeholder.com/${imageSize}`}
			{...rest}
		/>
	);
};

export default Image;
