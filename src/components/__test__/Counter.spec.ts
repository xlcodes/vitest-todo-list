import {describe, expect, test} from 'vitest'
import {mount} from "@vue/test-utils";
import Counter from "../Counter.vue";

describe("Counter Component", () => {
    test("emits as event when clickes", async () => {
        const wrapper = mount(Counter)
        await wrapper.find('button').trigger('click')
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('increment')

        const incrementEvent = wrapper.emitted('increment')
        expect(incrementEvent).toHaveLength(2)
        expect(incrementEvent[0]).toEqual([
            {
                count: 1,
                isEven: false
            }
        ])
        expect(incrementEvent[1]).toEqual([
            {
                count: 2,
                isEven: true
            }
        ])
    })
})