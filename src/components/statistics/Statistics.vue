<template>
<!-- Commentaire HTML -->
<div id="template">
	<Header v-bind="headerParams"/>
	<div class="container__main container-fluid">
		<canvas id="testChart"></canvas>
		<!-- <h2 class="title">{{ t('statistics.title') }}</h2> -->
		<!-- <div>{{ t(varLabel) }}</div> -->
		<!-- <div v-bind="variable"></div> -->
		<!-- <div>{{varStr}}</div> -->
	</div>
</div>
</template>

<style>
	/* CSS */

</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
import Axios from 'axios'																	// Axios pour faire des appels au backend
// import { Chart } from 'chart.js'

// Chart elements
import { Chart, BarElement, BarController, CategoryScale, LinearScale, RadialLinearScale, TimeScale, TimeSeriesScale, Legend, Title, Tooltip } from 'chart.js'

// Views
import Header from '../header/Header.vue'									// Import de la vue Header

// API


export default {
	components: { Header }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	props: { param: '' },		// Déclaration des paramètres d'entrée du composant
	setup(props, context) {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const headerParams = { view: 'statistics', title: t('statistics.title') } // Header

		let testChart = ref()

		Chart.defaults.font.family = 'OpenSans-Regular'
		Chart.register( BarElement, BarController, CategoryScale, LinearScale, RadialLinearScale, TimeScale, TimeSeriesScale, Legend, Title, Tooltip )

		const getStatistics = () => {

			let ctx = document.getElementById('testChart')
			testChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [{
						label: '# of Votes',
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)',
								'rgba(75, 192, 192, 0.2)',
								'rgba(153, 102, 255, 0.2)',
								'rgba(255, 159, 64, 0.2)'
							],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								'rgba(153, 102, 255, 1)',
								'rgba(255, 159, 64, 1)'
							],
							borderWidth: 1
					}]
				},
				options: {
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			})
		}

		onMounted( () => getStatistics() ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		return { headerParams, t,
			testChart
		}
	}
}
</script>