import vue from '@vitejs/plugin-vue'

export default {
	server: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: false
			}
		}
	},
	plugins: [
		vue(),
	]
}