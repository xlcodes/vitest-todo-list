import {defineStore} from "pinia";

export interface TodoItem {
    id: number
    title: string
    done: boolean
}

export type TodoList = TodoItem[]

type StoreState = {
    list: TodoList
}

const useTodoStore = defineStore('todoList', {
    state(): StoreState {
        return {list: []}
    },
    actions: {
        addTodo(item: TodoItem) {
            this.list.push(item)
        },
        completed(id: number) {
            this.list = this.list.map(item => {
                if (item.id === id) {
                    item.done = !item.done
                }
                return item
            })
        },
        remove(id: number) {
            this.list = this.list.filter(item => item.id !== id)
        }
    }
})

export default useTodoStore