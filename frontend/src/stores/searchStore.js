import { defineStore } from 'pinia';
import apiClient from '../api';

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    results: [],
    loading: false,
  }),
  actions: {
    async performSearch() {
      if (!this.query) return;

      this.loading = true;
      try {
        const response = await apiClient.get('/search', {
          params: { query: this.query },
        });
        this.results = response.data.matches || [];
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
