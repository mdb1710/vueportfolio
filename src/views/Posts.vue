<template>
  <div class="blog">
    <h1>Posts</h1>
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<style scoped>
.back {
  background-color: #42b883;
  color: white;
  margin-top: 5rem;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease;
}
</style>
