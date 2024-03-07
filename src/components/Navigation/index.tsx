import { Link } from 'react-router-dom';
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
			<Button variant="text" fontSize="large" padding={0} as={Link} to="/">
				{'<sr.webcode/>'}
			</Button>
			<HStack>
				<Button as={Link} to={'/works'} variant="ghost">
					Works
				</Button>
				<Button as={Link} to={'/contact'} variant="ghost">
					Contact
				</Button>
				<Button as={Link} to={'/works'} variant="ghost">
					Resume
				</Button>
			</HStack>
		</HStack>
	);
};

export default Navigation;
