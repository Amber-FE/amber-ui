# Card 

商品信息卡片组件

### 基础用法 (单个)
::: demo
```html
<amber-card :kongxiao='kongxiao' :self="self" :props="props" :smallImg="smallImg" :goodsInfo="datalist"></amber-card>
<script>
  export default{
    data(){
      return{
      smallImg:'a-zhongxichengyao3x',
      props:{
        labelNames:this.labelNames1,
        popname: this.datalist.zs,
        srpriceD: 10,
      },
      self:true,
      kongxiao: true
      }
    },
    created(){
      // this.props.popname= this.datalist.zs
      console.log(this)
    },
    props:{
        datalist: {
        default: ()=>({
          img_url: '/amber-ui/drug.jpg',
        popname: 'mj金银花003（金-单）',
        specpack: '0.5kg',
        wholenum: 400,
        produnitname: '克',
        manuname: '吉林汇参堂中药饮片科技有限公司',
        srpriceD: 10,
        tavatpriceD: 5,
        validsdate: '2020-05-23',
        minsurance: 1,
        labelNames: ['满减', '满赠'],
        zs: '金银花'
        })
      },
      labelNames1:{
        default:()=>['满减']
        }


    }
  }
</script>

```
::: 


### 基础用法 (多个)
::: demo
```html
<div class="datalist" >
  <amber-card v-for="(item,index) in datalist" :key ="index" :kongxiao='kongxiao' :self="self" :props="props" :smallImg="smallImg" :goodsInfo="item"></amber-card></div>
<script>
  export default{
    data(){
      return{
      smallImg:'a-zhongxichengyao3x',
      props:{
        popname:'zs',
      },
      self:true,
      kongxiao: true
      }
    },
    props:{
        datalist: {
        default: ()=>([{
          img_url: '/amber-ui/drug.jpg',
        popname: 'mj金银花003（金-单）',
        specpack: '0.5kg',
        wholenum: 400,
        produnitname: '克',
        manuname: '吉林汇参堂中药饮片科技有限公司',
        srpriceD: 10,
        tavatpriceD: 5,
        validsdate: '2020-05-23',
        minsurance: 1,
        labelNames: ['满减', '满赠'],
        zs: '金银花'
        },{
          img_url: '/amber-ui/drug.jpg',
        popname: 'mj金银花003（金-单）',
        specpack: '0.5kg',
        wholenum: 400,
        produnitname: '克',
        manuname: '吉林汇参堂中药饮片科技有限公司',
        srpriceD: 10,
        tavatpriceD: 6,
        validsdate: '2020-05-23',
        minsurance: 1,
        labelNames: ['满减'],
        zs: '金银花1'
        }])
      },
    }
  }
</script>
<style>
  .datalist{
    display:flex;
  }
</style>

```
::: 
#### Card Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| goodsInfo | 商品信息，具体见下表 | Object | true | {} |
| styles | 卡片整体样式 | Object | false | {} |
| smallImg | 左上角特殊标识(图片或者图标) | String | false | '' |
| props | 配置选项,参数名和goodsInfo的参数名一致即可替代 | Object | false | {} |

#### goodsInfo

| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| img_url | 商品图片地址 | String | true | '' |
| popname | 商品名称 | String | true | '' |
| specpack | 商品重量 | String | true | '' |
| wholenum | 商品重量 | String | true | '' |
| produnitname | 商品重量单位 | String | true | '' |
| manuname | 商品生产公司 | String | true | '' |
| srpriceD | 商品市场价格 | String | true | 0 |
| tavatpriceD | 商品价格 | String | true | 0 |
| validsdate | 商品图片地址 | String | true | '' |
| minsurance | 商品图片地址 | number | true | 0 |
| labelNames | 商品标签 | Array | true | [] |



####  Card Active
| name | 说明 | 返回值 |
| --- | ---| --- | --- |
| imgClick | 商品图片点击事件 | Event e |
| contentClick | 卡片除图片外的点击事件| Event e |



