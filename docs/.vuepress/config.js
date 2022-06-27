module.exports = {
  base: "/",
  themeConfig: {
    logoName: "Amber",
    logo: "/logo.png",
    search: false,
    nav: [
      // 配置顶部导航栏
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
    ],
    sidebar: [
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
          "/basic/infinitescroll"
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
        title: "业务组件", // 可选的
        collapsable: false,
        children: [
          "/business/coupon",
          "/business/card",
      ],
      },
    ],
  },
  plugins: ["demo-container"],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
    },
  },
}
