<template>
<div id="updates">
	<Header v-bind="headerParams"/>
	<div class="container__main container-fluid">
		<!-- <h2>{{ t('updates.title') }}</h2> -->
		<div>
			<button class="btn btn-info update-button" v-on:click="updateBDPM('cis')">{{ t('updates.bdpm-button')}}</button>
			<span>{{ t('updates.messages.last-update') }}</span>
		</div>
	</div>
	<!-- <div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('cis')">{{ $t('updates.cis-button')}}</button></div> -->
	<!-- <div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('cip')">{{ $t('updates.cip-button')}}</button></div> -->
	<!-- <div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('compo')">{{ $t('updates.compo-button')}}</button></div> -->
	<!-- <div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('gener')">{{ $t('updates.gener-button')}}</button></div> -->
	<!-- <div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('cpd')">{{ $t('updates.cpd-button')}}</button></div> -->
</div>
</template>

<style>
	.update-button { margin: 5px 10px }
</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
import axios from 'axios'																	// Axios pour faire des appels au backend

// Views
import Header from '../header/Header.vue'									// Import de la vue Header

// API


export default {
	components: { Header }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const headerParams = { view: 'updates', title: t('updates.title') } // Header

		const getLastUpdate = (file) => {

		}

		onMounted( () => getLastUpdate() ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		const updateBDPM = () => {
			var par = { 'file': file }
			// console.log(par)
			axios.put(`/api/updates/`, par).then(
				result => {
					// console.log(result.data)
					// this.clients = result.data
				},
				error => {
					console.error(error)
				}
			)
		}
		
		
		return { updateBDPM, headerParams, t }
	}
}
</script>