const Login = () => import(`./components/login/Login.vue`)

export default [
	{
		path: '/login',
		name: 'login',
		component: Login
	}
]