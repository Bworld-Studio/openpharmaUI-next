import axios from 'axios'
import { ref } from "vue"

export default function commonFunctions() {
	let status = ref(false)

	function getStatus() {
		// debugger
		axios.get('/api/status')
			.then( result => {
				// debugger
				if (result.status === 200) status.value = true
			},
			error => {
				status.value = false
			}
		)
	}
	return { getStatus, status }
}