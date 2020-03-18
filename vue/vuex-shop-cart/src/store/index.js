import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/shop.js"
import product from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

let products = []
Api.getProducts((_products) =>{
  products = _products
});

export default new Vuex.Store({
  state: {
    // products: products,
    // userInfo: {
    //   uid: 10001,
    //   username: '浩哥'
    // }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    cart
  }
})
