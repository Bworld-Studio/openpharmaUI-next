import Axios from 'axios'
import { ref } from 'vue'

export default function useProducts() {
	const api = '/api/products' // api url
	
	// Déclaration

	let products = ref([]) // Changement en let au lieu de const => Expliquer

	const getProducts = function () {
		Axios.get(api)
			.then(result => {
				if ( result.status == 200 ) products.value = result.data // Result.data avec contrôle sur le résultat de l'appel
			})
			.catch(error =>{
				console.log(error)
			})
	}

	const searchProducts = function(term) {
		let query = { search: term }
		Axios.get(api, { params: { search: term } })
			.then(result => {
				if ( result.status == 200 ) products.value = result.data // Result.data avec contrôle sur le résultat de l'appel
			})
			.catch(error =>{
				console.log(error)
			})
	}

	const getProduct = function (cis) {
		let url = api + '/' + cis
		Axios.get(url)
			.then(result => {

			})
			.catch(error =>{
				console.log(error)
			})
	}
	return { products, getProducts, searchProducts, getProduct }
}