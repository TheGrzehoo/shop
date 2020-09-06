<template>
  <div class="d-flex flex-column align-items-center px-3">
    <v-btn to="/basket" color="primary" class="mt-5">Przejdź do koszyka</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      productsInBasket: 'basket/getProducts',
      productsData: 'products/getProducts',
    }),
    products: async () => {
      const productsArray = this.productsInBasket().map((item) => item.id)
      return await this.productsData(productsArray)
    },
  },
}
</script>

<style></style>
