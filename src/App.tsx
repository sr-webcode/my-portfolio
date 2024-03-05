import { VStack } from '@chakra-ui/react';
import HeroContent from './components/HeroContent';
import AppLayout from './components/Layout';
import Navigation from './components/Navigation';

function App() {
	return (
		<AppLayout>
			<VStack spacing={24} sx={{ py: 8, alignItems: 'flex-start' }}>
				<Navigation />
				<HeroContent />
			</VStack>
		</AppLayout>
	);
}

export default App;
