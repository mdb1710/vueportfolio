<template>
  <div class="my-world">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div class="intro">
      <h2>To Code: To create using programming languages and frameworks</h2>
      <h2>To Compose: To create using musicial languages and frameworks</h2>
      <h2>So tell me....what is really the difference?</h2>
      <br />
      <p>That is the purpose of this new blog --- to talk about the similarities of software production and music production and my journey navigating through them both.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWorld",
  props: {
    title: String,
    description: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
