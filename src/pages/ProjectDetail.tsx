import { useParams, Navigate, Link } from 'react-router-dom';
import { Button, Heading, Stack, Text } from '@chakra-ui/react';

import { PAGE_URLS } from '@/routes';
import { projects } from '@/projectData';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Carousel from '@/components/common/Carousel';

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
	const { id, name, platForms, role, contributions, url, assets } = project;

	return (
		<Stack key={id} width="full" spacing={7} alignItems="flex-start">
			<Heading size="lg">{name}</Heading>
			<Stack spacing={6} alignItems="flex-start">
				<Carousel height={460} imageSources={assets?.screenshots ?? []} />
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
			<Button
				mt={6}
				as={Link}
				variant="link"
				to={PAGE_URLS.PROJECTS.path}
				leftIcon={<ArrowBackIcon />}
			>
				Back to projects
			</Button>
		</Stack>
	);
};

export default ProjectDetail;
