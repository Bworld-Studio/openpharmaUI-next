const Template = () => import(`./components/template/Template.vue`)

export default [
	{
		path: '/template',
		name: 'template',
		component: Template
		// props: { param: '' } // Paramètre d'entrée de la vue
	}
]