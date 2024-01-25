import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import TodoList from "../TodoList.vue";
import {nextTick} from "vue";

describe("TodoList Component test", () => {
    test("show todo list", async () => {
        const wrapper = mount(TodoList)
        const vm = wrapper.vm
        vm.todos = [{id: 1, text: 'todo item 1', completed: false}] // 设置todos数据
        await nextTick()
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe('todo item 1')
    })

    test("add todo", async () => {
        const wrapper = mount(TodoList)
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(0)
        await wrapper.get('[data-test="add-todo"]').setValue('todo item 1')
        await wrapper.get('[data-test="form"]').trigger('submit')
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
        await wrapper.get('[data-test="add-todo"]').setValue('todo item 2')
        await wrapper.get('[data-test="form"]').trigger('submit')
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
    })

test("toggle todo", async () => {
    const wrapper = mount(TodoList)
    // 添加测试数据
    await wrapper.get('[data-test="add-todo"]').setValue('todo item 1')
    await wrapper.get('[data-test="form"]').trigger('submit')
    // 模拟触发选中按钮
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
    // 断言当前 todo 样式
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
})
})