/*	
 * 路由器模快
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Person from '../pages/Person/Person.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRat from '../pages/Shop/ShopRat/ShopRat.vue'

Vue.use(VueRouter)
export default new VueRouter({
	routes:[
		{
			path: '/',
			redirect: '/msite',
			meta:{
				footer:true
			}
		},
		{
			path: '/msite',
			component: Msite,
			meta:{
				footer:true
			},
		},
		{
			path: '/search',
			component: Search,
			meta:{
				footer:true
			},
		},
		{
			path: '/order',
			component: Order,
			meta:{
				footer:true
			},
		},
		{
			path: '/shop',
			component: Shop,
			children:[
				{
					path:'/shop/goods',
					component:ShopGoods,
				},
				{
					path:'/shop/rate',
					component:ShopRat,
				},
				{
					path:'/shop/info',
					component:ShopInfo,
				},
				{
					path:'',
					redirect:'/shop/goods'
				},
			]
		},
		{
			path: '/login',
			component: Login,
		},
		{
			path: '/person',
			component: Person,
			meta:{
				footer:true
			},
		}	
	]
})
