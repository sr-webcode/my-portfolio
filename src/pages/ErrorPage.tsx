import { PAGE_URLS } from '@/routes';
import { Button, Center, VStack } from '@chakra-ui/react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error: any = useRouteError();
	const nav = useNavigate();
	return (
		<Center width="100%" height="100vh">
			<VStack>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error?.statusText || error?.message}</i>
				</p>
				<Button onClick={() => nav(PAGE_URLS.HOME.path)}>Back to Home</Button>
			</VStack>
		</Center>
	);
};

export default ErrorPage;
