<template>
	<div id="app">
		<router-view></router-view>
		<FooterGuide v-show="$route.meta.footer"></FooterGuide>
	</div>
</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	export default {
		created(){
			this.$store.dispatch('getAddress')			
		},
		components: {//组件
			FooterGuide
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#app
		width 100%
		height 100%
		backgroud #f5f5f5
</style>