# Rotation  
  Picture scrolling

### example


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
        },{
          url: '/amber-ui/5.png',
           name: '5.png'
        },{
          url: '/amber-ui/6.png',
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


| params | explain | type | necessary | default |
| --- | ---  | --- |  ---    | --- |
| width | width | number | no | 960px |
| height | height | number | no | 300px |
| gap-width | Image gap | number | no | 88px |
| big-width | big image width | number | no | 600px |
| big-height | big image height | number | no | 250px |
| img-width | image width | number | no | 300px |
| img-height | image height | number | no | 226px |
| picture-list | image list | Array | yes | - |


### PictureRotation Events
| event | explain | params | 
| --- | ---  | --- |  
| callback| Picture click callback| Picture click callback value |
| handleBigImgCallback| big picture click callback| Picture click callback value |


