"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{219:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,c,u=t(861),i=t(885),s=t(757),o=t.n(s),p=t(791),f=t(826),l=t(739),h=t(168),d=t(444),v=d.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n  list-style: none;\n  padding: ",";\n  justify-content: center;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]})),m=d.ZP.li(a||(a=(0,h.Z)(["\n  flex-basis: calc(100% / 5 - 16px);\n  height: 100%;\n"]))),g=d.ZP.img(c||(c=(0,h.Z)(["\n  align-items: center;\n  justify-content: center;\n  display: block;\n  margin: 0 auto;\n\n  height: 380px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),x=t(184),w=function(){var n=(0,l.UO)().movieId,e=(0,p.useState)(null),t=(0,i.Z)(e,2),r=t[0],a=t[1];return(0,p.useEffect)((function(){function e(){return(e=(0,u.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Mn(n);case 3:t=e.sent,a(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),r?0===r.length?(0,x.jsx)("p",{children:" We don't have cast for this movie"}):(0,x.jsx)("div",{children:(0,x.jsx)(v,{children:r.map((function(n){var e=n.id,t=n.name,r=n.character,a=n.profile_path;return(0,x.jsxs)(m,{children:[(0,x.jsx)(g,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:t}),(0,x.jsx)("p",{children:t}),(0,x.jsxs)("p",{children:["Character: ",r]})]},e)}))})}):null}},826:function(n,e,t){t.d(e,{Mn:function(){return f},WB:function(){return l},hG:function(){return o},io:function(){return s},z1:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u=t(44),i="76421f36bc1f2a2420e565e031c0566d";u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("search/movie/?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=219.985eccf8.chunk.js.map