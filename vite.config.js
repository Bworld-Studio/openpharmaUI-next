import vue from '@vitejs/plugin-vue'

const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

export default {
	server: {
		https: true,
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