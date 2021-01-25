<template>
<!-- Commentaire HTML -->
<div class="container">
	<!-- <div class="title">{{$t('global.openPharma')}}</div> -->
	<!-- <div class="title">{{$t(viewLabel)}}</div> -->
	<!-- <div v-bind="variable"></div> -->
</div>
</template>

<style>

	.title{ color: #cacaca }

</style>
<script>
// import axios from 'axios'

export default {
	name: 'Login',		// Nom du composant
	data () {
		return {
			// Déclarations des variables de la vue utilisable dans les scripts et le DOM
			user: '',
			password: ''
		}
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