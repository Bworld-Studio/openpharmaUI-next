<template>
	<img src="/src/assets/images/pharmacy/048-pharmacy.svg">
</template>
<script>
// Utilities
import { ref, reactive, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
import Axios from 'axios'																	// Axios pour faire des appels au backend

// Views
import Header from '../header/Header.vue'									// Import de la vue Header

// API


export default {
	components: { Header }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	setup() {
		// const varLabel = ref('global.version')					// Binding de Label i18n
		// let varStr = ref('Variable Simple binding')		// Variable de type alphanumérique
		// let varNum = 0		// Variable de type nombre
		// let varObj = {}		// Variable de type objet
		// let varTab = []		// Variable de type Table
		// let varUnd = undefined	// Variable de type non défini

		// const getData = () => {
		// 	let varTemp = 'Test binding' // Accès aux variables dans le code JS
		// 	console.log('Template: Display stuff in the console')
		// 	console.log(varTemp)

		// 	varStr = varTemp
		// }

		// onMounted( () => getData() ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		const { t } = useI18n({ useScope: 'global' }) // Labels
		return { varStr, varLabel, t }
	}
}
</script>

<style>

</style>