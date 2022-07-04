# start 



#### CDN installation example



::: tip

It can be imported as a CDN, and AmberUI is available on public CDNS such as JsdeliVR and UNPKG

:::

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/amber-ui@0.3.0/dist/css/index.css" />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <!-- 引入AmberUI组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/amber-ui@0.3.0/dist/index.umd.min.js"></script>
    
  </head>
  <body>
    <div id="app">
      <amber-button>Button</amber-button>
    </div>
    <script>
      new Vue({
        el: '#app',
        data: function() {
          return {  }
        }
      })
    </script>
  </body>
</html>
```


#### 使用 vue-cli / webpack

```shell
  npm i amber-ui -S
```

```javascript
  // 全部引入
  import 'amber-ui/dist/css/index.css';
  import AmberUi from 'amber-ui';

  Vue.use(AmberUi)

  // 按需引用
  import 'amber-ui/dist/css/picture-stretch.css';
  import { PictureStretch } from 'amber-ui';

  Vue.use(PictureStretch)
```


