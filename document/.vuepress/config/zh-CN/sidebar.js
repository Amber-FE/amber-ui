exports.Sidebar4ZH = [
  // '/componentDocs/icon',
  // '/componentDocs/pictureStretch',
  // '/componentDocs/pictureRotation'
  {
    title: "指南", // 必要的
    collapsable: false, // 可选的, 默认值是 true,
    children: ["/guide/intro", "/guide/start", "/guide/theme"],
  },
  {
    title: "基础组件", // 必要的
    collapsable: false, // 可选的, 默认值是 true,
    children: [
      "/basic/container",
      "/basic/color",
      "basic/font",
      "/basic/grid",
      "/basic/icon",
      "/basic/button",
      "/basic/dropdown",
      "/basic/price",
      "/basic/tips",
      "/basic/tag",
      "/basic/space",
      "/basic/modal",
      "/basic/divider",
      "/basic/notification",
      "/basic/tree",
      "/basic/infinitescroll",
      "/basic/pagination",
      "/basic/steps"
    ],
  },
{
title: "表单组件",
collapsable: false,
children: [
  "/form/input",
  "/form/radio",
  "/form/checkbox",
  "/form/select",
  "/form/switch",
  "/form/date-picker",
  "/form/time-picker",
  "/form/form",
  "/form/inputNumber",
  "/form/rate"
]
},
  {
    title: "图片组件", // 必要的
    collapsable: false,
    children: ["/picture/preview", "/picture/rotation", "/picture/stretch"],
  },
  {
    title: "业务组件", //
    collapsable: false,
    children: [
      "/business/coupon",
      "/business/card",
  ],
  },
]
