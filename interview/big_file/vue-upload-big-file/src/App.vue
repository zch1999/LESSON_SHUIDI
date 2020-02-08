<template>
  <div class="app">
    <div>
      <input type="file" @change="handleFileChange">
      <el-button @click="handleUpload">上传</el-button>
    </div>
  </div>
</template>

<script>

const Status ={ //良好的代码风格， 提高代码可读性
  wait: 'wait',
  pause: 'pause',
  uploading: 'uploading'
}
const SIZE = 0.5*1024*1024;
export default {
  name: 'App',
  data: ()=>({
    container:{ //将我们的任务放到一起
      file: null,
      hash:"",
    },
    status: Status.waiting
  }),
  methods:{
    async calculateHash(fileChunkList){
      return new Promise(resolve =>{
        //封装花时间的任务
        //web workers
        //js 单线程的语言 UI主线程
        //html5 web woekers 单独开一个线程 独立的执行  完成后回调 不会阻塞原来的UI
        //html5 带来的优化
        this.container.worker = new Worker("/hash.js");
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = e =>{
          console.log(e.data);
        }
      })
    },
    async handleUpload(e){
      //大量的任务
      if(!this.container.file){
        return;
      }
      this.status = Status.uploading;
      const fileChunkList = this.createFileChunk(this.container.file);
      // console.log(fileChunkList)
      this.container.hash = await this.calculateHash(fileChunkList)
    },   
    //es6的特性你如何结合？ 少传这个参数 
    createFileChunk(file, size=SIZE){
      const fileChunkList = [];
      let cur = 0;
      while(cur < file.size){
        fileChunkList.push({
          file: file.slice(cur, cur+size)
        })
        cur += size;
      }
      return fileChunkList;
    },
    handleFileChange(e){
      // 分割文件
      const [file] = e.target.files; //拿到第一个文件
      // console.log(e.target.files)
      this.container.file = file;
    }
  },
  components: {
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
