<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <el-table :data="list">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time">
            <span>{{scope.row.date}}</span>
          </i>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名：{{scope.row.name}}</p>
            <p>住址：{{scope.row.address}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium" >{{scope.row.name}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column 
        label="操作">
        <template slot-scope="scope">
          <el-button 
            si="mini" 
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { MessageBox } from 'element-ui'
//将handleDelete没有confirm功能的毛胚函数装修到confirm 功能
function confirmation(target, name, descriptor){
  // console.log(target, name, descriptor)
  let oldValue = descriptor.value
  console.log(oldValue)
  descriptor.value = function(...args){
    // console.log(args)
    MessageBox.confirm('您确定要删除吗', '提示')
      .then(oldValue.bind(this, ...args))
      .catch(() => {})
  }
  return descriptor
}
export default {
  data(){
    return {
      list: [{
        date: '2016-05-02',
        name: '胡嘎哈',
        address: '上海市杨浦区五角场镇123'
      },
      {
        date: '2016-05-04',
        name: '刘建军',
        address: '上海市杨浦区五角场镇321'
      }
      ]
    }
  },
  methods: {
    @confirmation
    handleDelete(index, row){
      this.list.splice(index, 1)
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
