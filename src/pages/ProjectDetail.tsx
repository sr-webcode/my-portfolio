import { useParams, Navigate, Link } from 'react-router-dom';
import {
	Box,
	Button,
	Center,
	HStack,
	Heading,
	Image,
	Stack,
	Text,
	Wrap,
	WrapItem
} from '@chakra-ui/react';

import { PAGE_URLS } from '@/routes';
import { projects } from '@/constants';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';

interface IProjectDetailItems {
	title: string;
	content: string;
}

const ProjectDetailItems = ({ title, content }: IProjectDetailItems) => (
	<Stack>
		<Heading size="sm">{title}</Heading>
		<Text>{content}</Text>
	</Stack>
);

const ProjectDetail = () => {
	const { id: paramId } = useParams<{ id: string }>();
	const project = projects.find(({ id }) => id === paramId);
	if (!project) return <Navigate to="/404" />;

	const { name, platForms, role, contributions, url } = project;

	return (
		<Stack width="full" spacing={7} alignItems="flex-start">
			<Heading size="lg">{name}</Heading>
			<HStack alignItems="flex-start" justifyContent="space-between">
				<Stack spacing={6} alignItems="flex-start" width="60%">
					<ProjectDetailItems title="Platform" content={platForms.toString()} />
					<ProjectDetailItems
						title="Role"
						content={role ?? 'Front-end Developer'}
					/>
					<ProjectDetailItems
						title="Project contributions"
						content={contributions}
					/>
					<Button
						as="a"
						href={url}
						variant="outline"
						rightIcon={<ExternalLinkIcon />}
					>
						View Site
					</Button>
				</Stack>
				<Box width="100%" maxWidth={320}>
					<Image alt={name} fallbackSrc="https://via.placeholder.com/400" />
				</Box>
			</HStack>
			<Button
				mt={6}
				as={Link}
				variant="link"
				to={PAGE_URLS.PROJECTS}
				leftIcon={<ArrowBackIcon />}
			>
				Back to projects
			</Button>
		</Stack>
	);
};

export default ProjectDetail;
