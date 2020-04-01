<template>
  <div id="app">
    <AddTodo/>
    <FilterTodo />
    <Todos />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import FilterTodo from './components/FilterTodo'
// 导入store
import store from './store/index'
export default {
  name: 'app',
  store,
  components:{
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style>
body{
  background-color: #ccc;
  padding: 0 266px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin: 60px auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h3{
  padding: 10px;
  margin: 0;
}

</style>
