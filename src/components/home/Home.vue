<template>
<div class="container-fluid">
	<h2>Home</h2>
	<!-- <div class="cards">
		<div class="card" v-for="(view) in views" :key="view.id" style="width: 25rem;">
			<div class="card-body">
				<h5 class="card-title">{{$t(view.title)}}</h5>
				<p class="card-text">{{$t(view.text)}}</p>
				<a v-bind:href="view.path1" class="card-link">{{$t(view.action1)}}</a>
				<a v-bind:href="view.path2" class="card-link">{{$t(view.action2)}}</a>
			</div>
		</div> -->
	<!-- </div> -->
</div>
</template>

<style>
	.cards { display: flex; flex-direction: row; justify-items: left; }
	.card { margin: 1em }
</style>

<script>
// import axios from 'axios'

export default {
	name: 'Home',
	data () {
		return {
			views: [
				{ id: 'Clients', title: 'clients.title', text: 'clients.text', action1: 'clients.action1', path1: '/Clients', action2: 'clients.action2', path2: '/Client' },
				{ id: 'Products', title: 'products.title', text: 'products.text', action1: 'products.action1', path1: '/Products', action2: 'products.action2', path2: '/Products' },
				{ id: 'Orders', title: 'orders.title', text: 'orders.text', action1: 'orders.action1', path1: '/Orders', action2: 'orders.action2', path2: '/Orders' }
			]
		}
	},
	mounted () {

	},
	methods: {

	}
}
</script>