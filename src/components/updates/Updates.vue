<template>
	<div id="updates" class="container">
			<button class="btn btn-info" v-on:click="updateBDPM('cis')">Update CIS</button>
			<button class="btn btn-info" v-on:click="updateBDPM('cip')">Update CIP</button>
			<button class="btn btn-info" v-on:click="updateBDPM('compo')">Update Compo</button>
			<button class="btn btn-info" v-on:click="updateBDPM('gener')">Update Gener</button>
			<button class="btn btn-info" v-on:click="updateBDPM('cpd')">Update CPD</button>
	</div>
</template>

<style>

</style>

<script>
const axios = require('axios')
export default {
	name: 'Updates',
	data () {
		return {}
	},
	mounted () {
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