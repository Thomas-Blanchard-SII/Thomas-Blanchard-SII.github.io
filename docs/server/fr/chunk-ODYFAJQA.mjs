import './polyfills.server.mjs';
var v=Object.create;var n=Object.defineProperty,w=Object.defineProperties,x=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,A=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var l=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),B=a=>{throw TypeError(a)};var r=(a,b,c)=>b in a?n(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,D=(a,b)=>{for(var c in b||={})o.call(b,c)&&r(a,c,b[c]);if(m)for(var c of m(b))s.call(b,c)&&r(a,c,b[c]);return a},E=(a,b)=>w(a,y(b));var F=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var G=(a,b)=>{var c={};for(var d in a)o.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&m)for(var d of m(a))b.indexOf(d)<0&&s.call(a,d)&&(c[d]=a[d]);return c};var H=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),I=(a,b)=>{for(var c in b)n(a,c,{get:b[c],enumerable:!0})},C=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of z(b))!o.call(a,e)&&e!==c&&n(a,e,{get:()=>b[e],enumerable:!(d=x(b,e))||d.enumerable});return a};var J=(a,b,c)=>(c=a!=null?v(A(a)):{},C(b||!a||!a.__esModule?n(c,"default",{value:a,enumerable:!0}):c,a));var K=(a,b,c)=>new Promise((d,e)=>{var g=f=>{try{i(c.next(f))}catch(j){e(j)}},h=f=>{try{i(c.throw(f))}catch(j){e(j)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(g,h);i((c=c.apply(a,b)).next())}),t=function(a,b){this[0]=a,this[1]=b},L=(a,b,c)=>{var d=(h,i,f,j)=>{try{var p=c[h](i),q=(i=p.value)instanceof t,u=p.done;Promise.resolve(q?i[0]:i).then(k=>q?d(h==="return"?h:"next",i[1]?{done:k.done,value:k.value}:k,f,j):f({value:k,done:u})).catch(k=>d("throw",k,f,j))}catch(k){j(k)}},e=h=>g[h]=i=>new Promise((f,j)=>d(h,i,f,j)),g={};return c=c.apply(a,b),g[l("asyncIterator")]=()=>g,e("next"),e("throw"),e("return"),g},M=a=>{var b=a[l("asyncIterator")],c=!1,d,e={};return b==null?(b=a[l("iterator")](),d=g=>e[g]=h=>b[g](h)):(b=b.call(a),d=g=>e[g]=h=>{if(c){if(c=!1,g==="throw")throw h;return h}return c=!0,{done:!1,value:new t(new Promise(i=>{var f=b[g](h);f instanceof Object||B("Object expected"),i(f)}),1)}}),e[l("iterator")]=()=>e,d("next"),"throw"in b?d("throw"):e.throw=g=>{throw g},"return"in b&&d("return"),e};export{D as a,E as b,F as c,G as d,H as e,I as f,J as g,K as h,t as i,L as j,M as k};
/**i18n:f27f65b65f318acc5e380dc005758fa9c6afc450beb5f94d73d8aa80bc9c9de7*/