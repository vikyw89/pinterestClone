(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{4970:function(e,t,r){"use strict";var a=r(4836);t.Z=void 0;var s=a(r(4938)),n=r(5893),l=(0,s.default)((0,n.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.Z=l},9369:function(e,t,r){"use strict";var a=r(4836);t.Z=void 0;var s=a(r(4938)),n=r(5893),l=(0,s.default)((0,n.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=l},8684:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createPin",function(){return r(3328)}])},3263:function(e,t,r){"use strict";r.d(t,{T:function(){return m}});var a=r(5893),s=r(1163),n=r(7294),l=r(554);let i=()=>{let e=(0,s.useRouter)(),t=(0,l.ay)("route"),r=(0,l.ay)("signIn"),i=(0,l.ay)("signOut"),o=(0,l.ay)("auth"),d=(0,l.ay)("boards"),c=(0,l.ay)("pin"),u=(0,l.ay)("initialize"),x=(0,l.ay)("downloadPins"),h=(0,l.ay)("users");return(0,n.useEffect)(()=>{let t=()=>{(0,l.cA)("route.loading",!0)},r=()=>{(0,l.cA)("route.loading",!1)};return e.events.on("routeChangeStart",t),e.events.on("routeChangeComplete",r),()=>{e.events.off("routeChangeStart",t),e.events.off("routeChangeComplete",r)}},[e]),(0,a.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(t.loading||r.loading||i.loading||o.loading||d.loading||c.loading||u.loading||x.loading||h.loading)&&(0,a.jsx)("progress",{className:"progress progress-accent"})})};var o=r(9557),d=r(5675),c=r.n(d),u=r(8201);let x=()=>{var e,t,r;let n=(0,l.C0)("theme"),i=(0,l.ay)("auth"),d=(0,s.useRouter)(),x=null==i?void 0:null===(e=i.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:null===(r=t.user_metadata)||void 0===r?void 0:r.avatar_url,h=()=>{(0,l.cA)("show.signInComponent",!0)},m=()=>{(0,l.Gt)("signOut",async()=>{let{error:e}=await o.O.auth.signOut();return e})},p=()=>{d.push("/")},g=()=>{d.push("/createPin")},f=async e=>{let t=e.target.textContent;await (0,l.JX)("users",async()=>{let e=await o.O.from("users").update({theme:t}).eq("uuid",i.data.user.id).select();return(0,l.zT)("users.data.theme",t),e.data[0]})};return(0,a.jsxs)("div",{className:"flex bg-base-300 z-20 items-center text-base-content",children:[(0,a.jsxs)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,a.jsxs)("div",{onClick:p,className:"px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,a.jsx)("div",{className:"w-12",children:(0,a.jsx)(c(),{alt:"pinterest logo",src:"p-logo-lowres.png",width:"0",height:"0",loading:"lazy",sizes:"100vw",className:"w-auto h-auto"})}),(0,a.jsx)("a",{className:"text-lg font-bold",children:"Pinterest"})]}),i&&(0,a.jsx)("a",{className:"btn btn-ghost rounded-btn",onClick:g,children:"Create"})]}),(0,a.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[(0,a.jsxs)("div",{className:"flex",children:[i?(0,a.jsx)("a",{className:"btn btn-ghost rounded-btn p-2",onClick:m,children:"Sign Out"}):(0,a.jsx)("a",{className:"btn btn-ghost rounded-btn p-2",onClick:h,children:"Sign In"}),(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsx)("label",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:"Theme"}),(0,a.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-base-200 text-base-content",children:n.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{onClick:f,children:e})},t))})]})]}),(0,a.jsx)("div",{className:"avatar aspect-square",children:(0,a.jsxs)("div",{className:"w-8 rounded-full flex items-center",children:[x&&(0,a.jsx)(c(),{src:x,alt:"avatar",width:"0",height:"0",className:"w-full h-auto",id:"pinImageURL"}),(0,a.jsx)(u.Z,{className:"text-3xl"})]})})]})]})},h=()=>{let e=(0,l.ay)("auth"),t=(0,l.ay)("boards"),r=(0,l.ay)("pin"),s=(0,l.ay)("initialize");return(0,a.jsxs)("div",{className:"fixed bottom-0 left-0",children:[e.error&&(0,a.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:e.error.message})]})}),t.error&&(0,a.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:t.error.message})]})}),r.error&&(0,a.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:r.error.message})]})}),s.error&&(0,a.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,a.jsx)("span",{children:s.error.message})]})})]})},m=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,a.jsx)(x,{}),(0,a.jsx)(i,{}),(0,a.jsx)("main",{className:"flex-1",children:t}),(0,a.jsx)(h,{})]})}},3328:function(e,t,r){"use strict";let a;r.r(t),r.d(t,{default:function(){return b}});var s=r(5893),n=r(3263),l=r(9369),i=r(5675),o=r.n(i),d=r(7294),c=r(4970),u=r(9557),x=r(554);let h="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var m={randomUUID:h};let p=new Uint8Array(16);function g(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(p)}let f=[];for(let e=0;e<256;++e)f.push((e+256).toString(16).slice(1));var v=function(e,t,r){if(m.randomUUID&&!t&&!e)return m.randomUUID();e=e||{};let a=e.random||(e.rng||g)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=a[e];return t}return function(e,t=0){return(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase()}(a)};let j={title:"",description:"",link_url:"",image_url:"",creator_uuid:""},w=()=>{let e=(0,x.ay)("auth",{initialState:{loading:!0}}),t=(0,x.ay)("boards"),[r,a]=(0,d.useState)(j),[i,h]=(0,d.useState)("");(0,d.useEffect)(()=>{e.data&&(0,x.JX)("boards",async()=>{let t=await u.O.from("boards").select().filter("creator_uuid","eq",e.data.user.id).throwOnError();return t.data})},[e.data]),(0,d.useEffect)(()=>{var e;t.data&&h(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e[0])},[t.data]);let m=e=>{e.stopPropagation();let t=URL.createObjectURL(e.target.files[0]);a(e=>({...e,image_url:t}))},p=e=>{let t={pinTitle:"title",pinDescription:"description",pinLink:"link_url",pinImageURL:"image_url"}[e.target.id],r=e.target.value;a(e=>({...e,[t]:r}))},g=()=>{a(e=>({...e,image_url:j.image_url}))},f=e=>{h(JSON.parse(e.target.value))},w=async()=>{await (0,x.Gt)("pin",async()=>{let t=await fetch(r.image_url),a=await t.blob(),s="pins/".concat(e.data.user.id,"/").concat(v()),n=await u.O.storage.from("pins").upload(s,a);n.error&&((0,x.zT)("pin.error",n.error),setTimeout(()=>{(0,x.zT)("pin.error",!1)},1e4));let l=u.O.storage.from("pins").getPublicUrl(s).data.publicUrl,o={title:r.title,description:r.description,link_url:r.link_url,creator_uuid:e.data.user.id,board_uuid:i.uuid,image_url:l},d=await u.O.rpc("create_pin",o);return d}),a(j)};return(0,s.jsx)(n.T,{children:(0,s.jsx)("div",{className:"flex flex-1 items-center justify-center h-full",children:(0,s.jsx)("div",{className:"self-center flex items-center justify-center p-10 max-w-5xl rounded-box bg-neutral text-neutral-content w-full",children:(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(l.Z,{className:"text-4xl"}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)("select",{className:"select max-w-xs bg-neutral text-neutral-content",onChange:f,children:t.data&&t.data.map((e,t)=>(0,s.jsx)("option",{value:JSON.stringify(e),children:e.title},t))}),(0,s.jsx)("button",{onClick:w,className:"btn btn-primary",children:"Save"})]}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsx)("div",{className:"flex flex-col max-w-lg w-full bg-neutral text-neutral-content",children:(0,s.jsxs)("div",{className:"flex-1 h-full relative",children:[""!==r.image_url&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{src:r.image_url,alt:"uploaded_image",width:"0",height:"0",sizes:"100vw",className:"w-full h-auto",id:"pinImageURL"}),(0,s.jsx)("button",{onClick:g,className:"btn btn-circle absolute z-100 top-0 right-0",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),""===r.image_url&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"aspect-square flex flex-col items-center justify-center relative border-opacity-50 border-neutral-content border-4 border-dashed",children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)("div",{children:"click to upload"}),(0,s.jsx)("input",{className:"w-full h-full absolute left-0 top-0 opacity-0 ",type:"file",accept:"image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp",onChange:m})]}),(0,s.jsx)("button",{className:"btn btn-primary w-full",children:"Save From Site"})]})]})}),(0,s.jsxs)("div",{id:"createPinInput",className:"text-base-content flex flex-col justify-between flex-1",children:[(0,s.jsx)("input",{id:"pinTitle",value:r.title,onChange:p,type:"text",placeholder:"Type your title",className:"input input-bordered w-full bg-inherit text-primary-content"}),(0,s.jsx)("textarea",{id:"pinDescription",value:r.description,onChange:p,type:"text",placeholder:"Tell everyone what your pin is about",className:"input input-bordered w-full bg-inherit text-primary-content break-words placeholder:break-words"}),(0,s.jsx)("input",{id:"pinLink",value:r.link,onChange:p,type:"text",placeholder:"Add destination link",className:"input input-bordered w-full bg-inherit text-primary-content"})]})]})]})})})})};var b=w}},function(e){e.O(0,[846,774,888,179],function(){return e(e.s=8684)}),_N_E=e.O()}]);