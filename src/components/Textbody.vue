<template>
  <h2 :style="fontProps">{{ textContent }}</h2>
</template>

<script>
export default {
  props: {
    fontSize: String,
    textContent: String
  },
  computed: {
    fontProps() {
      return "--text-size: " + this.fontSize + "px";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");

h2 {
  font-size: var(--text-size);
  font-family: "Poppins", sans-serif;
}
</style>
