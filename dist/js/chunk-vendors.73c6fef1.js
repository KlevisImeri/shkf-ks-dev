(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw m(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),b=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,b),r},w=b.prototype=v.prototype,_="stack"in y(g),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,g),S=!!T&&!(T.writable&&T.configurable),I=_&&!S&&!E;r({global:!0,constructor:!0,forced:m||I},{DOMException:I?b:v});var k=s(g),C=k.prototype;if(C.constructor!==k)for(var A in m||a(C,"constructor",o(1,k)),d)if(c(d,A)){var R=d[A],N=R.s;c(k,N)||a(k,N,o(6,R.c))}},2054:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});n(7658);var r=n(3396);
/*! vue-carousel v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */
const i="undefined"!==typeof window&&"undefined"!==typeof window.document,s=!(!i||!window.document.documentElement)&&"ontouchstart"in window.document.documentElement,o=!!i&&"PointerEvent"in window,a=s?"ontouchstart":"onmousedown",c=s?"ontouchmove":"onmousemove",u=s?"ontouchend":"onmouseup",l=o?"onpointerdown":a,h=o?"onpointermove":c,d=o?"onpointerup":u,f=o?"onpointerenter":"onmouseenter",p=o?"onpointerleave":"onmouseleave",m=e=>"object"===typeof e&&null!==e||"function"===typeof e?e:{template:String(e)};var g=(0,r.aZ)({name:"VueCarousel",props:{autoplay:{type:Boolean,default:!0},controls:{type:[Boolean,String],default:"hover"},data:{type:Array,default:void 0},direction:{type:String,default:"left"},duration:{type:Number,default:600},indicators:{type:[Boolean,String],default:!0},indicatorTrigger:{type:String,default:"click"},indicatorType:{type:String,default:"line"},interval:{type:Number,default:5e3},pauseOnEnter:{type:Boolean,default:!0},slideOnSwipe:{type:Boolean,default:!0},tag:{type:String,default:"div"}},emits:["slide","slid"],data(){return{endX:0,endY:0,index:0,list:[],onVisibilityChange:()=>{},playing:!1,sliding:!1,startX:0,startY:0,timeout:0}},watch:{data(){this.init()}},created(){this.init()},mounted(){document.addEventListener("visibilitychange",this.onVisibilityChange=()=>{this.playing&&("visible"===document.visibilityState?this.cycle():this.pause())}),this.autoplay&&this.play()},beforeUnmount(){document.removeEventListener("visibilitychange",this.onVisibilityChange)},methods:{init(){const{data:e}=this,t=[];if(e&&e.length>0){const n=e.length-1;this.index>n&&(this.index=n),e.forEach(((e,n)=>{const r=n===this.index,i={...e&&void 0!==e.content?e:{content:e},active:r,bottom:!1,left:!1,raw:e,right:!1,sliding:r,toBottom:!1,toLeft:!1,toRight:!1,toTop:!1,top:!1};t.push(i)}))}this.list=t},play(){this.playing||(this.playing=!0,this.cycle())},cycle(){this.playing&&(this.pause(),this.timeout=window.setTimeout((()=>{this.next((()=>{this.cycle()}))}),this.interval))},pause(){window.clearTimeout(this.timeout),this.timeout=0},stop(){this.playing&&(this.pause(),this.playing=!1)},prev(e){this.slideTo(this.index-1,e)},next(e){this.slideTo(this.index+1,e)},slide(e,t=!1,n=(()=>{})){if(document.hidden||this.sliding)return void n();const{list:i}=this,s=0,o=i.length-1;if(e>o?e=s:e<s&&(e=o),e===this.index)return void n();this.sliding=!0,this.$emit("slide",e,this.index);const a=i[this.index],c=i[e];switch(this.direction){case"up":c.bottom=!t,c.top=t;break;case"right":c.left=!t,c.right=t;break;case"down":c.top=!t,c.bottom=t;break;default:c.right=!t,c.left=t}(0,r.Y3)((()=>{switch(this.$el.offsetWidth,this.direction){case"up":a.toTop=!t,a.toBottom=t,c.toTop=!t,c.toBottom=t;break;case"right":a.toRight=!t,a.toLeft=t,c.toRight=!t,c.toLeft=t;break;case"down":a.toBottom=!t,a.toTop=t,c.toBottom=!t,c.toTop=t;break;default:a.toLeft=!t,a.toRight=t,c.toLeft=!t,c.toRight=t}a.sliding=!1,c.sliding=!0,setTimeout((()=>{a.active=!1,a.top=!1,a.right=!1,a.bottom=!1,a.left=!1,a.toTop=!1,a.toRight=!1,a.toBottom=!1,a.toLeft=!1,c.active=!0,c.top=!1,c.right=!1,c.bottom=!1,c.left=!1,c.toTop=!1,c.toRight=!1,c.toBottom=!1,c.toLeft=!1,this.$emit("slid",e,this.index),this.index=e,this.sliding=!1,n()}),this.duration)}))},slideTo(e,t){e!==this.index&&this.slide(e,e<this.index,t)},slideStart(e){const t=e.touches?e.touches[0]:null;this.playing&&this.pauseOnEnter&&this.stop(),this.startX=t?t.pageX:e.pageX,this.startY=t?t.pageY:e.pageY},slideMove(e){const t=e.touches?e.touches[0]:null;e.preventDefault(),this.endX=t?t.pageX:e.pageX,this.endY=t?t.pageY:e.pageY},slideEnd(){const e=this.endX-this.startX,t=this.endY-this.startY;if(this.endX=this.startX,this.endY=this.startY,0===e&&0===t)return;const n=this.$el.offsetWidth/5,r=this.$el.offsetHeight/5,i=t<-r,s=e>n,o=t>r,a=e<-n,c=()=>{!this.playing&&this.pauseOnEnter&&this.play()};let u=!1,l=!1;switch(this.direction){case"up":u=o,l=i;break;case"right":u=a,l=s;break;case"down":u=i,l=o;break;default:u=s,l=a}u?this.prev(c):l?this.next(c):c()}},render(){return(0,r.h)(this.tag,{class:{"vue-carousel":!0,[`vue-carousel--${this.direction}`]:this.direction,"vue-carousel--slidable":this.slideOnSwipe,"vue-carousel--controls":"hover"===this.controls,"vue-carousel--indicators":"hover"===this.indicators},...this.pauseOnEnter?{[f]:this.pause,[p]:this.cycle}:{},...this.slideOnSwipe?{[l]:this.slideStart,[h]:this.slideMove,[d]:this.slideEnd}:{}},0===this.list.length?[]:[(0,r.h)("ul",{class:"vue-carousel__list"},this.list.map(((e,t)=>(0,r.h)("li",{"data-index":t,class:{"vue-carousel__item":!0,"vue-carousel__item--active":e.active,"vue-carousel__item--top":e.top,"vue-carousel__item--right":e.right,"vue-carousel__item--bottom":e.bottom,"vue-carousel__item--left":e.left,"vue-carousel__item--to-top":e.toTop,"vue-carousel__item--to-right":e.toRight,"vue-carousel__item--to-bottom":e.toBottom,"vue-carousel__item--to-left":e.toLeft},style:{"transition-duration":this.duration/1e3+"s"}},[(0,r.h)(m(e.content))])))),this.indicators?(0,r.h)("ol",{class:{"vue-carousel__indicators":!0,[`vue-carousel__indicators--${this.indicatorType}`]:this.indicatorType}},this.list.map(((e,t)=>(0,r.h)("li",{"data-slide-to":t,class:{"vue-carousel__indicator":!0,"vue-carousel__indicator--active":e.sliding},...(()=>{const e={},n=()=>{this.slideTo(t)};return"hover"===this.indicatorTrigger?(e[f]=n,s&&!o&&(e[a]=n)):e.onclick=n,e})()})))):"",this.controls?(0,r.h)("button",{type:"button","data-slide":"prev",class:"vue-carousel__control vue-carousel__control--prev",onclick:()=>{["right","down"].indexOf(this.direction)>-1?this.next():this.prev()}}):"",this.controls?(0,r.h)("button",{type:"button","data-slide":"next",class:"vue-carousel__control vue-carousel__control--next",onclick:()=>{["right","down"].indexOf(this.direction)>-1?this.prev():this.next()}}):""])}});function y(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var v='.vue-carousel{position:relative;user-select:none}.vue-carousel--slidable{touch-action:none}.vue-carousel--down>.vue-carousel__indicators,.vue-carousel--up>.vue-carousel__indicators{bottom:auto;flex-direction:column;left:auto;right:0;top:50%;transform:translateY(-50%)}.vue-carousel--down>.vue-carousel__indicators>.vue-carousel__indicator:before,.vue-carousel--up>.vue-carousel__indicators>.vue-carousel__indicator:before{height:100%;width:.125rem}.vue-carousel--down>.vue-carousel__indicators--disc>.vue-carousel__indicator,.vue-carousel--up>.vue-carousel__indicators--disc>.vue-carousel__indicator{height:.75rem;width:1.5rem}.vue-carousel--down>.vue-carousel__indicators--disc>.vue-carousel__indicator:before,.vue-carousel--up>.vue-carousel__indicators--disc>.vue-carousel__indicator:before{height:.5rem;width:.5rem}.vue-carousel--right>.vue-carousel__indicators{flex-direction:row-reverse}.vue-carousel--down>.vue-carousel__indicators{flex-direction:column-reverse}.vue-carousel--controls:hover>.vue-carousel__control{opacity:.5;transform:translateX(0);z-index:1}.vue-carousel--controls:hover>.vue-carousel__control:focus,.vue-carousel--controls:hover>.vue-carousel__control:hover{opacity:1}.vue-carousel--controls>.vue-carousel__control{opacity:0;z-index:-1}.vue-carousel--controls>.vue-carousel__control--prev{transform:translateX(-50%)}.vue-carousel--controls>.vue-carousel__control--next{transform:translateX(50%)}.vue-carousel--indicators:hover>.vue-carousel__indicators{opacity:1;z-index:1}.vue-carousel--indicators>.vue-carousel__indicators{opacity:0;transition:opacity .15s;z-index:-1}.vue-carousel__list{margin:0;overflow:hidden;padding:0;position:relative;width:100%}.vue-carousel__item{display:none;margin:0}.vue-carousel__item--active,.vue-carousel__item--bottom,.vue-carousel__item--left,.vue-carousel__item--right,.vue-carousel__item--top{display:block;transition:transform .6s ease-in-out;width:100%}.vue-carousel__item--bottom,.vue-carousel__item--left,.vue-carousel__item--right,.vue-carousel__item--top{left:0;position:absolute;top:0}.vue-carousel__item--top{transform:translateY(-100%)}.vue-carousel__item--top.vue-carousel__item--to-bottom{transform:translateY(0)}.vue-carousel__item--right{transform:translateX(100%)}.vue-carousel__item--right.vue-carousel__item--to-left{transform:translateX(0)}.vue-carousel__item--bottom{transform:translateY(100%)}.vue-carousel__item--bottom.vue-carousel__item--to-top{transform:translateY(0)}.vue-carousel__item--left{transform:translateX(-100%)}.vue-carousel__item--left.vue-carousel__item--to-right{transform:translateX(0)}.vue-carousel__item--active{transform:translate(0);z-index:1}.vue-carousel__item--active.vue-carousel__item--to-top{transform:translateY(-100%)}.vue-carousel__item--active.vue-carousel__item--to-right{transform:translateX(100%)}.vue-carousel__item--active.vue-carousel__item--to-bottom{transform:translateY(100%)}.vue-carousel__item--active.vue-carousel__item--to-left{transform:translateX(-100%)}.vue-carousel__indicators{bottom:0;display:flex;justify-content:center;left:50%;list-style:none;margin:0;padding:0;position:absolute;transform:translateX(-50%);z-index:1}.vue-carousel__indicators--disc>.vue-carousel__indicator{width:.75rem}.vue-carousel__indicators--disc>.vue-carousel__indicator:before{border-radius:50%;height:.5rem;width:.5rem}.vue-carousel__indicator{cursor:pointer;height:1.5rem;margin:.125rem;opacity:.5;position:relative;transition:opacity .15s;width:1.5rem}.vue-carousel__indicator:before{background-color:#fff;content:"";display:block;height:.125rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.vue-carousel__indicator--active{opacity:1}.vue-carousel__control{background-color:rgba(0,0,0,.5);border:0;border-radius:50%;color:#fff;cursor:pointer;height:2rem;margin-top:-1rem;opacity:.5;padding:.5rem;position:absolute;top:50%;transition:all .15s;width:2rem}.vue-carousel__control:focus,.vue-carousel__control:hover{opacity:1}.vue-carousel__control:focus{outline:none}.vue-carousel__control:before{border:.0625rem solid transparent;border-radius:.125rem;content:"";display:block;height:.5rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(45deg);width:.5rem}.vue-carousel__control--prev{left:1rem}.vue-carousel__control--prev:before{border-bottom-color:#fff;border-left-color:#fff;margin-left:.125rem}.vue-carousel__control--next{right:1rem}.vue-carousel__control--next:before{border-right-color:#fff;border-top-color:#fff;margin-left:-.125rem}';y(v)},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return I},L:function(){return a},LL:function(){return R},P0:function(){return E},Pz:function(){return S},Sg:function(){return k},ZR:function(){return A},aH:function(){return T},b$:function(){return d},eu:function(){return m},hl:function(){return p},m9:function(){return $},ne:function(){return U},pd:function(){return F},q4:function(){return _},ru:function(){return h},tV:function(){return c},uI:function(){return l},vZ:function(){return D},w1:function(){return f},xO:function(){return P},xb:function(){return O},z$:function(){return u},zd:function(){return M}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){try{return"object"===typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>g().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},w=()=>{try{return y()||v()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},_=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=e=>{const t=_(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},T=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},S=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?N(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new A(r,o,n);return a}}function N(e,t){return e.replace(x,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(L(n)&&L(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function M(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function F(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{$y:function(){return Le},B:function(){return o},BK:function(){return et},Bj:function(){return s},EB:function(){return u},Fl:function(){return st},IU:function(){return Fe},Jd:function(){return A},OT:function(){return Ne},PG:function(){return De},SU:function(){return Je},Um:function(){return Re},Vh:function(){return nt},WL:function(){return Qe},X$:function(){return O},X3:function(){return Me},XI:function(){return ze},Xl:function(){return Ue},YS:function(){return xe},ZM:function(){return Ze},cE:function(){return S},dq:function(){return qe},iH:function(){return He},j:function(){return N},lk:function(){return R},nZ:function(){return c},oR:function(){return We},qj:function(){return Ae},qq:function(){return E},sT:function(){return I},yT:function(){return Pe}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}function u(e){i&&i.cleanups.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},h=e=>(e.w&y)>0,d=e=>(e.n&y)>0,f=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=y},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];h(i)&&!d(i)?i.delete(e):t[n++]=i,i.w&=~y,i.n&=~y}t.length=n}},m=new WeakMap;let g=0,y=1;const v=30;let b;const w=Symbol(""),_=Symbol("");class E{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=b,t=k;while(e){if(e===this)return;e=e.parent}try{return this.parent=b,b=this,k=!0,y=1<<++g,g<=v?f(this):T(this),this.fn()}finally{g<=v&&p(this),y=1<<--g,b=this.parent,k=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function S(e,t){e.effect&&(e=e.effect.fn);const n=new E(e);t&&((0,r.l7)(n,t),t.scope&&a(n,t.scope)),t&&t.lazy||n.run();const i=n.run.bind(n);return i.effect=n,i}function I(e){e.effect.stop()}let k=!0;const C=[];function A(){C.push(k),k=!1}function R(){const e=C.pop();k=void 0===e||e}function N(e,t,n){if(k&&b){let t=m.get(e);t||m.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const i=void 0;x(r,i)}}function x(e,t){let n=!1;g<=v?d(e)||(e.n|=y,n=!h(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function O(e,t,n,i,s,o){const a=m.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(w)),(0,r._N)(e)&&c.push(a.get(_)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(w)),(0,r._N)(e)&&c.push(a.get(_)));break;case"set":(0,r._N)(e)&&c.push(a.get(w));break}if(1===c.length)c[0]&&D(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);D(l(e))}}function D(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&L(r,t);for(const r of n)r.computed||L(r,t)}function L(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),M=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),F=q(),U=q(!1,!0),V=q(!0),j=q(!0,!0),B=$();function $(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Fe(this);for(let t=0,i=this.length;t<i;t++)N(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Fe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){A();const n=Fe(this)[t].apply(this,e);return R(),n}})),e}function q(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?Ie:Se:t?Te:Ee).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(B,i))return Reflect.get(B,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?M.has(i):P(i))?a:(e||N(n,"get",i),t?a:qe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ne(a):Ae(a):a)}}const H=K(),z=K(!0);function K(e=!1){return function(t,n,i,s){let o=t[n];if(Le(o)&&qe(o)&&!qe(i))return!1;if(!e&&(Pe(i)||Le(i)||(o=Fe(o),i=Fe(i)),!(0,r.kJ)(t)&&qe(o)&&!qe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Fe(s)&&(a?(0,r.aU)(i,o)&&O(t,"set",n,i,o):O(t,"add",n,i)),c}}function G(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&O(e,"delete",t,void 0,i),s}function W(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&M.has(t)||N(e,"has",t),n}function J(e){return N(e,"iterate",(0,r.kJ)(e)?"length":w),Reflect.ownKeys(e)}const X={get:F,set:H,deleteProperty:G,has:W,ownKeys:J},Q={get:V,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=(0,r.l7)({},X,{get:U,set:z}),Z=(0,r.l7)({},Q,{get:j}),ee=e=>e,te=e=>Reflect.getPrototypeOf(e);function ne(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Fe(e),s=Fe(t);n||(t!==s&&N(i,"get",t),N(i,"get",s));const{has:o}=te(i),a=r?ee:n?je:Ve;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function re(e,t=!1){const n=this["__v_raw"],r=Fe(n),i=Fe(e);return t||(e!==i&&N(r,"has",e),N(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ie(e,t=!1){return e=e["__v_raw"],!t&&N(Fe(e),"iterate",w),Reflect.get(e,"size",e)}function se(e){e=Fe(e);const t=Fe(this),n=te(t),r=n.has.call(t,e);return r||(t.add(e),O(t,"add",e,e)),this}function oe(e,t){t=Fe(t);const n=Fe(this),{has:i,get:s}=te(n);let o=i.call(n,e);o||(e=Fe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function ae(e){const t=Fe(this),{has:n,get:r}=te(t);let i=n.call(t,e);i||(e=Fe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&O(t,"delete",e,void 0,s),o}function ce(){const e=Fe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&O(e,"clear",void 0,void 0,n),r}function ue(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Fe(s),a=t?ee:e?je:Ve;return!e&&N(o,"iterate",w),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function le(e,t,n){return function(...i){const s=this["__v_raw"],o=Fe(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?ee:t?je:Ve;return!t&&N(o,"iterate",u?_:w),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function he(e){return function(...t){return"delete"!==e&&this}}function de(){const e={get(e){return ne(this,e)},get size(){return ie(this)},has:re,add:se,set:oe,delete:ae,clear:ce,forEach:ue(!1,!1)},t={get(e){return ne(this,e,!1,!0)},get size(){return ie(this)},has:re,add:se,set:oe,delete:ae,clear:ce,forEach:ue(!1,!0)},n={get(e){return ne(this,e,!0)},get size(){return ie(this,!0)},has(e){return re.call(this,e,!0)},add:he("add"),set:he("set"),delete:he("delete"),clear:he("clear"),forEach:ue(!0,!1)},r={get(e){return ne(this,e,!0,!0)},get size(){return ie(this,!0)},has(e){return re.call(this,e,!0)},add:he("add"),set:he("set"),delete:he("delete"),clear:he("clear"),forEach:ue(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=le(i,!1,!1),n[i]=le(i,!0,!1),t[i]=le(i,!1,!0),r[i]=le(i,!0,!0)})),[e,n,t,r]}const[fe,pe,me,ge]=de();function ye(e,t){const n=t?e?ge:me:e?pe:fe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const ve={get:ye(!1,!1)},be={get:ye(!1,!0)},we={get:ye(!0,!1)},_e={get:ye(!0,!0)};const Ee=new WeakMap,Te=new WeakMap,Se=new WeakMap,Ie=new WeakMap;function ke(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ce(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ke((0,r.W7)(e))}function Ae(e){return Le(e)?e:Oe(e,!1,X,ve,Ee)}function Re(e){return Oe(e,!1,Y,be,Te)}function Ne(e){return Oe(e,!0,Q,we,Se)}function xe(e){return Oe(e,!0,Z,_e,Ie)}function Oe(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ce(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function De(e){return Le(e)?De(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Le(e){return!(!e||!e["__v_isReadonly"])}function Pe(e){return!(!e||!e["__v_isShallow"])}function Me(e){return De(e)||Le(e)}function Fe(e){const t=e&&e["__v_raw"];return t?Fe(t):e}function Ue(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ve=e=>(0,r.Kn)(e)?Ae(e):e,je=e=>(0,r.Kn)(e)?Ne(e):e;function Be(e){k&&b&&(e=Fe(e),x(e.dep||(e.dep=l())))}function $e(e,t){e=Fe(e),e.dep&&D(e.dep)}function qe(e){return!(!e||!0!==e.__v_isRef)}function He(e){return Ke(e,!1)}function ze(e){return Ke(e,!0)}function Ke(e,t){return qe(e)?e:new Ge(e,t)}class Ge{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Fe(e),this._value=t?e:Ve(e)}get value(){return Be(this),this._value}set value(e){const t=this.__v_isShallow||Pe(e)||Le(e);e=t?e:Fe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ve(e),$e(this,e))}}function We(e){$e(e,void 0)}function Je(e){return qe(e)?e.value:e}const Xe={get:(e,t,n)=>Je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return qe(i)&&!qe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qe(e){return De(e)?e:new Proxy(e,Xe)}class Ye{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>Be(this)),(()=>$e(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Ze(e){return new Ye(e)}function et(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=nt(e,n);return t}class tt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function nt(e,t,n){const r=e[t];return qe(r)?r:new tt(e,t,n)}var rt;class it{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[rt]=!1,this._dirty=!0,this.effect=new E(e,(()=>{this._dirty||(this._dirty=!0,$e(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Fe(this);return Be(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function st(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new it(i,s,o||!s,n);return a}rt="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},$y:function(){return r.$y},Ah:function(){return Qe},B:function(){return r.B},BK:function(){return r.BK},Bj:function(){return r.Bj},Bz:function(){return Cr},C3:function(){return jn},C_:function(){return i.C_},Cn:function(){return B},EB:function(){return r.EB},Eo:function(){return ln},F4:function(){return Gn},FN:function(){return ar},Fl:function(){return Ir},G:function(){return Hr},HX:function(){return $},HY:function(){return Sn},Ho:function(){return Wn},IU:function(){return r.IU},JJ:function(){return ue},Jd:function(){return Xe},KU:function(){return o},Ko:function(){return dt},LL:function(){return ct},MW:function(){return kr},MX:function(){return jr},Mr:function(){return Vr},Nv:function(){return ft},OT:function(){return r.OT},Ob:function(){return Me},P$:function(){return Te},PG:function(){return r.PG},Q2:function(){return ut},Q6:function(){return Re},RC:function(){return Oe},Rh:function(){return de},Rr:function(){return Nr},S3:function(){return c},SU:function(){return r.SU},U2:function(){return Ie},Uc:function(){return Fr},Uk:function(){return Jn},Um:function(){return r.Um},Us:function(){return un},Vh:function(){return r.Vh},WI:function(){return pt},WL:function(){return r.WL},WY:function(){return Ar},Wm:function(){return zn},X3:function(){return r.X3},XI:function(){return r.XI},Xl:function(){return r.Xl},Xn:function(){return We},Y1:function(){return yr},Y3:function(){return b},Y8:function(){return we},YP:function(){return me},YS:function(){return r.YS},Yq:function(){return Ze},ZK:function(){return s},ZM:function(){return r.ZM},Zq:function(){return Ur},_:function(){return Hn},_A:function(){return i._A},aZ:function(){return Ne},b9:function(){return Rr},bT:function(){return et},bv:function(){return Ge},cE:function(){return r.cE},d1:function(){return tt},dD:function(){return j},dG:function(){return tr},dl:function(){return Ue},dq:function(){return r.dq},ec:function(){return D},eq:function(){return zr},f3:function(){return le},h:function(){return Mr},hR:function(){return i.hR},i8:function(){return $r},iD:function(){return Mn},iH:function(){return r.iH},ic:function(){return Je},j4:function(){return Fn},j5:function(){return i.j5},kC:function(){return i.kC},kq:function(){return Qn},l1:function(){return xr},lA:function(){return Un},lR:function(){return En},m0:function(){return he},mW:function(){return N},mv:function(){return Pr},mx:function(){return gt},n4:function(){return Z},nK:function(){return Ae},nQ:function(){return Br},nZ:function(){return r.nZ},oR:function(){return r.oR},of:function(){return vr},p1:function(){return Lr},qG:function(){return Cn},qZ:function(){return Ln},qb:function(){return S},qj:function(){return r.qj},qq:function(){return r.qq},ry:function(){return Kr},sT:function(){return r.sT},se:function(){return Ve},sv:function(){return kn},uE:function(){return Xn},u_:function(){return Dr},up:function(){return ot},vl:function(){return Ye},vs:function(){return i.vs},w5:function(){return q},wF:function(){return Ke},wg:function(){return Nn},wy:function(){return nt},xv:function(){return In},yT:function(){return r.yT},yX:function(){return fe},zw:function(){return i.zw}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,...t){}function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){c(s,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{c(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(a(e[i],t,n,r));return s}function c(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}u(e,n,i,r)}function u(e,t,n,r=!0){console.error(e)}let l=!1,h=!1;const d=[];let f=0;const p=[];let m=null,g=0;const y=Promise.resolve();let v=null;function b(e){const t=v||y;return e?t.then(this?e.bind(this):e):t}function w(e){let t=f+1,n=d.length;while(t<n){const r=t+n>>>1,i=C(d[r]);i<e?t=r+1:n=r}return t}function _(e){d.length&&d.includes(e,l&&e.allowRecurse?f+1:f)||(null==e.id?d.push(e):d.splice(w(e.id),0,e),E())}function E(){l||h||(h=!0,v=y.then(R))}function T(e){const t=d.indexOf(e);t>f&&d.splice(t,1)}function S(e){(0,i.kJ)(e)?p.push(...e):m&&m.includes(e,e.allowRecurse?g+1:g)||p.push(e),E()}function I(e,t=(l?f+1:0)){for(0;t<d.length;t++){const e=d[t];e&&e.pre&&(d.splice(t,1),t--,e())}}function k(e){if(p.length){const e=[...new Set(p)];if(p.length=0,m)return void m.push(...e);for(m=e,m.sort(((e,t)=>C(e)-C(t))),g=0;g<m.length;g++)m[g]();m=null,g=0}}const C=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=C(e)-C(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function R(e){h=!1,l=!0,d.sort(A);i.dG;try{for(f=0;f<d.length;f++){const e=d[f];e&&!1!==e.active&&o(e,null,14)}}finally{f=0,d.length=0,k(e),l=!1,v=null,(d.length||p.length)&&R(e)}}new Set;new Map;let N,x=[],O=!1;function D(e,t){var n,r;if(N=e,N)N.enabled=!0,x.forEach((({event:e,args:t})=>N.emit(e,...t))),x=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(r=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===r?void 0:r.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push((e=>{D(e,t)})),setTimeout((()=>{N||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,O=!0,x=[])}),3e3)}else O=!0,x=[]}function L(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),c=o&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&o&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&a(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,a(h,e,6,s)}}function P(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=P(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,U=null;function V(e){const t=F;return F=e,U=e&&e.type.__scopeId||null,t}function j(e){U=e}function B(){U=null}const $=e=>q;function q(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ln(-1);const i=V(t);let s;try{s=e(...n)}finally{V(i),r._d&&Ln(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function H(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,b;const w=V(e);try{if(4&n.shapeFlag){const e=s||r;v=Yn(d.call(e,e,f,o,m,p,g)),b=l}else{const e=t;0,v=Yn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),b=t.props?l:K(l)}}catch(E){An.length=0,c(E,e,1),v=zn(kn)}let _=v;if(b&&!1!==y){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(i.tR)&&(b=G(b,a)),_=Wn(_,b))}return n.dirs&&(_=Wn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,V(w),v}function z(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Un(r))return;if(r.type!==kn||"v-if"===r.children){if(t)return;t=r}}return t}const K=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},G=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function W(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||J(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?J(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function J(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function X({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Q=e=>e.__isSuspense,Y={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,s,o,a,c,u){null==e?te(t,n,r,i,s,o,a,c,u):ne(e,t,n,r,i,o,a,c,u)},hydrate:ie,create:re,normalize:se},Z=Y;function ee(e,t){const n=e.props&&e.props[t];(0,i.mf)(n)&&n()}function te(e,t,n,r,i,s,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=e.suspense=re(e,i,r,t,h,n,s,o,a,c);u(null,d.pendingBranch=e.ssContent,h,null,r,d,s,o),d.deps>0?(ee(e,"onPending"),ee(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,s,o),ce(d,e.ssFallback)):d.resolve()}function ne(e,t,n,r,i,s,o,a,{p:c,um:u,o:{createElement:l}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:y}=h;if(m)h.pendingBranch=d,Vn(d,m)?(c(m,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():g&&(c(p,f,n,r,i,null,s,o,a),ce(h,f))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=m):u(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),g?(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(c(p,f,n,r,i,null,s,o,a),ce(h,f))):p&&Vn(d,p)?(c(p,d,n,r,i,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&Vn(d,p))c(p,d,n,r,i,h,s,o,a),ce(h,d);else if(ee(t,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:e,pendingId:t}=h;e>0?setTimeout((()=>{h.pendingId===t&&h.fallback(f)}),e):0===e&&h.fallback(f)}}function re(e,t,n,r,s,o,a,u,l,h,d=!1){const{p:f,m:p,um:m,n:g,o:{parentNode:y,remove:v}}=h,b=(0,i.He)(e.props&&e.props.timeout),w={vnode:e,parent:t,parentComponent:n,isSVG:a,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:r,pendingId:i,effects:s,parentComponent:o,container:a}=w;if(w.isHydrating)w.isHydrating=!1;else if(!e){const e=n&&r.transition&&"out-in"===r.transition.mode;e&&(n.transition.afterLeave=()=>{i===w.pendingId&&p(r,a,t,0)});let{anchor:t}=w;n&&(t=g(n),m(n,o,w,!0)),e||p(r,a,t,0)}ce(w,r),w.pendingBranch=null,w.isInFallback=!1;let c=w.parent,u=!1;while(c){if(c.pendingBranch){c.effects.push(...s),u=!0;break}c=c.parent}u||S(s),w.effects=[],ee(t,"onResolve")},fallback(e){if(!w.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:i,isSVG:s}=w;ee(t,"onFallback");const o=g(n),a=()=>{w.isInFallback&&(f(null,e,i,o,r,null,s,u,l),ce(w,e))},c=e.transition&&"out-in"===e.transition.mode;c&&(n.transition.afterLeave=a),w.isInFallback=!0,m(n,r,null,!0),c||a()},move(e,t,n){w.activeBranch&&p(w.activeBranch,e,t,n),w.container=e},next(){return w.activeBranch&&g(w.activeBranch)},registerDep(e,t){const n=!!w.pendingBranch;n&&w.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{c(t,e,0)})).then((i=>{if(e.isUnmounted||w.isUnmounted||w.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;gr(e,i,!1),r&&(s.el=r);const o=!r&&e.subTree.el;t(e,s,y(r||e.subTree.el),r?null:g(e.subTree),w,a,l),o&&v(o),X(e,s.el),n&&0===--w.deps&&w.resolve()}))},unmount(e,t){w.isUnmounted=!0,w.activeBranch&&m(w.activeBranch,n,e,t),w.pendingBranch&&m(w.pendingBranch,n,e,t)}};return w}function ie(e,t,n,r,i,s,o,a,c){const u=t.suspense=re(t,r,n,e.parentNode,document.createElement("div"),null,i,s,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,s,o);return 0===u.deps&&u.resolve(),l}function se(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=oe(r?n.default:n),e.ssFallback=r?oe(n.fallback):zn(kn)}function oe(e){let t;if((0,i.mf)(e)){const n=Dn&&e._c;n&&(e._d=!1,Nn()),e=e(),n&&(e._d=!0,t=Rn,xn())}if((0,i.kJ)(e)){const t=z(e);0,e=t}return e=Yn(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function ae(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):S(e)}function ce(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,X(r,i))}function ue(e,t){if(or){let n=or.provides;const r=or.parent&&or.parent.provides;r===n&&(n=or.provides=Object.create(r)),n[e]=t}else 0}function le(e,t,n=!1){const r=or||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function he(e,t){return ge(e,null,t)}function de(e,t){return ge(e,null,{flush:"post"})}function fe(e,t){return ge(e,null,{flush:"sync"})}const pe={};function me(e,t,n){return ge(e,t,n)}function ge(e,t,{immediate:n,deep:s,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=or;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,s=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?be(e):(0,i.mf)(e)?o(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>o(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),a(e,h,3,[y])}:i.dG,t&&s){const e=d;d=()=>be(e())}let g,y=e=>{f=E.onStop=()=>{o(e,h,4)}};if(fr){if(y=i.dG,t?n&&a(t,h,3,[d(),m?[]:void 0,y]):d(),"sync"!==c)return i.dG;{const e=Ur();g=e.__watcherHandles||(e.__watcherHandles=[])}}let v=m?new Array(e.length).fill(pe):pe;const b=()=>{if(E.active)if(t){const e=E.run();(s||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),a(t,h,3,[e,v===pe?void 0:m&&v[0]===pe?[]:v,y]),v=e)}else E.run()};let w;b.allowRecurse=!!t,"sync"===c?w=b:"post"===c?w=()=>cn(b,h&&h.suspense):(b.pre=!0,h&&(b.id=h.uid),w=()=>_(b));const E=new r.qq(d,w);t?n?b():v=E.run():"post"===c?cn(E.run.bind(E),h&&h.suspense):E.run();const T=()=>{E.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,E)};return g&&g.push(T),T}function ye(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?ve(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=or;cr(this);const c=ge(s,o.bind(r),n);return a?cr(a):ur(),c}function ve(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function be(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))be(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)be(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{be(e,t)}));else if((0,i.PO)(e))for(const n in e)be(e[n],t);return e}function we(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ge((()=>{e.isMounted=!0})),Xe((()=>{e.isUnmounting=!0})),e}const _e=[Function,Array],Ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_e,onEnter:_e,onAfterEnter:_e,onEnterCancelled:_e,onBeforeLeave:_e,onLeave:_e,onAfterLeave:_e,onLeaveCancelled:_e,onBeforeAppear:_e,onAppear:_e,onAfterAppear:_e,onAppearCancelled:_e},setup(e,{slots:t}){const n=ar(),i=we();let s;return()=>{const o=t.default&&Re(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==kn){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ke(a);const l=Ce(a);if(!l)return ke(a);const h=Ie(l,c,i,n);Ae(l,h);const d=n.subTree,f=d&&Ce(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==kn&&(!Vn(l,f)||p)){const e=Ie(f,c,i,n);if(Ae(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ke(a);"in-out"===u&&l.type!==kn&&(e.delayLeave=(e,t,n)=>{const r=Se(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},Te=Ee;function Se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ie(e,t,n,r){const{appear:s,mode:o,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),E=Se(n,e),T=(e,t)=>{e&&a(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:o,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=E[_];i&&Vn(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=b||h,i=w||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?S(p,[t,o]):o()},clone(e){return Ie(e,t,n,r)}};return I}function ke(e){if(Le(e))return e=Wn(e),e.children=null,e}function Ce(e){return Le(e)?e.children?e.children[0]:void 0:e}function Ae(e,t){6&e.shapeFlag&&e.component?Ae(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Re(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Sn?(128&o.patchFlag&&i++,r=r.concat(Re(o.children,t,a))):(t||o.type!==kn)&&r.push(null!=a?Wn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Ne(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const xe=e=>!!e.type.__asyncLoader;function Oe(e){(0,i.mf)(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:u=!0,onError:l}=e;let h,d=null,f=0;const p=()=>(f++,d=null,m()),m=()=>{let e;return d||(e=d=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{const r=()=>t(p()),i=()=>n(e);l(e,r,i,f+1)}));throw e})).then((t=>e!==d&&d?d:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),h=t,t))))};return Ne({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return h},setup(){const e=or;if(h)return()=>De(h,e);const t=t=>{d=null,c(t,e,13,!s)};if(u&&e.suspense||fr)return m().then((t=>()=>De(t,e))).catch((e=>(t(e),()=>s?zn(s,{error:e}):null)));const i=(0,r.iH)(!1),l=(0,r.iH)(),f=(0,r.iH)(!!o);return o&&setTimeout((()=>{f.value=!1}),o),null!=a&&setTimeout((()=>{if(!i.value&&!l.value){const e=new Error(`Async component timed out after ${a}ms.`);t(e),l.value=e}}),a),m().then((()=>{i.value=!0,e.parent&&Le(e.parent.vnode)&&_(e.parent.update)})).catch((e=>{t(e),l.value=e})),()=>i.value&&h?De(h,e):l.value&&s?zn(s,{error:l.value}):n&&!f.value?zn(n):void 0}})}function De(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,o=zn(e,r,i);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const Le=e=>e.type.__isKeepAlive,Pe={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=ar(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const s=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:d}}}=r,f=d("div");function p(e){$e(e),h(e,n,c,!0)}function m(e){s.forEach(((t,n)=>{const r=Tr(t.type);!r||e&&e(r)||g(n)}))}function g(e){const t=s.get(e);a&&t.type===a.type?a&&$e(a):p(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;l(e,t,n,0,c),u(o.vnode,e,t,n,o,c,r,e.slotScopeIds,s),cn((()=>{o.isDeactivated=!1,o.a&&(0,i.ir)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&nr(t,o.parent,e)}),c)},r.deactivate=e=>{const t=e.component;l(e,f,null,1,c),cn((()=>{t.da&&(0,i.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&nr(n,t.parent,e),t.isDeactivated=!0}),c)},me((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>Fe(e,t))),t&&m((e=>!Fe(t,e)))}),{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&s.set(y,qe(n.subTree))};return Ge(v),Je(v),Xe((()=>{s.forEach((e=>{const{subTree:t,suspense:r}=n,i=qe(t);if(e.type!==i.type)p(e);else{$e(i);const e=i.component.da;e&&cn(e,r)}}))})),()=>{if(y=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!Un(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=qe(r);const c=i.type,u=Tr(xe(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:d}=e;if(l&&(!u||!Fe(l,u))||h&&u&&Fe(h,u))return a=i,r;const f=null==i.key?c:i.key,p=s.get(f);return i.el&&(i=Wn(i),128&r.shapeFlag&&(r.ssContent=i)),y=f,p?(i.el=p.el,i.component=p.component,i.transition&&Ae(i,i.transition),i.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&g(o.values().next().value)),i.shapeFlag|=256,a=i,Q(r.type)?r:i}}},Me=Pe;function Fe(e,t){return(0,i.kJ)(e)?e.some((e=>Fe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Ue(e,t){je(e,"a",t)}function Ve(e,t){je(e,"da",t)}function je(e,t,n=or){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(He(t,r,n),n){let e=n.parent;while(e&&e.parent)Le(e.parent.vnode)&&Be(r,t,n,e),e=e.parent}}function Be(e,t,n,r){const s=He(t,e,r,!0);Qe((()=>{(0,i.Od)(r[t],s)}),n)}function $e(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function qe(e){return 128&e.shapeFlag?e.ssContent:e}function He(e,t,n=or,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),cr(n);const s=a(t,n,e,i);return ur(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const ze=e=>(t,n=or)=>(!fr||"sp"===e)&&He(e,((...e)=>t(...e)),n),Ke=ze("bm"),Ge=ze("m"),We=ze("bu"),Je=ze("u"),Xe=ze("bum"),Qe=ze("um"),Ye=ze("sp"),Ze=ze("rtg"),et=ze("rtc");function tt(e,t=or){He("ec",e,t)}function nt(e,t){const n=F;if(null===n)return e;const r=Er(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&be(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function rt(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];o&&(u.oldValue=o[c].value);let l=u.dir[i];l&&((0,r.Jd)(),a(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const it="components",st="directives";function ot(e,t){return lt(it,e,!0,t)||e}const at=Symbol();function ct(e){return(0,i.HD)(e)?lt(it,e,!1)||e:e||at}function ut(e){return lt(st,e)}function lt(e,t,n=!0,r=!1){const s=F||or;if(s){const n=s.type;if(e===it){const e=Tr(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=ht(s[e]||n[e],t)||ht(s.appContext[e],t);return!o&&r?n:o}}function ht(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function dt(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function ft(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,i.kJ)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function pt(e,t,n={},r,i){if(F.isCE||F.parent&&xe(F.parent)&&F.parent.isCE)return"default"!==t&&(n.name=t),zn("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),Nn();const o=s&&mt(s(n)),a=Fn(Sn,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function mt(e){return e.some((e=>!Un(e)||e.type!==kn&&!(e.type===Sn&&!mt(e.children))))?e:null}function gt(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.hR)(r)]=e[r];return n}const yt=e=>e?lr(e)?Er(e)||e.proxy:yt(e.parent):null,vt=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yt(e.parent),$root:e=>yt(e.root),$emit:e=>e.emit,$options:e=>Ct(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=b.bind(e.proxy)),$watch:e=>ye.bind(e)}),bt=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),wt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(bt(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Et&&(c[t]=0)}}const d=vt[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return bt(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||bt(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(vt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const _t=(0,i.l7)({},wt,{get(e,t){if(t!==Symbol.unscopables)return wt.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!(0,i.e1)(t);return n}});let Et=!0;function Tt(e){const t=Ct(e),n=e.proxy,s=e.ctx;Et=!1,t.beforeCreate&&It(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:R,components:N,directives:x,filters:O}=t,D=null;if(h&&St(h,s,D,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Et=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Ir({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)kt(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ue(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&It(d,e,"c"),L(Ke,f),L(Ge,p),L(We,m),L(Je,g),L(Ue,y),L(Ve,v),L(tt,k),L(et,S),L(Ze,I),L(Xe,w),L(Qe,E),L(Ye,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),x&&(e.directives=x)}function St(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Ot(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?le(n.from||o,n.default,!0):le(n.from||o):le(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function It(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function kt(e,t,n,r){const s=r.includes(".")?ve(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&me(s,n)}else if((0,i.mf)(e))me(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>kt(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&me(s,r,e)}else 0}function Ct(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>At(u,e,a,!0))),At(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function At(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&At(e,s,n,!0),i&&i.forEach((t=>At(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Rt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Rt={data:Nt,props:Lt,emits:Lt,methods:Lt,computed:Lt,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Lt,directives:Lt,watch:Pt,provide:Nt,inject:xt};function Nt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function xt(e,t){return Lt(Ot(e),Ot(t))}function Ot(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Dt(e,t){return e?[...new Set([].concat(e,t))]:t}function Lt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Pt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Dt(e[r],t[r]);return n}function Mt(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Bn,1),e.propsDefaults=Object.create(null),Ut(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ft(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ut(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Vt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=Vt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Ut(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Vt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function Vt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(cr(s),r=i[n]=e.call(null,t),ur())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function jt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=jt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);Bt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(Bt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=Ht(Boolean,r.type),n=Ht(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function Bt(e){return"$"!==e[0]}function $t(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function qt(e,t){return $t(e)===$t(t)}function Ht(e,t){return(0,i.kJ)(t)?t.findIndex((t=>qt(t,e))):(0,i.mf)(t)&&qt(t,e)?0:-1}const zt=e=>"_"===e[0]||"$stable"===e,Kt=e=>(0,i.kJ)(e)?e.map(Yn):[Yn(e)],Gt=(e,t,n)=>{if(t._n)return t;const r=q(((...e)=>Kt(t(...e))),n);return r._c=!1,r},Wt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(zt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Gt(s,n,r);else if(null!=n){0;const e=Kt(n);t[s]=()=>e}}},Jt=(e,t)=>{const n=Kt(t);e.slots.default=()=>n},Xt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Wt(t,e.slots={})}else e.slots={},t&&Jt(e,t);(0,i.Nj)(e.slots,Bn,1)},Qt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Wt(t,s)),a=t}else t&&(Jt(e,t),a={default:1});if(o)for(const i in s)zt(i)||i in a||delete s[i]};function Yt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zt=0;function en(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Yt(),o=new Set;let a=!1;const c=s.app={_uid:Zt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:$r,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=zn(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Er(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function tn(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>tn(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(xe(s)&&!a)return;const c=4&s.shapeFlag?Er(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))o(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,cn(r,n)):r()}else 0}}let nn=!1;const rn=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,sn=e=>8===e.nodeType;function on(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:a,remove:c,insert:u,createComment:l}}=e,h=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),k(),void(t._vnode=e);nn=!1,d(t.firstChild,e,null,null,null),k(),t._vnode=e,nn&&console.error("Hydration completed but contains mismatches.")},d=(n,r,i,c,l,h=!1)=>{const v=sn(n)&&"["===n.data,b=()=>g(n,r,i,c,l,v),{type:w,ref:_,shapeFlag:E,patchFlag:T}=r;let S=n.nodeType;r.el=n,-2===T&&(h=!1,r.dynamicChildren=null);let I=null;switch(w){case In:3!==S?""===r.children?(u(r.el=s(""),a(n),n),I=n):I=b():(n.data!==r.children&&(nn=!0,n.data=r.children),I=o(n));break;case kn:I=8!==S||v?b():o(n);break;case Cn:if(v&&(n=o(n),S=n.nodeType),1===S||3===S){I=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===I.nodeType?I.outerHTML:I.data),t===r.staticCount-1&&(r.anchor=I),I=o(I);return v?o(I):I}b();break;case Sn:I=v?m(n,r,i,c,l,h):b();break;default:if(1&E)I=1!==S||r.type.toLowerCase()!==n.tagName.toLowerCase()?b():f(n,r,i,c,l,h);else if(6&E){r.slotScopeIds=l;const e=a(n);if(t(r,e,null,i,c,rn(e),h),I=v?y(n):o(n),I&&sn(I)&&"teleport end"===I.data&&(I=o(I)),xe(r)){let t;v?(t=zn(Sn),t.anchor=I?I.previousSibling:e.lastChild):t=3===n.nodeType?Jn(""):zn("div"),t.el=n,r.component.subTree=t}}else 64&E?I=8!==S?b():r.type.hydrate(n,r,i,c,l,h,e,p):128&E&&(I=r.type.hydrate(n,r,i,c,rn(a(n)),l,h,e,d))}return null!=_&&tn(_,null,c,r),I},f=(e,t,n,s,o,a)=>{a=a||!!t.dynamicChildren;const{type:u,props:l,patchFlag:h,shapeFlag:d,dirs:f}=t,m="input"===u&&f||"option"===u;if(m||-1!==h){if(f&&rt(t,null,n,"created"),l)if(m||!a||48&h)for(const t in l)(m&&t.endsWith("value")||(0,i.F7)(t)&&!(0,i.Gg)(t))&&r(e,t,null,l[t],!1,void 0,n);else l.onClick&&r(e,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&nr(u,n,t),f&&rt(t,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||f)&&ae((()=>{u&&nr(u,n,t),f&&rt(t,null,n,"mounted")}),s),16&d&&(!l||!l.innerHTML&&!l.textContent)){let r=p(e.firstChild,t,e,n,s,o,a);while(r){nn=!0;const e=r;r=r.nextSibling,c(e)}}else 8&d&&e.textContent!==t.children&&(nn=!0,e.textContent=t.children)}return e.nextSibling},p=(e,t,r,i,s,o,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let l=0;l<u;l++){const t=a?c[l]:c[l]=Yn(c[l]);if(e)e=d(e,t,i,s,o,a);else{if(t.type===In&&!t.children)continue;nn=!0,n(null,t,r,null,i,s,rn(r),o)}}return e},m=(e,t,n,r,i,s)=>{const{slotScopeIds:c}=t;c&&(i=i?i.concat(c):c);const h=a(e),d=p(o(e),t,h,n,r,i,s);return d&&sn(d)&&"]"===d.data?o(t.anchor=d):(nn=!0,u(t.anchor=l("]"),h,d),d)},g=(e,t,r,i,s,u)=>{if(nn=!0,t.el=null,u){const t=y(e);while(1){const n=o(e);if(!n||n===t)break;c(n)}}const l=o(e),h=a(e);return c(e),n(null,t,h,l,r,i,rn(h),s),l},y=e=>{let t=0;while(e)if(e=o(e),e&&sn(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return o(e);t--}return e};return[h,d]}function an(){}const cn=ae;function un(e){return hn(e)}function ln(e){return hn(e,on)}function hn(e,t){an();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Vn(e,t)&&(r=Y(e),z(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case In:v(e,t,n,r);break;case kn:b(e,t,n,r);break;case Cn:null==e&&w(t,n,r,o);break;case Sn:L(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?P(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&tn(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:b}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),b&&rt(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,Q);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&nr(p,r,e)}R(f,e,e.scopeId,l,r),b&&rt(e,null,r,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||b)&&cn((()=>{p&&nr(p,r,e),w&&v.enter(f),b&&rt(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Zn(e[u]):Yn(e[u]);y(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&dn(n,!1),(g=m.onVnodeBeforeUpdate)&&nr(g,n,t,e),f&&rt(t,e,n,"beforeUpdate"),n&&dn(n,!0);const y=s&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,u,n,r,y,o):c||j(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)D(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,Q)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||D(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&cn((()=>{g&&nr(g,n,t,e),f&&rt(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Sn||!Vn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,Q);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,Q)}"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&fn(e,t,!0)):j(e,t,n,d,i,o,a,c,l)},P=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):F(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=sr(e,r,i);if(Le(e)&&(a.ctx.renderer=ee),pr(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=zn(kn);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(W(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,T(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,dn(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&nr(t,u,n,l),dn(e,!0);const d=H(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&X(e,d.el),s&&cn(s,o),(t=n.props&&n.props.onVnodeUpdated)&&cn((()=>nr(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=xe(t);if(dn(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&nr(r,d,t),dn(e,!0),c&&ne){const n=()=>{e.subTree=H(e),ne(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=H(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&cn(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;cn((()=>nr(r,d,e)),o)}(256&t.shapeFlag||d&&xe(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&cn(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>_(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,dn(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ft(e,t.props,i,n),Qt(e,t.children,n),(0,r.Jd)(),I(),(0,r.lk)()},j=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&d(n,h)):16&l?16&p?$(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Zn(t[f]):Yn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?Q(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},$=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Zn(t[l]):Yn(t[l]);if(!Vn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Zn(t[f]):Yn(t[f]);if(!Vn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?Zn(t[l]):Yn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)z(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?Zn(t[l]):Yn(t[l]);null!=e.key&&g.set(e.key,l)}let v,b=0;const w=f-m+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){z(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&Vn(r,t[v])){i=v;break}void 0===i?z(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:_=!0,y(r,t[i],n,null,s,o,a,c,u),b++)}const S=_?pn(T):i.Z6;for(v=S.length-1,l=w-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==S[v]?q(i,n,d,2):v--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Sn){s(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Cn)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),cn((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&tn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!xe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&nr(m,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&rt(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==Sn||h>0&&64&h)?Q(u,t,n,!1,!0):(s===Sn&&384&h||!i&&16&l)&&Q(c,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&cn((()=>{m&&nr(m,t,e),f&&rt(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Sn)return void G(n,r);if(t===Cn)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},G=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,z(a,e,t,n)),c&&cn(c,t),cn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)z(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),I(),k(),t._vnode=e},ee={p:y,um:z,m:q,r:K,mt:M,mc:N,pc:j,pbc:O,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:en(Z,te)}}function dn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fn(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Zn(s[i]),t.el=e.el),n||fn(e,t)),t.type===In&&(t.el=e.el)}}function pn(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const mn=e=>e.__isTeleport,gn=e=>e&&(e.disabled||""===e.disabled),yn=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,vn=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},bn={__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,y=gn(t.props);let{shapeFlag:v,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=vn(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),o=o||yn(h));const g=(e,t)=>{16&v&&l(b,e,t,i,s,o,a,c)};y?g(n,u):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=gn(e.props),g=m?n:l,v=m?r:f;if(o=o||yn(l),w?(d(e.dynamicChildren,w,g,i,s,o,a),fn(e,t,!0)):c||h(e,t,g,v,i,s,o,a,!1),y)m||wn(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=vn(t.props,p);e&&wn(t,e,null,u,0)}else m&&wn(t,l,f,u,1)}Tn(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=e;if(h&&s(l),(o||!gn(d))&&(s(u),16&a))for(let f=0;f<c.length;f++){const e=c[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:wn,hydrate:_n};function wn(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===s;if(h&&r(o,t,n),(!h||gn(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function _n(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=t.target=vn(t.props,c);if(l){const c=l._lpa||l.firstChild;if(16&t.shapeFlag)if(gn(t.props))t.anchor=u(o(e),t,a(e),n,r,i,s),t.targetAnchor=c;else{t.anchor=o(e);let a=c;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,l._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(c,t,l,n,r,i,s)}Tn(t)}return t.anchor&&o(t.anchor)}const En=bn;function Tn(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Sn=Symbol(void 0),In=Symbol(void 0),kn=Symbol(void 0),Cn=Symbol(void 0),An=[];let Rn=null;function Nn(e=!1){An.push(Rn=e?null:[])}function xn(){An.pop(),Rn=An[An.length-1]||null}let On,Dn=1;function Ln(e){Dn+=e}function Pn(e){return e.dynamicChildren=Dn>0?Rn||i.Z6:null,xn(),Dn>0&&Rn&&Rn.push(e),e}function Mn(e,t,n,r,i,s){return Pn(Hn(e,t,n,r,i,s,!0))}function Fn(e,t,n,r,i){return Pn(zn(e,t,n,r,i,!0))}function Un(e){return!!e&&!0===e.__v_isVNode}function Vn(e,t){return e.type===t.type&&e.key===t.key}function jn(e){On=e}const Bn="__vInternal",$n=({key:e})=>null!=e?e:null,qn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Hn(e,t=null,n=null,r=0,s=null,o=(e===Sn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$n(t),ref:t&&qn(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:F};return c?(er(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Dn>0&&!a&&Rn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Rn.push(u),u}const zn=Kn;function Kn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==at||(e=kn),Un(e)){const r=Wn(e,t,!0);return n&&er(r,n),Dn>0&&!a&&Rn&&(6&r.shapeFlag?Rn[Rn.indexOf(e)]=r:Rn.push(r)),r.patchFlag|=-2,r}if(Sr(e)&&(e=e.__vccOpts),t){t=Gn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:Q(e)?128:mn(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Hn(e,t,n,s,o,c,a,!0)}function Gn(e){return e?(0,r.X3)(e)||Bn in e?(0,i.l7)({},e):e:null}function Wn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?tr(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&$n(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(qn(t)):[s,qn(t)]:qn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Sn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wn(e.ssContent),ssFallback:e.ssFallback&&Wn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function Jn(e=" ",t=0){return zn(In,null,e,t)}function Xn(e,t){const n=zn(Cn,null,e);return n.staticCount=t,n}function Qn(e="",t=!1){return t?(Nn(),Fn(kn,null,e)):zn(kn,null,e)}function Yn(e){return null==e||"boolean"===typeof e?zn(kn):(0,i.kJ)(e)?zn(Sn,null,e.slice()):"object"===typeof e?Zn(e):zn(In,null,String(e))}function Zn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Wn(e)}function er(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),er(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Bn in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[Jn(t)]):n=8);e.children=t,e.shapeFlag|=n}function tr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function nr(e,t,n,r=null){a(e,t,7,[n,r])}const rr=Yt();let ir=0;function sr(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||rr,a={uid:ir++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jt(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=L.bind(null,a),e.ce&&e.ce(a),a}let or=null;const ar=()=>or||F,cr=e=>{or=e,e.scope.on()},ur=()=>{or&&or.scope.off(),or=null};function lr(e){return 4&e.vnode.shapeFlag}let hr,dr,fr=!1;function pr(e,t=!1){fr=t;const{props:n,children:r}=e.vnode,i=lr(e);Mt(e,n,i,t),Xt(e,r);const s=i?mr(e,t):void 0;return fr=!1,s}function mr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,wt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?_r(e):null;cr(e),(0,r.Jd)();const a=o(s,e,0,[e.props,n]);if((0,r.lk)(),ur(),(0,i.tI)(a)){if(a.then(ur,ur),t)return a.then((n=>{gr(e,n,t)})).catch((t=>{c(t,e,0)}));e.asyncDep=a}else gr(e,a,t)}else br(e,t)}function gr(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),br(e,n)}function yr(e){hr=e,dr=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,_t))}}const vr=()=>!hr;function br(e,t,n){const s=e.type;if(!e.render){if(!t&&hr&&!s.render){const t=s.template||Ct(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=hr(t,c)}}e.render=s.render||i.dG,dr&&dr(e)}cr(e),(0,r.Jd)(),Tt(e),(0,r.lk)(),ur()}function wr(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function _r(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=wr(e))},slots:e.slots,emit:e.emit,expose:t}}function Er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in vt?vt[n](e):void 0},has(e,t){return t in e||t in vt}}))}function Tr(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Sr(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Ir=(e,t)=>(0,r.Fl)(e,t,fr);function kr(){return null}function Cr(){return null}function Ar(e){0}function Rr(e,t){return null}function Nr(){return Or().slots}function xr(){return Or().attrs}function Or(){const e=ar();return e.setupContext||(e.setupContext=_r(e))}function Dr(e,t){const n=(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]={},e)),{}):e;for(const r in t){const e=n[r];e?(0,i.kJ)(e)||(0,i.mf)(e)?n[r]={type:e,default:t[r]}:e.default=t[r]:null===e&&(n[r]={default:t[r]})}return n}function Lr(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Pr(e){const t=ar();let n=e();return ur(),(0,i.tI)(n)&&(n=n.catch((e=>{throw cr(t),e}))),[n,()=>cr(t)]}function Mr(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Un(t)?zn(e,null,[t]):zn(e,t):zn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Un(n)&&(n=[n]),zn(e,t,n))}const Fr=Symbol(""),Ur=()=>{{const e=le(Fr);return e}};function Vr(){return void 0}function jr(e,t,n,r){const i=n[r];if(i&&Br(i,e))return i;const s=t();return s.memo=e.slice(),n[r]=s}function Br(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if((0,i.aU)(n[r],t[r]))return!1;return Dn>0&&Rn&&Rn.push(e),!0}const $r="3.2.45",qr={createComponentInstance:sr,setupComponent:pr,renderComponentRoot:H,setCurrentRenderingInstance:V,isVNode:Un,normalizeVNode:Yn},Hr=qr,zr=null,Kr=null},9242:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return i.P$},Comment:function(){return i.sv},EffectScope:function(){return i.Bj},Fragment:function(){return i.HY},KeepAlive:function(){return i.Ob},ReactiveEffect:function(){return i.qq},Static:function(){return i.qG},Suspense:function(){return i.n4},Teleport:function(){return i.lR},Text:function(){return i.xv},Transition:function(){return q},TransitionGroup:function(){return ue},VueElement:function(){return M},callWithAsyncErrorHandling:function(){return i.$d},callWithErrorHandling:function(){return i.KU},camelize:function(){return i._A},capitalize:function(){return i.kC},cloneVNode:function(){return i.Ho},compatUtils:function(){return i.ry},computed:function(){return i.Fl},createApp:function(){return He},createBlock:function(){return i.j4},createCommentVNode:function(){return i.kq},createElementBlock:function(){return i.iD},createElementVNode:function(){return i._},createHydrationRenderer:function(){return i.Eo},createPropsRestProxy:function(){return i.p1},createRenderer:function(){return i.Us},createSSRApp:function(){return ze},createSlots:function(){return i.Nv},createStaticVNode:function(){return i.uE},createTextVNode:function(){return i.Uk},createVNode:function(){return i.Wm},customRef:function(){return i.ZM},defineAsyncComponent:function(){return i.RC},defineComponent:function(){return i.aZ},defineCustomElement:function(){return D},defineEmits:function(){return i.Bz},defineExpose:function(){return i.WY},defineProps:function(){return i.MW},defineSSRCustomElement:function(){return L},devtools:function(){return i.mW},effect:function(){return i.cE},effectScope:function(){return i.B},getCurrentInstance:function(){return i.FN},getCurrentScope:function(){return i.nZ},getTransitionRawChildren:function(){return i.Q6},guardReactiveProps:function(){return i.F4},h:function(){return i.h},handleError:function(){return i.S3},hydrate:function(){return qe},initCustomFormatter:function(){return i.Mr},initDirectivesForSSR:function(){return We},inject:function(){return i.f3},isMemoSame:function(){return i.nQ},isProxy:function(){return i.X3},isReactive:function(){return i.PG},isReadonly:function(){return i.$y},isRef:function(){return i.dq},isRuntimeOnly:function(){return i.of},isShallow:function(){return i.yT},isVNode:function(){return i.lA},markRaw:function(){return i.Xl},mergeDefaults:function(){return i.u_},mergeProps:function(){return i.dG},nextTick:function(){return i.Y3},normalizeClass:function(){return i.C_},normalizeProps:function(){return i.vs},normalizeStyle:function(){return i.j5},onActivated:function(){return i.dl},onBeforeMount:function(){return i.wF},onBeforeUnmount:function(){return i.Jd},onBeforeUpdate:function(){return i.Xn},onDeactivated:function(){return i.se},onErrorCaptured:function(){return i.d1},onMounted:function(){return i.bv},onRenderTracked:function(){return i.bT},onRenderTriggered:function(){return i.Yq},onScopeDispose:function(){return i.EB},onServerPrefetch:function(){return i.vl},onUnmounted:function(){return i.Ah},onUpdated:function(){return i.ic},openBlock:function(){return i.wg},popScopeId:function(){return i.Cn},provide:function(){return i.JJ},proxyRefs:function(){return i.WL},pushScopeId:function(){return i.dD},queuePostFlushCb:function(){return i.qb},reactive:function(){return i.qj},readonly:function(){return i.OT},ref:function(){return i.iH},registerRuntimeCompiler:function(){return i.Y1},render:function(){return $e},renderList:function(){return i.Ko},renderSlot:function(){return i.WI},resolveComponent:function(){return i.up},resolveDirective:function(){return i.Q2},resolveDynamicComponent:function(){return i.LL},resolveFilter:function(){return i.eq},resolveTransitionHooks:function(){return i.U2},setBlockTracking:function(){return i.qZ},setDevtoolsHook:function(){return i.ec},setTransitionHooks:function(){return i.nK},shallowReactive:function(){return i.Um},shallowReadonly:function(){return i.YS},shallowRef:function(){return i.XI},ssrContextKey:function(){return i.Uc},ssrUtils:function(){return i.G},stop:function(){return i.sT},toDisplayString:function(){return i.zw},toHandlerKey:function(){return i.hR},toHandlers:function(){return i.mx},toRaw:function(){return i.IU},toRef:function(){return i.Vh},toRefs:function(){return i.BK},transformVNodeArgs:function(){return i.C3},triggerRef:function(){return i.oR},unref:function(){return i.SU},useAttrs:function(){return i.l1},useCssModule:function(){return F},useCssVars:function(){return U},useSSRContext:function(){return i.Zq},useSlots:function(){return i.Rr},useTransitionState:function(){return i.Y8},vModelCheckbox:function(){return ve},vModelDynamic:function(){return Ie},vModelRadio:function(){return we},vModelSelect:function(){return _e},vModelText:function(){return ye},vShow:function(){return Le},version:function(){return i.i8},warn:function(){return i.ZK},watch:function(){return i.YP},watchEffect:function(){return i.m0},watchPostEffect:function(){return i.Rh},watchSyncEffect:function(){return i.yX},withAsyncContext:function(){return i.mv},withCtx:function(){return i.w5},withDefaults:function(){return i.b9},withDirectives:function(){return i.wy},withKeys:function(){return De},withMemo:function(){return i.MX},withModifiers:function(){return xe},withScopeId:function(){return i.HX}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const y="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(y,t.slice(6,t.length)):e.setAttributeNS(y,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function b(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=S(t);if(r){const o=s[t]=A(r,i);w(e,n,o,a)}else o&&(_(e,n,o,a),s[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function S(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let I=0;const k=Promise.resolve(),C=()=>I||(k.then((()=>I=0)),I=Date.now());function A(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(R(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function R(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,x=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,i,s))?b(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function O(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}function D(e,t){const n=(0,i.aZ)(e);class r extends M{constructor(e){super(n,e,t)}}return r.def=n,r}const L=e=>D(e,qe),P="undefined"!==typeof HTMLElement?HTMLElement:class{};class M extends P{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,(0,i.Y3)((()=>{this._connected||($e(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})).observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:i}=e;let s;if(n&&!(0,r.kJ)(n))for(const o in n){const e=n[o];(e===Number||e&&e.type===Number)&&(o in this._props&&(this._props[o]=(0,r.He)(this._props[o])),(s||(s=Object.create(null)))[(0,r._A)(o)]=!0)}this._numberProps=s,t&&this._resolveProps(e),this._applyStyles(i),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=(0,r.kJ)(t)?t:Object.keys(t||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r],!0,!1);for(const i of n.map(r._A))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(e){this._setProp(i,e)}})}_setAttr(e){let t=this.getAttribute(e);const n=(0,r._A)(e);this._numberProps&&this._numberProps[n]&&(t=(0,r.He)(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,i=!0){t!==this._props[e]&&(this._props[e]=t,i&&this._instance&&this._update(),n&&(!0===t?this.setAttribute((0,r.rs)(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute((0,r.rs)(e),t+""):t||this.removeAttribute((0,r.rs)(e))))}_update(){$e(this._createVNode(),this.shadowRoot)}_createVNode(){const e=(0,i.Wm)(this._def,(0,r.l7)({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),(0,r.rs)(e)!==e&&t((0,r.rs)(e),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof M){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function F(e="$style"){{const t=(0,i.FN)();if(!t)return r.kT;const n=t.type.__cssModules;if(!n)return r.kT;const s=n[e];return s||r.kT}}function U(e){const t=(0,i.FN)();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>j(e,n)))},r=()=>{const r=e(t.proxy);V(t.subTree,r),n(r)};(0,i.Rh)(r),(0,i.bv)((()=>{const e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),(0,i.Ah)((()=>e.disconnect()))}))}function V(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{V(n.activeBranch,t)}))}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)j(e.el,t);else if(e.type===i.HY)e.children.forEach((e=>V(e,t)));else if(e.type===i.qG){let{el:n,anchor:r}=e;while(n){if(j(n,t),n===r)break;n=n.nextSibling}}}function j(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const B="transition",$="animation",q=(e,{slots:t})=>(0,i.h)(i.P$,W(e),t);q.displayName="Transition";const H={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},z=q.props=(0,r.l7)({},i.P$.props,H),K=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},G=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function W(e){const t={};for(const r in e)r in H||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=J(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:S=b,onAppearCancelled:I=w}=t,k=(e,t,n)=>{Y(e,t?h:c),Y(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,Y(e,d),Y(e,p),Y(e,f),t&&t()},A=e=>(t,n)=>{const r=e?S:b,s=()=>k(t,e,n);K(r,[t,s]),Z((()=>{Y(t,e?u:o),Q(t,e?h:c),G(r)||te(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){K(v,[e]),Q(e,o),Q(e,a)},onBeforeAppear(e){K(T,[e]),Q(e,u),Q(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);Q(e,d),se(),Q(e,f),Z((()=>{e._isLeaving&&(Y(e,d),Q(e,p),G(_)||te(e,i,y,n))})),K(_,[e,n])},onEnterCancelled(e){k(e,!1),K(w,[e])},onAppearCancelled(e){k(e,!0),K(I,[e])},onLeaveCancelled(e){C(e),K(E,[e])}})}function J(e){if(null==e)return null;if((0,r.Kn)(e))return[X(e.enter),X(e.leave)];{const t=X(e);return[t,t]}}function X(e){const t=(0,r.He)(e);return t}function Q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let ee=0;function te(e,t,n,r){const i=e._endId=++ee,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ne(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function ne(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${B}Delay`),s=r(`${B}Duration`),o=re(i,s),a=r(`${$}Delay`),c=r(`${$}Duration`),u=re(a,c);let l=null,h=0,d=0;t===B?o>0&&(l=B,h=o,d=s.length):t===$?u>0&&(l=$,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?B:$:null,d=l?l===B?s.length:c.length:0);const f=l===B&&/\b(transform|all)(,|$)/.test(r(`${B}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function re(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>ie(t)+ie(e[n]))))}function ie(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function se(){return document.body.offsetHeight}const oe=new WeakMap,ae=new WeakMap,ce={name:"TransitionGroup",props:(0,r.l7)({},z,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(o[0].el,n.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(de);se(),r.forEach((e=>{const n=e.el,r=n.style;Q(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,Y(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=W(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),oe.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}},ue=ce;function le(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function he(e){ae.set(e,e.el.getBoundingClientRect())}function de(e){const t=oe.get(e),n=ae.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function fe(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=ne(r);return i.removeChild(r),s}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function me(e){e.target.composing=!0}function ge(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ye={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=pe(s);const o=i||s.props&&"number"===s.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.He)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",me),w(e,"compositionend",ge),w(e,"change",ge))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=pe(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ve={deep:!0,created(e,t,n){e._assign=pe(n),w(e,"change",(()=>{const t=e._modelValue,n=Te(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(Se(e,i))}))},mounted:be,beforeUpdate(e,t,n){e._assign=pe(n),be(e,t,n)}};function be(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,Se(e,!0)))}const we={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=pe(n),w(e,"change",(()=>{e._assign(Te(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=pe(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},_e={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);w(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(Te(e)):Te(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=pe(i)},mounted(e,{value:t}){Ee(e,t)},beforeUpdate(e,t,n){e._assign=pe(n)},updated(e,{value:t}){Ee(e,t)}};function Ee(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=Te(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(Te(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Te(e){return"_value"in e?e._value:e.value}function Se(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ie={created(e,t,n){Ce(e,t,n,null,"created")},mounted(e,t,n){Ce(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Ce(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Ce(e,t,n,r,"updated")}};function ke(e,t){switch(e){case"SELECT":return _e;case"TEXTAREA":return ye;default:switch(t){case"checkbox":return ve;case"radio":return we;default:return ye}}}function Ce(e,t,n,r,i){const s=ke(e.tagName,n.props&&n.props.type),o=s[i];o&&o(e,t,n,r)}function Ae(){ye.getSSRProps=({value:e})=>({value:e}),we.getSSRProps=({value:e},t)=>{if(t.props&&(0,r.WV)(t.props.value,e))return{checked:!0}},ve.getSSRProps=({value:e},t)=>{if((0,r.kJ)(e)){if(t.props&&(0,r.hq)(e,t.props.value)>-1)return{checked:!0}}else if((0,r.DM)(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Ie.getSSRProps=(e,t)=>{if("string"!==typeof t.type)return;const n=ke(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const Re=["ctrl","shift","alt","meta"],Ne={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Re.some((n=>e[`${n}Key`]&&!t.includes(n)))},xe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ne[t[e]];if(r&&r(n,t))return}return e(n,...r)},Oe={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},De=(e,t)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return t.some((e=>e===i||Oe[e]===i))?e(n):void 0},Le={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Pe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Pe(e,!0),r.enter(e)):r.leave(e,(()=>{Pe(e,!1)})):Pe(e,t))},beforeUnmount(e,{value:t}){Pe(e,t)}};function Pe(e,t){e.style.display=t?e._vod:"none"}function Me(){Le.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Fe=(0,r.l7)({patchProp:x},u);let Ue,Ve=!1;function je(){return Ue||(Ue=(0,i.Us)(Fe))}function Be(){return Ue=Ve?Ue:(0,i.Eo)(Fe),Ve=!0,Ue}const $e=(...e)=>{je().render(...e)},qe=(...e)=>{Be().hydrate(...e)},He=(...e)=>{const t=je().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Ke(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t},ze=(...e)=>{const t=Be().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=Ke(e);if(t)return n(t,!0,t instanceof SVGElement)},t};function Ke(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}let Ge=!1;const We=()=>{Ge||(Ge=!0,Ae(),Me())}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return p},DM:function(){return q},E9:function(){return me},F7:function(){return P},Gg:function(){return te},HD:function(){return K},He:function(){return fe},Kn:function(){return W},Kp:function(){return c},NO:function(){return D},Nj:function(){return de},Od:function(){return U},PO:function(){return Z},Pq:function(){return T},RI:function(){return j},S0:function(){return ee},W7:function(){return Y},WB:function(){return _},WV:function(){return k},Z6:function(){return x},_A:function(){return se},_N:function(){return $},aN:function(){return w},aU:function(){return le},dG:function(){return O},e1:function(){return o},eS:function(){return b},fY:function(){return r},hR:function(){return ue},hq:function(){return C},ir:function(){return he},j5:function(){return u},kC:function(){return ce},kJ:function(){return B},kT:function(){return N},l7:function(){return F},m:function(){return i},mf:function(){return z},rs:function(){return ae},tI:function(){return J},tR:function(){return M},vs:function(){return m},wh:function(){return ne},yA:function(){return S},yL:function(){return f},yk:function(){return G},zw:function(){return A}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(s),a=2;function c(e,t=0,n=e.length){let r=e.split(/(\r?\n)/);const i=r.filter(((e,t)=>t%2===1));r=r.filter(((e,t)=>t%2===0));let s=0;const o=[];for(let c=0;c<r.length;c++)if(s+=r[c].length+(i[c]&&i[c].length||0),s>=t){for(let e=c-a;e<=c+a||n>s;e++){if(e<0||e>=r.length)continue;const a=e+1;o.push(`${a}${" ".repeat(Math.max(3-String(a).length,0))}|  ${r[e]}`);const u=r[e].length,l=i[e]&&i[e].length||0;if(e===c){const e=t-(s-(u+l)),r=Math.max(1,n>s?u-e:n-t);o.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>c){if(n>s){const e=Math.max(Math.min(n-s,u),1);o.push("   |  "+"^".repeat(e))}s+=u+l}}break}return o.join("\n")}function u(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=K(r)?f(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return K(e)||W(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:([^]+)/,d=/\/\*.*?\*\//gs;function f(e){const t={};return e.replace(d,"").split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function p(e){let t="";if(K(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=p(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function m(e){if(!e)return null;let{class:t,style:n}=e;return t&&!K(t)&&(e.class=p(t)),n&&(e.style=u(n)),e}const g="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",y="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",b=r(g),w=r(y),_=r(v),E="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T=r(E);function S(e){return!!e||""===e}function I(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=k(e[r],t[r]);return n}function k(e,t){if(e===t)return!0;let n=H(e),r=H(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=G(e),r=G(t),n||r)return e===t;if(n=B(e),r=B(t),n||r)return!(!n||!r)&&I(e,t);if(n=W(e),r=W(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!k(e[n],t[n]))return!1}}return String(e)===String(t)}function C(e,t){return e.findIndex((e=>k(e,t)))}const A=e=>K(e)?e:null==e?"":B(e)||W(e)&&(e.toString===X||!z(e.toString))?JSON.stringify(e,R,2):String(e),R=(e,t)=>t&&t.__v_isRef?R(e,t.value):$(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:q(t)?{[`Set(${t.size})`]:[...t.values()]}:!W(t)||B(t)||Z(t)?t:String(t),N={},x=[],O=()=>{},D=()=>!1,L=/^on[^a-z]/,P=e=>L.test(e),M=e=>e.startsWith("onUpdate:"),F=Object.assign,U=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},V=Object.prototype.hasOwnProperty,j=(e,t)=>V.call(e,t),B=Array.isArray,$=e=>"[object Map]"===Q(e),q=e=>"[object Set]"===Q(e),H=e=>"[object Date]"===Q(e),z=e=>"function"===typeof e,K=e=>"string"===typeof e,G=e=>"symbol"===typeof e,W=e=>null!==e&&"object"===typeof e,J=e=>W(e)&&z(e.then)&&z(e.catch),X=Object.prototype.toString,Q=e=>X.call(e),Y=e=>Q(e).slice(8,-1),Z=e=>"[object Object]"===Q(e),ee=e=>K(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,te=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ne=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),re=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},ie=/-(\w)/g,se=re((e=>e.replace(ie,((e,t)=>t?t.toUpperCase():"")))),oe=/\B([A-Z])/g,ae=re((e=>e.replace(oe,"-$1").toLowerCase())),ce=re((e=>e.charAt(0).toUpperCase()+e.slice(1))),ue=re((e=>e?`on${ce(e)}`:"")),le=(e,t)=>!Object.is(e,t),he=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},de=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},fe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pe;const me=()=>pe||(pe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},525:function(e,t,n){"use strict";n.d(t,{ri:function(){return r.createApp}});var r=n(9242),i=n(3396),s=(n(7658),n(541),n(7139));function o(e){throw e}function a(e){}function c(e,t,n,r){const i=e,s=new SyntaxError(String(i));return s.code=e,s.loc=t,s}const u=Symbol(""),l=Symbol(""),h=Symbol(""),d=Symbol(""),f=Symbol(""),p=Symbol(""),m=Symbol(""),g=Symbol(""),y=Symbol(""),v=Symbol(""),b=Symbol(""),w=Symbol(""),_=Symbol(""),E=Symbol(""),T=Symbol(""),S=Symbol(""),I=Symbol(""),k=Symbol(""),C=Symbol(""),A=Symbol(""),R=Symbol(""),N=Symbol(""),x=Symbol(""),O=Symbol(""),D=Symbol(""),L=Symbol(""),P=Symbol(""),M=Symbol(""),F=Symbol(""),U=Symbol(""),V=Symbol(""),j=Symbol(""),B=Symbol(""),$=Symbol(""),q=Symbol(""),H=Symbol(""),z=Symbol(""),K=Symbol(""),G=Symbol(""),W={[u]:"Fragment",[l]:"Teleport",[h]:"Suspense",[d]:"KeepAlive",[f]:"BaseTransition",[p]:"openBlock",[m]:"createBlock",[g]:"createElementBlock",[y]:"createVNode",[v]:"createElementVNode",[b]:"createCommentVNode",[w]:"createTextVNode",[_]:"createStaticVNode",[E]:"resolveComponent",[T]:"resolveDynamicComponent",[S]:"resolveDirective",[I]:"resolveFilter",[k]:"withDirectives",[C]:"renderList",[A]:"renderSlot",[R]:"createSlots",[N]:"toDisplayString",[x]:"mergeProps",[O]:"normalizeClass",[D]:"normalizeStyle",[L]:"normalizeProps",[P]:"guardReactiveProps",[M]:"toHandlers",[F]:"camelize",[U]:"capitalize",[V]:"toHandlerKey",[j]:"setBlockTracking",[B]:"pushScopeId",[$]:"popScopeId",[q]:"withCtx",[H]:"unref",[z]:"isRef",[K]:"withMemo",[G]:"isMemoSame"};function J(e){Object.getOwnPropertySymbols(e).forEach((t=>{W[t]=e[t]}))}const X={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Q(e,t=X){return{type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}function Y(e,t,n,r,i,s,o,a=!1,c=!1,u=!1,l=X){return e&&(a?(e.helper(p),e.helper(xe(e.inSSR,u))):e.helper(Ne(e.inSSR,u)),o&&e.helper(k)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:s,directives:o,isBlock:a,disableTracking:c,isComponent:u,loc:l}}function Z(e,t=X){return{type:17,loc:t,elements:e}}function ee(e,t=X){return{type:15,loc:t,properties:e}}function te(e,t){return{type:16,loc:X,key:(0,s.HD)(e)?ne(e,!0):e,value:t}}function ne(e,t=!1,n=X,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function re(e,t=X){return{type:8,loc:t,children:e}}function ie(e,t=[],n=X){return{type:14,loc:n,callee:e,arguments:t}}function se(e,t,n=!1,r=!1,i=X){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function oe(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:X}}function ae(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:X}}function ce(e){return{type:21,body:e,loc:X}}const ue=e=>4===e.type&&e.isStatic,le=(e,t)=>e===t||e===(0,s.rs)(t);function he(e){return le(e,"Teleport")?l:le(e,"Suspense")?h:le(e,"KeepAlive")?d:le(e,"BaseTransition")?f:void 0}const de=/^\d|[^\$\w]/,fe=e=>!de.test(e),pe=/[A-Za-z_$\xA0-\uFFFF]/,me=/[\.\?\w$\xA0-\uFFFF]/,ge=/\s+[.[]\s*|\s*[.[]\s+/g,ye=e=>{e=e.trim().replace(ge,(e=>e.trim()));let t=0,n=[],r=0,i=0,s=null;for(let o=0;o<e.length;o++){const a=e.charAt(o);switch(t){case 0:if("["===a)n.push(t),t=1,r++;else if("("===a)n.push(t),t=2,i++;else if(!(0===o?pe:me).test(a))return!1;break;case 1:"'"===a||'"'===a||"`"===a?(n.push(t),t=3,s=a):"["===a?r++:"]"===a&&(--r||(t=n.pop()));break;case 2:if("'"===a||'"'===a||"`"===a)n.push(t),t=3,s=a;else if("("===a)i++;else if(")"===a){if(o===e.length-1)return!1;--i||(t=n.pop())}break;case 3:a===s&&(t=n.pop(),s=null);break}}return!r&&!i},ve=ye;function be(e,t,n){const r=e.source.slice(t,t+n),i={source:r,start:we(e.start,e.source,t),end:e.end};return null!=n&&(i.end=we(e.start,e.source,t+n)),i}function we(e,t,n=t.length){return _e((0,s.l7)({},e),t,n)}function _e(e,t,n=t.length){let r=0,i=-1;for(let s=0;s<n;s++)10===t.charCodeAt(s)&&(r++,i=s);return e.offset+=n,e.line+=r,e.column=-1===i?e.column+n:n-i,e}function Ee(e,t,n=!1){for(let r=0;r<e.props.length;r++){const i=e.props[r];if(7===i.type&&(n||i.exp)&&((0,s.HD)(t)?i.name===t:t.test(i.name)))return i}}function Te(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){const s=e.props[i];if(6===s.type){if(n)continue;if(s.name===t&&(s.value||r))return s}else if("bind"===s.name&&(s.exp||r)&&Se(s.arg,t))return s}}function Se(e,t){return!(!e||!ue(e)||e.content!==t)}function Ie(e){return e.props.some((e=>7===e.type&&"bind"===e.name&&(!e.arg||4!==e.arg.type||!e.arg.isStatic)))}function ke(e){return 5===e.type||2===e.type}function Ce(e){return 7===e.type&&"slot"===e.name}function Ae(e){return 1===e.type&&3===e.tagType}function Re(e){return 1===e.type&&2===e.tagType}function Ne(e,t){return e||t?y:v}function xe(e,t){return e||t?m:g}const Oe=new Set([L,P]);function De(e,t=[]){if(e&&!(0,s.HD)(e)&&14===e.type){const n=e.callee;if(!(0,s.HD)(n)&&Oe.has(n))return De(e.arguments[0],t.concat(e))}return[e,t]}function Le(e,t,n){let r,i,o=13===e.type?e.props:e.arguments[2],a=[];if(o&&!(0,s.HD)(o)&&14===o.type){const e=De(o);o=e[0],a=e[1],i=a[a.length-1]}if(null==o||(0,s.HD)(o))r=ee([t]);else if(14===o.type){const e=o.arguments[0];(0,s.HD)(e)||15!==e.type?o.callee===M?r=ie(n.helper(x),[ee([t]),o]):o.arguments.unshift(ee([t])):Pe(t,e)||e.properties.unshift(t),!r&&(r=o)}else 15===o.type?(Pe(t,o)||o.properties.unshift(t),r=o):(r=ie(n.helper(x),[ee([t]),o]),i&&i.callee===P&&(i=a[a.length-2]));13===e.type?i?i.arguments[0]=r:e.props=r:i?i.arguments[0]=r:e.arguments[2]=r}function Pe(e,t){let n=!1;if(4===e.key.type){const r=e.key.content;n=t.properties.some((e=>4===e.key.type&&e.key.content===r))}return n}function Me(e,t){return`_${t}_${e.replace(/[^\w]/g,((t,n)=>"-"===t?"_":e.charCodeAt(n).toString()))}`}function Fe(e){return 14===e.type&&e.callee===K?e.arguments[1].returns:e}function Ue(e,{helper:t,removeHelper:n,inSSR:r}){e.isBlock||(e.isBlock=!0,n(Ne(r,e.isComponent)),t(p),t(xe(r,e.isComponent)))}function Ve(e,t){const n=t.options?t.options.compatConfig:t.compatConfig,r=n&&n[e];return"MODE"===e?r||3:r}function je(e,t){const n=Ve("MODE",t),r=Ve(e,t);return 3===n?!0===r:!1!==r}function Be(e,t,n,...r){const i=je(e,t);return i}const $e=/&(gt|lt|amp|apos|quot);/g,qe={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},He={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:s.NO,isPreTag:s.NO,isCustomElement:s.NO,decodeEntities:e=>e.replace($e,((e,t)=>qe[t])),onError:o,onWarn:a,comments:!1};function ze(e,t={}){const n=Ke(e,t),r=ct(n);return Q(Ge(n,0,[]),ut(n,r))}function Ke(e,t){const n=(0,s.l7)({},He);let r;for(r in t)n[r]=void 0===t[r]?He[r]:t[r];return{options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function Ge(e,t,n){const r=lt(n),i=r?r.ns:0,o=[];while(!gt(e,t,n)){const a=e.source;let c;if(0===t||1===t)if(!e.inVPre&&ht(a,e.options.delimiters[0]))c=st(e,t);else if(0===t&&"<"===a[0])if(1===a.length)mt(e,5,1);else if("!"===a[1])ht(a,"\x3c!--")?c=Xe(e):ht(a,"<!DOCTYPE")?c=Qe(e):ht(a,"<![CDATA[")?0!==i?c=Je(e,n):(mt(e,1),c=Qe(e)):(mt(e,11),c=Qe(e));else if("/"===a[1])if(2===a.length)mt(e,5,2);else{if(">"===a[2]){mt(e,14,2),dt(e,3);continue}if(/[a-z]/i.test(a[2])){mt(e,23),et(e,1,r);continue}mt(e,12,2),c=Qe(e)}else/[a-z]/i.test(a[1])?(c=Ye(e,n),je("COMPILER_NATIVE_TEMPLATE",e)&&c&&"template"===c.tag&&!c.props.some((e=>7===e.type&&Ze(e.name)))&&(c=c.children)):"?"===a[1]?(mt(e,21,1),c=Qe(e)):mt(e,12,1);if(c||(c=ot(e,t)),(0,s.kJ)(c))for(let e=0;e<c.length;e++)We(o,c[e]);else We(o,c)}let a=!1;if(2!==t&&1!==t){const t="preserve"!==e.options.whitespace;for(let n=0;n<o.length;n++){const r=o[n];if(2===r.type)if(e.inPre)r.content=r.content.replace(/\r\n/g,"\n");else if(/[^\t\r\n\f ]/.test(r.content))t&&(r.content=r.content.replace(/[\t\r\n\f ]+/g," "));else{const e=o[n-1],i=o[n+1];!e||!i||t&&(3===e.type&&3===i.type||3===e.type&&1===i.type||1===e.type&&3===i.type||1===e.type&&1===i.type&&/[\r\n]/.test(r.content))?(a=!0,o[n]=null):r.content=" "}else 3!==r.type||e.options.comments||(a=!0,o[n]=null)}if(e.inPre&&r&&e.options.isPreTag(r.tag)){const e=o[0];e&&2===e.type&&(e.content=e.content.replace(/^\r?\n/,""))}}return a?o.filter(Boolean):o}function We(e,t){if(2===t.type){const n=lt(e);if(n&&2===n.type&&n.loc.end.offset===t.loc.start.offset)return n.content+=t.content,n.loc.end=t.loc.end,void(n.loc.source+=t.loc.source)}e.push(t)}function Je(e,t){dt(e,9);const n=Ge(e,3,t);return 0===e.source.length?mt(e,6):dt(e,3),n}function Xe(e){const t=ct(e);let n;const r=/--(\!)?>/.exec(e.source);if(r){r.index<=3&&mt(e,0),r[1]&&mt(e,10),n=e.source.slice(4,r.index);const t=e.source.slice(0,r.index);let i=1,s=0;while(-1!==(s=t.indexOf("\x3c!--",i)))dt(e,s-i+1),s+4<t.length&&mt(e,16),i=s+1;dt(e,r.index+r[0].length-i+1)}else n=e.source.slice(4),dt(e,e.source.length),mt(e,7);return{type:3,content:n,loc:ut(e,t)}}function Qe(e){const t=ct(e),n="?"===e.source[1]?1:2;let r;const i=e.source.indexOf(">");return-1===i?(r=e.source.slice(n),dt(e,e.source.length)):(r=e.source.slice(n,i),dt(e,i+1)),{type:3,content:r,loc:ut(e,t)}}function Ye(e,t){const n=e.inPre,r=e.inVPre,i=lt(t),s=et(e,0,i),o=e.inPre&&!n,a=e.inVPre&&!r;if(s.isSelfClosing||e.options.isVoidTag(s.tag))return o&&(e.inPre=!1),a&&(e.inVPre=!1),s;t.push(s);const c=e.options.getTextMode(s,i),u=Ge(e,c,t);t.pop();{const t=s.props.find((e=>6===e.type&&"inline-template"===e.name));if(t&&Be("COMPILER_INLINE_TEMPLATE",e,t.loc)){const n=ut(e,s.loc.end);t.value={type:2,content:n.source,loc:n}}}if(s.children=u,yt(e.source,s.tag))et(e,1,i);else if(mt(e,24,0,s.loc.start),0===e.source.length&&"script"===s.tag.toLowerCase()){const t=u[0];t&&ht(t.loc.source,"\x3c!--")&&mt(e,8)}return s.loc=ut(e,s.loc.start),o&&(e.inPre=!1),a&&(e.inVPre=!1),s}const Ze=(0,s.fY)("if,else,else-if,for,slot");function et(e,t,n){const r=ct(e),i=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),o=i[1],a=e.options.getNamespace(o,n);dt(e,i[0].length),ft(e);const c=ct(e),u=e.source;e.options.isPreTag(o)&&(e.inPre=!0);let l=nt(e,t);0===t&&!e.inVPre&&l.some((e=>7===e.type&&"pre"===e.name))&&(e.inVPre=!0,(0,s.l7)(e,c),e.source=u,l=nt(e,t).filter((e=>"v-pre"!==e.name)));let h=!1;if(0===e.source.length?mt(e,9):(h=ht(e.source,"/>"),1===t&&h&&mt(e,4),dt(e,h?2:1)),1===t)return;let d=0;return e.inVPre||("slot"===o?d=2:"template"===o?l.some((e=>7===e.type&&Ze(e.name)))&&(d=3):tt(o,l,e)&&(d=1)),{type:1,ns:a,tag:o,tagType:d,props:l,isSelfClosing:h,children:[],loc:ut(e,r),codegenNode:void 0}}function tt(e,t,n){const r=n.options;if(r.isCustomElement(e))return!1;if("component"===e||/^[A-Z]/.test(e)||he(e)||r.isBuiltInComponent&&r.isBuiltInComponent(e)||r.isNativeTag&&!r.isNativeTag(e))return!0;for(let i=0;i<t.length;i++){const e=t[i];if(6===e.type){if("is"===e.name&&e.value){if(e.value.content.startsWith("vue:"))return!0;if(Be("COMPILER_IS_ON_ELEMENT",n,e.loc))return!0}}else{if("is"===e.name)return!0;if("bind"===e.name&&Se(e.arg,"is")&&Be("COMPILER_IS_ON_ELEMENT",n,e.loc))return!0}}}function nt(e,t){const n=[],r=new Set;while(e.source.length>0&&!ht(e.source,">")&&!ht(e.source,"/>")){if(ht(e.source,"/")){mt(e,22),dt(e,1),ft(e);continue}1===t&&mt(e,3);const i=rt(e,r);6===i.type&&i.value&&"class"===i.name&&(i.value.content=i.value.content.replace(/\s+/g," ").trim()),0===t&&n.push(i),/^[^\t\r\n\f />]/.test(e.source)&&mt(e,15),ft(e)}return n}function rt(e,t){const n=ct(e),r=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source),i=r[0];t.has(i)&&mt(e,2),t.add(i),"="===i[0]&&mt(e,19);{const t=/["'<]/g;let n;while(n=t.exec(i))mt(e,17,n.index)}let s;dt(e,i.length),/^[\t\r\n\f ]*=/.test(e.source)&&(ft(e),dt(e,1),ft(e),s=it(e),s||mt(e,13));const o=ut(e,n);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(i)){const t=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(i);let r,a=ht(i,"."),c=t[1]||(a||ht(i,":")?"bind":ht(i,"@")?"on":"slot");if(t[2]){const s="slot"===c,o=i.lastIndexOf(t[2]),a=ut(e,pt(e,n,o),pt(e,n,o+t[2].length+(s&&t[3]||"").length));let u=t[2],l=!0;u.startsWith("[")?(l=!1,u.endsWith("]")?u=u.slice(1,u.length-1):(mt(e,27),u=u.slice(1))):s&&(u+=t[3]||""),r={type:4,content:u,isStatic:l,constType:l?3:0,loc:a}}if(s&&s.isQuoted){const e=s.loc;e.start.offset++,e.start.column++,e.end=we(e.start,s.content),e.source=e.source.slice(1,-1)}const u=t[3]?t[3].slice(1).split("."):[];return a&&u.push("prop"),"bind"===c&&r&&u.includes("sync")&&Be("COMPILER_V_BIND_SYNC",e,o,r.loc.source)&&(c="model",u.splice(u.indexOf("sync"),1)),{type:7,name:c,exp:s&&{type:4,content:s.content,isStatic:!1,constType:0,loc:s.loc},arg:r,modifiers:u,loc:o}}return!e.inVPre&&ht(i,"v-")&&mt(e,26),{type:6,name:i,value:s&&{type:2,content:s.content,loc:s.loc},loc:o}}function it(e){const t=ct(e);let n;const r=e.source[0],i='"'===r||"'"===r;if(i){dt(e,1);const t=e.source.indexOf(r);-1===t?n=at(e,e.source.length,4):(n=at(e,t,4),dt(e,1))}else{const t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;const r=/["'<=`]/g;let i;while(i=r.exec(t[0]))mt(e,18,i.index);n=at(e,t[0].length,4)}return{content:n,isQuoted:i,loc:ut(e,t)}}function st(e,t){const[n,r]=e.options.delimiters,i=e.source.indexOf(r,n.length);if(-1===i)return void mt(e,25);const s=ct(e);dt(e,n.length);const o=ct(e),a=ct(e),c=i-n.length,u=e.source.slice(0,c),l=at(e,c,t),h=l.trim(),d=l.indexOf(h);d>0&&_e(o,u,d);const f=c-(l.length-h.length-d);return _e(a,u,f),dt(e,r.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:h,loc:ut(e,o,a)},loc:ut(e,s)}}function ot(e,t){const n=3===t?["]]>"]:["<",e.options.delimiters[0]];let r=e.source.length;for(let o=0;o<n.length;o++){const t=e.source.indexOf(n[o],1);-1!==t&&r>t&&(r=t)}const i=ct(e),s=at(e,r,t);return{type:2,content:s,loc:ut(e,i)}}function at(e,t,n){const r=e.source.slice(0,t);return dt(e,t),2!==n&&3!==n&&r.includes("&")?e.options.decodeEntities(r,4===n):r}function ct(e){const{column:t,line:n,offset:r}=e;return{column:t,line:n,offset:r}}function ut(e,t,n){return n=n||ct(e),{start:t,end:n,source:e.originalSource.slice(t.offset,n.offset)}}function lt(e){return e[e.length-1]}function ht(e,t){return e.startsWith(t)}function dt(e,t){const{source:n}=e;_e(e,n,t),e.source=n.slice(t)}function ft(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&dt(e,t[0].length)}function pt(e,t,n){return we(t,e.originalSource.slice(t.offset,n),n)}function mt(e,t,n,r=ct(e)){n&&(r.offset+=n,r.column+=n),e.options.onError(c(t,{start:r,end:r,source:""}))}function gt(e,t,n){const r=e.source;switch(t){case 0:if(ht(r,"</"))for(let e=n.length-1;e>=0;--e)if(yt(r,n[e].tag))return!0;break;case 1:case 2:{const e=lt(n);if(e&&yt(r,e.tag))return!0;break}case 3:if(ht(r,"]]>"))return!0;break}return!r}function yt(e,t){return ht(e,"</")&&e.slice(2,2+t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function vt(e,t){wt(e,t,bt(e,e.children[0]))}function bt(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!Re(t)}function wt(e,t,n=!1){const{children:r}=e,i=r.length;let o=0;for(let s=0;s<r.length;s++){const e=r[s];if(1===e.type&&0===e.tagType){const r=n?0:_t(e,t);if(r>0){if(r>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),o++;continue}}else{const n=e.codegenNode;if(13===n.type){const r=kt(n);if((!r||512===r||1===r)&&St(e,t)>=2){const r=It(e);r&&(n.props=t.hoist(r))}n.dynamicProps&&(n.dynamicProps=t.hoist(n.dynamicProps))}}}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,wt(e,t),n&&t.scopes.vSlot--}else if(11===e.type)wt(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)wt(e.branches[n],t,1===e.branches[n].children.length)}o&&t.transformHoist&&t.transformHoist(r,t,e),o&&o===i&&1===e.type&&0===e.tagType&&e.codegenNode&&13===e.codegenNode.type&&(0,s.kJ)(e.codegenNode.children)&&(e.codegenNode.children=t.hoist(Z(e.codegenNode.children)))}function _t(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const r=n.get(e);if(void 0!==r)return r;const i=e.codegenNode;if(13!==i.type)return 0;if(i.isBlock&&"svg"!==e.tag&&"foreignObject"!==e.tag)return 0;const o=kt(i);if(o)return n.set(e,0),0;{let r=3;const s=St(e,t);if(0===s)return n.set(e,0),0;s<r&&(r=s);for(let i=0;i<e.children.length;i++){const s=_t(e.children[i],t);if(0===s)return n.set(e,0),0;s<r&&(r=s)}if(r>1)for(let i=0;i<e.props.length;i++){const s=e.props[i];if(7===s.type&&"bind"===s.name&&s.exp){const i=_t(s.exp,t);if(0===i)return n.set(e,0),0;i<r&&(r=i)}}if(i.isBlock){for(let t=0;t<e.props.length;t++){const r=e.props[t];if(7===r.type)return n.set(e,0),0}t.removeHelper(p),t.removeHelper(xe(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(Ne(t.inSSR,i.isComponent))}return n.set(e,r),r}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return _t(e.content,t);case 4:return e.constType;case 8:let a=3;for(let n=0;n<e.children.length;n++){const r=e.children[n];if((0,s.HD)(r)||(0,s.yk)(r))continue;const i=_t(r,t);if(0===i)return 0;i<a&&(a=i)}return a;default:return 0}}const Et=new Set([O,D,L,P]);function Tt(e,t){if(14===e.type&&!(0,s.HD)(e.callee)&&Et.has(e.callee)){const n=e.arguments[0];if(4===n.type)return _t(n,t);if(14===n.type)return Tt(n,t)}return 0}function St(e,t){let n=3;const r=It(e);if(r&&15===r.type){const{properties:e}=r;for(let r=0;r<e.length;r++){const{key:i,value:s}=e[r],o=_t(i,t);if(0===o)return o;let a;if(o<n&&(n=o),a=4===s.type?_t(s,t):14===s.type?Tt(s,t):0,0===a)return a;a<n&&(n=a)}}return n}function It(e){const t=e.codegenNode;if(13===t.type)return t.props}function kt(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function Ct(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:r=!1,cacheHandlers:i=!1,nodeTransforms:c=[],directiveTransforms:u={},transformHoist:l=null,isBuiltInComponent:h=s.dG,isCustomElement:d=s.dG,expressionPlugins:f=[],scopeId:p=null,slotted:m=!0,ssr:g=!1,inSSR:y=!1,ssrCssVars:v="",bindingMetadata:b=s.kT,inline:w=!1,isTS:_=!1,onError:E=o,onWarn:T=a,compatConfig:S}){const I=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),k={selfName:I&&(0,s.kC)((0,s._A)(I[1])),prefixIdentifiers:n,hoistStatic:r,cacheHandlers:i,nodeTransforms:c,directiveTransforms:u,transformHoist:l,isBuiltInComponent:h,isCustomElement:d,expressionPlugins:f,scopeId:p,slotted:m,ssr:g,inSSR:y,ssrCssVars:v,bindingMetadata:b,inline:w,isTS:_,onError:E,onWarn:T,compatConfig:S,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){const t=k.helpers.get(e)||0;return k.helpers.set(e,t+1),e},removeHelper(e){const t=k.helpers.get(e);if(t){const n=t-1;n?k.helpers.set(e,n):k.helpers.delete(e)}},helperString(e){return`_${W[k.helper(e)]}`},replaceNode(e){k.parent.children[k.childIndex]=k.currentNode=e},removeNode(e){const t=k.parent.children,n=e?t.indexOf(e):k.currentNode?k.childIndex:-1;e&&e!==k.currentNode?k.childIndex>n&&(k.childIndex--,k.onNodeRemoved()):(k.currentNode=null,k.onNodeRemoved()),k.parent.children.splice(n,1)},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){(0,s.HD)(e)&&(e=ne(e)),k.hoists.push(e);const t=ne(`_hoisted_${k.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache(e,t=!1){return ae(k.cached++,e,t)}};return k.filters=new Set,k}function At(e,t){const n=Ct(e,t);xt(e,n),t.hoistStatic&&vt(e,n),t.ssr||Rt(e,n),e.helpers=[...n.helpers.keys()],e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.filters=[...n.filters]}function Rt(e,t){const{helper:n}=t,{children:r}=e;if(1===r.length){const n=r[0];if(bt(e,n)&&n.codegenNode){const r=n.codegenNode;13===r.type&&Ue(r,t),e.codegenNode=r}else e.codegenNode=n}else if(r.length>1){let r=64;s.m[64];0,e.codegenNode=Y(t,n(u),void 0,e.children,r+"",void 0,void 0,!0,void 0,!1)}}function Nt(e,t){let n=0;const r=()=>{n--};for(;n<e.children.length;n++){const i=e.children[n];(0,s.HD)(i)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=r,xt(i,t))}}function xt(e,t){t.currentNode=e;const{nodeTransforms:n}=t,r=[];for(let o=0;o<n.length;o++){const i=n[o](e,t);if(i&&((0,s.kJ)(i)?r.push(...i):r.push(i)),!t.currentNode)return;e=t.currentNode}switch(e.type){case 3:t.ssr||t.helper(b);break;case 5:t.ssr||t.helper(N);break;case 9:for(let n=0;n<e.branches.length;n++)xt(e.branches[n],t);break;case 10:case 11:case 1:case 0:Nt(e,t);break}t.currentNode=e;let i=r.length;while(i--)r[i]()}function Ot(e,t){const n=(0,s.HD)(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(1===e.type){const{props:i}=e;if(3===e.tagType&&i.some(Ce))return;const s=[];for(let o=0;o<i.length;o++){const a=i[o];if(7===a.type&&n(a.name)){i.splice(o,1),o--;const n=t(e,a,r);n&&s.push(n)}}return s}}}const Dt="/*#__PURE__*/",Lt=e=>`${W[e]}: _${W[e]}`;function Pt(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:r=!1,filename:i="template.vue.html",scopeId:s=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:c="vue",ssrRuntimeModuleName:u="vue/server-renderer",ssr:l=!1,isTS:h=!1,inSSR:d=!1}){const f={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:s,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:c,ssrRuntimeModuleName:u,ssr:l,isTS:h,inSSR:d,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${W[e]}`},push(e,t){f.code+=e},indent(){p(++f.indentLevel)},deindent(e=!1){e?--f.indentLevel:p(--f.indentLevel)},newline(){p(f.indentLevel)}};function p(e){f.push("\n"+"  ".repeat(e))}return f}function Mt(e,t={}){const n=Pt(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:r,push:i,prefixIdentifiers:s,indent:o,deindent:a,newline:c,scopeId:u,ssr:l}=n,h=e.helpers.length>0,d=!s&&"module"!==r,f=n;Ft(e,f);const p=l?"ssrRender":"render",m=l?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"],g=m.join(", ");if(i(`function ${p}(${g}) {`),o(),d&&(i("with (_ctx) {"),o(),h&&(i(`const { ${e.helpers.map(Lt).join(", ")} } = _Vue`),i("\n"),c())),e.components.length&&(Ut(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Ut(e.directives,"directive",n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),Ut(e.filters,"filter",n),c()),e.temps>0){i("let ");for(let t=0;t<e.temps;t++)i(`${t>0?", ":""}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i("\n"),c()),l||i("return "),e.codegenNode?$t(e.codegenNode,n):i("null"),d&&(a(),i("}")),a(),i("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function Ft(e,t){const{ssr:n,prefixIdentifiers:r,push:i,newline:s,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:c}=t,u=a;if(e.helpers.length>0&&(i(`const _Vue = ${u}\n`),e.hoists.length)){const t=[y,v,b,w,_].filter((t=>e.helpers.includes(t))).map(Lt).join(", ");i(`const { ${t} } = _Vue\n`)}Vt(e.hoists,t),s(),i("return ")}function Ut(e,t,{helper:n,push:r,newline:i,isTS:s}){const o=n("filter"===t?I:"component"===t?E:S);for(let a=0;a<e.length;a++){let n=e[a];const c=n.endsWith("__self");c&&(n=n.slice(0,-6)),r(`const ${Me(n,t)} = ${o}(${JSON.stringify(n)}${c?", true":""})${s?"!":""}`),a<e.length-1&&i()}}function Vt(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:r,helper:i,scopeId:s,mode:o}=t;r();for(let a=0;a<e.length;a++){const i=e[a];i&&(n(`const _hoisted_${a+1} = `),$t(i,t),r())}t.pure=!1}function jt(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),Bt(e,t,n),n&&t.deindent(),t.push("]")}function Bt(e,t,n=!1,r=!0){const{push:i,newline:o}=t;for(let a=0;a<e.length;a++){const c=e[a];(0,s.HD)(c)?i(c):(0,s.kJ)(c)?jt(c,t):$t(c,t),a<e.length-1&&(n?(r&&i(","),o()):r&&i(", "))}}function $t(e,t){if((0,s.HD)(e))t.push(e);else if((0,s.yk)(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:$t(e.codegenNode,t);break;case 2:qt(e,t);break;case 4:Ht(e,t);break;case 5:zt(e,t);break;case 12:$t(e.codegenNode,t);break;case 8:Kt(e,t);break;case 3:Wt(e,t);break;case 13:Jt(e,t);break;case 14:Qt(e,t);break;case 15:Yt(e,t);break;case 17:Zt(e,t);break;case 18:en(e,t);break;case 19:tn(e,t);break;case 20:nn(e,t);break;case 21:Bt(e.body,t,!0,!1);break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:0}}function qt(e,t){t.push(JSON.stringify(e.content),e)}function Ht(e,t){const{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,e)}function zt(e,t){const{push:n,helper:r,pure:i}=t;i&&n(Dt),n(`${r(N)}(`),$t(e.content,t),n(")")}function Kt(e,t){for(let n=0;n<e.children.length;n++){const r=e.children[n];(0,s.HD)(r)?t.push(r):$t(r,t)}}function Gt(e,t){const{push:n}=t;if(8===e.type)n("["),Kt(e,t),n("]");else if(e.isStatic){const t=fe(e.content)?e.content:JSON.stringify(e.content);n(t,e)}else n(`[${e.content}]`,e)}function Wt(e,t){const{push:n,helper:r,pure:i}=t;i&&n(Dt),n(`${r(b)}(${JSON.stringify(e.content)})`,e)}function Jt(e,t){const{push:n,helper:r,pure:i}=t,{tag:s,props:o,children:a,patchFlag:c,dynamicProps:u,directives:l,isBlock:h,disableTracking:d,isComponent:f}=e;l&&n(r(k)+"("),h&&n(`(${r(p)}(${d?"true":""}), `),i&&n(Dt);const m=h?xe(t.inSSR,f):Ne(t.inSSR,f);n(r(m)+"(",e),Bt(Xt([s,o,a,c,u]),t),n(")"),h&&n(")"),l&&(n(", "),$t(l,t),n(")"))}function Xt(e){let t=e.length;while(t--)if(null!=e[t])break;return e.slice(0,t+1).map((e=>e||"null"))}function Qt(e,t){const{push:n,helper:r,pure:i}=t,o=(0,s.HD)(e.callee)?e.callee:r(e.callee);i&&n(Dt),n(o+"(",e),Bt(e.arguments,t),n(")")}function Yt(e,t){const{push:n,indent:r,deindent:i,newline:s}=t,{properties:o}=e;if(!o.length)return void n("{}",e);const a=o.length>1||!1;n(a?"{":"{ "),a&&r();for(let c=0;c<o.length;c++){const{key:e,value:r}=o[c];Gt(e,t),n(": "),$t(r,t),c<o.length-1&&(n(","),s())}a&&i(),n(a?"}":" }")}function Zt(e,t){jt(e.elements,t)}function en(e,t){const{push:n,indent:r,deindent:i}=t,{params:o,returns:a,body:c,newline:u,isSlot:l}=e;l&&n(`_${W[q]}(`),n("(",e),(0,s.kJ)(o)?Bt(o,t):o&&$t(o,t),n(") => "),(u||c)&&(n("{"),r()),a?(u&&n("return "),(0,s.kJ)(a)?jt(a,t):$t(a,t)):c&&$t(c,t),(u||c)&&(i(),n("}")),l&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function tn(e,t){const{test:n,consequent:r,alternate:i,newline:s}=e,{push:o,indent:a,deindent:c,newline:u}=t;if(4===n.type){const e=!fe(n.content);e&&o("("),Ht(n,t),e&&o(")")}else o("("),$t(n,t),o(")");s&&a(),t.indentLevel++,s||o(" "),o("? "),$t(r,t),t.indentLevel--,s&&u(),s||o(" "),o(": ");const l=19===i.type;l||t.indentLevel++,$t(i,t),l||t.indentLevel--,s&&c(!0)}function nn(e,t){const{push:n,helper:r,indent:i,deindent:s,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(i(),n(`${r(j)}(-1),`),o()),n(`_cache[${e.index}] = `),$t(e.value,t),e.isVNode&&(n(","),o(),n(`${r(j)}(1),`),o(),n(`_cache[${e.index}]`),s()),n(")")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const rn=Ot(/^(if|else|else-if)$/,((e,t,n)=>sn(e,t,n,((e,t,r)=>{const i=n.parent.children;let s=i.indexOf(e),o=0;while(s-- >=0){const e=i[s];e&&9===e.type&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=an(t,o,n);else{const r=un(e.codegenNode);r.alternate=an(t,o+e.branches.length-1,n)}}}))));function sn(e,t,n,r){if("else"!==t.name&&(!t.exp||!t.exp.content.trim())){const r=t.exp?t.exp.loc:e.loc;n.onError(c(28,t.loc)),t.exp=ne("true",!1,r)}if("if"===t.name){const i=on(e,t),s={type:9,loc:e.loc,branches:[i]};if(n.replaceNode(s),r)return r(s,i,!0)}else{const i=n.parent.children;let s=i.indexOf(e);while(s-- >=-1){const o=i[s];if(o&&3===o.type)n.removeNode(o);else{if(!o||2!==o.type||o.content.trim().length){if(o&&9===o.type){"else-if"===t.name&&void 0===o.branches[o.branches.length-1].condition&&n.onError(c(30,e.loc)),n.removeNode();const i=on(e,t);0,o.branches.push(i);const s=r&&r(o,i,!1);xt(i,n),s&&s(),n.currentNode=null}else n.onError(c(30,e.loc));break}n.removeNode(o)}}}}function on(e,t){const n=3===e.tagType;return{type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:n&&!Ee(e,"for")?e.children:[e],userKey:Te(e,"key"),isTemplateIf:n}}function an(e,t,n){return e.condition?oe(e.condition,cn(e,t,n),ie(n.helper(b),['""',"true"])):cn(e,t,n)}function cn(e,t,n){const{helper:r}=n,i=te("key",ne(`${t}`,!1,X,2)),{children:o}=e,a=o[0],c=1!==o.length||1!==a.type;if(c){if(1===o.length&&11===a.type){const e=a.codegenNode;return Le(e,i,n),e}{let t=64;s.m[64];return Y(n,r(u),ee([i]),o,t+"",void 0,void 0,!0,!1,!1,e.loc)}}{const e=a.codegenNode,t=Fe(e);return 13===t.type&&Ue(t,n),Le(t,i,n),e}}function un(e){while(1)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate}else 20===e.type&&(e=e.value)}const ln=Ot("for",((e,t,n)=>{const{helper:r,removeHelper:i}=n;return hn(e,t,n,(t=>{const s=ie(r(C),[t.source]),o=Ae(e),a=Ee(e,"memo"),c=Te(e,"key"),l=c&&(6===c.type?ne(c.value.content,!0):c.exp),h=c?te("key",l):null,d=4===t.source.type&&t.source.constType>0,f=d?64:c?128:256;return t.codegenNode=Y(n,r(u),void 0,s,f+"",void 0,void 0,!0,!d,!1,e.loc),()=>{let c;const{children:f}=t;const m=1!==f.length||1!==f[0].type,g=Re(e)?e:o&&1===e.children.length&&Re(e.children[0])?e.children[0]:null;if(g?(c=g.codegenNode,o&&h&&Le(c,h,n)):m?c=Y(n,r(u),h?ee([h]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1):(c=f[0].codegenNode,o&&h&&Le(c,h,n),c.isBlock!==!d&&(c.isBlock?(i(p),i(xe(n.inSSR,c.isComponent))):i(Ne(n.inSSR,c.isComponent))),c.isBlock=!d,c.isBlock?(r(p),r(xe(n.inSSR,c.isComponent))):r(Ne(n.inSSR,c.isComponent))),a){const e=se(yn(t.parseResult,[ne("_cached")]));e.body=ce([re(["const _memo = (",a.exp,")"]),re(["if (_cached",...l?[" && _cached.key === ",l]:[],` && ${n.helperString(G)}(_cached, _memo)) return _cached`]),re(["const _item = ",c]),ne("_item.memo = _memo"),ne("return _item")]),s.arguments.push(e,ne("_cache"),ne(String(n.cached++)))}else s.arguments.push(se(yn(t.parseResult),c,!0))}}))}));function hn(e,t,n,r){if(!t.exp)return void n.onError(c(31,t.loc));const i=mn(t.exp,n);if(!i)return void n.onError(c(32,t.loc));const{addIdentifiers:s,removeIdentifiers:o,scopes:a}=n,{source:u,value:l,key:h,index:d}=i,f={type:11,loc:t.loc,source:u,valueAlias:l,keyAlias:h,objectIndexAlias:d,parseResult:i,children:Ae(e)?e.children:[e]};n.replaceNode(f),a.vFor++;const p=r&&r(f);return()=>{a.vFor--,p&&p()}}const dn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,fn=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,pn=/^\(|\)$/g;function mn(e,t){const n=e.loc,r=e.content,i=r.match(dn);if(!i)return;const[,s,o]=i,a={source:gn(n,o.trim(),r.indexOf(o,s.length)),value:void 0,key:void 0,index:void 0};let c=s.trim().replace(pn,"").trim();const u=s.indexOf(c),l=c.match(fn);if(l){c=c.replace(fn,"").trim();const e=l[1].trim();let t;if(e&&(t=r.indexOf(e,u+c.length),a.key=gn(n,e,t)),l[2]){const i=l[2].trim();i&&(a.index=gn(n,i,r.indexOf(i,a.key?t+e.length:u+c.length)))}}return c&&(a.value=gn(n,c,u)),a}function gn(e,t,n){return ne(t,!1,be(e,n,t.length))}function yn({value:e,key:t,index:n},r=[]){return vn([e,t,n,...r])}function vn(e){let t=e.length;while(t--)if(e[t])break;return e.slice(0,t+1).map(((e,t)=>e||ne("_".repeat(t+1),!1)))}const bn=ne("undefined",!1),wn=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=Ee(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},_n=(e,t,n)=>se(e,t,!1,!0,t.length?t[0].loc:n);function En(e,t,n=_n){t.helper(q);const{children:r,loc:i}=e,s=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const u=Ee(e,"slot",!0);if(u){const{arg:e,exp:t}=u;e&&!ue(e)&&(a=!0),s.push(te(e||ne("default",!0),n(t,r,i)))}let l=!1,h=!1;const d=[],f=new Set;let p=0;for(let y=0;y<r.length;y++){const e=r[y];let i;if(!Ae(e)||!(i=Ee(e,"slot",!0))){3!==e.type&&d.push(e);continue}if(u){t.onError(c(37,i.loc));break}l=!0;const{children:m,loc:g}=e,{arg:v=ne("default",!0),exp:b,loc:w}=i;let _;ue(v)?_=v?v.content:"default":a=!0;const E=n(b,m,g);let T,S,I;if(T=Ee(e,"if"))a=!0,o.push(oe(T.exp,Tn(v,E,p++),bn));else if(S=Ee(e,/^else(-if)?$/,!0)){let e,n=y;while(n--)if(e=r[n],3!==e.type)break;if(e&&Ae(e)&&Ee(e,"if")){r.splice(y,1),y--;let e=o[o.length-1];while(19===e.alternate.type)e=e.alternate;e.alternate=S.exp?oe(S.exp,Tn(v,E,p++),bn):Tn(v,E,p++)}else t.onError(c(30,S.loc))}else if(I=Ee(e,"for")){a=!0;const e=I.parseResult||mn(I.exp,t);e?o.push(ie(t.helper(C),[e.source,se(yn(e),Tn(v,E),!0)])):t.onError(c(32,I.loc))}else{if(_){if(f.has(_)){t.onError(c(38,w));continue}f.add(_),"default"===_&&(h=!0)}s.push(te(v,E))}}if(!u){const e=(e,r)=>{const s=n(e,r,i);return t.compatConfig&&(s.isNonScopedSlot=!0),te("default",s)};l?d.length&&d.some((e=>In(e)))&&(h?t.onError(c(39,d[0].loc)):s.push(e(void 0,d))):s.push(e(void 0,r))}const m=a?2:Sn(e.children)?3:1;let g=ee(s.concat(te("_",ne(m+"",!1))),i);return o.length&&(g=ie(t.helper(R),[g,Z(o)])),{slots:g,hasDynamicSlots:a}}function Tn(e,t,n){const r=[te("name",e),te("fn",t)];return null!=n&&r.push(te("key",ne(String(n),!0))),ee(r)}function Sn(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||Sn(n.children))return!0;break;case 9:if(Sn(n.branches))return!0;break;case 10:case 11:if(Sn(n.children))return!0;break}}return!1}function In(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():In(e.content))}const kn=new WeakMap,Cn=(e,t)=>function(){if(e=t.currentNode,1!==e.type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:r}=e,i=1===e.tagType;let o=i?An(e,t):`"${n}"`;const a=(0,s.Kn)(o)&&o.callee===T;let c,u,f,p,m,g,y=0,v=a||o===l||o===h||!i&&("svg"===n||"foreignObject"===n);if(r.length>0){const n=Rn(e,t,void 0,i,a);c=n.props,y=n.patchFlag,m=n.dynamicPropNames;const r=n.directives;g=r&&r.length?Z(r.map((e=>On(e,t)))):void 0,n.shouldUseBlock&&(v=!0)}if(e.children.length>0){o===d&&(v=!0,y|=1024);const n=i&&o!==l&&o!==d;if(n){const{slots:n,hasDynamicSlots:r}=En(e,t);u=n,r&&(y|=1024)}else if(1===e.children.length&&o!==l){const n=e.children[0],r=n.type,i=5===r||8===r;i&&0===_t(n,t)&&(y|=1),u=i||2===r?n:e.children}else u=e.children}0!==y&&(f=String(y),m&&m.length&&(p=Dn(m))),e.codegenNode=Y(t,o,c,u,f,p,g,!!v,!1,i,e.loc)};function An(e,t,n=!1){let{tag:r}=e;const i=Ln(r),s=Te(e,"is");if(s)if(i||je("COMPILER_IS_ON_ELEMENT",t)){const e=6===s.type?s.value&&ne(s.value.content,!0):s.exp;if(e)return ie(t.helper(T),[e])}else 6===s.type&&s.value.content.startsWith("vue:")&&(r=s.value.content.slice(4));const o=!i&&Ee(e,"is");if(o&&o.exp)return ie(t.helper(T),[o.exp]);const a=he(r)||t.isBuiltInComponent(r);return a?(n||t.helper(a),a):(t.helper(E),t.components.add(r),Me(r,"component"))}function Rn(e,t,n=e.props,r,i,o=!1){const{tag:a,loc:u,children:l}=e;let h=[];const d=[],f=[],p=l.length>0;let m=!1,g=0,y=!1,v=!1,b=!1,w=!1,_=!1,E=!1;const T=[],S=e=>{h.length&&(d.push(ee(Nn(h),u)),h=[]),e&&d.push(e)},I=({key:e,value:n})=>{if(ue(e)){const o=e.content,a=(0,s.F7)(o);if(!a||r&&!i||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||(0,s.Gg)(o)||(w=!0),a&&(0,s.Gg)(o)&&(E=!0),20===n.type||(4===n.type||8===n.type)&&_t(n,t)>0)return;"ref"===o?y=!0:"class"===o?v=!0:"style"===o?b=!0:"key"===o||T.includes(o)||T.push(o),!r||"class"!==o&&"style"!==o||T.includes(o)||T.push(o)}else _=!0};for(let C=0;C<n.length;C++){const i=n[C];if(6===i.type){const{loc:e,name:n,value:r}=i;let s=!0;if("ref"===n&&(y=!0,t.scopes.vFor>0&&h.push(te(ne("ref_for",!0),ne("true")))),"is"===n&&(Ln(a)||r&&r.content.startsWith("vue:")||je("COMPILER_IS_ON_ELEMENT",t)))continue;h.push(te(ne(n,!0,be(e,0,n.length)),ne(r?r.content:"",s,r?r.loc:e)))}else{const{name:n,arg:l,exp:g,loc:y}=i,v="bind"===n,b="on"===n;if("slot"===n){r||t.onError(c(40,y));continue}if("once"===n||"memo"===n)continue;if("is"===n||v&&Se(l,"is")&&(Ln(a)||je("COMPILER_IS_ON_ELEMENT",t)))continue;if(b&&o)continue;if((v&&Se(l,"key")||b&&p&&Se(l,"vue:before-update"))&&(m=!0),v&&Se(l,"ref")&&t.scopes.vFor>0&&h.push(te(ne("ref_for",!0),ne("true"))),!l&&(v||b)){if(_=!0,g)if(v){if(S(),je("COMPILER_V_BIND_OBJECT_ORDER",t)){d.unshift(g);continue}d.push(g)}else S({type:14,loc:y,callee:t.helper(M),arguments:r?[g]:[g,"true"]});else t.onError(c(v?34:35,y));continue}const w=t.directiveTransforms[n];if(w){const{props:n,needRuntime:r}=w(i,e,t);!o&&n.forEach(I),b&&l&&!ue(l)?S(ee(n,u)):h.push(...n),r&&(f.push(i),(0,s.yk)(r)&&kn.set(i,r))}else(0,s.wh)(n)||(f.push(i),p&&(m=!0))}}let k;if(d.length?(S(),k=d.length>1?ie(t.helper(x),d,u):d[0]):h.length&&(k=ee(Nn(h),u)),_?g|=16:(v&&!r&&(g|=2),b&&!r&&(g|=4),T.length&&(g|=8),w&&(g|=32)),m||0!==g&&32!==g||!(y||E||f.length>0)||(g|=512),!t.inSSR&&k)switch(k.type){case 15:let e=-1,n=-1,r=!1;for(let t=0;t<k.properties.length;t++){const i=k.properties[t].key;ue(i)?"class"===i.content?e=t:"style"===i.content&&(n=t):i.isHandlerKey||(r=!0)}const i=k.properties[e],s=k.properties[n];r?k=ie(t.helper(L),[k]):(i&&!ue(i.value)&&(i.value=ie(t.helper(O),[i.value])),s&&(b||4===s.value.type&&"["===s.value.content.trim()[0]||17===s.value.type)&&(s.value=ie(t.helper(D),[s.value])));break;case 14:break;default:k=ie(t.helper(L),[ie(t.helper(P),[k])]);break}return{props:k,directives:f,patchFlag:g,dynamicPropNames:T,shouldUseBlock:m}}function Nn(e){const t=new Map,n=[];for(let r=0;r<e.length;r++){const i=e[r];if(8===i.key.type||!i.key.isStatic){n.push(i);continue}const o=i.key.content,a=t.get(o);a?("style"===o||"class"===o||(0,s.F7)(o))&&xn(a,i):(t.set(o,i),n.push(i))}return n}function xn(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=Z([e.value,t.value],e.loc)}function On(e,t){const n=[],r=kn.get(e);r?n.push(t.helperString(r)):(t.helper(S),t.directives.add(e.name),n.push(Me(e.name,"directive")));const{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=ne("true",!1,i);n.push(ee(e.modifiers.map((e=>te(e,t))),i))}return Z(n,e.loc)}function Dn(e){let t="[";for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=", ");return t+"]"}function Ln(e){return"component"===e||"Component"===e}const Pn=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Mn=/-(\w)/g,Fn=Pn((e=>e.replace(Mn,((e,t)=>t?t.toUpperCase():"")))),Un=(e,t)=>{if(Re(e)){const{children:n,loc:r}=e,{slotName:i,slotProps:s}=Vn(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let a=2;s&&(o[2]=s,a=3),n.length&&(o[3]=se([],n,!1,!1,r),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=ie(t.helper(A),o,r)}};function Vn(e,t){let n,r='"default"';const i=[];for(let s=0;s<e.props.length;s++){const t=e.props[s];6===t.type?t.value&&("name"===t.name?r=JSON.stringify(t.value.content):(t.name=Fn(t.name),i.push(t))):"bind"===t.name&&Se(t.arg,"name")?t.exp&&(r=t.exp):("bind"===t.name&&t.arg&&ue(t.arg)&&(t.arg.content=Fn(t.arg.content)),i.push(t))}if(i.length>0){const{props:r,directives:s}=Rn(e,t,i,!1,!1);n=r,s.length&&t.onError(c(36,s[0].loc))}return{slotName:r,slotProps:n}}const jn=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Bn=(e,t,n,r)=>{const{loc:i,modifiers:o,arg:a}=e;let u;if(e.exp||o.length||n.onError(c(35,i)),4===a.type)if(a.isStatic){let e=a.content;e.startsWith("vue:")&&(e=`vnode-${e.slice(4)}`);const n=0!==t.tagType||e.startsWith("vnode")||!/[A-Z]/.test(e)?(0,s.hR)((0,s._A)(e)):`on:${e}`;u=ne(n,!0,a.loc)}else u=re([`${n.helperString(V)}(`,a,")"]);else u=a,u.children.unshift(`${n.helperString(V)}(`),u.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let h=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const e=ve(l.content),t=!(e||jn.test(l.content)),n=l.content.includes(";");0,(t||h&&e)&&(l=re([`${t?"$event":"(...args)"} => ${n?"{":"("}`,l,n?"}":")"]))}let d={props:[te(u,l||ne("() => {}",!1,i))]};return r&&(d=r(d)),h&&(d.props[0].value=n.cache(d.props[0].value)),d.props.forEach((e=>e.key.isHandlerKey=!0)),d},$n=(e,t,n)=>{const{exp:r,modifiers:i,loc:o}=e,a=e.arg;return 4!==a.type?(a.children.unshift("("),a.children.push(') || ""')):a.isStatic||(a.content=`${a.content} || ""`),i.includes("camel")&&(4===a.type?a.isStatic?a.content=(0,s._A)(a.content):a.content=`${n.helperString(F)}(${a.content})`:(a.children.unshift(`${n.helperString(F)}(`),a.children.push(")"))),n.inSSR||(i.includes("prop")&&qn(a,"."),i.includes("attr")&&qn(a,"^")),!r||4===r.type&&!r.content.trim()?(n.onError(c(34,o)),{props:[te(a,ne("",!0,o))]}):{props:[te(a,r)]}},qn=(e,t)=>{4===e.type?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Hn=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return()=>{const n=e.children;let r,i=!1;for(let e=0;e<n.length;e++){const t=n[e];if(ke(t)){i=!0;for(let i=e+1;i<n.length;i++){const s=n[i];if(!ke(s)){r=void 0;break}r||(r=n[e]=re([t],t.loc)),r.children.push(" + ",s),n.splice(i,1),i--}}}if(i&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name]))||"template"===e.tag)))for(let e=0;e<n.length;e++){const r=n[e];if(ke(r)||8===r.type){const i=[];2===r.type&&" "===r.content||i.push(r),t.ssr||0!==_t(r,t)||i.push("1"),n[e]={type:12,content:r,loc:r.loc,codegenNode:ie(t.helper(w),i)}}}}},zn=new WeakSet,Kn=(e,t)=>{if(1===e.type&&Ee(e,"once",!0)){if(zn.has(e)||t.inVOnce)return;return zn.add(e),t.inVOnce=!0,t.helper(j),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0))}}},Gn=(e,t,n)=>{const{exp:r,arg:i}=e;if(!r)return n.onError(c(41,e.loc)),Wn();const s=r.loc.source,o=4===r.type?r.content:s,a=n.bindingMetadata[s];if("props"===a||"props-aliased"===a)return n.onError(c(44,r.loc)),Wn();const u=!1;if(!o.trim()||!ve(o)&&!u)return n.onError(c(42,r.loc)),Wn();const l=i||ne("modelValue",!0),h=i?ue(i)?`onUpdate:${i.content}`:re(['"onUpdate:" + ',i]):"onUpdate:modelValue";let d;const f=n.isTS?"($event: any)":"$event";d=re([`${f} => ((`,r,") = $event)"]);const p=[te(l,e.exp),te(h,d)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(fe(e)?e:JSON.stringify(e))+": true")).join(", "),n=i?ue(i)?`${i.content}Modifiers`:re([i,' + "Modifiers"']):"modelModifiers";p.push(te(n,ne(`{ ${t} }`,!1,e.loc,2)))}return Wn(p)};function Wn(e=[]){return{props:e}}const Jn=/[\w).+\-_$\]]/,Xn=(e,t)=>{je("COMPILER_FILTER",t)&&(5===e.type&&Qn(e.content,t),1===e.type&&e.props.forEach((e=>{7===e.type&&"for"!==e.name&&e.exp&&Qn(e.exp,t)})))};function Qn(e,t){if(4===e.type)Yn(e,t);else for(let n=0;n<e.children.length;n++){const r=e.children[n];"object"===typeof r&&(4===r.type?Yn(r,t):8===r.type?Qn(e,t):5===r.type&&Qn(r.content,t))}}function Yn(e,t){const n=e.content;let r,i,s,o,a=!1,c=!1,u=!1,l=!1,h=0,d=0,f=0,p=0,m=[];for(s=0;s<n.length;s++)if(i=r,r=n.charCodeAt(s),a)39===r&&92!==i&&(a=!1);else if(c)34===r&&92!==i&&(c=!1);else if(u)96===r&&92!==i&&(u=!1);else if(l)47===r&&92!==i&&(l=!1);else if(124!==r||124===n.charCodeAt(s+1)||124===n.charCodeAt(s-1)||h||d||f){switch(r){case 34:c=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:f++;break;case 41:f--;break;case 91:d++;break;case 93:d--;break;case 123:h++;break;case 125:h--;break}if(47===r){let e,t=s-1;for(;t>=0;t--)if(e=n.charAt(t)," "!==e)break;e&&Jn.test(e)||(l=!0)}}else void 0===o?(p=s+1,o=n.slice(0,s).trim()):g();function g(){m.push(n.slice(p,s).trim()),p=s+1}if(void 0===o?o=n.slice(0,s).trim():0!==p&&g(),m.length){for(s=0;s<m.length;s++)o=Zn(o,m[s],t);e.content=o}}function Zn(e,t,n){n.helper(I);const r=t.indexOf("(");if(r<0)return n.filters.add(t),`${Me(t,"filter")}(${e})`;{const i=t.slice(0,r),s=t.slice(r+1);return n.filters.add(i),`${Me(i,"filter")}(${e}${")"!==s?","+s:s}`}}const er=new WeakSet,tr=(e,t)=>{if(1===e.type){const n=Ee(e,"memo");if(!n||er.has(e))return;return er.add(e),()=>{const r=e.codegenNode||t.currentNode.codegenNode;r&&13===r.type&&(1!==e.tagType&&Ue(r,t),e.codegenNode=ie(t.helper(K),[n.exp,se(void 0,r),"_cache",String(t.cached++)]))}}};function nr(e){return[[Kn,rn,tr,ln,Xn,Un,Cn,wn,Hn],{on:Bn,bind:$n,model:Gn}]}function rr(e,t={}){const n=t.onError||o,r="module"===t.mode;!0===t.prefixIdentifiers?n(c(47)):r&&n(c(48));const i=!1;t.cacheHandlers&&n(c(49)),t.scopeId&&!r&&n(c(50));const a=(0,s.HD)(e)?ze(e,t):e,[u,l]=nr();return At(a,(0,s.l7)({},t,{prefixIdentifiers:i,nodeTransforms:[...u,...t.nodeTransforms||[]],directiveTransforms:(0,s.l7)({},l,t.directiveTransforms||{})})),Mt(a,(0,s.l7)({},t,{prefixIdentifiers:i}))}const ir=()=>({props:[]}),sr=Symbol(""),or=Symbol(""),ar=Symbol(""),cr=Symbol(""),ur=Symbol(""),lr=Symbol(""),hr=Symbol(""),dr=Symbol(""),fr=Symbol(""),pr=Symbol("");let mr;function gr(e,t=!1){return mr||(mr=document.createElement("div")),t?(mr.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,mr.children[0].getAttribute("foo")):(mr.innerHTML=e,mr.textContent)}J({[sr]:"vModelRadio",[or]:"vModelCheckbox",[ar]:"vModelText",[cr]:"vModelSelect",[ur]:"vModelDynamic",[lr]:"withModifiers",[hr]:"withKeys",[dr]:"vShow",[fr]:"Transition",[pr]:"TransitionGroup"});const yr=(0,s.fY)("style,iframe,script,noscript",!0),vr={isVoidTag:s.WB,isNativeTag:e=>(0,s.eS)(e)||(0,s.aN)(e),isPreTag:e=>"pre"===e,decodeEntities:gr,isBuiltInComponent:e=>le(e,"Transition")?fr:le(e,"TransitionGroup")?pr:void 0,getNamespace(e,t){let n=t?t.ns:0;if(t&&2===n)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(n=0);else t&&1===n&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(n=0));if(0===n){if("svg"===e)return 1;if("math"===e)return 2}return n},getTextMode({tag:e,ns:t}){if(0===t){if("textarea"===e||"title"===e)return 1;if(yr(e))return 2}return 0}},br=e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:ne("style",!0,t.loc),exp:wr(t.value.content,t.loc),modifiers:[],loc:t.loc})}))},wr=(e,t)=>{const n=(0,s.yL)(e);return ne(JSON.stringify(n),!1,t,3)};function _r(e,t){return c(e,t,void 0)}const Er=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(_r(51,i)),t.children.length&&(n.onError(_r(52,i)),t.children.length=0),{props:[te(ne("innerHTML",!0,i),r||ne("",!0))]}},Tr=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(_r(53,i)),t.children.length&&(n.onError(_r(54,i)),t.children.length=0),{props:[te(ne("textContent",!0),r?_t(r,n)>0?r:ie(n.helperString(N),[r],i):ne("",!0))]}},Sr=(e,t,n)=>{const r=Gn(e,t,n);if(!r.props.length||1===t.tagType)return r;e.arg&&n.onError(_r(56,e.arg.loc));const{tag:i}=t,s=n.isCustomElement(i);if("input"===i||"textarea"===i||"select"===i||s){let o=ar,a=!1;if("input"===i||s){const r=Te(t,"type");if(r){if(7===r.type)o=ur;else if(r.value)switch(r.value.content){case"radio":o=sr;break;case"checkbox":o=or;break;case"file":a=!0,n.onError(_r(57,e.loc));break;default:break}}else Ie(t)&&(o=ur)}else"select"===i&&(o=cr);a||(r.needRuntime=n.helper(o))}else n.onError(_r(55,e.loc));return r.props=r.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),r},Ir=(0,s.fY)("passive,once,capture"),kr=(0,s.fY)("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Cr=(0,s.fY)("left,right"),Ar=(0,s.fY)("onkeyup,onkeydown,onkeypress",!0),Rr=(e,t,n,r)=>{const i=[],s=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];"native"===c&&Be("COMPILER_V_ON_NATIVE",n,r)||Ir(c)?o.push(c):Cr(c)?ue(e)?Ar(e.content)?i.push(c):s.push(c):(i.push(c),s.push(c)):kr(c)?s.push(c):i.push(c)}return{keyModifiers:i,nonKeyModifiers:s,eventOptionModifiers:o}},Nr=(e,t)=>{const n=ue(e)&&"onclick"===e.content.toLowerCase();return n?ne(t,!0):4!==e.type?re(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e},xr=(e,t,n)=>Bn(e,t,n,(t=>{const{modifiers:r}=e;if(!r.length)return t;let{key:i,value:o}=t.props[0];const{keyModifiers:a,nonKeyModifiers:c,eventOptionModifiers:u}=Rr(i,r,n,e.loc);if(c.includes("right")&&(i=Nr(i,"onContextmenu")),c.includes("middle")&&(i=Nr(i,"onMouseup")),c.length&&(o=ie(n.helper(lr),[o,JSON.stringify(c)])),!a.length||ue(i)&&!Ar(i.content)||(o=ie(n.helper(hr),[o,JSON.stringify(a)])),u.length){const e=u.map(s.kC).join("");i=ue(i)?ne(`${i.content}${e}`,!0):re(["(",i,`) + "${e}"`])}return{props:[te(i,o)]}})),Or=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(_r(59,i)),{props:[],needRuntime:n.helper(dr)}};const Dr=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||(t.onError(_r(61,e.loc)),t.removeNode())},Lr=[br],Pr={cloak:ir,html:Er,text:Tr,model:Sr,on:xr,show:Or};function Mr(e,t={}){return rr(e,(0,s.l7)({},vr,t,{nodeTransforms:[Dr,...Lr,...t.nodeTransforms||[]],directiveTransforms:(0,s.l7)({},Pr,t.directiveTransforms||{}),transformHoist:null}))}const Fr=Object.create(null);function Ur(e,t){if(!(0,s.HD)(e)){if(!e.nodeType)return s.dG;e=e.innerHTML}const n=e,i=Fr[n];if(i)return i;if("#"===e[0]){const t=document.querySelector(e);0,e=t?t.innerHTML:""}const o=(0,s.l7)({hoistStatic:!0,onError:void 0,onWarn:s.dG},t);o.isCustomElement||"undefined"===typeof customElements||(o.isCustomElement=e=>!!customElements.get(e));const{code:a}=Mr(e,o);const c=new Function("Vue",a)(r);return c._rc=!0,Fr[n]=c}(0,i.Y1)(Ur)},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return le},Mq:function(){return ye},ZF:function(){return ge},KN:function(){return ve}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}b((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",O="0.9.0",D=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.15.0",se="[DEFAULT]",oe={[x]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(o,u),u}function ye(e=se){const t=ae.get(e);if(!t&&e===se)return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}le(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",we=1,_e="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=S(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){try{const t=await Te();return t.transaction(_e).objectStore(_e).get(ke(e))}catch(t){if(t instanceof s.ZR)D.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ie(e,t){try{const n=await Te(),r=n.transaction(_e,"readwrite"),i=r.objectStore(_e);return await i.put(t,ke(e)),r.done}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=1024,Ae=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=xe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=Ce){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){le(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Re(e)),"PRIVATE")),ve(x,O,e),ve(x,O,"esm2017"),ve("fire-js","")}Le("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},9125:function(e,t,n){"use strict";n.d(t,{v0:function(){return yr},e5:function(){return dt}});n(7658);var r=n(223),i=n(7077),s=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),x.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function F(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?N(e.config,i):`${e.config.apiScheme}://${i}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=K(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(z(s.auth_time)),issuedAtTime:q(z(s.iat)),expirationTime:q(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function K(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function G(e){const t=K(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await W(e,$(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=U(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:T}=t;y(b&&T,e,"internal-error");const S=re.fromJSON(this.name,T);y("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(h,e.name),y("boolean"===typeof w,e,"internal-error"),y("boolean"===typeof _,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(v,e.name);const I=new se({uid:b,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=se._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ye(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ve(e)||me(e)||ye(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=ke(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Re(t),{host:o,port:a}=Ne(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Oe()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ne(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:xe(t)}}}function xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Oe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Le(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class Be extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Be(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ve(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ve(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ve(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function qe(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function He(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const ze={["USER_NOT_FOUND"]:"user-not-found"};async function Ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),ze)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return He(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Xe{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=We(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Qe.PROVIDER_ID="password",Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=st(n),o=new it({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=st(n);return new it({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function st(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ot.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ot(e,t,n,r)}}function at(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ot._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await W(e,at(r,i,t,e),n);y(s.idToken,r,"internal-error");const o=K(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),it._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r="signIn",i=await at(e,r,t),s=await it._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ht(e,t){return lt(ke(e),t)}function dt(e,t,n){return ht((0,r.m9)(e),Qe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function pt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function gt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const yt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){const e=(0,r.z$)();return de(e)||ve(e)}const wt=1e3,_t=10;class Et extends vt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bt()&&Ee(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_t):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Et.type="LOCAL";const Tt=Et;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends vt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}St.type="SESSION";const It=St;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ct(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await kt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.receivers=[];class Rt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=At("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function xt(e){Nt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return"undefined"!==typeof Nt()["WorkerGlobalScope"]&&"function"===typeof Nt()["importScripts"]}async function Dt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Lt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Pt(){return Ot()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="firebaseLocalStorageDb",Ft=1,Ut="firebaseLocalStorage",Vt="fbase_key";class jt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Bt(e,t){return e.transaction([Ut],t?"readwrite":"readonly").objectStore(Ut)}function $t(){const e=indexedDB.deleteDatabase(Mt);return new jt(e).toPromise()}function qt(){const e=indexedDB.open(Mt,Ft);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ut,{keyPath:Vt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ut)?t(n):(n.close(),await $t(),t(await qt()))}))}))}async function Ht(e,t,n){const r=Bt(e,!0).put({[Vt]:t,value:n});return new jt(r).toPromise()}async function zt(e,t){const n=Bt(e,!1).get(t),r=await new jt(n).toPromise();return void 0===r?null:r.value}function Kt(e,t){const n=Bt(e,!0).delete(t);return new jt(n).toPromise()}const Gt=800,Wt=3;class Jt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Wt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ot()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Pt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dt(),!this.activeServiceWorker)return;this.sender=new Rt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Lt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Ht(e,yt,"1"),await Kt(e,yt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ht(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>zt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Kt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Bt(e,!1).getAll();return new jt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Jt.type="LOCAL";const Xt=Jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Yt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function en(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Zt().appendChild(r)}))}function tn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nn="recaptcha";async function rn(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===nn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(e){this.providerId=sn.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return rn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return sn.credentialFromTaggedObject(t)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e,t){return t?_(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.PROVIDER_ID="phone",sn.PHONE_SIGN_IN_METHOD="phone";class an extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cn(e){return lt(e.auth,new an(e),e.bypassAuthState)}function un(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ut(n,new an(e),e.bypassAuthState)}async function ln(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ct(n,new an(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cn;case"linkViaPopup":case"linkViaRedirect":return ln;case"reauthViaPopup":case"reauthViaRedirect":return un;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new R(2e3,1e4);class fn extends hn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=At();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,dn.get())};e()}}fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="pendingRedirect",mn=new Map;class gn extends hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const t=await yn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function yn(e,t){const n=wn(t),r=bn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function vn(e,t){mn.set(e._key(),t)}function bn(e){return _(e._redirectPersistence)}function wn(e){return ce(pn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t,n=!1){const r=ke(e),i=on(r,t),s=new gn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const En=6e5;class Tn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!kn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!In(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=En&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sn(e))}saveEventToCache(e){this.cachedEventUids.add(Sn(e)),this.lastProcessedEventTime=Date.now()}}function Sn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function In({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function kn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rn=/^https?/;async function Nn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Cn(e);for(const r of t)try{if(xn(r))return}catch(n){}f(e,"unauthorized-domain")}function xn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Rn.test(n))return!1;if(An.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new R(3e4,6e4);function Dn(){const e=Nt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ln(e){return new Promise(((t,n)=>{var r,i,s;function o(){Dn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dn(),n(p(e,"network-request-failed"))},timeout:On.get()})}if(null===(i=null===(r=Nt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Nt().gapi)||void 0===s?void 0:s.load)){const t=tn("iframefcb");return Nt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},en(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Pn=null,e}))}let Pn=null;function Mn(e){return Pn=Pn||Ln(e),Pn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new R(5e3,15e3),Un="__/auth/iframe",Vn="emulator/auth/iframe",jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,Vn):`https://${e.config.authDomain}/${Un}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Bn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function qn(e){const t=await Mn(e),n=Nt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:$n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Nt().setTimeout((()=>{r(i)}),Fn.get());function o(){Nt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zn=500,Kn=600,Gn="_blank",Wn="http://localhost";class Jn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xn(e,t,n,i=zn,s=Kn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Hn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=fe(l)?Gn:n),he(l)&&(t=t||Wn,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return Qn(t||"",c),new Jn(null);const d=window.open(t||"",c,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Jn(d)}function Qn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="__/auth/handler",Zn="emulator/auth/handler";function er(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${tr(e)}?${(0,r.xO)(u).slice(1)}`}function tr({config:e}){return e.emulator?N(e,Zn):`https://${e.authDomain}/${Yn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="webStorageSupport";class rr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=It,this._completeRedirectFn=_n,this._overrideRedirectResult=vn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=er(e,t,n,S(),r);return Xn(e,s,At())}async _openRedirect(e,t,n,r){return await this._originValidation(e),xt(er(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await qn(e),n=new Tn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(nr,{type:nr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[nr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ve()}}const ir=rr;class sr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class or extends sr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new or(e)}_finalizeEnroll(e,t,n){return gt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Yt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ar{constructor(){}static assertion(e){return or._fromCredential(e)}}ar.FACTOR_ID="phone";var cr="@firebase/auth",ur="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new Ie(t,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new lr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(cr,ur,hr(e)),(0,i.KN)(cr,ur,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=300,pr=(0,r.Pz)("authIdTokenMaxAge")||fr;let mr=null;const gr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pr)return;const i=null===n||void 0===n?void 0:n.token;mr!==i&&(mr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:ir,persistence:[Xt,Tt,It]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=gr(s);pt(n,e,(()=>e(n.currentUser))),ft(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ae(n,`http://${o}`),n}dr("Browser")},36:function(e,t,n){"use strict";n.d(t,{ET:function(){return uh},hJ:function(){return fl},oe:function(){return ch},JU:function(){return pl},PL:function(){return ah},ad:function(){return kl}});n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:b,w.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var S=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||m(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var x=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return e<t?-1:e>t?1:0}function D(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return-1!=D().indexOf(e)}function P(e){return P[" "](e),e}function M(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}P[" "]=d;var F,U=L("Opera"),V=L("Trident")||L("MSIE"),j=L("Edge"),B=j||V,$=L("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),q=-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge");function H(){var e=h.document;return e?e.documentMode:void 0}e:{var z="",K=function(){var e=D();return $?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(z=K?K[1]:""),V){var G=H();if(null!=G&&G>parseFloat(z)){F=String(G);break e}}F=z}var W,J={};function X(){return M((function(){let e=0;const t=x(String(F)).split("."),n=x("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=O(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==i[2].length,0==s[2].length)||O(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&V){var Q=H();W=Q||(parseInt(F,10)||void 0)}else W=void 0;var Y=W;function Z(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{P(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}E(Z,A);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=Se(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Se(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ve(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Se(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(le(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function we(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&be(e),e=n.call(r,t)}return e}function Ee(e){return e=e[de],e instanceof ue?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Ie(){T.call(this),this.i=new ue(this),this.P=this,this.I=null}function ke(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),ce(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ce(o,r,!0,t)&&i}if(o=t.g=e,i=Ce(o,r,!0,t)&&i,i=Ce(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ce(o,r,!1,t)&&i}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&le(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Ie,T),Ie.prototype[te]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){ve(this,e,t,n,r)},Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Ie.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ae=h.JSON.stringify;function Re(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new De),(e=>e.reset()));class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){h.setTimeout((()=>{throw e}),0)}function Pe(e,t){xe||Me(),Fe||(xe(),Fe=!0),Ue.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);xe=function(){e.then(Ve)}}var Fe=!1,Ue=new Ne;function Ve(){for(var e;e=Re();){try{e.h.call(e.g)}catch(n){Le(n)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function je(e,t){Ie.call(this),this.h=e||1,this.g=t||h,this.j=w(this.lb,this),this.l=Date.now()}function Be(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function $e(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function qe(e){e.g=$e((()=>{e.g=null,e.i&&(e.i=!1,qe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(je,Ie),r=je.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(Be(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.X.M.call(this),Be(this),delete this.g};class He extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qe(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){T.call(this),this.h=e,this.g={}}E(ze,T);var Ke=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function We(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Je(){this.g=!0}function Xe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ae(n)}catch(a){return t}}ze.prototype.M=function(){ze.X.M.call(this),We(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Ie}function it(e){A.call(this,tt.Pa,e)}function st(e){const t=rt();ke(t,new it(t))}function ot(e,t){A.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();ke(t,new ot(t,e))}function ct(e,t){A.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(it,A),tt.STAT_EVENT="statevent",E(ot,A),tt.Qa="timingevent",E(ct,A);var lt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){A.call(this,"d")}function vt(){A.call(this,"c")}function bt(){}function wt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new ze(this),this.O=Et,e=B?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}E(yt,A),E(vt,A),E(bt,dt),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},mt=new bt;var Et=45e3,Tt={},St={};function It(e,t,n){e.K=1,e.v=Gt($t(t)),e.s=n,e.P=!0,kt(e,null)}function kt(e,t){e.F=Date.now(),Nt(e),e.A=$t(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new He(w(e.La,e,e.g),e.N)),Ge(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Xe(e.j,e.u,e.A,e.m,e.U,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Rt(e,n),r==St){4==t&&(e.o=4,at(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Pt(e,r)}Ct(e)&&r!=St&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Dt(e))}function Rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.V=Date.now()+e.O,xt(e,e.O)}function xt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(w(e.gb,e),t)}function Ot(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Dt(e){0==e.l.G||e.I||or(e.l,e)}function Lt(e){Ot(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.T),We(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sr(n),Wn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((e.J||n.g==e)&&sr(n),!N(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=lr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ot(a),Nt(a)),r.g=o}else tr(r);0<n.i.length&&Xn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ft(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=wt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==Bn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const l=Bn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=l||7==t||st(8==t||0>=d?3:2),Ot(this);var n=this.g.aa();this.Y=n;t:if(Ct(this)){var r=$n(this.g);e="";var i=r.length,s=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Dt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Lt(this),Dt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.P?(At(this,l,o),B&&this.i&&3==l&&(Ge(this.S,this.T,"tick",this.hb),this.T.start())):(Ye(this.j,this.m,o,null),Pt(this,o)),4==l&&Lt(this),this.i&&!this.I&&(4==l?or(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Lt(this),Dt(this)}}}catch(l){}},r.hb=function(){if(this.g){var e=Bn(this.g),t=this.g.fa();this.C<t.length&&(Ot(this),At(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Lt(this),this.o=2,Dt(this)):xt(this,this.V-e)};var Vt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bt){this.h=void 0!==t?t:e.h,qt(this,e.j),this.s=e.s,this.g=e.g,Ht(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zt(this,n),this.o=e.o}else e&&(n=String(e).match(Vt))?(this.h=!!t,qt(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),Ht(this,n[4]),this.l=Wt(n[5]||"",!0),zt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function $t(e){return new Bt(e)}function qt(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ht(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zt(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Kt(e,t,n){e.i.set(t,n)}function Gt(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Xt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Zt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Qt=/[#\/\?@]/g,Yt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=cn(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),k(n)),e.h+=n.length)}function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=cn(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function bn(){}function wn(){this.g=new bn}function _n(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let i=e;p(e)&&(i=Ae(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function In(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(Sn,dt),Sn.prototype.g=function(){return new In(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),E(In,Ie);var kn=0;function Cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rn(e)}function Rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=In.prototype,r.open=function(e,t){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=kn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Rn(this),3==this.readyState&&Cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,An(this))},r.Ua=function(e){this.g&&(this.response=e,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nn=h.JSON.parse;function xn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}E(xn,Ie);var On="",Dn=/^https?$/i,Ln=["POST","PUT"];function Pn(e){return V&&X()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fn(e),Vn(e)}function Fn(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Bn(e)||2!=e.aa()))if(e.v&&4==Bn(e))$e(e.Ha,0,e);else if(ke(e,"readystatechange"),4==Bn(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Vt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Dn.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var o=2<Bn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Fn(e)}}finally{Vn(e)}}}function Vn(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Bn(e){return e.g?e.g.readyState:0}function $n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Cr){return null}}function qn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Kt(e,t,n))}function zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zn("baseRetryDelayMs",5e3,e),this.bb=zn("retryDelaySeedMs",1e4,e),this.$a=zn("forwardChannelMaxRetries",2,e),this.ta=zn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new wn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(e){if(Jn(e),3==e.G){var t=e.U++,n=$t(e.F);Kt(n,"SID",e.I),Kt(n,"RID",t),Kt(n,"TYPE","terminate"),Zn(e,n),t=new wt(e,e.j,t,void 0),t.K=2,t.v=Gt($t(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nt(t)}ur(e)}function Wn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){Wn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Xn(e){fn(e.h)||e.m||(e.m=!0,Pe(e.Ja,e),e.C=0)}function Qn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(w(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.U++;const r=$t(e.F);Kt(r,"SID",e.I),Kt(r,"RID",n),Kt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&Hn(r,e.o,e.s),n=new wt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),It(n,r,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){Kt(t,n,e)})),e.l&&Ut({},(function(e,n){Kt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{_n(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Pe(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(w(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new wt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=$t(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&Hn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Gt($t(t)),n.s=null,n.P=!0,kt(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),ke(r,new ct(r,n)),Xn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Qn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:cr(e,5);break;case 4:cr(e,10);break;case 3:cr(e,6);break;default:cr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function cr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=w(e.kb,e);n||(n=new Bt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||qt(n,"https"),Gt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Jn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=vn(e.h);0==t.length&&0==e.i.length||(C(e.la,t),C(e.la,e.i),e.h.i.length=0,k(e.i),e.i.length=0),e.l.ua()}}function lr(e,t,n){var r=n instanceof Bt?$t(n):new Bt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ht(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null,void 0);r&&qt(s,r),t&&(s.g=t),i&&Ht(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Kt(r,n,t),Kt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new xn(new Sn({jb:!0})):new xn(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(V&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){Ie.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function mr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){vt.call(this),this.status=1}function yr(e){this.g=e}r=xn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=I(Ln,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=$e(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),Vn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),xn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},r.fb=function(){Un(this)},r.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Nn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new wt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),ce(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=$t(this.F),Kt(n,"RID",e),Kt(n,"CVER",22),this.D&&Kt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(qn(s)))+"&"+t:this.o&&Hn(n,this.o,s)),gn(this.h,i),this.Ya&&Kt(n,"TYPE","init"),this.O?(Kt(n,"$req",t),Kt(n,"SID","null"),i.Z=!0,It(i,n,null)):It(i,n,t),this.G=2}}else 3==this.G&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(w(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Wn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},E(pr,Ie),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lr(e,null,e.V),Xn(e)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new ln(t.ab++,e)),3==t.G&&Xn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},E(mr,yt),E(gr,vt),E(yr,dr),yr.prototype.xa=function(){ke(this.g,"a")},yr.prototype.wa=function(e){ke(this.g,new mr(e))},yr.prototype.va=function(e){ke(this.g,new gr)},yr.prototype.ua=function(){ke(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,xn.prototype.listenOnce=xn.prototype.O,xn.prototype.getLastError=xn.prototype.Oa,xn.prototype.getLastErrorCode=xn.prototype.Ea,xn.prototype.getStatus=xn.prototype.aa,xn.prototype.getResponseJson=xn.prototype.Sa,xn.prototype.getResponseText=xn.prototype.fa,xn.prototype.send=xn.prototype.da,xn.prototype.setWithCredentials=xn.prototype.Ka;var vr=u.createWebChannelTransport=function(){return new fr},br=u.getStatEventTarget=function(){return rt()},wr=u.ErrorCode=lt,_r=u.EventType=ht,Er=u.Event=tt,Tr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=u.FetchXmlHttpFactory=Sn,Ir=u.WebChannel=pt,kr=u.XhrIo=xn;const Cr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rr="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new o.Yd("@firebase/firestore");function xr(){return Nr.logLevel}function Or(e,...t){if(Nr.logLevel<=o["in"].DEBUG){const n=t.map(Pr);Nr.debug(`Firestore (${Rr}): ${e}`,...n)}}function Dr(e,...t){if(Nr.logLevel<=o["in"].ERROR){const n=t.map(Pr);Nr.error(`Firestore (${Rr}): ${e}`,...n)}}function Lr(e,...t){if(Nr.logLevel<=o["in"].WARN){const n=t.map(Pr);Nr.warn(`Firestore (${Rr}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e="Unexpected state"){const t=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+e;throw Dr(t),new Error(t)}function Fr(e,t){e||Mr()}function Ur(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ar.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zr{constructor(e){this.t=e,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Or("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fr("string"==typeof t.accessToken),new $r(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fr(null===e||"string"==typeof e),new Ar(e)}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Fr("string"==typeof e.token),this.A=e.token,new Wr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Xr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Yr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Mr(),void 0===n?n=e.length-t:n>e.length-t&&Mr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new jr(Vr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ni{construct(e,t,n){return new si(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new jr(Vr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new jr(Vr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jr(Vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new jr(Vr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new si(t)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.path=e}static fromPath(e){return new oi(ri.fromString(e))}static fromName(e){return new oi(ri.fromString(e).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oi(new ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function ci(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new li(i,oi.empty(),t)}function ui(e){return new li(e.readTime,e.key,-1)}class li{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new li(ti.min(),oi.empty(),-1)}static max(){return new li(ti.max(),oi.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=oi.comparator(e.documentKey,t.documentKey),0!==n?n:Yr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==Vr.FAILED_PRECONDITION||e.message!==di)throw e;Or("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mi?t:mi.resolve(t)}catch(e){return mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.reject(t)}static resolve(e){return new mi(((t,n)=>{t(e)}))}static reject(e){return new mi(((t,n)=>{n(e)}))}static waitFor(e){return new mi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=mi.resolve(!1);for(const n of e)t=t.next((e=>e?mi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new mi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new mi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}yi.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class bi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _i(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ei(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){return null==e}function Si(e){return 0===e&&1/e==-1/0}function Ii(e){return"number"==typeof e&&Number.isInteger(e)&&!Si(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ki(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ki(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ki.EMPTY_BYTE_STRING=new ki("");const Ci=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(e){if(Fr(!!e),"string"==typeof e){let t=0;const n=Ci.exec(e);if(Fr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ri(e.seconds),nanos:Ri(e.nanos)}}function Ri(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ni(e){return"string"==typeof e?ki.fromBase64String(e):ki.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Oi(e){const t=e.mapValue.fields.__previous_value__;return xi(t)?Oi(t):t}function Di(e){const t=Ai(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xi(e)?4:Wi(e)?9007199254740991:10:Mr()}function Mi(e,t){if(e===t)return!0;const n=Pi(e);if(n!==Pi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Di(e).isEqual(Di(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ai(e.timestampValue),r=Ai(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ni(e.bytesValue).isEqual(Ni(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ri(e.geoPointValue.latitude)===Ri(t.geoPointValue.latitude)&&Ri(e.geoPointValue.longitude)===Ri(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ri(e.integerValue)===Ri(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ri(e.doubleValue),r=Ri(t.doubleValue);return n===r?Si(n)===Si(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Mi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Mi(n[i],r[i])))return!1;return!0}(e,t);default:return Mr()}}function Fi(e,t){return void 0!==(e.values||[]).find((e=>Mi(e,t)))}function Ui(e,t){if(e===t)return 0;const n=Pi(e),r=Pi(t);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ri(e.integerValue||e.doubleValue),r=Ri(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Vi(e.timestampValue,t.timestampValue);case 4:return Vi(Di(e),Di(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ni(e),r=Ni(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Yr(n[i],r[i]);if(0!==e)return e}return Yr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Yr(Ri(e.latitude),Ri(t.latitude));return 0!==n?n:Yr(Ri(e.longitude),Ri(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ui(n[i],r[i]);if(e)return e}return Yr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Li.mapValue&&t===Li.mapValue)return 0;if(e===Li.mapValue)return 1;if(t===Li.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Yr(r[o],s[o]);if(0!==e)return e;const t=Ui(n[r[o]],i[s[o]]);if(0!==t)return t}return Yr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Mr()}}function Vi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Yr(e,t);const n=Ai(e),r=Ai(t),i=Yr(n.seconds,r.seconds);return 0!==i?i:Yr(n.nanos,r.nanos)}function ji(e){return Bi(e)}function Bi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ai(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ni(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Bi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Bi(e.fields[i])}`;return n+"}"}(e.mapValue):Mr();var t,n}function $i(e){return!!e&&"integerValue"in e}function qi(e){return!!e&&"arrayValue"in e}function Hi(e){return!!e&&"nullValue"in e}function zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ki(e){return!!e&&"mapValue"in e}function Gi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _i(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Gi(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Gi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Wi(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e,t){this.position=e,this.inclusive=t}}function Xi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):Ui(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Qi(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Mi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{}class Zi extends Yi{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new as(e,t,n):"array-contains"===t?new hs(e,n):"in"===t?new ds(e,n):"not-in"===t?new fs(e,n):"array-contains-any"===t?new ps(e,n):new Zi(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new cs(e,n):new us(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ui(t,this.value)):null!==t&&Pi(this.value)===Pi(t)&&this.matchesComparison(Ui(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class es extends Yi{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new es(e,t)}matches(e){return ts(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ts(e){return"and"===e.op}function ns(e){return rs(e)&&ts(e)}function rs(e){for(const t of e.filters)if(t instanceof es)return!1;return!0}function is(e){if(e instanceof Zi)return e.field.canonicalString()+e.op.toString()+ji(e.value);{const t=e.filters.map((e=>is(e))).join(",");return`${e.op}(${t})`}}function ss(e,t){return e instanceof Zi?function(e,t){return t instanceof Zi&&e.op===t.op&&e.field.isEqual(t.field)&&Mi(e.value,t.value)}(e,t):e instanceof es?function(e,t){return t instanceof es&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&ss(n,t.filters[r])),!0)}(e,t):void Mr()}function os(e){return e instanceof Zi?function(e){return`${e.field.canonicalString()} ${e.op} ${ji(e.value)}`}(e):e instanceof es?function(e){return e.op.toString()+" {"+e.getFilters().map(os).join(" ,")+"}"}(e):"Filter"}class as extends Zi{constructor(e,t,n){super(e,t,n),this.key=oi.fromName(n.referenceValue)}matches(e){const t=oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class cs extends Zi{constructor(e,t){super(e,"in",t),this.keys=ls("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class us extends Zi{constructor(e,t){super(e,"not-in",t),this.keys=ls("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ls(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>oi.fromName(e.referenceValue)))}class hs extends Zi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qi(t)&&Fi(t.arrayValue,this.value)}}class ds extends Zi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fi(this.value.arrayValue,t)}}class fs extends Zi{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fi(this.value.arrayValue,t)}}class ps extends Zi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t="asc"){this.field=e,this.dir=t}}function gs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.comparator=e,this.root=t||bs.EMPTY}insert(e,t){return new ys(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bs.BLACK,null,null))}remove(e){return new ys(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:bs.RED,this.left=null!=r?r:bs.EMPTY,this.right=null!=i?i:bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new bs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return bs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const e=this.left.check();if(e!==this.right.check())throw Mr();return e+(this.isRed()?0:1)}}bs.EMPTY=null,bs.RED=!0,bs.BLACK=!1,bs.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new bs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(e){this.comparator=e,this.data=new ys(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _s(this.data.getIterator())}getIteratorFrom(e){return new _s(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ws))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ws(this.comparator);return t.data=e,t}}class _s{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(e){this.fields=e,e.sort(si.comparator)}static empty(){return new Es([])}unionWith(e){let t=new ws(si.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Es(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.value=e}static empty(){return new Ts({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Gi(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ki(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){_i(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ts(Gi(this.value))}}function Ss(e){const t=[];return _i(e.fields,((e,n)=>{const r=new si([e]);if(Ki(n)){const e=Ss(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Es(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Is{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Is(e,0,ti.min(),ti.min(),ti.min(),Ts.empty(),0)}static newFoundDocument(e,t,n,r){return new Is(e,1,t,ti.min(),n,r,0)}static newNoDocument(e,t){return new Is(e,2,t,ti.min(),ti.min(),Ts.empty(),0)}static newUnknownDocument(e,t){return new Is(e,3,t,ti.min(),ti.min(),Ts.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ts.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ts.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Is&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Is(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function Cs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ks(e,t,n,r,i,s,o)}function As(e){const t=Ur(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>is(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ji(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ji(e))).join(",")),t.ft=e}return t.ft}function Rs(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ss(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qi(e.startAt,t.startAt)&&Qi(e.endAt,t.endAt)}function Ns(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Os(e,t,n,r,i,s,o,a){return new xs(e,t,n,r,i,s,o,a)}function Ds(e){return new xs(e)}function Ls(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ps(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ms(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Fs(e){return null!==e.collectionGroup}function Us(e){const t=Ur(e);if(null===t.dt){t.dt=[];const e=Ms(t),n=Ps(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new ms(e)),t.dt.push(new ms(si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ms(si.keyField(),e))}}}return t.dt}function Vs(e){const t=Ur(e);if(!t._t)if("F"===t.limitType)t._t=Cs(t.path,t.collectionGroup,Us(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Us(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ms(i.field,t))}const n=t.endAt?new Ji(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ji(t.startAt.position,t.startAt.inclusive):null;t._t=Cs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function js(e,t,n){return new xs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bs(e,t){return Rs(Vs(e),Vs(t))&&e.limitType===t.limitType}function $s(e){return`${As(Vs(e))}|lt:${e.limitType}`}function qs(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>os(e))).join(", ")}]`),Ti(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ji(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ji(e))).join(",")),`Target(${t})`}(Vs(e))}; limitType=${e.limitType})`}function Hs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Us(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Xi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Us(e),t))&&!(e.endAt&&!function(e,t,n){const r=Xi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Us(e),t))}(e,t)}function zs(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ks(e){return(t,n)=>{let r=!1;for(const i of Us(e)){const e=Gs(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Gs(e,t,n){const r=e.field.isKeyField()?oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ui(r,i):Mr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(t)?"-0":t}}function Js(e){return{integerValue:""+e}}function Xs(e,t){return Ii(t)?Js(t):Ws(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this._=void 0}}function Ys(e,t,n){return e instanceof to?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof no?ro(e,t):e instanceof io?so(e,t):function(e,t){const n=eo(e,t),r=ao(n)+ao(e.gt);return $i(n)&&$i(e.gt)?Js(r):Ws(e.yt,r)}(e,t)}function Zs(e,t,n){return e instanceof no?ro(e,t):e instanceof io?so(e,t):n}function eo(e,t){return e instanceof oo?$i(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class to extends Qs{}class no extends Qs{constructor(e){super(),this.elements=e}}function ro(e,t){const n=co(t);for(const r of e.elements)n.some((e=>Mi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class io extends Qs{constructor(e){super(),this.elements=e}}function so(e,t){let n=co(t);for(const r of e.elements)n=n.filter((e=>!Mi(e,r)));return{arrayValue:{values:n}}}class oo extends Qs{constructor(e,t){super(),this.yt=e,this.gt=t}}function ao(e){return Ri(e.integerValue||e.doubleValue)}function co(e){return qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof no&&t instanceof no||e instanceof io&&t instanceof io?Zr(e.elements,t.elements,Mi):e instanceof oo&&t instanceof oo?Mi(e.gt,t.gt):e instanceof to&&t instanceof to}(e.transform,t.transform)}class lo{constructor(e,t){this.version=e,this.transformResults=t}}class ho{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ho}static exists(e){return new ho(void 0,e)}static updateTime(e){return new ho(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class po{}function mo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Io(e.key,ho.none()):new wo(e.key,e.data,ho.none());{const n=e.data,r=Ts.empty();let i=new ws(si.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new _o(e.key,r,new Es(i.toArray()),ho.none())}}function go(e,t,n){e instanceof wo?function(e,t,n){const r=e.value.clone(),i=To(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof _o?function(e,t,n){if(!fo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=To(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Eo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function yo(e,t,n,r){return e instanceof wo?function(e,t,n,r){if(!fo(e.precondition,t))return n;const i=e.value.clone(),s=So(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof _o?function(e,t,n,r){if(!fo(e.precondition,t))return n;const i=So(e.fieldTransforms,r,t),s=t.data;return s.setAll(Eo(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return fo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function vo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=eo(r.transform,e||null);null!=i&&(null===n&&(n=Ts.empty()),n.set(r.field,i))}return n||null}function bo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>uo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class wo extends po{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _o extends po{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function To(e,t,n){const r=new Map;Fr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Zs(o,a,n[i]))}return r}function So(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ys(e,s,t))}return r}class Io extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ko extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao,Ro;function No(e){switch(e){default:return Mr();case Vr.CANCELLED:case Vr.UNKNOWN:case Vr.DEADLINE_EXCEEDED:case Vr.RESOURCE_EXHAUSTED:case Vr.INTERNAL:case Vr.UNAVAILABLE:case Vr.UNAUTHENTICATED:return!1;case Vr.INVALID_ARGUMENT:case Vr.NOT_FOUND:case Vr.ALREADY_EXISTS:case Vr.PERMISSION_DENIED:case Vr.FAILED_PRECONDITION:case Vr.ABORTED:case Vr.OUT_OF_RANGE:case Vr.UNIMPLEMENTED:case Vr.DATA_LOSS:return!0}}function xo(e){if(void 0===e)return Dr("GRPC error has no .code"),Vr.UNKNOWN;switch(e){case Ao.OK:return Vr.OK;case Ao.CANCELLED:return Vr.CANCELLED;case Ao.UNKNOWN:return Vr.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return Vr.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return Vr.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return Vr.INTERNAL;case Ao.UNAVAILABLE:return Vr.UNAVAILABLE;case Ao.UNAUTHENTICATED:return Vr.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return Vr.INVALID_ARGUMENT;case Ao.NOT_FOUND:return Vr.NOT_FOUND;case Ao.ALREADY_EXISTS:return Vr.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return Vr.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return Vr.FAILED_PRECONDITION;case Ao.ABORTED:return Vr.ABORTED;case Ao.OUT_OF_RANGE:return Vr.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return Vr.UNIMPLEMENTED;case Ao.DATA_LOSS:return Vr.DATA_LOSS;default:return Mr()}}(Ro=Ao||(Ao={}))[Ro.OK=0]="OK",Ro[Ro.CANCELLED=1]="CANCELLED",Ro[Ro.UNKNOWN=2]="UNKNOWN",Ro[Ro.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ro[Ro.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ro[Ro.NOT_FOUND=5]="NOT_FOUND",Ro[Ro.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ro[Ro.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ro[Ro.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ro[Ro.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ro[Ro.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ro[Ro.ABORTED=10]="ABORTED",Ro[Ro.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ro[Ro.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ro[Ro.INTERNAL=13]="INTERNAL",Ro[Ro.UNAVAILABLE=14]="UNAVAILABLE",Ro[Ro.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ei(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new ys(oi.comparator);function Lo(){return Do}const Po=new ys(oi.comparator);function Mo(...e){let t=Po;for(const n of e)t=t.insert(n.key,n);return t}function Fo(e){let t=Po;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Uo(){return jo()}function Vo(){return jo()}function jo(){return new Oo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Bo=new ys(oi.comparator),$o=new ws(oi.comparator);function qo(...e){let t=$o;for(const n of e)t=t.add(n);return t}const Ho=new ws(Yr);function zo(){return Ho}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ko(ti.min(),r,zo(),Lo(),qo())}}class Go{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Go(n,t,qo(),qo(),qo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Jo{constructor(e,t){this.targetId=e,this.Et=t}}class Xo{constructor(e,t,n=ki.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Qo{constructor(){this.At=0,this.Rt=ea(),this.bt=ki.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=qo(),t=qo(),n=qo();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Go(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=ea()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Yo{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Lo(),this.qt=Zo(),this.Ut=new ws(Yr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Mr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Ns(e))if(0===n){const n=new oi(e.path);this.Qt(t,n,Is.newNoDocument(n,ti.min()))}else Fr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Ns(i.target)){const t=new oi(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Is.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=qo();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ko(e,t,this.Ut,this.Lt,n);return this.Lt=Lo(),this.qt=Zo(),this.Ut=new ws(Yr),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Qo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ws(Yr),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Or("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Qo),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Zo(){return new ys(oi.comparator)}function ea(){return new ys(oi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),na=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ra=(()=>{const e={and:"AND",or:"OR"};return e})();class ia{constructor(e,t){this.databaseId=e,this.wt=t}}function sa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oa(e,t){return e.wt?t.toBase64():t.toUint8Array()}function aa(e,t){return sa(e,t.toTimestamp())}function ca(e){return Fr(!!e),ti.fromTimestamp(function(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}(e))}function ua(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function la(e){const t=ri.fromString(e);return Fr(Da(t)),t}function ha(e,t){return ua(e.databaseId,t.path)}function da(e,t){const n=la(t);if(n.get(1)!==e.databaseId.projectId)throw new jr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new jr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oi(ga(n))}function fa(e,t){return ua(e.databaseId,t)}function pa(e){const t=la(e);return 4===t.length?ri.emptyPath():ga(t)}function ma(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ga(e){return Fr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ya(e,t,n){return{name:ha(e,t),fields:n.value.mapValue.fields}}function va(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Mr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(Fr(void 0===t||"string"==typeof t),ki.fromBase64String(t||"")):(Fr(void 0===t||t instanceof Uint8Array),ki.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Vr.UNKNOWN:xo(e.code);return new jr(t,e.message||"")}(o);n=new Xo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=da(e,r.document.name),s=ca(r.document.updateTime),o=r.document.createTime?ca(r.document.createTime):ti.min(),a=new Ts({mapValue:{fields:r.document.fields}}),c=Is.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Wo(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=da(e,r.document),s=r.readTime?ca(r.readTime):ti.min(),o=Is.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Wo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=da(e,r.document),s=r.removedTargetIds||[];n=new Wo([],s,i,null)}else{if(!("filter"in t))return Mr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Co(r),s=e.targetId;n=new Jo(s,i)}}return n}function ba(e,t){let n;if(t instanceof wo)n={update:ya(e,t.key,t.value)};else if(t instanceof Io)n={delete:ha(e,t.key)};else if(t instanceof _o)n={update:ya(e,t.key,t.data),updateMask:Oa(t.fieldMask)};else{if(!(t instanceof ko))return Mr();n={verify:ha(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof to)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof no)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof io)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oo)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Mr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:aa(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mr()}(e,t.precondition)),n}function wa(e,t){return e&&e.length>0?(Fr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ca(e.updateTime):ca(t);return n.isEqual(ti.min())&&(n=ca(t)),new lo(n,e.transformResults||[])}(e,t)))):[]}function _a(e,t){return{documents:[fa(e,t.path)]}}function Ea(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=fa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=fa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return xa(es.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ra(e.field),direction:ka(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||Ti(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ta(e){let t=pa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ia(e);return t instanceof es&&ns(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ms(Na(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ti(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ji(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ji(n,t)}(n.endAt)),Os(t,i,o,s,a,"F",c,u)}function Sa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ia(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Na(e.unaryFilter.field);return Zi.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Na(e.unaryFilter.field);return Zi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Na(e.unaryFilter.field);return Zi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Na(e.unaryFilter.field);return Zi.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}(e):void 0!==e.fieldFilter?function(e){return Zi.create(Na(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return es.create(e.compositeFilter.filters.map((e=>Ia(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Mr()}}(e.compositeFilter.op))}(e):Mr()}function ka(e){return ta[e]}function Ca(e){return na[e]}function Aa(e){return ra[e]}function Ra(e){return{fieldPath:e.canonicalString()}}function Na(e){return si.fromServerFormat(e.fieldPath)}function xa(e){return e instanceof Zi?function(e){if("=="===e.op){if(zi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NAN"}};if(Hi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NAN"}};if(Hi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(e.field),op:Ca(e.op),value:e.value}}}(e):e instanceof es?function(e){const t=e.getFilters().map((e=>xa(e)));return 1===t.length?t[0]:{compositeFilter:{op:Aa(e.op),filters:t}}}(e):Mr()}function Oa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Da(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Pa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ma=Pa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&go(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=yo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=yo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vo();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=mo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),qo())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>bo(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>bo(e,t)))}}class Ua{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Fr(e.mutations.length===n.length);let r=Bo;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ua(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,n,r,i=ti.min(),s=ti.min(),o=ki.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new ja(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ja(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ja(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.ie=e}}function $a(e){const t=Ta({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?js(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Ri(e.integerValue));else if("doubleValue"in e){const n=Ri(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Si(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Ni(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Wi(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Mr()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),oi.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}qa.Ie=new qa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(){this.Je=new za}addToCollectionParentIndex(e,t){return this.Je.add(t),mi.resolve()}getCollectionParents(e,t){return mi.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return mi.resolve()}deleteFieldIndex(e,t){return mi.resolve()}getDocumentsMatchingTarget(e,t){return mi.resolve(null)}getIndexType(e,t){return mi.resolve(0)}getFieldIndexes(e,t){return mi.resolve([])}getNextCollectionGroupToUpdate(e){return mi.resolve(null)}getMinOffset(e,t){return mi.resolve(li.min())}getMinOffsetFromCollectionGroup(e,t){return mi.resolve(li.min())}updateCollectionGroup(e,t,n){return mi.resolve()}updateIndexEntries(e,t){return mi.resolve()}}class za{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ws(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ws(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ka{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ka(e,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ga(0)}static vn(){return new Ga(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.changes=new Oo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Is.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&yo(n.mutation,e,Es.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,qo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=qo()){const r=Uo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Mo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Uo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,qo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Lo();const s=jo(),o=jo();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof _o)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),yo(o.mutation,t,o.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ja(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=jo();let r=new ys(((e,t)=>e-t)),i=qo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Es.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||qo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Vo();c.forEach((e=>{if(!i.has(e)){const r=mo(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return mi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):mi.resolve(Uo());let o=-1,a=i;return s.next((t=>mi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?mi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,qo()))).next((e=>({batchId:o,changes:Fo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oi(t)).next((e=>{let t=Mo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Mo();return this.indexManager.getCollectionParents(e,r).next((s=>mi.forEach(s,(s=>{const o=function(e,t){return new xs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Is.newInvalidDocument(n)))}));let n=Mo();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&yo(s.mutation,i,Es.empty(),ei.now()),Hs(t,i)&&(n=n.insert(r,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return mi.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ca(n.createTime)}),mi.resolve()}getNamedQuery(e,t){return mi.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:$a(e.bundledQuery),readTime:ca(e.readTime)}}(t)),mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.overlays=new ys(oi.comparator),this.es=new Map}getOverlay(e,t){return mi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Uo();return mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),mi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),mi.resolve()}getOverlaysForCollection(e,t,n){const r=Uo(),i=t.length+1,s=new oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return mi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ys(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Uo(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Uo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return mi.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Va(t,n));let i=this.es.get(t);void 0===i&&(i=qo(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.ns=new ws(ec.ss),this.rs=new ws(ec.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new ec(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new ec(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new oi(new ri([])),n=new ec(t,e),r=new ec(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new oi(new ri([])),n=new ec(t,e),r=new ec(t,e+1);let i=qo();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ec(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ec{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return oi.comparator(e.key,t.key)||Yr(e._s,t._s)}static os(e,t){return Yr(e._s,t._s)||oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new ws(ec.ss)}checkEmpty(e){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Fa(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new ec(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return mi.resolve(s)}lookupMutationBatch(e,t){return mi.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ec(t,0),r=new ec(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ws(Yr);return t.forEach((e=>{const t=new ec(e,0),r=new ec(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),mi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const s=new ec(new oi(i),0);let o=new ws(Yr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),mi.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Fr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mi.forEach(t.mutations,(r=>{const i=new ec(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new ec(t,0),r=this.gs.firstAfterOrEqual(n);return mi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,mi.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.Es=e,this.docs=new ys(oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mi.resolve(n?n.document.mutableCopy():Is.newInvalidDocument(t))}getEntries(e,t){let n=Lo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Is.newInvalidDocument(e))})),mi.resolve(n)}getAllFromCollection(e,t,n){let r=Lo();const i=new oi(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hi(ui(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return mi.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Mr()}As(e,t){return mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rc(this)}getSize(e){return mi.resolve(this.size)}}class rc extends Wa{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),mi.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.persistence=e,this.Rs=new Oo((e=>As(e)),Rs),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Za,this.targetCount=0,this.vs=Ga.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),mi.resolve()}getLastRemoteSnapshotVersion(e){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),mi.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ga(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,mi.resolve()}updateTargetData(e,t){return this.Dn(t),mi.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,mi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),mi.waitFor(i).next((()=>r))}getTargetCount(e){return mi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return mi.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),mi.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),mi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return mi.resolve(n)}containsKey(e,t){return mi.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new yi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ic(this),this.indexManager=new Ha,this.remoteDocumentCache=function(e){return new nc(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new Ba(t),this.Ns=new Qa(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ya,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new tc(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Or("MemoryPersistence","Starting transaction:",e);const r=new oc(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return mi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class oc extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class ac{constructor(e){this.persistence=e,this.Fs=new Za,this.$s=null}static Bs(e){return new ac(e)}get Ls(){if(this.$s)return this.$s;throw Mr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),mi.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),mi.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Ls,(n=>{const r=oi.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return mi.or([()=>mi.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=qo(),r=qo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Ls(t))return mi.resolve(null);let n=Vs(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=js(t,null,"F"),n=Vs(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=qo(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,js(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return Ls(t)||r.isEqual(ti.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(xr()<=o["in"].DEBUG&&Or("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qs(t)),this.Bi(e,s,t,ci(r,-1)))}))}Fi(e,t){let n=new ws(Ks(e));return t.forEach(((t,r)=>{Hs(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return xr()<=o["in"].DEBUG&&Or("QueryEngine","Using full collection scan to execute query:",qs(t)),this.Ni.getDocumentsMatchingQuery(e,t,li.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new ys(Yr),this.Ui=new Oo((e=>As(e)),Rs),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function hc(e,t,n,r){return new lc(e,t,n,r)}async function dc(e,t){const n=Ur(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=qo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function fc(e,t){const n=Ur(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=mi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Fr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=qo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function pc(e){const t=Ur(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function mc(e,t){const n=Ur(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ki.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Lo(),c=qo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(gc(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(ti.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return mi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.qi=i,e)))}function gc(e,t,n){let r=qo(),i=qo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Lo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ti.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function yc(e,t){const n=Ur(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function vc(e,t){const n=Ur(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,mi.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new ja(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function bc(e,t,n){const r=Ur(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!gi(e))throw e;Or("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function wc(e,t,n){const r=Ur(e);let i=ti.min(),s=qo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ur(e),i=r.Ui.get(n);return void 0!==i?mi.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,Vs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?s:qo()))).next((e=>(_c(r,zs(t),e),{documents:e,Hi:s})))))}function _c(e,t,n){let r=e.Ki.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class Ec{constructor(){this.activeTargetIds=zo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tc{constructor(){this.Lr=new Ec,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ec,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Or("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Or("RestConnection","Received: ",e),e)),(t=>{throw Lr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=kc[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new kr;o.setWithCredentials(!0),o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case wr.NO_ERROR:const t=o.getResponseJson();Or("Connection","XHR received:",JSON.stringify(t)),i(t);break;case wr.TIMEOUT:Or("Connection",'RPC "'+e+'" timed out'),s(new jr(Vr.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const n=o.getStatus();if(Or("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Vr).indexOf(t)>=0?t:Vr.UNKNOWN}(t.status);s(new jr(e,t.message))}else s(new jr(Vr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new jr(Vr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Or("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=vr(),s=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Sr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Or("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new Cc({Hr:e=>{l?Or("Connection","Not sending because WebChannel is closed:",e):(u||(Or("Connection","Opening WebChannel transport."),c.open(),u=!0),Or("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Ir.EventType.OPEN,(()=>{l||Or("Connection","WebChannel transport opened.")})),d(c,Ir.EventType.CLOSE,(()=>{l||(l=!0,Or("Connection","WebChannel transport closed"),h.io())})),d(c,Ir.EventType.ERROR,(e=>{l||(l=!0,Lr("Connection","WebChannel transport errored:",e),h.io(new jr(Vr.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ir.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Fr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Or("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Ao[e];if(void 0!==t)return xo(t)}(e),n=i.message;void 0===t&&(t=Vr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.io(new jr(t,n)),c.close()}else Or("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Er.STAT_EVENT,(e=>{e.stat===Tr.PROXY?Or("Connection","Detected buffering proxy"):e.stat===Tr.NOPROXY&&Or("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e){return new ia(e,!0)}class xc{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Or("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new xc(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Vr.RESOURCE_EXHAUSTED?(Dr(t.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new jr(Vr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Or("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dc extends Oc{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=va(this.yt,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ca(t.readTime):ti.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ma(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ns(r)?{documents:_a(e,r)}:{query:Ea(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=oa(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=sa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=Sa(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ma(this.yt),t.removeTarget=e,this.Bo(t)}}class Lc extends Oc{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Fr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=wa(e.writeResults,e.commitTime),n=ca(e.commitTime);return this.listener.Zo(n,t)}return Fr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ma(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ba(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new jr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jr(Vr.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jr(Vr.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Mc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dr(t),this.ou=!1):Or("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Kc(this)&&(Or("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ur(e);t._u.add(4),await Vc(t),t.gu.set("Unknown"),t._u.delete(4),await Uc(t)}(this))}))})),this.gu=new Mc(n,r)}}async function Uc(e){if(Kc(e))for(const t of e.wu)await t(!0)}async function Vc(e){for(const t of e.wu)await t(!1)}function jc(e,t){const n=Ur(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),zc(n)?Hc(n):lu(n).ko()&&$c(n,t))}function Bc(e,t){const n=Ur(e),r=lu(n);n.du.delete(t),r.ko()&&qc(n,t),0===n.du.size&&(r.ko()?r.Fo():Kc(n)&&n.gu.set("Unknown"))}function $c(e,t){e.yu.Ot(t.targetId),lu(e).zo(t)}function qc(e,t){e.yu.Ot(t),lu(e).Ho(t)}function Hc(e){e.yu=new Yo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),lu(e).start(),e.gu.uu()}function zc(e){return Kc(e)&&!lu(e).No()&&e.du.size>0}function Kc(e){return 0===Ur(e)._u.size}function Gc(e){e.yu=void 0}async function Wc(e){e.du.forEach(((t,n)=>{$c(e,t)}))}async function Jc(e,t){Gc(e),zc(e)?(e.gu.hu(t),Hc(e)):e.gu.set("Unknown")}async function Xc(e,t,n){if(e.gu.set("Online"),t instanceof Xo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Or("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Qc(e,n)}else if(t instanceof Wo?e.yu.Kt(t):t instanceof Jo?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(ti.min()))try{const t=await pc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(ki.EMPTY_BYTE_STRING,n.snapshotVersion)),qc(e,t);const r=new ja(n.target,t,1,n.sequenceNumber);$c(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Or("RemoteStore","Failed to raise snapshot:",t),await Qc(e,t)}}async function Qc(e,t,n){if(!gi(t))throw t;e._u.add(1),await Vc(e),e.gu.set("Offline"),n||(n=()=>pc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Or("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Uc(e)}))}function Yc(e,t){return t().catch((n=>Qc(e,n,t)))}async function Zc(e){const t=Ur(e),n=hu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;eu(t);)try{const e=await yc(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,tu(t,e)}catch(e){await Qc(t,e)}nu(t)&&ru(t)}function eu(e){return Kc(e)&&e.fu.length<10}function tu(e,t){e.fu.push(t);const n=hu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function nu(e){return Kc(e)&&!hu(e).No()&&e.fu.length>0}function ru(e){hu(e).start()}async function iu(e){hu(e).eu()}async function su(e){const t=hu(e);for(const n of e.fu)t.Xo(n.mutations)}async function ou(e,t,n){const r=e.fu.shift(),i=Ua.from(r,t,n);await Yc(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Zc(e)}async function au(e,t){t&&hu(e).Yo&&await async function(e,t){if(n=t.code,No(n)&&n!==Vr.ABORTED){const n=e.fu.shift();hu(e).Mo(),await Yc(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Zc(e)}var n}(e,t),nu(e)&&ru(e)}async function cu(e,t){const n=Ur(e);n.asyncQueue.verifyOperationInProgress(),Or("RemoteStore","RemoteStore received new credentials");const r=Kc(n);n._u.add(3),await Vc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Uc(n)}async function uu(e,t){const n=Ur(e);t?(n._u.delete(2),await Uc(n)):t||(n._u.add(2),await Vc(n),n.gu.set("Unknown"))}function lu(e){return e.pu||(e.pu=function(e,t,n){const r=Ur(e);return r.su(),new Dc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Wc.bind(null,e),Zr:Jc.bind(null,e),Wo:Xc.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),zc(e)?Hc(e):e.gu.set("Unknown")):(await e.pu.stop(),Gc(e))}))),e.pu}function hu(e){return e.Iu||(e.Iu=function(e,t,n){const r=Ur(e);return r.su(),new Lc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:iu.bind(null,e),Zr:au.bind(null,e),tu:su.bind(null,e),Zo:ou.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Zc(e)):(await e.Iu.stop(),e.fu.length>0&&(Or("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class du{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new du(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jr(Vr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fu(e,t){if(Dr("AsyncQueue",`${t}: ${e}`),gi(e))return new jr(Vr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oi.comparator(t.key,n.key):(e,t)=>oi.comparator(e.key,t.key),this.keyedMap=Mo(),this.sortedSet=new ys(this.comparator)}static emptySet(e){return new pu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new pu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.Tu=new ys(oi.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Mr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class gu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new gu(e,t,pu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.Au=void 0,this.listeners=[]}}class vu{constructor(){this.queries=new Oo((e=>$s(e)),Bs),this.onlineState="Unknown",this.Ru=new Set}}async function bu(e,t){const n=Ur(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yu),i)try{s.Au=await n.onListen(r)}catch(e){const n=fu(e,`Initialization of query '${qs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Tu(n)}async function wu(e,t){const n=Ur(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _u(e,t){const n=Ur(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&Tu(n)}function Eu(e,t,n){const r=Ur(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Tu(e){e.Ru.forEach((e=>{e.next()}))}class Su{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=gu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(e){this.key=e}}class ku{constructor(e){this.key=e}}class Cu{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=qo(),this.mutatedKeys=qo(),this.Gu=Ks(e),this.Qu=new pu(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new mu,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Hs(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new gu(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new mu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=qo(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new ku(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Iu(n))})),t}tc(e){this.qu=e.Hi,this.Ku=qo();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return gu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Au{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ru{constructor(e){this.key=e,this.nc=!1}}class Nu{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Oo((e=>$s(e)),Bs),this.rc=new Map,this.oc=new Set,this.uc=new ys(oi.comparator),this.cc=new Map,this.ac=new Za,this.hc={},this.lc=new Map,this.fc=Ga.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function xu(e,t){const n=Xu(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await vc(n.localStore,Vs(t));n.isPrimaryClient&&jc(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ou(n,t,r,"current"===s,e.resumeToken)}return i}async function Ou(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await wc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Hu(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await wc(e.localStore,t,!0),o=new Cu(t,s.Hi),a=o.Wu(s.documents),c=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Hu(e,n,u.Xu);const l=new Au(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Du(e,t){const n=Ur(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!Bs(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Bc(n.remoteStore,r.targetId),$u(n,r.targetId)})).catch(pi)):($u(n,r.targetId),await bc(n.localStore,r.targetId,!0))}async function Lu(e,t,n){const r=Qu(e);try{const e=await function(e,t){const n=Ur(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),qo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Lo(),c=qo();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=vo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new _o(e.key,t,Ss(t.value.mapValue),ho.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Fo(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new ys(Yr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Gu(r,e.changes),await Zc(r.remoteStore)}catch(e){const t=fu(e,"Failed to persist write");n.reject(t)}}async function Pu(e,t){const n=Ur(e);try{const e=await mc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Fr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Fr(r.nc):e.removedDocuments.size>0&&(Fr(r.nc),r.nc=!1))})),await Gu(n,e,t)}catch(e){await pi(e)}}function Mu(e,t,n){const r=Ur(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Ur(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&Tu(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Fu(e,t,n){const r=Ur(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new ys(oi.comparator);e=e.insert(s,Is.newNoDocument(s,ti.min()));const n=qo().add(s),i=new Ko(ti.min(),new Map,new ws(Yr),e,n);await Pu(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),Ku(r)}else await bc(r.localStore,t,!1).then((()=>$u(r,t,n))).catch(pi)}async function Uu(e,t){const n=Ur(e),r=t.batch.batchId;try{const e=await fc(n.localStore,t);Bu(n,r,null),ju(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gu(n,e)}catch(e){await pi(e)}}async function Vu(e,t,n){const r=Ur(e);try{const e=await function(e,t){const n=Ur(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Fr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Bu(r,t,n),ju(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Gu(r,e)}catch(n){await pi(n)}}function ju(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Bu(e,t,n){const r=Ur(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function $u(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||qu(e,t)}))}function qu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Bc(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Ku(e))}function Hu(e,t,n){for(const r of n)r instanceof Iu?(e.ac.addReference(r.key,t),zu(e,r)):r instanceof ku?(Or("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||qu(e,r.key)):Mr()}function zu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Or("SyncEngine","New document in limbo: "+n),e.oc.add(r),Ku(e))}function Ku(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new oi(ri.fromString(t)),r=e.fc.next();e.cc.set(r,new Ru(n)),e.uc=e.uc.insert(n,r),jc(e.remoteStore,new ja(Vs(Ds(n.path)),r,2,yi.at))}}async function Gu(e,t,n){const r=Ur(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=cc.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=Ur(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mi.forEach(t,(t=>mi.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>mi.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!gi(e))throw e;Or("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function Wu(e,t){const n=Ur(e);if(!n.currentUser.isEqual(t)){Or("SyncEngine","User change. New user:",t.toKey());const e=await dc(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new jr(Vr.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Gu(n,e.ji)}}function Ju(e,t){const n=Ur(e),r=n.cc.get(t);if(r&&r.nc)return qo().add(r.key);{let e=qo();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function Xu(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ju.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Fu.bind(null,t),t.sc.Wo=_u.bind(null,t.eventManager),t.sc.wc=Eu.bind(null,t.eventManager),t}function Qu(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vu.bind(null,t),t}class Yu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return hc(this.persistence,new uc,e.initialUser,this.yt)}yc(e){return new sc(ac.Bs,this.yt)}gc(e){return new Tc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Mu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wu.bind(null,this.syncEngine),await uu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vu}createDatastore(e){const t=Nc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ac(r));var r;return function(e,t,n,r){return new Pc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Mu(this.syncEngine,e,0),s=Ic.C()?new Ic:new Sc,new Fc(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Nu(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ur(e);Or("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Vc(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e,t,n){if(!n)throw new jr(Vr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function tl(e,t,n,r){if(!0===t&&!0===r)throw new jr(Vr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nl(e){if(!oi.isDocumentKey(e))throw new jr(Vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rl(e){if(oi.isDocumentKey(e))throw new jr(Vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function il(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mr()}function sl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jr(Vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=il(e);throw new jr(Vr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ol=new Map;class al{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new jr(Vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jr(Vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jr(Vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jr(Vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new qr;switch(e.type){case"gapi":const t=e.client;return new Gr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new jr(Vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ol.get(e);t&&(Or("ComponentProvider","Removing Datastore"),ol.delete(e),t.terminate())}(this),Promise.resolve()}}function ul(e,t,n,r={}){var i;const s=(e=sl(e,cl))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ar.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new jr(Vr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(s)}e._authCredentials=new Hr(new $r(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ll(this.firestore,e,this._key)}}class hl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hl(this.firestore,e,this._query)}}class dl extends hl{constructor(e,t,n){super(e,t,Ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ll(this.firestore,null,new oi(e))}withConverter(e){return new dl(this.firestore,e,this._path)}}function fl(e,t,...n){if(e=(0,a.m9)(e),el("collection","path",t),e instanceof cl){const r=ri.fromString(t,...n);return rl(r),new dl(e,null,r)}{if(!(e instanceof ll||e instanceof dl))throw new jr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return rl(r),new dl(e.firestore,null,r)}}function pl(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Qr.R()),el("doc","path",t),e instanceof cl){const r=ri.fromString(t,...n);return nl(r),new ll(e,null,new oi(r))}{if(!(e instanceof ll||e instanceof dl))throw new jr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return nl(r),new ll(e.firestore,e instanceof dl?e.converter:null,new oi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Qr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Or("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Or("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=fu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function yl(e,t){e.asyncQueue.verifyOperationInProgress(),Or("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await dc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function vl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bl(e);Or("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>cu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>cu(t.remoteStore,n))),e.onlineComponents=t}async function bl(e){return e.offlineComponents||(Or("FirestoreClient","Using default OfflineComponentProvider"),await yl(e,new Yu)),e.offlineComponents}async function wl(e){return e.onlineComponents||(Or("FirestoreClient","Using default OnlineComponentProvider"),await vl(e,new Zu)),e.onlineComponents}function _l(e){return wl(e).then((e=>e.syncEngine))}async function El(e){const t=await wl(e),n=t.eventManager;return n.onListen=xu.bind(null,t.syncEngine),n.onUnlisten=Du.bind(null,t.syncEngine),n}function Tl(e,t,n={}){const r=new Br;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ml({next:n=>{t.enqueueAndForget((()=>wu(e,o))),n.fromCache&&"server"===r.source?i.reject(new jr(Vr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Su(n,s,{includeMetadataChanges:!0,Nu:!0});return bu(e,o)}(await El(e),e.asyncQueue,t,n,r))),r.promise}class Sl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new xc(this,"async_queue_retry"),this.Wc=()=>{const e=Rc();e&&Or("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Rc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Rc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new Br;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!gi(E))throw E;Or("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Dr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=du.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Mr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class Il extends cl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Sl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Al(this),this._firestoreClient.terminate()}}function kl(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&ul(s,...e)}return s}function Cl(e){return e._firestoreClient||Al(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Al(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new vi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new gl(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rl(ki.fromBase64String(e))}catch(e){throw new jr(Vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Rl(ki.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jr(Vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xl{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jr(Vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jr(Vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Yr(this._lat,e._lat)||Yr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=/^__.*__$/;class Ll{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new _o(e,this.data,this.fieldMask,t,this.fieldTransforms):new wo(e,this.data,t,this.fieldTransforms)}}function Pl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Ml{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Gl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Pl(this.sa)&&Dl.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Fl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Nc(e)}da(e,t,n,r=!1){return new Ml({sa:e,methodName:t,fa:n,path:si.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ul(e){const t=e._freezeSettings(),n=Nc(e._databaseId);return new Fl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Vl(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);ql("Data must be an object, but it was:",o,r);const a=Bl(r,o);let c,u;if(s.merge)c=new Es(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Hl(t,r,n);if(!o.contains(i))throw new jr(Vr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Wl(e,i)||e.push(i)}c=new Es(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ll(new Ts(a),c,u)}function jl(e,t){if($l(e=(0,a.m9)(e)))return ql("Unsupported field value:",t,e),Bl(e,t);if(e instanceof xl)return function(e,t){if(!Pl(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=jl(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Xs(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:sa(t.yt,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sa(t.yt,n)}}if(e instanceof Ol)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Rl)return{bytesValue:oa(t.yt,e._byteString)};if(e instanceof ll){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ua(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${il(e)}`)}(e,t)}function Bl(e,t){const n={};return Ei(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_i(e,((e,r)=>{const i=jl(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function $l(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Ol||e instanceof Rl||e instanceof ll||e instanceof xl)}function ql(e,t,n){if(!$l(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=il(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Hl(e,t,n){if((t=(0,a.m9)(t))instanceof Nl)return t._internalPath;if("string"==typeof t)return Kl(e,t);throw Gl("Field path arguments must be of type string or ",e,!1,void 0,n)}const zl=new RegExp("[~\\*/\\[\\]]");function Kl(e,t,n){if(t.search(zl)>=0)throw Gl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Nl(...t.split("."))._internalPath}catch(r){throw Gl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new jr(Vr.INVALID_ARGUMENT,a+e+c)}function Wl(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ll(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Xl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ql("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Xl extends Jl{data(){return super.data()}}function Ql(e,t){return"string"==typeof t?Kl(e,t):t instanceof Nl?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jr(Vr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zl{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ri(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Mr()}}convertObject(e,t){const n={};return _i(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ol(Ri(e.latitude),Ri(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Oi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);Fr(Da(n));const r=new bi(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(t)||Dr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class th{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nh extends Jl{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ql("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rh extends nh{data(e={}){return super.data(e)}}class ih{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new th(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rh(this._firestore,this._userDataWriter,n.key,n,new th(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jr(Vr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new rh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new th(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new th(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:sh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}class oh extends Zl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ll(this.firestore,null,t)}}function ah(e){e=sl(e,hl);const t=sl(e.firestore,Il),n=Cl(t),r=new oh(t);return Yl(e._query),Tl(n,e._query).then((n=>new ih(t,r,e,n)))}function ch(e){return lh(sl(e.firestore,Il),[new Io(e._key,ho.none())])}function uh(e,t){const n=sl(e.firestore,Il),r=pl(e),i=eh(e.converter,t);return lh(n,[Vl(Ul(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ho.exists(!1))]).then((()=>r))}function lh(e,t){return function(e,t){const n=new Br;return e.asyncQueue.enqueueAndForget((async()=>Lu(await _l(e),t,n))),n.promise}(Cl(e),t)}!function(e,t=!0){!function(e){Rr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Il(new zr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jr(Vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Cr,"3.8.0",e),(0,i.KN)(Cr,"3.8.0","esm2017")}()},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return j}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return l(e)?w(e,t):l(t)?w(t,e):e===t}function w(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function S(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function k(e,t){return e.replace(I,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const x=new Map;function O(e,t){x.set(e,t)}function D(e){const t=x.get(e);return x.delete(e),t}let L=()=>location.protocol+"//"+location.host;function P(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function U(e){const{history:t,location:n}=window,r={value:P(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:L()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(e){e=S(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),V(e)}function B(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function K(e,t){return a(new Error,{type:e,[H]:!0},t)}function G(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const W="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=a({},J,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=Q(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});0,o=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:le(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ye=/\?/g,ve=/\+/g,be=/%5B/g,we=/%5D/g,_e=/%5E/g,Ee=/%60/g,Te=/%7B/g,Se=/%7C/g,Ie=/%7D/g,ke=/%20/g;function Ce(e){return encodeURI(""+e).replace(Se,"|").replace(be,"[").replace(we,"]")}function Ae(e){return Ce(e).replace(Te,"{").replace(Ie,"}").replace(_e,"^")}function Re(e){return Ce(e).replace(ve,"%2B").replace(ke,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Ie,"}").replace(_e,"^")}function Ne(e){return Re(e).replace(ge,"%3D")}function xe(e){return Ce(e).replace(fe,"%23").replace(ye,"%3F")}function Oe(e){return null==e?"":xe(e).replace(me,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ve," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol(""),Be=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(K(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function He(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(je),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Je(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ge;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Be),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Fe,l),(0,r.JJ)(Be,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Le,o=e.stringifyQuery||Pe,h=e.history;const d=$e(),m=$e(),y=$e(),v=(0,i.XI)(q);let b=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(e=>""+e)),_=c.bind(null,Oe),T=c.bind(null,De);function S(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=w(T(s.params));const u=p(o,a({},e,{hash:Ae(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function L(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function P(e,t){if(b!==e)return K(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(L(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=b=x(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(L(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=K(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):B(l,r)).catch((e=>G(e)?G(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(G(e,2))return V(a({replace:c},L(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=z(l,r,!0,c,i);return H(l,r,e),e}))}function j(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,s]=it(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),rt(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push(qe(r,e,t));return n.push(o),rt(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of y.list())r(e,t,n)}function z(e,t,n,r,i){const o=P(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,ne(e,t,n,c),te()}let W;function J(){W||(W=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=x(e),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);b=r;const o=v.value;s&&O(N(o.fullPath,n.delta),A()),B(r,o).catch((e=>G(e,12)?e:G(e,2)?(V(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||z(r,o,!1),e&&(n.delta&&!G(e,8)?h.go(-n.delta,!1):n.type===E.pop&&G(e,20)&&h.go(-1,!1)),H(r,o,e)})).catch(u)})))}let X,Q=$e(),Y=$e();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return X||(X=!e,J(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&D(N(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&R(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:S,removeRoute:I,hasRoute:C,getRoutes:k,resolve:x,options:e,push:M,replace:F,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!ie&&v.value===q&&(ie=!0,M(h.location).catch((e=>{0})));const n={};for(const i in q)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(Ve,t),e.provide(je,(0,i.qj)(n)),e.provide(Be,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(b=q,W&&W(),W=null,v.value=q,ie=!1,X=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.73c6fef1.js.map