import{r as h,i as v}from"./stagger.es-305b11bc.js";const b={any:0,all:1};function I(c,a,{root:f,margin:l,amount:n="any"}={}){if(typeof IntersectionObserver>"u")return()=>{};const g=h(c),t=new WeakMap,d=o=>{o.forEach(e=>{const r=t.get(e.target);if(e.isIntersecting!==Boolean(r))if(e.isIntersecting){const i=a(e);v(i)?t.set(e.target,i):s.unobserve(e.target)}else r&&(r(e),t.delete(e.target))})},s=new IntersectionObserver(d,{root:f,rootMargin:l,threshold:typeof n=="number"?n:b[n]});return g.forEach(o=>s.observe(o)),()=>s.disconnect()}export{I as i};
