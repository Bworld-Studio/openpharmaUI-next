import Axios from 'axios'
import { ref } from 'vue'

export default function useProducts() {
	const api = '/api/products/' // Déclaration

	let products = ref([]) // Changement en let au lieu de const => Expliquer

	const getProducts = function () {
		Axios.get(api)
			.then(result => {
				if ( result.status == 200 ) products.value = result.data // Result.data avec contrôle sur le résultat de l'appel
				// console.log(products.value.length)

			})
			.catch(error =>{
				console.log(error)
			})
	}
	const getProduct = function (cip) {
		let url = api + cip
		Axios.get(url)
			.then(result => {
				if ( result.status == 200 ) products.value = result.data // Result.data avec contrôle sur le résultat de l'appel
				// console.log(products.value.length)

			})
			.catch(error =>{
				console.log(error)
			})
	}
	return { products, getProducts }
}