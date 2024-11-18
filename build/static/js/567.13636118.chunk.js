"use strict";(self.webpackChunkvuna_deile=self.webpackChunkvuna_deile||[]).push([[567],{7484:(e,a,t)=>{t.d(a,{A:()=>i,H:()=>s});var r=t(14710),n=t(76194),l=t(18062),o=t(91046);function s(e){let{children:a,className:t="",onClick:r}=e;return(0,o.jsx)("div",{className:`py-2 px-4 hover:bg-black hover:bg-opacity-5 ${t}`,onClick:r,children:a})}function i(e){let{children:a,positions:t,align:s,arrowColor:i,bordered:d,container:c,containerClassName:u,className:m=""}=e;const[v,p]=(0,r.useState)(!1);return(0,o.jsx)(l.Popover,{isOpen:v,positions:t||["left","right"],align:s||"center",padding:8,containerClassName:u,onClickOutside:e=>{e.target.closest(".ReactModalPortal")||p(!1)},content:e=>{let{position:t,childRect:r,popoverRect:n}=e;return(0,o.jsx)(l.ArrowContainer,{position:t,childRect:r,popoverRect:n,arrowColor:i||"#333",arrowSize:5,children:(0,o.jsx)("div",{className:`bg-slate-50 rounded-lg shadow-md !max-w-none min-w-44 overflow-auto ${d?"border border-solid border-blue-950 border-opacity-5":""} ${m}`,children:a})})},children:(0,o.jsx)("div",{onClick:()=>p(!v),className:"btn-container text-inherit",children:c||(0,o.jsx)(n.A,{size:"xsm3",className:"px-0 !border-transparent",outlined:!0,children:(0,o.jsx)("svg",{className:" min-w-[1.25rem] w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 4 15",children:(0,o.jsx)("path",{d:"M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})})})})})}},98401:(e,a,t)=>{t.d(a,{A:()=>l});new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),new Intl.NumberFormat(void 0,{style:"currency",currency:"Rwf",minimumFractionDigits:2}),new Intl.NumberFormat(void 0,{style:"currency",currency:"TSH",minimumFractionDigits:2});var r=t(14710),n=t(91046);function l(e){let{amount:a=0,currency:t="Tsh",currencySize:l}=e;const o=(0,r.useMemo)((()=>function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return new Intl.NumberFormat(void 0,{style:"currency",currency:e,...a})}catch(t){return console.warn(t),new Intl.NumberFormat(void 0,{style:"currency",currency:"Rwf"})}}(t).formatToParts(a)),[a,t]);return o.map(((e,a)=>(0,n.jsx)("span",{className:0==a?l||"text-xs":"",children:e.value},a)))}},74184:(e,a,t)=>{t.d(a,{A:()=>d});var r=t(14710),n=t(87718),l=t(91046);const o=(0,r.forwardRef)(((e,a)=>{let{filterFn:t,...o}=e;const s=(0,r.useCallback)((e=>new Promise((a=>a(null===t||void 0===t?void 0:t(e))))),[t]),i=(0,r.useRef)(a);return(0,l.jsx)(n.A,{ref:i,cacheOptions:!0,defaultOptions:!0,loadOptions:s,...o})}));var s=t(68852);const i=async e=>{try{var a,t,r;const n=await s.pY.get(`/v1/category?search=${e}`,{params:{pageSize:8,pageNumber:1}});return null===(a=[{id:null,name:"Select Radio"},...(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.list)||[]])||void 0===a||null===(t=a.map)||void 0===t?void 0:t.call(a,(e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}catch(n){return[]}};function d(e){let{radioId:a,setRadioId:t,className:r=""}=e;return(0,l.jsxs)("label",{htmlFor:"radioId",className:`sm:col-span-2 ${r}`,onClick:e=>e.stopPropagation(),children:[(0,l.jsx)("span",{className:"text-neutral-700 mb-2 inline-block",children:"Select Radio"}),(0,l.jsx)(o,{id:"radioId",name:"radioId",className:"bg-neutral-200",styles:{control:e=>({...e,border:"none",boxShadow:"none",background:"transparent",borderRadius:".2rem"}),valueContainer:e=>({...e,paddingInline:"1rem"})},filterFn:i,onChange:e=>t(null===e||void 0===e?void 0:e.value),defaultInputValue:a||""})]})}},16330:(e,a,t)=>{t.d(a,{A:()=>s,w:()=>i});var r=t(62979),n=t.n(r),l=t(76194),o=t(91046);function s(e){let{children:a,isOpen:t,onRequestClose:r,className:l,size:s}=e;return(0,o.jsx)(n(),{isOpen:t,onRequestClose:r,className:`${s?`size_${s}`:""} ${l||""}`,children:a})}function i(e){let{onClose:a,title:t}=e;return(0,o.jsxs)("div",{className:"flex justify-between mb-4",children:["string"==typeof t?(0,o.jsx)("h3",{children:t}):t,(0,o.jsx)(l.A,{className:"!text-black !bg-transparent !p-0",size:"xsm2",onClick:()=>a(),children:"X"})]})}n().setAppElement("#modals")},73887:(e,a,t)=>{t.d(a,{Py:()=>l,V6:()=>o,ZI:()=>n});var r=t(72063);const n=new Date,l=new Date("2024-02-05");async function o(e){const a=new FormData;a.append("file",e),a.append("upload_preset","m0gzvc3m");const t=await r.A.post("https://api.cloudinary.com/v1_1/dibojibkz/image/upload",a);return null===t||void 0===t?void 0:t.data}},54567:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var r=t(98401),n=t(99679),l=t(10674),o=t(42215),s=t(4449),i=t.n(s),d=t(14710),c=t(74184),u=t(73887),m=t(76194),v=t(94055),p=t(95834),h=t(28932),x=t(18345),g=t(86298),b=t(91046);function f(e){let{onFilter:a}=e;const[t,r]=(0,d.useState)(null),{user:n}=(0,o.G)((e=>e.user)),[l,s]=(0,d.useState)([{startDate:u.Py,endDate:u.ZI,key:"selection"}]),f=(0,d.useCallback)((async(e,r)=>{let{setSubmitting:n}=r;null===a||void 0===a||a({...e,radioId:t}),n(!1)}),[a,t]);return(0,b.jsx)(x.l1,{initialValues:{from:i()(u.Py).format("YYYY-MM-DD"),to:i()(u.ZI).format("YYYY-MM-DD"),submit:null},onSubmit:f,children:e=>{var a,o;let{values:d,resetForm:x,isSubmitting:f,handleSubmit:y,handleChange:j,setValues:w}=e;return(0,b.jsxs)("form",{className:"grid gap-3",onSubmit:y,children:[(0,b.jsxs)("div",{className:"hidden",children:[(0,b.jsx)(v.pd,{name:"from",type:"date",value:null===d||void 0===d?void 0:d.from,onChange:j}),(0,b.jsx)(v.pd,{name:"to",type:"date",value:null===d||void 0===d?void 0:d.to,onChange:j})]}),(0,b.jsx)(h.A,{mouseEnterDelay:.5,mouseLeaveDelay:.5,content:(0,b.jsx)(g.Ur,{onChange:e=>{let{selection:a}=e;s([a]),w((e=>({...e,from:i()(a.startDate).format("YYYY-MM-DD"),to:i()(a.endDate).format("YYYY-MM-DD")})))},moveRangeOnFirstSelection:!1,months:1,ranges:l,direction:"horizontal",preventSnapRefocus:!0,calendarFocus:"backwards",rangeColors:["var(--primary-color)"],maxDate:u.ZI,minDate:u.Py}),children:(0,b.jsxs)("div",{className:"cursor-pointer",children:[(0,b.jsx)("p",{className:"mb-1 text-grey",children:"Select Date Range"}),(0,b.jsxs)("span",{className:"flex gap-2 items-center [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md",children:[(0,b.jsx)("span",{children:i()(l[0].startDate).format("LL")}),"-",(0,b.jsx)("span",{children:i()(l[0].endDate).format("LL")})]})]})}),1!=(null===n||void 0===n||null===(a=n.attributes)||void 0===a||null===(o=a.radioId)||void 0===o?void 0:o.length)&&(0,b.jsx)(c.A,{radioId:t,setRadioId:r,className:"!col-span-1"}),(0,b.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,b.jsx)(m.A,{onClick:()=>x(),outlined:!0,disabled:f,size:"xsm",className:"!rounded-full",children:"Reset"}),(0,b.jsx)(m.A,{type:"submit",disabled:f,size:"xsm",className:"!rounded-full",icon:f&&(0,b.jsx)(p.A,{size:16}),children:"Filter"})]})]})}})}var y=t(72325),j=(0,t(79).A)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]),w=t(16330),N=t(68852),C=t(7484);function S(e){let{loading:a,data:t,SearchByNumber:r,setSearchModal:l,value:s}=e;const c=(0,o.j)(),[u,p]=(0,d.useState)(!1),h=(0,d.useCallback)((async e=>{p(!0),await c((0,y.j)(e)).unwrap(),p(!1)}),[c]),x=(0,d.useMemo)((()=>[{accessor:"transaction[transaction_date]",id:"date",Header:"Transaction Date",Cell:e=>{let{value:a}=e;return i()().diff(a,"day")<1?`${i()(a).fromNow()}, ${i()(a).format("LT")}`:i()(a).format("LLL")}},{accessor:"token[id]",Header:"token"},{accessor:"transaction[amount]",Header:"Amount"},{accessor:"transaction[product[name]]",Header:"Prize"},{accessor:"transaction[telco]",Header:"Telco"},{accessor:"transaction[status]",Header:"Status",Cell:e=>{let{value:a}=e;return(0,b.jsx)("span",{className:""+("success"==(null===a||void 0===a?void 0:a.toLowerCase())?"text-green-600":"pending"==(null===a||void 0===a?void 0:a.toLowerCase())?"text-orange-500":"text-red-600"),children:null===a||void 0===a?void 0:a.toLowerCase()})}},{accessor:"transaction[expired]",Header:"expired",Cell:e=>{let{value:a}=e;return(0,b.jsx)("span",{className:""+(a?"text-green-600":"text-red-600"),children:a?"true":"false"})}},{id:"action",Cell:e=>{var a;let{row:{original:t}}=e;return(null===t||void 0===t||null===(a=t.token)||void 0===a?void 0:a.id)&&(0,b.jsx)(C.A,{containerClassName:"!z-30",children:(0,b.jsx)(C.H,{className:u?"cursor-wait":"cursor-pointer",onClick:()=>{var e;return!u&&h(null===t||void 0===t||null===(e=t.token)||void 0===e?void 0:e.id)},children:u?"Resending token":"Resend Token"})})}}]),[u,h]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w.w,{title:(0,b.jsxs)("form",{onSubmit:r,className:"!mr-auto w-fit bg-light-grey rounded contain-paint flex",children:[(0,b.jsx)(v.pd,{name:"phoneNumber",defaultValue:s,placeholder:"Search by Phone Number",required:!0}),(0,b.jsx)(m.A,{size:"xsm3",type:"submit",className:"flex-grow-0 !px-2 !text-primary !bg-transparent",children:(0,b.jsx)(j,{})})]}),onClose:()=>l(!1)}),(0,b.jsx)(n.A,{title:(0,b.jsx)("span",{className:"text-lg",children:s}),columns:x,data:t,loading:a,allowExport:!0,hideSearch:!0,hideFilter:!0,minimizeFilter:!0,defaultSortBy:[{id:"date",desc:!0}]})]})}function k(){var e,a;const t=(0,o.j)(),[s,c]=(0,d.useState)(!1),[u,p]=(0,d.useState)(!1),[h,x]=(0,d.useState)(""),[g,C]=(0,d.useState)([]),{list:k,status:I,fetchTimes:D,info:A,filters:F}=(0,o.G)((e=>e.draw.tokens)),{user:R}=(0,o.G)((e=>e.user)),z=(0,d.useMemo)((()=>[{accessor:"tokenId",Header:"token",Filter:()=>(0,b.jsx)(b.Fragment,{})},{accessor:"phoneNumber",Header:"Phone Number"},{accessor:"draw[startDate]",Header:"draw",Cell:e=>{var a;let{value:t,row:{original:r}}=e;return(0,b.jsxs)(b.Fragment,{children:[i()(t).format("ll")," - ",i()(null===r||void 0===r||null===(a=r.draw)||void 0===a?void 0:a.endDate).format("ll")]})}},{accessor:"product[productName]",Header:"product"},{accessor:"product[playAmount]",Header:"Pray Amount",Cell:e=>{let{value:a}=e;return(0,b.jsx)(r.A,{amount:Number(a)})}},{accessor:"created_at",Header:"created date",Cell:e=>{let{value:a}=e;return i()(a).format("llll")}}]),[]),P=(0,d.useCallback)((async e=>{try{var a,r,n,l;1==(null===R||void 0===R||null===(a=R.attributes)||void 0===a||null===(r=a.radioId)||void 0===r?void 0:r.length)&&(e.radioId=(null===R||void 0===R||null===(n=R.attributes)||void 0===n||null===(l=n.radioId)||void 0===l?void 0:l[0])||(null===e||void 0===e?void 0:e.radioId)),await t((0,y.C)(e)).unwrap()}catch(o){}}),[t,null===R||void 0===R||null===(e=R.attributes)||void 0===e?void 0:e.radioId]);(0,d.useLayoutEffect)((()=>{0==D&&P()}),[D,P,k.length]);const M=(0,d.useCallback)((e=>{t((0,l.h7)(e)),P({...e})}),[t,P]),Y=(0,d.useCallback)((e=>{P({...F,pageNumber:((null===A||void 0===A?void 0:A.currentPage)||0)+(e||1)})}),[F,P,null===A||void 0===A?void 0:A.currentPage]),H=(0,d.useCallback)((async e=>{try{var a,t,r,n;p(!0),e.preventDefault();const l=new FormData(e.currentTarget),o=Object.fromEntries(l);x(`${null===o||void 0===o?void 0:o.phoneNumber}`),c(!0),1==(null===R||void 0===R||null===(a=R.attributes)||void 0===a||null===(t=a.radioId)||void 0===t?void 0:t.length)&&(o.radioId=(null===R||void 0===R||null===(r=R.attributes)||void 0===r||null===(n=r.radioId)||void 0===n?void 0:n[0])||(null===o||void 0===o?void 0:o.radioId));const s=await N.pY.get("/v1/transactions/getTokenByPhoneNumber",{params:o});C(null===s||void 0===s?void 0:s.data)}catch(l){}finally{p(!1)}}),[null===R||void 0===R||null===(a=R.attributes)||void 0===a?void 0:a.radioId]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"p-4",children:(0,b.jsx)(n.A,{title:"Tokens",columns:z,data:k,loading:"pending"==I,refresh:()=>P(),totalResults:null===A||void 0===A?void 0:A.total,allowExport:!0,AsideNode:f,RightNode:()=>(0,b.jsxs)("form",{onSubmit:H,className:"!mr-auto w-fit bg-light-grey rounded contain-paint flex",children:[(0,b.jsx)(v.pd,{name:"phoneNumber",placeholder:"Search by Phone Number",required:!0}),(0,b.jsx)(m.A,{size:"xsm3",type:"submit",className:"flex-grow-0 !px-2 !text-primary !bg-transparent",children:(0,b.jsx)(j,{})})]}),minimizeFilter:!0,hidePageSizeSelector:!0,hideSearch:!0,onFilter:M,customPaginationActions:!0,currentPage:null===A||void 0===A?void 0:A.currentPage,defaultPageSize:F.pageSize||10,getMore:Y})}),(0,b.jsx)(w.A,{size:"sm",isOpen:s,onRequestClose:()=>c(!1),children:(0,b.jsx)(S,{loading:u,data:g,value:h,setSearchModal:c,SearchByNumber:H})})]})}}}]);
//# sourceMappingURL=567.13636118.chunk.js.map