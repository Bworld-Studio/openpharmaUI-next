import Axios from 'axios'
import { ref } from 'vue'

export default function commonFunctions() {

	const get = function(url) {
		let result
		Axios.get(url).then(
			res => {
				result = res.data
				
			},
			err => {
				console.log(error)
			}
		)
		debugger
		return result
	}
	return { get }
}