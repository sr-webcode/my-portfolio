import {  Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<Container maxW="container.lg">
			{children}
		</Container>
	);
};

export default AppLayout;
