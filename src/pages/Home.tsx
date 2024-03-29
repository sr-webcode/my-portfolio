import { useNavigate } from 'react-router-dom';
import { Text, Avatar, Button, Heading, VStack, Stack } from '@chakra-ui/react';
import resumePdfLink from '@assets/docs/resume.pdf';

import myProfileAvatar from '../assets/profilePicture.png';
import { PAGE_URLS } from '../routes';
import PageTransition from '@/components/common/PageTransition';

const Home = () => {
	const navigate = useNavigate();
	const handleDownloadResume = () => window.open(resumePdfLink, '_blank');

	return (
		<PageTransition>
			<VStack width="full" spacing={6}>
				<VStack>
					<Avatar size="2xl" src={myProfileAvatar} bg="teal" />
					<Text fontSize="3xl">Hi, I'm Sean</Text>
				</VStack>
				<Heading maxW="2xl" textAlign="center" lineHeight={1.3}>
					Building Engaging User Experiences with Expertise in Front-End
					Development
				</Heading>
				<Text maxW="lg" textAlign="center" lineHeight={1.8}>
					a front-end developer based in the Philippines, Passionate about
					Building User-Centric Experiences.
				</Text>
				<Stack direction={'row'}>
					<Button onClick={() => navigate(PAGE_URLS.PROJECTS.path)}>
						View Projects
					</Button>
					<Button variant="outline" onClick={handleDownloadResume}>
						Download CV
					</Button>
				</Stack>
			</VStack>
		</PageTransition>
	);
};

export default Home;
