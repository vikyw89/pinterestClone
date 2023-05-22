"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{1243:function(e,t,s){s.d(t,{T:function(){return N}});var r=s(5893),n=s(1163),a=s(7294),l=s(664);let i=()=>{let e=(0,n.useRouter)(),t=(0,l.m)("route/loading"),s=(0,l.m)("loadingCounter");return(0,a.useEffect)(()=>{let t=()=>{(0,l._)("route/loading",!0)},s=()=>{(0,l._)("route/loading",!1)};return e.events.on("routeChangeStart",t),e.events.on("routeChangeComplete",s),()=>{e.events.off("routeChangeStart",t),e.events.off("routeChangeComplete",s)}},[e]),(0,r.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(t||s>0)&&(0,r.jsx)("progress",{className:"progress progress-accent"})})};var o=s(9744);let d=()=>{let e=(0,l.m)("theme");return(0,a.useEffect)(()=>{(0,l._)("theme",["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"].sort((e,t)=>e>t?1:-1))},[]),e};var u=s(7997),c=s(9557),h=s(8201),m=s(6540),p=s(5328),x=s(9485),v=s(3540),f=s(5675),g=s.n(f),b=s(4334);let j=()=>{var e,t,s,a,i,f;let j=null!==(f=d())&&void 0!==f?f:[],w=(0,o.a)(),N=(0,u.a)(),y=(0,n.useRouter)(),k=(0,b.Z)("api/auth",async()=>{let{error:e}=await c.O.auth.signOut();return e}),C=(0,b.Z)((null==w?void 0:null===(e=w.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.id)&&"api/user/".concat(w.data.user.id),async(e,t)=>{let{arg:s}=t;await c.O.from("users").update({theme:s}).eq("uuid",w.data.user.id).throwOnError()}),_=null==w?void 0:null===(s=w.data)||void 0===s?void 0:null===(a=s.user)||void 0===a?void 0:null===(i=a.user_metadata)||void 0===i?void 0:i.avatar_url,S=()=>{(0,l._)("show/signInComponent",!0)},E=()=>{k.trigger()},O=()=>{y.push("/")},I=()=>{y.push("/createPin")},R=e=>{let t=e.target.textContent,s={optimisticData:{...N.data,theme:t}};C.trigger(t,s)},z=()=>{y.push("/profile")};return(0,r.jsxs)("div",{className:"flex bg-neutral z-20 items-center text-neutral-content",children:[(0,r.jsx)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:(0,r.jsxs)("div",{onClick:O,className:"lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,r.jsx)("div",{className:"w-12",children:(0,r.jsx)(g(),{alt:"pinterest logo",src:"https://hffebrjtrzopihuffrxv.supabase.co/storage/v1/object/public/assets/p-logo-lowres.png",width:"0",priority:!0,height:"0",sizes:"100vw",className:"w-auto"})}),(0,r.jsx)("a",{className:"text-lg font-bold hidden sm:block",children:"Pinterest"})]})}),(0,r.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[w.data&&(0,r.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:I,children:[(0,r.jsx)("a",{className:"hidden sm:block",children:"Create"}),(0,r.jsx)("div",{className:" sm:hidden",children:(0,r.jsx)(m.Z,{})})]}),(0,r.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,r.jsxs)("button",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:[(0,r.jsx)("label",{className:"hidden sm:block",children:"Theme"}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsx)(p.Z,{})})]}),(0,r.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-neutral",children:j&&j.map((e,t)=>(0,r.jsx)("li",{className:"text-neutral-content bg-neutral",children:(0,r.jsx)("a",{onClick:R,children:e})},t))})]}),w.data?(0,r.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:E,children:[(0,r.jsx)("a",{className:"hidden sm:block",children:"Sign Out"}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsx)(v.Z,{})})]}):(0,r.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:S,children:[(0,r.jsx)("a",{className:"hidden sm:block",children:"Sign In"}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsx)(x.Z,{})})]}),(0,r.jsx)("button",{className:"btn btn-ghost rounded-btn",onClick:z,children:(0,r.jsx)("div",{className:"avatar aspect-square",children:(0,r.jsx)("div",{className:"w-8 rounded-full flex items-center",children:_?(0,r.jsx)(g(),{src:_,alt:"avatar",width:"0",height:"0",className:"w-auto h-auto",id:"user_avatar"}):(0,r.jsx)(h.Z,{className:"text-3xl"})})})})]})]})},w=()=>{let e=(0,l.m)("error");return(0,r.jsx)("div",{className:"fixed bottom-0 left-0",children:e&&(0,r.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,r.jsx)("span",{children:e.message})]})})})},N=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,r.jsx)(j,{}),(0,r.jsx)(i,{}),(0,r.jsx)("main",{className:"flex-1 overflow-y-auto flex flex-col",children:t}),(0,r.jsx)(w,{})]})}},6833:function(e,t,s){let r;s.d(t,{G:function(){return b}});var n=s(5893),a=s(7294),l=s(9744),i=s(7997),o=s(9557),d=s(8201),u=s(5675),c=s.n(u),h=s(1163);let m=new Map,p=new WeakMap,x=0;var v=s(5591);let f=e=>{var t;let{props:s}=e,{index:u,feeds:f,setPinsToDisplay:g,refetchFn:b,infinite:j}=s,{data:w}=(0,l.a)();(0,a.useEffect)(()=>(u.current++,()=>{u.current--}),[u]);let N=null==f?void 0:f.length,[y,k]=(0,a.useState)();(0,a.useEffect)(()=>{k(u.current)},[]);let C=null==f?void 0:f[y],_=(0,h.useRouter)(),[S,E]=(0,a.useState)(!1),{entry:O,ref:I}=function({threshold:e,delay:t,trackVisibility:s,rootMargin:n,root:l,triggerOnce:i,skip:o,initialInView:d,fallbackInView:u,onChange:c}={}){var h;let[v,f]=a.useState(null),g=a.useRef(),[b,j]=a.useState({inView:!!d,entry:void 0});g.current=c,a.useEffect(()=>{let a;if(!o&&v)return a=function(e,t,s={},n=r){if(void 0===window.IntersectionObserver&&void 0!==n){let r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof s.threshold?s.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:a,observer:l,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var s;return`${t}_${"root"===t?(s=e.root)?(p.has(s)||(x+=1,p.set(s,x.toString())),p.get(s)):"0":e[t]}`}).toString(),s=m.get(t);if(!s){let r;let n=new Map,a=new IntersectionObserver(t=>{t.forEach(t=>{var s;let a=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(s=n.get(t.target))||s.forEach(e=>{e(a,t)})})},e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:t,observer:a,elements:n},m.set(t,s)}return s}(s),o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(t),l.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(i.delete(e),l.unobserve(e)),0===i.size&&(l.disconnect(),m.delete(a))}}(v,(e,t)=>{j({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&i&&a&&(a(),a=void 0)},{root:l,rootMargin:n,threshold:e,trackVisibility:s,delay:t},u),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,v,l,n,i,o,s,u,t]);let w=null==(h=b.entry)?void 0:h.target,N=a.useRef();v||!w||i||o||N.current===w||(N.current=w,j({inView:!!d,entry:void 0}));let y=[f,b.inView,b.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({skip:S});(0,a.useEffect)(()=>{(null==O?void 0:O.isIntersecting)&&(g(e=>[...e,"dummy"]),E(!0))},[null==O?void 0:O.isIntersecting,g]),(0,a.useEffect)(()=>{y&&N<=y+10&&(j?b():E(!0))},[y,N,j,b]);let R=(0,i.a)(),z=null==R?void 0:null===(t=R.data)||void 0===t?void 0:t.boards,[L,q]=(0,a.useState)(null==z?void 0:z[0]),[P,Z]=(0,a.useState)(!0),[V,M]=(0,a.useState)(!1),W=e=>{e.stopPropagation();let t=JSON.parse(e.target.value);q(t)},A=()=>{_.push("/pin/".concat(C.uuid))},J=e=>{e.classList.remove("animate-pulse"),e.removeEventListener("onLoadingComplete",J)},B=async e=>{e.stopPropagation(),e.target.classList.add("loading"),(0,v.JG)("api/feeds",async()=>{let e=null==C?void 0:C.uuid,t=null==L?void 0:L.uuid;await o.O.rpc("save_pin",{board_uuid:t,pin_uuid:e}).throwOnError(),Z(!0),M(!0)},{populateCache:(e,t)=>t,revalidate:!1})},G=e=>{e.stopPropagation(),e.target.classList.add("loading"),(0,v.JG)("api/feeds",async()=>{let e=null==C?void 0:C.uuid,t=null==L?void 0:L.uuid;await o.O.from("boards_pins").delete().eq("pin_uuid",e).eq("board_uuid",t),Z(!1),M(!0)},{populateCache:(e,t)=>t,revalidate:!1})},D=e=>{e.stopPropagation(),(null==C?void 0:C.uuid)&&L&&!V&&Z(L.boards_pins.filter(e=>e.pin_uuid===C.uuid))};return(0,n.jsxs)("div",{className:"flex flex-col relative gap-1 hover:cursor-zoom-in",onClick:A,ref:I,children:[C&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-72 h-auto relative",children:[(0,n.jsx)(c(),{src:C.image_url,alt:"pinImage",width:300,height:300,sizes:"300px",priority:!0,placeholder:"blur",blurDataURL:C.loading_image_url,className:"h-auto w-full rounded-3xl bg-neutral animate-pulse",onLoadingComplete:J}),w&&(0,n.jsxs)("div",{className:"absolute p-2 top-0 right-0 left-0 bottom-0 z-50 opacity-0 hover:opacity-100  hover:backdrop-brightness-50 flex justify-between",onPointerEnter:D,children:[(0,n.jsx)("select",{className:"select max-w-xs bg-neutral text-neutral-content",onChange:W,children:z&&z.map((e,t)=>(0,n.jsx)("option",{value:JSON.stringify(e),children:e.title},t))}),(0,n.jsxs)("div",{children:[!P&&(0,n.jsx)("button",{className:"btn btn-primary",onClick:B,children:"Save"}),P&&(0,n.jsx)("button",{className:"btn btn-primary",onClick:G,children:"Saved"})]})]})]}),(0,n.jsx)("div",{className:"pl-3 pr-3 font-bold overflow-clip",children:C.title}),(0,n.jsxs)("div",{className:"flex max-w-full items-center gap-2 pl-3 pr-3",children:[(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsx)("div",{className:"w-8 rounded-full flex items-center",children:C.users.profile_picture_url?(0,n.jsx)(c(),{src:C.users.profile_picture_url,alt:"avatar",width:"0",height:"0",className:"w-full aspect-square",id:"profilePicture"}):(0,n.jsx)(d.Z,{className:"w-full aspect-square"})})}),(0,n.jsx)("div",{children:C.users.username})]})]}),!C&&(0,n.jsx)("div",{className:"aspect-square w-full animate-ping"})]})},g=e=>{let{props:t}=e,[s,r]=(0,a.useState)(["dummy"]);return(0,n.jsx)("div",{className:"h-max flex flex-col gap-5 w-72 overflow-hidden",children:s&&s.map((e,s)=>(0,n.jsx)(f,{props:{...t,setPinsToDisplay:r}},s))})},b=e=>{let{props:t}=e,{feeds:s}=t,r=(0,a.useRef)(-1),[l,i]=(0,a.useState)(["dummy"]);return(0,a.useEffect)(()=>{let e=e=>{let t=[],s=e?e.target.innerWidth:window.innerWidth,r=Math.floor(s/300);for(let e=0;e<r;e++)t.push("dummy");i(t)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,a.useEffect)(()=>{let e=window.innerWidth,t=Math.floor(e/300),s=[];for(let e=0;e<t;e++)s.push("dummy");i(s)},[]),(0,n.jsx)("div",{children:s&&(0,n.jsx)("div",{className:"flex gap-5 justify-center p-5",children:0!==s.length&&l&&l.map((e,s)=>(0,n.jsx)(g,{props:{...t,index:r}},s))})})}}}]);