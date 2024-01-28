import {beforeEach, describe, expect, test} from 'vitest'
import useTodoStore from '../store.ts'
import type {TodoItem} from '../store.ts'
import {createPinia, setActivePinia} from "pinia";

describe('基于存储的单元测试', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('todoStore 添加任务', () => {
        const store = useTodoStore()
        const todo: TodoItem = {id: 1, title: '吃饭', done: false}
        expect(store.list).not.toContain(todo)
        store.addTodo(todo)
        expect(store.list).toContainEqual(todo)
    })

    test('todoStore 标记完成', () => {
        const store = useTodoStore()
        // 添加测试用例
        store.addTodo({id: 1, title: '吃饭', done: false})
        store.addTodo({id: 2, title: '睡觉', done: false})
        store.addTodo({id: 3, title: '打游戏', done: false})
        // 标记任务2完成
        store.completed(2)
        expect(store.list[1].done).toBeTruthy()
        expect(store.list[0].done).toBeFalsy()
        expect(store.list[2].done).toBeFalsy()
    })

    test('todoStore 删除任务', () => {
        const store = useTodoStore()
        const item1 = {id: 1, title: '吃饭', done: false}
        const item2 = {id: 2, title: '睡觉', done: false}
        const item3 = {id: 3, title: '打游戏', done: false}
        // 添加测试用例
        store.addTodo(item1)
        store.addTodo(item2)
        store.addTodo(item3)
        // 删除 id 为 2 的 todo
        store.remove(item2.id)
        expect(store.list).not.toContainEqual(item2)
        expect(store.list).toContainEqual(item1)
        expect(store.list).toContainEqual(item3)
    })
})