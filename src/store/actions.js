import {reqAddress,reqCategorys,reqShops, reqLogOut} from '../api'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
     RESET_USER_INFO,
     RECEIVE_USER_INFO
    } from './mutation-types'
export default{
    //异步获取地址
    async getAddress({commit,state}){

        const geohash=state.latitude + ','+state.longitude

        const result=await reqAddress(geohash)
        commit(RECEIVE_ADDRESS,{address:result.data})
    },
    //异步获取分类
    async getCategorys({commit}){
        const result=await reqCategorys()
        // console.log(result.data)
        commit(RECEIVE_CATEGORYS,{categorys:result.data})
    },
    //异步获取商家列表
    async getShops({commit,state}){
        const {latitude,longitude} =state
        const result =await reqShops({latitude,longitude})
        commit(RECEIVE_SHOPS,{shops:result.data})
    },
   // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

    //异步退出
    async reqLogOut({commit}){
        const result =await reqLogOut()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    }
}