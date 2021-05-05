<template>
<div id="products" style="height: 100%;">
	<Header v-bind="headerParams"/>
	<div class="container__main">
		<div class="container-fluid">
			<button class="btn btn-info btn-sm" v-on:click="getProducts()">{{ t('products.action0') }}</button>
		</div>
		<div class="table-responsive">
			<table class="table table__body">
				<thead>
					<tr>
						<th>{{ t('products.table-header.cis') }}</th>
						<th>{{ t('products.table-header.labelMed') }}</th>
						<th>{{ t('products.table-header.pharmaForm') }}</th>
					</tr>
				</thead>
				<tbody class="overflow-auto">
					<tr v-for="(product) in products" :key="product.cis">
						<th class="text-left">{{product.cis}}</th>
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
	.table__body {
		height: 750px;
		display: block;
	}
</style>

<script>
// Utilities
// import { ref, reactive, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
// import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues
// import Axios from 'axios'																	// Axios pour faire des appels au backend

// Views
import Header from '../header/Header.vue'									// Import de la vue Header

// API
import useProducts from '../../common/api.products.js'

export default {
	components: { Header },
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		const headerParams = { view: 'clients', title: t('products.title') } // Header

		const { products, getProducts } = useProducts()		// Get products

		return { products, getProducts, headerParams, t }
	}
}
</script>
