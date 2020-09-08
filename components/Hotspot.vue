<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-h5">{{ label }}</h2>
    </v-col>
    <v-col v-for="product in products" :key="product.id" cols="1" sm="2" md="3">
      <v-card>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-img max-width="100%" :src="product.icon"></v-img>
        <v-card-text nuxt :to="'/product/' + product.id">
          <v-chip-group>
            <v-chip
              v-for="size in product.sizes"
              :key="size.value"
              nuxt
              :to="'/product/' + product.id + '?selected_size=' + size.value"
              :disabled="size.availability === 'available' ? false : true"
            >
              {{ size.text }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-text class="pt-0"
          ><span class="text-h6 text-center"
            >{{ product.price }} zł</span
          ></v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    label: {
      type: String,
      default: 'Rekomendowane produkty',
    },
  },
  computed: mapGetters({
    products: 'products/hotspotProducts',
  }),
}
</script>

<style></style>
