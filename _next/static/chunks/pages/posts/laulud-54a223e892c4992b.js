(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{8386:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/laulud",function(){return n(8428)}])},9090:function(e,t,n){"use strict";var a=n(1799),r=n(5893),s=n(6317),i=n(1608),o=n.n(i),c=function(e){var t=e.src;return s.n.image(t).toURL()};t.Z=function(e){return(0,r.jsx)(o(),(0,a.Z)({alt:"",loader:c},e))}},1785:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(5893),r=n(9782),s=n.n(r),i=n(6010),o=n(1664),c=n.n(o),l=function(e){var t=e.overlay,n=void 0!==t&&t;return(0,a.jsx)("header",{className:(0,i.Z)(s().navHeader,n&&s().overlay),children:(0,a.jsxs)("nav",{className:s().navBar,children:[(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)("a",{className:s().titleLink,children:"Lucas Pickering"})}),(0,a.jsxs)("div",{className:s().otherLinks,children:[(0,a.jsx)(c(),{href:"/projects",children:(0,a.jsx)("a",{children:"Projects"})}),(0,a.jsx)(c(),{href:"/photos",children:(0,a.jsx)("a",{children:"Photos"})}),(0,a.jsx)(c(),{href:"/about",children:(0,a.jsx)("a",{children:"About"})}),(0,a.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},u=n(9333),d=n.n(u),h=n(1737),m=n.n(h),p=function(e){var t=e.className,n=e.isGallery,r=void 0!==n&&n,s=e.children;return(0,a.jsxs)("div",{className:(0,i.Z)(t,d().contentWrapper,!r&&m().narrow),children:[(0,a.jsx)(l,{overlay:r}),(0,a.jsx)("main",{className:d().mainContent,children:s}),(0,a.jsxs)("footer",{className:d().footer,children:[(0,a.jsxs)("span",{children:["Copyright ",(new Date).getUTCFullYear()," Lucas Pickering"]}),(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)("a",{children:"Recursion!"})})]})]})}},6663:function(e,t,n){"use strict";var a=n(603),r=n(5893),s=n(2073),i=n(6317),o=n(6269),c=n(7250),l=n.n(c),u=n(6010),d=n(9008),h=n.n(d),m=n(1664),p=n.n(m),_=(n(7294),n(9090)),f=n(1785);t.Z=function(e){var t,n=e.metadata,c=e.children,d=null!==(t=n.isGallery)&&void 0!==t&&t,m=n.banner&&i.n.image(n.banner).resize(s.t$.fill(1200,627)).toURL();return(0,r.jsxs)(f.Z,{className:(0,u.Z)(d&&"gallery"),isGallery:d,children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:"".concat(n.title," | Lucas Pickering")}),(0,r.jsx)("meta",{name:"description",content:n.summary}),(0,r.jsx)("meta",{name:"og:title",content:n.title}),m&&(0,r.jsx)("meta",{name:"og:image",content:m}),(0,r.jsx)("meta",{name:"og:description",content:n.summary})]}),(0,r.jsxs)("article",{children:[(0,r.jsxs)("header",{className:l().postHeader,children:[(0,r.jsxs)("div",{className:l().headerText,children:[(0,r.jsx)("h1",{className:l().postTitle,children:n.title}),(0,r.jsx)("p",{className:l().postSummary,children:n.summary}),n.date&&(0,r.jsx)("span",{className:l().postDate,children:(0,o.p6)(n.date)}),n.links&&(0,r.jsx)("div",{className:l().postLinks,children:Object.entries(n.links).map((function(e){var t=(0,a.Z)(e,2),n=t[0],s=t[1];return(0,r.jsx)(p(),{href:s,children:(0,r.jsx)("a",{children:n})},n)}))})]}),n.banner&&(0,r.jsx)(_.Z,{className:l().banner,sizes:"100vw",src:n.banner,width:800,height:300})]}),(0,r.jsx)("div",{className:l().postBody,children:c})]})]})}},6317:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var a=new(n(2795).r)({cloud:{cloudName:"lucaspickering"},url:{secure:!0}})},6269:function(e,t,n){"use strict";n.d(t,{p6:function(){return r},qo:function(){return s}});var a=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function r(e){var t="string"===typeof e?new Date(e):e;return a.format(t)}function s(e){return Array.isArray(e)?e:[e]}},8428:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return i}});var a=n(5893),r=n(1151),s=n(6663),i={title:"Laulud",summary:"Ever wanted to assign tags to tracks, albums, and artists in Spotify? No? Well I have because I'm neurotic. Laulud is a simple site to browse and tag Spotify items.",banner:"lucaspickering.me/laulud/banner_a3aj4o.png",links:{Code:"https://github.com/LucasPickering/laulud",Site:"https://laulud.lucaspickering.me"},tags:["post","project","rust","typescript","spotify"]},o=function(e){var t=e.children;return(0,a.jsx)(s.Z,{metadata:i,children:t})};function c(e){var t=Object.assign({h2:"h2",p:"p",strong:"strong",em:"em"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:"What is it?"}),"\n",(0,a.jsx)(t.p,{children:"Laulud is a simple site that lets you assign custom tags to tracks, albums, and artists from Spotify. Log in through Spotify, and all the tags will be attached to your Spotify account."}),"\n",(0,a.jsx)(t.p,{children:"The site is pretty simple, not much more to explain about it. Click the link at the top of the post to try it out."}),"\n",(0,a.jsx)(t.h2,{children:"Is it safe? What data do you store?"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"only"})," user data that Laulud stores is your account ID, which is public anyway. When you log in, Spotify will tell you that the site is requesting more data than that (your name, username, profile picture, etc.). That is the ",(0,a.jsx)(t.em,{children:"minimum"})," amount of data we can request from Spotify, none of it other than the account ID ever gets used or stored."]})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,Object.assign({},e,{children:(0,a.jsx)(c,e)}))}},9782:function(e){e.exports={navHeader:"NavHeader_navHeader__7GzgE",overlay:"NavHeader_overlay__YcZRU",navBar:"NavHeader_navBar__CYOGB",titleLink:"NavHeader_titleLink__8irOL",otherLinks:"NavHeader_otherLinks__21IHn"}},9333:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__MxbyT",mainContent:"PageContainer_mainContent__fVQiP",footer:"PageContainer_footer__GBF3t"}},7250:function(e){e.exports={narrow:"PostView_narrow__QImnk",postHeader:"PostView_postHeader__SoKpZ",headerText:"PostView_headerText__xk49b",postTitle:"PostView_postTitle__RS_kO",postSummary:"PostView_postSummary__p9Wei",postDate:"PostView_postDate__RIqbw",postLinks:"PostView_postLinks__1v7I_",banner:"PostView_banner__4tsnF",postBody:"PostView_postBody__lxIA8"}},1737:function(e){e.exports={narrow:"utils_narrow__mDe6j"}}},function(e){e.O(0,[898,10,774,888,179],(function(){return t=8386,e(e.s=t);var t}));var t=e.O();_N_E=t}]);