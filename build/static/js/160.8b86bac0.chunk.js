"use strict";(self.webpackChunkvuna_deile=self.webpackChunkvuna_deile||[]).push([[160],{73887:(e,t,a)=>{a.d(t,{Py:()=>n,V6:()=>d,ZI:()=>o});var l=a(72063);const o=new Date,n=new Date("2024-02-05");async function d(e){const t=new FormData;t.append("file",e),t.append("upload_preset","m0gzvc3m");const a=await l.A.post("https://api.cloudinary.com/v1_1/dibojibkz/image/upload",t);return null===a||void 0===a?void 0:a.data}},67160:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(99679),o=a(42215),n=a(14710),d=a(76194),i=a(94055),s=a(73887),r=a(94569),u=a(95834),c=a(28932),v=a(18345),m=a(4449),p=a.n(m),h=a(86298),g=a(91046);function x(e){let{onFilter:t}=e;const[a]=(0,n.useState)(null),{list:l,fetchTimes:m}=(0,o.G)((e=>e.products)),x=(0,o.j)();(0,n.useEffect)((()=>{m<1&&x((0,r.bn)({pageSize:1e3}))}),[x,m]);const[f,b]=(0,n.useState)([{startDate:new Date,endDate:new Date((new Date).getDate()+7),key:"selection"}]),j=(0,n.useCallback)((async(e,l)=>{let{setSubmitting:o}=l;null===t||void 0===t||t({...e,radioId:a}),o(!1)}),[t,a]);return(0,g.jsx)(v.l1,{initialValues:{search:"",from:"",to:"",telecom:"",status:"",productId:"",submit:null},onSubmit:j,children:e=>{var t;let{values:a,isSubmitting:o,handleSubmit:n,handleChange:r,setValues:v}=e;return(0,g.jsxs)("form",{className:"grid gap-3",onSubmit:n,children:[(0,g.jsx)(i.pd,{name:"search",label:"Search",onChange:r,value:null===a||void 0===a?void 0:a.search,placeholder:"search"}),(0,g.jsxs)("div",{className:"hidden",children:[(0,g.jsx)(i.pd,{name:"from",type:"date",value:null===a||void 0===a?void 0:a.from,onChange:r}),(0,g.jsx)(i.pd,{name:"to",type:"date",value:null===a||void 0===a?void 0:a.to,onChange:r})]}),(0,g.jsx)(c.A,{mouseEnterDelay:.5,mouseLeaveDelay:.5,content:(0,g.jsx)(h.Ur,{onChange:e=>{let{selection:t}=e;b([t]),v((e=>({...e,from:p()(t.startDate).format("YYYY-MM-DD"),to:p()(t.endDate).format("YYYY-MM-DD")})))},moveRangeOnFirstSelection:!1,months:1,ranges:f,direction:"horizontal",preventSnapRefocus:!0,calendarFocus:"backwards",rangeColors:["var(--primary-color)"],maxDate:s.ZI,minDate:s.Py}),children:(0,g.jsxs)("div",{className:"cursor-pointer",children:[(0,g.jsx)("p",{className:"mb-1 text-grey",children:"Select Date Range"}),(0,g.jsxs)("span",{className:"flex gap-2 items-center [&>*]:text-center [&>*]:flex-grow [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md",children:[(0,g.jsx)("span",{children:p()(f[0].startDate).format("LL")}),"-",(0,g.jsx)("span",{children:p()(f[0].endDate).format("LL")})]})]})}),(0,g.jsx)(i.l6,{name:"telecom",label:"select Telecom",value:null===a||void 0===a?void 0:a.telecom,onChange:r,placeholder:"Select telco",options:["telco","Halopesa","AirtelMoneyTz","TigoPesaTz","Vodacom Tz MPESA"]}),(0,g.jsx)(i.l6,{name:"status",label:"select Status",value:null===a||void 0===a?void 0:a.status,onChange:r,placeholder:"Select Status",options:[{value:"SUCCESSFUL",text:"Success"},{value:"PENDING",text:"Pending"},{value:"FAILED",text:"Fail"}]}),(0,g.jsx)(i.l6,{name:"productId",label:"select Product",value:null===a||void 0===a?void 0:a.productId,onChange:r,placeholder:"Select Product",options:null===l||void 0===l||null===(t=l.map)||void 0===t?void 0:t.call(l,(e=>({value:null===e||void 0===e?void 0:e.id,text:null===e||void 0===e?void 0:e.productName})))}),(0,g.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,g.jsx)(d.A,{type:"reset",outlined:!0,disabled:o,size:"xsm",className:"!rounded-full",children:"Reset"}),(0,g.jsx)(d.A,{type:"submit",disabled:o,size:"xsm",className:"!rounded-full",icon:o&&(0,g.jsx)(u.A,{size:16}),children:"Filter"})]})]})}})}var f=a(29493);function b(){var e,t;const a=(0,o.j)(),{list:d,status:i,info:s,fetchTimes:r,filters:u}=(0,o.G)((e=>e.payments)),{user:c}=(0,o.G)((e=>e.user)),v=(0,n.useMemo)((()=>[{accessor:"phone_number",Header:"Phone Number"},{accessor:"product[productName]",Header:"prize"},{accessor:"amount",Header:"Amount"},{accessor:"status",Header:"Status",Filter:()=>(0,g.jsx)(g.Fragment,{}),Cell:e=>{let{value:t}=e;return(0,g.jsx)("span",{className:""+("successful"==(null===t||void 0===t?void 0:t.toLowerCase())?"text-green-600":"pending"==(null===t||void 0===t?void 0:t.toLowerCase())?"text-orange-500":"text-red-600"),children:null===t||void 0===t?void 0:t.toLowerCase()})}},{accessor:"transaction_date",Header:"Transaction Date",Cell:e=>{let{value:t}=e;return p()(t).format("LLL")}},{accessor:"updated_at",Header:"Updated Date",Cell:e=>{let{value:t}=e;return p()(t).format("LLL")}}]),[]),m=(0,n.useCallback)((async e=>{try{var t,l,o,n;1==(null===c||void 0===c||null===(t=c.attributes)||void 0===t||null===(l=t.radioId)||void 0===l?void 0:l.length)&&(e.radioId=(null===c||void 0===c||null===(o=c.attributes)||void 0===o||null===(n=o.radioId)||void 0===n?void 0:n[0])||(null===e||void 0===e?void 0:e.radioId)),await a((0,f.c)(e)).unwrap()}catch(d){}}),[a,null===c||void 0===c||null===(e=c.attributes)||void 0===e?void 0:e.radioId]);(0,n.useLayoutEffect)((()=>{0==r&&m()}),[r,m]);const h=(0,n.useCallback)((e=>{var t,a,l,o;const n={...e,to:null!==e&&void 0!==e&&e.to?p()(null===e||void 0===e?void 0:e.to).add("23"==p()(null===e||void 0===e?void 0:e.to).format("HH")?0:86369,"seconds").format("YYYY-MM-DD HH:mm"):""};1==(null===c||void 0===c||null===(t=c.attributes)||void 0===t||null===(a=t.radioId)||void 0===a?void 0:a.length)&&(n.radioId=(null===c||void 0===c||null===(l=c.attributes)||void 0===l||null===(o=l.radioId)||void 0===o?void 0:o[0])||(null===n||void 0===n?void 0:n.radioId)),m(n)}),[m,null===c||void 0===c||null===(t=c.attributes)||void 0===t?void 0:t.radioId]),b=(0,n.useCallback)((e=>{m({...u,pageNumber:((null===s||void 0===s?void 0:s.currentPage)||0)+(e||1)})}),[u,m,null===s||void 0===s?void 0:s.currentPage]);return(0,g.jsx)("div",{className:"p-4",children:(0,g.jsx)(l.A,{title:"Payment",columns:v,data:d,loading:"pending"==i,refresh:()=>m(),totalResults:null===s||void 0===s?void 0:s.total,allowExport:!0,AsideNode:x,minimizeFilter:!0,hidePageSizeSelector:!0,getMore:b,onFilter:h,customPaginationActions:!0,hideSearch:!0,currentPage:null===s||void 0===s?void 0:s.currentPage})})}}}]);
//# sourceMappingURL=160.8b86bac0.chunk.js.map