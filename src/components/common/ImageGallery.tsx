import { Box } from '@chakra-ui/react';
import ImgGallery, { ReactImageGalleryProps } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageGallery = (props: ReactImageGalleryProps) => {
	return (
		<Box alignSelf={'stretch'}>
			<ImgGallery
				showFullscreenButton={false}
				showPlayButton={false}
				{...props}
			/>
		</Box>
	);
};

export default ImageGallery;
