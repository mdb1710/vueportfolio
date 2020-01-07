<template>
   <div class='my-world'>
       <h1>{{ msg }}</h1>
       <p>Testing out Vue for Friday's meeting</p>
   </div> 
</template>

<script>
export default {
  name: 'MyWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h3 {
  margin: 40px 0 0;
}
</style>