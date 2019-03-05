<template>
  <h1 :style="textProps">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    size: String,
    text: String
  },
  computed: {
    textProps() {
      return "--text-size: " + this.size + "px";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Paytone+One");

h1 {
  font-family: "Paytone One", sans-serif;
  font-size: var(--text-size);
}
</style>
