(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Ck4i:function(t,e,r){var n=r("Q83E"),o=r("2klF");function c(e,r,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c},Q83E:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},R7tm:function(t,e,r){var n=r("qHws"),o=r("gC2u"),c=r("dQcQ"),i=r("m7BV");t.exports=function(t){return n(t)||o(t)||c(t)||i()}},X8hv:function(t,e,r){var n=r("Ck4i"),o=r("R7tm"),c=r("0jh0"),i=r("uDP2");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("q1tI"),s=r("7ljp"),f=s.useMDXComponents,p=s.mdx,b=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,c=t.children,a=i(t,["scope","components","children"]),s=f(r),y=b(e),O=u.useMemo((function(){if(!c)return null;var t=l({React:u,mdx:p},y),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(r)))}),[c,e]);return u.createElement(O,l({components:s},a))}},dQcQ:function(t,e,r){var n=r("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(t,e,r){var n=r("hMe3");t.exports=function(t){if(Array.isArray(t))return n(t)}},yZlL:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return g}));var n=r("FqMR"),o=r("q1tI"),c=r.n(o),i=r("Wbzz"),a=r("A2+M"),l=r("Bl7J");function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var f=Object(o.forwardRef)((function(t,e){var r=t.color,n=void 0===r?"currentColor":r,o=t.size,i=void 0===o?24:o,a=s(t,["color","size"]);return c.a.createElement("svg",u({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),c.a.createElement("polyline",{points:"12 19 5 12 12 5"}))}));f.displayName="ArrowLeft";var p=f;function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var O=Object(o.forwardRef)((function(t,e){var r=t.color,n=void 0===r?"currentColor":r,o=t.size,i=void 0===o?24:o,a=y(t,["color","size"]);return c.a.createElement("svg",b({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));O.displayName="ArrowRight";var v=O,d=r("2A+t"),j=r("izhR");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){var e=t.data.mdx,r=t.pageContext,n=r.postPrev,o=r.postNext,c={flex:"none",display:"inline-flex",columnGap:3,placeItems:"center",px:4,py:3,lineHeight:1,whiteSpace:"nowrap",transition:".3s all","&:hover":{bg:"teal.5"}},u={m:-1,width:5,height:5,flex:"none",color:"#fff"};return Object(d.c)(l.a,{pageSEO:{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}},Object(d.c)(j.c,null,Object(d.c)("article",null,Object(d.c)("header",null,Object(d.c)(j.f,{as:"h1"},e.frontmatter.title),Object(d.c)(j.i,{sx:{fontSize:16}},e.frontmatter.date)),Object(d.c)(j.a,{as:a.MDXRenderer},e.body)),Object(d.c)(j.d,{as:"nav",sx:{justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:4}},n&&Object(d.c)(j.b,{as:i.Link,to:n.fields.slug,sx:h({},c)},Object(d.c)(j.a,{as:p,sx:h({},u)}),n.frontmatter.title),o&&Object(d.c)(j.b,{as:i.Link,to:o.fields.slug,sx:h(h({},c),{},{flexDirection:"row-reverse"})},Object(d.c)(j.a,{as:v,sx:h({},u)}),o.frontmatter.title))))};var g="1145360287"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bff5de6615ac159c19ca.js.map