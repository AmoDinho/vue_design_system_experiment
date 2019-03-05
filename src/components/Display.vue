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
h1 {
  font-size: var(--text-size);
}
</style>
