import { Center, VStack } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error: any = useRouteError();
	return (
		<Center width="100%" height="100vh">
			<VStack>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error?.statusText || error?.message}</i>
				</p>
			</VStack>
		</Center>
	);
};

export default ErrorPage;
