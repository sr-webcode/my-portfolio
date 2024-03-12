import {
	Box,
	HStack,
	Heading,
	Stack,
	Text,
	Tooltip,
	VStack
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/mailto';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';

import ContactForm from '@/components/custom/Contact/ContactForm';
import { SocialIconProps } from 'react-social-icons';
import { ChatIcon } from '@chakra-ui/icons';

const socialIconDefaultProps: SocialIconProps = {
	style: { width: 36, height: 36 }
};

const Contact = () => {
	return (
		<VStack alignItems="flex-start">
			<Heading size="lg">Contact</Heading>
			<Stack
				spacing={7}
				alignItems={'flex-start'}
				justifyContent={'space-between'}
				direction={{ base: 'column', md: 'row' }}
			>
				<VStack
					spacing={7}
					alignItems="flex-start"
					width={{ base: '100%', md: '55%' }}
				>
					<Text>
						Looking to connect and start a conversation? Simply fill out the
						form, and let's kickstart our journey together. Whether it's about
						collaboration, projects, or just a friendly chat, I'm here and eager
						to hear from you!
					</Text>
					<Box width="100%" display={{ base: 'block', md: 'none' }}>
						<ContactForm />
					</Box>
					<VStack alignItems={'flex-start'} spacing={4} width={'100%'}>
						<Text>or simply reach me out through:</Text>
						<HStack alignItems="flex-start" spacing={2}>
							<Tooltip hasArrow placement="top" label="Gmail">
								<SocialIcon
									bgColor="#c71610"
									url="mailto:sr.webcode@gmail.com"
									{...socialIconDefaultProps}
								/>
							</Tooltip>
							<Tooltip hasArrow placement="top" label="Linkedin">
								<SocialIcon
									url="https://www.linkedin.com/in/sean-rojas-a2b7a0245/"
									{...socialIconDefaultProps}
								/>
							</Tooltip>
							<Tooltip hasArrow placement="top" label="Github">
								<SocialIcon
									url="https://github.com/sr-webcode"
									{...socialIconDefaultProps}
								/>
							</Tooltip>
						</HStack>
						<HStack mt={8} display={{ base: 'none', md: 'block' }}>
							<ChatIcon
								color="teal"
								opacity={0.2}
								boxSize={100}
								transform={'translateX(46px) translateY(80px) rotate(20deg)'}
							/>
							<ChatIcon
								color="teal"
								opacity={0.2}
								boxSize={200}
								transform={'translateX(60px) scaleX(-1) rotate(20deg)'}
							/>
						</HStack>
					</VStack>
				</VStack>
				<VStack width={400} display={{ base: 'none', md: 'block' }}>
					<ContactForm />
				</VStack>
			</Stack>
		</VStack>
	);
};

export default Contact;
