import { VStack } from '@chakra-ui/react';
import {
	createBrowserRouter,
	Outlet,
	ScrollRestoration
} from 'react-router-dom';

import Home from '@pages/Home';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import ErrorPage from '@pages/ErrorPage';
import AppLayout from '@components/Layout';
import Navigation from '@components/Navigation';

export const PAGE_URLS = {
	HOME: '/',
	PROJECTS: '/projects',
	PROJECT_DETAIL: (id: string) => `/projects/${id}`,
	CONTACT: '/contact'
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
		element: <RootElement />,
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
				element: <div />
			}
		]
	}
]);

export default router;
