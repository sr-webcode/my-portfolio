import {
	Card,
	Text,
	Heading,
	VStack,
	CardBody,
	HStack,
	Box,
	Image,
	Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { PAGE_URLS } from '@/routes';
import { projects } from '@/constants';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Projects = () => {
	return (
		<VStack width="100%" alignItems="flex-start" spacing={7}>
			<Heading size="lg">Projects</Heading>
			{projects.map(({ id, name, description, url }, idx) => {
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
								<Box width="100%" maxWidth={200}>
									<Image
										alt={name}
										rounded={7}
										fallbackSrc="https://via.placeholder.com/200"
									/>
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
