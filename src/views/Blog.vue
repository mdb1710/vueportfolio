<template>
  <div class="blog">
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
.blog {
  max-width: 50vw;
  margin: 10rem auto;
  /deep/ {
    h1 {
      font-size: 3rem;
      margin-bottom: 0.2rem;
      color: #42b883;
    }
    h4 {
      margin-bottom: 3rem;
      color: #35495e;
    }
  }
}
</style>
