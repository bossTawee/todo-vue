<template>
  <div id="app">
    <router-link to="/home">Go to Foo</router-link>
    <router-link to="/about">Go to Bar</router-link>
    <button @click="gotoHome">home</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: { 
    gotoHome() {
      this.$router.push({ path: 'home', query: { plan: 'private' } })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
