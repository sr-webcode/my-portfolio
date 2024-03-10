import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

import Image from './Image';

interface ICarouselProps {
	height: number;
	imageSources: string[];
}

type TReactChild = React.ReactElement | string | number;

const Carousel = ({ height, imageSources }: ICarouselProps) => {
	const handleRenderThumbs = (children: TReactChild[]) => children;
	return (
		<ResponsiveCarousel emulateTouch renderThumbs={handleRenderThumbs}>
			{imageSources.map((src, idx) => (
				<Box key={idx} width="100%" maxHeight={height}>
					<Image src={src} />
				</Box>
			))}
		</ResponsiveCarousel>
	);
};

export default Carousel;
