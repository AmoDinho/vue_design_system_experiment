<template>
  <div>
    <h1>Text Page</h1>

    <Textbody size="24" text="Feature Text" />
    <Textbody size="16" text="Body" /> <Textbody size="12" text="Legal text" />
  </div>
</template>

<script>
import Textbody from "./Textbody";
export default {
  components: {
    Textbody
  }
};
</script>
