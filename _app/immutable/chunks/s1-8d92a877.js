import{S as fe,i as de,s as me,l as y,a as k,r as B,m as S,n as R,c as D,u as q,h as w,p as c,N as H,O as $,b as W,J as d,P as ve,v as ge,E as ee,M as U,f as X,g as pe,d as be,t as Y,Q as Ie,o as Ce,R as ye,T as Se,w as Ee,x as Ne,y as Ae,U as Te,B as we}from"./index-88a0c72c.js";const je=i=>{document.documentElement.classList.add(i)},Pe=i=>{document.documentElement.classList.remove(i)};function Re(i){let t,e,s,o,a,n=i[1].value+"",u,r,g,l,m,N,b,p,O,j,A,L;return{c(){t=y("label"),e=y("input"),o=k(),a=y("span"),u=B(n),r=B(" \u0E04\u0E19"),g=k(),l=y("div"),m=y("img"),b=k(),p=y("img"),this.h()},l(I){t=S(I,"LABEL",{class:!0});var C=R(t);e=S(C,"INPUT",{type:!0,name:!0,class:!0}),o=D(C),a=S(C,"SPAN",{class:!0});var M=R(a);u=q(M,n),r=q(M," \u0E04\u0E19"),M.forEach(w),g=D(C),l=S(C,"DIV",{class:!0});var F=R(l);m=S(F,"IMG",{class:!0,src:!0,alt:!0,decoding:!0}),b=D(F),p=S(F,"IMG",{class:!0,src:!0,alt:!0,decoding:!0}),F.forEach(w),C.forEach(w),this.h()},h(){c(e,"type","radio"),c(e,"name","quiz"),e.__value=s=i[1].value,e.value=e.__value,e.disabled=i[2],c(e,"class","svelte-1trw11j"),i[4][0].push(e),c(a,"class","text svelte-1trw11j"),c(m,"class","c1 svelte-1trw11j"),H(m.src,N="/shaking-parliament/mark-tlbr.png")||c(m,"src",N),c(m,"alt",""),c(m,"decoding","async"),c(p,"class","c2 svelte-1trw11j"),H(p.src,O="/shaking-parliament/mark-bltr.png")||c(p,"src",O),c(p,"alt",""),c(p,"decoding","async"),c(l,"class","cross svelte-1trw11j"),c(t,"class",j=$([i[0]===i[1].value&&i[2]?i[1].isCorrect?"correct":"incorrect":null,i[2]?"submitted":null,"choice"].join(" "))+" svelte-1trw11j")},m(I,C){W(I,t,C),d(t,e),e.checked=e.__value===i[0],d(t,o),d(t,a),d(a,u),d(a,r),d(t,g),d(t,l),d(l,m),d(l,b),d(l,p),A||(L=ve(e,"change",i[3]),A=!0)},p(I,[C]){C&2&&s!==(s=I[1].value)&&(e.__value=s,e.value=e.__value),C&4&&(e.disabled=I[2]),C&1&&(e.checked=e.__value===I[0]),C&2&&n!==(n=I[1].value+"")&&ge(u,n),C&7&&j!==(j=$([I[0]===I[1].value&&I[2]?I[1].isCorrect?"correct":"incorrect":null,I[2]?"submitted":null,"choice"].join(" "))+" svelte-1trw11j")&&c(t,"class",j)},i:ee,o:ee,d(I){I&&w(t),i[4][0].splice(i[4][0].indexOf(e),1),A=!1,L()}}}function Oe(i,t,e){let{data:s={value:0,isCorrect:!1}}=t,{group:o}=t,{submitted:a=!1}=t;const n=[[]];function u(){o=this.__value,e(0,o)}return i.$$set=r=>{"data"in r&&e(1,s=r.data),"group"in r&&e(0,o=r.group),"submitted"in r&&e(2,a=r.submitted)},[o,s,a,u,n]}class Me extends fe{constructor(t){super(),de(this,t,Oe,Re,me,{data:1,group:0,submitted:2})}}function x(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function te(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function Q(i,t,e){return t&&te(i.prototype,t),e&&te(i,e),i}function ie(i){return+i.replace(/px/,"")}function Fe(i){var t=window.devicePixelRatio,e=getComputedStyle(i),s=ie(e.getPropertyValue("width")),o=ie(e.getPropertyValue("height"));i.setAttribute("width",(s*t).toString()),i.setAttribute("height",(o*t).toString())}function P(i,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=Math.random()*(t-i)+i;return Math.floor(s*Math.pow(10,e))/Math.pow(10,e)}function se(i){return i[P(0,i.length)]}var ke=.00125,De=5e-4,Le=9e-4,ze=1e-5,Be=6,qe=80,Ue=.9,He=1.7,Ge=.2,Ve=.6,Xe=.03,We=.07,ne=15,ae=82,Je=150,Ye=100,xe=250,Qe=40,Ze=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function oe(i){var t=1920;return Math.log(i)/Math.log(t)}var re=function(){function i(t){x(this,i);var e=t.initialPosition,s=t.direction,o=t.confettiRadius,a=t.confettiColors,n=t.emojis,u=t.emojiSize,r=t.canvasWidth,g=P(Ue,He,3),l=g*oe(r);this.confettiSpeed={x:l,y:l},this.finalConfettiSpeedX=P(Ge,Ve,3),this.rotationSpeed=n.length?.01:P(Xe,We,3)*oe(r),this.dragForceCoefficient=P(De,Le,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle=s==="left"?P(0,.2,3):P(-.2,0,3),this.emojiSize=u,this.emojiRotationAngle=P(0,2*Math.PI),this.radiusYUpdateDirection="down";var m=s==="left"?P(ae,ne)*Math.PI/180:P(-ne,-ae)*Math.PI/180;this.absCos=Math.abs(Math.cos(m)),this.absSin=Math.abs(Math.sin(m));var N=P(-Je,0),b={x:e.x+(s==="left"?-N:N)*this.absCos,y:e.y-N*this.absSin};this.currentPosition=Object.assign({},b),this.initialPosition=Object.assign({},b),this.color=n.length?null:se(a),this.emoji=n.length?se(n):null,this.createdAt=new Date().getTime(),this.direction=s}return Q(i,[{key:"draw",value:function(e){var s=this.currentPosition,o=this.radius,a=this.color,n=this.emoji,u=this.rotationAngle,r=this.emojiRotationAngle,g=this.emojiSize,l=window.devicePixelRatio;a?(e.fillStyle=a,e.beginPath(),e.ellipse(s.x*l,s.y*l,o.x*l,o.y*l,u,0,2*Math.PI),e.fill()):n&&(e.font="".concat(g,"px serif"),e.save(),e.translate(l*s.x,l*s.y),e.rotate(r),e.textAlign="center",e.fillText(n,0,0),e.restore())}},{key:"updatePosition",value:function(e,s){var o=this.confettiSpeed,a=this.dragForceCoefficient,n=this.finalConfettiSpeedX,u=this.radiusYUpdateDirection,r=this.rotationSpeed,g=this.createdAt,l=this.direction,m=s-g;if(o.x>n&&(this.confettiSpeed.x-=a*e),this.currentPosition.x+=o.x*(l==="left"?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-o.y*this.absSin*m+ke*Math.pow(m,2)/2,this.rotationSpeed-=this.emoji?1e-4:ze*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI);return}u==="down"?(this.radius.y-=e*r,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*r,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+Ye}}]),i}();function Ke(){var i=document.createElement("canvas");return i.style.position="fixed",i.style.width="100%",i.style.height="100%",i.style.top="0",i.style.left="0",i.style.zIndex="1000",i.style.pointerEvents="none",document.body.appendChild(i),i}function $e(i){var t=i.confettiRadius,e=t===void 0?Be:t,s=i.confettiNumber,o=s===void 0?i.confettiesNumber||(i.emojis?Qe:xe):s,a=i.confettiColors,n=a===void 0?Ze:a,u=i.emojis,r=u===void 0?i.emojies||[]:u,g=i.emojiSize,l=g===void 0?qe:g;return i.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),i.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:e,confettiNumber:o,confettiColors:n,emojis:r,emojiSize:l}}var et=function(){function i(t){var e=this;x(this,i),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(s){return e.resolvePromise=s})}return Q(i,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return this.shapes.length?!1:((e=this.resolvePromise)===null||e===void 0||e.call(this),!0)}},{key:"processShapes",value:function(e,s,o){var a=this,n=e.timeDelta,u=e.currentTime;this.shapes=this.shapes.filter(function(r){return r.updatePosition(n,u),r.draw(a.canvasContext),o?r.getIsVisibleOnCanvas(s):!0})}}]),i}(),tt=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};x(this,i),this.activeConfettiBatches=[],this.canvas=t.canvas||Ke(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return Q(i,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,Fe(this.canvas);var e=new Date().getTime(),s=e-this.lastUpdated,o=this.canvas.offsetHeight,a=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(n){return n.processShapes({timeDelta:s,currentTime:e},o,a),a?!n.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(e)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=$e(e),o=s.confettiRadius,a=s.confettiNumber,n=s.confettiColors,u=s.emojis,r=s.emojiSize,g=this.canvas.getBoundingClientRect(),l=g.width,m=g.height,N=m*5/7,b={x:0,y:N},p={x:l,y:N},O=new et(this.canvasContext),j=0;j<a/2;j++){var A=new re({initialPosition:b,direction:"right",confettiRadius:o,confettiColors:n,confettiNumber:a,emojis:u,emojiSize:r,canvasWidth:l}),L=new re({initialPosition:p,direction:"left",confettiRadius:o,confettiColors:n,confettiNumber:a,emojis:u,emojiSize:r,canvasWidth:l});O.addShapes(A,L)}return this.activeConfettiBatches.push(O),this.queueAnimationFrameIfNeeded(),O.getBatchCompletePromise()}}]),i}();function le(i,t,e){const s=i.slice();return s[8]=t[e],s}function ce(i){let t,e,s;function o(n){i[6](n)}let a={data:i[8],submitted:i[1]};return i[0]!==void 0&&(a.group=i[0]),t=new Me({props:a}),ye.push(()=>Se(t,"group",o)),{c(){Ee(t.$$.fragment)},l(n){Ne(t.$$.fragment,n)},m(n,u){Ae(t,n,u),s=!0},p(n,u){const r={};u&2&&(r.submitted=n[1]),!e&&u&1&&(e=!0,r.group=n[0],Te(()=>e=!1)),t.$set(r)},i(n){s||(X(t.$$.fragment,n),s=!0)},o(n){Y(t.$$.fragment,n),s=!1},d(n){we(t,n)}}}function ue(i){let t;return{c(){t=y("div"),this.h()},l(e){t=S(e,"DIV",{class:!0}),R(t).forEach(w),this.h()},h(){c(t,"class","incorrect-overlay svelte-1xywbcx")},m(e,s){W(e,t,s)},d(e){e&&w(t)}}}function he(i){let t,e,s;return{c(){t=y("div"),e=y("img"),this.h()},l(o){t=S(o,"DIV",{class:!0});var a=R(t);e=S(a,"IMG",{class:!0,src:!0,alt:!0,decoding:!0}),a.forEach(w),this.h()},h(){c(e,"class","ans-img svelte-1xywbcx"),H(e.src,s=i[3])||c(e,"src",s),c(e,"alt",""),c(e,"decoding","async"),U(e,"correct",i[2]),c(t,"class","ans-img-container svelte-1xywbcx")},m(o,a){W(o,t,a),d(t,e)},p(o,a){a&8&&!H(e.src,s=o[3])&&c(e,"src",s),a&4&&U(e,"correct",o[2])},d(o){o&&w(t)}}}function it(i){let t,e,s,o,a,n,u,r,g,l,m,N,b,p,O,j,A,L,I,C,M,F,Z,z=i[4],_=[];for(let h=0;h<z.length;h+=1)_[h]=ce(le(i,z,h));const _e=h=>Y(_[h],1,1,()=>{_[h]=null});let T=i[1]&&!i[2]&&ue(),E=i[1]&&he(i);return{c(){t=y("section"),e=y("h1"),s=B("\u0E04\u0E38\u0E13\u0E23\u0E39\u0E49\u0E44\u0E2B\u0E21?"),o=y("br"),a=B(`
		\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E43\u0E19\u0E23\u0E31\u0E10\u0E2A\u0E20\u0E32\u0E21\u0E35 \u0E2A.\u0E2A. \u0E01\u0E35\u0E48\u0E04\u0E19
		`),n=y("small"),u=B("(\u0E1E.\u0E28. 2565)"),r=k();for(let h=0;h<_.length;h+=1)_[h].c();g=k(),l=y("button"),m=B("\u0E15\u0E23\u0E27\u0E08\u0E04\u0E33\u0E15\u0E2D\u0E1A"),N=k(),b=y("div"),p=y("img"),j=B(`
		\u0E40\u0E01\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E02\u0E36\u0E49\u0E19? \u0E44\u0E1B\u0E14\u0E39\u0E01\u0E31\u0E19!
		`),A=y("img"),I=k(),T&&T.c(),C=k(),E&&E.c(),this.h()},l(h){t=S(h,"SECTION",{class:!0});var f=R(t);e=S(f,"H1",{class:!0});var v=R(e);s=q(v,"\u0E04\u0E38\u0E13\u0E23\u0E39\u0E49\u0E44\u0E2B\u0E21?"),o=S(v,"BR",{}),a=q(v,`
		\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E43\u0E19\u0E23\u0E31\u0E10\u0E2A\u0E20\u0E32\u0E21\u0E35 \u0E2A.\u0E2A. \u0E01\u0E35\u0E48\u0E04\u0E19
		`),n=S(v,"SMALL",{class:!0});var G=R(n);u=q(G,"(\u0E1E.\u0E28. 2565)"),G.forEach(w),v.forEach(w),r=D(f);for(let J=0;J<_.length;J+=1)_[J].l(f);g=D(f),l=S(f,"BUTTON",{class:!0,type:!0});var K=R(l);m=q(K,"\u0E15\u0E23\u0E27\u0E08\u0E04\u0E33\u0E15\u0E2D\u0E1A"),K.forEach(w),N=D(f),b=S(f,"DIV",{class:!0});var V=R(b);p=S(V,"IMG",{src:!0,alt:!0,decoding:!0,loading:!0,class:!0}),j=q(V,`
		\u0E40\u0E01\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E02\u0E36\u0E49\u0E19? \u0E44\u0E1B\u0E14\u0E39\u0E01\u0E31\u0E19!
		`),A=S(V,"IMG",{src:!0,alt:!0,decoding:!0,loading:!0,class:!0}),V.forEach(w),I=D(f),T&&T.l(f),C=D(f),E&&E.l(f),f.forEach(w),this.h()},h(){c(n,"class","svelte-1xywbcx"),c(e,"class","T1 svelte-1xywbcx"),c(l,"class","submit-ans-btn svelte-1xywbcx"),c(l,"type","button"),U(l,"hide",!i[0]||i[1]),H(p.src,O="/shaking-parliament/thinking.png")||c(p,"src",O),c(p,"alt",""),c(p,"decoding","async"),c(p,"loading","lazy"),c(p,"class","svelte-1xywbcx"),H(A.src,L="/shaking-parliament/hand-down.png")||c(A,"src",L),c(A,"alt",""),c(A,"decoding","async"),c(A,"loading","lazy"),c(A,"class","svelte-1xywbcx"),c(b,"class","continue svelte-1xywbcx"),U(b,"show",i[1]),c(t,"class","h100 c")},m(h,f){W(h,t,f),d(t,e),d(e,s),d(e,o),d(e,a),d(e,n),d(n,u),d(t,r);for(let v=0;v<_.length;v+=1)_[v].m(t,null);d(t,g),d(t,l),d(l,m),d(t,N),d(t,b),d(b,p),d(b,j),d(b,A),d(t,I),T&&T.m(t,null),d(t,C),E&&E.m(t,null),M=!0,F||(Z=ve(l,"click",i[7]),F=!0)},p(h,[f]){if(f&19){z=h[4];let v;for(v=0;v<z.length;v+=1){const G=le(h,z,v);_[v]?(_[v].p(G,f),X(_[v],1)):(_[v]=ce(G),_[v].c(),X(_[v],1),_[v].m(t,g))}for(pe(),v=z.length;v<_.length;v+=1)_e(v);be()}f&3&&U(l,"hide",!h[0]||h[1]),f&2&&U(b,"show",h[1]),h[1]&&!h[2]?T||(T=ue(),T.c(),T.m(t,C)):T&&(T.d(1),T=null),h[1]?E?E.p(h,f):(E=he(h),E.c(),E.m(t,null)):E&&(E.d(1),E=null)},i(h){if(!M){for(let f=0;f<z.length;f+=1)X(_[f]);M=!0}},o(h){_=_.filter(Boolean);for(let f=0;f<_.length;f+=1)Y(_[f]);M=!1},d(h){h&&w(t),Ie(_,h),T&&T.d(),E&&E.d(),F=!1,Z()}}}function st(i,t,e){let s,o,a,n=null;const u=[{value:485,isCorrect:!0},{value:471,isCorrect:!1},{value:479,isCorrect:!1}];let r=!1;Ce(()=>{e(5,a=new tt),je("lock-body-scroll")});function g(m){n=m,e(0,n)}const l=()=>e(1,r=!0);return i.$$.update=()=>{var m;i.$$.dirty&1&&e(2,s=(m=u.find(N=>N.value===n))==null?void 0:m.isCorrect),i.$$.dirty&4&&e(3,o=`/shaking-parliament/quiz-${s?"":"in"}correct.png`),i.$$.dirty&38&&r&&(Pe("lock-body-scroll"),s&&(a==null||a.addConfetti({confettiColors:["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],confettiRadius:8,confettiNumber:500})))},[n,r,s,o,u,a,g,l]}class at extends fe{constructor(t){super(),de(this,t,st,it,me,{})}}export{at as default};