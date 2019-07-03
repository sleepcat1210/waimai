/*	
 * 入口文件
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
Vue.config.devtools = true
Vue.component(Button.name,Button)
new Vue({
	el: '#app',
	render: h=> h(App),
	router,
	store,

	
})
