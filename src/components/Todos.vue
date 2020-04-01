<template>
  <div>
    <h3>todos</h3>
    <div class="todos">
      <div 
      :class="['todo',{'is-completed' : todo.completed}]" 
      v-for="todo in todos" 
      :key="todo.id + '-label' "
      @dblclick="switchCompleted(todo)"
      >
        <span>{{todo.title}}</span>
        <i @click="deleteTodo(todo.id)" class="iconfont icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todos",
  computed: mapGetters({
    // 若两者名字一样 可简写
    todos: "getAllTodos"
  }),
  created() {
    this.getTodos();
  },
  methods: {
    ...mapActions(["getTodos","deleteTodo","updateTodo"]),
    switchCompleted(todo){
      todo.completed = !todo.completed
      this.updateTodo(todo)
    }
  }
};
</script>

<style scoped>
.todos {
  display: grid; /* 宫格布局 */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem; /* 设置行列之间的间隙 */
}

.todo {
  background-color: #41b883;
  padding: 10px;
  border: 1px solid #41b883;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: space-between;
}
/* 改变背景颜色 */
.is-completed{
  background-color: #2e5ac9;
}

</style>