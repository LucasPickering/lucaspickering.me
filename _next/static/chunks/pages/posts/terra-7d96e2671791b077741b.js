(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):o(o({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},h),{},{components:r})):n.createElement(d,o({ref:t},h))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},8373:function(e,t,r){"use strict";var n=r(4942),a=r(5893),i=(r(7294),r(2736));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return(0,a.jsxs)(i.Ee,s(s({loading:"lazy"},e),{},{children:[(0,a.jsx)(i.Vm,{}),(0,a.jsx)(i.zA,{quality:"auto",fetchFormat:"auto"})]}))}},5095:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(1959)),i=r(8373),o=r(2121),s=r.n(o);t.Z=function(e){var t=e.caption,r=e.images;return(0,n.jsxs)("figure",{className:s().imagesWrapper,children:[(0,n.jsx)("div",{className:s().images,children:(0,a.qo)(r).map((function(e){return(0,n.jsx)(i.Z,{publicId:e},e)}))}),t&&(0,n.jsx)("figcaption",{className:s().caption,children:t})]})}},113:function(e,t,r){"use strict";var n=r(5893),a=r(9278),i=r.n(a),o=r(6010);t.Z=function(e){var t=e.className,r=e.enabled,a=void 0===r||r,s=e.children;return(0,n.jsx)("div",{className:(0,o.Z)(t,a&&i().narrowContent),children:s})}},2918:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),a=r(2344),i=r.n(a),o=r(8531),s=r.n(o),l=r(6010),c=function(e){var t=e.overlay,r=void 0!==t&&t;return(0,n.jsx)("header",{className:(0,l.Z)(s().navHeader,r&&s().overlay),children:(0,n.jsxs)("nav",{className:s().navBar,children:[(0,n.jsxs)("div",{className:s().titleLinkWrapper,children:[(0,n.jsx)("a",{className:s().titleLink,href:"/",children:"A Thought"}),(0,n.jsx)("p",{className:s().caption,children:"(All I could muster)"})]}),(0,n.jsxs)("div",{className:s().otherLinks,children:[(0,n.jsx)("a",{href:"/projects",children:"Projects"}),(0,n.jsx)("a",{href:"/photos",children:"Photos"}),(0,n.jsx)("a",{href:"/about",children:"About"}),(0,n.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},u=r(113),h=function(e){var t=e.wide,r=void 0!==t&&t,a=e.children;return(0,n.jsxs)(u.Z,{className:i().contentWrapper,enabled:!r,children:[(0,n.jsx)(c,{overlay:r}),(0,n.jsx)("main",{className:i().mainContent,children:a}),(0,n.jsxs)("footer",{className:i().footer,children:[(0,n.jsx)("span",{children:"Copyright 2021 Lucas Pickering"}),(0,n.jsx)("a",{href:"/",children:"Recursion!"})]})]})}},8125:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,i=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return d}});var i=r(5893),o=(r(7294),r(9008)),s=r(9388),l=r.n(s),c=r(1959),u=r(2918),h=r(8373),p=r(113),f=r(6010),d=function(e){var t,r=e.metadata,n=e.children,s=null!==(t=r.fullscreenIntro)&&void 0!==t&&t;return(0,i.jsxs)(u.Z,{wide:s,children:[(0,i.jsx)(o.default,{children:(0,i.jsxs)("title",{children:[r.title," | Lucas Pickering"]})}),(0,i.jsxs)("article",{children:[(0,i.jsxs)("header",{className:(0,f.Z)(l().postHeader,s&&l().fullscreen),children:[(0,i.jsx)("h1",{children:r.title}),(0,i.jsx)("span",{className:l().postDate,children:(0,c.p6)(r.date)}),(0,i.jsx)("p",{children:r.summary}),(0,i.jsx)("div",{className:l().postLinks,children:r.links&&Object.entries(r.links).map((function(e){var t=a(e,2),r=t[0],n=t[1];return(0,i.jsx)("a",{href:n,children:r},r)}))}),(0,i.jsx)(h.Z,{className:(0,f.Z)(l().banner,s&&l().fullscreen),publicId:r.banner})]}),(0,i.jsx)(p.Z,{children:n})]})]})}},1959:function(e,t,r){"use strict";r.d(t,{p6:function(){return a},qo:function(){return i}});var n=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var t="string"===typeof e?new Date(e):e;return n.format(t)}function i(e){return Array.isArray(e)?e:[e]}},9566:function(e,t,r){"use strict";r.r(t),r.d(t,{metadata:function(){return u},default:function(){return f}});var n=r(4942),a=r(1026),i=(r(7294),r(3905)),o=r(5095),s=r(8125);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={title:"Terra",date:"2021-02-23",summary:"A hexagon-tile terrain generation system. Dynamically generate and explore terrain. This is a generic toolkit that can be used to generate terrain for renderings, games, etc.",banner:"lucaspickering.me/terra/banner_xhecnx",links:{Code:"https://github.com/LucasPickering/terra-rs",Site:"https://terra.lucaspickering.me"},tags:["post","project","rust","3d"]},h={metadata:u},p=function(e){var t=e.children;return(0,i.kt)(s.Z,{metadata:u},t)};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)(p,c(c(c({},h),r),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Intro"),(0,i.kt)("p",null,"Terra is a 3D hexagon-based terrain generation library. It provides a highly configurable series of algorithms that can generate lifelike terrain. The core library itself doesn't actually render the terrain, it just returns it in a format that makes rendering simple. It also includes a simple demo that renders the terrain in 3D, to see what it's capable of (",(0,i.kt)("a",c({parentName:"p"},{href:"#demo"}),"skip to the demo now"),")."),(0,i.kt)("p",null,"Shoutout to Amit Patel for ",(0,i.kt)("a",c({parentName:"p"},{href:"https://www.redblobgames.com/grids/hexagons/"}),"this post"),", which has been an endless resource of information for working with hex grids."),(0,i.kt)("h2",null,"How does it work?"),(0,i.kt)("p",null,"The generator takes in a configuration object that contains a bunch of parameters that define the generation process. Chief among these is the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Random_seed"}),"random seed"),". Beyond that, there are lots of different levers to control how different steps in the process behave. Based on the configuration, the generator applies a series of steps to initialize the world and create terrain."),(0,i.kt)("p",null,"If you're curious, all the code for terrain generation ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/LucasPickering/terra-rs/tree/master/crates/core/src/world/generate"}),"lives here"),"."),(0,i.kt)("h3",null,"Step 0 - Initialize the world"),(0,i.kt)("p",null,"We start by initializing a world based on the defined world radius in the config. Each tile is initialized but doesn't actually have any properties assigned yet. I haven't included a picture for this step because there isn't really anything to see yet."),(0,i.kt)("h3",null,"Step 1 - Generate elevation maps"),(0,i.kt)("p",null,"We start by defining an elevation for each tile, using a ",(0,i.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Perlin_noise"}),"Perlin noise function"),". Once again, credit to Amit Patel with ",(0,i.kt)("a",c({parentName:"p"},{href:"https://www.redblobgames.com/maps/terrain-from-noise/"}),"another great post")," that explains noise-based terrain generation."),(0,i.kt)("p",null,"At this point, our terrain map looks something like this, where each tile has an elevation defined, but nothing else."),(0,i.kt)(o.Z,{images:"lucaspickering.me/terra/elevation_af9kpl",caption:"The red tiles are the highest elevation while the white tiles are the lowest.",mdxType:"Images"}),(0,i.kt)("h3",null,"Step 2 - Simulate rainfall"),(0,i.kt)("p",null,"Without going into too much detail, as this logic is subject to change, we simulate rainfall across the terrain. To do this, we first define where oceans will form based on which tiles are below sea level. Then, we pick a prevailing wind direction, which is uniform over the terrain. From there we can simulate evaporation (which occurs over bodies of water) and rainfall (which collects on tiles). This simulation is elevation-aware, meaning the spread of rainfall is affected by mountains. So land that is downwind of bodies of water gets the most rain, while land downwind of a mountain range won't get very much rain at all."),(0,i.kt)("p",null,"At this point, each land tile will have some amount of rainfall assigned to it, which will be a function of its proximity to the ocean plus proximity to mountains and other elevation features. From here we can move onto the next step, which is simulating how that water flows and collects."),(0,i.kt)(o.Z,{images:"lucaspickering.me/terra/humidity_qliycy",caption:"The green tiles are the get the most rainfall while the white are the driest.",mdxType:"Images"}),(0,i.kt)("h3",null,"Step 3 - Simulate runoff"),(0,i.kt)("p",null,"Runoff simulation is the process of simulating how water flows from one tile to the next, and where that runoff collects. The purpose of this step is to determine where rivers and lakes would naturally form on the terrain. The actual algorithms involved here are pretty complicated and subject to change so I won't detail them too much, but the simplified version is this:"),(0,i.kt)("p",null,"For each tile, we track two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How much water collects on it"),(0,i.kt)("li",{parentName:"ol"},"How much water flows over it, including where it flows from and where it flows to")),(0,i.kt)("p",null,"Once we have those, we can easily place lakes on tiles that collect a lot of water and rivers on tiles that have high water flow rates. When it's all said and done, here's what our map will look like:"),(0,i.kt)(o.Z,{images:"lucaspickering.me/terra/runoff_cqbeg5",caption:"In this map, green represents runoff flow while blue is collected runoff. So the greenest tiles will become rivers, while the bluest will become lakes. Black tiles have little to no runoff flow over them, and gray tiles are ocean.",mdxType:"Images"}),(0,i.kt)("h3",null,"Step 4 - Assign biomes"),(0,i.kt)("p",null,"Terra has a number of different biomes, which are assigned to tiles based on each tile's individual elevation and humidity. By now we know what elevation is, but what is humidity? Humidity is derived from rainfall, meaning tiles that get the most rain are the most humid. Makes sense, right?"),(0,i.kt)("p",null,"Because of the methodology we use to generation elevation and simulate rainfall, they both form in smooth gradients where each tile is going to have a pretty similar elevation & humidity to the ones next to it. This means that biomes form in nice, natural-looking clusters."),(0,i.kt)("p",null,"So after all these steps, we end up with our final product!"),(0,i.kt)(o.Z,{images:"lucaspickering.me/terra/final_w5m4zz",caption:"Tile color here represents biomes. The darkest green is jungle, the tan is plains, etc.",mdxType:"Images"}),(0,i.kt)("h2",null,"So what are you gonna do with this?"),(0,i.kt)("p",null,"Right now this project exists on its own, meaning I'm not using it as part of any other projects. But given its modular and configurable design, I plan to use it as part of a few different game ideas that I have. Interesting terrain can be used in all kinds of different ways to make games feel varied and immersive. For now though, I'm just working on fleshing out this project."),(0,i.kt)("p",null,"TL;DR: You'll have to wait and see."),(0,i.kt)("h2",null,"Can I use it?"),(0,i.kt)("p",null,"Please do! The crate isn't published to ",(0,i.kt)("a",c({parentName:"p"},{href:"https://crates.io"}),"crates.io")," (yet), but you can pull it in via the git URL, with something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-toml"}),'terra = { git = "https://github.com/LucasPickering/terra-rs", branch = "master" }\n')),(0,i.kt)("p",null,"If do you start using this, please let me know what you think! Always open to suggestions, and if people are actually using this I can put it up on ",(0,i.kt)("inlineCode",{parentName:"p"},"crates.io")," to make usage easier."),(0,i.kt)("h2",null,"Demo"),(0,i.kt)("p",null,"This demo is a simple TypeScript app that renders Terra terrain in 3D, entirely in the browser. This is accomplished by compiling Terra to ",(0,i.kt)("a",c({parentName:"p"},{href:"https://webassembly.org/"}),"WebAssembly"),", then importing it from the TypeScript app. This is just a simple example of what you can do with Terra. The standalone version is available at ",(0,i.kt)("a",c({parentName:"p"},{href:"https://terra.lucaspickering.me/"}),"terra.lucaspickering.me"),"."))}f.isMDXComponent=!0},6960:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/terra",function(){return r(9566)}])},2121:function(e){e.exports={imagesWrapper:"Images_imagesWrapper__XfFcv",images:"Images_images__2z67e",caption:"Images_caption__17yC0"}},9278:function(e){e.exports={narrowContent:"Narrow_narrowContent__1Idlv"}},8531:function(e){e.exports={navHeader:"NavHeader_navHeader__2wb8k",overlay:"NavHeader_overlay__1dzXe",navBar:"NavHeader_navBar__1Dijy",titleLinkWrapper:"NavHeader_titleLinkWrapper__3UzkA",titleLink:"NavHeader_titleLink__2BFBI",caption:"NavHeader_caption__2ehiM",otherLinks:"NavHeader_otherLinks__27YNZ"}},2344:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__3Bc1C",mainContent:"PageContainer_mainContent__2VeJN",footer:"PageContainer_footer__2pitm"}},9388:function(e){e.exports={postHeader:"PostView_postHeader__183v-",fullscreen:"PostView_fullscreen__2o0tb",postDate:"PostView_postDate__w6r5-",postLinks:"PostView_postLinks__3B9dI",banner:"PostView_banner__HGY8M"}},1026:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return t=6960,e(e.s=t);var t}));var t=e.O();_N_E=t}]);