import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5050
	},
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@pages': '/src/pages',
			'@assets': '/src/assets',
			'@hooks': '/src/hooks'
		}
	}
});
