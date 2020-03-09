<template>
  <div id="app">
    <carousel height="150px">
      <carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </carousel-item>
    </carousel>
    <!-- <carousel-item /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <el-alert title="成功提示的文案" type="error" :showIcon="true" center="true" description="成功了成功了">
    </el-alert> -->
    <!-- <ElAlert/> -->
  </div>
</template>

<script>
import ElAlert from './components/ElAlert.vue'

export default {
  name: 'App',
  components: {
    // ElAlert
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
