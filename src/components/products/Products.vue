<template>
	<div id="products-list" class="container">
		<div>
			<div class="">
				<h2 class="title">{{$t('products.title')}}</h2>
					<button class="btn btn-info" v-on:click="getProducts()">{{$t('buttons.edit-button')}}</button>
				 <table class="table">
					<tr v-for="(line) in products" v-bind:key="line.cis" v-bind:title="line.labelMed">
						<td class="text-left">{{line.labelMed}}</td>
						<td class="text-left">{{line.pharmaForm}}</td>
						
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<style>
</style>

<script>
 import axios from 'axios'

export default {
setup() {
	const products = []
	const url = '/api/products/'
	const getProducts = function () {
		axios.get(url).then(result => {
			products = result
		}).catch(error =>{console.log(error)})
	}
	return {
		products,
		getProducts
	}
}
}
</script>
