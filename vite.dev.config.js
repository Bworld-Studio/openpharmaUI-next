import vue from '@vitejs/plugin-vue'
import fs from 'fs'

// const options = {
// 	key: fs.readFileSync('./key.pem'),
// 	cert: fs.readFileSync('./cert.pem'),
// 	passphrase: 'metal01'
// }

export default {
	server: {
		// https: options,
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