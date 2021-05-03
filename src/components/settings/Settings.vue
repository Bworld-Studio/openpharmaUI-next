<template>
	<div id="products-list" class="container">
		<h2 class="title">{{$t('settings.title')}}</h2>
		<!-- <div>
			<div class="">
				<h1 class="text-center">Settings</h1>
			</div>
			<div class="navbar-nav mr-auto locale-changer">
				<select v-model="$i18n.locales" class="form-control-sm">
					<option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.lang">{{ lang.locale }}</option>
				</select>
			</div>
		</div> -->
	</div>
</template>

<style>

</style>

<script>

// import Axios from 'axios'
export default {
	name: 'Settings',
	data () {
		return {
			langs: []
		}
	},
	mounted () {
		console.log('App monted')
		this.getLocalesList()
	},
	methods: {
		getLocalesList () {
			for (var property in this.$i18n.messages) {
				if (this.$i18n.messages.hasOwnProperty(property)) {
					this.langs.push({ 'lang': property, 'locale': this.$i18n.messages[property].global.locale })
				}
			}
		}
	}
}
</script>