<template>
<div id="products" style="height: 100%;">
	<Header v-bind="headerParams"/>

		<div class="container__main container-fluid">
			<button class="btn btn-info btn-sm" v-on:click="getProducts()">{{ t('products.action1') }}</button>
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<td>{{ t('products.table-header.cis') }}</td>
							<td>{{ t('products.table-header.labelMed') }}</td>
							<td>{{ t('products.table-header.pharmaForm') }}</td>
						</tr>
					</thead>
					<tbody class="table__body overflow-scroll">
						<tr v-for="(product) in products" :key="product.cis">
							<td class="text-left">{{product.labelMed}}</td>
							<td class="text-left">{{product.pharmaForm}}</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>

</div>
</template>

<style>
	.table__body { height: 250px; }
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
	components: { Header },
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const headerParams = { view: 'clients', title: t('products.title') } // Header

		const url = '/api/products/' // Déclaration

		let products = ref([]) // Changement en let au lieu de const => Expliquer

		const getProducts = function () {
			axios.get(url)
				.then(result => {

					if ( result.status == 200 ) products.value = result.data // Result.data avec contrôle sur le résultat de l'appel
					// console.log(products.value.length)

				})
				.catch(error =>{
					console.log(error)
				})
		}
		// console.log(products)

		return { products, getProducts, headerParams, t }
	}
}
</script>
