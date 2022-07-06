# Preview 
  图片预览

::: demo
```html
  <amber-button type="primary" @click="imageIndex = 0, display = true">预览图片</amber-button>
  <amber-button type="primary" @click="() => { imageIndex = 1, display = true }">预览第2张图片</amber-button>
  <amber-picture-preview 
    :show="display" 
    @close="handlePictureClick" 
    :image-index="imageIndex"
    :picture-list="list" 
   />

  <script>
  export default {
    data() {
      return {
        display: false,
        imageIndex: 0,
        list: [{
          url: '/amber-ui/1.png',
          name: '1.png'
        },{
          url: '/amber-ui/2.png',
           name: '2.png'
        },{
          url: '/amber-ui/3.png',
           name: '3.png'
        },{
          url: '/amber-ui/4.png',
           name: '4.png'
        }]
      }
    },
    methods: {
      handlePictureClick() {
          this.display = !this.display;
      }
    }
  };
</script>
```
:::

### Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| show | 是否展示预览图片 | boolean | 否 | false |
| picture-list | 图片列表 | Array | 是 | - |


### Events
| 事件名称 | 说明 | 回调参数 | 
| --- | ---  | --- |  
| close| 大图关闭 | - |


