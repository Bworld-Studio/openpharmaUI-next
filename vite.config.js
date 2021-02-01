import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default {
	server: {
		host: 'localhost',
		port: 8080,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:3000',
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/api/, '')
		// 	}
		// }
	},
	alias: {
		'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
	},
	plugins: [
		vue(),
		// vueI18n({
		// 	// include: path.resolve(__dirname, './locales/**')
		// })
	]
}