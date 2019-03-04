<template>
  <h1 :style="textProps">This is a heading text</h1>
</template>

<script>
export default {
  props: ["size"],
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
