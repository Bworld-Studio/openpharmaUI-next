const Clients = () => import(`./components/clients/Clients.vue`)

export default [
	{
		path: '/Clients',
		name: 'clients',
		component: Clients
	}
]