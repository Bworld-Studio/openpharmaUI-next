import Axios from 'axios'
import { ref } from 'vue'

export default function useCommon() {
	let status = ref(false)

	function getStatus() {
		Axios.get('/api/status')
			.then( result => {
				if (result.status === 200) status.value = true
			},
			error => {
				status.value = false
			}
		)
	}
	return { getStatus, status }
}