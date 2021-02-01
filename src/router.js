import { createWebHistory, createRouter } from 'vue-router'
// import Login from './components/login/Login.vue'
// const Home = { template: '<div>Home</div>' }
// import Home from './components/home/Home.vue'
// const Login = () => import('./components/login/Login.vue')
// const Home = () => import('./components/home/Home.vue')
// const NotFound = () => import('./components/notfound/NotFound.vue')
// const Clients = () => import('./components/clients/Clients.vue')
// const Client = () => import('./components/client/Client.vue')
// const Orders = () => import('./components/orders/Orders.vue')
// const Products = () => import('./components/products/Products.vue')
// const Search = () => import('./components/search/Search.vue')
// const Settings = () => import('./components/settings/Settings.vue')
// const Template = () => import('./components/template/Template.vue')
// const Updates = () => import('./components/updates/Updates.vue')

// const routes = [
// 	{path: '/', name: 'Home', component: Home},
// 	// {path: '/home', name: 'Home', component: Home},
// 	{path: '/login', name: 'Login', component: Login},
// 	{path: '/notfound', name: 'NotFound', component: NotFound},
// 	{path: '/clients', name: 'Clients', component: Clients},
// 	{path: '/client', name: 'Client', component: Client},
// 	{path: '/orders', name: 'Orders', component: Orders},
// 	{path: '/products', name: 'Products', component: Products},
// 	{path: '/search', name: 'Search', component: Search},
// 	{path: '/settings', name: 'Settings', component: Settings},
// 	{path: '/template', name: 'Template', component: Template},
// 	{path: '/updates', name: 'Updates', component: Updates},
// 	{path: "/:catchAll(.*)", component: NotFound}
// ]

// Manually add the Login vue because it's outside the components folder
let routes = []

// Import all of the components routes files
const loadRoutes = function () {
	// debugger
	let routes = []
	let components = import.meta.globEager('./components/**/_routes.js')

	for ( const component in components ) {
		debugger
		console.log(component)
		const route = () => import(component) /* @vite-ignore */
		console.log(route)
		routes.push(route)
	}
	return routes
}

routes = loadRoutes()

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// i18n
// router.beforeEach(async (to, from, next) => {
// 	const paramsLocale = to.params.locale

// 	// use locale if paramsLocale is not in SUPPORT_LOCALES
// 	if (!SUPPORT_LOCALES.includes(paramsLocale)) {
// 		return next(`/${locale}`)
// 	}

// 	// load locale messages
// 	if (!i18n.global.availableLocales.includes(paramsLocale)) {
// 		await loadLocaleMessages(i18n, paramsLocale)
// 	}

// 	// set i18n language
// 	setI18nLanguage(i18n, paramsLocale)

// 	return next()
// })

// export default router

// Import all of the components routes files
// function loadRoutes () {
// 	debugger
// 	import folder from './src/components/'

// 	// let modules = () => import('/src/components/*/_routes.js')
// 	// import modules from './src/components/**/_routes.js'
// 	// const modules = import.meta.glob('./src/components/**/_routes.js')
// 	for (let path in folder) {
// 		debugger
// 		modules[path]().then((mod) => {
// 			console.log(path, mod)
// 		})
// 	}
// 	return modules
// }
	
	// // const context = require.context('./components', true, /_routes.js$/i)
	// return components.keys()
	// 	.map(components)					// import module
	// 	.map(m => m.default)	// get `default` export from each resolved module
// }
// function loadRoutes () {
// 	// const context = require.context('./components', true, /_routes.js$/i)
// 	return context.keys()
// 		.map(context)					// import module
// 		.map(m => m.default)	// get `default` export from each resolved module
// }