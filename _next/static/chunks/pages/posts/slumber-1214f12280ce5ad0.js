(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{322:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/slumber",function(){return t(5036)}])},9090:function(e,n,t){"use strict";var i=t(1799),r=t(5893),s=t(6317),a=t(1608),o=t.n(a),c=function(e){var n=e.src;return s.n.image(n).toURL()};n.Z=function(e){return(0,r.jsx)(o(),(0,i.Z)({alt:"",loader:c},e))}},4883:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(6269)),s=t(9090),a=t(3123),o=t.n(a),c=t(6010);n.Z=function(e){var n=e.className,t=e.caption,a=e.columns,l=void 0===a?1:a,h=e.images;return(0,i.jsxs)("figure",{className:(0,c.Z)(o().images,n),style:{gridTemplateColumns:"repeat(".concat(l,", 1fr)")},children:[(0,r.qo)(h).map((function(e){return(0,i.jsx)(s.Z,{src:e,width:0,height:0,style:{width:"100%",height:"auto"}},e)})),t&&(0,i.jsx)("figcaption",{className:o().caption,children:t})]})}},1785:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var i=t(5893),r=t(9782),s=t.n(r),a=t(6010),o=t(1664),c=t.n(o),l=function(e){var n=e.overlay,t=void 0!==n&&n;return(0,i.jsx)("header",{className:(0,a.Z)(s().navHeader,t&&s().overlay),children:(0,i.jsxs)("nav",{className:s().navBar,children:[(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)("a",{className:s().titleLink,children:"Lucas Pickering"})}),(0,i.jsxs)("div",{className:s().otherLinks,children:[(0,i.jsx)(c(),{href:"/projects",children:(0,i.jsx)("a",{children:"Projects"})}),(0,i.jsx)(c(),{href:"/photos",children:(0,i.jsx)("a",{children:"Photos"})}),(0,i.jsx)(c(),{href:"/about",children:(0,i.jsx)("a",{children:"About"})}),(0,i.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},h=t(9333),u=t.n(h),d=t(1737),m=t.n(d),p=function(e){var n=e.className,t=e.isGallery,r=void 0!==t&&t,s=e.children;return(0,i.jsxs)("div",{className:(0,a.Z)(n,u().contentWrapper,!r&&m().narrow),children:[(0,i.jsx)(l,{overlay:r}),(0,i.jsx)("main",{className:u().mainContent,children:s}),(0,i.jsxs)("footer",{className:u().footer,children:[(0,i.jsxs)("span",{children:["Copyright ",(new Date).getUTCFullYear()," Lucas Pickering"]}),(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)("a",{children:"Recursion!"})})]})]})}},6663:function(e,n,t){"use strict";var i=t(603),r=t(5893),s=t(2073),a=t(6317),o=t(6269),c=t(7250),l=t.n(c),h=t(6010),u=t(9008),d=t.n(u),m=t(1664),p=t.n(m),f=(t(7294),t(9090)),j=t(1785);n.Z=function(e){var n,t=e.metadata,c=e.children,u=null!==(n=t.isGallery)&&void 0!==n&&n,m=a.n.image(t.banner).resize(s.t$.fill(1200,627)).toURL();return(0,r.jsxs)(j.Z,{className:(0,h.Z)(u&&"gallery"),isGallery:u,children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:"".concat(t.title," | Lucas Pickering")}),(0,r.jsx)("meta",{name:"description",content:t.summary}),(0,r.jsx)("meta",{name:"og:title",content:t.title}),(0,r.jsx)("meta",{name:"og:image",content:m}),(0,r.jsx)("meta",{name:"og:description",content:t.summary})]}),(0,r.jsxs)("article",{children:[(0,r.jsxs)("header",{className:l().postHeader,children:[(0,r.jsxs)("div",{className:l().headerText,children:[(0,r.jsx)("h1",{className:l().postTitle,children:t.title}),(0,r.jsx)("p",{className:l().postSummary,children:t.summary}),t.date&&(0,r.jsx)("span",{className:l().postDate,children:(0,o.p6)(t.date)}),t.links&&(0,r.jsx)("div",{className:l().postLinks,children:Object.entries(t.links).map((function(e){var n=(0,i.Z)(e,2),t=n[0],s=n[1];return(0,r.jsx)(p(),{href:s,children:(0,r.jsx)("a",{children:t})},t)}))})]}),(0,r.jsx)(f.Z,{className:l().banner,sizes:"100vw",src:t.banner,width:800,height:300})]}),(0,r.jsx)("div",{className:l().postBody,children:c})]})]})}},6317:function(e,n,t){"use strict";t.d(n,{n:function(){return i}});var i=new(t(2795).r)({cloud:{cloudName:"lucaspickering"},url:{secure:!0}})},6269:function(e,n,t){"use strict";t.d(n,{p6:function(){return r},qo:function(){return s}});var i=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function r(e){var n="string"===typeof e?new Date(e):e;return i.format(n)}function s(e){return Array.isArray(e)?e:[e]}},5036:function(e,n,t){"use strict";t.r(n),t.d(n,{metadata:function(){return a}});var i=t(5893),r=t(1151),s=(t(4883),t(6663)),a={title:"Slumber: A TUI HTTP Client",date:"2024-05-10",summary:"Slumber is a configuration-first, Terminal User Interface (TUI) HTTP client.",banner:"lucaspickering.me/slumber/banner.gif",links:{Code:"https://github.com/LucasPickering/slumber",Site:"https://slumber.lucaspickering.me",Install:"https://slumber.lucaspickering.me/artifacts/"},tags:["post","project","rust","http","terminal","tui"]},o=function(e){var n=e.children;return(0,i.jsx)(s.Z,{metadata:a,children:n})};function c(e){var n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li",em:"em"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Try it out"}),"\n",(0,i.jsx)(n.p,{children:"Don't wanna read? Install it now and try it out with any of these:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cargo install slumber\nbrew install LucasPickering/homebrew-tap/slumber\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://slumber.lucaspickering.me/artifacts/",children:"Click here for more install options"})}),"\n",(0,i.jsx)(n.h2,{children:"What is Slumber?"}),"\n",(0,i.jsx)(n.p,{children:"Slumber is a configuration-first, Terminal User Interface (TUI) HTTP client. It's designed to as an alternative to Insomnia, Postman, etc. for those who prefer doing their work in the terminal. The primary principles of the project are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It will remain free to use forever"}),"\n",(0,i.jsx)(n.li,{children:"You own your data: all configuration and data is stored locally and can be checked into version control"}),"\n",(0,i.jsxs)(n.li,{children:["It will never be ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Enshittification",children:"enshittified"})," (looking at you, Insomnia)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In terms of functionality, I had two main goals in mind during development:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make a usable HTTP client, that can serve all of a normal web developer's needs, entirely in the terminal. Terminal apps can be harder to learn, but are generally faster to use once you're familiar. Additionally, they tend to perform better and use fewer resources than a GUI."}),"\n",(0,i.jsxs)(n.li,{children:["Define configuration first, ",(0,i.jsx)(n.em,{children:"outside"}),' the app. Rather than creating and editing your request definitions in the app, "configuration-first" means you write your configuration in a normal editor, then the app reads it. This has a few benefits:',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can easily migrate and persist your request collection, since you know exactly where it is. It's not hidden in a system directory or a SQLite database, it's right there in a single YAML file."}),"\n",(0,i.jsx)(n.li,{children:"Similarly, you can easily share your collection with others. By defining a collection in a single file, you can check it into version control. This makes it easy not only to share with others who work on the same service or site as you, it makes it easy for new developers to come into a codebase and start making requests."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Why does Slumber exist?"}),"\n",(0,i.jsxs)(n.p,{children:["There are a lot of HTTP/REST clients out there, so why did I bother making a new one? The primary reason is, when I first started the project in August 2023, I couldn't find any other TUI clients. I had been wanting a good TUI project to try out ",(0,i.jsx)(n.a,{href:"https://ratatui.rs/",children:"Ratatui"}),", and at the same time I was perpetually dissatisfied with Insomnia. I found it clunky inefficient to use."]}),"\n",(0,i.jsxs)(n.p,{children:["Around a month after I started, Kong released Insomnia 8.0, which ",(0,i.jsx)(n.a,{href:"https://github.com/Kong/insomnia/discussions/6590",children:"required creating an account"})," (more or less). Up to that point I was unsure about the future of the project, but that convinced that this needed to be made."]}),"\n",(0,i.jsx)(n.h2,{children:"How do I try it out?"}),"\n",(0,i.jsxs)(n.p,{children:["First, head to the ",(0,i.jsx)(n.a,{href:"https://slumber.lucaspickering.me/artifacts/",children:"installation page"})," to install it. Then, jump over to ",(0,i.jsx)(n.a,{href:"https://slumber.lucaspickering.me/book/",children:"the docs"})," to start writing your first request collection."]}),"\n",(0,i.jsx)(n.h2,{children:"Feedback"}),"\n",(0,i.jsxs)(n.p,{children:["If you try out Slumber, I'd love to hear your thoughts, whether you love it or hate it. I'm especially interested in feedback on documentation, since this is the hardest thing for me to \"test\" myself. For bugs and feature requests (including specific requests about documentation), you can ",(0,i.jsx)(n.a,{href:"https://github.com/LucasPickering/slumber/issues",children:"open a GitHub issue"}),". For questions and open-ended discussion, open a ",(0,i.jsx)(n.a,{href:"https://github.com/LucasPickering/slumber/discussions",children:"GitHub discussion"}),". Alternatively, we have a ",(0,i.jsx)(n.a,{href:"https://discord.gg/G9RbbUsj",children:"Discord"})," where you can leave your feedback or ask questions.."]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(o,Object.assign({},e,{children:(0,i.jsx)(c,e)}))}},3123:function(e){e.exports={images:"Images_images__8Dmua",caption:"Images_caption__1dNbT"}},9782:function(e){e.exports={navHeader:"NavHeader_navHeader__7GzgE",overlay:"NavHeader_overlay__YcZRU",navBar:"NavHeader_navBar__CYOGB",titleLink:"NavHeader_titleLink__8irOL",otherLinks:"NavHeader_otherLinks__21IHn"}},9333:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__MxbyT",mainContent:"PageContainer_mainContent__fVQiP",footer:"PageContainer_footer__GBF3t"}},7250:function(e){e.exports={narrow:"PostView_narrow__QImnk",postHeader:"PostView_postHeader__SoKpZ",headerText:"PostView_headerText__xk49b",postTitle:"PostView_postTitle__RS_kO",postSummary:"PostView_postSummary__p9Wei",postDate:"PostView_postDate__RIqbw",postLinks:"PostView_postLinks__1v7I_",banner:"PostView_banner__4tsnF",postBody:"PostView_postBody__lxIA8"}},1737:function(e){e.exports={narrow:"utils_narrow__mDe6j"}}},function(e){e.O(0,[898,10,774,888,179],(function(){return n=322,e(e.s=n);var n}));var n=e.O();_N_E=n}]);