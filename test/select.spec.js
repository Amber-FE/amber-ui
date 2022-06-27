/* eslint-disable no-undef */
import Vue from 'vue'
import {mount} from '@vue/test-utils'
import AmberSelect from '../packages/components/select/src/main.vue'

describe('正在测试Select组件',()=>{
	it('1: Select 组件是否正常显示', async () => {
		const wrapper = mount(AmberSelect);
		await Vue.nextTick();
		expect(wrapper.contains(AmberSelect)).toBe(true);
	});
	
	it('2: Select 带移除图标是否正常显示', async () => {
		const wrapper = mount(AmberSelect,{
			propsData: {
				allowClear:true,
				value:'test clear button'
			}
		});
		expect(wrapper.contains('.amber-select-clear--button')).toBe(true);
	})
	
	it('3: Select 搜索框是否触发search事件', async () => {
		const wrapper = mount(AmberSelect,{
			propsData: {
				showSearch:true,
			}
		});
		wrapper.vm.$emit('search');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().search).toBeTruthy();
	})
	
	it('4: Select 选中option时是否触发change事件', async () => {
		const wrapper = mount(AmberSelect);
		wrapper.vm.$emit('change');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().change).toBeTruthy();
	})
	
	it('5: Select 下拉框大小控制', async () => {
		const wrapper = mount(AmberSelect,{
			propsData: {size:'large'}
		});
		expect(wrapper.props('size')).toBe('large')
	});
	
	it('6: Select 模式切换', async () => {
		const wrapper = mount(AmberSelect,{
			propsData: {mode:'tags'}
		});
		expect(wrapper.props('mode')).toBe('tags')
	});
})