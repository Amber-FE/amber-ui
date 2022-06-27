# Stretch 可伸缩列表
  可伸缩图片列表

### 示例
<AmberPictureStretch :img-width="250" :img-height="180" :gap-width="75" :transition-time="0.5" @callback="handlePictureStretchClick" :picture-list="list" />

### 代码
```html
  <AmberPictureStretch 
    :picture-list="list" 
    img-width="250" 
    img-height="180" 
    gap-width="80" 
    transition-time="0.5" 
    @callback="handlePictureStretchClick" 
  />

  <script>
  export default {
    data() {
      return {
        list: [{
          url: '/1.jpg'
        },{
          url: '/2.jpg'
        },{
          url: '/3.jpg'
        },{
          url: '/4.jpg'
        },{
          url: '/5.jpg'
        },{
          url: '/6.jpg'
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

<script>
  export default {
    data() {
      return {
        list: [{
          url: '/1.jpg'
        },{
          url: '/2.jpg'
        },{
          url: '/3.jpg'
        },{
          url: '/4.jpg'
        },{
          url: '/5.jpg'
        },{
          url: '/6.jpg'
        },{
          url: '/7.jpg'
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