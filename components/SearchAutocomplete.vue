<template>
  <div class="d-flex flex-column align-items-center px-3">
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      color="white"
      hide-no-data
      hide-selected
      item-text="Description"
      item-value="API"
      placeholder="Wpisz czego szukasz"
      prepend-icon="mdi-database-search"
      return-object
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      items: [],
      model: '',
    }
  },
}
</script>
