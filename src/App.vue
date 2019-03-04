<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />

    <DisplayLarge size="100" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DisplayLarge from "./components/DisplayLarge";

export default {
  name: "App",
  components: {
    HelloWorld,
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
