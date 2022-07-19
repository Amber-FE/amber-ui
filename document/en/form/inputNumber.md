# InputNumber 

### Basic

::: demo
```html
<div style="display:flex;align-items:center">
  <amber-input-number v-model="num" @change ="change"  :min="0" :max="10"></amber-input-number>
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

### Size
#### InputNumber Size
::: demo
```html
<div style="display:flex;">
<amber-input-number :min="0"  size="small" :step="2" :max="10"></amber-input-number>
<amber-input-number :min="0"  size="middle" :step="2" :max="10"></amber-input-number>
<amber-input-number :min="0"  size="large" :step="2" :max="10"></amber-input-number>
  </div>

```
::: 
### Disabled
#### InputNumber Disabled

::: demo
```html
<amber-input-number :min="0"  size="middle" disabled :step="2" :max="10"></amber-input-number>

```
::: 

### step
#### Range When the step size is a decimal, the accuracy is determined by the step size

::: demo
```html
<amber-input-number :min="0"  size="middle"  :step="0.05" :max="10"></amber-input-number>

```
::: 

### The tooltip
#### Text Prompt You can run the isShowTip command to display text prompt 

::: demo
```html
<div style="display:flex;align-items:center">
  <amber-input-number isShowTip v-model="num" @change ="change"  :min="0" :max="10"></amber-input-number>

</div>
<script>
  export default{
    data(){
      return {
        num: 2
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

### API

#### InputNumber

| params | explain | type | optional | default |
| --- | --- | --- | --- | --- |
| value/v-model | The bound value of the counter | number | --- | 0 |  
| min | Minimum value of counter | number | --- | -Infinity |  |
| max | Maximum value of counter | number | --- | Infinity |  |
| step | The length of the counter's steps (can be decimal) | number | --- | 1 |
| size | Size of counter | string | large middle samll | small |
| disabled | Whether to disable counters | boolean | --- | false |
| precision | precision | number | --- | 1 |
| isShowTip | Whether to display the following prompt text | Boolean | --- | false |



#### InputNumber 事件
| Event | explain | params | 
| --- | --- | --- |
| change | Triggered when the binding value changes | oldVal newVal |
| blur | Fired when the binding value changes fired when the component input loses focus  | (event Event) |
| focus | Fired when the component input gets focus | (event Event) |

