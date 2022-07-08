# Tree 

Present information in a clear hierarchy that can be expanded or collapsed


### basic

The basic tree structure is shown
::: demo

```html
<amber-tree :data="data"></amber-tree>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "menu1",
            expand: true,
            children: [
              {
                label: "menu1-1",
                expand: true,
                children: [
                  {
                    label: "menu1-1-1",
                  },
                  {
                    label: "menu1-1-2",
                  },
                ],
              },
              {
                label: "menu1-2",
                children: [
                  {
                    label: "menu 1-2-1",
                  },
                  {
                    label: "menu 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "menu2",
            expand: true,
            children: [
              {
                label: "menu2-1",
                expand: true,
                children: [
                  {
                    label: "menu 2-1-1",
                  },
                  {
                    label: "menu 2-1-2",
                  },
                ],
              },
              {
                label: "menu2-2",
                children: [
                  {
                    label: "menu 3-2-1",
                  },
                  {
                    label: "menu 3-2-2",
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

### Multiple Choices(checkbox)

Set the attribute show-checkbox to check data. To check data, multiple must be enabled 

::: demo

```html
<amber-tree :data="data" show-checkbox multiple></amber-tree>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "menu1",
            expand: true,
            children: [
              {
                label: "menu1-1",
                expand: true,
                children: [
                  {
                    label: "menu1-1-1",
                  },
                  {
                    label: "menu1-1-2",
                  },
                ],
              },
              {
                label: "menu1-2",
                children: [
                  {
                    label: "menu 1-2-1",
                  },
                  {
                    label: "menu 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "menu2",
            expand: true,
            children: [
              {
                label: "menu2-1",
                expand: true,
                children: [
                  {
                    label: "menu 2-1-1",
                  },
                  {
                    label: "menu 2-1-2",
                  },
                ],
              },
              {
                label: "menu2-2",
                children: [
                  {
                    label: "menu 3-2-1",
                  },
                  {
                    label: "menu 3-2-2",
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
### Multiple Choices
Setting the multiple attribute enables tree selection with multiple selections

::: demo

```html
<amber-tree :data="data"  multiple></amber-tree>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "menu1",
            expand: true,
            children: [
              {
                label: "menu1-1",
                expand: true,
                children: [
                  {
                    label: "menu1-1-1",
                  },
                  {
                    label: "menu1-1-2",
                  },
                ],
              },
              {
                label: "menu1-2",
                children: [
                  {
                    label: "menu 1-2-1",
                  },
                  {
                    label: "menu 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "menu2",
            expand: true,
            children: [
              {
                label: "menu2-1",
                expand: true,
                children: [
                  {
                    label: "menu 2-1-1",
                  },
                  {
                    label: "menu 2-1-2",
                  },
                ],
              },
              {
                label: "menu2-2",
                children: [
                  {
                    label: "menu 3-2-1",
                  },
                  {
                    label: "menu 3-2-2",
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

### Attributes 

| param         | explain             | type    | default |
| ------------- | ---------------- | ------- | ------ |
| show-checkbox |Whether to display multiple boxes | boolean | false  |
| multiple | Whether alternative | Boolean | false |
| data | tree data | Array | --  |
| childrenKey | The name of the data neutron node | String | 'children'  |
| v-width | Tree Indicates the width of the selector  | String | '240px'  |
| defaultLabel | The value of the default radio option | String | ''  |
| defaultCheckList | Default multiple values | Array | []  |



### Event

| event        | explain            | return |
| ------------- | ---------------- | ------- | 
| onChange | the selected value changes | selected value | 

