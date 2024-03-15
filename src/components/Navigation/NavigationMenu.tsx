import { PAGE_URLS } from '@/routes';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
	StackProps,
	HStack,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

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

const BurgerMenu = () => (
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

const NavigationMenu = ({
	isNavigationSticky = false
}: {
	isNavigationSticky?: boolean;
}) => {
	const stickNavigationProps: StackProps = isNavigationSticky
		? {
				margin: 'auto',
				maxW: 'container.lg',
				px: { base: 8, md: 4 }
		  }
		: {};
	return (
		<HStack
			sx={{
				py: 4,
				width: '100%',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
			{...stickNavigationProps}
		>
			<Button variant="text" padding={0} as={NavLink} to="/">
				{'<Sean.Rojas />'}
			</Button>
			<BurgerMenu />
			<HStack spacing={0} display={{ base: 'none', md: 'block' }}>
				<BurgerMenu />
				{Object.values(PAGE_URLS).map(({ label, path }) => (
					<NavButton key={label} label={label} toPath={path} />
				))}
			</HStack>
		</HStack>
	);
};

export default NavigationMenu;
