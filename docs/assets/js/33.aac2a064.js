(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{448:function(t,a,e){"use strict";function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",(function(){return s}))},449:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e(149),e(68),e(44),e(8),e(450),e(148),e(251);var s=e(448);function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){Object(s.a)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},450:function(t,a,e){var s=e(4),n=e(2),r=e(20),p=e(52).f,o=e(14),c=n((function(){p(1)}));s({target:"Object",stat:!0,forced:!o||c,sham:!o},{getOwnPropertyDescriptor:function(t,a){return p(r(t),a)}})},585:function(t,a,e){"use strict";e.r(a);var s=e(449),n={name:"component-doc",components:{"render-demo-0":Object(s.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("amber-pagination")],1)},staticRenderFns:[]},{}),"render-demo-1":Object(s.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("amber-pagination",{attrs:{isJump:"",total:500,pageSizes:this.pageSizes}})],1)},staticRenderFns:[]},{data:function(){return{pageSizes:["10","50","80","100"]}}})}},r=e(43),p=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"pagination"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pagination"}},[t._v("#")]),t._v(" Pagination")]),t._v(" "),e("h3",{attrs:{id:"basic-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[t._v("#")]),t._v(" Basic usage")]),t._v(" "),e("p",[t._v("For the basic pager display, the default total data is 100, and each page displays 10.")]),t._v(" "),e("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[e("template",{slot:"demo"},[[e("render-demo-0")]],2),t._v(" "),e("template",{slot:"source"},[e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amber-pagination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amber-pagination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])],2),e("h3",{attrs:{id:"jump-show"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jump-show"}},[t._v("#")]),t._v(" Jump show")]),t._v(" "),e("p",[t._v("Pager display, you can add the isjump attribute to show the jump function."),e("br"),t._v("\nBind the total attribute to display the total number of data pieces. Bind pagesizes to control the option setting of the number of displays per page selector.")]),t._v(" "),e("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[e("template",{slot:"demo"},[[e("render-demo-1")]],2),t._v(" "),e("template",{slot:"source"},[e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amber-pagination")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("isJump")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":total")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("500"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":pageSizes")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pageSizes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amber-pagination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pageSizes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'50'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'80'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),e("h3",{attrs:{id:"pagination-attribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pagination-attribute"}},[t._v("#")]),t._v(" Pagination Attribute")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("explain")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("defalut")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("total")]),t._v(" "),e("td",[t._v("Total number of data")]),t._v(" "),e("td",[t._v("string/number")]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("pageSizes")]),t._v(" "),e("td",[t._v("Display number selector per page")]),t._v(" "),e("td",[t._v("string[]")]),t._v(" "),e("td",[t._v("['10', '20', '30', '50', '100']")])]),t._v(" "),e("tr",[e("td",[t._v("isJump")]),t._v(" "),e("td",[t._v("Show jump function")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h3",{attrs:{id:"pagination-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pagination-active"}},[t._v("#")]),t._v(" Pagination Active")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("explain")]),t._v(" "),e("th",[t._v("Return value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("getCurrentPage")]),t._v(" "),e("td",[t._v("Triggered when the page number is updated")]),t._v(" "),e("td",[t._v("Current page")])])])])],1)}),[],!1,null,null,null);a.default=p.exports}}]);