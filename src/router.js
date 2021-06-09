import { createWebHistory, createRouter } from 'vue-router'

let routes = []

// Import all of the components files
const loadRoutes = function () {
	let routes = []
	let files = import.meta.globEager('./components/**/**.vue')

	for ( const file in files ) {

		let matched = file.split('/')
		let name = matched[3].split('.')[0]

		let route = {
			path: '/'+name,
			name: name,
			component: {},
			props: true
		}

		// Specific routes
		if ( route.name === 'home' ) route.path = '/'

		// Import Vue component
		const component = () => import(file /* @vite-ignore */)
		route.component = component /* @vite-ignore */

		routes.push(route)
	}
	return routes
}

routes = loadRoutes()
console.table

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router