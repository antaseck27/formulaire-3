"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([["1302"],{54488:function(e,t,a){a.d(t,{K5:()=>f,Tu:()=>y,Un:()=>g,qk:()=>p});var s=a(11844),r=a(2820),l=a(28329),o=a(13555),n=a(81912),i=a(78968),c=a(28856),u=a(67184),m=a(12989),d=a(79812);let p=({currentUrl:e,utmTerm:t,placement:a})=>{let l={utm_source:"unsplash",utm_medium:"affiliate",utm_campaign:(0,r.zG)(a,s.ug.match({LandingPage:s.x1.match({TopFeed:()=>"category_photos_top",BottomFeed:()=>"category_photos_bottom"}),Search:s.Gx.match({TopFeed:()=>"srp_photos_top",BottomFeed:()=>"srp_photos_bottom",BottomFeedEmpty:()=>"srp_photos_zsr"}),PhotoPage:s.lk.match({Top:()=>"adp_photos_sponsored"})})),utm_content:u.wS(e),utm_term:t};return(0,r.zG)(l,m.fR,m.m1,u.P8)},h=({searchQuery:e,...t})=>(0,r.zG)("https://www.istockphoto.com/search/2/image",u.CN,u.P8(m.m1(m.fR({phrase:e,alloweduse:"availableforalluses",excludenudity:l.zi(!0),sort:"best",mediatype:"photography"}))),p(t)),k=({imageUrl:e,...t})=>(0,r.zG)("https://www.istockphoto.com/search/search-by-image",u.CN,u.P8(m.m1(m.fR({mediatype:"photography",imageurl:d.S1.is(e)?"":d.QA.encode(e),assettype:"image"}))),p(t)),g=c.Ue(),f=({type:e,...t})=>(0,r.zG)(e,g.match({Image:e=>k({imageUrl:e,...t}),Query:e=>h({searchQuery:e,...t})})),x=(0,r.ls)(s.ug.checkIsTopFeed,o.U3({onTrue:n._K,onFalse:n.Xi})),y=({affiliates:e,placement:t})=>a=>(0,r.zG)(e,i.uK((e,t)=>t<a),x(t))},52026:function(e,t,a){a.d(t,{Un:()=>h.Un,lk:()=>x.lk,ug:()=>x.ug,Jr:()=>k,n9:()=>g,Gx:()=>x.Gx,x1:()=>x.x1});var s=a(4271),r=a(67654),l=a(52776),o=a(68814),n=a(2820),i=a(78968),c=a(3714),u=a(95263),m=a(30019),d=a(67184),p=a(58016),h=a(54488);let k=({image:e,utmTermParams:t,children:a,onClick:i,placement:c,className:m,...p})=>{let k=(0,l.w)(),g=(0,u.useMemo)(()=>(0,n.zG)(e.href,(0,h.qk)({currentUrl:k,utmTerm:f(t),placement:c})),[k,e.href,c,t]),x=(0,u.useCallback)(()=>{i?.(e)},[e,i]);return(0,s.jsx)(r.r,{...p,rel:"nofollow",href:d.wS(g),className:(0,o.Sh)("RsYz8",m),onClick:x,children:a})},g=({type:e,utmTermParams:t,placement:a,...o})=>{let n=(0,l.w)(),i=(0,u.useMemo)(()=>(0,h.K5)({type:e,utmTerm:f(t),currentUrl:n,placement:a}),[n,a,e,t]);return(0,s.jsx)(r.r,{...o,href:d.wS(i)})},f=({searchQuery:e,position:t,xp:a})=>(0,n.zG)([e,t?.toString(),a?.id,a?.variant],i.UI((0,n.ls)(c.ij,m.Rw(p.WL))),i.v_(":"));var x=a(11844)},71332:function(e,t,a){a.d(t,{fU:()=>Q,n9:()=>N});var s={};a.r(s),a.d(s,{viewMore:()=>U});var r=a(4271),l=a(21700),o=a(52026),n=a(39854),i=a(27787),c=a(50811),u=a(40198),m=a(60439),d=a(2820),p=a(78968),h=a(3714),k=a(45779),g=a(65763),f=a(95263),x=a(45793),y=a(74738),v=a(30019),j=a(22253),z=a(80374),b=a(63450);let w=(0,a(32741).x)({description:"start video playback",path:"M22.5 13.134C23.1667 13.5189 23.1667 14.4811 22.5 14.866L1.5 26.9904C0.833336 27.3753 2.55169e-06 26.8942 2.58534e-06 26.1244L3.64529e-06 1.87564C3.67894e-06 1.10584 0.833338 0.624718 1.5 1.00962L22.5 13.134Z",viewBox:"0 0 32 32"});var G=a(23384);a(4263);var C=a(81472);a(16274);let U=()=>"Rendez-vous sur iStock",T=e=>s,I=()=>{let{locale:e}=(0,C.M)();return T(e)},N=({type:e,searchQuery:t,xp:a,placement:s,className:n,children:i})=>{let u=(0,c.I)(),d=(0,f.useCallback)(()=>{u(l.aU.mk.Track(m.ju.mk.AffiliatesGridResultClick({placement:s,searchQuery:t,type:0})))},[s,t]);return(0,r.jsx)(o.n9,{type:e,utmTermParams:{searchQuery:t,position:void 0,xp:a},placement:s,className:n,onClick:d,children:i})},_=({xp:e,onResultClick:t,placement:a,searchQuery:s,linkType:l,request:i,index:c,numberOfImages:u})=>{let[m,k]=(0,f.useState)(!1),g=(0,d.zG)(i,j.UI(p.U2(c))),y=o.ug.checkIsTopFeed(a),z=(0,f.useRef)(null),C=()=>z.current?.pause(),U=async()=>{try{await z.current?.play()}catch(e){}},T=(0,r.jsx)(n.Q3,{responseOption:(0,d.zG)(g,j.Rl,v.UI(e=>({loading:y?"eager":"lazy",src:"image"===e.tag?e.url:e.thumbUrl,title:e.title,className:"BydZa"}))),"data-testid":x.fU.ResultImg,placeholderConfig:{animateColor:j.zR(g)},aspectRatio:{x:306,y:204}}),_=(0,d.zG)(v.gz(j.Rl(g),h.ij(s)),v.EQ(()=>T,([s,l])=>"image"===s.tag?(0,r.jsx)(o.Jr,{image:s,utmTermParams:{searchQuery:l,position:void 0,xp:e},onClick:t,placement:a,children:T}):(0,r.jsx)(o.Jr,{image:s,utmTermParams:{searchQuery:l,position:void 0,xp:e},onClick:t,placement:a,onMouseEnter:U,onMouseLeave:C,onFocus:U,onBlur:C,className:"wZ2dU rkYpC",children:(0,r.jsxs)(G.b,{background:(0,r.jsx)("video",{ref:z,className:"BXunN",playsInline:!0,muted:!0,preload:"none",loop:!0,disableRemotePlayback:!0,disablePictureInPicture:!0,poster:s.thumbUrl,onWaiting:()=>k(!0),onCanPlay:()=>k(!1),children:(0,r.jsx)("source",{src:s.videoUrl})}),children:[m?(0,r.jsx)("div",{className:"MS4I0",children:(0,r.jsx)(b.L4,{color:"white",className:"MhhMA"})}):null,(0,r.jsx)("div",{className:"l4Sbx",children:(0,r.jsxs)("div",{className:"vSUZV",children:[(0,r.jsx)(w,{color:"white",className:"ICIqN"}),(0,r.jsx)("span",{className:"MYG9j",children:s.length})]})})]})}))),R=I();return l&&void 0!==s&&!1===y&&(0,d.zG)(i,j.Gg(e=>{let t=p.kE(e)>=u,a=c+1===u;return t&&a}))?(0,r.jsx)(G.b,{background:_,children:(0,r.jsxs)(N,{type:l,searchQuery:s,xp:e,placement:a,className:"ewX5z rkYpC yZhvJ",children:[R.viewMore()," ↗"]})}):_},R=({placement:e,searchQuery:t})=>{let a=(0,c.I)(),[s,r]=(0,u.m)(e=>(0,d.zG)(e,y.DZ)),o=(0,k.m)(()=>(0,d.zG)(r,y.pd(e=>(0,d.zG)(i.LO(e,{}),z.hX(i.Yu))),z.oA,z.Ps(),z.lt()));return(0,g.m)(o,{complete:()=>{a(l.aU.mk.Track(m.ju.mk.AffiliatesGridImpression({placement:e,searchQuery:t})))}}),s},P=({placement:e,response:t,searchQuery:a,linkType:s,numberOfImages:o,xp:n})=>{let i=(0,c.I)(),u=R({placement:e,searchQuery:a}),d=(0,f.useCallback)(t=>{i(l.aU.mk.Track(m.ju.mk.AffiliatesGridResultClick({placement:e,searchQuery:a,type:+("image"!==t.tag)})))},[e,a]);return(0,r.jsx)(M,{containerRef:u,placement:e,xp:n,searchQuery:a,linkType:s,request:j.Vp(t),onResultClick:d,numberOfImages:o})},M=({searchQuery:e,linkType:t,request:a,numberOfImages:s,onResultClick:l,placement:n,containerRef:i,xp:c})=>{let u=(0,d.zG)(a,j.eL(()=>x.fU.LoadingPlaceholder,()=>x.fU.LoadedPlaceholder,p.EQ({onEmpty:()=>x.fU.LoadedPlaceholder,onNonEmpty:()=>x.fU.Content})));return(0,r.jsx)("div",{"data-affiliates-grid-container":"","data-testid":u,ref:i,className:o.ug.checkIsTopFeed(n)?"HKkxy":"TtUsB",children:p.KB(s,o=>(0,r.jsx)(_,{xp:c,onResultClick:l,placement:n,searchQuery:e,linkType:t,request:a,index:o,numberOfImages:s},o))})},Q=({placement:e,xp:t,searchQuery:a,linkType:s,request:l,numberOfImages:o})=>(0,d.zG)(v.Do,v.ak("searchQuery",()=>h.ij(a)),v.ak("linkType",()=>h.ij(s)),v.ak("response",()=>(0,d.zG)(l,j.Er)),v.EQ(()=>(0,r.jsx)(M,{placement:e,searchQuery:void 0,linkType:void 0,request:l,onResultClick:d.Q1,xp:t,numberOfImages:o}),({response:a,searchQuery:s,linkType:l})=>(0,r.jsx)(P,{placement:e,response:a,searchQuery:s,linkType:l,xp:t,numberOfImages:o},s)))},42248:function(e,t,a){a.d(t,{Z:()=>l});var s=a(4271),r=a(68814);let l=e=>(0,s.jsx)("div",{...e,className:(0,r.Sh)(e.className,"u0cmn Hrdtv KWauk nxjMA")})},67654:function(e,t,a){a.d(t,{r:()=>i});var s=a(4271),r=a(2820),l=a(3714),o=a(78968),n=a(73993);let i=({rel:e,...t})=>(0,s.jsx)("a",{...t,rel:(0,r.zG)(e,l.ij,n.Yo,o.R3("sponsored"),o.v_(" ")),target:"_blank"})},23384:function(e,t,a){a.d(t,{b:()=>l});var s=a(4271),r=a(68814);let l=({background:e,children:t,containerClassName:a,containerStyle:l})=>(0,s.jsxs)("div",{className:(0,r.Sh)("lWLQX",a),style:l,children:[e,t]})},12233:function(e,t,a){a.d(t,{$w:()=>l,Dz:()=>s,NI:()=>o,el:()=>r});let s={"data-ad":!0},r="/nabc",l=e=>{switch(e){case"production":return"10457";case"development":return"10495"}},o=e=>{switch(e){case"production":return"1121954";case"development":return"1124528"}}},52776:function(e,t,a){a.d(t,{w:()=>c});var s=a(92036),r=a(53729),l=a(81472),o=a(2820),n=a(93373),i=a(75861);let c=()=>{let e=(0,r.TH)(),t=(0,n.Ep)(e),a=(0,l.M)();return(0,o.zG)(t,s.M1,i.nn(a))}}}]);