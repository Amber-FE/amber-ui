# InputNumber 计数器

### 基本使用

::: demo
```html
<amber-input-number  :min="0" :max="10"></amber-input-number>

```
::: 

### 禁用状态

::: demo
```html
<amber-input-number  disabled :value='9'  :min="0" :max="10"></amber-input-number>

```
::: 

### 步数

::: demo
```html
<amber-input-number :step="2" size="large" v-model="num" ></amber-input-number>
<script>
  export default{
    data(){
      return {
        num: 2
      }
    }
  }
</script>

```
::: 

### 尺寸

::: demo
```html
<amber-input-number :step="2" size="small" :value='0' ></amber-input-number>
<amber-input-number :step="2" size="default" :value='0' ></amber-input-number>
<amber-input-number :step="2" size="large" :value='0' ></amber-input-number>
```
::: 

### API

#### InputNumber

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value/v-model | 计数器的绑定值 | number | --- | 0 |  
| min | 计数器的最小值 | number | --- | -Infinity |  |
| max | 计数器的最大值 | number | --- | Infinity |  |
| step | 计数器的步数长度 | number | --- | 1 |
| size | 计数器的尺寸大小 | string | large small default | default |
| disabled | 是否禁用计数器 | boolean | --- | false |
| color | 计数器增加和减少的颜色 | string | --- | #1a9Dff |

#### InputNumber 事件
| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| change | 绑定值发生改变时触发 | oldVal newVal |
| blur | 在组件input失去焦点的时候触发 | (event Event) |
| focus | 在组件input获取焦点的时候触发 | (event Event) |



