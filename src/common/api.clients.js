import Axios from 'axios'
import { ref } from 'vue'
import commonFunctions from '../common/functions'

export default function useClients() {
	const url = '/api/clients/' // API URL
		// Déclarations
	let clients = ref([])

	const getClients = () => {

		Axios.get(url).then(
			result => clients.value = result.data,
			error => console.error(error)
		)

	}
	
	return { clients, getClients }
}