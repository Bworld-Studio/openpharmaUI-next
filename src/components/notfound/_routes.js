const Notfound = () => import(`./components/notfound/Notfound.vue`)

export default [
	{
		path: '/notfound',
		name: 'notfound',
		component: Notfound
	}
]