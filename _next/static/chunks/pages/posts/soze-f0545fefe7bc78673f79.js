(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},8373:function(e,t,r){"use strict";var n=r(4942),a=r(5893),o=(r(7294),r(2736));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return(0,a.jsxs)(o.Ee,s(s({loading:"lazy"},e),{},{children:[(0,a.jsx)(o.Vm,{}),(0,a.jsx)(o.zA,{quality:"auto",fetchFormat:"auto"})]}))}},5095:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(1959)),o=r(8373),i=r(2121),s=r.n(i);t.Z=function(e){var t=e.caption,r=e.images;return(0,n.jsxs)("figure",{className:s().imagesWrapper,children:[(0,n.jsx)("div",{className:s().images,children:(0,a.qo)(r).map((function(e){return(0,n.jsx)(o.Z,{publicId:e},e)}))}),t&&(0,n.jsx)("figcaption",{className:s().caption,children:t})]})}},113:function(e,t,r){"use strict";var n=r(5893),a=r(9278),o=r.n(a),i=r(6010);t.Z=function(e){var t=e.className,r=e.enabled,a=void 0===r||r,s=e.children;return(0,n.jsx)("div",{className:(0,i.Z)(t,a&&o().narrowContent),children:s})}},2918:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),a=r(2344),o=r.n(a),i=r(8531),s=r.n(i),c=r(6010),l=function(e){var t=e.overlay,r=void 0!==t&&t;return(0,n.jsx)("header",{className:(0,c.Z)(s().navHeader,r&&s().overlay),children:(0,n.jsxs)("nav",{className:s().navBar,children:[(0,n.jsxs)("div",{className:s().titleLinkWrapper,children:[(0,n.jsx)("a",{className:s().titleLink,href:"/",children:"A Thought"}),(0,n.jsx)("p",{className:s().caption,children:"(All I could muster)"})]}),(0,n.jsxs)("div",{className:s().otherLinks,children:[(0,n.jsx)("a",{href:"/projects",children:"Projects"}),(0,n.jsx)("a",{href:"/photos",children:"Photos"}),(0,n.jsx)("a",{href:"/about",children:"About"}),(0,n.jsx)("a",{href:"https://github.com/LucasPickering",children:"GitHub"})]})]})})},h=r(113),u=function(e){var t=e.wide,r=void 0!==t&&t,a=e.children;return(0,n.jsxs)(h.Z,{className:o().contentWrapper,enabled:!r,children:[(0,n.jsx)(l,{overlay:r}),(0,n.jsx)("main",{className:o().mainContent,children:a}),(0,n.jsxs)("footer",{className:o().footer,children:[(0,n.jsx)("span",{children:"Copyright 2021 Lucas Pickering"}),(0,n.jsx)("a",{href:"/",children:"Recursion!"})]})]})}},8125:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return f}});var o=r(5893),i=(r(7294),r(9008)),s=r(9388),c=r.n(s),l=r(1959),h=r(2918),u=r(8373),p=r(113),d=r(6010),f=function(e){var t,r=e.metadata,n=e.children,s=null!==(t=r.fullscreenIntro)&&void 0!==t&&t;return(0,o.jsxs)(h.Z,{wide:s,children:[(0,o.jsx)(i.default,{children:(0,o.jsxs)("title",{children:[r.title," | Lucas Pickering"]})}),(0,o.jsxs)("article",{children:[(0,o.jsxs)("header",{className:(0,d.Z)(c().postHeader,s&&c().fullscreen),children:[(0,o.jsx)("h1",{children:r.title}),(0,o.jsx)("span",{className:c().postDate,children:(0,l.p6)(r.date)}),(0,o.jsx)("p",{children:r.summary}),(0,o.jsx)("div",{className:c().postLinks,children:r.links&&Object.entries(r.links).map((function(e){var t=a(e,2),r=t[0],n=t[1];return(0,o.jsx)("a",{href:n,children:r},r)}))}),(0,o.jsx)(u.Z,{className:(0,d.Z)(c().banner,s&&c().fullscreen),publicId:r.banner})]}),(0,o.jsx)(p.Z,{children:n})]})]})}},1959:function(e,t,r){"use strict";r.d(t,{p6:function(){return a},qo:function(){return o}});var n=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"});function a(e){var t="string"===typeof e?new Date(e):e;return n.format(t)}function o(e){return Array.isArray(e)?e:[e]}},6930:function(e,t,r){"use strict";r.r(t),r.d(t,{metadata:function(){return h},default:function(){return d}});var n=r(4942),a=r(1026),o=(r(7294),r(3905)),i=r(5095),s=r(8125);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={title:"S\xf6ze",date:"2020-11-29",summary:"Hardware mods for my PC, with a suite of software services to make it all run smoothly. The mods include an LCD mounted on the front and a strip of RGB LEDs inside, all driven by a Raspberry Pi Zero.",banner:"lucaspickering.me/soze/banner_tnchrw",links:{Code:"https://github.com/LucasPickering/soze"},tags:["post","project","python","typescript","hardware"]},u={metadata:h},p=function(e){var t=e.children;return(0,o.kt)(s.Z,{metadata:h},t)};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)(p,l(l(l({},u),r),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"Background"),(0,o.kt)("p",null,"A long time ago (circa 2013), I decided I wanted to mod my PC. Fortunately, my case (the ",(0,o.kt)("a",l({parentName:"p"},{href:"https://www.bitfenix.com/products/chassis/mini-itx/prodigy/"}),"BitFenix Prodigy"),") is very amenable to that kind of thing, so I had a lot of options. Over the years, I added stuff, took it away, changed it, turned it upside, and eventually ended up with what I have today: an RGB LED strip, and a character LCD mounted to the front."),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/pc_pk5qvp",caption:"The computer, in all its glory",mdxType:"Images"}),(0,o.kt)("h2",null,"The Hardware"),(0,o.kt)("p",null,"The hardware involved in this obviously includes the LEDs and an LCD, as well as a few other pieces that make it possible to control everything from software."),(0,o.kt)("h3",null,"Raspberry Pi Zero"),(0,o.kt)("p",null,(0,o.kt)("a",l({parentName:"p"},{href:"https://www.raspberrypi.org/products/raspberry-pi-zero-w/"}),"Raspberry Pi Zero W")," | ",(0,o.kt)("a",l({parentName:"p"},{href:"https://www.adafruit.com/product/2348"}),"Adafruit motor HAT")),(0,o.kt)("p",null,'The RPi serves as the brains of the operation. It, along with the Motor HAT expansion board, controls the LEDs and the LCD. It also connects to the computer\'s power supply to determine when the PC turns on and off (which is used in the software to shift between "day" and "night" mode).'),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/rpi_cmehub",caption:"The Motor HAT on top with the Raspberry Pi visible underneath it",mdxType:"Images"}),(0,o.kt)("p",null,"The RPi connects to the PC's motherboard via USB for power, and uses WiFi for network access. But since my PC case is basically a Faraday cage, sometimes the WiFi isn't strong enough and I have to fall back to using the USB as a network interface as well. Generally though, the WiFi is good enough. If you're curious, check out the README for ",(0,o.kt)("a",l({parentName:"p"},{href:"https://github.com/LucasPickering/soze#pin-layout"}),"a detailed layout")," of all the pins being used on the RPi."),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/usb_tpx2md",caption:"The USB cable where it connects to the PC motherboard",mdxType:"Images"}),(0,o.kt)("h3",null,"LEDs"),(0,o.kt)("p",null,(0,o.kt)("a",l({parentName:"p"},{href:"https://www.adafruit.com/product/346"}),"RGB LED strip")),(0,o.kt)("p",null,"A simple RGB LED strip. Each component (red/green/blue) is controlled by PWM from a motor controller. This strip can display pretty much any color, but the catch is that the LEDs all show the same color at once. But still, RGB makes your computer faster (as proven by Science\u2122), so this piece is critical. Similarly, I'm currently investigating the effects of flame decals on CPU performance. Early results are promising."),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/leds_lfwfzh",caption:"The LED strip routed around the top of the PC",mdxType:"Images"}),(0,o.kt)("p",null,"This LED strip has gone through a few iterations, including pure analog control (which involved a homemade heatsink to prevent the whole thing from catching fire) and being driven by an Arduino Uno. This current iteration, with the Raspberry Pi and the motor controller, is definitely the cleanest and most configurable of all though. Having a full blown OS in control means the software can be a lot more complex and can provide a web UI (see ",(0,o.kt)("a",l({parentName:"p"},{href:"#ui"}),"UI"),")."),(0,o.kt)("h3",null,"LCD"),(0,o.kt)("p",null,(0,o.kt)("a",l({parentName:"p"},{href:"https://www.adafruit.com/product/498"}),"RGB backlight LCD")," | ",(0,o.kt)("a",l({parentName:"p"},{href:"https://www.adafruit.com/product/781"}),"LCD backpack")),(0,o.kt)("p",null,'This is the more complicated half of the mods. I mounted a 20x4 character LCD onto the front of my PC (in the space intended for a 5.25" CD drive). The LCD supports loading custom characters, which means I was able to define characters that form pieces of ',(0,o.kt)("em",{parentName:"p"},"bigger")," characters, which means... big numbers! Wow, computers!"),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/lcd_front_ukcz1w",caption:"The front of the LCD",mdxType:"Images"}),(0,o.kt)("p",null,"I initially drove this with an Arduino Uno wired directly to the LCD, but then I switched over to the Raspberry Pi and discovered Adafruit's LCD backpack, which cuts a 16-pin wiring operation down to a 3-pin UART connection. It also greatly simplifies the software logic to a basic serial protocol, which makes controlling screen content/color/etc. much easier."),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/lcd_back_qshz9e",caption:"The back side of the LCD (the larger green board) with the backpack (the smaller blue board)",mdxType:"Images"}),(0,o.kt)("h2",null,"The Software"),(0,o.kt)("p",null,"If the RPi is the brain, then the software is the... braincode? I don't know, this metaphor is breaking down. Software do what software do, it tells the RPi how to function. Each of these four components is a separate body of code, and they all communicate with each other over the network. Here's a synopsis of all the pieces. Basically, the UI talks to the API over HTTP (like and normal web app), then within the server, everything uses Redis as an intermediary."),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/diagram_z3qw1o",caption:"A diagram of the software components",mdxType:"Images"}),(0,o.kt)("p",null,"Redis is great for this application because it's fast, lightweight, handles all the annoying parts of networking, and the pub/sub model makes it easy to notify the other components when something changes. It also provides some basic persistence, which is easier to use than dumping settings to a JSON file and reloading them on startup."),(0,o.kt)("h3",null,"UI"),(0,o.kt)("p",null,"Everyone loves web development, right? This is a pretty simple UI built in TypeScript with React. It gives you full control of the LEDs and the LCD. It's hosted directly of the RPi, which makes deployment easy, but unfortunately means it's only accessible on the LAN. To make it accessible anywhere on the Internet, I'd have to set up a VPN to the RPi, host the UI elsewhere, and figure out auth. That sounds like a lot of work, and why would I want to control the PC while I'm not home anyway?"),(0,o.kt)(i.Z,{images:"lucaspickering.me/soze/ui_gdzljk",caption:"The S\xf6ze web UI",mdxType:"Images"}),(0,o.kt)("h3",null,"API"),(0,o.kt)("p",null,"This is a pretty thin layer that provides read/write access to the user's settings via HTTP. It uses Python+Flask. It doesn't involve any auth/permissions/etc., so very simple. For reads, this just reads a JSON string from Redis and returns it to the user. For writes, it basically validates JSON then dumps it into Redis."),(0,o.kt)("h3",null,"Reducer"),(0,o.kt)("p",null,"So if the RPi is the brain and the software is the braincode, then the reducer is the brain's Supreme Metatarsal Cortex (or something like that). Basically, this is the chunk of the code that takes the users settings and constantly calculates what each bit of hardware should be doing. Periodically (e.g. every 10ms), it recalculates the current LED color, and the current LCD text and color, then sends that data to the display."),(0,o.kt)("p",null,"This communicates in both directions via Redis. It reads user settings from Redis, calculates derived state, then writes that back to different keys in Redis."),(0,o.kt)("p",null,"The whole system is designed in order to offload all the difficult logic into the reducer. By putting all the complicated stuff in one place, it makes it easy to add and change functionality. And in most cases, changes here require minimal to no corresponding changes in the API/display, because the Redis contracts are decided to be as unrestrictive as possible."),(0,o.kt)("h3",null,"Display"),(0,o.kt)("p",null,"The display is a minimal adapter between the reducer and the actual hardware. The reducer produces an RGB color for the LEDs and a stream of binary commands for the LCD, so all the display has to do is take that data from Redis and forward out over the appropriate hardware channels. It might seem like this job doesn't justify having a completely separate service, but there's a big upside to it: mocking."),(0,o.kt)("p",null,"When developing and running this on my desktop/laptop, obviously the expected hardware isn't present. After experimenting with a few other mocking mechanisms at first, I found this was the easiest way to do mocking. There is an alternative display that doesn't attempt to interact with hardware at all, and instead just mimics the LED and LCD state in a terminal window. This makes it easy to spin up 90% of the stack exactly how it would exist on the RPi, and minimize the amount of code that has to be mocked."),(0,o.kt)("h2",null,"In Conclusion"),(0,o.kt)("p",null,"So that's like... everything. Hope it was interesting? All the code is ",(0,o.kt)("a",l({parentName:"p"},{href:"https://github.com/LucasPickering/soze"}),"on GitHub")," (the hardware is not). It's taken many years of tweaking but I'm very happy with where this setup is now. I'm sure I'll continue to work on it in the future (currently I'm working on porting chunks of the software to Rust for fun), so it's only going to get better."))}d.isMDXComponent=!0},4055:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/soze",function(){return r(6930)}])},2121:function(e){e.exports={imagesWrapper:"Images_imagesWrapper__XfFcv",images:"Images_images__2z67e",caption:"Images_caption__17yC0"}},9278:function(e){e.exports={narrowContent:"Narrow_narrowContent__1Idlv"}},8531:function(e){e.exports={navHeader:"NavHeader_navHeader__2wb8k",overlay:"NavHeader_overlay__1dzXe",navBar:"NavHeader_navBar__1Dijy",titleLinkWrapper:"NavHeader_titleLinkWrapper__3UzkA",titleLink:"NavHeader_titleLink__2BFBI",caption:"NavHeader_caption__2ehiM",otherLinks:"NavHeader_otherLinks__27YNZ"}},2344:function(e){e.exports={contentWrapper:"PageContainer_contentWrapper__3Bc1C",mainContent:"PageContainer_mainContent__2VeJN",footer:"PageContainer_footer__2pitm"}},9388:function(e){e.exports={postHeader:"PostView_postHeader__183v-",fullscreen:"PostView_fullscreen__2o0tb",postDate:"PostView_postDate__w6r5-",postLinks:"PostView_postLinks__3B9dI",banner:"PostView_banner__HGY8M"}},1026:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return t=4055,e(e.s=t);var t}));var t=e.O();_N_E=t}]);