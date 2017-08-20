<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from '@/components/nav';
import store from '@/store';
export default {
  name: 'app',
  store,
  components: {
    navigation
  }
}
</script>

<style>
@import './components/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
