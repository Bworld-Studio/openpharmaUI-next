<template>
<!-- Commentaire HTML -->
<div id="orders">
	<Header v-bind="headerParams"/>
	<div class="container__main container-fluid">
		<!-- <h2 class="title">{{ t('orders.title') }}</h2> -->
	</div>
</div>

</template>

<style>

</style>

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
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const actions = [{ },]
		const headerParams = { view: 'orders', title: t('orders.title'), actions: actions } // Header

		const header = ref([ 'orders.id', 'orders.provider', 'orders.date' ])
		const orders = ref([])

		const getData = () => {
			Axios.get('/api/orders').then(
				result => {
					orders.value = result.data
				},
				error => {
					console.error(error)
				}
			)
		}

		onMounted( () => getData() ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		return { header, orders, headerParams, t }
	}
}
</script>