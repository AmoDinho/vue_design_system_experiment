<template>
  <div>
    <h1>Display Page</h1>

    <Display text="Display X-Large" size="48" />
    <Display text="Display Large" size="32" />
    <Display text="Display Medium" size="24" />
    <Display text="Display Small" size="16" />
  </div>
</template>

<script>
import Display from "./Display";

export default {
  name: "DisplayPage",
  components: {
    Display
  }
};
</script>
