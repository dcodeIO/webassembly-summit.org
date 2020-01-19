(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+H/T":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("q1tI"),a=i.n(n),o=a.a.createElement,s={1:{speakerId:"1",title:"Opening Keynote"},2:{speakerId:"2",title:"Shipping Tiny WebAssembly Builds",abstract:"Code size matters in many places, especially (but not only!) on the Web. This talk will present current best practices in generating small WebAssembly builds when using popular toolchains like LLVM, Emscripten, Rust, Go, and AssemblyScript."},3:{speakerId:"3",title:"Why the #wasmsummit Website isn't written in Wasm, and what that means for the future of Wasm",abstract:o(a.a.Fragment,null,o("p",null,"WebAssembly is not here to kill JavaScript. In fact, to be successful, it *must not*. But let me back up."),o("p",null,"WebAssembly is an exciting new technology that has the ambition to change how and what we program for not only the web, but everywhere. In the case of the web platform, WebAssembly's promise has led many to declare that WebAssembly's entrance means the death of JavaScript. This belief is not only reactionary, but deeply short-sighted, and likely to threaten the successful wide-spread adoption of WebAssembly."),o("p",null,"In this talk, we'll use the WebAssembly Summit website to discuss the uses and misuses of WebAssembly on the web. We'll explore the historical and material conditions of the web, past and present, to understand *how* and *why* the web changes and what its current trajectory is. With this understanding, we'll explore how WebAssembly can navigate this unique moment and discuss the practical implications of the specification's growth and better tooling as WebAssembly searches for its place in the web platform and beyond."))},4:{speakerId:"4",title:"JavaScriptCore's new WebAssembly interpreter",abstract:"In this talk, we will look at JavaScriptCore's newest WebAssembly tier, the Low Level Interpreter (LLInt). With the addition of the interpreter, JavaScriptCore now uses three tiers to execute WebAssembly: LLInt, BBQ and OMG. Because of the new interpreter, WebAssembly programs executing in JavaScriptCore now start up 3x faster. Because of the three-tiered approach, we were able to achieve this while maintaining the same throughput performance."},5:{speakerId:"5",title:"WebAssembly Music",abstract:"Been playing with computer music since the 80s from the tracker era to modern soft synths and DAWs, and even writing some myself. Recently as WebAssembly  came along with excellent performance, and AudioWorklet technology in  providing low latency audio, it's finally possible to use the web for serious music production. As a programmer I like to use a programming language for expressing the music, and also for synthesizing the instruments. I compose my music in Javascript and create my instruments in AssemblyScript which is compiled to WebAssembly. It's all running in the browser. You can write the music in a live coding-environment, and you can play and record the instruments with a midi-keyboard."},6:{speakerId:"6",title:"Making it easier to make Things: WebAssembly and the Internet of Things",abstract:"WebAssembly is moving beyond the browser - but is it ready for IoT apps and tiny embedded devices? Yes...ish. In this talk, learn about the state of running Wasm on embedded devices (as low as 512kb of RAM & 64 MHz) and what's left to solve. Also learn where Wasm can today help with IoT protocols and tools."},7:{speakerId:"7",title:"Building a Containerless Future with WebAssembly",abstract:"WebAssembly is the future of distributed computing. Its security, memory isolation, small footprint, and true portability are all advantages on the web, but become truly game-changing when used to build functions and services deployed in the cloud. This session illustrates how to host WebAssembly modules in Rust code, how to build modules in many different languages (including pros and cons of each), and how to securely grant cloud-native capabilities to these modules. Discussed in detail is the current state of the art in WebAssembly and what can be built with it today. Learn what developers can start doing now to build the containerless future where WebAssembly modules are the de-facto unit of immutable deployment in the cloud, at the edge, and even in IoT and embedded devices."},8:{speakerId:"8",title:"WebAssembly as a <video> polyfill",abstract:"An introduction to Wikipedia's ogv.js media compatibility shim, which uses WebAssembly codecs to provide video file format compatibility for VP9 and AV1 video in browsers that don't play them natively. Will explore the division between the JS and Wasm parts of the code base, and how advances in emscripten and LLVM create opportunities and challenges for performance as different browsers implement different levels of the spec (threading, SIMD, etc)."},9:{speakerId:"9",title:"Closing Keynote"}}},HmTN:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n={1:{name:"Lin Clark",picture:"/lin-clark.jpg",company:"Mozilla",website:"https://twitter.com/linclark",talkId:"1"},2:{name:"Alon Zakai",company:"Google",picture:"/alon-zakai.jpeg",website:"https://twitter.com/kripken",talkId:"2"},3:{name:"Ashley Williams",company:"Cloudflare",picture:"/ashley-williams.jpg",website:"https://twitter.com/ag_dubs",talkId:"3"},4:{name:"Tadeu Zagallo",company:"Apple",picture:"/tadeu-zagallo.jpg",website:"https://twitter.com/tadeuzagallo",talkId:"4"},5:{name:"Peter Salomonsen",picture:"/peter-salomonsen.jpg",website:"https://twitter.com/salomonsen_p",talkId:"5"},6:{name:"Johnathan Beri",company:"Wasm SF",picture:"/johnathan-beri.jpeg",website:"https://twitter.com/beriberikix",talkId:"6"},7:{name:"Kevin Hoffman",picture:"/kevin-hoffman.jpeg",website:"https://twitter.com/kevinhoffman",talkId:"7"},8:{name:"Brion Vibber",picture:"/brion-vibber.jpg",website:"https://twitter.com/brionv",talkId:"8"},9:{name:"Ben Smith",company:"Google",picture:"/ben-smith.jpg",website:"https://twitter.com/binjimint",talkId:"9"}}},aUtX:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/speakers/[id]",function(){return i("lJkr")}])},lJkr:function(e,t,i){"use strict";i.r(t),i.d(t,"Icon",(function(){return b})),i.d(t,"PageTitle",(function(){return w})),i.d(t,"Headline",(function(){return y})),i.d(t,"SpeakerSummary",(function(){return _}));var n=i("p0XB"),a=i.n(n),o=i("q1tI"),s=i.n(o),r=i("nOHt"),l=i("vOnD"),d=i("bgFo"),m=i("HmTN"),c=i("+H/T"),p=i("ma3e"),h=s.a.createElement;t.default=function(){var e=Object(r.useRouter)().query,t=a()(e.id)?e.id[0]:e.id,i=m.a[t]||{},n=i.talkId?c.a[i.talkId]:{},o=(n.time,p.c);return i.website&&(i.website.includes("twitter")?o=p.f:i.website.includes("github")&&(o=p.b)),h(s.a.Fragment,null,h(g,null),h(d.b,{title:"Speaker",backgroundColor:d.g,bottom:!0}),h(x,null,h(k,null,h(f,null,i.name&&h("a",{href:i.website,target:"_blank"},h(d.c,null,h("img",{src:i.picture,alt:"picture of ".concat(i.name)}),h(d.d,null,h("strong",null,i.name)," ",i.company&&h(d.a,null,i.company)),h(_,null,i.website&&h(s.a.Fragment,null,h(u,null,h(b,null,h(o,{size:32})))))))),h(v,null,i.name&&h(I,null,n.title),h(W,null,n.time&&n.time.start&&n.time.end&&"".concat(n.time&&n.time.start," - ").concat(n.time&&n.time.end)),h(A,null,n.abstract)))))};var u=l.b.div.withConfig({displayName:"id__Links",componentId:"sc-1ae1eyk-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:flex-end;"]),b=l.b.div.withConfig({displayName:"id__Icon",componentId:"sc-1ae1eyk-1"})(["padding:0 10px;color:rgba(255,255,255,0.8);"]),g=(l.b.div.withConfig({displayName:"id__Time",componentId:"sc-1ae1eyk-2"})([""]),l.b.div.withConfig({displayName:"id__Background",componentId:"sc-1ae1eyk-3"})(["display:flex;position:fixed;top:0;bottom:0;left:0;right:0;background-color:hsla(237,0%,48%,0.15);padding:25px;z-index:-1;"])),f=l.b.div.withConfig({displayName:"id__SpeakerBox",componentId:"sc-1ae1eyk-4"})(["display:flex;flex-direction:column;margin-top:0vh;margin-bottom:2vh;margin-right:0;padding-top:0;@media screen and (max-width:450px){margin-top:3vh;}"]),w=l.b.h1.withConfig({displayName:"id__PageTitle",componentId:"sc-1ae1eyk-5"})(["font-size:1.6em;margin-top:3vh;margin-bottom:-3vh;padding:0;margin-left:30px;color:rgb(150,150,200);@media screen and (max-width:663px){font-size:1.5em;}"]),y=l.b.h2.withConfig({displayName:"id__Headline",componentId:"sc-1ae1eyk-6"})(["font-size:2em;margin-top:3vh;margin-bottom:0vh;padding:0 15px;@media screen and (max-width:1024px){font-size:2em;}"]),x=l.b.div.withConfig({displayName:"id__Content",componentId:"sc-1ae1eyk-7"})(["display:flex;flex-direction:row;padding:3vh 3vw;color:white;min-height:calc(100vh - 65px);align-items:center;justify-content:center;"]),k=l.b.div.withConfig({displayName:"id__Columns",componentId:"sc-1ae1eyk-8"})(["background-color:",";box-shadow:",";color:#fff;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:flex-start;"],(function(e){return e.primary?"#fff":"transparent"}),(function(e){return e.primary?"0px 5px 30px rgba(0,0,0,0.01)":"0px"})),v=l.b.div.withConfig({displayName:"id__Section",componentId:"sc-1ae1eyk-9"})(["break-inside:avoid;flex:1;margin:1vh 3vw 0vh 3vw;max-width:1024px;"]),I=l.b.h2.withConfig({displayName:"id__SectionHeading",componentId:"sc-1ae1eyk-10"})(["font-size:1.8em;margin:0 25px 0 0;padding:15px;font-weight:700;border-bottom:3px solid rgba(255,255,255,0.4);text-shadow:2px 4px 5px hsla(237,80%,35%,0.3);@media screen and (max-width:1024px){font-size:1.5em;}"]),W=l.b.p.withConfig({displayName:"id__SectionSubHeading",componentId:"sc-1ae1eyk-11"})(["font-size:1.3em;margin:0 25px 0 0;padding:15px;font-weight:700;text-shadow:2px 4px 5px hsla(237,80%,35%,0.3);"]),A=l.b.div.withConfig({displayName:"id__SectionContent",componentId:"sc-1ae1eyk-12"})(["font-size:1.2em;margin:0 0px 0 0;padding:0 15px 50px 25px;line-height:1.8;color:rgba(255,255,255,0.9);text-shadow:1px 4px 10px rgba(0,0,0,0.25);font-weight:",";"],(function(e){return e.bold?700:"normal"})),_=l.b.div.withConfig({displayName:"id__SpeakerSummary",componentId:"sc-1ae1eyk-13"})(["padding:15px 30px 30px 30px;background:hsl(239,50%,25%);height:40px;line-height:1.8;font-size:0.78em;display:flex;flex-direction:column;justify-content:flex-end;p{color:rgba(255,255,255,0.5);margin:0;margin-bottom:5px;font-weight:normal;font-size:1.4em;padding:0;}@media (max-width:1280px){padding:15px 25px;height:50px;line-height:1.6;}color:rgba(255,255,255,0.8);"])}},[["aUtX",0,2,4,5,1,3,6]]]);