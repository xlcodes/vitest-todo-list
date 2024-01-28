<template>
  <div class="todo-container">
    <h1>Todo List</h1>
    <div class="todo-add">
      <input type="text" v-model="newItem.title"></input>
      <button @click="addTodo">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="item in store.list" :key="item.id" :class="[item.done ? 'todo-completed' : '']">
        <input type="checkbox" v-model="item.done" @click="store.completed(item.id)">
        <span >{{item.title}}</span>
        <button @click="store.remove(item.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>

import useTodoStore from "./store";
import {reactive, ref} from "vue";

defineOptions({
  name: 'PiniaTodoList'
})

const store = useTodoStore()
const id = ref(0)

const newItem = reactive({
  id: id.value,
  title: '',
  done: false
})

const addTodo = () => {
  store.addTodo({
    ...newItem,
    id: id.value
  })

  id.value += 1
  newItem.title = ''
}

</script>

<style>
.todo-completed {
  text-decoration: line-through;
}
</style>