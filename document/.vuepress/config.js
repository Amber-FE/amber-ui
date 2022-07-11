const NavItems4EN = [
  {
    text: "design",
    link: "/404",
  },
  {
    text: "document",
    link: "/405",
  },
  {
    text: "components",
    link: "/en/guide/intro",
  },
  {
    text: "resource",
    link: "/406",
  },
]
const NavItems4ZH = [
  {
    text: "设计",
    link: "/404",
  },
  {
    text: "文档",
    link: "/405",
  },
  {
    text: "组件",
    link: "/guide/intro",
  },
  {
    text: "资源",
    link: "/406",
  },
]
const Sidebar4EN =  [
  // '/componentDocs/icon',
  // '/componentDocs/pictureStretch',
  // '/componentDocs/pictureRotation'
  {
    title: "Guide", // 必要的
    collapsable: false, // 可选的, 默认值是 true,
    children: ["/en/guide/intro", "/en/guide/start", "/en/guide/theme"],
  },
  {
    title: "Basic", // 必要的
    collapsable: false, // 可选的, 默认值是 true,
    children: [
      "/en/basic/container",
      "/en/basic/color",
      "/en/basic/grid",
      "/en/basic/icon",
      "/en/basic/button",
      "/en/basic/dropdown",
      "/en/basic/price",
      "/en/basic/tips",
      "/en/basic/tag",
      "/en/basic/space",
      "/en/basic/modal",
      "/en/basic/divider",
      "/en/basic/notification",
      "/en/basic/tree",
      "/en/basic/infinitescroll",
      "/en/basic/pagination"
    ],
  },
{
title: "Form",
collapsable: false,
children: [
  "/en/form/input",
  "/en/form/radio",
  "/en/form/checkbox",
  "/en/form/select",
  "/en/form/switch",
  "/en/form/date-picker",
  "/en/form/time-picker",
  "/en/form/form",
  "/en/form/inputNumber",
  "/en/form/rate"
]
},
  {
    title: "Picture", // 必要的
    collapsable: false,
    children: ["/en/picture/preview", "/en/picture/rotation", "/en/picture/stretch"],
  },
  {
    title: "Business",
    collapsable: false,
    children: [
      "en/business/coupon",
      "en/business/card",
  ],
  },
]

const Sidebar4ZH = [
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
      "/basic/pagination"
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

module.exports = {
  base: "/amber-ui/",
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    editLinks: false,
    logoName: "Amber",
    logo: "/logo.png",
    repo: 'Amber-FE/amber-ui',
    docsDir: 'document/',
    home:'/',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        nav: NavItems4ZH,
        sidebar: Sidebar4ZH
      },
      '/en/': {
          label: 'English',
          selectText: 'Language',
          ariaLabel: 'Select language',
          nav: NavItems4EN,
          sidebar: Sidebar4EN
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Amber UI',
      description: '开箱即用的高质量 Vue 组件'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Amber UI',
      description: 'A set of high-quality Vue components out of the box'
    }
  },
  plugins: ["demo-container"],

}
