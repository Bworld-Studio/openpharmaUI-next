<template>
	<div id="clients">
		<Header v-bind="headerParams"/>
		<main class="container__main container-fluid">
			<!-- <button class="btn btn-primary btn-sm" v-on:click="createClient()">{{ t('clients.action1') }}</button> -->
			<table class="table"> <!-- class="table" -->
				<tr v-for="(line) in clients" v-bind:key="line.uuid" v-bind:title="line.numSS">
					<td scope="col" class="text-left">{{line.lastName}}</td>
					<td scope="col" class="text-left">{{line.firstName}}</td>
					<td scope="col" class="text-left">{{ d(line.birthDate) }}</td>
					<td scope="col" class=""> <!-- text-right -->
						<button type="button" class="btn btn-primary btn-sm" v-on:click="displayClient(line)">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
								<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
								<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
							</svg>
						</button>
						<i class="bi bi-eye-fill"></i>
						<button type="button" class="btn btn-success btn-sm" v-on:click="editClient(line)">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
							</svg>
						</button>
						<!-- <button class="btn btn-danger btn-sm" v-on:click="deleteClient(line.uuid)">{{ t('buttons.delete-button') }}</button> -->
					</td>
					<!-- <button class="btn btn-primary btn-sm" v-on:click="editClient(line)">{{ t('buttons.edit-button') }}</button> -->
				</tr>
			</table>
		</main>
	</div>
</template>

<style>

</style>

<script>
// Utilities
import { ref, reactive, onMounted, computed, provide } from 'vue'
import { useI18n } from 'vue-i18n' // I18n
import { useRouter, useRoute } from 'vue-router'
import Axios from 'axios' // eslint-disable-line no-unused-vars

// Views
import Header from '../header/Header.vue'
import Client from './Client.vue'

// API
import useClients from '../../common/api.clients.js'

export default {
	components: { Header },
	setup(props, context) {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels
		const { clients, getClients, searchClients } = useClients()

		// API Calls
		const search = (term) => {
			// debugger
			searchClients(term)
		}

		onMounted( () => getClients() )

		// Navigation to Client.vue
		const router = useRouter() // Import Router

		const createClient = () => {
			router.push({ name: 'Client', params: { uuid: '' } })
		}

		const editClient = (client) => {
			// debugger
			router.push({ name: 'Client', params: { uuid: client.uuid, mode: 'E' } })
		}

		const displayClient = (client) => {
			// debugger
			router.push({ name: 'Client', params: { uuid: client.uuid, mode: 'D' } })
		}

		// const actionsList = [{ label: t('clients.action0') }, { label: t('clients.action1') } ]
		const headerParams = { view: 'clients', title: t('clients.title'), actions: [{ label: t('clients.action0') }, { label: t('clients.action1') } ] } // Header
		provide('action0', getClients)
		provide('action1', createClient)
		provide('search', search)

		return { clients, createClient, editClient, displayClient, search, getClients, headerParams, t, d }
	}
}
</script>