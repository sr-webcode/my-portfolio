import {
	Card,
	Text,
	Heading,
	VStack,
	CardBody,
	HStack,
	Box,
	Button,
	Stack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { PAGE_URLS } from '@/routes';
import { projects } from '@/projectData';
import Image from '@/components/common/Image';
import PageTransition from '@/components/common/PageTransition';

const Projects = () => {
	return (
		<PageTransition>
			<VStack width="100%" alignItems="flex-start" spacing={7}>
				<Heading size="lg">Projects</Heading>
				{projects.map(({ id, name, description, url, assets }, idx) => {
					const cardVariant = idx % 2 !== 0 ? 'filled' : 'outline';
					const projectURL = `${PAGE_URLS.PROJECTS.path}/${id}`;
					return (
						<Card size="lg" key={id} width="100%" variant={cardVariant}>
							<CardBody>
								<Stack
									spacing={7}
									alignItems="flex-start"
									direction={{ base: 'column-reverse', md: 'row' }}
								>
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
									<Box
										boxShadow="lg"
										width={'100%'}
										maxWidth={{ md: 200 }}
										minWidth={{ md: 200 }}
										height={{ base: 'auto', md: 200 }}
									>
										<Image alt={name} rounded={8} src={assets?.main} />
									</Box>
								</Stack>
							</CardBody>
						</Card>
					);
				})}
			</VStack>
		</PageTransition>
	);
};

export default Projects;
