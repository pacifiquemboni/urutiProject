"use strict";(self.webpackChunkvuna_deile=self.webpackChunkvuna_deile||[]).push([[540],{7484:(e,s,l)=>{l.d(s,{A:()=>d,H:()=>o});var a=l(14710),r=l(76194),i=l(18062),n=l(91046);function o(e){let{children:s,className:l="",onClick:a}=e;return(0,n.jsx)("div",{className:`py-2 px-4 hover:bg-black hover:bg-opacity-5 ${l}`,onClick:a,children:s})}function d(e){let{children:s,positions:l,align:o,arrowColor:d,bordered:t,container:u,containerClassName:c,className:m=""}=e;const[v,p]=(0,a.useState)(!1);return(0,n.jsx)(i.Popover,{isOpen:v,positions:l||["left","right"],align:o||"center",padding:8,containerClassName:c,onClickOutside:e=>{e.target.closest(".ReactModalPortal")||p(!1)},content:e=>{let{position:l,childRect:a,popoverRect:r}=e;return(0,n.jsx)(i.ArrowContainer,{position:l,childRect:a,popoverRect:r,arrowColor:d||"#333",arrowSize:5,children:(0,n.jsx)("div",{className:`bg-slate-50 rounded-lg shadow-md !max-w-none min-w-44 overflow-auto ${t?"border border-solid border-blue-950 border-opacity-5":""} ${m}`,children:s})})},children:(0,n.jsx)("div",{onClick:()=>p(!v),className:"btn-container text-inherit",children:u||(0,n.jsx)(r.A,{size:"xsm3",className:"px-0 !border-transparent",outlined:!0,children:(0,n.jsx)("svg",{className:" min-w-[1.25rem] w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 4 15",children:(0,n.jsx)("path",{d:"M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})})})})})}},30427:(e,s,l)=>{l.d(s,{A:()=>h});var a=l(14710),r=l(76194),i=l(16330),n=l(94949),o=l(18345),d=l(94055),t=l(95834),u=l(79664),c=l(42215),m=l(27407),v=l(74184),p=l(91046);const h=e=>{let{updateUser:s}=e;const l=(0,a.useMemo)((()=>{var e,l;return s?{phoneNumber:(null===s||void 0===s||null===(e=s.attributes)||void 0===e||null===(l=e.phoneNumber)||void 0===l?void 0:l[0])||"",username:(null===s||void 0===s?void 0:s.username)||"",firstName:(null===s||void 0===s?void 0:s.firstName)||"",lastName:(null===s||void 0===s?void 0:s.lastName)||"",email:(null===s||void 0===s?void 0:s.email)||"",submit:null}:{phoneNumber:"",username:"",firstName:"",lastName:"",radioId:"",email:"",password:"",cpassword:"",submit:null}}),[s]),[h,x]=(0,a.useState)(!1),g=(0,c.j)(),[j,b]=(0,a.useState)(null),f=()=>{x(!0)},N=()=>{x(!1)},y=(0,a.useCallback)((async(e,a)=>{let{setErrors:r,setStatus:i,setSubmitting:n,setValues:o,setTouched:d}=a;try{const{submit:a,cpassword:r,...n}=e;s?await g((0,m.sb)({data:n,id:null===s||void 0===s?void 0:s.id})).unwrap():(n.radioId=j||void 0,await g((0,m.Yr)({data:n})).unwrap(),await g((0,m.x9)({})).unwrap()),i({success:!0}),d({}),o(l)}catch(x){var t,u,c,v,p,h;i({success:!1}),r({submit:(null===x||void 0===x||null===(t=x.response)||void 0===t||null===(u=t.data)||void 0===u||null===(c=u.message)||void 0===c||null===(v=c.map)||void 0===v||null===(p=v.call(c,(e=>`<p>${e},</p>`)))||void 0===p||null===(h=p.join)||void 0===h?void 0:h.call(p," "))||x.message||"Something went wrong, please try again."})}n(!1),N()}),[g,l,j,s]);return(0,p.jsxs)(a.Fragment,{children:[s?(0,p.jsxs)("div",{className:"px-4 py-2 hover:bg-black hover:bg-opacity-5",onClick:f,children:[(0,p.jsx)(u.qU,{className:"w-4"}),(0,p.jsx)("span",{className:"pl-3",children:"Edit"})]}):(0,p.jsx)(r.A,{size:"xsm",outlined:!0,onClick:f,children:(0,p.jsx)("span",{children:"Add User"})}),(0,p.jsxs)(i.A,{size:"sm",isOpen:h,onRequestClose:()=>N(),className:"font-outfit",children:[(0,p.jsx)(i.w,{title:(s?"Update":"Add")+" User",onClose:()=>N()}),(0,p.jsx)(o.l1,{initialValues:l,validationSchema:n.Ik().shape({phoneNumber:n.Yj().required("Phone number is required"),username:n.Yj().required("Username is required"),firstName:n.Yj().required("First name is required"),lastName:n.Yj().required("Last name is required"),...s?{email:n.Yj().email().required("Email is required")}:{password:n.Yj().min(3).max(50).required("Password is required"),cpassword:n.Yj().required("Please retype your password.").oneOf([n.KR("password")],"Your passwords do not match."),email:n.Yj().email().required("Email is required")}}),onSubmit:y,children:e=>{let{errors:l,handleBlur:a,handleChange:i,handleSubmit:n,isSubmitting:o,touched:u,values:c}=e;return(0,p.jsxs)("form",{noValidate:!0,onSubmit:n,className:"flex flex-col gap-3 my-4",children:[l.submit&&(0,p.jsx)("p",{className:"bg-red-500 p-2 px-4 text-white text-sm text-center rounded-md",dangerouslySetInnerHTML:{__html:l.submit}}),(0,p.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,p.jsx)(d.pd,{type:"text",name:"username",label:"Username",placeholder:"Enter Username",error:`${l.username||""}`,defaultValue:c.username,onChange:i,onBlur:a,isTouched:Boolean(u.username),className:"mb-0.5",boxClassName:s?"col-span-2":""}),!s&&(0,p.jsx)(v.A,{radioId:"",setRadioId:b,className:"!col-span-1"}),(0,p.jsx)(d.pd,{type:"text",name:"firstName",label:"First name",placeholder:"Enter first name",error:`${l.firstName||""}`,defaultValue:c.firstName,onChange:i,onBlur:a,isTouched:Boolean(u.firstName),className:"mb-0.5"}),(0,p.jsx)(d.pd,{type:"text",name:"lastName",label:"Last name",placeholder:"Enter last name",error:`${l.lastName||""}`,defaultValue:c.lastName,onChange:i,onBlur:a,isTouched:Boolean(u.lastName),className:"mb-0.5"}),(0,p.jsx)(d.pd,{name:"phoneNumber",label:"Phone number",placeholder:"Enter phone number",error:`${l.phoneNumber||""}`,defaultValue:c.phoneNumber,onChange:i,onBlur:a,isTouched:Boolean(u.phoneNumber),className:"mb-0.5"}),(0,p.jsx)(d.pd,{type:"text",name:"email",label:"Email Address",placeholder:"Enter Email",error:`${l.email||""}`,defaultValue:c.email,onChange:i,onBlur:a,isTouched:Boolean(u.email),className:"mb-0.5"}),!s&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.pd,{label:"Password",name:"password",type:"password",placeholder:"Create Passsword",autoComplete:"password",onChange:i,onBlur:a,value:c.password,error:l.password,isTouched:Boolean(u.password),required:!0}),(0,p.jsx)(d.pd,{label:"Confirm Password",name:"cpassword",type:"password",placeholder:"Confirm Your Password",autoComplete:"password",onChange:i,onBlur:a,value:c.cpassword,error:l.cpassword,isTouched:Boolean(u.cpassword),required:!0})]})]}),(0,p.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,p.jsx)(r.A,{type:"reset",outlined:!0,onClick:()=>N(),disabled:o,size:"xsm",className:"!rounded-full",children:"Cancel"}),(0,p.jsx)(r.A,{type:"submit",disabled:o,size:"xsm",className:"!rounded-full",icon:o&&(0,p.jsx)(t.A,{color:"inherit",size:16}),children:(0,p.jsxs)("span",{children:[s?"Update":"Add"," User"]})})]})]})}})]})]})}},78468:(e,s,l)=>{l.d(s,{A:()=>d});var a=l(39338),r=l(42215),i=l(47472),n=l(14710),o=l(91046);const d=function(e){var s,l,d,t;let{children:u,roles:c=[],permission:m,otherwise:v,fallback:p,...h}=e;const{good:x,bad:g}=(0,a.S)(c),{good:j,bad:b}=(0,a.S)(m?Array.isArray(m)?m:[m]:[""]),{user:f,status:N,allowedPermissions:y}=(0,r.G)((e=>e.user));return"pending"==N||"pending"==y.status?(0,o.jsx)(i.A,{}):(m?(null===y||void 0===y||null===(s=y.list)||void 0===s?void 0:s.some((e=>j.includes(e))))&&(null===y||void 0===y||null===(l=y.list)||void 0===l||!l.some((e=>b.includes(e)))):0===c.length||g.length&&!g.includes(null===f||void 0===f||null===(d=f.role)||void 0===d?void 0:d.toLowerCase())||x.length&&(null===x||void 0===x?void 0:x.includes(null===f||void 0===f||null===(t=f.role)||void 0===t?void 0:t.toLowerCase())))?(0,o.jsx)(n.Fragment,{...h,children:u}):v||(p?(0,o.jsx)(n.Fragment,{...h,children:p}):(0,o.jsx)(n.Fragment,{...h}))}},74184:(e,s,l)=>{l.d(s,{A:()=>t});var a=l(14710),r=l(87718),i=l(91046);const n=(0,a.forwardRef)(((e,s)=>{let{filterFn:l,...n}=e;const o=(0,a.useCallback)((e=>new Promise((s=>s(null===l||void 0===l?void 0:l(e))))),[l]),d=(0,a.useRef)(s);return(0,i.jsx)(r.A,{ref:d,cacheOptions:!0,defaultOptions:!0,loadOptions:o,...n})}));var o=l(68852);const d=async e=>{try{var s,l,a;const r=await o.pY.get(`/v1/category?search=${e}`,{params:{pageSize:8,pageNumber:1}});return null===(s=[{id:null,name:"Select Radio"},...(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.list)||[]])||void 0===s||null===(l=s.map)||void 0===l?void 0:l.call(s,(e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})))}catch(r){return[]}};function t(e){let{radioId:s,setRadioId:l,className:a=""}=e;return(0,i.jsxs)("label",{htmlFor:"radioId",className:`sm:col-span-2 ${a}`,onClick:e=>e.stopPropagation(),children:[(0,i.jsx)("span",{className:"text-neutral-700 mb-2 inline-block",children:"Select Radio"}),(0,i.jsx)(n,{id:"radioId",name:"radioId",className:"bg-neutral-200",styles:{control:e=>({...e,border:"none",boxShadow:"none",background:"transparent",borderRadius:".2rem"}),valueContainer:e=>({...e,paddingInline:"1rem"})},filterFn:d,onChange:e=>l(null===e||void 0===e?void 0:e.value),defaultInputValue:s||""})]})}},52582:(e,s,l)=>{l.d(s,{A:()=>r});var a=l(91046);function r(e){let{className:s=""}=e;return(0,a.jsx)("div",{className:`h-[1.5px] bg-light-grey my-3 mt-6 ${s}`,style:{boxShadow:"-10rem 0 0 var(--light-grey-color), 10rem 0 0 var(--light-grey-color)"}})}},16330:(e,s,l)=>{l.d(s,{A:()=>o,w:()=>d});var a=l(62979),r=l.n(a),i=l(76194),n=l(91046);function o(e){let{children:s,isOpen:l,onRequestClose:a,className:i,size:o}=e;return(0,n.jsx)(r(),{isOpen:l,onRequestClose:a,className:`${o?`size_${o}`:""} ${i||""}`,children:s})}function d(e){let{onClose:s,title:l}=e;return(0,n.jsxs)("div",{className:"flex justify-between mb-4",children:["string"==typeof l?(0,n.jsx)("h3",{children:l}):l,(0,n.jsx)(i.A,{className:"!text-black !bg-transparent !p-0",size:"xsm2",onClick:()=>s(),children:"X"})]})}r().setAppElement("#modals")},90540:(e,s,l)=>{l.r(s),l.d(s,{default:()=>P});var a=l(99679),r=l(27407),i=l(42215),n=l(14710),o=l(7484),d=l(30427),t=l(79664),u=l(76194),c=l(16330),m=l(34049),v=l(91046);function p(e){let{data:s}=e;const[l,a]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1),p=(0,i.j)(),h=(0,n.useCallback)((async()=>{d(!0);const e=m.oR.loading("Deleting User...");try{await p((0,r.yr)({id:`${null===s||void 0===s?void 0:s.id}`})).unwrap(),m.oR.update(e,{render:"User deleted Successfully!",type:"success",isLoading:!1,autoClose:5e3})}catch(l){m.oR.update(e,{render:"Error in deleting User.",type:"error",isLoading:!1,autoClose:5e3})}d(!1)}),[s,p]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"px-4 py-2 hover:bg-black hover:bg-opacity-5 text-red-600 flex items-center",onClick:()=>a(!0),children:[(0,v.jsx)(t.uc,{className:"w-4"}),(0,v.jsx)("span",{className:"pl-3",children:"delete"})]}),(0,v.jsxs)(c.A,{size:"sm",isOpen:l,onRequestClose:()=>a(!1),children:[(0,v.jsx)(c.w,{title:"Delete User",onClose:()=>a(!1)}),(0,v.jsxs)("p",{className:"max-w-[40ch]",children:["Are you sure you want to delete user ",(0,v.jsx)("br",{}),(0,v.jsxs)("b",{children:[null===s||void 0===s?void 0:s.firstName," ",null===s||void 0===s?void 0:s.lastName]}),"?"]}),(0,v.jsx)("div",{className:"flex mt-4",children:(0,v.jsxs)("div",{className:"flex-1 flex justify-end gap-2",children:[(0,v.jsx)(u.A,{size:"xsm",className:"!rounded-full",onClick:()=>a(!1),disabled:o,outlined:!0,children:"No thanks"}),(0,v.jsx)(u.A,{size:"xsm",className:"!rounded-full",onClick:h,disabled:o,children:"Delete"})]})})]})]})}var h=l(78468),x=l(52582),g=l(94055),j=(0,l(79).A)("user-shield","IconUserShield",[["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h2",key:"svg-0"}],["path",{d:"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z",key:"svg-1"}],["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-2"}]]),b=l(98510),f=l(95834),N=l(69167),y=l(18345),w=l(94949);function C(e){let{data:s}=e;const[l,r]=(0,n.useState)(!1),i=(0,n.useMemo)((()=>[{Header:"Title",accessor:"name"},{Header:"",accessor:"id",Cell:()=>(0,v.jsx)(u.A,{size:"xsm3",progress:"fail",children:"Remove"})}]),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"px-4 py-2 hover:bg-black hover:bg-opacity-5 flex items-center",onClick:()=>r(!0),children:[(0,v.jsx)(j,{className:"w-5"}),(0,v.jsx)("span",{className:"pl-2",children:"Roles"})]}),(0,v.jsxs)(c.A,{isOpen:l,onRequestClose:()=>r(!1),children:[(0,v.jsx)(c.w,{title:null===s||void 0===s?void 0:s.username,onClose:()=>r(!1)}),(0,v.jsx)(x.A,{className:"mt-0 h-[.8px]"}),(0,v.jsx)(a.A,{data:null===s||void 0===s?void 0:s.groups,columns:i,hidePagination:!0,defaultPageSize:100,title:(0,v.jsx)("small",{children:"Assigned Roles"}),CustomTable:e=>(0,v.jsx)(k,{...e,user:s})})]})]})}function A(e){let{data:s,user:l}=e;const[a,o]=(0,n.useState)(!1),[d,t]=(0,n.useState)(!1),m=(0,i.j)(),p=(0,n.useCallback)((async()=>{t(!0);try{await m((0,r.$7)({userId:null===l||void 0===l?void 0:l.id,groupId:null===s||void 0===s?void 0:s.id})).unwrap()}catch(e){}t(!1)}),[null===s||void 0===s?void 0:s.id,m,null===l||void 0===l?void 0:l.id]);return(0,v.jsxs)("div",{className:"py-2 px-4 flex items-center justify-between rounded-md bg-light-grey bg-opacity-40",children:[(0,v.jsx)("p",{children:null===s||void 0===s?void 0:s.name}),(0,v.jsx)("div",{className:"flex items-center justify-between gap-2",children:(0,v.jsxs)(h.A,{permission:"unassign_users_to_group",children:[(0,v.jsx)("div",{onClick:()=>o(!0),className:"flex items-center justify-center cursor-pointer",children:(0,v.jsx)(b.A,{className:"text-red-400 size-5"})}),(0,v.jsxs)(c.A,{isOpen:a,onRequestClose:()=>o(!1),size:"sm",className:"max-w-[40ch]",children:[(0,v.jsx)(c.w,{title:"Delete Permission",onClose:()=>o(!1)}),(0,v.jsxs)("p",{children:["Are you sure you want to remove permission ",(0,v.jsx)("b",{children:null===s||void 0===s?void 0:s.name})," from"," ",(0,v.jsxs)("b",{children:[`${null===l||void 0===l?void 0:l.firstName} ${null===l||void 0===l?void 0:l.lastName}`," ",(0,v.jsxs)("small",{children:["(",null===l||void 0===l?void 0:l.username,")"]})]})]}),(0,v.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,v.jsx)(u.A,{outlined:!0,disabled:d,onClick:()=>o(!1),size:"xsm",className:"!rounded-full",children:"No, thanks"}),(0,v.jsx)(u.A,{onClick:p,disabled:d,size:"xsm",className:"!rounded-full",icon:d&&(0,v.jsx)(f.A,{color:"inherit",size:16}),children:"Yes, Delete"})]})]})]})})]})}function k(e){let{page:s,user:l}=e;return(0,v.jsxs)("div",{className:"grid gap-2 grid-cols-[repeat(auto-fill,_minmax(min(100%,10rem),1fr))]",children:[s.map((e=>{var s;return(0,v.jsx)(A,{data:null===e||void 0===e?void 0:e.original,user:l},null===e||void 0===e||null===(s=e.original)||void 0===s?void 0:s.id)})),(0,v.jsx)(h.A,{permission:"assign_users_to_group",children:(0,v.jsx)(S,{user:l})})]})}function S(e){let{user:s}=e;const[l,a]=(0,n.useState)(!1),{list:o}=(0,i.G)((e=>e.roles)),d=(0,i.j)(),t=(0,n.useCallback)((async(e,l)=>{let{setErrors:a,setStatus:i,setSubmitting:n,setTouched:o,resetForm:t}=l;try{var u,c;const{submit:l,...a}=e,v=null===a||void 0===a||null===(u=a.group)||void 0===u||null===(c=u.split)||void 0===c?void 0:c.call(u,"_**_");await d((0,r.eQ)({userId:null===s||void 0===s?void 0:s.id,groupId:null===v||void 0===v?void 0:v[0],groupName:null===v||void 0===v?void 0:v[1]})).unwrap(),n(!1),i({success:!0}),o({}),t(),(0,m.oR)("Role assigned successfully!",{type:"success",autoClose:5e3})}catch(v){i({success:!1}),a({submit:v.message||"Something went wrong, please try again."}),n(!1),(0,m.oR)("Error in Assigning Role.",{type:"success",autoClose:5e3})}}),[d,s]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{onClick:()=>a(!0),className:"flex items-center justify-center gap-2 p-3 py-3 rounded-md border border-dashed text-primary border-primary border-opacity-30 cursor-pointer",children:[(0,v.jsx)(N.A,{}),(0,v.jsx)("p",{children:"Add Role"})]}),(0,v.jsxs)(c.A,{isOpen:l,onRequestClose:()=>a(!1),size:"sm",children:[(0,v.jsx)(c.w,{title:"Add Role",onClose:()=>a(!1)}),(0,v.jsx)(y.l1,{initialValues:{group:"",submit:null},validationSchema:w.Ik().shape({group:w.Yj().required("Role is required")}),onSubmit:t,children:e=>{let{errors:s,handleBlur:l,handleChange:a,handleSubmit:r,resetForm:i,isSubmitting:n,touched:d,values:t}=e;return(0,v.jsxs)("form",{method:"post",className:"flex flex-col gap-4 justify-center [&_input]:!rounded-xl",onSubmit:r,children:[s.submit?(0,v.jsx)("p",{className:"text-red-500 -my-2",children:s.submit}):(0,v.jsx)("p",{className:"text-transparent select-none -my-2",children:"error"}),(0,v.jsx)(g.l6,{name:"group",label:"Select Role",placeholder:"Select Role",onChange:a,onBlur:l,value:t.group,error:s.group,isTouched:Boolean(d.group),options:null===o||void 0===o?void 0:o.map((e=>({value:`${null===e||void 0===e?void 0:e.id}_**_${null===e||void 0===e?void 0:e.name}`,text:null===e||void 0===e?void 0:e.name}))),required:!0}),(0,v.jsxs)("div",{className:"flex justify-end pt-2 gap-2",children:[(0,v.jsx)(u.A,{onClick:()=>i(),outlined:!0,disabled:n,size:"xsm",className:"!rounded-full",children:"Reset"}),(0,v.jsx)(u.A,{type:"submit",disabled:n,size:"xsm",className:"!rounded-full",icon:n&&(0,v.jsx)(f.A,{color:"inherit",size:16}),children:"Assign Role"})]})]})}})]})]})}function R(e){let{data:s}=e;return(0,v.jsxs)(o.A,{children:[(0,v.jsx)(h.A,{permission:"assign_users_to_group",children:(0,v.jsx)(C,{data:null===s||void 0===s?void 0:s.original})}),(0,v.jsxs)(h.A,{permission:"edit_user",children:[(0,v.jsx)(d.A,{updateUser:null===s||void 0===s?void 0:s.original}),(0,v.jsx)(p,{data:null===s||void 0===s?void 0:s.original})]})]})}var q=l(4449),z=l.n(q),I=l(53270);function P(){var e;const s=(0,i.j)(),{list:l,status:o,fetchTimes:d,info:t}=(0,i.G)((e=>e.users)),{user:u}=(0,i.G)((e=>e.user)),{fetchTimes:c}=(0,i.G)((e=>e.roles)),m=(0,n.useMemo)((()=>[{accessor:"username",Header:"Username"},{accessor:"firstName",Header:"First Name"},{accessor:"lastName",Header:"Last Name"},{accessor:e=>{var s,l;return(null===e||void 0===e||null===(s=e.groups)||void 0===s||null===(l=s.map((e=>null===e||void 0===e?void 0:e.name)))||void 0===l?void 0:l.join(","))||"-"},id:"groups",Header:"Role"},{accessor:"email",Header:"Email"},{accessor:e=>{var s,l,a;return null===e||void 0===e||null===(s=e.attributes)||void 0===s||null===(l=s.phoneNumber)||void 0===l||null===(a=l.toString)||void 0===a?void 0:a.call(l)},Header:"Phone Number"},{accessor:"emailVerified",Header:"Email Verified",Cell:e=>{let{value:s}=e;return(0,v.jsx)("span",{className:s?"text-green-500":"text-red-500",children:s?"true":"false"})}},{accessor:"enabled",Header:"Enabled",Cell:e=>{let{value:s}=e;return(0,v.jsx)("span",{className:s?"text-green-500":"text-red-500",children:s?"true":"false"})}},{id:"joinAt",accessor:"createdTimestamp",Header:"Joined At",Cell:e=>{let{value:s}=e;return z()(s).format("LLL")}},{id:"actions",Cell:e=>{let{row:s}=e;return(0,v.jsx)(R,{data:s})}}]),[]),p=(0,n.useCallback)((async e=>{try{var l,a,i,n;1==(null===u||void 0===u||null===(l=u.attributes)||void 0===l||null===(a=l.radioId)||void 0===a?void 0:a.length)&&(e.radioId=(null===u||void 0===u||null===(i=u.attributes)||void 0===i||null===(n=i.radioId)||void 0===n?void 0:n[0])||(null===e||void 0===e?void 0:e.radioId)),await s((0,r.x9)(e)).unwrap()}catch(o){}}),[s,null===u||void 0===u||null===(e=u.attributes)||void 0===e?void 0:e.radioId]),h=(0,n.useCallback)((async()=>{try{await s((0,I.kF)()).unwrap()}catch(e){}}),[s]);(0,n.useLayoutEffect)((()=>{0==c&&h()}),[h,c]),(0,n.useLayoutEffect)((()=>{d<1&&p()}),[d,p]);const x=(0,n.useCallback)((e=>{p({pageNumber:((null===t||void 0===t?void 0:t.currentPage)||0)+(e||1)})}),[p,null===t||void 0===t?void 0:t.currentPage]);return(0,v.jsx)("div",{className:"p-4",children:(0,v.jsx)(a.A,{title:"Users",columns:m,data:l,loading:"pending"==o,refresh:()=>p(),totalResults:null===t||void 0===t?void 0:t.total,hidePageSizeSelector:!0,getMore:x,customPaginationActions:!0,currentPage:null===t||void 0===t?void 0:t.currentPage,defaultSortBy:[{id:"joinAt",desc:!0}]})})}},95834:(e,s,l)=>{l.d(s,{A:()=>a});var a=(0,l(79).A)("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]])},69167:(e,s,l)=>{l.d(s,{A:()=>a});var a=(0,l(79).A)("new-section","IconNewSection",[["path",{d:"M9 12l6 0",key:"svg-0"}],["path",{d:"M12 9l0 6",key:"svg-1"}],["path",{d:"M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5",key:"svg-2"}]])},98510:(e,s,l)=>{l.d(s,{A:()=>a});var a=(0,l(79).A)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}}]);
//# sourceMappingURL=540.c832dcdb.chunk.js.map