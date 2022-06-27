# InifinteScroll 滚动加载

### 正常加载

::: demo
```html
<ul class="list"  style="overflow:auto" v-infinite-scroll = "load">
<li class="li" v-for="item in count">{{item}}</li>
</ul>
<script>
  export default {
  data(){
    return{
      loading:false,
      count: 10
    }
  },
  methods:{
    load(){
      this.loading= true
        this.count += 2
      }
      
    }
  }
</script>
<style>
.list{
  list-style:none;
  text-align:center;
  height:200px;

}
.list .li{
  height:30px;
  line-height:30px;
  background: #e8f3fe;
  margin: 5px 0;
}
</style>
```
::: 
### 禁用加载

::: demo
```html
<ul class="list"  style="overflow:auto" v-infinite-scroll = "load"
infinite-scroll-disabled="disabled" infinite-scroll-distance="10" infinite-scroll-delay="200">
<li class="li" v-for="item in count">{{item}}</li>
<p class="li" v-if="loading">加载中...</p>
<p class="li" v-if='noMore'>我也是有底线的</p>
</ul>
<script>
  export default {
  data(){
    return{
      loading:false,
      count: 10
    }
  },
  computed:{
    disabled(){
        return this.loading||this.noMore
    },
    noMore(){
        return this.count>=20
    }
  },
  methods:{
    load(){
      this.loading= true
      setTimeout(()=>{
        this.count += 2
        this.loading=false
      },2000)
        
      }
      
    }
  }
</script>
<style>
.list{
  list-style:none;
  text-align:center;
  height:200px;

}
.list .li{
  height:30px;
  line-height:30px;
  background: #e8f3fe;
  margin: 5px 0;
}
</style>
```
::: 

#### InifinteScroll Attributes


| 参数 | 说明 | 类型 | 是否必要 | 可选值 |默认值 |
| --- | ---  | --- |  ---    | --- |--- |
| infinite-scroll-disabled | 滚动条是否禁用 | boolean | 否 | -- |false |
| infinite-scroll-distance | 触发加载事件的时机，距离滚动条最下方的长度 单位px | number | 否 | -- | 0 |
| infinite-scroll-delay | 节流时间 单位ms | number | 否 | -- | 200 |
