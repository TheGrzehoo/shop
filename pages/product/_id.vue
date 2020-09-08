<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <v-img :src="product.icon" :alt="product.name" />
    </v-col>
    <v-col cols="12" sm="6">
      <h1>{{ product.name }}</h1>
      <span class="price my-3 d-block">{{ product.price }} zł</span>
      <v-form ref="productForm">
        <v-select
          v-model="size"
          name="selected_size"
          :items="product.sizes"
          label="Rozmiar"
          solo
          required
          :rules="[(value) => !!value || 'Wybierz rozmiar']"
        ></v-select>
        <v-btn
          large
          type="submit"
          color="primary"
          :loading="addingToCart"
          :disabled="addingToCart"
          @click.prevent="addToBasket"
          >Dodaj do koszyka</v-btn
        >
      </v-form>
    </v-col>
    <v-col cols="12"> {{ product.description }} </v-col>
    <AddToBasketDialog
      :show-dialog="showAddToBasketDialog"
      :on-close="closeDialog"
    />
    <v-col cols="12">
      <Hotspot label="Może Ci się przydać!" />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      size: null,
      addingToCart: false,
      showAddToBasketDialog: false,
      valid: true,
    }
  },
  computed: {
    product() {
      return this.$store.getters['products/product'](
        parseInt(this.$route.params.id)
      )
    },
  },
  methods: {
    ...mapActions('basket', ['addProduct']),
    addToBasket() {
      this.$refs.productForm.validate()
      if (this.size) {
        this.addingToCart = true
        const { name, id, icon, price } = this.product
        this.addProduct({
          id,
          size: this.size,
          name,
          icon,
          price,
        }).then((info) => {
          this.addingToCart = false
          if (info.success) {
            this.showAddToBasketDialog = true
          }
        })
      }
    },
    closeDialog() {
      this.showAddToBasketDialog = false
    },
  },
}
</script>

<style scoped>
.price {
  font-size: 2.4rem;
}
</style>
