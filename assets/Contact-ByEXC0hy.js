import{c as ue,f as E,u as me,o as A,b as R,j as o,a as y,r as a,m as ce,d as O,I as $e,h as he,i as re,e as D,k as Be,l as Ze,n as We,p as ne,q as Y,s as Xe,t as Ge,v as Ye,A as Ke,w as Ue,x as Ie,S as Pe,B as Je,V as G,y as Qe,H as be}from"./index-X8YZyRQO.js";import{C as et}from"./chunk-YQO7BFFX-Bhy_CGfM.js";import{H as tt,T as Ce}from"./chunk-7OLJDQMT-ChvmmakC.js";var[st,_e]=ue({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[ot,H]=ue({strict:!1,name:"FormControlContext"});function rt(e){const{id:r,isRequired:t,isInvalid:n,isDisabled:s,isReadOnly:l,...c}=e,u=a.useId(),d=r||`field-${u}`,v=`${d}-label`,p=`${d}-feedback`,h=`${d}-helptext`,[x,w]=a.useState(!1),[b,C]=a.useState(!1),[f,F]=a.useState(!1),j=a.useCallback((i={},g=null)=>({id:h,...i,ref:ce(g,I=>{I&&C(!0)})}),[h]),k=a.useCallback((i={},g=null)=>({...i,ref:g,"data-focus":O(f),"data-disabled":O(s),"data-invalid":O(n),"data-readonly":O(l),id:i.id!==void 0?i.id:v,htmlFor:i.htmlFor!==void 0?i.htmlFor:d}),[d,s,f,n,l,v]),_=a.useCallback((i={},g=null)=>({id:p,...i,ref:ce(g,I=>{I&&w(!0)}),"aria-live":"polite"}),[p]),z=a.useCallback((i={},g=null)=>({...i,...c,ref:g,role:"group","data-focus":O(f),"data-disabled":O(s),"data-invalid":O(n),"data-readonly":O(l)}),[c,s,f,n,l]),S=a.useCallback((i={},g=null)=>({...i,ref:g,role:"presentation","aria-hidden":!0,children:i.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!n,isReadOnly:!!l,isDisabled:!!s,isFocused:!!f,onFocus:()=>F(!0),onBlur:()=>F(!1),hasFeedbackText:x,setHasFeedbackText:w,hasHelpText:b,setHasHelpText:C,id:d,labelId:v,feedbackId:p,helpTextId:h,htmlProps:c,getHelpTextProps:j,getErrorMessageProps:_,getRootProps:z,getLabelProps:k,getRequiredIndicatorProps:S}}var K=E(function(r,t){const n=me("Form",r),s=A(r),{getRootProps:l,htmlProps:c,...u}=rt(s),d=R("chakra-form-control",r.className);return o.jsx(ot,{value:u,children:o.jsx(st,{value:n,children:o.jsx(y.div,{...l({},t),className:d,__css:n.container})})})});K.displayName="FormControl";var nt=E(function(r,t){const n=H(),s=_e(),l=R("chakra-form__helper-text",r.className);return o.jsx(y.div,{...n==null?void 0:n.getHelpTextProps(r,t),__css:s.helperText,className:l})});nt.displayName="FormHelperText";var[at,lt]=ue({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),U=E((e,r)=>{const t=me("FormError",e),n=A(e),s=H();return s!=null&&s.isInvalid?o.jsx(at,{value:t,children:o.jsx(y.div,{...s==null?void 0:s.getErrorMessageProps(n,r),className:R("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})}):null});U.displayName="FormErrorMessage";var it=E((e,r)=>{const t=lt(),n=H();if(!(n!=null&&n.isInvalid))return null;const s=R("chakra-form__error-icon",e.className);return o.jsx($e,{ref:r,"aria-hidden":!0,...e,__css:t.icon,className:s,children:o.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});it.displayName="FormErrorIcon";var J=E(function(r,t){var n;const s=he("FormLabel",r),l=A(r),{className:c,children:u,requiredIndicator:d=o.jsx(Ee,{}),optionalIndicator:v=null,...p}=l,h=H(),x=(n=h==null?void 0:h.getLabelProps(p,t))!=null?n:{ref:t,...p};return o.jsxs(y.label,{...x,className:R("chakra-form__label",l.className),__css:{display:"block",textAlign:"start",...s},children:[u,h!=null&&h.isRequired?d:v]})});J.displayName="FormLabel";var Ee=E(function(r,t){const n=H(),s=_e();if(!(n!=null&&n.isRequired))return null;const l=R("chakra-form__required-indicator",r.className);return o.jsx(y.span,{...n==null?void 0:n.getRequiredIndicatorProps(r,t),__css:s.requiredIndicator,className:l})});Ee.displayName="RequiredIndicator";function Fe(e){const{isDisabled:r,isInvalid:t,isReadOnly:n,isRequired:s,...l}=ct(e);return{...l,disabled:r,readOnly:n,required:s,"aria-invalid":re(t),"aria-required":re(s),"aria-readonly":re(n)}}function ct(e){var r,t,n;const s=H(),{id:l,disabled:c,readOnly:u,required:d,isRequired:v,isInvalid:p,isReadOnly:h,isDisabled:x,onFocus:w,onBlur:b,...C}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return s!=null&&s.hasFeedbackText&&(s!=null&&s.isInvalid)&&f.push(s.feedbackId),s!=null&&s.hasHelpText&&f.push(s.helpTextId),{...C,"aria-describedby":f.join(" ")||void 0,id:l??(s==null?void 0:s.id),isDisabled:(r=c??x)!=null?r:s==null?void 0:s.isDisabled,isReadOnly:(t=u??h)!=null?t:s==null?void 0:s.isReadOnly,isRequired:(n=d??v)!=null?n:s==null?void 0:s.isRequired,isInvalid:p??(s==null?void 0:s.isInvalid),onFocus:D(s==null?void 0:s.onFocus,w),onBlur:D(s==null?void 0:s.onBlur,b)}}function dt(e){const r=e.ownerDocument.defaultView||window,{overflow:t,overflowX:n,overflowY:s}=r.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(t+s+n)}function ut(e){return e.localName==="html"?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}function Se(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:Be(e)&&dt(e)?e:Se(ut(e))}var se=E(function(r,t){const{htmlSize:n,...s}=r,l=me("Input",s),c=A(s),u=Fe(c),d=R("chakra-input",r.className);return o.jsx(y.input,{size:n,...u,__css:l.field,ref:t,className:d})});se.displayName="Input";se.id="Input";function mt(e,r=[]){const t=Object.assign({},e);for(const n of r)n in t&&delete t[n];return t}var ht=["h","minH","height","minHeight"],Ne=E((e,r)=>{const t=he("Textarea",e),{className:n,rows:s,...l}=A(e),c=Fe(l),u=s?mt(t,ht):t;return o.jsx(y.textarea,{ref:r,rows:s,...c,className:R("chakra-textarea",n),__css:u})});Ne.displayName="Textarea";var pt={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},de=e=>{var r;return((r=e.current)==null?void 0:r.ownerDocument)||document},Q=e=>{var r,t;return((t=(r=e.current)==null?void 0:r.ownerDocument)==null?void 0:t.defaultView)||window};function ft(e={}){const{openDelay:r=0,closeDelay:t=0,closeOnClick:n=!0,closeOnMouseDown:s,closeOnScroll:l,closeOnPointerDown:c=s,closeOnEsc:u=!0,onOpen:d,onClose:v,placement:p,id:h,isOpen:x,defaultIsOpen:w,arrowSize:b=10,arrowShadowColor:C,arrowPadding:f,modifiers:F,isDisabled:j,gutter:k,offset:_,direction:z,...S}=e,{isOpen:i,onOpen:g,onClose:I}=Ze({isOpen:x,defaultIsOpen:w,onOpen:d,onClose:v}),{referenceRef:q,getPopperProps:N,getArrowInnerProps:Re,getArrowProps:De}=We({enabled:i,placement:p,arrowPadding:f,modifiers:F,gutter:k,offset:_,direction:z}),Me=a.useId(),$=`tooltip-${h??Me}`,T=a.useRef(null),V=a.useRef(),M=a.useCallback(()=>{V.current&&(clearTimeout(V.current),V.current=void 0)},[]),B=a.useRef(),Z=a.useCallback(()=>{B.current&&(clearTimeout(B.current),B.current=void 0)},[]),W=a.useCallback(()=>{Z(),I()},[I,Z]),fe=gt(T,W),X=a.useCallback(()=>{if(!j&&!V.current){i&&fe();const m=Q(T);V.current=m.setTimeout(g,r)}},[fe,j,i,g,r]),P=a.useCallback(()=>{M();const m=Q(T);B.current=m.setTimeout(W,t)},[t,W,M]),ge=a.useCallback(()=>{i&&n&&P()},[n,P,i]),ve=a.useCallback(()=>{i&&c&&P()},[c,P,i]),Ae=a.useCallback(m=>{i&&m.key==="Escape"&&P()},[i,P]);ne(()=>de(T),"keydown",u?Ae:void 0),ne(()=>{if(!l)return null;const m=T.current;if(!m)return null;const L=Se(m);return L.localName==="body"?Q(T):L},"scroll",()=>{i&&l&&W()},{passive:!0,capture:!0}),a.useEffect(()=>{j&&(M(),i&&I())},[j,i,I,M]),a.useEffect(()=>()=>{M(),Z()},[M,Z]),ne(()=>T.current,"pointerleave",P);const He=a.useCallback((m={},L=null)=>({...m,ref:ce(T,L,q),onPointerEnter:D(m.onPointerEnter,qe=>{qe.pointerType!=="touch"&&X()}),onClick:D(m.onClick,ge),onPointerDown:D(m.onPointerDown,ve),onFocus:D(m.onFocus,X),onBlur:D(m.onBlur,P),"aria-describedby":i?$:void 0}),[X,P,ve,i,$,ge,q]),ze=a.useCallback((m={},L=null)=>N({...m,style:{...m.style,[Y.arrowSize.var]:b?`${b}px`:void 0,[Y.arrowShadowColor.var]:C}},L),[N,b,C]),Ve=a.useCallback((m={},L=null)=>{const xe={...m.style,position:"relative",transformOrigin:Y.transformOrigin.varRef};return{ref:L,...S,...m,id:$,role:"tooltip",style:xe}},[S,$]);return{isOpen:i,show:X,hide:P,getTriggerProps:He,getTooltipProps:Ve,getTooltipPositionerProps:ze,getArrowProps:De,getArrowInnerProps:Re}}var ae="chakra-ui:close-tooltip";function gt(e,r){return a.useEffect(()=>{const t=de(e);return t.addEventListener(ae,r),()=>t.removeEventListener(ae,r)},[r,e]),()=>{const t=de(e),n=Q(e);t.dispatchEvent(new n.CustomEvent(ae))}}function vt(e,r=[]){const t=Object.assign({},e);for(const n of r)n in t&&delete t[n];return t}function xt(e,r){const t={};for(const n of r)n in e&&(t[n]=e[n]);return t}var bt=y(Xe.div),ee=E((e,r)=>{var t,n;const s=he("Tooltip",e),l=A(e),c=Ge(),{children:u,label:d,shouldWrapChildren:v,"aria-label":p,hasArrow:h,bg:x,portalProps:w,background:b,backgroundColor:C,bgColor:f,motionProps:F,...j}=l,k=(n=(t=b??C)!=null?t:x)!=null?n:f;if(k){s.bg=k;const N=Ye(c,"colors",k);s[Y.arrowBg.var]=N}const _=ft({...j,direction:c.direction}),z=typeof u=="string"||v;let S;if(z)S=o.jsx(y.span,{display:"inline-block",tabIndex:0,..._.getTriggerProps(),children:u});else{const N=a.Children.only(u);S=a.cloneElement(N,_.getTriggerProps(N.props,N.ref))}const i=!!p,g=_.getTooltipProps({},r),I=i?vt(g,["role","id"]):g,q=xt(g,["role","id"]);return d?o.jsxs(o.Fragment,{children:[S,o.jsx(Ke,{children:_.isOpen&&o.jsx(Ue,{...w,children:o.jsx(y.div,{..._.getTooltipPositionerProps(),__css:{zIndex:s.zIndex,pointerEvents:"none"},children:o.jsxs(bt,{variants:pt,initial:"exit",animate:"enter",exit:"exit",...F,...I,__css:s,children:[d,i&&o.jsx(y.span,{srOnly:!0,...q,children:p}),h&&o.jsx(y.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:o.jsx(y.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:s.bg}})})]})})})})]}):o.jsx(o.Fragment,{children:u})});ee.displayName="Tooltip";var Ct=Ie({displayName:"EmailIcon",path:o.jsxs("g",{fill:"currentColor",children:[o.jsx("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),o.jsx("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"})]})}),ye=Ie({d:"M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z",displayName:"ChatIcon",viewBox:"0 0 14 14"});const oe="sharethis",yt={display:"inline-block",width:"50px",height:"50px",position:"relative",overflow:"hidden",verticalAlign:"middle"},Te={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},wt={...Te,borderRadius:"50%",fillRule:"evenodd"},we={transition:"fill 170ms ease-in-out",fill:"transparent"},Le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return new RegExp("(?:[/.]|^)($SOCIALS)([.]|$|/)".replace("$SOCIALS",e.join("|").replace(/\./gu,"\\.")),"u")},te=new Map,je=new Set;let Oe=Le();function pe(e,r){return te.set(e,r),je.add(e),Oe=Le([...je].sort((t,n)=>n.length-t.length)),r}function jt(e){var r;return e?e.startsWith("mailto:")?"mailto":((r=e.match(Oe))==null?void 0:r[1])||oe:oe}const le=a.forwardRef(function(r,t){const{as:n="a",href:s,url:l,network:c,bgColor:u,fgColor:d,className:v,label:p,children:h,fallback:x,defaultSVG:w,...b}=r,C=c||jt(l),f=p||r["aria-label"]||C,F=(typeof x=="string"?te.get(x):x||w)||te.get(oe),{color:j,path:k}=C===oe?F:te.get(C)||{};return a.createElement(n,{href:s||l,className:`social-icon${v?` ${v}`:""}`,...b,style:{...yt,...b.style},"aria-label":f,ref:t},a.createElement("span",{className:"social-container",style:Te},a.createElement("svg",{role:"img","aria-label":`${f} social icon`,className:"social-svg",viewBox:"0 0 64 64",style:wt},a.createElement("g",{className:"social-svg-icon",style:{...we,fill:d||"white"}},a.createElement("path",{d:`M0,0H64V64H0Z${k}`})),a.createElement("g",{className:"social-svg-mask",style:{...we,fill:u||j}},a.createElement("path",{d:k})))),h)});pe("mailto",{color:"#7f7f7f",path:"M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z"});pe("linkedin",{color:"#007fb1",path:"M0 0v64h64V0zm25.8 44h-5.4V26.6h5.4zm-2.7-19.7c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1M46 44h-5.4v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V44h-5.4V26.6h5.2V29h.1c.7-1.4 2.5-2.8 5.1-2.8 5.5 0 6.5 3.6 6.5 8.3V44z"});pe("github",{color:"#24292e",path:"M0 0v64h64V0zm37.1 47.2c-.8.2-1.1-.3-1.1-.8V42c0-1.5-.5-2.5-1.1-3 3.6-.4 7.3-1.7 7.3-7.9 0-1.7-.6-3.2-1.6-4.3.2-.4.7-2-.2-4.2 0 0-1.3-.4-4.4 1.6-1.3-.4-2.6-.5-4-.5s-2.7.2-4 .5c-3.1-2.1-4.4-1.6-4.4-1.6-.9 2.2-.3 3.8-.2 4.2-1 1.1-1.6 2.5-1.6 4.3 0 6.1 3.7 7.5 7.3 7.9-.5.4-.9 1.1-1 2.1-.9.4-3.2 1.1-4.7-1.3 0 0-.8-1.5-2.5-1.6 0 0-1.6 0-.1 1 0 0 1 .5 1.8 2.3 0 0 .9 3.1 5.4 2.1v2.7c0 .4-.3.9-1.1.8-6.3-2-10.9-8-10.9-15.1 0-8.8 7.2-16 16-16s16 7.2 16 16c0 7.1-4.6 13.1-10.9 15.2"});const kt=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,ke=()=>{const[e,r]=a.useState({name:"",email:"",message:""}),[t,n]=a.useState({}),s=()=>{const c={};return e.email&&!e.email.match(kt)&&(c.email="Invalid email address"),n(c),Object.keys(c).length===0},l=c=>{r({...e,[c.target.name]:c.target.value})};return o.jsx(et,{width:"100%",variant:"filled",padding:{base:4,md:6},children:o.jsxs(Pe,{spacing:4,children:[o.jsxs(K,{isInvalid:!!(t!=null&&t.name),children:[o.jsx(J,{children:"Name"}),o.jsx(se,{type:"text",name:"name",placeholder:"Name",value:e.name,onChange:l,bgColor:"white"}),t.name&&o.jsx(U,{children:t.name})]}),o.jsxs(K,{isInvalid:!!t.email,children:[o.jsx(J,{children:"Email"}),o.jsx(se,{type:"email",name:"email",placeholder:"Email",value:e.email,onBlur:s,onChange:l,bgColor:"white"}),t.email&&o.jsx(U,{children:t.email})]}),o.jsxs(K,{isInvalid:!!t.message,children:[o.jsx(J,{children:"Message"}),o.jsx(Ne,{name:"message",bgColor:"white",placeholder:"Your message here...",size:"md",resize:"none",value:e.message,onChange:l}),t.message&&o.jsx(U,{children:t.message})]}),o.jsx(Je,{as:"a",href:"mailto:sr.webcode@gmail.com?",size:{base:"sm",md:"md"},rightIcon:o.jsx(Ct,{}),children:"Send Message"})]})})},ie={style:{width:36,height:36}},Ft=()=>o.jsxs(G,{alignItems:"flex-start",children:[o.jsx(tt,{size:"lg",children:"Contact"}),o.jsxs(Pe,{spacing:7,alignItems:"flex-start",justifyContent:"space-between",direction:{base:"column",md:"row"},children:[o.jsxs(G,{spacing:7,alignItems:"flex-start",width:{base:"100%",md:"55%"},children:[o.jsx(Ce,{children:"Looking to connect and start a conversation? Simply fill out the form, and let's kickstart our journey together. Whether it's about collaboration, projects, or just a friendly chat, I'm here and eager to hear from you!"}),o.jsx(Qe,{width:"100%",display:{base:"block",md:"none"},children:o.jsx(ke,{})}),o.jsxs(G,{alignItems:"flex-start",spacing:4,width:"100%",children:[o.jsx(Ce,{children:"or simply reach me out through:"}),o.jsxs(be,{alignItems:"flex-start",spacing:2,children:[o.jsx(ee,{hasArrow:!0,placement:"top",label:"Gmail",children:o.jsx(le,{bgColor:"#c71610",url:"mailto:sr.webcode@gmail.com",...ie})}),o.jsx(ee,{hasArrow:!0,placement:"top",label:"Linkedin",children:o.jsx(le,{url:"https://www.linkedin.com/in/sean-rojas-a2b7a0245/",...ie})}),o.jsx(ee,{hasArrow:!0,placement:"top",label:"Github",children:o.jsx(le,{url:"https://github.com/sr-webcode",...ie})})]}),o.jsxs(be,{mt:8,display:{base:"none",md:"block"},children:[o.jsx(ye,{color:"teal",opacity:.2,boxSize:100,transform:"translateX(46px) translateY(80px) rotate(20deg)"}),o.jsx(ye,{color:"teal",opacity:.2,boxSize:200,transform:"translateX(60px) scaleX(-1) rotate(20deg)"})]})]})]}),o.jsx(G,{width:400,display:{base:"none",md:"block"},children:o.jsx(ke,{})})]})]});export{Ft as default};