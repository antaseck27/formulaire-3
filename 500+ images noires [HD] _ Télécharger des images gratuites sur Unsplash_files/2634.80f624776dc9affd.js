"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([["2634"],{54013:function(e,t,n){n.d(t,{Z:()=>u});var o={};n.r(o),n.d(o,{imgAlt:()=>d});var a=n(4271),i=n(81472),l=n(23500),r=n(2820),s=n(75861);n(4263),n(16274);let d=()=>"Aucun contenu disponible",c=e=>o,p=()=>{let{locale:e}=(0,i.M)();return c(e)},u=({type:e})=>{let t=p(),n=(0,i.M)();return(0,a.jsx)("div",{className:"VEyHB",children:(0,a.jsx)("img",{alt:t.imgAlt(),className:"B0MpZ",src:(0,r.zG)(l.Zp(`/empty-states/${e}.png`),s.nn(n),l.wS)})})}},93019:function(e,t,n){n.d(t,{f:()=>E});var o=n(4271),a=n(40198),i=n(2820),l=n(78968),r=n(95263),s=n(45793),d=n(74738),c=n(30019),p=n(27787),u=n(3087),m=n(32631),g=n(104),h=n(45779),f=n(49286),F=n(75861),S=n(80374);let v=({notifier$:e,footerRefOption$:t})=>n=>{let o=(0,i.zG)(n,S.UI(([,,e])=>e),S.xb()),a=(0,i.zG)(n,S.UI(([,,,e])=>e??2e3),S.xb()),l=(0,i.zG)(n,S.UI(([,e])=>e.page),S.xb()),r=(0,i.zG)(S.aj([t,o,a,l]),S.wt(([e,t,n])=>(0,i.zG)(e,c.EQ((0,i.a9)(S.E_),e=>(0,i.zG)(p.LO(e,{root:void 0!==t?t.current:null,rootMargin:p.Ae({top:u.ez,right:u.ez,bottom:u.Ei(n),left:u.ez})}),S.hX(p.Yu)))))),s=(0,i.zG)(n,S.UI(([e])=>e),S.xb());return S.TS((0,i.zG)(S.aj([r,s]),S.hX(([e,t])=>!1===t)),e)},P=e=>t=>{let n=(0,i.zG)(t,S.UP(e),S.EB(([,e])=>e.page),S.oE(([e])=>!1===e));return(0,i.zG)(n,S.Mm(t,(e,t)=>t),S.zg(([,e,t,n])=>(0,i.zG)(t(e),F.nn(n),f.XD(3))))},y=e=>{let t=(0,g.D)(),n=(0,h.m)(v({notifier$:e.notifier$,footerRefOption$:e.footerRefOption$}),[e.disableInfiniteScroll,e.feedDataFetcherParams,e.intersectionObserverRoot,e.intersectionObserverRootMarginBottom]),o=(0,h.m)(P(n),[e.hasFetchedAllPages,e.feedDataFetcherParams,e.feedDataFetcher,t]);(0,m.Rd)(o)},I=({total:e,perPage:t})=>Math.ceil(e/t),z=e=>e.lastPageFetched>=I(e),G=({lastPageFetched:e,perPage:t})=>({page:e+1,perPage:t}),k=({feedState:e,feedItems:t,renderItems:n,renderLoadingFooter:l,disableInfiniteScroll:c,...p})=>{let[u,m]=(0,a.m)(e=>(0,i.zG)(e,d.DZ)),g=(0,r.useMemo)(()=>G(e),[e]),h=(0,r.useMemo)(()=>z(e),[e]);return y({...p,disableInfiniteScroll:c,feedDataFetcherParams:g,hasFetchedAllPages:h,footerRefOption$:m}),(0,o.jsxs)("div",{children:[n({items:t,total:e.total}),(0,o.jsx)("div",{"data-testid":s.of,ref:u}),!1===h&&!1===c&&(e.isLoading??!0)&&l()]})},E=({feedStateOption:e,feedItemsOption:t,renderEmpty:n,renderPlaceholder:a,renderFooter:r,disableInfiniteScroll:s,...d})=>(0,i.zG)(c.gz(e,t),c.EQ(a,([e,t])=>{let a=z(e),c=a||s||l.yD(t);return(0,o.jsxs)(o.Fragment,{children:[(0,i.zG)(t,l.EQ({onEmpty:n,onNonEmpty:t=>(0,o.jsx)(k,{...d,feedState:e,feedItems:t,disableInfiniteScroll:s})})),c&&r({isEmpty:l.yD(t),hasFetchedAllPages:a,isInfiniteScrollDisabled:s})]})}))},31490:function(e,t,n){n.d(t,{aX:()=>D,hm:()=>E});var o,a=n(59400),i=n(23500),l=n(60439),r=n(56632),s=n(2820),d=n(98811),c=n(6081),p=n(30019),u=n(67184),m=n(12989),g=n(79812),h=n(78968),f=n(28329),F=n(88774),S=n(21493),v=((o={}).English="en",o);let P=e=>+!!e,y=S.i5.match({All:(0,s.a9)(p.YP),Landscape:(0,s.a9)(p.G(0)),Portrait:(0,s.a9)(p.G(1))}),I=S.FR.match({Relevant:(0,s.a9)(0),Latest:(0,s.a9)(2),Curated:(0,s.a9)(4)}),z=S.Cz.match({All:(0,s.a9)(0),Plus:(0,s.a9)(1),Free:(0,s.a9)(2)}),G=(0,F.F)()(["version","appId","ad","fromApi","placement","position","deckId","keywords","language","safety","orientation","orderBy","color","timestamp","license"]),k=(0,s.ls)(e=>({version:3,appId:1207,ad:"ad"in e?e.ad:P(!1),fromApi:P(!1),placement:e.placement,position:"position"in e?e.position:null,deckId:"deckId"in e?e.deckId:null,keywords:"keywords"in e?e.keywords:null,language:v.English,safety:"safety"in e?e.safety:P(!1),orientation:"orientation"in e?e.orientation:null,orderBy:"orderBy"in e?e.orderBy:null,license:"license"in e?e.license:null,color:null,timestamp:null}),e=>(0,s.zG)(G,h.UI(t=>e[t]),h.UI(e=>{if(null===e)return"";switch(typeof e){case"string":return e;case"number":return f.xS(e)}}),h.v_("|"))),E=r.TPlacement.match({CollectionThumbnail:({id:e})=>({placement:l.ug.DeckFeed.CollectionThumbnail,deckId:e}),Photo:({ad:e})=>({placement:l.ug.SponsoredContent.PhotoPage,ad:P(e)}),PhotoOfTheDay:({ad:e})=>({placement:l.ug.SponsoredContent.PhotoOfTheDay,ad:P(e)}),Feed:([{index:e},t])=>(0,s.zG)(t,l.ug.Feed.match({Collection:({id:t})=>({placement:l.ug.DeckFeed.Collection,deckId:t,position:(0,l.cv)(e)}),FeaturedIllustrationsFeed:()=>({placement:l.ug.StandardFeed.FeaturedIllustrationsFeed,position:(0,l.cv)(e)}),FeaturedPhotosFeed:({ad:t})=>({placement:l.ug.SponsoredFeed.FeaturedPhotosFeed,ad:P(t),position:(0,l.cv)(e)}),Following:()=>({placement:l.ug.StandardFeed.Following,position:(0,l.cv)(e)}),PlusFeed:()=>({placement:l.ug.StandardFeed.PlusFeed,position:(0,l.cv)(e)}),RelatedPhotos:()=>({placement:l.ug.StandardFeed.RelatedPhotos,position:(0,l.cv)(e)}),Topic:({id:t})=>({placement:l.ug.DeckFeed.Topic,deckId:(0,c.Vv)(t),position:(0,l.cv)(e)}),UserLikes:()=>({placement:l.ug.StandardFeed.UserLikes,position:(0,l.cv)(e)}),UserProfile:()=>({placement:l.ug.StandardFeed.UserProfile,position:(0,l.cv)(e)}),UserStats:()=>({placement:l.ug.StandardFeed.UserStats,position:(0,l.cv)(e)}),VisualSearch:()=>({placement:l.ug.StandardFeed.VisualSearch,position:(0,l.cv)(e)}),Search:({keywords:t,orientation:n,orderBy:o,safety:a,ad:i,license:r})=>({placement:l.ug.SponsoredFeed.KeywordSearch,ad:P(i),position:(0,l.cv)(e),keywords:encodeURIComponent(t),safety:P(a),orderBy:I(o),orientation:(0,s.zG)(n,y,p.WG),license:z(r)}),Explore:()=>({placement:l.ug.StandardFeed.Explore,position:(0,l.cv)(e)}),PhotoInSameSeries:()=>({placement:l.ug.StandardFeed.PhotoInSameSeries,position:(0,l.cv)(e)}),PlusAffiliates:()=>({placement:l.ug.StandardFeed.PlusAffiliates,position:(0,l.cv)(e)})}))}),b=(0,s.ls)(k,g.QA.encode),U=e=>i.fB((0,s.ls)(u.P8(m.EG(d.oE)),u.aV(d.oE)(e))),x=s.RR(e=>a.sF.forEachImgixUrl(U(e))),D=e=>(0,s.ls)(b,x(e))}}]);