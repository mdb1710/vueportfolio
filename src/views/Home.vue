<template>
  <div class="home">
    <MyWorld title="Code Composer" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyWorld from "@/components/MyWorld.vue";

export default {
  name: "home",
  components: {
    MyWorld
  }
};
</script>
