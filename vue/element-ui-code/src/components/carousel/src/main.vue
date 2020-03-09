<!--  -->
<template>
  <div :class="carouselClasses">
      <!-- carousel -->
      <div
        class="el-carousel__container"
        :style="{ height: height }">
        <slot></slot>
      </div>
      <ul
        v-if="indicatorPosition !== 'none'"
        :class="indicatorsClasser">

      </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props:{
    height: Number,
    direction: {
      type: String,
      default: 'horizontal',
      validator(val){
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  computed:{
    carouselClasses(){
      const classes = ['el-carousel', 'el-carousel--' + this.direction];
      return classes
    },
    indicatorsClasser(){
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
