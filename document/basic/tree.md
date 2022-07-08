# Tree 树形控件

### 基础用法

基础的树形结构展示。
::: demo

```html
<amber-tree :data="data"></amber-tree>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "一级菜单1",
            expand: true,
            children: [
              {
                label: "二级菜单1-1",
                expand: true,
                children: [
                  {
                    label: "三级菜单 1-1-1",
                  },
                  {
                    label: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                label: "二级菜单1-2",
                children: [
                  {
                    label: "三级菜单 1-2-1",
                  },
                  {
                    label: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "一级菜单2",
            expand: true,
            children: [
              {
                label: "二级菜单2-1",
                expand: true,
                children: [
                  {
                    label: "三级菜单 2-1-1",
                  },
                  {
                    label: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                label: "二级菜单2-2",
                children: [
                  {
                    label: "三级菜单 3-2-1",
                  },
                  {
                    label: "三级菜单 3-2-2",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

:::

### 多选(checkbox)

设置属性 show-checkbox 可以对数据勾选，使用勾选必须开启属性 multiple
::: demo

```html
<amber-tree :data="data" show-checkbox multiple></amber-tree>

<script>
  /**
   *
   */
  export default {
    data() {
      return {
        data: [
          {
            
            label: "一级菜单1",
            expand: true,
            children: [
              {
                
                label: "二级菜单1-1",
                expand: true,
                children: [
                  {
                    
                    label: "三级菜单 1-1-1",
                  },
                  {
                    
                    label: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                
                label: "二级菜单1-2",
                children: [
                  {
                    
                    label: "三级菜单 1-2-1",
                  },
                  {
                    
                    label: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            
            label: "一级菜单2",
            expand: true,
            children: [
              {
                
                label: "二级菜单2-1",
                expand: true,
                children: [
                  {
                    
                    label: "三级菜单 2-1-1",
                  },
                  {
                    
                    label: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                    
                label: "二级菜单2-2",
                children: [
                  {
                    
                    label: "三级菜单 3-2-1",
                  },
                  {
                    
                    label: "三级菜单 3-2-2",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

:::
### 多选

设置属性 multiple 可以开启多选的树选择

::: demo

```html
<amber-tree :data="data"  multiple></amber-tree>

<script>
  /**
   *
   */
  export default {
    data() {
      return {
        data: [
          {
            
            label: "一级菜单1",
            expand: true,
            children: [
              {
                
                label: "二级菜单1-1",
                expand: true,
                children: [
                  {
                    
                    label: "三级菜单 1-1-1",
                  },
                  {
                    
                    label: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                
                label: "二级菜单1-2",
                children: [
                  {
                    
                    label: "三级菜单 1-2-1",
                  },
                  {
                    
                    label: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            
            label: "一级菜单2",
            expand: true,
            children: [
              {
                
                label: "二级菜单2-1",
                expand: true,
                children: [
                  {
                    
                    label: "三级菜单 2-1-1",
                  },
                  {
                    
                    label: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                    
                label: "二级菜单2-2",
                children: [
                  {
                    
                    label: "三级菜单 3-2-1",
                  },
                  {
                    
                    label: "三级菜单 3-2-2",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

:::

### Attributes 参数

| 参数          | 说明             | 类型    | 默认值 |
| ------------- | ---------------- | ------- | ------ |
| show-checkbox |是否显示多选框 | boolean | false  |
| multiple | 是否多选 | Boolean | false |
| data | tree数据 | Array | --  |
| childrenKey | data中子节点的名字 | String |'children' --  |
| v-width | tree选择器的width | String | '240px'  |
| defaultLabel | 默认单选的值 | String | ''  |
| defaultCheckList | 默认多选的值 | Array | []  |




### Event

| 事件名         | 说明            | 返回值 |
| ------------- | ---------------- | ------- | 
| onChange | 选中的值发生变化时 | 选中的数据 | 

