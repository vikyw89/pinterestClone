(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4507)}])},3263:function(e,s,t){"use strict";t.d(s,{T:function(){return m}});var n=t(5893),r=t(1163),l=t(7294),a=t(554);let i=()=>{let e=(0,r.useRouter)(),s=(0,a.ay)("route"),t=(0,a.ay)("signIn"),i=(0,a.ay)("signOut"),o=(0,a.ay)("auth"),c=(0,a.ay)("boards"),d=(0,a.ay)("pin"),u=(0,a.ay)("initialize"),x=(0,a.ay)("downloadPins"),h=(0,a.ay)("users");return(0,l.useEffect)(()=>{let s=()=>{(0,a.cA)("route.loading",!0)},t=()=>{(0,a.cA)("route.loading",!1)};return e.events.on("routeChangeStart",s),e.events.on("routeChangeComplete",t),()=>{e.events.off("routeChangeStart",s),e.events.off("routeChangeComplete",t)}},[e]),(0,n.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(s.loading||t.loading||i.loading||o.loading||c.loading||d.loading||u.loading||x.loading||h.loading)&&(0,n.jsx)("progress",{className:"progress progress-accent"})})};var o=t(9557),c=t(5675),d=t.n(c),u=t(8201);let x=()=>{var e,s,t;let l=(0,a.C0)("theme"),i=(0,a.ay)("auth"),c=(0,r.useRouter)(),x=null==i?void 0:null===(e=i.data)||void 0===e?void 0:null===(s=e.user)||void 0===s?void 0:null===(t=s.user_metadata)||void 0===t?void 0:t.avatar_url,h=()=>{(0,a.cA)("show.signInComponent",!0)},m=()=>{(0,a.Gt)("signOut",async()=>{let{error:e}=await o.O.auth.signOut();return e})},g=()=>{c.push("/")},p=()=>{c.push("/createPin")},f=async e=>{let s=e.target.textContent;await (0,a.JX)("users",async()=>{let e=await o.O.from("users").update({theme:s}).eq("uuid",i.data.user.id).select();return(0,a.zT)("users.data.theme",s),e.data[0]})};return(0,n.jsxs)("div",{className:"flex bg-base-300 z-20 items-center text-base-content",children:[(0,n.jsxs)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,n.jsxs)("div",{onClick:g,className:"px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,n.jsx)("div",{className:"w-12",children:(0,n.jsx)(d(),{alt:"pinterest logo",src:"/p-logo-lowres.png",width:"0",height:"0",loading:"lazy",sizes:"100vw",className:"w-auto h-auto"})}),(0,n.jsx)("a",{className:"text-lg font-bold",children:"Pinterest"})]}),i.data&&(0,n.jsx)("a",{className:"btn btn-ghost rounded-btn",onClick:p,children:"Create"})]}),(0,n.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[(0,n.jsxs)("div",{className:"flex",children:[i.data?(0,n.jsx)("a",{className:"btn btn-ghost rounded-btn p-2",onClick:m,children:"Sign Out"}):(0,n.jsx)("a",{className:"btn btn-ghost rounded-btn p-2",onClick:h,children:"Sign In"}),(0,n.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,n.jsx)("label",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:"Theme"}),(0,n.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-base-200 text-base-content",children:l.map((e,s)=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:f,children:e})},s))})]})]}),(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsx)("div",{className:"w-8 rounded-full flex items-center",children:x?(0,n.jsx)(d(),{src:x,alt:"avatar",width:"0",height:"0",className:"w-auto h-auto",id:"pinImageURL"}):(0,n.jsx)(u.Z,{className:"text-3xl"})})})]})]})},h=()=>{let e=(0,a.ay)("auth"),s=(0,a.ay)("boards"),t=(0,a.ay)("pin"),r=(0,a.ay)("initialize");return(0,n.jsxs)("div",{className:"fixed bottom-0 left-0",children:[e.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:e.error.message})]})}),s.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:s.error.message})]})}),t.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:t.error.message})]})}),r.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:r.error.message})]})})]})},m=e=>{let{children:s}=e;return(0,n.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,n.jsx)(x,{}),(0,n.jsx)(i,{}),(0,n.jsx)("main",{className:"flex-1",children:s}),(0,n.jsx)(h,{})]})}},4507:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return p}});var n=t(5893),r=t(3263),l=t(7294),a=t(554),i=t(9557),o=t(8201),c=t(5675),d=t.n(c);let u=e=>{let{props:s}=e,t=(0,l.useId)(),[r,i]=(0,l.useState)(),c=(0,a.C0)("fetchedPins"),[x,h]=(0,l.useState)();return(0,l.useEffect)(()=>{(0,a.zT)("index",e=>(h(+e),+e+1))},[]),(0,l.useEffect)(()=>{!(c.length<x)&&(r||i(c[x]))},[c,x,r]),(0,l.useEffect)(()=>{let e=document.querySelector("#".concat(CSS.escape(t))),r=new IntersectionObserver(t=>{t.forEach(t=>{let l=t.isIntersecting;l&&(s.setPinsToDisplay(e=>[...e,(0,n.jsx)(u,{props:{setPinsToDisplay:s.setPinsToDisplay}},e.length)]),r.unobserve(e))})},{root:null,rootMargin:"1000px",threshold:0});return r.observe(e),()=>{r.unobserve(e)}},[t,s]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{id:t,className:"flex flex-col relative gap-1",children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d(),{src:r.image_url,alt:"pinImage",width:0,height:0,sizes:"100vw",placeholder:"blur",blurDataURL:"p-logo-lowres.png",className:"w-auto h-auto rounded-3xl bg-neutral"}),(0,n.jsx)("div",{className:"pl-3 pr-3 font-bold overflow-clip",children:r.title}),(0,n.jsxs)("div",{className:"flex max-w-full items-center gap-2 pl-3 pr-3",children:[(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsx)("div",{className:"w-8 rounded-full flex items-center",children:r.users.profile_picture_url?(0,n.jsx)(d(),{src:r.users.profile_picture_url,alt:"avatar",width:"0",height:"0",className:"w-full aspect-square",id:"profilePicture"}):(0,n.jsx)(o.Z,{className:"w-full aspect-square"})})}),(0,n.jsx)("div",{children:r.users.username})]})]})})})},x=()=>{let[e,s]=(0,l.useState)([]);return(0,l.useEffect)(()=>{s([(0,n.jsx)(u,{props:{setPinsToDisplay:s}},0)])},[]),(0,n.jsx)("div",{className:"h-max flex flex-col gap-5 w-72",children:e})};(0,a.zT)("queue",[]),(0,a.zT)("index",0),(0,a.zT)("fetchedPins",[]);let h=()=>{let[e,s]=(0,l.useState)(),t=(0,a.C0)("fetchedPins"),o=(0,a.C0)("index"),[c,d]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=window.screen.width,t=Math.floor(e/300),r=[];for(let e=0;e<t;e++)r.push((0,n.jsx)(x,{className:"max-w-xs"},e));s(r);let l=e=>{let t=[],r=e?e.target.innerWidth:window.screen.width,l=Math.floor(r/300);for(let e=0;e<l;e++)t.push((0,n.jsx)(x,{},e));s(t)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),(0,l.useEffect)(()=>{let e=t.length<=o+50;e&&(c&&(0,a.zT)("fetchedPins",e=>[...e,...e]),(0,a.JX)("downloadPins",async()=>{let e=t.length,s=await i.O.from("pins").select("*,\n        users(*)").order("inserted_at",{ascending:!1}).range(e,e+50);return 0===s.data.length?d(!0):(0,a.zT)("fetchedPins",e=>[...e,...s.data]),s.data}))}),(0,n.jsx)(r.T,{children:(0,n.jsx)("div",{className:"flex gap-5 justify-center p-5 overflow-y-scroll h-screen",children:0!==t.length&&e&&e.map(e=>e)})})},m=e=>{let{children:s}=e,t=e=>{"blurredBackground"===e.target.id&&(0,a.cA)("show.signInComponent",!1)};return(0,n.jsx)("div",{id:"blurredBackground",className:"z-50 bg-base-300 text-base-content bg-opacity-20 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center",onClick:t,children:(0,n.jsx)("div",{className:"flex flex-col items-center justify-start p-10 max-w-sm rounded-box bg-neutral text-neutral-content",children:s})})},g=()=>{let e=()=>{},s=()=>{},t=e=>{e.currentTarget.classList.add("loading"),e.currentTarget.classList.add("disabled"),(0,a.Gt)("signIn",async()=>{let e=await i.O.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.href}});return e})};return(0,n.jsxs)(m,{children:[(0,n.jsx)(d(),{alt:"pinterest logo",src:"./p-logo-lowres.png",width:"100",height:"100"}),(0,n.jsx)("p",{className:"font-extrabold text-center",children:"Welcome to Pinterest"}),(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)("label",{htmlFor:"email",className:"pl-4",children:"Email"}),(0,n.jsx)("input",{type:"email",placeholder:"Email",className:"input input-bordered w-full max-w-xs bg-opacity-20 placeholder-neutral-content"}),(0,n.jsx)("label",{htmlFor:"password",className:"pl-4 ",children:"Password"}),(0,n.jsx)("input",{type:"password",placeholder:"Password",className:"input input-bordered w-full max-w-xs bg-opacity-20  placeholder-neutral-content"}),(0,n.jsx)("a",{className:"font-bold text-sm text-center",children:"Forgot your password?"}),(0,n.jsx)("button",{className:"btn w-full btn-primary text-primary-content",onClick:s,children:"Log in"}),(0,n.jsx)("p",{className:"text-center",children:"OR"}),(0,n.jsxs)("button",{className:"btn flex bg-transparent border-accent rounded-box items-center gap-2",onClick:t,children:[(0,n.jsx)(d(),{alt:"google logo",height:"30",width:"30",src:"./Google__G__Logo.svg",style:{aspectRatio:"1"}}),(0,n.jsx)("p",{className:"text-neutral-content",children:"Continue with Google"})]}),(0,n.jsx)("p",{className:"text-center text-xs",children:"By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our Privacy Policy Notice at collection."}),(0,n.jsx)("div",{className:"divider m-0"}),(0,n.jsx)("div",{className:"text-xs text-center",children:(0,n.jsxs)("p",{children:["Not on Pinterest yet?"," ",(0,n.jsx)("a",{className:"underline cursor-pointer font-bold",onClick:e,children:"Sign up!"})]})})]})]})};function p(){let e=(0,a.ay)("auth"),s=(0,a.C0)("show.signInComponent");return(0,n.jsxs)(r.T,{children:[!e.data&&s&&(0,n.jsx)(g,{}),(0,n.jsx)(h,{})]})}(0,a.zT)("show.signInComponent",!0)}},function(e){e.O(0,[846,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);