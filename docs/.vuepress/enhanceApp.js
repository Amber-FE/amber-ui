
import './main.css'
import '../../themes/components/index.scss'
import icon from './icon.json';


export default ({ Vue, options, router, siteData }) => {
  Vue.prototype.$icon = icon
  Vue.mixin({
      created() {
        import('../../packages/components/index').then(function (m) {
            Vue.use(m.default)
        })
      },
  })
};