/*	
 * 入口文件
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer.js'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import Split from './components/Split/Split.vue'
import './filters/index.js' // 加载过滤器
Vue.config.devtools = true
Vue.component(Button.name,Button,Split)
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
	loading
  })
new Vue({
	el: '#app',
	render: h=> h(App),
	router,
	store,

	
})
