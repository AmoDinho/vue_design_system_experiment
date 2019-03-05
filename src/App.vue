<template>
  <div id="app">
    <h1>Design System Experiment</h1>
    <DisplayLarge size="100" />
  </div>
</template>

<script>
import DisplayLarge from "./components/DisplayLarge";

export default {
  name: "App",
  components: {
    DisplayLarge
  }
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
