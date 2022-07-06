# Tree 树形控件

用清晰的层级结构展示信息,可展开或者折叠

还没写完呢 不要动我代码哈 只可观看不可亵玩！！！

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
            title: "一级菜单1",
            expand: true,
            children: [
              {
                title: "二级菜单1-1",
                expand: true,
                children: [
                  {
                    title: "三级菜单 1-1-1",
                  },
                  {
                    title: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                title: "二级菜单1-2",
                children: [
                  {
                    title: "三级菜单 1-2-1",
                  },
                  {
                    title: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            title: "一级菜单2",
            expand: true,
            children: [
              {
                title: "二级菜单2-1",
                expand: true,
                children: [
                  {
                    title: "三级菜单 2-1-1",
                  },
                  {
                    title: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                title: "二级菜单2-2",
                children: [
                  {
                    title: "三级菜单 3-2-1",
                  },
                  {
                    title: "三级菜单 3-2-1",
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

### 可选择

适用于需要选择层级时使用。
::: demo

```html
<amber-tree :data="data" show-checkbox></amber-tree>

<script>
  /**
   *
   */
  export default {
    data() {
      return {
        data: [
          {
            title: "一级菜单1",
            expand: true,
            children: [
              {
                title: "二级菜单1-1",
                expand: true,
                children: [
                  {
                    title: "三级菜单 1-1-1",
                  },
                  {
                    title: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                title: "二级菜单1-2",
                children: [
                  {
                    title: "三级菜单 1-2-1",
                  },
                  {
                    title: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            title: "一级菜单2",
            expand: true,
            children: [
              {
                title: "二级菜单2-1",
                expand: true,
                children: [
                  {
                    title: "三级菜单 2-1-1",
                  },
                  {
                    title: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                title: "二级菜单2-2",
                children: [
                  {
                    title: "三级菜单 3-2-1",
                  },
                  {
                    title: "三级菜单 3-2-1",
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
| show-checkbox | 节点是否可被选择 | boolean | false  |
