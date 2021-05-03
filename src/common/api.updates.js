import Axios from 'axios'
import { ref } from 'vue'

export default function useUpdates() {
	// Déclaration
	const url = '/api/updates'
	let clients = ref([])

	const update = (file) => {
		// debugger
		// BDPM
		let api = url + '/' + file
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
	const readUpdateDate = (file) => {
		
	}
	return { update, readUpdateDate }
}