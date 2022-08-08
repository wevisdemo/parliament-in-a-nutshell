import{S as Tt,i as Rt,s as St,X as pt,r as kt,Y as dt,n as xt,u as Ct,h as at,p as Pt,b as qt,J as mt,E as st,o as zt,P as Et}from"./index-29710c93.js";import{S as gt,r as It,a as Q}from"./transform-6b7f2bd3.js";function Ft(t){return typeof t=="string"?new gt([[document.querySelector(t)]],[document.documentElement]):new gt([[t]],It)}const ot=Math.PI,lt=2*ot,B=1e-6,Lt=lt-B;function ut(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function ct(){return new ut}ut.prototype=ct.prototype={constructor:ut,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,l){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+l)},bezierCurveTo:function(t,n,e,l,s,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +l+","+(this._x1=+s)+","+(this._y1=+o)},arcTo:function(t,n,e,l,s){t=+t,n=+n,e=+e,l=+l,s=+s;var o=this._x1,g=this._y1,r=e-t,u=l-n,a=o-t,y=g-n,c=a*a+y*y;if(s<0)throw new Error("negative radius: "+s);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(c>B)if(!(Math.abs(y*r-u*a)>B)||!s)this._+="L"+(this._x1=t)+","+(this._y1=n);else{var i=e-o,m=l-g,_=r*r+u*u,T=i*i+m*m,d=Math.sqrt(_),h=Math.sqrt(c),x=s*Math.tan((ot-Math.acos((_+c-T)/(2*d*h)))/2),v=x/h,M=x/d;Math.abs(v-1)>B&&(this._+="L"+(t+v*a)+","+(n+v*y)),this._+="A"+s+","+s+",0,0,"+ +(y*i>a*m)+","+(this._x1=t+M*r)+","+(this._y1=n+M*u)}},arc:function(t,n,e,l,s,o){t=+t,n=+n,e=+e,o=!!o;var g=e*Math.cos(l),r=e*Math.sin(l),u=t+g,a=n+r,y=1^o,c=o?l-s:s-l;if(e<0)throw new Error("negative radius: "+e);this._x1===null?this._+="M"+u+","+a:(Math.abs(this._x1-u)>B||Math.abs(this._y1-a)>B)&&(this._+="L"+u+","+a),e&&(c<0&&(c=c%lt+lt),c>Lt?this._+="A"+e+","+e+",0,1,"+y+","+(t-g)+","+(n-r)+"A"+e+","+e+",0,1,"+y+","+(this._x1=u)+","+(this._y1=a):c>B&&(this._+="A"+e+","+e+",0,"+ +(c>=ot)+","+y+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,l){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +l+"h"+-e+"Z"},toString:function(){return this._}};function S(t){return function(){return t}}const yt=Math.abs,A=Math.atan2,U=Math.cos,Ot=Math.max,rt=Math.min,q=Math.sin,E=Math.sqrt,b=1e-12,K=Math.PI,Y=K/2,bt=2*K;function $t(t){return t>1?0:t<-1?K:Math.acos(t)}function _t(t){return t>=1?Y:t<=-1?-Y:Math.asin(t)}function Ut(t){return t.innerRadius}function Bt(t){return t.outerRadius}function Dt(t){return t.startAngle}function Ht(t){return t.endAngle}function Kt(t){return t&&t.padAngle}function Nt(t,n,e,l,s,o,g,r){var u=e-t,a=l-n,y=g-s,c=r-o,i=c*u-y*a;if(!(i*i<b))return i=(y*(n-o)-c*(t-s))/i,[t+i*u,n+i*a]}function X(t,n,e,l,s,o,g){var r=t-e,u=n-l,a=(g?o:-o)/E(r*r+u*u),y=a*u,c=-a*r,i=t+y,m=n+c,_=e+y,T=l+c,d=(i+_)/2,h=(m+T)/2,x=_-i,v=T-m,M=x*x+v*v,I=s-o,P=i*T-_*m,F=(v<0?-1:1)*E(Ot(0,I*I*M-P*P)),L=(P*v-x*F)/M,R=(-P*x-v*F)/M,k=(P*v+x*F)/M,C=(-P*x+v*F)/M,f=L-d,p=R-h,O=k-d,$=C-h;return f*f+p*p>O*O+$*$&&(L=k,R=C),{cx:L,cy:R,x01:-y,y01:-c,x11:L*(s/I-1),y11:R*(s/I-1)}}function Zt(){var t=Ut,n=Bt,e=S(0),l=null,s=Dt,o=Ht,g=Kt,r=null;function u(){var a,y,c=+t.apply(this,arguments),i=+n.apply(this,arguments),m=s.apply(this,arguments)-Y,_=o.apply(this,arguments)-Y,T=yt(_-m),d=_>m;if(r||(r=a=ct()),i<c&&(y=i,i=c,c=y),!(i>b))r.moveTo(0,0);else if(T>bt-b)r.moveTo(i*U(m),i*q(m)),r.arc(0,0,i,m,_,!d),c>b&&(r.moveTo(c*U(_),c*q(_)),r.arc(0,0,c,_,m,d));else{var h=m,x=_,v=m,M=_,I=T,P=T,F=g.apply(this,arguments)/2,L=F>b&&(l?+l.apply(this,arguments):E(c*c+i*i)),R=rt(yt(i-c)/2,+e.apply(this,arguments)),k=R,C=R,f,p;if(L>b){var O=_t(L/c*q(F)),$=_t(L/i*q(F));(I-=O*2)>b?(O*=d?1:-1,v+=O,M-=O):(I=0,v=M=(m+_)/2),(P-=$*2)>b?($*=d?1:-1,h+=$,x-=$):(P=0,h=x=(m+_)/2)}var D=i*U(h),H=i*q(h),N=c*U(M),Z=c*q(M);if(R>b){var j=i*U(x),J=i*q(x),G=c*U(v),V=c*q(v),z;if(T<K&&(z=Nt(D,H,G,V,j,J,N,Z))){var W=D-z[0],tt=H-z[1],nt=j-z[0],et=J-z[1],ft=1/q($t((W*nt+tt*et)/(E(W*W+tt*tt)*E(nt*nt+et*et)))/2),ht=E(z[0]*z[0]+z[1]*z[1]);k=rt(R,(c-ht)/(ft-1)),C=rt(R,(i-ht)/(ft+1))}}P>b?C>b?(f=X(G,V,D,H,i,C,d),p=X(j,J,N,Z,i,C,d),r.moveTo(f.cx+f.x01,f.cy+f.y01),C<R?r.arc(f.cx,f.cy,C,A(f.y01,f.x01),A(p.y01,p.x01),!d):(r.arc(f.cx,f.cy,C,A(f.y01,f.x01),A(f.y11,f.x11),!d),r.arc(0,0,i,A(f.cy+f.y11,f.cx+f.x11),A(p.cy+p.y11,p.cx+p.x11),!d),r.arc(p.cx,p.cy,C,A(p.y11,p.x11),A(p.y01,p.x01),!d))):(r.moveTo(D,H),r.arc(0,0,i,h,x,!d)):r.moveTo(D,H),!(c>b)||!(I>b)?r.lineTo(N,Z):k>b?(f=X(N,Z,j,J,c,-k,d),p=X(D,H,G,V,c,-k,d),r.lineTo(f.cx+f.x01,f.cy+f.y01),k<R?r.arc(f.cx,f.cy,k,A(f.y01,f.x01),A(p.y01,p.x01),!d):(r.arc(f.cx,f.cy,k,A(f.y01,f.x01),A(f.y11,f.x11),!d),r.arc(0,0,c,A(f.cy+f.y11,f.cx+f.x11),A(p.cy+p.y11,p.cx+p.x11),d),r.arc(p.cx,p.cy,k,A(p.y11,p.x11),A(p.y01,p.x01),!d))):r.arc(0,0,c,M,v,d)}if(r.closePath(),a)return r=null,a+""||null}return u.centroid=function(){var a=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,y=(+s.apply(this,arguments)+ +o.apply(this,arguments))/2-K/2;return[U(y)*a,q(y)*a]},u.innerRadius=function(a){return arguments.length?(t=typeof a=="function"?a:S(+a),u):t},u.outerRadius=function(a){return arguments.length?(n=typeof a=="function"?a:S(+a),u):n},u.cornerRadius=function(a){return arguments.length?(e=typeof a=="function"?a:S(+a),u):e},u.padRadius=function(a){return arguments.length?(l=a==null?null:typeof a=="function"?a:S(+a),u):l},u.startAngle=function(a){return arguments.length?(s=typeof a=="function"?a:S(+a),u):s},u.endAngle=function(a){return arguments.length?(o=typeof a=="function"?a:S(+a),u):o},u.padAngle=function(a){return arguments.length?(g=typeof a=="function"?a:S(+a),u):g},u.context=function(a){return arguments.length?(r=a==null?null:a,u):r},u}const jt={draw(t,n){const e=E(n/K);t.moveTo(e,0),t.arc(0,0,e,0,bt)}},it=E(3),vt={draw(t,n){const e=-E(n/(it*3));t.moveTo(0,e*2),t.lineTo(-it*e,-e),t.lineTo(it*e,-e),t.closePath()}};function At(t,n){let e=null;t=typeof t=="function"?t:S(t||jt),n=typeof n=="function"?n:S(n===void 0?64:+n);function l(){let s;if(e||(e=s=ct()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),s)return e=null,s+""||null}return l.type=function(s){return arguments.length?(t=typeof s=="function"?s:S(s),l):t},l.size=function(s){return arguments.length?(n=typeof s=="function"?s:S(+s),l):n},l.context=function(s){return arguments.length?(e=s==null?null:s,l):e},l}function Jt(t){let n,e,l;return{c(){n=pt("svg"),e=pt("style"),l=kt(`.total-text {
			font-family: 'Kanit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-size: 1.5rem;
			font-weight: 600;
		}

		.total {
			font-size: 2.9rem;
		}

		.center-line-text {
			font-style: italic;
			font-size: 0.5rem;
		}

		.num-text {
			font-size: 0.8rem;
		}

		.num-text > .num {
			font-weight: 700;
			font-size: 1.25em;
		}

		.gov-text {
			fill: #f2f2f2;
		}

		.fluid-opp-text {
			transform: translate(208px, -8px);
			opacity: 0;
			transition: 1s;
		}

		.fluid-opp-text.show {
			transform: translate(224px, -8px);
			opacity: 1;
		}`),this.h()},l(s){n=dt(s,"svg",{class:!0});var o=xt(n);e=dt(o,"style",{});var g=xt(e);l=Ct(g,`.total-text {
			font-family: 'Kanit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-size: 1.5rem;
			font-weight: 600;
		}

		.total {
			font-size: 2.9rem;
		}

		.center-line-text {
			font-style: italic;
			font-size: 0.5rem;
		}

		.num-text {
			font-size: 0.8rem;
		}

		.num-text > .num {
			font-weight: 700;
			font-size: 1.25em;
		}

		.gov-text {
			fill: #f2f2f2;
		}

		.fluid-opp-text {
			transform: translate(208px, -8px);
			opacity: 0;
			transition: 1s;
		}

		.fluid-opp-text.show {
			transform: translate(224px, -8px);
			opacity: 1;
		}`),g.forEach(at),o.forEach(at),this.h()},h(){Pt(n,"class","svelte-1v49lxc")},m(s,o){qt(s,n,o),mt(n,e),mt(e,l),t[3](n)},p:st,i:st,o:st,d(s){s&&at(n),t[3](null)}}}const Mt=550,wt=400,w=200;function Qt(t,n,e){let l,{show_current_data:s=!1}=n;const o=(i,m=500)=>Math.PI*(i/m)-Math.PI/2,g=Object.freeze([{total:500,numeric:{gov:254,opp:246,fluid_opp:0,empty:0},sections:[{name:"gov",startAngle:o(0),endAngle:o(254),fill:"#5b5b5b"},{name:"opp",startAngle:o(254),endAngle:o(500),fill:"#d9d9d9"},{name:"fluid_opp",startAngle:o(500),endAngle:o(500),fill:"#a0a0a0",stroke:"transparent"},{name:"empty",startAngle:o(500),endAngle:o(500),fill:"transparent","stroke-dasharray":"1,1"}]},{total:485,numeric:{gov:257,opp:210,fluid_opp:18,empty:15},sections:[{name:"gov",startAngle:o(0),endAngle:o(257),fill:"#5b5b5b"},{name:"opp",startAngle:o(257),endAngle:o(467),fill:"#d9d9d9"},{name:"fluid_opp",startAngle:o(467),endAngle:o(485),fill:"#a0a0a0"},{name:"empty",startAngle:o(485),endAngle:o(500),fill:"transparent",stroke:"#5b5b5b"}]}]);let r,u,a=Zt().innerRadius(w-125).outerRadius(w-20);function y(i){var m=Q(this._current,i);return this._current=m(0),function(_){return a(m(_))}}zt(()=>{r=Ft(l).attr("viewBox",`0 0 ${Mt} ${wt}`).append("g").attr("transform",`translate(${Mt/2}, ${wt/2+w/2})`);const i=r.append("g").attr("class","fluid-opp-text num-text");i.append("text").attr("x",0).attr("y",-16).attr("text-anchor","middle").text("\u0E1D\u0E48\u0E32\u0E22\u0E2D\u0E34\u0E2A\u0E23\u0E30"),i.append("text").attr("class","num").attr("x",0).attr("y",0).attr("text-anchor","middle").text("18 \u0E04\u0E19"),i.append("path").attr("d",At().type(vt).size(40)).attr("fill","#000").attr("transform","translate(-33,-20) rotate(-90)"),r.append("g").attr("class","arc").selectAll("path").data(g[0].sections,h=>h.name).enter().append("path").each(function(h){this._current=h}).attr("fill",h=>h.fill).attr("stroke",h=>{var x;return(x=h.stroke)!=null?x:h.fill}).attr("stroke-dasharray",h=>h["stroke-dasharray"]).attr("d",a);const m=r.append("g").attr("class","total-text");m.append("text").attr("class","total").attr("x",0).attr("y",-21).attr("text-anchor","middle").text(g[0].total),m.append("text").attr("x",0).attr("y",0).attr("text-anchor","middle").text("\u0E04\u0E19");const _=r.append("g").attr("class","center-line");_.append("line").attr("x1",0).attr("y1",-w+5).attr("x2",0).attr("y2",-75).attr("stroke","#F94141").attr("stroke-width",1),_.append("circle").attr("cx",0).attr("cy",-w+5).attr("r",3).attr("fill","#F94141"),_.append("path").attr("d",At().type(vt).size(20)).attr("fill","#F94141").attr("transform","translate(0,-76)"),_.append("text").attr("class","center-line-text").attr("x",0).attr("y",-w-4).attr("text-anchor","middle").text("\u0E01\u0E36\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E2A\u0E20\u0E32").attr("fill","#F94141");const T=r.append("g").attr("class","gov-text num-text");T.append("text").attr("x",-w/2+16).attr("y",-w/2-2).attr("text-anchor","middle").text("\u0E1D\u0E48\u0E32\u0E22\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25"),T.append("text").attr("class","num gov").attr("x",-w/2+16).attr("y",-w/2+18).attr("text-anchor","middle").text(`${g[0].numeric.gov} \u0E04\u0E19`);const d=r.append("g").attr("class","opp-text num-text");d.append("text").attr("x",w/2-16).attr("y",-w/2-2).attr("text-anchor","middle").text("\u0E1D\u0E48\u0E32\u0E22\u0E04\u0E49\u0E32\u0E19"),d.append("text").attr("class","num opp").attr("x",w/2-16).attr("y",-w/2+18).attr("text-anchor","middle").text(`${g[0].numeric.opp} \u0E04\u0E19`),e(2,u=()=>{r.select(".arc").selectAll("path").data(g[+s].sections,h=>h.name).transition().duration(1e3).attr("stroke",h=>{var x;return(x=h.stroke)!=null?x:h.fill}).attrTween("d",y),r.select(".total").transition().duration(1e3).tween("total-text",function(h){const x=Q(this.textContent,g[+s].total);return function(v){this.textContent=Math.round(x(v))}}),r.select(".gov").transition().duration(1e3).tween("gov-text",function(h){const x=Q(+this.textContent.split(" ")[0],g[+s].numeric.gov);return function(v){this.textContent=Math.round(x(v))+" \u0E04\u0E19"}}),r.select(".opp").transition().duration(1e3).tween("gov-text",function(h){const x=Q(+this.textContent.split(" ")[0],g[+s].numeric.opp);return function(v){this.textContent=Math.round(x(v))+" \u0E04\u0E19"}}),s?r.select(".fluid-opp-text").node().classList.add("show"):r.select(".fluid-opp-text").node().classList.remove("show")})});function c(i){Et[i?"unshift":"push"](()=>{l=i,e(0,l)})}return t.$$set=i=>{"show_current_data"in i&&e(1,s=i.show_current_data)},t.$$.update=()=>{t.$$.dirty&6&&(u==null||u(s))},[l,s,u,c]}class Gt extends Tt{constructor(n){super(),Rt(this,n,Qt,Jt,St,{show_current_data:1})}}export{Gt as default};
