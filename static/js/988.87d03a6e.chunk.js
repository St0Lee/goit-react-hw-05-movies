"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[988],{988:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),i=n(439),s=n(757),a=n.n(s),c=n(689),o=n(87),u=n(791),l={container:"single-movie_container__2viBW",wrapper:"single-movie_wrapper__L9htj",poster:"single-movie_poster__VJqyx",link:"single-movie_link__xR8TK",title:"single-movie_title__lYS-+",overview:"single-movie_overview__cUnIA",btn:"single-movie_btn__LzYkg"},v=n(913),m=n(119),p=n(184),d=function(){var e,t,n=(0,u.useState)(),s=(0,i.Z)(n,2),d=s[0],f=s[1],h=(0,u.useState)(!1),g=(0,i.Z)(h,2),_=g[0],x=g[1],w=(0,u.useState)(null),j=(0,i.Z)(w,2),k=j[0],b=j[1],N=(0,c.UO)().movieId,S=(0,c.TH)(),U=(0,c.s0)(),Z=(null===(e=S.state)||void 0===e?void 0:e.from)||"/";(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,v.Pg)(N);case 4:t=e.sent,n=t.data,f(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);var y=null===d||void 0===d||null===(t=d.genres)||void 0===t?void 0:t.map((function(e){return e.name})),C=(10*(null===d||void 0===d?void 0:d.vote_average)).toFixed(1);return(0,p.jsxs)(p.Fragment,{children:[_&&(0,p.jsx)(m.Z,{}),k&&(0,p.jsx)("p",{children:k}),d&&(0,p.jsxs)("div",{className:l.container,children:[(0,p.jsx)("button",{onClick:function(){return U(Z)},type:"button",className:l.btn,children:"Go Back"}),(0,p.jsxs)("div",{className:l.wrapper,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(d.poster_path),alt:d.title,className:l.poster}),(0,p.jsx)("h1",{className:l.title,children:d.title}),(0,p.jsx)("p",{className:l.overview,children:d.overview}),(0,p.jsxs)("p",{className:l.rating,children:["Rating: ",C,"%"]}),(0,p.jsxs)("p",{className:l.genres,children:["Genres: ",y&&y.join(", ")]})]}),(0,p.jsx)(o.rU,{to:"cast",state:{from:Z},className:l.link,children:"Show Cast"}),(0,p.jsx)(c.j3,{}),(0,p.jsx)(o.rU,{to:"reviews",state:{from:Z},className:l.link,children:"Show Reviews"})]})]})},f=function(){return(0,p.jsx)("div",{children:(0,p.jsx)(d,{})})}},913:function(e,t,n){n.d(t,{Df:function(){return i},M1:function(){return c},Pg:function(){return s},UN:function(){return a},tx:function(){return o}});var r=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9d62fa0a2d83c73b042e215c1a6cc958"}}),i=function(){return r.get("trending/movie/week")},s=function(e){return r.get("movie/".concat(e))},a=function(e){return r.get("search/movie",{params:{query:e,page:1}})},c=function(e){return r.get("movie/".concat(e,"/credits"))},o=function(e){return r.get("movie/".concat(e,"/reviews"))}}}]);
//# sourceMappingURL=988.87d03a6e.chunk.js.map