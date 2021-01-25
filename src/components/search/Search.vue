<template>
	<div>Résultats</div>
</template>

<script>
// import axios from 'axios'

export default {
	name: 'Search',		// Nom du composant
	data () {
		return {
			// Déclarations des variables de la vue utilisable dans les scripts et le DOM
			viewLabel: 'global.openPharma',
			variable: ''
		}
	},
	props: {
		uuid: ''
	},
	mounted () {
		// Code executé à l'appel de la vue
		this.getData() // Appel de fonction
	},
	methods: {
		// Fonctions déclarées dans le composants
		getTrucs () {
			var variableCopy = this.variable // Accès aux variables dans le code JS
			console.log('Template: Display stuff in the console')
			console.log(variableCopy)
		}
	}
}
</script>

<style>

</style>