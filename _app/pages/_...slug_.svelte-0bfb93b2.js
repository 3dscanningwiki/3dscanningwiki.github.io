import{S as u,i as c,s as i,w as m,x as f,y as g,q as _,o as h,B as p}from"../chunks/vendor-a7ef7336.js";import{P as d}from"../chunks/page-ce206e19.js";/* empty css                                                   */function j(a){var o;let e,n;return e=new d({props:{slug:a[1],html:a[0].html,frontmatter:(o=a[0].metadata)!=null?o:{}}}),{c(){m(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,s){g(e,t,s),n=!0},p(t,[s]){var l;const r={};s&2&&(r.slug=t[1]),s&1&&(r.html=t[0].html),s&1&&(r.frontmatter=(l=t[0].metadata)!=null?l:{}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}async function b({params:a,fetch:e}){let n=a.slug;n.endsWith("/")&&(n=n.substr(0,n.length-1));const t=await(await e(`/api/${n}.json`)).json().catch(s=>console.log(s));return t.html?{props:{content:t,slug:n}}:{status:404}}function w(a,e,n){let{content:o}=e,{slug:t}=e;return a.$$set=s=>{"content"in s&&n(0,o=s.content),"slug"in s&&n(1,t=s.slug)},[o,t]}class q extends u{constructor(e){super();c(this,e,w,j,i,{content:0,slug:1})}}export{q as default,b as load};