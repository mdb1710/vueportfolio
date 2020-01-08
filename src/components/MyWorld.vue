<template>
  <div class="my-world">
    <h1>{{ title }}</h1>
    <p>A dev blog by Michael D Bonner</p>
  </div>
</template>

<script>
export default {
  name: "MyWorld",
  props: {
    title: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
