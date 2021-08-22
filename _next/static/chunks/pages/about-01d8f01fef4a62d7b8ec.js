(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6010:function(e,r,n){"use strict";function t(e){var r,n,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(a&&(a+=" "),a+=n);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(a&&(a+=" "),a+=r);return a}n.d(r,{Z:function(){return a}})},8373:function(e,r,n){"use strict";var t=n(4942),a=n(5893),i=(n(7294),n(2736));function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.Z=function(e){return(0,a.jsxs)(i.Ee,c(c({loading:"lazy"},e),{},{children:[(0,a.jsx)(i.Vm,{}),(0,a.jsx)(i.zA,{quality:"auto",fetchFormat:"auto"})]}))}},5095:function(e,r,n){"use strict";var t=n(5893),a=(n(7294),n(1959)),i=n(8373),o=n(2121),c=n.n(o);r.Z=function(e){var r=e.caption,n=e.images;return(0,t.jsxs)("figure",{className:c().imagesWrapper,children:[(0,t.jsx)("div",{className:c().images,children:(0,a.qo)(n).map((function(e){return(0,t.jsx)(i.Z,{publicId:e},e)}))}),r&&(0,t.jsx)("figcaption",{className:c().caption,children:r})]})}},113:function(e,r,n){"use strict";var t=n(5893),a=n(9278),i=n.n(a),o=n(6010);r.Z=function(e){var r=e.className,n=e.enabled,a=void 0===n||n,c=e.children;return(0,t.jsx)("div",{className:(0,o.Z)(r,a&&i().narrowContent),children:c})}},2918:function(e,r,n){"use strict";n.d(r,{Z:function(){return f}});var t=n(5893),a=n(2344),i=n.n(a),o=n(8531),c=n.n(o),s=n(6010),u=function(e){var r=e.overlay,n=void 0!==r&&r;return(0,t.jsx)("header",{className:(0,s.Z)(c().navHeader,n&&c().overlay),children:(0,t.jsxs)("nav",{className:c().navBar,children:[(0,t.jsxs)("div",{className:c().titleLinkWrapper,children:[(0,t.jsx)("a",{className:c().titleLink,href:"/",children:"A Thought"}),(0,t.jsx)("p",{className:c().caption,children:"(All I could muster)"})]}),(0,t.jsxs)("div",{className:c().otherLinks,children:[(0,t.jsx)("a",{href:"/projects",children:"Projects"}),(0,t.jsx)("a",{href:"/photos",children:"Photos"}),(0,t.jsx)("a",{href:"/about",children:"About"}),(0,t.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},l=n(113),f=function(e){var r=e.wide,n=void 0!==r&&r,a=e.children;return(0,t.jsxs)(l.Z,{className:i().contentWrapper,enabled:!n,children:[(0,t.jsx)(u,{overlay:n}),(0,t.jsx)("main",{className:i().mainContent,children:a}),(0,t.jsxs)("footer",{className:i().footer,children:[(0,t.jsx)("span",{children:"Copyright 2021 Lucas Pickering"}),(0,t.jsx)("a",{href:"/",children:"Recursion!"})]})]})}},1959:function(e,r,n){"use strict";n.d(r,{p6:function(){return a},qo:function(){return i}});var t=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var r="string"===typeof e?new Date(e):e;return t.format(r)}function i(e){return Array.isArray(e)?e:[e]}},2981:function(e,r,n){"use strict";n.r(r);var t=n(5893),a=(n(7294),n(2918)),i=n(5095);r.default=function(){return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)("h1",{children:"About"}),(0,t.jsx)("p",{children:"My name's Lucas Pickering, and I do computer stuff and photography. This site is where I dump a lot of my projects and photos. Check out my GitHub for more of my projects or contact info."}),(0,t.jsx)(i.Z,{images:["lucaspickering.me/about/yo_jbscrb","lucaspickering.me/about/ye_lpajcg"],caption:"How majestic"})]})}},4613:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2981)}])},2121:function(e){e.exports={imagesWrapper:"Images_imagesWrapper__XfFcv",images:"Images_images__2z67e",caption:"Images_caption__17yC0"}},9278:function(e){e.exports={narrowContent:"Narrow_narrowContent__1Idlv"}},8531:function(e){e.exports={navHeader:"NavHeader_navHeader__2wb8k",overlay:"NavHeader_overlay__1dzXe",navBar:"NavHeader_navBar__1Dijy",titleLinkWrapper:"NavHeader_titleLinkWrapper__3UzkA",titleLink:"NavHeader_titleLink__2BFBI",caption:"NavHeader_caption__2ehiM",otherLinks:"NavHeader_otherLinks__27YNZ"}},2344:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__3Bc1C",mainContent:"PageContainer_mainContent__2VeJN",footer:"PageContainer_footer__2pitm"}}},function(e){e.O(0,[774,888,179],(function(){return r=4613,e(e.s=r);var r}));var r=e.O();_N_E=r}]);