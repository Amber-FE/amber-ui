<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink
      :to="$localePath"
      class="home-link"
    >
    <div class="nav-logo-box">
      <img
        v-if="$site.themeConfig.logo"
        class="logo img-responsive"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <!-- <span
       class="logo"
       v-if="$site.themeConfig.logoName"
       :alt="$siteTitle"
       >
       {{ $site.themeConfig.logoName }}
      </span> -->
      <!-- <amber-button class="logo" size="small" text type="primary">{{ $site.themeConfig.logoName }}</amber-button> -->
      <!-- <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span> -->
      </div>
    </RouterLink>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      <div class="color-group">
        <div class="color-item1" @click="toggleTheme(1)"></div>
        <div class="color-item2" @click="toggleTheme(2)"></div>
        <div class="color-item3" @click="toggleTheme(3)"></div>
        <div class="color-item4" @click="toggleTheme(4)"></div>
      </div>
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from './NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  data () {
    return {
      linksWrapMaxWidth: null,
      theme: {
        1: {
          primary: '#0fbbff',
          warning: '#e89a62',
          danger: '#ea5959',
        },
        2: {
          primary: '#1a9dff',
          warning: '#ed6a0c',
          danger: '#D40000',
        },
        3: {
          primary: '#3267ea',
          warning: '#c85f13',
          danger: '#b60101',
        },
        4: {
          primary: '#0a2a61',
          warning: '#ac4a02',
          danger: '#860404',
        }
      }
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  methods: {
    toggleTheme(colorValue) {
      document.documentElement.style.setProperty('--color-primary', this.theme[colorValue].primary)
      document.documentElement.style.setProperty('--color-warning', this.theme[colorValue].warning)
      document.documentElement.style.setProperty('--color-danger', this.theme[colorValue].danger)
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  display: flex;
  align-items: center;
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .nav-logo-box
    display: flex;
    height: $navbarHeight
    width: 200px
    .logo
      // margin-right 0.8rem
      -webkit-background-clip: text;
      font-size 30px;
      height: 100%
  .color-group
    display flex
    align-items: center;
    position: absolute;
    right: 16rem;
    height: 100%;
    div
      border-radius: 2px
    .color-item1
      width: 20px
      height: 20px
      background: #0fbbff
      cursor pointer
    .color-item2
      width: 20px
      height: 20px
      background: #1a9dff
      margin-left: 20px
      cursor pointer
    .color-item3
      width: 20px
      height: 20px
      background: #3267ea
      margin-left: 20px
      cursor pointer
    .color-item4
      width: 20px
      height: 20px
      background: #0a2a61
      margin-left: 20px
      cursor pointer
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right 10rem
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
