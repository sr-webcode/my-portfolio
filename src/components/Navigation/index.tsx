import { Button, HStack } from '@chakra-ui/react';

const Navigation = () => {
	return (
		<HStack
			sx={{
				width: '100%',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<Button variant="text" fontSize="large">
				{'<sr.webcode/>'}
			</Button>
			<HStack>
				<Button variant="ghost">Works</Button>
				<Button variant="ghost">Resume</Button>
				<Button variant="ghost">Contact</Button>
			</HStack>
		</HStack>
	);
};

export default Navigation;
