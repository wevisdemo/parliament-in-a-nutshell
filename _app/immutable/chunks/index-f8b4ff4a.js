function x(){}const K=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function $(t){t.forEach(Q)}function F(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function qt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function zt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,o){if(r){const c=U(e,n,i,o);t.p(c,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Wt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Gt(t){const e={};for(const n in t)e[n]=!0;return e}function Jt(t){return t==null?"":t}const V=typeof window<"u";let X=V?()=>window.performance.now():()=>Date.now(),H=V?t=>requestAnimationFrame(t):x;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&H(Y)}function Z(t){let e;return g.size===0&&H(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let R=!1;function mt(){R=!0}function pt(){R=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,_=>e[n[_]].claim_order,u))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[s],f)}}function xt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=et("style");return bt(tt(t),e),e.sheet}function bt(t,e){xt(t.head||t,e)}function wt(t,e){if(R){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){R&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function vt(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Ut(){return I(" ")}function Vt(){return I("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:nt(t,i,e[i])}function Zt(t,e){for(const n in e)nt(t,n,e[n])}function kt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){Nt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function te(t,e,n){return rt(t,e,n,et)}function ee(t,e,n){return rt(t,e,n,Et)}function At(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function ne(t){return At(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function se(t,e,n){t.classList[n?"add":"remove"](e)}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const P=new Map;let D=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:$t(e),rules:{}};return P.set(t,n),n}function ct(t,e,n,i,r,o,c,l=0){const s=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=s){const A=e+(n-e)*o(m);u+=m*100+`%{${c(A,1-A)}}
`}const f=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${l}`,_=tt(t),{stylesheet:d,rules:h}=P.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||jt())}function jt(){H(()=>{D||(P.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),P.clear())})}let E;function v(t){E=t}function N(){if(!E)throw new Error("Function called outside component initialization");return E}function ce(t){N().$$.on_mount.push(t)}function oe(t){N().$$.after_update.push(t)}function le(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=st(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function ue(t,e){return N().$$.context.set(t,e),e}function ae(t){return N().$$.context.get(t)}const w=[],J=[],j=[],z=[],ot=Promise.resolve();let B=!1;function lt(){B||(B=!0,ot.then(ut))}function fe(){return lt(),ot}function k(t){j.push(t)}function _e(t){z.push(t)}const q=new Set;let S=0;function ut(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),Ot(e.$$)}for(v(null),w.length=0,S=0;J.length;)J.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];q.has(n)||(q.add(n),n())}j.length=0}while(w.length);for(;z.length;)z.pop()();B=!1,q.clear(),v(t)}function Ot(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let b;function at(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function M(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const O=new Set;let y;function de(){y={r:0,c:[],p:y}}function he(){y.r||$(y.c),y=y.p}function Pt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function me(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),y.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ft={duration:0};function pe(t,e,n){let i=e(t,n),r=!1,o,c,l=0;function s(){o&&L(t,o)}function u(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=x,css:p}=i||ft;p&&(o=ct(t,0,1,_,a,d,p,l++)),h(0,1);const m=X()+a,A=m+_;c&&c.abort(),r=!0,k(()=>M(t,!0,"start")),c=Z(T=>{if(r){if(T>=A)return h(1,0),M(t,!0,"end"),s(),r=!1;if(T>=m){const W=d((T-m)/_);h(W,1-W)}}return r})}let f=!1;return{start(){f||(f=!0,L(t),F(i)?(i=i(),at().then(u)):u())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function ye(t,e,n){let i=e(t,n),r=!0,o;const c=y;c.r+=1;function l(){const{delay:s=0,duration:u=300,easing:f=K,tick:a=x,css:_}=i||ft;_&&(o=ct(t,1,0,u,s,f,_));const d=X()+s,h=d+u;k(()=>M(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),M(t,!1,"end"),--c.r||$(c.c),!1;if(p>=d){const m=f((p-d)/u);a(1-m,m)}}return r})}return F(i)?at().then(()=>{i=i(),l()}):l(),{end(s){s&&i.tick&&i.tick(1,0),r&&(o&&L(t,o),r=!1)}}}function ge(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=e[o];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(n[s]=l[s],r[s]=1);t[o]=l}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function xe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function $e(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),i||k(()=>{const s=o.map(Q).filter(F);c?c.push(...s):$(s),t.$$.on_mount=[]}),l.forEach(k)}function Mt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,i,r,o,c,l=[-1]){const s=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Rt(t,a)),_}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(vt)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),pt(),ut()}v(s)}class ve{$destroy(){Mt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{_e as $,fe as A,x as B,zt as C,Ft as D,Ht as E,Bt as F,ae as G,wt as H,Lt as I,Wt as J,_t as K,It as L,Et as M,ee as N,Zt as O,ge as P,se as Q,Xt as R,ve as S,F as T,k as U,pe as V,ye as W,qt as X,Qt as Y,J as Z,xe as _,Ut as a,Yt as a0,$ as a1,Gt as a2,X as a3,Z as a4,K as a5,le as a6,Jt as a7,Kt as b,ne as c,he as d,Vt as e,Pt as f,de as g,vt as h,we as i,ue as j,oe as k,et as l,te as m,kt as n,ce as o,nt as p,re as q,I as r,Tt as s,me as t,At as u,ie as v,$e as w,be as x,Dt as y,Mt as z};
