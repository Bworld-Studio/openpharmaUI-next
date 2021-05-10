<template>
<div id="updates">
	<Header v-bind="headerParams"/>
	<div class="container__main container-fluid">
		<!-- <h2>{{ t('updates.title') }}</h2> -->
		<div>
			<button class="btn btn-info btn-sm update-button" v-on:click="updateBDPM()">{{ t('updates.bdpm-button')}}</button>
			<span>{{ t('updates.messages.last-update') }}</span><span>{{ d(lastUpdateDate) }}</span>
		</div>
	</div>
</div>
</template>

<style>
	.update-button { margin: 5px 10px }
</style>

<script>
// Utilities
import { ref, reactive, onBeforeMount, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
import Axios from 'axios'																	// Axios pour faire des appels au backend

// Views
import Header from '../header/Header.vue'									// Import de la vue Header

// API
import useUpdates from '../../common/api.updates.js'

export default {
	components: { Header }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	setup() {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		const headerParams = { view: 'updates', title: t('updates.title') } // Header

		const { update, readUpdateDate, lastUpdateDate } = useUpdates()

		onBeforeMount( () => readUpdateDate('BDPM') ) // Fonction qui permet d'executer une autre fonction à l'appel du composant

		const updateBDPM = () => {
			update('BDPM')
		}

		return {
			updateBDPM, lastUpdateDate, headerParams,
			t, d
		}
	}
}
</script>