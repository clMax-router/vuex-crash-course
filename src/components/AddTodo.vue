<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Add Todo" v-model="title" />
      <input type="submit" :disabled="btnFlag"/>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "addTodo",
  data() {
    return {
      title: "",
      btnFlag: false
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submit() {
      if (this.title) {
        this.btnFlag = true;
        const todo = {
          title: this.title,
          completed: false
        }
        this.addTodo(todo).then(() => {
            this.btnFlag = false
            this.title = ""
        });
        
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #41b883;
  padding: 10px;
}
input[type="submit"] {
  background-color: #41b883;
  color: #fff;
  flex: 2;
  cursor: pointer;
  border: 1px solid #41b883;
}
</style>