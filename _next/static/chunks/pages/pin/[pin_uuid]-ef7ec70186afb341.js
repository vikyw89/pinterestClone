(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{3343:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var i=r(a(4938)),l=a(5893),n=(0,i.default)((0,l.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=n},9369:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var i=r(a(4938)),l=a(5893),n=(0,i.default)((0,l.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=n},6307:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var i=r(a(4938)),l=a(5893),n=(0,i.default)((0,l.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=n},1213:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pin/[pin_uuid]",function(){return a(7738)}])},1243:function(e,t,a){"use strict";a.d(t,{T:function(){return _}});var r=a(5893),i=a(1163),l=a(7294),n=a(664);let s=()=>{let e=(0,i.useRouter)(),t=(0,n.m)("route/loading"),a=(0,n.m)("loadingCounter");return(0,l.useEffect)(()=>{let t=()=>{(0,n._)("route/loading",!0)},a=()=>{(0,n._)("route/loading",!1)};return e.events.on("routeChangeStart",t),e.events.on("routeChangeComplete",a),()=>{e.events.off("routeChangeStart",t),e.events.off("routeChangeComplete",a)}},[e]),(0,r.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(t||a>0)&&(0,r.jsx)("progress",{className:"progress progress-accent"})})};var o=a(9744);let d=()=>{let e=(0,n.m)("theme");return(0,l.useEffect)(()=>{(0,n._)("theme",["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"].sort((e,t)=>e>t?1:-1))},[]),e};var c=a(7997),u=a(9557),h=a(8201),m=a(6540),p=a(5328),x=a(9485),v=a(3540),f=a(5675),g=a.n(f),b=a(4334);let w=()=>{var e,t,a,l,s,f;let w=null!==(f=d())&&void 0!==f?f:[],j=(0,o.a)(),N=(0,c.a)(),_=(0,i.useRouter)(),y=(0,b.Z)("api/auth",async()=>{let{error:e}=await u.O.auth.signOut();return e}),C=(0,b.Z)((null==j?void 0:null===(e=j.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.id)&&"api/user/".concat(j.data.user.id),async(e,t)=>{let{arg:a}=t;await u.O.from("users").update({theme:a}).eq("uuid",j.data.user.id).throwOnError()}),k=null==j?void 0:null===(a=j.data)||void 0===a?void 0:null===(l=a.user)||void 0===l?void 0:null===(s=l.user_metadata)||void 0===s?void 0:s.avatar_url,Z=()=>{(0,n._)("show/signInComponent",!0)},O=()=>{y.trigger()},q=()=>{_.push("/")},S=()=>{_.push("/createPin")},L=e=>{let t=e.target.textContent,a={optimisticData:{...N.data,theme:t}};C.trigger(t,a)},E=()=>{_.push("/profile")};return(0,r.jsxs)("div",{className:"flex bg-neutral z-20 items-center text-neutral-content",children:[(0,r.jsx)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:(0,r.jsxs)("div",{onClick:q,className:"lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,r.jsx)("div",{className:"w-12",children:(0,r.jsx)(g(),{alt:"pinterest logo",src:"https://hffebrjtrzopihuffrxv.supabase.co/storage/v1/object/public/assets/p-logo-lowres.png",width:"0",priority:!0,height:"0",sizes:"100vw",className:"w-auto"})}),(0,r.jsx)("a",{className:"text-lg font-bold hidden sm:block",children:"Pinterest"})]})}),(0,r.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[j.data&&(0,r.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:S,children:[(0,r.jsx)("a",{className:"hidden sm:block",children:"Create"}),(0,r.jsx)("div",{className:" sm:hidden",children:(0,r.jsx)(m.Z,{})})]}),(0,r.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,r.jsxs)("button",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:[(0,r.jsx)("label",{className:"hidden sm:block",children:"Theme"}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsx)(p.Z,{})})]}),(0,r.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-neutral z-50",children:w&&w.map((e,t)=>(0,r.jsx)("li",{className:"text-neutral-content bg-neutral z-50",children:(0,r.jsx)("a",{onClick:L,children:e})},t))})]}),j.data?(0,r.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:O,children:[(0,r.jsx)("a",{className:"hidden sm:block",children:"Sign Out"}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsx)(v.Z,{})})]}):(0,r.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:Z,children:[(0,r.jsx)("a",{className:"hidden sm:block",children:"Sign In"}),(0,r.jsx)("div",{className:"sm:hidden",children:(0,r.jsx)(x.Z,{})})]}),(0,r.jsx)("button",{className:"btn btn-ghost rounded-btn flex items-center justify-center",onClick:E,children:(0,r.jsx)("div",{className:"avatar aspect-square",children:k?(0,r.jsx)("div",{className:"rounded-full flex items-center w-7",children:(0,r.jsx)(g(),{src:k,alt:"avatar",width:"6",height:"6",className:"aspect-square w-2",id:"user_avatar"})}):(0,r.jsx)(h.Z,{className:"text-2xl"})})})]})]})};var j=a(7632);(0,n._)("error",[]);let N=()=>{let e=(0,n.m)("error");return(0,r.jsx)("div",{className:"fixed bottom-0 left-0",children:e&&e.map(e=>(0,r.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,r.jsx)("span",{children:e.message})]})},(0,j.Z)()))})},_=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,r.jsx)(w,{}),(0,r.jsx)(s,{}),(0,r.jsx)("main",{className:"flex-1 overflow-y-auto flex flex-col",children:t}),(0,r.jsx)(N,{})]})}},5969:function(e,t,a){"use strict";a.d(t,{t:function(){return o}});var r=a(5893),i=a(7997),l=a(9557),n=a(7294),s=a(5591);let o=e=>{var t;let{props:a}=e,{pin_uuid:o,board_uuid:d}=a,c=(0,i.a)(),u=null==c?void 0:null===(t=c.data)||void 0===t?void 0:t.boards,[h,m]=(0,n.useState)(),[p,x]=(0,n.useState)();(0,n.useEffect)(()=>{m(null==u?void 0:u[0])},[u]),(0,n.useEffect)(()=>{h&&x(0!==h.boards_pins.filter(e=>e.pin_uuid===o).length)},[h,o]);let v=async e=>{e.stopPropagation(),e.target.classList.add("loading"),await (0,s.JG)("api/user/".concat(c.data.uuid),async()=>{await l.O.rpc("save_pin",{board_uuid:d,pin_uuid:o}).throwOnError()},{populateCache:!1})},f=async e=>{e.stopPropagation(),e.target.classList.add("loading"),await (0,s.JG)("api/user/".concat(c.data.uuid),async()=>{await l.O.from("boards_pins").delete().eq("pin_uuid",o).eq("board_uuid",d)},{populateCache:!1})};return(0,r.jsxs)("div",{children:[void 0===p&&(0,r.jsx)("button",{className:"btn btn-info loading",children:"Loading"}),!0===p&&(0,r.jsx)("button",{className:"btn btn-info",onClick:f,children:"Saved"}),!1===p&&(0,r.jsx)("button",{className:"btn btn-accent",onClick:v,children:"Save"})]})}},7738:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var r=a(5893),i=a(1243),l=a(5591),n=a(9557);let s=e=>{let t=(0,l.ZP)(e&&"api/pin/".concat(e),async()=>{let t=await n.O.from("pins").select("\n              *,\n              users(*,\n                users_followers!users_followers_user_uuid_fkey(count)),\n              pins_comments(*,users(*))\n              ").eq("uuid",e).eq("pins_comments.pin_uuid",e).throwOnError(),a=t.data[0];return a});return t};var o=a(9369),d=a(5675),c=a.n(d),u=a(1163),h=a(7294),m=a(7997),p=a(6307),x=a(3366),v=a(7462),f=a(6010),g=a(4780),b=a(1796),w=a(2641),j=a(8215),N=a(1588),_=a(4867);function y(e){return(0,_.Z)("MuiDivider",e)}(0,N.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);let C=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],k=e=>{let{absolute:t,children:a,classes:r,flexItem:i,light:l,orientation:n,textAlign:s,variant:o}=e;return(0,g.Z)({root:["root",t&&"absolute",o,l&&"light","vertical"===n&&"vertical",i&&"flexItem",a&&"withChildren",a&&"vertical"===n&&"withChildrenVertical","right"===s&&"vertical"!==n&&"textAlignRight","left"===s&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]},y,r)},Z=(0,w.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,v.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,b.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,v.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,v.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,v.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),O=(0,w.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,v.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),q=h.forwardRef(function(e,t){let a=(0,j.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:l,className:n,component:s=l?"div":"hr",flexItem:o=!1,light:d=!1,orientation:c="horizontal",role:u="hr"!==s?"separator":void 0,textAlign:h="center",variant:m="fullWidth"}=a,p=(0,x.Z)(a,C),g=(0,v.Z)({},a,{absolute:i,component:s,flexItem:o,light:d,orientation:c,role:u,textAlign:h,variant:m}),b=k(g);return(0,r.jsx)(Z,(0,v.Z)({as:s,className:(0,f.Z)(b.root,n),role:u,ref:t,ownerState:g},p,{children:l?(0,r.jsx)(O,{className:b.wrapper,ownerState:g,children:l}):null}))});var S=a(9744),L=a(3343);let E=e=>{var t,a;let{props:i}=e,{users:s,comment:o,uuid:d,pin_uuid:u}=i,h=(0,S.a)(),m=null==h?void 0:null===(t=h.data)||void 0===t?void 0:null===(a=t.user)||void 0===a?void 0:a.id,p=m===s.uuid,x=async()=>{await (0,l.JG)("api/pin/".concat(u),async()=>{await n.O.from("pins_comments").delete().eq("uuid",d).eq("creator_uuid",m).select().throwOnError()},{populateCache:!1})};return(0,r.jsxs)("div",{className:"flex gap-2 p-2 w-full max-w-lg relative",children:[(0,r.jsx)(c(),{src:s.profile_picture_url,alt:"profile_picture",height:0,width:0,sizes:"100vw",className:"w-8 h-8 aspect-square rounded-full"}),(0,r.jsxs)("div",{className:"flex w-full max-w-lg flex-wrap",children:[(0,r.jsxs)("span",{className:"font-bold",children:[s.username," :\xa0\xa0"]}),(0,r.jsx)("p",{className:"break-all",children:o})]}),p&&(0,r.jsx)("button",{className:"btn btn-circle btn-ghost absolute top-0 right-0",onClick:x,children:(0,r.jsx)("div",{children:(0,r.jsx)(L.Z,{className:"text-3xl font-bold text-info"})})})]})},z=()=>{var e,t,a;let i=(0,m.a)(),o=(0,u.useRouter)(),{pin_uuid:d}=o.query,x=s(d),[v,f]=(0,h.useState)(""),g=null==x?void 0:null===(e=x.data)||void 0===e?void 0:e.pins_comments,b=null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.profile_picture_url,w=null==i?void 0:null===(a=i.data)||void 0===a?void 0:a.uuid,[j,N]=(0,h.useState)(!1),_=e=>{f(e.target.value)},y=async()=>{v&&w&&d&&(f(""),N(!0),await (0,l.JG)("api/pin/".concat(d),async()=>{await n.O.from("pins_comments").insert({comment:v,creator_uuid:w,pin_uuid:d}).throwOnError()},{populateCache:!1}),N(!1))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"font-bold",children:"Comments"}),g&&(0,r.jsx)("div",{children:g.map((e,t)=>(0,r.jsx)(E,{props:e},t))}),!g&&(0,r.jsx)("div",{children:"No comments yet! Add one to start the conversation."})]}),(0,r.jsx)(q,{}),(0,r.jsxs)("div",{className:"flex gap-2 justify-between",children:[b&&(0,r.jsx)(c(),{src:b,alt:"avatar",height:0,width:0,sizes:"100vw",className:"w-12 aspect-square rounded-box"}),(0,r.jsx)("input",{type:"text",placeholder:"Add a comment",className:"input input-bordered input-primary rounded-box bg-neutral-focus w-full",onChange:_,value:v}),j?(0,r.jsx)("button",{className:"btn btn-primary rounded-btn btn-circle loading"}):(0,r.jsx)("button",{className:"btn btn-primary rounded-btn btn-circle",onClick:y,children:(0,r.jsx)(p.Z,{})})]})]})};var R=a(9770),A=a(4334);let I=()=>{var e,t,a;let i=(0,m.a)(),l=(0,u.useRouter)(),{pin_uuid:o}=l.query,d=s(o),h=null==d?void 0:null===(e=d.data)||void 0===e?void 0:null===(t=e.users)||void 0===t?void 0:t.uuid,p=null==i?void 0:null===(a=i.data)||void 0===a?void 0:a.uuid,x=(0,R.Z)(o&&h&&"api/user/".concat(o,"/following/").concat(h),async()=>{let e=await n.O.from("users_followers").select("count").eq("user_uuid",h).eq("follower_uuid",p).throwOnError(),t=0!==e.data[0].count;return t}),v=(0,A.Z)("api/user/".concat(o,"/following/").concat(h),async()=>{let e=await n.O.from("users_followers").upsert({user_uuid:h,follower_uuid:p}).select().throwOnError(),t=e.data[0];return t}),f=(0,A.Z)("api/user/".concat(o,"/following/").concat(h),async()=>{let e=await n.O.from("users_followers").delete().eq("user_uuid",h).eq("follower_uuid",p).select().throwOnError();return e}),g=async e=>{d.data&&h&&p&&(e.target.classList.add("loading"),await v.trigger(),await d.mutate())},b=async e=>{d.data&&h&&p&&(e.target.classList.add("loading"),await f.trigger(),await d.mutate())};return(0,r.jsxs)("div",{className:"flex gap-3 w-full flex-wrap",children:[d.data&&(0,r.jsx)(c(),{src:d.data.users.profile_picture_url,alt:"pfp",height:0,width:0,sizes:"100vw",className:"w-12 aspect-square rounded-full"}),d.data&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"font-bold",children:d.data.users.username}),(0,r.jsxs)("div",{children:[d.data.users.users_followers[0].count," followers"]})]}),(0,r.jsxs)("div",{className:"flex-1 text-right",children:[void 0===x.data&&(0,r.jsx)("button",{className:"btn btn-primary loading text-primary-content rounded-btn max-sm:w-full",children:"Loading"}),!0===x.data&&(0,r.jsx)("button",{className:"btn btn-primary text-primary-content rounded-btn max-sm:w-full",onClick:b,children:"Following"}),!1===x.data&&(0,r.jsx)("button",{className:"btn btn-primary text-primary-content rounded-btn max-sm:w-full",onClick:g,children:"Follow"})]})]})};var M=a(5969);let D=()=>{var e;let[t,a]=(0,h.useState)(!1),i=(0,u.useRouter)(),{pin_uuid:l}=i.query,n=s(l),d=(0,m.a)(),p=null==d?void 0:null===(e=d.data)||void 0===e?void 0:e.boards;(0,h.useEffect)(()=>{v(null==p?void 0:p[0])},[p]);let[x,v]=(0,h.useState)(),f=e=>{v(JSON.parse(e.target.value))},g=e=>{e.classList.remove("animate-pulse"),e.removeEventListener("onLoadingComplete",g)};return(0,r.jsx)("div",{className:"flex justify-center p-5",children:(0,r.jsxs)("div",{className:"flex flex-wrap text-neutral-content items-start justify-center",children:[(0,r.jsx)("div",{className:"max-w-lg relative rounded-l-3xl bg-neutral-focus",children:n.data?(0,r.jsx)(c(),{src:n.data.image_url,alt:"pinDataImage",width:500,height:500,placeholder:"blur",blurDataURL:n.data.loading_image_url,style:{height:"auto"},className:"rounded-l-3xl w-screen animate-pulse",onLoadingComplete:g}):(0,r.jsx)("div",{className:"w-screen aspect-square animate-pulse bg-neutral-focus rounded-l-3xl flex justify-center items-center"})}),(0,r.jsxs)("div",{className:"max-w-lg flex flex-col rounded-r-3xl bg-neutral p-5 gap-1 w-screen lg:min-h-full",children:[(0,r.jsxs)("div",{className:"flex items-center justify-end",children:[(0,r.jsx)("button",{className:"btn btn-ghost p-0 btn-circle",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)("div",{className:"flex-1"}),p&&(0,r.jsx)("select",{className:"select max-w-xs bg-neutral text-neutral-content",onChange:f,children:p.map((e,t)=>(0,r.jsx)("option",{value:JSON.stringify(e),children:e.title},t))}),l&&x&&(0,r.jsx)(M.t,{props:{pin_uuid:l,board_uuid:x.uuid,pinIsModified:t,setPinIsModified:a}})]}),n.data&&(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"underline",children:(0,r.jsx)("a",{href:n.data.link_url,children:n.data.link_url})}),(0,r.jsx)("div",{className:"font-bold",children:n.data.title}),(0,r.jsx)("div",{children:n.data.description})]}),(0,r.jsx)(I,{}),(0,r.jsx)(z,{})]})]})})},P=()=>{let e=(0,S.a)(),t=(0,u.useRouter)(),{pin_uuid:a}=t.query,l=s(a);return(0,r.jsx)(i.T,{children:e.data&&a&&l&&(0,r.jsx)(D,{})})};var T=P}},function(e){e.O(0,[598,774,888,179],function(){return e(e.s=1213)}),_N_E=e.O()}]);