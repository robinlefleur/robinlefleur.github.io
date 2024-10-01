import G from"./ty-CZr1H.js";import{_ as B,q as _,o as c,B as y,C as L,D as U,r as M,E as T,n as i,G as k,H as O,I as F,J as R,K as V,L as S,v as D,M as E,N as J,O as I,w as W,P as m,Q as h,A as x,c as H,t as K,y as Q,R as P,S as X,T as Y,U as Z,V as w,W as ee}from"./BNFW3XCE.js";const ae=_({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function re(e,o,r,s,t,a){const n=G;return c(),y(n,L(U(e.$props)),null,16)}const j=B(ae,[["render",re]]),ie=(e,o,r,s,t=!1)=>{const a=M(),n=T(),g=i(()=>{var f;const d=k(o),v=k(r),b=k(s);return O((d==null?void 0:d.strategy)||((f=n.ui)==null?void 0:f.strategy),b?{wrapper:b}:{},d||{},t?F(n.ui,e,{}):{},v||{})}),u=i(()=>R(a,["class"]));return{ui:g,attrs:u}};function te({ui:e,props:o}){const r=J();if(V("ButtonGroupContextConsumer",!0),S("ButtonGroupContextConsumer",!1))return{size:i(()=>o.size),rounded:i(()=>e.value.rounded)};let t=r.parent,a;for(;t&&!a;){if(t.type.name==="ButtonGroup"){a=S(`group-${t.uid}`);break}t=t.parent}const n=i(()=>a==null?void 0:a.value.children.indexOf(r));return D(()=>{a==null||a.value.register(r)}),E(()=>{a==null||a.value.unregister(r)}),{size:i(()=>a!=null&&a.value?(a==null?void 0:a.value.size)??e.value.default.size:o.size),rounded:i(()=>!a||n.value===-1?e.value.rounded:a.value.children.length===1?a.value.ui.rounded:n.value===0?a.value.rounded.start:n.value===a.value.children.length-1?a.value.rounded.end:"rounded-none")}}const ne={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},q={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},$={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...q,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...$,option:{...$.option},arrow:{...q}});const l=O(I.ui.strategy,I.ui.button,ne),oe=_({components:{UIcon:j,ULink:P},inheritAttrs:!1,props:{...X,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...I.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(o=>Object.keys(o))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>l.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:o}){const{ui:r,attrs:s}=ie("button",Y(e,"ui"),l),{size:t,rounded:a}=te({ui:r,props:e}),n=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),g=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),u=i(()=>e.square||!o.default&&!e.label),d=i(()=>{var z,C;const p=((C=(z=r.value.color)==null?void 0:z[e.color])==null?void 0:C[e.variant])||r.value.variant[e.variant];return Z(w(r.value.base,r.value.font,a.value,r.value.size[t.value],r.value.gap[t.value],e.padded&&r.value[u.value?"square":"padding"][t.value],p==null?void 0:p.replaceAll("{color}",e.color),e.block?r.value.block:r.value.inline),e.class)}),v=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),b=i(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),f=i(()=>w(r.value.icon.base,r.value.icon.size[t.value],e.loading&&r.value.icon.loading)),N=i(()=>w(r.value.icon.base,r.value.icon.size[t.value],e.loading&&!n.value&&r.value.icon.loading)),A=i(()=>ee(e));return{ui:r,attrs:s,isLeading:n,isTrailing:g,isSquare:u,buttonClass:d,leadingIconName:v,trailingIconName:b,leadingIconClass:f,trailingIconClass:N,linkProps:A}}});function le(e,o,r,s,t,a){const n=j,g=P;return c(),y(g,Q({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:W(()=>[m(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(c(),y(n,{key:0,name:e.leadingIconName,class:h(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):x("",!0)]),m(e.$slots,"default",{},()=>[e.label?(c(),H("span",{key:0,class:h([e.truncate?e.ui.truncate:""])},K(e.label),3)):x("",!0)]),m(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(c(),y(n,{key:0,name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):x("",!0)])]),_:3},16,["type","disabled","class"])}const ge=B(oe,[["render",le]]);export{ge as _};
