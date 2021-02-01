const Search = () => import(`./components/search/Search.vue`)

export default [
	{
		path: '/search',
		name: 'search',
		component: Search
	}
]