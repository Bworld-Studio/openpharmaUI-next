const Orders = () => import(`./components/orders/Orders.vue`)

export default [
	{
		path: '/orders',
		name: 'orders',
		component: Orders
	}
]