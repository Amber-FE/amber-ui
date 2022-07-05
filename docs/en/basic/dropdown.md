# Dropdown 

当选项过多时，使用下拉菜单展示并选择内容。

### 基本用法

::: demo
```html
<template>
  
  <amber-dropdown name="基础用法" @command="handleCommand">
    <amber-dropdown-item command="a">Girl, you know I want your love</amber-dropdown-item>
    <amber-dropdown-item command="b">选项B</amber-dropdown-item>
    <amber-dropdown-item command="c">选项C</amber-dropdown-item>
    <amber-dropdown-item command="d">选项D</amber-dropdown-item>
  </amber-dropdown>
</template>
<script>

export default {
  methods: {
    handleCommand(e) {
      console.log('dropdown value', e)
    }
  }
}
</script>
```
:::

#### Dropdown Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| name | 标题名 | string | 是 | - |

#### Dropdown-item Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| command | 指令 | string | 是 | - |

#### Dropdown Event
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| command | 点击菜单项触发的事件回调 | dropdown-item 的指令 |
