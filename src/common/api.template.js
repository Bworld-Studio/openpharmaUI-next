import Axios from 'axios'
import { ref } from 'vue'

export default function useUpdates() {

	// Déclaration
	const url = '/api/updates/'
	let lastUpdateDate = ref()

	const update = (file) => {

		let api = url + file
		debugger
		Axios.get(api).then(
			result => {
				lastUpdateDate.value = result.data
			},
			error => {
				console.error(error)
			}
		)
	}

	const readUpdateDate = (file) => {
		
		let api = url + file
		Axios.get(api).then(
			result => {
				lastUpdateDate.value = result.data
			},
			error => {
				console.error(error)
			}
		)

	}
	return { update, readUpdateDate }
}