# InputNumber 计数器

### 基本使用

::: demo
```html
<div style="display:flex;align-items:center">
  <amber-input-number v-model="num" @change ="change"  :min="0" :max="10"></amber-input-number>
<span>当前值为{{num}}</span>
</div>
<script>
  export default{
    data(){
      return {
        num: 2.00
      }
    },
    methods:{
      change(val){
        console.log(val);
      }
    }
  }
</script>
```
::: 

### 大小
#### 计数器的尺寸
::: demo
```html
<div style="display:flex;">
<amber-input-number :min="0"  size="small" :step="2" :max="10"></amber-input-number>
<amber-input-number :min="0"  size="middle" :step="2" :max="10"></amber-input-number>
<amber-input-number :min="0"  size="large" :step="2" :max="10"></amber-input-number>
  </div>

```
::: 
### 禁用
#### 计数器不可使用

::: demo
```html
<amber-input-number :min="0"  size="middle" disabled :step="2" :max="10"></amber-input-number>

```
::: 

### 小数
#### 当步长为小数，精度则由步长决定，
::: demo
```html
<amber-input-number :min="0"  size="middle"  :step="0.05" :max="10"></amber-input-number>

```
::: 

### API

#### InputNumber

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value/v-model | 计数器的绑定值 | number | --- | 0 |  
| min | 计数器的最小值 | number | --- | -Infinity |  |
| max | 计数器的最大值 | number | --- | Infinity |  |
| step | 计数器的步数长度(可以为小数) | number | --- | 1 |
| size | 计数器的尺寸 | string | large middle samll | small |
| disabled | 是否禁用计数器 | boolean | --- | false |
| precision | 精确度 | number | --- | 1 |


#### InputNumber 事件
| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| change | 绑定值发生改变时触发 | oldVal newVal |
| blur | 在组件input失去焦点的时候触发 | (event Event) |
| focus | 在组件input获取焦点的时候触发 | (event Event) |

