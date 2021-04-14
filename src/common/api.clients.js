import axios from 'axios'
import { ref } from 'vue'

export default function useClients() {
	const api = '/api/clients' // Déclaration
	let clients = ref([])

	const getClients = () => {
		// debugger
		axios.get('/api/clients').then(
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