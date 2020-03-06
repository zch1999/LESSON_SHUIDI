<template>
  <div id="app">
    <p>{{message}}</p>
    <p> 大写 {{ message | capitalize }}</p>
    <p> 逆序 {{ reverseMessage }}</p>
    <div id="watch-example">
      <p>
        Ask a yes/no question
        <input v-model="question" @input="askQuestion" />
      </p>
      <p>{{answer}}</p>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios' //vue 的请求库
import _ from 'lodash'

export default {
  name: 'App',
  components: {
  },
  computed:{
    reverseMessage(){
      return this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize(word){
      return word.toUpperCase()
    }
  },
  methods:{
    askQuestion(){
      axios
        .get('https://yesno.wtf/api')
        .then(response =>{
          console.log(response)
          this.answer = response.data.answer
        })
    },
    getAnswer(){
    },
    debouncedGetAnswer(){
      _.debounce(this.askQuestion.bind(this))
    }
  },
  data(){
    return {
      message: 'Hello',
      question: '',
      answer: 'i cannot give you an answer util you ask a question!'
    }
  },
  watch: {
    question: function(newQuestion, oldQuestion){
      // console.log(newQuestion,oldQuestion)
      // this.answer = 'wait for you to stop '
      // this.askQuestion()
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
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
  margin-top: 60px;
}
</style>
