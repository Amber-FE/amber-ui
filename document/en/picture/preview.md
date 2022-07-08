# Preview  
  picture preview
  
::: demo
```html
  <amber-button type="primary" @click="imageIndex = 0, display = true">   preview pictures
</amber-button>
  <amber-button type="primary" @click="() => { imageIndex = 1, display = true }">preview the second picture</amber-button>
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


| params | explain | type | necessary | default |
| --- | ---  | --- |  ---    | --- |
| show | Whether to show preview images | boolean | no | false |
| picture-list | image list | Array | yes | - |


### Events
| event | explain | callback params | 
| --- | ---  | --- |  
| close| big image close callback | - |


