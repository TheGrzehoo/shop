<template>
  <v-dialog v-model="showDialog" max-width="400px">
    <v-card>
      <v-card-title class="headline">Dodano produkt do koszyka</v-card-title>
      <v-card-actions class="justify-between">
        <v-spacer></v-spacer>
        <v-btn small text @click.stop="onClose">Kontynuuj zakupy</v-btn>
        <v-btn color="primary" to="/basket">Przejdź do koszyka</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    showDialog: Boolean,
    onClose: {
      type: Function,
      default: () => false,
    },
  },
}
</script>
