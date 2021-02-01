import { createWebHistory, createRouter } from 'vue-router'

let routes = []

// Import all of the components routes files
const loadRoutes = function () {
	let routes = []
	let components = import.meta.globEager('./components/**/_routes.js')

	for ( const component in components ) {

		// Build path
		let matched = component.split('/')
		let folder = matched[2]
		let name = folder[0].toUpperCase() + folder.substring(1)
		let path = './components/'+folder+'/'+name+'.vue'

		let route = components[component]

		// Import _route.js and Vue component
		const VueComp = () => import(path)
		route.default[0].component = VueComp
		routes.push(route.default[0])
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