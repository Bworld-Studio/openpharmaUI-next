<template>
<!-- Commentaire HTML -->
<div class="container">
	<div class="title">{{$t('orders.title')}}</div>
	<!-- <div class="title">{{$t(viewLabel)}}</div> -->
	<div v-bind="variable"></div>
</div>
</template>

<style>

	.title{ color: #cacaca }

</style>
<script>
const axios = require('axios')

export default {
	name: 'Orders',		// Nom du composant
	data () {
		return {
			header: [ 'orders.id', 'orders.provider', 'orders.date' ],
			orders: [],
			// Déclarations des variables de la vue utilisable dans les scripts et le DOM
			viewLabel: 'global.openPharma',
			variable: ''
		}
	},
	mounted () {
		// Code executé à l'appel de la vue
		this.getData() // Appel de fonction
	},
	methods: {
		// Fonctions déclarées dans le composants
		getData () {
			axios.get('/api/orders').then(
				result => {
					// console.log(result.data)
					this.orders = result.data
				},
				error => {
					console.error(error)
				}
			)
		}
		// getTrucs () {
		// 	var variableCopy = this.variable // Accès aux variables dans le code JS
		// 	console.log('Template: Display stuff in the console')
		// 	console.log(variableCopy)
		// }

	}
}
</script>