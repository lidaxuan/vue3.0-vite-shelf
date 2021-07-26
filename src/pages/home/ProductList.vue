<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 10:22:01
 * @FilePath: /my-vue-app/src/pages/home/ProductList.vue
-->
<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - 
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
  222
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
  },
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
