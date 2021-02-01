const Home = () => import(`./components/home/Home.vue`)

export default [
	{
		path: '/',
		name: 'home',
		component: Home
	}
]