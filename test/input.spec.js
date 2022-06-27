/* eslint-disable no-undef */
import Vue from 'vue'
import {mount} from '@vue/test-utils'
import AmberInput from '../packages/components/input/src/main.vue'

describe('正在测试Input组件', () => {
	it('1: Input 组件是否正常显示', async () => {
		const wrapper = mount(AmberInput);
		await Vue.nextTick();
		expect(wrapper.contains('input')).toBe(true);
	});

	it('2: Input 输入值是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {value:'test input value'}
		});
		expect(wrapper.props('value')).toBe('test input value')
	});

	it('3: Input 前缀是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {prefix:'¥'}
		});
		expect(wrapper.props('prefix')).toBe('¥');
		expect(wrapper.contains('.amber-input-prefix')).toBe(true);
	}) 
	
	it('4: Input prefix插槽是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			slots: {
				prefix:'<div>test prefix slot</div>',
			}
		});
		expect(wrapper.contains('.amber-input-prefix')).toBe(true);
		const el = wrapper.find('.amber-input-prefix div');
		expect(el.html()).toBe('<div>test prefix slot</div>')
	})

	it('5: Input 后缀是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {suffix:'RMB'}
		});
		expect(wrapper.props('suffix')).toBe('RMB');
		expect(wrapper.contains('.amber-input-suffix')).toBe(true);
	}) 
	
	it('6: Input suffix插槽是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			slots: {
				suffix:'<div>test suffix slot</div>',
			}
		});
		expect(wrapper.contains('.amber-input-suffix')).toBe(true);
		const el = wrapper.find('.amber-input-suffix div');
		expect(el.html()).toBe('<div>test suffix slot</div>')
	})

	it('7: Input 前置标签是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {addonBefore:'http://'}
		});
		expect(wrapper.props('addonBefore')).toBe('http://');
		expect(wrapper.contains('.amber-input-addonBefore')).toBe(true);
	}) 
	
	it('8: Input addonBefore插槽是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			slots: {
				addonBefore:'<div>test addonBefore slot</div>',
			}
		});
		expect(wrapper.contains('.amber-input-addonBefore')).toBe(true);
		const el = wrapper.find('.amber-input-addonBefore div');
		expect(el.html()).toBe('<div>test addonBefore slot</div>')
	})
	
	it('9: Input 后置标签是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {addonAfter:'.com'}
		});
		expect(wrapper.props('addonAfter')).toBe('.com');
		expect(wrapper.contains('.amber-input-addonAfter')).toBe(true);
	}) 
	
	it('10: Input addonAfter插槽是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			slots: {
				addonAfter:'<div>test addonAfter slot</div>',
			}
		});
		expect(wrapper.contains('.amber-input-addonAfter')).toBe(true);
		const el = wrapper.find('.amber-input-addonAfter div');
		expect(el.html()).toBe('<div>test addonAfter slot</div>')
	})
	
	it('11: Input 带移除图标是否正常显示', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {
				allowClear:true,
				value:'test clear button'
			}
		});
		const Icon = wrapper.findComponent({ name: 'AmberIcon' });
		expect(wrapper.contains('.amber-clear-button')).toBe(true);
		expect(Icon.exists()).toBe(true);
	})
	
	it('12: Input 带移除图标是否触发change事件', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {
				allowClear:true,
				value:'test clear button'
			}
		});
		wrapper.vm.$emit('change');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().change).toBeTruthy();
	})
	
	it('13: Input 带有搜索图标的输入框', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {
				inputSearch:true,
			}
		});
		const Icon = wrapper.findComponent({ name: 'AmberIcon' });
		expect(wrapper.contains('.amber-input-suffix')).toBe(true);
		expect(Icon.exists()).toBe(true);
	})
	
	it('14: Input 带有搜索按钮的输入框', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {
				inputSearch:true,
				enterButton:true
			}
		});
		const Button = wrapper.findComponent({ name: 'AmberButton' });
		expect(wrapper.contains('.amber-input-search')).toBe(true);
		expect(Button.exists()).toBe(true);
	})
	
	it('15: Input 搜索按钮是否触发search事件', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {
				inputSearch:true,
				enterButton:true
			}
		});
		wrapper.vm.$emit('search');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().search).toBeTruthy();
	})
	
	it('16: Input 输入框大小控制', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {size:'large'}
		});
		expect(wrapper.props('size')).toBe('large')
	});
	
	it('17: Input 启动文本域模式', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {type:'textarea'}
		});
		expect(wrapper.props('type')).toBe('textarea');
		expect(wrapper.contains('.amber-textarea-box')).toBe(true);
	});
	
	it('18: Input 启动密码框模式', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {type:'password'}
		});
		await wrapper.vm.$nextTick();
		expect(wrapper.props('type')).toBe('password');
		const Icon = wrapper.findComponent({ name: 'AmberIcon' });
		expect(Icon.exists()).toBe(true);
		expect(wrapper.contains('.amber-input-suffix')).toBe(true);
	});
	
	it('19: Input 输入框是否触发focus事件', async () => {
		const wrapper = mount(AmberInput);
		wrapper.vm.$emit('focus');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().focus).toBeTruthy();
	})
	
	it('20: Input 输入框是否触发blur事件', async () => {
		const wrapper = mount(AmberInput);
		wrapper.vm.$emit('blur');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().blur).toBeTruthy();
	})

	it('21: Input 输入框是否触发pressEnter事件', async () => {
		const wrapper = mount(AmberInput);
		wrapper.vm.$emit('pressEnter');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().pressEnter).toBeTruthy();
	})
	
	it('22: Input 输入框禁用控制', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {disabled:true}
		});
		expect(wrapper.props('disabled')).toBe(true)
	});
	
	it('23: Input 输入框最大输入长度控制', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {maxLength:4}
		});
		expect(wrapper.props('maxLength')).toBe(4)
	});
	
	it('24: Input 文本域控制', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {rows:5}
		});
		expect(wrapper.props('rows')).toBe(5)
	});
	
	it('25: Input 搜索按钮文本设置', async () => {
		const wrapper = mount(AmberInput,{
			propsData: {searchTitle:'search test'}
		});
		expect(wrapper.props('searchTitle')).toBe('search test')
	});

})
