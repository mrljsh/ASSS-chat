function RS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function DS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qa={},PS={get exports(){return Qa},set exports(t){Qa=t}},ql={},C={},OS={get exports(){return C},set exports(t){C=t}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),LS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),MS=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),US=Symbol.for("react.provider"),FS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),zS=Symbol.for("react.memo"),BS=Symbol.for("react.lazy"),Gp=Symbol.iterator;function HS(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var zy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},By=Object.assign,Hy={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=Hy,this.updater=n||zy}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wy(){}Wy.prototype=Yi.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=Hy,this.updater=n||zy}var Pd=Dd.prototype=new Wy;Pd.constructor=Dd;By(Pd,Yi.prototype);Pd.isPureReactComponent=!0;var Qp=Array.isArray,qy=Object.prototype.hasOwnProperty,Od={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qy.call(e,r)&&!Ky.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Io,type:t,key:s,ref:o,props:i,_owner:Od.current}}function WS(t,e){return{$$typeof:Io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Io}function qS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function Zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qS(""+t.key):e.toString(36)}function xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Io:case LS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zu(o,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),xa(i,e,n,"",function(u){return u})):i!=null&&(Ld(i)&&(i=WS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zu(s,a);o+=xa(s,e,n,l,i)}else if(l=HS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zu(s,a++),o+=xa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function na(t,e,n){if(t==null)return t;var r=[],i=0;return xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Na={transition:null},GS={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Na,ReactCurrentOwner:Od};ee.Children={map:na,forEach:function(t,e,n){na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return na(t,function(){e++}),e},toArray:function(t){return na(t,function(e){return e})||[]},only:function(t){if(!Ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Yi;ee.Fragment=$S;ee.Profiler=bS;ee.PureComponent=Dd;ee.StrictMode=MS;ee.Suspense=jS;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=By({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qy.call(e,l)&&!Ky.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Io,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:FS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:US,_context:t},t.Consumer=t};ee.createElement=Gy;ee.createFactory=function(t){var e=Gy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:VS,render:t}};ee.isValidElement=Ld;ee.lazy=function(t){return{$$typeof:BS,_payload:{_status:-1,_result:t},_init:KS}};ee.memo=function(t,e){return{$$typeof:zS,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Na.transition;Na.transition={};try{t()}finally{Na.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return St.current.useCallback(t,e)};ee.useContext=function(t){return St.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ee.useEffect=function(t,e){return St.current.useEffect(t,e)};ee.useId=function(){return St.current.useId()};ee.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return St.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ee.useRef=function(t){return St.current.useRef(t)};ee.useState=function(t){return St.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return St.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(OS);const Pt=DS(C),Kc=RS({__proto__:null,default:Pt},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=C,YS=Symbol.for("react.element"),XS=Symbol.for("react.fragment"),JS=Object.prototype.hasOwnProperty,ZS=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e_={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JS.call(e,r)&&!e_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YS,type:t,key:s,ref:o,props:i,_owner:ZS.current}}ql.Fragment=XS;ql.jsx=Qy;ql.jsxs=Qy;(function(t){t.exports=ql})(PS);const G=Qa.jsx,Ce=Qa.jsxs;var Gc={},Qc={},t_={get exports(){return Qc},set exports(t){Qc=t}},bt={},Yc={},n_={get exports(){return Yc},set exports(t){Yc=t}},Yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var B=A.length;A.push(V);e:for(;0<B;){var fe=B-1>>>1,N=A[fe];if(0<i(N,V))A[fe]=V,A[B]=N,B=fe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],B=A.pop();if(B!==V){A[0]=B;e:for(var fe=0,N=A.length,O=N>>>1;fe<O;){var L=2*(fe+1)-1,H=A[L],E=L+1,te=A[E];if(0>i(H,B))E<N&&0>i(te,H)?(A[fe]=te,A[E]=B,fe=E):(A[fe]=H,A[L]=B,fe=L);else if(E<N&&0>i(te,B))A[fe]=te,A[E]=B,fe=E;else break e}}return V}function i(A,V){var B=A.sortIndex-V.sortIndex;return B!==0?B:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(A){if(v=!1,m(A),!y)if(n(l)!==null)y=!0,gn(T);else{var V=n(u);V!==null&&gt(w,V.startTime-A)}}function T(A,V){y=!1,v&&(v=!1,p(P),P=-1),g=!0;var B=f;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||A&&!je());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,f=h.priorityLevel;var N=fe(h.expirationTime<=V);V=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var L=n(u);L!==null&&gt(w,L.startTime-V),O=!1}return O}finally{h=null,f=B,g=!1}}var R=!1,D=null,P=-1,J=5,j=-1;function je(){return!(t.unstable_now()-j<J)}function $e(){if(D!==null){var A=t.unstable_now();j=A;var V=!0;try{V=D(!0,A)}finally{V?Ke():(R=!1,D=null)}}else R=!1}var Ke;if(typeof d=="function")Ke=function(){d($e)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,rt=Nt.port2;Nt.port1.onmessage=$e,Ke=function(){rt.postMessage(null)}}else Ke=function(){S($e,0)};function gn(A){D=A,R||(R=!0,Ke())}function gt(A,V){P=S(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,gn(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var B=f;f=V;try{return A()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=f;f=A;try{return V()}finally{f=B}},t.unstable_scheduleCallback=function(A,V,B){var fe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?fe+B:fe):B=fe,A){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=B+N,A={id:c++,callback:V,priorityLevel:A,startTime:B,expirationTime:N,sortIndex:-1},B>fe?(A.sortIndex=B,e(u,A),n(l)===null&&A===n(u)&&(v?(p(P),P=-1):v=!0,gt(w,B-fe))):(A.sortIndex=N,e(l,A),y||g||(y=!0,gn(T))),A},t.unstable_shouldYield=je,t.unstable_wrapCallback=function(A){var V=f;return function(){var B=f;f=V;try{return A.apply(this,arguments)}finally{f=B}}}})(Yy);(function(t){t.exports=Yy})(n_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=C,$t=Yc;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jy=new Set,js={};function Xr(t,e){Di(t,e),Di(t+"Capture",e)}function Di(t,e){for(js[t]=e,t=0;t<e.length;t++)Jy.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,r_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Jp={};function i_(t){return Xc.call(Jp,t)?!0:Xc.call(Xp,t)?!1:r_.test(t)?Jp[t]=!0:(Xp[t]=!0,!1)}function s_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o_(t,e,n,r){if(e===null||typeof e>"u"||s_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Md);tt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Md);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Md);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o_(e,n,i,r)&&(n=null),r||i===null?i_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),Zy=Symbol.for("react.provider"),ev=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),eh=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),tv=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function us(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,ec;function vs(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function a_(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case Jc:return"Profiler";case Ud:return"StrictMode";case Zc:return"Suspense";case eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ev:return(t.displayName||"Context")+".Consumer";case Zy:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:th(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return th(t(e))}catch{}}return null}function l_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return th(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u_(t){var e=nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ia(t){t._valueTracker||(t._valueTracker=u_(t))}function rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nh(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iv(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function rh(t,e){iv(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||Ya(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function Ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ws(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function sv(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ov(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ov(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,av=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c_=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){c_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function uv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var h_=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(h_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ch=null,Si=null,_i=null;function im(t){if(t=xo(t)){if(typeof ch!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Xl(e),ch(t.stateNode,t.type,e))}}function cv(t){Si?_i?_i.push(t):_i=[t]:Si=t}function hv(){if(Si){var t=Si,e=_i;if(_i=Si=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function dv(t,e){return t(e)}function fv(){}var rc=!1;function pv(t,e,n){if(rc)return t(e,n);rc=!0;try{return dv(t,e,n)}finally{rc=!1,(Si!==null||_i!==null)&&(fv(),hv())}}function Bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var hh=!1;if(An)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){hh=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{hh=!1}function d_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var As=!1,Xa=null,Ja=!1,dh=null,f_={onError:function(t){As=!0,Xa=t}};function p_(t,e,n,r,i,s,o,a,l){As=!1,Xa=null,d_.apply(f_,arguments)}function m_(t,e,n,r,i,s,o,a,l){if(p_.apply(this,arguments),As){if(As){var u=Xa;As=!1,Xa=null}else throw Error(k(198));Ja||(Ja=!0,dh=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(Jr(t)!==t)throw Error(k(188))}function g_(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sm(i),t;if(s===r)return sm(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function gv(t){return t=g_(t),t!==null?yv(t):null}function yv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yv(t);if(e!==null)return e;t=t.sibling}return null}var vv=$t.unstable_scheduleCallback,om=$t.unstable_cancelCallback,y_=$t.unstable_shouldYield,v_=$t.unstable_requestPaint,Ne=$t.unstable_now,w_=$t.unstable_getCurrentPriorityLevel,zd=$t.unstable_ImmediatePriority,wv=$t.unstable_UserBlockingPriority,Za=$t.unstable_NormalPriority,E_=$t.unstable_LowPriority,Ev=$t.unstable_IdlePriority,Kl=null,un=null;function S_(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:k_,__=Math.log,T_=Math.LN2;function k_(t){return t>>>=0,t===0?32:31-(__(t)/T_|0)|0}var oa=64,aa=4194304;function Es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Es(a):(s&=o,s!==0&&(r=Es(s)))}else o=n&~i,o!==0?r=Es(o):s!==0&&(r=Es(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function I_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=I_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sv(){var t=oa;return oa<<=1,!(oa&4194240)&&(oa=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function A_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,Hd,kv,Iv,Cv,ph=!1,la=[],Xn=null,Jn=null,Zn=null,Hs=new Map,Ws=new Map,Bn=[],x_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N_(t,e,n,r,i){switch(e){case"focusin":return Xn=hs(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=hs(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=hs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hs.set(s,hs(Hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ws.set(s,hs(Ws.get(s)||null,t,e,n,r,i)),!0}return!1}function Av(t){var e=xr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=mv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uh=r,n.target.dispatchEvent(r),uh=null}else return e=xo(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Ra(t)&&n.delete(e)}function R_(){ph=!1,Xn!==null&&Ra(Xn)&&(Xn=null),Jn!==null&&Ra(Jn)&&(Jn=null),Zn!==null&&Ra(Zn)&&(Zn=null),Hs.forEach(lm),Ws.forEach(lm)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,ph||(ph=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,R_)))}function qs(t){function e(i){return ds(i,t)}if(0<la.length){ds(la[0],t);for(var n=1;n<la.length;n++){var r=la[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&ds(Xn,t),Jn!==null&&ds(Jn,t),Zn!==null&&ds(Zn,t),Hs.forEach(e),Ws.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Bn.shift()}var Ti=Mn.ReactCurrentBatchConfig,tl=!0;function D_(t,e,n,r){var i=he,s=Ti.transition;Ti.transition=null;try{he=1,Wd(t,e,n,r)}finally{he=i,Ti.transition=s}}function P_(t,e,n,r){var i=he,s=Ti.transition;Ti.transition=null;try{he=4,Wd(t,e,n,r)}finally{he=i,Ti.transition=s}}function Wd(t,e,n,r){if(tl){var i=mh(t,e,n,r);if(i===null)pc(t,e,r,nl,n),am(t,r);else if(N_(i,t,e,n,r))r.stopPropagation();else if(am(t,r),e&4&&-1<x_.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null&&Tv(s),s=mh(t,e,n,r),s===null&&pc(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pc(t,e,r,null,n)}}var nl=null;function mh(t,e,n,r){if(nl=null,t=jd(r),t=xr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w_()){case zd:return 1;case wv:return 4;case Za:case E_:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var Gn=null,qd=null,Da=null;function Nv(){if(Da)return Da;var t,e=qd,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Da=i.slice(t,1<r?1-r:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function um(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:um,this.isPropagationStopped=um,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=Ut(Xi),Ao=Te({},Xi,{view:0,detail:0}),O_=Ut(Ao),sc,oc,fs,Gl=Te({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fs&&(fs&&t.type==="mousemove"?(sc=t.screenX-fs.screenX,oc=t.screenY-fs.screenY):oc=sc=0,fs=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),cm=Ut(Gl),L_=Te({},Gl,{dataTransfer:0}),$_=Ut(L_),M_=Te({},Ao,{relatedTarget:0}),ac=Ut(M_),b_=Te({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=Ut(b_),F_=Te({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V_=Ut(F_),j_=Te({},Xi,{data:0}),hm=Ut(j_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H_[t])?!!e[t]:!1}function Gd(){return W_}var q_=Te({},Ao,{key:function(t){if(t.key){var e=z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K_=Ut(q_),G_=Te({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Ut(G_),Q_=Te({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),Y_=Ut(Q_),X_=Te({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),J_=Ut(X_),Z_=Te({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eT=Ut(Z_),tT=[9,13,27,32],Qd=An&&"CompositionEvent"in window,xs=null;An&&"documentMode"in document&&(xs=document.documentMode);var nT=An&&"TextEvent"in window&&!xs,Rv=An&&(!Qd||xs&&8<xs&&11>=xs),fm=String.fromCharCode(32),pm=!1;function Dv(t,e){switch(t){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function rT(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function iT(t,e){if(li)return t==="compositionend"||!Qd&&Dv(t,e)?(t=Nv(),Da=qd=Gn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var sT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sT[t.type]:e==="textarea"}function Ov(t,e,n,r){cv(r),e=rl(e,"onChange"),0<e.length&&(n=new Kd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ns=null,Ks=null;function oT(t){Hv(t,0)}function Ql(t){var e=hi(t);if(rv(e))return t}function aT(t,e){if(t==="change")return e}var Lv=!1;if(An){var lc;if(An){var uc="oninput"in document;if(!uc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),uc=typeof gm.oninput=="function"}lc=uc}else lc=!1;Lv=lc&&(!document.documentMode||9<document.documentMode)}function ym(){Ns&&(Ns.detachEvent("onpropertychange",$v),Ks=Ns=null)}function $v(t){if(t.propertyName==="value"&&Ql(Ks)){var e=[];Ov(e,Ks,t,jd(t)),pv(oT,e)}}function lT(t,e,n){t==="focusin"?(ym(),Ns=e,Ks=n,Ns.attachEvent("onpropertychange",$v)):t==="focusout"&&ym()}function uT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Ks)}function cT(t,e){if(t==="click")return Ql(e)}function hT(t,e){if(t==="input"||t==="change")return Ql(e)}function dT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:dT;function Gs(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,e){var n=vm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function Mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bv(){for(var t=window,e=Ya();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ya(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fT(t){var e=bv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mv(n.ownerDocument.documentElement,n)){if(r!==null&&Yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wm(n,s);var o=wm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pT=An&&"documentMode"in document&&11>=document.documentMode,ui=null,gh=null,Rs=null,yh=!1;function Em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||ui==null||ui!==Ya(r)||(r=ui,"selectionStart"in r&&Yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&Gs(Rs,r)||(Rs=r,r=rl(gh,"onSelect"),0<r.length&&(e=new Kd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ui)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ci={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},cc={},Uv={};An&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function Yl(t){if(cc[t])return cc[t];if(!ci[t])return t;var e=ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uv)return cc[t]=e[n];return t}var Fv=Yl("animationend"),Vv=Yl("animationiteration"),jv=Yl("animationstart"),zv=Yl("transitionend"),Bv=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Bv.set(t,e),Xr(e,[t])}for(var hc=0;hc<Sm.length;hc++){var dc=Sm[hc],mT=dc.toLowerCase(),gT=dc[0].toUpperCase()+dc.slice(1);vr(mT,"on"+gT)}vr(Fv,"onAnimationEnd");vr(Vv,"onAnimationIteration");vr(jv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(zv,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,m_(r,e,void 0,t),t.currentTarget=null}function Hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_m(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_m(i,a,u),s=l}}}if(Ja)throw t=dh,Ja=!1,dh=null,t}function ge(t,e){var n=e[_h];n===void 0&&(n=e[_h]=new Set);var r=t+"__bubble";n.has(r)||(Wv(e,t,2,!1),n.add(r))}function fc(t,e,n){var r=0;e&&(r|=4),Wv(n,t,r,e)}var ha="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[ha]){t[ha]=!0,Jy.forEach(function(n){n!=="selectionchange"&&(yT.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ha]||(e[ha]=!0,fc("selectionchange",!1,e))}}function Wv(t,e,n,r){switch(xv(e)){case 1:var i=D_;break;case 4:i=P_;break;default:i=Wd}n=i.bind(null,e,n,t),i=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pv(function(){var u=s,c=jd(n),h=[];e:{var f=Bv.get(t);if(f!==void 0){var g=Kd,y=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":g=K_;break;case"focusin":y="focus",g=ac;break;case"focusout":y="blur",g=ac;break;case"beforeblur":case"afterblur":g=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Y_;break;case Fv:case Vv:case jv:g=U_;break;case zv:g=J_;break;case"scroll":g=O_;break;case"wheel":g=eT;break;case"copy":case"cut":case"paste":g=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=dm}var v=(e&4)!==0,S=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Bs(d,p),w!=null&&v.push(Ys(d,w,m)))),S)break;d=d.return}0<v.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==uh&&(y=n.relatedTarget||n.fromElement)&&(xr(y)||y[xn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?xr(y):null,y!==null&&(S=Jr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=cm,w="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=dm,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=g==null?f:hi(g),m=y==null?f:hi(y),f=new v(w,d+"leave",g,n,c),f.target=S,f.relatedTarget=m,w=null,xr(c)===u&&(v=new v(p,d+"enter",y,n,c),v.target=m,v.relatedTarget=S,w=v),S=w,g&&y)t:{for(v=g,p=y,d=0,m=v;m;m=ni(m))d++;for(m=0,w=p;w;w=ni(w))m++;for(;0<d-m;)v=ni(v),d--;for(;0<m-d;)p=ni(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=ni(v),p=ni(p)}v=null}else v=null;g!==null&&Tm(h,f,g,v,!1),y!==null&&S!==null&&Tm(h,S,y,v,!0)}}e:{if(f=u?hi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var T=aT;else if(mm(f))if(Lv)T=hT;else{T=uT;var R=lT}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=cT);if(T&&(T=T(t,u))){Ov(h,T,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&ih(f,"number",f.value)}switch(R=u?hi(u):window,t){case"focusin":(mm(R)||R.contentEditable==="true")&&(ui=R,gh=u,Rs=null);break;case"focusout":Rs=gh=ui=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Em(h,n,c);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":Em(h,n,c)}var D;if(Qd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else li?Dv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Rv&&n.locale!=="ko"&&(li||P!=="onCompositionStart"?P==="onCompositionEnd"&&li&&(D=Nv()):(Gn=c,qd="value"in Gn?Gn.value:Gn.textContent,li=!0)),R=rl(u,P),0<R.length&&(P=new hm(P,t,null,n,c),h.push({event:P,listeners:R}),D?P.data=D:(D=Pv(n),D!==null&&(P.data=D)))),(D=nT?rT(t,n):iT(t,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(c=new hm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}Hv(h,e)})}function Ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bs(t,n),s!=null&&r.unshift(Ys(t,s,i)),s=Bs(t,e),s!=null&&r.push(Ys(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Bs(n,s),l!=null&&o.unshift(Ys(n,l,a))):i||(l=Bs(n,s),l!=null&&o.push(Ys(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vT=/\r\n?/g,wT=/\u0000|\uFFFD/g;function km(t){return(typeof t=="string"?t:""+t).replace(vT,`
`).replace(wT,"")}function da(t,e,n){if(e=km(e),km(t)!==e&&n)throw Error(k(425))}function il(){}var vh=null,wh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,ET=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,ST=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(t){return Im.resolve(null).then(t).catch(_T)}:Sh;function _T(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qs(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),on="__reactFiber$"+Ji,Xs="__reactProps$"+Ji,xn="__reactContainer$"+Ji,_h="__reactEvents$"+Ji,TT="__reactListeners$"+Ji,kT="__reactHandles$"+Ji;function xr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[on])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[on]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Xl(t){return t[Xs]||null}var Th=[],di=-1;function wr(t){return{current:t}}function ve(t){0>di||(t.current=Th[di],Th[di]=null,di--)}function pe(t,e){di++,Th[di]=t.current,t.current=e}var pr={},ft=wr(pr),Ct=wr(!1),jr=pr;function Pi(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function sl(){ve(Ct),ve(ft)}function Am(t,e,n){if(ft.current!==pr)throw Error(k(168));pe(ft,e),pe(Ct,n)}function qv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,l_(t)||"Unknown",i));return Te({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,jr=ft.current,pe(ft,t),pe(Ct,Ct.current),!0}function xm(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=qv(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,ve(Ct),ve(ft),pe(ft,t)):ve(Ct),pe(Ct,n)}var vn=null,Jl=!1,gc=!1;function Kv(t){vn===null?vn=[t]:vn.push(t)}function IT(t){Jl=!0,Kv(t)}function Er(){if(!gc&&vn!==null){gc=!0;var t=0,e=he;try{var n=vn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,Jl=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),vv(zd,Er),i}finally{he=e,gc=!1}}return null}var fi=[],pi=0,al=null,ll=0,Vt=[],jt=0,zr=null,wn=1,En="";function Ir(t,e){fi[pi++]=ll,fi[pi++]=al,al=t,ll=e}function Gv(t,e,n){Vt[jt++]=wn,Vt[jt++]=En,Vt[jt++]=zr,zr=t;var r=wn;t=En;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-Zt(e)+i|n<<i|r,En=s+t}else wn=1<<s|n<<i|r,En=t}function Xd(t){t.return!==null&&(Ir(t,1),Gv(t,1,0))}function Jd(t){for(;t===al;)al=fi[--pi],fi[pi]=null,ll=fi[--pi],fi[pi]=null;for(;t===zr;)zr=Vt[--jt],Vt[jt]=null,En=Vt[--jt],Vt[jt]=null,wn=Vt[--jt],Vt[jt]=null}var Ot=null,Dt=null,we=!1,Xt=null;function Qv(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Dt=null,!0):!1;default:return!1}}function kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ih(t){if(we){var e=Dt;if(e){var n=e;if(!Nm(t,e)){if(kh(t))throw Error(k(418));e=er(n.nextSibling);var r=Ot;e&&Nm(t,e)?Qv(r,n):(t.flags=t.flags&-4097|2,we=!1,Ot=t)}}else{if(kh(t))throw Error(k(418));t.flags=t.flags&-4097|2,we=!1,Ot=t}}}function Rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function fa(t){if(t!==Ot)return!1;if(!we)return Rm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=Dt)){if(kh(t))throw Yv(),Error(k(418));for(;e;)Qv(t,e),e=er(e.nextSibling)}if(Rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Ot?er(t.stateNode.nextSibling):null;return!0}function Yv(){for(var t=Dt;t;)t=er(t.nextSibling)}function Oi(){Dt=Ot=null,we=!1}function Zd(t){Xt===null?Xt=[t]:Xt.push(t)}var CT=Mn.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ul=wr(null),cl=null,mi=null,ef=null;function tf(){ef=mi=cl=null}function nf(t){var e=ul.current;ve(ul),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ki(t,e){cl=t,ef=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(ef!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(cl===null)throw Error(k(308));mi=t,cl.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var Nr=null;function rf(t){Nr===null?Nr=[t]:Nr.push(t)}function Xv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,rf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bd(t,n)}}function Dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=Te({},h,f);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=h}}function Pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Zv=new Xy.Component().refs;function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=rr(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(en(e,t,i,r),Oa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=rr(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(en(e,t,i,r),Oa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=rr(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(en(e,t,r,n),Oa(e,t,r))}};function Om(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,r)||!Gs(i,s):!0}function e0(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=At(e)?jr:ft.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function xh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Zv,sf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=At(e)?jr:ft.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zl.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Zv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function t0(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=ir(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=Tc(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var T=m.type;return T===ai?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===jn&&$m(T)===d.type)?(w=i(d,m.props),w.ref=ps(p,d,m),w.return=p,w):(w=Fa(m.type,m.key,m.props,null,p.mode,w),w.ref=ps(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=kc(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,T){return d===null||d.tag!==7?(d=Mr(m,p.mode,w,T),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Tc(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ra:return m=Fa(d.type,d.key,d.props,null,p.mode,m),m.ref=ps(p,null,d),m.return=p,m;case oi:return d=kc(d,p.mode,m),d.return=p,d;case jn:var w=d._init;return h(p,w(d._payload),m)}if(ws(d)||us(d))return d=Mr(d,p.mode,m,null),d.return=p,d;pa(p,d)}return null}function f(p,d,m,w){var T=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:return m.key===T?l(p,d,m,w):null;case oi:return m.key===T?u(p,d,m,w):null;case jn:return T=m._init,f(p,d,T(m._payload),w)}if(ws(m)||us(m))return T!==null?null:c(p,d,m,w,null);pa(p,m)}return null}function g(p,d,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ra:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,T);case oi:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,T);case jn:var R=w._init;return g(p,d,m,R(w._payload),T)}if(ws(w)||us(w))return p=p.get(m)||null,c(d,p,w,T,null);pa(d,w)}return null}function y(p,d,m,w){for(var T=null,R=null,D=d,P=d=0,J=null;D!==null&&P<m.length;P++){D.index>P?(J=D,D=null):J=D.sibling;var j=f(p,D,m[P],w);if(j===null){D===null&&(D=J);break}t&&D&&j.alternate===null&&e(p,D),d=s(j,d,P),R===null?T=j:R.sibling=j,R=j,D=J}if(P===m.length)return n(p,D),we&&Ir(p,P),T;if(D===null){for(;P<m.length;P++)D=h(p,m[P],w),D!==null&&(d=s(D,d,P),R===null?T=D:R.sibling=D,R=D);return we&&Ir(p,P),T}for(D=r(p,D);P<m.length;P++)J=g(D,p,P,m[P],w),J!==null&&(t&&J.alternate!==null&&D.delete(J.key===null?P:J.key),d=s(J,d,P),R===null?T=J:R.sibling=J,R=J);return t&&D.forEach(function(je){return e(p,je)}),we&&Ir(p,P),T}function v(p,d,m,w){var T=us(m);if(typeof T!="function")throw Error(k(150));if(m=T.call(m),m==null)throw Error(k(151));for(var R=T=null,D=d,P=d=0,J=null,j=m.next();D!==null&&!j.done;P++,j=m.next()){D.index>P?(J=D,D=null):J=D.sibling;var je=f(p,D,j.value,w);if(je===null){D===null&&(D=J);break}t&&D&&je.alternate===null&&e(p,D),d=s(je,d,P),R===null?T=je:R.sibling=je,R=je,D=J}if(j.done)return n(p,D),we&&Ir(p,P),T;if(D===null){for(;!j.done;P++,j=m.next())j=h(p,j.value,w),j!==null&&(d=s(j,d,P),R===null?T=j:R.sibling=j,R=j);return we&&Ir(p,P),T}for(D=r(p,D);!j.done;P++,j=m.next())j=g(D,p,P,j.value,w),j!==null&&(t&&j.alternate!==null&&D.delete(j.key===null?P:j.key),d=s(j,d,P),R===null?T=j:R.sibling=j,R=j);return t&&D.forEach(function($e){return e(p,$e)}),we&&Ir(p,P),T}function S(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===ai&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:e:{for(var T=m.key,R=d;R!==null;){if(R.key===T){if(T=m.type,T===ai){if(R.tag===7){n(p,R.sibling),d=i(R,m.props.children),d.return=p,p=d;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===jn&&$m(T)===R.type){n(p,R.sibling),d=i(R,m.props),d.ref=ps(p,R,m),d.return=p,p=d;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===ai?(d=Mr(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=Fa(m.type,m.key,m.props,null,p.mode,w),w.ref=ps(p,d,m),w.return=p,p=w)}return o(p);case oi:e:{for(R=m.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=kc(m,p.mode,w),d.return=p,p=d}return o(p);case jn:return R=m._init,S(p,d,R(m._payload),w)}if(ws(m))return y(p,d,m,w);if(us(m))return v(p,d,m,w);pa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Tc(m,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return S}var Li=t0(!0),n0=t0(!1),No={},cn=wr(No),Js=wr(No),Zs=wr(No);function Rr(t){if(t===No)throw Error(k(174));return t}function of(t,e){switch(pe(Zs,e),pe(Js,t),pe(cn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oh(e,t)}ve(cn),pe(cn,e)}function $i(){ve(cn),ve(Js),ve(Zs)}function r0(t){Rr(Zs.current);var e=Rr(cn.current),n=oh(e,t.type);e!==n&&(pe(Js,t),pe(cn,n))}function af(t){Js.current===t&&(ve(cn),ve(Js))}var Se=wr(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function lf(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var La=Mn.ReactCurrentDispatcher,vc=Mn.ReactCurrentBatchConfig,Br=0,_e=null,Me=null,Be=null,fl=!1,Ds=!1,eo=0,AT=0;function st(){throw Error(k(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function cf(t,e,n,r,i,s){if(Br=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?DT:PT,t=n(r,i),Ds){s=0;do{if(Ds=!1,eo=0,25<=s)throw Error(k(301));s+=1,Be=Me=null,e.updateQueue=null,La.current=OT,t=n(r,i)}while(Ds)}if(La.current=pl,e=Me!==null&&Me.next!==null,Br=0,Be=Me=_e=null,fl=!1,e)throw Error(k(300));return t}function hf(){var t=eo!==0;return eo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?_e.memoizedState=Be=t:Be=Be.next=t,Be}function qt(){if(Me===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?_e.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(k(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?_e.memoizedState=Be=t:Be=Be.next=t}return Be}function to(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=qt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,_e.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=qt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function i0(){}function s0(t,e){var n=_e,r=qt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,df(l0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,no(9,a0.bind(null,n,r,i,e),void 0,null),He===null)throw Error(k(349));Br&30||o0(n,e,i)}return i}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a0(t,e,n,r){e.value=n,e.getSnapshot=r,u0(e)&&c0(t)}function l0(t,e,n){return n(function(){u0(e)&&c0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function c0(t){var e=Nn(t,1);e!==null&&en(e,t,1,-1)}function Mm(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=RT.bind(null,_e,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h0(){return qt().memoizedState}function $a(t,e,n,r){var i=sn();_e.flags|=t,i.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&uf(r,o.deps)){i.memoizedState=no(e,n,s,r);return}}_e.flags|=t,i.memoizedState=no(1|e,n,s,r)}function bm(t,e){return $a(8390656,8,t,e)}function df(t,e){return eu(2048,8,t,e)}function d0(t,e){return eu(4,2,t,e)}function f0(t,e){return eu(4,4,t,e)}function p0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m0(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,p0.bind(null,e,t),n)}function ff(){}function g0(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function v0(t,e,n){return Br&21?(tn(n,e)||(n=Sv(),_e.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function xT(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=vc.transition;vc.transition={};try{t(!1),e()}finally{he=n,vc.transition=r}}function w0(){return qt().memoizedState}function NT(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))S0(e,n);else if(n=Xv(t,e,n,r),n!==null){var i=wt();en(n,t,r,i),_0(n,e,r)}}function RT(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))S0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,rf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Xv(t,e,i,r),n!==null&&(i=wt(),en(n,t,r,i),_0(n,e,r))}}function E0(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function S0(t,e){Ds=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bd(t,n)}}var pl={readContext:Wt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},DT={readContext:Wt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$a(4194308,4,p0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $a(4194308,4,t,e)},useInsertionEffect:function(t,e){return $a(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NT.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Mm,useDebugValue:ff,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Mm(!1),e=t[0];return t=xT.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=sn();if(we){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),He===null)throw Error(k(349));Br&30||o0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bm(l0.bind(null,r,s,t),[t]),r.flags|=2048,no(9,a0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=He.identifierPrefix;if(we){var n=En,r=wn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PT={readContext:Wt,useCallback:g0,useContext:Wt,useEffect:df,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:y0,useReducer:wc,useRef:h0,useState:function(){return wc(to)},useDebugValue:ff,useDeferredValue:function(t){var e=qt();return v0(e,Me.memoizedState,t)},useTransition:function(){var t=wc(to)[0],e=qt().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:s0,useId:w0,unstable_isNewReconciler:!1},OT={readContext:Wt,useCallback:g0,useContext:Wt,useEffect:df,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:y0,useReducer:Ec,useRef:h0,useState:function(){return Ec(to)},useDebugValue:ff,useDeferredValue:function(t){var e=qt();return Me===null?e.memoizedState=t:v0(e,Me.memoizedState,t)},useTransition:function(){var t=Ec(to)[0],e=qt().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:s0,useId:w0,unstable_isNewReconciler:!1};function Mi(t,e){try{var n="",r=e;do n+=a_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LT=typeof WeakMap=="function"?WeakMap:Map;function T0(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,Fh=r),Nh(t,e)},n}function k0(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Um(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GT.bind(null,t,e,n),e.then(t,t))}function Fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var $T=Mn.ReactCurrentOwner,It=!1;function yt(t,e,n,r){e.child=t===null?n0(e,null,n,r):Li(e,t.child,n,r)}function jm(t,e,n,r,i){n=n.render;var s=e.ref;return ki(e,i),r=cf(t,e,n,r,s,i),n=hf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(we&&n&&Xd(e),e.flags|=1,yt(t,e,r,i),e.child)}function zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I0(t,e,s,r,i)):(t=Fa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function I0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gs(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return Rh(t,e,n,r,i)}function C0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(yi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(yi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(yi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(yi,Rt),Rt|=r;return yt(t,e,i,n),e.child}function A0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,r,i){var s=At(n)?jr:ft.current;return s=Pi(e,s),ki(e,i),n=cf(t,e,n,r,s,i),r=hf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(we&&r&&Xd(e),e.flags|=1,yt(t,e,n,i),e.child)}function Bm(t,e,n,r,i){if(At(n)){var s=!0;ol(e)}else s=!1;if(ki(e,i),e.stateNode===null)Ma(t,e),e0(e,n,r),xh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=At(n)?jr:ft.current,u=Pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Lm(e,o,r,u),zn=!1;var f=e.memoizedState;o.state=f,hl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ct.current||zn?(typeof c=="function"&&(Ah(e,n,c,r),l=e.memoizedState),(a=zn||Om(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wt(l):(l=At(n)?jr:ft.current,l=Pi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Lm(e,o,r,l),zn=!1,f=e.memoizedState,o.state=f,hl(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Ct.current||zn?(typeof g=="function"&&(Ah(e,n,g,r),y=e.memoizedState),(u=zn||Om(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,s,i)}function Dh(t,e,n,r,i,s){A0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xm(e,n,!1),Rn(t,e,s);r=e.stateNode,$T.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Li(e,t.child,null,s),e.child=Li(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&xm(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?Am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Am(t,e.context,!1),of(t,e.containerInfo)}function Hm(t,e,n,r,i){return Oi(),Zd(i),e.flags|=256,yt(t,e,n,r),e.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function N0(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Se,i&1),t===null)return Ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Ph,t):pf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return MT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ph,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pf(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,r){return r!==null&&Zd(r),Li(e,t.child,null,n),t=pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sc(Error(k(422))),ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Li(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Ph,s);if(!(e.mode&1))return ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Sc(s,r,void 0),ma(t,e,o,r)}if(a=(o&t.childLanes)!==0,It||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),en(r,t,i,-1))}return Ef(),r=Sc(Error(k(421))),ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=er(i.nextSibling),Ot=e,we=!0,Xt=null,t!==null&&(Vt[jt++]=wn,Vt[jt++]=En,Vt[jt++]=zr,wn=t.id,En=t.overflow,zr=e),e=pf(e,r.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ch(t.return,e,n)}function _c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function R0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_c(e,!0,n,null,s);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ma(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bT(t,e,n){switch(e.tag){case 3:x0(e),Oi();break;case 5:r0(e);break;case 1:At(e.type)&&ol(e);break;case 4:of(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?N0(t,e,n):(pe(Se,Se.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);pe(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,C0(t,e,n)}return Rn(t,e,n)}var D0,Lh,P0,O0;D0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};P0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(cn.current);var s=null;switch(n){case"input":i=nh(t,i),r=nh(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=sh(t,i),r=sh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}ah(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};O0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ms(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UT(t,e,n){var r=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return At(e.type)&&sl(),ot(e),null;case 3:return r=e.stateNode,$i(),ve(Ct),ve(ft),lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(zh(Xt),Xt=null))),Lh(t,e),ot(e),null;case 5:af(e);var i=Rr(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ot(e),null}if(t=Rr(cn.current),fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[Xs]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Ss.length;i++)ge(Ss[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":em(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":nm(r,s),ge("invalid",r)}ah(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(r.textContent,a,t),i=["children",""+a]):js.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ia(r),tm(r,s,!0);break;case"textarea":ia(r),rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ov(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[Xs]=r,D0(t,e,!1,!1),e.stateNode=t;e:{switch(o=lh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ss.length;i++)ge(Ss[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":em(t,r),i=nh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),ge("invalid",t);break;case"textarea":nm(t,r),i=sh(t,r),ge("invalid",t);break;default:i=r}ah(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&av(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zs(t,l):typeof l=="number"&&zs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(js.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&bd(t,s,l,o))}switch(n){case"input":ia(t),tm(t,r,!1);break;case"textarea":ia(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)O0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Rr(Zs.current),Rr(cn.current),fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return ot(e),null;case 13:if(ve(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Dt!==null&&e.mode&1&&!(e.flags&128))Yv(),Oi(),e.flags|=98560,s=!1;else if(s=fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[on]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Xt!==null&&(zh(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?be===0&&(be=3):Ef())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return $i(),Lh(t,e),t===null&&Qs(e.stateNode.containerInfo),ot(e),null;case 10:return nf(e.type._context),ot(e),null;case 17:return At(e.type)&&sl(),ot(e),null;case 19:if(ve(Se),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ms(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>bi&&(e.flags|=128,r=!0,ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return ot(e),null}else 2*Ne()-s.renderingStartTime>bi&&n!==1073741824&&(e.flags|=128,r=!0,ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Se.current,pe(Se,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return wf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function FT(t,e){switch(Jd(e),e.tag){case 1:return At(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),ve(Ct),ve(ft),lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return af(e),null;case 13:if(ve(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Se),null;case 4:return $i(),null;case 10:return nf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var ga=!1,lt=!1,VT=typeof WeakSet=="function"?WeakSet:Set,$=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var qm=!1;function jT(t,e){if(vh=tl,t=bv(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},tl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Qt(e.type,v),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Ie(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=qm,qm=!1,y}function Ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$h(e,n,s)}i=i.next}while(i!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L0(t){var e=t.alternate;e!==null&&(t.alternate=null,L0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[Xs],delete e[_h],delete e[TT],delete e[kT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $0(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(bh(t,e,n),t=t.sibling;t!==null;)bh(t,e,n),t=t.sibling}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}var Xe=null,Yt=!1;function Fn(t,e,n){for(n=n.child;n!==null;)M0(t,e,n),n=n.sibling}function M0(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:lt||gi(n,e);case 6:var r=Xe,i=Yt;Xe=null,Fn(t,e,n),Xe=r,Yt=i,Xe!==null&&(Yt?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Yt?(t=Xe,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),qs(t)):mc(Xe,n.stateNode));break;case 4:r=Xe,i=Yt,Xe=n.stateNode.containerInfo,Yt=!0,Fn(t,e,n),Xe=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$h(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!lt&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Fn(t,e,n),lt=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VT),e.forEach(function(r){var i=YT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,Yt=!1;break e;case 3:Xe=a.stateNode.containerInfo,Yt=!0;break e;case 4:Xe=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(Xe===null)throw Error(k(160));M0(s,o,i),Xe=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),rn(t),r&4){try{Ps(3,t,t.return),tu(3,t)}catch(v){Ie(t,t.return,v)}try{Ps(5,t,t.return)}catch(v){Ie(t,t.return,v)}}break;case 1:Gt(e,t),rn(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if(Gt(e,t),rn(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var i=t.stateNode;try{zs(i,"")}catch(v){Ie(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iv(i,s),lh(a,o);var u=lh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?uv(i,h):c==="dangerouslySetInnerHTML"?av(i,h):c==="children"?zs(i,h):bd(i,c,h,u)}switch(a){case"input":rh(i,s);break;case"textarea":sv(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ei(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ei(i,!!s.multiple,s.defaultValue,!0):Ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xs]=s}catch(v){Ie(t,t.return,v)}}break;case 6:if(Gt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ie(t,t.return,v)}}break;case 3:if(Gt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(v){Ie(t,t.return,v)}break;case 4:Gt(e,t),rn(t);break;case 13:Gt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yf=Ne())),r&4&&Gm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,Gt(e,t),lt=u):Gt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(h=$=c;$!==null;){switch(f=$,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ps(4,f,f.return);break;case 1:gi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:gi(f,f.return);break;case 22:if(f.memoizedState!==null){Ym(h);continue}}g!==null?(g.return=f,$=g):Ym(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lv("display",o))}catch(v){Ie(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ie(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gt(e,t),rn(t),r&4&&Gm(t);break;case 21:break;default:Gt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($0(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zs(i,""),r.flags&=-33);var s=Km(t);Uh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Km(t);bh(t,a,o);break;default:throw Error(k(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zT(t,e,n){$=t,U0(t)}function U0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ga;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=ga;var u=lt;if(ga=o,(lt=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Xm(i):l!==null?(l.return=o,$=l):Xm(i);for(;s!==null;)$=s,U0(s),s=s.sibling;$=i,ga=a,lt=u}Qm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Qm(t)}}function Qm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&qs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}lt||e.flags&512&&Mh(e)}catch(f){Ie(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ym(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Xm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{Mh(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{Mh(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var BT=Math.ceil,ml=Mn.ReactCurrentDispatcher,mf=Mn.ReactCurrentOwner,Ht=Mn.ReactCurrentBatchConfig,re=0,He=null,Pe=null,Ze=0,Rt=0,yi=wr(0),be=0,ro=null,Hr=0,nu=0,gf=0,Os=null,kt=null,yf=0,bi=1/0,yn=null,gl=!1,Fh=null,nr=null,ya=!1,Qn=null,yl=0,Ls=0,Vh=null,ba=-1,Ua=0;function wt(){return re&6?Ne():ba!==-1?ba:ba=Ne()}function rr(t){return t.mode&1?re&2&&Ze!==0?Ze&-Ze:CT.transition!==null?(Ua===0&&(Ua=Sv()),Ua):(t=he,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function en(t,e,n,r){if(50<Ls)throw Ls=0,Vh=null,Error(k(185));Co(t,n,r),(!(re&2)||t!==He)&&(t===He&&(!(re&2)&&(nu|=n),be===4&&Hn(t,Ze)),xt(t,r),n===1&&re===0&&!(e.mode&1)&&(bi=Ne()+500,Jl&&Er()))}function xt(t,e){var n=t.callbackNode;C_(t,e);var r=el(t,t===He?Ze:0);if(r===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?IT(Jm.bind(null,t)):Kv(Jm.bind(null,t)),ST(function(){!(re&6)&&Er()}),n=null;else{switch(_v(r)){case 1:n=zd;break;case 4:n=wv;break;case 16:n=Za;break;case 536870912:n=Ev;break;default:n=Za}n=q0(n,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F0(t,e){if(ba=-1,Ua=0,re&6)throw Error(k(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=el(t,t===He?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vl(t,r);else{e=r;var i=re;re|=2;var s=j0();(He!==t||Ze!==e)&&(yn=null,bi=Ne()+500,$r(t,e));do try{qT();break}catch(a){V0(t,a)}while(1);tf(),ml.current=s,re=i,Pe!==null?e=0:(He=null,Ze=0,e=be)}if(e!==0){if(e===2&&(i=fh(t),i!==0&&(r=i,e=jh(t,i))),e===1)throw n=ro,$r(t,0),Hn(t,r),xt(t,Ne()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!HT(i)&&(e=vl(t,r),e===2&&(s=fh(t),s!==0&&(r=s,e=jh(t,s))),e===1))throw n=ro,$r(t,0),Hn(t,r),xt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Cr(t,kt,yn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=yf+500-Ne(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sh(Cr.bind(null,t,kt,yn),e);break}Cr(t,kt,yn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BT(r/1960))-r,10<r){t.timeoutHandle=Sh(Cr.bind(null,t,kt,yn),r);break}Cr(t,kt,yn);break;case 5:Cr(t,kt,yn);break;default:throw Error(k(329))}}}return xt(t,Ne()),t.callbackNode===n?F0.bind(null,t):null}function jh(t,e){var n=Os;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=vl(t,e),t!==2&&(e=kt,kt=n,e!==null&&zh(e)),t}function zh(t){kt===null?kt=t:kt.push.apply(kt,t)}function HT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~gf,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if(re&6)throw Error(k(327));Ii();var e=el(t,0);if(!(e&1))return xt(t,Ne()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=fh(t);r!==0&&(e=r,n=jh(t,r))}if(n===1)throw n=ro,$r(t,0),Hn(t,e),xt(t,Ne()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,kt,yn),xt(t,Ne()),null}function vf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(bi=Ne()+500,Jl&&Er())}}function Wr(t){Qn!==null&&Qn.tag===0&&!(re&6)&&Ii();var e=re;re|=1;var n=Ht.transition,r=he;try{if(Ht.transition=null,he=1,t)return t()}finally{he=r,Ht.transition=n,re=e,!(re&6)&&Er()}}function wf(){Rt=yi.current,ve(yi)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ET(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:$i(),ve(Ct),ve(ft),lf();break;case 5:af(r);break;case 4:$i();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:nf(r.type._context);break;case 22:case 23:wf()}n=n.return}if(He=t,Pe=t=ir(t.current,null),Ze=Rt=e,be=0,ro=null,gf=nu=Hr=0,kt=Os=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function V0(t,e){do{var n=Pe;try{if(tf(),La.current=pl,fl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(Br=0,Be=Me=_e=null,Ds=!1,eo=0,mf.current=null,n===null||n.return===null){be=1,ro=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Fm(o);if(g!==null){g.flags&=-257,Vm(g,o,a,s,e),g.mode&1&&Um(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Um(s,u,e),Ef();break e}l=Error(k(426))}}else if(we&&a.mode&1){var S=Fm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Vm(S,o,a,s,e),Zd(Mi(l,a));break e}}s=l=Mi(l,a),be!==4&&(be=2),Os===null?Os=[s]:Os.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=T0(s,l,e);Dm(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nr===null||!nr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=k0(s,a,e);Dm(s,w);break e}}s=s.return}while(s!==null)}B0(n)}catch(T){e=T,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function j0(){var t=ml.current;return ml.current=pl,t===null?pl:t}function Ef(){(be===0||be===3||be===2)&&(be=4),He===null||!(Hr&268435455)&&!(nu&268435455)||Hn(He,Ze)}function vl(t,e){var n=re;re|=2;var r=j0();(He!==t||Ze!==e)&&(yn=null,$r(t,e));do try{WT();break}catch(i){V0(t,i)}while(1);if(tf(),re=n,ml.current=r,Pe!==null)throw Error(k(261));return He=null,Ze=0,be}function WT(){for(;Pe!==null;)z0(Pe)}function qT(){for(;Pe!==null&&!y_();)z0(Pe)}function z0(t){var e=W0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?B0(t):Pe=e,mf.current=null}function B0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FT(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Pe=null;return}}else if(n=UT(n,e,Rt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);be===0&&(be=5)}function Cr(t,e,n){var r=he,i=Ht.transition;try{Ht.transition=null,he=1,KT(t,e,n,r)}finally{Ht.transition=i,he=r}return null}function KT(t,e,n,r){do Ii();while(Qn!==null);if(re&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A_(t,s),t===He&&(Pe=He=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,q0(Za,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=he;he=1;var a=re;re|=4,mf.current=null,jT(t,n),b0(n,t),fT(wh),tl=!!vh,wh=vh=null,t.current=n,zT(n),v_(),re=a,he=o,Ht.transition=s}else t.current=n;if(ya&&(ya=!1,Qn=t,yl=i),s=t.pendingLanes,s===0&&(nr=null),S_(n.stateNode),xt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=Fh,Fh=null,t;return yl&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===Vh?Ls++:(Ls=0,Vh=t):Ls=0,Er(),null}function Ii(){if(Qn!==null){var t=_v(yl),e=Ht.transition,n=he;try{if(Ht.transition=null,he=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,yl=0,re&6)throw Error(k(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Ps(8,c,s)}var h=c.child;if(h!==null)h.return=c,$=h;else for(;$!==null;){c=$;var f=c.sibling,g=c.return;if(L0(c),c===u){$=null;break}if(f!==null){f.return=g,$=f;break}$=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ps(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,$=p;break e}$=s.return}}var d=t.current;for($=d;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=d;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(T){Ie(a,a.return,T)}if(a===o){$=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,$=w;break e}$=a.return}}if(re=i,Er(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Kl,t)}catch{}r=!0}return r}finally{he=n,Ht.transition=e}}return!1}function Zm(t,e,n){e=Mi(n,e),e=T0(t,e,1),t=tr(t,e,1),e=wt(),t!==null&&(Co(t,1,e),xt(t,e))}function Ie(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Mi(n,t),t=k0(e,t,1),e=tr(e,t,1),t=wt(),e!==null&&(Co(e,1,t),xt(e,t));break}}e=e.return}}function GT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ze&n)===n&&(be===4||be===3&&(Ze&130023424)===Ze&&500>Ne()-yf?$r(t,0):gf|=n),xt(t,e)}function H0(t,e){e===0&&(t.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var n=wt();t=Nn(t,e),t!==null&&(Co(t,e,n),xt(t,n))}function QT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H0(t,n)}function YT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),H0(t,n)}var W0;W0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,bT(t,e,n);It=!!(t.flags&131072)}else It=!1,we&&e.flags&1048576&&Gv(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ma(t,e),t=e.pendingProps;var i=Pi(e,ft.current);ki(e,n),i=cf(null,e,r,t,i,n);var s=hf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sf(e),i.updater=Zl,e.stateNode=i,i._reactInternals=e,xh(e,r,t,n),e=Dh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Xd(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ma(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JT(r),t=Qt(r,t),i){case 0:e=Rh(null,e,r,t,n);break e;case 1:e=Bm(null,e,r,t,n);break e;case 11:e=jm(null,e,r,t,n);break e;case 14:e=zm(null,e,r,Qt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Bm(t,e,r,i,n);case 3:e:{if(x0(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Jv(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mi(Error(k(423)),e),e=Hm(t,e,r,n,i);break e}else if(r!==i){i=Mi(Error(k(424)),e),e=Hm(t,e,r,n,i);break e}else for(Dt=er(e.stateNode.containerInfo.firstChild),Ot=e,we=!0,Xt=null,n=n0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){e=Rn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return r0(e),t===null&&Ih(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=32),A0(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Ih(e),null;case 13:return N0(t,e,n);case 4:return of(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Li(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),jm(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(ul,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!Ct.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=In(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ch(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ki(e,n),i=Wt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),zm(t,e,r,i,n);case 15:return I0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Ma(t,e),e.tag=1,At(r)?(t=!0,ol(e)):t=!1,ki(e,n),e0(e,r,i),xh(e,r,i,n),Dh(null,e,r,!0,t,n);case 19:return R0(t,e,n);case 22:return C0(t,e,n)}throw Error(k(156,e.tag))};function q0(t,e){return vv(t,e)}function XT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new XT(t,e,n,r)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JT(t){if(typeof t=="function")return Sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===Vd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Mr(n.children,i,s,e);case Ud:o=8,i|=8;break;case Jc:return t=Bt(12,n,e,i|2),t.elementType=Jc,t.lanes=s,t;case Zc:return t=Bt(13,n,e,i),t.elementType=Zc,t.lanes=s,t;case eh:return t=Bt(19,n,e,i),t.elementType=eh,t.lanes=s,t;case tv:return ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zy:o=10;break e;case ev:o=9;break e;case Fd:o=11;break e;case Vd:o=14;break e;case jn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=tv,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,r,i,s,o,a,l){return t=new ZT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sf(s),t}function ek(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function K0(t){if(!t)return pr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(At(n))return qv(t,n,e)}return e}function G0(t,e,n,r,i,s,o,a,l){return t=_f(n,r,!0,t,i,s,o,a,l),t.context=K0(null),n=t.current,r=wt(),i=rr(n),s=In(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Co(t,i,r),xt(t,r),t}function iu(t,e,n,r){var i=e.current,s=wt(),o=rr(i);return n=K0(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(en(t,i,o,s),Oa(t,i,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tf(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function tk(){return null}var Q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}su.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));iu(t,e,null,null)};su.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){iu(null,t,null,null)}),e[xn]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&Av(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function nk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wl(o);s.call(u)}}var o=G0(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=o,t[xn]=o.current,Qs(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wl(l);a.call(u)}}var l=_f(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=l,t[xn]=l.current,Qs(t.nodeType===8?t.parentNode:t),Wr(function(){iu(e,l,n,r)}),l}function au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=wl(o);a.call(l)}}iu(e,o,t,i)}else o=nk(n,e,t,i,r);return wl(o)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Es(e.pendingLanes);n!==0&&(Bd(e,n|1),xt(e,Ne()),!(re&6)&&(bi=Ne()+500,Er()))}break;case 13:Wr(function(){var r=Nn(t,1);if(r!==null){var i=wt();en(r,t,1,i)}}),Tf(t,1)}};Hd=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=wt();en(e,t,134217728,n)}Tf(t,134217728)}};kv=function(t){if(t.tag===13){var e=rr(t),n=Nn(t,e);if(n!==null){var r=wt();en(n,t,e,r)}Tf(t,e)}};Iv=function(){return he};Cv=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};ch=function(t,e,n){switch(e){case"input":if(rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xl(r);if(!i)throw Error(k(90));rv(r),rh(r,i)}}}break;case"textarea":sv(t,n);break;case"select":e=n.value,e!=null&&Ei(t,!!n.multiple,e,!1)}};dv=vf;fv=Wr;var rk={usingClientEntryPoint:!1,Events:[xo,hi,Xl,cv,hv,vf]},gs={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ik={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gv(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Kl=va.inject(ik),un=va}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(k(200));return ek(t,e,null,n)};bt.createRoot=function(t,e){if(!If(t))throw Error(k(299));var n=!1,r="",i=Q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,Qs(t.nodeType===8?t.parentNode:t),new kf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=gv(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return Wr(t)};bt.hydrate=function(t,e,n){if(!ou(e))throw Error(k(200));return au(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!If(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=G0(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new su(e)};bt.render=function(t,e,n){if(!ou(e))throw Error(k(200));return au(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!ou(t))throw Error(k(40));return t._reactRootContainer?(Wr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};bt.unstable_batchedUpdates=vf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return au(t,e,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=bt})(t_);var ng=Qc;Gc.createRoot=ng.createRoot,Gc.hydrateRoot=ng.hydrateRoot;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},io.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const rg="popstate";function sk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Bh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:so(i)}return ak(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ok(){return Math.random().toString(36).substr(2,8)}function ig(t,e){return{usr:t.state,key:t.key,idx:e}}function Bh(t,e,n,r){return n===void 0&&(n=null),io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zi(e):e,{state:n,key:e&&e.key||r||ok()})}function so(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ak(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Yn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(io({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Yn.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:p})}function f(S,p){a=Yn.Push;let d=Bh(v.location,S,p);n&&n(d,S),u=c()+1;let m=ig(d,u),w=v.createHref(d);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(S,p){a=Yn.Replace;let d=Bh(v.location,S,p);n&&n(d,S),u=c();let m=ig(d,u),w=v.createHref(d);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:so(S);return Ue(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rg,h),l=S,()=>{i.removeEventListener(rg,h),l=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(S){return o.go(S)}};return v}var sg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sg||(sg={}));function lk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zi(e):e,i=J0(r.pathname||"/",n);if(i==null)return null;let s=Y0(t);uk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=vk(s[a],Sk(i));return o}function Y0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Y0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X0(s.path))i(s,o,l)}),e}function X0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function uk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ck=/^:\w+$/,hk=3,dk=2,fk=1,pk=10,mk=-2,og=t=>t==="*";function gk(t,e){let n=t.split("/"),r=n.length;return n.some(og)&&(r+=mk),e&&(r+=dk),n.filter(i=>!og(i)).reduce((i,s)=>i+(ck.test(s)?hk:s===""?fk:pk),r)}function yk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:sr([i,c.pathname]),pathnameBase:Ik(sr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=sr([i,c.pathnameBase]))}return s}function wk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ek(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=_k(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ek(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Sk(t){try{return decodeURI(t)}catch(e){return Cf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _k(t,e){try{return decodeURIComponent(t)}catch(n){return Cf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function J0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Cf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zi(t):t;return{pathname:n?n.startsWith("/")?n:kk(n,e):e,search:Ck(r),hash:Ak(i)}}function kk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ic(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ew(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zi(t):(i=io({},t),Ue(!i.pathname||!i.pathname.includes("?"),Ic("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),Ic("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),Ic("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=Tk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),Ik=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ck=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ak=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Nk=["post","put","patch","delete"];[...Nk];/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hh(){return Hh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hh.apply(this,arguments)}function Rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Dk=typeof Object.is=="function"?Object.is:Rk,{useState:Pk,useEffect:Ok,useLayoutEffect:Lk,useDebugValue:$k}=Kc;function Mk(t,e,n){const r=e(),[{inst:i},s]=Pk({inst:{value:r,getSnapshot:e}});return Lk(()=>{i.value=r,i.getSnapshot=e,Cc(i)&&s({inst:i})},[t,r,e]),Ok(()=>(Cc(i)&&s({inst:i}),t(()=>{Cc(i)&&s({inst:i})})),[t]),$k(r),r}function Cc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Dk(n,r)}catch{return!0}}function bk(t,e,n){return e()}const Uk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fk=!Uk,Vk=Fk?bk:Mk;"useSyncExternalStore"in Kc&&(t=>t.useSyncExternalStore)(Kc);const tw=C.createContext(null),Af=C.createContext(null),Ro=C.createContext(null),lu=C.createContext(null),Sr=C.createContext({outlet:null,matches:[]}),nw=C.createContext(null);function jk(t,e){let{relative:n}=e===void 0?{}:e;Do()||Ue(!1);let{basename:r,navigator:i}=C.useContext(Ro),{hash:s,pathname:o,search:a}=Nf(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Do(){return C.useContext(lu)!=null}function Po(){return Do()||Ue(!1),C.useContext(lu).location}function xf(){Do()||Ue(!1);let{basename:t,navigator:e}=C.useContext(Ro),{matches:n}=C.useContext(Sr),{pathname:r}=Po(),i=JSON.stringify(Z0(n).map(a=>a.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=ew(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:sr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const rw=C.createContext(null);function zk(){return C.useContext(rw)}function Bk(t){let e=C.useContext(Sr).outlet;return e&&C.createElement(rw.Provider,{value:t},e)}function Hk(){let{matches:t}=C.useContext(Sr),e=t[t.length-1];return e?e.params:{}}function Nf(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(Sr),{pathname:i}=Po(),s=JSON.stringify(Z0(r).map(o=>o.pathnameBase));return C.useMemo(()=>ew(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Wk(t,e){Do()||Ue(!1);let{navigator:n}=C.useContext(Ro),r=C.useContext(Af),{matches:i}=C.useContext(Sr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Po(),u;if(e){var c;let v=typeof e=="string"?Zi(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ue(!1),u=v}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",g=lk(t,{pathname:f}),y=Qk(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:sr([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:sr([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?C.createElement(lu.Provider,{value:{location:Hh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Yn.Pop}},y):y}function qk(){let t=Zk(),e=xk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}class Kk extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Sr.Provider,{value:this.props.routeContext},C.createElement(nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gk(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(tw);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Sr.Provider,{value:e},r)}function Qk(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ue(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||C.createElement(qk,null):null,c=e.concat(r.slice(0,a+1)),h=()=>C.createElement(Gk,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?C.createElement(Kk,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var ag;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(ag||(ag={}));var El;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(El||(El={}));function Yk(t){let e=C.useContext(Af);return e||Ue(!1),e}function Xk(t){let e=C.useContext(Sr);return e||Ue(!1),e}function Jk(t){let e=Xk(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function Zk(){var t;let e=C.useContext(nw),n=Yk(El.UseRouteError),r=Jk(El.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function eI(t){return Bk(t.context)}function ri(t){Ue(!1)}function tI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Yn.Pop,navigator:s,static:o=!1}=t;Do()&&Ue(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Zi(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,y=C.useMemo(()=>{let v=J0(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:f,key:g}},[a,u,c,h,f,g]);return y==null?null:C.createElement(Ro.Provider,{value:l},C.createElement(lu.Provider,{children:n,value:{location:y,navigationType:i}}))}function nI(t){let{children:e,location:n}=t,r=C.useContext(tw),i=r&&!e?r.router.routes:Wh(e);return Wk(i,n)}var lg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(lg||(lg={}));new Promise(()=>{});function Wh(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,Wh(r.props.children,e));return}r.type!==ri&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Wh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}function iw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function iI(t,e){return t.button===0&&(!e||e==="_self")&&!rI(t)}const sI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],oI=["aria-current","caseSensitive","className","end","style","to","children"];function aI(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=sk({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(a),[s]),C.createElement(tI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const lI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uI=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=iw(e,sI),f=typeof u=="string"?u:so(u),g=/^[a-z+]+:\/\//i.test(f)||f.startsWith("//"),y=f,v=!1;if(lI&&g){let m=new URL(window.location.href),w=f.startsWith("//")?new URL(m.protocol+f):new URL(f);w.origin===m.origin?y=w.pathname+w.search+w.hash:v=!0}let S=jk(y,{relative:i}),p=hI(y,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function d(m){r&&r(m),m.defaultPrevented||p(m)}return C.createElement("a",Sl({},h,{href:g?f:S,onClick:v||s?r:d,ref:n,target:l}))}),cI=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=iw(e,oI),h=Nf(l,{relative:c.relative}),f=Po(),g=C.useContext(Af),{navigator:y}=C.useContext(Ro),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,S=f.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(S=S.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let d=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",m=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),w=d?r:void 0,T;typeof s=="function"?T=s({isActive:d,isPending:m}):T=[s,d?"active":null,m?"pending":null].filter(Boolean).join(" ");let R=typeof a=="function"?a({isActive:d,isPending:m}):a;return C.createElement(uI,Sl({},c,{"aria-current":w,className:T,ref:n,style:R,to:l}),typeof u=="function"?u({isActive:d,isPending:m}):u)});var ug;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ug||(ug={}));var cg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(cg||(cg={}));function hI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=xf(),l=Po(),u=Nf(t,{relative:o});return C.useCallback(c=>{if(iI(c,n)){c.preventDefault();let h=r!==void 0?r:so(l)===so(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var oo={},dI={get exports(){return oo},set exports(t){oo=t}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,Rf=qe?Symbol.for("react.element"):60103,Df=qe?Symbol.for("react.portal"):60106,uu=qe?Symbol.for("react.fragment"):60107,cu=qe?Symbol.for("react.strict_mode"):60108,hu=qe?Symbol.for("react.profiler"):60114,du=qe?Symbol.for("react.provider"):60109,fu=qe?Symbol.for("react.context"):60110,Pf=qe?Symbol.for("react.async_mode"):60111,pu=qe?Symbol.for("react.concurrent_mode"):60111,mu=qe?Symbol.for("react.forward_ref"):60112,gu=qe?Symbol.for("react.suspense"):60113,fI=qe?Symbol.for("react.suspense_list"):60120,yu=qe?Symbol.for("react.memo"):60115,vu=qe?Symbol.for("react.lazy"):60116,pI=qe?Symbol.for("react.block"):60121,mI=qe?Symbol.for("react.fundamental"):60117,gI=qe?Symbol.for("react.responder"):60118,yI=qe?Symbol.for("react.scope"):60119;function Ft(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Rf:switch(t=t.type,t){case Pf:case pu:case uu:case hu:case cu:case gu:return t;default:switch(t=t&&t.$$typeof,t){case fu:case mu:case vu:case yu:case du:return t;default:return e}}case Df:return e}}}function sw(t){return Ft(t)===pu}de.AsyncMode=Pf;de.ConcurrentMode=pu;de.ContextConsumer=fu;de.ContextProvider=du;de.Element=Rf;de.ForwardRef=mu;de.Fragment=uu;de.Lazy=vu;de.Memo=yu;de.Portal=Df;de.Profiler=hu;de.StrictMode=cu;de.Suspense=gu;de.isAsyncMode=function(t){return sw(t)||Ft(t)===Pf};de.isConcurrentMode=sw;de.isContextConsumer=function(t){return Ft(t)===fu};de.isContextProvider=function(t){return Ft(t)===du};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rf};de.isForwardRef=function(t){return Ft(t)===mu};de.isFragment=function(t){return Ft(t)===uu};de.isLazy=function(t){return Ft(t)===vu};de.isMemo=function(t){return Ft(t)===yu};de.isPortal=function(t){return Ft(t)===Df};de.isProfiler=function(t){return Ft(t)===hu};de.isStrictMode=function(t){return Ft(t)===cu};de.isSuspense=function(t){return Ft(t)===gu};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===uu||t===pu||t===hu||t===cu||t===gu||t===fI||typeof t=="object"&&t!==null&&(t.$$typeof===vu||t.$$typeof===yu||t.$$typeof===du||t.$$typeof===fu||t.$$typeof===mu||t.$$typeof===mI||t.$$typeof===gI||t.$$typeof===yI||t.$$typeof===pI)};de.typeOf=Ft;(function(t){t.exports=de})(dI);function vI(t){function e(N,O,L,H,E){for(var te=0,x=0,ke=0,ae=0,ce,X,Ge=0,Tt=0,se,it=se=ce=0,le=0,Qe=0,as=0,Ye=0,ta=L.length,ls=ta-1,Kt,K="",xe="",Xu="",Ju="",Un;le<ta;){if(X=L.charCodeAt(le),le===ls&&x+ae+ke+te!==0&&(x!==0&&(X=x===47?10:47),ae=ke=te=0,ta++,ls++),x+ae+ke+te===0){if(le===ls&&(0<Qe&&(K=K.replace(f,"")),0<K.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:K+=L.charAt(le)}X=59}switch(X){case 123:for(K=K.trim(),ce=K.charCodeAt(0),se=1,Ye=++le;le<ta;){switch(X=L.charCodeAt(le)){case 123:se++;break;case 125:se--;break;case 47:switch(X=L.charCodeAt(le+1)){case 42:case 47:e:{for(it=le+1;it<ls;++it)switch(L.charCodeAt(it)){case 47:if(X===42&&L.charCodeAt(it-1)===42&&le+2!==it){le=it+1;break e}break;case 10:if(X===47){le=it+1;break e}}le=it}}break;case 91:X++;case 40:X++;case 34:case 39:for(;le++<ls&&L.charCodeAt(le)!==X;);}if(se===0)break;le++}switch(se=L.substring(Ye,le),ce===0&&(ce=(K=K.replace(h,"").trim()).charCodeAt(0)),ce){case 64:switch(0<Qe&&(K=K.replace(f,"")),X=K.charCodeAt(1),X){case 100:case 109:case 115:case 45:Qe=O;break;default:Qe=gn}if(se=e(O,Qe,se,X,E+1),Ye=se.length,0<A&&(Qe=n(gn,K,as),Un=a(3,se,Qe,O,Ke,$e,Ye,X,E,H),K=Qe.join(""),Un!==void 0&&(Ye=(se=Un.trim()).length)===0&&(X=0,se="")),0<Ye)switch(X){case 115:K=K.replace(R,o);case 100:case 109:case 45:se=K+"{"+se+"}";break;case 107:K=K.replace(d,"$1 $2"),se=K+"{"+se+"}",se=rt===1||rt===2&&s("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=K+se,H===112&&(se=(xe+=se,""))}else se="";break;default:se=e(O,n(O,K,as),se,H,E+1)}Xu+=se,se=as=Qe=it=ce=0,K="",X=L.charCodeAt(++le);break;case 125:case 59:if(K=(0<Qe?K.replace(f,""):K).trim(),1<(Ye=K.length))switch(it===0&&(ce=K.charCodeAt(0),ce===45||96<ce&&123>ce)&&(Ye=(K=K.replace(" ",":")).length),0<A&&(Un=a(1,K,O,N,Ke,$e,xe.length,H,E,H))!==void 0&&(Ye=(K=Un.trim()).length)===0&&(K="\0\0"),ce=K.charCodeAt(0),X=K.charCodeAt(1),ce){case 0:break;case 64:if(X===105||X===99){Ju+=K+L.charAt(le);break}default:K.charCodeAt(Ye-1)!==58&&(xe+=i(K,ce,X,K.charCodeAt(2)))}as=Qe=it=ce=0,K="",X=L.charCodeAt(++le)}}switch(X){case 13:case 10:x===47?x=0:1+ce===0&&H!==107&&0<K.length&&(Qe=1,K+="\0"),0<A*B&&a(0,K,O,N,Ke,$e,xe.length,H,E,H),$e=1,Ke++;break;case 59:case 125:if(x+ae+ke+te===0){$e++;break}default:switch($e++,Kt=L.charAt(le),X){case 9:case 32:if(ae+te+x===0)switch(Ge){case 44:case 58:case 9:case 32:Kt="";break;default:X!==32&&(Kt=" ")}break;case 0:Kt="\\0";break;case 12:Kt="\\f";break;case 11:Kt="\\v";break;case 38:ae+x+te===0&&(Qe=as=1,Kt="\f"+Kt);break;case 108:if(ae+x+te+Nt===0&&0<it)switch(le-it){case 2:Ge===112&&L.charCodeAt(le-3)===58&&(Nt=Ge);case 8:Tt===111&&(Nt=Tt)}break;case 58:ae+x+te===0&&(it=le);break;case 44:x+ke+ae+te===0&&(Qe=1,Kt+="\r");break;case 34:case 39:x===0&&(ae=ae===X?0:ae===0?X:ae);break;case 91:ae+x+ke===0&&te++;break;case 93:ae+x+ke===0&&te--;break;case 41:ae+x+te===0&&ke--;break;case 40:if(ae+x+te===0){if(ce===0)switch(2*Ge+3*Tt){case 533:break;default:ce=1}ke++}break;case 64:x+ke+ae+te+it+se===0&&(se=1);break;case 42:case 47:if(!(0<ae+te+ke))switch(x){case 0:switch(2*X+3*L.charCodeAt(le+1)){case 235:x=47;break;case 220:Ye=le,x=42}break;case 42:X===47&&Ge===42&&Ye+2!==le&&(L.charCodeAt(Ye+2)===33&&(xe+=L.substring(Ye,le+1)),Kt="",x=0)}}x===0&&(K+=Kt)}Tt=Ge,Ge=X,le++}if(Ye=xe.length,0<Ye){if(Qe=O,0<A&&(Un=a(2,xe,Qe,N,Ke,$e,Ye,H,E,H),Un!==void 0&&(xe=Un).length===0))return Ju+xe+Xu;if(xe=Qe.join(",")+"{"+xe+"}",rt*Nt!==0){switch(rt!==2||s(xe,2)||(Nt=0),Nt){case 111:xe=xe.replace(w,":-moz-$1")+xe;break;case 112:xe=xe.replace(m,"::-webkit-input-$1")+xe.replace(m,"::-moz-$1")+xe.replace(m,":-ms-input-$1")+xe}Nt=0}}return Ju+xe+Xu}function n(N,O,L){var H=O.trim().split(S);O=H;var E=H.length,te=N.length;switch(te){case 0:case 1:var x=0;for(N=te===0?"":N[0]+" ";x<E;++x)O[x]=r(N,O[x],L).trim();break;default:var ke=x=0;for(O=[];x<E;++x)for(var ae=0;ae<te;++ae)O[ke++]=r(N[ae]+" ",H[x],L).trim()}return O}function r(N,O,L){var H=O.charCodeAt(0);switch(33>H&&(H=(O=O.trim()).charCodeAt(0)),H){case 38:return O.replace(p,"$1"+N.trim());case 58:return N.trim()+O.replace(p,"$1"+N.trim());default:if(0<1*L&&0<O.indexOf("\f"))return O.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+O}function i(N,O,L,H){var E=N+";",te=2*O+3*L+4*H;if(te===944){N=E.indexOf(":",9)+1;var x=E.substring(N,E.length-1).trim();return x=E.substring(0,N).trim()+x+";",rt===1||rt===2&&s(x,1)?"-webkit-"+x+x:x}if(rt===0||rt===2&&!s(E,1))return E;switch(te){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(je,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return x=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+E+"-ms-flex-pack"+x+E;case 1005:return y.test(E)?E.replace(g,":-webkit-")+E.replace(g,":-moz-")+E:E;case 1e3:switch(x=E.substring(13).trim(),O=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(O)){case 226:x=E.replace(T,"tb");break;case 232:x=E.replace(T,"tb-rl");break;case 220:x=E.replace(T,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+x+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(O=(E=N).length-10,x=(E.charCodeAt(O)===33?E.substring(0,O):E).substring(N.indexOf(":",7)+1).trim(),te=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:E=E.replace(x,"-webkit-"+x)+";"+E;break;case 207:case 102:E=E.replace(x,"-webkit-"+(102<te?"inline-":"")+"box")+";"+E.replace(x,"-webkit-"+x)+";"+E.replace(x,"-ms-"+x+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return x=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+x+"-ms-flex-"+x+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(j.test(N)===!0)return(x=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),O,L,H).replace(":fill-available",":stretch"):E.replace(x,"-webkit-"+x)+E.replace(x,"-moz-"+x.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,L+H===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s(N,O){var L=N.indexOf(O===1?":":"{"),H=N.substring(0,O!==3?L:10);return L=N.substring(L+1,N.length-1),V(O!==2?H:H.replace(J,"$1"),L,O)}function o(N,O){var L=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return L!==O+";"?L.replace(D," or ($1)").substring(4):"("+O+")"}function a(N,O,L,H,E,te,x,ke,ae,ce){for(var X=0,Ge=O,Tt;X<A;++X)switch(Tt=gt[X].call(c,N,Ge,L,H,E,te,x,ke,ae,ce)){case void 0:case!1:case!0:case null:break;default:Ge=Tt}if(Ge!==O)return Ge}function l(N){switch(N){case void 0:case null:A=gt.length=0;break;default:if(typeof N=="function")gt[A++]=N;else if(typeof N=="object")for(var O=0,L=N.length;O<L;++O)l(N[O]);else B=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(V=null,N?typeof N!="function"?rt=1:(rt=2,V=N):rt=0),u}function c(N,O){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),fe=L,L=[fe],0<A){var H=a(-1,O,L,L,Ke,$e,0,0,0,0);H!==void 0&&typeof H=="string"&&(O=H)}var E=e(gn,L,O,0,0);return 0<A&&(H=a(-2,E,L,L,Ke,$e,E.length,0,0,0),H!==void 0&&(E=H)),fe="",Nt=0,$e=Ke=1,E}var h=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,w=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,P=/-self|flex-/g,J=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,je=/([^-])(image-set\()/,$e=1,Ke=1,Nt=0,rt=1,gn=[],gt=[],A=0,V=null,B=0,fe="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var wI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function EI(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var SI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hg=EI(function(t){return SI.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Of=oo,_I={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ow={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lf={};Lf[Of.ForwardRef]=kI;Lf[Of.Memo]=ow;function dg(t){return Of.isMemo(t)?ow:Lf[t.$$typeof]||_I}var II=Object.defineProperty,CI=Object.getOwnPropertyNames,fg=Object.getOwnPropertySymbols,AI=Object.getOwnPropertyDescriptor,xI=Object.getPrototypeOf,pg=Object.prototype;function aw(t,e,n){if(typeof e!="string"){if(pg){var r=xI(e);r&&r!==pg&&aw(t,r,n)}var i=CI(e);fg&&(i=i.concat(fg(e)));for(var s=dg(t),o=dg(e),a=0;a<i.length;++a){var l=i[a];if(!TI[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=AI(e,l);try{II(t,l,u)}catch{}}}}return t}var NI=aw;function Sn(){return(Sn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var mg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},qh=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!oo.typeOf(t)},_l=Object.freeze([]),or=Object.freeze({});function ao(t){return typeof t=="function"}function gg(t){return t.displayName||t.name||"Component"}function $f(t){return t&&typeof t.styledComponentId=="string"}var Ui=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Mf=typeof window<"u"&&"HTMLElement"in window,RI=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Oo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var DI=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Oo(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Va=new Map,Tl=new Map,$s=1,wa=function(t){if(Va.has(t))return Va.get(t);for(;Tl.has($s);)$s++;var e=$s++;return Va.set(t,e),Tl.set(e,t),e},PI=function(t){return Tl.get(t)},OI=function(t,e){e>=$s&&($s=e+1),Va.set(t,e),Tl.set(e,t)},LI="style["+Ui+'][data-styled-version="5.3.6"]',$I=new RegExp("^"+Ui+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),MI=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},bI=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match($I);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(OI(u,l),MI(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},UI=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},lw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ui))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ui,"active"),r.setAttribute("data-styled-version","5.3.6");var o=UI();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},FI=function(){function t(n){var r=this.element=lw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Oo(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),VI=function(){function t(n){var r=this.element=lw(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),jI=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),yg=Mf,zI={isServer:!Mf,useCSSOMInjection:!RI},uw=function(){function t(n,r,i){n===void 0&&(n=or),r===void 0&&(r={}),this.options=Sn({},zI,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Mf&&yg&&(yg=!1,function(s){for(var o=document.querySelectorAll(LI),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ui)!=="active"&&(bI(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return wa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Sn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new jI(o):s?new FI(o):new VI(o),new DI(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(wa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(wa(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(wa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=PI(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ui+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(f){f.length>0&&(h+=f+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),BI=/(a)(d)/gi,vg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=vg(e%52)+n;return(vg(e%52)+n).replace(BI,"$1-$2")}var vi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},cw=function(t){return vi(5381,t)};function HI(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ao(n)&&!$f(n))return!1}return!0}var WI=cw("5.3.6"),qI=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&HI(e),this.componentId=n,this.baseHash=vi(WI,n),this.baseStyle=r,uw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Fi(this.rules,e,n,r).join(""),a=Kh(vi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=vi(this.baseHash,r.hash),h="",f=0;f<u;f++){var g=this.rules[f];if(typeof g=="string")h+=g;else if(g){var y=Fi(g,e,n,r),v=Array.isArray(y)?y.join(""):y;c=vi(c,v+f),h+=v}}if(h){var S=Kh(c>>>0);if(!n.hasNameForId(i,S)){var p=r(h,"."+S,void 0,i);n.insertRules(i,S,p)}s.push(S)}}return s.join(" ")},t}(),KI=/^\s*\/\/.*$/gm,GI=[":","[",".","#"];function QI(t){var e,n,r,i,s=t===void 0?or:t,o=s.options,a=o===void 0?or:o,l=s.plugins,u=l===void 0?_l:l,c=new vI(a),h=[],f=function(v){function S(p){if(p)try{v(p+"}")}catch{}}return function(p,d,m,w,T,R,D,P,J,j){switch(p){case 1:if(J===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(P===0)return d+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(m[0]+d),"";default:return d+(j===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),g=function(v,S,p){return S===0&&GI.indexOf(p[n.length])!==-1||p.match(i)?v:"."+e};function y(v,S,p,d){d===void 0&&(d="&");var m=v.replace(KI,""),w=S&&p?p+" "+S+" { "+m+" }":m;return e=d,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!S?"":S,w)}return c.use([].concat(u,[function(v,S,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},f,function(v){if(v===-2){var S=h;return h=[],S}}])),y.hash=u.length?u.reduce(function(v,S){return S.name||Oo(15),vi(v,S.name)},5381).toString():"",y}var hw=Pt.createContext();hw.Consumer;var dw=Pt.createContext(),YI=(dw.Consumer,new uw),Gh=QI();function XI(){return C.useContext(hw)||YI}function JI(){return C.useContext(dw)||Gh}var ZI=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Gh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Oo(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Gh),this.name+e.hash},t}(),eC=/([A-Z])/,tC=/([A-Z])/g,nC=/^ms-/,rC=function(t){return"-"+t.toLowerCase()};function wg(t){return eC.test(t)?t.replace(tC,rC).replace(nC,"-ms-"):t}var Eg=function(t){return t==null||t===!1||t===""};function Fi(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Fi(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Eg(t))return"";if($f(t))return"."+t.styledComponentId;if(ao(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Fi(l,e,n,r)}var u;return t instanceof ZI?n?(t.inject(n,r),t.getName(r)):t:qh(t)?function c(h,f){var g,y,v=[];for(var S in h)h.hasOwnProperty(S)&&!Eg(h[S])&&(Array.isArray(h[S])&&h[S].isCss||ao(h[S])?v.push(wg(S)+":",h[S],";"):qh(h[S])?v.push.apply(v,c(h[S],S)):v.push(wg(S)+": "+(g=S,(y=h[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in wI?String(y).trim():y+"px")+";"));return f?[f+" {"].concat(v,["}"]):v}(t):t.toString()}var Sg=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function iC(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ao(t)||qh(t)?Sg(Fi(mg(_l,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Sg(Fi(mg(t,n)))}var sC=function(t,e,n){return n===void 0&&(n=or),t.theme!==n.theme&&t.theme||e||n.theme},oC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aC=/(^-|-$)/g;function Ac(t){return t.replace(oC,"-").replace(aC,"")}var lC=function(t){return Kh(cw(t)>>>0)};function Ea(t){return typeof t=="string"&&!0}var Qh=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},uC=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function cC(t,e,n){var r=t[n];Qh(e)&&Qh(r)?fw(r,e):t[n]=e}function fw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Qh(o))for(var a in o)uC(a)&&cC(t,o[a],a)}return t}var pw=Pt.createContext();pw.Consumer;var xc={};function mw(t,e,n){var r=$f(t),i=!Ea(t),s=e.attrs,o=s===void 0?_l:s,a=e.componentId,l=a===void 0?function(d,m){var w=typeof d!="string"?"sc":Ac(d);xc[w]=(xc[w]||0)+1;var T=w+"-"+lC("5.3.6"+w+xc[w]);return m?m+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(d){return Ea(d)?"styled."+d:"Styled("+gg(d)+")"}(t):u,h=e.displayName&&e.componentId?Ac(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(d,m,w){return t.shouldForwardProp(d,m,w)&&e.shouldForwardProp(d,m,w)}:t.shouldForwardProp);var y,v=new qI(n,h,r?t.componentStyle:void 0),S=v.isStatic&&o.length===0,p=function(d,m){return function(w,T,R,D){var P=w.attrs,J=w.componentStyle,j=w.defaultProps,je=w.foldedComponentIds,$e=w.shouldForwardProp,Ke=w.styledComponentId,Nt=w.target,rt=function(H,E,te){H===void 0&&(H=or);var x=Sn({},E,{theme:H}),ke={};return te.forEach(function(ae){var ce,X,Ge,Tt=ae;for(ce in ao(Tt)&&(Tt=Tt(x)),Tt)x[ce]=ke[ce]=ce==="className"?(X=ke[ce],Ge=Tt[ce],X&&Ge?X+" "+Ge:X||Ge):Tt[ce]}),[x,ke]}(sC(T,C.useContext(pw),j)||or,T,P),gn=rt[0],gt=rt[1],A=function(H,E,te,x){var ke=XI(),ae=JI(),ce=E?H.generateAndInjectStyles(or,ke,ae):H.generateAndInjectStyles(te,ke,ae);return ce}(J,D,gn),V=R,B=gt.$as||T.$as||gt.as||T.as||Nt,fe=Ea(B),N=gt!==T?Sn({},T,{},gt):T,O={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?O.as=N[L]:($e?$e(L,hg,B):!fe||hg(L))&&(O[L]=N[L]));return T.style&&gt.style!==T.style&&(O.style=Sn({},T.style,{},gt.style)),O.className=Array.prototype.concat(je,Ke,A!==Ke?A:null,T.className,gt.className).filter(Boolean).join(" "),O.ref=V,C.createElement(B,O)}(y,d,m,S)};return p.displayName=c,(y=Pt.forwardRef(p)).attrs=f,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):_l,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(d){var m=e.componentId,w=function(R,D){if(R==null)return{};var P,J,j={},je=Object.keys(R);for(J=0;J<je.length;J++)P=je[J],D.indexOf(P)>=0||(j[P]=R[P]);return j}(e,["componentId"]),T=m&&m+"-"+(Ea(d)?d:Ac(gg(d)));return mw(d,Sn({},w,{attrs:f,componentId:T}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?fw({},t.defaultProps,d):d}}),y.toString=function(){return"."+y.styledComponentId},i&&NI(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Yh=function(t){return function e(n,r,i){if(i===void 0&&(i=or),!oo.isValidElementType(r))return Oo(1,String(r));var s=function(){return n(r,i,iC.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Sn({},i,{},o))},s.attrs=function(o){return e(n,r,Sn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(mw,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Yh[t]=Yh(t)});const ie=Yh,hC=({user:t,signOut:e})=>{const{name:n,photo:r}=t;return Ce(dC,{children:[G(fC,{children:n}),G(pC,{src:r,alt:`${n} slika`,onClick:e,referrerpolicy:"no-referrer"})]})},dC=ie.div`
  display: flex;
  align-items: center;
`,fC=ie.span`
  font-weight: 400;
  font-size: 1em;
  margin-right: 8px;
`,pC=ie.img`
  max-width: 42px;
  border-radius: 50%;
`,gw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA8CAMAAACuCk+GAAAACXBIWXMAAAsSAAALEgHS3X78AAAAw1BMVEVHcEz77tTi7fr++fH////////98eH77dX////////98d777tbe6PH99OX33bD99ur////++O38+vf55cH+9ej87tf99un76s3i6/Xs8/j779r////h6/bj6/L99ef88N3769H78d3h7Pfo7/bl7PL//PnxyYOPqf8ieufnnySRvfPtt1r0z5Pl7/vppTLtsUxane3xw3bT5fnw9v3rqz7vvml2rfEwg+my0faFtfPzyYX11qFMle0+jevC2/ifx/Vope8J1TK/AAAAKHRSTlMAoPz1Lx/h8BBA9nbd7/v4cDxm+FqM6vrogsJP8bTb0bVM9p3F0JWzCOdPYQAABBlJREFUWMPFWOl2qjAQFhRkUcG6oVXb2vYeCYuCS9z1/Z/qJriUJSHBnnvu/GgVYT5m+2YypdJ/FVVVdUFVK+RfX0yz9mWaL0+prujvcr3acN1g5boNTe5Iyd+bNVHcAHDZAnAOPbE2ahfTrTV2jh0TP+iNY3a8eOEaTn8EzrcbUbQ+X3MVK6raFgay1nITuu/i9N6V642SFc6nBJmDkygOa5+mKREByq7rOjObLrtuZETb207pcpgDABZEzzRslszKTeSexWHKkg3JV23XZiMYlbZ31w/vf2AGAPQJAIJjcyDUPfb7o2jUCACyzwFgu+eft09KIqsmBIA6j37bASSdMH3BIyRptTjAlGwNuhAqWVZwuQFgTC0kw4Esf3SCZy0gmbL+ygAMnMIAkO6luZVNIrsIAGRFQswAaPZzLoLpL5AMILW4AWjhTcip8gRR0OoAEozJkIXg2L/KIpj6nCGLt2URAHr+3L8fh+lmYNu/roOEpFtCtSgATL91ypYwRRR7ToAV4HAQ/ndOkoW+4wRobVgxvn3cfiYA3jmTaGmIB0qS5pMFJ1HYe70fsqsskskT3cb2u6XSZM4mikzP4SUKV0czXUgKAMygnqTi3cY38M3DNQ8ZTYEZJ4oVnwGdaCwVcxvm/eolThZvMy4DytdOW9vSGkLcWYc4WXS5DVBUFLFFDo1OiVHmIgq/jgwQsBWjMw8bhYXG0qgGkAHGXkAPeMe8EMDMgMpFFLMuzobA1lD6RdUGc0IAk2TB1W16H8j7BqK7N/SEdWHlUaLn8IylwQBnm3NHWkBmlGMDap2nxlBwP3pXwkOPjE7sKHtFxtIeOuQp3WtfdXGcJ5e8QohMegyoHESxww4S7vcZFeykI4svHmQhBOwMQi+jjGUkZWNmOzih+iKN7DID6mDGDMDPGKV8t25Oqm3yAoAQDxZnt/G1+ClbxRHTPjCtAgYdiXxjqa/p8cNoeR9lEmZ7b503YT8AGERx1f9hVG/i3k6DCg50fmvYqDxjaaS/aaRrMRhjBGuTN0neBtR8ogjesZHGjFzaJesE6X35RhZy7lja+IPfn5RnkQ2lkTinpupxwtFtVtU/HYOcxwGuDtRBz5DmJY+n2zj7gMaFq24TK/i6x5rcc7jHUlKFVzvX/U48nWLeigZU2vnVdwK3cUvNhrtKWbFcRT9qi++I0ZqWtyY4aj0ij6Xo6WpdFjqPZV3lVZC1/SMZlntjLKQ2eVLN2xzSQYjSKEUUs12r/iao2VWAoss957r6GpP3gJ9DcXvM1nKMKBykfKBXqEu3ptzyl62xRL1BGk2uGDE2uo2l2CvdgS4xFoZtw2CsF5W+JYbgcnycZl97LgpXmegV4iaV4ybldTQUvRAAEPZLaoe6eP2lKC+m+dUu/Wv5C9LPlcK1M33yAAAAAElFTkSuQmCC",mC=({user:t,signOut:e})=>Ce(gC,{children:[Ce(vC,{children:[G(wC,{src:gw,alt:"ASSS logo"}),G(yC,{children:"ASSS Chat"})]}),t&&G(hC,{user:t,signOut:e})]}),gC=ie.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  align-items: center;
  padding: 0 16px;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
`,yC=ie.h1`
  color: #227ae7;
`,vC=ie.div`
  display: flex;
  align-items: center;
`,wC=ie.img`
  max-width: 80px;
`;var yw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_g=Pt.createContext&&Pt.createContext(yw),ar=globalThis&&globalThis.__assign||function(){return ar=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ar.apply(this,arguments)},EC=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function vw(t){return t&&t.map(function(e,n){return Pt.createElement(e.tag,ar({key:n},e.attr),vw(e.child))})}function bf(t){return function(e){return Pt.createElement(SC,ar({attr:ar({},t.attr)},e),vw(t.child))}}function SC(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=EC(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Pt.createElement("svg",ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ar(ar({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Pt.createElement("title",null,s),t.children)};return _g!==void 0?Pt.createElement(_g.Consumer,null,function(n){return e(n)}):e(yw)}function _C(t){return bf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"}}]})(t)}function TC(t){return bf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"}}]})(t)}function kC(t){return bf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(t)}const IC=({rooms:t})=>Ce(CC,{children:[G(AC,{children:"Одсек у Аранђеловцу"}),Ce(Tg,{children:[Ce(Nc,{to:"./",children:[G(_C,{}),"Ваше приватне поруке"]}),Ce(Nc,{to:"./profile",children:[G(kC,{}),"Ваш профил"]})]}),Ce(Tg,{children:[G(xC,{children:"Предмети"}),t.map(e=>Ce(Nc,{to:`/chat/${e.id}`,children:["# ",e.name_sr]},e.id))]})]}),CC=ie.div`
  background-color: white;
  overflow-y: auto;
  scrollbar-width: none;
  display: grid;
  grid-template-rows: 64px min-content auto;
  z-index: 9;

  &::-webkit-scrollbar {
    display: none;
  }
`,AC=ie.p`
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  font-size: 1.5rem;
  text-align: center;
  line-height: 65px;
`,Nc=ie(cI)`
  display: block;
  padding: 8px 16px;
  color: #757575;
  transition: background-color 0.25s, color 0.15s, box-shadow 0.15s,
    opacity 0.25s, filter 0.25s, border 0.15s;
  appearance: none;
  text-decoration: none;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
    font-size: 24px;
  }

  &:hover {
    background-color: #ccc;
    color: #000;
  }

  &.active {
    background-color: #1561b9;
    color: white;
  }
`,Tg=ie.div`
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);
`,xC=ie.p`
  padding: 8px 16px;
  margin-top: 24px;
  font-weight: 700;
  color: #757575;
`;/**
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
 *//**
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
 */const ww=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ew={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ww(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},RC=function(t){const e=ww(t);return Ew.encodeByteArray(e,!0)},kl=function(t){return RC(t).replace(/\./g,"")},Sw=function(t){try{return Ew.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PC=()=>DC().__FIREBASE_DEFAULTS__,OC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sw(t[1]);return e&&JSON.parse(e)},Uf=()=>{try{return PC()||OC()||LC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_w=t=>{var e,n;return(n=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$C=t=>{const e=_w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MC=()=>{var t;return(t=Uf())===null||t===void 0?void 0:t.config},Tw=t=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function UC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),a].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function VC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zC(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BC(){try{return typeof indexedDB=="object"}catch{return!1}}function HC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const WC="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WC,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function qC(t,e){return t.replace(KC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KC=/\{\$([^}]+)}/g;function GC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kg(s)&&kg(o)){if(!Il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function QC(t,e){const n=new YC(t,e);return n.subscribe.bind(n)}class YC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rc),i.error===void 0&&(i.error=Rc),i.complete===void 0&&(i.complete=Rc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class JC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eA(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZC(t){return t===Ar?void 0:t}function eA(t){return t.instantiationMode==="EAGER"}/**
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
 */class tA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const nA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},rA=oe.INFO,iA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},sA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=sA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const oA=(t,e)=>e.some(n=>t instanceof n);let Ig,Cg;function aA(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lA(){return Cg||(Cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kw=new WeakMap,Xh=new WeakMap,Iw=new WeakMap,Dc=new WeakMap,Vf=new WeakMap;function uA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kw.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function cA(t){if(Xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xh.set(t,e)}let Jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hA(t){Jh=t(Jh)}function dA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return Iw.set(r,e.sort?e.sort():[e]),lr(r)}:lA().includes(t)?function(...e){return t.apply(Pc(this),e),lr(kw.get(this))}:function(...e){return lr(t.apply(Pc(this),e))}}function fA(t){return typeof t=="function"?dA(t):(t instanceof IDBTransaction&&cA(t),oA(t,aA())?new Proxy(t,Jh):t)}function lr(t){if(t instanceof IDBRequest)return uA(t);if(Dc.has(t))return Dc.get(t);const e=fA(t);return e!==t&&(Dc.set(t,e),Vf.set(e,t)),e}const Pc=t=>Vf.get(t);function pA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],Oc=new Map;function Ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oc.set(e,s),s}hA(t=>({...t,get:(e,n,r)=>Ag(e,n)||t.get(e,n,r),has:(e,n)=>!!Ag(e,n)||t.has(e,n)}));/**
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
 */class yA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zh="@firebase/app",xg="0.9.3";/**
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
 */const Kr=new Ff("@firebase/app"),wA="@firebase/app-compat",EA="@firebase/analytics-compat",SA="@firebase/analytics",_A="@firebase/app-check-compat",TA="@firebase/app-check",kA="@firebase/auth",IA="@firebase/auth-compat",CA="@firebase/database",AA="@firebase/database-compat",xA="@firebase/functions",NA="@firebase/functions-compat",RA="@firebase/installations",DA="@firebase/installations-compat",PA="@firebase/messaging",OA="@firebase/messaging-compat",LA="@firebase/performance",$A="@firebase/performance-compat",MA="@firebase/remote-config",bA="@firebase/remote-config-compat",UA="@firebase/storage",FA="@firebase/storage-compat",VA="@firebase/firestore",jA="@firebase/firestore-compat",zA="firebase",BA="9.17.1";/**
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
 */const ed="[DEFAULT]",HA={[Zh]:"fire-core",[wA]:"fire-core-compat",[SA]:"fire-analytics",[EA]:"fire-analytics-compat",[TA]:"fire-app-check",[_A]:"fire-app-check-compat",[kA]:"fire-auth",[IA]:"fire-auth-compat",[CA]:"fire-rtdb",[AA]:"fire-rtdb-compat",[xA]:"fire-fn",[NA]:"fire-fn-compat",[RA]:"fire-iid",[DA]:"fire-iid-compat",[PA]:"fire-fcm",[OA]:"fire-fcm-compat",[LA]:"fire-perf",[$A]:"fire-perf-compat",[MA]:"fire-rc",[bA]:"fire-rc-compat",[UA]:"fire-gcs",[FA]:"fire-gcs-compat",[VA]:"fire-fst",[jA]:"fire-fst-compat","fire-js":"fire-js",[zA]:"fire-js-all"};/**
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
 */const Cl=new Map,td=new Map;function WA(t,e){try{t.container.addComponent(e)}catch(n){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vi(t){const e=t.name;if(td.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,t);for(const n of Cl.values())WA(n,t);return!0}function jf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const qA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ur=new Lo("app","Firebase",qA);/**
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
 */class KA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=BA;function Cw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=MC()),!n)throw ur.create("no-options");const s=Cl.get(i);if(s){if(Il(n,s.options)&&Il(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new tA(i);for(const l of td.values())o.addComponent(l);const a=new KA(n,r,o);return Cl.set(i,a),a}function Aw(t=ed){const e=Cl.get(t);if(!e&&t===ed)return Cw();if(!e)throw ur.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let i=(r=HA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}Vi(new qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const GA="firebase-heartbeat-database",QA=1,lo="firebase-heartbeat-store";let Lc=null;function xw(){return Lc||(Lc=pA(GA,QA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lo)}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function YA(t){try{return(await xw()).transaction(lo).objectStore(lo).get(Nw(t))}catch(e){if(e instanceof bn)Kr.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kr.warn(n.message)}}}async function Ng(t,e){try{const r=(await xw()).transaction(lo,"readwrite");return await r.objectStore(lo).put(e,Nw(t)),r.done}catch(n){if(n instanceof bn)Kr.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kr.warn(r.message)}}}function Nw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XA=1024,JA=30*24*60*60*1e3;class ZA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rg(),{heartbeatsToSend:n,unsentEntries:r}=ex(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rg(){return new Date().toISOString().substring(0,10)}function ex(t,e=XA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BC()?HC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nx(t){Vi(new qr("platform-logger",e=>new yA(e),"PRIVATE")),Vi(new qr("heartbeat",e=>new ZA(e),"PRIVATE")),cr(Zh,xg,t),cr(Zh,xg,"esm2017"),cr("fire-js","")}nx("");var rx="firebase",ix="9.17.1";/**
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
 */cr(rx,ix,"app");var sx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,zf=zf||{},q=sx||self;function Al(){}function wu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ox(t){return Object.prototype.hasOwnProperty.call(t,$c)&&t[$c]||(t[$c]=++ax)}var $c="closure_uid_"+(1e9*Math.random()>>>0),ax=0;function lx(t,e,n){return t.call.apply(t.bind,arguments)}function ux(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=lx:ht=ux,ht.apply(null,arguments)}function Sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function _r(){this.s=this.s,this.o=this.o}var cx=0;_r.prototype.s=!1;_r.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cx!=0)&&ox(this)};_r.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var hx=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Al,e),q.removeEventListener("test",Al,e)}catch{}return t}();function xl(t){return/^[\s\xa0]*$/.test(t)}var Og=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Mc(t,e){return t<e?-1:t>e?1:0}function Eu(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return Eu().indexOf(t)!=-1}function Hf(t){return Hf[" "](t),t}Hf[" "]=Al;function dx(t){var e=mx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var fx=an("Opera"),ji=an("Trident")||an("MSIE"),Dw=an("Edge"),nd=Dw||ji,Pw=an("Gecko")&&!(Eu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),px=Eu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function Ow(){var t=q.document;return t?t.documentMode:void 0}var Nl;e:{var bc="",Uc=function(){var t=Eu();if(Pw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dw)return/Edge\/([\d\.]+)/.exec(t);if(ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(px)return/WebKit\/(\S+)/.exec(t);if(fx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uc&&(bc=Uc?Uc[1]:""),ji){var Fc=Ow();if(Fc!=null&&Fc>parseFloat(bc)){Nl=String(Fc);break e}}Nl=bc}var mx={};function gx(){return dx(function(){let t=0;const e=Og(String(Nl)).split("."),n=Og("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Mc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Mc(i[2].length==0,s[2].length==0)||Mc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var rd;if(q.document&&ji){var Lg=Ow();rd=Lg||parseInt(Nl,10)||void 0}else rd=void 0;var yx=rd;function uo(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pw){e:{try{Hf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&uo.X.h.call(this)}}nt(uo,dt);var vx={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Uo="closure_listenable_"+(1e6*Math.random()|0),wx=0;function Ex(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++wx,this.ba=this.ea=!1}function Su(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Lw(t){const e={};for(const n in t)e[n]=t[n];return e}const $g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $w(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$g.length;s++)n=$g[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _u(t){this.src=t,this.g={},this.h=0}_u.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sd(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ex(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function id(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Su(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var qf="closure_lm_"+(1e6*Math.random()|0),Vc={};function Mw(t,e,n,r,i){if(r&&r.once)return Uw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mw(t,e[s],n,r,i);return null}return n=Qf(n),t&&t[Uo]?t.N(e,n,bo(r)?!!r.capture:!!r,i):bw(t,e,n,!1,r,i)}function bw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=bo(i)?!!i.capture:!!i,a=Gf(t);if(a||(t[qf]=a=new _u(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Sx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)hx||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Sx(){function t(n){return e.call(t.src,t.listener,n)}const e=_x;return t}function Uw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Uw(t,e[s],n,r,i);return null}return n=Qf(n),t&&t[Uo]?t.O(e,n,bo(r)?!!r.capture:!!r,i):bw(t,e,n,!0,r,i)}function Fw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fw(t,e[s],n,r,i);else r=bo(r)?!!r.capture:!!r,n=Qf(n),t&&t[Uo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sd(s,n,r,i),-1<n&&(Su(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sd(e,n,r,i)),(n=-1<t?e[t]:null)&&Kf(n))}function Kf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Uo])id(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gf(e))?(id(n,t),n.h==0&&(n.src=null,e[qf]=null)):Su(t)}}}function Vw(t){return t in Vc?Vc[t]:Vc[t]="on"+t}function _x(t,e){if(t.ba)t=!0;else{e=new uo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Kf(t),t=n.call(r,e)}return t}function Gf(t){return t=t[qf],t instanceof _u?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qf(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function We(){_r.call(this),this.i=new _u(this),this.P=this,this.I=null}nt(We,_r);We.prototype[Uo]=!0;We.prototype.removeEventListener=function(t,e,n,r){Fw(this,t,e,n,r)};function et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),$w(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_a(o,r,!0,e)&&i}if(o=e.g=t,i=_a(o,r,!0,e)&&i,i=_a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_a(o,r,!1,e)&&i}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Su(n[r]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&id(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yf=q.JSON.stringify;function Tx(){var t=Bw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kx{constructor(){this.h=this.g=null}add(e,n){const r=jw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ix,t=>t.reset());class Ix{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Cx(t){q.setTimeout(()=>{throw t},0)}function zw(t,e){od||Ax(),ad||(od(),ad=!0),Bw.add(t,e)}var od;function Ax(){var t=q.Promise.resolve(void 0);od=function(){t.then(xx)}}var ad=!1,Bw=new kx;function xx(){for(var t;t=Tx();){try{t.h.call(t.g)}catch(n){Cx(n)}var e=jw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ad=!1}function Tu(t,e){We.call(this),this.h=t||1,this.g=e||q,this.j=ht(this.lb,this),this.l=Date.now()}nt(Tu,We);b=Tu.prototype;b.ca=!1;b.R=null;b.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),et(this,"tick"),this.ca&&(Xf(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}b.M=function(){Tu.X.M.call(this),Xf(this),delete this.g};function Jf(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function Hw(t){t.g=Jf(()=>{t.g=null,t.i&&(t.i=!1,Hw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Nx extends _r{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hw(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function co(t){_r.call(this),this.h=t,this.g={}}nt(co,_r);var Mg=[];function Ww(t,e,n,r){Array.isArray(n)||(n&&(Mg[0]=n.toString()),n=Mg);for(var i=0;i<n.length;i++){var s=Mw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qw(t){Wf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kf(e)},t),t.g={}}co.prototype.M=function(){co.X.M.call(this),qw(this)};co.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ku(){this.g=!0}ku.prototype.Aa=function(){this.g=!1};function Rx(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Dx(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ox(t,n)+(r?" "+r:"")})}function Px(t,e){t.info(function(){return"TIMEOUT: "+e})}ku.prototype.info=function(){};function Ox(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yf(n)}catch{return e}}var Zr={},bg=null;function Iu(){return bg=bg||new We}Zr.Pa="serverreachability";function Kw(t){dt.call(this,Zr.Pa,t)}nt(Kw,dt);function ho(t){const e=Iu();et(e,new Kw(e))}Zr.STAT_EVENT="statevent";function Gw(t,e){dt.call(this,Zr.STAT_EVENT,t),this.stat=e}nt(Gw,dt);function vt(t){const e=Iu();et(e,new Gw(e,t))}Zr.Qa="timingevent";function Qw(t,e){dt.call(this,Zr.Qa,t),this.size=e}nt(Qw,dt);function Fo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Cu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zf(){}Zf.prototype.h=null;function Ug(t){return t.h||(t.h=t.i())}function Xw(){}var Vo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ep(){dt.call(this,"d")}nt(ep,dt);function tp(){dt.call(this,"c")}nt(tp,dt);var ld;function Au(){}nt(Au,Zf);Au.prototype.g=function(){return new XMLHttpRequest};Au.prototype.i=function(){return{}};ld=new Au;function jo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new co(this),this.O=Lx,t=nd?125:void 0,this.T=new Tu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jw}function Jw(){this.i=null,this.g="",this.h=!1}var Lx=45e3,ud={},Rl={};b=jo.prototype;b.setTimeout=function(t){this.O=t};function cd(t,e,n){t.K=1,t.v=Nu(Dn(e)),t.s=n,t.P=!0,Zw(t,null)}function Zw(t,e){t.F=Date.now(),zo(t),t.A=Dn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),a1(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Jw,t.g=x1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Nx(ht(t.La,t,t.g),t.N)),Ww(t.S,t.g,"readystatechange",t.ib),e=t.H?Lw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ho(),Rx(t.j,t.u,t.A,t.m,t.U,t.s)}b.ib=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.La(t)};b.La=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||nd||this.g&&(this.h.h||this.g.fa()||zg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ho(3):ho(2)),xu(this);var n=this.g.aa();this.Y=n;t:if(e1(this)){var r=zg(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Ms(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dx(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xl(a)){var u=a;break t}}u=null}if(n=u)wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hd(this,n);else{this.i=!1,this.o=3,vt(12),Dr(this),Ms(this);break e}}this.P?(t1(this,c,o),nd&&this.i&&c==3&&(Ww(this.S,this.T,"tick",this.hb),this.T.start())):(wi(this.j,this.m,o,null),hd(this,o)),c==4&&Dr(this),this.i&&!this.I&&(c==4?k1(this.l,this):(this.i=!1,zo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Dr(this),Ms(this)}}}catch{}finally{}};function e1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function t1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=$x(t,n),i==Rl){e==4&&(t.o=4,vt(14),r=!1),wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ud){t.o=4,vt(15),wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else wi(t.j,t.m,i,null),hd(t,i);e1(t)&&i!=Rl&&i!=ud&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lp(e),e.K=!0,vt(11))):(wi(t.j,t.m,n,"[Invalid Chunked Response]"),Dr(t),Ms(t))}b.hb=function(){if(this.g){var t=_n(this.g),e=this.g.fa();this.C<e.length&&(xu(this),t1(this,t,e),this.i&&t!=4&&zo(this))}};function $x(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Rl:(n=Number(e.substring(n,r)),isNaN(n)?ud:(r+=1,r+n>e.length?Rl:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,Dr(this)};function zo(t){t.V=Date.now()+t.O,n1(t,t.O)}function n1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fo(ht(t.gb,t),e)}function xu(t){t.B&&(q.clearTimeout(t.B),t.B=null)}b.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Px(this.j,this.A),this.K!=2&&(ho(),vt(17)),Dr(this),this.o=2,Ms(this)):n1(this,this.V-t)};function Ms(t){t.l.G==0||t.I||k1(t.l,t)}function Dr(t){xu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xf(t.T),qw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||dd(n.h,t))){if(!t.J&&dd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ol(n),Pu(n);else break e;ap(n),vt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fo(ht(n.cb,n),6e3));if(1>=c1(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Pr(n,11)}else if((t.J||n.g==t)&&Ol(n),!xl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(np(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ee(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=A1(r,r.H?r.ka:null,r.V),o.J){h1(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(xu(a),zo(a)),r.g=o}else _1(r);0<n.i.length&&Ou(n)}else u[0]!="stop"&&u[0]!="close"||Pr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pr(n,7):op(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ho(4)}catch{}}function Mx(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function r1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bx(t),r=Mx(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var i1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ux(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function br(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof br){this.h=e!==void 0?e:t.h,Dl(this,t.j),this.s=t.s,this.g=t.g,Pl(this,t.m),this.l=t.l,e=t.i;var n=new fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fg(this,n),this.o=t.o}else t&&(n=String(t).match(i1))?(this.h=!!e,Dl(this,n[1]||"",!0),this.s=_s(n[2]||""),this.g=_s(n[3]||"",!0),Pl(this,n[4]),this.l=_s(n[5]||"",!0),Fg(this,n[6]||"",!0),this.o=_s(n[7]||"")):(this.h=!!e,this.i=new fo(null,this.h))}br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ts(e,Vg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ts(e,Vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ts(n,n.charAt(0)=="/"?jx:Vx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ts(n,Bx)),t.join("")};function Dn(t){return new br(t)}function Dl(t,e,n){t.j=n?_s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fg(t,e,n){e instanceof fo?(t.i=e,Hx(t.i,t.h)):(n||(e=Ts(e,zx)),t.i=new fo(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Nu(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vg=/[#\/\?@]/g,Vx=/[#\?:]/g,jx=/[#\?]/g,zx=/[#\?@]/g,Bx=/#/g;function fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&Ux(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=fo.prototype;b.add=function(t,e){Tr(this),this.i=null,t=es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function s1(t,e){Tr(t),e=es(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function o1(t,e){return Tr(t),e=es(t,e),t.g.has(e)}b.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.oa=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.W=function(t){Tr(this);let e=[];if(typeof t=="string")o1(this,t)&&(e=e.concat(this.g.get(es(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Tr(this),this.i=null,t=es(this,t),o1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function a1(t,e,n){s1(t,e),0<n.length&&(t.i=null,t.g.set(es(t,e),Bf(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Hx(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(s1(this,r),a1(this,i,n))},t)),t.j=e}var Wx=class{constructor(e,n){this.h=e,this.g=n}};function l1(t){this.l=t||qx,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qx=10;function u1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function c1(t){return t.h?1:t.g?t.g.size:0}function dd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function np(t,e){t.g?t.g.add(e):t.h=e}function h1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}l1.prototype.cancel=function(){if(this.i=d1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function d1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bf(t.i)}function rp(){}rp.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};rp.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function Kx(){this.g=new rp}function Gx(t,e,n){const r=n||"";try{r1(t,function(i,s){let o=i;bo(i)&&(o=Yf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Qx(t,e){const n=new ku;if(q.Image){const r=new Image;r.onload=Sa(Ta,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Sa(Ta,n,r,"TestLoadImage: error",!1,e),r.onabort=Sa(Ta,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Sa(Ta,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ta(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Bo(t){this.l=t.ac||null,this.j=t.jb||!1}nt(Bo,Zf);Bo.prototype.g=function(){return new Ru(this.l,this.j)};Bo.prototype.i=function(t){return function(){return t}}({});function Ru(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ip,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Ru,We);var ip=0;b=Ru.prototype;b.open=function(t,e){if(this.readyState!=ip)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=ip};b.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;f1(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function f1(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}b.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ho(this):po(this),this.readyState==3&&f1(this)}};b.Va=function(t){this.g&&(this.response=this.responseText=t,Ho(this))};b.Ua=function(t){this.g&&(this.response=t,Ho(this))};b.ga=function(){this.g&&Ho(this)};function Ho(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Yx=q.JSON.parse;function Ae(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=p1,this.K=this.L=!1}nt(Ae,We);var p1="",Xx=/^https?$/i,Jx=["POST","PUT"];b=Ae.prototype;b.Ka=function(t){this.L=t};b.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ld.g(),this.C=this.u?Ug(this.u):Ug(ld),this.g.onreadystatechange=ht(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){jg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=Rw(Jx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{y1(this),0<this.B&&((this.K=Zx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.qa,this)):this.A=Jf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){jg(this,s)}};function Zx(t){return ji&&gx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.qa=function(){typeof zf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function jg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,m1(t),Du(t)}function m1(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Du(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Du(this,!0)),Ae.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?g1(this):this.fb())};b.fb=function(){g1(this)};function g1(t){if(t.h&&typeof zf<"u"&&(!t.C[1]||_n(t)!=4||t.aa()!=2)){if(t.v&&_n(t)==4)Jf(t.Ha,0,t);else if(et(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(i1)[1]||null;if(!i&&q.self&&q.self.location){var s=q.self.location.protocol;i=s.substr(0,s.length-1)}r=!Xx.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",m1(t)}}finally{Du(t)}}}}function Du(t,e){if(t.g){y1(t);const n=t.g,r=t.C[0]?Al:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function y1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}b.aa=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Yx(e)}};function zg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case p1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function v1(t){let e="";return Wf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=v1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function w1(t){this.Ca=0,this.i=[],this.j=new ku,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ys("baseRetryDelayMs",5e3,t),this.bb=ys("retryDelaySeedMs",1e4,t),this.$a=ys("forwardChannelMaxRetries",2,t),this.ta=ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new l1(t&&t.concurrentRequestLimit),this.Fa=new Kx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=w1.prototype;b.ma=8;b.G=1;function op(t){if(E1(t),t.G==3){var e=t.U++,n=Dn(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Wo(t,n),e=new jo(t,t.j,e,void 0),e.K=2,e.v=Nu(Dn(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=x1(e.l,null),e.g.da(e.v)),e.F=Date.now(),zo(e)}C1(t)}function Pu(t){t.g&&(lp(t),t.g.cancel(),t.g=null)}function E1(t){Pu(t),t.u&&(q.clearTimeout(t.u),t.u=null),Ol(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Ou(t){u1(t.h)||t.m||(t.m=!0,zw(t.Ja,t),t.C=0)}function eN(t,e){return c1(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Fo(ht(t.Ja,t,e),I1(t,t.C)),t.C++,!0)}b.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new jo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Lw(s),$w(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=S1(this,i,e),n=Dn(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Wo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(v1(s)))+"&"+e:this.o&&sp(n,this.o,s)),np(this.h,i),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),i.Z=!0,cd(i,n,null)):cd(i,n,e),this.G=2}}else this.G==3&&(t?Bg(this,t):this.i.length==0||u1(this.h)||Bg(this))};function Bg(t,e){var n;e?n=e.m:n=t.U++;const r=Dn(t.F);Ee(r,"SID",t.I),Ee(r,"RID",n),Ee(r,"AID",t.T),Wo(t,r),t.o&&t.s&&sp(r,t.o,t.s),n=new jo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=S1(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),np(t.h,n),cd(n,r,e)}function Wo(t,e){t.ia&&Wf(t.ia,function(n,r){Ee(e,r,n)}),t.l&&r1({},function(n,r){Ee(e,r,n)})}function S1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ht(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{Gx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function _1(t){t.g||t.u||(t.Z=1,zw(t.Ia,t),t.A=0)}function ap(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Fo(ht(t.Ia,t),I1(t,t.A)),t.A++,!0)}b.Ia=function(){if(this.u=null,T1(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Fo(ht(this.eb,this),t)}};b.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),Pu(this),T1(this))};function lp(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function T1(t){t.g=new jo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Dn(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),Wo(t,e),t.o&&t.s&&sp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nu(Dn(e)),n.s=null,n.P=!0,Zw(n,t)}b.cb=function(){this.v!=null&&(this.v=null,Pu(this),ap(this),vt(19))};function Ol(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function k1(t,e){var n=null;if(t.g==e){Ol(t),lp(t),t.g=null;var r=2}else if(dd(t.h,e))n=e.D,h1(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Iu(),et(r,new Qw(r,n)),Ou(t)}else _1(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&eN(t,e)||r==2&&ap(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Pr(t,5);break;case 4:Pr(t,10);break;case 3:Pr(t,6);break;default:Pr(t,2)}}}function I1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Pr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ht(t.kb,t);n||(n=new br("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Dl(n,"https"),Nu(n)),Qx(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),C1(t),E1(t)}b.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function C1(t){if(t.G=0,t.la=[],t.l){const e=d1(t.h);(e.length!=0||t.i.length!=0)&&(Pg(t.la,e),Pg(t.la,t.i),t.h.i.length=0,Bf(t.i),t.i.length=0),t.l.ua()}}function A1(t,e,n){var r=n instanceof br?Dn(n):new br(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Pl(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new br(null,void 0);r&&Dl(s,r),e&&(s.g=e),i&&Pl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ma),Wo(t,r),r}function x1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ae(new Bo({jb:!0})):new Ae(t.ra),e.Ka(t.H),e}function N1(){}b=N1.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Ra=function(){};function Ll(){if(ji&&!(10<=Number(yx)))throw Error("Environmental error: no available transport.")}Ll.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){We.call(this),this.g=new w1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ts(this)}nt(Mt,We);Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=A1(t,null,t.V),Ou(t)};Mt.prototype.close=function(){op(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yf(t),t=n);e.i.push(new Wx(e.ab++,t)),e.G==3&&Ou(e)};Mt.prototype.M=function(){this.g.l=null,delete this.j,op(this.g),delete this.g,Mt.X.M.call(this)};function R1(t){ep.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(R1,ep);function D1(){tp.call(this),this.status=1}nt(D1,tp);function ts(t){this.g=t}nt(ts,N1);ts.prototype.xa=function(){et(this.g,"a")};ts.prototype.wa=function(t){et(this.g,new R1(t))};ts.prototype.va=function(t){et(this.g,new D1)};ts.prototype.ua=function(){et(this.g,"b")};Ll.prototype.createWebChannel=Ll.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Cu.NO_ERROR=0;Cu.TIMEOUT=8;Cu.HTTP_ERROR=6;Yw.COMPLETE="complete";Xw.EventType=Vo;Vo.OPEN="a";Vo.CLOSE="b";Vo.ERROR="c";Vo.MESSAGE="d";We.prototype.listen=We.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.Oa;Ae.prototype.getLastErrorCode=Ae.prototype.Ea;Ae.prototype.getStatus=Ae.prototype.aa;Ae.prototype.getResponseJson=Ae.prototype.Sa;Ae.prototype.getResponseText=Ae.prototype.fa;Ae.prototype.send=Ae.prototype.da;Ae.prototype.setWithCredentials=Ae.prototype.Ka;var tN=function(){return new Ll},nN=function(){return Iu()},zc=Cu,rN=Yw,iN=Zr,Hg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},sN=Bo,ka=Xw,oN=Ae;const Wg="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let ns="9.17.1";/**
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
 */const Gr=new Ff("@firebase/firestore");function qg(){return Gr.logLevel}function U(t,...e){if(Gr.logLevel<=oe.DEBUG){const n=e.map(up);Gr.debug(`Firestore (${ns}): ${t}`,...n)}}function Pn(t,...e){if(Gr.logLevel<=oe.ERROR){const n=e.map(up);Gr.error(`Firestore (${ns}): ${t}`,...n)}}function fd(t,...e){if(Gr.logLevel<=oe.WARN){const n=e.map(up);Gr.warn(`Firestore (${ns}): ${t}`,...n)}}function up(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function me(t,e){t||z()}function Y(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class P1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class lN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uN{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new P1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class cN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class hN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new cN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new dN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function pN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class O1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Le(0,0))}static max(){return new Q(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends mo{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const mN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends mo{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return mN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ye.fromString(e))}static fromName(e){return new F(ye.fromString(e).popFirst(5))}static empty(){return new F(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ye(e.slice()))}}function gN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new mr(i,F.empty(),e)}function yN(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(Q.min(),F.empty(),-1)}static max(){return new mr(Q.max(),F.empty(),-1)}}function vN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const wN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==wN)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ko(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}cp.at=-1;/**
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
 */class SN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class go{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new go("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof go&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Lu(t){return t==null}function $l(t){return t===0&&1/t==-1/0}function _N(t){return typeof t=="number"&&Number.isInteger(t)&&!$l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const TN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(me(!!t),typeof t=="string"){let e=0;const n=TN.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function $1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function M1(t){const e=t.mapValue.fields.__previous_value__;return $1(e)?M1(e):e}function yo(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$1(t)?4:kN(t)?9007199254740991:10:z()}function pn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yo(t).isEqual(yo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=gr(r.timestampValue),o=gr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Bi(r.bytesValue).isEqual(Bi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return De(r.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return De(r.integerValue)===De(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=De(r.doubleValue),o=De(i.doubleValue);return s===o?$l(s)===$l(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Kg(s)!==Kg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pn(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function vo(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=De(i.integerValue||i.doubleValue),a=De(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gg(t.timestampValue,e.timestampValue);case 4:return Gg(yo(t),yo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Bi(i),a=Bi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ue(o[l],a[l]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ue(De(i.latitude),De(s.latitude));return o!==0?o:ue(De(i.longitude),De(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Hi(o[l],a[l]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ia.mapValue&&s===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(s===Ia.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ue(a[c],u[c]);if(h!==0)return h;const f=Hi(o[a[c]],l[u[c]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=gr(t),r=gr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Wi(t){return pd(t)}function pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=gr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=pd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${pd(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function Qg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function md(t){return!!t&&"integerValue"in t}function hp(t){return!!t&&"arrayValue"in t}function Yg(t){return!!t&&"nullValue"in t}function Xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ja(t){return!!t&&"mapValue"in t}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ml{constructor(e,n){this.position=e,this.inclusive=n}}function Jg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Hi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class b1{}class Oe extends b1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CN(e,n,r):n==="array-contains"?new NN(e,r):n==="in"?new RN(e,r):n==="not-in"?new DN(e,r):n==="array-contains-any"?new PN(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AN(e,r):new xN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nn extends b1{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new nn(e,n)}matches(e){return U1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function U1(t){return t.op==="and"}function F1(t){return IN(t)&&U1(t)}function IN(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function gd(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(F1(t))return t.filters.map(e=>gd(e)).join(",");{const e=t.filters.map(n=>gd(n)).join(",");return`${t.op}(${e})`}}function V1(t,e){return t instanceof Oe?function(n,r){return r instanceof Oe&&n.op===r.op&&n.field.isEqual(r.field)&&pn(n.value,r.value)}(t,e):t instanceof nn?function(n,r){return r instanceof nn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&V1(s,r.filters[o]),!0):!1}(t,e):void z()}function j1(t){return t instanceof Oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Wi(e.value)}`}(t):t instanceof nn?function(e){return e.op.toString()+" {"+e.getFilters().map(j1).join(" ,")+"}"}(t):"Filter"}class CN extends Oe{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class AN extends Oe{constructor(e,n){super(e,"in",n),this.keys=z1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xN extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=z1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class NN extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hp(n)&&vo(n.arrayValue,this.value)}}class RN extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class DN extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class PN extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
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
 */class Ci{constructor(e,n="asc"){this.field=e,this.dir=n}}function ON(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new Fe(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=bs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(bs(this.value))}}function B1(t){const e=[];return rs(t.fields,(n,r)=>{const i=new ct([n]);if(ja(r)){const s=B1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
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
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Q.min(),Q.min(),Q.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Q.min(),Q.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Q.min(),Q.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class LN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function ty(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LN(t,e,n,r,i,s,o)}function dp(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.ft=n}return e.ft}function fp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ON(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zg(t.startAt,e.startAt)&&Zg(t.endAt,e.endAt)}function yd(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class is{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function $N(t,e,n,r,i,s,o,a){return new is(t,e,n,r,i,s,o,a)}function pp(t){return new is(t)}function ny(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $u(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function H1(t){return t.collectionGroup!==null}function Ai(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=$u(e),r=mp(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ci(n)),e.dt.push(new Ci(ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ci(ct.keyField(),s))}}}return e.dt}function On(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=ty(e.path,e.collectionGroup,Ai(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ai(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ci(s.field,o))}const r=e.endAt?new Ml(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ml(e.startAt.position,e.startAt.inclusive):null;e._t=ty(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function vd(t,e){e.getFirstInequalityField(),$u(t);const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wd(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return fp(On(t),On(e))&&t.limitType===e.limitType}function W1(t){return`${dp(On(t))}|lt:${t.limitType}`}function Ed(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>j1(r)).join(", ")}]`),Lu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),`Target(${n})`}(On(t))}; limitType=${t.limitType})`}function bu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ai(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ai(n),r)||n.endAt&&!function(i,s,o){const a=Jg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ai(n),r))}(t,e)}function MN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q1(t){return(e,n)=>{let r=!1;for(const i of Ai(t)){const s=bN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bN(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Hi(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */function K1(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$l(e)?"-0":e}}function G1(t){return{integerValue:""+t}}function UN(t,e){return _N(e)?G1(e):K1(t,e)}/**
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
 */class Uu{constructor(){this._=void 0}}function FN(t,e,n){return t instanceof bl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof wo?Y1(t,e):t instanceof Eo?X1(t,e):function(r,i){const s=Q1(r,i),o=ry(s)+ry(r.gt);return md(s)&&md(r.gt)?G1(o):K1(r.yt,o)}(t,e)}function VN(t,e,n){return t instanceof wo?Y1(t,e):t instanceof Eo?X1(t,e):n}function Q1(t,e){return t instanceof Ul?md(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class bl extends Uu{}class wo extends Uu{constructor(e){super(),this.elements=e}}function Y1(t,e){const n=J1(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Eo extends Uu{constructor(e){super(),this.elements=e}}function X1(t,e){let n=J1(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Ul extends Uu{constructor(e,n){super(),this.yt=e,this.gt=n}}function ry(t){return De(t.integerValue||t.doubleValue)}function J1(t){return hp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof wo&&r instanceof wo||n instanceof Eo&&r instanceof Eo?zi(n.elements,r.elements,pn):n instanceof Ul&&r instanceof Ul?pn(n.gt,r.gt):n instanceof bl&&r instanceof bl}(t.transform,e.transform)}class zN{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fu{}function Z1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tE(t.key,Cn.none()):new Go(t.key,t.data,Cn.none());{const n=t.data,r=zt.empty();let i=new Fe(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ei(t.key,r,new Jt(i.toArray()),Cn.none())}}function BN(t,e,n){t instanceof Go?function(r,i,s){const o=r.value.clone(),a=sy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(r,i,s){if(!za(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(eE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Us(t,e,n,r){return t instanceof Go?function(i,s,o,a){if(!za(i.precondition,s))return o;const l=i.value.clone(),u=oy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(i,s,o,a){if(!za(i.precondition,s))return o;const l=oy(i.fieldTransforms,a,s),u=s.data;return u.setAll(eE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return za(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function HN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q1(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&zi(n,r,(i,s)=>jN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends Fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ei extends Fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sy(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,VN(o,a,n[i]))}return r}function oy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,FN(s,o,e))}return r}class tE extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WN extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qN{constructor(e){this.count=e}}/**
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
 */var Re,ne;function KN(t){switch(t){default:return z();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function nE(t){if(t===void 0)return Pn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Re.OK:return _.OK;case Re.CANCELLED:return _.CANCELLED;case Re.UNKNOWN:return _.UNKNOWN;case Re.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Re.INTERNAL:return _.INTERNAL;case Re.UNAVAILABLE:return _.UNAVAILABLE;case Re.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Re.NOT_FOUND:return _.NOT_FOUND;case Re.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Re.ABORTED:return _.ABORTED;case Re.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Re.DATA_LOSS:return _.DATA_LOSS;default:return z()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return L1(this.inner)}size(){return this.innerSize}}/**
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
 */const GN=new Ve(F.comparator);function Ln(){return GN}const rE=new Ve(F.comparator);function ks(...t){let e=rE;for(const n of t)e=e.insert(n.key,n);return e}function iE(t){let e=rE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return Fs()}function sE(){return Fs()}function Fs(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const QN=new Ve(F.comparator),YN=new Fe(F.comparator);function Z(...t){let e=YN;for(const n of t)e=e.add(n);return e}const XN=new Fe(ue);function oE(){return XN}/**
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
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(Q.min(),i,oE(),Ln(),Z())}}class Qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qo(r,n,Z(),Z(),Z())}}/**
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
 */class Ba{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class aE{constructor(e,n){this.targetId=e,this.Et=n}}class lE{constructor(e,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ay{constructor(){this.At=0,this.Rt=uy(),this.bt=mt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Z(),n=Z(),r=Z();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Qo(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=uy()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class JN{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ln(),this.qt=ly(),this.Ut=new Fe(ue)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(yd(s))if(r===0){const o=new F(s.path);this.Qt(n,o,ut.newNoDocument(o,Q.min()))}else me(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&yd(a.target)){const l=new F(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ut.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=Z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.Ut,this.Lt,r);return this.Lt=Ln(),this.qt=ly(),this.Ut=new Fe(ue),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new ay,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Fe(ue),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new ay),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function ly(){return new Ve(F.comparator)}function uy(){return new Ve(F.comparator)}/**
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
 */const ZN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),tR=(()=>({and:"AND",or:"OR"}))();class nR{constructor(e,n){this.databaseId=e,this.wt=n}}function Fl(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uE(t,e){return t.wt?e.toBase64():e.toUint8Array()}function rR(t,e){return Fl(t,e.toTimestamp())}function hn(t){return me(!!t),Q.fromTimestamp(function(e){const n=gr(e);return new Le(n.seconds,n.nanos)}(t))}function gp(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cE(t){const e=ye.fromString(t);return me(pE(e)),e}function Sd(t,e){return gp(t.databaseId,e.path)}function Bc(t,e){const n=cE(e);if(n.get(1)!==t.databaseId.projectId)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(hE(n))}function _d(t,e){return gp(t.databaseId,e)}function iR(t){const e=cE(t);return e.length===4?ye.emptyPath():hE(e)}function Td(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hE(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cy(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function sR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(me(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:nE(l.code);return new M(u,l.message||"")}(o);n=new lE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bc(t,r.document.name),s=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):Q.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ba(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bc(t,r.document),s=r.readTime?hn(r.readTime):Q.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bc(t,r.document),s=r.removedTargetIds||[];n=new Ba([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new qN(i),o=r.targetId;n=new aE(o,s)}}return n}function oR(t,e){let n;if(e instanceof Go)n={update:cy(t,e.key,e.value)};else if(e instanceof tE)n={delete:Sd(t,e.key)};else if(e instanceof ei)n={update:cy(t,e.key,e.data),updateMask:mR(e.fieldMask)};else{if(!(e instanceof WN))return z();n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof bl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof wo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Eo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ul)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:rR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function aR(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?hn(r.updateTime):hn(i);return s.isEqual(Q.min())&&(s=hn(i)),new zN(s,r.transformResults||[])}(n,e))):[]}function lR(t,e){return{documents:[_d(t,e.path)]}}function uR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_d(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_d(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return fE(nn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ii(c.field),direction:dR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||Lu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function cR(t){let e=iR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=dE(c);return h instanceof nn&&F1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ci(si(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Lu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new Ml(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new Ml(f,h)}(n.endAt)),$N(e,i,o,s,a,"F",l,u)}function hR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function dE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=si(e.unaryFilter.field);return Oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=si(e.unaryFilter.field);return Oe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(e.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=si(e.unaryFilter.field);return Oe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return Oe.create(si(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nn.create(e.compositeFilter.filters.map(n=>dE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function dR(t){return ZN[t]}function fR(t){return eR[t]}function pR(t){return tR[t]}function ii(t){return{fieldPath:t.canonicalString()}}function si(t){return ct.fromServerFormat(t.fieldPath)}function fE(t){return t instanceof Oe?function(e){if(e.op==="=="){if(Xg(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NAN"}};if(Yg(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xg(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NOT_NAN"}};if(Yg(e.value))return{unaryFilter:{field:ii(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(e.field),op:fR(e.op),value:e.value}}}(t):t instanceof nn?function(e){const n=e.getFilters().map(r=>fE(r));return n.length===1?n[0]:{compositeFilter:{op:pR(e.op),filters:n}}}(t):z()}function mR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Z1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,r)=>iy(n,r))&&zi(this.baseMutations,e.baseMutations,(n,r)=>iy(n,r))}}class yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=QN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yp(e,n,r,i)}}/**
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
 */class yR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ur{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=mt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class vR{constructor(e){this.ie=e}}function wR(t){const e=cR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class ER{constructor(){this.Je=new SR}addToCollectionParentIndex(e,n){return this.Je.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(mr.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class SR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(ye.comparator)).toArray()}}/**
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
 */class qi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new qi(0)}static vn(){return new qi(-1)}}/**
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
 */class _R{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Us(r.mutation,i,Jt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ks();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ln();const o=Fs(),a=Fs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ei)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Us(c.mutation,u,c.mutation.getFieldMask(),Le.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new TR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Fs();let i=new Ve((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=sE();c.forEach(f=>{if(!s.has(f)){const g=Z1(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):H1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Or());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Z())).next(c=>({batchId:a,changes:iE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=ks();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ks();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new is(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ut.newInvalidDocument(u)))});let o=ks();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Us(u.mutation,l,Jt.empty(),Le.now()),bu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class IR{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:hn(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:wR(r.bundledQuery),readTime:hn(r.readTime)}}(n)),I.resolve()}}/**
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
 */class CR{constructor(){this.overlays=new Ve(F.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Or(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Or(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yR(n,r));let s=this.es.get(n);s===void 0&&(s=Z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class vp{constructor(){this.ns=new Fe(ze.ss),this.rs=new Fe(ze.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ze(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ze(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new F(new ye([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new F(new ye([])),r=new ze(n,e),i=new ze(n,e+1);let s=Z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return F.comparator(e.key,n.key)||ue(e._s,n._s)}static os(e,n){return ue(e._s,n._s)||F.comparator(e.key,n.key)}}/**
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
 */class AR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Fe(ze.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ue);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),I.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new ze(new F(s),0);let a=new Fe(ue);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return I.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ze(n,0),i=this.gs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xR{constructor(e){this.Es=e,this.docs=new Ve(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ln();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vN(yN(c),r)<=0||(i.has(c.key)||bu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){z()}As(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NR(this)}getSize(e){return I.resolve(this.size)}}class NR extends _R{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class RR{constructor(e){this.persistence=e,this.Rs=new ss(n=>dp(n),fp),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new vp,this.targetCount=0,this.vs=qi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
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
 */class DR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new cp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new RR(this),this.indexManager=new ER,this.remoteDocumentCache=function(r){return new xR(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new vR(n),this.Ns=new IR(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new AR(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new PR(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return I.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class PR extends EN{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Fs=new vp,this.$s=null}static Bs(e){return new wp(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,r=>{const i=F.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Ep{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ep(e,n.fromCache,r,i)}}/**
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
 */class OR{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(ny(n))return I.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wd(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,wd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return ny(n)||i.isEqual(Q.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(qg()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ed(n)),this.Bi(e,o,n,gN(i,-1)))})}Fi(e,n){let r=new Fe(q1(e));return n.forEach((i,s)=>{bu(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return qg()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ed(n)),this.Ni.getDocumentsMatchingQuery(e,n,mr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class LR{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ve(ue),this.Ui=new ss(s=>dp(s),fp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function $R(t,e,n,r){return new LR(t,e,n,r)}async function mE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function MR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=I.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);me(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function bR(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,S){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Ln(),u=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(UR(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function UR(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ln();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function FR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Ur(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function kd(t,e,n){const r=Y(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ko(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function hy(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Y(a),h=c.Ui.get(u);return h!==void 0?I.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(a=>(jR(r,MN(e),a),{documents:a,Hi:s})))}function jR(t,e,n){let r=t.Ki.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class dy{constructor(){this.activeTargetIds=oE()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zR{constructor(){this.Lr=new dy,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BR{Ur(e){}shutdown(){}}/**
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
 */class fy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class WR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class qR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw fd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=HR[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new oN;a.setWithCredentials(!0),a.listenOnce(rN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zc.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),s(u);break;case zc.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new M(_.DEADLINE_EXCEEDED,"Request time out"));break;case zc.HTTP_ERROR:const c=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(v)>=0?v:_.UNKNOWN}(f.status);o(new M(g,f.message))}else o(new M(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(_.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=tN(),o=nN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new WR({Hr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,S)=>{y.listen(v,p=>{try{S(p)}catch(d){setTimeout(()=>{throw d},0)}})};return g(u,ka.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,ka.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.io())}),g(u,ka.EventType.ERROR,y=>{h||(h=!0,fd("Connection","WebChannel transport errored:",y),f.io(new M(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,ka.EventType.MESSAGE,y=>{var v;if(!h){const S=y.data[0];me(!!S);const p=S,d=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(d){U("Connection","WebChannel received error:",d);const m=d.status;let w=function(R){const D=Re[R];if(D!==void 0)return nE(D)}(m),T=d.message;w===void 0&&(w=_.INTERNAL,T="Unknown error status: "+m+" with message "+d.message),h=!0,f.io(new M(w,T)),u.close()}else U("Connection","WebChannel received:",S),f.ro(S)}}),g(o,iN.STAT_EVENT,y=>{y.stat===Hg.PROXY?U("Connection","Detected buffering proxy"):y.stat===Hg.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Hc(){return typeof document<"u"?document:null}/**
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
 */function ju(t){return new nR(t,!0)}class yE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class vE{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new yE(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new M(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KR extends vE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=sR(this.yt,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?hn(s.readTime):Q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Td(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=yd(a)?{documents:lR(i,a)}:{query:uR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=uE(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Fl(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=hR(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Td(this.yt),n.removeTarget=e,this.Bo(n)}}class GR extends vE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=aR(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.Zo(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Td(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oR(this.yt,r))};this.Bo(n)}}/**
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
 */class QR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(_.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class YR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Pn(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class XR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{ti(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Y(a);l._u.add(4),await Yo(l),l.gu.set("Unknown"),l._u.delete(4),await zu(l)}(this))})}),this.gu=new YR(r,i)}}async function zu(t){if(ti(t))for(const e of t.wu)await e(!0)}async function Yo(t){for(const e of t.wu)await e(!1)}function wE(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Tp(n)?_p(n):os(n).ko()&&Sp(n,e))}function EE(t,e){const n=Y(t),r=os(n);n.du.delete(e),r.ko()&&SE(n,e),n.du.size===0&&(r.ko()?r.Fo():ti(n)&&n.gu.set("Unknown"))}function Sp(t,e){t.yu.Ot(e.targetId),os(t).zo(e)}function SE(t,e){t.yu.Ot(e),os(t).Ho(e)}function _p(t){t.yu=new JN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),os(t).start(),t.gu.uu()}function Tp(t){return ti(t)&&!os(t).No()&&t.du.size>0}function ti(t){return Y(t)._u.size===0}function _E(t){t.yu=void 0}async function JR(t){t.du.forEach((e,n)=>{Sp(t,e)})}async function ZR(t,e){_E(t),Tp(t)?(t.gu.hu(e),_p(t)):t.gu.set("Unknown")}async function eD(t,e,n){if(t.gu.set("Online"),e instanceof lE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof Ba?t.yu.Kt(e):e instanceof aE?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Q.min()))try{const r=await gE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(mt.EMPTY_BYTE_STRING,l.snapshotVersion)),SE(i,a);const u=new Ur(l.target,a,1,l.sequenceNumber);Sp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!Ko(e))throw e;t._u.add(1),await Yo(t),t.gu.set("Offline"),n||(n=()=>gE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await zu(t)})}function TE(t,e){return e().catch(n=>Vl(t,n,e))}async function Bu(t){const e=Y(t),n=yr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;tD(e);)try{const i=await FR(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,nD(e,i)}catch(i){await Vl(e,i)}kE(e)&&IE(e)}function tD(t){return ti(t)&&t.fu.length<10}function nD(t,e){t.fu.push(e);const n=yr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function kE(t){return ti(t)&&!yr(t).No()&&t.fu.length>0}function IE(t){yr(t).start()}async function rD(t){yr(t).eu()}async function iD(t){const e=yr(t);for(const n of t.fu)e.Xo(n.mutations)}async function sD(t,e,n){const r=t.fu.shift(),i=yp.from(r,e,n);await TE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bu(t)}async function oD(t,e){e&&yr(t).Yo&&await async function(n,r){if(i=r.code,KN(i)&&i!==_.ABORTED){const s=n.fu.shift();yr(n).Mo(),await TE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Bu(n)}var i}(t,e),kE(t)&&IE(t)}async function py(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ti(n);n._u.add(3),await Yo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await zu(n)}async function aD(t,e){const n=Y(t);e?(n._u.delete(2),await zu(n)):e||(n._u.add(2),await Yo(n),n.gu.set("Unknown"))}function os(t){return t.pu||(t.pu=function(e,n,r){const i=Y(e);return i.su(),new KR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:JR.bind(null,t),Zr:ZR.bind(null,t),Wo:eD.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Tp(t)?_p(t):t.gu.set("Unknown")):(await t.pu.stop(),_E(t))})),t.pu}function yr(t){return t.Iu||(t.Iu=function(e,n,r){const i=Y(e);return i.su(),new GR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:rD.bind(null,t),Zr:oD.bind(null,t),tu:iD.bind(null,t),Zo:sD.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Bu(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class kp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ip(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ko(t))return new M(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=ks(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class my{constructor(){this.Tu=new Ve(F.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ki(e,n,xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class lD{constructor(){this.Au=void 0,this.listeners=[]}}class uD{constructor(){this.queries=new ss(e=>W1(e),Mu),this.onlineState="Unknown",this.Ru=new Set}}async function CE(t,e){const n=Y(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new lD),i)try{s.Au=await n.onListen(r)}catch(o){const a=Ip(o,`Initialization of query '${Ed(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Cp(n)}async function AE(t,e){const n=Y(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function cD(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Cp(n)}function hD(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cp(t){t.Ru.forEach(e=>{e.next()})}class xE{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class NE{constructor(e){this.key=e}}class RE{constructor(e){this.key=e}}class dD{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Z(),this.mutatedKeys=Z(),this.Gu=q1(e),this.Qu=new xi(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new my,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=bu(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),S=!0):this.Hu(f,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),S=!0):f&&!g&&(r.track({type:1,doc:f}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(f)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Ki(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new my,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Z(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new RE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new NE(r))}),n}tc(e){this.qu=e.Hi,this.Ku=Z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class fD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pD{constructor(e){this.key=e,this.nc=!1}}class mD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ss(a=>W1(a),Mu),this.rc=new Map,this.oc=new Set,this.uc=new Ve(F.comparator),this.cc=new Map,this.ac=new vp,this.hc={},this.lc=new Map,this.fc=qi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function gD(t,e){const n=CD(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await VR(n.localStore,On(e));n.isPrimaryClient&&wE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await yD(n,e,r,a==="current",o.resumeToken)}return i}async function yD(t,e,n,r,i){t._c=(h,f,g)=>async function(y,v,S,p){let d=v.view.Wu(S);d.$i&&(d=await hy(y.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,d)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(d,y.isPrimaryClient,m);return yy(y,v.targetId,w.Xu),w.snapshot}(t,h,f,g);const s=await hy(t.localStore,e,!0),o=new dD(e,s.Hi),a=o.Wu(s.documents),l=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);yy(t,n,u.Xu);const c=new fD(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function vD(t,e){const n=Y(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Mu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),EE(n.remoteStore,r.targetId),Id(n,r.targetId)}).catch(qo)):(Id(n,r.targetId),await kd(n.localStore,r.targetId,!0))}async function wD(t,e,n){const r=AD(t);try{const i=await function(s,o){const a=Y(s),l=Le.now(),u=o.reduce((f,g)=>f.add(g.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Ln(),y=Z();return a.Gi.getEntries(f,u).next(v=>{g=v,g.forEach((S,p)=>{p.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{c=v;const S=[];for(const p of o){const d=HN(p,c.get(p.key).overlayedDocument);d!=null&&S.push(new ei(p.key,d,B1(d.value.mapValue),Cn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:iE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Ve(ue)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Xo(r,i.changes),await Bu(r.remoteStore)}catch(i){const s=Ip(i,"Failed to persist write");n.reject(s)}}async function DE(t,e){const n=Y(t);try{const r=await bR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?me(o.nc):i.removedDocuments.size>0&&(me(o.nc),o.nc=!1))}),await Xo(n,r,e)}catch(r){await qo(r)}}function gy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Y(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Cp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ED(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ve(F.comparator);o=o.insert(s,ut.newNoDocument(s,Q.min()));const a=Z().add(s),l=new Vu(Q.min(),new Map,new Fe(ue),o,a);await DE(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Ap(r)}else await kd(r.localStore,e,!1).then(()=>Id(r,e,n)).catch(qo)}async function SD(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await MR(n.localStore,e);OE(n,r,null),PE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xo(n,i)}catch(i){await qo(i)}}async function _D(t,e,n){const r=Y(t);try{const i=await function(s,o){const a=Y(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);OE(r,e,n),PE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xo(r,i)}catch(i){await qo(i)}}function PE(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function OE(t,e,n){const r=Y(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Id(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||LE(t,r)})}function LE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(EE(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ap(t))}function yy(t,e,n){for(const r of n)r instanceof NE?(t.ac.addReference(r.key,e),TD(t,r)):r instanceof RE?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||LE(t,r.key)):z()}function TD(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ap(t))}function Ap(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new F(ye.fromString(e)),r=t.fc.next();t.cc.set(r,new pD(n)),t.uc=t.uc.insert(n,r),wE(t.remoteStore,new Ur(On(pp(n.path)),r,2,cp.at))}}async function Xo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ep.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>I.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Ko(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.qi.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function kD(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await mE(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new M(_.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xo(n,r.ji)}}function ID(t,e){const n=Y(t),r=n.cc.get(e);if(r&&r.nc)return Z().add(r.key);{let i=Z();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function CD(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ED.bind(null,e),e.sc.Wo=cD.bind(null,e.eventManager),e.sc.wc=hD.bind(null,e.eventManager),e}function AD(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_D.bind(null,e),e}class xD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ju(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return $R(this.persistence,new OR,e.initialUser,this.yt)}yc(e){return new DR(wp.Bs,this.yt)}gc(e){return new zR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ND{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kD.bind(null,this.syncEngine),await aD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uD}createDatastore(e){const n=ju(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new qR(i));var i;return function(s,o,a,l){return new QR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>gy(this.syncEngine,a,0),o=fy.C()?new fy:new BR,new XR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new mD(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Yo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function $E(t,e,n){if(!n)throw new M(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RD(t,e,n,r){if(e===!0&&r===!0)throw new M(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vy(t){if(!F.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wy(t){if(F.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Fr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new M(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Ey=new Map;class Sy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aN;switch(n.type){case"gapi":const r=n.client;return new hN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ey.get(e);n&&(U("ComponentProvider","Removing Datastore"),Ey.delete(e),n.terminate())}(this),Promise.resolve()}}function DD(t,e,n,r={}){var i;const s=(t=Fr(t,Wu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&fd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=at.MOCK_USER;else{o=UC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(l)}t._authCredentials=new lN(new P1(o,a))}}/**
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
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class dr extends kr{constructor(e,n,r){super(e,n,pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new F(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function Cd(t,e,...n){if(t=Et(t),$E("collection","path",e),t instanceof Wu){const r=ye.fromString(e,...n);return wy(r),new dr(t,null,r)}{if(!(t instanceof Lt||t instanceof dr))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return wy(r),new dr(t.firestore,null,r)}}function PD(t,e,...n){if(t=Et(t),arguments.length===1&&(e=O1.R()),$E("doc","path",e),t instanceof Wu){const r=ye.fromString(e,...n);return vy(r),new Lt(t,null,new F(r))}{if(!(t instanceof Lt||t instanceof dr))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return vy(r),new Lt(t.firestore,t instanceof dr?t.converter:null,new F(r))}}/**
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
 *//**
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
 */class ME{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class OD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=O1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function LD(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $D(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MD(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>py(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>py(e.remoteStore,s)),t.onlineComponents=e}async function MD(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await LD(t,new xD)),t.offlineComponents}async function bE(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await $D(t,new ND)),t.onlineComponents}function bD(t){return bE(t).then(e=>e.syncEngine)}async function Ad(t){const e=await bE(t),n=e.eventManager;return n.onListen=gD.bind(null,e.syncEngine),n.onUnlisten=vD.bind(null,e.syncEngine),n}function UD(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ME({next:h=>{s.enqueueAndForget(()=>AE(i,c)),h.fromCache&&a.source==="server"?l.reject(new M(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new xE(o,u,{includeMetadataChanges:!0,Nu:!0});return CE(i,c)}(await Ad(t),t.asyncQueue,e,n,r)),r.promise}class FD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new yE(this,"async_queue_retry"),this.Wc=()=>{const n=Hc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new hr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ko(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=kp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&z()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function _y(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class So extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new FD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UE(this),this._firestoreClient.terminate()}}function VD(t,e){const n=typeof t=="object"?t:Aw(),r=typeof t=="string"?t:e||"(default)",i=jf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$C("firestore");s&&DD(i,...s)}return i}function xp(t){return t._firestoreClient||UE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new SN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new OD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(mt.fromBase64String(e))}catch(n){throw new M(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Np{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class FE{constructor(e){this._methodName=e}}/**
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
 */class Rp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const jD=/^__.*__$/;class zD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}function VE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Dp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Dp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return jl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(VE(this.sa)&&jD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class BD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||ju(e)}da(e,n,r,i=!1){return new Dp({sa:e,methodName:n,fa:r,path:ct.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function jE(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new BD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);HE("Data must be an object, but it was:",o,r);const a=zE(r,o);let l,u;if(s.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=qD(e,h,n);if(!o.contains(f))throw new M(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);GD(c,f)||c.push(f)}l=new Jt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new zD(new zt(a),l,u)}function WD(t,e,n,r=!1){return Pp(n,t.da(r?4:3,e))}function Pp(t,e){if(BE(t=Et(t)))return HE("Unsupported field value:",e,t),zE(t,e);if(t instanceof FE)return function(n,r){if(!VE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Pp(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UN(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Le.fromDate(n);return{timestampValue:Fl(r.yt,i)}}if(n instanceof Le){const i=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fl(r.yt,i)}}if(n instanceof Rp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gi)return{bytesValue:uE(r.yt,n._byteString)};if(n instanceof Lt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Hu(n)}`)}(t,e)}function zE(t,e){const n={};return L1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,i)=>{const s=Pp(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Rp||t instanceof Gi||t instanceof Lt||t instanceof FE)}function HE(t,e,n){if(!BE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hu(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function qD(t,e,n){if((e=Et(e))instanceof Np)return e._internalPath;if(typeof e=="string")return WE(t,e);throw jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const KD=new RegExp("[~\\*/\\[\\]]");function WE(t,e,n){if(e.search(KD)>=0)throw jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Np(...e.split("."))._internalPath}catch{throw jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(_.INVALID_ARGUMENT,a+t+l)}function GD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Op("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QD extends qE{data(){return super.data()}}function Op(t,e){return typeof e=="string"?WE(t,e):e instanceof Np?e._internalPath:e._delegate._internalPath}/**
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
 */function KE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class GE extends Lp{}function YD(t,e,...n){let r=[];e instanceof Lp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Mp).length,o=i.filter(a=>a instanceof $p).length;if(s>1||s>0&&o>0)throw new M(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $p extends GE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $p(e,n,r)}_apply(e){const n=this._parse(e);return QE(e._query,n),new kr(e.firestore,e.converter,vd(e._query,n))}_parse(e){const n=jE(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ky(c,u);const f=[];for(const g of c)f.push(Ty(a,i,g));h={arrayValue:{values:f}}}else h=Ty(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ky(c,u),h=WD(o,s,c,u==="in"||u==="not-in");return Oe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Mp extends Lp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)QE(s,a),s=vd(s,a)}(e._query,n),new kr(e.firestore,e.converter,vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bp extends GE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bp(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new M(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ci(i,s);return function(a,l){if(mp(a)===null){const u=$u(a);u!==null&&YE(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new kr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new is(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function XD(t,e="asc"){const n=e,r=Op("orderBy",t);return bp._create(r,n)}function Ty(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new M(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!H1(e)&&n.indexOf("/")!==-1)throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!F.isDocumentKey(r))throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qg(t,new F(r))}if(n instanceof Lt)return Qg(t,n._key);throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(n)}.`)}function ky(t,e){if(!Array.isArray(t)||t.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function QE(t,e){if(e.isInequality()){const r=$u(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=mp(t);s!==null&&YE(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function YE(t,e,n){if(!n.isEqual(e))throw new M(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class JD{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return rs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Rp(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=M1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yo(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);me(pE(r));const i=new go(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ZD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class XE extends qE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Op("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ha extends XE{data(e={}){return super.data(e)}}class JE{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Is(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ha(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ha(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ha(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:eP(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class Up extends JD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function tP(t){t=Fr(t,kr);const e=Fr(t.firestore,So),n=xp(e),r=new Up(e);return KE(t._query),UD(n,t._query).then(i=>new JE(e,r,t,i))}function nP(t,e){const n=Fr(t.firestore,So),r=PD(t),i=ZD(t.converter,e);return iP(n,[HD(jE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function rP(t,...e){var n,r,i;t=Et(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_y(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_y(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Lt)u=Fr(t.firestore,So),c=pp(t._key.path),l={next:h=>{e[o]&&e[o](sP(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Fr(t,kr);u=Fr(h.firestore,So),c=h._query;const f=new Up(u);l={next:g=>{e[o]&&e[o](new JE(u,f,h,g))},error:e[o+1],complete:e[o+2]},KE(t._query)}return function(h,f,g,y){const v=new ME(y),S=new xE(f,v,g);return h.asyncQueue.enqueueAndForget(async()=>CE(await Ad(h),S)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>AE(await Ad(h),S))}}(xp(u),c,a,l)}function iP(t,e){return function(n,r){const i=new hr;return n.asyncQueue.enqueueAndForget(async()=>wD(await bD(n),r,i)),i.promise}(xp(t),e)}function sP(t,e,n){const r=n.docs.get(e._key),i=new Up(t);return new XE(t,i,e._key,r,new Is(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ns=n})(Mo),Vi(new qr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new So(new uN(n.getProvider("auth-internal")),new fN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new go(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),cr(Wg,"3.8.3",t),cr(Wg,"3.8.3","esm2017")})();function Fp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ZE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oP=ZE,eS=new Lo("auth","Firebase",ZE());/**
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
 */const Iy=new Ff("@firebase/auth");function Wa(t,...e){Iy.logLevel<=oe.ERROR&&Iy.error(`Auth (${Mo}): ${t}`,...e)}/**
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
 */function mn(t,...e){throw Vp(t,...e)}function dn(t,...e){return Vp(t,...e)}function tS(t,e,n){const r=Object.assign(Object.assign({},oP()),{[e]:n});return new Lo("auth","Firebase",r).create(e,{appName:t.name})}function aP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mn(t,"argument-error"),tS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eS.create(t,...e)}function W(t,e,...n){if(!t)throw Vp(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function $n(t,e){t||Tn(e)}/**
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
 */const Cy=new Map;function kn(t){$n(t instanceof Function,"Expected a class definition");let e=Cy.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cy.set(t,e),e)}/**
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
 */function lP(t,e){const n=jf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Il(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function uP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cP(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cP()||VC()||"connection"in navigator)?navigator.onLine:!0}function dP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=FC()||jC()}get(){return hP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jp(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const pP=new Jo(3e4,6e4);function mP(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qu(t,e,n,r,i={}){return rS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nS.fetch()(iS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fP),e);try{const i=new yP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Aa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tS(t,c,u);mn(t,c)}}catch(i){if(i instanceof bn)throw i;mn(t,"network-request-failed")}}async function gP(t,e,n,r,i={}){const s=await qu(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jp(t.config,i):`${t.config.apiScheme}://${i}`}class yP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),pP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vP(t,e){return qu(t,"POST","/v1/accounts:delete",e)}async function wP(t,e){return qu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EP(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=zp(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vs(Wc(i.auth_time)),issuedAtTime:Vs(Wc(i.iat)),expirationTime:Vs(Wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wc(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sw(n);return i?JSON.parse(i):(Wa("Failed to decode base64 JWT payload"),null)}catch(i){return Wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function SP(t){const e=zp(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&_P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _o(t,wP(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?CP(s.providerUserInfo):[],a=IP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function kP(t){const e=Et(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CP(t){return t.map(e=>{var{providerId:n}=e,r=Fp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AP(t,e){const n=await rS(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):SP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new To;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Vn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EP(this,e)}reload(){return kP(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _o(this,vP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:R,stsTokenManager:D}=n;W(m&&D,e,"internal-error");const P=To.fromJSON(this.name,D);W(typeof m=="string",e,"internal-error"),Vn(h,e.name),Vn(f,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof T=="boolean",e,"internal-error"),Vn(g,e.name),Vn(y,e.name),Vn(v,e.name),Vn(S,e.name),Vn(p,e.name),Vn(d,e.name);const J=new Vr({uid:m,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:d});return R&&Array.isArray(R)&&(J.providerData=R.map(j=>Object.assign({},j))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new To;i.updateFromServerResponse(n);const s=new Vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}}/**
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
 */class oS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oS.type="NONE";const xy=oS;/**
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
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qa(this.userKey,i.apiKey,s),this.fullPersistenceKey=qa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(kn(xy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kn(xy);const o=qa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Vr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ni(s,e,r))}}/**
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
 */function Ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hS(e))return"Blackberry";if(dS(e))return"Webos";if(Bp(e))return"Safari";if((e.includes("chrome/")||lS(e))&&!e.includes("edge/"))return"Chrome";if(cS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aS(t=pt()){return/firefox\//i.test(t)}function Bp(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lS(t=pt()){return/crios\//i.test(t)}function uS(t=pt()){return/iemobile/i.test(t)}function cS(t=pt()){return/android/i.test(t)}function hS(t=pt()){return/blackberry/i.test(t)}function dS(t=pt()){return/webos/i.test(t)}function Ku(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xP(t=pt()){var e;return Ku(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NP(){return zC()&&document.documentMode===10}function fS(t=pt()){return Ku(t)||cS(t)||dS(t)||hS(t)||/windows phone/i.test(t)||uS(t)}function RP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pS(t,e=[]){let n;switch(t){case"Browser":n=Ny(pt());break;case"Worker":n=`${Ny(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mo}/${r}`}/**
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
 */class DP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class PP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new DP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Et(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gu(t){return Et(t)}class Ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=QC(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OP(t,e,n){const r=Gu(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mS(e),{host:o,port:a}=LP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$P()}function mS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LP(t){const e=mS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dy(o)}}}function Dy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $P(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function Ri(t,e){return gP(t,"POST","/v1/accounts:signInWithIdp",mP(t,e))}/**
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
 */const MP="http://localhost";class Yr extends gS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:MP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends Zo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class qn extends Zo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class Kn extends Zo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vr._fromIdTokenResponse(e,r,i),o=Py(r);return new Qi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Py(r);return new Qi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function yS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}async function bP(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",r)}/**
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
 */async function UP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _o(t,yS(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=zp(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Qi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
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
 */async function FP(t,e,n=!1){const r="signIn",i=await yS(t,r,e),s=await Qi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function VP(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function jP(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function Wp(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function zP(t){return Et(t).signOut()}const Hl="__sak";/**
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
 */class vS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function BP(){const t=pt();return Bp(t)||Ku(t)}const HP=1e3,WP=10;class wS extends vS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BP()&&RP(),this.fallbackToPolling=fS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wS.type="LOCAL";const qP=wS;/**
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
 */class ES extends vS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ES.type="SESSION";const SS=ES;/**
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
 */function KP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await KP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
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
 */function qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=qp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function QP(t){fn().location.href=t}/**
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
 */function _S(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function YP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JP(){return _S()?self:null}/**
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
 */const TS="firebaseLocalStorageDb",ZP=1,Wl="firebaseLocalStorage",kS="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yu(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function eO(){const t=indexedDB.deleteDatabase(TS);return new ea(t).toPromise()}function Nd(){const t=indexedDB.open(TS,ZP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:kS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await eO(),e(await Nd()))})})}async function Oy(t,e,n){const r=Yu(t,!0).put({[kS]:e,value:n});return new ea(r).toPromise()}async function tO(t,e){const n=Yu(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function Ly(t,e){const n=Yu(t,!0).delete(e);return new ea(n).toPromise()}const nO=800,rO=3;class IS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _S()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(JP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YP(),!this.activeServiceWorker)return;this.sender=new GP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await Oy(e,Hl,"1"),await Ly(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yu(i,!1).getAll();return new ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IS.type="LOCAL";const iO=IS;/**
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
 */function sO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oO(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sO().appendChild(r)})}function aO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Jo(3e4,6e4);/**
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
 */function CS(t,e){return e?kn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kp extends gS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lO(t){return FP(t.auth,new Kp(t),t.bypassAuthState)}function uO(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),UP(n,new Kp(t),t.bypassAuthState)}async function cO(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),bP(n,new Kp(t),t.bypassAuthState)}/**
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
 */class AS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lO;case"linkViaPopup":case"linkViaRedirect":return cO;case"reauthViaPopup":case"reauthViaRedirect":return uO;default:mn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hO=new Jo(2e3,1e4);async function dO(t,e,n){const r=Gu(t);aP(t,e,Hp);const i=CS(r,n);return new Lr(r,"signInViaPopup",e,i).executeNotNull()}class Lr extends AS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hO.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const fO="pendingRedirect",Ka=new Map;class pO extends AS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await mO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mO(t,e){const n=vO(e),r=yO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gO(t,e){Ka.set(t._key(),e)}function yO(t){return kn(t._redirectPersistence)}function vO(t){return qa(fO,t.config.apiKey,t.name)}async function wO(t,e,n=!1){const r=Gu(t),i=CS(r,e),o=await new pO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EO=10*60*1e3;class SO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_O(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EO&&this.cachedEventUids.clear(),this.cachedEventUids.has($y(e))}saveEventToCache(e){this.cachedEventUids.add($y(e)),this.lastProcessedEventTime=Date.now()}}function $y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _O(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xS(t);default:return!1}}/**
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
 */async function TO(t,e={}){return qu(t,"GET","/v1/projects",e)}/**
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
 */const kO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IO=/^https?/;async function CO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TO(t);for(const n of e)try{if(AO(n))return}catch{}mn(t,"unauthorized-domain")}function AO(t){const e=xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IO.test(n))return!1;if(kO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xO=new Jo(3e4,6e4);function My(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NO(t){return new Promise((e,n)=>{var r,i,s;function o(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),n(dn(t,"network-request-failed"))},timeout:xO.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const a=aO("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},oO(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ga=null,e})}let Ga=null;function RO(t){return Ga=Ga||NO(t),Ga}/**
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
 */const DO=new Jo(5e3,15e3),PO="__/auth/iframe",OO="emulator/auth/iframe",LO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$O=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MO(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,OO):`https://${t.config.authDomain}/${PO}`,r={apiKey:e.apiKey,appName:t.name,v:Mo},i=$O.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function bO(t){const e=await RO(t),n=fn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:MO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{s(o)},DO.get());function l(){fn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const UO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FO=500,VO=600,jO="_blank",zO="http://localhost";class by{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BO(t,e,n,r=FO,i=VO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},UO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();n&&(a=lS(u)?jO:n),aS(u)&&(e=e||zO,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(xP(u)&&a!=="_self")return HO(e||"",a),new by(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new by(h)}function HO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WO="__/auth/handler",qO="emulator/auth/handler";function Uy(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mo,eventId:i};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Zo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${KO(t)}?${$o(a).slice(1)}`}function KO({config:t}){return t.emulator?jp(t,qO):`https://${t.authDomain}/${WO}`}/**
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
 */const qc="webStorageSupport";class GO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SS,this._completeRedirectFn=wO,this._overrideRedirectResult=gO}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Uy(e,n,r,xd(),i);return BO(e,o,qp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),QP(Uy(e,n,r,xd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bO(e),r=new SO(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qc];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fS()||Bp()||Ku()}}const QO=GO;var Fy="@firebase/auth",Vy="0.21.3";/**
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
 */class YO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JO(t){Vi(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pS(t)},c=new PP(a,l,u);return uP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vi(new qr("auth-internal",e=>{const n=Gu(e.getProvider("auth").getImmediate());return(r=>new YO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Fy,Vy,XO(t)),cr(Fy,Vy,"esm2017")}/**
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
 */const ZO=5*60,eL=Tw("authIdTokenMaxAge")||ZO;let jy=null;const tL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eL)return;const i=n==null?void 0:n.token;jy!==i&&(jy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nL(t=Aw()){const e=jf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lP(t,{popupRedirectResolver:QO,persistence:[iO,qP,SS]}),r=Tw("authTokenSyncURL");if(r){const s=tL(r);jP(n,s,()=>s(n.currentUser)),VP(n,o=>s(o))}const i=_w("auth");return i&&OP(n,`http://${i}`),n}JO("Browser");const rL={apiKey:"AIzaSyDYEDsHjwArt51g6K6oCiJ0zbL0u0OUfk8",authDomain:"asss-chat-test.firebaseapp.com",projectId:"asss-chat-test",storageBucket:"asss-chat-test.appspot.com",messagingSenderId:"109315424792",appId:"1:109315424792:web:3ed3bccbbe34cdd538396d"},iL=Cw(rL),Rd=VD(iL),ko=nL(),NS=new ln;NS.setCustomParameters({login_hint:"korisnik@vsar.edu.rs"});const sL=({userData:t,signOut:e})=>{const[n,r]=C.useState([]),i=xf();return Wp(ko,s=>{s||i("../")}),C.useEffect(()=>{(async()=>{const o=Cd(Rd,"rooms"),a=await tP(o);r(a.docs.map(l=>l.data()))})()},[]),Ce(oL,{children:[G(mC,{user:t,signOut:e}),Ce(aL,{children:[G(IC,{rooms:n}),G(eI,{context:n})]})]})},oL=ie.div`
  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
  height: 100vh;
`,aL=ie.div`
  display: grid;
  grid-template-columns: 280px auto;
`,lL=({sendMessage:t})=>{const[e,n]=C.useState(""),r=i=>{i.preventDefault(),e!==""&&(t(e),n(""))};return G(uL,{children:G(cL,{children:Ce("form",{onSubmit:i=>r(i),children:[G("input",{type:"text",placeholder:"Унесите Вашу поруку...",value:e,onChange:i=>n(i.target.value)}),G("button",{type:"submit",children:G(TC,{})})]})})})},uL=ie.div`
  padding: 8px 16px;
`,cL=ie.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  background-color: white;
  padding: 0 16px;

  form {
    height: 48px;
    display: flex;

    input {
      flex: 1;
      outline: none;
      border: none;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-size: 16px 1rem;
    }

    button {
      all: unset;
      font-size: 32px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.15s;
    }

    button:hover {
      color: #1561b9;
    }
  }
`;function hL({message:t}){const{user:e,userPhoto:n,timestamp:r}=t,i=new Date(r.seconds*1e3);return Ce(dL,{children:[G(fL,{children:G("img",{src:n,alt:`${e} avatar`})}),Ce(pL,{children:[Ce(mL,{children:[e," ",G("span",{children:i.toLocaleString("sr")})]}),G(gL,{children:t.message})]})]})}const dL=ie.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
`,fL=ie.div`
  max-width: 42px;
  margin-top: 8px;

  img {
    max-width: 42px;
    aspect-ratio: 1/1;
    object-fit: contain;
    border-radius: 50%;
  }
`,pL=ie.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  padding: 8px 16px;
  background-color: white;
  border-radius: 24px;
  transition: 0.3s;

  &:hover {
    background-color: #dfdfdf;
  }
`,mL=ie.span`
  font-weight: 500;
  font-size: 1.15em;

  span {
    font-weight: 300;
    font-size: smaller;
    margin-left: 4px;
    color: rgb(97, 97, 97);
  }
`,gL=ie.p`
  font-weight: 400;
  color: #393939;
  margin-top: 4px;
`,yL=({user:t})=>{const{name:e,photo:n}=t,{roomId:r}=Hk(),s=zk().find(c=>c.id===r),[o,a]=C.useState([]),l=C.useRef(null),u=async c=>{await nP(Cd(Rd,"rooms",r,"chat"),{user:e,userPhoto:n,timestamp:Le.now(),message:c})};return C.useLayoutEffect(()=>{const c=l.current;c.scrollTop=c.scrollHeight},[o]),C.useEffect(()=>{function c(){const h=rP(YD(Cd(Rd,"rooms",r,"chat"),XD("timestamp","asc")),f=>{const g=f.docs.map(y=>({id:y.id,...y.data()}));a(g)});return()=>{h()}}c()},[r]),Ce(vL,{children:[G(wL,{children:s&&Ce(EL,{children:[Ce(SL,{children:["# ",s.name_sr]}),Ce(_L,{children:["ESPB: ",s.espb," | Статус:"," ",s.obavezan?"Обавезан":"Изборни"," | Семестар:"," ",s.semester]})]})}),G(TL,{ref:l,children:o.map(c=>G(hL,{message:c},c.id))}),G(lL,{sendMessage:u})]})},vL=ie.div`
  background-color: #f1f1f1;
  display: grid;
  grid-template-rows: 64px auto min-content;
  overflow-y: auto;
`,wL=ie.div`
  background-color: white;
  padding: 8px 24px;
`,EL=ie.div`
  display: flex;
  flex-direction: column;
`,SL=ie.p`
  font-weight: 500;
  font-size: 1.25em;
`,_L=ie.p`
  margin-top: 4px;
  font-weight: 300;
  color: #757575;
`,TL=ie.div`
  overflow-y: auto;
`,kL=({handleUser:t,loggedOut:e})=>{const n=xf();Wp(ko,i=>{i&&n("/chat")});const r=()=>{dO(ko,NS).then(i=>{ln.credentialFromResult(i).accessToken;const o=i.user,a={name:o.displayName,photo:o.photoURL,email:o.email};t(a),n("/chat")}).catch(i=>{console.log(i.message)})};return G(IL,{children:Ce(CL,{children:[e&&G(RL,{children:"Успешно сте се излоговали."}),G(NL,{src:gw,alt:"Akademija Strukovnih studija Sumadija logo"}),G(AL,{children:"Пријава на апликацију ASSS Chat"}),G(xL,{onClick:()=>r(),children:"Пријавите се путем Google"})]})})},IL=ie.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,CL=ie.div`
  width: 400px;
  padding: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 24px 0;
  }
`,AL=ie.h1`
  text-align: center;
`,xL=ie.button`
  all: unset;
  padding: 8px 16px;
  background-color: #237be7;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`,NL=ie.img``,RL=ie.span`
  color: red;
`;function DL(){const[t,e]=C.useState({}),[n,r]=C.useState(!1),i=o=>{e(o)};return Wp(ko,o=>{if(o){const a={name:o.displayName,photo:o.photoURL,email:o.email};e(a)}}),G("div",{className:"App",children:G(aI,{children:Ce(nI,{children:[G(ri,{path:"/",element:G(kL,{handleUser:i,loggedOut:n})}),Ce(ri,{path:"chat",element:G(sL,{userData:t,signOut:()=>{zP(ko).then(()=>{e(null),r(!0)}).catch(o=>{console.log(o)})}}),children:[G(ri,{index:!0,element:G("p",{children:"Privatne poruke"})}),G(ri,{path:"profile",element:G("p",{children:"Profil"})}),G(ri,{path:":roomId",element:G(yL,{user:t})})]})]})})})}Gc.createRoot(document.getElementById("root")).render(G(Pt.StrictMode,{children:G(DL,{})}));
