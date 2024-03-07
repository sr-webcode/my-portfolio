import { VStack } from '@chakra-ui/react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Works from './pages/Works';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './components/Layout';
import Navigation from './components/Navigation';

const RootElement = () => (
	<AppLayout>
		<VStack spacing={24} sx={{ py: 8, alignItems: 'flex-start' }}>
			<Navigation />
			<Outlet />
		</VStack>
	</AppLayout>
);
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootElement />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <Home />,
				index: true
			},
			{
				path: 'works',
				element: <Works />
			}
		]
	}
]);

export default router;
