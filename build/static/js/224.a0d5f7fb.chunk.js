"use strict";(self.webpackChunkvuna_deile=self.webpackChunkvuna_deile||[]).push([[224],{98401:(e,s,a)=>{a.d(s,{A:()=>i});new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),new Intl.NumberFormat(void 0,{style:"currency",currency:"Rwf",minimumFractionDigits:2}),new Intl.NumberFormat(void 0,{style:"currency",currency:"TSH",minimumFractionDigits:2});var l=a(14710),r=a(91046);function i(e){let{amount:s=0,currency:a="Tsh",currencySize:i}=e;const n=(0,l.useMemo)((()=>function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return new Intl.NumberFormat(void 0,{style:"currency",currency:e,...s})}catch(a){return console.warn(a),new Intl.NumberFormat(void 0,{style:"currency",currency:"Rwf"})}}(a).formatToParts(s)),[s,a]);return n.map(((e,s)=>(0,r.jsx)("span",{className:0==s?i||"text-xs":"",children:e.value},s)))}},11224:(e,s,a)=>{a.r(s),a.d(s,{default:()=>V});var l=a(99679),r=a(94569),i=a(42215),n=a(4449),d=a.n(n),t=a(14710),o=a(74184),c=a(73887),u=a(76194),m=a(94055),p=a(95834),v=a(28932),x=a(18345),h=a(86298),g=a(91046);function b(e){let{onFilter:s}=e;const{user:a}=(0,i.G)((e=>e.user)),[l,r]=(0,t.useState)(null),[n,b]=(0,t.useState)([{startDate:c.Py,endDate:c.ZI,key:"selection"}]),y=(0,t.useCallback)((async(e,a)=>{let{setSubmitting:r}=a;null===s||void 0===s||s({...e,radioId:l}),r(!1)}),[s,l]);return(0,g.jsx)(x.l1,{initialValues:{from:d()(c.Py).format("YYYY-MM-DD"),to:d()(c.ZI).format("YYYY-MM-DD"),search:"",submit:null},onSubmit:y,children:e=>{var s,i;let{values:t,resetForm:x,isSubmitting:y,handleSubmit:j,handleChange:f,setValues:N}=e;return(0,g.jsxs)("form",{className:"grid gap-3",onSubmit:j,children:[(0,g.jsxs)("div",{className:"hidden",children:[(0,g.jsx)(m.pd,{name:"from",type:"date",value:null===t||void 0===t?void 0:t.from,onChange:f}),(0,g.jsx)(m.pd,{name:"to",type:"date",value:null===t||void 0===t?void 0:t.to,onChange:f})]}),(0,g.jsx)(m.pd,{name:"search",label:"Search",onChange:f,value:null===t||void 0===t?void 0:t.search,placeholder:"search"}),1!=(null===a||void 0===a||null===(s=a.attributes)||void 0===s||null===(i=s.radioId)||void 0===i?void 0:i.length)&&(0,g.jsx)(o.A,{radioId:l,setRadioId:r,className:"!col-span-1"}),(0,g.jsx)(v.A,{mouseEnterDelay:.5,mouseLeaveDelay:.5,content:(0,g.jsx)(h.Ur,{onChange:e=>{let{selection:s}=e;b([s]),N((e=>({...e,from:d()(s.startDate).format("YYYY-MM-DD"),to:d()(s.endDate).format("YYYY-MM-DD")})))},moveRangeOnFirstSelection:!1,months:1,ranges:n,direction:"horizontal",preventSnapRefocus:!0,calendarFocus:"backwards",rangeColors:["var(--primary-color)"],maxDate:c.ZI,minDate:c.Py}),children:(0,g.jsxs)("div",{className:"cursor-pointer",children:[(0,g.jsx)("p",{className:"mb-1 text-grey",children:"Select Date Range"}),(0,g.jsxs)("span",{className:"flex gap-2 items-center [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md",children:[(0,g.jsx)("span",{children:d()(n[0].startDate).format("LL")}),"-",(0,g.jsx)("span",{children:d()(n[0].endDate).format("LL")})]})]})}),(0,g.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,g.jsx)(u.A,{onClick:()=>x(),outlined:!0,disabled:y,size:"xsm",className:"!rounded-full",type:"reset",children:"Reset"}),(0,g.jsx)(u.A,{type:"submit",disabled:y,size:"xsm",className:"!rounded-full",icon:y&&(0,g.jsx)(p.A,{size:16}),children:"Filter"})]})]})}})}var y=a(98401),j=a(12034),f=a(84826),N=a(79688),k=a(79664),A=a(7484),C=a(25019),w=a(78468);const I=e=>{let{field:s,form:a,label:l,value:r}=e;const i=100*Math.random();console.log(a.values[s.name],r);const n=a.values[s.name];let d=!1;d=Array.isArray(n)?n.includes(r):n===r;return(0,g.jsxs)("label",{htmlFor:`check-${i}`,className:"flex items-center space-x-2",children:[(0,g.jsx)("input",{id:`check-${i}`,type:"checkbox",checked:d,onChange:()=>{if(r&&"boolean"==typeof r)a.setFieldValue(s.name,!d);else{const e=new Set(a.values[s.name]);d?e.delete(r):e.add(r),a.setFieldValue(s.name,Array.from(e))}},className:"h-5 w-5 checkbox rounded cursor-pointer"}),l&&(0,g.jsx)("span",{className:"text-gray-700 cursor-pointer capitalize",children:l})]})};var S=a(16330),M=a(11108),D=a(79),F=(0,D.A)("gift","IconGift",[["path",{d:"M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M12 8l0 13",key:"svg-1"}],["path",{d:"M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7",key:"svg-2"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5",key:"svg-3"}]]),P=(0,D.A)("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),Y=a(22867),z=a(94949);function H(e){let{data:s}=e;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(A.A,{positions:"bottom",align:"end",container:(0,g.jsx)("span",{className:"px-1 rounded-md flex border border-solid border-primary border-opacity-20",children:(0,g.jsx)(P,{})}),children:(0,g.jsxs)(w.A,{permission:"update_product",children:[(0,g.jsx)(C.A,{updateProduct:s}),(0,g.jsx)(T,{data:s}),(0,g.jsx)(R,{data:s}),!s.isBonus&&(0,g.jsx)(E,{product:s})]})})})}function T(e){let{data:s}=e;const a=(0,i.j)(),[l,n]=(0,t.useState)(!1),d=(0,t.useCallback)((async()=>{n(!0);try{await a((0,r.ju)({id:null===s||void 0===s?void 0:s.productId,data:{isAvailable:!(null!==s&&void 0!==s&&s.isAvailable)}}))}catch(e){}n(!1)}),[null===s||void 0===s?void 0:s.productId,null===s||void 0===s?void 0:s.isAvailable,a]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"px-4 flex items-center py-2 hover:bg-black hover:bg-opacity-5 "+(l?"text-grey":null!==s&&void 0!==s&&s.isAvailable?"text-red-500":""),onClick:()=>!l&&d(),children:[null!==s&&void 0!==s&&s.isAvailable?(0,g.jsx)(M.A,{className:"w-4"}):(0,g.jsx)(Y.A,{className:"w-4"}),(0,g.jsx)("span",{className:"pl-3",children:null!==s&&void 0!==s&&s.isAvailable?"Disable":"Enable"})]})})}function R(e){let{data:s}=e;const a=(0,i.j)(),[l,n]=(0,t.useState)(!1),d=(0,t.useCallback)((async()=>{n(!0);try{await a((0,r.ju)({id:null===s||void 0===s?void 0:s.productId,data:{isCallNeeded:!(null!==s&&void 0!==s&&s.isCallNeeded)}}))}catch(e){}n(!1)}),[null===s||void 0===s?void 0:s.productId,null===s||void 0===s?void 0:s.isCallNeeded,a]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"px-4 flex items-center py-2 hover:bg-black hover:bg-opacity-5 "+(l?"text-grey":null!==s&&void 0!==s&&s.isCallNeeded?"text-red-500":""),onClick:()=>!l&&d(),children:[null!==s&&void 0!==s&&s.isCallNeeded?(0,g.jsx)(M.A,{className:"w-4"}):(0,g.jsx)(Y.A,{className:"w-4"}),(0,g.jsx)("span",{className:"pl-3",children:null!==s&&void 0!==s&&s.isCallNeeded?"Disable Call":"Enable Call"})]})})}function E(e){let{product:s}=e;const[a,l]=(0,t.useState)(!1),r=(0,t.useCallback)((()=>{l(!0)}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"px-4 py-2 hover:bg-black hover:bg-opacity-5 cursor-pointer flex items-center",onClick:r,children:[(0,g.jsx)(k.ok,{className:"w-4"}),(0,g.jsx)("span",{className:"pl-3",children:"Bonuses"})]}),a&&(0,g.jsx)(B,{product:s,setIsModalOpen:l})]})}function B(e){let{product:s,setIsModalOpen:a}=e;const l=(0,i.j)(),[n,d]=(0,t.useState)(),[o,c]=(0,t.useState)(),[m,v]=(0,t.useState)(),h={bonusProductIds:(null===m||void 0===m?void 0:m.map((e=>e.productId)))||[]};(0,t.useEffect)((()=>{(async()=>{try{const e=await l((0,r.Q0)({isBonus:!0})).unwrap();console.log("all products:",e);const a=await l((0,r.hE)({id:s.productId})).unwrap();d(e.list.filter((e=>e.isBonus))),v(a.bonusProducts)}catch(e){}})()}),[]);const[b,y]=(0,t.useState)("bonuses"),j=e=>{y(e),"unassign"==e?c(m):"assign"==e&&c(n)};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(S.A,{isOpen:!0,onRequestClose:()=>a(!1),size:"sm",children:[(0,g.jsx)(S.w,{title:"Bonuses",onClose:()=>a(!1)}),(0,g.jsxs)("div",{className:"py-6 flex flex-col gap-5  min-h-[300px] max-h-[90vh]",children:[(0,g.jsxs)("div",{className:"flex gap-4",children:[(0,g.jsx)("div",{onClick:()=>j("bonuses"),className:"cursor-pointer p-2 border-b border-b-2 "+("bonuses"==b?"text-primary border-primary":"border-transparent"),children:"Bonuses"}),(0,g.jsx)("div",{onClick:()=>j("assign"),className:"cursor-pointer p-2 border-b border-b-2 "+("assign"==b?"text-primary border-primary":"border-transparent"),children:"Assign"}),(0,g.jsx)("div",{onClick:()=>j("unassign"),className:"cursor-pointer p-2 border-b border-b-2 "+("unassign"==b?"text-primary border-primary":"border-transparent"),children:"Unassign"})]}),(0,g.jsxs)("div",{children:["bonuses"==b&&(0,g.jsxs)(g.Fragment,{children:[0==(null===m||void 0===m?void 0:m.length)&&(0,g.jsx)("p",{className:"text-xs text-red-500 px-2",children:"There is no bonus assigned yet"}),null===m||void 0===m?void 0:m.map((e=>(0,g.jsxs)("div",{className:"border border-gray-100 border-1 px-4 py-2 my-2 rounded-md flex gap-3 items-center w-ful",children:[(0,g.jsx)(F,{className:"w-7 text-gray-500"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"font-medium",children:e.productName}),(0,g.jsx)("div",{className:"font-light text-sm",children:e.englishName})]})]})))]}),"bonuses"!=b&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(x.l1,{enableReinitialize:!0,initialValues:h,validationSchema:z.Ik().shape({bonusProductIds:z.YO().min(1,"Select at least one")}),onSubmit:async e=>{try{"assign"==b?await l((0,r.fj)({data:e,id:s.productId})).unwrap():await l((0,r.k8)({data:e,id:s.productId})).unwrap(),a(!1)}catch(i){console.log(i)}},children:e=>{let{errors:s,handleSubmit:a,isSubmitting:l,touched:r}=e;return(0,g.jsxs)("form",{noValidate:!0,onSubmit:a,className:"flex flex-col gap-3 my-4",children:[0==(null===o||void 0===o?void 0:o.length)&&(0,g.jsxs)("p",{className:"text-xs text-red-500 px-2",children:["There is no bonus to ","assign"==b?"assign":"remove"]}),null===o||void 0===o?void 0:o.map((e=>(0,g.jsx)("div",{children:(0,g.jsx)(x.D0,{name:"bonusProductIds",component:I,label:e.productName,value:e.productId})},e.productId))),r.bonusProductIds&&s.bonusProductIds&&(0,g.jsx)("div",{className:"text-red-500 text-sm",children:s.bonusProductIds}),(0,g.jsx)(u.A,{type:"submit",disabled:l,size:"xsm",className:"!rounded-full",icon:l&&(0,g.jsx)(p.A,{size:16}),children:(0,g.jsx)("span",{children:"Save"})})]})}})})]})]})]})})}function O(e){let{page:s,loading:a}=e;return a?(0,g.jsx)("div",{className:"w-full flex justify-center",children:(0,g.jsx)(N.A,{})}):(0,g.jsx)("div",{className:"grid gap-x-2 gap-y-3 text-sm grid-cols-[repeat(auto-fill,_minmax(min(100%,20rem),1fr))]",children:s.map((e=>{var s,a,l,r,i,n,d,t,o,c,u,m,p,v;return(0,g.jsxs)("div",{className:"py-3 px-4 flex flex-col rounded-md border border-solid border-primary border-opacity-10",children:[(0,g.jsxs)("div",{className:"flex gap-2 items-center justify-between text-primary",children:[(0,g.jsxs)("div",{className:"flex gap-1 flex-wrap",children:[(0,g.jsx)("span",{className:`p-2 py-1 rounded-md ${null!==e&&void 0!==e&&null!==(a=e.original)&&void 0!==a&&a.isAvailable?"bg-primary":"bg-grey text-red-700"} bg-opacity-5`,children:null!==e&&void 0!==e&&null!==(l=e.original)&&void 0!==l&&l.isAvailable?"Available":"Unavailable"}),(null===e||void 0===e||null===(r=e.original)||void 0===r?void 0:r.isCallNeeded)&&(0,g.jsx)("span",{className:"p-2 py-1 rounded-md bg-primary bg-opacity-5",children:"Can Call"}),(null===e||void 0===e||null===(i=e.original)||void 0===i?void 0:i.isBonus)&&(0,g.jsx)("span",{className:"p-2 py-1 rounded-md bg-gray-100",children:"Bonus"})]}),(0,g.jsx)(H,{data:null===e||void 0===e?void 0:e.original})]}),(0,g.jsxs)("div",{className:"flex flex-wrap gap-2 pt-4 flex-1",children:[(0,g.jsx)("img",{loading:"lazy",src:(null===e||void 0===e||null===(n=e.original)||void 0===n?void 0:n.picture)||f,className:"sm:w-[30%] object-contain max-w-full rounded-lg mx-auto",onError:e=>{e.target.onError=null,e.target.src=f}}),(0,g.jsxs)("div",{className:"flex-1 grid self-center",children:[(0,g.jsx)("h3",{className:"font-medium",children:null===e||void 0===e||null===(d=e.original)||void 0===d?void 0:d.productName}),(0,g.jsxs)("div",{className:"flex flex-wrap gap-x-4",children:[(0,g.jsx)("p",{className:"text-grey flex-1",children:null===e||void 0===e||null===(t=e.original)||void 0===t?void 0:t.description}),(0,g.jsxs)("span",{children:[(0,g.jsx)("small",{className:"text-grey",children:"Tsh"})," ",(0,g.jsx)(j.A,{value:null===e||void 0===e||null===(o=e.original)||void 0===o?void 0:o.playAmount,clickToggle:!0})]})]})]})]}),(0,g.jsxs)("div",{className:"flex [&>*]:flex-1 gap-1 pt-2 [&>*>span]:text-grey max-sm:flex-col",children:[(0,g.jsxs)("p",{className:"p-2 py-1 rounded-md bg-primary bg-opacity-5",children:[(0,g.jsx)("span",{children:"Winners"}),(0,g.jsx)("br",{}),null===e||void 0===e||null===(c=e.original)||void 0===c?void 0:c.numberOfWinners]}),(0,g.jsxs)("p",{className:"p-2 py-1 rounded-md bg-primary bg-opacity-5",children:[(0,g.jsx)("span",{children:"D.Period"}),(0,g.jsx)("br",{}),null===e||void 0===e||null===(u=e.original)||void 0===u?void 0:u.drawPeriod]}),(0,g.jsxs)("p",{className:"p-2 py-1 rounded-md bg-primary bg-opacity-5",children:[(0,g.jsxs)("span",{children:["Cost ",(0,g.jsx)("small",{children:"(TSH)"})]}),(0,g.jsx)("br",{}),(0,g.jsx)("span",{className:"!text-foreground",children:(0,g.jsx)(j.A,{value:null===e||void 0===e||null===(m=e.original)||void 0===m?void 0:m.productCost,clickToggle:!0})})]})]}),(0,g.jsxs)("div",{className:"flex [&>*]:flex-1 gap-1 pt-2 [&>*>span]:text-grey max-sm:flex-col",children:[(0,g.jsxs)("p",{className:"p-2 py-1 rounded-md bg-primary bg-opacity-5",children:[(0,g.jsx)("span",{children:"Priority"}),(0,g.jsx)("br",{}),null===e||void 0===e||null===(p=e.original)||void 0===p?void 0:p.priority]}),(0,g.jsxs)("p",{className:"p-2 py-1 rounded-md bg-primary bg-opacity-5",children:[(0,g.jsx)("span",{children:"Margin"}),(0,g.jsx)("br",{}),null===e||void 0===e||null===(v=e.original)||void 0===v?void 0:v.product_margin]})]})]},null===e||void 0===e||null===(s=e.original)||void 0===s?void 0:s.id)}))})}var L=a(55932);function V(){var e;const s=(0,i.j)(),{list:a,status:n,info:o,filters:c}=(0,i.G)((e=>e.products)),{user:u}=(0,i.G)((e=>e.user)),m=(0,t.useMemo)((()=>[{accessor:"name",Header:"name"},{accessor:"description",Header:"description"},{accessor:"productCost",Header:"Cost",Cell:e=>{let{value:s}=e;return(0,g.jsx)(y.A,{amount:Number(s)})}},{accessor:"numberOfWinners",Header:"Winners"},{accessor:"status",Header:"Status",Filter:()=>(0,g.jsx)(g.Fragment,{})},{accessor:"playAmount",Header:"play Amount",Cell:e=>{let{value:s}=e;return(0,g.jsx)(y.A,{amount:s})}}]),[]),p=(0,t.useCallback)((async e=>{try{var a,l,i,n;1==(null===u||void 0===u||null===(a=u.attributes)||void 0===a||null===(l=a.radioId)||void 0===l?void 0:l.length)&&(e.radioId=(null===u||void 0===u||null===(i=u.attributes)||void 0===i||null===(n=i.radioId)||void 0===n?void 0:n[0])||(null===e||void 0===e?void 0:e.radioId)),console.log({data:e}),await s((0,r.bn)(e)).unwrap()}catch(d){}}),[s,null===u||void 0===u||null===(e=u.attributes)||void 0===e?void 0:e.radioId]);(0,t.useLayoutEffect)((()=>{p({pageSize:10})}),[p]);const v=(0,t.useCallback)((e=>{s((0,L._F)(e)),p({...e,to:d()(null===e||void 0===e?void 0:e.to).add("23"==d()(null===e||void 0===e?void 0:e.to).format("HH")?0:86369,"seconds").format("YYYY-MM-DD HH:mm")})}),[s,p]),x=(0,t.useCallback)((e=>{p({...c,pageNumber:((null===o||void 0===o?void 0:o.currentPage)||0)+(e||1)})}),[c,p,null===o||void 0===o?void 0:o.currentPage]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"p-4",children:(0,g.jsx)(l.A,{title:"Prizes",columns:m,data:a,loading:"pending"==n,refresh:()=>p(),totalResults:null===o||void 0===o?void 0:o.total,allowExport:!0,CustomTable:O,AsideNode:b,minimizeFilter:!0,hidePageSizeSelector:!0,onFilter:v,customPaginationActions:!0,currentPage:null===o||void 0===o?void 0:o.currentPage,defaultPageSize:c.pageSize||10,getMore:x,hideSearch:!0})})})}},22867:(e,s,a)=>{a.d(s,{A:()=>l});var l=(0,a(79).A)("checks","IconChecks",[["path",{d:"M7 12l5 5l10 -10",key:"svg-0"}],["path",{d:"M2 12l5 5m5 -5l5 -5",key:"svg-1"}]])},11108:(e,s,a)=>{a.d(s,{A:()=>l});var l=(0,a(79).A)("trash-x","IconTrashX",[["path",{d:"M4 7h16",key:"svg-0"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-1"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-2"}],["path",{d:"M10 12l4 4m0 -4l-4 4",key:"svg-3"}]])}}]);
//# sourceMappingURL=224.a0d5f7fb.chunk.js.map