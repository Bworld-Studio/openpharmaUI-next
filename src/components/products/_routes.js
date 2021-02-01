const Products = () => import(`./components/products/Products.vue`)

export default [
	{
		path: '/products',
		name: 'products',
		component: Products
	}
]