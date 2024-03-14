import { PAGE_URLS } from '@/routes';
import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const nav = useNavigate();
	return (
		<Center width="100%">
			<VStack spacing={8}>
				<Heading variant={'h1'}>404: Page not found</Heading>
				<p>Sorry, an unexpected error has occurred.</p>
				<Button onClick={() => nav(PAGE_URLS.HOME.path)}>Back to Home</Button>
			</VStack>
		</Center>
	);
};

export default ErrorPage;
