# NavMenu 导航菜单

### 基本使用
基本使用


:::demo

```html
<amber-menu :data="data" mode="horizontal" class="menu-class1"> </amber-menu>
<script>
  export default{
    data(){
      return {
        collapsed:false,
        isCollapsed:'false',
        data:[
          {
            name:"sy",
            multiply:true,
            title:"首页",
            iconClass:'a-fangdajing3x',
            group:[{
              title:"项目一",
              children:[
                {
                  name:'zs',
                  title:'张三'
                },
                {
                  name:'ls',
                  title:'李四'
                }
              ]
            },{
              title:"项目二",
              children:[
                {
                  name:'xh',
                  title:'小红',
                  multiply:true,
                  children:[
                    {
                      name:'tutu',
                      title:'图图'
                    }
                  ]
                },
                {
                  name:'xm',
                  title:'小明'
                }
              ]
            }]
          },{
              name:'guid',
              title:'导航',
              multiply:true,
              iconClass:'a-fangdajing3x',
              children:[{
                multiply:true,
                name:'guid1',
                title:'导航1',
                children:[{
                multiply:true,
                name:'guid2',
                title:'导航2',
                children:[{
                 name:'guid3',
                title:'导航3',
              }]
              }]
              },{
                  name:'guid4',
                  title:'导航4',
              }]
            },
            {
              name:'role',
              title:'权限',
              iconClass:'a-fangdajing3x',
              disabled:true
            },
            {
              name:'employee',
              title:'员工管理',
              iconClass:'a-fangdajing3x',
            },
            {
              name:'echarts',
              title:'图表',
              iconClass:'a-fangdajing3x',
            }]
      }
    },
   
  }
</script>
<style>
  .menu-class1:not(.amber-menu-container-collapse){
    /* width:200px;
    min-height:400px; */
        width:100%;
    /* min-height:200px; */
  }
</style>
```

:::

### 基本使用1
基本使用1

::: demo

``` html

<amber-radio-group v-model="isCollapsed" @change="handleRadioChange" style="margin-bottom:20px;margin-left:15px">
  <amber-radio-button  label="false">扩展</amber-radio-button>
  <amber-radio-button v-if="!collapsed" label="true">折叠</amber-radio-button>
  </amber-radio-group>
<amber-menu :data="data" :collapsed="collapsed" class="menu-class"> </amber-menu>
<script>
  export default{
    data(){
      return {
        collapsed:false,
        isCollapsed:'false',
        data:[
          {
            name:"sy",
            multiply:true,
            title:"首页",
            iconClass:'a-fangdajing3x',
            group:[{
              title:"项目一",
              children:[
                {
                  name:'zs',
                  title:'张三'
                },
                {
                  name:'ls',
                  title:'李四'
                }
              ]
            },{
              title:"项目二",
              children:[
                {
                  name:'xh',
                  title:'小红',
                  multiply:true,
                  children:[
                    {
                      name:'tutu',
                      title:'图图'
                    }
                  ]
                },
                {
                  name:'xm',
                  title:'小明'
                }
              ]
            }]
          },{
              name:'guid',
              title:'导航',
              multiply:true,
              iconClass:'a-fangdajing3x',
              children:[{
                multiply:true,
                name:'guid1',
                title:'导航1',
                children:[{
                multiply:true,
                name:'guid2',
                title:'导航2',
                children:[{
                 name:'guid3',
                title:'导航3',
              }]
              }]
              },{
                  name:'guid4',
                  title:'导航4',
              }]
            },
            {
              name:'role',
              title:'权限',
              iconClass:'a-fangdajing3x',
              disabled:true
            },
            {
              name:'employee',
              title:'员工管理',
              iconClass:'a-fangdajing3x',
            },
            {
              name:'echarts',
              title:'图表',
              iconClass:'a-fangdajing3x',
            }]
      }
    },
    methods:{
      handleRadioChange(val){
        this.isCollapsed = val
        if(this.isCollapsed ==="true"){
          this.collapsed = true
        }
        if(this.isCollapsed ==="false"){
          this.collapsed = false
        }
      }
    }
  }
</script>
<style>
  .menu-class:not(.amber-menu-container-collapse){
    width:200px;
    min-height:400px;
        /* width:100%; */
    /* min-height:200px; */
  }
</style>
```
:::






