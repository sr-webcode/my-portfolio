import { NavLink } from 'react-router-dom';
import {
	Button,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react';

import { PAGE_URLS } from '../../routes';
import { HamburgerIcon } from '@chakra-ui/icons';

type TNavButtonProps = { toPath: string; label: string };

const NavButton = ({ toPath, label }: TNavButtonProps) => (
	<Button
		as={NavLink}
		to={toPath}
		variant="ghost"
		_activeLink={{ color: 'teal' }}
	>
		{label}
	</Button>
);

const MobileMenu = () => (
	<Menu>
		<MenuButton
			as={IconButton}
			variant={'solid'}
			aria-label="Options"
			icon={<HamburgerIcon />}
			display={{ base: 'inline-flex', md: 'none' }}
		/>
		<MenuList>
			{Object.values(PAGE_URLS).map(({ label, path }) => (
				<MenuItem key={label} as={NavLink} to={path}>
					<Button variant="text" padding={0}>
						{label}
					</Button>
				</MenuItem>
			))}
		</MenuList>
	</Menu>
);

const Navigation = () => {
	return (
		<HStack
			sx={{
				width: '100%',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<Button variant="text" padding={0} as={NavLink} to="/">
				{'<sean.rojas />'}
			</Button>
			<MobileMenu />
			<HStack spacing={0} display={{ base: 'none', md: 'block' }}>
				<MobileMenu />
				{Object.values(PAGE_URLS).map(({ label, path }) => (
					<NavButton key={label} label={label} toPath={path} />
				))}
			</HStack>
		</HStack>
	);
};

export default Navigation;
