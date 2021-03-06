import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// CSS
import { Popover } from 'bootstrap'
import './assets/styles/op.css'
import './assets/styles/opwebui.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// Internationalisation -- i18n
const loadLocaleMessages = () => {
	let locales = import.meta.globEager('./locales/*-*.json')
	let messages = {}

	for (const path in locales) {
		const matched = path.match(/([A-Za-z0-9-_]+)\./i)
		if (matched && matched.length > 1 ) {
			const locale = matched[1]
			messages[locale] = locales[path]
		}
	}
	return messages
}

const loadDateTimeFormats = () => {
	let datetimeFormats = import.meta.globEager('./locales/datetimeFormats.json')
	return datetimeFormats
}

const i18n = createI18n({
	legacy: false,
	locale: 'fr-FR',
	fallbackLocale: 'en-GB',
	datetimeFormats: loadDateTimeFormats(),
	messages: loadLocaleMessages(),
})

// App Creation
createApp(App)
	.use(router)
	.use(i18n)
	.mount('#app')