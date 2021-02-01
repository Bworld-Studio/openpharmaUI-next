<template>
	<div id="clients-list" class="container-fluid">
		<div class="">
			<h1 class="text-center">{{ $t('clients.title') }}</h1>
			<button class="btn btn-primary btn-sm" v-on:click="createClient()">{{ $t('clients.action2') }}</button>
			<table class="table">
				<tr v-for="(line) in clients" v-bind:key="line.uuid" v-bind:title="line.numSS">
					<td class="text-left">{{line.lastName}}</td>
					<td class="text-left">{{line.firstName}}</td>
					<td class="text-left">{{ $d(new Date(line.birthDate), "short") }}</td>
					<td class="text right">
						<button class="btn btn-primary btn-sm" v-on:click="editClient(line)">{{$t('buttons.edit-button')}}</button>
						<button class="btn btn-danger btn-sm" v-on:click="deleteClient(line.uuid)">{{$t('buttons.delete-button')}}</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style>

.input_key { width: 55px; }
.input_key input[type=number], input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
	-moz-appearance: textfield;
	-webkit-appearance: none;
	margin: 0;
}

</style>

<script>
import axios from 'axios' // eslint-disable-line no-unused-vars

export default {
	name: 'Clients',
	data () {
		return {
			header: [],
			clients: []
		}
	},
	mounted () {
		// console.log('Component: Clients')
		// console.log(this.$router)
		this.getClients()
	},
	methods: {
		getClients () {
			// Call API
			debugger
			axios.get('/api/clients').then(
				result => {
					debugger
					// console.log(result.data)
					this.clients = result.data
				},
				error => {
					console.error(error)
				}
			)
		},
		createClient () {
			this.client = {}
			this.client.active = true
			this.$router.push({ name: 'client' })
		},
		// addClient () {
		// 	console.log(this.client)
		// 	this.client.active = true

		// 	// Call API
		// 	axios.post('api/clients', this.client)
		// 		.then(res => {
		// 			this.client = {}
		// 			this.client.isEdit = false
		// 			this.getClients()
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// },
		editClient (pClient) {
			this.$router.push({ name: 'client', params: { uuid: pClient.uuid } })
			// this.client = pClient
			// this.client.lastName = this.client.lastName.toUpperCase()
			// this.client.isEdit = true
		}
		// updateClient () {

		// 	// Call API
		// 	axios
		// 		.put(`/api/clients/${this.client.uuid}`, this.client)
		// 		.then(res => {
		// 			this.client = {}
		// 			this.client.isEdit = false
		// 			this.getTasks()
		// 			console.log(res)
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// },
		// deleteClient (uuid) {

		// 	// Call API
		// 	axios
		// 		.delete(`/api/clients/${uuid}`)
		// 		.then(res => {
		// 			this.client = {}
		// 			this.getTasks()
		// 			console.log(res)
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// }
	}
}
</script>