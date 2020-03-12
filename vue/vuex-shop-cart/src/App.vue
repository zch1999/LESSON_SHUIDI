<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="(product, index) in products" :key="index">
      {{product.title}}
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      products: []
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
  },
  computed:{
    ...mapGetters([
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
