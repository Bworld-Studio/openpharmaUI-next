import { createWebHistory, createRouter } from 'vue-router'

let routes = []

// Import all of the components routes files
const loadRoutes = function () {
	let routes = []
	// let components = import.meta.globEager('./components/**/_routes.js')
	let files = import.meta.globEager('./components/**/**.vue')

	for ( const file in files ) {
		debugger
		// Build path
		let matched = file.split('/')
		let name = matched[2]
		// let componentName = folder[0].toUpperCase() + folder.substring(1)
		// let path = './components/'+folder+'/'+name+'.vue'

		let route = {
			path: '/'+name,
			name: name,
			component: {},
			props: true
		}

		// Import _route.js and Vue component
		const component = () => import(file /* @vite-ignore */)
		route.component = component /* @vite-ignore */

		routes.push(route)
	}

	// for ( const component in components ) {
	// 	debugger
	// 	// Build path
	// 	let matched = component.split('/')
	// 	let folder = matched[2]
	// 	let name = folder[0].toUpperCase() + folder.substring(1)
	// 	let path = './components/'+folder+'/'+name+'.vue'

	// 	let route = components[component]

	// 	// Import _route.js and Vue component
	// 	const VueComp = () => import(path /* @vite-ignore */)
	// 	route.default[0].component = VueComp /* @vite-ignore */
	// 	routes.push(route.default[0])
	// }
	return routes
}

routes = loadRoutes()
console.table

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router