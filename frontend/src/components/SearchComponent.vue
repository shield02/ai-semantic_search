<template>
  <form @submit.prevent="search">
    <input v-model="query" type="text" placeholder="Enter search query" />
    <button type="submit" :disabled="loading">Search</button>
  </form>
</template>

<script>
import { useSearchStore } from '../stores/searchStore';
import { computed } from 'vue';

export default {
  setup() {
    const searchStore = useSearchStore();
    const query = computed({
      get: () => searchStore.query,
      set: (val) => (searchStore.query = val),
    });
    const loading = computed(() => searchStore.loading);

    const search = () => {
      searchStore.performSearch();
    };

    return { query, search, loading };
  },
};
</script>

<style scoped>

</style>