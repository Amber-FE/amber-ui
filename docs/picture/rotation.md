# Rotation 图片无限滚动
  图片无限滚动

### 示例

::: demo
```html
  <AmberPictureRotation 
    :picture-list="list" 
    :img-width="250" 
    :img-height="200" 
    :gap-width="75" 
    :big-height="240" 
    @callback="handlePictureStretchClick" 
    @handleBigImgCallback="handlePictureStretchClick"
  />

  <script>
  export default {
    data() {
      return {
        list: [{
          url: '/1.png',
          name: '1.png'
        },{
          url: '/2.png',
           name: '2.png'
        },{
          url: '/3.png',
           name: '3.png'
        },{
          url: '/4.png',
           name: '4.png'
        },{
          url: '/5.png',
           name: '5.png'
        },{
          url: '/6.png',
           name: '6.png'
        }]
      }
    },
    methods: {
      handlePictureStretchClick(item) {

      },
      handlePictureStretchClick() {}
    }
  };
</script>

```
::: 

### PictureRotation Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| width | 宽度 | number | 否 | 960px |
| height | 高度 | number | 否 | 300px |
| gap-width | 图片间隙 | number | 否 | 88px |
| big-width | 大图宽度 | number | 否 | 600px |
| big-height | 大图高度 | number | 否 | 250px |
| img-width | 图片宽度 | number | 否 | 300px |
| img-height | 图片高度 | number | 否 | 226px |
| picture-list | 图片列表 | Array | 是 | - |


### PictureRotation Events
| 事件名称 | 说明 | 回调参数 | 
| --- | ---  | --- |  
| callback| 图片点击回调| 选中图片的值 |
| handleBigImgCallback| 大图点击回调| 选中图片的值 |

