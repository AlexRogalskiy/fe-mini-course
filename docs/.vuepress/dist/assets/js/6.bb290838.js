(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{402:function(t,e,n){},463:function(t,e,n){"use strict";var i=n(402);n.n(i).a},495:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{actions:[{title:"flex-start"},{title:"flex-end"},{title:"center"},{title:"stretch"},{title:"space-between"},{title:"space-around"},{title:"space-evenly"}],items:[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"}],currentIndex:"flex-start"}},computed:{classObject:function(){return{"action-active":this.isActive&&!this.error}}},methods:{changeWay:function(t){this.currentIndex=t.title}}},c=(n(463),n(48)),a=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-wrap"},[n("div",{staticClass:"content-wrap",style:{alignContent:t.currentIndex}},t._l(t.items,(function(e){return n("div",{staticClass:"item"},[t._v(t._s(e.title))])})),0),t._v(" "),n("div",{staticClass:"action-wrap"},t._l(t.actions,(function(e){return n("div",{staticClass:"action-item",class:[t.currentIndex===e.title?"action-active":"action-item"],on:{click:function(n){return t.changeWay(e)}}},[t._v(t._s(e.title)+"\n        ")])})),0)])}),[],!1,null,"567c3751",null);e.default=a.exports}}]);