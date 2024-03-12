import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<Container maxW="container.lg" px={{ base: 8, md: 4 }}>
			{children}
		</Container>
	);
};

export default AppLayout;
