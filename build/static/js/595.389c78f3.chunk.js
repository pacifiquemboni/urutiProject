"use strict";(self.webpackChunkvuna_deile=self.webpackChunkvuna_deile||[]).push([[595],{74184:(e,a,l)=>{l.d(a,{A:()=>d});var t=l(14710),n=l(87718),r=l(91046);const s=(0,t.forwardRef)(((e,a)=>{let{filterFn:l,...s}=e;const i=(0,t.useCallback)((e=>new Promise((a=>a(null===l||void 0===l?void 0:l(e))))),[l]),o=(0,t.useRef)(a);return(0,r.jsx)(n.A,{ref:o,cacheOptions:!0,defaultOptions:!0,loadOptions:i,...s})}));var i=l(68852);const o=async e=>{try{var a,l,t;const n=await i.pY.get(`/v1/category?search=${e}`,{params:{pageSize:8,pageNumber:1}});return null===(a=[{id:null,name:"Select Radio"},...(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.list)||[]])||void 0===a||null===(l=a.map)||void 0===l?void 0:l.call(a,(e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}catch(n){return[]}};function d(e){let{radioId:a,setRadioId:l,className:t=""}=e;return(0,r.jsxs)("label",{htmlFor:"radioId",className:`sm:col-span-2 ${t}`,onClick:e=>e.stopPropagation(),children:[(0,r.jsx)("span",{className:"text-neutral-700 mb-2 inline-block",children:"Select Radio"}),(0,r.jsx)(s,{id:"radioId",name:"radioId",className:"bg-neutral-200",styles:{control:e=>({...e,border:"none",boxShadow:"none",background:"transparent",borderRadius:".2rem"}),valueContainer:e=>({...e,paddingInline:"1rem"})},filterFn:o,onChange:e=>l(null===e||void 0===e?void 0:e.value),defaultInputValue:a||""})]})}},73887:(e,a,l)=>{l.d(a,{Py:()=>r,V6:()=>s,ZI:()=>n});var t=l(72063);const n=new Date,r=new Date("2024-02-05");async function s(e){const a=new FormData;a.append("file",e),a.append("upload_preset","m0gzvc3m");const l=await t.A.post("https://api.cloudinary.com/v1_1/dibojibkz/image/upload",a);return null===l||void 0===l?void 0:l.data}},30595:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});var t=l(99679),n=l(10674),r=l(42215),s=l(4449),i=l.n(s),o=l(14710),d=l(74184),u=l(73887),c=l(76194),m=l(94055),v=l(95834),p=l(28932),g=l(18345),h=l(86298),f=l(91046);function b(e){let{onFilter:a}=e;const[l,t]=(0,o.useState)(null),{user:n}=(0,r.G)((e=>e.user)),[s,b]=(0,o.useState)([{startDate:u.Py,endDate:u.ZI,key:"selection"}]),x=(0,o.useCallback)((async(e,t)=>{let{setSubmitting:n}=t;null===a||void 0===a||a({...e,radioId:l}),n(!1)}),[a,l]);return(0,f.jsx)(g.l1,{initialValues:{from:i()(u.Py).format("YYYY-MM-DD"),to:i()(u.ZI).format("YYYY-MM-DD"),submit:null},onSubmit:x,children:e=>{var a,r;let{values:o,resetForm:g,isSubmitting:x,handleSubmit:j,handleChange:y,setValues:D}=e;return(0,f.jsxs)("form",{className:"grid gap-3",onSubmit:j,children:[(0,f.jsxs)("div",{className:"hidden",children:[(0,f.jsx)(m.pd,{name:"from",type:"date",value:null===o||void 0===o?void 0:o.from,onChange:y}),(0,f.jsx)(m.pd,{name:"to",type:"date",value:null===o||void 0===o?void 0:o.to,onChange:y})]}),(0,f.jsx)(p.A,{mouseEnterDelay:.5,mouseLeaveDelay:.5,content:(0,f.jsx)(h.Ur,{onChange:e=>{let{selection:a}=e;b([a]),D((e=>({...e,from:i()(a.startDate).format("YYYY-MM-DD"),to:i()(a.endDate).format("YYYY-MM-DD")})))},moveRangeOnFirstSelection:!1,months:1,ranges:s,direction:"horizontal",preventSnapRefocus:!0,calendarFocus:"backwards",rangeColors:["var(--primary-color)"],minDate:u.Py}),children:(0,f.jsxs)("div",{className:"cursor-pointer",children:[(0,f.jsx)("p",{className:"mb-1 text-grey",children:"Select Date Range"}),(0,f.jsxs)("span",{className:"flex gap-2 items-center [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md",children:[(0,f.jsx)("span",{children:i()(s[0].startDate).format("LL")}),"-",(0,f.jsx)("span",{children:i()(s[0].endDate).format("LL")})]})]})}),1!=(null===n||void 0===n||null===(a=n.attributes)||void 0===a||null===(r=a.radioId)||void 0===r?void 0:r.length)&&(0,f.jsx)(d.A,{radioId:l,setRadioId:t,className:"!col-span-1"}),(0,f.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,f.jsx)(c.A,{onClick:()=>g(),outlined:!0,disabled:x,size:"xsm",className:"!rounded-full",children:"Reset"}),(0,f.jsx)(c.A,{type:"submit",disabled:x,size:"xsm",className:"!rounded-full",icon:x&&(0,f.jsx)(v.A,{size:16}),children:"Filter"})]})]})}})}var x=l(93863);function j(){var e;const a=(0,r.j)(),{list:l,status:s,fetchTimes:d,info:u,filters:c}=(0,r.G)((e=>e.draw.table)),{user:m}=(0,r.G)((e=>e.user)),v=(0,o.useMemo)((()=>[{accessor:"product[productPicture]",Header:"",sortType:()=>{},style:{display:"grid",placeItems:"center",padding:"0.25rem"},Cell:e=>{let{value:a}=e;return(0,f.jsx)("img",{src:a,className:"size-6 object-contain"})}},{accessor:"product[productName]",Header:"Prize",Filter:()=>(0,f.jsx)(f.Fragment,{})},{accessor:"startDate",Header:"start Date",Cell:e=>{let{value:a}=e;return i()(a).format("ll")}},{accessor:"endDate",Header:"end Date",Cell:e=>{let{value:a}=e;return i()(a).format("ll")}},{accessor:"product[isAvailable]",Header:"isAvailable",Cell:e=>{let{value:a}=e;return(0,f.jsx)("span",{className:""+(a?"text-green-600":"text-red-600"),children:a?"true":"false"})}},{accessor:"isPlayed",Header:"Played?",Cell:e=>{let{value:a}=e;return(0,f.jsx)("span",{className:""+(a?"text-green-600":"text-red-600"),children:a?"true":"false"})}}]),[]),p=(0,o.useCallback)((async e=>{try{var l,t,n,r;1==(null===m||void 0===m||null===(l=m.attributes)||void 0===l||null===(t=l.radioId)||void 0===t?void 0:t.length)&&(e.radioId=(null===m||void 0===m||null===(n=m.attributes)||void 0===n||null===(r=n.radioId)||void 0===r?void 0:r[0])||(null===e||void 0===e?void 0:e.radioId)),await a((0,x.hl)(e)).unwrap()}catch(s){}}),[a,null===m||void 0===m||null===(e=m.attributes)||void 0===e?void 0:e.radioId]);(0,o.useLayoutEffect)((()=>{0==d&&p()}),[d,p,l.length]);const g=(0,o.useCallback)((e=>{a((0,n.h7)(e)),p({...e})}),[a,p]),h=(0,o.useCallback)((e=>{p({...c,pageNumber:((null===u||void 0===u?void 0:u.currentPage)||0)+(e||1)})}),[c,p,null===u||void 0===u?void 0:u.currentPage]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"p-4",children:(0,f.jsx)(t.A,{title:"Draws List",columns:v,data:l,loading:"pending"==s,refresh:()=>p({}),totalResults:null===u||void 0===u?void 0:u.total,allowExport:!0,AsideNode:b,minimizeFilter:!0,hidePageSizeSelector:!0,hideSearch:!0,onFilter:g,customPaginationActions:!0,currentPage:null===u||void 0===u?void 0:u.currentPage,defaultPageSize:c.pageSize||10,getMore:h})})})}}}]);
//# sourceMappingURL=595.389c78f3.chunk.js.map