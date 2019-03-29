<template>
  <div id="app">
    <div class="container">
      <foo/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Foo from "@/components/foo.md";
export default {
  components: { Foo }
};
</script>
