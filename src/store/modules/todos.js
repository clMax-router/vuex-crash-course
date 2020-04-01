import axios from 'axios'

const state = {
    todos: [],
    maxId: null
}

const getters = {
    getAllTodos(state) {
        return state.todos
    }
}

const mutations = {
    setTodos(state, todos) {
        state.todos = todos
    },
    post(state, todo) {
        state.todos.unshift(todo)
    },
    setMaxId(state, id) {
        state.maxId = id
    },
    delete(state,id){
        state.todos = state.todos.filter(item => item.id != id)
    },
    update(state,updateTodo){
        let index = state.todos.findIndex(item => item.id === updateTodo.id)
        state.todos.splice(index,1,updateTodo)
    }
}

const actions = {
    getTodos({ commit }) {
        axios
            .get('http://jsonplaceholder.typicode.com/todos')
            .then(res => {
                commit('setTodos', res.data)
            })
    },
    async addTodo({ commit, state }, todo) {
        if (!state.maxId) {
            // 查出最大id，并给新增的todo加上id
            let todos = state.todos
            let newIdArr = todos.map(item => item.id)
            commit('setMaxId', Math.max(...newIdArr))
        }
        let id = ++state.maxId
        // console.log(id)
        todo.id = id
        // console.log(todo)
        let res = await axios
            .post('http://jsonplaceholder.typicode.com/todos', todo)

        commit('post', todo)
    },
    deleteTodo({commit},id){
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(
            res => {
                console.log(111)
                commit('delete',id)
            }
        )

    },
    filterTodos({ commit },limit){
        axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`).then(
            res => {
                commit('setTodos',res.data)
            }
        )
    },
    updateTodo({ commit },updateTodo){
        axios.put(`http://jsonplaceholder.typicode.com/todos/${updateTodo.id}`).then(
            res => {
                commit('update',updateTodo)
            }
        )
    }
}

export default { state, getters, mutations, actions }