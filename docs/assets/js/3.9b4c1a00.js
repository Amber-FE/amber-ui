(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{453:function(t,e,n){"use strict";var r=n(13),i=n(155),o=n(12),a=n(72),s=n(19),u=n(35),c=n(54),l=n(156),f=n(157);i("match",(function(t,e,n){return[function(e){var n=u(this),i=null==e?void 0:c(e,t);return i?r(i,e,n):new RegExp(e)[t](s(n))},function(t){var r=o(this),i=s(t),u=n(e,r,i);if(u.done)return u.value;if(!r.global)return f(r,i);var c=r.unicode;r.lastIndex=0;for(var h,d=[],p=0;null!==(h=f(r,i));){var g=s(h[0]);d[p]=g,""===g&&(r.lastIndex=l(i,a(r.lastIndex),c)),p++}return 0===p?null:d}]}))},454:function(t,e,n){"use strict";var r=n(107).PROPER,i=n(36),o=n(12),a=n(19),s=n(2),u=n(458),c=RegExp.prototype.toString,l=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=r&&"toString"!=c.name;(l||f)&&i(RegExp.prototype,"toString",(function(){var t=o(this);return"/"+a(t.source)+"/"+a(u(t))}),{unsafe:!0})},455:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},456:function(t,e,n){"use strict";var r=n(4),i=n(457).trim;r({target:"String",proto:!0,forced:n(460)("trim")},{trim:function(){return i(this)}})},457:function(t,e,n){var r=n(3),i=n(35),o=n(19),a=n(455),s=r("".replace),u="["+a+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t){return function(e){var n=o(i(e));return 1&t&&(n=s(n,c,"")),2&t&&(n=s(n,l,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},458:function(t,e,n){var r=n(13),i=n(11),o=n(69),a=n(258),s=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in s||i(t,"flags")||!o(s,t)?e:r(a,t)}},460:function(t,e,n){var r=n(107).PROPER,i=n(2),o=n(455);t.exports=function(t){return i((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},462:function(t,e,n){},463:function(t,e,n){var r=n(14),i=n(7),o=n(3),a=n(257),s=n(260),u=n(32),c=n(74).f,l=n(69),f=n(160),h=n(19),d=n(458),p=n(154),g=n(264),v=n(36),m=n(2),b=n(11),y=n(53).enforce,x=n(505),S=n(5),_=n(259),k=n(263),w=S("match"),E=i.RegExp,C=E.prototype,$=i.SyntaxError,I=o(C.exec),R=o("".charAt),O=o("".replace),P=o("".indexOf),A=o("".slice),T=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,j=/a/g,D=new E(L)!==L,N=p.MISSED_STICKY,q=p.UNSUPPORTED_Y,U=r&&(!D||N||_||k||m((function(){return j[w]=!1,E(L)!=L||E(j)==j||"/a/i"!=E(L,"i")})));if(a("RegExp",U)){for(var H=function(t,e){var n,r,i,o,a,c,p=l(C,this),g=f(t),v=void 0===e,m=[],x=t;if(!p&&g&&v&&t.constructor===H)return t;if((g||l(C,t))&&(t=t.source,v&&(e=d(x))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),x=t,_&&"dotAll"in L&&(r=!!e&&P(e,"s")>-1)&&(e=O(e,/s/g,"")),n=e,N&&"sticky"in L&&(i=!!e&&P(e,"y")>-1)&&q&&(e=O(e,/y/g,"")),k&&(t=(o=function(t){for(var e,n=t.length,r=0,i="",o=[],a={},s=!1,u=!1,c=0,l="";r<=n;r++){if("\\"===(e=R(t,r)))e+=R(t,++r);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:I(T,A(t,r+1))&&(r+=2,u=!0),i+=e,c++;continue;case">"===e&&u:if(""===l||b(a,l))throw new $("Invalid capture group name");a[l]=!0,o[o.length]=[l,c],u=!1,l="";continue}u?l+=e:i+=e}return[i,o]}(t))[0],m=o[1]),a=s(E(t,e),p?this:C,H),(r||i||m.length)&&(c=y(a),r&&(c.dotAll=!0,c.raw=H(function(t){for(var e,n=t.length,r=0,i="",o=!1;r<=n;r++)"\\"!==(e=R(t,r))?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),i+=e):i+="[\\s\\S]":i+=e+R(t,++r);return i}(t),n)),i&&(c.sticky=!0),m.length&&(c.groups=m)),t!==x)try{u(a,"source",""===x?"(?:)":x)}catch(t){}return a},M=c(E),W=0;M.length>W;)g(H,E,M[W++]);C.constructor=H,H.prototype=C,v(i,"RegExp",H,{constructor:!0})}x("RegExp")},464:function(t,e,n){var r=n(14),i=n(259),o=n(31),a=n(465),s=n(53).get,u=RegExp.prototype,c=TypeError;r&&i&&a(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!s(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},465:function(t,e,n){var r=n(262),i=n(15);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},466:function(t,e,n){var r=n(14),i=n(154).MISSED_STICKY,o=n(31),a=n(465),s=n(53).get,u=RegExp.prototype,c=TypeError;r&&i&&a(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!s(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},467:function(t,e,n){},473:function(t,e){t.exports=function(t){return null==t}},500:function(t,e,n){"use strict";var r=n(4),i=n(501);r({target:"String",proto:!0,forced:n(502)("link")},{link:function(t){return i(this,"a","href",t)}})},501:function(t,e,n){var r=n(3),i=n(35),o=n(19),a=/"/g,s=r("".replace);t.exports=function(t,e,n,r){var u=o(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+s(o(r),a,"&quot;")+'"'),c+">"+u+"</"+e+">"}},502:function(t,e,n){var r=n(2);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},503:function(t,e,n){"use strict";n(462)},504:function(t,e,n){"use strict";e.a={}},505:function(t,e,n){"use strict";var r=n(22),i=n(15),o=n(5),a=n(14),s=o("species");t.exports=function(t){var e=r(t),n=i.f;a&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},506:function(t,e,n){"use strict";var r,i=n(4),o=n(3),a=n(52).f,s=n(72),u=n(19),c=n(159),l=n(35),f=n(161),h=n(38),d=o("".endsWith),p=o("".slice),g=Math.min,v=f("endsWith");i({target:"String",proto:!0,forced:!!(h||v||(r=a(String.prototype,"endsWith"),!r||r.writable))&&!v},{endsWith:function(t){var e=u(l(this));c(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:g(s(n),r),o=u(t);return d?d(e,o,i):p(e,i-o.length,i)===o}})},507:function(t,e,n){"use strict";n(467)},514:function(t,e,n){var r=n(57),i=n(27),o=n(45);t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&"[object String]"==r(t)}},518:function(t,e,n){"use strict";var r=n(4),i=n(75).find,o=n(152),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},548:function(t,e,n){"use strict";n(456),n(44),n(8),n(34),n(453),n(255),n(256),n(253),n(106),n(463),n(464),n(466),n(454),n(105),n(252),n(150),n(506);var r=n(266),i=n.n(r),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i()(e,"title","");return i()(e,"frontmatter.tags")&&(r+=" ".concat(e.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),a(t,r)},a=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),i=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(r.test(t))return i.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var o=t.endsWith(" ");return new RegExp(i.map((function(t,e){return i.length!==e+1||o?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},s={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=[],a=0;a<e.length&&!(i.length>=n);a++){var s=e[a];if(this.getPageLocalePath(s)===r&&this.isSearchable(s))if(o(t,s))i.push(s);else if(s.headers)for(var u=0;u<s.headers.length&&!(i.length>=n);u++){var c=s.headers[u];c.title&&o(t,s,c.title)&&i.push(Object.assign({},s,{path:s.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(507),n(43)),c=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},551:function(t,e,n){"use strict";n.r(e);var r={name:"Home",components:{NavLink:n(461).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(503),n(43)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):n("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports,a=n(547),s=n(546),u=n(549),c=(n(34),n(106),n(453),n(150),n(252),n(253),n(105),n(8),n(148),n(44),/#.*$/),l=/\.(md|html)$/,f=/\/$/,h=/^[a-z]+:/i;function d(t){return decodeURI(t).replace(c,"").replace(l,"")}function p(t){return h.test(t)}function g(t){if(p(t))return t;var e=t.match(c),n=e?e[0]:"",r=d(t);return f.test(r)?t:r+".html"+n}function v(t,e,n){if(p(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=d(e),i=0;i<t.length;i++)if(d(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:g(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function m(t,e,n,r){var i=n.pages,o=n.themeConfig,a=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||a.sidebar||o.sidebar))return b(t);var s=a.sidebar||o.sidebar;if(s){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,s),c=u.base,l=u.config;return"auto"===l?b(t):l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return v(n,e,r);if(Array.isArray(e))return Object.assign(v(n,e[0],r),{title:e[1]});var o=e.children||[];return 0===o.length&&e.path?Object.assign(v(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:o.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function b(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}var y={name:"Layout",components:{Home:o,Page:s.a,Sidebar:u.a,Navbar:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return m(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},x=Object(i.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=x.exports}}]);