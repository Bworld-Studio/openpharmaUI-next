import { createWebHistory, createRouter } from 'vue-router'
// import Login from '@/components/Login.vue'

// Manually add the Login vue because it's outside the components folder
// let routes = [
// 	{
// 		path: '/login',
// 		name: 'login',
// 		component: Login
// 	}
// ]

const resourceRoutes = loadRoutes()

resourceRoutes.forEach((route) => {
	routes.push(route[0])
})

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

// Import all of the components routes files
function loadRoutes () {
	const context = require.context('./components', true, /_routes.js$/i)
	return context.keys()
		.map(context)					// import module
		.map(m => m.default)	// get `default` export from each resolved module
}