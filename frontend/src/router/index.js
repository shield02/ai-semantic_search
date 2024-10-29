// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SearchComponent from '../components/SearchComponent.vue';
import ResultComponent from '../components/ResultsComponent.vue';

// Define routes for the app
const routes = [
  { path: '/', name: 'Search', component: SearchComponent },
  { path: '/results', name: 'Results', component: ResultComponent },
];

// Create and configure the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;  // Export the router instance
