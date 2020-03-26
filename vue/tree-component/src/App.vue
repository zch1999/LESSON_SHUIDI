<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- <el-tree :data="data" 
      node-key=""
      show-checkbox>

    </el-tree> -->
    <c-tree :data="mydata"></c-tree>
  </div>
</template>

<script>
export default {
  name: App,
  data(){
    return {
      data:[
        {
          id: 1,
          label: '一技 1',
          children:[{
            id: 4,
            label: '二级 1-1',
            children:[{
              id: 9,
              label: '三级'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
          },{
            id: 6,
            label: '二级 2-2',
          }]
        },
        {
          id: 3,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
          },{
            id: 6,
            label: '二级 2-2',
          }]
        },
      ],
      mydata: [
        {
          
        }
      ]
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
