(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{8373:function(e,t,n){"use strict";var o=n(4942),a=n(4925),r=(n(7294),n(2736)),i=n(5893),s=["className","publicId"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.className,n=e.publicId,o=(0,a.Z)(e,s);return(0,i.jsxs)(r.Ee,l(l({loading:"lazy",className:t,publicId:n},o),{},{children:[(0,i.jsx)(r.Vm,{}),(0,i.jsx)(r.zA,{quality:"auto",fetchFormat:"auto"})]}))}},5095:function(e,t,n){"use strict";n(7294);var o=n(1959),a=n(8373),r=n(9751),i=n.n(r),s=n(6010),c=n(5893);t.Z=function(e){var t=e.className,n=e.caption,r=e.columns,l=void 0===r?1:r,u=e.images;return(0,c.jsxs)("figure",{className:(0,s.Z)(i().images,t),style:{gridTemplateColumns:"repeat(".concat(l,", 1fr)")},children:[(0,o.qo)(u).map((function(e){return(0,c.jsx)(a.Z,{publicId:e},e)})),n&&(0,c.jsx)("figcaption",{className:i().caption,children:n})]})}},2918:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(4821),a=n.n(o),r=n(6010),i=n(5893),s=function(e){var t=e.overlay,n=void 0!==t&&t;return(0,i.jsx)("header",{className:(0,r.Z)(a().navHeader,n&&a().overlay),children:(0,i.jsxs)("nav",{className:a().navBar,children:[(0,i.jsxs)("div",{className:a().titleLinkWrapper,children:[(0,i.jsx)("a",{className:a().titleLink,href:"/",children:"A Thought"}),(0,i.jsx)("p",{className:a().caption,children:"(All I could muster)"})]}),(0,i.jsxs)("div",{className:a().otherLinks,children:[(0,i.jsx)("a",{href:"/projects",children:"Projects"}),(0,i.jsx)("a",{href:"/photos",children:"Photos"}),(0,i.jsx)("a",{href:"/about",children:"About"}),(0,i.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},c=n(1475),l=n.n(c),u=n(2247),m=n.n(u),d=function(e){var t=e.className,n=e.isGallery,o=void 0!==n&&n,a=e.children;return(0,i.jsxs)("div",{className:(0,r.Z)(t,l().contentWrapper,!o&&m().narrow),children:[(0,i.jsx)(s,{overlay:o}),(0,i.jsx)("main",{className:l().mainContent,children:a}),(0,i.jsxs)("footer",{className:l().footer,children:[(0,i.jsx)("span",{children:"Copyright 2021 Lucas Pickering"}),(0,i.jsx)("a",{href:"/",children:"Recursion!"})]})]})}},7124:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return h}});n(7294);var r=n(9008),i=n(394),s=n.n(i),c=n(1959),l=n(2918),u=n(8373),m=n(6010),d=n(4285),p=n(5893),h=function(e){var t,n=e.metadata,o=e.children,i=null!==(t=n.isGallery)&&void 0!==t&&t,h=(0,d.R)().url(n.banner,{width:1200,height:627,crop:"fill"});return(0,p.jsxs)(l.Z,{className:(0,m.Z)(i&&"gallery"),isGallery:i,children:[(0,p.jsxs)(r.default,{children:[(0,p.jsxs)("title",{children:[n.title," | Lucas Pickering"]}),(0,p.jsx)("meta",{name:"description",content:n.summary}),(0,p.jsx)("meta",{name:"og:title",content:n.title}),(0,p.jsx)("meta",{name:"og:image",content:h}),(0,p.jsx)("meta",{name:"og:description",content:n.summary})]}),(0,p.jsxs)("article",{children:[(0,p.jsxs)("header",{className:s().postHeader,children:[(0,p.jsxs)("div",{className:s().headerText,children:[(0,p.jsx)("h1",{className:s().postTitle,children:n.title}),(0,p.jsx)("p",{className:s().postSummary,children:n.summary}),(0,p.jsx)("span",{className:s().postDate,children:(0,c.p6)(n.date)}),n.links&&(0,p.jsx)("div",{className:s().postLinks,children:Object.entries(n.links).map((function(e){var t=a(e,2),n=t[0],o=t[1];return(0,p.jsx)("a",{href:o,children:n},n)}))})]}),(0,p.jsx)(u.Z,{className:s().banner,publicId:n.banner})]}),(0,p.jsx)("div",{className:s().postBody,children:o})]})]})}},1959:function(e,t,n){"use strict";n.d(t,{p6:function(){return a},qo:function(){return r}});var o=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var t="string"===typeof e?new Date(e):e;return o.format(t)}function r(e){return Array.isArray(e)?e:[e]}},9321:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return l},default:function(){return d}});var o=n(7462),a=n(4925),r=(n(7294),n(3905)),i=n(5095),s=n(7124),c=["components"],l={title:"Beauty in Its Own Way",date:"2021-08-24",summary:"A love letter to the ugliest parts of Boston.",banner:"lucaspickering.me/boston-concrete/boston-concrete-12_omqn5q",isGallery:!0,tags:["post","photo","boston"]},u={metadata:l},m=function(e){var t=e.children;return(0,r.kt)(s.Z,{metadata:l},t)};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After living in Boston for the better part of the last seven years, I'm moving out for what could be the last time. I've taken a lot of photos of the city in that time, and the thing I've learned the most is that the city has an abundance of hidden beauty. Sure, it's got overt beauty (just Google \"boston skyline\"), but the stuff you don't see on postcards is much more interesting. So with my time here winding down, I decided to write a little ode to the ugliest places in the city."),(0,r.kt)("h2",null,"Boston City Hall"),(0,r.kt)("p",null,"Opened in 1969, City Hall is the crown jewel of Boston's brutalist movement. It's been publicly derided since its inception, and it's not hard to see why. For a long time I counted myself among its haters, but since I've started to photograph the building, that's changed."),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-03_ugan3j",caption:"The building towers over City Hall Plaza like a bureaucratic prison.",mdxType:"Images"}),(0,r.kt)("p",null,"Despite the imposing, dystopian presence, I've come to love City Hall. The structure creates a geometry that you don't see in any other building in the city."),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-13_elboyh",caption:'It certainly wouldn\'t be hard to picture this saying "Ministry of Truth".',mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-02_mvqtsu",caption:"Spaces like these are what make the building great. The overhangs and caverns create a feeling of security and approachability.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-01_vhw7df",caption:"A watchful eye guards the plaza.",mdxType:"Images"}),(0,r.kt)("h2",null,"Boston Brutalism"),(0,r.kt)("p",null,"Aside from City Hall, Boston has countless other examples of brutalist architecture. Much of the construction done between the 60s and 80s bears this style. While many people look down on brutalism today because of its drab, sometimes Soviet, appearance, I find these buildings much more interesting than the factory-made cookie-cutter luxury apartment buildings that go up non-stop today."),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-04_vne0sh",caption:"The JFK Federal Building sits across the plaza from City Hall, but shares none of the same redeeming qualities. Its architecture is pedestrian in comparison to its neighbor.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-05_xbs5gu",caption:"Down the street from City Hall Plaza, the Edward W. Brooke Courthouse (right) and Charles F. Hurley Building (left) stand side-by-side.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-06_vl7bxx",caption:"The parking garage under the Hurley building lays in quiet solitude on a weekend.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-07_dq0ram",caption:"These twins once dominated the skyline of the West End, but are becoming increasingly overshadowed by new developments.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-23_ieakvy",caption:"This Boston University building very quickly became a favorite of mine to photograph. Its blocky features create a visual texture that stands out, even among other brutalist buildings in the city.",mdxType:"Images"}),(0,r.kt)("h2",null,"Cambridge Academia"),(0,r.kt)("p",null,"Across the Charles River from Boston, Cambridge is home to two world famous institutions, MIT and Harvard. The two have very little in common architecturally, with Harvard's brick-laden campus standing in stark constrast to the industrial concrete of MIT."),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-24_egdag0",caption:"The Harvard Science Center is one of the few brutalist buildings the campus has to offer.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-22_wclltd",caption:"While not brutalist, MIT's Tang Hall is a favorite of mine because of its smooth prominence against the sky.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-18_joxolk",caption:"MacGregor House, another MIT dorm, punctuates MIT's skyline.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:["lucaspickering.me/boston-concrete/boston-concrete-19_ecqvcj","lucaspickering.me/boston-concrete/boston-concrete-14_e5vwhx"],caption:"Riverfront apartment buildings dot Memorial Drive, from the southern stretch along MIT to the western border with Watertown.",mdxType:"Images"}),(0,r.kt)("h2",null,"Crumbling Infrastructure"),(0,r.kt)("p",null,"The most lovable part of Boston is the creaky highways, leaky train stations, and the horrific screech of the Green Line. What's not to like?"),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-11_o0b1mk",caption:"Old Lechmere Station in East Cambridge. Partially closed in 2020, it will soon be replaced by a new station as part of the Green Line Extension project.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-10_i2nmma",caption:"A canal cuts through the Charles River Dam. The only craft you're likely to see passing through are duck boats.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-15_lxj5zj",caption:"The Western Avenue Bridge connects Cambridge and Allston, for now.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-09_nmqqb4",caption:"A Green Line train approaches North Station.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-08_u4st2x",caption:"A daring maneuver.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-17_mtshcb",caption:"The Longfellow Bridge connects Cambridge's Kendall Square with Boston's Charles Street. Rebuilt in 2016, it provides an example of what Boston's infrastructure could look like with a little investment.",mdxType:"Images"}),(0,r.kt)("h2",null,"Fading Industry"),(0,r.kt)("p",null,"Boston's economy today is dominated by software and biotech, but there remain many vestiges of its industrial past. Factories and train yards linger behind, a reminder of a different city."),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-21_fcyg5y",caption:"A train car at its final resting place behind the MIT Police station.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-20_bteqay",caption:"An old warehouse in Cambridge.",mdxType:"Images"}),(0,r.kt)(i.Z,{images:"lucaspickering.me/boston-concrete/boston-concrete-16_iz2csg",caption:"The Blackstone Steam Plant feels like a relic of an older time, but is still used by Harvard today.",mdxType:"Images"}))}d.isMDXComponent=!0},5464:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/boston-concrete",function(){return n(9321)}])},9751:function(e){e.exports={images:"Images_images__1e4xl",caption:"Images_caption__2DZT3"}},4821:function(e){e.exports={navHeader:"NavHeader_navHeader__R8yGy",overlay:"NavHeader_overlay__1mqjD",navBar:"NavHeader_navBar__1WuHz",titleLinkWrapper:"NavHeader_titleLinkWrapper__2Iif2",titleLink:"NavHeader_titleLink__1RkdD",caption:"NavHeader_caption__1rRg1",otherLinks:"NavHeader_otherLinks__63wtN"}},1475:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__2tyfr",mainContent:"PageContainer_mainContent__snxAJ",footer:"PageContainer_footer__2nCu6"}},394:function(e){e.exports={narrow:"PostView_narrow__2TbMw",postHeader:"PostView_postHeader__2ohWo",headerText:"PostView_headerText___HPA6",postTitle:"PostView_postTitle__1Qz2y",postSummary:"PostView_postSummary__28jsX",postDate:"PostView_postDate__1y_u1",postLinks:"PostView_postLinks__2e3nQ",banner:"PostView_banner__3rjAU",postBody:"PostView_postBody__198he"}},2247:function(e){e.exports={narrow:"utils_narrow__2R4_v"}},7462:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[774,888,179],(function(){return t=5464,e(e.s=t);var t}));var t=e.O();_N_E=t}]);