<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div>
      <el-input v-model="listQuery.title" placeholder="按文章搜索"
      style="width:200px;" class="filter-item"
      @keyup.enter.native="getList"
      ></el-input>
      <el-input v-model="listQuery.author" placeholder="按作者搜索"
      style="width:200px;" class="filter-item"
      @keyup.enter.native="getList"
      ></el-input>
    </div>
    <el-table :data="list">
      <el-table-column label="ID" prop="id" 
      align="center" width="80">
      </el-table-column>
      <el-table-column label="Title" prop="title" 
      align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.title}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="ID" prop="author" 
      align="center" width="80">
      </el-table-column> -->
      <el-table-column label="author" prop="author" 
      align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.author}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  
      @current-change="getList" 
      :total="total" 
      :page-size="listQuery.limit"
      layout="total, prev, pager, next"
      :current-page.sync="listQuery.page"
    />
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data(){
    return {
      list:[],
      total: 0,
      listLoading: false,
      listQuery:{
        limit: 20,
        page: 1,
        title: '',
        author: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(){
      console.log(this.listQuery)
      Axios.get('/vue-element-admin/article/list',{
        params: this.listQuery //查询对象
      })
        .then(response => {
          // console.log(response.data.total)
          this.list = response.data.list
          this.total = response.data.total
        })
    }
  }
}
</script>

<style>
</style>
