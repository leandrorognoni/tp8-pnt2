<template>
  <div id="app">
  <h1>TP8 PN2- ROGNONI LEANDRO </h1>
    <Navbar />
    <router-view></router-view>
  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #aab5c0;
  margin-top: 60px;
}
</style>