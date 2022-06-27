/* eslint-disable no-undef */
import Vue from 'vue'
import {mount} from '@vue/test-utils'
import AmberSwitch from '../packages/components/switch/src/main.vue'

describe('正在测试Switch组件',()=>{
	it('1: Switch 组件是否正常显示', async () => {
		const wrapper = mount(AmberSwitch);
		await Vue.nextTick();
		expect(wrapper.contains(AmberSwitch)).toBe(true);
	});
	
	it('2: Switch 切换时是否触发change事件', async () => {
		const wrapper = mount(AmberSwitch);
		wrapper.vm.$emit('change');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().change).toBeTruthy();
	})
	
	it('3: Switch 开关大小控制', async () => {
		const wrapper = mount(AmberSwitch,{
			propsData: {size:'small'}
		});
		expect(wrapper.props('size')).toBe('small')
	});
	
	it('4: Switch 默认选中状态', async () => {
		const wrapper = mount(AmberSwitch,{
			propsData: {defaultChecked:true}
		});
		expect(wrapper.props('defaultChecked')).toBe(true)
	});
	
	it('5: Switch 当前选中状态', async () => {
		const wrapper = mount(AmberSwitch,{
			propsData: {checked:true}
		});
		expect(wrapper.props('checked')).toBe(true)
	});
})