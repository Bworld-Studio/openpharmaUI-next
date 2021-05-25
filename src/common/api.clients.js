import Axios from 'axios'
import { ref } from 'vue'
import commonFunctions from '../common/functions'

export default function useClients() {
	const api = '/api/clients' // API URL
		// Déclarations
	const clients = ref([])

	const getClients = function() {
		// debugger
		Axios.get(api).then(
			res => {
				// debugger
				clients.value = res.data
			},
			err => console.error(err)
		)
	}

	const searchClients = function(term) {
		// debugger
		Axios.get(api, { params: { search: term } })
			.then(res => {
				if ( res.status == 200 ) clients.value = res.data // Result.data avec contrôle sur le résultat de l'appel
			})
			.catch(err =>{
				console.log(error)
			})
	}
	
	return { clients, getClients, searchClients }
}