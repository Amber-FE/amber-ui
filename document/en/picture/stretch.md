# Stretch   
  List of scalable images

### example

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


| param | explain | type | necessary | default |
| --- | ---  | --- |  ---    | --- |
| gap-width | Image gap | number | no | 96px |
| img-width | width | number | no | 303px |
| img-height | height | number | no | 204px |
| transition-time | animation time | number | no | 0.3s |
| picture-list | image list | Array | yes | - |


### PictureStretch Events
| event | explain | params | 
| --- | ---  | --- |  
| callback| Picture click callback| Select the value of the picture |

