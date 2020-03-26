<!--  -->
<template>
  <div class="tree-menu">
      <ul v-for="item in data" :key="item.name">
          <c-tree-item :data="item">
          </c-tree-item>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'c-tree',
  props: {
      data: {
          type: [Object, Array],
          required: true
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
