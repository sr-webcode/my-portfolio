import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const PageTransition = ({ children }: PropsWithChildren) => {
	return (
		<motion.div
			style={{ width: '100%' }}
			initial={{ translateY: '200px', opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			exit={{ opacity: 0, translateY: '200px' }}
			transition={{
				ease: 'easeInOut',
				opacity: { duration: 0.2 },
				translate: { duration: 1.2, delay: 0.2 }
			}}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
