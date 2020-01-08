<template>
  <div class="blog-top">
    <header>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </header>
    <nav>
      <a>Home</a>
      <a>Posts</a>
      <a>Contact</a>
      <a>Links</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    subtitle: String
  }
};
</script>
