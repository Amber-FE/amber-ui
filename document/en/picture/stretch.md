# Stretch 
  可伸缩图片列表

### 示例

::: demo
```html
  <AmberPictureStretch 
    :picture-list="list" 
    :img-width="250" 
    :img-height="180" 
    :gap-width="80" 
    :transition-time="0.5" 
    @callback="handlePictureStretchClick" 
  />

  <script>
  export default {
    data() {
      return {
        list: [{
          url: '/amber-ui/1.png'
        },{
          url: '/amber-ui/2.png'
        },{
          url: '/amber-ui/3.png'
        },{
          url: '/amber-ui/4.png'
        },{
          url: '/amber-ui/5.png'
        },{
          url: '/amber-ui/6.png'
        }]
      }
    },
    methods: {
      handlePictureStretchClick(item) {
        alert(JSON.stringify(item))
      }
    }
  };
</script>

```
:::
### PictureStretch Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| gap-width | 图片间隙 | number | 否 | 96px |
| img-width | 图片宽度 | number | 否 | 303px |
| img-height | 图片高度 | number | 否 | 204px |
| transition-time | 动画时间 | number | 否 | 0.3s |
| picture-list | 图片列表 | Array | 是 | - |


### PictureStretch Events
| 事件名称 | 说明 | 回调参数 | 
| --- | ---  | --- |  
| callback| 图片点击回调| 选中图片的值 |

