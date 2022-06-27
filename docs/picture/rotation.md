# Rotation 图片无限滚动
  图片无限滚动

### 示例
<AmberPictureRotation :width="1000" :gap-width="65" :img-width="250" :img-height="200" :big-height="240" @handleBigImgCallback="handlePictureStretchClick" @callback="handlePictureStretchClick" :picture-list="list" />

### 代码
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
          url: '/1.jpg',
          name: '1.jpg'
        },{
          url: '/2.jpg',
           name: '2.jpg'
        },{
          url: '/3.jpg',
           name: '3.jpg'
        },{
          url: '/4.jpg',
           name: '4.jpg'
        },{
          url: '/5.jpg',
           name: '5.jpg'
        },{
          url: '/6.jpg',
           name: '6.jpg'
        },{
          url: '/7.jpg',
           name: '7.jpg'
        },{
          url: '/8.jpg',
           name: '8.jpg'
        },{
          url: '/9.jpg',
           name: '9.jpg'
        },{
          url: '/10.jpg',
           name: '10.jpg'
        },{
          url: '/11.jpg',
           name: '11.jpg'
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

<script>
  export default {
    data() {
      return {
        list: [{
          url: '/1.jpg',
          name: '1.jpg'
        },{
          url: '/2.jpg',
           name: '2.jpg'
        },{
          url: '/3.jpg',
           name: '3.jpg'
        },{
          url: '/4.jpg',
           name: '4.jpg'
        },{
          url: '/5.jpg',
           name: '5.jpg'
        },{
          url: '/6.jpg',
           name: '6.jpg'
        },{
          url: '/7.jpg',
           name: '7.jpg'
        },{
          url: '/8.jpg',
           name: '8.jpg'
        },{
          url: '/9.jpg',
           name: '9.jpg'
        },{
          url: '/10.jpg',
           name: '10.jpg'
        },{
          url: '/11.jpg',
           name: '11.jpg'
        }]
      }
    },
    methods: {
      handlePictureStretchClick(item) {
        console.log(item)
      }
    }
  };
</script>