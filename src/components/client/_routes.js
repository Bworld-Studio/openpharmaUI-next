const Client = () => import(`./components/client/Client.vue`)

export default [
	{
		path: '/Client',
		// name: 'client',
		component: Client,
		props: { uuid: '' }
	}
]