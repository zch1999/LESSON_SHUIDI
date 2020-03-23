<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <h1>订单管理</h1>
    <el-table v-loading="listLoading" :data="list" align="center">
      <el-table-column label="ID" prop="_id" align="center" width="80" >
        <template slot-scope="{row}">
          <span>{{row._id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderdate" align="center" width="400">
        <template slot-scope="{row}">
          <span>{{row.orderdate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" prop="status" align="center" width="100">
        <template slot-scope="{row}">
          <span>{{row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮费" prop="shoppingee" align="center" width="100">
        <template slot-scope="{row}">
          <span>{{row.shoppingee}}</span>
        </template>
      </el-table-column>
      <el-table-column label="单价" prop="total" align="center" width="100">
        <template slot-scope="{row}">
          <span>{{row.total}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
      :current-page.sync="page"  
      :total="total" 
      :pagesize="limit" 
      layout="total, prev, pager,next"
      @click="handleCurrentChange(current-page.sync)"
      >

    </el-pagination>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return {
      page: 1,
      total:100,
      limit: 1,
      listLoading: true,
      list: [
        // {
        //   "_id":1,
        //   "name": "胡嘎哈",
        //   "orderdate": new Date(),
        //   "status": "completed",
        //   "shoppingee": 5,
        //   "total": 20 
        // },
        // {
        //   "_id":2,
        //   "name": "liugbh",
        //   "orderdate": new Date(),
        //   "status": "completed",
        //   "shoppingee": 5,
        //   "total": 20 
        // },
        // {
        //   "_id":3,
        //   "name": "减肥了",
        //   "orderdate": new Date(),
        //   "status": "canceled",
        //   "shoppingee": 5,
        //   "total": 20 
        // },
        // {
        //   "_id":4,
        //   "name": "高呼口号",
        //   "orderdate": new Date(),
        //   "status": "completed",
        //   "shoppingee": 5,
        //   "total": 20 
        // }
      ]
    }
  },
  mounted(){
    Axios.post('/api/orders',{
      params:{
        //分页
      }
    }).then(res =>{
      console.log(res)
      this.list = res.data.orders
    })
     setTimeout(() => {
      this.listLoading =false
    },3000)
  },
  methods:{
    handleCurrentChange(page){
      console.log(page)
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
