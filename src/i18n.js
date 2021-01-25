import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

export const SUPPORT_LOCALES = ['fr', 'en']

export function setupI18n(options = { locale: 'fr' }) {
	const i18n = createI18n(options)
	setI18nLanguage(i18n, options.locale)
	return i18n
}

export function setI18nLanguage(i18n, locale) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale
	} else {
		i18n.global.locale.value = locale
	}
	/**
	 * NOTE:
	 * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
	 * The following is an example for axios.
	 *
	 * axios.defaults.headers.common['Accept-Language'] = locale
	 */
	document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
	// load locale messages with dynami import
	const messages = await import(
		/* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
	)

	// set locale and locale message
	i18n.global.setLocaleMessage(locale, messages.default)

	return nextTick()
}

// var loadLocaleMessages = function () {
// 	const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
// 	console.log(locales)
// 	const messages = {}
// 	locales.keys().forEach(key => {
// 		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
// 		if (matched && matched.length > 1) {
// 			const locale = matched[1]
// 			messages[locale] = locales(key)
// 		}
// 	})
// 	return messages
// }

// export default new VueI18n({
// 	locale: process.env.VUE_APP_I18N_LOCALE || 'fr',
// 	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
// 	messages: loadLocaleMessages(),
// 	dateTimeFormats
// })