(this["webpackJsonpfood-project"]=this["webpackJsonpfood-project"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(19),a=c.n(s),i=(c(25),c.p,c(26),c(4)),o=c(2),j=c(0);function l(){return Object(j.jsx)("nav",{className:"green darken-1",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)(i.b,{to:"",className:"brand-logo",children:"React Router"}),Object(j.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})]})})}function b(){return Object(j.jsx)("footer",{className:"page-footer green lighten-4",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})}var u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){return Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"indeterminate"})})}var v=c(12);function N(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:c,alt:t})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:t}),Object(j.jsxs)("p",{children:[n.slice(0,70),"..."]})]}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})}function y(e){var t=e.catalog,c=void 0===t?[]:t;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"list",children:c.map((function(e){return Object(j.jsx)(N,Object(v.a)({},e),e.idCategory)}))})})}function w(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(),s=Object(u.a)(r,2),a=s[0],i=s[1],o=function(){c(a)};return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"search",id:"search-field",placeholder:"Search",onKeyDown:function(e){"Enter"===e.key&&o()},onChange:function(e){return i(e.target.value)},value:a}),Object(j.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:o,children:"Search"})]})})}function C(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],l=a[1],b=Object(o.g)(),d=b.pathname,h=b.search,O=Object(o.f)().push;return Object(n.useEffect)((function(){p().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.toLowerCase().split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{cb:function(e){e?(l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})):p().then((function(e){r(e.categories),O({pathname:"/",search:""})}))}}),c.length?Object(j.jsx)(y,{catalog:i}):g]})}function k(){return Object(j.jsx)("h1",{children:"Hello from About page"})}function M(){return Object(j.jsx)("h1",{children:"Hello from Contact page"})}function S(){return Object(j.jsx)("h1",{children:"Page not found!!"})}function F(e){console.log("m_props=",e);var t=e.meal,c=t.strMeal,n=t.idMeal,r=t.strMealThumb;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:r,alt:c})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("span",{className:"card-title",children:c})}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(i.b,{to:"/meal/".concat(n),className:"btn",children:"Watch recipe"})})]})}function L(e){var t=e.meals;return console.log("meals=",t),Object(j.jsx)("div",{className:"list m-list",children:t.map((function(e){return Object(j.jsx)(F,{meal:Object(v.a)({},e)},e.idMeal)}))})}function A(){var e=Object(o.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(o.f)().goBack;return Object(n.useEffect)((function(){console.log("cname=",e),f(e).then((function(e){console.log(e),s(e.meals)}))}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn",onClick:a,children:" Go back"}),r.length?Object(j.jsx)(L,{meals:r}):Object(j.jsx)(g,{})]})}function E(){var e=Object(o.h)().id,t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(o.f)().goBack;return console.log("r_id=",e),Object(n.useEffect)((function(){m(e).then((function(e){console.log("eff id=",e),s(e.meals[0]),console.log("rec=",r)}))}),[e]),Object(j.jsxs)("div",{children:[r?Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)("img",{src:r.strMealThumb,alt:r.strMeal}),Object(j.jsx)("h1",{children:r.strMeal}),Object(j.jsxs)("h6",{children:["Category: ",r.strCategory]}),r.strArea?Object(j.jsxs)("h6",{children:[" Area: ",r.strArea]}):"",Object(j.jsx)("p",{children:r.strInstructions}),Object(j.jsxs)("table",{className:"centered",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Ingredient"}),Object(j.jsx)("th",{children:"Measure"})]})}),Object(j.jsx)("tbody",{children:Object.keys(r).map((function(e){return e.includes("Ingredient")&&r[e]?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:r[e]}),Object(j.jsx)("td",{children:r["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),r.strYoutube?Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:" Video Recipe"}),Object(j.jsx)("iframe",{title:e,src:"https://www.youtube.com/embed/".concat(r.strYoutube.slice(-11)),frameborder:"0",allowFullScreen:"true"})]}):null]}):Object(j.jsx)(g,{}),Object(j.jsx)("button",{className:"btn",onClick:a,children:" Go back"})]})}var I=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{basename:"/food-project",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"container content",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(C,{htitle:"test home title"})}),Object(j.jsx)(o.a,{path:"/about",component:k}),Object(j.jsx)(o.a,{path:"/contacts",component:M}),Object(j.jsx)(o.a,{path:"/category/:name",component:A}),Object(j.jsx)(o.a,{path:"/meal/:id",component:E}),Object(j.jsx)(o.a,{component:S})]})}),Object(j.jsx)(b,{})]})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1c5f942c.chunk.js.map