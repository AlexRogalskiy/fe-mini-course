(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{411:function(t,n,i){},473:function(t,n,i){"use strict";var a=i(411);i.n(a).a},504:function(t,n,i){"use strict";i.r(n);var a={data:function(){return{actions:[{title:"方式一",id:"margin"},{title:"方式二",id:"transform"},{title:"方式三",id:"flex"},{title:"方式四",id:"inline"}],currentIndex:"margin"}},computed:{sumRet:function(){return this.a||this.b?+this.a+ +this.b:0}},methods:{changeWay:function(t){this.currentIndex=t.id,console.log(t)}}},s=(i(473),i(48)),e=Object(s.a)(a,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"center-wrap"},["margin"===t.currentIndex?i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"margin"})]):"transform"===t.currentIndex?i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"transform"},[t._v("《前端小课》")])]):"flex"===t.currentIndex?i("div",{staticClass:"content-flex-wrap"},[i("div",{staticClass:"flex-item"},[t._v("《前端小课》- flex")])]):i("div",{staticClass:"content-inline-wrap"},[i("div",{staticClass:"inline-item"},[t._v("《前端小课》- flex")])]),t._v(" "),i("div",{staticClass:"action-wrap"},t._l(t.actions,(function(n){return i("div",{staticClass:"action-item",on:{click:function(i){return t.changeWay(n)}}},[t._v(t._s(n.title))])})),0)])}),[],!1,null,"2921049a",null);n.default=e.exports}}]);