<template>
  <div class="d-flex flex-column align-items-center px-3 py-3">
    <div class="d-flex flex-column">
      <div
        v-for="item in productsInBasket"
        :key="item.id"
        class="basket_product d-flex"
      >
        <div class="basket_icon d-flex mr-4">
          <nuxt-link text :to="'/product/' + item.id"
            ><img :src="item.icon"
          /></nuxt-link>
        </div>
        <div class="basket_content">
          <nuxt-link :to="'/product/' + item.id">{{ item.name }}</nuxt-link>
          <div class="basket_price">{{ item.price }} zł</div>
        </div>
      </div>
    </div>
    <v-btn to="/basket" color="primary" class="mt-5">Przejdź do koszyka</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      productsInBasket: 'basket/getProducts',
    }),
  },
}
</script>

<style scoped>
.basket_icon {
  width: 50px;
  align-items: center;
}
.basket_icon img {
  max-width: 100%;
}
</style>
