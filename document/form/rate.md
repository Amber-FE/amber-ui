# Rate 评分
评分组件

### 基础用法
::: demo
```html
<amber-rate :colors="colors" :iconClasses="iconClasses"  :value="2"></amber-rate>
<script>
export default{
  data() {
    return {
    colors: { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 6:'#FF9900' },
    iconClasses:{2: 'aixin', 4: { value: 'aixin', excluded: true }, 6:'aixin'}
    }
  }
}
</script>

```
::: 

### 辅助文字
用辅助文字直接表达对应分数
::: demo
```html
<amber-rate showText  :value="2"></amber-rate>

```
::: 

### 只读
::: demo
```html
<amber-rate showScore disabled  :value="5"></amber-rate>

```
::: 

### 其他icon
当有多层次评价时，可以用不同类型的icon区分评分层级
::: demo
```html
<amber-rate showText :iconClasses="iconClasses"  :value="5"></amber-rate>
<script>
export default{
  data() {
    return {
    iconClasses:['aixin','a-zhongxichengyao3x','a-putongshipin3x']
    }
  }
}
</script>

```
::: 

### API

#### Rate

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 绑定值 | number |  0 |  
| max | 最大值 | number |  5 |
| disabled | 是否默认为只读 | boolean | flase |
| lowThreshold | 低分和中等分数的界限值，值本身被划分在低分中 | number | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | number | 4 |
| colors | icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | array/object | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 color 的颜色 | string | '#C6D1DE' |
| void-icon-class | 未选中 icon 的类名 | string | 'a-shoucang3x' |
| iconClasses | icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名 | array/object | ['aixin', 'aixin', 'aixin'] |
| show-text | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | boolean | flase |
| show-score | 是否显示当前分数，show-score 和 show-text 不能同时为真 | boolean | flase |
| textColor | 辅助文字和分数的颜色 | string | '#1F2D3D' |
| texts | 辅助文字数组 长度需与显示的icon个数一致 | array | ['极差', '失望', '一般', '满意', '非常满意'] |

#### Rate 事件

| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| change | 分数发生改变时触发 | 改变后的分值 |








