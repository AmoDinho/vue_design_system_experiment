<template>
  <p :stye="textProps">{{ text }}</p>
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
p {
  font-size: var(--text-size);
}
</style>
