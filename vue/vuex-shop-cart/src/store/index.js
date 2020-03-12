import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/shop.js"

Vue.use(Vuex)

let products = []
Api.getProducts((_products) =>{
  products = _products
});

export default new Vuex.Store({
  state: {
    products: products
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
