"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{826:function(n,t,e){e.d(t,{Mn:function(){return p},WB:function(){return l},hG:function(){return s},io:function(){return i},z1:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(44),o="76421f36bc1f2a2420e565e031c0566d";u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("search/movie/?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},526:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,u,o,i,s,f=e(861),p=e(885),l=e(757),h=e.n(l),d=e(739),m=e(791),g=e(826),v=e(168),x=e(444),Z=e(731),w=x.ZP.div(r||(r=(0,v.Z)(["\n  background-color: #be444475;\n"]))),b=x.ZP.h1(a||(a=(0,v.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  margin: ",";\n  text-transform: uppercase;\n  align-items: center;\n  text-align: center;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[5]})),y=x.ZP.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n  list-style: none;\n  padding: ",";\n  justify-content: center;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]})),k=x.ZP.li(u||(u=(0,v.Z)(["\n  flex-basis: calc(100% / 5 - 16px);\n  height: 100%;\n"]))),P=(0,x.ZP)(Z.OL)(o||(o=(0,v.Z)(["\n  text-decoration: none;\n\n  &.active {\n    background: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white})),_=x.ZP.h2(i||(i=(0,v.Z)(["\n  padding: ","px;\n  border-radius: 4px;\n  color: ",";\n  justify-content: center;\n  text-align: center;\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold})),j=x.ZP.img(s||(s=(0,v.Z)(["\n  align-items: center;\n  justify-content: center;\n  display: block;\n  margin: 0 auto;\n\n  height: 380px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),z=e(184),S=function(){var n=(0,d.TH)(),t=(0,m.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1];if((0,m.useEffect)((function(){function n(){return(n=(0,f.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.io();case 3:t=n.sent,a(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r)return(0,z.jsxs)(w,{children:[(0,z.jsx)(b,{children:"Trending today"}),(0,z.jsx)(y,{children:r.map((function(t){return(0,z.jsx)(k,{children:(0,z.jsxs)(P,{to:"movies/".concat(t.id),state:{from:n},children:[(0,z.jsx)(j,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),(0,z.jsx)(_,{children:t.title})]})},t.id)}))})]})}}}]);
//# sourceMappingURL=526.51bc6367.chunk.js.map