<template>
  <div id="app">
    <header>
      <h1>AI Semantic Search Engine</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/results">Results</router-link>
      </nav>
    </header>

    <main>
      <!-- Renders the component based on the current route -->
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 Semantic Search Project</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Basic styling for the layout */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  max-width: 800px;
  margin: auto;
}

header {
  padding: 20px;
  background-color: #4CAF50;
  color: white;
}

header h1 {
  margin: 0;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

footer {
  margin-top: 20px;
  padding: 10px;
  font-size: 0.9em;
  color: #777;
}
</style>
