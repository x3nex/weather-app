<template>
    <div id="app">
      <navigation></navigation>
    </div>
    
</template>

<script>
import Navigation from './Navigation.vue'
  export default {
    name: 'app',
    components: {
      Navigation
    }

  }
</script>

<style>
    body{
        background: linear-gradient(to left, #2c3e50, #3498db);
    }
</style>
