import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './assets/styles/op.css'
import './assets/styles/opwebui.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// i18n
// const loadLocaleMessages = function () {
// 	let locales = import.meta.glob('./locales/*.json')
// 	let messages = {}

// 	Object.keys(locales).forEach(key => {
// 		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
// 		if (matched && matched.length > 1) {
// 			const locale = matched[1]
// 			messages[locale] = Object.keys(locale)
// 		}
// 	})
// 	// console.log(locales)
// 	// const locales = import('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
// 	// console.log(locales)
// 	// const messages = {}
// 	// let localesTab = locales.keys()
// 	// console.log(localesTab)
// 	// locales.keys().forEach(key => {
// 	// 	debugger
// 	// // 	const matched = key.match(/([A-Za-z0-9-_]+)\./i)
// 	// // 	if (matched && matched.length > 1) {
// 	// // 		const locale = matched[1]
// 	// // 		messages[locale] = locales(key)
// 	// // 	}
// 	// })
// 	return messages
// }

const i18n = createI18n({
	legacy: true,
	locale: 'fr',
	fallbackLocale: 'en',
	messages: loadLocaleMessages(),
})

// createApp(App).use(router).mount('#app')
createApp(App)
	.use(router)
	.use(i18n)
	.mount('#app')