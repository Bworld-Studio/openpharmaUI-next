<template>
<div id="app" class="">
	<nav class="nav navbar-dark bg-dark">
		<ul class="nav navbar-nav flex-column">
			<a class="navbar-brand" href="/" style="font-family:'Ubuntu-Medium'">
				<img src="./assets/logo.png" style="margin-right: 8px; width:41px">
				<!-- <span>{{ $t('global.openPharma') }}</span> -->
				<span>openpharma</span>
				<span class="version">WebUI-next 0.2.1</span>
			</a>
			<li class="nav-item">
				<!-- <a class="nav-link" href="/Clients">{{ $t('clients.menu') }}</a> -->
				<a class="nav-link" href="/clients">Patients</a>
			</li>
			<li class="nav-item">
				<!-- <a class="nav-link" href="/Products">{{ $t('products.menu') }}</a> -->
				<a class="nav-link" href="/Products">Produits</a>
			</li>
			<li class="nav-item">
				<!-- <a class="nav-link" href="/Orders">{{ $t('orders.menu') }}</a> -->
				<a class="nav-link" href="/orders">Commandes</a>
			</li>
			<li class="nav-item">
				<!-- <a class="nav-link" href="/Updates">{{ $t('updates.menu')}}</a> -->
				<a class="nav-link" href="/updates">Mises à jours</a>
			</li>
			<li class="nav-item">
				<!-- <a class="nav-link" href="/Settings">{{ $t('settings.menu') }}</a> -->
				<a class="nav-link" href="/settings">Paramètres</a>
			</li>
		</ul>
	</nav>
	<div>
		<nav class="nav navbar-nav bg-dark flex-row">
			<div>
				<!-- <input class="form-control" type="search" v-bind:placeholder="$t('search.placeholder-input')" aria-label="Search" aria-describedby="button-search"> -->
				<input class="form-control" type="search" aria-label="Search" aria-describedby="button-search">
				<div class="input-group-append">
					<button class="btn btn-success btn-sm my-2 my-sm-0 btn-outline-secondary" type="button" id="button-search" v-on:click="search()">
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
							<path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						</svg>
					</button>
				</div>
			</div>
		</nav>
		<router-view/>
	</div>
</div>
</template>

<script>
// import axios from 'axios' // eslint-disable-line no-unused-vars
export default {
	name: 'App',
	data () {
		return {
			serverStatus: false,
			showModal: false
		}
	},
	mounted () {
		console.log('App monted')
		this.getServerStatus()
	},
	methods: {
		search () {
			this.showModal = true
		},
		getServerStatus () {
		// 	const me = this
		// 	setInterval(function () {
		// 		var serverStatus = null
		// 		axios.get('/api/status').then(
		// 			result => {
		// 				console.log(serverStatus)
		// 				if (result.status === 200) me.serverStatus = true
		// 			},
		// 			error => {
		// 				console.error(error)
		// 				me.serverStatus = false
		// 			}
		// 		)
		// 	}, 1000)
		}
	}
}
</script>