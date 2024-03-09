import { extendTheme } from '@chakra-ui/react';

const BASE_BUTTON_PROPS = {
	padding: 6,
	rounded: 12,
	size: 'lg'
};

const theme = extendTheme({
	fonts: {
		body: "'Roboto', sans-serif",
		heading: "'Montserrat', sans-serif"
	},
	components: {
		Button: {
			defaultProps: {
				colorScheme: 'teal'
			},
			variants: {
				solid: BASE_BUTTON_PROPS,
				outline: BASE_BUTTON_PROPS,
				ghost: () => ({
					color: 'black',
					size: 'md',
					'&:hover': {
						bgColor: 'gray.100'
					}
				})
			}
		}
	}
});

export default theme;
