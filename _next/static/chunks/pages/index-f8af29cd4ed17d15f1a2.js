(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8373:function(e,t,r){"use strict";var n=r(4942),a=r(4925),s=(r(7294),r(2736)),i=r(5893),o=["className","publicId"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.className,r=e.publicId,n=(0,a.Z)(e,o);return(0,i.jsxs)(s.Ee,l(l({loading:"lazy",className:t,publicId:r},n),{},{children:[(0,i.jsx)(s.Vm,{}),(0,i.jsx)(s.zA,{quality:"auto",fetchFormat:"auto"})]}))}},2918:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(4821),a=r.n(n),s=r(6010),i=r(5893),o=function(e){var t=e.overlay,r=void 0!==t&&t;return(0,i.jsx)("header",{className:(0,s.Z)(a().navHeader,r&&a().overlay),children:(0,i.jsxs)("nav",{className:a().navBar,children:[(0,i.jsxs)("div",{className:a().titleLinkWrapper,children:[(0,i.jsx)("a",{className:a().titleLink,href:"/",children:"A Thought"}),(0,i.jsx)("p",{className:a().caption,children:"(All I could muster)"})]}),(0,i.jsxs)("div",{className:a().otherLinks,children:[(0,i.jsx)("a",{href:"/projects",children:"Projects"}),(0,i.jsx)("a",{href:"/photos",children:"Photos"}),(0,i.jsx)("a",{href:"/about",children:"About"}),(0,i.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},c=r(1475),l=r.n(c),u=r(2247),d=r.n(u),p=function(e){var t=e.className,r=e.isGallery,n=void 0!==r&&r,a=e.children;return(0,i.jsxs)("div",{className:(0,s.Z)(t,l().contentWrapper,!n&&d().narrow),children:[(0,i.jsx)(o,{overlay:n}),(0,i.jsx)("main",{className:l().mainContent,children:a}),(0,i.jsxs)("footer",{className:l().footer,children:[(0,i.jsx)("span",{children:"Copyright 2021 Lucas Pickering"}),(0,i.jsx)("a",{href:"/",children:"Recursion!"})]})]})}},6701:function(e,t,r){"use strict";var n=r(1959),a=(r(7294),r(9348)),s=r.n(a),i=r(8373),o=r(5893);t.Z=function(e){var t=e.posts;return(0,o.jsx)(o.Fragment,{children:t.filter((function(e){return!e.metadata.hidden})).map((function(e){return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:s().postTitleGroup,children:[(0,o.jsx)("h3",{className:s().postTitle,children:(0,o.jsx)("a",{href:"/posts/".concat(e.slug),children:e.metadata.title})}),(0,o.jsx)("span",{className:s().postDate,children:(0,n.p6)(e.metadata.date)})]}),(0,o.jsx)(i.Z,{className:s().banner,publicId:e.metadata.banner}),(0,o.jsx)("p",{className:s().postSummary,children:e.metadata.summary})]},e.slug)}))})}},1959:function(e,t,r){"use strict";r.d(t,{p6:function(){return a},qo:function(){return s}});var n=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var t="string"===typeof e?new Date(e):e;return n.format(t)}function s(e){return Array.isArray(e)?e:[e]}},6839:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return i}});r(7294);var n=r(2918),a=r(6701),s=r(5893),i=!0;t.default=function(e){var t=e.posts;return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)("h2",{children:"Hi!"}),(0,s.jsx)("p",{children:"My name's Lucas, and this is my little corner of the World Wide Web."}),(0,s.jsx)("p",{children:"On occasion, my brain cells align long enough to form what some might call \"a thought\". And sometimes, these momentary neural eclipses last long enough for me to capture them in digital form. So welcome to my brain's galaxy! Much like the Milky Way, it's mostly vacuous."}),(0,s.jsx)("h2",{children:"Recent Posts"}),(0,s.jsx)(a.Z,{posts:t})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6839)}])},4821:function(e){e.exports={navHeader:"NavHeader_navHeader__R8yGy",overlay:"NavHeader_overlay__1mqjD",navBar:"NavHeader_navBar__1WuHz",titleLinkWrapper:"NavHeader_titleLinkWrapper__2Iif2",titleLink:"NavHeader_titleLink__1RkdD",caption:"NavHeader_caption__1rRg1",otherLinks:"NavHeader_otherLinks__63wtN"}},1475:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__2tyfr",mainContent:"PageContainer_mainContent__snxAJ",footer:"PageContainer_footer__2nCu6"}},9348:function(e){e.exports={postTitleGroup:"PostList_postTitleGroup__1a989",postTitle:"PostList_postTitle__3mpCi",postDate:"PostList_postDate__s-z4N",banner:"PostList_banner__jaQkS",postSummary:"PostList_postSummary__3xs2u"}},2247:function(e){e.exports={narrow:"utils_narrow__2R4_v"}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);