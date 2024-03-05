import myProfileAvatar from '../../assets/profilePicture.png';
import { Avatar, Button, Text, VStack } from '@chakra-ui/react';

const HeroContent = () => {
	return (
		<VStack width="full" spacing={6}>
			<VStack>
				<Avatar size="2xl" name="Sean Rojas" src={myProfileAvatar} />
				<Text fontSize="3xl">Hi, I'm Sean</Text>
			</VStack>
			<Text fontSize={48} maxW="2xl" textAlign="center" lineHeight={1.3}>
				Building Engaging User Experiences with Expertise in Front-End
				Development
			</Text>
			<Text maxW="lg" textAlign="center" lineHeight={1.8}>
				a front-end developer based in the Philippines, Passionate about
				Building User-Centric Experiences.
			</Text>
			<Button rounded={24} size="lg" p={7}  fontSize={16}>
				Connect with me
			</Button>
		</VStack>
	);
};

export default HeroContent;
