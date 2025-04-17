"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[504],{449:function(e,t,n){n.d(t,{A:function(){return g}});var r=n(641);
/*! vue-carousel v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const i="undefined"!==typeof window&&"undefined"!==typeof window.document,s=!(!i||!window.document.documentElement)&&"ontouchstart"in window.document.documentElement,o=!!i&&"PointerEvent"in window,a=s?"ontouchstart":"onmousedown",c=s?"ontouchmove":"onmousemove",u=s?"ontouchend":"onmouseup",l=o?"onpointerdown":a,h=o?"onpointermove":c,d=o?"onpointerup":u,f=o?"onpointerenter":"onmouseenter",p=o?"onpointerleave":"onmouseleave",m=e=>"object"===typeof e&&null!==e||"function"===typeof e?e:{template:String(e)};var g=(0,r.pM)({name:"VueCarousel",props:{autoplay:{type:Boolean,default:!0},controls:{type:[Boolean,String],default:"hover"},data:{type:Array,default:void 0},direction:{type:String,default:"left"},duration:{type:Number,default:600},indicators:{type:[Boolean,String],default:!0},indicatorTrigger:{type:String,default:"click"},indicatorType:{type:String,default:"line"},interval:{type:Number,default:5e3},pauseOnEnter:{type:Boolean,default:!0},slideOnSwipe:{type:Boolean,default:!0},tag:{type:String,default:"div"}},emits:["slide","slid"],data(){return{endX:0,endY:0,index:0,list:[],onVisibilityChange:()=>{},playing:!1,sliding:!1,startX:0,startY:0,timeout:0}},watch:{data(){this.init()}},created(){this.init()},mounted(){document.addEventListener("visibilitychange",this.onVisibilityChange=()=>{this.playing&&("visible"===document.visibilityState?this.cycle():this.pause())}),this.autoplay&&this.play()},beforeUnmount(){document.removeEventListener("visibilitychange",this.onVisibilityChange)},methods:{init(){const{data:e}=this,t=[];if(e&&e.length>0){const n=e.length-1;this.index>n&&(this.index=n),e.forEach(((e,n)=>{const r=n===this.index,i={...e&&void 0!==e.content?e:{content:e},active:r,bottom:!1,left:!1,raw:e,right:!1,sliding:r,toBottom:!1,toLeft:!1,toRight:!1,toTop:!1,top:!1};t.push(i)}))}this.list=t},play(){this.playing||(this.playing=!0,this.cycle())},cycle(){this.playing&&(this.pause(),this.timeout=window.setTimeout((()=>{this.next((()=>{this.cycle()}))}),this.interval))},pause(){window.clearTimeout(this.timeout),this.timeout=0},stop(){this.playing&&(this.pause(),this.playing=!1)},prev(e){this.slideTo(this.index-1,e)},next(e){this.slideTo(this.index+1,e)},slide(e,t=!1,n=(()=>{})){if(document.hidden||this.sliding)return void n();const{list:i}=this,s=0,o=i.length-1;if(e>o?e=s:e<s&&(e=o),e===this.index)return void n();this.sliding=!0,this.$emit("slide",e,this.index);const a=i[this.index],c=i[e];switch(this.direction){case"up":c.bottom=!t,c.top=t;break;case"right":c.left=!t,c.right=t;break;case"down":c.top=!t,c.bottom=t;break;default:c.right=!t,c.left=t}(0,r.dY)((()=>{switch(this.$el.offsetWidth,this.direction){case"up":a.toTop=!t,a.toBottom=t,c.toTop=!t,c.toBottom=t;break;case"right":a.toRight=!t,a.toLeft=t,c.toRight=!t,c.toLeft=t;break;case"down":a.toBottom=!t,a.toTop=t,c.toBottom=!t,c.toTop=t;break;default:a.toLeft=!t,a.toRight=t,c.toLeft=!t,c.toRight=t}a.sliding=!1,c.sliding=!0,setTimeout((()=>{a.active=!1,a.top=!1,a.right=!1,a.bottom=!1,a.left=!1,a.toTop=!1,a.toRight=!1,a.toBottom=!1,a.toLeft=!1,c.active=!0,c.top=!1,c.right=!1,c.bottom=!1,c.left=!1,c.toTop=!1,c.toRight=!1,c.toBottom=!1,c.toLeft=!1,this.$emit("slid",e,this.index),this.index=e,this.sliding=!1,n()}),this.duration)}))},slideTo(e,t){e!==this.index&&this.slide(e,e<this.index,t)},slideStart(e){const t=e.touches?e.touches[0]:null;this.playing&&this.pauseOnEnter&&this.stop(),this.startX=t?t.pageX:e.pageX,this.startY=t?t.pageY:e.pageY},slideMove(e){const t=e.touches?e.touches[0]:null;e.preventDefault(),this.endX=t?t.pageX:e.pageX,this.endY=t?t.pageY:e.pageY},slideEnd(){const e=this.endX-this.startX,t=this.endY-this.startY;if(this.endX=this.startX,this.endY=this.startY,0===e&&0===t)return;const n=this.$el.offsetWidth/5,r=this.$el.offsetHeight/5,i=t<-r,s=e>n,o=t>r,a=e<-n,c=()=>{!this.playing&&this.pauseOnEnter&&this.play()};let u=!1,l=!1;switch(this.direction){case"up":u=o,l=i;break;case"right":u=a,l=s;break;case"down":u=i,l=o;break;default:u=s,l=a}u?this.prev(c):l?this.next(c):c()}},render(){return(0,r.h)(this.tag,{class:{"vue-carousel":!0,[`vue-carousel--${this.direction}`]:this.direction,"vue-carousel--slidable":this.slideOnSwipe,"vue-carousel--controls":"hover"===this.controls,"vue-carousel--indicators":"hover"===this.indicators},...this.pauseOnEnter?{[f]:this.pause,[p]:this.cycle}:{},...this.slideOnSwipe?{[l]:this.slideStart,[h]:this.slideMove,[d]:this.slideEnd}:{}},0===this.list.length?[]:[(0,r.h)("ul",{class:"vue-carousel__list"},this.list.map(((e,t)=>(0,r.h)("li",{"data-index":t,class:{"vue-carousel__item":!0,"vue-carousel__item--active":e.active,"vue-carousel__item--top":e.top,"vue-carousel__item--right":e.right,"vue-carousel__item--bottom":e.bottom,"vue-carousel__item--left":e.left,"vue-carousel__item--to-top":e.toTop,"vue-carousel__item--to-right":e.toRight,"vue-carousel__item--to-bottom":e.toBottom,"vue-carousel__item--to-left":e.toLeft},style:{"transition-duration":this.duration/1e3+"s"}},[(0,r.h)(m(e.content))])))),this.indicators?(0,r.h)("ol",{class:{"vue-carousel__indicators":!0,[`vue-carousel__indicators--${this.indicatorType}`]:this.indicatorType}},this.list.map(((e,t)=>(0,r.h)("li",{"data-slide-to":t,class:{"vue-carousel__indicator":!0,"vue-carousel__indicator--active":e.sliding},...(()=>{const e={},n=()=>{this.slideTo(t)};return"hover"===this.indicatorTrigger?(e[f]=n,s&&!o&&(e[a]=n)):e.onclick=n,e})()})))):"",this.controls?(0,r.h)("button",{type:"button","data-slide":"prev",class:"vue-carousel__control vue-carousel__control--prev",onclick:()=>{["right","down"].indexOf(this.direction)>-1?this.next():this.prev()}}):"",this.controls?(0,r.h)("button",{type:"button","data-slide":"next",class:"vue-carousel__control vue-carousel__control--next",onclick:()=>{["right","down"].indexOf(this.direction)>-1?this.prev():this.next()}}):""])}});function y(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var v='.vue-carousel{position:relative;user-select:none}.vue-carousel--slidable{touch-action:none}.vue-carousel--down>.vue-carousel__indicators,.vue-carousel--up>.vue-carousel__indicators{bottom:auto;flex-direction:column;left:auto;right:0;top:50%;transform:translateY(-50%)}.vue-carousel--down>.vue-carousel__indicators>.vue-carousel__indicator:before,.vue-carousel--up>.vue-carousel__indicators>.vue-carousel__indicator:before{height:100%;width:.125rem}.vue-carousel--down>.vue-carousel__indicators--disc>.vue-carousel__indicator,.vue-carousel--up>.vue-carousel__indicators--disc>.vue-carousel__indicator{height:.75rem;width:1.5rem}.vue-carousel--down>.vue-carousel__indicators--disc>.vue-carousel__indicator:before,.vue-carousel--up>.vue-carousel__indicators--disc>.vue-carousel__indicator:before{height:.5rem;width:.5rem}.vue-carousel--right>.vue-carousel__indicators{flex-direction:row-reverse}.vue-carousel--down>.vue-carousel__indicators{flex-direction:column-reverse}.vue-carousel--controls:hover>.vue-carousel__control{opacity:.5;transform:translateX(0);z-index:1}.vue-carousel--controls:hover>.vue-carousel__control:focus,.vue-carousel--controls:hover>.vue-carousel__control:hover{opacity:1}.vue-carousel--controls>.vue-carousel__control{opacity:0;z-index:-1}.vue-carousel--controls>.vue-carousel__control--prev{transform:translateX(-50%)}.vue-carousel--controls>.vue-carousel__control--next{transform:translateX(50%)}.vue-carousel--indicators:hover>.vue-carousel__indicators{opacity:1;z-index:1}.vue-carousel--indicators>.vue-carousel__indicators{opacity:0;transition:opacity .15s;z-index:-1}.vue-carousel__list{margin:0;overflow:hidden;padding:0;position:relative;width:100%}.vue-carousel__item{display:none;margin:0}.vue-carousel__item--active,.vue-carousel__item--bottom,.vue-carousel__item--left,.vue-carousel__item--right,.vue-carousel__item--top{display:block;transition:transform .6s ease-in-out;width:100%}.vue-carousel__item--bottom,.vue-carousel__item--left,.vue-carousel__item--right,.vue-carousel__item--top{left:0;position:absolute;top:0}.vue-carousel__item--top{transform:translateY(-100%)}.vue-carousel__item--top.vue-carousel__item--to-bottom{transform:translateY(0)}.vue-carousel__item--right{transform:translateX(100%)}.vue-carousel__item--right.vue-carousel__item--to-left{transform:translateX(0)}.vue-carousel__item--bottom{transform:translateY(100%)}.vue-carousel__item--bottom.vue-carousel__item--to-top{transform:translateY(0)}.vue-carousel__item--left{transform:translateX(-100%)}.vue-carousel__item--left.vue-carousel__item--to-right{transform:translateX(0)}.vue-carousel__item--active{transform:translate(0);z-index:1}.vue-carousel__item--active.vue-carousel__item--to-top{transform:translateY(-100%)}.vue-carousel__item--active.vue-carousel__item--to-right{transform:translateX(100%)}.vue-carousel__item--active.vue-carousel__item--to-bottom{transform:translateY(100%)}.vue-carousel__item--active.vue-carousel__item--to-left{transform:translateX(-100%)}.vue-carousel__indicators{bottom:0;display:flex;justify-content:center;left:50%;list-style:none;margin:0;padding:0;position:absolute;transform:translateX(-50%);z-index:1}.vue-carousel__indicators--disc>.vue-carousel__indicator{width:.75rem}.vue-carousel__indicators--disc>.vue-carousel__indicator:before{border-radius:50%;height:.5rem;width:.5rem}.vue-carousel__indicator{cursor:pointer;height:1.5rem;margin:.125rem;opacity:.5;position:relative;transition:opacity .15s;width:1.5rem}.vue-carousel__indicator:before{background-color:#fff;content:"";display:block;height:.125rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.vue-carousel__indicator--active{opacity:1}.vue-carousel__control{background-color:rgba(0,0,0,.5);border:0;border-radius:50%;color:#fff;cursor:pointer;height:2rem;margin-top:-1rem;opacity:.5;padding:.5rem;position:absolute;top:50%;transition:all .15s;width:2rem}.vue-carousel__control:focus,.vue-carousel__control:hover{opacity:1}.vue-carousel__control:focus{outline:none}.vue-carousel__control:before{border:.0625rem solid transparent;border-radius:.125rem;content:"";display:block;height:.5rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(45deg);width:.5rem}.vue-carousel__control--prev{left:1rem}.vue-carousel__control--prev:before{border-bottom-color:#fff;border-left-color:#fff;margin-left:.125rem}.vue-carousel__control--next{right:1rem}.vue-carousel__control--next:before{border-right-color:#fff;border-top-color:#fff;margin-left:-.125rem}';y(v)},6743:function(e,t,n){n.d(t,{Am:function(){return V},FA:function(){return O},Fy:function(){return _},I9:function(){return U},Im:function(){return M},Ku:function(){return K},T9:function(){return y},Tj:function(){return m},Uj:function(){return c},XA:function(){return v},ZQ:function(){return w},bD:function(){return L},cY:function(){return b},eX:function(){return N},g:function(){return R},hp:function(){return $},jZ:function(){return E},lT:function(){return C},lV:function(){return I},nr:function(){return k},sr:function(){return S},tD:function(){return j},u:function(){return u},yU:function(){return g},zW:function(){return A}});
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{const t=m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
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
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
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
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){return!T()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const x="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=x,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?D(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function D(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
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
 */function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(F(n)&&F(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
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
function V(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function $(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function j(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
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
function K(e){return e&&e._delegate?e._delegate:e}},953:function(e,t,n){n.d(t,{BA:function(){return Ke},C4:function(){return w},EW:function(){return Me},Gc:function(){return Ee},IG:function(){return Re},IJ:function(){return $e},KR:function(){return Ue},Kh:function(){return we},PP:function(){return nt},Pr:function(){return Ge},QW:function(){return Xe},QZ:function(){return g},R1:function(){return qe},Tm:function(){return ke},Ul:function(){return tt},X2:function(){return h},bl:function(){return E},ds:function(){return y},fE:function(){return Ae},g8:function(){return Ce},hZ:function(){return D},i9:function(){return Ve},jr:function(){return l},ju:function(){return Ne},lW:function(){return Ze},mu:function(){return He},nD:function(){return Se},o5:function(){return u},rY:function(){return Qe},tB:function(){return Te},u4:function(){return O},uY:function(){return a},ux:function(){return xe},yC:function(){return o}});var r=n(33);
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new o(e)}function c(e,t=i){t&&t.active&&t.effects.push(e)}function u(){return i}function l(e){i&&i.cleanups.push(e)}class h{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,w();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(d(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),E()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=v,t=s;try{return v=!0,s=this,this._runnings++,f(this),this.fn()}finally{p(this),this._runnings--,s=t,v=e}}stop(){var e;this.active&&(f(this),p(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function d(e){return e.value}function f(e){e._trackId++,e._depsLength=0}function p(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)m(e.deps[t],e);e.deps.length=e._depsLength}}function m(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}function g(e,t){e.effect instanceof h&&(e=e.effect.fn);const n=new h(e,r.tE,(()=>{n.dirty&&n.run()}));t&&((0,r.X$)(n,t),t.scope&&c(n,t.scope)),t&&t.lazy||n.run();const i=n.run.bind(n);return i.effect=n,i}function y(e){e.effect.stop()}let v=!0,b=0;const _=[];function w(){_.push(v),v=!1}function E(){const e=_.pop();v=void 0===e||e}function T(){b++}function S(){b--;while(!b&&C.length)C.shift()()}function I(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&m(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const C=[];function k(e,t,n){T();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&C.push(r.scheduler)))}S()}const A=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},N=new WeakMap,x=Symbol(""),R=Symbol("");function O(e,t,n){if(v&&s){let t=N.get(e);t||N.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=A((()=>t.delete(n)))),I(s,r,void 0)}}function D(e,t,n,i,s,o){const a=N.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(x)),(0,r.CE)(e)&&c.push(a.get(R)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(x)),(0,r.CE)(e)&&c.push(a.get(R)));break;case"set":(0,r.CE)(e)&&c.push(a.get(x));break}T();for(const r of c)r&&k(r,4,void 0);S()}function P(e,t){var n;return null==(n=N.get(e))?void 0:n.get(t)}const M=(0,r.pD)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),F=V();function V(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){w(),T();const n=xe(this)[t].apply(this,e);return S(),E(),n}})),e}function U(e){const t=xe(this);return O(t,"has",e),t.hasOwnProperty(e)}class ${constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?ve:ye:s?ge:me).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){if(o&&(0,r.$3)(F,t))return Reflect.get(F,t,n);if("hasOwnProperty"===t)return U}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?L.has(t):M(t))?a:(i||O(e,"get",t),s?a:Ve(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?Te(a):we(a):a)}}class j extends ${constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=ke(s);if(Ae(n)||ke(n)||(s=xe(s),n=xe(n)),!(0,r.cy)(e)&&Ve(s)&&!Ve(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===xe(i)&&(o?(0,r.$H)(n,s)&&D(e,"set",t,n,s):D(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&D(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&L.has(t)||O(e,"has",t),n}ownKeys(e){return O(e,"iterate",(0,r.cy)(e)?"length":x),Reflect.ownKeys(e)}}class B extends ${constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const H=new j,q=new B,K=new j(!0),z=new B(!0),G=e=>e,W=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,i=!1){e=e["__v_raw"];const s=xe(e),o=xe(t);n||((0,r.$H)(t,o)&&O(s,"get",t),O(s,"get",o));const{has:a}=W(s),c=i?G:n?De:Oe;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],i=xe(n),s=xe(e);return t||((0,r.$H)(e,s)&&O(i,"has",e),O(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Y(e,t=!1){return e=e["__v_raw"],!t&&O(xe(e),"iterate",x),Reflect.get(e,"size",e)}function J(e){e=xe(e);const t=xe(this),n=W(t),r=n.has.call(t,e);return r||(t.add(e),D(t,"add",e,e)),this}function Z(e,t){t=xe(t);const n=xe(this),{has:i,get:s}=W(n);let o=i.call(n,e);o||(e=xe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.$H)(t,a)&&D(n,"set",e,t,a):D(n,"add",e,t),this}function ee(e){const t=xe(this),{has:n,get:r}=W(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&D(t,"delete",e,void 0,s),o}function te(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&D(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=xe(s),a=t?G:e?De:Oe;return!e&&O(o,"iterate",x),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=xe(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?G:t?De:Oe;return!t&&O(o,"iterate",u?R:x),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(){const e={get(e){return Q(this,e)},get size(){return Y(this)},has:X,add:J,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return Y(this)},has:X,add:J,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,ue]=se();function le(e,t){const n=t?e?ue:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const he={get:le(!1,!1)},de={get:le(!1,!0)},fe={get:le(!0,!1)},pe={get:le(!0,!0)};const me=new WeakMap,ge=new WeakMap,ye=new WeakMap,ve=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be((0,r.Zf)(e))}function we(e){return ke(e)?e:Ie(e,!1,H,he,me)}function Ee(e){return Ie(e,!1,K,de,ge)}function Te(e){return Ie(e,!0,q,fe,ye)}function Se(e){return Ie(e,!0,z,pe,ve)}function Ie(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=_e(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ce(e){return ke(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function Ne(e){return Ce(e)||ke(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Re(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Gv)(e)?we(e):e,De=e=>(0,r.Gv)(e)?Te(e):e;class Pe{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new h((()=>e(this._value)),(()=>Fe(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=xe(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Fe(e,4),Le(e),e.effect._dirtyLevel>=2&&Fe(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Me(e,t,n=!1){let i,s;const o=(0,r.Tn)(e);o?(i=e,s=r.tE):(i=e.get,s=e.set);const a=new Pe(i,s,o||!s,n);return a}function Le(e){var t;v&&s&&(e=xe(e),I(s,null!=(t=e.dep)?t:e.dep=A((()=>e.dep=void 0),e instanceof Pe?e:void 0),void 0))}function Fe(e,t=4,n){e=xe(e);const r=e.dep;r&&k(r,t,void 0)}function Ve(e){return!(!e||!0!==e.__v_isRef)}function Ue(e){return je(e,!1)}function $e(e){return je(e,!0)}function je(e,t){return Ve(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:Oe(e)}get value(){return Le(this),this._value}set value(e){const t=this.__v_isShallow||Ae(e)||ke(e);e=t?e:xe(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Oe(e),Fe(this,4,e))}}function He(e){Fe(e,4,void 0)}function qe(e){return Ve(e)?e.value:e}function Ke(e){return(0,r.Tn)(e)?e():qe(e)}const ze={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ge(e){return Ce(e)?e:new Proxy(e,ze)}class We{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>Le(this)),(()=>Fe(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Qe(e){return new We(e)}function Xe(e){const t=(0,r.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=et(e,n);return t}class Ye{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return P(xe(this._object),this._key)}}class Je{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ze(e,t,n){return Ve(e)?e:(0,r.Tn)(e)?new Je(e):(0,r.Gv)(e)&&arguments.length>1?et(e,t,n):Ue(e)}function et(e,t,n){const r=e[t];return Ve(r)?r:new Ye(e,t,n)}const tt={GET:"get",HAS:"has",ITERATE:"iterate"},nt={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"}},641:function(e,t,n){n.d(t,{$V:function(){return nt},$u:function(){return bt},$y:function(){return le},BA:function(){return r.BA},Bs:function(){return wi},C4:function(){return i.C4},CE:function(){return Er},Df:function(){return Ze},Dl:function(){return D},E:function(){return Xt},E3:function(){return Pr},EW:function(){return gi},EY:function(){return hr},FK:function(){return lr},Fv:function(){return Lr},Fw:function(){return Ae},GM:function(){return Ut},Gc:function(){return r.Gc},Gt:function(){return yn},Gw:function(){return Ai},Gy:function(){return He},H4:function(){return y},HF:function(){return Gt},Ht:function(){return Ht},IG:function(){return r.IG},IJ:function(){return r.IJ},Ic:function(){return vt},Im:function(){return cr},K9:function(){return Kn},KC:function(){return gt},KR:function(){return r.KR},Kh:function(){return r.Kh},LJ:function(){return Ni},LM:function(){return Ne},Lk:function(){return xr},Lu:function(){return $t},MZ:function(){return Je},Mw:function(){return dr},NP:function(){return jt},Ng:function(){return Dr},OA:function(){return qt},OW:function(){return Qe},PP:function(){return r.PP},PR:function(){return ot},PS:function(){return bn},PT:function(){return i.PT},Pr:function(){return r.Pr},Q3:function(){return Fr},QP:function(){return Ke},QW:function(){return r.QW},QZ:function(){return r.QZ},Qi:function(){return Q},R1:function(){return r.R1},R8:function(){return Ti},RG:function(){return At},SS:function(){return Et},Tb:function(){return xt},Tm:function(){return r.Tm},Tr:function(){return i.Tr},U4:function(){return d},U_:function(){return Oe},Ul:function(){return r.Ul},Vq:function(){return _r},WQ:function(){return vn},Wv:function(){return Tr},X2:function(){return r.X2},Y4:function(){return ut},Y5:function(){return xi},YY:function(){return Y},Yj:function(){return Lt},ZH:function(){return i.ZH},ZQ:function(){return Si},_B:function(){return i._B},aT:function(){return Ri},bF:function(){return Rr},bU:function(){return _i},bj:function(){return Tt},bn:function(){return Qt},bo:function(){return Ue},ci:function(){return zn},dA:function(){return oi},dY:function(){return A},ds:function(){return r.ds},eW:function(){return Mr},eX:function(){return kt},fE:function(){return r.fE},fn:function(){return yi},g2:function(){return ce},g8:function(){return r.g8},gN:function(){return he},gW:function(){return Cr},gh:function(){return m},h:function(){return vi},hi:function(){return wt},i9:function(){return r.i9},iD:function(){return Ci},jC:function(){return fr},jr:function(){return r.jr},jt:function(){return X},ju:function(){return r.ju},k6:function(){return J},lW:function(){return r.lW},lt:function(){return Ii},mu:function(){return r.mu},n:function(){return ct},nD:function(){return r.nD},nI:function(){return Gr},nT:function(){return xe},o5:function(){return r.o5},p9:function(){return Re},pI:function(){return Ct},pM:function(){return et},pR:function(){return Ge},qG:function(){return It},qL:function(){return g},qP:function(){return Ft},qR:function(){return St},rE:function(){return Ei},rO:function(){return Bt},rU:function(){return i.rU},rY:function(){return r.rY},sV:function(){return yt},tB:function(){return r.tB},tC:function(){return si},tG:function(){return f},tY:function(){return ye},uX:function(){return gr},uY:function(){return r.uY},ux:function(){return r.ux},v6:function(){return jr},v_:function(){return i.v_},vv:function(){return Sr},wB:function(){return Pe},wk:function(){return Vt},xo:function(){return _t},y$:function(){return bi},yC:function(){return r.yC},zz:function(){return Wt}});var r=n(953),i=n(33);
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const s=[];function o(e,...t){(0,r.C4)();const n=s.length?s[s.length-1].component:null,i=n&&n.appContext.config.warnHandler,o=a();if(i)m(i,n,11,[e+t.map((e=>{var t,n;return null!=(n=null==(t=e.toString)?void 0:t.call(e))?n:JSON.stringify(e)})).join(""),n&&n.proxy,o.map((({vnode:e})=>`at <${pi(n,e.type)}>`)).join("\n"),o]);else{const n=[`[Vue warn]: ${e}`,...t];o.length&&n.push("\n",...c(o)),console.warn(...n)}(0,r.bl)()}function a(){let e=s[s.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function c(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...u(e))})),t}function u({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=` at <${pi(e.component,e.type,r)}`,s=">"+n;return e.props?[i,...l(e.props),s]:[i+s]}function l(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...h(n,e[n]))})),n.length>3&&t.push(" ..."),t}function h(e,t,n){return(0,i.Kg)(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:(0,r.i9)(t)?(t=h(e,(0,r.ux)(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):(0,i.Tn)(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=(0,r.ux)(t),n?t:[`${e}=`,t])}function d(e,t){}const f={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},p={["sp"]:"serverPrefetch hook",["bc"]:"beforeCreate hook",["c"]:"created hook",["bm"]:"beforeMount hook",["m"]:"mounted hook",["bu"]:"beforeUpdate hook",["u"]:"updated",["bum"]:"beforeUnmount hook",["um"]:"unmounted hook",["a"]:"activated hook",["da"]:"deactivated hook",["ec"]:"errorCaptured hook",["rtc"]:"renderTracked hook",["rtg"]:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function m(e,t,n,r){try{return r?e(...r):e()}catch(i){y(i,t,n)}}function g(e,t,n,r){if((0,i.Tn)(e)){const s=m(e,t,n,r);return s&&(0,i.yL)(s)&&s.catch((e=>{y(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(g(e[i],t,n,r));return s}function y(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void m(o,null,10,[e,i,s])}v(e,n,i,r)}function v(e,t,n,r=!0){console.error(e)}let b=!1,_=!1;const w=[];let E=0;const T=[];let S=null,I=0;const C=Promise.resolve();let k=null;function A(e){const t=k||C;return e?t.then(this?e.bind(this):e):t}function N(e){let t=E+1,n=w.length;while(t<n){const r=t+n>>>1,i=w[r],s=L(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function x(e){w.length&&w.includes(e,b&&e.allowRecurse?E+1:E)||(null==e.id?w.push(e):w.splice(N(e.id),0,e),R())}function R(){b||_||(_=!0,k=C.then(V))}function O(e){const t=w.indexOf(e);t>E&&w.splice(t,1)}function D(e){(0,i.cy)(e)?T.push(...e):S&&S.includes(e,e.allowRecurse?I+1:I)||T.push(e),R()}function P(e,t,n=(b?E+1:0)){for(0;n<w.length;n++){const t=w[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,w.splice(n,1),n--,t()}}}function M(e){if(T.length){const e=[...new Set(T)].sort(((e,t)=>L(e)-L(t)));if(T.length=0,S)return void S.push(...e);for(S=e,I=0;I<S.length;I++)S[I]();S=null,I=0}}const L=e=>null==e.id?1/0:e.id,F=(e,t)=>{const n=L(e)-L(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function V(e){_=!1,b=!0,w.sort(F);i.tE;try{for(E=0;E<w.length;E++){const e=w[E];e&&!1!==e.active&&m(e,null,14)}}finally{E=0,w.length=0,M(e),b=!1,k=null,(w.length||T.length)&&V(e)}}let U,$=[],j=!1;function B(e,t){var n,r;if(U=e,U)U.enabled=!0,$.forEach((({event:e,args:t})=>U.emit(e,...t))),$=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null==(r=null==(n=window.navigator)?void 0:n.userAgent)?void 0:r.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push((e=>{B(e,t)})),setTimeout((()=>{U||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,j=!0,$=[])}),3e3)}else j=!0,$=[]}function H(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i.MZ;o&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),t&&(s=n.map(i.bB))}let c;let u=r[c=(0,i.rU)(t)]||r[c=(0,i.rU)((0,i.PT)(t))];!u&&o&&(u=r[c=(0,i.rU)((0,i.Tg)(t))]),u&&g(u,e,6,s);const l=r[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,g(l,e,6,s)}}function q(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=q(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function K(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}let z=null,G=null;function W(e){const t=z;return z=e,G=e&&e.type.__scopeId||null,t}function Q(e){G=e}function X(){G=null}const Y=e=>J;function J(e,t=z,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&_r(-1);const i=W(t);let s;try{s=e(...n)}finally{W(i),r._d&&_r(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Z(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,b;const _=W(e);try{if(4&n.shapeFlag){const e=s||r,t=e;v=Vr(h.call(t,e,d,o,p,f,m)),b=u}else{const e=t;0,v=Vr(e.length>1?e(o,{attrs:u,slots:c,emit:l}):e(o,null)),b=t.props?u:te(u)}}catch(E){pr.length=0,y(E,e,1),v=Rr(dr)}let w=v;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(i.CP)&&(b=ne(b,a)),w=Pr(w,b))}return n.dirs&&(w=Pr(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,W(_),v}function ee(e,t=!0){let n;for(let r=0;r<e.length;r++){const t=e[r];if(!Sr(t))return;if(t.type!==dr||"v-if"===t.children){if(n)return;n=t}}return n}const te=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},ne=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function re(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ie(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ie(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!K(u,n))return!0}}return!1}function ie(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!K(n,s))return!0}return!1}function se({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const oe="components",ae="directives";function ce(e,t){return de(oe,e,!0,t)||e}const ue=Symbol.for("v-ndc");function le(e){return(0,i.Kg)(e)?de(oe,e,!1)||e:e||ue}function he(e){return de(ae,e)}function de(e,t,n=!0,r=!1){const s=z||zr;if(s){const n=s.type;if(e===oe){const e=fi(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=fe(s[e]||n[e],t)||fe(s.appContext[e],t);return!o&&r?n:o}}function fe(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const pe=e=>e.__isSuspense;let me=0;const ge={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,s,o,a,c,u){if(null==e)be(t,n,r,i,s,o,a,c,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback)return t.suspense=e.suspense,t.suspense.vnode=t,void(t.el=e.el);_e(e,t,n,r,i,o,a,c,u)}},hydrate:Ee,create:we,normalize:Te},ye=ge;function ve(e,t){const n=e.props&&e.props[t];(0,i.Tn)(n)&&n()}function be(e,t,n,r,i,s,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=e.suspense=we(e,i,r,t,h,n,s,o,a,c);u(null,d.pendingBranch=e.ssContent,h,null,r,d,s,o),d.deps>0?(ve(e,"onPending"),ve(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,s,o),Ce(d,e.ssFallback)):d.resolve(!1,!0)}function _e(e,t,n,r,i,s,o,a,{p:c,um:u,o:{createElement:l}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:y}=h;if(m)h.pendingBranch=d,Ir(d,m)?(c(m,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():g&&(y||(c(p,f,n,r,i,null,s,o,a),Ce(h,f)))):(h.pendingId=me++,y?(h.isHydrating=!1,h.activeBranch=m):u(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),g?(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(c(p,f,n,r,i,null,s,o,a),Ce(h,f))):p&&Ir(d,p)?(c(p,d,n,r,i,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&Ir(d,p))c(p,d,n,r,i,h,s,o,a),Ce(h,d);else if(ve(t,"onPending"),h.pendingBranch=d,512&d.shapeFlag?h.pendingId=d.component.suspenseId:h.pendingId=me++,c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:e,pendingId:t}=h;e>0?setTimeout((()=>{h.pendingId===t&&h.fallback(f)}),e):0===e&&h.fallback(f)}}function we(e,t,n,r,s,o,a,c,u,l,h=!1){const{p:d,m:f,um:p,n:m,o:{parentNode:g,remove:v}}=l;let b;const _=ke(e);_&&(null==t?void 0:t.pendingBranch)&&(b=t.pendingId,t.deps++);const w=e.props?(0,i.Ro)(e.props.timeout):void 0;const E=o,T={vnode:e,parent:t,parentComponent:n,namespace:a,container:r,hiddenContainer:s,deps:0,pendingId:me++,timeout:"number"===typeof w?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){const{vnode:r,activeBranch:i,pendingBranch:s,pendingId:a,effects:c,parentComponent:u,container:l}=T;let h=!1;T.isHydrating?T.isHydrating=!1:e||(h=i&&s.transition&&"out-in"===s.transition.mode,h&&(i.transition.afterLeave=()=>{a===T.pendingId&&(f(s,l,o===E?m(i):o,0),D(c))}),i&&(g(i.el)!==T.hiddenContainer&&(o=m(i)),p(i,u,T,!0)),h||f(s,l,o,0)),Ce(T,s),T.pendingBranch=null,T.isInFallback=!1;let d=T.parent,y=!1;while(d){if(d.pendingBranch){d.effects.push(...c),y=!0;break}d=d.parent}y||h||D(c),T.effects=[],_&&t&&t.pendingBranch&&b===t.pendingId&&(t.deps--,0!==t.deps||n||t.resolve()),ve(r,"onResolve")},fallback(e){if(!T.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:s}=T;ve(t,"onFallback");const o=m(n),a=()=>{T.isInFallback&&(d(null,e,i,o,r,null,s,c,u),Ce(T,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=a),T.isInFallback=!0,p(n,r,null,!0),l||a()},move(e,t,n){T.activeBranch&&f(T.activeBranch,e,t,n),T.container=e},next(){return T.activeBranch&&m(T.activeBranch)},registerDep(e,t){const n=!!T.pendingBranch;n&&T.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{y(t,e,0)})).then((i=>{if(e.isUnmounted||T.isUnmounted||T.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;ii(e,i,!1),r&&(s.el=r);const o=!r&&e.subTree.el;t(e,s,g(r||e.subTree.el),r?null:m(e.subTree),T,a,u),o&&v(o),se(e,s.el),n&&0===--T.deps&&T.resolve()}))},unmount(e,t){T.isUnmounted=!0,T.activeBranch&&p(T.activeBranch,n,e,t),T.pendingBranch&&p(T.pendingBranch,n,e,t)}};return T}function Ee(e,t,n,r,i,s,o,a,c){const u=t.suspense=we(t,r,n,e.parentNode,document.createElement("div"),null,i,s,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,s,o);return 0===u.deps&&u.resolve(!1,!0),l}function Te(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=Se(r?n.default:n),e.ssFallback=r?Se(n.fallback):Rr(dr)}function Se(e){let t;if((0,i.Tn)(e)){const n=br&&e._c;n&&(e._d=!1,gr()),e=e(),n&&(e._d=!0,t=mr,yr())}if((0,i.cy)(e)){const t=ee(e);0,e=t}return e=Vr(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function Ie(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):D(e)}function Ce(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let i=t.el;while(!i&&t.component)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,se(r,i))}function ke(e){var t;return null!=(null==(t=e.props)?void 0:t.suspensible)&&!1!==e.props.suspensible}const Ae=Symbol.for("v-scx"),Ne=()=>{{const e=vn(Ae);return e}};function xe(e,t){return Me(e,null,t)}function Re(e,t){return Me(e,null,{flush:"post"})}function Oe(e,t){return Me(e,null,{flush:"sync"})}const De={};function Pe(e,t,n){return Me(e,t,n)}function Me(e,t,{immediate:n,deep:s,flush:o,once:a,onTrack:c,onTrigger:u}=i.MZ){if(t&&a){const e=t;t=(...t)=>{e(...t),I()}}const l=zr,h=e=>!0===s?e:Ve(e,!1===s?1:void 0);let d,f,p=!1,y=!1;if((0,r.i9)(e)?(d=()=>e.value,p=(0,r.fE)(e)):(0,r.g8)(e)?(d=()=>h(e),p=!0):(0,i.cy)(e)?(y=!0,p=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),d=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?h(e):(0,i.Tn)(e)?m(e,l,2):void 0))):d=(0,i.Tn)(e)?t?()=>m(e,l,2):()=>(f&&f(),g(e,l,3,[b])):i.tE,t&&s){const e=d;d=()=>Ve(e())}let v,b=e=>{f=T.onStop=()=>{m(e,l,4),f=T.onStop=void 0}};if(ti){if(b=i.tE,t?n&&g(t,l,3,[d(),y?[]:void 0,b]):d(),"sync"!==o)return i.tE;{const e=Ne();v=e.__watcherHandles||(e.__watcherHandles=[])}}let _=y?new Array(e.length).fill(De):De;const w=()=>{if(T.active&&T.dirty)if(t){const e=T.run();(s||p||(y?e.some(((e,t)=>(0,i.$H)(e,_[t]))):(0,i.$H)(e,_)))&&(f&&f(),g(t,l,3,[e,_===De?void 0:y&&_[0]===De?[]:_,b]),_=e)}else T.run()};let E;w.allowRecurse=!!t,"sync"===o?E=w:"post"===o?E=()=>qn(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),E=()=>x(w));const T=new r.X2(d,i.tE,E),S=(0,r.o5)(),I=()=>{T.stop(),S&&(0,i.TF)(S.effects,T)};return t?n?w():_=T.run():"post"===o?qn(T.run.bind(T),l&&l.suspense):T.run(),v&&v.push(I),I}function Le(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?Fe(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=Xr(this),c=Me(s,o.bind(r),n);return a(),c}function Fe(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ve(e,t,n=0,s){if(!(0,i.Gv)(e)||e["__v_skip"])return e;if(t&&t>0){if(n>=t)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),(0,r.i9)(e))Ve(e.value,t,n,s);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)Ve(e[r],t,n,s);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{Ve(e,t,n,s)}));else if((0,i.Qd)(e))for(const r in e)Ve(e[r],t,n,s);return e}function Ue(e,t){if(null===z)return e;const n=li(z)||z.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&Ve(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function $e(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&((0,r.C4)(),g(u,n,8,[e.el,c,e,t]),(0,r.bl)())}}const je=Symbol("_leaveCb"),Be=Symbol("_enterCb");function He(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yt((()=>{e.isMounted=!0})),_t((()=>{e.isUnmounting=!0})),e}const qe=[Function,Array],Ke={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},ze={name:"BaseTransition",props:Ke,setup(e,{slots:t}){const n=Gr(),i=He();return()=>{const s=t.default&&Ze(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==dr){0,o=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return Xe(o);const u=Ye(o);if(!u)return Xe(o);const l=Qe(u,a,i,n);Je(u,l);const h=n.subTree,d=h&&Ye(h);if(d&&d.type!==dr&&!Ir(u,d)){const e=Qe(d,a,i,n);if(Je(d,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},Xe(o);"in-out"===c&&u.type!==dr&&(e.delayLeave=(e,t,n)=>{const r=We(i,d);r[String(d.key)]=d,e[je]=()=>{t(),e[je]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},Ge=ze;function We(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Qe(e,t,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:_}=t,w=String(e.key),E=We(n,e),T=(e,t)=>{e&&g(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=y||c}t[je]&&t[je](!0);const i=E[w];i&&Ir(e,i)&&i.el[je]&&i.el[je](),T(r,[t])},enter(e){let t=u,r=l,i=h;if(!n.isMounted){if(!s)return;t=v||u,r=b||l,i=_||h}let o=!1;const a=e[Be]=t=>{o||(o=!0,T(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e[Be]=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[Be]&&t[Be](!0),n.isUnmounting)return r();T(d,[t]);let s=!1;const o=t[je]=n=>{s||(s=!0,r(),T(n?m:p,[t]),t[je]=void 0,E[i]===e&&delete E[i])};E[i]=e,f?S(f,[t,o]):o()},clone(e){return Qe(e,t,n,r)}};return I}function Xe(e){if(it(e))return e=Pr(e),e.children=null,e}function Ye(e){return it(e)?e.children?e.children[0]:void 0:e}function Je(e,t){6&e.shapeFlag&&e.component?Je(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ze(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===lr?(128&o.patchFlag&&i++,r=r.concat(Ze(o.children,t,a))):(t||o.type!==dr)&&r.push(null!=a?Pr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function et(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const tt=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;function nt(e){(0,i.Tn)(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:c=!0,onError:u}=e;let l,h=null,d=0;const f=()=>(d++,h=null,p()),p=()=>{let e;return h||(e=h=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),u)return new Promise(((t,n)=>{const r=()=>t(f()),i=()=>n(e);u(e,r,i,d+1)}));throw e})).then((t=>e!==h&&h?h:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),l=t,t))))};return et({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return l},setup(){const e=zr;if(l)return()=>rt(l,e);const t=t=>{h=null,y(t,e,13,!s)};if(c&&e.suspense||ti)return p().then((t=>()=>rt(t,e))).catch((e=>(t(e),()=>s?Rr(s,{error:e}):null)));const i=(0,r.KR)(!1),u=(0,r.KR)(),d=(0,r.KR)(!!o);return o&&setTimeout((()=>{d.value=!1}),o),null!=a&&setTimeout((()=>{if(!i.value&&!u.value){const e=new Error(`Async component timed out after ${a}ms.`);t(e),u.value=e}}),a),p().then((()=>{i.value=!0,e.parent&&it(e.parent.vnode)&&(e.parent.effect.dirty=!0,x(e.parent.update))})).catch((e=>{t(e),u.value=e})),()=>i.value&&l?rt(l,e):u.value&&s?Rr(s,{error:u.value}):n&&!d.value?Rr(n):void 0}})}function rt(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,o=Rr(e,r,i);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const it=e=>e.type.__isKeepAlive,st={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Gr(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const s=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:d}}}=r,f=d("div");function p(e){dt(e),h(e,n,c,!0)}function m(e){s.forEach(((t,n)=>{const r=fi(t.type);!r||e&&e(r)||g(n)}))}function g(e){const t=s.get(e);a&&Ir(t,a)?a&&dt(a):p(t),s.delete(e),o.delete(e)}r.activate=(e,t,n,r,s)=>{const o=e.component;l(e,t,n,0,c),u(o.vnode,e,t,n,o,c,r,e.slotScopeIds,s),qn((()=>{o.isDeactivated=!1,o.a&&(0,i.DY)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&Br(t,o.parent,e)}),c)},r.deactivate=e=>{const t=e.component;l(e,f,null,1,c),qn((()=>{t.da&&(0,i.DY)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&Br(n,t.parent,e),t.isDeactivated=!0}),c)},Pe((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>at(e,t))),t&&m((e=>!at(t,e)))}),{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&s.set(y,ft(n.subTree))};return yt(v),bt(v),_t((()=>{s.forEach((e=>{const{subTree:t,suspense:r}=n,i=ft(t);if(e.type!==i.type||e.key!==i.key)p(e);else{dt(i);const e=i.component.da;e&&qn(e,r)}}))})),()=>{if(y=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!Sr(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=ft(r);const c=i.type,u=fi(tt(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:d}=e;if(l&&(!u||!at(l,u))||h&&u&&at(h,u))return a=i,r;const f=null==i.key?c:i.key,p=s.get(f);return i.el&&(i=Pr(i),128&r.shapeFlag&&(r.ssContent=i)),y=f,p?(i.el=p.el,i.component=p.component,i.transition&&Je(i,i.transition),i.shapeFlag|=512,o.delete(f),o.add(f)):(o.add(f),d&&o.size>parseInt(d,10)&&g(o.values().next().value)),i.shapeFlag|=256,a=i,pe(r.type)?r:i}}},ot=st;function at(e,t){return(0,i.cy)(e)?e.some((e=>at(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function ct(e,t){lt(e,"a",t)}function ut(e,t){lt(e,"da",t)}function lt(e,t,n=zr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(pt(t,r,n),n){let e=n.parent;while(e&&e.parent)it(e.parent.vnode)&&ht(r,t,n,e),e=e.parent}}function ht(e,t,n,r){const s=pt(t,e,r,!0);wt((()=>{(0,i.TF)(r[t],s)}),n)}function dt(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ft(e){return 128&e.shapeFlag?e.ssContent:e}function pt(e,t,n=zr,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const s=Xr(n),o=g(t,n,e,i);return s(),(0,r.bl)(),o});return i?s.unshift(o):s.push(o),o}}const mt=e=>(t,n=zr)=>(!ti||"sp"===e)&&pt(e,((...e)=>t(...e)),n),gt=mt("bm"),yt=mt("m"),vt=mt("bu"),bt=mt("u"),_t=mt("bum"),wt=mt("um"),Et=mt("sp"),Tt=mt("rtg"),St=mt("rtc");function It(e,t=zr){pt("ec",e,t)}function Ct(e,t,n,r){let s;const o=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function kt(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,i.cy)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function At(e,t,n={},r,i){if(z.isCE||z.parent&&tt(z.parent)&&z.parent.isCE)return"default"!==t&&(n.name=t),Rr("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),gr();const o=s&&Nt(s(n)),a=Tr(lr,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Nt(e){return e.some((e=>!Sr(e)||e.type!==dr&&!(e.type===lr&&!Nt(e.children))))?e:null}function xt(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.rU)(r)]=e[r];return n}const Rt=e=>e?Jr(e)?li(e)||e.proxy:Rt(e.parent):null,Ot=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rt(e.parent),$root:e=>Rt(e.root),$emit:e=>e.emit,$options:e=>nn(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,x(e.update)}),$nextTick:e=>e.n||(e.n=A.bind(e.proxy)),$watch:e=>Le.bind(e)}),Dt=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Pt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Dt(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Yt&&(c[t]=0)}}const d=Ot[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Dt(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Dt(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ot,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Mt=(0,i.X$)({},Pt,{get(e,t){if(t!==Symbol.unscopables)return Pt.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!(0,i.BH)(t);return n}});function Lt(){return null}function Ft(){return null}function Vt(e){0}function Ut(e){0}function $t(){return null}function jt(){0}function Bt(e,t){return null}function Ht(){return Kt().slots}function qt(){return Kt().attrs}function Kt(){const e=Gr();return e.setupContext||(e.setupContext=ui(e))}function zt(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}function Gt(e,t){const n=zt(e);for(const r in t){if(r.startsWith("__skip"))continue;let e=n[r];e?(0,i.cy)(e)||(0,i.Tn)(e)?e=n[r]={type:e,default:t[r]}:e.default=t[r]:null===e&&(e=n[r]={default:t[r]}),e&&t[`__skip_${r}`]&&(e.skipFactory=!0)}return n}function Wt(e,t){return e&&t?(0,i.cy)(e)&&(0,i.cy)(t)?e.concat(t):(0,i.X$)({},zt(e),zt(t)):e||t}function Qt(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Xt(e){const t=Gr();let n=e();return Yr(),(0,i.yL)(n)&&(n=n.catch((e=>{throw Xr(t),e}))),[n,()=>Xr(t)]}let Yt=!0;function Jt(e){const t=nn(e),n=e.proxy,s=e.ctx;Yt=!1,t.beforeCreate&&en(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:C,serverPrefetch:k,expose:A,inheritAttrs:N,components:x,directives:R,filters:O}=t,D=null;if(h&&Zt(h,s,D),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Yt=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=gi({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)tn(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{yn(t,e[t])}))}function P(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&en(d,e,"c"),P(gt,f),P(yt,p),P(vt,m),P(bt,g),P(ct,y),P(ut,v),P(It,C),P(St,S),P(Tt,I),P(_t,_),P(wt,E),P(Et,k),(0,i.cy)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=N&&(e.inheritAttrs=N),x&&(e.components=x),R&&(e.directives=R)}function Zt(e,t,n=i.tE){(0,i.cy)(e)&&(e=cn(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?vn(n.from||s,n.default,!0):vn(n.from||s):vn(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function en(e,t,n){g((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function tn(e,t,n,r){const s=r.includes(".")?Fe(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&Pe(s,n)}else if((0,i.Tn)(e))Pe(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>tn(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&Pe(s,r,e)}else 0}function nn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>rn(u,e,a,!0))),rn(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function rn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&rn(e,s,n,!0),i&&i.forEach((t=>rn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=sn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const sn={data:on,props:hn,emits:hn,methods:ln,computed:ln,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:ln,directives:ln,watch:dn,provide:on,inject:an};function on(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function an(e,t){return ln(cn(e),cn(t))}function cn(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function un(e,t){return e?[...new Set([].concat(e,t))]:t}function ln(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function hn(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),zt(e),zt(null!=t?t:{})):t}function dn(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=un(e[r],t[r]);return n}function fn(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pn=0;function mn(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=fn(),o=new WeakSet;let a=!1;const c=s.app={_uid:pn++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ei,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=Rr(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,li(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=gn;gn=c;try{return e()}finally{gn=t}}};return c}}let gn=null;function yn(e,t){if(zr){let n=zr.provides;const r=zr.parent&&zr.parent.provides;r===n&&(n=zr.provides=Object.create(r)),n[e]=t}else 0}function vn(e,t,n=!1){const r=zr||z;if(r||gn){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:gn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}function bn(){return!!(zr||z||gn)}function _n(e,t,n,s=!1){const o={},a={};(0,i.yQ)(a,kr,1),e.propsDefaults=Object.create(null),En(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function wn(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;En(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Tn(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(K(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=Tn(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e,"set","$attrs")}function En(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:K(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Tn(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function Tn(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Xr(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function Sn(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=Sn(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);In(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(In(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=An(Boolean,r.type),n=An(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function In(e){return"$"!==e[0]&&!(0,i.SU)(e)}function Cn(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function kn(e,t){return Cn(e)===Cn(t)}function An(e,t){return(0,i.cy)(t)?t.findIndex((t=>kn(t,e))):(0,i.Tn)(t)&&kn(t,e)?0:-1}const Nn=e=>"_"===e[0]||"$stable"===e,xn=e=>(0,i.cy)(e)?e.map(Vr):[Vr(e)],Rn=(e,t,n)=>{if(t._n)return t;const r=J(((...e)=>xn(t(...e))),n);return r._c=!1,r},On=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Nn(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=Rn(s,n,r);else if(null!=n){0;const e=xn(n);t[s]=()=>e}}},Dn=(e,t)=>{const n=xn(t);e.slots.default=()=>n},Pn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.ux)(t),(0,i.yQ)(t,"_",n)):On(t,e.slots={})}else e.slots={},t&&Dn(e,t);(0,i.yQ)(e.slots,kr,1)},Mn=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.X$)(s,t),n||1!==e||delete s._):(o=!t.$stable,On(t,s)),a=t}else t&&(Dn(e,t),a={default:1});if(o)for(const i in s)Nn(i)||null!=a[i]||delete s[i]};function Ln(e,t,n,s,o=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>Ln(e,t&&((0,i.cy)(t)?t[r]:t),n,s,o)));if(tt(s)&&!o)return;const a=4&s.shapeFlag?li(s.component)||s.component.proxy:s.el,c=o?null:a,{i:u,r:l}=e;const h=t&&t.r,d=u.refs===i.MZ?u.refs={}:u.refs,f=u.setupState;if(null!=h&&h!==l&&((0,i.Kg)(h)?(d[h]=null,(0,i.$3)(f,h)&&(f[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,i.Tn)(l))m(l,u,12,[c,d]);else{const t=(0,i.Kg)(l),s=(0,r.i9)(l);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.$3)(f,l)?f[l]:d[l]:l.value;o?(0,i.cy)(n)&&(0,i.TF)(n,a):(0,i.cy)(n)?n.includes(a)||n.push(a):t?(d[l]=[a],(0,i.$3)(f,l)&&(f[l]=d[l])):(l.value=[a],e.k&&(d[e.k]=l.value))}else t?(d[l]=c,(0,i.$3)(f,l)&&(f[l]=c)):s&&(l.value=c,e.k&&(d[e.k]=c))};c?(r.id=-1,qn(r,n)):r()}else 0}}let Fn=!1;const Vn=e=>e.namespaceURI.includes("svg")&&"foreignObject"!==e.tagName,Un=e=>e.namespaceURI.includes("MathML"),$n=e=>Vn(e)?"svg":Un(e)?"mathml":void 0,jn=e=>8===e.nodeType;function Bn(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:a,parentNode:c,remove:u,insert:l,createComment:h}}=e,d=(e,t)=>{if(!t.hasChildNodes())return __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),n(null,e,t),M(),void(t._vnode=e);Fn=!1,f(t.firstChild,e,null,null,null),M(),t._vnode=e,Fn&&console.error("Hydration completed but contains mismatches.")},f=(n,r,i,u,h,d=!1)=>{const w=jn(n)&&"["===n.data,E=()=>y(n,r,i,u,h,w),{type:T,ref:S,shapeFlag:I,patchFlag:C}=r;let k=n.nodeType;r.el=n,-2===C&&(d=!1,r.dynamicChildren=null);let A=null;switch(T){case hr:3!==k?""===r.children?(l(r.el=s(""),c(n),n),A=n):A=E():(n.data!==r.children&&(Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Hydration text mismatch in",n.parentNode,`\n  - rendered on server: ${JSON.stringify(n.data)}\n  - expected on client: ${JSON.stringify(r.children)}`),n.data=r.children),A=a(n));break;case dr:_(n)?(A=a(n),b(r.el=n.content.firstChild,n,i)):A=8!==k||w?E():a(n);break;case fr:if(w&&(n=a(n),k=n.nodeType),1===k||3===k){A=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===A.nodeType?A.outerHTML:A.data),t===r.staticCount-1&&(r.anchor=A),A=a(A);return w?a(A):A}E();break;case lr:A=w?g(n,r,i,u,h,d):E();break;default:if(1&I)A=1===k&&r.type.toLowerCase()===n.tagName.toLowerCase()||_(n)?p(n,r,i,u,h,d):E();else if(6&I){r.slotScopeIds=h;const e=c(n);if(A=w?v(n):jn(n)&&"teleport start"===n.data?v(n,n.data,"teleport end"):a(n),t(r,e,null,i,u,$n(e),d),tt(r)){let t;w?(t=Rr(lr),t.anchor=A?A.previousSibling:e.lastChild):t=3===n.nodeType?Mr(""):Rr("div"),t.el=n,r.component.subTree=t}}else 64&I?A=8!==k?E():r.type.hydrate(n,r,i,u,h,d,e,m):128&I?A=r.type.hydrate(n,r,i,u,$n(c(n)),h,d,e,f):__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Invalid HostVNode type:",T,`(${typeof T})`)}return null!=S&&Ln(S,null,u,r),A},p=(e,t,n,s,a,c)=>{c=c||!!t.dynamicChildren;const{type:l,props:h,patchFlag:d,shapeFlag:f,dirs:p,transition:g}=t,y="input"===l||"option"===l;if(y||-1!==d){p&&$e(t,null,n,"created");let l,v=!1;if(_(e)){v=Xn(s,g)&&n&&n.vnode.props&&n.vnode.props.appear;const r=e.content.firstChild;v&&g.beforeEnter(r),b(r,e,n),t.el=e=r}if(16&f&&(!h||!h.innerHTML&&!h.textContent)){let r=m(e.firstChild,t,e,n,s,a,c),i=!1;while(r){Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!i&&(o("Hydration children mismatch on",e,"\nServer rendered element contains more child nodes than client vdom."),i=!0);const t=r;r=r.nextSibling,u(t)}}else 8&f&&e.textContent!==t.children&&(Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Hydration text content mismatch on",e,`\n  - rendered on server: ${e.textContent}\n  - expected on client: ${t.children}`),e.textContent=t.children);if(h)if(y||!c||48&d)for(const t in h)(y&&(t.endsWith("value")||"indeterminate"===t)||(0,i.Mp)(t)&&!(0,i.SU)(t)||"."===t[0])&&r(e,t,null,h[t],void 0,void 0,n);else h.onClick&&r(e,"onClick",null,h.onClick,void 0,void 0,n);(l=h&&h.onVnodeBeforeMount)&&Br(l,n,t),p&&$e(t,null,n,"beforeMount"),((l=h&&h.onVnodeMounted)||p||v)&&Ie((()=>{l&&Br(l,n,t),v&&g.enter(e),p&&$e(t,null,n,"mounted")}),s)}return e.nextSibling},m=(e,t,r,i,s,a,c)=>{c=c||!!t.dynamicChildren;const u=t.children,l=u.length;let h=!1;for(let d=0;d<l;d++){const t=c?u[d]:u[d]=Vr(u[d]);if(e)e=f(e,t,i,s,a,c);else{if(t.type===hr&&!t.children)continue;Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!h&&(o("Hydration children mismatch on",r,"\nServer rendered element contains fewer child nodes than client vdom."),h=!0),n(null,t,r,null,i,s,$n(r),a)}}return e},g=(e,t,n,r,i,s)=>{const{slotScopeIds:o}=t;o&&(i=i?i.concat(o):o);const u=c(e),d=m(a(e),t,u,n,r,i,s);return d&&jn(d)&&"]"===d.data?a(t.anchor=d):(Fn=!0,l(t.anchor=h("]"),u,d),d)},y=(e,t,r,i,s,l)=>{if(Fn=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&o("Hydration node mismatch:\n- rendered on server:",e,3===e.nodeType?"(text)":jn(e)&&"["===e.data?"(start of fragment)":"","\n- expected on client:",t.type),t.el=null,l){const t=v(e);while(1){const n=a(e);if(!n||n===t)break;u(n)}}const h=a(e),d=c(e);return u(e),n(null,t,d,h,r,i,$n(d),s),h},v=(e,t="[",n="]")=>{let r=0;while(e)if(e=a(e),e&&jn(e)&&(e.data===t&&r++,e.data===n)){if(0===r)return a(e);r--}return e},b=(e,t,n)=>{const r=t.parentNode;r&&r.replaceChild(e,t);let i=n;while(i)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},_=e=>1===e.nodeType&&"template"===e.tagName.toLowerCase();return[d,f]}function Hn(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const qn=Ie;function Kn(e){return Gn(e)}function zn(e){return Gn(e,Bn)}function Gn(e,t){Hn();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.tE,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ir(e,t)&&(r=Q(e),q(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case hr:v(e,t,n,r);break;case dr:b(e,t,n,r);break;case fr:null==e&&_(t,n,r,o);break;case lr:R(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?D(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,J)}null!=l&&i&&Ln(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},w=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},T=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?S(t,n,r,i,s,o,a,c):k(e,t,i,s,o,a,c)},S=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:m,shapeFlag:g,transition:y,dirs:v}=e;if(f=e.el=c(e.type,u,m&&m.is,m),8&g?d(f,e.children):16&g&&C(e.children,f,null,r,o,Wn(e,u),l,h),v&&$e(e,null,r,"created"),I(f,e,e.scopeId,l,r),m){for(const t in m)"value"===t||(0,i.SU)(t)||a(f,t,null,m[t],u,e.children,r,o,W);"value"in m&&a(f,"value",null,m.value,u),(p=m.onVnodeBeforeMount)&&Br(p,r,e)}v&&$e(e,null,r,"beforeMount");const b=Xn(o,y);b&&y.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||b||v)&&qn((()=>{p&&Br(p,r,e),b&&y.enter(f),v&&$e(e,null,r,"mounted")}),o)},I=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;I(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Ur(e[u]):Vr(e[u]);y(null,c,t,n,r,i,s,o,a)}},k=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,m=t.props||i.MZ;let g;if(n&&Qn(n,!1),(g=m.onVnodeBeforeUpdate)&&Br(g,n,t,e),f&&$e(t,e,n,"beforeUpdate"),n&&Qn(n,!0),h?A(e.dynamicChildren,h,u,n,r,Wn(t,s),o):c||$(e,t,u,null,n,r,Wn(t,s),o,!1),l>0){if(16&l)N(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,W)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||N(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&qn((()=>{g&&Br(g,n,t,e),f&&$e(t,e,n,"updated")}),r)},A=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===lr||!Ir(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},N=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,W);for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,W)}"value"in r&&a(e,"value",n.value,r.value,c)}},R=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),C(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Yn(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},D=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):L(t,n,r,i,s,o,c):F(e,t,c)},L=(e,t,n,r,i,s,o)=>{const a=e.component=Kr(e,r,i);if(it(e)&&(a.ctx.renderer=J),ni(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=Rr(dr);b(null,e,t,n)}}else V(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(re(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,O(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Zn(e);if(n)return t&&(t.el=l.el,U(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Qn(e,!1),t?(t.el=l.el,U(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&Br(h,s,t,l),Qn(e,!0);const p=Z(e);0;const m=e.subTree;e.subTree=p,y(m,p,f(m.el),Q(m),e,o,a),t.el=p.el,null===d&&se(e,p.el),r&&qn(r,o),(h=t.props&&t.props.onVnodeUpdated)&&qn((()=>Br(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=tt(t);if(Qn(e,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&Br(r,d,t),Qn(e,!0),c&&te){const n=()=>{e.subTree=Z(e),te(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=Z(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&qn(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;qn((()=>Br(r,d,e)),o)}(256&t.shapeFlag||d&&tt(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&qn(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.X2(u,i.tE,(()=>x(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.id=e.uid,Qn(e,!0),h()},U=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,wn(e,t.props,i,n),Mn(e,t.children,n),(0,r.C4)(),P(e),(0,r.bl)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(u,h,n,r,i,s,o,a,c);if(256&f)return void j(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&W(u,i,s),h!==u&&d(n,h)):16&l?16&p?B(u,h,n,r,i,s,o,a,c):W(u,i,s,!0):(8&l&&d(n,""),16&p&&C(h,n,r,i,s,o,a,c))},j=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Ur(t[f]):Vr(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?W(e,s,o,!0,!1,d):C(t,n,r,s,o,a,c,u,d)},B=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Ur(t[l]):Vr(t[l]);if(!Ir(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Ur(t[f]):Vr(t[f]);if(!Ir(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?Ur(t[l]):Vr(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)q(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?Ur(t[l]):Vr(t[l]);null!=e.key&&g.set(e.key,l)}let v,b=0;const _=f-m+1;let w=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=_){q(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&Ir(r,t[v])){i=v;break}void 0===i?q(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:w=!0,y(r,t[i],n,null,s,o,a,c,u),b++)}const S=w?Jn(T):i.Oj;for(v=S.length-1,l=_-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):w&&(v<0||l!==S[v]?H(i,n,d,2):v--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,J);if(a===lr){s(o,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===fr)return void w(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),qn((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},q=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Ln(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!tt(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Br(m,t,e),6&l)G(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&$e(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,J,r):u&&(s!==lr||h>0&&64&h)?W(u,t,n,!1,!0):(s===lr&&384&h||!i&&16&l)&&W(c,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&qn((()=>{m&&Br(m,t,e),f&&$e(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===lr)return void z(n,r);if(t===fr)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},z=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},G=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,q(a,e,t,n)),c&&qn(c,t),qn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},W=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)q(e[o],t,n,r,i)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let X=!1;const Y=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),X||(X=!0,P(),M(),X=!1),t._vnode=e},J={p:y,um:q,m:H,r:K,mt:L,mc:C,pc:$,pbc:A,n:Q,o:e};let ee,te;return t&&([ee,te]=t(J)),{render:Y,hydrate:ee,createApp:mn(Y,ee)}}function Wn({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xn(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Yn(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Ur(s[i]),t.el=e.el),n||Yn(e,t)),t.type===hr&&(t.el=e.el)}}function Jn(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Zn(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zn(t)}const er=e=>e.__isTeleport,tr=e=>e&&(e.disabled||""===e.disabled),nr=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,rr=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,ir=(e,t)=>{const n=e&&e.to;if((0,i.Kg)(n)){if(t){const e=t(n);return e}return null}return n},sr={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,y=tr(t.props);let{shapeFlag:v,children:b,dynamicChildren:_}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=ir(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),"svg"===o||nr(h)?o="svg":("mathml"===o||rr(h))&&(o="mathml"));const g=(e,t)=>{16&v&&l(b,e,t,i,s,o,a,c)};y?g(n,u):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=tr(e.props),g=m?n:l,v=m?r:f;if("svg"===o||nr(l)?o="svg":("mathml"===o||rr(l))&&(o="mathml"),_?(d(e.dynamicChildren,_,g,i,s,o,a),Yn(e,t,!0)):c||h(e,t,g,v,i,s,o,a,!1),y)m?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):or(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=ir(t.props,p);e&&or(t,e,null,u,0)}else m&&or(t,l,f,u,1)}ur(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=e;if(h&&s(l),o&&s(u),16&a){const e=o||!tr(d);for(let r=0;r<c.length;r++){const s=c[r];i(s,t,n,e,!!s.dynamicChildren)}}},move:or,hydrate:ar};function or(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===s;if(h&&r(o,t,n),(!h||tr(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function ar(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=t.target=ir(t.props,c);if(l){const c=l._lpa||l.firstChild;if(16&t.shapeFlag)if(tr(t.props))t.anchor=u(o(e),t,a(e),n,r,i,s),t.targetAnchor=c;else{t.anchor=o(e);let a=c;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,l._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(c,t,l,n,r,i,s)}ur(t)}return t.anchor&&o(t.anchor)}const cr=sr;function ur(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n&&n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const lr=Symbol.for("v-fgt"),hr=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),pr=[];let mr=null;function gr(e=!1){pr.push(mr=e?null:[])}function yr(){pr.pop(),mr=pr[pr.length-1]||null}let vr,br=1;function _r(e){br+=e}function wr(e){return e.dynamicChildren=br>0?mr||i.Oj:null,yr(),br>0&&mr&&mr.push(e),e}function Er(e,t,n,r,i,s){return wr(xr(e,t,n,r,i,s,!0))}function Tr(e,t,n,r,i){return wr(Rr(e,t,n,r,i,!0))}function Sr(e){return!!e&&!0===e.__v_isVNode}function Ir(e,t){return e.type===t.type&&e.key===t.key}function Cr(e){vr=e}const kr="__vInternal",Ar=({key:e})=>null!=e?e:null,Nr=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:z,r:e,k:t,f:!!n}:e:null);function xr(e,t=null,n=null,r=0,s=null,o=(e===lr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ar(t),ref:t&&Nr(t),scopeId:G,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:z};return c?($r(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),br>0&&!a&&mr&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&mr.push(u),u}const Rr=Or;function Or(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==ue||(e=dr),Sr(e)){const r=Pr(e,t,!0);return n&&$r(r,n),br>0&&!a&&mr&&(6&r.shapeFlag?mr[mr.indexOf(e)]=r:mr.push(r)),r.patchFlag|=-2,r}if(mi(e)&&(e=e.__vccOpts),t){t=Dr(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:pe(e)?128:er(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return xr(e,t,n,s,o,c,a,!0)}function Dr(e){return e?(0,r.ju)(e)||kr in e?(0,i.X$)({},e):e:null}function Pr(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?jr(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ar(c),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(Nr(t)):[s,Nr(t)]:Nr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==lr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pr(e.ssContent),ssFallback:e.ssFallback&&Pr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function Mr(e=" ",t=0){return Rr(hr,null,e,t)}function Lr(e,t){const n=Rr(fr,null,e);return n.staticCount=t,n}function Fr(e="",t=!1){return t?(gr(),Tr(dr,null,e)):Rr(dr,null,e)}function Vr(e){return null==e||"boolean"===typeof e?Rr(dr):(0,i.cy)(e)?Rr(lr,null,e.slice()):"object"===typeof e?Ur(e):Rr(hr,null,String(e))}function Ur(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Pr(e)}function $r(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),$r(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||kr in t?3===r&&z&&(1===z.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=z}}else(0,i.Tn)(t)?(t={default:t,_ctx:z},n=32):(t=String(t),64&r?(n=16,t=[Mr(t)]):n=8);e.children=t,e.shapeFlag|=n}function jr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function Br(e,t,n,r=null){g(e,t,7,[n,r])}const Hr=fn();let qr=0;function Kr(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Hr,a={uid:qr++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sn(s,o),emitsOptions:q(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=H.bind(null,a),e.ce&&e.ce(a),a}let zr=null;const Gr=()=>zr||z;let Wr,Qr;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Wr=t("__VUE_INSTANCE_SETTERS__",(e=>zr=e)),Qr=t("__VUE_SSR_SETTERS__",(e=>ti=e))}const Xr=e=>{const t=zr;return Wr(e),e.scope.on(),()=>{e.scope.off(),Wr(t)}},Yr=()=>{zr&&zr.scope.off(),Wr(null)};function Jr(e){return 4&e.vnode.shapeFlag}let Zr,ei,ti=!1;function ni(e,t=!1){t&&Qr(t);const{props:n,children:r}=e.vnode,i=Jr(e);_n(e,n,i,t),Pn(e,r);const s=i?ri(e,t):void 0;return t&&Qr(!1),s}function ri(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.IG)(new Proxy(e.ctx,Pt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?ui(e):null,o=Xr(e);(0,r.C4)();const a=m(s,e,0,[e.props,n]);if((0,r.bl)(),o(),(0,i.yL)(a)){if(a.then(Yr,Yr),t)return a.then((n=>{ii(e,n,t)})).catch((t=>{y(t,e,0)}));e.asyncDep=a}else ii(e,a,t)}else ai(e,t)}function ii(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),ai(e,n)}function si(e){Zr=e,ei=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Mt))}}const oi=()=>!Zr;function ai(e,t,n){const s=e.type;if(!e.render){if(!t&&Zr&&!s.render){const t=s.template||nn(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Zr(t,c)}}e.render=s.render||i.tE,ei&&ei(e)}{const t=Xr(e);(0,r.C4)();try{Jt(e)}finally{(0,r.bl)(),t()}}}function ci(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.u4)(e,"get","$attrs"),t[n]}}))}function ui(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return ci(e)},slots:e.slots,emit:e.emit,expose:t}}function li(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ot?Ot[n](e):void 0},has(e,t){return t in e||t in Ot}}))}const hi=/(?:^|[-_])(\w)/g,di=e=>e.replace(hi,(e=>e.toUpperCase())).replace(/[-_]/g,"");function fi(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function pi(e,t,n=!1){let r=fi(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?di(r):n?"App":"Anonymous"}function mi(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const gi=(e,t)=>{const n=(0,r.EW)(e,t,ti);return n};function yi(e,t,n=i.MZ){const s=Gr();const o=(0,i.PT)(t),a=(0,i.Tg)(t),c=(0,r.rY)(((r,c)=>{let u;return Oe((()=>{const n=e[t];(0,i.$H)(u,n)&&(u=n,c())})),{get(){return r(),n.get?n.get(u):u},set(e){const r=s.vnode.props;r&&(t in r||o in r||a in r)&&(`onUpdate:${t}`in r||`onUpdate:${o}`in r||`onUpdate:${a}`in r)||!(0,i.$H)(e,u)||(u=e,c()),s.emit(`update:${t}`,n.set?n.set(e):e)}}})),u="modelValue"===t?"modelModifiers":`${t}Modifiers`;return c[Symbol.iterator]=()=>{let t=0;return{next(){return t<2?{value:t++?e[u]||{}:c,done:!1}:{done:!0}}}},c}function vi(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Sr(t)?Rr(e,null,[t]):Rr(e,t):Rr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Sr(n)&&(n=[n]),Rr(e,t,n))}function bi(){return void 0}function _i(e,t,n,r){const i=n[r];if(i&&wi(i,e))return i;const s=t();return s.memo=e.slice(),n[r]=s}function wi(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if((0,i.$H)(n[r],t[r]))return!1;return br>0&&mr&&mr.push(e),!0}const Ei="3.4.21",Ti=i.tE,Si=p,Ii=U,Ci=B,ki={createComponentInstance:Kr,setupComponent:ni,renderComponentRoot:Z,setCurrentRenderingInstance:W,isVNode:Sr,normalizeVNode:Vr},Ai=ki,Ni=null,xi=null,Ri=null},3751:function(e,t,n){n.r(t),n.d(t,{BaseTransition:function(){return r.pR},BaseTransitionPropsValidators:function(){return r.QP},Comment:function(){return r.Mw},DeprecationTypes:function(){return r.aT},EffectScope:function(){return r.yC},ErrorCodes:function(){return r.tG},ErrorTypeStrings:function(){return r.ZQ},Fragment:function(){return r.FK},KeepAlive:function(){return r.PR},ReactiveEffect:function(){return r.X2},Static:function(){return r.jC},Suspense:function(){return r.tY},Teleport:function(){return r.Im},Text:function(){return r.EY},TrackOpTypes:function(){return r.Ul},Transition:function(){return p},TransitionGroup:function(){return we},TriggerOpTypes:function(){return r.PP},VueElement:function(){return pe},assertNumber:function(){return r.U4},callWithAsyncErrorHandling:function(){return r.qL},callWithErrorHandling:function(){return r.gh},camelize:function(){return r.PT},capitalize:function(){return r.ZH},cloneVNode:function(){return r.E3},compatUtils:function(){return r.Y5},computed:function(){return r.EW},createApp:function(){return et},createBlock:function(){return r.Wv},createCommentVNode:function(){return r.Q3},createElementBlock:function(){return r.CE},createElementVNode:function(){return r.Lk},createHydrationRenderer:function(){return r.ci},createPropsRestProxy:function(){return r.bn},createRenderer:function(){return r.K9},createSSRApp:function(){return tt},createSlots:function(){return r.eX},createStaticVNode:function(){return r.Fv},createTextVNode:function(){return r.eW},createVNode:function(){return r.bF},customRef:function(){return r.rY},defineAsyncComponent:function(){return r.$V},defineComponent:function(){return r.pM},defineCustomElement:function(){return he},defineEmits:function(){return r.qP},defineExpose:function(){return r.wk},defineModel:function(){return r.NP},defineOptions:function(){return r.GM},defineProps:function(){return r.Yj},defineSSRCustomElement:function(){return de},defineSlots:function(){return r.Lu},devtools:function(){return r.lt},effect:function(){return r.QZ},effectScope:function(){return r.uY},getCurrentInstance:function(){return r.nI},getCurrentScope:function(){return r.o5},getTransitionRawChildren:function(){return r.Df},guardReactiveProps:function(){return r.Ng},h:function(){return r.h},handleError:function(){return r.H4},hasInjectionContext:function(){return r.PS},hydrate:function(){return Ze},initCustomFormatter:function(){return r.y$},initDirectivesForSSR:function(){return st},inject:function(){return r.WQ},isMemoSame:function(){return r.Bs},isProxy:function(){return r.ju},isReactive:function(){return r.g8},isReadonly:function(){return r.Tm},isRef:function(){return r.i9},isRuntimeOnly:function(){return r.dA},isShallow:function(){return r.fE},isVNode:function(){return r.vv},markRaw:function(){return r.IG},mergeDefaults:function(){return r.HF},mergeModels:function(){return r.zz},mergeProps:function(){return r.v6},nextTick:function(){return r.dY},normalizeClass:function(){return r.C4},normalizeProps:function(){return r._B},normalizeStyle:function(){return r.Tr},onActivated:function(){return r.n},onBeforeMount:function(){return r.KC},onBeforeUnmount:function(){return r.xo},onBeforeUpdate:function(){return r.Ic},onDeactivated:function(){return r.Y4},onErrorCaptured:function(){return r.qG},onMounted:function(){return r.sV},onRenderTracked:function(){return r.qR},onRenderTriggered:function(){return r.bj},onScopeDispose:function(){return r.jr},onServerPrefetch:function(){return r.SS},onUnmounted:function(){return r.hi},onUpdated:function(){return r.$u},openBlock:function(){return r.uX},popScopeId:function(){return r.jt},provide:function(){return r.Gt},proxyRefs:function(){return r.Pr},pushScopeId:function(){return r.Qi},queuePostFlushCb:function(){return r.Dl},reactive:function(){return r.Kh},readonly:function(){return r.tB},ref:function(){return r.KR},registerRuntimeCompiler:function(){return r.tC},render:function(){return Je},renderList:function(){return r.pI},renderSlot:function(){return r.RG},resolveComponent:function(){return r.g2},resolveDirective:function(){return r.gN},resolveDynamicComponent:function(){return r.$y},resolveFilter:function(){return r.LJ},resolveTransitionHooks:function(){return r.OW},setBlockTracking:function(){return r.Vq},setDevtoolsHook:function(){return r.iD},setTransitionHooks:function(){return r.MZ},shallowReactive:function(){return r.Gc},shallowReadonly:function(){return r.nD},shallowRef:function(){return r.IJ},ssrContextKey:function(){return r.Fw},ssrUtils:function(){return r.Gw},stop:function(){return r.ds},toDisplayString:function(){return r.v_},toHandlerKey:function(){return r.rU},toHandlers:function(){return r.Tb},toRaw:function(){return r.ux},toRef:function(){return r.lW},toRefs:function(){return r.QW},toValue:function(){return r.BA},transformVNodeArgs:function(){return r.gW},triggerRef:function(){return r.mu},unref:function(){return r.R1},useAttrs:function(){return r.OA},useCssModule:function(){return me},useCssVars:function(){return V},useModel:function(){return r.fn},useSSRContext:function(){return r.LM},useSlots:function(){return r.Ht},useTransitionState:function(){return r.Gy},vModelCheckbox:function(){return Re},vModelDynamic:function(){return Ve},vModelRadio:function(){return De},vModelSelect:function(){return Pe},vModelText:function(){return xe},vShow:function(){return P},version:function(){return r.rE},warn:function(){return r.R8},watch:function(){return r.wB},watchEffect:function(){return r.nT},watchPostEffect:function(){return r.p9},watchSyncEffect:function(){return r.U_},withAsyncContext:function(){return r.E},withCtx:function(){return r.k6},withDefaults:function(){return r.rO},withDirectives:function(){return r.bo},withKeys:function(){return ze},withMemo:function(){return r.bU},withModifiers:function(){return qe},withScopeId:function(){return r.YY}});var r=n(641),i=n(33),s=n(953);
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,b(e),t);p.displayName="Transition";const m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=p.props=(0,i.X$)({},r.QP,m),y=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function b(e){const t={};for(const i in e)i in m||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=_(s),b=g&&g[0],w=g&&g[1],{onBeforeEnter:I,onEnter:k,onEnterCancelled:A,onLeave:N,onLeaveCancelled:R,onBeforeAppear:O=I,onAppear:D=k,onAppearCancelled:P=A}=t,M=(e,t,n)=>{T(e,t?h:c),T(e,t?l:a),n&&n()},L=(e,t)=>{e._isLeaving=!1,T(e,d),T(e,p),T(e,f),t&&t()},F=e=>(t,n)=>{const i=e?D:k,s=()=>M(t,e,n);y(i,[t,s]),S((()=>{T(t,e?u:o),E(t,e?h:c),v(i)||C(t,r,b,s)}))};return(0,i.X$)(t,{onBeforeEnter(e){y(I,[e]),E(e,o),E(e,a)},onBeforeAppear(e){y(O,[e]),E(e,u),E(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>L(e,t);E(e,d),x(),E(e,f),S((()=>{e._isLeaving&&(T(e,d),E(e,p),v(N)||C(e,r,w,n))})),y(N,[e,n])},onEnterCancelled(e){M(e,!1),y(A,[e])},onAppearCancelled(e){M(e,!0),y(P,[e])},onLeaveCancelled(e){L(e),y(R,[e])}})}function _(e){if(null==e)return null;if((0,i.Gv)(e))return[w(e.enter),w(e.leave)];{const t=w(e);return[t,t]}}function w(e){const t=(0,i.Ro)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function S(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let I=0;function C(e,t,n,r){const i=e._endId=++I,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=k(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=A(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=A(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const m=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:m}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>N(t)+N(e[n]))))}function N(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function x(){return document.body.offsetHeight}function R(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const O=Symbol("_vod"),D=Symbol("_vsh"),P={beforeMount(e,{value:t},{transition:n}){e[O]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):M(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),M(e,!0),r.enter(e)):r.leave(e,(()=>{M(e,!1)})):M(e,t))},beforeUnmount(e,{value:t}){M(e,t)}};function M(e,t){e.style.display=t?e[O]:"none",e[D]=!t}function L(){P.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const F=Symbol("");function V(e){const t=(0,r.nI)();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>$(e,n)))};const i=()=>{const r=e(t.proxy);U(t.subTree,r),n(r)};(0,r.p9)(i),(0,r.sV)((()=>{const e=new MutationObserver(i);e.observe(t.subTree.el.parentNode,{childList:!0}),(0,r.hi)((()=>e.disconnect()))}))}function U(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{U(n.activeBranch,t)}))}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)$(e.el,t);else if(e.type===r.FK)e.children.forEach((e=>U(e,t)));else if(e.type===r.jC){let{el:n,anchor:r}=e;while(n){if($(n,t),n===r)break;n=n.nextSibling}}}function $(e,t){if(1===e.nodeType){const n=e.style;let r="";for(const e in t)n.setProperty(`--${e}`,t[e]),r+=`--${e}: ${t[e]};`;n[F]=r}}const j=/(^|;)\s*display\s*:/;function B(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&q(r,t,"")}else for(const e in t)null==n[e]&&q(r,e,"");for(const e in n)"display"===e&&(o=!0),q(r,e,n[e])}else if(s){if(t!==n){const e=r[F];e&&(n+=";"+e),r.cssText=n,o=j.test(n)}}else t&&e.removeAttribute("style");O in e&&(e[O]=o?r.display:"",e[D]&&(r.display="none"))}const H=/\s*!important$/;function q(e,t,n){if((0,i.cy)(n))n.forEach((n=>q(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=G(e,t);H.test(n)?e.setProperty((0,i.Tg)(r),n.replace(H,""),"important"):e[r]=n}}const K=["Webkit","Moz","ms"],z={};function G(e,t){const n=z[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return z[t]=r;r=(0,i.ZH)(r);for(let i=0;i<K.length;i++){const n=K[i]+r;if(n in e)return z[t]=n}return t}const W="http://www.w3.org/1999/xlink";function Q(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(W,t.slice(6,t.length)):e.setAttributeNS(W,t,n);else{const r=(0,i.J$)(t);null==n||r&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function X(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?e.getAttribute("value")||"":e.value,i=null==n?"":n;return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function Y(e,t,n,r){e.addEventListener(t,n,r)}function J(e,t,n,r){e.removeEventListener(t,n,r)}const Z=Symbol("_vei");function ee(e,t,n,r,i=null){const s=e[Z]||(e[Z]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=ne(t);if(r){const o=s[t]=oe(r,i);Y(e,n,o,a)}else o&&(J(e,n,o,a),s[t]=void 0)}}const te=/(?:Once|Passive|Capture)$/;function ne(e){let t;if(te.test(e)){let n;t={};while(n=e.match(te))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let re=0;const ie=Promise.resolve(),se=()=>re||(ie.then((()=>re=0)),re=Date.now());function oe(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(ae(e,n.value),t,5,[e])};return n.value=e,n.attached=se(),n}function ae(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ce=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ue=(e,t,n,r,s,o,a,c,u)=>{const l="svg"===s;"class"===t?R(e,r,l):"style"===t?B(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||ee(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):le(e,t,r,l))?X(e,t,r,o,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),Q(e,t,r,l))};function le(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ce(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ce(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */function he(e,t){const n=(0,r.pM)(e);class i extends pe{constructor(e){super(n,e,t)}}return i.def=n,i}
/*! #__NO_SIDE_EFFECTS__ */const de=e=>he(e,Ze),fe="undefined"!==typeof HTMLElement?HTMLElement:class{};class pe extends fe{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),(0,r.dY)((()=>{this._connected||(Je(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:r}=e;let s;if(n&&!(0,i.cy)(n))for(const o in n){const e=n[o];(e===Number||e&&e.type===Number)&&(o in this._props&&(this._props[o]=(0,i.Ro)(this._props[o])),(s||(s=Object.create(null)))[(0,i.PT)(o)]=!0)}this._numberProps=s,t&&this._resolveProps(e),this._applyStyles(r),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=(0,i.cy)(t)?t:Object.keys(t||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of n.map(i.PT))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(e){this._setProp(r,e)}})}_setAttr(e){let t=this.getAttribute(e);const n=(0,i.PT)(e);this._numberProps&&this._numberProps[n]&&(t=(0,i.Ro)(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!0){t!==this._props[e]&&(this._props[e]=t,r&&this._instance&&this._update(),n&&(!0===t?this.setAttribute((0,i.Tg)(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute((0,i.Tg)(e),t+""):t||this.removeAttribute((0,i.Tg)(e))))}_update(){Je(this._createVNode(),this.shadowRoot)}_createVNode(){const e=(0,r.bF)(this._def,(0,i.X$)({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),(0,i.Tg)(e)!==e&&t((0,i.Tg)(e),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof pe){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function me(e="$style"){{const t=(0,r.nI)();if(!t)return i.MZ;const n=t.type.__cssModules;if(!n)return i.MZ;const s=n[e];return s||i.MZ}}const ge=new WeakMap,ye=new WeakMap,ve=Symbol("_moveCb"),be=Symbol("_enterCb"),_e={name:"TransitionGroup",props:(0,i.X$)({},g,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!Ie(o[0].el,n.vnode.el,t))return;o.forEach(Ee),o.forEach(Te);const r=o.filter(Se);x(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ve]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ve]=null,T(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(e),u=b(c);let l=c.tag||r.FK;o=a,a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.MZ)(t,(0,r.OW)(t,u,i,n)),ge.set(t,t.el.getBoundingClientRect())}return(0,r.bF)(l,null,a)}}};_e.props;const we=_e;function Ee(e){const t=e.el;t[ve]&&t[ve](),t[be]&&t[be]()}function Te(e){ye.set(e,e.el.getBoundingClientRect())}function Se(e){const t=ge.get(e),n=ye.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function Ie(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=k(r);return s.removeChild(r),o}const Ce=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ke(e){e.target.composing=!0}function Ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ne=Symbol("_assign"),xe={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ne]=Ce(s);const o=r||s.props&&"number"===s.props.type;Y(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[Ne](r)})),n&&Y(e,"change",(()=>{e.value=e.value.trim()})),t||(Y(e,"compositionstart",ke),Y(e,"compositionend",Ae),Y(e,"change",Ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[Ne]=Ce(o),e.composing)return;const a=s||"number"===e.type?(0,i.bB)(e.value):e.value,c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}},Re={deep:!0,created(e,t,n){e[Ne]=Ce(n),Y(e,"change",(()=>{const t=e._modelValue,n=Le(e),r=e.checked,s=e[Ne];if((0,i.cy)(t)){const e=(0,i.u3)(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,i.vM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(Fe(e,r))}))},mounted:Oe,beforeUpdate(e,t,n){e[Ne]=Ce(n),Oe(e,t,n)}};function Oe(e,{value:t,oldValue:n},r){e._modelValue=t,(0,i.cy)(t)?e.checked=(0,i.u3)(t,r.props.value)>-1:(0,i.vM)(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=(0,i.BX)(t,Fe(e,!0)))}const De={created(e,{value:t},n){e.checked=(0,i.BX)(t,n.props.value),e[Ne]=Ce(n),Y(e,"change",(()=>{e[Ne](Le(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e[Ne]=Ce(r),t!==n&&(e.checked=(0,i.BX)(t,r.props.value))}},Pe={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);Y(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(Le(e)):Le(e)));e[Ne](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[Ne]=Ce(s)},mounted(e,{value:t,modifiers:{number:n}}){Me(e,t,n)},beforeUpdate(e,t,n){e[Ne]=Ce(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Me(e,t,n)}};function Me(e,t,n){const r=e.multiple,s=(0,i.cy)(t);if(!r||s||(0,i.vM)(t)){for(let o=0,a=e.options.length;o<a;o++){const a=e.options[o],c=Le(a);if(r)if(s){const e=typeof c;a.selected="string"===e||"number"===e?t.includes(n?(0,i.bB)(c):c):(0,i.u3)(t,c)>-1}else a.selected=t.has(c);else if((0,i.BX)(Le(a),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}r||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Le(e){return"_value"in e?e._value:e.value}function Fe(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ve={created(e,t,n){$e(e,t,n,null,"created")},mounted(e,t,n){$e(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){$e(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){$e(e,t,n,r,"updated")}};function Ue(e,t){switch(e){case"SELECT":return Pe;case"TEXTAREA":return xe;default:switch(t){case"checkbox":return Re;case"radio":return De;default:return xe}}}function $e(e,t,n,r,i){const s=Ue(e.tagName,n.props&&n.props.type),o=s[i];o&&o(e,t,n,r)}function je(){xe.getSSRProps=({value:e})=>({value:e}),De.getSSRProps=({value:e},t)=>{if(t.props&&(0,i.BX)(t.props.value,e))return{checked:!0}},Re.getSSRProps=({value:e},t)=>{if((0,i.cy)(e)){if(t.props&&(0,i.u3)(e,t.props.value)>-1)return{checked:!0}}else if((0,i.vM)(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Ve.getSSRProps=(e,t)=>{if("string"!==typeof t.type)return;const n=Ue(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const Be=["ctrl","shift","alt","meta"],He={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Be.some((n=>e[`${n}Key`]&&!t.includes(n)))},qe=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=He[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Ke={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ze=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return t.some((e=>e===r||Ke[e]===r))?e(n):void 0})},Ge=(0,i.X$)({patchProp:ue},l);let We,Qe=!1;function Xe(){return We||(We=(0,r.K9)(Ge))}function Ye(){return We=Qe?We:(0,r.ci)(Ge),Qe=!0,We}const Je=(...e)=>{Xe().render(...e)},Ze=(...e)=>{Ye().hydrate(...e)},et=(...e)=>{const t=Xe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=rt(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,nt(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},tt=(...e)=>{const t=Ye().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=rt(e);if(t)return n(t,!0,nt(t))},t};function nt(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function rt(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}let it=!1;const st=()=>{it||(it=!0,je(),L())}},33:function(e,t,n){
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}n.d(t,{$3:function(){return f},$H:function(){return V},BH:function(){return G},BU:function(){return le},BX:function(){return me},Bm:function(){return w},C4:function(){return te},CE:function(){return m},CP:function(){return u},DY:function(){return U},Gv:function(){return E},Gx:function(){return ee},Hl:function(){return K},J$:function(){return de},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},OC:function(){return ae},Oj:function(){return s},PT:function(){return D},Qd:function(){return k},Ro:function(){return B},SU:function(){return N},Sf:function(){return ue},TF:function(){return h},Tg:function(){return M},Tn:function(){return b},Tr:function(){return X},We:function(){return q},X$:function(){return l},Y2:function(){return fe},ZH:function(){return L},Zf:function(){return C},_B:function(){return ne},bB:function(){return j},cy:function(){return p},gX:function(){return Q},gd:function(){return v},lk:function(){return x},nC:function(){return ce},pD:function(){return r},rU:function(){return F},tE:function(){return o},u3:function(){return ge},vM:function(){return g},v_:function(){return ye},yI:function(){return A},yL:function(){return T},yQ:function(){return $}});const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>"[object Map]"===I(e),g=e=>"[object Set]"===I(e),y=e=>"[object Date]"===I(e),v=e=>"[object RegExp]"===I(e),b=e=>"function"===typeof e,_=e=>"string"===typeof e,w=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),S=Object.prototype.toString,I=e=>S.call(e),C=e=>I(e).slice(8,-1),k=e=>"[object Object]"===I(e),A=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},O=/-(\w)/g,D=R((e=>e.replace(O,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,M=R((e=>e.replace(P,"-$1").toLowerCase())),L=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=R((e=>{const t=e?`on${L(e)}`:"";return t})),V=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let H;const q=()=>H||(H="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"NEED_HYDRATION",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",G=r(z),W=2;function Q(e,t=0,n=e.length){let r=e.split(/(\r?\n)/);const i=r.filter(((e,t)=>t%2===1));r=r.filter(((e,t)=>t%2===0));let s=0;const o=[];for(let a=0;a<r.length;a++)if(s+=r[a].length+(i[a]&&i[a].length||0),s>=t){for(let e=a-W;e<=a+W||n>s;e++){if(e<0||e>=r.length)continue;const c=e+1;o.push(`${c}${" ".repeat(Math.max(3-String(c).length,0))}|  ${r[e]}`);const u=r[e].length,l=i[e]&&i[e].length||0;if(e===a){const e=t-(s-(u+l)),r=Math.max(1,n>s?u-e:n-t);o.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>a){if(n>s){const e=Math.max(Math.min(n-s,u),1);o.push("   |  "+"^".repeat(e))}s+=u+l}}break}return o.join("\n")}function X(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?ee(r):X(r);if(i)for(const e in i)t[e]=i[e]}return t}if(_(e)||E(e))return e}const Y=/;(?![^(]*\))/g,J=/:([^]+)/,Z=/\/\*[^]*?\*\//g;function ee(e){const t={};return e.replace(Z,"").split(Y).forEach((e=>{if(e){const n=e.split(J);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function te(e){let t="";if(_(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=te(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ne(e){if(!e)return null;let{class:t,style:n}=e;return t&&!_(t)&&(e.class=te(t)),n&&(e.style=X(n)),e}const re="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ie="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",se="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",oe="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",ae=r(re),ce=r(ie),ue=r(se),le=r(oe),he="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",de=r(he);function fe(e){return!!e||""===e}function pe(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=me(e[r],t[r]);return n}function me(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&pe(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!me(e[n],t[n]))return!1}}return String(e)===String(t)}function ge(e,t){return e.findIndex((e=>me(e,t)))}const ye=e=>_(e)?e:null==e?"":p(e)||E(e)&&(e.toString===S||!b(e.toString))?JSON.stringify(e,ve,2):String(e),ve=(e,t)=>t&&t.__v_isRef?ve(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[be(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>be(e)))}:w(t)?be(t):!E(t)||p(t)||k(t)?t:String(t),be=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},6262:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7664:function(e,t,n){n.d(t,{Ef:function(){return r.createApp}});var r=n(3751),i=n(641),s=n(33);
/**
* @vue/compiler-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o=Symbol(""),a=Symbol(""),c=Symbol(""),u=Symbol(""),l=Symbol(""),h=Symbol(""),d=Symbol(""),f=Symbol(""),p=Symbol(""),m=Symbol(""),g=Symbol(""),y=Symbol(""),v=Symbol(""),b=Symbol(""),_=Symbol(""),w=Symbol(""),E=Symbol(""),T=Symbol(""),S=Symbol(""),I=Symbol(""),C=Symbol(""),k=Symbol(""),A=Symbol(""),N=Symbol(""),x=Symbol(""),R=Symbol(""),O=Symbol(""),D=Symbol(""),P=Symbol(""),M=Symbol(""),L=Symbol(""),F=Symbol(""),V=Symbol(""),U=Symbol(""),$=Symbol(""),j=Symbol(""),B=Symbol(""),H=Symbol(""),q=Symbol(""),K={[o]:"Fragment",[a]:"Teleport",[c]:"Suspense",[u]:"KeepAlive",[l]:"BaseTransition",[h]:"openBlock",[d]:"createBlock",[f]:"createElementBlock",[p]:"createVNode",[m]:"createElementVNode",[g]:"createCommentVNode",[y]:"createTextVNode",[v]:"createStaticVNode",[b]:"resolveComponent",[_]:"resolveDynamicComponent",[w]:"resolveDirective",[E]:"resolveFilter",[T]:"withDirectives",[S]:"renderList",[I]:"renderSlot",[C]:"createSlots",[k]:"toDisplayString",[A]:"mergeProps",[N]:"normalizeClass",[x]:"normalizeStyle",[R]:"normalizeProps",[O]:"guardReactiveProps",[D]:"toHandlers",[P]:"camelize",[M]:"capitalize",[L]:"toHandlerKey",[F]:"setBlockTracking",[V]:"pushScopeId",[U]:"popScopeId",[$]:"withCtx",[j]:"unref",[B]:"isRef",[H]:"withMemo",[q]:"isMemoSame"};function z(e){Object.getOwnPropertySymbols(e).forEach((t=>{K[t]=e[t]}))}const G={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function W(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:G}}function Q(e,t,n,r,i,s,o,a=!1,c=!1,u=!1,l=G){return e&&(a?(e.helper(h),e.helper(ae(e.inSSR,u))):e.helper(oe(e.inSSR,u)),o&&e.helper(T)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:s,directives:o,isBlock:a,disableTracking:c,isComponent:u,loc:l}}function X(e,t=G){return{type:17,loc:t,elements:e}}function Y(e,t=G){return{type:15,loc:t,properties:e}}function J(e,t){return{type:16,loc:G,key:(0,s.Kg)(e)?Z(e,!0):e,value:t}}function Z(e,t=!1,n=G,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function ee(e,t=G){return{type:8,loc:t,children:e}}function te(e,t=[],n=G){return{type:14,loc:n,callee:e,arguments:t}}function ne(e,t=void 0,n=!1,r=!1,i=G){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function re(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:G}}function ie(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:G}}function se(e){return{type:21,body:e,loc:G}}function oe(e,t){return e||t?p:m}function ae(e,t){return e||t?d:f}function ce(e,{helper:t,removeHelper:n,inSSR:r}){e.isBlock||(e.isBlock=!0,n(oe(r,e.isComponent)),t(h),t(ae(r,e.isComponent)))}const ue=new Uint8Array([123,123]),le=new Uint8Array([125,125]);function he(e){return e>=97&&e<=122||e>=65&&e<=90}function de(e){return 32===e||10===e||9===e||12===e||13===e}function fe(e){return 47===e||62===e||de(e)}function pe(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}const me={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class ge{constructor(e,t){this.stack=e,this.cbs=t,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=ue,this.delimiterClose=le,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return 2===this.mode&&0===this.stack.length}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=ue,this.delimiterClose=le}getPos(e){let t=1,n=e+1;for(let r=this.newlines.length-1;r>=0;r--){const i=this.newlines[r];if(e>i){t=r+2,n=e-i;break}}return{column:n,line:t,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){60===e?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):this.inVPre||e!==this.delimiterOpen[0]||(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const t=this.sequenceIndex===this.currentSequence.length,n=t?fe(e):(32|e)===this.currentSequence[this.sequenceIndex];if(n){if(!t)return void this.sequenceIndex++}else this.inRCDATA=!1;this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(62===e||de(e)){const t=this.index-this.currentSequence.length;if(this.sectionStart<t){const e=this.index;this.index=t,this.cbs.ontext(this.sectionStart,t),this.index=e}return this.sectionStart=t+2,this.stateInClosingTagName(e),void(this.inRCDATA=!1)}this.sequenceIndex=0}(32|e)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:0===this.sequenceIndex?this.currentSequence===me.TitleEnd||this.currentSequence===me.TextareaEnd&&!this.inSFCRoot?e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=Number(60===e)}stateCDATASequence(e){e===me.Cdata[this.sequenceIndex]?++this.sequenceIndex===me.Cdata.length&&(this.state=28,this.currentSequence=me.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){while(++this.index<this.buffer.length){const t=this.buffer.charCodeAt(this.index);if(10===t&&this.newlines.push(this.index),t===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===me.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):0===this.sequenceIndex?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,t){this.enterRCDATA(e,t),this.state=31}enterRCDATA(e,t){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=t}stateBeforeTagName(e){33===e?(this.state=22,this.sectionStart=this.index+1):63===e?(this.state=24,this.sectionStart=this.index+1):he(e)?(this.sectionStart=this.index,0===this.mode?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:this.state=116===e?30:115===e?29:6):47===e?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){fe(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(fe(e)){const t=this.buffer.slice(this.sectionStart,this.index);"template"!==t&&this.enterRCDATA(pe("</"+t),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){de(e)||(62===e?(this.state=1,this.sectionStart=this.index+1):(this.state=he(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(62===e||de(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){62===e&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){62===e?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):47===e?this.state=7:60===e&&47===this.peek()?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):de(e)||this.handleAttrStart(e)}handleAttrStart(e){118===e&&45===this.peek()?(this.state=13,this.sectionStart=this.index):46===e||58===e||64===e||35===e?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){62===e?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):de(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(61===e||fe(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){61===e||fe(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):58===e?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):46===e&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){61===e||fe(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):91===e?this.state=15:46===e&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){93===e?this.state=14:(61===e||fe(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){61===e||fe(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):46===e&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){61===e?this.state=18:47===e||62===e?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):de(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){34===e?(this.state=19,this.sectionStart=this.index+1):39===e?(this.state=20,this.sectionStart=this.index+1):de(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,t){(e===t||this.fastForwardTo(t))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(34===t?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){de(e)||62===e?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):39!==e&&60!==e&&61!==e&&96!==e||this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){91===e?(this.state=26,this.sequenceIndex=0):this.state=45===e?25:23}stateInDeclaration(e){(62===e||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(62===e||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){45===e?(this.state=28,this.currentSequence=me.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(62===e||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===me.ScriptEnd[3]?this.startSpecial(me.ScriptEnd,4):e===me.StyleEnd[3]?this.startSpecial(me.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===me.TitleEnd[3]?this.startSpecial(me.TitleEnd,4):e===me.TextareaEnd[3]?this.startSpecial(me.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){this.buffer=e;while(this.index<this.buffer.length){const e=this.buffer.charCodeAt(this.index);switch(10===e&&this.newlines.push(this.index),this.state){case 1:this.stateText(e);break;case 2:this.stateInterpolationOpen(e);break;case 3:this.stateInterpolation(e);break;case 4:this.stateInterpolationClose(e);break;case 31:this.stateSpecialStartSequence(e);break;case 32:this.stateInRCDATA(e);break;case 26:this.stateCDATASequence(e);break;case 19:this.stateInAttrValueDoubleQuotes(e);break;case 12:this.stateInAttrName(e);break;case 13:this.stateInDirName(e);break;case 14:this.stateInDirArg(e);break;case 15:this.stateInDynamicDirArg(e);break;case 16:this.stateInDirModifier(e);break;case 28:this.stateInCommentLike(e);break;case 27:this.stateInSpecialComment(e);break;case 11:this.stateBeforeAttrName(e);break;case 6:this.stateInTagName(e);break;case 34:this.stateInSFCRootTagName(e);break;case 9:this.stateInClosingTagName(e);break;case 5:this.stateBeforeTagName(e);break;case 17:this.stateAfterAttrName(e);break;case 20:this.stateInAttrValueSingleQuotes(e);break;case 18:this.stateBeforeAttrValue(e);break;case 8:this.stateBeforeClosingTagName(e);break;case 10:this.stateAfterClosingTagName(e);break;case 29:this.stateBeforeSpecialS(e);break;case 30:this.stateBeforeSpecialT(e);break;case 21:this.stateInAttrValueNoQuotes(e);break;case 7:this.stateInSelfClosingTag(e);break;case 23:this.stateInDeclaration(e);break;case 22:this.stateBeforeDeclaration(e);break;case 25:this.stateBeforeComment(e);break;case 24:this.stateInProcessingInstruction(e);break;case 33:this.stateInEntity();break}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(1===this.state||32===this.state&&0===this.sequenceIndex?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):19!==this.state&&20!==this.state&&21!==this.state||(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(28===this.state?this.currentSequence===me.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):6===this.state||11===this.state||18===this.state||17===this.state||12===this.state||13===this.state||14===this.state||15===this.state||16===this.state||20===this.state||19===this.state||21===this.state||9===this.state||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,t){}}function ye(e,{compatConfig:t}){const n=t&&t[e];return"MODE"===e?n||3:n}function ve(e,t){const n=ye("MODE",t),r=ye(e,t);return 3===n?!0===r:!1!==r}function be(e,t,n,...r){const i=ve(e,t);return i}function _e(e){throw e}function we(e){}function Ee(e,t,n,r){const i=`https://vuejs.org/error-reference/#compiler-${e}`,s=new SyntaxError(String(i));return s.code=e,s.loc=t,s}const Te=e=>4===e.type&&e.isStatic;function Se(e){switch(e){case"Teleport":case"teleport":return a;case"Suspense":case"suspense":return c;case"KeepAlive":case"keep-alive":return u;case"BaseTransition":case"base-transition":return l}}const Ie=/^\d|[^\$\w]/,Ce=e=>!Ie.test(e),ke=/[A-Za-z_$\xA0-\uFFFF]/,Ae=/[\.\?\w$\xA0-\uFFFF]/,Ne=/\s+[.[]\s*|\s*[.[]\s+/g,xe=e=>{e=e.trim().replace(Ne,(e=>e.trim()));let t=0,n=[],r=0,i=0,s=null;for(let o=0;o<e.length;o++){const a=e.charAt(o);switch(t){case 0:if("["===a)n.push(t),t=1,r++;else if("("===a)n.push(t),t=2,i++;else if(!(0===o?ke:Ae).test(a))return!1;break;case 1:"'"===a||'"'===a||"`"===a?(n.push(t),t=3,s=a):"["===a?r++:"]"===a&&(--r||(t=n.pop()));break;case 2:if("'"===a||'"'===a||"`"===a)n.push(t),t=3,s=a;else if("("===a)i++;else if(")"===a){if(o===e.length-1)return!1;--i||(t=n.pop())}break;case 3:a===s&&(t=n.pop(),s=null);break}}return!r&&!i},Re=xe;function Oe(e,t,n=!1){for(let r=0;r<e.props.length;r++){const i=e.props[r];if(7===i.type&&(n||i.exp)&&((0,s.Kg)(t)?i.name===t:t.test(i.name)))return i}}function De(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){const s=e.props[i];if(6===s.type){if(n)continue;if(s.name===t&&(s.value||r))return s}else if("bind"===s.name&&(s.exp||r)&&Pe(s.arg,t))return s}}function Pe(e,t){return!(!e||!Te(e)||e.content!==t)}function Me(e){return e.props.some((e=>7===e.type&&"bind"===e.name&&(!e.arg||4!==e.arg.type||!e.arg.isStatic)))}function Le(e){return 5===e.type||2===e.type}function Fe(e){return 7===e.type&&"slot"===e.name}function Ve(e){return 1===e.type&&3===e.tagType}function Ue(e){return 1===e.type&&2===e.tagType}const $e=new Set([R,O]);function je(e,t=[]){if(e&&!(0,s.Kg)(e)&&14===e.type){const n=e.callee;if(!(0,s.Kg)(n)&&$e.has(n))return je(e.arguments[0],t.concat(e))}return[e,t]}function Be(e,t,n){let r,i,o=13===e.type?e.props:e.arguments[2],a=[];if(o&&!(0,s.Kg)(o)&&14===o.type){const e=je(o);o=e[0],a=e[1],i=a[a.length-1]}if(null==o||(0,s.Kg)(o))r=Y([t]);else if(14===o.type){const e=o.arguments[0];(0,s.Kg)(e)||15!==e.type?o.callee===D?r=te(n.helper(A),[Y([t]),o]):o.arguments.unshift(Y([t])):He(t,e)||e.properties.unshift(t),!r&&(r=o)}else 15===o.type?(He(t,o)||o.properties.unshift(t),r=o):(r=te(n.helper(A),[Y([t]),o]),i&&i.callee===O&&(i=a[a.length-2]));13===e.type?i?i.arguments[0]=r:e.props=r:i?i.arguments[0]=r:e.arguments[2]=r}function He(e,t){let n=!1;if(4===e.key.type){const r=e.key.content;n=t.properties.some((e=>4===e.key.type&&e.key.content===r))}return n}function qe(e,t){return`_${t}_${e.replace(/[^\w]/g,((t,n)=>"-"===t?"_":e.charCodeAt(n).toString()))}`}function Ke(e){return 14===e.type&&e.callee===H?e.arguments[1].returns:e}const ze=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ge={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:s.NO,isPreTag:s.NO,isCustomElement:s.NO,onError:_e,onWarn:we,comments:!1,prefixIdentifiers:!1};let We=Ge,Qe=null,Xe="",Ye=null,Je=null,Ze="",et=-1,tt=-1,nt=0,rt=!1,it=null;const st=[],ot=new ge(st,{onerr:Nt,ontext(e,t){dt(lt(e,t),e,t)},ontextentity(e,t,n){dt(e,t,n)},oninterpolation(e,t){if(rt)return dt(lt(e,t),e,t);let n=e+ot.delimiterOpen.length,r=t-ot.delimiterClose.length;while(de(Xe.charCodeAt(n)))n++;while(de(Xe.charCodeAt(r-1)))r--;let i=lt(n,r);i.includes("&")&&(i=We.decodeEntities(i,!1)),St({type:5,content:At(i,!1,It(n,r)),loc:It(e,t)})},onopentagname(e,t){const n=lt(e,t);Ye={type:1,tag:n,ns:We.getNamespace(n,st[0],We.ns),tagType:0,props:[],children:[],loc:It(e-1,t),codegenNode:void 0}},onopentagend(e){ht(e)},onclosetag(e,t){const n=lt(e,t);if(!We.isVoidTag(n)){let r=!1;for(let e=0;e<st.length;e++){const i=st[e];if(i.tag.toLowerCase()===n.toLowerCase()){r=!0,e>0&&Nt(24,st[0].loc.start.offset);for(let n=0;n<=e;n++){const r=st.shift();ft(r,t,n<e)}break}}r||Nt(23,pt(e,60))}},onselfclosingtag(e){var t;const n=Ye.tag;Ye.isSelfClosing=!0,ht(e),(null==(t=st[0])?void 0:t.tag)===n&&ft(st.shift(),e)},onattribname(e,t){Je={type:6,name:lt(e,t),nameLoc:It(e,t),value:void 0,loc:It(e)}},ondirname(e,t){const n=lt(e,t),r="."===n||":"===n?"bind":"@"===n?"on":"#"===n?"slot":n.slice(2);if(rt||""!==r||Nt(26,e),rt||""===r)Je={type:6,name:n,nameLoc:It(e,t),value:void 0,loc:It(e)};else if(Je={type:7,name:r,rawName:n,exp:void 0,arg:void 0,modifiers:"."===n?["prop"]:[],loc:It(e)},"pre"===r){rt=ot.inVPre=!0,it=Ye;const e=Ye.props;for(let t=0;t<e.length;t++)7===e[t].type&&(e[t]=kt(e[t]))}},ondirarg(e,t){if(e===t)return;const n=lt(e,t);if(rt)Je.name+=n,Ct(Je.nameLoc,t);else{const r="["!==n[0];Je.arg=At(r?n:n.slice(1,-1),r,It(e,t),r?3:0)}},ondirmodifier(e,t){const n=lt(e,t);if(rt)Je.name+="."+n,Ct(Je.nameLoc,t);else if("slot"===Je.name){const e=Je.arg;e&&(e.content+="."+n,Ct(e.loc,t))}else Je.modifiers.push(n)},onattribdata(e,t){Ze+=lt(e,t),et<0&&(et=e),tt=t},onattribentity(e,t,n){Ze+=e,et<0&&(et=t),tt=n},onattribnameend(e){const t=Je.loc.start.offset,n=lt(t,e);7===Je.type&&(Je.rawName=n),Ye.props.some((e=>(7===e.type?e.rawName:e.name)===n))&&Nt(2,t)},onattribend(e,t){if(Ye&&Je){if(Ct(Je.loc,t),0!==e)if(Ze.includes("&")&&(Ze=We.decodeEntities(Ze,!0)),6===Je.type)"class"===Je.name&&(Ze=Tt(Ze).trim()),1!==e||Ze||Nt(13,t),Je.value={type:2,content:Ze,loc:1===e?It(et,tt):It(et-1,tt+1)},ot.inSFCRoot&&"template"===Ye.tag&&"lang"===Je.name&&Ze&&"html"!==Ze&&ot.enterRCDATA(pe("</template"),0);else{let e=0;Je.exp=At(Ze,!1,It(et,tt),0,e),"for"===Je.name&&(Je.forParseResult=ut(Je.exp));let t=-1;"bind"===Je.name&&(t=Je.modifiers.indexOf("sync"))>-1&&be("COMPILER_V_BIND_SYNC",We,Je.loc,Je.rawName)&&(Je.name="model",Je.modifiers.splice(t,1))}7===Je.type&&"pre"===Je.name||Ye.props.push(Je)}Ze="",et=tt=-1},oncomment(e,t){We.comments&&St({type:3,content:lt(e,t),loc:It(e-4,t+3)})},onend(){const e=Xe.length;for(let t=0;t<st.length;t++)ft(st[t],e-1),Nt(24,st[t].loc.start.offset)},oncdata(e,t){0!==st[0].ns?dt(lt(e,t),e,t):Nt(1,e-9)},onprocessinginstruction(e){0===(st[0]?st[0].ns:We.ns)&&Nt(21,e-1)}}),at=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ct=/^\(|\)$/g;function ut(e){const t=e.loc,n=e.content,r=n.match(ze);if(!r)return;const[,i,s]=r,o=(e,n,r=!1)=>{const i=t.start.offset+n,s=i+e.length;return At(e,!1,It(i,s),0,r?1:0)},a={source:o(s.trim(),n.indexOf(s,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let c=i.trim().replace(ct,"").trim();const u=i.indexOf(c),l=c.match(at);if(l){c=c.replace(at,"").trim();const e=l[1].trim();let t;if(e&&(t=n.indexOf(e,u+c.length),a.key=o(e,t,!0)),l[2]){const r=l[2].trim();r&&(a.index=o(r,n.indexOf(r,a.key?t+e.length:u+c.length),!0))}}return c&&(a.value=o(c,u,!0)),a}function lt(e,t){return Xe.slice(e,t)}function ht(e){ot.inSFCRoot&&(Ye.innerLoc=It(e+1,e+1)),St(Ye);const{tag:t,ns:n}=Ye;0===n&&We.isPreTag(t)&&nt++,We.isVoidTag(t)?ft(Ye,e):(st.unshift(Ye),1!==n&&2!==n||(ot.inXML=!0)),Ye=null}function dt(e,t,n){var r;{const t=null==(r=st[0])?void 0:r.tag;"script"!==t&&"style"!==t&&e.includes("&")&&(e=We.decodeEntities(e,!1))}const i=st[0]||Qe,s=i.children[i.children.length-1];2===(null==s?void 0:s.type)?(s.content+=e,Ct(s.loc,n)):i.children.push({type:2,content:e,loc:It(t,n)})}function ft(e,t,n=!1){Ct(e.loc,n?pt(t,60):t+1),ot.inSFCRoot&&(e.children.length?e.innerLoc.end=(0,s.X$)({},e.children[e.children.length-1].loc.end):e.innerLoc.end=(0,s.X$)({},e.innerLoc.start),e.innerLoc.source=lt(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:r,ns:i}=e;rt||("slot"===r?e.tagType=2:gt(e)?e.tagType=3:yt(e)&&(e.tagType=1)),ot.inRCDATA||(e.children=_t(e.children,e.tag)),0===i&&We.isPreTag(r)&&nt--,it===e&&(rt=ot.inVPre=!1,it=null),ot.inXML&&0===(st[0]?st[0].ns:We.ns)&&(ot.inXML=!1);{const t=e.props;if(!ot.inSFCRoot&&ve("COMPILER_NATIVE_TEMPLATE",We)&&"template"===e.tag&&!gt(e)){const t=st[0]||Qe,n=t.children.indexOf(e);t.children.splice(n,1,...e.children)}const n=t.find((e=>6===e.type&&"inline-template"===e.name));n&&be("COMPILER_INLINE_TEMPLATE",We,n.loc)&&e.children.length&&(n.value={type:2,content:lt(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:n.loc})}}function pt(e,t){let n=e;while(Xe.charCodeAt(n)!==t&&n>=0)n--;return n}const mt=new Set(["if","else","else-if","for","slot"]);function gt({tag:e,props:t}){if("template"===e)for(let n=0;n<t.length;n++)if(7===t[n].type&&mt.has(t[n].name))return!0;return!1}function yt({tag:e,props:t}){var n;if(We.isCustomElement(e))return!1;if("component"===e||vt(e.charCodeAt(0))||Se(e)||(null==(n=We.isBuiltInComponent)?void 0:n.call(We,e))||We.isNativeTag&&!We.isNativeTag(e))return!0;for(let r=0;r<t.length;r++){const e=t[r];if(6===e.type){if("is"===e.name&&e.value){if(e.value.content.startsWith("vue:"))return!0;if(be("COMPILER_IS_ON_ELEMENT",We,e.loc))return!0}}else if("bind"===e.name&&Pe(e.arg,"is")&&be("COMPILER_IS_ON_ELEMENT",We,e.loc))return!0}return!1}function vt(e){return e>64&&e<91}const bt=/\r\n/g;function _t(e,t){var n,r;const i="preserve"!==We.whitespace;let s=!1;for(let o=0;o<e.length;o++){const t=e[o];if(2===t.type)if(nt)t.content=t.content.replace(bt,"\n");else if(wt(t.content)){const a=null==(n=e[o-1])?void 0:n.type,c=null==(r=e[o+1])?void 0:r.type;!a||!c||i&&(3===a&&(3===c||1===c)||1===a&&(3===c||1===c&&Et(t.content)))?(s=!0,e[o]=null):t.content=" "}else i&&(t.content=Tt(t.content))}if(nt&&t&&We.isPreTag(t)){const t=e[0];t&&2===t.type&&(t.content=t.content.replace(/^\r?\n/,""))}return s?e.filter(Boolean):e}function wt(e){for(let t=0;t<e.length;t++)if(!de(e.charCodeAt(t)))return!1;return!0}function Et(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(10===n||13===n)return!0}return!1}function Tt(e){let t="",n=!1;for(let r=0;r<e.length;r++)de(e.charCodeAt(r))?n||(t+=" ",n=!0):(t+=e[r],n=!1);return t}function St(e){(st[0]||Qe).children.push(e)}function It(e,t){return{start:ot.getPos(e),end:null==t?t:ot.getPos(t),source:null==t?t:lt(e,t)}}function Ct(e,t){e.end=ot.getPos(t),e.source=lt(e.start.offset,t)}function kt(e){const t={type:6,name:e.rawName,nameLoc:It(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}function At(e,t=!1,n,r=0,i=0){const s=Z(e,t,n,r);return s}function Nt(e,t,n){We.onError(Ee(e,It(t,t),void 0,n))}function xt(){ot.reset(),Ye=null,Je=null,Ze="",et=-1,tt=-1,st.length=0}function Rt(e,t){if(xt(),Xe=e,We=(0,s.X$)({},Ge),t){let e;for(e in t)null!=t[e]&&(We[e]=t[e])}ot.mode="html"===We.parseMode?1:"sfc"===We.parseMode?2:0,ot.inXML=1===We.ns||2===We.ns;const n=null==t?void 0:t.delimiters;n&&(ot.delimiterOpen=pe(n[0]),ot.delimiterClose=pe(n[1]));const r=Qe=W([],e);return ot.parse(Xe),r.loc=It(0,e.length),r.children=_t(r.children),Qe=null,r}function Ot(e,t){Pt(e,t,Dt(e,e.children[0]))}function Dt(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!Ue(t)}function Pt(e,t,n=!1){const{children:r}=e,i=r.length;let o=0;for(let s=0;s<r.length;s++){const e=r[s];if(1===e.type&&0===e.tagType){const r=n?0:Mt(e,t);if(r>0){if(r>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),o++;continue}}else{const n=e.codegenNode;if(13===n.type){const r=$t(n);if((!r||512===r||1===r)&&Vt(e,t)>=2){const r=Ut(e);r&&(n.props=t.hoist(r))}n.dynamicProps&&(n.dynamicProps=t.hoist(n.dynamicProps))}}}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,Pt(e,t),n&&t.scopes.vSlot--}else if(11===e.type)Pt(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)Pt(e.branches[n],t,1===e.branches[n].children.length)}if(o&&t.transformHoist&&t.transformHoist(r,t,e),o&&o===i&&1===e.type&&0===e.tagType&&e.codegenNode&&13===e.codegenNode.type&&(0,s.cy)(e.codegenNode.children)){const n=t.hoist(X(e.codegenNode.children));t.hmr&&(n.content=`[...${n.content}]`),e.codegenNode.children=n}}function Mt(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const r=n.get(e);if(void 0!==r)return r;const i=e.codegenNode;if(13!==i.type)return 0;if(i.isBlock&&"svg"!==e.tag&&"foreignObject"!==e.tag)return 0;const o=$t(i);if(o)return n.set(e,0),0;{let r=3;const s=Vt(e,t);if(0===s)return n.set(e,0),0;s<r&&(r=s);for(let i=0;i<e.children.length;i++){const s=Mt(e.children[i],t);if(0===s)return n.set(e,0),0;s<r&&(r=s)}if(r>1)for(let i=0;i<e.props.length;i++){const s=e.props[i];if(7===s.type&&"bind"===s.name&&s.exp){const i=Mt(s.exp,t);if(0===i)return n.set(e,0),0;i<r&&(r=i)}}if(i.isBlock){for(let t=0;t<e.props.length;t++){const r=e.props[t];if(7===r.type)return n.set(e,0),0}t.removeHelper(h),t.removeHelper(ae(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(oe(t.inSSR,i.isComponent))}return n.set(e,r),r}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Mt(e.content,t);case 4:return e.constType;case 8:let a=3;for(let n=0;n<e.children.length;n++){const r=e.children[n];if((0,s.Kg)(r)||(0,s.Bm)(r))continue;const i=Mt(r,t);if(0===i)return 0;i<a&&(a=i)}return a;default:return 0}}const Lt=new Set([N,x,R,O]);function Ft(e,t){if(14===e.type&&!(0,s.Kg)(e.callee)&&Lt.has(e.callee)){const n=e.arguments[0];if(4===n.type)return Mt(n,t);if(14===n.type)return Ft(n,t)}return 0}function Vt(e,t){let n=3;const r=Ut(e);if(r&&15===r.type){const{properties:e}=r;for(let r=0;r<e.length;r++){const{key:i,value:s}=e[r],o=Mt(i,t);if(0===o)return o;let a;if(o<n&&(n=o),a=4===s.type?Mt(s,t):14===s.type?Ft(s,t):0,0===a)return a;a<n&&(n=a)}}return n}function Ut(e){const t=e.codegenNode;if(13===t.type)return t.props}function $t(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function jt(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:r=!1,hmr:i=!1,cacheHandlers:o=!1,nodeTransforms:a=[],directiveTransforms:c={},transformHoist:u=null,isBuiltInComponent:l=s.tE,isCustomElement:h=s.tE,expressionPlugins:d=[],scopeId:f=null,slotted:p=!0,ssr:m=!1,inSSR:g=!1,ssrCssVars:y="",bindingMetadata:v=s.MZ,inline:b=!1,isTS:_=!1,onError:w=_e,onWarn:E=we,compatConfig:T}){const S=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),I={filename:t,selfName:S&&(0,s.ZH)((0,s.PT)(S[1])),prefixIdentifiers:n,hoistStatic:r,hmr:i,cacheHandlers:o,nodeTransforms:a,directiveTransforms:c,transformHoist:u,isBuiltInComponent:l,isCustomElement:h,expressionPlugins:d,scopeId:f,slotted:p,ssr:m,inSSR:g,ssrCssVars:y,bindingMetadata:v,inline:b,isTS:_,onError:w,onWarn:E,compatConfig:T,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){const t=I.helpers.get(e)||0;return I.helpers.set(e,t+1),e},removeHelper(e){const t=I.helpers.get(e);if(t){const n=t-1;n?I.helpers.set(e,n):I.helpers.delete(e)}},helperString(e){return`_${K[I.helper(e)]}`},replaceNode(e){I.parent.children[I.childIndex]=I.currentNode=e},removeNode(e){const t=I.parent.children,n=e?t.indexOf(e):I.currentNode?I.childIndex:-1;e&&e!==I.currentNode?I.childIndex>n&&(I.childIndex--,I.onNodeRemoved()):(I.currentNode=null,I.onNodeRemoved()),I.parent.children.splice(n,1)},onNodeRemoved:s.tE,addIdentifiers(e){},removeIdentifiers(e){},hoist(e){(0,s.Kg)(e)&&(e=Z(e)),I.hoists.push(e);const t=Z(`_hoisted_${I.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache(e,t=!1){return ie(I.cached++,e,t)}};return I.filters=new Set,I}function Bt(e,t){const n=jt(e,t);Kt(e,n),t.hoistStatic&&Ot(e,n),t.ssr||Ht(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0,e.filters=[...n.filters]}function Ht(e,t){const{helper:n}=t,{children:r}=e;if(1===r.length){const n=r[0];if(Dt(e,n)&&n.codegenNode){const r=n.codegenNode;13===r.type&&ce(r,t),e.codegenNode=r}else e.codegenNode=n}else if(r.length>1){let r=64;s.Hl[64];0,e.codegenNode=Q(t,n(o),void 0,e.children,r+"",void 0,void 0,!0,void 0,!1)}}function qt(e,t){let n=0;const r=()=>{n--};for(;n<e.children.length;n++){const i=e.children[n];(0,s.Kg)(i)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=r,Kt(i,t))}}function Kt(e,t){t.currentNode=e;const{nodeTransforms:n}=t,r=[];for(let o=0;o<n.length;o++){const i=n[o](e,t);if(i&&((0,s.cy)(i)?r.push(...i):r.push(i)),!t.currentNode)return;e=t.currentNode}switch(e.type){case 3:t.ssr||t.helper(g);break;case 5:t.ssr||t.helper(k);break;case 9:for(let n=0;n<e.branches.length;n++)Kt(e.branches[n],t);break;case 10:case 11:case 1:case 0:qt(e,t);break}t.currentNode=e;let i=r.length;while(i--)r[i]()}function zt(e,t){const n=(0,s.Kg)(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(1===e.type){const{props:i}=e;if(3===e.tagType&&i.some(Fe))return;const s=[];for(let o=0;o<i.length;o++){const a=i[o];if(7===a.type&&n(a.name)){i.splice(o,1),o--;const n=t(e,a,r);n&&s.push(n)}}return s}}}const Gt="/*#__PURE__*/",Wt=e=>`${K[e]}: _${K[e]}`;function Qt(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:r=!1,filename:i="template.vue.html",scopeId:s=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:c="vue",ssrRuntimeModuleName:u="vue/server-renderer",ssr:l=!1,isTS:h=!1,inSSR:d=!1}){const f={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:s,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:c,ssrRuntimeModuleName:u,ssr:l,isTS:h,inSSR:d,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${K[e]}`},push(e,t=-2,n){f.code+=e},indent(){p(++f.indentLevel)},deindent(e=!1){e?--f.indentLevel:p(--f.indentLevel)},newline(){p(f.indentLevel)}};function p(e){f.push("\n"+"  ".repeat(e),0)}return f}function Xt(e,t={}){const n=Qt(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:r,push:i,prefixIdentifiers:s,indent:o,deindent:a,newline:c,scopeId:u,ssr:l}=n,h=Array.from(e.helpers),d=h.length>0,f=!s&&"module"!==r,p=n;Yt(e,p);const m=l?"ssrRender":"render",g=l?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"],y=g.join(", ");if(i(`function ${m}(${y}) {`),o(),f&&(i("with (_ctx) {"),o(),d&&(i(`const { ${h.map(Wt).join(", ")} } = _Vue\n`,-1),c())),e.components.length&&(Jt(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Jt(e.directives,"directive",n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),Jt(e.filters,"filter",n),c()),e.temps>0){i("let ");for(let t=0;t<e.temps;t++)i(`${t>0?", ":""}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i("\n",0),c()),l||i("return "),e.codegenNode?nn(e.codegenNode,n):i("null"),f&&(a(),i("}")),a(),i("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function Yt(e,t){const{ssr:n,prefixIdentifiers:r,push:i,newline:s,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:c}=t,u=a,l=Array.from(e.helpers);if(l.length>0&&(i(`const _Vue = ${u}\n`,-1),e.hoists.length)){const e=[p,m,g,y,v].filter((e=>l.includes(e))).map(Wt).join(", ");i(`const { ${e} } = _Vue\n`,-1)}Zt(e.hoists,t),s(),i("return ")}function Jt(e,t,{helper:n,push:r,newline:i,isTS:s}){const o=n("filter"===t?E:"component"===t?b:w);for(let a=0;a<e.length;a++){let n=e[a];const c=n.endsWith("__self");c&&(n=n.slice(0,-6)),r(`const ${qe(n,t)} = ${o}(${JSON.stringify(n)}${c?", true":""})${s?"!":""}`),a<e.length-1&&i()}}function Zt(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:r,helper:i,scopeId:s,mode:o}=t;r();for(let a=0;a<e.length;a++){const i=e[a];i&&(n(`const _hoisted_${a+1} = `),nn(i,t),r())}t.pure=!1}function en(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),tn(e,t,n),n&&t.deindent(),t.push("]")}function tn(e,t,n=!1,r=!0){const{push:i,newline:o}=t;for(let a=0;a<e.length;a++){const c=e[a];(0,s.Kg)(c)?i(c,-3):(0,s.cy)(c)?en(c,t):nn(c,t),a<e.length-1&&(n?(r&&i(","),o()):r&&i(", "))}}function nn(e,t){if((0,s.Kg)(e))t.push(e,-3);else if((0,s.Bm)(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:nn(e.codegenNode,t);break;case 2:rn(e,t);break;case 4:sn(e,t);break;case 5:on(e,t);break;case 12:nn(e.codegenNode,t);break;case 8:an(e,t);break;case 3:un(e,t);break;case 13:ln(e,t);break;case 14:dn(e,t);break;case 15:fn(e,t);break;case 17:pn(e,t);break;case 18:mn(e,t);break;case 19:gn(e,t);break;case 20:yn(e,t);break;case 21:tn(e.body,t,!0,!1);break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:0}}function rn(e,t){t.push(JSON.stringify(e.content),-3,e)}function sn(e,t){const{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,-3,e)}function on(e,t){const{push:n,helper:r,pure:i}=t;i&&n(Gt),n(`${r(k)}(`),nn(e.content,t),n(")")}function an(e,t){for(let n=0;n<e.children.length;n++){const r=e.children[n];(0,s.Kg)(r)?t.push(r,-3):nn(r,t)}}function cn(e,t){const{push:n}=t;if(8===e.type)n("["),an(e,t),n("]");else if(e.isStatic){const t=Ce(e.content)?e.content:JSON.stringify(e.content);n(t,-2,e)}else n(`[${e.content}]`,-3,e)}function un(e,t){const{push:n,helper:r,pure:i}=t;i&&n(Gt),n(`${r(g)}(${JSON.stringify(e.content)})`,-3,e)}function ln(e,t){const{push:n,helper:r,pure:i}=t,{tag:s,props:o,children:a,patchFlag:c,dynamicProps:u,directives:l,isBlock:d,disableTracking:f,isComponent:p}=e;l&&n(r(T)+"("),d&&n(`(${r(h)}(${f?"true":""}), `),i&&n(Gt);const m=d?ae(t.inSSR,p):oe(t.inSSR,p);n(r(m)+"(",-2,e),tn(hn([s,o,a,c,u]),t),n(")"),d&&n(")"),l&&(n(", "),nn(l,t),n(")"))}function hn(e){let t=e.length;while(t--)if(null!=e[t])break;return e.slice(0,t+1).map((e=>e||"null"))}function dn(e,t){const{push:n,helper:r,pure:i}=t,o=(0,s.Kg)(e.callee)?e.callee:r(e.callee);i&&n(Gt),n(o+"(",-2,e),tn(e.arguments,t),n(")")}function fn(e,t){const{push:n,indent:r,deindent:i,newline:s}=t,{properties:o}=e;if(!o.length)return void n("{}",-2,e);const a=o.length>1||!1;n(a?"{":"{ "),a&&r();for(let c=0;c<o.length;c++){const{key:e,value:r}=o[c];cn(e,t),n(": "),nn(r,t),c<o.length-1&&(n(","),s())}a&&i(),n(a?"}":" }")}function pn(e,t){en(e.elements,t)}function mn(e,t){const{push:n,indent:r,deindent:i}=t,{params:o,returns:a,body:c,newline:u,isSlot:l}=e;l&&n(`_${K[$]}(`),n("(",-2,e),(0,s.cy)(o)?tn(o,t):o&&nn(o,t),n(") => "),(u||c)&&(n("{"),r()),a?(u&&n("return "),(0,s.cy)(a)?en(a,t):nn(a,t)):c&&nn(c,t),(u||c)&&(i(),n("}")),l&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function gn(e,t){const{test:n,consequent:r,alternate:i,newline:s}=e,{push:o,indent:a,deindent:c,newline:u}=t;if(4===n.type){const e=!Ce(n.content);e&&o("("),sn(n,t),e&&o(")")}else o("("),nn(n,t),o(")");s&&a(),t.indentLevel++,s||o(" "),o("? "),nn(r,t),t.indentLevel--,s&&u(),s||o(" "),o(": ");const l=19===i.type;l||t.indentLevel++,nn(i,t),l||t.indentLevel--,s&&c(!0)}function yn(e,t){const{push:n,helper:r,indent:i,deindent:s,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(i(),n(`${r(F)}(-1),`),o()),n(`_cache[${e.index}] = `),nn(e.value,t),e.isVNode&&(n(","),o(),n(`${r(F)}(1),`),o(),n(`_cache[${e.index}]`),s()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const vn=zt(/^(if|else|else-if)$/,((e,t,n)=>bn(e,t,n,((e,t,r)=>{const i=n.parent.children;let s=i.indexOf(e),o=0;while(s-- >=0){const e=i[s];e&&9===e.type&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=wn(t,o,n);else{const r=Tn(e.codegenNode);r.alternate=wn(t,o+e.branches.length-1,n)}}}))));function bn(e,t,n,r){if("else"!==t.name&&(!t.exp||!t.exp.content.trim())){const r=t.exp?t.exp.loc:e.loc;n.onError(Ee(28,t.loc)),t.exp=Z("true",!1,r)}if("if"===t.name){const i=_n(e,t),s={type:9,loc:e.loc,branches:[i]};if(n.replaceNode(s),r)return r(s,i,!0)}else{const i=n.parent.children;let s=i.indexOf(e);while(s-- >=-1){const o=i[s];if(o&&3===o.type)n.removeNode(o);else{if(!o||2!==o.type||o.content.trim().length){if(o&&9===o.type){"else-if"===t.name&&void 0===o.branches[o.branches.length-1].condition&&n.onError(Ee(30,e.loc)),n.removeNode();const i=_n(e,t);0,o.branches.push(i);const s=r&&r(o,i,!1);Kt(i,n),s&&s(),n.currentNode=null}else n.onError(Ee(30,e.loc));break}n.removeNode(o)}}}}function _n(e,t){const n=3===e.tagType;return{type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:n&&!Oe(e,"for")?e.children:[e],userKey:De(e,"key"),isTemplateIf:n}}function wn(e,t,n){return e.condition?re(e.condition,En(e,t,n),te(n.helper(g),['""',"true"])):En(e,t,n)}function En(e,t,n){const{helper:r}=n,i=J("key",Z(`${t}`,!1,G,2)),{children:a}=e,c=a[0],u=1!==a.length||1!==c.type;if(u){if(1===a.length&&11===c.type){const e=c.codegenNode;return Be(e,i,n),e}{let t=64;s.Hl[64];return Q(n,r(o),Y([i]),a,t+"",void 0,void 0,!0,!1,!1,e.loc)}}{const e=c.codegenNode,t=Ke(e);return 13===t.type&&ce(t,n),Be(t,i,n),e}}function Tn(e){while(1)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate}else 20===e.type&&(e=e.value)}const Sn=zt("for",((e,t,n)=>{const{helper:r,removeHelper:i}=n;return In(e,t,n,(t=>{const s=te(r(S),[t.source]),a=Ve(e),c=Oe(e,"memo"),u=De(e,"key"),l=u&&(6===u.type?Z(u.value.content,!0):u.exp),d=u?J("key",l):null,f=4===t.source.type&&t.source.constType>0,p=f?64:u?128:256;return t.codegenNode=Q(n,r(o),void 0,s,p+"",void 0,void 0,!0,!f,!1,e.loc),()=>{let u;const{children:p}=t;const m=1!==p.length||1!==p[0].type,g=Ue(e)?e:a&&1===e.children.length&&Ue(e.children[0])?e.children[0]:null;if(g?(u=g.codegenNode,a&&d&&Be(u,d,n)):m?u=Q(n,r(o),d?Y([d]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1):(u=p[0].codegenNode,a&&d&&Be(u,d,n),u.isBlock!==!f&&(u.isBlock?(i(h),i(ae(n.inSSR,u.isComponent))):i(oe(n.inSSR,u.isComponent))),u.isBlock=!f,u.isBlock?(r(h),r(ae(n.inSSR,u.isComponent))):r(oe(n.inSSR,u.isComponent))),c){const e=ne(kn(t.parseResult,[Z("_cached")]));e.body=se([ee(["const _memo = (",c.exp,")"]),ee(["if (_cached",...l?[" && _cached.key === ",l]:[],` && ${n.helperString(q)}(_cached, _memo)) return _cached`]),ee(["const _item = ",u]),Z("_item.memo = _memo"),Z("return _item")]),s.arguments.push(e,Z("_cache"),Z(String(n.cached++)))}else s.arguments.push(ne(kn(t.parseResult),u,!0))}}))}));function In(e,t,n,r){if(!t.exp)return void n.onError(Ee(31,t.loc));const i=t.forParseResult;if(!i)return void n.onError(Ee(32,t.loc));Cn(i,n);const{addIdentifiers:s,removeIdentifiers:o,scopes:a}=n,{source:c,value:u,key:l,index:h}=i,d={type:11,loc:t.loc,source:c,valueAlias:u,keyAlias:l,objectIndexAlias:h,parseResult:i,children:Ve(e)?e.children:[e]};n.replaceNode(d),a.vFor++;const f=r&&r(d);return()=>{a.vFor--,f&&f()}}function Cn(e,t){e.finalized||(e.finalized=!0)}function kn({value:e,key:t,index:n},r=[]){return An([e,t,n,...r])}function An(e){let t=e.length;while(t--)if(e[t])break;return e.slice(0,t+1).map(((e,t)=>e||Z("_".repeat(t+1),!1)))}const Nn=Z("undefined",!1),xn=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=Oe(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Rn=(e,t,n,r)=>ne(e,n,!1,!0,n.length?n[0].loc:r);function On(e,t,n=Rn){t.helper($);const{children:r,loc:i}=e,s=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const c=Oe(e,"slot",!0);if(c){const{arg:e,exp:t}=c;e&&!Te(e)&&(a=!0),s.push(J(e||Z("default",!0),n(t,void 0,r,i)))}let u=!1,l=!1;const h=[],d=new Set;let f=0;for(let g=0;g<r.length;g++){const e=r[g];let i;if(!Ve(e)||!(i=Oe(e,"slot",!0))){3!==e.type&&h.push(e);continue}if(c){t.onError(Ee(37,i.loc));break}u=!0;const{children:p,loc:m}=e,{arg:y=Z("default",!0),exp:v,loc:b}=i;let _;Te(y)?_=y?y.content:"default":a=!0;const w=Oe(e,"for"),E=n(v,w,p,m);let T,I;if(T=Oe(e,"if"))a=!0,o.push(re(T.exp,Dn(y,E,f++),Nn));else if(I=Oe(e,/^else(-if)?$/,!0)){let e,n=g;while(n--)if(e=r[n],3!==e.type)break;if(e&&Ve(e)&&Oe(e,"if")){r.splice(g,1),g--;let e=o[o.length-1];while(19===e.alternate.type)e=e.alternate;e.alternate=I.exp?re(I.exp,Dn(y,E,f++),Nn):Dn(y,E,f++)}else t.onError(Ee(30,I.loc))}else if(w){a=!0;const e=w.forParseResult;e?(Cn(e,t),o.push(te(t.helper(S),[e.source,ne(kn(e),Dn(y,E),!0)]))):t.onError(Ee(32,w.loc))}else{if(_){if(d.has(_)){t.onError(Ee(38,b));continue}d.add(_),"default"===_&&(l=!0)}s.push(J(y,E))}}if(!c){const e=(e,r)=>{const s=n(e,void 0,r,i);return t.compatConfig&&(s.isNonScopedSlot=!0),J("default",s)};u?h.length&&h.some((e=>Mn(e)))&&(l?t.onError(Ee(39,h[0].loc)):s.push(e(void 0,h))):s.push(e(void 0,r))}const p=a?2:Pn(e.children)?3:1;let m=Y(s.concat(J("_",Z(p+"",!1))),i);return o.length&&(m=te(t.helper(C),[m,X(o)])),{slots:m,hasDynamicSlots:a}}function Dn(e,t,n){const r=[J("name",e),J("fn",t)];return null!=n&&r.push(J("key",Z(String(n),!0))),Y(r)}function Pn(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||Pn(n.children))return!0;break;case 9:if(Pn(n.branches))return!0;break;case 10:case 11:if(Pn(n.children))return!0;break}}return!1}function Mn(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():Mn(e.content))}const Ln=new WeakMap,Fn=(e,t)=>function(){if(e=t.currentNode,1!==e.type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:r}=e,i=1===e.tagType;let o=i?Vn(e,t):`"${n}"`;const l=(0,s.Gv)(o)&&o.callee===_;let h,d,f,p,m,g,y=0,v=l||o===a||o===c||!i&&("svg"===n||"foreignObject"===n);if(r.length>0){const n=Un(e,t,void 0,i,l);h=n.props,y=n.patchFlag,m=n.dynamicPropNames;const r=n.directives;g=r&&r.length?X(r.map((e=>Bn(e,t)))):void 0,n.shouldUseBlock&&(v=!0)}if(e.children.length>0){o===u&&(v=!0,y|=1024);const n=i&&o!==a&&o!==u;if(n){const{slots:n,hasDynamicSlots:r}=On(e,t);d=n,r&&(y|=1024)}else if(1===e.children.length&&o!==a){const n=e.children[0],r=n.type,i=5===r||8===r;i&&0===Mt(n,t)&&(y|=1),d=i||2===r?n:e.children}else d=e.children}0!==y&&(f=String(y),m&&m.length&&(p=Hn(m))),e.codegenNode=Q(t,o,h,d,f,p,g,!!v,!1,i,e.loc)};function Vn(e,t,n=!1){let{tag:r}=e;const i=qn(r),s=De(e,"is");if(s)if(i||ve("COMPILER_IS_ON_ELEMENT",t)){const e=6===s.type?s.value&&Z(s.value.content,!0):s.exp;if(e)return te(t.helper(_),[e])}else 6===s.type&&s.value.content.startsWith("vue:")&&(r=s.value.content.slice(4));const o=Se(r)||t.isBuiltInComponent(r);return o?(n||t.helper(o),o):(t.helper(b),t.components.add(r),qe(r,"component"))}function Un(e,t,n=e.props,r,i,o=!1){const{tag:a,loc:c,children:u}=e;let l=[];const h=[],d=[],f=u.length>0;let p=!1,m=0,g=!1,y=!1,v=!1,b=!1,_=!1,w=!1;const E=[],T=e=>{l.length&&(h.push(Y($n(l),c)),l=[]),e&&h.push(e)},S=({key:e,value:n})=>{if(Te(e)){const o=e.content,a=(0,s.Mp)(o);if(!a||r&&!i||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||(0,s.SU)(o)||(b=!0),a&&(0,s.SU)(o)&&(w=!0),a&&14===n.type&&(n=n.arguments[0]),20===n.type||(4===n.type||8===n.type)&&Mt(n,t)>0)return;"ref"===o?g=!0:"class"===o?y=!0:"style"===o?v=!0:"key"===o||E.includes(o)||E.push(o),!r||"class"!==o&&"style"!==o||E.includes(o)||E.push(o)}else _=!0};for(let C=0;C<n.length;C++){const i=n[C];if(6===i.type){const{loc:e,name:n,nameLoc:r,value:s}=i;let o=!0;if("ref"===n&&(g=!0,t.scopes.vFor>0&&l.push(J(Z("ref_for",!0),Z("true")))),"is"===n&&(qn(a)||s&&s.content.startsWith("vue:")||ve("COMPILER_IS_ON_ELEMENT",t)))continue;l.push(J(Z(n,!0,r),Z(s?s.content:"",o,s?s.loc:e)))}else{const{name:n,arg:u,exp:g,loc:y,modifiers:v}=i,b="bind"===n,w="on"===n;if("slot"===n){r||t.onError(Ee(40,y));continue}if("once"===n||"memo"===n)continue;if("is"===n||b&&Pe(u,"is")&&(qn(a)||ve("COMPILER_IS_ON_ELEMENT",t)))continue;if(w&&o)continue;if((b&&Pe(u,"key")||w&&f&&Pe(u,"vue:before-update"))&&(p=!0),b&&Pe(u,"ref")&&t.scopes.vFor>0&&l.push(J(Z("ref_for",!0),Z("true"))),!u&&(b||w)){if(_=!0,g)if(b){if(T(),ve("COMPILER_V_BIND_OBJECT_ORDER",t)){h.unshift(g);continue}h.push(g)}else T({type:14,loc:y,callee:t.helper(D),arguments:r?[g]:[g,"true"]});else t.onError(Ee(b?34:35,y));continue}b&&v.includes("prop")&&(m|=32);const E=t.directiveTransforms[n];if(E){const{props:n,needRuntime:r}=E(i,e,t);!o&&n.forEach(S),w&&u&&!Te(u)?T(Y(n,c)):l.push(...n),r&&(d.push(i),(0,s.Bm)(r)&&Ln.set(i,r))}else(0,s.lk)(n)||(d.push(i),f&&(p=!0))}}let I;if(h.length?(T(),I=h.length>1?te(t.helper(A),h,c):h[0]):l.length&&(I=Y($n(l),c)),_?m|=16:(y&&!r&&(m|=2),v&&!r&&(m|=4),E.length&&(m|=8),b&&(m|=32)),p||0!==m&&32!==m||!(g||w||d.length>0)||(m|=512),!t.inSSR&&I)switch(I.type){case 15:let e=-1,n=-1,r=!1;for(let t=0;t<I.properties.length;t++){const i=I.properties[t].key;Te(i)?"class"===i.content?e=t:"style"===i.content&&(n=t):i.isHandlerKey||(r=!0)}const i=I.properties[e],s=I.properties[n];r?I=te(t.helper(R),[I]):(i&&!Te(i.value)&&(i.value=te(t.helper(N),[i.value])),s&&(v||4===s.value.type&&"["===s.value.content.trim()[0]||17===s.value.type)&&(s.value=te(t.helper(x),[s.value])));break;case 14:break;default:I=te(t.helper(R),[te(t.helper(O),[I])]);break}return{props:I,directives:d,patchFlag:m,dynamicPropNames:E,shouldUseBlock:p}}function $n(e){const t=new Map,n=[];for(let r=0;r<e.length;r++){const i=e[r];if(8===i.key.type||!i.key.isStatic){n.push(i);continue}const o=i.key.content,a=t.get(o);a?("style"===o||"class"===o||(0,s.Mp)(o))&&jn(a,i):(t.set(o,i),n.push(i))}return n}function jn(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=X([e.value,t.value],e.loc)}function Bn(e,t){const n=[],r=Ln.get(e);r?n.push(t.helperString(r)):(t.helper(w),t.directives.add(e.name),n.push(qe(e.name,"directive")));const{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=Z("true",!1,i);n.push(Y(e.modifiers.map((e=>J(e,t))),i))}return X(n,e.loc)}function Hn(e){let t="[";for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=", ");return t+"]"}function qn(e){return"component"===e||"Component"===e}const Kn=(e,t)=>{if(Ue(e)){const{children:n,loc:r}=e,{slotName:i,slotProps:s}=zn(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let a=2;s&&(o[2]=s,a=3),n.length&&(o[3]=ne([],n,!1,!1,r),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=te(t.helper(I),o,r)}};function zn(e,t){let n,r='"default"';const i=[];for(let o=0;o<e.props.length;o++){const t=e.props[o];if(6===t.type)t.value&&("name"===t.name?r=JSON.stringify(t.value.content):(t.name=(0,s.PT)(t.name),i.push(t)));else if("bind"===t.name&&Pe(t.arg,"name")){if(t.exp)r=t.exp;else if(t.arg&&4===t.arg.type){const e=(0,s.PT)(t.arg.content);r=t.exp=Z(e,!1,t.arg.loc)}}else"bind"===t.name&&t.arg&&Te(t.arg)&&(t.arg.content=(0,s.PT)(t.arg.content)),i.push(t)}if(i.length>0){const{props:r,directives:s}=Un(e,t,i,!1,!1);n=r,s.length&&t.onError(Ee(36,s[0].loc))}return{slotName:r,slotProps:n}}const Gn=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Wn=(e,t,n,r)=>{const{loc:i,modifiers:o,arg:a}=e;let c;if(e.exp||o.length||n.onError(Ee(35,i)),4===a.type)if(a.isStatic){let e=a.content;0,e.startsWith("vue:")&&(e=`vnode-${e.slice(4)}`);const n=0!==t.tagType||e.startsWith("vnode")||!/[A-Z]/.test(e)?(0,s.rU)((0,s.PT)(e)):`on:${e}`;c=Z(n,!0,a.loc)}else c=ee([`${n.helperString(L)}(`,a,")"]);else c=a,c.children.unshift(`${n.helperString(L)}(`),c.children.push(")");let u=e.exp;u&&!u.content.trim()&&(u=void 0);let l=n.cacheHandlers&&!u&&!n.inVOnce;if(u){const e=Re(u.content),t=!(e||Gn.test(u.content)),n=u.content.includes(";");0,(t||l&&e)&&(u=ee([`${t?"$event":"(...args)"} => ${n?"{":"("}`,u,n?"}":")"]))}let h={props:[J(c,u||Z("() => {}",!1,i))]};return r&&(h=r(h)),l&&(h.props[0].value=n.cache(h.props[0].value)),h.props.forEach((e=>e.key.isHandlerKey=!0)),h},Qn=(e,t,n)=>{const{modifiers:r,loc:i}=e,o=e.arg;let{exp:a}=e;if(a&&4===a.type&&!a.content.trim()&&(a=void 0),!a){if(4!==o.type||!o.isStatic)return n.onError(Ee(52,o.loc)),{props:[J(o,Z("",!0,i))]};const t=(0,s.PT)(o.content);a=e.exp=Z(t,!1,o.loc)}return 4!==o.type?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),r.includes("camel")&&(4===o.type?o.isStatic?o.content=(0,s.PT)(o.content):o.content=`${n.helperString(P)}(${o.content})`:(o.children.unshift(`${n.helperString(P)}(`),o.children.push(")"))),n.inSSR||(r.includes("prop")&&Xn(o,"."),r.includes("attr")&&Xn(o,"^")),{props:[J(o,a)]}},Xn=(e,t)=>{4===e.type?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Yn=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return()=>{const n=e.children;let r,i=!1;for(let e=0;e<n.length;e++){const t=n[e];if(Le(t)){i=!0;for(let i=e+1;i<n.length;i++){const s=n[i];if(!Le(s)){r=void 0;break}r||(r=n[e]=ee([t],t.loc)),r.children.push(" + ",s),n.splice(i,1),i--}}}if(i&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name]))||"template"===e.tag)))for(let e=0;e<n.length;e++){const r=n[e];if(Le(r)||8===r.type){const i=[];2===r.type&&" "===r.content||i.push(r),t.ssr||0!==Mt(r,t)||i.push("1"),n[e]={type:12,content:r,loc:r.loc,codegenNode:te(t.helper(y),i)}}}}},Jn=new WeakSet,Zn=(e,t)=>{if(1===e.type&&Oe(e,"once",!0)){if(Jn.has(e)||t.inVOnce||t.inSSR)return;return Jn.add(e),t.inVOnce=!0,t.helper(F),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0))}}},er=(e,t,n)=>{const{exp:r,arg:i}=e;if(!r)return n.onError(Ee(41,e.loc)),tr();const o=r.loc.source,a=4===r.type?r.content:o,c=n.bindingMetadata[o];if("props"===c||"props-aliased"===c)return n.onError(Ee(44,r.loc)),tr();const u=!1;if(!a.trim()||!Re(a)&&!u)return n.onError(Ee(42,r.loc)),tr();const l=i||Z("modelValue",!0),h=i?Te(i)?`onUpdate:${(0,s.PT)(i.content)}`:ee(['"onUpdate:" + ',i]):"onUpdate:modelValue";let d;const f=n.isTS?"($event: any)":"$event";d=ee([`${f} => ((`,r,") = $event)"]);const p=[J(l,e.exp),J(h,d)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(Ce(e)?e:JSON.stringify(e))+": true")).join(", "),n=i?Te(i)?`${i.content}Modifiers`:ee([i,' + "Modifiers"']):"modelModifiers";p.push(J(n,Z(`{ ${t} }`,!1,e.loc,2)))}return tr(p)};function tr(e=[]){return{props:e}}const nr=/[\w).+\-_$\]]/,rr=(e,t)=>{ve("COMPILER_FILTERS",t)&&(5===e.type&&ir(e.content,t),1===e.type&&e.props.forEach((e=>{7===e.type&&"for"!==e.name&&e.exp&&ir(e.exp,t)})))};function ir(e,t){if(4===e.type)sr(e,t);else for(let n=0;n<e.children.length;n++){const r=e.children[n];"object"===typeof r&&(4===r.type?sr(r,t):8===r.type?ir(e,t):5===r.type&&ir(r.content,t))}}function sr(e,t){const n=e.content;let r,i,s,o,a=!1,c=!1,u=!1,l=!1,h=0,d=0,f=0,p=0,m=[];for(s=0;s<n.length;s++)if(i=r,r=n.charCodeAt(s),a)39===r&&92!==i&&(a=!1);else if(c)34===r&&92!==i&&(c=!1);else if(u)96===r&&92!==i&&(u=!1);else if(l)47===r&&92!==i&&(l=!1);else if(124!==r||124===n.charCodeAt(s+1)||124===n.charCodeAt(s-1)||h||d||f){switch(r){case 34:c=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:f++;break;case 41:f--;break;case 91:d++;break;case 93:d--;break;case 123:h++;break;case 125:h--;break}if(47===r){let e,t=s-1;for(;t>=0;t--)if(e=n.charAt(t)," "!==e)break;e&&nr.test(e)||(l=!0)}}else void 0===o?(p=s+1,o=n.slice(0,s).trim()):g();function g(){m.push(n.slice(p,s).trim()),p=s+1}if(void 0===o?o=n.slice(0,s).trim():0!==p&&g(),m.length){for(s=0;s<m.length;s++)o=or(o,m[s],t);e.content=o}}function or(e,t,n){n.helper(E);const r=t.indexOf("(");if(r<0)return n.filters.add(t),`${qe(t,"filter")}(${e})`;{const i=t.slice(0,r),s=t.slice(r+1);return n.filters.add(i),`${qe(i,"filter")}(${e}${")"!==s?","+s:s}`}}const ar=new WeakSet,cr=(e,t)=>{if(1===e.type){const n=Oe(e,"memo");if(!n||ar.has(e))return;return ar.add(e),()=>{const r=e.codegenNode||t.currentNode.codegenNode;r&&13===r.type&&(1!==e.tagType&&ce(r,t),e.codegenNode=te(t.helper(H),[n.exp,ne(void 0,r),"_cache",String(t.cached++)]))}}};function ur(e){return[[Zn,vn,cr,Sn,rr,Kn,Fn,xn,Yn],{on:Wn,bind:Qn,model:er}]}function lr(e,t={}){const n=t.onError||_e,r="module"===t.mode;!0===t.prefixIdentifiers?n(Ee(47)):r&&n(Ee(48));const i=!1;t.cacheHandlers&&n(Ee(49)),t.scopeId&&!r&&n(Ee(50));const o=(0,s.X$)({},t,{prefixIdentifiers:i}),a=(0,s.Kg)(e)?Rt(e,o):e,[c,u]=ur();return Bt(a,(0,s.X$)({},o,{nodeTransforms:[...c,...t.nodeTransforms||[]],directiveTransforms:(0,s.X$)({},u,t.directiveTransforms||{})})),Xt(a,o)}const hr=()=>({props:[]}),dr=Symbol(""),fr=Symbol(""),pr=Symbol(""),mr=Symbol(""),gr=Symbol(""),yr=Symbol(""),vr=Symbol(""),br=Symbol(""),_r=Symbol(""),wr=Symbol("");let Er;function Tr(e,t=!1){return Er||(Er=document.createElement("div")),t?(Er.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Er.children[0].getAttribute("foo")):(Er.innerHTML=e,Er.textContent)}z({[dr]:"vModelRadio",[fr]:"vModelCheckbox",[pr]:"vModelText",[mr]:"vModelSelect",[gr]:"vModelDynamic",[yr]:"withModifiers",[vr]:"withKeys",[br]:"vShow",[_r]:"Transition",[wr]:"TransitionGroup"});const Sr={parseMode:"html",isVoidTag:s.BU,isNativeTag:e=>(0,s.OC)(e)||(0,s.nC)(e)||(0,s.Sf)(e),isPreTag:e=>"pre"===e,decodeEntities:Tr,isBuiltInComponent:e=>"Transition"===e||"transition"===e?_r:"TransitionGroup"===e||"transition-group"===e?wr:void 0,getNamespace(e,t,n){let r=t?t.ns:n;if(t&&2===r)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(r=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(r=0);else t&&1===r&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(r=0));if(0===r){if("svg"===e)return 1;if("math"===e)return 2}return r}},Ir=e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:Z("style",!0,t.loc),exp:Cr(t.value.content,t.loc),modifiers:[],loc:t.loc})}))},Cr=(e,t)=>{const n=(0,s.Gx)(e);return Z(JSON.stringify(n),!1,t,3)};function kr(e,t){return Ee(e,t,void 0)}const Ar=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(kr(53,i)),t.children.length&&(n.onError(kr(54,i)),t.children.length=0),{props:[J(Z("innerHTML",!0,i),r||Z("",!0))]}},Nr=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(kr(55,i)),t.children.length&&(n.onError(kr(56,i)),t.children.length=0),{props:[J(Z("textContent",!0),r?Mt(r,n)>0?r:te(n.helperString(k),[r],i):Z("",!0))]}},xr=(e,t,n)=>{const r=er(e,t,n);if(!r.props.length||1===t.tagType)return r;e.arg&&n.onError(kr(58,e.arg.loc));const{tag:i}=t,s=n.isCustomElement(i);if("input"===i||"textarea"===i||"select"===i||s){let o=pr,a=!1;if("input"===i||s){const r=De(t,"type");if(r){if(7===r.type)o=gr;else if(r.value)switch(r.value.content){case"radio":o=dr;break;case"checkbox":o=fr;break;case"file":a=!0,n.onError(kr(59,e.loc));break;default:break}}else Me(t)&&(o=gr)}else"select"===i&&(o=mr);a||(r.needRuntime=n.helper(o))}else n.onError(kr(57,e.loc));return r.props=r.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),r},Rr=(0,s.pD)("passive,once,capture"),Or=(0,s.pD)("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Dr=(0,s.pD)("left,right"),Pr=(0,s.pD)("onkeyup,onkeydown,onkeypress",!0),Mr=(e,t,n,r)=>{const i=[],s=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];"native"===c&&be("COMPILER_V_ON_NATIVE",n,r)||Rr(c)?o.push(c):Dr(c)?Te(e)?Pr(e.content)?i.push(c):s.push(c):(i.push(c),s.push(c)):Or(c)?s.push(c):i.push(c)}return{keyModifiers:i,nonKeyModifiers:s,eventOptionModifiers:o}},Lr=(e,t)=>{const n=Te(e)&&"onclick"===e.content.toLowerCase();return n?Z(t,!0):4!==e.type?ee(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e},Fr=(e,t,n)=>Wn(e,t,n,(t=>{const{modifiers:r}=e;if(!r.length)return t;let{key:i,value:o}=t.props[0];const{keyModifiers:a,nonKeyModifiers:c,eventOptionModifiers:u}=Mr(i,r,n,e.loc);if(c.includes("right")&&(i=Lr(i,"onContextmenu")),c.includes("middle")&&(i=Lr(i,"onMouseup")),c.length&&(o=te(n.helper(yr),[o,JSON.stringify(c)])),!a.length||Te(i)&&!Pr(i.content)||(o=te(n.helper(vr),[o,JSON.stringify(a)])),u.length){const e=u.map(s.ZH).join("");i=Te(i)?Z(`${i.content}${e}`,!0):ee(["(",i,`) + "${e}"`])}return{props:[J(i,o)]}})),Vr=(e,t,n)=>{const{exp:r,loc:i}=e;return r||n.onError(kr(61,i)),{props:[],needRuntime:n.helper(br)}};const Ur=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||t.removeNode()},$r=[Ir],jr={cloak:hr,html:Ar,text:Nr,model:xr,on:Fr,show:Vr};function Br(e,t={}){return lr(e,(0,s.X$)({},Sr,t,{nodeTransforms:[Ur,...$r,...t.nodeTransforms||[]],directiveTransforms:(0,s.X$)({},jr,t.directiveTransforms||{}),transformHoist:null}))}const Hr=new WeakMap;function qr(e){let t=Hr.get(null!=e?e:s.MZ);return t||(t=Object.create(null),Hr.set(null!=e?e:s.MZ,t)),t}function Kr(e,t){if(!(0,s.Kg)(e)){if(!e.nodeType)return s.tE;e=e.innerHTML}const n=e,i=qr(t),o=i[n];if(o)return o;if("#"===e[0]){const t=document.querySelector(e);0,e=t?t.innerHTML:""}const a=(0,s.X$)({hoistStatic:!0,onError:void 0,onWarn:s.tE},t);a.isCustomElement||"undefined"===typeof customElements||(a.isCustomElement=e=>!!customElements.get(e));const{code:c}=Br(e,a);const u=new Function("Vue",c)(r);return u._rc=!0,i[n]=u}(0,i.tC)(Kr)},9306:function(e,t,n){var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},8551:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},9617:function(e,t,n){var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4576:function(e,t,n){var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},7740:function(e,t,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},6699:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6840:function(e,t,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,i,s=n(4475),o=n(9392),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6518:function(e,t,n){var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):r[m]&&r[m].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},9504:function(e,t,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3706:function(e,t,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){var r,i,s,o=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw new m(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(b,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},4913:function(e,t,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},4270:function(e,t,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},6119:function(e,t,n){var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.36.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){var r=n(7388),i=n(9039),s=n(4475),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(e,t,n){var r=n(4475),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},4114:function(e,t,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},9928:function(e,t,n){n.d(t,{MF:function(){return me},j6:function(){return he},om:function(){return le},Sx:function(){return ye},Wp:function(){return ge},KO:function(){return ve}});var r=n(7506),i=n(3424),s=n(6743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}b((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
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
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",O="0.9.13",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",$="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",q="@firebase/functions-compat",K="@firebase/installations",z="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",se="[DEFAULT]",oe={[R]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[$]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[q]:"fire-fn-compat",[K]:"fire-iid",[z]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.FA("app","Firebase",de);
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
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
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
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(o,u),u}function ye(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}le(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
const be="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=S(be,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){try{const t=await Te(),n=await t.transaction(we).objectStore(we).get(Ce(e));return n}catch(t){if(t instanceof s.g)D.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ie(e,t){try{const n=await Te(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);await i.put(t,Ce(e)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
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
 */const ke=1024,Ae=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=ke){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Pe(e){le(new r.uA("platform-logger",(e=>new N(e)),"PRIVATE")),le(new r.uA("heartbeat",(e=>new Ne(e)),"PRIVATE")),ve(R,O,e),ve(R,O,"esm2017"),ve("fire-js","")}Pe("")},7506:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});var r=n(6743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},223:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(9928),i="firebase",s="9.23.0";
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
(0,r.KO)(i,s,"app")},7391:function(e,t,n){n.d(t,{xI:function(){return Pr},x9:function(){return St}});var r=n(6743),i=n(9928);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(3424),a=n(7506);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${i.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${i.MF}): ${e}`,...t)}
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
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.FA("auth","Firebase",i);return s.create(t,{appName:e.name})}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||b(t)}
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
 */function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function k(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new C(3e4,6e4);
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
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,i,s={}){return D(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new L(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);p(e,a)}}catch(s){if(s instanceof r.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function P(e,t,n,r,i={}){const s=await O(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function M(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function V(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return O(e,"POST","/v1/accounts:lookup",t)}
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
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function j(e,t=!1){const n=(0,r.Ku)(e),i=await n.getIdToken(t),s=H(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(B(s.auth_time)),issuedAtTime:$(B(s.iat)),expirationTime:$(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function H(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function q(e){const t=H(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.g&&z(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class G{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,U(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?J(s.providerUserInfo):[],a=Y(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function X(e){const t=(0,r.Ku)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function J(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function Z(e,t){const n=await D(e,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=M(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ee;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return b("not implemented")}}
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
 */function te(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return j(this,e)}reload(){return X(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:T}=t;v(b&&T,e,"internal-error");const S=ee.fromJSON(this.name,T);v("string"===typeof b,e,"internal-error"),te(l,e.name),te(h,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),te(d,e.name),te(f,e.name),te(p,e.name),te(m,e.name),te(g,e.name),te(y,e.name);const I=new ne({uid:b,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
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
 */const re=new Map;function ie(e){_(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
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
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(ie(oe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ie(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ne._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ce(i,e,n)):new ce(i,e,n)}}
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function he(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.ZQ)()){return/crios\//i.test(e)}function fe(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function pe(e=(0,r.ZQ)()){return/android/i.test(e)}function me(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function ge(e=(0,r.ZQ)()){return/webos/i.test(e)}function ye(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=(0,r.ZQ)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.lT)()&&10===document.documentMode}function _e(e=(0,r.ZQ)()){return ye(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||fe(e)}function we(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.ZQ)());break;case"Worker":n=`${ue((0,r.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
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
 */async function Te(e,t){return O(e,"GET","/v2/recaptchaConfig",R(e,t))}
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
 */function Se(e){return void 0!==e&&void 0!==e.enterprise}class Ie{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Ce(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ke(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Ce().appendChild(r)}))}function Ae(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ne="https://www.google.com/recaptcha/enterprise.js?render=",xe="recaptcha-enterprise",Re="NO_RECAPTCHA";class Oe{constructor(e){this.type=xe,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Te(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ie(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Se(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Re)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Se(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));ke(Ne+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function De(e,t,n,r=!1){const i=new Oe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Pe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class Me{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.beforeStateQueue=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.Ku)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await Te(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ie(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Oe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,r.Ku)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Ve(e,t){const n=(0,i.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ue(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function $e(e,t,n){const r=Le(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=je(t),{host:o,port:a}=Be(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qe()}function je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Be(e){const t=je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:He(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:He(t)}}}function He(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function qe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class Ke{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
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
 */async function ze(e,t){return O(e,"POST","/v1/accounts:update",t)}
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
async function Ge(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
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
async function We(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Qe(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
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
 */class Xe extends Ke{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await De(e,n,"signInWithPassword");return Ge(e,t)}return Ge(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await De(e,n,"signInWithPassword");return Ge(e,t)}return Promise.reject(t)}));case"emailLink":return We(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ze(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ye(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
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
 */const Je="http://localhost";class Ze extends Ke{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:Je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
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
 */async function et(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function tt(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function nt(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),rt)}
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
 */class st extends Ke{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(e))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
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
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return v(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class dt extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",dt.PROVIDER_ID="facebook.com";
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
class ft extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch(r){return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com",ft.PROVIDER_ID="google.com";
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
class pt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com",pt.PROVIDER_ID="github.com";
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
class mt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com",mt.PROVIDER_ID="twitter.com";
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
class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ne._fromIdTokenResponse(e,n,r),s=yt(n),o=new gt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=yt(n);return new gt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function yt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class vt extends r.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,vt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new vt(e,t,n,r)}}function bt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw vt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function _t(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gt._forOperation(e,"link",r)}
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
async function wt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await K(e,bt(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=H(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),gt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
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
 */async function Et(e,t,n=!1){const r="signIn",i=await bt(e,r,t),s=await gt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Tt(e,t){return Et(Le(e),t)}function St(e,t,n){return Tt((0,r.Ku)(e),ut.credential(t,n))}
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
 */function It(e,t,n,i){return(0,r.Ku)(e).onIdTokenChanged(t,n,i)}function Ct(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}
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
function kt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function At(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function Nt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function xt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const Rt="__sak";
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
 */class Ot{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Dt(){const e=(0,r.ZQ)();return he(e)||ye(e)}const Pt=1e3,Mt=10;class Lt extends Ot{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dt()&&we(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Mt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Pt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lt.type="LOCAL";const Ft=Lt;
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
 */class Vt extends Ot{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vt.type="SESSION";const Ut=Vt;
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
 */function $t(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new jt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await $t(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Bt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */jt.receivers=[];class Ht{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Bt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function qt(){return window}function Kt(e){qt().location.href=e}
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
 */function zt(){return"undefined"!==typeof qt()["WorkerGlobalScope"]&&"function"===typeof qt()["importScripts"]}async function Gt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Wt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Qt(){return zt()?self:null}
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
 */const Xt="firebaseLocalStorageDb",Yt=1,Jt="firebaseLocalStorage",Zt="fbase_key";class en{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function tn(e,t){return e.transaction([Jt],t?"readwrite":"readonly").objectStore(Jt)}function nn(){const e=indexedDB.deleteDatabase(Xt);return new en(e).toPromise()}function rn(){const e=indexedDB.open(Xt,Yt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Jt,{keyPath:Zt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Jt)?t(n):(n.close(),await nn(),t(await rn()))}))}))}async function sn(e,t,n){const r=tn(e,!0).put({[Zt]:t,value:n});return new en(r).toPromise()}async function on(e,t){const n=tn(e,!1).get(t),r=await new en(n).toPromise();return void 0===r?null:r.value}function an(e,t){const n=tn(e,!0).delete(t);return new en(n).toPromise()}const cn=800,un=3;class ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await rn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>un)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jt._getInstance(Qt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gt(),!this.activeServiceWorker)return;this.sender=new Ht(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Wt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await sn(e,Rt,"1"),await an(e,Rt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>sn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>on(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>an(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=tn(e,!1).getAll();return new en(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ln.type="LOCAL";const hn=ln;
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
 */function dn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function fn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function pn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
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
Ae("rcb"),new C(3e4,6e4);
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
const mn="recaptcha";async function gn(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===mn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await kt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await dn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class yn{constructor(e){this.providerId=yn.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return gn(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yn.credentialFromTaggedObject(t)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
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
function vn(e,t){return t?ie(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */yn.PROVIDER_ID="phone",yn.PHONE_SIGN_IN_METHOD="phone";class bn extends Ke{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _n(e){return Et(e.auth,new bn(e),e.bypassAuthState)}function wn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),wt(n,new bn(e),e.bypassAuthState)}async function En(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),_t(n,new bn(e),e.bypassAuthState)}
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
 */class Tn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _n;case"linkViaPopup":case"linkViaRedirect":return En;case"reauthViaPopup":case"reauthViaRedirect":return wn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Sn=new C(2e3,1e4);class In extends Tn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Bt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Sn.get())};e()}}In.currentPopupAction=null;
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
const Cn="pendingRedirect",kn=new Map;class An extends Tn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=kn.get(this.auth._key());if(!e){try{const t=await Nn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}kn.set(this.auth._key(),e)}return this.bypassAuthState||kn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Nn(e,t){const n=On(t),r=Rn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function xn(e,t){kn.set(e._key(),t)}function Rn(e){return ie(e._redirectPersistence)}function On(e){return ae(Cn,e.config.apiKey,e.name)}
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
 */async function Dn(e,t,n=!1){const r=Le(e),i=vn(r,t),s=new An(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
const Pn=6e5;class Mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Vn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ln(e))}saveEventToCache(e){this.cachedEventUids.add(Ln(e)),this.lastProcessedEventTime=Date.now()}}function Ln(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Vn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fn(e);default:return!1}}
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
 */async function Un(e,t={}){return O(e,"GET","/v1/projects",t)}
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
 */const $n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jn=/^https?/;async function Bn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Un(e);for(const r of t)try{if(Hn(r))return}catch(n){}p(e,"unauthorized-domain")}function Hn(e){const t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!jn.test(n))return!1;if($n.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const qn=new C(3e4,6e4);function Kn(){const e=qt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function zn(e){return new Promise(((t,n)=>{var r,i,s;function o(){Kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kn(),n(m(e,"network-request-failed"))},timeout:qn.get()})}if(null===(i=null===(r=qt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qt().gapi)||void 0===s?void 0:s.load)){const t=Ae("iframefcb");return qt()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},ke(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Gn=null,e}))}let Gn=null;function Wn(e){return Gn=Gn||zn(e),Gn}
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
 */const Qn=new C(5e3,15e3),Xn="__/auth/iframe",Yn="emulator/auth/iframe",Jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function er(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,Yn):`https://${e.config.authDomain}/${Xn}`,s={apiKey:t.apiKey,appName:e.name,v:i.MF},o=Zn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function tr(e){const t=await Wn(e),n=qt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:er(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),s=qt().setTimeout((()=>{r(i)}),Qn.get());function o(){qt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const nr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rr=500,ir=600,sr="_blank",or="http://localhost";class ar{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function cr(e,t,n,i=rr,s=ir){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},nr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=de(l)?sr:n),le(l)&&(t=t||or,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ve(l)&&"_self"!==c)return ur(t||"",c),new ar(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new ar(d)}function ur(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const lr="__/auth/handler",hr="emulator/auth/handler",dr=encodeURIComponent("fac");async function fr(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${dr}=${encodeURIComponent(l)}`:"";return`${pr(e)}?${(0,r.Am)(u).slice(1)}${h}`}function pr({config:e}){return e.emulator?k(e,hr):`https://${e.authDomain}/${lr}`}
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
 */const mr="webStorageSupport";class gr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ut,this._completeRedirectFn=Dn,this._overrideRedirectResult=xn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await fr(e,t,n,w(),r);return cr(e,s,Bt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await fr(e,t,n,w(),r);return Kt(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await tr(e),n=new Mn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(mr,{type:mr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[mr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||he()||ye()}}const yr=gr;class vr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class br extends vr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new br(e)}_finalizeEnroll(e,t,n){return At(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class _r{constructor(){}static assertion(e){return br._fromCredential(e)}}_r.FACTOR_ID="phone";class wr{static assertionForEnrollment(e,t){return Er._fromSecret(e,t)}static assertionForSignIn(e,t){return Er._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;v("undefined"!==typeof t.auth,"internal-error");const n=await Nt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Tr._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}wr.FACTOR_ID="totp";class Er extends vr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Er(t,void 0,e)}static _fromEnrollmentId(e,t){return new Er(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),xt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return pn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Tr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Tr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Sr(e)||Sr(t))&&(r=!0),r&&(Sr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Sr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Sr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ir="@firebase/auth",Cr="0.23.2";
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
class kr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Ar(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Nr(e){(0,i.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},u=new Me(r,i,s,c);return Ue(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.om)(new a.uA("auth-internal",(e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new kr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Ir,Cr,Ar(e)),(0,i.KO)(Ir,Cr,"esm2017")}
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
 */const xr=300,Rr=(0,r.XA)("authIdTokenMaxAge")||xr;let Or=null;const Dr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rr)return;const i=null===n||void 0===n?void 0:n.token;Or!==i&&(Or=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pr(e=(0,i.Sx)()){const t=(0,i.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ve(e,{popupRedirectResolver:yr,persistence:[hn,Ft,Ut]}),s=(0,r.XA)("authTokenSyncURL");if(s){const e=Dr(s);Ct(n,e,(()=>e(n.currentUser))),It(n,(t=>e(t)))}const o=(0,r.Tj)("auth");return o&&$e(n,`http://${o}`),n}Nr("Browser")},6430:function(e,t,n){n.d(t,{gS:function(){return Kh},rJ:function(){return ih},kd:function(){return qh},H9:function(){return sh},GG:function(){return Hh},aU:function(){return ch}});var r,i=n(9928),s=n(7506),o=n(3424),a=n(6743),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function w(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",(()=>{}),t),h.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}function x(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function R(e){return-1!=x().indexOf(e)}function O(e){return O[" "](e),e}function D(e,t){var n=_r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}O[" "]=function(){};var P,M,L=R("Opera"),F=R("Trident")||R("MSIE"),V=R("Edge"),U=V||F,$=R("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!R("Edge"))&&!(R("Trident")||R("MSIE"))&&!R("Edge"),j=-1!=x().toLowerCase().indexOf("webkit")&&!R("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",q=function(){var e=x();return $?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):j?/WebKit\/(\S+)/.exec(e):L?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(q&&(H=q?q[1]:""),F){var K=B();if(null!=K&&K>parseFloat(H)){P=String(K);break e}}P=H}if(h.document&&F){var z=B();M=z||(parseInt(P,10)||void 0)}else M=void 0;var G=M;function W(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{O(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&W.$.h.call(this)}}w(W,k);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new J(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=_e(n),e&&e[X]?e.O(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=ve(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ge(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[X]?e.P(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=_e(n),e&&e[X]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&me(n))}function me(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[X])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ge(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ve(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function ge(e){return e in ue?ue[e]:ue[e]="on"+e}function ye(e,t){if(e.fa)e=!0;else{t=new W(t,this);var n=e.listener,r=e.la||e.src;e.ia&&me(e),e=n.call(r,t)}return e}function ve(e){return e=e[ce],e instanceof se?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function we(){E.call(this),this.i=new se(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var i=t;t=new k(r,e),ie(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}w(we,E),we.prototype[X]=!0,we.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},we.prototype.N=function(){if(we.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Z(n[r]);delete t.g[e],t.h--}}this.J=null},we.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},we.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=h.JSON.stringify;class Ie{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ce(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ke{constructor(){this.h=this.g=null}add(e,t){const n=Ae.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ae=new Ie((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xe(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Re(e){h.setTimeout((()=>{throw e}),0)}let Oe,De=!1,Pe=new ke,Me=()=>{const e=h.Promise.resolve(void 0);Oe=()=>{e.then(Le)}};var Le=()=>{for(var e;e=Ce();){try{e.h.call(e.g)}catch(n){Re(n)}var t=Ae;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}De=!1};function Fe(e,t){we.call(this),this.h=e||1,this.g=t||h,this.j=b(this.qb,this),this.l=Date.now()}function Ve(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ue(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function $e(e){e.g=Ue((()=>{e.g=null,e.i&&(e.i=!1,$e(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}w(Fe,we),r=Fe.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ve(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Fe.$.N.call(this),Ve(this),delete this.g};class je extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){E.call(this),this.h=e,this.g={}}w(Be,E);var He=[];function qe(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ke(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&me(e)}),e),e.g={}}function ze(){this.g=!0}function Ge(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function We(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ye(e,n)+(r?" "+r:"")}))}function Xe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ye(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(a){return t}}Be.prototype.N=function(){Be.$.N.call(this),Ke(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ze.prototype.Ea=function(){this.g=!1},ze.prototype.info=function(){};var Je={},Ze=null;function et(){return Ze=Ze||new we}function tt(e){k.call(this,Je.Ta,e)}function nt(e){const t=et();Ee(t,new tt(t))}function rt(e,t){k.call(this,Je.STAT_EVENT,e),this.stat=t}function it(e){const t=et();Ee(t,new rt(t,e))}function st(e,t){k.call(this,Je.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Je.Ta="serverreachability",w(tt,k),Je.STAT_EVENT="statevent",w(rt,k),Je.Ua="timingevent",w(st,k);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function lt(e){return e.h||(e.h=e.i())}function ht(){}ut.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){k.call(this,"d")}function mt(){k.call(this,"c")}function gt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Be(this),this.P=bt,e=U?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}w(pt,k),w(mt,k),w(gt,ut),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},dt=new gt;var bt=45e3,_t={},wt={};function Et(e,t,n){e.L=1,e.v=qt(Ut(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),kt(e),e.A=Ut(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new vt,e.g=ur(e.l,n?t:null,!e.s),0<e.O&&(e.M=new je(b(e.Pa,e,e.g),e.O)),qe(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),nt(),Ge(e.j,e.u,e.A,e.m,e.W,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function It(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Ct(e,n),r==wt){4==t&&(e.o=4,it(14),i=!1),Qe(e.j,e.m,null,"[Incomplete Response]");break}if(r==_t){e.o=4,it(15),Qe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Qe(e.j,e.m,r,null),Ot(e,r)}St(e)&&r!=wt&&r!=_t&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,it(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,it(11))):(Qe(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),xt(e))}function Ct(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?wt:(n=Number(t.substring(n,r)),isNaN(n)?_t:(r+=1,r+n>t.length?wt:(t=t.slice(r,r+n),e.C=r+n,t)))}function kt(e){e.Y=Date.now()+e.P,At(e,e.P)}function At(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ot(b(e.lb,e),t)}function Nt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.H||e.J||ir(e.l,e)}function Rt(e){Nt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ve(e.V),Ke(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ot(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),zn(n)}er(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(b(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((e.K||n.g==e)&&rr(n),!N(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Ht(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Nt(a),kt(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Kn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}nt(4)}catch(u){}}function Dt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Pt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pt(e),r=Dt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=yt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Vn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Vn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=l||7==t||nt(8==t||0>=d?3:2),Nt(this);var n=this.g.da();this.ca=n;t:if(St(this)){var r=Un(this.g);e="";var i=r.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Rt(this),xt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,We(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,it(12),Rt(this),xt(this);break e}Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,n)}this.S?(It(this,l,o),U&&this.i&&3==l&&(qe(this.U,this.V,"tick",this.mb),this.V.start())):(Qe(this.j,this.m,o,null),Ot(this,o)),4==l&&Rt(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,kt(this)))}else $n(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Rt(this),xt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Vn(this.g),t=this.g.ja();this.C<t.length&&(Nt(this),It(this,e,t),this.i&&4!=e&&kt(this))}},r.cancel=function(){this.J=!0,Rt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Xe(this.j,this.A),2!=this.L&&(nt(),it(17)),Rt(this),this.o=2,xt(this)):At(this,this.Y-e)};var Lt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vt){this.h=e.h,$t(this,e.j),this.s=e.s,this.g=e.g,jt(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(t=String(e).match(Lt))?(this.h=!1,$t(this,t[1]||"",!0),this.s=Kt(t[2]||""),this.g=Kt(t[3]||"",!0),jt(this,t[4]),this.l=Kt(t[5]||"",!0),Bt(this,t[6]||"",!0),this.o=Kt(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Ut(e){return new Vt(e)}function $t(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.h)):(n||(t=zt(t,Yt)),e.i=new Zt(t,e.h))}function Ht(e,t,n){e.i.set(t,n)}function qt(e){return Ht(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function zt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Vt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(zt(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(zt(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(zt(n,"/"==n.charAt(0)?Xt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",zt(n,Jt)),e.join("")};var Wt=/[#\/\?@]/g,Qt=/[#\?:]/g,Xt=/[#\?]/g,Yt=/[#\?@]/g,Jt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),I(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Zt.prototype,r.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||un,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function mn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return I(e.i)}cn.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var gn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function yn(){this.g=new gn}function vn(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;f(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function bn(e,t){const n=new ze;if(h.Image){const r=new Image;r.onload=_(_n,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(_n,n,r,"TestLoadImage: error",!1,t),r.onabort=_(_n,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(_n,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function _n(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function wn(e){this.l=e.fc||null,this.j=e.ob||!1}function En(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}w(wn,ut),wn.prototype.g=function(){return new En(this.l,this.j)},wn.prototype.i=function(e){return function(){return e}}({}),w(En,we);var Tn=0;function Sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):Cn(this),3==this.readyState&&Sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,In(this))},r.Ya=function(e){this.g&&(this.response=e,In(this))},r.ka=function(){this.g&&In(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var kn=h.JSON.parse;function An(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}w(An,we);var Nn="",xn=/^https?$/i,Rn=["POST","PUT"];function On(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pn(e),Ln(e)}function Pn(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Vn(e)||2!=e.da()))if(e.v&&4==Vn(e))Ue(e.La,0,e);else if(Ee(e,"readystatechange"),4==Vn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Lt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!xn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Vn(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Pn(e)}}finally{Ln(e)}}}function Ln(e,t){if(e.g){Fn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Vn(e){return e.g?e.g.readyState:0}function Un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Wr){return null}}function $n(e){const t={};e=(e.g&&2<=Vn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(N(e[r]))continue;var n=xe(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function jn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Bn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Ht(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qn(e){this.Ga=0,this.j=[],this.l=new ze,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,e),this.hb=Hn("retryDelaySeedMs",1e4,e),this.eb=Hn("forwardChannelMaxRetries",2,e),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new yn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(e){if(Gn(e),3==e.H){var t=e.W++,n=Ut(e.I);if(Ht(n,"SID",e.K),Ht(n,"RID",t),Ht(n,"TYPE","terminate"),Yn(e,n),t=new yt(e,e.l,t),t.L=2,t.v=qt(Ut(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=ur(t.l,null),t.g.ha(t.v)),t.G=Date.now(),kt(t)}ar(e)}function zn(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function Gn(e){zn(e),e.u&&(h.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Wn(e){if(!ln(e.i)&&!e.m){e.m=!0;var t=e.Na;Oe||Me(),De||(Oe(),De=!0),Pe.add(t,e),e.C=0}}function Qn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(b(e.Na,e,t),sr(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.W++;const r=Ut(e.I);Ht(r,"SID",e.K),Ht(r,"RID",n),Ht(r,"AID",e.V),Yn(e,r),e.o&&e.s&&Bn(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Jn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),Et(n,r,t)}function Yn(e,t){e.na&&ee(e.na,(function(e,n){Ht(t,n,e)})),e.h&&Mt({},(function(e,n){Ht(t,n,e)}))}function Jn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?b(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{vn(a,e,"req"+n+"_")}catch(si){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oe||Me(),De||(Oe(),De=!0),Pe.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(b(e.Ma,e),sr(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ut(e.wa);Ht(t,"RID","rpc"),Ht(t,"SID",e.K),Ht(t,"AID",e.V),Ht(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Ht(t,"TO",e.qa),Ht(t,"TYPE","xmlhttp"),Yn(e,t),e.o&&e.s&&Bn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=qt(Ut(t)),n.s=null,n.S=!0,Tt(n,e)}function rr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ir(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=et(),Ee(r,new st(r,n)),Wn(e)}else Zn(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Qn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:or(e,5);break;case 4:or(e,10);break;case 3:or(e,6);break;default:or(e,2)}}function sr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function or(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=b(e.pb,e);n||(n=new Vt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$t(n,"https"),qt(n)),bn(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),ar(e),Gn(e)}function ar(e){if(e.H=0,e.ma=[],e.h){const t=mn(e.i);0==t.length&&0==e.j.length||(C(e.ma,t),C(e.ma,e.j),e.i.i.length=0,I(e.j),e.j.length=0),e.h.ya()}}function cr(e,t,n){var r=n instanceof Vt?Ut(n):new Vt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),jt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Vt(null);r&&$t(s,r),t&&(s.g=t),i&&jt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ht(r,n,t),Ht(r,"VER",e.ra),Yn(e,r),r}function ur(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new An(new wn({ob:!0})):new An(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function dr(e,t){we.call(this),this.g=new qn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new mr(this)}function fr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){mt.call(this),this.status=1}function mr(e){this.g=e}function gr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function br(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=An.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?lt(this.u):lt(dt),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Dn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=S(Rn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Ue(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),An.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),kn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=qn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new yt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),ie(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jn(this,i,t),n=Ut(this.I),Ht(n,"RID",e),Ht(n,"CVER",22),this.F&&Ht(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(jn(s)))+"&"+t:this.o&&Bn(n,this.o,s)),fn(this.i,i),this.bb&&Ht(n,"TYPE","init"),this.P?(Ht(n,"$req",t),Ht(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Xn(this,e):0==this.j.length||ln(this.i)||Xn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),zn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,zn(this),er(this),it(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new dr(e,t)},w(dr,we),dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cr(e,null,e.Y),Wn(e)},dr.prototype.close=function(){Kn(this.g)},dr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Se(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Wn(t)},dr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,dr.$.N.call(this)},w(fr,pt),w(pr,mt),w(mr,lr),mr.prototype.Ba=function(){Ee(this.g,"a")},mr.prototype.Aa=function(e){Ee(this.g,new fr(e))},mr.prototype.za=function(e){Ee(this.g,new pr)},mr.prototype.ya=function(){Ee(this.g,"b")},w(yr,gr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)vr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){vr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=t},yr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var _r={};function wr(e){return-128<=e&&128>e?D(e,(function(e){return new br([0|e],0>e?-1:0)})):new br([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return Ir;if(0>e)return xr(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new br(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return xr(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=Ir,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Sr=4294967296,Ir=wr(0),Cr=wr(1),kr=wr(16777216);function Ar(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Nr(e){return-1==e.h}function xr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new br(n,~e.h).add(Cr)}function Rr(e,t){return e.add(xr(t))}function Or(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Dr(e,t){this.g=e,this.h=t}function Pr(e,t){if(Ar(t))throw Error("division by zero");if(Ar(e))return new Dr(Ir,Ir);if(Nr(e))return t=Pr(xr(e),t),new Dr(xr(t.g),xr(t.h));if(Nr(t))return t=Pr(e,xr(t)),new Dr(xr(t.g),t.h);if(30<e.g.length){if(Nr(e)||Nr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=Mr(n),r=Mr(r);var i=Lr(n,1),s=Lr(r,1);for(r=Lr(r,2),n=Lr(n,2);!Ar(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Lr(r,1),n=Lr(n,1)}return t=Rr(e,i.R(t)),new Dr(i,t)}for(i=Ir;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Nr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);Ar(s)&&(s=Cr),i=i.add(s),e=Rr(e,o)}return new Dr(i,e)}function Mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new br(n,e.h)}function Lr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new br(i,e.h)}r=br.prototype,r.ea=function(){if(Nr(this))return-xr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ar(this))return"0";if(Nr(this))return"-"+xr(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Pr(n,t).g;n=Rr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Rr(this,e),Nr(e)?-1:Ar(e)?0:1},r.abs=function(){return Nr(this)?xr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Ar(this)||Ar(e))return Ir;if(Nr(this))return Nr(e)?xr(this).R(xr(e)):xr(xr(this).R(e));if(Nr(e))return xr(this.R(xr(e)));if(0>this.X(kr)&&0>e.X(kr))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Or(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Or(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Or(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Or(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new br(n,0)},r.gb=function(e){return Pr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new br(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new br(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new br(n,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,dr.prototype.send=dr.prototype.u,dr.prototype.open=dr.prototype.m,dr.prototype.close=dr.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",we.prototype.listen=we.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Er,br.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Vr=u.getStatEventTarget=function(){return et()},Ur=u.ErrorCode=at,$r=u.EventType=ct,jr=u.Event=Je,Br=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hr=u.FetchXmlHttpFactory=wn,qr=u.WebChannel=ht,Kr=u.XhrIo=An,zr=u.Md5=yr,Gr=u.Integer=br;const Wr="@firebase/firestore";
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
 */class Qr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
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
let Xr="9.23.0";
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
 */const Yr=new o.Vy("@firebase/firestore");function Jr(){return Yr.logLevel}function Zr(e,...t){if(Yr.logLevel<=o.$b.DEBUG){const n=t.map(ni);Yr.debug(`Firestore (${Xr}): ${e}`,...n)}}function ei(e,...t){if(Yr.logLevel<=o.$b.ERROR){const n=t.map(ni);Yr.error(`Firestore (${Xr}): ${e}`,...n)}}function ti(e,...t){if(Yr.logLevel<=o.$b.WARN){const n=t.map(ni);Yr.warn(`Firestore (${Xr}): ${e}`,...n)}}function ni(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function ri(e="Unexpected state"){const t=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: `+e;throw ei(t),new Error(t)}function ii(e,t){e||ri()}function si(e,t){return e}
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
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ci{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class ui{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Qr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class di{constructor(e){this.t=e,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ii("string"==typeof t.accessToken),new ui(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ii(null===e||"string"==typeof e),new Qr(e)}}class fi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new fi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ii("string"==typeof e.token),this.T=e.token,new mi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function yi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class vi{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function bi(e,t){return e<t?-1:e>t?1:0}function _i(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class wi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wi.fromMillis(Date.now())}static fromDate(e){return wi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new wi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?bi(this.nanoseconds,e.nanoseconds):bi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ei{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ei(e)}static min(){return new Ei(new wi(0,0))}static max(){return new Ei(new wi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Ti{constructor(e,t,n){void 0===t?t=0:t>e.length&&ri(),void 0===n?n=e.length-t:n>e.length-t&&ri(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ti.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Si extends Ti{construct(e,t,n){return new Si(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Si(t)}static emptyPath(){return new Si([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ci extends Ti{construct(e,t,n){return new Ci(e,t,n)}static isValidIdentifier(e){return Ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ci.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ci(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ci(t)}static emptyPath(){return new Ci([])}}
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
 */class ki{constructor(e){this.path=e}static fromPath(e){return new ki(Si.fromString(e))}static fromName(e){return new ki(Si.fromString(e).popFirst(5))}static empty(){return new ki(Si.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Si.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Si.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ki(new Si(e.slice()))}}
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
 */class Ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function Ni(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new wi(n+1,0):new wi(n,r));return new Ri(i,ki.empty(),t)}function xi(e){return new Ri(e.readTime,e.key,-1)}class Ri{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ri(Ei.min(),ki.empty(),-1)}static max(){return new Ri(Ei.max(),ki.empty(),-1)}}function Oi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ki.comparator(e.documentKey,t.documentKey),0!==n?n:bi(e.largestBatchId,t.largestBatchId)
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
 */)}const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function Mi(e){if(e.code!==oi.FAILED_PRECONDITION||e.message!==Di)throw e;Zr("LocalStore","Unexpectedly lost primary lease")}
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
 */class Li{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Li(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Li?t:Li.resolve(t)}catch(e){return Li.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.reject(t)}static resolve(e){return new Li(((t,n)=>{t(e)}))}static reject(e){return new Li(((t,n)=>{n(e)}))}static waitFor(e){return new Li(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Li.resolve(!1);for(const n of e)t=t.next((e=>e?Li.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Li(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Li(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */function Fi(e){return"IndexedDbTransactionError"===e.name}
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
class Vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Ui(e){return null==e}function $i(e){return 0===e&&1/e==-1/0}function ji(e){return"number"==typeof e&&Number.isInteger(e)&&!$i(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */Vi.ct=-1;const Bi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qi=Hi;
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
function Ki(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Wi{constructor(e,t){this.comparator=e,this.root=t||Xi.EMPTY}insert(e,t){return new Wi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xi.BLACK,null,null))}remove(e){return new Wi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Xi.RED,this.left=null!=r?r:Xi.EMPTY,this.right=null!=i?i:Xi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Xi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Xi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const e=this.left.check();if(e!==this.right.check())throw ri();return e+(this.isRed()?0:1)}}Xi.EMPTY=null,Xi.RED=!0,Xi.BLACK=!1,Xi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Xi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Yi{constructor(e){this.comparator=e,this.data=new Wi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ji(this.data.getIterator())}getIteratorFrom(e){return new Ji(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Yi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Yi(this.comparator);return t.data=e,t}}class Ji{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Zi{constructor(e){this.fields=e,e.sort(Ci.comparator)}static empty(){return new Zi([])}unionWith(e){let t=new Yi(Ci.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Zi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class es extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class ts{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new es("Invalid base64 string: "+e):e}}(e);return new ts(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ts(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return bi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(e){if(ii(!!e),"string"==typeof e){let t=0;const n=ns.exec(e);if(ii(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:is(e.seconds),nanos:is(e.nanos)}}function is(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ss(e){return"string"==typeof e?ts.fromBase64String(e):ts.fromUint8Array(e)}
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
 */function os(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function as(e){const t=e.mapValue.fields.__previous_value__;return os(t)?as(t):t}function cs(e){const t=rs(e.mapValue.fields.__local_write_time__.timestampValue);return new wi(t.seconds,t.nanos)}
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
 */class us{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ls{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?os(e)?4:Is(e)?9007199254740991:10:ri()}function fs(e,t){if(e===t)return!0;const n=ds(e);if(n!==ds(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cs(e).isEqual(cs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=rs(e.timestampValue),r=rs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ss(e.bytesValue).isEqual(ss(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return is(e.geoPointValue.latitude)===is(t.geoPointValue.latitude)&&is(e.geoPointValue.longitude)===is(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return is(e.integerValue)===is(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=is(e.doubleValue),r=is(t.doubleValue);return n===r?$i(n)===$i(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return _i(e.arrayValue.values||[],t.arrayValue.values||[],fs);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ki(n)!==Ki(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fs(n[i],r[i])))return!1;return!0}(e,t);default:return ri()}}function ps(e,t){return void 0!==(e.values||[]).find((e=>fs(e,t)))}function ms(e,t){if(e===t)return 0;const n=ds(e),r=ds(t);if(n!==r)return bi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return bi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=is(e.integerValue||e.doubleValue),r=is(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gs(e.timestampValue,t.timestampValue);case 4:return gs(cs(e),cs(t));case 5:return bi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ss(e),r=ss(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=bi(n[i],r[i]);if(0!==e)return e}return bi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=bi(is(e.latitude),is(t.latitude));return 0!==n?n:bi(is(e.longitude),is(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ms(n[i],r[i]);if(e)return e}return bi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===hs.mapValue&&t===hs.mapValue)return 0;if(e===hs.mapValue)return 1;if(t===hs.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=bi(r[o],s[o]);if(0!==e)return e;const t=ms(n[r[o]],i[s[o]]);if(0!==t)return t}return bi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ri()}}function gs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return bi(e,t);const n=rs(e),r=rs(t),i=bi(n.seconds,r.seconds);return 0!==i?i:bi(n.nanos,r.nanos)}function ys(e){return vs(e)}function vs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=rs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ss(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ki.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${vs(e.fields[i])}`;return n+"}"}(e.mapValue):ri();var t,n}function bs(e){return!!e&&"integerValue"in e}function _s(e){return!!e&&"arrayValue"in e}function ws(e){return!!e&&"nullValue"in e}function Es(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ts(e){return!!e&&"mapValue"in e}function Ss(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ss(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ss(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Cs{constructor(e){this.value=e}static empty(){return new Cs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=Ci.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ss(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){zi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Cs(Ss(this.value))}}function ks(e){const t=[];return zi(e.fields,((e,n)=>{const r=new Ci([e]);if(Ts(n)){const e=ks(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Zi(t)
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
 */}class As{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new As(e,0,Ei.min(),Ei.min(),Ei.min(),Cs.empty(),0)}static newFoundDocument(e,t,n,r){return new As(e,1,t,Ei.min(),n,r,0)}static newNoDocument(e,t){return new As(e,2,t,Ei.min(),Ei.min(),Cs.empty(),0)}static newUnknownDocument(e,t){return new As(e,3,t,Ei.min(),Ei.min(),Cs.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof As&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new As(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ns{constructor(e,t){this.position=e,this.inclusive=t}}function xs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ki.comparator(ki.fromName(o.referenceValue),n.key):ms(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Rs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fs(e.position[n],t.position[n]))return!1;return!0}
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
 */class Os{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ds(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Ps{}class Ms extends Ps{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Hs(e,t,n):"array-contains"===t?new Gs(e,n):"in"===t?new Ws(e,n):"not-in"===t?new Qs(e,n):"array-contains-any"===t?new Xs(e,n):new Ms(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new qs(e,n):new Ks(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ms(t,this.value)):null!==t&&ds(this.value)===ds(t)&&this.matchesComparison(ms(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ls extends Ps{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ls(e,t)}matches(e){return Fs(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Fs(e){return"and"===e.op}function Vs(e){return Us(e)&&Fs(e)}function Us(e){for(const t of e.filters)if(t instanceof Ls)return!1;return!0}function $s(e){if(e instanceof Ms)return e.field.canonicalString()+e.op.toString()+ys(e.value);if(Vs(e))return e.filters.map((e=>$s(e))).join(",");{const t=e.filters.map((e=>$s(e))).join(",");return`${e.op}(${t})`}}function js(e,t){return e instanceof Ms?function(e,t){return t instanceof Ms&&e.op===t.op&&e.field.isEqual(t.field)&&fs(e.value,t.value)}(e,t):e instanceof Ls?function(e,t){return t instanceof Ls&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&js(n,t.filters[r])),!0)}(e,t):void ri()}function Bs(e){return e instanceof Ms?function(e){return`${e.field.canonicalString()} ${e.op} ${ys(e.value)}`}(e):e instanceof Ls?function(e){return e.op.toString()+" {"+e.getFilters().map(Bs).join(" ,")+"}"}(e):"Filter"}class Hs extends Ms{constructor(e,t,n){super(e,t,n),this.key=ki.fromName(n.referenceValue)}matches(e){const t=ki.comparator(e.key,this.key);return this.matchesComparison(t)}}class qs extends Ms{constructor(e,t){super(e,"in",t),this.keys=zs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ks extends Ms{constructor(e,t){super(e,"not-in",t),this.keys=zs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ki.fromName(e.referenceValue)))}class Gs extends Ms{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _s(t)&&ps(t.arrayValue,this.value)}}class Ws extends Ms{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ps(this.value.arrayValue,t)}}class Qs extends Ms{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ps(this.value.arrayValue,t)}}class Xs extends Ms{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_s(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ps(this.value.arrayValue,e)))}}
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
 */class Ys{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Js(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ys(e,t,n,r,i,s,o)}function Zs(e){const t=si(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>$s(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ys(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ys(e))).join(",")),t.dt=e}return t.dt}function eo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ds(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!js(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Rs(e.startAt,t.startAt)&&Rs(e.endAt,t.endAt)}function to(e){return ki.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class no{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ro(e,t,n,r,i,s,o,a){return new no(e,t,n,r,i,s,o,a)}function io(e){return new no(e)}function so(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function oo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ao(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function co(e){return null!==e.collectionGroup}function uo(e){const t=si(e);if(null===t.wt){t.wt=[];const e=ao(t),n=oo(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Os(e)),t.wt.push(new Os(Ci.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Os(Ci.keyField(),e))}}}return t.wt}function lo(e){const t=si(e);if(!t._t)if("F"===t.limitType)t._t=Js(t.path,t.collectionGroup,uo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of uo(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Os(i.field,t))}const n=t.endAt?new Ns(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ns(t.startAt.position,t.startAt.inclusive):null;t._t=Js(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ho(e,t,n){return new no(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function fo(e,t){return eo(lo(e),lo(t))&&e.limitType===t.limitType}function po(e){return`${Zs(lo(e))}|lt:${e.limitType}`}function mo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Bs(e))).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ys(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ys(e))).join(",")),`Target(${t})`}(lo(e))}; limitType=${e.limitType})`}function go(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ki.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of uo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,uo(e),t))&&!(e.endAt&&!function(e,t,n){const r=xs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,uo(e),t))}(e,t)}function yo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function vo(e){return(t,n)=>{let r=!1;for(const i of uo(e)){const e=bo(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function bo(e,t,n){const r=e.field.isKeyField()?ki.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ms(r,i):ri()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
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
 */class _o{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Gi(this.inner)}size(){return this.innerSize}}
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
 */const wo=new Wi(ki.comparator);function Eo(){return wo}const To=new Wi(ki.comparator);function So(...e){let t=To;for(const n of e)t=t.insert(n.key,n);return t}function Io(e){let t=To;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Co(){return Ao()}function ko(){return Ao()}function Ao(){return new _o((e=>e.toString()),((e,t)=>e.isEqual(t)))}const No=new Wi(ki.comparator),xo=new Yi(ki.comparator);function Ro(...e){let t=xo;for(const n of e)t=t.add(n);return t}const Oo=new Yi(bi);function Do(){return Oo}
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
 */function Po(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(t)?"-0":t}}function Mo(e){return{integerValue:""+e}}function Lo(e,t){return ji(t)?Mo(t):Po(e,t)}
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
 */class Fo{constructor(){this._=void 0}}function Vo(e,t,n){return e instanceof jo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&os(t)&&(t=as(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Bo?Ho(e,t):e instanceof qo?Ko(e,t):function(e,t){const n=$o(e,t),r=Go(n)+Go(e.gt);return bs(n)&&bs(e.gt)?Mo(r):Po(e.serializer,r)}(e,t)}function Uo(e,t,n){return e instanceof Bo?Ho(e,t):e instanceof qo?Ko(e,t):n}function $o(e,t){return e instanceof zo?bs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class jo extends Fo{}class Bo extends Fo{constructor(e){super(),this.elements=e}}function Ho(e,t){const n=Wo(t);for(const r of e.elements)n.some((e=>fs(e,r)))||n.push(r);return{arrayValue:{values:n}}}class qo extends Fo{constructor(e){super(),this.elements=e}}function Ko(e,t){let n=Wo(t);for(const r of e.elements)n=n.filter((e=>!fs(e,r)));return{arrayValue:{values:n}}}class zo extends Fo{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Go(e){return is(e.integerValue||e.doubleValue)}function Wo(e){return _s(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */function Qo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Bo&&t instanceof Bo||e instanceof qo&&t instanceof qo?_i(e.elements,t.elements,fs):e instanceof zo&&t instanceof zo?fs(e.gt,t.gt):e instanceof jo&&t instanceof jo}(e.transform,t.transform)}class Xo{constructor(e,t){this.version=e,this.transformResults=t}}class Yo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yo}static exists(e){return new Yo(void 0,e)}static updateTime(e){return new Yo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Zo{}function ea(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new la(e.key,Yo.none()):new sa(e.key,e.data,Yo.none());{const n=e.data,r=Cs.empty();let i=new Yi(Ci.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new oa(e.key,r,new Zi(i.toArray()),Yo.none())}}function ta(e,t,n){e instanceof sa?function(e,t,n){const r=e.value.clone(),i=ca(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof oa?function(e,t,n){if(!Jo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ca(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(aa(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function na(e,t,n,r){return e instanceof sa?function(e,t,n,r){if(!Jo(e.precondition,t))return n;const i=e.value.clone(),s=ua(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof oa?function(e,t,n,r){if(!Jo(e.precondition,t))return n;const i=ua(e.fieldTransforms,r,t),s=t.data;return s.setAll(aa(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Jo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ra(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=$o(r.transform,e||null);null!=i&&(null===n&&(n=Cs.empty()),n.set(r.field,i))}return n||null}function ia(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&_i(e,t,((e,t)=>Qo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sa extends Zo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class oa extends Zo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aa(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ca(e,t,n){const r=new Map;ii(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Uo(o,a,n[i]))}return r}function ua(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Vo(e,s,t))}return r}class la extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ha extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class da{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ta(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=na(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=na(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ko();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ea(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ei.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ro())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,((e,t)=>ia(e,t)))&&_i(this.baseMutations,e.baseMutations,((e,t)=>ia(e,t)))}}class fa{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ii(e.mutations.length===n.length);let r=No;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new fa(e,t,n,r)}}
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
 */class pa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
class ma{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var ga,ya;function va(e){switch(e){default:return ri();case oi.CANCELLED:case oi.UNKNOWN:case oi.DEADLINE_EXCEEDED:case oi.RESOURCE_EXHAUSTED:case oi.INTERNAL:case oi.UNAVAILABLE:case oi.UNAUTHENTICATED:return!1;case oi.INVALID_ARGUMENT:case oi.NOT_FOUND:case oi.ALREADY_EXISTS:case oi.PERMISSION_DENIED:case oi.FAILED_PRECONDITION:case oi.ABORTED:case oi.OUT_OF_RANGE:case oi.UNIMPLEMENTED:case oi.DATA_LOSS:return!0}}function ba(e){if(void 0===e)return ei("GRPC error has no .code"),oi.UNKNOWN;switch(e){case ga.OK:return oi.OK;case ga.CANCELLED:return oi.CANCELLED;case ga.UNKNOWN:return oi.UNKNOWN;case ga.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ga.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ga.INTERNAL:return oi.INTERNAL;case ga.UNAVAILABLE:return oi.UNAVAILABLE;case ga.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ga.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ga.NOT_FOUND:return oi.NOT_FOUND;case ga.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ga.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ga.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ga.ABORTED:return oi.ABORTED;case ga.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ga.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ga.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(ya=ga||(ga={}))[ya.OK=0]="OK",ya[ya.CANCELLED=1]="CANCELLED",ya[ya.UNKNOWN=2]="UNKNOWN",ya[ya.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ya[ya.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ya[ya.NOT_FOUND=5]="NOT_FOUND",ya[ya.ALREADY_EXISTS=6]="ALREADY_EXISTS",ya[ya.PERMISSION_DENIED=7]="PERMISSION_DENIED",ya[ya.UNAUTHENTICATED=16]="UNAUTHENTICATED",ya[ya.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ya[ya.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ya[ya.ABORTED=10]="ABORTED",ya[ya.OUT_OF_RANGE=11]="OUT_OF_RANGE",ya[ya.UNIMPLEMENTED=12]="UNIMPLEMENTED",ya[ya.INTERNAL=13]="INTERNAL",ya[ya.UNAVAILABLE=14]="UNAVAILABLE",ya[ya.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
class _a{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wa}static getOrCreateInstance(){return null===wa&&(wa=new _a),wa}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let wa=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ea(){return new TextEncoder}
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
 */const Ta=new Gr([4294967295,4294967295],0);function Sa(e){const t=Ea().encode(e),n=new zr;return n.update(t),new Uint8Array(n.digest())}function Ia(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class Ca{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(n<0)throw new ka(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ka(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Gr.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Gr.fromNumber(n)));return 1===r.compare(Ta)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Sa(e),[n,r]=Ia(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Ca(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=Sa(e),[n,r]=Ia(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Aa{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Aa(Ei.min(),r,new Wi(bi),Eo(),Ro())}}class Na{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Na(n,t,Ro(),Ro(),Ro())}}
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
 */class xa{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Ra{constructor(e,t){this.targetId=e,this.Vt=t}}class Oa{constructor(e,t,n=ts.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Da{constructor(){this.St=0,this.Dt=La(),this.Ct=ts.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ro(),t=Ro(),n=Ro();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new Na(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=La()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Pa{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Eo(),this.zt=Ma(),this.Wt=new Wi(bi)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ri()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(to(s))if(0===r){const e=new ki(s.path);this.Yt(n,e,As.newNoDocument(e,Ei.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=_a.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
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
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=ss(i).toUint8Array()}catch(e){if(e instanceof es)return ti("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Ca(a,s,o)}catch(e){return ti(e instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&to(i.target)){const t=new ki(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,As.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=Ro();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Aa(e,t,this.Wt,this.jt,n);return this.jt=Eo(),this.zt=Ma(),this.Wt=new Wi(bi),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Da,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Yi(bi),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Zr("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Da),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Ma(){return new Wi(ki.comparator)}function La(){return new Wi(ki.comparator)}const Fa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Va=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ua=(()=>{const e={and:"AND",or:"OR"};return e})();class $a{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ja(e,t){return e.useProto3Json||Ui(t)?t:{value:t}}function Ba(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ha(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function qa(e,t){return Ba(e,t.toTimestamp())}function Ka(e){return ii(!!e),Ei.fromTimestamp(function(e){const t=rs(e);return new wi(t.seconds,t.nanos)}(e))}function za(e,t){return function(e){return new Si(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ga(e){const t=Si.fromString(e);return ii(gc(t)),t}function Wa(e,t){return za(e.databaseId,t.path)}function Qa(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ki(Za(n))}function Xa(e,t){return za(e.databaseId,t)}function Ya(e){const t=Ga(e);return 4===t.length?Si.emptyPath():Za(t)}function Ja(e){return new Si(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Za(e){return ii(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ec(e,t,n){return{name:Wa(e,t),fields:n.value.mapValue.fields}}function tc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ri()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ii(void 0===t||"string"==typeof t),ts.fromBase64String(t||"")):(ii(void 0===t||t instanceof Uint8Array),ts.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?oi.UNKNOWN:ba(e.code);return new ai(t,e.message||"")}(o);n=new Oa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qa(e,r.document.name),s=Ka(r.document.updateTime),o=r.document.createTime?Ka(r.document.createTime):Ei.min(),a=new Cs({mapValue:{fields:r.document.fields}}),c=As.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new xa(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Qa(e,r.document),s=r.readTime?Ka(r.readTime):Ei.min(),o=As.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Qa(e,r.document),s=r.removedTargetIds||[];n=new xa([],s,i,null)}else{if(!("filter"in t))return ri();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new ma(r,i),o=e.targetId;n=new Ra(o,s)}}return n}function nc(e,t){let n;if(t instanceof sa)n={update:ec(e,t.key,t.value)};else if(t instanceof la)n={delete:Wa(e,t.key)};else if(t instanceof oa)n={update:ec(e,t.key,t.data),updateMask:mc(t.fieldMask)};else{if(!(t instanceof ha))return ri();n={verify:Wa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof jo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Bo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof qo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof zo)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ri()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:qa(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ri()}(e,t.precondition)),n}function rc(e,t){return e&&e.length>0?(ii(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ka(e.updateTime):Ka(t);return n.isEqual(Ei.min())&&(n=Ka(t)),new Xo(n,e.transformResults||[])}(e,t)))):[]}function ic(e,t){return{documents:[Xa(e,t.path)]}}function sc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Xa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return pc(Ls.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:dc(e.field),direction:uc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ja(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function oc(e){let t=Ya(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=cc(e);return t instanceof Ls&&Vs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Os(fc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ui(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ns(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ns(n,t)}(n.endAt)),ro(t,i,o,s,a,"F",c,u)}function ac(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function cc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fc(e.unaryFilter.field);return Ms.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=fc(e.unaryFilter.field);return Ms.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fc(e.unaryFilter.field);return Ms.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fc(e.unaryFilter.field);return Ms.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(e):void 0!==e.fieldFilter?function(e){return Ms.create(fc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ls.create(e.compositeFilter.filters.map((e=>cc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ri()}}(e.compositeFilter.op))}(e):ri()}function uc(e){return Fa[e]}function lc(e){return Va[e]}function hc(e){return Ua[e]}function dc(e){return{fieldPath:e.canonicalString()}}function fc(e){return Ci.fromServerFormat(e.fieldPath)}function pc(e){return e instanceof Ms?function(e){if("=="===e.op){if(Es(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NAN"}};if(ws(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Es(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NOT_NAN"}};if(ws(e.value))return{unaryFilter:{field:dc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dc(e.field),op:lc(e.op),value:e.value}}}(e):e instanceof Ls?function(e){const t=e.getFilters().map((e=>pc(e)));return 1===t.length?t[0]:{compositeFilter:{op:hc(e.op),filters:t}}}(e):ri()}function mc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function gc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class yc{constructor(e,t,n,r,i=Ei.min(),s=Ei.min(),o=ts.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new yc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class vc{constructor(e){this.fe=e}}function bc(e){const t=oc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ho(t,t.limit,"L"):t}
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
class _c{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(is(e.integerValue));else if("doubleValue"in e){const n=is(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),$i(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(ss(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Is(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ri()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),ki.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}_c.Ve=new _c;
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
class wc{constructor(){this.rn=new Ec}addToCollectionParentIndex(e,t){return this.rn.add(t),Li.resolve()}getCollectionParents(e,t){return Li.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Li.resolve()}deleteFieldIndex(e,t){return Li.resolve()}getDocumentsMatchingTarget(e,t){return Li.resolve(null)}getIndexType(e,t){return Li.resolve(0)}getFieldIndexes(e,t){return Li.resolve([])}getNextCollectionGroupToUpdate(e){return Li.resolve(null)}getMinOffset(e,t){return Li.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return Li.resolve(Ri.min())}updateCollectionGroup(e,t,n){return Li.resolve()}updateIndexEntries(e,t){return Li.resolve()}}class Ec{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yi(Si.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yi(Si.comparator)).toArray()}}
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
 */new Uint8Array(0);class Tc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Tc(e,Tc.DEFAULT_COLLECTION_PERCENTILE,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Tc.DEFAULT_COLLECTION_PERCENTILE=10,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tc.DEFAULT=new Tc(41943040,Tc.DEFAULT_COLLECTION_PERCENTILE,Tc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tc.DISABLED=new Tc(-1,0,0);
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
class Sc{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Sc(0)}static Mn(){return new Sc(-1)}}
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
class Ic{constructor(){this.changes=new _o((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,As.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Li.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class Cc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class kc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&na(n.mutation,e,Zi.empty(),wi.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ro()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ro()){const r=Co();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=So();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Co();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ro())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Eo();const s=Ao(),o=Ao();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof oa)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),na(o.mutation,t,o.mutation.getFieldMask(),wi.now())):s.set(t.key,Zi.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Cc(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ao();let r=new Wi(((e,t)=>e-t)),i=Ro();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Zi.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ro()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ko();c.forEach((e=>{if(!i.has(e)){const r=ea(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ki.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):co(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Li.resolve(Co());let o=-1,a=i;return s.next((t=>Li.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Li.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ro()))).next((e=>({batchId:o,changes:Io(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ki(t)).next((e=>{let t=So();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=So();return this.indexManager.getCollectionParents(e,r).next((s=>Li.forEach(s,(s=>{const o=function(e,t){return new no(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,As.newInvalidDocument(r)))}));let n=So();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&na(s.mutation,i,Zi.empty(),wi.now()),go(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class Ac{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Li.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Ka(n.createTime)}),Li.resolve()}getNamedQuery(e,t){return Li.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:bc(e.bundledQuery),readTime:Ka(e.readTime)}}(t)),Li.resolve()}}
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
 */class Nc{constructor(){this.overlays=new Wi(ki.comparator),this.ls=new Map}getOverlay(e,t){return Li.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Co();return Li.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Li.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Li.resolve()}getOverlaysForCollection(e,t,n){const r=Co(),i=t.length+1,s=new ki(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Li.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Wi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Co(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Co(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Li.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new pa(t,n));let i=this.ls.get(t);void 0===i&&(i=Ro(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
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
 */class xc{constructor(){this.fs=new Yi(Rc.ds),this.ws=new Yi(Rc._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Rc(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Rc(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new ki(new Si([])),n=new Rc(t,e),r=new Rc(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new ki(new Si([])),n=new Rc(t,e),r=new Rc(t,e+1);let i=Ro();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Rc(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Rc{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return ki.comparator(e.key,t.key)||bi(e.As,t.As)}static _s(e,t){return bi(e.As,t.As)||ki.comparator(e.key,t.key)}}
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
 */class Oc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Yi(Rc.ds)}checkEmpty(e){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new da(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new Rc(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(e,t){return Li.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Rc(t,0),r=new Rc(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yi(bi);return t.forEach((e=>{const t=new Rc(e,0),r=new Rc(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Li.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ki.isDocumentKey(i)||(i=i.child(""));const s=new Rc(new ki(i),0);let o=new Yi(bi);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),Li.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ii(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Li.forEach(t.mutations,(r=>{const i=new Rc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Rc(t,0),r=this.Rs.firstAfterOrEqual(n);return Li.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Li.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Dc{constructor(e){this.Ds=e,this.docs=new Wi(ki.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Li.resolve(n?n.document.mutableCopy():As.newInvalidDocument(t))}getEntries(e,t){let n=Eo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():As.newInvalidDocument(e))})),Li.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Eo();const s=t.path,o=new ki(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Oi(xi(o),n)<=0||(r.has(o.key)||go(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ri()}Cs(e,t){return Li.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Pc(this)}getSize(e){return Li.resolve(this.size)}}class Pc extends Ic{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Li.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
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
 */class Mc{constructor(e){this.persistence=e,this.xs=new _o((e=>Zs(e)),eo),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Ns=0,this.ks=new xc,this.targetCount=0,this.Ms=Sc.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Li.resolve()}getLastRemoteSnapshotVersion(e){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Li.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Li.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Sc(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Li.resolve()}updateTargetData(e,t){return this.Fn(t),Li.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Li.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(e){return Li.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Li.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Li.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Li.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Li.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Li.resolve(n)}containsKey(e,t){return Li.resolve(this.ks.containsKey(t))}}
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
 */class Lc{constructor(e,t){this.$s={},this.overlays={},this.Os=new Vi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Mc(this),this.indexManager=new wc,this.remoteDocumentCache=function(e){return new Dc(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new vc(t),this.qs=new Ac(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Oc(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Zr("MemoryPersistence","Starting transaction:",e);const r=new Fc(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Li.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Fc extends Pi{constructor(e){super(),this.currentSequenceNumber=e}}class Vc{constructor(e){this.persistence=e,this.Qs=new xc,this.js=null}static zs(e){return new Vc(e)}get Ws(){if(this.js)return this.js;throw ri()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Li.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Li.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Ws,(n=>{const r=ki.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,Ei.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Li.or([()=>Li.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
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
class Uc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Ro(),r=Ro();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Uc(e,t.fromCache,n,r)}}
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
 */class $c{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(so(t))return Li.resolve(null);let n=lo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ho(t,null,"F"),n=lo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ro(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,ho(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return so(t)||r.isEqual(Ei.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(Jr()<=o.$b.DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mo(t)),this.Wi(e,s,t,Ni(r,-1)))}))}ji(e,t){let n=new Yi(vo(e));return t.forEach(((t,r)=>{go(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Jr()<=o.$b.DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",mo(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ri.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class jc{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Wi(bi),this.Yi=new _o((e=>Zs(e)),eo),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Bc(e,t,n,r){return new jc(e,t,n,r)}async function Hc(e,t){const n=si(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ro();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function qc(e,t){const n=si(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Li.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ii(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ro();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Kc(e){const t=si(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function zc(e,t){const n=si(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(ts.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))}));let a=Eo(),c=Ro();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Gc(e,s,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(Ei.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Li.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Gc(e,t,n){let r=Ro(),i=Ro();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Eo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ei.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function Wc(e,t){const n=si(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Qc(e,t){const n=si(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,Li.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new yc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Xc(e,t,n){const r=si(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Fi(e))throw e;Zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Yc(e,t,n){const r=si(e);let i=Ei.min(),s=Ro();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=si(e),i=r.Yi.get(n);return void 0!==i?Li.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,lo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Ei.min(),n?s:Ro()))).next((e=>(Jc(r,yo(t),e),{documents:e,ir:s})))))}function Jc(e,t,n){let r=e.Xi.get(t)||Ei.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class Zc{constructor(){this.activeTargetIds=Do()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eu{constructor(){this.Hr=new Zc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Zc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class tu{Yr(e){}shutdown(){}}
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
 */class nu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ru=null;function iu(){return null===ru?ru=268435456+Math.round(2147483648*Math.random()):ru++,"0x"+ru.toString(16)
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
 */}const su={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class ou{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
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
 */const au="WebChannelConnection";class cu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=iu(),o=this.To(e,t);Zr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(Zr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ti("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=su[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=iu();return new Promise(((s,o)=>{const a=new Kr;a.setWithCredentials(!0),a.listenOnce($r.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ur.NO_ERROR:const t=a.getResponseJson();Zr(au,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Ur.TIMEOUT:Zr(au,`RPC '${e}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const n=a.getStatus();if(Zr(au,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(t)>=0?t:oi.UNKNOWN}(t.status);o(new ai(e,t.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(au,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Zr(au,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=iu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Hr({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(au,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new ou({ro:t=>{d?Zr(au,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Zr(au,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Zr(au,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{d||Zr(au,`RPC '${e}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{d||(d=!0,Zr(au,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(l,qr.EventType.ERROR,(t=>{d||(d=!0,ti(au,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zr(au,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ga[e];if(void 0!==t)return ba(t)}(t),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new ai(n,i)),l.close()}else Zr(au,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,jr.STAT_EVENT,(t=>{t.stat===Br.PROXY?Zr(au,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Br.NOPROXY&&Zr(au,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
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
 */function uu(){return"undefined"!=typeof document?document:null}
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
 */function lu(e){return new $a(e,!0)}
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
 */class hu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
 */class du{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new hu(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===oi.RESOURCE_EXHAUSTED?(ei(t.toString()),ei("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new ai(oi.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fu extends du{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=tc(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ei.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ei.min():t.readTime?Ka(t.readTime):Ei.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Ja(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=to(r)?{documents:ic(e,r)}:{query:sc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ha(e,t.resumeToken);const r=ja(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ei.min())>0){n.readTime=Ba(e,t.snapshotVersion.toTimestamp());const r=ja(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=ac(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Ja(this.serializer),t.removeTarget=e,this.Wo(t)}}class pu extends du{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ii(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=rc(e.writeResults,e.commitTime),n=Ka(e.commitTime);return this.listener.cu(n,t)}return ii(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ja(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>nc(this.serializer,e)))};this.Wo(t)}}
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
 */class mu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(oi.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(oi.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class gu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ei(t),this.mu=!1):Zr("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
 */class yu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Cu(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=si(e);t.vu.add(4),await bu(t),t.bu.set("Unknown"),t.vu.delete(4),await vu(t)}(this))}))})),this.bu=new gu(n,r)}}async function vu(e){if(Cu(e))for(const t of e.Ru)await t(!0)}async function bu(e){for(const t of e.Ru)await t(!1)}function _u(e,t){const n=si(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Iu(n)?Su(n):qu(n).Ko()&&Eu(n,t))}function wu(e,t){const n=si(e),r=qu(n);n.Au.delete(t),r.Ko()&&Tu(n,t),0===n.Au.size&&(r.Ko()?r.jo():Cu(n)&&n.bu.set("Unknown"))}function Eu(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ei.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}qu(e).su(t)}function Tu(e,t){e.Vu.qt(t),qu(e).iu(t)}function Su(e){e.Vu=new Pa({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),qu(e).start(),e.bu.gu()}function Iu(e){return Cu(e)&&!qu(e).Uo()&&e.Au.size>0}function Cu(e){return 0===si(e).vu.size}function ku(e){e.Vu=void 0}async function Au(e){e.Au.forEach(((t,n)=>{Eu(e,t)}))}async function Nu(e,t){ku(e),Iu(e)?(e.bu.Iu(t),Su(e)):e.bu.set("Unknown")}async function xu(e,t,n){if(e.bu.set("Online"),t instanceof Oa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ru(e,n)}else if(t instanceof xa?e.Vu.Ht(t):t instanceof Ra?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ei.min()))try{const t=await Kc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(ts.EMPTY_BYTE_STRING,r.snapshotVersion)),Tu(e,t);const i=new yc(r.target,t,n,r.sequenceNumber);Eu(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Zr("RemoteStore","Failed to raise snapshot:",t),await Ru(e,t)}}async function Ru(e,t,n){if(!Fi(t))throw t;e.vu.add(1),await bu(e),e.bu.set("Offline"),n||(n=()=>Kc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await vu(e)}))}function Ou(e,t){return t().catch((n=>Ru(e,n,t)))}async function Du(e){const t=si(e),n=Ku(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Pu(t);)try{const e=await Wc(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Mu(t,e)}catch(e){await Ru(t,e)}Lu(t)&&Fu(t)}function Pu(e){return Cu(e)&&e.Eu.length<10}function Mu(e,t){e.Eu.push(t);const n=Ku(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Lu(e){return Cu(e)&&!Ku(e).Uo()&&e.Eu.length>0}function Fu(e){Ku(e).start()}async function Vu(e){Ku(e).hu()}async function Uu(e){const t=Ku(e);for(const n of e.Eu)t.uu(n.mutations)}async function $u(e,t,n){const r=e.Eu.shift(),i=fa.from(r,t,n);await Ou(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Du(e)}async function ju(e,t){t&&Ku(e).ou&&await async function(e,t){if(n=t.code,va(n)&&n!==oi.ABORTED){const n=e.Eu.shift();Ku(e).Qo(),await Ou(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Du(e)}var n}(e,t),Lu(e)&&Fu(e)}async function Bu(e,t){const n=si(e);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=Cu(n);n.vu.add(3),await bu(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await vu(n)}async function Hu(e,t){const n=si(e);t?(n.vu.delete(2),await vu(n)):t||(n.vu.add(2),await bu(n),n.bu.set("Unknown"))}function qu(e){return e.Su||(e.Su=function(e,t,n){const r=si(e);return r.fu(),new fu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{uo:Au.bind(null,e),ao:Nu.bind(null,e),nu:xu.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Iu(e)?Su(e):e.bu.set("Unknown")):(await e.Su.stop(),ku(e))}))),e.Su}function Ku(e){return e.Du||(e.Du=function(e,t,n){const r=si(e);return r.fu(),new pu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Vu.bind(null,e),ao:ju.bind(null,e),au:Uu.bind(null,e),cu:$u.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Du(e)):(await e.Du.stop(),e.Eu.length>0&&(Zr("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
 */}class zu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new zu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(e,t){if(ei("AsyncQueue",`${t}: ${e}`),Fi(e))return new ai(oi.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Wu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ki.comparator(t.key,n.key):(e,t)=>ki.comparator(e.key,t.key),this.keyedMap=So(),this.sortedSet=new Wi(this.comparator)}static emptySet(e){return new Wu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Qu{constructor(){this.Cu=new Wi(ki.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ri():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Xu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Xu(e,t,Wu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Yu{constructor(){this.Nu=void 0,this.listeners=[]}}class Ju{constructor(){this.queries=new _o((e=>po(e)),fo),this.onlineState="Unknown",this.ku=new Set}}async function Zu(e,t){const n=si(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Yu),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Gu(e,`Initialization of query '${mo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&rl(n)}async function el(e,t){const n=si(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function tl(e,t){const n=si(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&rl(n)}function nl(e,t,n){const r=si(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function rl(e){e.ku.forEach((e=>{e.next()}))}class il{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Xu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Xu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
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
class sl{constructor(e){this.key=e}}class ol{constructor(e){this.key=e}}class al{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ro(),this.mutatedKeys=Ro(),this.tc=vo(e),this.ec=new Wu(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Qu,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=go(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Xu(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Qu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ro(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new ol(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new sl(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Ro();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Xu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class cl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ul{constructor(e){this.key=e,this.fc=!1}}class ll{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new _o((e=>po(e)),fo),this._c=new Map,this.mc=new Set,this.gc=new Wi(ki.comparator),this.yc=new Map,this.Ic=new xc,this.Tc={},this.Ec=new Map,this.Ac=Sc.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function hl(e,t){const n=xl(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Qc(n.localStore,lo(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await dl(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&_u(n.remoteStore,e)}return i}async function dl(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Yc(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Sl(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Yc(e.localStore,t,!0),o=new al(t,s.ir),a=o.sc(s.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Sl(e,n,u.cc);const l=new cl(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function fl(e,t){const n=si(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!fo(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),wu(n.remoteStore,r.targetId),El(n,r.targetId)})).catch(Mi)):(El(n,r.targetId),await Xc(n.localStore,r.targetId,!0))}async function pl(e,t,n){const r=Rl(e);try{const e=await function(e,t){const n=si(e),r=wi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ro());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Eo(),c=Ro();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ra(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new oa(e.key,t,ks(t.value.mapValue),Yo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Io(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Wi(bi)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await kl(r,e.changes),await Du(r.remoteStore)}catch(e){const t=Gu(e,"Failed to persist write");n.reject(t)}}async function ml(e,t){const n=si(e);try{const e=await zc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(ii(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?ii(r.fc):e.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))})),await kl(n,e,t)}catch(e){await Mi(e)}}function gl(e,t,n){const r=si(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=si(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)})),r&&rl(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yl(e,t,n){const r=si(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Wi(ki.comparator);e=e.insert(s,As.newNoDocument(s,Ei.min()));const n=Ro().add(s),i=new Aa(Ei.min(),new Map,new Wi(bi),e,n);await ml(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),Cl(r)}else await Xc(r.localStore,t,!1).then((()=>El(r,t,n))).catch(Mi)}async function vl(e,t){const n=si(e),r=t.batch.batchId;try{const e=await qc(n.localStore,t);wl(n,r,null),_l(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kl(n,e)}catch(e){await Mi(e)}}async function bl(e,t,n){const r=si(e);try{const e=await function(e,t){const n=si(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ii(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);wl(r,t,n),_l(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await kl(r,e)}catch(n){await Mi(n)}}function _l(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function wl(e,t,n){const r=si(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function El(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Tl(e,t)}))}function Tl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(wu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Cl(e))}function Sl(e,t,n){for(const r of n)r instanceof sl?(e.Ic.addReference(r.key,t),Il(e,r)):r instanceof ol?(Zr("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Tl(e,r.key)):ri()}function Il(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),e.mc.add(r),Cl(e))}function Cl(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new ki(Si.fromString(t)),r=e.Ac.next();e.yc.set(r,new ul(n)),e.gc=e.gc.insert(n,r),_u(e.remoteStore,new yc(lo(io(n.path)),r,"TargetPurposeLimboResolution",Vi.ct))}}async function kl(e,t,n){const r=si(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Uc.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=si(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Li.forEach(t,(t=>Li.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Li.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Fi(e))throw e;Zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Al(e,t){const n=si(e);if(!n.currentUser.isEqual(t)){Zr("SyncEngine","User change. New user:",t.toKey());const e=await Hc(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new ai(oi.CANCELLED,t))}))})),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await kl(n,e.er)}}function Nl(e,t){const n=si(e),r=n.yc.get(t);if(r&&r.fc)return Ro().add(r.key);{let e=Ro();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function xl(e){const t=si(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ml.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yl.bind(null,t),t.dc.nu=tl.bind(null,t.eventManager),t.dc.Pc=nl.bind(null,t.eventManager),t}function Rl(e){const t=si(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bl.bind(null,t),t}class Ol{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Bc(this.persistence,new $c,e.initialUser,this.serializer)}createPersistence(e){return new Lc(Vc.zs,this.serializer)}createSharedClientState(e){return new eu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Al.bind(null,this.syncEngine),await Hu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ju}createDatastore(e){const t=lu(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new cu(r));var r;return function(e,t,n,r){return new mu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>gl(this.syncEngine,e,0),s=nu.D()?new nu:new tu,new yu(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ll(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=si(e);Zr("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await bu(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
class Pl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ei("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Ml{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=vi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Gu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ll(e,t){e.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Hc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Fl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ul(e);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Bu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Bu(t.remoteStore,n))),e._onlineComponents=t}function Vl(e){return"FirebaseError"===e.name?e.code===oi.FAILED_PRECONDITION||e.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Ul(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Vl(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Ll(e,new Ol)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ll(e,new Ol);return e._offlineComponents}async function $l(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await Fl(e,e._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await Fl(e,new Dl))),e._onlineComponents}function jl(e){return $l(e).then((e=>e.syncEngine))}async function Bl(e){const t=await $l(e),n=t.eventManager;return n.onListen=hl.bind(null,t.syncEngine),n.onUnlisten=fl.bind(null,t.syncEngine),n}function Hl(e,t,n={}){const r=new ci;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Pl({next:n=>{t.enqueueAndForget((()=>el(e,o))),n.fromCache&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new il(n,s,{includeMetadataChanges:!0,Ku:!0});return Zu(e,o)}(await Bl(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
function ql(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Kl=new Map;
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
 */function zl(e,t,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gl(e,t,n,r){if(!0===t&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Wl(e){if(!ki.isDocumentKey(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ql(e){if(ki.isDocumentKey(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ri()}function Yl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xl(e);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Jl{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ql(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Zl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new li;switch(e.type){case"firstParty":return new pi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Kl.get(e);t&&(Zr("ComponentProvider","Removing Datastore"),Kl.delete(e),t.terminate())}(this),Promise.resolve()}}function eh(e,t,n,r={}){var i;const s=(e=Yl(e,Zl))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Qr.MOCK_USER;else{t=(0,a.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qr(s)}e._authCredentials=new hi(new ui(t,n))}}
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
 */class th{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new th(this.firestore,e,this._key)}}class nh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nh(this.firestore,e,this._query)}}class rh extends nh{constructor(e,t,n){super(e,t,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new th(this.firestore,null,new ki(e))}withConverter(e){return new rh(this.firestore,e,this._path)}}function ih(e,t,...n){if(e=(0,a.Ku)(e),zl("collection","path",t),e instanceof Zl){const r=Si.fromString(t,...n);return Ql(r),new rh(e,null,r)}{if(!(e instanceof th||e instanceof rh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Si.fromString(t,...n));return Ql(r),new rh(e.firestore,null,r)}}function sh(e,t,...n){if(e=(0,a.Ku)(e),1===arguments.length&&(t=vi.A()),zl("doc","path",t),e instanceof Zl){const r=Si.fromString(t,...n);return Wl(r),new th(e,null,new ki(r))}{if(!(e instanceof th||e instanceof rh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Si.fromString(t,...n));return Wl(r),new th(e.firestore,e instanceof rh?e.converter:null,new ki(r))}}
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
class oh{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new hu(this,"async_queue_retry"),this.Xc=()=>{const e=uu();e&&Zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=uu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=uu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new ci;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Fi(e))throw e;Zr("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw ei("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=zu.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class ah extends Zl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function ch(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.yU)("firestore");e&&eh(s,...e)}return s}function uh(e){return e._firestoreClient||lh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lh(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new us(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ql(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Ml(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class hh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hh(ts.fromBase64String(e))}catch(e){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hh(ts.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class dh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ci(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class fh{constructor(e){this._methodName=e}}
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
 */class ph{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return bi(this._lat,e._lat)||bi(this._long,e._long)}}
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
 */const mh=/^__.*__$/;class gh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new oa(e,this.data,this.fieldMask,t,this.fieldTransforms):new sa(e,this.data,t,this.fieldTransforms)}}function yh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class vh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Nh(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(yh(this.ca)&&mh.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class bh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||lu(e)}ya(e,t,n,r=!1){return new vh({ca:e,methodName:t,ga:n,path:Ci.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _h(e){const t=e._freezeSettings(),n=lu(e._databaseId);return new bh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wh(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);Ih("Data must be an object, but it was:",o,r);const a=Th(r,o);let c,u;if(s.merge)c=new Zi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Ch(t,r,n);if(!o.contains(i))throw new ai(oi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);xh(e,i)||e.push(i)}c=new Zi(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new gh(new Cs(a),c,u)}function Eh(e,t){if(Sh(e=(0,a.Ku)(e)))return Ih("Unsupported field value:",t,e),Th(e,t);if(e instanceof fh)return function(e,t){if(!yh(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Eh(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Lo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=wi.fromDate(e);return{timestampValue:Ba(t.serializer,n)}}if(e instanceof wi){const n=new wi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ba(t.serializer,n)}}if(e instanceof ph)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hh)return{bytesValue:Ha(t.serializer,e._byteString)};if(e instanceof th){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:za(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Xl(e)}`)}(e,t)}function Th(e,t){const n={};return Gi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zi(e,((e,r)=>{const i=Eh(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Sh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof wi||e instanceof ph||e instanceof hh||e instanceof th||e instanceof fh)}function Ih(e,t,n){if(!Sh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Xl(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Ch(e,t,n){if((t=(0,a.Ku)(t))instanceof dh)return t._internalPath;if("string"==typeof t)return Ah(e,t);throw Nh("Field path arguments must be of type string or ",e,!1,void 0,n)}const kh=new RegExp("[~\\*/\\[\\]]");function Ah(e,t,n){if(t.search(kh)>=0)throw Nh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new dh(...t.split("."))._internalPath}catch(r){throw Nh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Nh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ai(oi.INVALID_ARGUMENT,a+e+c)}function xh(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Rh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new th(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Oh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Oh extends Rh{data(){return super.data()}}function Dh(e,t){return"string"==typeof t?Ah(e,t):t instanceof dh?t._internalPath:t._delegate._internalPath}
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
 */function Ph(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mh{convertValue(e,t="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return is(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ri()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return zi(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new ph(is(e.latitude),is(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=as(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=rs(e);return new wi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Si.fromString(e);ii(gc(n));const r=new ls(n.get(1),n.get(3)),i=new ki(n.popFirst(5));return r.isEqual(t)||ei(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Lh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class Fh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vh extends Rh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Dh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Uh extends Vh{data(e={}){return super.data(e)}}class $h{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Uh(this._firestore,this._userDataWriter,n.key,n,new Fh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Uh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Fh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Uh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Fh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:jh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function jh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}class Bh extends Mh{constructor(e){super(),this.firestore=e}convertBytes(e){return new hh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new th(this.firestore,null,t)}}function Hh(e){e=Yl(e,nh);const t=Yl(e.firestore,ah),n=uh(t),r=new Bh(t);return Ph(e._query),Hl(n,e._query).then((n=>new $h(t,r,e,n)))}function qh(e){return zh(Yl(e.firestore,ah),[new la(e._key,Yo.none())])}function Kh(e,t){const n=Yl(e.firestore,ah),r=sh(e),i=Lh(e.converter,t);return zh(n,[wh(_h(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Yo.exists(!1))]).then((()=>r))}function zh(e,t){return function(e,t){const n=new ci;return e.asyncQueue.enqueueAndForget((async()=>pl(await jl(e),t,n))),n.promise}(uh(e),t)}!function(e,t=!0){!function(e){Xr=e}(i.MF),(0,i.om)(new s.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ah(new di(e.getProvider("auth-internal")),new gi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Wr,"3.13.0",e),(0,i.KO)(Wr,"3.13.0","esm2017")}()},5220:function(e,t,n){n.d(t,{Bt:function(){return ae},aE:function(){return nt}});var r=n(641),i=n(953);
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,m=/\?/g,g=/\+/g,y=/%5B/g,v=/%5D/g,b=/%5E/g,_=/%60/g,w=/%7B/g,E=/%7C/g,T=/%7D/g,S=/%20/g;function I(e){return encodeURI(""+e).replace(E,"|").replace(y,"[").replace(v,"]")}function C(e){return I(e).replace(w,"{").replace(T,"}").replace(b,"^")}function k(e){return I(e).replace(g,"%2B").replace(S,"+").replace(h,"%23").replace(d,"%26").replace(_,"`").replace(w,"{").replace(T,"}").replace(b,"^")}function A(e){return k(e).replace(p,"%3D")}function N(e){return I(e).replace(h,"%23").replace(m,"%3F")}function x(e){return null==e?"":N(e).replace(f,"%2F")}function R(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const O=/\/$/,D=e=>e.replace(O,"");function P(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:R(o)}}function M(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function L(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(t.matched[r],n.matched[i])&&U(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function V(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function U(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$(e[n],t[n]))return!1;return!0}function $(e,t){return l(e)?j(e,t):l(t)?j(t,e):e===t}function j(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}var H,q;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(q||(q={}));function K(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const z=/^[^#]+#/;function G(e,t){return e.replace(z,"#")+t}function W(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Q=()=>({left:window.scrollX,top:window.scrollY});function X(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=W(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Y(e,t){const n=history.state?history.state.position-t:-1;return n+e}const J=new Map;function Z(e,t){J.set(e,t)}function ee(e){const t=J.get(e);return J.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),L(n,"")}const o=L(n,e);return o+r+i}function re(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=ne(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:H.pop,direction:l?l>0?q.forward:q.back:q.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:Q()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function ie(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Q():null}}function se(e){const{history:t,location:n}=window,r={value:ne(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,ie(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:Q()});s(o.current,o,!0);const c=a({},ie(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function oe(e){e=K(e);const t=se(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:G.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ae(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),oe(e)}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const le={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function fe(e,t){return a(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const me="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},ye=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ye,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||me;if(l!==me){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function be(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function _e(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=be(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Te=/[a-zA-Z0-9_]/;function Se(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Ie(e,t,n){const r=ve(Se(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=Ae(e);c.aliasOf=r&&r.record;const h=Oe(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!xe(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&_e(e,n[t])>=0&&(e.record.path!==n[t].record.path||!De(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!xe(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,o=i.record.name,c=a(ke(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&ke(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw fe(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:Re(u)}}return t=Oe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function ke(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ne(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ne(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function xe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Re(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Oe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){return t.children.some((t=>t===e||De(e,t)))}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(g," "),n=e.indexOf("="),s=R(n<0?e:e.slice(0,n)),o=n<0?null:R(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=A(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&k(e))):[r&&k(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ve=Symbol(""),Ue=Symbol(""),$e=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function He(e,t,n,r,i,s=(e=>e())){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):ce(e)?c(fe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s((()=>e.call(r&&r.instances[i],t,n,u)));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch((e=>c(e)))}))}function qe(e,t,n,r,i=(e=>e())){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(Ke(c)){const o=c.__vccOpts||c,u=o[t];u&&s.push(He(u,n,r,a,e,i))}else{let u=c();0,s.push((()=>u.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&He(l,n,r,a,e,i)()}))))}}}return s}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.WQ)(Ue),n=(0,r.WQ)($e),s=(0,r.EW)((()=>t.resolve((0,i.R1)(e.to)))),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(V.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(V.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Xe(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&U(n.params,s.value.params)));function l(n={}){return Qe(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,i.Kh)(ze(e)),{options:s}=(0,r.WQ)(Ue),o=(0,r.EW)((()=>({[Je(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ge;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(je),o=(0,r.EW)((()=>e.route||s.value)),c=(0,r.WQ)(Ve,0),u=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(Ve,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Fe,l),(0,r.Gt)(je,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&V(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=Ce(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Me,h=e.history;const d=Be(),f=Be(),p=Be(),m=(0,i.IJ)(le);let g=le;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=c.bind(null,(e=>""+e)),v=c.bind(null,x),b=c.bind(null,R);function _(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function w(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function S(e,r){if(r=a({},r||m.value),"string"===typeof e){const i=P(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:b(s.params),hash:R(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=a({},e,{path:P(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:v(t)}),r.params=v(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=y(b(s.params));const u=M(o,a({},e,{hash:C(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Me?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function I(e){return"string"===typeof e?P(n,e,m.value.path):a({},e)}function k(e,t){if(g!==e)return fe(8,{from:t,to:e})}function A(e){return D(e)}function N(e){return A(a(I(e),{replace:!0}))}function O(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=I(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function D(e,t){const n=g=S(e),r=m.value,i=e.state,s=e.force,c=!0===e.replace,u=O(n);if(u)return D(a(I(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&F(o,r,n)&&(h=fe(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):U(l,r)).catch((e=>pe(e)?pe(e,2)?e:te(e):W(e,l,r))).then((e=>{if(e){if(pe(e,2))return D(a({replace:c},I(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=j(l,r,!0,c,i);return $(l,r,e),e}))}function L(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[r,i,s]=rt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(He(r,e,t))}));const o=L.bind(null,e,t);return n.push(o),ae(n).then((()=>{n=[];for(const r of d.list())n.push(He(r,e,t));return n.push(o),ae(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(He(r,e,t))}));return n.push(o),ae(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(He(i,e,t));else n.push(He(r.beforeEnter,e,t));return n.push(o),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t,V),n.push(o),ae(n)))).then((()=>{n=[];for(const r of f.list())n.push(He(r,e,t));return n.push(o),ae(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function $(e,t,n){p.list().forEach((r=>V((()=>r(e,t,n)))))}function j(e,t,n,r,i){const o=k(e,t);if(o)return o;const c=t===le,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),m.value=e,ne(e,t,n,c),te()}let B;function q(){B||(B=h.listen(((e,t,n)=>{if(!oe.listening)return;const r=S(e),i=O(r);if(i)return void D(a(i,{replace:!0}),r).catch(u);g=r;const o=m.value;s&&Z(Y(o.fullPath,n.delta),Q()),U(r,o).catch((e=>pe(e,12)?e:pe(e,2)?(D(e.to,r).then((e=>{pe(e,20)&&!n.delta&&n.type===H.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),W(e,r,o)))).then((e=>{e=e||j(r,o,!1),e&&(n.delta&&!pe(e,8)?h.go(-n.delta,!1):n.type===H.pop&&pe(e,20)&&h.go(-1,!1)),$(r,o,e)})).catch(u)})))}let K,z=Be(),G=Be();function W(e,t,n){te(e);const r=G.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function J(){return K&&m.value!==le?Promise.resolve():new Promise(((e,t)=>{z.add([e,t])}))}function te(e){return K||(K=!e,q(),z.list().forEach((([t,n])=>e?n(e):t())),z.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ee(Y(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&X(e))).catch((e=>W(e,t,n)))}const re=e=>h.go(e);let ie;const se=new Set,oe={currentRoute:m,listening:!0,addRoute:_,removeRoute:w,hasRoute:T,getRoutes:E,resolve:S,options:e,push:A,replace:N,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:J,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(m)}),s&&!ie&&m.value===le&&(ie=!0,A(h.location).catch((e=>{0})));const n={};for(const i in le)Object.defineProperty(n,i,{get:()=>m.value[i],enumerable:!0});e.provide(Ue,t),e.provide($e,(0,i.Gc)(n)),e.provide(je,m);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=le,B&&B(),B=null,m.value=le,ie=!1,K=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>V(t)))),Promise.resolve())}return oe}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>V(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>V(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.873c49d0.js.map