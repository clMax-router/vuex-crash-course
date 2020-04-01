import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导入todos.js
import todos from './modules/todos'

const store = new Vuex.Store({
    modules:{
        todos
    }
})

export default store