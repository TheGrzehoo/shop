<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to="/"
        ><img src="/Shop_logo.png" max-height="100%" alt="Sklep na Vue"
      /></nuxt-link>
      <v-spacer />
      <v-btn icon @click.stop="openSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click.stop="openBasket">
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      :width="'300px'"
      temporary
      fixed
    >
      <SearchAutocomplete v-if="!showBasket" />
      <BasketDrawerList v-else />
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      showBasket: false,
      title: 'Standard Vue',
    }
  },
  methods: {
    openSearch() {
      this.rightDrawer = !this.rightDrawer
      this.showBasket = false
    },
    openBasket() {
      this.rightDrawer = !this.rightDrawer
      this.showBasket = true
    },
    test() {
      this.$store.dispatch('products/updateBasket')
    },
  },
}
</script>
