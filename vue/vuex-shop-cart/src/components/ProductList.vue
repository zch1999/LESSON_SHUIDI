<!--  -->
<template>
  <ul>
      <!-- {{this.$store.state.product.all}} -->
      <li 
        v-for="pro in product" :key="pro.id">
        {{pro.title}} - {{pro.price}} - {{pro.inventory}}
        <br>
        <button 
          :disabled="!pro.inventory"
          @click="addProductToCart(pro)">
            add to cart
        </button>
      </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: mapState({
        product: (state) => state.product.all
    }),
    created(){
        this.$store.dispatch('product/getAllProducts')
    },
    methods:mapActions('cart',[
        'addProductToCart'
    ]),
    data () {
       return {
    }
  }
}
</script>

<style>
  [disabled]{
    cursor: not-allowed
  }
</style>
