<template>
  <div id="app">
    <h1>Design System Experiment</h1>
    <Display text="Display X-Large" size="48" />
    <Display text="Display Large" size="32" />
    <Display text="Display Medium" size="24" />
    <Display text="Display Small" size="16" />
  </div>
</template>

<script>
import Display from "./components/Display";

export default {
  name: "App",
  components: {
    Display
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
