<template>
  <div class="app">
    <div>
      <input type="file" @change="handleFileChange">
      <el-button @click="handleUpload">上传</el-button>
    </div>
    <div>
      <div>计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
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
    status: Status.waiting,
    hashPercentage: 0,
    data:[], //上传的数据
    requestList:[] //xhr
  }),
  methods:{
     request({
            url,
            method = 'POST',
            data,
            onProgress= e => e,
            headers = {},
            requestList //上传的文件列表
        }) {
            return new Promise(resolve => {
                const xhr = new XMLHttpRequest(); //js ajax对象
                xhr.open(method, url); //请求
                xhr.upload.onprogress = onProgress;
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]) //请求加头
                });
                xhr.send(data);
                xhr.onload = e => {
                  if(requestList){
                    const xhrIndex = requestList.findIndex(item => item === xhr);
                    requestList.splice(xhrIndex, 1)
                  }
                  resolve({
                      data: e.target.response
                  });
                }
                if(requestList){
                  requestList.push(xhr)
                  // console.log(requestList)
                }
            })

        },
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
          // console.log(e.data);
          const { percentage, hash } = e.data;
          this.hashPercentage = percentage;
          if(hash){
            resolve(hash);
          }
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
      // console.log(this.container.hash)
      // 文件 hash 同一个文件不用多次上传
      const { shouldUpload, uploadedList } = await this.verifyUpload( //上传，验证
        this.container.file.name,
        this.container.hash
      )
      // console.log(shouldUpload, uploadedList)
      if(!shouldUpload){
        this.$message.success('秒传:上传成功')
        this.status = Status.wait;
        return ;
      }
      this.data = fileChunkList.map(({ file }, index) => ({
        fileHash: this.container.hash,
        index,
        hash: this.container.hash + "-" + index , //每个块都有自己的index在内的hash，可排序，可追踪
        chunk: file,
        size: file.size,
        percentage: uploadedList.includes(index)?100:0//判断是否上传
      }))
      await this.uploadChunks(uploadedList)
    },   
    async uploadChunks(uploadedList = []){
      // console.log(this.data)
      //数据数组this.data => 请求数组 => 并发
      const requestList = this.data.map(({chunk, hash, index})=>{
        const formData = new FormData();
        formData.append("chunk", chunk);
        formData.append("hash", hash);
        formData.append("filename",this.container.file.name);
        formData.append("fileHash", this.container.hash);
        return { formData, index }
      }).map(async ({formData, index })=>
        this.request({
          url: 'http://localhost:3000',
          data: formData,
          onProgress: this.createProgressHandler(this.data[index]),
          requestList: this.requestList //
        })
      )
      console.log(requestList)
      await Promise.all(requestList);
      console.log('可以发送合并请求了')
    },
    createProgressHandler(item){
      return e => {
        item.percentage = parseInt(String(e.loaded/e.total)*100);
        console.log(e.loaded,e.total)
      }
    },
    async verifyUpload(filename, fileHash){
      const { data } = await this.request({
        url: 'http://localhost:3000/verify',
        headers:{
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename,
          fileHash
        })
      })
      return JSON.parse(data)
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
