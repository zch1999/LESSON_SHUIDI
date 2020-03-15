<template>
  <div id="app">
    <div v-for="(user, index) in getUsers" :key="index">
      {{user.name}}{{user.id}}
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// 本地map 借数据
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      users: []
      //用户列表
      // users: [
      //   {
      //     "adress": {
      //       "city": "Los Angeles",
      //       "state": 'California',
      //       "pincode": "123"
      //     },
      //     "tags": [
      //       "music",
      //       "blog",
      //       "cricket"
      //     ],
      //     "name": "Tom Benzamin"
      //   },
      //   {
      //     "adress": {
      //       "city": "赣州",
      //       "state": '江西',
      //       "pincode": "331000"
      //     },
      //     "tags": [
      //       "music",
      //       "blog",
      //     ],
      //     "name": "志浩"
      //   }
      // ]
    }
  },
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  mounted(){//使用生命周期取数据
  //派发动作
    // this.$store.dispatch('fetchUsers')
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
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
