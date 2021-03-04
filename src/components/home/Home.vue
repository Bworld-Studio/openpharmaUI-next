<template>
<div id="home">
	<Header />
	<div class="home__main container__main container-fluid">
		<h2>{{ t('home.title') }}</h2>
		<div class="card__container">
			<div class="card" v-for="(view) in views" :key="view.id" style="width: 25rem;">
				<div class="card-body">
					<h5 class="card-title">{{ t(view.title) }}</h5>
					<p class="card-text">{{ t(view.text) }}</p>
					<a v-bind:href="view.path1" class="card-link">{{ t(view.action1) }}</a>
					<a v-bind:href="view.path2" class="card-link">{{ t(view.action2) }}</a>
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
	.card__container { display: flex; flex-direction: row; justify-items: left; }
	.card { margin: 1em }
</style>

<script>
// Utilities
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n' // I18n

// Views
import Header from '../header/Header.vue'

// API

export default {
	components: { Header },
	setup() {

		const views = ref([
			{ id: 'Clients', title: 'clients.title', text: 'clients.text', action1: 'clients.action1', path1: '/Clients', action2: 'clients.action2', path2: '/Client' },
			{ id: 'Products', title: 'products.title', text: 'products.text', action1: 'products.action1', path1: '/Products', action2: 'products.action2', path2: '/Products' },
			{ id: 'Orders', title: 'orders.title', text: 'orders.text', action1: 'orders.action1', path1: '/Orders', action2: 'orders.action2', path2: '/Orders' }
		])

		const { t } = useI18n({ useScope: 'global' }) // Labels
		return { views, t }
	}
}
</script>