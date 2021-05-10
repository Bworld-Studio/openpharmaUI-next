<template>
<!-- Commentaire HTML -->
<div id="template">
	<Header v-bind="headerParams"/>
	<div class="container__main container-fluid">
		<!-- <h2 class="title">{{ t('template.title') }}</h2> -->
		<div>{{ t(varLabel) }}</div>
		<!-- <div v-bind="variable"></div> -->
		<div>{{varStr}}</div>
	</div>
</div>
</template>

<style>
	/* CSS */

</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
import Axios from 'axios'																	// Axios pour faire des appels au backend

// Views
import Header from '../header/Header.vue'									// Import de la vue Header

// API


export default {
	components: { Header }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	props: { param: '' },		// Déclaration des paramètres d'entrée du composant
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels and Date
		const headerParams = { view: 'template', title: t('template.title') } // Header

		// Import Router for navigation
		const router = useRouter() // Import Router

		const varLabel = ref('global.version')					// Binding de Label i18n
		let varStr = ref('Variable Simple binding')		// Variable de type alphanumérique
		let varNum = 0		// Variable de type nombre
		let varObj = {}		// Variable de type objet
		let varTab = []		// Variable de type Table
		let varUnd = undefined	// Variable de type non défini

		const getData = () => {
			let varTemp = 'Test binding' // Accès aux variables dans le code JS
			console.log('Template: Display stuff in the console')
			console.log(varTemp)

			varStr = varTemp
		}

		onMounted( () => getData() ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		provide('search', search)
		return { varStr, varLabel, headerParams, search, t, d }
	}
}
</script>