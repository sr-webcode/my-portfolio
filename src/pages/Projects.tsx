import {
	Card,
	Text,
	Heading,
	VStack,
	CardBody,
	HStack,
	Box,
	Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { PAGE_URLS } from '@/routes';
import { projects } from '@/projectData';
import Image from '@/components/common/Image';

const Projects = () => {
	return (
		<VStack width="100%" alignItems="flex-start" spacing={7}>
			<Heading size="lg">Projects</Heading>
			{projects.map(({ id, name, description, url, assets }, idx) => {
				const cardVariant = idx % 2 !== 0 ? 'filled' : 'outline';
				const projectURL = PAGE_URLS.PROJECT_DETAIL(id);

				return (
					<Card h="100%" size="lg" key={id} width="100%" variant={cardVariant}>
						<CardBody>
							<HStack spacing={7} alignItems="flex-start">
								<VStack alignItems="flex-start" spacing={4}>
									<Heading size="md">{name}</Heading>
									<Text>{description}</Text>
									<HStack>
										<Button as={Link} to={projectURL}>
											View Details
										</Button>
										<Button
											as="a"
											href={url}
											variant="outline"
											rightIcon={<ExternalLinkIcon />}
										>
											View Site
										</Button>
									</HStack>
								</VStack>
								<Box minWidth={200} boxShadow="lg" height={200}>
									<Image rounded={8} alt={name} imageSize={200} src={assets?.main} />
								</Box>
							</HStack>
						</CardBody>
					</Card>
				);
			})}
		</VStack>
	);
};

export default Projects;
