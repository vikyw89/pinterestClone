(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1969:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return s(7536)}])},1243:function(e,t,s){"use strict";s.d(t,{T:function(){return w}});var a=s(5893),r=s(1163),n=s(7294),l=s(664);let i=()=>{let e=(0,r.useRouter)(),t=(0,l.m)("route/loading"),s=(0,l.m)("loadingCounter");return(0,n.useEffect)(()=>{let t=()=>{(0,l._)("route/loading",!0)},s=()=>{(0,l._)("route/loading",!1)};return e.events.on("routeChangeStart",t),e.events.on("routeChangeComplete",s),()=>{e.events.off("routeChangeStart",t),e.events.off("routeChangeComplete",s)}},[e]),(0,a.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(t||s>0)&&(0,a.jsx)("progress",{className:"progress progress-accent"})})};var o=s(9744);let d=()=>{let e=(0,l.m)("theme");return(0,n.useEffect)(()=>{(0,l._)("theme",["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"].sort((e,t)=>e>t?1:-1))},[]),e};var c=s(7997),u=s(9557),x=s(8201),m=s(6540),h=s(5328),p=s(9485),f=s(3540),v=s(5675),b=s.n(v),j=s(4334);let g=()=>{var e,t,s,n,i,v;let g=null!==(v=d())&&void 0!==v?v:[],N=(0,o.a)(),w=(0,c.a)(),y=(0,r.useRouter)(),k=(0,j.Z)("api/auth",async()=>{let{error:e}=await u.O.auth.signOut();return e}),_=(0,j.Z)((null==N?void 0:null===(e=N.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.id)&&"api/user/".concat(N.data.user.id),async(e,t)=>{let{arg:s}=t;await u.O.from("users").update({theme:s}).eq("uuid",N.data.user.id).throwOnError()}),C=null==N?void 0:null===(s=N.data)||void 0===s?void 0:null===(n=s.user)||void 0===n?void 0:null===(i=n.user_metadata)||void 0===i?void 0:i.avatar_url,E=()=>{(0,l._)("show/signInComponent",!0)},U=()=>{k.trigger()},S=()=>{y.push("/")},T=()=>{y.push("/createPin")},I=e=>{let t=e.target.textContent,s={optimisticData:{...w.data,theme:t}};_.trigger(t,s)},P=()=>{y.push("/profile")};return(0,a.jsxs)("div",{className:"flex bg-neutral z-20 items-center text-neutral-content",children:[(0,a.jsx)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:(0,a.jsxs)("div",{onClick:S,className:"lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,a.jsx)("div",{className:"w-12",children:(0,a.jsx)(b(),{alt:"pinterest logo",src:"https://hffebrjtrzopihuffrxv.supabase.co/storage/v1/object/public/assets/p-logo-lowres.png",width:"0",priority:!0,height:"0",sizes:"100vw",className:"w-auto"})}),(0,a.jsx)("a",{className:"text-lg font-bold hidden sm:block",children:"Pinterest"})]})}),(0,a.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[N.data&&(0,a.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:T,children:[(0,a.jsx)("a",{className:"hidden sm:block",children:"Create"}),(0,a.jsx)("div",{className:" sm:hidden",children:(0,a.jsx)(m.Z,{})})]}),(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsxs)("button",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:[(0,a.jsx)("label",{className:"hidden sm:block",children:"Theme"}),(0,a.jsx)("div",{className:"sm:hidden",children:(0,a.jsx)(h.Z,{})})]}),(0,a.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-neutral",children:g&&g.map((e,t)=>(0,a.jsx)("li",{className:"text-neutral-content bg-neutral",children:(0,a.jsx)("a",{onClick:I,children:e})},t))})]}),N.data?(0,a.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:U,children:[(0,a.jsx)("a",{className:"hidden sm:block",children:"Sign Out"}),(0,a.jsx)("div",{className:"sm:hidden",children:(0,a.jsx)(f.Z,{})})]}):(0,a.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:E,children:[(0,a.jsx)("a",{className:"hidden sm:block",children:"Sign In"}),(0,a.jsx)("div",{className:"sm:hidden",children:(0,a.jsx)(p.Z,{})})]}),(0,a.jsx)("button",{className:"btn btn-ghost rounded-btn",onClick:P,children:(0,a.jsx)("div",{className:"avatar aspect-square",children:(0,a.jsx)("div",{className:"w-8 rounded-full flex items-center",children:C?(0,a.jsx)(b(),{src:C,alt:"avatar",width:"0",height:"0",className:"w-auto h-auto",id:"user_avatar"}):(0,a.jsx)(x.Z,{className:"text-3xl"})})})})]})]})},N=()=>{let e=(0,l.m)("error");return(0,a.jsx)("div",{className:"fixed bottom-0 left-0",children:e&&(0,a.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:e.message})]})})})},w=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,a.jsx)(g,{}),(0,a.jsx)(i,{}),(0,a.jsx)("main",{className:"flex-1 overflow-y-auto flex flex-col",children:t}),(0,a.jsx)(N,{})]})}},7536:function(e,t,s){"use strict";let a;s.r(t),s.d(t,{default:function(){return k}});var r=s(5893),n=s(1243),l=s(664);let i=()=>(0,r.jsx)("div",{children:"Work in Progress"});var o=s(7997);let d="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var c={randomUUID:d};let u=new Uint8Array(16);function x(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(u)}let m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).slice(1));var h=function(e,t,s){if(c.randomUUID&&!t&&!e)return c.randomUUID();e=e||{};let a=e.random||(e.rng||x)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){s=s||0;for(let e=0;e<16;++e)t[s+e]=a[e];return t}return function(e,t=0){return(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase()}(a)},p=s(5675),f=s.n(p),v=s(1163);let b=e=>{let{props:t}=e,s=(0,v.useRouter)(),a=t.boards_pins,n=[...a.slice(-4)],l=()=>{let e=t.uuid;s.push("/profile/".concat(e))};return(0,r.jsxs)("div",{className:"flex flex-col justify-center gap-2 text-base-content hover:animate-pulse hover:cursor-pointer",onClick:l,children:[(0,r.jsx)("div",{className:"w-72 aspect-square bg-neutral-focus rounded-box",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridAutoRows:"1fr"},children:n&&n.map(e=>(0,r.jsx)("div",{className:"relative aspect-square",children:(0,r.jsx)(f(),{fill:!0,placeholder:"blur",alt:e.pins.image_url,blurDataURL:e.pins.loading_image_url,src:e.pins.image_url,className:"aspect-square object-cover rounded-box"})},h()))}),(0,r.jsx)("div",{className:"text-center font-bold",style:{gridColumn:"1 / -1"},children:t.title})]})},j=()=>{var e;let t;let s=(0,o.a)(),a=null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.boards;return a&&(t=a.reduce((e,t)=>(e||(e=t),e={...e,boards_pins:[...e.boards_pins,...t.boards_pins],title:"All Pins",uuid:"pins"}),void 0)),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2 justify-center flex-1 p-2",children:[t&&(0,r.jsx)(b,{props:t},h()),a&&a.map(e=>(0,r.jsx)(b,{props:e},e.uuid))]})},g=[{index:1,key:"Created",content:(0,r.jsx)(i,{},1)},{index:2,key:"Saved",content:(0,r.jsx)(j,{},2)}];(0,l._)("activeTab","Saved");let N=()=>{let e=(0,l.m)("activeTab"),t=e=>{e.stopPropagation();let t=e.target.textContent;(0,l._)("activeTab",t)};return(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"tabs",children:g.map(s=>s.key===e?(0,r.jsx)("a",{onClick:t,className:"tab tab-bordered tab-active font-extrabold",children:s.key},s.index):(0,r.jsx)("a",{onClick:t,className:"tab tab-bordered",children:s.key},s.index))}),(0,r.jsx)("div",{className:"flex flex-1 w-full",children:g.map(t=>{if(t.key===e)return t.content})})]})};var w=s(9744);let y=()=>{var e,t;let s=(0,w.a)(),a=(0,o.a)(),n=null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.users_followers,l=null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.username,i=s.data.user.user_metadata.avatar_url;return(0,r.jsx)("div",{className:"flex justify-center p-10",children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,r.jsx)("div",{className:"max-w-[120px]",children:(0,r.jsx)(f(),{src:i,alt:i,priority:!0,width:300,height:300,className:"rounded-full aspect-square w-screen border-4 border-dotted border-secondary"})}),l&&(0,r.jsx)("div",{className:"font-bold text-2xl",children:l}),n&&(0,r.jsxs)("div",{className:"font-bold",children:[n.length," following"]}),(0,r.jsxs)("div",{className:"flex gap-5",children:[(0,r.jsx)("button",{className:"btn btn-primary rounded-btn",children:"Share"}),(0,r.jsx)("button",{className:"btn btn-primary rounded-btn",children:"Edit Profile"})]})]})})};function k(){let e=(0,w.a)();return(0,r.jsx)(n.T,{children:(0,r.jsxs)("div",{className:"flex  flex-col justify-center",children:[e.data&&(0,r.jsx)(y,{}),e.data&&(0,r.jsx)(N,{})]})})}}},function(e){e.O(0,[576,774,888,179],function(){return e(e.s=1969)}),_N_E=e.O()}]);