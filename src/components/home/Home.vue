<template>
<div id="home">
	<Header v-bind="headerParams"/>
	<div class="home__main container__main container-fluid">
		<!-- <h2>{{ t('home.title') }}</h2> -->
		<div class="card__container">
			<div class="card" v-for="(view) in views" :key="view.id" style="width: 25rem;">
				<div class="card-body">
					<h5 class="card-title">{{ t(view.title) }}</h5>
					<p class="card-text">{{ t(view.text) }}</p>
					<a v-bind:href="view.path0" class="card-link">{{ t(view.action0) }}</a>
					<a v-bind:href="view.path1" class="card-link">{{ t(view.action1) }}</a>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<style>
	#home_view { height: 100%; }
	.home { height: 100%; }
	.home__main { height: 100%; }
	.card__container { display: flex; flex-direction: row; justify-items: left; flex-wrap: wrap; }
	/* .card { margin: 1em } */
</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'
// import Axios from 'axios' // eslint-disable-line no-unused-vars

// Views
import Header from '../header/Header.vue'

// API

export default {
	components: { Header },
	setup() {

		const { t, d } = useI18n({ useScope: 'global' }) // Labels

		const views = ref([
			{ id: 'Clients', title: 'clients.title', text: 'clients.text', action0: 'clients.action0', path0: '/Clients', action1: 'clients.action1', path1: '/Client' },
			{ id: 'Products', title: 'products.title', text: 'products.text', action0: 'products.action0', path0: '/Products', action1: 'products.action1', path1: '/Products' },
			{ id: 'Orders', title: 'orders.title', text: 'orders.text', action0: 'orders.action0', path0: '/Orders', action1: 'orders.action1', path1: '/Orders' }
		])

		// const router = useRouter() // Import Router

		const search = (term) => {
			// searchClients(term)
		}

		// Header
		let actionsList = [{ label: t('clients.action0') }, { label: t('clients.action1') } ]
		const headerParams = { view: 'home', title: t('home.title'), actions: actionsList } // Header
		// provide('action0', getClients)
		// provide('action1', createClient)
		// provide('search', search)

		// return { clients, createClient, editClient, displayClient, search, getClients, headerParams, t, d }
		return { views, search, headerParams, t, d }
	}
}
</script>