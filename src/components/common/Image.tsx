import {
	Box,
	Skeleton,
	Image as ChakraImage,
	ImageProps as ChakraImageProps,
	SkeletonProps
} from '@chakra-ui/react';
22;

interface ImageProps extends ChakraImageProps {
	skeletonProps?: SkeletonProps;
}

const Image = ({ skeletonProps, ...props }: ImageProps) => {
	return (
		<ChakraImage
			width="100%"
			height="100%"
			objectFit="cover"
			fallback={<Skeleton width={200} height={200} {...skeletonProps} />}
			{...props}
		/>
	);
};

export default Image;
