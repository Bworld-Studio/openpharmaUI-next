<template>
<div id="client">
	<Header v-bind="headerParams"/>
	<form v-on:submit.prevent="addClient">
		<div class="container__main container-fluid">
			<div class="card__container">
				<div class="card" style="width: 45%">
				<div class="card__title-color"><h3>{{ t('client.ident-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<span>
								<label for="lastNameInput">{{ t('client.name-input') }}</label>
								<input type="text" v-model="client.lastName" :placeholder=" t('client.name-input')" :id="lastNameInput" class="form-control form-control-sm" />
							</span>
							<span>
								<label for="firstNameInput">{{ t('client.firstname-input') }}</label>
								<input type="text" v-model="client.firstName" :placeholder=" t('client.firstname-input')" :id="firstNameInput" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="birthDateInput">{{ t('client.birthdate-input') }}</label>
								<input type="date" v-model="client.birthDate" :placeholder=" t('client.birthdate-input')" :id="birthDateInput" class="form-control form-control-sm"/>
							</span>
						</div>
					</div>

				</div>
				<div class="card" style="width: 45%;">
				<div class="card__title-color"><h3>{{ t('client.address-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<span>
								<label for="addressInput">{{ t('client.address-input') }}</label>
								<input type="text" v-model="client.address" :placeholder=" t('client.address-input')" :id="addressInput" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="address2Input">{{ t('client.address2-input') }}</label>
								<input type="text" v-model="client.address2" :placeholder=" t('client.address2-input')" :id="address2Input" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="zipcodeInput">{{ t('client.zipcode-input') }}</label>
								<input type="text" v-model="client.zipcode" :placeholder=" t('client.zipcode-input')" :id="zipcodeInput" class="form-control form-control-sm"/>
							</span>
							<span>
								<label for="cityInput">{{ t('client.city-input') }}</label>
								<input type="text" v-model="client.city" :placeholder=" t('client.city-input')" :id="cityInput" class="form-control form-control-sm"/>
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="birthDateInput">{{ t('client.cellphone-input') }}</label>
								<input type="tel" v-model="client.cellphone" :placeholder=" t('client.cellphone-input')" :id="cellphoneInput" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" class="form-control form-control-sm" />
							</span>
						</div>
						<div class="card_line">
							<!-- <div class="form-input">
								<label>
									<input required>
									<span class="placeholder">Text Input</span>
								</label>
							</div> -->
						</div>
					</div>
				</div>
				<div class="card" style="width: 45%;">
					<div class="card__title-color"><h3>{{ t('client.care-title') }}</h3></div>
					<div class="card__wrapper">
						<div class="card__line">
							<label for="numSSInput">{{ t('client.numss-input') }}</label>
							<span>
								<input type="text" v-model="client.numSS" :placeholder="t('client.numss-input')" id="numSSInput" class="form-control form-control-sm input_ss" size="13" />
							</span>
							<span>
								<input type="number" v-model="client.cleSS" :placeholder="t('client.keyss-input')" id="cleSSInput" class="form-control form-control-sm input_key" min="0" max="99" size="2" />
							</span>
						</div>
						<div class="card__line">
							<span>
								<label for="birthDateInput">{{ t('client.center-input') }}</label>
								<input type="text" v-model="client.center" :placeholder=" t('client.center-input')" :id="centerInput" class="form-control form-control-sm"/>
							</span>
							<span>
								<label for="birthDateInput">{{ t('client.viewAt-input') }}</label>
								<input readonly type="text" v-model="client.viewAt" :placeholder=" t('client.viewAt-input')" :id="viewAtInput" class="form-control form-control-sm form-control-plaintext"/>
							</span>
							<span>
								<!-- <button v-if="client.isEdit == false" type="submit" class="btn btn-success btn-sm" >{{ t('buttons.save-button') }}</button> -->
								<!-- <button v-else v-on:click="updateClient()" type="button" class="btn btn-primary btn-sm mt-3" >{{ t('buttons.update-button') }}</button> -->
							</span>
						</div>
					</div>
				</div>
				<div class="card" style="width: 45%;">
					<div class="card__title-color"><h3>{{ t('client.patho-title') }}</h3></div>
				</div>
			</div>
			<!-- <div class="row g-2"> -->
					<!-- <div class="col-6">
						<div class="p-4 border bg-light"><h1>Identification</h1></div>
						<span class="row">
							<div class="col">
								<label for="lastNameInput">{{ t('client.name-input') }}</label>
								<input type="text" v-model="client.lastName" :placeholder=" t('client.name-input')" :id="lastNameInput" class="form-control form-control-sm" />
							</div>
							<div class="col">
								<label for="firstNameInput">{{ t('client.firstname-input') }}</label>
								<input type="text" v-model="client.firstName" :placeholder=" t('client.firstname-input')" :id="firstNameInput" class="form-control form-control-sm"/>
							</div>
						</span>
					</div> -->
					<!-- <div class="col-6">
						<div class="p-4 border bg-light"> <h1>Adresse</h1></div>
					</div> -->
					<!-- <div class="col-6">
						<div class="p-4 border bg-light"><h1>Prise en charge</h1></div>
							<p>
								<span class="row">
									<label for="numSSInput">{{ t('client.numss-input') }}</label>
									<div class="col">
										<input type="text" v-model="client.numSS" :placeholder="t('client.numss-input')" id="numSSInput" class="form-control form-control-sm input_ss" size="13" />
									</div>
									<div class="col">
										<input type="number" v-model="client.cleSS" :placeholder="t('client.keyss-input')" id="cleSSInput" class="form-control form-control-sm input_key" min="0" max="99" size="2" />
									</div>
								</span>
							</p>
						</div> -->
					<!-- <div class="col-6">
						<div class="p-4 border bg-light"><h1>Physio pathologie</h1></div>
							<p></p>
					</div>			 -->
		<!-- <span class="row">
		</span> -->
		<!-- <span class="row">
			<label for="birthDateInput">{{ t('client.address-input') }}</label>
			<input type="text" v-model="client.address" :placeholder=" t('client.address-input')" :id="addressInput" class="form-control form-control-sm"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{ t('client.address2-input') }}</label>
			<input type="text" v-model="client.address2" :placeholder=" t('client.address2-input')" :id="address2Input" class="form-control form-control-sm"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{ t('client.zipcode-input') }}</label>
			<input type="text" v-model="client.zipcode" :placeholder=" t('client.zipcode-input')" :id="zipcodeInput" class="form-control form-control-sm"/>
		</span>
		<span class="row">
			<label for="birthDateInput">{{ t('client.city-input') }}</label>
			<input type="text" v-model="client.city" :placeholder=" t('client.city-input')" :id="cityInput" class="form-control form-control-sm"/>
		</span> -->
		<!-- <span class="row">
		</span> -->
				<!-- <span class="row">
					<label for="birthDateInput">{{ t('client.center-input') }}</label>
					<input type="text" v-model="client.center" :placeholder=" t('client.center-input')" :id="centerInput" class="form-control form-control-sm"/>
				</span>
				<span class="row">
					<label for="birthDateInput">{{ t('client.viewAt-input') }}</label>
					<input readonly type="text" v-model="client.viewAt" :placeholder=" t('client.viewAt-input')" :id="viewAtInput" class="form-control form-control-sm form-control-plaintext"/>
				</span>
				<span>
					<button v-if="client.isEdit == false" type="submit" class="btn btn-success btn-sm" >{{ t('buttons.save-button') }}</button>
					<button v-else v-on:click="updateClient()" type="button" class="btn btn-primary btn-sm mt-3" >{{ t('buttons.update-button') }}</button>
				</span> -->
			<!-- </div> -->
		</div>
	</form>
</div>
</template>

<style>
	.container__main { color: black; background-color: #f4f4f4; } */
	/* #client .container__main {  } */
	.card__container { display: flex; flex-direction: row; justify-items: left; flex-wrap: wrap; }
	.card {}
	.card__wrapper {margin: 1rem 1rem;}
	.card > h3 { margin-bottom: 0.5rem; }
	.card__line { display: flex; flex-direction: row; }
	/* .card__line > span { display: flex; flex-direction: row; } */
	.input_ss { width: 9em; }
	.input_key { width: 3em; }
	.input_key input[type=number], input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
		-moz-appearance: textfield;
		-webkit-appearance: none;
		margin: 0;
		}
	.card__title {color: white; background-color: #3ab595ff; padding: 0.5rem 1rem;}
</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'
import Axios from 'axios'

// Views
import Header from '../header/Header.vue'

// API

export default {
	components: { Header },
	props: { uuid: String, mode: String },
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		
		const api = '/api/clients/' // Déclaration

		// debugger

		// const uuid = props.uuid
		// const mode = props.mode

		const client = ref({
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
		})

		onMounted( () => {
			// debugger
			if ( props.uuid !== undefined && props.uuid !== '' ) {
				client.value.uuid = props.uuid
				getClient(props.uuid)
			}
		})

		const getClient = (_uuid) => {
			let url = api + _uuid
			console.log(url)
			Axios.get(url)		// Call API GET
				.then(result => {
					// debugger
					mapClient(result.data)
				}, error => { console.error(error) })
		}

		const mapClient = (_client) => {
			client.value = _client
			// client.value['viewAt'] = new Date()
		}
		const addClient = () => {
			client.value.active = true
			// client.value.viewAt = new Date()
			// console.log(client._rawValue)
			// debugger
			Axios.post('api/clients', client._rawValue )
				.then(res => {
					client.value = {}
					client.value.isEdit = false
					getClient(client.value.uuid)
				}).catch(err => {
					console.log(err)
					$('#alertError').alert()	// eslint-disable-line no-undef
				})
		}
		const updateClient = () => {
			Axios.put(`/api/clients/${client.value.uuid}`, client.value)
				.then(res => {
					client.value = {}
					client.value.isEdit = false
					this.getClient(client.value.uuid)
					console.log(res)
				}).catch(err => {
					console.log(err)
					$('#alertError').alert()	// eslint-disable-line no-undef
				})
		}
		const deleteClient = (_uuid) => {
			Axios.delete(`/api/clients/${_uuid}`)
				.then(res => {
					client.value = {}
					console.log(res)
				}).catch(err => { console.log(err) })
		}

		// Header
		let actionsList = [{ label: undefined }, { label: t('buttons.save-button') }]
		const headerParams = { view: 'client', title: t('client.title'), actions: actionsList } // Header
		provide('action1', updateClient)
		// provide('action1', createClient)
		// provide('search', search)

		return { client, addClient, updateClient, deleteClient, headerParams, t, d }
	}
}
</script>