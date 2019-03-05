<template>
  <div>
    <h1>Text Page</h1>

    <Textbody textContent="Feature Text" fontSize="24" />
    <Textbody textContent="Body" fontSize="16" />
    <Textbody textContent="Legal text" fontSize="12" />
  </div>
</template>

<script>
import Textbody from "./Textbody";
export default {
  name: "Textpage",
  components: {
    Textbody
  }
};
</script>
