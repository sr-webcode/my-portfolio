import { useParams, Navigate, Link } from 'react-router-dom';
import {
	Box,
	Button,
	Heading,
	Stack,
	Text,
	TextProps,
	useBreakpointValue
} from '@chakra-ui/react';

import { PAGE_URLS } from '@/routes';
import { projects } from '@/projectData';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import ImageGallery from '@/components/common/ImageGallery';
import { ReactImageGalleryItem } from 'react-image-gallery';
import Image from '@/components/common/Image';
import PageTransition from '@/components/common/PageTransition';

interface IProjectDetailItems {
	title: string;
	content: string;
	contentProps?: TextProps;
}

const ProjectDetailItems = ({
	title,
	content,
	contentProps
}: IProjectDetailItems) => (
	<Stack>
		<Heading size="sm">{title}</Heading>
		<Text {...contentProps}>{content}</Text>
	</Stack>
);

const ProjectDetail = () => {
	const { id: paramId } = useParams<{ id: string }>();
	const project = projects.find(({ id }) => id === paramId);
	const showFullScreen = useBreakpointValue({ base: false, md: true });

	if (!project) return <Navigate to="/404" />;

	const { id, name, platForms, role, contributions, url, assets, tools } =
		project;
	const images: ReactImageGalleryItem[] =
		assets?.screenshots.map((item) => ({
			original: item,
			thumbnail: item
		})) ?? [];

	const hasTools = tools && tools.length > 0;

	return (
		<PageTransition>
			<Stack key={id} width="full" spacing={7} alignItems="flex-start">
				<Heading size="lg">{name}</Heading>
				<Stack spacing={6} alignItems="flex-start">
					<ImageGallery
						showIndex
						items={images}
						useBrowserFullscreen={false}
						showFullscreenButton={showFullScreen}
						renderItem={({ original }) => (
							<Box width={'100%'} maxHeight={460} overflow={'hidden'}>
								<Image
									src={original}
									skeletonProps={{
										width: '100%',
										height: { base: 260, md: '100vh' }
									}}
								/>
							</Box>
						)}
						renderThumbInner={({ thumbnail }) => (
							<Box width={'100%'}>
								<Image
									maxH={'40px'}
									src={thumbnail}
									skeletonProps={{
										width: '100%',
										height: '40px'
									}}
								/>
							</Box>
						)}
					/>
					<ProjectDetailItems title="Platform" content={platForms.toString()} />
					<ProjectDetailItems
						title="Role"
						content={role ?? 'Front-end Developer'}
					/>

					{hasTools && (
						<ProjectDetailItems
							title="Tools"
							content={tools.map((tool) => tool.toLowerCase()).join(', ')}
							contentProps={{ textTransform: 'capitalize' }}
						/>
					)}
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
					preventScrollReset
				>
					Back to projects
				</Button>
			</Stack>
		</PageTransition>
	);
};

export default ProjectDetail;
