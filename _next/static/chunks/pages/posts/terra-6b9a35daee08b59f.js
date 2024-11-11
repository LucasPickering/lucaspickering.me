(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{2677:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/terra",function(){return i(6064)}])},9090:function(e,t,i){"use strict";var n=i(1799),a=i(5893),r=i(6317),s=i(1608),o=i.n(s),l=function(e){var t=e.src;return r.n.image(t).toURL()};t.Z=function(e){return(0,a.jsx)(o(),(0,n.Z)({alt:"",loader:l},e))}},4883:function(e,t,i){"use strict";var n=i(5893),a=(i(7294),i(6269)),r=i(9090),s=i(3123),o=i.n(s),l=i(6010);t.Z=function(e){var t=e.className,i=e.caption,s=e.columns,h=void 0===s?1:s,c=e.images;return(0,n.jsxs)("figure",{className:(0,l.Z)(o().images,t),style:{gridTemplateColumns:"repeat(".concat(h,", 1fr)")},children:[(0,a.qo)(c).map((function(e){return(0,n.jsx)(r.Z,{src:e,width:0,height:0,style:{width:"100%",height:"auto"}},e)})),i&&(0,n.jsx)("figcaption",{className:o().caption,children:i})]})}},1785:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(5893),a=i(9782),r=i.n(a),s=i(6010),o=i(1664),l=i.n(o),h=function(e){var t=e.overlay,i=void 0!==t&&t;return(0,n.jsx)("header",{className:(0,s.Z)(r().navHeader,i&&r().overlay),children:(0,n.jsxs)("nav",{className:r().navBar,children:[(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("a",{className:r().titleLink,children:"Lucas Pickering"})}),(0,n.jsxs)("div",{className:r().otherLinks,children:[(0,n.jsx)(l(),{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})}),(0,n.jsx)(l(),{href:"/photos",children:(0,n.jsx)("a",{children:"Photos"})}),(0,n.jsx)(l(),{href:"/about",children:(0,n.jsx)("a",{children:"About"})}),(0,n.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},c=i(9333),d=i.n(c),u=i(1737),m=i.n(u),p=function(e){var t=e.className,i=e.isGallery,a=void 0!==i&&i,r=e.children;return(0,n.jsxs)("div",{className:(0,s.Z)(t,d().contentWrapper,!a&&m().narrow),children:[(0,n.jsx)(h,{overlay:a}),(0,n.jsx)("main",{className:d().mainContent,children:r}),(0,n.jsxs)("footer",{className:d().footer,children:[(0,n.jsxs)("span",{children:["Copyright ",(new Date).getUTCFullYear()," Lucas Pickering"]}),(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("a",{children:"Recursion!"})})]})]})}},6663:function(e,t,i){"use strict";var n=i(603),a=i(5893),r=i(2073),s=i(6317),o=i(6269),l=i(7250),h=i.n(l),c=i(6010),d=i(9008),u=i.n(d),m=i(1664),p=i.n(m),f=(i(7294),i(9090)),g=i(1785);t.Z=function(e){var t,i=e.metadata,l=e.children,d=null!==(t=i.isGallery)&&void 0!==t&&t,m=i.banner&&s.n.image(i.banner).resize(r.t$.fill(1200,627)).toURL();return(0,a.jsxs)(g.Z,{className:(0,c.Z)(d&&"gallery"),isGallery:d,children:[(0,a.jsxs)(u(),{children:[(0,a.jsx)("title",{children:"".concat(i.title," | Lucas Pickering")}),(0,a.jsx)("meta",{name:"description",content:i.summary}),(0,a.jsx)("meta",{name:"og:title",content:i.title}),m&&(0,a.jsx)("meta",{name:"og:image",content:m}),(0,a.jsx)("meta",{name:"og:description",content:i.summary})]}),(0,a.jsxs)("article",{children:[(0,a.jsxs)("header",{className:h().postHeader,children:[(0,a.jsxs)("div",{className:h().headerText,children:[(0,a.jsx)("h1",{className:h().postTitle,children:i.title}),(0,a.jsx)("p",{className:h().postSummary,children:i.summary}),i.date&&(0,a.jsx)("span",{className:h().postDate,children:(0,o.p6)(i.date)}),i.links&&(0,a.jsx)("div",{className:h().postLinks,children:Object.entries(i.links).map((function(e){var t=(0,n.Z)(e,2),i=t[0],r=t[1];return(0,a.jsx)(p(),{href:r,children:(0,a.jsx)("a",{children:i})},i)}))})]}),i.banner&&(0,a.jsx)(f.Z,{className:h().banner,sizes:"100vw",src:i.banner,width:800,height:300})]}),(0,a.jsx)("div",{className:h().postBody,children:l})]})]})}},6317:function(e,t,i){"use strict";i.d(t,{n:function(){return n}});var n=new(i(2795).r)({cloud:{cloudName:"lucaspickering"},url:{secure:!0}})},6269:function(e,t,i){"use strict";i.d(t,{p6:function(){return a},qo:function(){return r}});var n=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var t="string"===typeof e?new Date(e):e;return n.format(t)}function r(e){return Array.isArray(e)?e:[e]}},6064:function(e,t,i){"use strict";i.r(t),i.d(t,{metadata:function(){return o}});var n=i(5893),a=i(1151),r=i(4883),s=i(6663),o={title:"Terra",summary:"A hexagon-tile terrain generation system. Dynamically generate and explore terrain. This is a generic toolkit that can be used to generate terrain for renderings, games, etc.",banner:"lucaspickering.me/terra/banner_xhecnx",links:{Code:"https://github.com/LucasPickering/terra-rs",Site:"https://terra.lucaspickering.me"},tags:["post","project","rust","3d"]},l=function(e){var t=e.children;return(0,n.jsx)(s.Z,{metadata:o,children:t})};function h(e){var t=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Intro"}),"\n",(0,n.jsxs)(t.p,{children:["Terra is a 3D hexagon-based terrain generation library. It provides a highly configurable series of algorithms that can generate lifelike terrain. The core library itself doesn't actually render the terrain, it just returns it in a format that makes rendering simple. It also includes a simple demo that renders the terrain in 3D, to see what it's capable of (",(0,n.jsx)(t.a,{href:"#demo",children:"skip to the demo now"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Shoutout to Amit Patel for ",(0,n.jsx)(t.a,{href:"https://www.redblobgames.com/grids/hexagons/",children:"this post"}),", which has been an endless resource of information for working with hex grids."]}),"\n",(0,n.jsx)(t.h2,{children:"How does it work?"}),"\n",(0,n.jsxs)(t.p,{children:["The generator takes in a configuration object that contains a bunch of parameters that define the generation process. Chief among these is the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Random_seed",children:"random seed"}),". Beyond that, there are lots of different levers to control how different steps in the process behave. Based on the configuration, the generator applies a series of steps to initialize the world and create terrain."]}),"\n",(0,n.jsxs)(t.p,{children:["If you're curious, all the code for terrain generation ",(0,n.jsx)(t.a,{href:"https://github.com/LucasPickering/terra-rs/tree/master/crates/core/src/world/generate",children:"lives here"}),"."]}),"\n",(0,n.jsx)(t.h3,{children:"Step 0 - Initialize the world"}),"\n",(0,n.jsx)(t.p,{children:"We start by initializing a world based on the defined world radius in the config. Each tile is initialized but doesn't actually have any properties assigned yet. I haven't included a picture for this step because there isn't really anything to see yet."}),"\n",(0,n.jsx)(t.h3,{children:"Step 1 - Generate elevation maps"}),"\n",(0,n.jsxs)(t.p,{children:["We start by defining an elevation for each tile, using a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Perlin_noise",children:"Perlin noise function"}),". Once again, credit to Amit Patel with ",(0,n.jsx)(t.a,{href:"https://www.redblobgames.com/maps/terrain-from-noise/",children:"another great post"})," that explains noise-based terrain generation."]}),"\n",(0,n.jsx)(t.p,{children:"At this point, our terrain map looks something like this, where each tile has an elevation defined, but nothing else."}),"\n",(0,n.jsx)(r.Z,{images:"lucaspickering.me/terra/elevation_af9kpl",caption:"The red tiles are the highest elevation while the white tiles are the lowest."}),"\n",(0,n.jsx)(t.h3,{children:"Step 2 - Simulate rainfall"}),"\n",(0,n.jsx)(t.p,{children:"Without going into too much detail, as this logic is subject to change, we simulate rainfall across the terrain. To do this, we first define where oceans will form based on which tiles are below sea level. Then, we pick a prevailing wind direction, which is uniform over the terrain. From there we can simulate evaporation (which occurs over bodies of water) and rainfall (which collects on tiles). This simulation is elevation-aware, meaning the spread of rainfall is affected by mountains. So land that is downwind of bodies of water gets the most rain, while land downwind of a mountain range won't get very much rain at all."}),"\n",(0,n.jsx)(t.p,{children:"At this point, each land tile will have some amount of rainfall assigned to it, which will be a function of its proximity to the ocean plus proximity to mountains and other elevation features. From here we can move onto the next step, which is simulating how that water flows and collects."}),"\n",(0,n.jsx)(r.Z,{images:"lucaspickering.me/terra/humidity_qliycy",caption:"The green tiles are the get the most rainfall while the white are the driest."}),"\n",(0,n.jsx)(t.h3,{children:"Step 3 - Simulate runoff"}),"\n",(0,n.jsx)(t.p,{children:"Runoff simulation is the process of simulating how water flows from one tile to the next, and where that runoff collects. The purpose of this step is to determine where rivers and lakes would naturally form on the terrain. The actual algorithms involved here are pretty complicated and subject to change so I won't detail them too much, but the simplified version is this:"}),"\n",(0,n.jsx)(t.p,{children:"For each tile, we track two things:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"How much water collects on it"}),"\n",(0,n.jsx)(t.li,{children:"How much water flows over it, including where it flows from and where it flows to"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once we have those, we can easily place lakes on tiles that collect a lot of water and rivers on tiles that have high water flow rates. When it's all said and done, here's what our map will look like:"}),"\n",(0,n.jsx)(r.Z,{images:"lucaspickering.me/terra/runoff_cqbeg5",caption:"In this map, green represents runoff flow while blue is collected runoff. So the greenest tiles will become rivers, while the bluest will become lakes. Black tiles have little to no runoff flow over them, and gray tiles are ocean."}),"\n",(0,n.jsx)(t.h3,{children:"Step 4 - Assign biomes"}),"\n",(0,n.jsx)(t.p,{children:"Terra has a number of different biomes, which are assigned to tiles based on each tile's individual elevation and humidity. By now we know what elevation is, but what is humidity? Humidity is derived from rainfall, meaning tiles that get the most rain are the most humid. Makes sense, right?"}),"\n",(0,n.jsx)(t.p,{children:"Because of the methodology we use to generation elevation and simulate rainfall, they both form in smooth gradients where each tile is going to have a pretty similar elevation & humidity to the ones next to it. This means that biomes form in nice, natural-looking clusters."}),"\n",(0,n.jsx)(t.p,{children:"So after all these steps, we end up with our final product!"}),"\n",(0,n.jsx)(r.Z,{images:"lucaspickering.me/terra/final_w5m4zz",caption:"Tile color here represents biomes. The darkest green is jungle, the tan is plains, etc."}),"\n",(0,n.jsx)(t.h2,{children:"So what are you gonna do with this?"}),"\n",(0,n.jsx)(t.p,{children:"Right now this project exists on its own, meaning I'm not using it as part of any other projects. But given its modular and configurable design, I plan to use it as part of a few different game ideas that I have. Interesting terrain can be used in all kinds of different ways to make games feel varied and immersive. For now though, I'm just working on fleshing out this project."}),"\n",(0,n.jsx)(t.p,{children:"TL;DR: You'll have to wait and see."}),"\n",(0,n.jsx)(t.h2,{children:"Can I use it?"}),"\n",(0,n.jsxs)(t.p,{children:["Please do! The crate isn't published to ",(0,n.jsx)(t.a,{href:"https://crates.io",children:"crates.io"})," (yet), but you can pull it in via the git URL, with something like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'terra = { git = "https://github.com/LucasPickering/terra-rs", branch = "master" }\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If do you start using this, please let me know what you think! Always open to suggestions, and if people are actually using this I can put it up on ",(0,n.jsx)(t.code,{children:"crates.io"})," to make usage easier."]}),"\n",(0,n.jsx)(t.h2,{children:"Demo"}),"\n",(0,n.jsxs)(t.p,{children:["This demo is a simple TypeScript app that renders Terra terrain in 3D, entirely in the browser. This is accomplished by compiling Terra to ",(0,n.jsx)(t.a,{href:"https://webassembly.org/",children:"WebAssembly"}),", then importing it from the TypeScript app. This is just a simple example of what you can do with Terra. The standalone version is available at ",(0,n.jsx)(t.a,{href:"https://terra.lucaspickering.me/",children:"terra.lucaspickering.me"}),"."]})]})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(l,Object.assign({},e,{children:(0,n.jsx)(h,e)}))}},3123:function(e){e.exports={images:"Images_images__8Dmua",caption:"Images_caption__1dNbT"}},9782:function(e){e.exports={navHeader:"NavHeader_navHeader__7GzgE",overlay:"NavHeader_overlay__YcZRU",navBar:"NavHeader_navBar__CYOGB",titleLink:"NavHeader_titleLink__8irOL",otherLinks:"NavHeader_otherLinks__21IHn"}},9333:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__MxbyT",mainContent:"PageContainer_mainContent__fVQiP",footer:"PageContainer_footer__GBF3t"}},7250:function(e){e.exports={narrow:"PostView_narrow__QImnk",postHeader:"PostView_postHeader__SoKpZ",headerText:"PostView_headerText__xk49b",postTitle:"PostView_postTitle__RS_kO",postSummary:"PostView_postSummary__p9Wei",postDate:"PostView_postDate__RIqbw",postLinks:"PostView_postLinks__1v7I_",banner:"PostView_banner__4tsnF",postBody:"PostView_postBody__lxIA8"}},1737:function(e){e.exports={narrow:"utils_narrow__mDe6j"}}},function(e){e.O(0,[898,10,774,888,179],(function(){return t=2677,e(e.s=t);var t}));var t=e.O();_N_E=t}]);