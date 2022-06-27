/* eslint-disable no-undef */
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import AmberButton from '../packages/components/button/src/main.vue';

describe('正在测试Button组件', () => {
  it('1: button 是否正常显示', async () => {
    const wrapper = mount(AmberButton);
    await Vue.nextTick();
    expect(wrapper.contains('button')).toBe(true);
  })

  it('2: button 点击时会触发click事件', () => {
    const wrapper = mount(AmberButton);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('3: button 禁用测试', async () => {
    const wrapper = mount(AmberButton, {
      propsData: { disabled: true }
    });
    expect(wrapper.vm.$el.style['pointer-events']).toBe('none')
  });

  it('4: button 是否可以显示icon组件', async () => {
    const wrapper = mount(AmberButton);
    await wrapper.setProps({ icon: '-afc' });
    const Icon = wrapper.findComponent({ name: 'AmberIcon' });
    expect(Icon.exists()).toBe(true)
  });

  it('5: button 颜色更改', async () => {
    const wrapper = mount(AmberButton, {
      propsData: { background: '#486491' }
    });
    expect(wrapper.vm.$el.style.background).toBe('rgb(72, 100, 145)')
  });

  it('6: button 圆角按钮', async () => {
    const wrapper = mount(AmberButton, {
      propsData: { round: true }
    });
    expect(wrapper.vm.$el.style['border-radius']).toBe('20px')
  })

})
