(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),h=a,g=p["".concat(c,".").concat(h)]||p[h]||l[h]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8373:function(e,t,n){"use strict";var r=n(4942),a=n(5893),i=(n(7294),n(2736));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,a.jsxs)(i.Ee,s(s({loading:"lazy"},e),{},{children:[(0,a.jsx)(i.Vm,{}),(0,a.jsx)(i.zA,{quality:"auto",fetchFormat:"auto"})]}))}},5095:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(1959)),i=n(8373),o=n(2121),s=n.n(o);t.Z=function(e){var t=e.caption,n=e.images;return(0,r.jsxs)("figure",{className:s().imagesWrapper,children:[(0,r.jsx)("div",{className:s().images,children:(0,a.qo)(n).map((function(e){return(0,r.jsx)(i.Z,{publicId:e},e)}))}),t&&(0,r.jsx)("figcaption",{className:s().caption,children:t})]})}},113:function(e,t,n){"use strict";var r=n(5893),a=n(9278),i=n.n(a),o=n(6010);t.Z=function(e){var t=e.enabled,n=void 0===t||t,a=e.children;return n?(0,r.jsx)("div",{className:(0,o.Z)(i().narrowContent),children:a}):(0,r.jsx)(r.Fragment,{children:a})}},2918:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),a=n(2344),i=n.n(a),o=n(8531),s=n.n(o),c=n(6010),m=function(e){var t=e.overlay,n=void 0!==t&&t;return(0,r.jsx)("header",{className:(0,c.Z)(s().navHeader,n&&s().overlay),children:(0,r.jsxs)("nav",{className:s().navBar,children:[(0,r.jsxs)("div",{className:s().titleLinkWrapper,children:[(0,r.jsx)("a",{className:s().titleLink,href:"/",children:"A Thought"}),(0,r.jsx)("p",{className:s().caption,children:"(All I could muster)"})]}),(0,r.jsxs)("div",{className:s().otherLinks,children:[(0,r.jsx)("a",{href:"/projects",children:"Projects"}),(0,r.jsx)("a",{href:"/photos",children:"Photos"}),(0,r.jsx)("a",{href:"/about",children:"About"}),(0,r.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},l=n(113),u=function(e){var t=e.wide,n=void 0!==t&&t,a=e.children;return(0,r.jsx)(l.Z,{enabled:!n,children:(0,r.jsxs)("div",{className:i().contentWrapper,children:[(0,r.jsx)(m,{overlay:n}),(0,r.jsx)("main",{className:i().mainContent,children:a}),(0,r.jsxs)("footer",{className:i().footer,children:[(0,r.jsx)("span",{children:"Copyright 2021 Lucas Pickering"}),(0,r.jsx)("a",{href:"/",children:"Recursion!"})]})]})})}},8125:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return f}});var i=n(5893),o=(n(7294),n(9008)),s=n(9388),c=n.n(s),m=n(1959),l=n(2918),u=n(8373),p=n(113),h=n(6010),g=n(4285),f=function(e){var t,n=e.metadata,r=e.children,s=null!==(t=n.fullscreenIntro)&&void 0!==t&&t,f=(0,g.R)().url(n.banner,{width:1200,height:627,crop:"fill"});return(0,i.jsxs)(l.Z,{wide:s,children:[(0,i.jsxs)(o.default,{children:[(0,i.jsxs)("title",{children:[n.title," | Lucas Pickering"]}),(0,i.jsx)("meta",{name:"description",content:n.summary}),(0,i.jsx)("meta",{name:"og:title",content:n.title}),(0,i.jsx)("meta",{name:"og:image",content:f}),(0,i.jsx)("meta",{name:"og:description",content:n.summary})]}),(0,i.jsxs)("article",{children:[(0,i.jsxs)("header",{className:(0,h.Z)(c().postHeader,s&&c().fullscreen),children:[(0,i.jsx)("h1",{children:n.title}),(0,i.jsx)("p",{children:n.summary}),(0,i.jsx)("span",{className:c().postDate,children:(0,m.p6)(n.date)}),(0,i.jsx)("div",{className:c().postLinks,children:n.links&&Object.entries(n.links).map((function(e){var t=a(e,2),n=t[0],r=t[1];return(0,i.jsx)("a",{href:r,children:n},n)}))}),(0,i.jsx)(u.Z,{className:(0,h.Z)(c().banner,s&&c().fullscreen),publicId:n.banner})]}),(0,i.jsx)(p.Z,{children:r})]})]})}},1959:function(e,t,n){"use strict";n.d(t,{p6:function(){return a},qo:function(){return i}});var r=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var t="string"===typeof e?new Date(e):e;return r.format(t)}function i(e){return Array.isArray(e)?e:[e]}},147:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return l},default:function(){return h}});var r=n(4942),a=n(1026),i=(n(7294),n(3905)),o=n(5095),s=n(8125);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={title:"Cogs and Cairns: A Hike Up Mount Washington",date:"2021-07-28",summary:"A 10-mile journey on New England's unfriendliest mountain.",banner:"lucaspickering.me/mt-washington/DSC_0216_gmow0m",fullscreenIntro:!0,tags:["post","photo"]},u={metadata:l},p=function(e){var t=e.children;return(0,i.kt)(s.Z,{metadata:l},t)};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)(p,m(m(m({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At 6,288 feet, Mount Washington is New England's tallest mountain. It also bears some of the harshest weather in the world (read on if you don't believe me). Most unique of all though, there are ",(0,i.kt)("em",{parentName:"p"},"three")," different ways to reach the top of the mountain: by foot, by car, and by train."),(0,i.kt)("p",null,"This is my story of climbing Mount Washington. There are many like it, but this one is mine."),(0,i.kt)("h2",null,"Ammonoosuc Ravine Trail"),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0136_ajbqnf",caption:"Onward and upward.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0138_naz9st",caption:"Verdant undergrowth covers the base of the mountain.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0152_ajkx01",caption:"Thousands of hikers climb the mountain on a sunny summer day.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0153_u3gp6d",caption:"Stream crossings are common in the first few miles of the trail.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0163_oatbmv",caption:"A waterfall provides a convenient excuse for us to catch our breaths.",mdxType:"Images"}),(0,i.kt)("h2",null,"Lakes of the Clouds"),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0206_q7anjj",caption:"Once you breach the treeline, hundreds of cairns guide the way. A necessity when the weather it at its worst.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0210_nnbks0",caption:"The first glimpses of the mountain's apex. The weather station at the summit is visible from miles away.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0221_znualk",caption:"A lone cairn on a cliff's edge.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0222_zeo75e",caption:"The Lakes of the Clouds Hut.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0228_wndlq0",caption:"What's a hut without a sign?",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0239_fi07h2",caption:"The hut's namesake.",mdxType:"Images"}),(0,i.kt)("h2",null,"The Worst Weather in America"),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0233_jfhvac",caption:"A stern warning, fortunately not relevant today.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0248_jause9",caption:"The view back to the hut, about halfway from the lakes to the summit.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0244_tml1f5",caption:"The rough stones provide a sort of lunar backdrop to the final leg of the climb.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0255_imiao9",caption:"The Tuckerman trail crosses the alpine moonscape.",mdxType:"Images"}),(0,i.kt)("h2",null,"Mount Washington Cog Railway"),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0309_jpvngx",caption:"Leading the way.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0366_tyzb07",caption:"This would've been scarier if the trains could move more than a few miles an hour.",mdxType:"Images"}),(0,i.kt)("h2",null,"6,288 Feet"),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0264_qbypkh",caption:"In case there was any doubt.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0280_rdmazk",caption:"The visitor center, hanging over a cliff's edge.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0250_wzz41l",caption:"If the wind blows on the mountain but no one's around to measure it, does it make a sound?",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0253_c8fc6q",caption:"Spot the hikers?",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0336_audeme",caption:"Dozens of visitors waited for their turn at the summit. We opted not to get any closer than this.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0254_ztkvbk",caption:"Even the harshest of environments can be developed.",mdxType:"Images"}),(0,i.kt)("h2",null,"Descent"),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0391_xtndec",caption:"A ponderous moment.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0410_esalzg",caption:"A geologic Polaris.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0430_i4cdsi",caption:"The Jewell trail hugs the train tracks for a time.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0433_arptjq",caption:"The famous Bretton Woods resort and the White Mountains beyond.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0445_krztii",caption:"Each hiker carves the path a little bit deeper.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0460_ngkror",caption:"The circle of life.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0453_syjpcm",caption:"A former campsite abuts the trail.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0474_hmyam1",caption:"Back on the valley floor, streams and waterfalls provide a soundtrack to the last steps of the journey.",mdxType:"Images"}),(0,i.kt)(o.Z,{images:"lucaspickering.me/mt-washington/DSC_0478_tthmyn",caption:"This is about how my legs felt by this point.",mdxType:"Images"}))}h.isMDXComponent=!0},299:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/mt-washington",function(){return n(147)}])},2121:function(e){e.exports={imagesWrapper:"Images_imagesWrapper__XfFcv",images:"Images_images__2z67e",caption:"Images_caption__17yC0"}},9278:function(e){e.exports={narrowContent:"Narrow_narrowContent__1Idlv"}},8531:function(e){e.exports={navHeader:"NavHeader_navHeader__2wb8k",overlay:"NavHeader_overlay__1dzXe",navBar:"NavHeader_navBar__1Dijy",titleLinkWrapper:"NavHeader_titleLinkWrapper__3UzkA",titleLink:"NavHeader_titleLink__2BFBI",caption:"NavHeader_caption__2ehiM",otherLinks:"NavHeader_otherLinks__27YNZ"}},2344:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__3Bc1C",mainContent:"PageContainer_mainContent__2VeJN",footer:"PageContainer_footer__2pitm"}},9388:function(e){e.exports={postHeader:"PostView_postHeader__183v-",fullscreen:"PostView_fullscreen__2o0tb",postDate:"PostView_postDate__w6r5-",postLinks:"PostView_postLinks__3B9dI",banner:"PostView_banner__HGY8M"}},1026:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=299,e(e.s=t);var t}));var t=e.O();_N_E=t}]);