<template>
  <div class="posts">
    <h1>Posts</h1>
    <div class='sections'>
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<script>
import BLOGENTRIES from '@/data/blogs.json'
export default {
  name: 'home',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}
</script>

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
