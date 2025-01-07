
<template>
  <router-view /> <!-- Zeigt die aktuelle Route an -->
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Optional: global styles */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

#app {
  height: 100%; /* Passt sich der gesamten Höhe des Viewports an */
}
</style>
