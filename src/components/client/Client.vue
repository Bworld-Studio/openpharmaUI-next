<template>
<div class="container-fluid">
	<form v-on:submit.prevent="addClient">
		<span class="row">
			<label for="numSSInput">{{$t('client.numss-input')}}</label>
			<div class="col">
				<input v-model="client.numSS" v-bind:placeholder="$t('client.numss-input')" type="text" id="numSSInput" class="form-control form-control-sm input_ss" size="13"/>
			</div>
			<div class="col">
				<input v-model="client.cleSS" v-bind:placeholder="$t('client.keyss-input')" type="number" id="cleSSInput" class="form-control form-control-sm input_key" min="0" max="99" value="00" size="2"/>
			</div>
		</span>
		<span class="row">
			<label for="lastNameInput">{{$t('client.name-input')}}</label>
			<input v-model="client.lastName" type="text" id="lastNameInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.name-input')"/>
		</span>
		<span class="row">
			<label for="firstNameInput">{{$t('client.firstname-input')}}</label>
			<input v-model="client.firstName" type="text" id="firstNameInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.firstname-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.birthdate-input')}}</label>
			<input v-model="client.birthDate" type="date" id="birthDateInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.birthdate-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.address-input')}}</label>
			<input v-model="client.address" type="text" id="addressInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.address-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.address2-input')}}</label>
			<input v-model="client.address2" type="text" id="address2Input" class="form-control form-control-sm" v-bind:placeholder="$t('client.address2-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.zipcode-input')}}</label>
			<input v-model="client.zipcode" type="text" id="zipcodeInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.zipcode-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.city-input')}}</label>
			<input v-model="client.city" type="text" id="cityInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.city-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.cellphone-input')}}</label>
			<input v-model="client.cellphone" type="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" id="cellphoneInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.cellphone-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.center-input')}}</label>
			<input v-model="client.center" type="text" id="centerInput" class="form-control form-control-sm" v-bind:placeholder="$t('client.center-input')"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{$t('client.viewAt-input')}}</label>
			<input readonly v-model="client.viewAt" type="text" id="viewAtInput" class="form-control form-control-sm form-control-plaintext" v-bind:placeholder="$t('client.viewAt-input')"/>
		</span>
		<span class="row">
			<button v-if="this.client.isEdit == false" type="submit" class="btn btn-success btn-block btn-sm mt-3" >{{$t('buttons.save-button')}}</button>
			<button v-else v-on:click="updateClient()" type="button" class="btn btn-primary btn-block btn-sm mt-3" >{{$t('buttons.update-button')}}</button>
		</span>
	</form>
	<div>
		<div id="alertError" class="alert alert-danger" role="alert" >{{$t('client.messages.creation-success')}}</div>
		<div id="alertSuccess" class="alert alert-success" role="alert">{{$t('client.messages.creation-error')}}</div>
	</div>
</div>
</template>

<style>
	.input_ss { width: 9em; }
	.input_key { width: 3em; }
	.input_key input[type=number], input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
		-moz-appearance: textfield;
		-webkit-appearance: none;
		margin: 0;
	}
</style>

<script>
// import routes from './_store'
const routes = require('./_store')
const axios = require('axios')

export default {
	name: 'client',
	data () {
		return {
			// uuid: '',
			client: {
				uuid: undefined,
				numSS: '',
				cleSS: '',
				lastName: '',
				firstName: '',
				birthDate: '',
				address: '',
				address2: '',
				city: '',
				zipcode: '',
				cellphone: '',
				phone: '',
				center: '',
				viewAt: '',
				active: false,
				isEdit: false
			}
		}
	},
	props: {
		uuid: ''
	},
	mounted() {
		console.log('Component: Client')
		console.log(this.$route)
		if (this.$route.params.uuid !== undefined) {
			this.uuid = this.$route.params.uuid
			this.getClient(this.uuid)
		} else {

		}
	},
	methods: {
		getClient(uuid) {
			routes.getClient()
			var url = '/api/clients/' + uuid

			axios.get(url)		// Call API GET
				.then(result => {
					this.mapClient(result.data)
				}, error => { console.error(error) })
		},
		mapClient(client) {
			this.client = client
			this.client['viewAt'] = new Date()
		},
		addClient() {
			this.client.active = true
			this.client['viewAt'] = new Date()

			axios.post('api/clients', this.client)
				.then(res => {
					$('#alertSuccess').alert()	// eslint-disable-line no-undef
					this.client = {}
					this.client.isEdit = false
					this.getClient(this.client.uuid)
				}).catch(err => {
					console.log(err)
					$('#alertError').alert()	// eslint-disable-line no-undef
				})
		},
		updateClient() {
			axios.put(`/api/clients/${this.client.uuid}`, this.client)
				.then(res => {
					$('#alertSuccess').alert()	// eslint-disable-line no-undef
					this.client = {}
					this.client.isEdit = false
					this.getClient(this.client.uuid)
					console.log(res)
				}).catch(err => {
					console.log(err)
					$('#alertError').alert()	// eslint-disable-line no-undef
				})
		},
		deleteClient(uuid) {
			axios.delete(`/api/clients/${uuid}`)
				.then(res => {
					this.client = {}
					console.log(res)
				}).catch(err => { console.log(err) })
		}
	}
}
</script>