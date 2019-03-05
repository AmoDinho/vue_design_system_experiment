<template>
  <div id="app">
    <h1>Design System Experiment</h1>
    
    <router-link to="/"> <a>Home</a> </router-link>
    </br>
    <router-link to="/text"> <a>Text Typography</a> </router-link>
     </br>
    <router-link to="/display"> <a>Display Typography </a> </router-link>
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
