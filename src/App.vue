<template>
<div id="app_body" class="app_body">
	<aside>
		<nav class="nav navbar-dark bg-dark">
			<ul class="nav navbar-nav flex-column">
				<a class="navbar-brand" href="/" style="font-family:'Ubuntu-Medium'">
					<img src="./assets/logo.png" style="margin-right: 8px; width:41px">
					<span>{{ t('global.openpharma') }}</span>
					<span class="version">{{ t('global.version') }}</span>
				</a>
				<li class="nav-item">
					<img src="./assets/images/pharmacy/009-Pharmacist.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/clients">{{ t('clients.menu') }}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/pharmacy/003-drugs.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/products">{{ t('products.menu') }}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/pharmacy/005-prescription.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/orders">{{ t('orders.menu') }}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/pharmacy/045-container.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/statistics">{{ t('statistics.menu')}}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/pharmacy/045-container.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/updates">{{ t('updates.menu')}}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/construction/005-plan.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/Settings">{{ t('settings.menu') }}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/construction/039-traffic barrier.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/Template">{{ t('template.menu') }}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/construction/021-spirit level.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/Showcase">{{ t('showcase.menu') }}</a>
				</li>
				<li class="nav-item">
					<img src="./assets/images/construction/021-spirit level.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/Tiers-payant">Tiers-payant</a>
				</li>
				<!-- <li class="nav-item">
					<img src="./assets/images/ecology/035-light bulb.svg" style="margin-right: 8px; width: 41px">
					<a class="nav-link" href="/About">{{ t('about.menu') }}</a>
				</li> -->
			</ul>
		</nav>
	</aside>
	<div class="main">
		<router-view/>
	</div>
</div>
</template>

<style>
	.app_body { display: flex; flex-direction: row; height: 100%; width: 100%; }
	.nav { height: 100%; }
	/* .nav > * { border-bottom: 1px solid #000; } */
	.navbar-brand {
		margin-bottom: 1em;
	}
	.nav-item {
		display: flex;
		flex-direction: row;
		margin: 0.3em 1em;
	}
	.main { height: 100%; width: 100%; }
</style>

<script>

// Utilities
import { useI18n } from 'vue-i18n' // I18n

// Views
import Header from './components/header/Header.vue'

// API

export default {
	components: { Header, },
	setup() {
		const { t } = useI18n({ useScope: 'global' }) // Labels
		return { t }
	}
}
</script>