<template>
  <div v-if="results.length">
    <h3>Results:</h3>
    <div v-for="result in results" :key="result.id">
      <p>{{ result.text }}</p>
    </div>
  </div>
  <p v-else>No results found</p>
</template>

<script>
import { useSearchStore } from '../stores/searchStore';
import { computed } from 'vue';

export default {
  setup() {
    const searchStore = useSearchStore();
    const results = computed(() => searchStore.results);

    return { results };
  },
};
</script>

<style scoped>

</style>