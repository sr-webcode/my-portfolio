import {
	Card,
	Text,
	Heading,
	VStack,
	CardBody,
	HStack,
	Box,
	Image,
	Button,
	FlexProps
} from '@chakra-ui/react';

import { projects } from '@/constants';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Projects = () => {
	return (
		<VStack width="100%" alignItems="flex-start" spacing={7}>
			<Heading size="lg">Projects</Heading>
			{projects.map(({ name, description, url }, idx) => {
				return (
					<Card key={name} variant="filled" size="lg" width="100%" h="100%">
						<CardBody>
							<HStack spacing={7} alignItems="flex-start">
								<VStack alignItems="flex-start" spacing={4}>
									<Heading size="md">{name}</Heading>
									<Text>{description}</Text>
									<HStack>
										<Button>View Details</Button>
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
