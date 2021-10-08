(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ia;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
function oa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.s=0;this.G=this.j=null}
function pa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={Da:b,Ha:!0};a.h=a.s||a.o}
oa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.m=function(a){this.h=a};
function ra(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function sa(a){a.s=0;var b=a.j.Da;a.j=null;return b}
function ta(a){a.G=[a.j];a.s=0;a.o=0}
function ua(a){var b=a.G.splice(0)[0];(b=a.j=a.j||b)?b.Ha?a.h=a.s||a.o:void 0!=b.m&&a.o<b.m?(a.h=b.m,a.j=null):a.h=a.o:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ha)throw b.Da;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&Aa(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ua),reject:g(this.o)}};
b.prototype.Ua=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Wa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.oa(g):this.s(g)}};
b.prototype.oa=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.Xa(h,g):this.s(g)};
b.prototype.o=function(g){this.B(2,g)};
b.prototype.s=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Va();this.G()};
b.prototype.Va=function(){var g=this;e(function(){if(g.T()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.G=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Wa=function(g){var h=this.l();g.fa(h.resolve,h.reject)};
b.prototype.Xa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(B){try{l(q(B))}catch(x){m(x)}}:r}
var l,m,p=new b(function(q,r){l=q;m=r});
this.fa(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).fa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(B){return function(x){q[B]=x;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).fa(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var A=this||self;function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ga(a){var b=Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ha(a){return Object.prototype.hasOwnProperty.call(a,Ia)&&a[Ia]||(a[Ia]=++Ja)}
var Ia="closure_uid_"+(1E9*Math.random()>>>0),Ja=0;function Ka(a,b,c){return a.call.apply(a.bind,arguments)}
function La(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ma(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ma=Ka:Ma=La;return Ma.apply(null,arguments)}
function F(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
;function Oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Za=b)}
G(Oa,Error);Oa.prototype.name="CustomError";function Pa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Qa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ta(a,b){b=Ra(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ua(a){return Array.prototype.concat.apply([],arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ab(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ab(a[c]);return b}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var db;function eb(a,b){this.h=a===fb&&b||""}
eb.prototype.aa=!0;eb.prototype.Z=function(){return this.h};
function gb(a){return new eb(fb,a)}
var fb={};gb("");var hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ib(a,b){if(b)a=a.replace(jb,"&amp;").replace(kb,"&lt;").replace(lb,"&gt;").replace(mb,"&quot;").replace(nb,"&#39;").replace(ob,"&#0;");else{if(!pb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(jb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(kb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(lb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(mb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(nb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ob,"&#0;"))}return a}
var jb=/&/g,kb=/</g,lb=/>/g,mb=/"/g,nb=/'/g,ob=/\x00/g,pb=/[\x00&<>"']/;function qb(a,b){this.h=b===rb?a:""}
n=qb.prototype;n.aa=!0;n.Z=function(){return this.h.toString()};
n.Ga=!0;n.Ea=function(){return 1};
n.toString=function(){return this.h.toString()};
var sb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),tb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,rb={},vb=new qb("about:invalid#zClosurez",rb);var wb;a:{var xb=A.navigator;if(xb){var yb=xb.userAgent;if(yb){wb=yb;break a}}wb=""}function I(a){return-1!=wb.indexOf(a)}
;function zb(){return I("Firefox")||I("FxiOS")}
function Ab(){return(I("Chrome")||I("CriOS"))&&!I("Edge")}
;var Bb={};function Cb(a,b,c){this.h=c===Bb?a:"";this.i=b;this.aa=this.Ga=!0}
Cb.prototype.Ea=function(){return this.i};
Cb.prototype.Z=function(){return this.h.toString()};
Cb.prototype.toString=function(){return this.h.toString()};
function Db(a,b){if(void 0===db){var c=null;var d=A.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(e){A.console&&A.console.error(e.message)}db=c}else db=c}a=(c=db)?c.createHTML(a):a;return new Cb(a,b,Bb)}
;var Eb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fb(a){return a?decodeURI(a):a}
function Gb(a){return Fb(a.match(Eb)[3]||null)}
function Hb(a){var b=a.match(Eb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Ib(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ib(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Jb(a){var b=[],c;for(c in a)Ib(c,a[c],b);return b.join("&")}
var Kb=/#|$/;function Lb(a,b){var c=a.search(Kb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function K(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Mb(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Nb(a){Nb[" "](a);return a}
Nb[" "]=Ea;var Ob=I("Opera"),Pb=I("Trident")||I("MSIE"),Qb=I("Edge"),Rb=I("Gecko")&&!(-1!=wb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Sb=-1!=wb.toLowerCase().indexOf("webkit")&&!I("Edge");function Tb(){var a=A.document;return a?a.documentMode:void 0}
var Ub;a:{var Vb="",Wb=function(){var a=wb;if(Rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Qb)return/Edge\/([\d\.]+)/.exec(a);if(Pb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sb)return/WebKit\/(\S+)/.exec(a);if(Ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wb&&(Vb=Wb?Wb[1]:"");if(Pb){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Yb=Ub,Zb;if(A.document&&Pb){var $b=Tb();Zb=$b?$b:parseInt(Yb,10)||void 0}else Zb=void 0;var ac=Zb;zb();var bc=Mb()||I("iPod"),cc=I("iPad");!I("Android")||Ab()||zb();Ab();var dc=I("Safari")&&!(Ab()||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||zb()||I("Silk")||I("Android"))&&!(Mb()||I("iPad")||I("iPod"));var ec={},fc=null;var gc={Hb:{value:!0,configurable:!0}};var hc=Object,ic=hc.freeze,jc=[];Array.isArray(jc)&&!Object.isFrozen(jc)&&Object.defineProperties(jc,gc);ic.call(hc,jc);var L=window;gb("csi.gstatic.com");gb("googleads.g.doubleclick.net");gb("pagead2.googlesyndication.com");gb("partner.googleadservices.com");gb("pubads.g.doubleclick.net");gb("securepubads.g.doubleclick.net");gb("tpc.googlesyndication.com");/*

 Copyright 2021 The Safevalues Authors
 SPDX-License-Identifier: Apache-2.0
*/
function kc(a,b){this.width=a;this.height=b}
n=kc.prototype;n.clone=function(){return new kc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function lc(a,b){Xa(b,function(c,d){c&&"object"==typeof c&&c.aa&&(c=c.Z());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function nc(a,b,c){var d=arguments,e=document,f=d[1],g=oc(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):lc(g,f));2<d.length&&pc(e,g,d);return g}
function pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ga(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?Va(f):f,d)}}}
function oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function rc(a){var b=sc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function tc(){var a=[];rc(function(b){a.push(b)});
return a}
var sc={rb:"allow-forms",sb:"allow-modals",tb:"allow-orientation-lock",ub:"allow-pointer-lock",vb:"allow-popups",wb:"allow-popups-to-escape-sandbox",xb:"allow-presentation",yb:"allow-same-origin",zb:"allow-scripts",Ab:"allow-top-navigation",Bb:"allow-top-navigation-by-user-activation"},uc=Qa(function(){return tc()});
function vc(){var a=oc(document,"IFRAME"),b={};H(uc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var wc=(new Date).getTime();function xc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var B=e[1],x=e[2],y=e[3],N=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var J=y^B&(x^y);var E=1518500249}else J=B^x^y,E=1859775393;else 60>r?(J=B&x|y&(B|x),E=2400959708):(J=B^x^y,E=3395469782);J=((p<<5|p>>>27)&4294967295)+J+N+E+q[r]&4294967295;N=y;y=x;x=(B<<30|B>>>2)&4294967295;B=p;p=J}e[0]=e[0]+p&4294967295;e[1]=e[1]+B&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+N&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],B=0,x=p.length;B<x;++B)r.push(p.charCodeAt(B));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var B=24;0<=B;B-=8)p[q++]=e[r]>>B&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,bb:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function zc(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Ac(xc(d),a,c||null)].join(" "):null}
function Ac(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Bc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Bc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Bc(a){var b=yc();b.update(a);return b.bb().toLowerCase()}
;var Cc={};function Dc(a){this.h=a||{cookie:""}}
n=Dc.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ra:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Kb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=hb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ra:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Dc("undefined"==typeof document?null:document);function Fc(a){return!!Cc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Gc(a,b,c,d){(a=A[a])||(a=(new Dc(document)).get(b));return a?zc(a,c,d):null}
function Hc(a){var b=void 0===b?!1:b;var c=xc(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Fc(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Dc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Fc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Dc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?zc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Fc(b)&&((b=Gc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Gc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ic(){this.data_=[];this.h=-1}
Ic.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ic.prototype.get=function(a){return!!this.data_[a]};
function Jc(a){-1==a.h&&(a.h=Sa(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Kc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Kc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Lc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Mc;
function Nc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ma(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Aa;c.Aa=null;e()}};
return function(e){d.next={Aa:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Oc(a){A.setTimeout(function(){throw a;},0)}
;function Pc(){this.i=this.h=null}
Pc.prototype.add=function(a,b){var c=Qc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Pc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Qc=new Kc(function(){return new Rc},function(a){return a.reset()});
function Rc(){this.next=this.scope=this.h=null}
Rc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Rc.prototype.reset=function(){this.next=this.scope=this.h=null};function Sc(a,b){Tc||Uc();Vc||(Tc(),Vc=!0);Wc.add(a,b)}
var Tc;function Uc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Tc=function(){a.then(Xc)}}else Tc=function(){var b=Xc;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!I("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(Mc||(Mc=Nc()),Mc(b)):A.setImmediate(b)}}
var Vc=!1,Wc=new Pc;function Xc(){for(var a;a=Wc.remove();){try{a.h.call(a.scope)}catch(b){Oc(b)}Lc(Qc,a)}Vc=!1}
;function Yc(a,b){this.h=a[A.Symbol.iterator]();this.i=b;this.j=0}
Yc.prototype[Symbol.iterator]=function(){return this};
Yc.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Zc(a,b){return new Yc(a,b)}
;function $c(){this.blockSize=-1}
;function ad(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
G(ad,$c);ad.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function bd(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ad.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)bd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){bd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){bd(this,e);f=0;break}}this.i=f;this.l+=b}};
ad.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;bd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function cd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=dd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ed[c])c=ed[c];else{c=String(c);if(!ed[c]){var f=/function\s+([^\(]+)/m.exec(c);ed[c]=f?f[1]:"[Anonymous]"}c=ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function dd(a,b){b||(b={});b[fd(a)]=!0;var c=a.stack||"";(a=a.Za)&&!b[fd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=dd(a,b));return c}
function fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ed={};function gd(){this.j=this.j;this.o=this.o}
gd.prototype.j=!1;gd.prototype.dispose=function(){this.j||(this.j=!0,this.Y())};
gd.prototype.Y=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var hd="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function id(){}
id.prototype.M=function(){throw hd;};
id.prototype.H=function(){return this};function jd(a){if(a instanceof kd||a instanceof ld||a instanceof md)return a;if("function"==typeof a.M)return new kd(function(){return nd(a)});
if("function"==typeof a[Symbol.iterator])return new kd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.H)return new kd(function(){return nd(a.H())});
throw Error("Not an iterator or iterable.");}
function nd(a){if(!(a instanceof id))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.M();break}catch(d){if(d!==hd)throw d;b=!0}return{value:c,done:b}}}}
function kd(a){this.i=a}
kd.prototype.H=function(){return new ld(this.i())};
kd.prototype[Symbol.iterator]=function(){return new md(this.i())};
kd.prototype.h=function(){return new md(this.i())};
function ld(a){this.i=a}
v(ld,id);ld.prototype.M=function(){var a=this.i.next();if(a.done)throw hd;return a.value};
ld.prototype[Symbol.iterator]=function(){return new md(this.i)};
ld.prototype.h=function(){return new md(this.i)};
function md(a){kd.call(this,function(){return a});
this.j=a}
v(md,kd);md.prototype.next=function(){return this.j.next()};function od(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof od)for(c=pd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function pd(a){qd(a);return a.h.concat()}
n=od.prototype;n.has=function(a){return rd(this.i,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||sd;qd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function sd(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.i={};this.j=this.size=this.h.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return rd(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&qd(this),!0):!1};
function qd(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];rd(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],rd(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return rd(this.i,a)?this.i[a]:b};
n.set=function(a,b){rd(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
n.forEach=function(a,b){for(var c=pd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new od(this)};
n.keys=function(){return jd(this.H(!0)).h()};
n.values=function(){return jd(this.H(!1)).h()};
n.entries=function(){var a=this;return Zc(this.keys(),function(b){return[b,a.get(b)]})};
n.H=function(a){qd(this);var b=0,c=this.j,d=this,e=new id;e.M=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw hd;var f=d.h[b++];return a?f:d.i[f]};
return e};
function rd(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function td(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
td.prototype.stopPropagation=function(){this.j=!0};
td.prototype.preventDefault=function(){this.defaultPrevented=!0};var ud=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",Ea,b),A.removeEventListener("test",Ea,b)}catch(c){}return a}();function vd(a,b){td.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
G(vd,td);var wd={2:"touch",3:"pen",4:"mouse"};
vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Rb){a:{try{Nb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:wd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&vd.K.preventDefault.call(this)};
vd.prototype.stopPropagation=function(){vd.K.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
vd.prototype.preventDefault=function(){vd.K.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xd="closure_listenable_"+(1E6*Math.random()|0);var yd=0;function zd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ja=e;this.key=++yd;this.ba=this.ea=!1}
function Ad(a){a.ba=!0;a.listener=null;a.proxy=null;a.src=null;a.ja=null}
;function Bd(a){this.src=a;this.listeners={};this.h=0}
Bd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Cd(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new zd(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};
Bd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Cd(e,b,c,d);return-1<b?(Ad(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Dd(a,b){var c=b.type;c in a.listeners&&Ta(a.listeners[c],b)&&(Ad(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Cd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ba&&f.listener==b&&f.capture==!!c&&f.ja==d)return e}return-1}
;var Ed="closure_lm_"+(1E6*Math.random()|0),Fd={},Gd=0;function Hd(a,b,c,d,e){if(d&&d.once)Id(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Hd(a,b[f],c,d,e);else c=Jd(c),a&&a[xd]?a.W(b,c,D(d)?!!d.capture:!!d,e):Kd(a,b,c,!1,d,e)}
function Kd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=Ld(a);h||(a[Ed]=h=new Bd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Md();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ud||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Nd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Gd++}}
function Md(){function a(c){return b.call(a.src,a.listener,c)}
var b=Od;return a}
function Id(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Id(a,b[f],c,d,e);else c=Jd(c),a&&a[xd]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):Kd(a,b,c,!0,d,e)}
function Pd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Pd(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=Jd(c),a&&a[xd])?a.h.remove(String(b),c,d,e):a&&(a=Ld(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Cd(b,c,d,e)),(c=-1<a?b[a]:null)&&Qd(c))}
function Qd(a){if("number"!==typeof a&&a&&!a.ba){var b=a.src;if(b&&b[xd])Dd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Nd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Gd--;(c=Ld(b))?(Dd(c,a),0==c.h&&(c.src=null,b[Ed]=null)):Ad(a)}}}
function Nd(a){return a in Fd?Fd[a]:Fd[a]="on"+a}
function Od(a,b){if(a.ba)a=!0;else{b=new vd(b,this);var c=a.listener,d=a.ja||a.src;a.ea&&Qd(a);a=c.call(d,b)}return a}
function Ld(a){a=a[Ed];return a instanceof Bd?a:null}
var Rd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Jd(a){if("function"===typeof a)return a;a[Rd]||(a[Rd]=function(b){return a.handleEvent(b)});
return a[Rd]}
;function O(){gd.call(this);this.h=new Bd(this);this.oa=this;this.u=null}
G(O,gd);O.prototype[xd]=!0;O.prototype.addEventListener=function(a,b,c,d){Hd(this,a,b,c,d)};
O.prototype.removeEventListener=function(a,b,c,d){Pd(this,a,b,c,d)};
function Sd(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.oa;c=b.type||b;"string"===typeof b?b=new td(b,a):b instanceof td?b.target=b.target||a:(e=b,b=new td(c,a),cb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Td(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Td(g,c,!0,b)&&e,b.j||(e=Td(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Td(g,c,!1,b)&&e}
O.prototype.Y=function(){O.K.Y.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ad(d[e]);delete a.listeners[c];a.h--}}this.u=null};
O.prototype.W=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Td(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ba&&g.capture==c){var h=g.listener,k=g.ja||g.src;g.ea&&Dd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var Ud=A.JSON.stringify;function Vd(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.s=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Wd(b,2,c)},function(c){Wd(b,3,c)})}catch(c){Wd(this,3,c)}}
function Xd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Xd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Yd=new Kc(function(){return new Xd},function(a){a.reset()});
function Zd(a,b,c){var d=Yd.get();d.i=a;d.onRejected=b;d.context=c;return d}
Vd.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Vd.prototype.$goog_Thenable=!0;Vd.prototype.cancel=function(a){if(0==this.h){var b=new ae(a);Sc(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Wd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Zd(null,null,null);e.h=new Vd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;ee(a,e);return e.h}
Vd.prototype.G=function(a){this.h=0;Wd(this,2,a)};
Vd.prototype.T=function(a){this.h=0;Wd(this,3,a)};
function Wd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.G,f=a.T;if(d instanceof Vd){ee(d,Zd(e||Ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||he(a,c))}}
function ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.s||(a.s=!0,Sc(a.B,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Vd.prototype.B=function(){for(var a;a=ce(this);)de(this,a,this.h,this.u);this.s=!1};
function de(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}Lc(Yd,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function he(a,b){a.o=!0;Sc(function(){a.o&&je.call(null,b)})}
var je=Oc;function ae(a){Oa.call(this,a)}
G(ae,Oa);ae.prototype.name="cancel";function P(a){gd.call(this);this.u=1;this.l=[];this.s=0;this.h=[];this.i={};this.B=!!a}
G(P,gd);n=P.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function ke(a,b,c){var d=le;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.da(a)}}
n.da=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.l.push(a),this.h[a+1]=Ea):(c&&Ta(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.X=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];me(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.l.length&&0==this.s)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function me(a,b,c){Sc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.da,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.Y=function(){P.K.Y.call(this);this.clear();this.l.length=0};function ne(a){this.h=a}
ne.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Ud(b))};
ne.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ne.prototype.remove=function(a){this.h.remove(a)};function oe(a){this.h=a}
G(oe,ne);function pe(a){this.data=a}
function qe(a){return void 0===a||a instanceof pe?a:new pe(a)}
oe.prototype.set=function(a,b){oe.K.set.call(this,a,qe(b))};
oe.prototype.i=function(a){a=oe.K.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
oe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function re(a){this.h=a}
G(re,oe);re.prototype.set=function(a,b,c){if(b=qe(b)){if(c){if(c<Date.now()){re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}re.K.set.call(this,a,b)};
re.prototype.i=function(a){var b=re.K.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())re.prototype.remove.call(this,a);else return b}};function se(){}
;function te(){}
G(te,se);te.prototype[Symbol.iterator]=function(){return jd(this.H(!0)).h()};
te.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ue(a){this.h=a}
G(ue,te);n=ue.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.H=function(a){var b=0,c=this.h,d=new id;d.M=function(){if(b>=c.length)throw hd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(ve,ue);function we(a,b){this.i=a;this.h=null;var c;if(c=Pb)c=!(9<=Number(ac));if(c){xe||(xe=new od);this.h=xe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),xe.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
G(we,te);var ye={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xe=null;function ze(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ye[b]})}
n=we.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(ze(a),b);Ae(this)};
n.get=function(a){a=this.h.getAttribute(ze(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(ze(a));Ae(this)};
n.H=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new id;d.M=function(){if(b>=c.length)throw hd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ae(this)};
function Ae(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Be(a,b){this.i=a;this.h=b+"::"}
G(Be,te);Be.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Be.prototype.get=function(a){return this.i.get(this.h+a)};
Be.prototype.remove=function(a){this.i.remove(this.h+a)};
Be.prototype.H=function(a){var b=this.i.H(!0),c=this,d=new id;d.M=function(){for(var e=b.M();e.substr(0,c.h.length)!=c.h;)e=b.M();return a?e.substr(c.h.length):c.i.get(e)};
return d};var Ce,De,Ee=A.window,Fe=(null===(Ce=null===Ee||void 0===Ee?void 0:Ee.yt)||void 0===Ce?void 0:Ce.config_)||(null===(De=null===Ee||void 0===Ee?void 0:Ee.ytcfg)||void 0===De?void 0:De.data_)||{};F("yt.config_",Fe);function Ge(a){for(var b=0;b<arguments.length;++b);b=arguments;1<b.length?Fe[b[0]]=b[1]:1===b.length&&Object.assign(Fe,b[0])}
function Q(a,b){return a in Fe?Fe[a]:b}
;var He=[];function Ie(a){He.forEach(function(b){return b(a)})}
function Je(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ke(b)}}:a}
function Ke(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=Q("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ge("ERRORS",e));Ie(a)}
function Le(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=Q("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ge("ERRORS",e))}
;var Me=0;F("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Me});var Ne={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Oe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ne||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Oe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Oe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Oe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=A.ytEventsEventsListeners||{};F("ytEventsEventsListeners",Za);var Pe=A.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Pe);
function Qe(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Re(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Za){var c=Za[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Se()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[b]}}))}
var Se=Qa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Te(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Qe(a,b,c,d);if(!e){e=++Pe.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Oe(h);if(!qc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Oe(h);
h.currentTarget=a;return c.call(a,h)};
g=Je(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Se()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d]}}}
;function Ue(a,b){"function"===typeof a&&(a=Je(a));return window.setTimeout(a,b)}
function Ve(a){"function"===typeof a&&(a=Je(a));return window.setInterval(a,250)}
;var We=/^[\w.]*$/,Xe={q:!0,search_query:!0};function Ye(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ze(f[0]||""),h=Ze(f[1]||"");g in c?Array.isArray(c[g])?Wa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(Ye);k.args=[{key:l,value:f[1],query:a,method:$e==m?"unchanged":m}];Xe.hasOwnProperty(l)||Le(k)}}return c}
var $e=String(Ye);function af(a){var b=[];Xa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function bf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ye(a,"&")}
function cf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=bf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Jb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function df(a){if(!b)var b=window.location.href;var c=a.match(Eb)[1]||null,d=Gb(a);c&&d?(a=a.match(Eb),b=b.match(Eb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Gb(b)==d&&(Number(b.match(Eb)[4]||null)||null)==(Number(a.match(Eb)[4]||null)||null):!0;return a}
function Ze(a){return a&&a.match(We)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=ef(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ff(a,b){a=ef(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ef(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function gf(){}
function hf(a,b){return jf(a,0,b)}
function kf(a,b){return jf(a,1,b)}
;function lf(){gf.apply(this,arguments)}
v(lf,gf);function mf(){lf.h||(lf.h=new lf);return lf.h}
function jf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ue(a,c||0)}
function nf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
lf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};mf();function of(a){var b=pf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=wc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?L:g;try{var h=g.history.length}catch(ma){h=0}e.u_his=h;L.screen&&(e.u_h=L.screen.height,e.u_w=L.screen.width,e.u_ah=L.screen.availHeight,e.u_aw=L.screen.availWidth,e.u_cd=L.screen.colorDepth);e.u_java=!!L.navigator&&"unknown"!==
typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.navigator&&L.navigator.plugins&&(e.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(e.u_nmime=L.navigator.mimeTypes.length)}catch(ma){}h=b.h;try{var k=h.screenX;var l=h.screenY}catch(ma){}try{var m=h.outerWidth;var p=h.outerHeight}catch(ma){}try{var q=h.innerWidth;var r=h.innerHeight}catch(ma){}try{var B=h.screenLeft;var x=h.screenTop}catch(ma){}try{q=h.innerWidth,r=h.innerHeight}catch(ma){}try{var y=
h.screen.availWidth;var N=h.screen.availTop}catch(ma){}k=[B,x,k,l,y,N,m,p,q,r];l=b.h.top;try{var J=(l||window).document,E="CSS1Compat"==J.compatMode?J.documentElement:J.body;var M=(new kc(E.clientWidth,E.clientHeight)).round()}catch(ma){M=new kc(-12245933,-12245933)}J=M;M={};E=new Ic;A.SVGElement&&A.document.createElementNS&&E.set(0);l=vc();l["allow-top-navigation-by-user-activation"]&&E.set(1);l["allow-popups-to-escape-sandbox"]&&E.set(2);A.crypto&&A.crypto.subtle&&E.set(3);A.TextDecoder&&A.TextEncoder&&
E.set(4);E=Jc(E);M.bc=E;M.bih=J.height;M.biw=J.width;M.brdim=k.join();b=b.i;b=(M.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,M.wgl=!!L.WebGLRenderingContext,M);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pf=new function(){var a=window.document;this.h=window;this.i=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return af(of(a))});Date.now();var qf="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function rf(){if(!qf)return null;var a=qf();return"open"in a?a:null}
;var sf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},tf="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),uf=!1;
function vf(a,b){b=void 0===b?{}:b;var c=df(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in sf){var f=Q(sf[e]);!f||!c&&Gb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Gb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Gb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Gb(a))b["X-YouTube-Ad-Signals"]=af(of(void 0));return b}
function wf(a){var b=window.location.search,c=Gb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!df(a)||(c=document.location.hostname);var d=Fb(a.match(Eb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=bf(b),f={};H(tf,function(g){e[g]&&(f[g]=e[g])});
return cf(a,f||{},!1)}
function xf(a,b){var c=b.format||"JSON";a=yf(a,b);var d=zf(a,b),e=!1,f=Af(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Bf(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||A;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Ue(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function yf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=cf(a,b||{},!0);return a}
function zf(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Gb(a)&&!b.withCredentials&&Gb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=bf(e),cb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Jb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!uf&&a&&"POST"!=b.method&&(uf=!0,Ke(Error("AJAX request with postData should use POST")));return e}
function Bf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Le(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Cf(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Df(g)})}d&&Ef(e);
return e}
function Ef(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;gb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Db(a[b],null);a[c]=d}else Ef(a[b])}}
function Cf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Df(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Af(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Je(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=rf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=wf(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ff=bc||cc;function Gf(a){var b=wb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Hf={},If=0;
function Jf(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Gf("cobalt"))a&&(a instanceof qb||(a="object"==typeof a&&a.aa?a.Z():String(a),ub.test(a)?a=new qb(a,rb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(tb))&&sb.test(b[1])?new qb(a,rb):null)),a=a||vb,a instanceof qb&&a.constructor===qb?a=a.h:(Fa(a),a="type_error:SafeUrl"),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof Cb||(b="object"==typeof a,c=null,b&&a.Ga&&(c=a.Ea()),a=Db(ib(b&&a.aa?a.Z():String(a)),c)),a instanceof
Cb&&a.constructor===Cb?a=a.h:(Fa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Ud(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=nc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)));else if(e)Af(a,b,"POST",e,d);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Af(a,b,"GET","",d);else{b:{try{var f=new Pa({url:a});if(f.j&&f.i||f.l){var g=Fb(a.match(Eb)[5]||null);var h=!(!g||!g.endsWith("/aclk")||
"1"!==Lb(a,"ri"));break b}}catch(k){}h=!1}h?Kf(a)?(b&&b(),c=!0):c=!1:c=!1;c||Lf(a,b)}}
function Mf(a,b,c){c=void 0===c?"":c;Kf(a,c)?b&&b():Jf(a,b,void 0,void 0,c)}
function Kf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Lf(a,b){var c=new Image,d=""+If++;Hf[d]=c;c.onload=c.onerror=function(){b&&Hf[d]&&b();delete Hf[d]};
c.src=a}
;var Nf=A.ytPubsubPubsubInstance||new P,Of=A.ytPubsubPubsubSubscribedKeys||{},Pf=A.ytPubsubPubsubTopicToKeys||{},Qf=A.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.da;P.prototype.publish=P.prototype.X;P.prototype.clear=P.prototype.clear;F("ytPubsubPubsubInstance",Nf);F("ytPubsubPubsubTopicToKeys",Pf);F("ytPubsubPubsubIsSynchronous",Qf);F("ytPubsubPubsubSubscribedKeys",Of);var Rf=window,S=Rf.ytcsi&&Rf.ytcsi.now?Rf.ytcsi.now:Rf.performance&&Rf.performance.timing&&Rf.performance.now&&Rf.performance.timing.navigationStart?function(){return Rf.performance.timing.navigationStart+Rf.performance.now()}:function(){return(new Date).getTime()};var Sf=ff("initial_gel_batch_timeout",2E3),Tf=Math.pow(2,16)-1,Uf=void 0,Vf=0,Wf=0,Xf=0,Yf=!0,Zf=A.ytLoggingTransportGELQueue_||new Map;F("ytLoggingTransportGELQueue_",Zf);var $f=A.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",$f);
function ag(a,b){if("log_event"===a.endpoint){var c="";a.ha?c="visitorOnlyApprovedKey":a.L&&($f[a.L.token]=bg(a.L),c=a.L.token);var d=Zf.get(c)||[];Zf.set(c,d);d.push(a.payload);b&&(Uf=new b);a=ff("tvhtml5_logging_max_batch")||ff("web_logging_max_batch")||100;b=S();d.length>=a?cg({writeThenSend:!0},R("flush_only_full_queue")?c:void 0):10<=b-Xf&&(dg(),Xf=b)}}
function eg(a,b){if("log_event"===a.endpoint){var c="";a.ha?c="visitorOnlyApprovedKey":a.L&&($f[a.L.token]=bg(a.L),c=a.L.token);var d=new Map;d.set(c,[a.payload]);b&&(Uf=new b);return new Vd(function(e){Uf&&Uf.isReady()?fg(d,e,{bypassNetworkless:!0},!0):e()})}}
function cg(a,b){a=void 0===a?{}:a;new Vd(function(c){window.clearTimeout(Vf);window.clearTimeout(Wf);Wf=0;if(Uf&&Uf.isReady())if(void 0!==b){var d=new Map,e=Zf.get(b)||[];d.set(b,e);fg(d,c,a);Zf.delete(b)}else fg(Zf,c,a),Zf.clear();else dg(),c()})}
function dg(){R("web_gel_timeout_cap")&&!Wf&&(Wf=Ue(function(){cg({writeThenSend:!0})},6E4));
window.clearTimeout(Vf);var a=Q("LOGGING_BATCH_TIMEOUT",ff("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Yf&&(a=Sf);Vf=Ue(function(){cg({writeThenSend:!0})},a)}
function fg(a,b,c,d){var e=Uf;c=void 0===c?{}:c;var f=Math.round(S()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=ab({context:gg(e.config_||hg())});k.events=l;(l=$f[h])&&ig(k,h,l);delete $f[h];h="visitorOnlyApprovedKey"===h;jg(k,f,h);R("always_send_and_write")&&(c.writeThenSend=!1);R("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Mf("/generate_204");kg(e,"log_event",k,{retry:!0,onSuccess:function(){g--;
g||b()},
onError:function(){g--;g||b()},
La:c,ha:h,Fb:!!d});Yf=!1}}
function jg(a,b,c){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID",void 0))&&((c=Q("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Tf/2)),c++,c>Tf&&(c=1),Ge("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ig(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function bg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var lg=A.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",lg);function mg(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;F("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var ng={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},og={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function pg(){var a=A.navigator;return a?a.connection:void 0}
;function qg(){return"INNERTUBE_API_KEY"in Fe&&"INNERTUBE_API_VERSION"in Fe}
function hg(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),eb:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fb:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),hb:Q("INNERTUBE_CONTEXT_HL",void 0),gb:Q("INNERTUBE_CONTEXT_GL",void 0),ib:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",kb:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),jb:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function gg(a){var b={client:{hl:a.hb,gl:a.gb,clientName:a.fb,clientVersion:a.innertubeContextClientVersion,configInfo:a.eb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!R("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=mg()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!R("music_web_display_mode_killswitch")){var h;b.client.Ka=null!=(h=b.client.Ka)?h:{};b.client.Ka.webDisplayMode=mg()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a:{if(h=pg()){a=ng[h.type||"unknown"]||"CONN_UNKNOWN";h=ng[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=pg(),a=null!==a&&void 0!==a&&a.effectiveType?og.hasOwnProperty(a.effectiveType)?og[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(bf(Q("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function rg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Db||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Cb:b=Hc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function sg(a){a=Object.assign({},a);delete a.Authorization;var b=Hc();if(b){var c=new ad;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ga(b);void 0===c&&(c=0);if(!fc){fc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));ec[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===fc[k]&&(fc[k]=h)}}}c=ec[c];d=Array(Math.floor(b.length/3));e=c[64]||"";for(f=g=0;g<b.length-
2;g+=3){var l=b[g],m=b[g+1];k=b[g+2];h=c[l>>2];l=c[(l&3)<<4|m>>4];m=c[(m&15)<<2|k>>6];k=c[k&63];d[f++]=""+h+l+m+k}h=0;k=e;switch(b.length-g){case 2:h=b[g+1],k=c[(h&15)<<2]||e;case 1:b=b[g],d[f]=""+c[b>>2]+c[(b&3)<<4|h>>4]+k+e}a.hash=d.join("")}return a}
;function tg(a){var b=new ve;(b=b.isAvailable()?a?new Be(b,a):b:null)||(a=new we(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new re(a):null;this.i=document.domain||window.location.hostname}
tg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ud(b))}catch(f){return}else e=escape(b);b=this.i;Ec.set(""+a,e,{ra:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
tg.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tg.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var ug;function vg(){ug||(ug=new tg("yt.innertube"));return ug}
function wg(a,b,c,d){if(d)return null;d=vg().get("nextId",!0)||1;var e=vg().get("requests",!0)||{};e[d]={method:a,request:b,authState:sg(c),requestTime:Math.round(S())};vg().set("nextId",d+1,86400,!0);vg().set("requests",e,86400,!0);return d}
function xg(a){var b=vg().get("requests",!0)||{};delete b[a];vg().set("requests",b,86400,!0)}
function yg(a){var b=vg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=sg(rg(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),kg(a,d.method,e,{}));delete b[c]}}vg().set("requests",b,86400,!0)}}
;var zg=function(){var a;return function(){a||(a=new tg("ytidb"));return a}}();
function Ag(){var a;return null===(a=zg())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Bg(a){this.h=void 0===a?!1:a;(a=Ag())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=zg())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=zg())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
Bg.prototype.isSupported=function(){return this.h};var Cg=[],Dg=!1;function Eg(a){Dg||(Cg.push({type:"ERROR",payload:a}),10<Cg.length&&Cg.shift())}
function Fg(a,b){Dg||(Cg.push({type:"EVENT",eventType:a,payload:b}),10<Cg.length&&Cg.shift())}
;function Gg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(fa(c))}
v(Gg,Error);function Hg(){try{return Ig(),!0}catch(a){return!1}}
function Ig(){if(void 0!==Q("DATASYNC_ID",void 0))return Q("DATASYNC_ID",void 0);throw new Gg("Datasync ID not set","unknown");}
;function Jg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Kg(a){return a.substr(0,a.indexOf(":"))||a}
;var T={},Lg=(T.AUTH_INVALID="No user identifier specified.",T.EXPLICIT_ABORT="Transaction was explicitly aborted.",T.IDB_NOT_SUPPORTED="IndexedDB is not supported.",T.MISSING_INDEX="Index not created.",T.MISSING_OBJECT_STORE="Object store not created.",T.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",T.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",T.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",T.QUOTA_MAYBE_EXCEEDED=
"The current transaction may have failed because of exceeding quota limitations.",T.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",T.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",T),Mg={},Ng=(Mg.AUTH_INVALID="ERROR",Mg.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Mg.EXPLICIT_ABORT="IGNORED",Mg.IDB_NOT_SUPPORTED="ERROR",Mg.MISSING_INDEX="WARNING",Mg.MISSING_OBJECT_STORE="ERROR",Mg.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Mg.QUOTA_EXCEEDED=
"WARNING",Mg.QUOTA_MAYBE_EXCEEDED="WARNING",Mg.UNKNOWN_ABORT="WARNING",Mg.INCOMPATIBLE_DB_VERSION="WARNING",Mg),Og={},Pg=(Og.AUTH_INVALID=!1,Og.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Og.EXPLICIT_ABORT=!1,Og.IDB_NOT_SUPPORTED=!1,Og.MISSING_INDEX=!1,Og.MISSING_OBJECT_STORE=!1,Og.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Og.QUOTA_EXCEEDED=!1,Og.QUOTA_MAYBE_EXCEEDED=!0,Og.UNKNOWN_ABORT=!0,Og.INCOMPATIBLE_DB_VERSION=!1,Og);
function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Lg[a]:c;d=void 0===d?Ng[a]:d;e=void 0===e?Pg[a]:e;Gg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}
v(U,Gg);function Qg(a){U.call(this,"MISSING_OBJECT_STORE",{mb:a},Lg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Qg.prototype)}
v(Qg,U);function Rg(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Rg.prototype)}
v(Rg,Error);var Sg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Tg(a,b,c,d){b=Kg(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(dc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if(e instanceof Rg)return new U("MISSING_INDEX",{dbName:b,dbVersion:d,objectStore:e.objectStore,index:e.index});if("InvalidStateError"===e.name&&Sg.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
{objectStoreNames:c,
dbName:b});if("AbortError"===e.name)return new U("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},e.message);e.args=[{name:"IdbError",Jb:e.name,dbName:b,objectStoreNames:c}];e.level="WARNING";return e}
function Ug(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function Vg(a){if(!a)throw Error();throw a;}
function Wg(a){return a}
function Xg(a){this.h=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new Xg(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)Yg(V.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new Xg(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new Xg(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Wg,e=null!==b&&void 0!==b?b:Vg;return new V(new Xg(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Zg(c,c,d,f,g)}),c.onRejected.push(function(){$g(c,c,e,f,g)})):"FULFILLED"===c.state.status?Zg(c,c,d,f,g):"REJECTED"===c.state.status&&$g(c,c,e,f,g)}))};
function Yg(a,b){a.then(void 0,b)}
function Zg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?ah(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $g(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?ah(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ah(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?ah(a,b,f,d,e):d(f)},function(f){e(f)})}
;function bh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ch(a){return new Promise(function(b,c){bh(a,b,c)})}
function W(a){return new V(new Xg(function(b,c){bh(a,b,c)}))}
;function dh(a,b){return new V(new Xg(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function eh(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
n=eh.prototype;n.add=function(a,b,c){return X(this,[a],{mode:"readwrite",F:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return X(this,[a],{mode:"readwrite",F:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return X(this,[a],{mode:"readonly",F:!0},function(c){return c.objectStore(a).count(b)})};
function fh(a,b,c){a=a.h.createObjectStore(b,c);return new gh(a)}
n.delete=function(a,b){return X(this,[a],{mode:"readwrite",F:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return X(this,[a],{mode:"readonly",F:!0},function(c){return c.objectStore(a).get(b)})};
function hh(a,b){return X(a,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(c){c=c.objectStore("LogsRequestsStore");return W(c.h.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function X(a,b,c,d){return K(a,function f(){var g=this,h,k,l,m,p,q,r,B,x,y,N,J;return z(f,function(E){switch(E.h){case 1:var M={mode:"readonly",F:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);h=M;g.transactionCount++;k=h.F?3:1;l=0;case 2:if(m){E.m(3);break}l++;p=Math.round(S());ra(E,4);q=g.h.transaction(b,h.mode);M=new ih(q);M=jh(M,d);return w(E,M,6);case 6:return r=E.i,B=Math.round(S()),kh(g,p,B,l,void 0,b.join(),h),E.return(r);case 4:x=sa(E);y=Math.round(S());
N=Tg(x,g.h.name,b.join(),g.h.version);if((J=N instanceof U&&!N.h)||l>=k)kh(g,p,y,l,N,b.join(),h),m=N;E.m(2);break;case 3:return E.return(Promise.reject(m))}})})}
function kh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Fg("QUOTA_EXCEEDED",{dbName:Kg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Fg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),lh(a,!1,d,f,b,g.tag),Eg(e)):lh(a,!0,d,f,b,g.tag)}
function lh(a,b,c,d,e,f){Fg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function gh(a){this.h=a}
n=gh.prototype;n.add=function(a,b){return W(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return W(this.h.clear()).then(function(){})};
n.count=function(a){return W(this.h.count(a))};
function mh(a,b){return nh(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?mh(this,a):W(this.h.delete(a))};
n.get=function(a){return W(this.h.get(a))};
n.index=function(a){try{return new oh(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Rg(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function nh(a,b,c){a=a.h.openCursor(b.query,b.direction);return ph(a).then(function(d){return dh(d,c)})}
function ih(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function jh(a,b){var c=new Promise(function(d,e){try{Yg(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
ih.prototype.abort=function(){this.h.abort();this.i=!0;throw new U("EXPLICIT_ABORT");};
ih.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new gh(a),this.j.set(a,b));return b};
function oh(a){this.h=a}
n=oh.prototype;n.count=function(a){return W(this.h.count(a))};
n.delete=function(a){return qh(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return W(this.h.get(a))};
n.getKey=function(a){return W(this.h.getKey(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function qh(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ph(a).then(function(d){return dh(d,c)})}
function rh(a,b){this.request=a;this.cursor=b}
function ph(a){return W(a).then(function(b){return b?new rh(a,b):null})}
n=rh.prototype;n.advance=function(a){this.cursor.advance(a);return ph(this.request)};
n.continue=function(a){this.cursor.continue(a);return ph(this.request)};
n.delete=function(){return W(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return W(this.cursor.update(a))};function sh(a,b,c){return new Promise(function(d,e){function f(){q||(q=new eh(g.result,{closed:p}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.pb,m=c.upgrade,p=c.closed,q;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&Fg("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:Kg(a)});var B=f(),x=new ih(g.transaction);
m&&m(B,function(y){return r.oldVersion<y&&r.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){Fg("IDB_UNEXPECTEDLY_CLOSED",{dbName:Kg(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function th(a,b,c){c=void 0===c?{}:c;return sh(a,b,c)}
function uh(a,b){b=void 0===b?{}:b;return K(this,function d(){var e,f,g;return z(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,ch(e),0)})})}
;function vh(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
vh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return th(a,b,c)};
vh.prototype.delete=function(a){a=void 0===a?{}:a;return uh(this.name,a)};
function wh(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
vh.prototype.open=function(){function a(){return K(c,function g(){var h,k,l=this,m,p,q,r,B;return z(g,function(x){switch(x.h){case 1:return k=null!==(h=Error().stack)&&void 0!==h?h:"",ra(x,2),w(x,l.i(l.name,l.options.version,e),4);case 4:m=x.i;a:{var y=l.options;for(var N=u(Object.keys(y.ka)),J=N.next();!J.done;J=N.next()){J=J.value;var E=y.ka[J],M=void 0===E.ob?Number.MAX_VALUE:E.ob;if(m.h.version>=E.pa&&!(m.h.version>=M)&&!m.h.objectStoreNames.contains(J)){y=J;break a}}y=void 0}p=y;if(void 0===
p){x.m(5);break}if(l.j){x.m(6);break}l.j=!0;return w(x,l.delete(),7);case 7:return Eg(new U("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:l.name,mb:p})),x.return(a());case 6:throw new Qg(p);case 5:return x.return(m);case 2:q=sa(x);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){x.m(8);break}return w(x,
l.i(l.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),9);case 9:r=x.i;B=r.h.version;if(void 0!==l.options.version&&B>l.options.version+1)throw r.close(),l.l=!1,wh(l,B);return x.return(r);case 8:throw b(),q instanceof Error&&(q.stack=q.stack+"\n"+k.substring(k.indexOf("\n")+1)),q;}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw wh(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,pb:b,upgrade:this.options.upgrade};return this.h=d=a()};var xh=new vh("YtIdbMeta",{ka:{databases:{pa:1}},upgrade:function(a,b){b(1)&&fh(a,"databases",{keyPath:"actualName"})}});
function yh(a){return K(this,function c(){var d;return z(c,function(e){if(1==e.h)return w(e,xh.open(),2);d=e.i;return e.return(X(d,["databases"],{F:!0,mode:"readwrite"},function(f){var g=f.objectStore("databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function zh(a){return K(this,function c(){var d;return z(c,function(e){if(1==e.h)return a?w(e,xh.open(),2):e.return();d=e.i;return e.return(d.delete("databases",a))})})}
function Ah(a){return K(this,function c(){var d,e;return z(c,function(f){return 1==f.h?(d=[],w(f,xh.open(),2)):3!=f.h?(e=f.i,w(f,X(e,["databases"],{F:!0,mode:"readonly"},function(g){d.length=0;return nh(g.objectStore("databases"),{},function(h){a(h.cursor.value)&&d.push(h.cursor.value);return h.continue()})}),3)):f.return(d)})})}
function Bh(){return Ah(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var Ch,Dh=new function(){}(new function(){});
function Eh(){return K(this,function b(){var c,d,e;return z(b,function(f){switch(f.h){case 1:c=Ag();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new Bg(!0));var g;if(g=Ff)g=/WebKit\/([0-9]+)/.exec(wb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(wb),g=!(g&&602<=parseInt(g[1],10)));if(g||Qb)return f.return(new Bg(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new Bg(!1))}catch(h){return f.return(new Bg(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new Bg(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,yh(e),4);case 4:return w(f,zh("yt-idb-test-do-not-use"),5);case 5:return f.return(new Bg(!0));case 2:return sa(f),f.return(new Bg(!1))}})})}
function Fh(){if(void 0!==Ch)return Ch;Dg=!0;return Ch=Eh().then(function(a){Dg=!1;return a.isSupported()})}
function Gh(){return Fh().then(function(a){return a?Dh:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Hh(a){if(!Hg())throw a=new U("AUTH_INVALID",{dbName:a}),Eg(a),a;var b=Ig();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ih(a,b,c,d){var e;return K(this,function g(){var h,k,l,m,p;return z(g,function(q){switch(q.h){case 1:return h=null!==(e=Error().stack)&&void 0!==e?e:"",w(q,Gh(),2);case 2:k=q.i;if(!k)throw l=Ug("openDbImpl",a,b),l.stack=l.stack+"\n"+h.substring(h.indexOf("\n")+1),Eg(l),l;Jg(a);m=c?{actualName:a,publicName:a,userIdentifier:void 0}:Hh(a);ra(q,3);return w(q,yh(m),5);case 5:return w(q,th(m.actualName,b,d),6);case 6:return q.return(q.i);case 3:return p=sa(q),ra(q,7),w(q,zh(m.actualName),9);case 9:q.h=
8;q.s=0;break;case 7:sa(q);case 8:throw p;}})})}
function Jh(a,b,c){c=void 0===c?{}:c;return Ih(a,b,!1,c)}
function Kh(a,b,c){c=void 0===c?{}:c;return Ih(a,b,!0,c)}
function Lh(a,b){b=void 0===b?{}:b;return K(this,function d(){var e,f;return z(d,function(g){if(1==g.h)return w(g,Gh(),2);if(3!=g.h){e=g.i;if(!e)return g.return();Jg(a);f=Hh(a);return w(g,uh(f.actualName,b),3)}return w(g,zh(f.actualName),0)})})}
function Mh(a,b){var c=this;a=a.map(function(d){return K(c,function f(){return z(f,function(g){return 1==g.h?w(g,uh(d.actualName,b),2):w(g,zh(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Nh(){var a=void 0===a?{}:a;return K(this,function c(){var d,e;return z(c,function(f){if(1==f.h)return w(f,Gh(),2);if(3!=f.h){d=f.i;if(!d)return f.return();Jg("LogsDatabaseV2");return w(f,Bh(),3)}e=f.i;return w(f,Mh(e,a),0)})})}
function Oh(a,b){b=void 0===b?{}:b;return K(this,function d(){var e;return z(d,function(f){if(1==f.h)return w(f,Gh(),2);if(3!=f.h){e=f.i;if(!e)return f.return();Jg(a);return w(f,uh(a,b),3)}return w(f,zh(a),0)})})}
;function Ph(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.V=function(){};
this.now=Date.now;this.Sa=null!==(b=a.Sa)&&void 0!==b?b:100;this.Qa=null!==(c=a.Qa)&&void 0!==c?c:1;this.Oa=null!==(d=a.Oa)&&void 0!==d?d:2592E6;this.Na=null!==(e=a.Na)&&void 0!==e?e:12E4;this.Pa=null!==(f=a.Pa)&&void 0!==f?f:5E3;this.databaseToken=null!==(g=a.databaseToken)&&void 0!==g?g:void 0;this.ia=!!a.ia;this.ga=null!==(h=a.ga)&&void 0!==h?h:.1;this.ma=null!==(k=a.ma)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.V&&(this.V=a.V);this.v=a.v;this.Ia=a.Ia;this.A=a.A;this.C=
a.C;this.N=a.N;this.va=a.va;this.ta=a.ta;this.databaseToken&&(!this.v||this.v("networkless_logging"))&&Qh(this)}
function Qh(a){K(a,function c(){var d=this;return z(c,function(e){if(!d.databaseToken)return e.return();Rh(d);d.C.D()&&d.ca();d.C.W(d.va,d.ca.bind(d));d.C.W(d.ta,d.za.bind(d));d.h=!0;return d.ia&&Math.random()<=d.ga?w(e,d.A.ab(d.databaseToken),0):e.m(0)})})}
n=Ph.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A.set(d,this.databaseToken).then(function(e){d.id=e;c.C.D()&&Sh(c,d)}).catch(function(e){Sh(c,d);
Th(c,e)})}else this.N(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.v&&this.v("nwl_skip_retry")&&(e.skipRetry=c);if(this.C.D()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return K(d,function l(){var m=this,p;return z(l,function(q){if(1==q.h)return p=m,w(q,m.A.set(e,m.databaseToken).catch(function(r){Th(p,r)}),2);
f(g,h);q.h=0})})}}this.N(a,b,e.skipRetry)}else this.A.set(e,this.databaseToken).catch(function(g){d.N(a,b,e.skipRetry);
Th(d,g)})}else this.N(a,b,this.v&&this.v("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.A.U(d.id,c.databaseToken):e=!0;c.C.R&&c.v&&c.v("vss_network_hint")&&c.C.R(!0);f(g,h)};
this.N(d.url,d.options);this.A.set(d,this.databaseToken).then(function(g){d.id=g;e&&c.A.U(d.id,c.databaseToken)}).catch(function(g){Th(c,g)})}else this.N(a,b)};
n.ca=function(){var a=this;if(!this.databaseToken)throw Ug("throttleSend");this.i||(this.i=kf(function(){return K(a,function c(){var d=this,e;return z(c,function(f){if(1==f.h)return w(f,d.A.Fa("NEW",d.databaseToken),2);if(3!=f.h)return e=f.i,e?w(f,Sh(d,e),3):(d.za(),f.return());d.i&&(d.i=0,d.ca());f.h=0})})},this.Sa))};
n.za=function(){nf(this.i);this.i=0};
function Sh(a,b){return K(a,function d(){var e=this,f,g;return z(d,function(h){switch(h.h){case 1:if(!e.databaseToken)throw f=Ug("immediateSend"),f;if(void 0===b.id){h.m(2);break}return w(h,e.A.lb(b.id,e.databaseToken),3);case 3:(g=h.i)?b=g:e.V(Error("The request cannot be found in the database."));case 2:if(Uh(e,b,e.Oa)){h.m(4);break}e.V(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){h.m(5);break}return w(h,e.A.U(b.id,e.databaseToken),5);case 5:return h.return();
case 4:b.skipRetry||(b=Vh(e,b));if(!b){h.m(0);break}if(!b.skipRetry||void 0===b.id){h.m(8);break}return w(h,e.A.U(b.id,e.databaseToken),8);case 8:e.N(b.url,b.options,!!b.skipRetry),h.h=0}})})}
function Vh(a,b){if(!a.databaseToken)throw Ug("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){return K(a,function h(){var k=this,l,m;return z(h,function(p){switch(p.h){case 1:l=k;m=Wh(f);if(!(k.v&&k.v("nwl_consider_error_code")&&m||k.v&&!k.v("nwl_consider_error_code")&&k.potentialEsfErrorCounter<=k.ma)){p.m(2);break}if(!k.C.J){p.m(3);break}return w(p,k.C.J(),3);case 3:if(k.C.D()){p.m(2);break}c(e,f);if(!k.v||!k.v("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){p.m(6);break}return w(p,k.A.wa(b.id,k.databaseToken,!1),6);case 6:return p.return();
case 2:if(k.v&&k.v("nwl_consider_error_code")&&!m&&k.potentialEsfErrorCounter>k.ma)return p.return();k.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){p.m(8);break}return b.sendCount<k.Qa?w(p,k.A.wa(b.id,k.databaseToken),12):w(p,k.A.U(b.id,k.databaseToken),8);case 12:kf(function(){l.C.D()&&l.ca()},k.Pa);
case 8:c(e,f),p.h=0}})})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return K(a,function h(){var k=this;return z(h,function(l){if(1==l.h)return void 0===(null===b||void 0===b?void 0:b.id)?l.m(2):w(l,k.A.U(b.id,k.databaseToken),2);k.C.R&&k.v&&k.v("vss_network_hint")&&k.C.R(!0);d(e,f);l.h=0})})};
return b}
function Uh(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Rh(a){if(!a.databaseToken)throw Ug("retryQueuedRequests");a.A.Fa("QUEUED",a.databaseToken).then(function(b){b&&!Uh(a,b,a.Na)?kf(function(){return K(a,function d(){var e=this;return z(d,function(f){if(1==f.h)return void 0===b.id?f.m(2):w(f,e.A.wa(b.id,e.databaseToken),2);Rh(e);f.h=0})})}):a.C.D()&&a.ca()})}
function Th(a,b){a.Ta&&!a.C.D()?a.Ta(b):a.handleError(b)}
function Wh(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Xh=C("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.da;P.prototype.publish=P.prototype.X;P.prototype.clear=P.prototype.clear;F("ytPubsub2Pubsub2Instance",Xh);F("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function Yh(a,b){vh.call(this,a,b);this.options=b;Jg(a)}
v(Yh,vh);function Zh(a,b){var c;return function(){c||(c=new Yh(a,b));return c}}
Yh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.xa?Kh:Jh)(a,b,Object.assign({},c))};
Yh.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.xa?Oh:Lh)(this.name,a)};
function $h(a,b){return Zh(a,b)}
;var ai;
function bi(){if(ai)return ai();var a={};ai=$h("LogsDatabaseV2",{ka:(a.LogsRequestsStore={pa:2},a),xa:!1,upgrade:function(b,c,d){c(2)&&fh(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return ai()}
;function ci(a){return K(this,function c(){var d,e,f,g;return z(c,function(h){if(1==h.h)return d={startTime:S(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(h,bi().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:Q("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,hh(e,f),3);g=h.i;d.qb=S();di(d);return h.return(g)})})}
function ei(a){return K(this,function c(){var d,e,f,g,h,k,l;return z(c,function(m){if(1==m.h)return d={startTime:S(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,bi().open(),2);if(3!=m.h)return e=m.i,f=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,S()],k=IDBKeyRange.bound(g,h),l=void 0,w(m,X(e,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(p){return qh(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(q){q.cursor.value&&(l=q.cursor.value,
"NEW"===a&&(l.status="QUEUED",q.update(l)))})}),3);
d.qb=S();di(d);return m.return(l)})})}
function fi(a){return K(this,function c(){var d;return z(c,function(e){if(1==e.h)return w(e,bi().open(),2);d=e.i;return e.return(X(d,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function gi(a,b,c){c=void 0===c?!0:c;return K(this,function e(){var f;return z(e,function(g){if(1==g.h)return w(g,bi().open(),2);f=g.i;return g.return(X(f,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(h){var k=h.objectStore("LogsRequestsStore");return k.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),W(k.h.put(l,void 0)).then(function(){return l})):V.resolve(void 0)})}))})})}
function hi(a){return K(this,function c(){var d;return z(c,function(e){if(1==e.h)return w(e,bi().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function ii(){return K(this,function b(){var c,d;return z(b,function(e){if(1==e.h)return w(e,bi().open(),2);c=e.i;d=S()-2592E6;return w(e,X(c,["LogsRequestsStore"],{mode:"readwrite",F:!0},function(f){return nh(f.objectStore("LogsRequestsStore"),{},function(g){if(g.cursor.value.timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function ji(){K(this,function b(){return z(b,function(c){return w(c,Nh(),0)})})}
function di(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var ki={},li=$h("ServiceWorkerLogsDatabase",{ka:(ki.SWHealthLog={pa:1},ki),xa:!0,upgrade:function(a,b){b(1)&&fh(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function mi(){K(this,function b(){var c,d;return z(b,function(e){if(1==e.h)return R("web_clean_sw_logs_store")?w(e,li().open(),3):e.m(0);c=e.i;d=S()-2592E6;return w(e,X(c,["SWHealthLog"],{mode:"readwrite",F:!0},function(f){return nh(f.objectStore("SWHealthLog"),{},function(g){if(g.cursor.value.timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function ni(){return K(this,function b(){var c;return z(b,function(d){if(1==d.h)return w(d,li().open(),2);c=d.i;return w(d,c.clear("SWHealthLog"),0)})})}
;var oi;function pi(){oi||(oi=new tg("yt.offline"));return oi}
function qi(a){if(R("offline_error_handling")){var b=pi().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);pi().set("errors",b,2592E3,!0)}}
;var ri=ff("network_polling_interval",3E4);function Y(){O.call(this);this.G=0;this.T=this.l=!1;this.i=this.qa();si(this);ti(this)}
v(Y,O);function ui(){if(!Y.h){var a=C("yt.networkStatusManager.instance")||new Y;F("yt.networkStatusManager.instance",a);Y.h=a}return Y.h}
n=Y.prototype;n.D=function(){return this.i};
n.R=function(a,b){a!==this.i&&((void 0===b?0:b)?this.J():this.i=a)};
n.nb=function(a){this.l=!0;if(void 0===a?0:a)this.G||vi(this)};
n.qa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.cb=function(){this.T=!0};
n.W=function(a,b){return O.prototype.W.call(this,a,b)};
function ti(a){window.addEventListener("online",function(){return K(a,function c(){var d=this;return z(c,function(e){if(1==e.h)return w(e,d.J(),2);if(d.T&&R("offline_error_handling")){var f=pi().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new Gg(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Ke(h)}pi().set("errors",{},2592E3,!0)}}e.h=0})})})}
function si(a){window.addEventListener("offline",function(){return K(a,function c(){var d=this;return z(c,function(e){return w(e,d.J(),0)})})})}
function vi(a){a.G=hf(function(){return K(a,function c(){var d=this;return z(c,function(e){if(1==e.h)return d.i?d.qa()||!d.l?e.m(3):w(e,d.J(),3):w(e,d.J(),3);vi(d);e.h=0})})},ri)}
n.J=function(a){var b=this;return this.s?this.s:this.s=new Promise(function(c){return K(b,function e(){var f,g,h,k=this;return z(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.B=kf(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.s=void 0;k.B&&nf(k.B);h!==k.i&&(k.i=h,k.i&&k.l?Sd(k,"ytnetworkstatus-online"):k.l&&Sd(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.m(3)}})})})};
Y.prototype.sendNetworkCheckRequest=Y.prototype.J;Y.prototype.listen=Y.prototype.W;Y.prototype.enableErrorFlushing=Y.prototype.cb;Y.prototype.getWindowStatus=Y.prototype.qa;Y.prototype.monitorNetworkStatusChange=Y.prototype.nb;Y.prototype.networkStatusHint=Y.prototype.R;Y.prototype.isNetworkAvailable=Y.prototype.D;Y.getInstance=ui;function wi(a){a=void 0===a?{}:a;O.call(this);var b=this;this.l=this.B=0;this.i=ui();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ca);a.Ja&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.i))a.na?(this.na=a.na,c("ytnetworkstatus-online",function(){xi(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){xi(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Sd(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Sd(b,"publicytnetworkstatus-offline")}))}
v(wi,O);wi.prototype.D=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
wi.prototype.R=function(a,b){b=void 0===b?!1:b;var c=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);c&&c(a,b)};
wi.prototype.J=function(a){return K(this,function c(){var d=this,e;return z(c,function(f){return(e=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function xi(a,b){a.na?a.l?(nf(a.B),a.B=kf(function(){a.s!==b&&(Sd(a,b),a.s=b,a.l=S())},a.na-(S()-a.l))):(Sd(a,b),a.s=b,a.l=S()):Sd(a,b)}
;var yi=0,zi=0,Ai,Bi=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,databaseToken:void 0,potentialEsfErrorCounter:zi,isIdbSupported:!1};F("ytNetworklessLoggingInitializationOptions",Bi);function Ci(a,b){function c(d){var e=Di().D();if(!Ei()||!d||e&&R("vss_networkless_bypass_write"))Fi(a,b);else{var f={url:a,options:b,timestamp:S(),status:"NEW",sendCount:0};ci(f,d).then(function(g){f.id=g;Di().D()&&Gi(f)}).catch(function(g){Gi(f);
Di().D()?Ke(g):qi(g)})}}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?Gh().then(function(d){c(d)}):c(Hi())}
function Ii(a,b){function c(d){if(Ei()&&d){var e={url:a,options:b,timestamp:S(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?hi(e.id,d):f=!0;R("vss_network_hint")&&Di().R(!0);g(h,k)};
Fi(e.url,e.options);ci(e,d).then(function(h){e.id=h;f&&hi(e.id,d)}).catch(function(h){Di().D()?Ke(h):qi(h)})}else Fi(a,b)}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?Gh().then(function(d){c(d)}):c(Hi())}
function Ji(){var a=this,b=Hi();if(!b)throw Ug("throttleSend");yi||(yi=kf(function(){return K(a,function d(){var e;return z(d,function(f){if(1==f.h)return w(f,ei("NEW",b),2);if(3!=f.h)return e=f.i,e?w(f,Gi(e),3):(nf(yi),yi=0,f.return());yi&&(yi=0,Ji());f.h=0})})},100))}
function Gi(a){return K(this,function c(){var d,e,f;return z(c,function(g){switch(g.h){case 1:d=Hi();if(!d)throw e=Ug("immediateSend"),e;if(void 0===a.id){g.m(2);break}return w(g,fi(a.id,d),3);case 3:(f=g.i)?a=f:Le(Error("The request cannot be found in the database."));case 2:var h=a.timestamp;if(!(2592E6<=S()-h)){g.m(4);break}Le(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.m(5);break}return w(g,hi(a.id,d),5);case 5:return g.return();case 4:a.skipRetry||
(a=Ki(a));h=a;var k,l;if(null===(l=null===(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(S());a=h;if(!a){g.m(0);break}if(!a.skipRetry||void 0===a.id){g.m(8);break}return w(g,hi(a.id,d),8);case 8:Fi(a.url,a.options,!!a.skipRetry),g.h=0}})})}
function Ki(a){var b=this,c=Hi();if(!c)throw Ug("updateRequestHandlers");var d=a.options.onError?a.options.onError:function(){};
a.options.onError=function(f,g){return K(b,function k(){var l;return z(k,function(m){switch(m.h){case 1:l=Wh(g);if(!(R("nwl_consider_error_code")&&l||!R("nwl_consider_error_code")&&Li()<=ff("potential_esf_error_limit",10))){m.m(2);break}return w(m,Di().J(),3);case 3:if(Di().D()){m.m(2);break}d(f,g);if(!R("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){m.m(5);break}return w(m,gi(a.id,c,!1),5);case 5:return m.return();case 2:if(R("nwl_consider_error_code")&&!l&&Li()>ff("potential_esf_error_limit",
10))return m.return();C("ytNetworklessLoggingInitializationOptions")&&Bi.potentialEsfErrorCounter++;zi++;if(void 0===(null===a||void 0===a?void 0:a.id)){m.m(7);break}return 1>a.sendCount?w(m,gi(a.id,c),11):w(m,hi(a.id,c),7);case 11:kf(function(){Di().D()&&Ji()},5E3);
case 7:d(f,g),m.h=0}})})};
var e=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(f,g){return K(b,function k(){return z(k,function(l){if(1==l.h)return void 0===(null===a||void 0===a?void 0:a.id)?l.m(2):w(l,hi(a.id,c),2);R("vss_network_hint")&&Di().R(!0);e(f,g);l.h=0})})};
return a}
function Di(){Ai||(Ai=new wi({Ja:!0,Ca:!0}));return Ai}
function Fi(a,b,c){if(R("networkless_with_beacon")){var d=["method","postBody"];if(Object.keys(b).length>d.length)c=!0;else{c=0;d=u(d);for(var e=d.next();!e.done;e=d.next())b.hasOwnProperty(e.value)&&c++;c=Object.keys(b).length!==c}c?xf(a,b):Mf(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?Jf(a):xf(a,b)}
function Ei(){return C("ytNetworklessLoggingInitializationOptions")?Bi.isNwlInitialized:!1}
function Hi(){return C("ytNetworklessLoggingInitializationOptions")?Bi.databaseToken:void 0}
function Li(){return C("ytNetworklessLoggingInitializationOptions")?Bi.potentialEsfErrorCounter:zi}
;function Mi(){Ph.call(this,{A:{ab:ii,U:hi,Fa:ei,lb:fi,wa:gi,set:ci},C:new wi({Ja:!0,Ca:!0}),handleError:Ke,V:Le,N:Ni,now:S,Ta:qi,Ia:mf(),va:"publicytnetworkstatus-online",ta:"publicytnetworkstatus-offline",ia:!0,ga:.1,ma:ff("potential_esf_error_limit",10),v:R});this.ia&&Math.random()<=this.ga&&this.databaseToken&&mi();R("networkless_immediately_drop_sw_health_store")&&Oi(this);R("networkless_immediately_drop_all_requests")&&ji();Oh("LogsDatabaseV2")}
v(Mi,Ph);function Pi(){var a=C("yt.networklessRequestController.instance");a||(a=new Mi,F("yt.networklessRequestController.instance",a),R("networkless_logging")&&Gh().then(function(b){a.databaseToken=b;Qh(a)}));
return a}
Mi.prototype.writeThenSend=function(a,b){b||(b={});Hg()||(this.h=!1);Ph.prototype.writeThenSend.call(this,a,b)};
Mi.prototype.sendThenWrite=function(a,b,c){b||(b={});Hg()||(this.h=!1);Ph.prototype.sendThenWrite.call(this,a,b,c)};
Mi.prototype.sendAndWrite=function(a,b){b||(b={});Hg()||(this.h=!1);Ph.prototype.sendAndWrite.call(this,a,b)};
function Oi(a){K(a,function c(){var d=this,e,f;return z(c,function(g){e=d;if(!d.databaseToken)throw f=Ug("clearSWHealthLogsDb"),f;return g.return(ni().catch(function(h){e.handleError(h)}))})})}
function Ni(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(S());if(R("networkless_with_beacon")){c=b;var e=["method","postBody"];if(Object.keys(c).length>e.length)c=!0;else{d=0;e=u(e);for(var f=e.next();!f.done;f=e.next())c.hasOwnProperty(f.value)&&d++;c=Object.keys(c).length!==d}c?xf(a,b):Mf(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?Jf(a):xf(a,b)}
;function Qi(a){var b=this;this.config_=null;a?this.config_=a:qg()&&(this.config_=hg());hf(function(){yg(b)},5E3)}
Qi.prototype.isReady=function(){!this.config_&&qg()&&(this.config_=hg());return!!this.config_};
function kg(a,b,c,d){function e(q){q=void 0===q?!1:q;var r;if(d.retry&&"www.youtube-nocookie.com"!=h&&(q||R("skip_ls_gel_retry")||(r=wg(b,c,l,k)),r)){var B=g.onSuccess,x=g.onFetchSuccess;g.onSuccess=function(y,N){xg(r);B(y,N)};
c.onFetchSuccess=function(y,N){xg(r);x(y,N)}}try{q&&d.retry&&!d.La.bypassNetworkless?(g.method="POST",d.La.writeThenSend?R("use_new_nwl")?Pi().writeThenSend(p,g):Ci(p,g):R("use_new_nwl")?Pi().sendAndWrite(p,g):Ii(p,g)):(g.method="POST",g.postParams||(g.postParams={}),xf(p,g))}catch(y){if("InvalidAccessError"==y.name)r&&(xg(r),r=0),Le(Error("An extension is blocking network request."));
else throw y;}r&&hf(function(){yg(a)},5E3)}
!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Le(new Gg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Gg("innertube xhrclient not ready",b,c,d);Ke(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(q,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(q){if(d.onSuccess)d.onSuccess(q)},
onError:function(q,r){if(d.onError)d.onError(r)},
onFetchError:function(q){if(d.onError)d.onError(q)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.ib)&&(h=f);var k=a.config_.kb||!1,l=rg(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var m={alt:"json"};a.config_.jb&&g.headers.Authorization||(m.key=a.config_.innertubeApiKey);var p=cf(""+h+f,m||{},!0);R("use_new_nwl")||Ei()?Fh().then(function(q){e(q)}):e(!1)}
;function Ri(a,b){var c=void 0===c?{}:c;var d=Qi;Q("ytLoggingEventsDefaultDisabled",!1)&&Qi==Qi&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||S());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&c.Ra&&(a=e.context,b=c.Ra,lg[b]=b in lg?lg[b]+1:0,a.sequence={index:lg[b],groupKey:b},c.Gb&&delete lg[c.Ra]);(c.Lb?eg:ag)({endpoint:"log_event",
payload:e,L:c.L,ha:c.ha},d)}
;var Si=[{sa:function(a){return"Cannot read property '"+a.key+"'"},
la:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{sa:function(a){return"Cannot call '"+a.key+"'"},
la:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{sa:function(a){return a.key+" is not defined"},
la:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ui={P:[],O:[{Ya:Ti,weight:500}]};function Ti(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vi(){this.O=[];this.P=[]}
var Wi;function Xi(){if(!Wi){var a=Wi=new Vi;a.P.length=0;a.O.length=0;Ui.P&&a.P.push.apply(a.P,Ui.P);Ui.O&&a.O.push.apply(a.O,Ui.O)}return Wi}
;var Yi=new P;function Zi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=$i(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=$i(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=$i(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function $i(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function aj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=bj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Zi(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?bj(e+".ve",f,g,h):0;d+=g;d+=bj(e,a[e],b,c);if(500<d)break}}else c[b]=cj(a),d+=c[b].length;else c[b]=cj(a),d+=c[b].length;return d}
function bj(a,b,c,d){c+="."+a;a=cj(b);d[c]=a;return c.length+a.length}
function cj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var dj=new Set,ej=0,fj=0,gj=0,hj=[],ij=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var jj={};function kj(a){return jj[a]||(jj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var lj={},mj=[],le=new P,nj={};function oj(){for(var a=u(mj),b=a.next();!b.done;b=a.next())b=b.value,b()}
function pj(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[kj(b)]:a.getAttribute("data-"+b):null;return c}
function qj(a,b){for(var c=1;c<arguments.length;++c);le.X.apply(le,arguments)}
;function rj(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function sj(a,b,c){tj||(tj={},Te(window,"message",function(d){a:{if(d.origin===Z(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=tj[e.id])d.u=!0,d.u&&(H(d.s,d.sendMessage,d),d.s.length=0),d.ya(e)}e=void 0}return e}));
tj[c]=b}
var tj=null;function uj(a,b,c){this.o=this.h=this.i=null;this.j=0;this.u=!1;this.s=[];this.l=null;this.G={};if(!a)throw Error("YouTube player element ID required.");this.id=Ha(this);this.B=c;this.setup(a,b)}
n=uj.prototype;n.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
n.getIframe=function(){return this.h};
n.ya=function(a){vj(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);wj(this,a);return this};
function xj(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&wj(a,c)}}
n.destroy=function(){this.h&&this.h.id&&(lj[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);tj&&(tj[this.id]=null);this.i=null;a=this.h;for(var c in Za)Za[c][0]==a&&Re(c);this.o=this.h=null};
n.Ba=function(){return{}};
function yj(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.s.push(b)}
function vj(a,b,c){a.l.j||(c={target:a,data:c},a.l.X(b,c),qj(a.B+"."+b,c))}
function zj(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.i,"title"));(b=Z(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ba();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&H(["debugjs","debugcss"],function(h){var k=Lb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Z(a.i,"host")+("/embed/"+Z(a.i,"videoId"))+"?"+Jb(g);return c}
n.Ma=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Aj(a){sj(a.i,a,a.id);a.j=Ve(a.Ma.bind(a));Te(a.h,"load",function(){window.clearInterval(a.j);a.j=Ve(a.Ma.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Hb(a.src):"https://www.youtube.com"),this.i=new rj(b),c||(b=zj(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ha(this.h)),lj[this.h.id]=this,window.postMessage){this.l=new P;Aj(this);b=Z(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in nj)nj.hasOwnProperty(e)&&
xj(this,e)}};
function wj(a,b){a.G[b]||(a.G[b]=!0,yj(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=Ud(a);var b=[Hb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(y){if(y.name&&"SyntaxError"===y.name){if(!(y.message&&0<y.message.indexOf("target origin ''"))){var d=void 0,e=y;d=void 0===d?{}:d;d.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&
e.level&&(d=e.level);if(R("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=ej)){g=void 0;var k=f,l=cd(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+
": "+f)){var p=m.split("\n");p.shift();m=p.join("\n")}p=l.lineNumber||"Not available";l=l.fileName||"Not available";var q=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(q=aj(e.args[g],"params."+g,k,q),500<=q);g++);else if(e.hasOwnProperty("params")&&e.params){var r=e.params;if("object"===typeof e.params)for(g in r){if(r[g]){var B="params."+g,x=cj(r[g]);k[B]=x;q+=B.length+x.length;if(500<q)break}}else k.params=cj(r)}if(hj.length)for(g=0;g<hj.length&&!(q=aj(hj[g],"params.context."+
g,k,q),500<=q);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:p,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Xi();f=u(e.P);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Ib)){e=h.weight;break a}e=u(e.O);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Ya(g)){e=f.weight;break a}e=1}g.sampleWeight=
e;e=g;g=u(Si);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.la[e.name])for(p=u(f.la[e.name]),h=p.next();!h.done;h=p.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];p=l.groups;l={};for(m=0;m<p.length;m++)l[p[m]]=h[m+1],e.params["params.error."+p[m]]=h[m+1];e.message=f.sa(l);break}e.params||(e.params={});g=Xi();e.params["params.errorServiceSignature"]="msg="+g.P.length+"&cb="+g.O.length;e.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&
(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));gb("sample").constructor!==eb&&(e.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!dj.has(e.message)){"ERROR"===d?(Yi.X("handleError",e),R("record_app_crashed_web")&&0===gj&&1===e.sampleWeight&&(gj++,Ri("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),fj++):"WARNING"===d&&Yi.X("handleWarning",e);if(R("kevlar_gel_error_routing")){g=
d;l=e;b:{f=u(ij);for(h=f.next();!h.done;h=f.next())if(Gf(h.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{h={stackTrace:l.stack};l.fileName&&(h.filename=l.fileName);f=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(h.lineNumber=Number(f[0]),h.columnNumber=Number(f[1])):h.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};
"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};p={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(p.experimentIds=Q("FEXP_EXPERIMENTS"));if(l=l.params)for(m=u(Object.keys(l)),k=m.next();!k.done;k=m.next())k=k.value,p.kvPairs.push({key:"client."+k,value:String(l[k])});l=Q("SERVER_NAME",void 0);m=Q("SERVER_VERSION",void 0);l&&m&&(p.kvPairs.push({key:"server.name",value:l}),p.kvPairs.push({key:"server.version",
value:m}));f={errorMetadata:p,stackTrace:h,logMessage:f}}f&&(Ri("clientError",f),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&cg())}if(!R("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);
f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=Q("SERVER_NAME",void 0);f=Q("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}xf(Q("ECATCHER_REPORT_HOST","")+"/error_204",d)}try{dj.add(e.message)}catch(N){}ej++}}}}}else throw y;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Bj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Cj(a){return 0===a.search("get")||0===a.search("is")}
;function Dj(a,b){uj.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.I={};this.playerInfo={}}
v(Dj,uj);n=Dj.prototype;n.Ba=function(){var a=Z(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.ya=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)a.hasOwnProperty(c)&&(this.I[c]=a[c]);break;case "infoDelivery":Ej(this,a);break;case "initialDelivery":D(a)&&(window.clearInterval(this.j),this.playerInfo={},this.I={},Fj(this,a.apiInterface),Ej(this,a));break;default:vj(this,b,a)}};
function Ej(a,b){if(D(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Fj(a,b){H(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Bj(c)?this[c]=function(){this.playerInfo={};
this.I={};yj(this,c,arguments);return this}:Cj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){yj(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Z(this.i,"host")+("/embed/"+Z(this.i,"videoId")),b=Number(Z(this.i,"width")),c=Number(Z(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);a=ib(a,void 0);return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.I.namespaces?a?this.I[a]?this.I[a].options||[]:[]:this.I.namespaces||[]:[]};
n.getOption=function(a,b){if(this.I.namespaces&&a&&b&&this.I[a])return this.I[a][b]};
function Gj(a){if("iframe"!==a.tagName.toLowerCase()){var b=pj(a,"videoid");b&&(b={videoId:b,width:pj(a,"width"),height:pj(a,"height")},new Dj(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return lj[a]});
F("YT.scan",oj);F("YT.subscribe",function(a,b,c){le.subscribe(a,b,c);nj[a]=!0;for(var d in lj)lj.hasOwnProperty(d)&&xj(lj[d],a)});
F("YT.unsubscribe",function(a,b,c){ke(a,b,c)});
F("YT.Player",Dj);uj.prototype.destroy=uj.prototype.destroy;uj.prototype.setSize=uj.prototype.setSize;uj.prototype.getIframe=uj.prototype.getIframe;uj.prototype.addEventListener=uj.prototype.addEventListener;Dj.prototype.getVideoEmbedCode=Dj.prototype.getVideoEmbedCode;Dj.prototype.getOptions=Dj.prototype.getOptions;Dj.prototype.getOption=Dj.prototype.getOption;
mj.push(function(a){var b=a;b||(b=document);a=Va(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ra(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Va(b);H(Ua(a,b),Gj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||oj();var Hj=A.onYTReady;Hj&&Hj();var Ij=A.onYouTubeIframeAPIReady;Ij&&Ij();var Jj=A.onYouTubePlayerAPIReady;Jj&&Jj();}).call(this);
