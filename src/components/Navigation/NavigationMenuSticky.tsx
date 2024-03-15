import { AnimatePresence, motion } from 'framer-motion';

import NavigationMenu from './NavigationMenu';

const NavigationMenuSticky = ({
	isStickyNavVisible
}: {
	isStickyNavVisible: boolean;
}) => {
	return (
		<AnimatePresence mode="wait">
			{isStickyNavVisible && (
				<motion.div
					initial={{
						translateY: -72
					}}
					animate={{
						translateY: 0
					}}
					exit={{
						translateY: -72
					}}
					transition={{
						ease: 'easeInOut',
						translate: { duration: 0.1 }
					}}
					style={{
						top: 0,
						left: 0,
						right: 0,
						zIndex: 100,
						width: '100%',
						position: 'fixed',
						backgroundColor: 'white',
						borderBottom: '1px solid gainsboro'
					}}
				>
					<NavigationMenu isNavigationSticky />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default NavigationMenuSticky;
