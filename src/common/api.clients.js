import Axios from 'axios'
import { ref } from 'vue'

export default function useClients() {

	// Déclaration
	const api = '/api/clients' 
	let clients = ref([])

	const getClients = () => {
		// debugger
		Axios.get(api).then(
			result => {
				debugger
				clients.value = result.data
			},
			error => {
				console.error(error)
			}
		)
	}
	return { clients, getClients }
}