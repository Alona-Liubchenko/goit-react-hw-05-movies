"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{826:function(n,e,t){t.d(e,{Mn:function(){return f},WB:function(){return l},hG:function(){return s},io:function(){return u},z1:function(){return p}});var r=t(861),a=t(757),i=t.n(a),c=t(44),o="76421f36bc1f2a2420e565e031c0566d";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie/?api_key=".concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},321:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,a,i,c,o,u,s,p,f,l=t(861),d=t(885),h=t(757),x=t.n(h),m=t(731),g=t(739),v=t(826),b=t(791),y=t(168),Z=t(444),w=Z.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n"]))),k=Z.ZP.form(a||(a=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),j=Z.ZP.input(i||(i=(0,y.Z)(["\n  display: inline-block;\n  width: 100%;\n  font-size: ",";\n  border: ",";\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]})),P=Z.ZP.button(c||(c=(0,y.Z)(["\n  display: inline-block;\n  width: 64px;\n  height: 48px;\n  border: 0;\n\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),z=Z.ZP.ul(o||(o=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n  list-style: none;\n  padding: ","px;\n  margin: ","px;\n  justify-content: center;\n\n  background-color: #be444475;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]})),_=Z.ZP.li(u||(u=(0,y.Z)(["\n  flex-basis: calc(100% / 5 - 16px);\n  height: 100%;\n"]))),S=(0,Z.ZP)(m.OL)(s||(s=(0,y.Z)(["\n  text-decoration: none;\n\n  &.active {\n    background: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white})),U=Z.ZP.h2(p||(p=(0,y.Z)(["\n  padding: ","px;\n  border-radius: 4px;\n  color: ",";\n  justify-content: center;\n  text-align: center;\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold})),q=Z.ZP.img(f||(f=(0,y.Z)(["\n  align-items: center;\n  justify-content: center;\n  display: block;\n  margin: 0 auto;\n\n  height: 380px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),C=t(692),L=t(184),D=function(){var n,e=(0,g.TH)(),t=(0,b.useState)([]),r=(0,d.Z)(t,2),a=r[0],i=r[1],c=(0,b.useState)(""),o=(0,d.Z)(c,2),u=o[0],s=o[1],p=(0,m.lr)(),f=(0,d.Z)(p,2),h=f[0],y=f[1],Z=null!==(n=h.get("query"))&&void 0!==n?n:"";if((0,b.useEffect)((function(){if(""!==Z){var n=function(){var n=(0,l.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.z1(Z);case 3:e=n.sent,i(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[Z]),!a)return null;return(0,L.jsxs)("div",{children:[(0,L.jsx)(w,{children:(0,L.jsxs)(k,{onSubmit:function(n){n.preventDefault(),""!==u.trim()?(s(u),y(""!==u?{query:u}:"")):alert("Enter the search query")},children:[(0,L.jsx)(j,{type:"text",onChange:function(n){s(n.target.value.toLowerCase())},name:Z,value:u,placeholder:"Please enter a movie title"}),(0,L.jsx)(P,{type:"submit",children:(0,L.jsx)(C.wTD,{size:"25px"})})]})}),(0,L.jsx)("div",{children:(0,L.jsx)(z,{children:a.map((function(n){return(0,L.jsx)(_,{children:(0,L.jsxs)(S,{to:"".concat(n.id),state:{from:e},children:[(0,L.jsx)(q,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:""}),(0,L.jsx)(U,{children:n.title})]})},n.id)}))})}),(0,L.jsx)(b.Suspense,{fallback:null,children:(0,L.jsx)(g.j3,{})})]})}}}]);
//# sourceMappingURL=321.3be08c70.chunk.js.map