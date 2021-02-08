<template>
	<div id="updates" class="container-fluid">
		<h2>{{ $t('updates.title') }}</h2>
		<div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('cis')">{{ $t('updates.cis-button')}}</button></div>
		<div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('cip')">{{ $t('updates.cip-button')}}</button></div>
		<div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('compo')">{{ $t('updates.compo-button')}}</button></div>
		<div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('gener')">{{ $t('updates.gener-button')}}</button></div>
		<div class="update-button"><button class="btn btn-info" v-on:click="updateBDPM('cpd')">{{ $t('updates.cpd-button')}}</button></div>
	</div>
</template>

<style>
	.update-button { margin: 5px 10px }
</style>

<script>
// const axios = require('axios')
import axios from 'axios'
export default {
	name: 'Updates',
	data () {
		return {}
	},
	mounted () {
		console.log('Updates')
		// this.updateBDPM()
	},
	methods: {
		updateBDPM (file) {
			// Call API
			var par = { 'file': file }
			console.log(par)
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
	}
}
</script>