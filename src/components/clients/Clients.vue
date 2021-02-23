<template>
	<div id="clients">
		<Header v-bind="headerParams"/>
		<div class="container-fluid">
			<!-- <h2>{{ t('clients.title') }}</h2> -->
			<button class="btn btn-primary btn-sm" v-on:click="createClient()">{{ t('clients.action2') }}</button>
			<table class="table">
				<tr v-for="(line) in clients" v-bind:key="line.uuid" v-bind:title="line.numSS">
					<td class="text-left">{{line.lastName}}</td>
					<td class="text-left">{{line.firstName}}</td>
					<td class="text-left">{{ d(new Date(line.birthDate), "short") }}</td>
					<td class="text-right">
						<button class="btn btn-primary btn-sm" v-on:click="editClient(line)">{{ t('buttons.edit-button') }}</button>
						<!-- <button class="btn btn-danger btn-sm" v-on:click="deleteClient(line.uuid)">{{ t('buttons.delete-button') }}</button> -->
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style>

</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios' // eslint-disable-line no-unused-vars

// Views
import Header from '../header/Header.vue'

// API

export default {
	components: { Header },
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		const actions = [{ },]
		const headerParams = { view: 'clients', title: t('clients.title'), actions: actions } // Header

		const clients = ref([])

		// API Calls
		const getClients = () => {
			// debugger
			axios.get('/api/clients').then(
				result => {
					// debugger
					clients.value = result.data
				},
				error => {
					console.error(error)
				}
			)
		}

		const search = () => {
			debugger
		}

		onMounted( () => getClients() )

		// Navigation to Client.vue
		const router = useRouter() // Import Router
		const createClient = () => {
			router.push({ name: 'client', params: { uuid: undefined } })
		}
		const editClient = (client) => {
			console.log(this)
			router.push({ name: 'client', params: { uuid: client.uuid } })
		}

		return { clients, createClient, editClient, headerParams, t, d }
	}
}
</script>