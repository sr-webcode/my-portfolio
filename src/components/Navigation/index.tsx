import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import NavigationMenu from './NavigationMenu';
import NavigationMenuSticky from './NavigationMenuSticky';

let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

const Navigation = () => {
	const [isStickyNavVisible, toggleStickyNavVisible] = useState(false);
	const { scrollY } = useScroll();

	const handleScroll = (latest: number) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			if (latest > 72) {
				toggleStickyNavVisible(true);
			} else {
				toggleStickyNavVisible(false);
			}
		}, 500);
	};

	useMotionValueEvent(scrollY, 'change', handleScroll);

	return (
		<>
			<NavigationMenu />
			<NavigationMenuSticky isStickyNavVisible={isStickyNavVisible} />
		</>
	);
};

export default Navigation;
