import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Carousel from './components/carousel/index.js'
import CarouselItem from './components/carousel-item/index.js'

// Carousel.install(Vue)
// CarouselItem.install(Vue)

// console.log(Carousel)
// Vue.component(Carousel.name, Carousel)

const components = [
  Carousel,
  CarouselItem
]

//Vue.use()
const install = function(Vue){
  components.forEach(component =>{
    //vue语法中，可以全局引入组件的api
    component.install(Vue)
  })
}

install(Vue)

// Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
