


const { NavItems4ZH, Sidebar4ZH} = require ('./config/zh-CN/index')
const { NavItems4EN, Sidebar4EN} = require ('./config/en-US/index')




module.exports = {
  base: '/amber-ui/',
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    editLinks: false,
    logoName: 'Amber',
    logo: '/logo.png',
    repo: 'Amber-FE/amber-ui',
    docsDir: 'document/',
    home: '/',
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
  plugins: ['demo-container']
}
