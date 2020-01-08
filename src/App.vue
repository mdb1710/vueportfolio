<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header
      title="Code Composer"
      subtitle="A blog by Developer Michael D Bonner"
    />
    <MyWorld msg="Code Composer" />
  </div>
</template>

<script>
import MyWorld from "./components/MyWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    MyWorld,
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
