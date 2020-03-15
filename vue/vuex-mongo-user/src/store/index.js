import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      // {
      //   "adress": {
      //     "city": "Los Angeles",
      //     "state": 'California',
      //     "pincode": "123"
      //   },
      //   "tags": [
      //     "music",
      //     "blog",
      //     "cricket"
      //   ],
      //   "name": "Tom Benzamin"
      // },
      // {
      //   "adress": {
      //     "city": "赣州",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "music",
      //     "blog",
      //   ],
      //   "name": "志浩"
      // }
    ]
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    }
  },
  actions: { //写入状态的第一步
    fetchUsers(context){
      api
        .fetchUsers((users) => {
          // console.log(users)
          context.commit('setUsers', users)
      })
    }
  },
  getters: {
    getUsers(state){
      return state.users.map((user,index) => {
        user.id = user.adress.city + user.adress.pincode
        return user
      })
    }
  },
  modules: {
  }
})
