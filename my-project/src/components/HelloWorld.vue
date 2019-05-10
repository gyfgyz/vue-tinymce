<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <router-link :to="{name:'Children'}">调转到tinymce Children子组件</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vue-router test'
    }
  },
  mounted () {
    // $router和$route的区别
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
