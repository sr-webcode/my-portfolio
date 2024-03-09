import { Link } from 'react-router-dom';

import { PAGE_URLS } from '../../routes';
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
			<Button variant="text" padding={0} as={Link} to="/">
				{'<sean.rojas />'}
			</Button>
			<HStack>
				<Button as={Link} to={PAGE_URLS.PROJECTS} variant="ghost">
					Projects
				</Button>
				<Button as={Link} to={PAGE_URLS.CONTACT} variant="ghost">
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
