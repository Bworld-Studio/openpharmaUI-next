import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './assets/styles/op.css'
import './assets/styles/opwebui.css'


// Internationalisation
const loadLocaleMessages = function () {
	const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
	console.log(locales)
	const messages = {}
	locales.keys().forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
		if (matched && matched.length > 1) {
			const locale = matched[1]
			messages[locale] = locales(key)
		}
	})
	return messages
}

const i18n = VueI18n.createI18n({
	locale: 'fr',
	fallbackLocale: 'en',
	messages: loadLocaleMessages(),
})

createApp(App).use(router).use(i18n).mount('#app')