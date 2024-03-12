import { Box, Center, Spinner, VStack } from '@chakra-ui/react';
import {
	createBrowserRouter,
	Outlet,
	ScrollRestoration
} from 'react-router-dom';

import ErrorPage from '@pages/ErrorPage';
import AppLayout from '@components/Layout';
import Navigation from '@components/Navigation';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@pages/Home'));
const Contact = lazy(() => import('@pages/Contact'));
const Projects = lazy(() => import('@pages/Projects'));
const ProjectDetail = lazy(() => import('@pages/ProjectDetail'));

type TRoutes = 'HOME' | 'PROJECTS' | 'CONTACT';
type TRouteDetails = {
	[key in TRoutes]: {
		path: string;
		label: string;
	};
};

export const PAGE_URLS: TRouteDetails = {
	HOME: { label: 'Home', path: '/' },
	PROJECTS: { label: 'Projects', path: '/projects' },
	CONTACT: { label: 'Contact', path: '/contact' }
};

const RootElement = () => {
	return (
		<AppLayout>
			<VStack spacing={24} sx={{ pt: 4, pb: 8, alignItems: 'flex-start' }}>
				<Navigation />
				<Outlet />
				<ScrollRestoration />
			</VStack>
		</AppLayout>
	);
};
const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense
				fallback={
					<Box position="fixed" width="100%" height={'100vh'}>
						<Center height="100%">
							<Spinner
								size="xl"
								color="teal"
								speed="0.65s"
								thickness="4px"
								emptyColor="gray.200"
							/>
						</Center>
					</Box>
				}
			>
				<RootElement />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				element: <Home />,
				index: true
			},
			{
				path: 'projects',
				element: <Projects />
			},
			{
				path: 'projects/:id',
				element: <ProjectDetail />
			},
			{
				path: 'contact',
				element: <Contact />
			}
		]
	}
]);

export default router;
