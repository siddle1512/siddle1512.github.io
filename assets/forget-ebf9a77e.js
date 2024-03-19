import{a as V,g as Z,aA as D,s as $,a7 as d,_ as x,aB as L,r as i,u as ee,b as re,k as ae,j as a,c as te,d as oe,a9 as ne,a8 as se,R as ie,B as le,S as k,C as T,T as W,t as I,w as M,v as q,H as N,aC as ce,A as R,K as b,W as de}from"./index-98796e33.js";import{a as A}from"./axios-a342f982.js";import{D as ue,a as fe,b as me,c as pe}from"./DialogTitle-61df68e4.js";function he(e){return V("MuiLinearProgress",e)}Z("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const ge=["className","color","value","valueBuffer","variant"];let v=e=>e,U,z,F,K,X,H;const B=4,be=D(U||(U=v`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),xe=D(z||(z=v`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),ve=D(F||(F=v`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Ce=e=>{const{classes:r,variant:t,color:n}=e,C={root:["root",`color${d(n)}`,t],dashed:["dashed",`dashedColor${d(n)}`],bar1:["bar",`barColor${d(n)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${d(n)}`,t==="buffer"&&`color${d(n)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return oe(C,he,r)},E=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?ne(e.palette[r].main,.62):se(e.palette[r].main,.5),Pe=$("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${d(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>x({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:E(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),ye=$("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${d(t.color)}`]]}})(({ownerState:e,theme:r})=>{const t=E(r,e.color);return x({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},L(K||(K=v`
    animation: ${0} 3s infinite linear;
  `),ve)),je=$("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${d(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>x({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${B}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${B}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&L(X||(X=v`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),be)),we=$("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${d(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>x({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:E(r,e.color),transition:`transform .${B}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&L(H||(H=v`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),xe)),ke=i.forwardRef(function(r,t){const n=ee({props:r,name:"MuiLinearProgress"}),{className:C,color:j="primary",value:u,valueBuffer:P,variant:l="indeterminate"}=n,w=re(n,ge),s=x({},n,{color:j,variant:l}),f=Ce(s),m=ae(),p={},g={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&u!==void 0){p["aria-valuenow"]=Math.round(u),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let c=u-100;m.direction==="rtl"&&(c=-c),g.bar1.transform=`translateX(${c}%)`}if(l==="buffer"&&P!==void 0){let c=(P||0)-100;m.direction==="rtl"&&(c=-c),g.bar2.transform=`translateX(${c}%)`}return a.jsxs(Pe,x({className:te(f.root,C),ownerState:s,role:"progressbar"},p,{ref:t},w,{children:[l==="buffer"?a.jsx(ye,{className:f.dashed,ownerState:s}):null,a.jsx(je,{className:f.bar1,ownerState:s,style:g.bar1}),l==="determinate"?null:a.jsx(we,{className:f.bar2,ownerState:s,style:g.bar2})]}))}),Ie=ke;function $e(){const[e,r]=i.useState(""),[t,n]=i.useState("");i.useState(!1);const[C,j]=i.useState(!1),[u,P]=i.useState(""),[l,w]=i.useState(""),[s,f]=i.useState(!1),[m,p]=i.useState(""),[g,c]=i.useState(null),[Se,S]=i.useState(!1),[O,_]=i.useState(!1),Y=ie(),G=o=>{r(o.target.value)},J=async()=>{try{_(!0);const o=new FormData;o.append("ToEmail",e);const y=await A.post(`${R}/api/Mail/forget`,o);y.data?(c(y.data),j(!0)):n("Email does not exist")}catch{b.fire({icon:"error",title:"Oops...",text:"Email is Wrong!"}),n("Email is Wrong!.")}finally{_(!1)}},h=()=>{j(!1),P(""),w(""),p(""),S(!1)},Q=async()=>{try{const o=new FormData;if(o.append("UserId",g),o.append("EnteredOTP",u),o.append("Password",l),o.append("NewPassword",m),!u||!l||!m){h(),b.fire({icon:"error",title:"Oops...",text:"Fill in all fields!"});return}if(l!==m){S(!0),h(),b.fire({icon:"error",title:"Oops...",text:"Passwords do not match!"});return}const y=await A.post(`${R}/api/Mail/verify-otp`,o);y.status>=200&&y.status<300?(h(),b.fire({title:"Done!",text:"Password changed successfully!",icon:"success"}).then(()=>{Y("/")})):(h(),b.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="#">Why do I have this issue?</a>'}))}catch{h(),S(!0),b.fire({icon:"error",title:"Oops...",text:"OTP is Wrong!"})}};return a.jsx(le,{children:a.jsx(k,{alignItems:"center",justifyContent:"center",sx:{height:"100vh"},spacing:3,children:a.jsxs(T,{sx:{p:5,width:1,maxWidth:420},children:[a.jsx(W,{variant:"h4",children:"Your Email Forget"}),a.jsxs("form",{children:[a.jsx(k,{spacing:3,children:a.jsx(I,{fullWidth:!0,type:"email",name:"email",label:"Email address",value:e,onChange:G,required:!0})}),O&&a.jsx(Ie,{color:"secondary",fourColor:!0,variant:"indeterminate"})," ",a.jsx(M,{fullWidth:!0,size:"large",variant:"contained",color:"inherit",disabled:O,onClick:J,children:"Submit"}),t&&a.jsx(W,{variant:"body1",color:"error",children:t})]}),a.jsx(ue,{open:C,onClose:h,children:a.jsx(k,{alignItems:"center",justifyContent:"center",sx:{height:1},spacing:3,children:a.jsxs(T,{sx:{p:5,width:1,maxWidth:420},children:[a.jsx(fe,{children:"OTP and Password"}),a.jsx(me,{children:a.jsxs(k,{spacing:3,children:[a.jsx(I,{fullWidth:!0,name:"otp",label:"OTP",type:"text",value:u,onChange:o=>P(o.target.value),required:!0}),a.jsx(I,{fullWidth:!0,name:"password",label:"New Password",type:s?"text":"password",InputProps:{endAdornment:a.jsx(q,{position:"end",children:a.jsx(N,{onClick:()=>f(!s),edge:"end",children:"👁️"})})},value:l,onChange:o=>w(o.target.value),required:!0}),a.jsx(I,{fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:s?"text":"password",InputProps:{endAdornment:a.jsx(q,{position:"end",children:a.jsx(N,{onClick:()=>f(!s),edge:"end",children:"👁️"})})},value:m,onChange:o=>p(o.target.value),required:!0})]})}),a.jsxs(pe,{children:[a.jsx(M,{onClick:h,children:"Cancel"}),a.jsx(ce,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:Q,children:"Submit"})]})]})})})]})})})}function Ee(){return a.jsxs(a.Fragment,{children:[a.jsx(de,{children:a.jsx("title",{children:" Forget | Minimal UI "})}),a.jsx($e,{})]})}export{Ee as default};
