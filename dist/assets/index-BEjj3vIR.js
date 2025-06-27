var I_=Object.defineProperty;var U_=(t,e,n)=>e in t?I_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>U_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},hc={},i0={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),k_=Symbol.for("react.portal"),O_=Symbol.for("react.fragment"),z_=Symbol.for("react.strict_mode"),B_=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),V_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),j_=Symbol.for("react.memo"),X_=Symbol.for("react.lazy"),cp=Symbol.iterator;function $_(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var r0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=Zs.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}var Id=Dd.prototype=new a0;Id.constructor=Dd;s0(Id,Zs.prototype);Id.isPureReactComponent=!0;var up=Array.isArray,l0=Object.prototype.hasOwnProperty,Ud={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:s,ref:o,props:r,_owner:Ud.current}}function Y_(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case k_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ic(o,0):i,up(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(Fd(r)&&(r=Y_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",up(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ic(s,a);o+=ml(s,e,n,l,r)}else if(l=$_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,a++),o+=ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},gl={transition:null},Z_={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Ud};Ge.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Zs;Ge.Fragment=O_;Ge.Profiler=B_;Ge.PureComponent=Dd;Ge.StrictMode=z_;Ge.Suspense=W_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=s0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ud.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!c0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:V_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H_,_context:t},t.Consumer=t};Ge.createElement=u0;Ge.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:G_,render:t}};Ge.isValidElement=Fd;Ge.lazy=function(t){return{$$typeof:X_,_payload:{_status:-1,_result:t},_init:K_}};Ge.memo=function(t,e){return{$$typeof:j_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ge.useContext=function(t){return rn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ge.useId=function(){return rn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ge.useRef=function(t){return rn.current.useRef(t)};Ge.useState=function(t){return rn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return rn.current.useTransition()};Ge.version="18.2.0";i0.exports=Ge;var N=i0.exports;const Q_=F_(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=N,ey=Symbol.for("react.element"),ty=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,iy=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ry={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ny.call(e,i)&&!ry.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ey,type:t,key:s,ref:o,props:r,_owner:iy.current}}hc.Fragment=ty;hc.jsx=h0;hc.jsxs=h0;n0.exports=hc;var w=n0.exports,Xu={},d0={exports:{}},En={},f0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,$){var Q=U.length;U.push($);e:for(;0<Q;){var ae=Q-1>>>1,we=U[ae];if(0<r(we,$))U[ae]=$,U[Q]=we,Q=ae;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],Q=U.pop();if(Q!==$){U[0]=Q;e:for(var ae=0,we=U.length,$e=we>>>1;ae<$e;){var X=2*(ae+1)-1,oe=U[X],ve=X+1,ue=U[ve];if(0>r(oe,Q))ve<we&&0>r(ue,oe)?(U[ae]=ue,U[ve]=Q,ae=ve):(U[ae]=oe,U[X]=Q,ae=X);else if(ve<we&&0>r(ue,Q))U[ae]=ue,U[ve]=Q,ae=ve;else break e}}return $}function r(U,$){var Q=U.sortIndex-$.sortIndex;return Q!==0?Q:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=U)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function y(U){if(x=!1,_(U),!g)if(n(l)!==null)g=!0,q(C);else{var $=n(c);$!==null&&ee(y,$.startTime-U)}}function C(U,$){g=!1,x&&(x=!1,h(R),R=-1),p=!0;var Q=d;try{for(_($),f=n(l);f!==null&&(!(f.expirationTime>$)||U&&!L());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,d=f.priorityLevel;var we=ae(f.expirationTime<=$);$=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),_($)}else i(l);f=n(l)}if(f!==null)var $e=!0;else{var X=n(c);X!==null&&ee(y,X.startTime-$),$e=!1}return $e}finally{f=null,d=Q,p=!1}}var T=!1,b=null,R=-1,M=5,S=-1;function L(){return!(t.unstable_now()-S<M)}function H(){if(b!==null){var U=t.unstable_now();S=U;var $=!0;try{$=b(!0,U)}finally{$?z():(T=!1,b=null)}}else T=!1}var z;if(typeof v=="function")z=function(){v(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Z=V.port2;V.port1.onmessage=H,z=function(){Z.postMessage(null)}}else z=function(){m(H,0)};function q(U){b=U,T||(T=!0,z())}function ee(U,$){R=m(function(){U(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,q(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var Q=d;d=$;try{return U()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=d;d=U;try{return $()}finally{d=Q}},t.unstable_scheduleCallback=function(U,$,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,U){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Q+we,U={id:u++,callback:$,priorityLevel:U,startTime:Q,expirationTime:we,sortIndex:-1},Q>ae?(U.sortIndex=Q,e(c,U),n(l)===null&&U===n(c)&&(x?(h(R),R=-1):x=!0,ee(y,Q-ae))):(U.sortIndex=we,e(l,U),g||p||(g=!0,q(C))),U},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(U){var $=d;return function(){var Q=d;d=$;try{return U.apply(this,arguments)}finally{d=Q}}}})(p0);f0.exports=p0;var sy=f0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=N,Mn=sy;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,Ho={};function $r(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Ho[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,oy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function ay(t){return $u.call(fp,t)?!0:$u.call(dp,t)?!1:oy.test(t)?fp[t]=!0:(dp[t]=!0,!1)}function ly(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cy(t,e,n,i){if(e===null||typeof e>"u"||ly(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kd=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kd,Od);Vt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kd,Od);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kd,Od);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cy(e,n,r,i)&&(n=null),i||r===null?ay(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),vs=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),x0=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),pp=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Uc;function wo(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function kc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function uy(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case vs:return"Portal";case Yu:return"Profiler";case Bd:return"StrictMode";case qu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x0:return(t.displayName||"Context")+".Consumer";case v0:return(t._context.displayName||"Context")+".Provider";case Hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dy(t){var e=y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=dy(t))}function S0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=y0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function Ju(t,e){M0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&eh(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eh(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(To(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function E0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fy=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){fy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function A0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function b0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=A0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var py=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ih(t,e){if(e){if(py[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,Ls=null,Ns=null;function _p(t){if(t=fa(t)){if(typeof oh!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=gc(e),oh(t.stateNode,t.type,e))}}function C0(t){Ls?Ns?Ns.push(t):Ns=[t]:Ls=t}function R0(){if(Ls){var t=Ls,e=Ns;if(Ns=Ls=null,_p(t),e)for(t=0;t<e.length;t++)_p(e[t])}}function P0(t,e){return t(e)}function L0(){}var Oc=!1;function N0(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return P0(t,e,n)}finally{Oc=!1,(Ls!==null||Ns!==null)&&(L0(),R0())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=gc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ah=!1;if(bi)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){ah=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{ah=!1}function my(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Po=!1,kl=null,Ol=!1,lh=null,gy={onError:function(t){Po=!0,kl=t}};function vy(t,e,n,i,r,s,o,a,l){Po=!1,kl=null,my.apply(gy,arguments)}function xy(t,e,n,i,r,s,o,a,l){if(vy.apply(this,arguments),Po){if(Po){var c=kl;Po=!1,kl=null}else throw Error(ie(198));Ol||(Ol=!0,lh=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yp(t){if(Yr(t)!==t)throw Error(ie(188))}function _y(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yp(r),t;if(s===i)return yp(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function I0(t){return t=_y(t),t!==null?U0(t):null}function U0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=U0(t);if(e!==null)return e;t=t.sibling}return null}var F0=Mn.unstable_scheduleCallback,Sp=Mn.unstable_cancelCallback,yy=Mn.unstable_shouldYield,Sy=Mn.unstable_requestPaint,At=Mn.unstable_now,My=Mn.unstable_getCurrentPriorityLevel,Wd=Mn.unstable_ImmediatePriority,k0=Mn.unstable_UserBlockingPriority,zl=Mn.unstable_NormalPriority,Ey=Mn.unstable_LowPriority,O0=Mn.unstable_IdlePriority,dc=null,ii=null;function wy(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:by,Ty=Math.log,Ay=Math.LN2;function by(t){return t>>>=0,t===0?32:31-(Ty(t)/Ay|0)|0}var Ra=64,Pa=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ao(a):(s&=o,s!==0&&(i=Ao(s)))}else o=n&~r,o!==0?i=Ao(o):s!==0&&(i=Ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function Cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ry(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Cy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ch(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z0(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Py(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,Xd,V0,G0,W0,uh=!1,La=[],Qi=null,Ji=null,er=null,Wo=new Map,jo=new Map,$i=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ny(t,e,n,i,r){switch(e){case"focusin":return Qi=co(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=co(Ji,t,e,n,i,r),!0;case"mouseover":return er=co(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,co(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,co(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function j0(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sh=i,n.target.dispatchEvent(i),sh=null}else return e=fa(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ep(t,e,n){vl(t)&&n.delete(e)}function Dy(){uh=!1,Qi!==null&&vl(Qi)&&(Qi=null),Ji!==null&&vl(Ji)&&(Ji=null),er!==null&&vl(er)&&(er=null),Wo.forEach(Ep),jo.forEach(Ep)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,uh||(uh=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Dy)))}function Xo(t){function e(r){return uo(r,t)}if(0<La.length){uo(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&uo(Qi,t),Ji!==null&&uo(Ji,t),er!==null&&uo(er,t),Wo.forEach(e),jo.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)j0(n),n.blockedOn===null&&$i.shift()}var Ds=Ni.ReactCurrentBatchConfig,Hl=!0;function Iy(t,e,n,i){var r=rt,s=Ds.transition;Ds.transition=null;try{rt=1,$d(t,e,n,i)}finally{rt=r,Ds.transition=s}}function Uy(t,e,n,i){var r=rt,s=Ds.transition;Ds.transition=null;try{rt=4,$d(t,e,n,i)}finally{rt=r,Ds.transition=s}}function $d(t,e,n,i){if(Hl){var r=hh(t,e,n,i);if(r===null)qc(t,e,i,Vl,n),Mp(t,i);else if(Ny(r,t,e,n,i))i.stopPropagation();else if(Mp(t,i),e&4&&-1<Ly.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&H0(s),s=hh(t,e,n,i),s===null&&qc(t,e,i,Vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Vl=null;function hh(t,e,n,i){if(Vl=null,t=Gd(i),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vl=t,null}function X0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(My()){case Wd:return 1;case k0:return 4;case zl:case Ey:return 16;case O0:return 536870912;default:return 16}default:return 16}}var Ki=null,Yd=null,xl=null;function $0(){if(xl)return xl;var t,e=Yd,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return xl=r.slice(t,1<i?1-i:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function wp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:wp,this.isPropagationStopped=wp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=wn(Qs),da=St({},Qs,{view:0,detail:0}),Fy=wn(da),Bc,Hc,ho,fc=St({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Bc=t.screenX-ho.screenX,Hc=t.screenY-ho.screenY):Hc=Bc=0,ho=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Tp=wn(fc),ky=St({},fc,{dataTransfer:0}),Oy=wn(ky),zy=St({},da,{relatedTarget:0}),Vc=wn(zy),By=St({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=wn(By),Vy=St({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gy=wn(Vy),Wy=St({},Qs,{data:0}),Ap=wn(Wy),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$y[t])?!!e[t]:!1}function Kd(){return Yy}var qy=St({},da,{key:function(t){if(t.key){var e=jy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ky=wn(qy),Zy=St({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=wn(Zy),Qy=St({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),Jy=wn(Qy),e1=St({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=wn(e1),n1=St({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=wn(n1),r1=[9,13,27,32],Zd=bi&&"CompositionEvent"in window,Lo=null;bi&&"documentMode"in document&&(Lo=document.documentMode);var s1=bi&&"TextEvent"in window&&!Lo,Y0=bi&&(!Zd||Lo&&8<Lo&&11>=Lo),Cp=" ",Rp=!1;function q0(t,e){switch(t){case"keyup":return r1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function o1(t,e){switch(t){case"compositionend":return K0(e);case"keypress":return e.which!==32?null:(Rp=!0,Cp);case"textInput":return t=e.data,t===Cp&&Rp?null:t;default:return null}}function a1(t,e){if(_s)return t==="compositionend"||!Zd&&q0(t,e)?(t=$0(),xl=Yd=Ki=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l1[t.type]:e==="textarea"}function Z0(t,e,n,i){C0(i),e=Gl(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,$o=null;function c1(t){lv(t,0)}function pc(t){var e=Ms(t);if(S0(e))return t}function u1(t,e){if(t==="change")return e}var Q0=!1;if(bi){var Gc;if(bi){var Wc="oninput"in document;if(!Wc){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Wc=typeof Lp.oninput=="function"}Gc=Wc}else Gc=!1;Q0=Gc&&(!document.documentMode||9<document.documentMode)}function Np(){No&&(No.detachEvent("onpropertychange",J0),$o=No=null)}function J0(t){if(t.propertyName==="value"&&pc($o)){var e=[];Z0(e,$o,t,Gd(t)),N0(c1,e)}}function h1(t,e,n){t==="focusin"?(Np(),No=e,$o=n,No.attachEvent("onpropertychange",J0)):t==="focusout"&&Np()}function d1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc($o)}function f1(t,e){if(t==="click")return pc(e)}function p1(t,e){if(t==="input"||t==="change")return pc(e)}function m1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:m1;function Yo(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!$u.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Dp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dp(n)}}function ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tv(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function Qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g1(t){var e=tv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ev(n.ownerDocument.documentElement,n)){if(i!==null&&Qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var o=Ip(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v1=bi&&"documentMode"in document&&11>=document.documentMode,ys=null,dh=null,Do=null,fh=!1;function Up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fh||ys==null||ys!==Fl(i)||(i=ys,"selectionStart"in i&&Qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Yo(Do,i)||(Do=i,i=Gl(dh,"onSelect"),0<i.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},jc={},nv={};bi&&(nv=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function mc(t){if(jc[t])return jc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nv)return jc[t]=e[n];return t}var iv=mc("animationend"),rv=mc("animationiteration"),sv=mc("animationstart"),ov=mc("transitionend"),av=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){av.set(t,e),$r(e,[t])}for(var Xc=0;Xc<Fp.length;Xc++){var $c=Fp[Xc],x1=$c.toLowerCase(),_1=$c[0].toUpperCase()+$c.slice(1);dr(x1,"on"+_1)}dr(iv,"onAnimationEnd");dr(rv,"onAnimationIteration");dr(sv,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(ov,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xy(i,e,void 0,t),t.currentTarget=null}function lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}}}if(Ol)throw t=lh,Ol=!1,lh=null,t}function ht(t,e){var n=e[xh];n===void 0&&(n=e[xh]=new Set);var i=t+"__bubble";n.has(i)||(cv(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),cv(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Ia]){t[Ia]=!0,g0.forEach(function(n){n!=="selectionchange"&&(y1.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Yc("selectionchange",!1,e))}}function cv(t,e,n,i){switch(X0(e)){case 1:var r=Iy;break;case 4:r=Uy;break;default:r=$d}n=r.bind(null,e,n,t),r=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}N0(function(){var c=s,u=Gd(n),f=[];e:{var d=av.get(t);if(d!==void 0){var p=qd,g=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":p=Ky;break;case"focusin":g="focus",p=Vc;break;case"focusout":g="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Jy;break;case iv:case rv:case sv:p=Hy;break;case ov:p=t1;break;case"scroll":p=Fy;break;case"wheel":p=i1;break;case"copy":case"cut":case"paste":p=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,h!==null&&(y=Go(v,h),y!=null&&x.push(Ko(v,y,_)))),m)break;v=v.return}0<x.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==sh&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Ci]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Pr(g):null,g!==null&&(m=Yr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Tp,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=bp,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Ms(p),_=g==null?d:Ms(g),d=new x(y,v+"leave",p,n,u),d.target=m,d.relatedTarget=_,y=null,Pr(u)===c&&(x=new x(h,v+"enter",g,n,u),x.target=_,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,h=g,v=0,_=x;_;_=Zr(_))v++;for(_=0,y=h;y;y=Zr(y))_++;for(;0<v-_;)x=Zr(x),v--;for(;0<_-v;)h=Zr(h),_--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=Zr(x),h=Zr(h)}x=null}else x=null;p!==null&&Op(f,d,p,x,!1),g!==null&&m!==null&&Op(f,m,g,x,!0)}}e:{if(d=c?Ms(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=u1;else if(Pp(d))if(Q0)C=p1;else{C=d1;var T=h1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=f1);if(C&&(C=C(t,c))){Z0(f,C,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&eh(d,"number",d.value)}switch(T=c?Ms(c):window,t){case"focusin":(Pp(T)||T.contentEditable==="true")&&(ys=T,dh=c,Do=null);break;case"focusout":Do=dh=ys=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Up(f,n,u);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":Up(f,n,u)}var b;if(Zd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _s?q0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Y0&&n.locale!=="ko"&&(_s||R!=="onCompositionStart"?R==="onCompositionEnd"&&_s&&(b=$0()):(Ki=u,Yd="value"in Ki?Ki.value:Ki.textContent,_s=!0)),T=Gl(c,R),0<T.length&&(R=new Ap(R,t,null,n,u),f.push({event:R,listeners:T}),b?R.data=b:(b=K0(n),b!==null&&(R.data=b)))),(b=s1?o1(t,n):a1(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(u=new Ap("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=b))}lv(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Op(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(M1,"")}function Ua(t,e,n){if(e=zp(e),zp(t)!==e&&n)throw Error(ie(425))}function Wl(){}var ph=null,mh=null;function gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vh=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(T1)}:vh;function T1(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ei="__reactFiber$"+Js,Zo="__reactProps$"+Js,Ci="__reactContainer$"+Js,xh="__reactEvents$"+Js,A1="__reactListeners$"+Js,b1="__reactHandles$"+Js;function Pr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[ei])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[ei]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function gc(t){return t[Zo]||null}var _h=[],Es=-1;function fr(t){return{current:t}}function dt(t){0>Es||(t.current=_h[Es],_h[Es]=null,Es--)}function ct(t,e){Es++,_h[Es]=t.current,t.current=e}var cr={},Yt=fr(cr),cn=fr(!1),zr=cr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function jl(){dt(cn),dt(Yt)}function Vp(t,e,n){if(Yt.current!==cr)throw Error(ie(168));ct(Yt,e),ct(cn,n)}function uv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,hy(t)||"Unknown",r));return St({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,zr=Yt.current,ct(Yt,t),ct(cn,cn.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=uv(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,dt(cn),dt(Yt),ct(Yt,t)):dt(cn),ct(cn,n)}var _i=null,vc=!1,Zc=!1;function hv(t){_i===null?_i=[t]:_i.push(t)}function C1(t){vc=!0,hv(t)}function pr(){if(!Zc&&_i!==null){Zc=!0;var t=0,e=rt;try{var n=_i;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,vc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),F0(Wd,pr),r}finally{rt=e,Zc=!1}}return null}var ws=[],Ts=0,$l=null,Yl=0,Rn=[],Pn=0,Br=null,Si=1,Mi="";function Tr(t,e){ws[Ts++]=Yl,ws[Ts++]=$l,$l=t,Yl=e}function dv(t,e,n){Rn[Pn++]=Si,Rn[Pn++]=Mi,Rn[Pn++]=Br,Br=t;var i=Si;t=Mi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-$n(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function Jd(t){t.return!==null&&(Tr(t,1),dv(t,1,0))}function ef(t){for(;t===$l;)$l=ws[--Ts],ws[Ts]=null,Yl=ws[--Ts],ws[Ts]=null;for(;t===Br;)Br=Rn[--Pn],Rn[Pn]=null,Mi=Rn[--Pn],Rn[Pn]=null,Si=Rn[--Pn],Rn[Pn]=null}var yn=null,_n=null,pt=!1,Gn=null;function fv(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(pt){var e=_n;if(e){var n=e;if(!Wp(t,e)){if(yh(t))throw Error(ie(418));e=tr(n.nextSibling);var i=yn;e&&Wp(t,e)?fv(i,n):(t.flags=t.flags&-4097|2,pt=!1,yn=t)}}else{if(yh(t))throw Error(ie(418));t.flags=t.flags&-4097|2,pt=!1,yn=t}}}function jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Fa(t){if(t!==yn)return!1;if(!pt)return jp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gh(t.type,t.memoizedProps)),e&&(e=_n)){if(yh(t))throw pv(),Error(ie(418));for(;e;)fv(t,e),e=tr(e.nextSibling)}if(jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?tr(t.stateNode.nextSibling):null;return!0}function pv(){for(var t=_n;t;)t=tr(t.nextSibling)}function Hs(){_n=yn=null,pt=!1}function tf(t){Gn===null?Gn=[t]:Gn.push(t)}var R1=Ni.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ql=fr(null),Kl=null,As=null,nf=null;function rf(){nf=As=Kl=null}function sf(t){var e=ql.current;dt(ql),t._currentValue=e}function Mh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Kl=t,nf=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(nf!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(Kl===null)throw Error(ie(308));As=t,Kl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Lr=null;function of(t){Lr===null?Lr=[t]:Lr.push(t)}function mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,of(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,of(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}function Xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=St({},f,d);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=f}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var vv=new m0.Component().refs;function Eh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=rr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Yn(e,t,r,i),yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=rr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Yn(e,t,r,i),yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=rr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Yn(e,t,i,n),yl(e,t,i))}};function Yp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function xv(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=un(e)?zr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function wh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=vv,af(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=un(e)?zr:Yt.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===vv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kp(t){var e=t._init;return e(t._payload)}function _v(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=sr(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,y){return v===null||v.tag!==6?(v=ru(_,h.mode,y),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,y){var C=_.type;return C===xs?u(h,v,_.props.children,y,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&Kp(C)===v.type)?(y=r(v,_.props),y.ref=fo(h,v,_),y.return=h,y):(y=Al(_.type,_.key,_.props,null,h.mode,y),y.ref=fo(h,v,_),y.return=h,y)}function c(h,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=su(_,h.mode,y),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,y,C){return v===null||v.tag!==7?(v=Or(_,h.mode,y,C),v.return=h,v):(v=r(v,_),v.return=h,v)}function f(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ru(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return _=Al(v.type,v.key,v.props,null,h.mode,_),_.ref=fo(h,null,v),_.return=h,_;case vs:return v=su(v,h.mode,_),v.return=h,v;case Wi:var y=v._init;return f(h,y(v._payload),_)}if(To(v)||ao(v))return v=Or(v,h.mode,_,null),v.return=h,v;ka(h,v)}return null}function d(h,v,_,y){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(h,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Aa:return _.key===C?l(h,v,_,y):null;case vs:return _.key===C?c(h,v,_,y):null;case Wi:return C=_._init,d(h,v,C(_._payload),y)}if(To(_)||ao(_))return C!==null?null:u(h,v,_,y,null);ka(h,_)}return null}function p(h,v,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(_)||null,a(v,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return h=h.get(y.key===null?_:y.key)||null,l(v,h,y,C);case vs:return h=h.get(y.key===null?_:y.key)||null,c(v,h,y,C);case Wi:var T=y._init;return p(h,v,_,T(y._payload),C)}if(To(y)||ao(y))return h=h.get(_)||null,u(v,h,y,C,null);ka(v,y)}return null}function g(h,v,_,y){for(var C=null,T=null,b=v,R=v=0,M=null;b!==null&&R<_.length;R++){b.index>R?(M=b,b=null):M=b.sibling;var S=d(h,b,_[R],y);if(S===null){b===null&&(b=M);break}t&&b&&S.alternate===null&&e(h,b),v=s(S,v,R),T===null?C=S:T.sibling=S,T=S,b=M}if(R===_.length)return n(h,b),pt&&Tr(h,R),C;if(b===null){for(;R<_.length;R++)b=f(h,_[R],y),b!==null&&(v=s(b,v,R),T===null?C=b:T.sibling=b,T=b);return pt&&Tr(h,R),C}for(b=i(h,b);R<_.length;R++)M=p(b,h,R,_[R],y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?R:M.key),v=s(M,v,R),T===null?C=M:T.sibling=M,T=M);return t&&b.forEach(function(L){return e(h,L)}),pt&&Tr(h,R),C}function x(h,v,_,y){var C=ao(_);if(typeof C!="function")throw Error(ie(150));if(_=C.call(_),_==null)throw Error(ie(151));for(var T=C=null,b=v,R=v=0,M=null,S=_.next();b!==null&&!S.done;R++,S=_.next()){b.index>R?(M=b,b=null):M=b.sibling;var L=d(h,b,S.value,y);if(L===null){b===null&&(b=M);break}t&&b&&L.alternate===null&&e(h,b),v=s(L,v,R),T===null?C=L:T.sibling=L,T=L,b=M}if(S.done)return n(h,b),pt&&Tr(h,R),C;if(b===null){for(;!S.done;R++,S=_.next())S=f(h,S.value,y),S!==null&&(v=s(S,v,R),T===null?C=S:T.sibling=S,T=S);return pt&&Tr(h,R),C}for(b=i(h,b);!S.done;R++,S=_.next())S=p(b,h,R,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?R:S.key),v=s(S,v,R),T===null?C=S:T.sibling=S,T=S);return t&&b.forEach(function(H){return e(h,H)}),pt&&Tr(h,R),C}function m(h,v,_,y){if(typeof _=="object"&&_!==null&&_.type===xs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Aa:e:{for(var C=_.key,T=v;T!==null;){if(T.key===C){if(C=_.type,C===xs){if(T.tag===7){n(h,T.sibling),v=r(T,_.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&Kp(C)===T.type){n(h,T.sibling),v=r(T,_.props),v.ref=fo(h,T,_),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}_.type===xs?(v=Or(_.props.children,h.mode,y,_.key),v.return=h,h=v):(y=Al(_.type,_.key,_.props,null,h.mode,y),y.ref=fo(h,v,_),y.return=h,h=y)}return o(h);case vs:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=su(_,h.mode,y),v.return=h,h=v}return o(h);case Wi:return T=_._init,m(h,v,T(_._payload),y)}if(To(_))return g(h,v,_,y);if(ao(_))return x(h,v,_,y);ka(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=ru(_,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return m}var Vs=_v(!0),yv=_v(!1),pa={},ri=fr(pa),Qo=fr(pa),Jo=fr(pa);function Nr(t){if(t===pa)throw Error(ie(174));return t}function lf(t,e){switch(ct(Jo,e),ct(Qo,t),ct(ri,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nh(e,t)}dt(ri),ct(ri,e)}function Gs(){dt(ri),dt(Qo),dt(Jo)}function Sv(t){Nr(Jo.current);var e=Nr(ri.current),n=nh(e,t.type);e!==n&&(ct(Qo,t),ct(ri,n))}function cf(t){Qo.current===t&&(dt(ri),dt(Qo))}var xt=fr(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function uf(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var Sl=Ni.ReactCurrentDispatcher,Jc=Ni.ReactCurrentBatchConfig,Hr=0,_t=null,Pt=null,Ut=null,Jl=!1,Io=!1,ea=0,P1=0;function Gt(){throw Error(ie(321))}function hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function df(t,e,n,i,r,s){if(Hr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?I1:U1,t=n(i,r),Io){s=0;do{if(Io=!1,ea=0,25<=s)throw Error(ie(301));s+=1,Ut=Pt=null,e.updateQueue=null,Sl.current=F1,t=n(i,r)}while(Io)}if(Sl.current=ec,e=Pt!==null&&Pt.next!==null,Hr=0,Ut=Pt=_t=null,Jl=!1,e)throw Error(ie(300));return t}function ff(){var t=ea!==0;return ea=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function In(){if(Pt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Pt=t;else{if(t===null)throw Error(ie(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ta(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=In(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Hr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=u,Vr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=In(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mv(){}function Ev(t,e){var n=_t,i=In(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,pf(Av.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,na(9,Tv.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ie(349));Hr&30||wv(n,e,r)}return r}function wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tv(t,e,n,i){e.value=n,e.getSnapshot=i,bv(e)&&Cv(t)}function Av(t,e,n){return n(function(){bv(e)&&Cv(t)})}function bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Cv(t){var e=Ri(t,1);e!==null&&Yn(e,t,1,-1)}function Zp(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=D1.bind(null,_t,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rv(){return In().memoizedState}function Ml(t,e,n,i){var r=Qn();_t.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function _c(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&hf(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}_t.flags|=t,r.memoizedState=na(1|e,n,s,i)}function Qp(t,e){return Ml(8390656,8,t,e)}function pf(t,e){return _c(2048,8,t,e)}function Pv(t,e){return _c(4,2,t,e)}function Lv(t,e){return _c(4,4,t,e)}function Nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dv(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,Nv.bind(null,e,t),n)}function mf(){}function Iv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Uv(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fv(t,e,n){return Hr&21?(Kn(n,e)||(n=z0(),_t.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function L1(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{rt=n,Jc.transition=i}}function kv(){return In().memoizedState}function N1(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))zv(e,n);else if(n=mv(t,e,n,i),n!==null){var r=en();Yn(n,t,i,r),Bv(n,e,i)}}function D1(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))zv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,of(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mv(t,e,r,i),n!==null&&(r=en(),Yn(n,t,i,r),Bv(n,e,i))}}function Ov(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function zv(t,e){Io=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}var ec={readContext:Dn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},I1={readContext:Dn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=N1.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:mf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=L1.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Qn();if(pt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),kt===null)throw Error(ie(349));Hr&30||wv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qp(Av.bind(null,i,s,t),[t]),i.flags|=2048,na(9,Tv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=kt.identifierPrefix;if(pt){var n=Mi,i=Si;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U1={readContext:Dn,useCallback:Iv,useContext:Dn,useEffect:pf,useImperativeHandle:Dv,useInsertionEffect:Pv,useLayoutEffect:Lv,useMemo:Uv,useReducer:eu,useRef:Rv,useState:function(){return eu(ta)},useDebugValue:mf,useDeferredValue:function(t){var e=In();return Fv(e,Pt.memoizedState,t)},useTransition:function(){var t=eu(ta)[0],e=In().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:Ev,useId:kv,unstable_isNewReconciler:!1},F1={readContext:Dn,useCallback:Iv,useContext:Dn,useEffect:pf,useImperativeHandle:Dv,useInsertionEffect:Pv,useLayoutEffect:Lv,useMemo:Uv,useReducer:tu,useRef:Rv,useState:function(){return tu(ta)},useDebugValue:mf,useDeferredValue:function(t){var e=In();return Pt===null?e.memoizedState=t:Fv(e,Pt.memoizedState,t)},useTransition:function(){var t=tu(ta)[0],e=In().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:Ev,useId:kv,unstable_isNewReconciler:!1};function Ws(t,e){try{var n="",i=e;do n+=uy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function Hv(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,Uh=i),Th(t,e)},n}function Vv(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Th(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new k1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var O1=Ni.ReactCurrentOwner,ln=!1;function Jt(t,e,n,i){e.child=t===null?yv(e,null,n,i):Vs(e,t.child,n,i)}function nm(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=df(t,e,n,i,s,r),n=ff(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(pt&&n&&Jd(e),e.flags|=1,Jt(t,e,i,r),e.child)}function im(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Ah(t,e,n,i,r)}function Wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Cs,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Cs,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Cs,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Cs,gn),gn|=i;return Jt(t,e,r,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ah(t,e,n,i,r){var s=un(n)?zr:Yt.current;return s=Bs(e,s),Is(e,r),n=df(t,e,n,i,s,r),i=ff(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(pt&&i&&Jd(e),e.flags|=1,Jt(t,e,n,r),e.child)}function rm(t,e,n,i,r){if(un(n)){var s=!0;Xl(e)}else s=!1;if(Is(e,r),e.stateNode===null)El(t,e),xv(e,n,i),wh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=un(n)?zr:Yt.current,c=Bs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&qp(e,o,i,c),ji=!1;var d=e.memoizedState;o.state=d,Zl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||cn.current||ji?(typeof u=="function"&&(Eh(e,n,u,i),l=e.memoizedState),(a=ji||Yp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=un(n)?zr:Yt.current,l=Bs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&qp(e,o,i,l),ji=!1,d=e.memoizedState,o.state=d,Zl(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||cn.current||ji?(typeof p=="function"&&(Eh(e,n,p,i),g=e.memoizedState),(c=ji||Yp(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return bh(t,e,n,i,s,r)}function bh(t,e,n,i,r,s){jv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gp(e,n,!1),Pi(t,e,s);i=e.stateNode,O1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function Xv(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),lf(t,e.containerInfo)}function sm(t,e,n,i,r){return Hs(),tf(r),e.flags|=256,Jt(t,e,n,i),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $v(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(xt,r&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rh(n),e.memoizedState=Ch,t):gf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return z1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ch,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gf(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,i){return i!==null&&tf(i),Vs(e,t.child,null,n),t=gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(ie(422))),Oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Rh(o),e.memoizedState=Ch,s);if(!(e.mode&1))return Oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=nu(s,i,void 0),Oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Yn(i,t,r,-1))}return Mf(),i=nu(Error(ie(421))),Oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Q1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=tr(r.nextSibling),yn=e,pt=!0,Gn=null,t!==null&&(Rn[Pn++]=Si,Rn[Pn++]=Mi,Rn[Pn++]=Br,Si=t.id,Mi=t.overflow,Br=e),e=gf(e,i.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mh(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Yv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B1(t,e,n){switch(e.tag){case 3:Xv(e),Hs();break;case 5:Sv(e);break;case 1:un(e.type)&&Xl(e);break;case 4:lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?$v(t,e,n):(ct(xt,xt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ct(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Yv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wv(t,e,n)}return Pi(t,e,n)}var qv,Ph,Kv,Zv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};Kv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(ri.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=th(t,r),i=th(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}ih(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function po(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function H1(t,e,n){var i=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return un(e.type)&&jl(),Wt(e),null;case 3:return i=e.stateNode,Gs(),dt(cn),dt(Yt),uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Oh(Gn),Gn=null))),Ph(t,e),Wt(e),null;case 5:cf(e);var r=Nr(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Wt(e),null}if(t=Nr(ri.current),Fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<bo.length;r++)ht(bo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":mp(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":vp(i,s),ht("invalid",i)}ih(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":ba(i),gp(i,s,!0);break;case"textarea":ba(i),xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Zo]=i,qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=rh(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<bo.length;r++)ht(bo[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":mp(t,i),r=Qu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":vp(t,i),r=th(t,i),ht("invalid",t);break;default:r=i}ih(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&zd(t,s,l,o))}switch(n){case"input":ba(t),gp(t,i,!1);break;case"textarea":ba(t),xp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)Zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Nr(Jo.current),Nr(ri.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Wt(e),null;case 13:if(dt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&_n!==null&&e.mode&1&&!(e.flags&128))pv(),Hs(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ei]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Gn!==null&&(Oh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):Mf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Gs(),Ph(t,e),t===null&&qo(e.stateNode.containerInfo),Wt(e),null;case 10:return sf(e.type._context),Wt(e),null;case 17:return un(e.type)&&jl(),Wt(e),null;case 19:if(dt(xt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)po(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ql(t),o!==null){for(e.flags|=128,po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>js&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Wt(e),null}else 2*At()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=xt.current,ct(xt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Sf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function V1(t,e){switch(ef(e),e.tag){case 1:return un(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),dt(cn),dt(Yt),uf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cf(e),null;case 13:if(dt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(xt),null;case 4:return Gs(),null;case 10:return sf(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var za=!1,$t=!1,G1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Lh(t,e,n){try{n()}catch(i){Et(t,e,i)}}var am=!1;function W1(t,e){if(ph=Hl,t=tv(),Qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mh={focusedElem:t,selectionRange:n},Hl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=am,am=!1,g}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lh(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Zo],delete e[xh],delete e[A1],delete e[b1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}function Ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var zt=null,Vn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:$t||bs(n,e);case 6:var i=zt,r=Vn;zt=null,Ii(t,e,n),zt=i,Vn=r,zt!==null&&(Vn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Vn?(t=zt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Xo(t)):Kc(zt,n.stateNode));break;case 4:i=zt,r=Vn,zt=n.stateNode.containerInfo,Vn=!0,Ii(t,e,n),zt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lh(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!$t&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ii(t,e,n),$t=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G1),e.forEach(function(i){var r=J1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Vn=!1;break e;case 3:zt=a.stateNode.containerInfo,Vn=!0;break e;case 4:zt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(zt===null)throw Error(ie(160));ex(s,o,r),zt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Zn(t),i&4){try{Uo(3,t,t.return),yc(3,t)}catch(x){Et(t,t.return,x)}try{Uo(5,t,t.return)}catch(x){Et(t,t.return,x)}}break;case 1:kn(e,t),Zn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(kn(e,t),Zn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(x){Et(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M0(r,s),rh(a,o);var c=rh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?b0(r,f):u==="dangerouslySetInnerHTML"?T0(r,f):u==="children"?Vo(r,f):zd(r,u,f,c)}switch(a){case"input":Ju(r,s);break;case"textarea":E0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ps(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(x){Et(t,t.return,x)}}break;case 6:if(kn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Et(t,t.return,x)}}break;case 3:if(kn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(x){Et(t,t.return,x)}break;case 4:kn(e,t),Zn(t);break;case 13:kn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_f=At())),i&4&&cm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,kn(e,t),$t=c):kn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(f=pe=u;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Uo(4,d,d.return);break;case 1:bs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Et(i,n,x)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){hm(f);continue}}p!==null?(p.return=d,pe=p):hm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=A0("display",o))}catch(x){Et(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Et(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kn(e,t),Zn(t),i&4&&cm(t);break;case 21:break;default:kn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=lm(t);Ih(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lm(t);Dh(t,a,o);break;default:throw Error(ie(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j1(t,e,n){pe=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=za;var c=$t;if(za=o,($t=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?dm(r):l!==null?(l.return=o,pe=l):dm(r);for(;s!==null;)pe=s,nx(s),s=s.sibling;pe=r,za=a,$t=c}um(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):um(t)}}function um(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}$t||e.flags&512&&Nh(e)}catch(d){Et(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function hm(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function dm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Nh(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Nh(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var X1=Math.ceil,tc=Ni.ReactCurrentDispatcher,vf=Ni.ReactCurrentOwner,Nn=Ni.ReactCurrentBatchConfig,Xe=0,kt=null,Ct=null,Bt=0,gn=0,Cs=fr(0),Lt=0,ia=null,Vr=0,Sc=0,xf=0,Fo=null,an=null,_f=0,js=1/0,xi=null,nc=!1,Uh=null,ir=null,Ba=!1,Zi=null,ic=0,ko=0,Fh=null,wl=-1,Tl=0;function en(){return Xe&6?At():wl!==-1?wl:wl=At()}function rr(t){return t.mode&1?Xe&2&&Bt!==0?Bt&-Bt:R1.transition!==null?(Tl===0&&(Tl=z0()),Tl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:X0(t.type)),t):1}function Yn(t,e,n,i){if(50<ko)throw ko=0,Fh=null,Error(ie(185));ha(t,n,i),(!(Xe&2)||t!==kt)&&(t===kt&&(!(Xe&2)&&(Sc|=n),Lt===4&&Yi(t,Bt)),hn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(js=At()+500,vc&&pr()))}function hn(t,e){var n=t.callbackNode;Ry(t,e);var i=Bl(t,t===kt?Bt:0);if(i===0)n!==null&&Sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sp(n),e===1)t.tag===0?C1(fm.bind(null,t)):hv(fm.bind(null,t)),w1(function(){!(Xe&6)&&pr()}),n=null;else{switch(B0(i)){case 1:n=Wd;break;case 4:n=k0;break;case 16:n=zl;break;case 536870912:n=O0;break;default:n=zl}n=ux(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(wl=-1,Tl=0,Xe&6)throw Error(ie(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Bl(t,t===kt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Xe;Xe|=2;var s=sx();(kt!==t||Bt!==e)&&(xi=null,js=At()+500,kr(t,e));do try{q1();break}catch(a){rx(t,a)}while(!0);rf(),tc.current=s,Xe=r,Ct!==null?e=0:(kt=null,Bt=0,e=Lt)}if(e!==0){if(e===2&&(r=ch(t),r!==0&&(i=r,e=kh(t,r))),e===1)throw n=ia,kr(t,0),Yi(t,i),hn(t,At()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!$1(r)&&(e=rc(t,i),e===2&&(s=ch(t),s!==0&&(i=s,e=kh(t,s))),e===1))throw n=ia,kr(t,0),Yi(t,i),hn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Ar(t,an,xi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=_f+500-At(),10<e)){if(Bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vh(Ar.bind(null,t,an,xi),e);break}Ar(t,an,xi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X1(i/1960))-i,10<i){t.timeoutHandle=vh(Ar.bind(null,t,an,xi),i);break}Ar(t,an,xi);break;case 5:Ar(t,an,xi);break;default:throw Error(ie(329))}}}return hn(t,At()),t.callbackNode===n?ix.bind(null,t):null}function kh(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=rc(t,e),t!==2&&(e=an,an=n,e!==null&&Oh(e)),t}function Oh(t){an===null?an=t:an.push.apply(an,t)}function $1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~xf,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function fm(t){if(Xe&6)throw Error(ie(327));Us();var e=Bl(t,0);if(!(e&1))return hn(t,At()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=ch(t);i!==0&&(e=i,n=kh(t,i))}if(n===1)throw n=ia,kr(t,0),Yi(t,e),hn(t,At()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,an,xi),hn(t,At()),null}function yf(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(js=At()+500,vc&&pr())}}function Gr(t){Zi!==null&&Zi.tag===0&&!(Xe&6)&&Us();var e=Xe;Xe|=1;var n=Nn.transition,i=rt;try{if(Nn.transition=null,rt=1,t)return t()}finally{rt=i,Nn.transition=n,Xe=e,!(Xe&6)&&pr()}}function Sf(){gn=Cs.current,dt(Cs)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E1(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:Gs(),dt(cn),dt(Yt),uf();break;case 5:cf(i);break;case 4:Gs();break;case 13:dt(xt);break;case 19:dt(xt);break;case 10:sf(i.type._context);break;case 22:case 23:Sf()}n=n.return}if(kt=t,Ct=t=sr(t.current,null),Bt=gn=e,Lt=0,ia=null,xf=Sc=Vr=0,an=Fo=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Lr=null}return t}function rx(t,e){do{var n=Ct;try{if(rf(),Sl.current=ec,Jl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jl=!1}if(Hr=0,Ut=Pt=_t=null,Io=!1,ea=0,vf.current=null,n===null||n.return===null){Lt=1,ia=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=em(o);if(p!==null){p.flags&=-257,tm(p,o,a,s,e),p.mode&1&&Jp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Jp(s,c,e),Mf();break e}l=Error(ie(426))}}else if(pt&&a.mode&1){var m=em(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tm(m,o,a,s,e),tf(Ws(l,a));break e}}s=l=Ws(l,a),Lt!==4&&(Lt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Hv(s,l,e);Xp(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ir===null||!ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Vv(s,a,e);Xp(s,y);break e}}s=s.return}while(s!==null)}ax(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function sx(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Mf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(Vr&268435455)&&!(Sc&268435455)||Yi(kt,Bt)}function rc(t,e){var n=Xe;Xe|=2;var i=sx();(kt!==t||Bt!==e)&&(xi=null,kr(t,e));do try{Y1();break}catch(r){rx(t,r)}while(!0);if(rf(),Xe=n,tc.current=i,Ct!==null)throw Error(ie(261));return kt=null,Bt=0,Lt}function Y1(){for(;Ct!==null;)ox(Ct)}function q1(){for(;Ct!==null&&!yy();)ox(Ct)}function ox(t){var e=cx(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?ax(t):Ct=e,vf.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=V1(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Ct=null;return}}else if(n=H1(n,e,gn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Lt===0&&(Lt=5)}function Ar(t,e,n){var i=rt,r=Nn.transition;try{Nn.transition=null,rt=1,K1(t,e,n,i)}finally{Nn.transition=r,rt=i}return null}function K1(t,e,n,i){do Us();while(Zi!==null);if(Xe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Py(t,s),t===kt&&(Ct=kt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,ux(zl,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=rt;rt=1;var a=Xe;Xe|=4,vf.current=null,W1(t,n),tx(n,t),g1(mh),Hl=!!ph,mh=ph=null,t.current=n,j1(n),Sy(),Xe=a,rt=o,Nn.transition=s}else t.current=n;if(Ba&&(Ba=!1,Zi=t,ic=r),s=t.pendingLanes,s===0&&(ir=null),wy(n.stateNode),hn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=Uh,Uh=null,t;return ic&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Fh?ko++:(ko=0,Fh=t):ko=0,pr(),null}function Us(){if(Zi!==null){var t=B0(ic),e=Nn.transition,n=rt;try{if(Nn.transition=null,rt=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,ic=0,Xe&6)throw Error(ie(331));var r=Xe;for(Xe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Uo(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var d=u.sibling,p=u.return;if(Qv(u),u===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var v=t.current;for(pe=v;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Xe=r,pr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(dc,t)}catch{}i=!0}return i}finally{rt=n,Nn.transition=e}}return!1}function pm(t,e,n){e=Ws(n,e),e=Hv(t,e,1),t=nr(t,e,1),e=en(),t!==null&&(ha(t,1,e),hn(t,e))}function Et(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Ws(n,t),t=Vv(e,t,1),e=nr(e,t,1),t=en(),e!==null&&(ha(e,1,t),hn(e,t));break}}e=e.return}}function Z1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Bt&n)===n&&(Lt===4||Lt===3&&(Bt&130023424)===Bt&&500>At()-_f?kr(t,0):xf|=n),hn(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=en();t=Ri(t,e),t!==null&&(ha(t,e,n),hn(t,n))}function Q1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function J1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),lx(t,n)}var cx;cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,B1(t,e,n);ln=!!(t.flags&131072)}else ln=!1,pt&&e.flags&1048576&&dv(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=Bs(e,Yt.current);Is(e,n),r=df(null,e,i,t,r,n);var s=ff();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,af(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,wh(e,i,t,n),e=bh(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Jd(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tS(i),t=Hn(i,t),r){case 0:e=Ah(null,e,i,t,n);break e;case 1:e=rm(null,e,i,t,n);break e;case 11:e=nm(null,e,i,t,n);break e;case 14:e=im(null,e,i,Hn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ah(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),rm(t,e,i,r,n);case 3:e:{if(Xv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gv(t,e),Zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(ie(423)),e),e=sm(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(ie(424)),e),e=sm(t,e,i,n,r);break e}else for(_n=tr(e.stateNode.containerInfo.firstChild),yn=e,pt=!0,Gn=null,n=yv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Pi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Sv(e),t===null&&Sh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gh(i,r)?o=null:s!==null&&gh(i,s)&&(e.flags|=32),jv(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return $v(t,e,n);case 4:return lf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),nm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(ql,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!cn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Dn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),im(t,e,i,r,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),El(t,e),e.tag=1,un(i)?(t=!0,Xl(e)):t=!1,Is(e,n),xv(e,i,r),wh(e,i,r,n),bh(null,e,i,!0,t,n);case 19:return Yv(t,e,n);case 22:return Wv(t,e,n)}throw Error(ie(156,e.tag))};function ux(t,e){return F0(t,e)}function eS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new eS(t,e,n,i)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tS(t){if(typeof t=="function")return Ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hd)return 11;if(t===Vd)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return Or(n.children,r,s,e);case Bd:o=8,r|=8;break;case Yu:return t=Ln(12,n,e,r|2),t.elementType=Yu,t.lanes=s,t;case qu:return t=Ln(13,n,e,r),t.elementType=qu,t.lanes=s,t;case Ku:return t=Ln(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case _0:return Mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v0:o=10;break e;case x0:o=9;break e;case Hd:o=11;break e;case Vd:o=14;break e;case Wi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Mc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,i,r,s,o,a,l){return t=new nS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),t}function iS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function hx(t){if(!t)return cr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(un(n))return uv(t,n,e)}return e}function dx(t,e,n,i,r,s,o,a,l){return t=wf(n,i,!0,t,r,s,o,a,l),t.context=hx(null),n=t.current,i=en(),r=rr(n),s=wi(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,ha(t,r,i),hn(t,i),t}function Ec(t,e,n,i){var r=e.current,s=en(),o=rr(r);return n=hx(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(Yn(t,r,o,s),yl(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tf(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function rS(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Af(t){this._internalRoot=t}wc.prototype.render=Af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ec(t,e,null,null)};wc.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Ec(null,t,null,null)}),e[Ci]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=G0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&j0(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function sS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=dx(e,i,t,0,null,!1,!1,"",gm);return t._reactRootContainer=o,t[Ci]=o.current,qo(t.nodeType===8?t.parentNode:t),Gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=wf(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=l,t[Ci]=l.current,qo(t.nodeType===8?t.parentNode:t),Gr(function(){Ec(e,l,n,i)}),l}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}Ec(e,o,t,r)}else o=sS(n,e,t,r,i);return sc(o)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(jd(e,n|1),hn(e,At()),!(Xe&6)&&(js=At()+500,pr()))}break;case 13:Gr(function(){var i=Ri(t,1);if(i!==null){var r=en();Yn(i,t,1,r)}}),Tf(t,1)}};Xd=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=en();Yn(e,t,134217728,n)}Tf(t,134217728)}};V0=function(t){if(t.tag===13){var e=rr(t),n=Ri(t,e);if(n!==null){var i=en();Yn(n,t,e,i)}Tf(t,e)}};G0=function(){return rt};W0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};oh=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gc(i);if(!r)throw Error(ie(90));S0(i),Ju(i,r)}}}break;case"textarea":E0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};P0=yf;L0=Gr;var oS={usingClientEntryPoint:!1,Events:[fa,Ms,gc,C0,R0,yf]},mo={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aS={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I0(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{dc=Ha.inject(aS),ii=Ha}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(ie(200));return iS(t,e,null,n)};En.createRoot=function(t,e){if(!bf(t))throw Error(ie(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,qo(t.nodeType===8?t.parentNode:t),new Af(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=I0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Gr(t)};En.hydrate=function(t,e,n){if(!Tc(e))throw Error(ie(200));return Ac(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dx(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};En.render=function(t,e,n){if(!Tc(e))throw Error(ie(200));return Ac(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(ie(40));return t._reactRootContainer?(Gr(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};En.unstable_batchedUpdates=yf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Ac(t,e,n,!1,i)};En.version="18.2.0-next-9e3b772b8-20220608";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),d0.exports=En;var lS=d0.exports,vm=lS;Xu.createRoot=vm.createRoot,Xu.hydrateRoot=vm.hydrateRoot;var Cf={};Object.defineProperty(Cf,"__esModule",{value:!0});Cf.parse=mS;Cf.serialize=gS;const cS=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,uS=/^[\u0021-\u003A\u003C-\u007E]*$/,hS=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,dS=/^[\u0020-\u003A\u003D-\u007E]*$/,fS=Object.prototype.toString,pS=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function mS(t,e){const n=new pS,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||vS;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?i:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const c=xm(t,s,o),u=_m(t,o,c),f=t.slice(c,u);if(n[f]===void 0){let d=xm(t,o+1,l),p=_m(t,l,d);const g=r(t.slice(d,p));n[f]=g}s=l+1}while(s<i);return n}function xm(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function _m(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function gS(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!cS.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!uS.test(r))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+r;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!hS.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!dS.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!xS(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function vS(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function xS(t){return fS.call(t)==="[object Date]"}var ym="popstate";function _S(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return zh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ra(r)}return SS(e,n,null,t)}function yt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function oi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yS(){return Math.random().toString(36).substring(2,10)}function Sm(t,e){return{usr:t.state,key:t.key,idx:e}}function zh(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?eo(e):e,state:n,key:e&&e.key||i||yS()}}function ra({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function SS(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",l=null,c=u();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function u(){return(o.state||{idx:null}).idx}function f(){a="POP";let m=u(),h=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:h})}function d(m,h){a="PUSH";let v=zh(x.location,m,h);c=u()+1;let _=Sm(v,c),y=x.createHref(v);try{o.pushState(_,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,h){a="REPLACE";let v=zh(x.location,m,h);c=u();let _=Sm(v,c),y=x.createHref(v);o.replaceState(_,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){return MS(m)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ym,f),l=m,()=>{r.removeEventListener(ym,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return o.go(m)}};return x}function MS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),yt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ra(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function mx(t,e,n="/"){return ES(t,e,n,!1)}function ES(t,e,n,i){let r=typeof e=="string"?eo(e):e,s=Li(r.pathname||"/",n);if(s==null)return null;let o=gx(t);wS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=US(s);a=DS(o[l],c,i)}return a}function gx(t,e=[],n=[],i=""){let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(yt(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=Ti([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(yt(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),gx(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:LS(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of vx(s.path))r(s,o,l)}),e}function vx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=vx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function wS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var TS=/^:[\w-]+$/,AS=3,bS=2,CS=1,RS=10,PS=-2,Mm=t=>t==="*";function LS(t,e){let n=t.split("/"),i=n.length;return n.some(Mm)&&(i+=PS),e&&(i+=bS),n.filter(r=>!Mm(r)).reduce((r,s)=>r+(TS.test(s)?AS:s===""?CS:RS),i)}function NS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function DS(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Ti([s,f.pathname]),pathnameBase:zS(Ti([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=Ti([s,f.pathnameBase]))}return o}function oc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=IS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,{paramName:u,isOptional:f},d)=>{if(u==="*"){let g=a[d]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const p=a[d];return f&&!p?c[u]=void 0:c[u]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function IS(t,e=!1,n=!0){oi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function US(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return oi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Li(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function FS(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?eo(t):t;return{pathname:n?n.startsWith("/")?n:kS(n,e):e,search:BS(i),hash:HS(r)}}function kS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ou(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xx(t){let e=OS(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function _x(t,e,n,i=!1){let r;typeof t=="string"?r=eo(t):(r={...t},yt(!r.pathname||!r.pathname.includes("?"),ou("?","pathname","search",r)),yt(!r.pathname||!r.pathname.includes("#"),ou("#","pathname","hash",r)),yt(!r.search||!r.search.includes("#"),ou("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=FS(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Ti=t=>t.join("/").replace(/\/\/+/g,"/"),zS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var yx=["POST","PUT","PATCH","DELETE"];new Set(yx);var GS=["GET",...yx];new Set(GS);var to=N.createContext(null);to.displayName="DataRouter";var bc=N.createContext(null);bc.displayName="DataRouterState";var Sx=N.createContext({isTransitioning:!1});Sx.displayName="ViewTransition";var WS=N.createContext(new Map);WS.displayName="Fetchers";var jS=N.createContext(null);jS.displayName="Await";var ci=N.createContext(null);ci.displayName="Navigation";var ma=N.createContext(null);ma.displayName="Location";var ui=N.createContext({outlet:null,matches:[],isDataRoute:!1});ui.displayName="Route";var Rf=N.createContext(null);Rf.displayName="RouteError";function XS(t,{relative:e}={}){yt(ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=N.useContext(ci),{hash:r,pathname:s,search:o}=va(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Ti([n,s])),i.createHref({pathname:a,search:o,hash:r})}function ga(){return N.useContext(ma)!=null}function mr(){return yt(ga(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(ma).location}var Mx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ex(t){N.useContext(ci).static||N.useLayoutEffect(t)}function Pf(){let{isDataRoute:t}=N.useContext(ui);return t?oM():$S()}function $S(){yt(ga(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(to),{basename:e,navigator:n}=N.useContext(ci),{matches:i}=N.useContext(ui),{pathname:r}=mr(),s=JSON.stringify(xx(i)),o=N.useRef(!1);return Ex(()=>{o.current=!0}),N.useCallback((l,c={})=>{if(oi(o.current,Mx),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=_x(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Ti([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,s,r,t])}N.createContext(null);function YS(){let{matches:t}=N.useContext(ui),e=t[t.length-1];return e?e.params:{}}function va(t,{relative:e}={}){let{matches:n}=N.useContext(ui),{pathname:i}=mr(),r=JSON.stringify(xx(n));return N.useMemo(()=>_x(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function qS(t,e){return wx(t,e)}function wx(t,e,n,i){var h;yt(ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=N.useContext(ci),{matches:s}=N.useContext(ui),o=s[s.length-1],a=o?o.params:{},l=o?o.pathname:"/",c=o?o.pathnameBase:"/",u=o&&o.route;{let v=u&&u.path||"";Tx(l,!u||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let f=mr(),d;if(e){let v=typeof e=="string"?eo(e):e;yt(c==="/"||((h=v.pathname)==null?void 0:h.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${v.pathname}" was given in the \`location\` prop.`),d=v}else d=f;let p=d.pathname||"/",g=p;if(c!=="/"){let v=c.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let x=mx(t,{pathname:g});oi(u||x!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),oi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=eM(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Ti([c,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Ti([c,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i);return e&&m?N.createElement(ma.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},m):m}function KS(){let t=sM(),e=VS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:s},"ErrorBoundary")," or"," ",N.createElement("code",{style:s},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:r},n):null,o)}var ZS=N.createElement(KS,null),QS=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?N.createElement(ui.Provider,{value:this.props.routeContext},N.createElement(Rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JS({routeContext:t,match:e,children:n}){let i=N.useContext(to);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(ui.Provider,{value:t},n)}function eM(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,s=n==null?void 0:n.errors;if(s!=null){let l=r.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);yt(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<r.length;l++){let c=r[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:u,errors:f}=n,d=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||d){o=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((l,c,u)=>{let f,d=!1,p=null,g=null;n&&(f=s&&c.route.id?s[c.route.id]:void 0,p=c.route.errorElement||ZS,o&&(a<0&&u===0?(Tx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,g=null):a===u&&(d=!0,g=c.route.hydrateFallbackElement||null)));let x=e.concat(r.slice(0,u+1)),m=()=>{let h;return f?h=p:d?h=g:c.route.Component?h=N.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=l,N.createElement(JS,{match:c,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?N.createElement(QS,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}function Lf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tM(t){let e=N.useContext(to);return yt(e,Lf(t)),e}function nM(t){let e=N.useContext(bc);return yt(e,Lf(t)),e}function iM(t){let e=N.useContext(ui);return yt(e,Lf(t)),e}function Nf(t){let e=iM(t),n=e.matches[e.matches.length-1];return yt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function rM(){return Nf("useRouteId")}function sM(){var i;let t=N.useContext(Rf),e=nM("useRouteError"),n=Nf("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function oM(){let{router:t}=tM("useNavigate"),e=Nf("useNavigate"),n=N.useRef(!1);return Ex(()=>{n.current=!0}),N.useCallback(async(r,s={})=>{oi(n.current,Mx),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Em={};function Tx(t,e,n){!e&&!Em[t]&&(Em[t]=!0,oi(!1,n))}N.memo(aM);function aM({routes:t,future:e,state:n}){return wx(t,void 0,n,e)}function bl(t){yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lM({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){yt(!ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=N.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=eo(n));let{pathname:l="/",search:c="",hash:u="",state:f=null,key:d="default"}=n,p=N.useMemo(()=>{let g=Li(l,o);return g==null?null:{location:{pathname:g,search:c,hash:u,state:f,key:d},navigationType:i}},[o,l,c,u,f,d,i]);return oi(p!=null,`<Router basename="${o}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:N.createElement(ci.Provider,{value:a},N.createElement(ma.Provider,{children:e,value:p}))}function cM({children:t,location:e}){return qS(Bh(t),e)}function Bh(t,e=[]){let n=[];return N.Children.forEach(t,(i,r)=>{if(!N.isValidElement(i))return;let s=[...e,r];if(i.type===N.Fragment){n.push.apply(n,Bh(i.props.children,s));return}yt(i.type===bl,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),yt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Bh(i.props.children,s)),n.push(o)}),n}var Cl="get",Rl="application/x-www-form-urlencoded";function Cc(t){return t!=null&&typeof t.tagName=="string"}function uM(t){return Cc(t)&&t.tagName.toLowerCase()==="button"}function hM(t){return Cc(t)&&t.tagName.toLowerCase()==="form"}function dM(t){return Cc(t)&&t.tagName.toLowerCase()==="input"}function fM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pM(t,e){return t.button===0&&(!e||e==="_self")&&!fM(t)}var Va=null;function mM(){if(Va===null)try{new FormData(document.createElement("form"),0),Va=!1}catch{Va=!0}return Va}var gM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function au(t){return t!=null&&!gM.has(t)?(oi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rl}"`),null):t}function vM(t,e){let n,i,r,s,o;if(hM(t)){let a=t.getAttribute("action");i=a?Li(a,e):null,n=t.getAttribute("method")||Cl,r=au(t.getAttribute("enctype"))||Rl,s=new FormData(t)}else if(uM(t)||dM(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(i=l?Li(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Cl,r=au(t.getAttribute("formenctype"))||au(a.getAttribute("enctype"))||Rl,s=new FormData(a,t),!mM()){let{name:c,type:u,value:f}=t;if(u==="image"){let d=c?`${c}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else c&&s.append(c,f)}}else{if(Cc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cl,i=null,r=Rl,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}function Df(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function xM(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _M(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function yM(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await xM(s,n);return o.links?o.links():[]}return[]}));return wM(i.flat(1).filter(_M).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function wm(t,e,n,i,r,s){let o=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>o(l,c)||a(l,c)):s==="data"?e.filter((l,c)=>{var f;let u=i.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(o(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function SM(t,e,{includeHydrateFallback:n}={}){return MM(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function MM(t){return[...new Set(t)]}function EM(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function wM(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(EM(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var TM=new Set([100,101,204,205]);function AM(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Li(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Ax(){let t=N.useContext(to);return Df(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function bM(){let t=N.useContext(bc);return Df(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var If=N.createContext(void 0);If.displayName="FrameworkContext";function bx(){let t=N.useContext(If);return Df(t,"You must render this element inside a <HydratedRouter> element"),t}function CM(t,e){let n=N.useContext(If),[i,r]=N.useState(!1),[s,o]=N.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:f}=e,d=N.useRef(null);N.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let x=h=>{h.forEach(v=>{o(v.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return d.current&&m.observe(d.current),()=>{m.disconnect()}}},[t]),N.useEffect(()=>{if(i){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},g=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,d,{}]:[s,d,{onFocus:go(a,p),onBlur:go(l,g),onMouseEnter:go(c,p),onMouseLeave:go(u,g),onTouchStart:go(f,p)}]:[!1,d,{}]}function go(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function RM({page:t,...e}){let{router:n}=Ax(),i=N.useMemo(()=>mx(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?N.createElement(LM,{page:t,matches:i,...e}):null}function PM(t){let{manifest:e,routeModules:n}=bx(),[i,r]=N.useState([]);return N.useEffect(()=>{let s=!1;return yM(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function LM({page:t,matches:e,...n}){let i=mr(),{manifest:r,routeModules:s}=bx(),{basename:o}=Ax(),{loaderData:a,matches:l}=bM(),c=N.useMemo(()=>wm(t,e,l,r,i,"data"),[t,e,l,r,i]),u=N.useMemo(()=>wm(t,e,l,r,i,"assets"),[t,e,l,r,i]),f=N.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let g=new Set,x=!1;if(e.forEach(h=>{var _;let v=r.routes[h.route.id];!v||!v.hasLoader||(!c.some(y=>y.route.id===h.route.id)&&h.route.id in a&&((_=s[h.route.id])!=null&&_.shouldRevalidate)||v.hasClientLoader?x=!0:g.add(h.route.id))}),g.size===0)return[];let m=AM(t,o);return x&&g.size>0&&m.searchParams.set("_routes",e.filter(h=>g.has(h.route.id)).map(h=>h.route.id).join(",")),[m.pathname+m.search]},[o,a,i,r,c,e,t,s]),d=N.useMemo(()=>SM(u,r),[u,r]),p=PM(u);return N.createElement(N.Fragment,null,f.map(g=>N.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),d.map(g=>N.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),p.map(({key:g,link:x})=>N.createElement("link",{key:g,...x})))}function NM(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cx&&(window.__reactRouterVersion="7.6.2")}catch{}function DM({basename:t,children:e,window:n}){let i=N.useRef();i.current==null&&(i.current=_S({window:n,v5Compat:!0}));let r=i.current,[s,o]=N.useState({action:r.action,location:r.location}),a=N.useCallback(l=>{N.startTransition(()=>o(l))},[o]);return N.useLayoutEffect(()=>r.listen(a),[r,a]),N.createElement(lM,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dr=N.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f,...d},p){let{basename:g}=N.useContext(ci),x=typeof c=="string"&&Rx.test(c),m,h=!1;if(typeof c=="string"&&x&&(m=c,Cx))try{let M=new URL(window.location.href),S=c.startsWith("//")?new URL(M.protocol+c):new URL(c),L=Li(S.pathname,g);S.origin===M.origin&&L!=null?c=L+S.search+S.hash:h=!0}catch{oi(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=XS(c,{relative:r}),[_,y,C]=CM(i,d),T=kM(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function b(M){e&&e(M),M.defaultPrevented||T(M)}let R=N.createElement("a",{...d,...C,href:m||v,onClick:h||s?e:b,ref:NM(p,y),target:l,"data-discover":!x&&n==="render"?"true":void 0});return _&&!x?N.createElement(N.Fragment,null,R,N.createElement(RM,{page:v})):R});Dr.displayName="Link";var IM=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:l,...c},u){let f=va(o,{relative:c.relative}),d=mr(),p=N.useContext(bc),{navigator:g,basename:x}=N.useContext(ci),m=p!=null&&VM(f)&&a===!0,h=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,v=d.pathname,_=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),_=_?_.toLowerCase():null,h=h.toLowerCase()),_&&x&&(_=Li(_,x)||_);const y=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=v===h||!r&&v.startsWith(h)&&v.charAt(y)==="/",T=_!=null&&(_===h||!r&&_.startsWith(h)&&_.charAt(h.length)==="/"),b={isActive:C,isPending:T,isTransitioning:m},R=C?e:void 0,M;typeof i=="function"?M=i(b):M=[i,C?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let S=typeof s=="function"?s(b):s;return N.createElement(Dr,{...c,"aria-current":R,className:M,ref:u,style:S,to:o,viewTransition:a},typeof l=="function"?l(b):l)});IM.displayName="NavLink";var UM=N.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=Cl,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:f,...d},p)=>{let g=BM(),x=HM(a,{relative:c}),m=o.toLowerCase()==="get"?"get":"post",h=typeof a=="string"&&Rx.test(a),v=_=>{if(l&&l(_),_.defaultPrevented)return;_.preventDefault();let y=_.nativeEvent.submitter,C=(y==null?void 0:y.getAttribute("formmethod"))||o;g(y||_.currentTarget,{fetcherKey:e,method:C,navigate:n,replace:r,state:s,relative:c,preventScrollReset:u,viewTransition:f})};return N.createElement("form",{ref:p,method:m,action:x,onSubmit:i?l:v,...d,"data-discover":!h&&t==="render"?"true":void 0})});UM.displayName="Form";function FM(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Px(t){let e=N.useContext(to);return yt(e,FM(t)),e}function kM(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=Pf(),l=mr(),c=va(t,{relative:s});return N.useCallback(u=>{if(pM(u,e)){u.preventDefault();let f=n!==void 0?n:ra(l)===ra(c);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[l,a,c,n,i,e,t,r,s,o])}var OM=0,zM=()=>`__${String(++OM)}__`;function BM(){let{router:t}=Px("useSubmit"),{basename:e}=N.useContext(ci),n=rM();return N.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:l,body:c}=vM(i,e);if(r.navigate===!1){let u=r.fetcherKey||zM();await t.fetch(u,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function HM(t,{relative:e}={}){let{basename:n}=N.useContext(ci),i=N.useContext(ui);yt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...va(t||".",{relative:e})},o=mr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let u=a.toString();s.search=u?`?${u}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Ti([n,s.pathname])),ra(s)}function VM(t,e={}){let n=N.useContext(Sx);yt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Px("useViewTransitionState"),r=va(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Li(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Li(n.nextLocation.pathname,i)||n.nextLocation.pathname;return oc(r.pathname,o)!=null||oc(r.pathname,s)!=null}[...TM];/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ze=(t,e)=>{const n=N.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>N.createElement("svg",{ref:u,...GM,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${WM(t)}`,a].join(" "),...c},[...e.map(([f,d])=>N.createElement(f,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=Ze("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=Ze("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=Ze("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=Ze("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=Ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=Ze("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=Ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=Ze("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=Ze("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=Ze("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=Ze("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=Ze("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=Ze("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Ze("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=Ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=Ze("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=Ze("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=Ze("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=Ze("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=Ze("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=Ze("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=Ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=Ze("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=Ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=Ze("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=Ze("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=Ze("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=Ze("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=Ze("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=Ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Uf=()=>{const[t,e]=N.useState("home"),[n,i]=N.useState(!1),[r,s]=N.useState(!1),[o,a]=N.useState(!1),l=Pf(),c=mr(),u=N.useRef(),f=N.useRef(null),d=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"pricing",label:"Pricing"},{id:"faq",label:"FAQ"},{id:"contact",label:"Contact"}],p=v=>{if(s(!1),window.location.pathname!=="/"){l("/"),setTimeout(()=>{const y=document.getElementById(v);y&&y.scrollIntoView({behavior:"smooth"})},100);return}const _=document.getElementById(v);_&&_.scrollIntoView({behavior:"smooth"})},g=()=>{if(window.location.pathname!=="/"){l("/"),setTimeout(()=>{const _=document.getElementById("home");_&&_.scrollIntoView({behavior:"smooth"})},100);return}const v=document.getElementById("home");v&&v.scrollIntoView({behavior:"smooth"})},x=c.pathname==="/genservices"||c.pathname==="/specservices";N.useEffect(()=>{if(x){e("services");return}const v=()=>{const y=d.map(C=>({id:C.id,element:document.getElementById(C.id)})).find(C=>{if(C.element){const T=C.element.getBoundingClientRect();return T.top<=100&&T.bottom>=100}return!1});y&&e(y.id)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[c.pathname,x]);const m=()=>{u.current&&clearTimeout(u.current),i(!0)},h=()=>{u.current=window.setTimeout(()=>{i(!1)},150)};return N.useEffect(()=>()=>{u.current&&clearTimeout(u.current)},[]),w.jsx("nav",{className:"fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-xl border border-white/5 rounded-full hover-glow md:left-4 md:right-4 md:transform-none",children:w.jsxs("div",{className:"px-6 md:container md:mx-auto",children:[w.jsxs("div",{className:"flex items-center justify-center h-16 md:justify-between",children:[w.jsx("div",{className:"hidden md:flex flex-shrink-0",children:w.jsxs("button",{onClick:g,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),className:"text-xl font-semibold tracking-wider",children:[w.jsx("span",{className:`inline-block transition-[background,color] duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${o?"bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] bg-clip-text text-transparent animate-gradient-shift":"text-white"}`,children:"Nile"}),w.jsx("span",{className:`inline-block transition-[background,color] duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${o?"text-white":"bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] bg-clip-text text-transparent animate-gradient-shift"}`,children:"Byte"})]})}),w.jsx("div",{className:"hidden md:flex items-center space-x-6",children:d.map(v=>w.jsx("div",{className:"relative",children:v.id==="services"?w.jsxs("div",{ref:f,className:"relative",onMouseEnter:m,onMouseLeave:h,children:[w.jsxs("button",{onClick:()=>p(v.id),className:`relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 rounded-lg flex items-center space-x-1 ${t===v.id||x?"text-blue-400 bg-blue-400/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:[v.label,w.jsx(Am,{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`})]}),n&&w.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden transform origin-top-right transition-all duration-200",onMouseEnter:m,onMouseLeave:h,children:[w.jsxs(Dr,{to:"/genservices",className:"nav-dropdown-item block px-6 py-3 text-gray-300 hover:text-white transition-all duration-200 border-b border-white/5 hover:bg-white/5",children:[w.jsx("div",{className:"font-medium",children:"General Services"}),w.jsx("div",{className:"text-xs text-gray-500 mt-1",children:"Comprehensive AI solutions"})]}),w.jsxs(Dr,{to:"/specservices",className:"nav-dropdown-item block px-6 py-3 text-gray-300 hover:text-white transition-all duration-200 hover:bg-white/5",children:[w.jsx("div",{className:"font-medium",children:"Specific Niche"}),w.jsx("div",{className:"text-xs text-gray-500 mt-1",children:"Industry-focused solutions"})]})]})]}):w.jsx("button",{onClick:()=>p(v.id),className:`relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 rounded-lg ${t===v.id?"text-blue-400 bg-blue-400/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:v.label})},v.id))}),w.jsx("div",{className:"flex md:hidden items-center space-x-4",children:d.slice(0,4).map(v=>w.jsx("button",{onClick:()=>p(v.id),className:`px-3 py-2 text-xs font-light tracking-wide transition-all duration-300 rounded-lg ${t===v.id?"text-blue-400 bg-blue-400/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:v.label},v.id))}),w.jsx("button",{onClick:()=>s(!r),className:"md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200",children:r?w.jsx(Ox,{className:"w-6 h-6"}):w.jsx(tE,{className:"w-6 h-6"})})]}),r&&w.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden",children:w.jsx("div",{className:"flex flex-col py-2",children:d.map(v=>w.jsx("div",{children:v.id==="services"?w.jsxs("div",{children:[w.jsxs("button",{onClick:()=>{i(!n)},className:`w-full text-left px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 flex items-center justify-between ${t===v.id||x?"text-blue-400 bg-blue-400/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:[v.label,w.jsx(Am,{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`})]}),n&&w.jsxs("div",{className:"bg-black/50 border-t border-white/5",children:[w.jsx(Dr,{to:"/genservices",onClick:()=>s(!1),className:"block px-8 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200",children:"General Services"}),w.jsx(Dr,{to:"/specservices",onClick:()=>s(!1),className:"block px-8 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200",children:"Specific Niche"})]})]}):w.jsx("button",{onClick:()=>{p(v.id),s(!1)},className:`w-full text-left px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${t===v.id?"text-blue-400 bg-blue-400/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:v.label})},v.id))})})]})})},zx=N.createContext(void 0),Ff=()=>{const t=N.useContext(zx);if(t===void 0)throw new Error("useChatBot must be used within a ChatBotProvider");return t},kf=({children:t})=>{const[e,n]=N.useState(!1),[i,r]=N.useState(""),s=l=>{l&&r(l),n(!0)},o=()=>{n(!1),r("")},a=()=>n(!e);return w.jsx(zx.Provider,{value:{isOpen:e,openChat:s,closeChat:o,toggleChat:a,prefilledMessage:i},children:t})},Di=()=>{const t=N.useRef(null),e=N.useRef(0),n=N.useRef(new Set),i=N.useRef(new Map);return N.useEffect(()=>{const s=()=>{const a=window.pageYOffset||document.documentElement.scrollTop;a>e.current?document.body.classList.remove("is-scrolling-up"):document.body.classList.add("is-scrolling-up"),e.current=a<=0?0:a,document.querySelectorAll("section[id]").forEach(u=>{const f=u.getBoundingClientRect(),d=f.top<=window.innerHeight*.75&&f.bottom>=0,p=u.id,g=i.current.get(p);d!==g&&(i.current.set(p,d),d&&u.querySelectorAll(".scroll-animate").forEach(m=>{const h=m;n.current.delete(h),h.classList.remove("in-view"),h.style.transform="translateY(30px)",h.style.opacity="0",h.style.filter="blur(8px)",h.style.transition="transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s cubic-bezier(0.16, 1, 0.3, 1)",t.current&&(t.current.unobserve(h),t.current.observe(h))}))}),document.querySelectorAll(".scroll-animate:not(.in-view)").forEach(u=>{const f=u.getBoundingClientRect(),d=window.innerHeight,p=f.top,g=f.height,x=Math.min(Math.max((d-p)/(d+g*2),0),1);if(x>0){const m=u,h=Math.max(30*Math.pow(1-x,1.5),0),v=Math.min(Math.pow(x,1.2)*1.2,1),_=Math.max(8*Math.pow(1-x,2),0);m.style.transform=`translateY(${h}px)`,m.style.opacity=v.toString(),m.style.filter=`blur(${_}px)`}})};window.addEventListener("scroll",s,{passive:!0});const o=new IntersectionObserver(a=>{a.forEach(l=>{const c=l.target;l.isIntersecting&&!n.current.has(c)&&(c.classList.add("in-view"),setTimeout(()=>{c.style.transform="translateY(0)",c.style.opacity="1",c.style.filter="blur(0)"},100),n.current.add(c),c.classList.contains("stagger-children")&&Array.from(c.children).forEach((f,d)=>{const p=f;n.current.has(p)||setTimeout(()=>{p.style.transitionDelay=`${d*.25}s`,p.style.transform="translateY(0)",p.style.opacity="1",p.style.filter="blur(0)",n.current.add(p)},150)}))})},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -10% 0px"});return t.current=o,()=>{window.removeEventListener("scroll",s),o.disconnect()}},[]),{observeElements:s=>{s.forEach(o=>{var a;o&&!n.current.has(o)&&(o.style.transition="transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s cubic-bezier(0.16, 1, 0.3, 1)",(a=t.current)==null||a.observe(o))})}}};function Oo(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function Hh(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function dE(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function bm(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Cm(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function fE(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function pE(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function lu(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function mE(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function gE(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Rm(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function vE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function xE(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Vh(t,e){let n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function Bx(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Pm(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2];return t[0]=r*l-s*a,t[1]=s*o-i*l,t[2]=i*a-r*o,t}function _E(t,e,n,i){let r=e[0],s=e[1],o=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=o+i*(n[2]-o),t}function yE(t,e,n,i,r){const s=Math.exp(-i*r);let o=e[0],a=e[1],l=e[2];return t[0]=n[0]+(o-n[0])*s,t[1]=n[1]+(a-n[1])*s,t[2]=n[2]+(l-n[2])*s,t}function SE(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[3]*i+n[7]*r+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/o,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/o,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/o,t}function ME(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[3]*i+n[7]*r+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*r+n[8]*s)/o,t[1]=(n[1]*i+n[5]*r+n[9]*s)/o,t[2]=(n[2]*i+n[6]*r+n[10]*s)/o,t}function EE(t,e,n){let i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t}function wE(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2],c=n[3],u=a*s-l*r,f=l*i-o*s,d=o*r-a*i,p=a*d-l*f,g=l*u-o*d,x=o*f-a*u,m=c*2;return u*=m,f*=m,d*=m,p*=2,g*=2,x*=2,t[0]=i+u+p,t[1]=r+f+g,t[2]=s+d+x,t}const TE=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){Hh(t,n),Hh(e,i),Vh(t,t),Vh(e,e);let r=Bx(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function AE(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class jn extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(dE(this,e,n,i),this)}copy(e){return Hh(this,e),this}add(e,n){return n?bm(this,e,n):bm(this,this,e),this}sub(e,n){return n?Cm(this,e,n):Cm(this,this,e),this}multiply(e){return e.length?fE(this,this,e):lu(this,this,e),this}divide(e){return e.length?pE(this,this,e):lu(this,this,1/e),this}inverse(e=this){return xE(this,e),this}len(){return Oo(this)}distance(e){return e?mE(this,e):Oo(this)}squaredLen(){return Rm(this)}squaredDistance(e){return e?gE(this,e):Rm(this)}negate(e=this){return vE(this,e),this}cross(e,n){return n?Pm(this,e,n):Pm(this,this,e),this}scale(e){return lu(this,this,e),this}normalize(){return Vh(this,this),this}dot(e){return Bx(this,e)}equals(e){return AE(this,e)}applyMatrix3(e){return EE(this,this,e),this}applyMatrix4(e){return SE(this,this,e),this}scaleRotateMatrix4(e){return ME(this,this,e),this}applyQuaternion(e){return wE(this,this,e),this}angle(e){return TE(this,e)}lerp(e,n){return _E(this,this,e,n),this}smoothLerp(e,n,i){return yE(this,this,e,n,i),this}clone(){return new jn(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const Lm=new jn;let bE=1,CE=1,Nm=!1;class RE{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=bE++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=CE++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let o=1;r===35674&&(o=2),r===35675&&(o=3),r===35676&&(o=4);const a=s.size/o,l=o===1?0:o*o*4,c=o===1?0:o*4;for(let u=0;u<o;u++)this.gl.vertexAttribPointer(n+u,a,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(n+u),this.gl.renderer.vertexAttribDivisor(n+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:o})=>{const a=this.attributes[o];a.needsUpdate&&this.updateAttribute(a)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Nm)return console.warn("No position buffer data found to compute bounds"),Nm=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new jn,max:new jn,center:new jn,scale:new jn,radius:1/0});const r=this.bounds.min,s=this.bounds.max,o=this.bounds.center,a=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){const u=n[l],f=n[l+1],d=n[l+2];r.x=Math.min(u,r.x),r.y=Math.min(f,r.y),r.z=Math.min(d,r.z),s.x=Math.max(u,s.x),s.y=Math.max(f,s.y),s.z=Math.max(d,s.z)}a.sub(s,r),o.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,o=n.length;s<o;s+=i)Lm.fromArray(n,s),r=Math.max(r,this.bounds.center.squaredDistance(Lm));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let PE=1;const Dm={};class LE{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:s=!1,cullFace:o=e.BACK,frontFace:a=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=PE++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=o,this.frontFace=a,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Im(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Im(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let o=0;o<i;o++){let a=this.gl.getActiveUniform(this.program,o);this.uniformLocations.set(a,this.gl.getUniformLocation(this.program,a.name));const l=a.name.match(/(\w+)/g);a.uniformName=l[0],a.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const a=this.gl.getActiveAttrib(this.program,o),l=this.gl.getAttribLocation(this.program,a.name);l!==-1&&(r[l]=a.name,this.attributeLocations.set(a,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let o=this.uniforms[s.uniformName];for(const a of s.nameComponents){if(!o)break;if(a in o)o=o[a];else{if(Array.isArray(o.value))break;o=void 0;break}}if(!o)return Um(`Active uniform ${s.name} has not been supplied`);if(o&&o.value===void 0)return Um(`${s.name} uniform is missing a value parameter`);if(o.value.texture)return n=n+1,o.value.update(n),cu(this.gl,s.type,r,n);if(o.value.length&&o.value[0].texture){const a=[];return o.value.forEach(l=>{n=n+1,l.update(n),a.push(n)}),cu(this.gl,s.type,r,a)}cu(this.gl,s.type,r,o.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function cu(t,e,n,i){i=i.length?NE(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(DE(r,i))return;r.set?r.set(i):IE(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function Im(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function NE(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=Dm[i];r||(Dm[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(t[s],s*n);return r}function DE(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function IE(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let uu=0;function Um(t){uu>100||(console.warn(t),uu++,uu>100&&console.warn("More than 100 program warnings - stopping logs."))}const hu=new jn;let UE=1;class FE{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:s=!1,depth:o=!0,stencil:a=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:f="default",autoClear:d=!0,webgl:p=2}={}){const g={alpha:s,depth:o,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f};this.dpr=r,this.alpha=s,this.color=!0,this.depth=o,this.stencil=a,this.premultipliedAlpha=c,this.autoClear=d,this.id=UE++,p===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(o=>{if(!o.visible)return!0;o.draw&&(i&&o.frustumCulled&&n&&!n.frustumIntersectsMesh(o)||s.push(o))}),r){const o=[],a=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?a.push(c):l.push(c):o.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(hu),hu.applyMatrix4(n.projectionViewMatrix),c.zDepth=hu.z)}),o.sort(this.sortOpaque),a.sort(this.sortTransparent),l.sort(this.sortUI),s=o.concat(a,l)}return s}render({scene:e,camera:n,target:i=null,update:r=!0,sort:s=!0,frustumCull:o=!0,clear:a}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(a||this.autoClear&&a!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:o,sort:s}).forEach(c=>{c.draw({camera:n})})}}function kE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function OE(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function zE(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=i*o,t[2]=r*o,t[3]=s*o,t}function BE(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function HE(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function VE(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Fm(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=n[0],l=n[1],c=n[2],u=n[3];return t[0]=i*u+o*a+r*c-s*l,t[1]=r*u+o*l+s*a-i*c,t[2]=s*u+o*c+i*l-r*a,t[3]=o*u-i*a-r*l-s*c,t}function GE(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l+o*a,t[1]=r*l+s*a,t[2]=s*l-r*a,t[3]=o*l-i*a,t}function WE(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l-s*a,t[1]=r*l+o*a,t[2]=s*l+i*a,t[3]=o*l-r*a,t}function jE(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*a,t[1]=r*l-i*a,t[2]=s*l+o*a,t[3]=o*l-s*a,t}function XE(t,e,n,i){let r=e[0],s=e[1],o=e[2],a=e[3],l=n[0],c=n[1],u=n[2],f=n[3],d,p,g,x,m;return p=r*l+s*c+o*u+a*f,p<0&&(p=-p,l=-l,c=-c,u=-u,f=-f),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),x=Math.sin((1-i)*d)/g,m=Math.sin(i*d)/g):(x=1-i,m=i),t[0]=x*r+m*l,t[1]=x*s+m*c,t[2]=x*o+m*u,t[3]=x*a+m*f,t}function $E(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s,a=o?1/o:0;return t[0]=-n*a,t[1]=-i*a,t[2]=-r*a,t[3]=s*a,t}function YE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function qE(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,o=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+o]-e[o*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[o]=(e[o*3+r]+e[r*3+o])*i}return t}function KE(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),o=Math.cos(e[1]*.5),a=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l-i*s*a):n==="YXZ"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l+i*s*a):n==="ZXY"?(t[0]=i*o*l-r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l-i*s*a):n==="ZYX"?(t[0]=i*o*l-r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l+i*s*a):n==="YZX"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l-i*s*a):n==="XZY"&&(t[0]=i*o*l-r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l+i*s*a),t}const ZE=kE,QE=OE,JE=BE,ew=zE;class tw extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(o,a){const l=Reflect.set(...arguments);return l&&s.includes(a)&&o.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return HE(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(QE(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return GE(this._target,this._target,e),this.onChange(),this}rotateY(e){return WE(this._target,this._target,e),this.onChange(),this}rotateZ(e){return jE(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return $E(this._target,e),this.onChange(),this}conjugate(e=this._target){return YE(this._target,e),this.onChange(),this}copy(e){return ZE(this._target,e),this.onChange(),this}normalize(e=this._target){return ew(this._target,e),this.onChange(),this}multiply(e,n){return n?Fm(this._target,e,n):Fm(this._target,this._target,e),this.onChange(),this}dot(e){return JE(this._target,e)}fromMatrix3(e){return qE(this._target,e),this.onChange(),this}fromEuler(e,n){return KE(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return VE(this._target,e,n),this.onChange(),this}slerp(e,n){return XE(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const nw=1e-6;function iw(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function rw(t,e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=c,t[9]=u,t[10]=f,t[11]=d,t[12]=p,t[13]=g,t[14]=x,t[15]=m,t}function sw(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ow(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],v=n*a-i*o,_=n*l-r*o,y=n*c-s*o,C=i*l-r*a,T=i*c-s*a,b=r*c-s*l,R=u*x-f*g,M=u*m-d*g,S=u*h-p*g,L=f*m-d*x,H=f*h-p*x,z=d*h-p*m,V=v*z-_*H+y*L+C*S-T*M+b*R;return V?(V=1/V,t[0]=(a*z-l*H+c*L)*V,t[1]=(r*H-i*z-s*L)*V,t[2]=(x*b-m*T+h*C)*V,t[3]=(d*T-f*b-p*C)*V,t[4]=(l*S-o*z-c*M)*V,t[5]=(n*z-r*S+s*M)*V,t[6]=(m*y-g*b-h*_)*V,t[7]=(u*b-d*y+p*_)*V,t[8]=(o*H-a*S+c*R)*V,t[9]=(i*S-n*H-s*R)*V,t[10]=(g*T-x*y+h*v)*V,t[11]=(f*y-u*T-p*v)*V,t[12]=(a*M-o*L-l*R)*V,t[13]=(n*L-i*M+r*R)*V,t[14]=(x*_-g*C-m*v)*V,t[15]=(u*C-f*_+d*v)*V,t):null}function Hx(t){let e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],p=t[12],g=t[13],x=t[14],m=t[15],h=e*o-n*s,v=e*a-i*s,_=e*l-r*s,y=n*a-i*o,C=n*l-r*o,T=i*l-r*a,b=c*g-u*p,R=c*x-f*p,M=c*m-d*p,S=u*x-f*g,L=u*m-d*g,H=f*m-d*x;return h*H-v*L+_*S+y*M-C*R+T*b}function km(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=e[9],p=e[10],g=e[11],x=e[12],m=e[13],h=e[14],v=e[15],_=n[0],y=n[1],C=n[2],T=n[3];return t[0]=_*i+y*a+C*f+T*x,t[1]=_*r+y*l+C*d+T*m,t[2]=_*s+y*c+C*p+T*h,t[3]=_*o+y*u+C*g+T*v,_=n[4],y=n[5],C=n[6],T=n[7],t[4]=_*i+y*a+C*f+T*x,t[5]=_*r+y*l+C*d+T*m,t[6]=_*s+y*c+C*p+T*h,t[7]=_*o+y*u+C*g+T*v,_=n[8],y=n[9],C=n[10],T=n[11],t[8]=_*i+y*a+C*f+T*x,t[9]=_*r+y*l+C*d+T*m,t[10]=_*s+y*c+C*p+T*h,t[11]=_*o+y*u+C*g+T*v,_=n[12],y=n[13],C=n[14],T=n[15],t[12]=_*i+y*a+C*f+T*x,t[13]=_*r+y*l+C*d+T*m,t[14]=_*s+y*c+C*p+T*h,t[15]=_*o+y*u+C*g+T*v,t}function aw(t,e,n){let i=n[0],r=n[1],s=n[2],o,a,l,c,u,f,d,p,g,x,m,h;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(o=e[0],a=e[1],l=e[2],c=e[3],u=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=e[9],m=e[10],h=e[11],t[0]=o,t[1]=a,t[2]=l,t[3]=c,t[4]=u,t[5]=f,t[6]=d,t[7]=p,t[8]=g,t[9]=x,t[10]=m,t[11]=h,t[12]=o*i+u*r+g*s+e[12],t[13]=a*i+f*r+x*s+e[13],t[14]=l*i+d*r+m*s+e[14],t[15]=c*i+p*r+h*s+e[15]),t}function lw(t,e,n){let i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function cw(t,e,n,i){let r=i[0],s=i[1],o=i[2],a=Math.hypot(r,s,o),l,c,u,f,d,p,g,x,m,h,v,_,y,C,T,b,R,M,S,L,H,z,V,Z;return Math.abs(a)<nw?null:(a=1/a,r*=a,s*=a,o*=a,l=Math.sin(n),c=Math.cos(n),u=1-c,f=e[0],d=e[1],p=e[2],g=e[3],x=e[4],m=e[5],h=e[6],v=e[7],_=e[8],y=e[9],C=e[10],T=e[11],b=r*r*u+c,R=s*r*u+o*l,M=o*r*u-s*l,S=r*s*u-o*l,L=s*s*u+c,H=o*s*u+r*l,z=r*o*u+s*l,V=s*o*u-r*l,Z=o*o*u+c,t[0]=f*b+x*R+_*M,t[1]=d*b+m*R+y*M,t[2]=p*b+h*R+C*M,t[3]=g*b+v*R+T*M,t[4]=f*S+x*L+_*H,t[5]=d*S+m*L+y*H,t[6]=p*S+h*L+C*H,t[7]=g*S+v*L+T*H,t[8]=f*z+x*V+_*Z,t[9]=d*z+m*V+y*Z,t[10]=p*z+h*V+C*Z,t[11]=g*z+v*V+T*Z,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function uw(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Vx(t,e){let n=e[0],i=e[1],r=e[2],s=e[4],o=e[5],a=e[6],l=e[8],c=e[9],u=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(s,o,a),t[2]=Math.hypot(l,c,u),t}function hw(t){let e=t[0],n=t[1],i=t[2],r=t[4],s=t[5],o=t[6],a=t[8],l=t[9],c=t[10];const u=e*e+n*n+i*i,f=r*r+s*s+o*o,d=a*a+l*l+c*c;return Math.sqrt(Math.max(u,f,d))}const Gx=function(){const t=[1,1,1];return function(e,n){let i=t;Vx(i,n);let r=1/i[0],s=1/i[1],o=1/i[2],a=n[0]*r,l=n[1]*s,c=n[2]*o,u=n[4]*r,f=n[5]*s,d=n[6]*o,p=n[8]*r,g=n[9]*s,x=n[10]*o,m=a+f+x,h=0;return m>0?(h=Math.sqrt(m+1)*2,e[3]=.25*h,e[0]=(d-g)/h,e[1]=(p-c)/h,e[2]=(l-u)/h):a>f&&a>x?(h=Math.sqrt(1+a-f-x)*2,e[3]=(d-g)/h,e[0]=.25*h,e[1]=(l+u)/h,e[2]=(p+c)/h):f>x?(h=Math.sqrt(1+f-a-x)*2,e[3]=(p-c)/h,e[0]=(l+u)/h,e[1]=.25*h,e[2]=(d+g)/h):(h=Math.sqrt(1+x-a-f)*2,e[3]=(l-u)/h,e[0]=(p+c)/h,e[1]=(d+g)/h,e[2]=.25*h),e}}();function dw(t,e,n,i){let r=Oo([t[0],t[1],t[2]]);const s=Oo([t[4],t[5],t[6]]),o=Oo([t[8],t[9],t[10]]);Hx(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),c=1/r,u=1/s,f=1/o;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=f,l[9]*=f,l[10]*=f,Gx(e,l),i[0]=r,i[1]=s,i[2]=o}function fw(t,e,n,i){const r=t,s=e[0],o=e[1],a=e[2],l=e[3],c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,x=o*u,m=o*f,h=a*f,v=l*c,_=l*u,y=l*f,C=i[0],T=i[1],b=i[2];return r[0]=(1-(x+h))*C,r[1]=(p+y)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*b,r[9]=(m-v)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function pw(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,a=i+i,l=r+r,c=n*o,u=i*o,f=i*a,d=r*o,p=r*a,g=r*l,x=s*o,m=s*a,h=s*l;return t[0]=1-f-g,t[1]=u+h,t[2]=d-m,t[3]=0,t[4]=u-h,t[5]=1-c-g,t[6]=p+x,t[7]=0,t[8]=d+m,t[9]=p-x,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mw(t,e,n,i,r){let s=1/Math.tan(e/2),o=1/(i-r);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*o,t[15]=0,t}function gw(t,e,n,i,r,s,o){let a=1/(e-n),l=1/(i-r),c=1/(s-o);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*a,t[13]=(r+i)*l,t[14]=(o+s)*c,t[15]=1,t}function vw(t,e,n,i){let r=e[0],s=e[1],o=e[2],a=i[0],l=i[1],c=i[2],u=r-n[0],f=s-n[1],d=o-n[2],p=u*u+f*f+d*d;p===0?d=1:(p=1/Math.sqrt(p),u*=p,f*=p,d*=p);let g=l*d-c*f,x=c*u-a*d,m=a*f-l*u;return p=g*g+x*x+m*m,p===0&&(c?a+=1e-6:l?c+=1e-6:l+=1e-6,g=l*d-c*f,x=c*u-a*d,m=a*f-l*u,p=g*g+x*x+m*m),p=1/Math.sqrt(p),g*=p,x*=p,m*=p,t[0]=g,t[1]=x,t[2]=m,t[3]=0,t[4]=f*m-d*x,t[5]=d*g-u*m,t[6]=u*x-f*g,t[7]=0,t[8]=u,t[9]=f,t[10]=d,t[11]=0,t[12]=r,t[13]=s,t[14]=o,t[15]=1,t}function Om(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function zm(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function xw(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class ac extends Array{constructor(e=1,n=0,i=0,r=0,s=0,o=1,a=0,l=0,c=0,u=0,f=1,d=0,p=0,g=0,x=0,m=1){return super(e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m){return e.length?this.copy(e):(rw(this,e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m),this)}translate(e,n=this){return aw(this,n,e),this}rotate(e,n,i=this){return cw(this,i,e,n),this}scale(e,n=this){return lw(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Om(this,e,n):Om(this,this,e),this}sub(e,n){return n?zm(this,e,n):zm(this,this,e),this}multiply(e,n){return e.length?n?km(this,e,n):km(this,this,e):xw(this,this,e),this}identity(){return sw(this),this}copy(e){return iw(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return mw(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:s,far:o}){return gw(this,e,n,i,r,s,o),this}fromQuaternion(e){return pw(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return ow(this,e),this}compose(e,n,i){return fw(this,e,n,i),this}decompose(e,n,i){return dw(this,e,n,i),this}getRotation(e){return Gx(e,this),this}getTranslation(e){return uw(e,this),this}getScaling(e){return Vx(e,this),this}getMaxScaleOnAxis(){return hw(this)}lookAt(e,n,i){return vw(this,e,n,i),this}determinant(){return Hx(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function _w(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const Bm=new ac;let yw=class extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(o,a){const l=Reflect.set(...arguments);return l&&s.includes(a)&&o.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return _w(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return Bm.fromQuaternion(e),this._target.fromRotationMatrix(Bm,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class Sw{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new ac,this.worldMatrix=new ac,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new jn,this.quaternion=new tw,this.scale=new jn(1),this.rotation=new yw,this.up=new jn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function Mw(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Ew(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,a=i+i,l=r+r,c=n*o,u=i*o,f=i*a,d=r*o,p=r*a,g=r*l,x=s*o,m=s*a,h=s*l;return t[0]=1-f-g,t[3]=u-h,t[6]=d+m,t[1]=u+h,t[4]=1-c-g,t[7]=p-x,t[2]=d-m,t[5]=p+x,t[8]=1-c-f,t}function ww(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Tw(t,e,n,i,r,s,o,a,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=c,t}function Aw(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function bw(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=-u*s+a*l,p=c*s-o*l,g=n*f+i*d+r*p;return g?(g=1/g,t[0]=f*g,t[1]=(-u*i+r*c)*g,t[2]=(a*i-r*o)*g,t[3]=d*g,t[4]=(u*n-r*l)*g,t[5]=(-a*n+r*s)*g,t[6]=p*g,t[7]=(-c*n+i*l)*g,t[8]=(o*n-i*s)*g,t):null}function Hm(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=n[0],p=n[1],g=n[2],x=n[3],m=n[4],h=n[5],v=n[6],_=n[7],y=n[8];return t[0]=d*i+p*o+g*c,t[1]=d*r+p*a+g*u,t[2]=d*s+p*l+g*f,t[3]=x*i+m*o+h*c,t[4]=x*r+m*a+h*u,t[5]=x*s+m*l+h*f,t[6]=v*i+_*o+y*c,t[7]=v*r+_*a+y*u,t[8]=v*s+_*l+y*f,t}function Cw(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=n[0],p=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=o,t[4]=a,t[5]=l,t[6]=d*i+p*o+c,t[7]=d*r+p*a+u,t[8]=d*s+p*l+f,t}function Rw(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=Math.sin(n),p=Math.cos(n);return t[0]=p*i+d*o,t[1]=p*r+d*a,t[2]=p*s+d*l,t[3]=p*o-d*i,t[4]=p*a-d*r,t[5]=p*l-d*s,t[6]=c,t[7]=u,t[8]=f,t}function Pw(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Lw(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],v=n*a-i*o,_=n*l-r*o,y=n*c-s*o,C=i*l-r*a,T=i*c-s*a,b=r*c-s*l,R=u*x-f*g,M=u*m-d*g,S=u*h-p*g,L=f*m-d*x,H=f*h-p*x,z=d*h-p*m,V=v*z-_*H+y*L+C*S-T*M+b*R;return V?(V=1/V,t[0]=(a*z-l*H+c*L)*V,t[1]=(l*S-o*z-c*M)*V,t[2]=(o*H-a*S+c*R)*V,t[3]=(r*H-i*z-s*L)*V,t[4]=(n*z-r*S+s*M)*V,t[5]=(i*S-n*H-s*R)*V,t[6]=(x*b-m*T+h*C)*V,t[7]=(m*y-g*b-h*_)*V,t[8]=(g*T-x*y+h*v)*V,t):null}class Nw extends Array{constructor(e=1,n=0,i=0,r=0,s=1,o=0,a=0,l=0,c=1){return super(e,n,i,r,s,o,a,l,c),this}set(e,n,i,r,s,o,a,l,c){return e.length?this.copy(e):(Tw(this,e,n,i,r,s,o,a,l,c),this)}translate(e,n=this){return Cw(this,n,e),this}rotate(e,n=this){return Rw(this,n,e),this}scale(e,n=this){return Pw(this,n,e),this}multiply(e,n){return n?Hm(this,e,n):Hm(this,this,e),this}identity(){return Aw(this),this}copy(e){return ww(this,e),this}fromMatrix4(e){return Mw(this,e),this}fromQuaternion(e){return Ew(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return bw(this,e),this}getNormalMatrix(e){return Lw(this,e),this}}let Dw=0,Iw=class extends Sw{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:o=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Dw++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=o,this.modelViewMatrix=new ac,this.normalMatrix=new Nw,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};const Vm={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function Gm(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function Uw(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Wm(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?Gm(t):Vm[t.toLowerCase()]?Gm(Vm[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):Uw(t)}let jm=class extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Wm(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Wm(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}},Fw=class extends RE{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};const kw=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Ow=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \\
  int index = 0;                                            \\
  for (int i = 0; i < 2; i++) {                               \\
     ColorStop currentColor = colors[i];                    \\
     bool isInBetween = currentColor.position <= factor;    \\
     index = int(mix(float(index), float(i), float(isInBetween))); \\
  }                                                         \\
  ColorStop currentColor = colors[index];                   \\
  ColorStop nextColor = colors[index + 1];                  \\
  float range = nextColor.position - currentColor.position; \\
  float lerpFactor = (factor - currentColor.position) / range; \\
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \\
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function Of(t){const{colorStops:e=["#0052D4","#4364F7","#6FB1FC"],amplitude:n=1,blend:i=.5}=t,r=N.useRef(t);r.current=t;const s=N.useRef(null);return N.useEffect(()=>{const o=s.current;if(!o)return;const a=new FE({alpha:!0,premultipliedAlpha:!0,antialias:!0}),l=a.gl;l.clearColor(0,0,0,0),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.canvas.style.backgroundColor="transparent";let c;function u(){if(!o)return;const m=o.offsetWidth,h=o.offsetHeight;a.setSize(m,h),c&&(c.uniforms.uResolution.value=[m,h])}window.addEventListener("resize",u);const f=new Fw(l);f.attributes.uv&&delete f.attributes.uv;const d=e.map(m=>{const h=new jm(m);return[h.r,h.g,h.b]});c=new LE(l,{vertex:kw,fragment:Ow,uniforms:{uTime:{value:0},uAmplitude:{value:n},uColorStops:{value:d},uResolution:{value:[o.offsetWidth,o.offsetHeight]},uBlend:{value:i}}});const p=new Iw(l,{geometry:f,program:c});o.appendChild(l.canvas);let g=0;const x=m=>{g=requestAnimationFrame(x);const{time:h=m*.01,speed:v=1}=r.current;c.uniforms.uTime.value=h*v*.1,c.uniforms.uAmplitude.value=r.current.amplitude??1,c.uniforms.uBlend.value=r.current.blend??i;const _=r.current.colorStops??e;c.uniforms.uColorStops.value=_.map(y=>{const C=new jm(y);return[C.r,C.g,C.b]}),a.render({scene:p})};return g=requestAnimationFrame(x),u(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",u),o&&l.canvas.parentNode===o&&o.removeChild(l.canvas);const m=l.getExtension("WEBGL_lose_context");m&&m.loseContext()}},[n,i,e]),w.jsx("div",{ref:s,className:"aurora-container"})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="177",zw=0,Xm=1,Bw=2,Wx=1,Hw=2,vi=3,ur=0,tn=1,yi=2,or=0,Fs=1,$m=2,Ym=3,qm=4,Vw=5,Cr=100,Gw=101,Ww=102,jw=103,Xw=104,$w=200,Yw=201,qw=202,Kw=203,Gh=204,Wh=205,Zw=206,Qw=207,Jw=208,eT=209,tT=210,nT=211,iT=212,rT=213,sT=214,jh=0,Xh=1,$h=2,Xs=3,Yh=4,qh=5,Kh=6,Zh=7,jx=0,oT=1,aT=2,ar=0,lT=1,cT=2,uT=3,Xx=4,hT=5,dT=6,fT=7,$x=300,$s=301,Ys=302,Qh=303,Jh=304,Rc=306,ed=1e3,Ir=1001,td=1002,Sn=1003,pT=1004,Ga=1005,ti=1006,du=1007,Ur=1008,ai=1009,Yx=1010,qx=1011,sa=1012,Bf=1013,Wr=1014,ni=1015,_a=1016,Hf=1017,Vf=1018,oa=1020,Kx=35902,Zx=1021,Qx=1022,Xn=1023,aa=1026,la=1027,Gf=1028,Wf=1029,Jx=1030,jf=1031,Xf=1033,Pl=33776,Ll=33777,Nl=33778,Dl=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,cd=37808,ud=37809,hd=37810,dd=37811,fd=37812,pd=37813,md=37814,gd=37815,vd=37816,xd=37817,_d=37818,yd=37819,Sd=37820,Md=37821,Il=36492,Ed=36494,wd=36495,e_=36283,Td=36284,Ad=36285,bd=36286,mT=3200,gT=3201,t_=0,vT=1,qi="",vn="srgb",qs="srgb-linear",lc="linear",st="srgb",Qr=7680,Km=519,xT=512,_T=513,yT=514,n_=515,ST=516,MT=517,ET=518,wT=519,Zm=35044,Qm="300 es",Ei=2e3,cc=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jm=1234567;const zo=Math.PI/180,ca=180/Math.PI;function io(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function $f(t,e){return(t%e+e)%e}function TT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function AT(t,e,n){return t!==e?(n-t)/(e-t):0}function Bo(t,e,n){return(1-n)*t+n*e}function bT(t,e,n,i){return Bo(t,e,1-Math.exp(-n*i))}function CT(t,e=1){return e-Math.abs($f(t,e*2)-e)}function RT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function PT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function LT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function NT(t,e){return t+Math.random()*(e-t)}function DT(t){return t*(.5-Math.random())}function IT(t){t!==void 0&&(Jm=t);let e=Jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function UT(t){return t*zo}function FT(t){return t*ca}function kT(t){return(t&t-1)===0&&t!==0}function OT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function zT(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function BT(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Cd={DEG2RAD:zo,RAD2DEG:ca,generateUUID:io,clamp:He,euclideanModulo:$f,mapLinear:TT,inverseLerp:AT,lerp:Bo,damp:bT,pingpong:CT,smoothstep:RT,smootherstep:PT,randInt:LT,randFloat:NT,randFloatSpread:DT,seededRandom:IT,degToRad:UT,radToDeg:FT,isPowerOfTwo:kT,ceilPowerOfTwo:OT,floorPowerOfTwo:zT,setQuaternionFromProperEuler:BT,normalize:Zt,denormalize:gs};class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ya{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*x,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,h*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const y=a*v;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,f=f*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(eg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(eg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new O,eg=new ya;class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],v=r[1],_=r[4],y=r[7],C=r[2],T=r[5],b=r[8];return s[0]=o*x+a*v+l*C,s[3]=o*m+a*_+l*T,s[6]=o*h+a*y+l*b,s[1]=c*x+u*v+f*C,s[4]=c*m+u*_+f*T,s[7]=c*h+u*y+f*b,s[2]=d*x+p*v+g*C,s[5]=d*m+p*_+g*T,s[8]=d*h+p*y+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pu.makeScale(e,n)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new ze;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HT(){const t=uc("canvas");return t.style.display="block",t}const tg={};function ks(t){t in tg||(tg[t]=!0,console.warn(t))}function VT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function GT(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function WT(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ng=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jT(){const t={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?lc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qs]:{primaries:e,whitePoint:i,transfer:lc,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),t}const Ke=jT();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class XT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=uc("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $T=0;class Yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YT=0;const gu=new O;class nn extends no{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Ir,r=Ir,s=ti,o=Ur,a=Xn,l=ai,c=nn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=io(),this.name="",this.source=new Yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=$x;nn.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(h+1)/2,T=(u+d)/4,b=(f+x)/4,R=(g+m)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=b/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qT extends no{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new nn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Yf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends qT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r_ extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KT extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),ja.subVectors(this.max,vo),es.subVectors(e.a,vo),ts.subVectors(e.b,vo),ns.subVectors(e.c,vo),Ui.subVectors(ts,es),Fi.subVectors(ns,ts),_r.subVectors(es,ns);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-_r.z,_r.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,_r.z,0,-_r.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-_r.y,_r.x,0];return!vu(n,es,ts,ns,ja)||(n=[1,0,0,0,1,0,0,0,1],!vu(n,es,ts,ns,ja))?!1:(Xa.crossVectors(Ui,Fi),n=[Xa.x,Xa.y,Xa.z],vu(n,es,ts,ns,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,Wa=new qr,es=new O,ts=new O,ns=new O,Ui=new O,Fi=new O,_r=new O,vo=new O,ja=new O,Xa=new O,yr=new O;function vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),u=i.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ZT=new qr,xo=new O,xu=new O;class Sa{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const n=xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(xu)),this.expandByPoint(xo.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new O,_u=new O,$a=new O,ki=new O,yu=new O,Ya=new O,Su=new O;class s_{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_u.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(_u);const s=e.distanceTo(n)*.5,o=-this.direction.dot($a),a=ki.dot(this.direction),l=-ki.dot($a),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_u).addScaledVector($a,d),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){yu.subVectors(n,e),Ya.subVectors(i,e),Su.crossVectors(yu,Ya);let o=this.direction.dot(Su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(ki,Ya));if(l<0)return null;const c=a*this.direction.dot(yu.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(Su);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,x=c*f;n[0]=d+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QT,e,JT)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Oi.crossVectors(i,fn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Oi.crossVectors(i,fn)),Oi.normalize(),qa.crossVectors(fn,Oi),r[0]=Oi.x,r[4]=qa.x,r[8]=fn.x,r[1]=Oi.y,r[5]=qa.y,r[9]=fn.y,r[2]=Oi.z,r[6]=qa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],v=i[3],_=i[7],y=i[11],C=i[15],T=r[0],b=r[4],R=r[8],M=r[12],S=r[1],L=r[5],H=r[9],z=r[13],V=r[2],Z=r[6],q=r[10],ee=r[14],U=r[3],$=r[7],Q=r[11],ae=r[15];return s[0]=o*T+a*S+l*V+c*U,s[4]=o*b+a*L+l*Z+c*$,s[8]=o*R+a*H+l*q+c*Q,s[12]=o*M+a*z+l*ee+c*ae,s[1]=u*T+f*S+d*V+p*U,s[5]=u*b+f*L+d*Z+p*$,s[9]=u*R+f*H+d*q+p*Q,s[13]=u*M+f*z+d*ee+p*ae,s[2]=g*T+x*S+m*V+h*U,s[6]=g*b+x*L+m*Z+h*$,s[10]=g*R+x*H+m*q+h*Q,s[14]=g*M+x*z+m*ee+h*ae,s[3]=v*T+_*S+y*V+C*U,s[7]=v*b+_*L+y*Z+C*$,s[11]=v*R+_*H+y*q+C*Q,s[15]=v*M+_*z+y*ee+C*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],v=f*m*c-x*d*c+x*l*p-a*m*p-f*l*h+a*d*h,_=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*x*c-g*f*c+g*a*p-o*x*p-u*a*h+o*f*h,C=g*f*l-u*x*l-g*a*d+o*x*d+u*a*m-o*f*m,T=n*v+i*_+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=v*b,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*h-i*d*h)*b,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*b,e[4]=_*b,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*b,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*b,e[8]=y*b,e[9]=(g*f*s-u*x*s-g*i*p+n*x*p+u*i*h-n*f*h)*b,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*b,e[12]=C*b,e[13]=(u*x*r-g*f*r+g*i*d-n*x*d-u*i*m+n*f*m)*b,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,x=o*u,m=o*f,h=a*f,v=l*c,_=l*u,y=l*f,C=i.x,T=i.y,b=i.z;return r[0]=(1-(x+h))*C,r[1]=(p+y)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*b,r[9]=(m-v)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,u=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,x;if(a===Ei)g=(o+s)*f,x=-2*f;else if(a===cc)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new O,zn=new at,QT=new O(0,0,0),JT=new O(1,1,1),Oi=new O,qa=new O,fn=new O,rg=new at,sg=new ya;class li{constructor(e=0,n=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e2=0;const og=new O,rs=new ya,pi=new at,Ka=new O,_o=new O,t2=new O,n2=new ya,ag=new O(1,0,0),lg=new O(0,1,0),cg=new O(0,0,1),ug={type:"added"},i2={type:"removed"},ss={type:"childadded",child:null},Mu={type:"childremoved",child:null};class Ht extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new O,n=new li,i=new ya,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new ze}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(cg,e)}translateOnAxis(e,n){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(_o,Ka,this.up):pi.lookAt(Ka,_o,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(pi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ug),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(i2),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ug),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,t2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,n2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new O,mi=new O,Eu=new O,gi=new O,os=new O,as=new O,hg=new O,wu=new O,Tu=new O,Au=new O,bu=new ot,Cu=new ot,Ru=new ot;class Wn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),mi.subVectors(i,n),Eu.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(mi),l=Bn.dot(Eu),c=mi.dot(mi),u=mi.dot(Eu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return bu.setScalar(0),Cu.setScalar(0),Ru.setScalar(0),bu.fromBufferAttribute(e,n),Cu.fromBufferAttribute(e,i),Ru.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bu,s.x),o.addScaledVector(Cu,s.y),o.addScaledVector(Ru,s.z),o}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),mi.subVectors(e,n),Bn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),wu.subVectors(e,i);const l=os.dot(wu),c=as.dot(wu);if(l<=0&&c<=0)return n.copy(i);Tu.subVectors(e,r);const u=os.dot(Tu),f=as.dot(Tu);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(os,o);Au.subVectors(e,s);const p=os.dot(Au),g=as.dot(Au);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(as,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return hg.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(hg,a);const h=1/(m+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=$f(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pu(o,s,e+1/3),this.g=Pu(o,s,e),this.b=Pu(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=vn){const i=o_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Ke.workingToColorSpace(Xt.copy(this),e),Math.round(He(Xt.r*255,0,255))*65536+Math.round(He(Xt.g*255,0,255))*256+Math.round(He(Xt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=vn){Ke.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Za);const i=Bo(zi.h,Za.h,n),r=Bo(zi.s,Za.s,n),s=Bo(zi.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ve;Ve.NAMES=o_;let r2=0;class Ma extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Fs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gh&&(i.blendSrc=this.blendSrc),this.blendDst!==Wh&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kf extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,Qa=new je;let s2=0;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zm,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zm&&(e.usage=this.usage),e}}class a_ extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l_ extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class si extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let o2=0;const bn=new at,Lu=new Ht,ls=new O,pn=new qr,yo=new qr,It=new O;class gr extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?l_:a_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(pn.min,yo.min),pn.expandByPoint(It),It.addVectors(pn.max,yo.max),pn.expandByPoint(It)):(pn.expandByPoint(yo.min),pn.expandByPoint(yo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),It.add(ls)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const c=new O,u=new O,f=new O,d=new je,p=new je,g=new je,x=new O,m=new O;function h(R,M,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[R].add(x),a[M].add(x),a[S].add(x),l[R].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],L=S.start,H=S.count;for(let z=L,V=L+H;z<V;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new O,y=new O,C=new O,T=new O;function b(R){C.fromBufferAttribute(r,R),T.copy(C);const M=a[R];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(T,M);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,M=v.length;R<M;++R){const S=v[R],L=S.start,H=S.count;for(let z=L,V=L+H;z<V;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new qn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new at,Sr=new s_,Ja=new Sa,fg=new O,el=new O,tl=new O,nl=new O,Nu=new O,il=new O,pg=new O,rl=new O;class Ft extends Ht{constructor(e=new gr,n=new Kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Nu.fromBufferAttribute(f,e),o?il.addScaledVector(Nu,u):il.addScaledVector(Nu.sub(n),u))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Ja,fg)===null||Sr.origin.distanceToSquared(fg)>(e.far-e.near)**2))&&(dg.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(dg),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=_;y<C;y+=3){const T=a.getX(y),b=a.getX(y+1),R=a.getX(y+2);r=sl(this,h,e,i,c,u,f,T,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=sl(this,o,e,i,c,u,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=_;y<C;y+=3){const T=y,b=y+1,R=y+2;r=sl(this,h,e,i,c,u,f,T,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const v=m,_=m+1,y=m+2;r=sl(this,o,e,i,c,u,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function a2(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const u=a2(t,e,n,i,el,tl,nl,pg);if(u){const f=new O;Wn.getBarycoord(pg,el,tl,nl,f),r&&(u.uv=Wn.getInterpolatedAttribute(r,a,l,c,f,new je)),s&&(u.uv1=Wn.getInterpolatedAttribute(s,a,l,c,f,new je)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Wn.getNormal(el,tl,nl,d.normal),u.face=d,u.barycoord=f}return u}class ro extends gr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(f,2));function g(x,m,h,v,_,y,C,T,b,R,M){const S=y/b,L=C/R,H=y/2,z=C/2,V=T/2,Z=b+1,q=R+1;let ee=0,U=0;const $=new O;for(let Q=0;Q<q;Q++){const ae=Q*L-z;for(let we=0;we<Z;we++){const $e=we*S-H;$[x]=$e*v,$[m]=ae*_,$[h]=V,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[h]=T>0?1:-1,u.push($.x,$.y,$.z),f.push(we/b),f.push(1-Q/R),ee+=1}}for(let Q=0;Q<R;Q++)for(let ae=0;ae<b;ae++){const we=d+ae+Z*Q,$e=d+ae+Z*(Q+1),X=d+(ae+1)+Z*(Q+1),oe=d+(ae+1)+Z*Q;l.push(we,$e,oe),l.push($e,X,oe),U+=6}a.addGroup(p,U,M),p+=U,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function l2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const c2={clone:Ks,merge:Qt};var u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=h2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=l2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class u_ extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new O,mg=new je,gg=new je;class xn extends u_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,mg,gg),n.subVectors(gg,mg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class d2 extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new xn(cs,us,e,n);s.layers=this.layers,this.add(s);const o=new xn(cs,us,e,n);o.layers=this.layers,this.add(o);const a=new xn(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new xn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new xn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class h_ extends nn{constructor(e=[],n=$s,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f2 extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new h_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ro(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:or});s.uniforms.tEquirect.value=n;const o=new Ft(r,s),a=n.minFilter;return n.minFilter===Ur&&(n.minFilter=ti),new d2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ol extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p2={type:"move"};class Du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class d_ extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class m2 extends nn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Sn,u=Sn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vg extends qn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new at,xg=new at,al=[],_g=new qr,g2=new at,So=new Ft,Mo=new Sa;class f_ extends Ft{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new vg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,g2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,hs),_g.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(_g)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,hs),Mo.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Mo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(i),e.ray.intersectsSphere(Mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hs),xg.multiplyMatrices(i,hs),So.matrixWorld=xg,So.raycast(e,al);for(let o=0,a=al.length;o<a;o++){const l=al[o];l.instanceId=s,l.object=this,n.push(l)}al.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new vg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new m2(new Float32Array(r*this.count),r,this.count,Gf,ni));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Iu=new O,v2=new O,x2=new ze;class Xi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Iu.subVectors(i,n).cross(v2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||x2.getNormalMatrix(e),r=this.coplanarPoint(Iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Sa,ll=new O;class Zf{constructor(e=new Xi,n=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-h).normalize(),i[1].setComponents(l+s,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+g,y+v).normalize(),i[3].setComponents(l-o,d-u,m-g,y-v).normalize(),i[4].setComponents(l-a,d-f,m-x,y-_).normalize(),n===Ei)i[5].setComponents(l+a,d+f,m+x,y+_).normalize();else if(n===cc)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p_ extends nn{constructor(e,n,i=Wr,r,s,o,a=Sn,l=Sn,c,u=aa,f=1){if(u!==aa&&u!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Pc extends gr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let _=0;_<c;_++){const y=_*f-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+c*h,y=v+c*(h+1),C=v+1+c*(h+1),T=v+1+c*h;p.push(_,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(x,3)),this.setAttribute("uv",new si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qf extends gr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,d=new O,p=[],g=[],x=[],m=[];for(let h=0;h<=i;h++){const v=[],_=h/i;let y=0;h===0&&o===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const _=u[h][v+1],y=u[h][v],C=u[h+1][v],T=u[h+1][v+1];(h!==0||o>0)&&p.push(_,y,T),(h!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(x,3)),this.setAttribute("uv",new si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rd extends Ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _2 extends Rd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class y2 extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S2 extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class m_ extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Uu=new at,yg=new O,Sg=new O;class M2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;yg.setFromMatrixPosition(e.matrixWorld),n.position.copy(yg),Sg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sg),n.updateMatrixWorld(),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mg=new at,Eo=new O,Fu=new O;class E2 extends M2{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Eo),Fu.copy(i.position),Fu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Fu),i.updateMatrixWorld(),r.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Mg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mg)}}class g_ extends m_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class w2 extends u_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class T2 extends m_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class A2 extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class b2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Eg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Eg(){return performance.now()}const wg=new at;class C2{constructor(e,n,i=0,r=1/0){this.ray=new s_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wg),this}intersectObject(e,n=!0,i=[]){return Pd(e,this,i,n),i.sort(Tg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pd(e[r],this,i,n);return i.sort(Tg),i}}function Tg(t,e){return t.distance-e.distance}function Pd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Pd(s[o],e,n,!0)}}function Ag(t,e,n,i){const r=R2(i);switch(n){case Zx:return t*e;case Gf:return t*e/r.components*r.byteLength;case Wf:return t*e/r.components*r.byteLength;case Jx:return t*e*2/r.components*r.byteLength;case jf:return t*e*2/r.components*r.byteLength;case Qx:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case Xf:return t*e*4/r.components*r.byteLength;case Pl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(t,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(t,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Il:case Ed:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case e_:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ad:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function R2(t){switch(t){case ai:case Yx:return{byteLength:1,components:1};case sa:case qx:case _a:return{byteLength:2,components:1};case Hf:case Vf:return{byteLength:2,components:4};case Wr:case Bf:case ni:return{byteLength:4,components:1};case Kx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function P2(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var L2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,B2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aA="gl_FragColor = linearToOutputTexel( gl_FragColor );",lA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_A=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$A=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:L2,alphahash_pars_fragment:N2,alphamap_fragment:D2,alphamap_pars_fragment:I2,alphatest_fragment:U2,alphatest_pars_fragment:F2,aomap_fragment:k2,aomap_pars_fragment:O2,batching_pars_vertex:z2,batching_vertex:B2,begin_vertex:H2,beginnormal_vertex:V2,bsdfs:G2,iridescence_fragment:W2,bumpmap_pars_fragment:j2,clipping_planes_fragment:X2,clipping_planes_pars_fragment:$2,clipping_planes_pars_vertex:Y2,clipping_planes_vertex:q2,color_fragment:K2,color_pars_fragment:Z2,color_pars_vertex:Q2,color_vertex:J2,common:eA,cube_uv_reflection_fragment:tA,defaultnormal_vertex:nA,displacementmap_pars_vertex:iA,displacementmap_vertex:rA,emissivemap_fragment:sA,emissivemap_pars_fragment:oA,colorspace_fragment:aA,colorspace_pars_fragment:lA,envmap_fragment:cA,envmap_common_pars_fragment:uA,envmap_pars_fragment:hA,envmap_pars_vertex:dA,envmap_physical_pars_fragment:EA,envmap_vertex:fA,fog_vertex:pA,fog_pars_vertex:mA,fog_fragment:gA,fog_pars_fragment:vA,gradientmap_pars_fragment:xA,lightmap_pars_fragment:_A,lights_lambert_fragment:yA,lights_lambert_pars_fragment:SA,lights_pars_begin:MA,lights_toon_fragment:wA,lights_toon_pars_fragment:TA,lights_phong_fragment:AA,lights_phong_pars_fragment:bA,lights_physical_fragment:CA,lights_physical_pars_fragment:RA,lights_fragment_begin:PA,lights_fragment_maps:LA,lights_fragment_end:NA,logdepthbuf_fragment:DA,logdepthbuf_pars_fragment:IA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:FA,map_fragment:kA,map_pars_fragment:OA,map_particle_fragment:zA,map_particle_pars_fragment:BA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:VA,morphinstance_vertex:GA,morphcolor_vertex:WA,morphnormal_vertex:jA,morphtarget_pars_vertex:XA,morphtarget_vertex:$A,normal_fragment_begin:YA,normal_fragment_maps:qA,normal_pars_fragment:KA,normal_pars_vertex:ZA,normal_vertex:QA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:rb,packing:sb,premultiplied_alpha_fragment:ob,project_vertex:ab,dithering_fragment:lb,dithering_pars_fragment:cb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:fb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:vb,skinning_vertex:xb,skinnormal_vertex:_b,specularmap_fragment:yb,specularmap_pars_fragment:Sb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Eb,transmission_fragment:wb,transmission_pars_fragment:Tb,uv_pars_fragment:Ab,uv_pars_vertex:bb,uv_vertex:Cb,worldpos_vertex:Rb,background_vert:Pb,background_frag:Lb,backgroundCube_vert:Nb,backgroundCube_frag:Db,cube_vert:Ib,cube_frag:Ub,depth_vert:Fb,depth_frag:kb,distanceRGBA_vert:Ob,distanceRGBA_frag:zb,equirect_vert:Bb,equirect_frag:Hb,linedashed_vert:Vb,linedashed_frag:Gb,meshbasic_vert:Wb,meshbasic_frag:jb,meshlambert_vert:Xb,meshlambert_frag:$b,meshmatcap_vert:Yb,meshmatcap_frag:qb,meshnormal_vert:Kb,meshnormal_frag:Zb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:eC,meshphysical_frag:tC,meshtoon_vert:nC,meshtoon_frag:iC,points_vert:rC,points_frag:sC,shadow_vert:oC,shadow_frag:aC,sprite_vert:lC,sprite_frag:cC},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Jn={basic:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Qt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Qt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Jn.physical={uniforms:Qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const cl={r:0,b:0,g:0},Er=new li,uC=new at;function hC(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function x(_){let y=!1;const C=g(_);C===null?h(a,l):C&&C.isColor&&(h(C,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Rc)?(u===void 0&&(u=new Ft(new ro(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Ks(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(y.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uC.makeRotationFromEuler(Er)),u.material.toneMapped=Ke.getTransfer(C.colorSpace)!==st,(f!==C||d!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ft(new Pc(2,2),new hr({name:"BackgroundMaterial",uniforms:Ks(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,y){_.getRGB(cl,c_(t)),i.buffers.color.setClear(cl.r,cl.g,cl.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:m,dispose:v}}function dC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,H,z,V){let Z=!1;const q=f(z,H,L);s!==q&&(s=q,c(s.object)),Z=p(S,z,H,V),Z&&g(S,z,H,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(S,L,H,z),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,L,H){const z=H.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let Z=V[L.id];Z===void 0&&(Z={},V[L.id]=Z);let q=Z[z];return q===void 0&&(q=d(l()),Z[z]=q),q}function d(S){const L=[],H=[],z=[];for(let V=0;V<n;V++)L[V]=0,H[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,H,z){const V=s.attributes,Z=L.attributes;let q=0;const ee=H.getAttributes();for(const U in ee)if(ee[U].location>=0){const Q=V[U];let ae=Z[U];if(ae===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;q++}return s.attributesNum!==q||s.index!==z}function g(S,L,H,z){const V={},Z=L.attributes;let q=0;const ee=H.getAttributes();for(const U in ee)if(ee[U].location>=0){let Q=Z[U];Q===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),V[U]=ae,q++}s.attributes=V,s.attributesNum=q,s.index=z}function x(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const H=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;H[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),V[S]!==L&&(t.vertexAttribDivisor(S,L),V[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==S[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function _(S,L,H,z,V,Z,q){q===!0?t.vertexAttribIPointer(S,L,H,V,Z):t.vertexAttribPointer(S,L,H,z,V,Z)}function y(S,L,H,z){x();const V=z.attributes,Z=H.getAttributes(),q=L.defaultAttributeValues;for(const ee in Z){const U=Z[ee];if(U.location>=0){let $=V[ee];if($===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const Q=$.normalized,ae=$.itemSize,we=e.get($);if(we===void 0)continue;const $e=we.buffer,X=we.type,oe=we.bytesPerElement,ve=X===t.INT||X===t.UNSIGNED_INT||$.gpuType===Bf;if($.isInterleavedBufferAttribute){const ue=$.data,be=ue.stride,Qe=$.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<U.locationSize;De++)h(U.location+De,ue.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<U.locationSize;De++)m(U.location+De);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let De=0;De<U.locationSize;De++)_(U.location+De,ae/U.locationSize,X,Q,be*oe,(Qe+ae/U.locationSize*De)*oe,ve)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<U.locationSize;ue++)h(U.location+ue,$.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<U.locationSize;ue++)m(U.location+ue);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ue=0;ue<U.locationSize;ue++)_(U.location+ue,ae/U.locationSize,X,Q,ae*oe,ae/U.locationSize*ue*oe,ve)}}else if(q!==void 0){const Q=q[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(U.location,Q);break;case 3:t.vertexAttrib3fv(U.location,Q);break;case 4:t.vertexAttrib4fv(U.location,Q);break;default:t.vertexAttrib1fv(U.location,Q)}}}}v()}function C(){R();for(const S in i){const L=i[S];for(const H in L){const z=L[H];for(const V in z)u(z[V].object),delete z[V];delete L[H]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const z=L[H];for(const V in z)u(z[V].object),delete z[V];delete L[H]}delete i[S.id]}function b(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const z=H[S.id];for(const V in z)u(z[V].object),delete z[V];delete H[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function fC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Xn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ai&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ni&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function mC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Xi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let y=h.clippingState||null;l.value=y,y=u(g,d,_,p);for(let C=0;C!==_;++C)y[C]=n[C];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function gC(t){let e=new WeakMap;function n(o,a){return a===Qh?o.mapping=$s:a===Jh&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qh||a===Jh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new f2(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Rs=4,bg=[.125,.215,.35,.446,.526,.582],Rr=20,ku=new w2,Cg=new Ve;let Ou=null,zu=0,Bu=0,Hu=!1;const br=(1+Math.sqrt(5))/2,ds=1/br,Rg=[new O(-br,ds,0),new O(br,ds,0),new O(-ds,0,br),new O(ds,0,br),new O(0,br,-ds),new O(0,br,ds),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],vC=new O;class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=vC}=s;Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),Hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,zu,Bu),this._renderer.xr.enabled=Hu,e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),Hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:_a,format:Xn,colorSpace:qs,depthBuffer:!1},r=Pg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xC(s)),this._blurMaterial=_C(s,e,n)}return r}_compileMaterial(e){const n=new Ft(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,i,r,s){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Cg),f.toneMapping=ar,f.autoClear=!1;const g=new Kf({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Ft(new ro,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(Cg),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const y=this._cubeSize;ul(r,_*y,v>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ku)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rg[(r-s-1)%Rg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ft(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const h=[];let v=0;for(let b=0;b<Rr;++b){const R=b/x,M=Math.exp(-R*R/2);h.push(M),b===0?v+=M:b<m&&(v+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-Rs?r-_+Rs:0),T=4*(this._cubeSize-y);ul(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(f,ku)}}function xC(t){const e=[],n=[],i=[];let r=t;const s=t-Rs+1+bg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Rs?l=bg[o-t+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,R=T>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(M,x*g*T),_.set(d,m*g*T);const S=[T,T,T,T,T,T];y.set(S,h*g*T)}const C=new gr;C.setAttribute("position",new qn(v,x)),C.setAttribute("uv",new qn(_,m)),C.setAttribute("faceIndex",new qn(y,h)),e.push(C),r>Rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pg(t,e,n){const i=new jr(t,e,n);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _C(t,e,n){const i=new Float32Array(Rr),r=new O(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Lg(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ng(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Jf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qh||l===Jh,u=l===$s||l===Ys;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ld(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ld(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function SC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){const C=v[_+0],T=v[_+1],b=v[_+2];d.push(C,T,T,b,b,C)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const C=_+0,T=_+1,b=_+2;d.push(C,T,T,b,b,C)}}else return;const m=new(i_(d)?l_:a_)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function EC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v]*x[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TC(t,e,n){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*T*4*f),R=new r_(b,C,T,f);R.type=ni,R.needsUpdate=!0;const M=y*4;for(let L=0;L<f;L++){const H=h[L],z=v[L],V=_[L],Z=C*T*4*L;for(let q=0;q<H.count;q++){const ee=q*M;g===!0&&(r.fromBufferAttribute(H,q),b[Z+ee+0]=r.x,b[Z+ee+1]=r.y,b[Z+ee+2]=r.z,b[Z+ee+3]=0),x===!0&&(r.fromBufferAttribute(z,q),b[Z+ee+4]=r.x,b[Z+ee+5]=r.y,b[Z+ee+6]=r.z,b[Z+ee+7]=0),m===!0&&(r.fromBufferAttribute(V,q),b[Z+ee+8]=r.x,b[Z+ee+9]=r.y,b[Z+ee+10]=r.z,b[Z+ee+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new je(C,T)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function AC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const x_=new nn,Dg=new p_(1,1),__=new r_,y_=new KT,S_=new h_,Ig=[],Ug=[],Fg=new Float32Array(16),kg=new Float32Array(9),Og=new Float32Array(4);function so(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=Ug[e];n===void 0&&(n=new Int32Array(e),Ug[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function LC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Og.set(i),t.uniformMatrix2fv(this.addr,!1,Og),Dt(n,i)}}function NC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;kg.set(i),t.uniformMatrix3fv(this.addr,!1,kg),Dt(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Fg.set(i),t.uniformMatrix4fv(this.addr,!1,Fg),Dt(n,i)}}function IC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function OC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function VC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Dg.compareFunction=n_,s=Dg):s=x_,n.setTexture2D(e||s,r)}function GC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y_,r)}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S_,r)}function jC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||__,r)}function XC(t){switch(t){case 5126:return bC;case 35664:return CC;case 35665:return RC;case 35666:return PC;case 35674:return LC;case 35675:return NC;case 35676:return DC;case 5124:case 35670:return IC;case 35667:case 35671:return UC;case 35668:case 35672:return FC;case 35669:case 35673:return kC;case 5125:return OC;case 36294:return zC;case 36295:return BC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return jC}}function $C(t,e){t.uniform1fv(this.addr,e)}function YC(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function qC(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function KC(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function ZC(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QC(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JC(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eR(t,e){t.uniform1iv(this.addr,e)}function tR(t,e){t.uniform2iv(this.addr,e)}function nR(t,e){t.uniform3iv(this.addr,e)}function iR(t,e){t.uniform4iv(this.addr,e)}function rR(t,e){t.uniform1uiv(this.addr,e)}function sR(t,e){t.uniform2uiv(this.addr,e)}function oR(t,e){t.uniform3uiv(this.addr,e)}function aR(t,e){t.uniform4uiv(this.addr,e)}function lR(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||x_,s[o])}function cR(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||y_,s[o])}function uR(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||S_,s[o])}function hR(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||__,s[o])}function dR(t){switch(t){case 5126:return $C;case 35664:return YC;case 35665:return qC;case 35666:return KC;case 35674:return ZC;case 35675:return QC;case 35676:return JC;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return hR}}class fR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XC(n.type)}}class pR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dR(n.type)}}class mR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function zg(t,e){t.seq.push(e),t.map[e.id]=e}function gR(t,e,n){const i=t.name,r=i.length;for(Vu.lastIndex=0;;){const s=Vu.exec(i),o=Vu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zg(n,c===void 0?new fR(a,t,e):new pR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new mR(a),zg(n,f)),n=f}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);gR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vR=37297;let xR=0;function _R(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Hg=new ze;function yR(t){Ke._getMatrix(Hg,Ke.workingColorSpace,t);const e=`mat3( ${Hg.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case lc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_R(t.getShaderSource(e),o)}else return r}function SR(t,e){const n=yR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function MR(t,e){let n;switch(e){case lT:n="Linear";break;case cT:n="Reinhard";break;case uT:n="Cineon";break;case Xx:n="ACESFilmic";break;case dT:n="AgX";break;case fT:n="Neutral";break;case hT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new O;function ER(){Ke.getLuminanceCoefficients(hl);const t=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function TR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function Gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(bR,RR)}const CR=new Map;function RR(t,e){let n=Oe[e];if(n===void 0){const i=CR.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const PR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(t){return t.replace(PR,LR)}function LR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Hw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function DR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Ys:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function UR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jx:e="ENVMAP_BLENDING_MULTIPLY";break;case oT:e="ENVMAP_BLENDING_MIX";break;case aT:e="ENVMAP_BLENDING_ADD";break}return e}function FR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=NR(n),c=DR(n),u=IR(n),f=UR(n),d=FR(n),p=wR(n),g=TR(s),x=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(m=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ar?MR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,SR("linearToOutputTexel",n.outputColorSpace),ER(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=Nd(o),o=Gg(o,n),o=Wg(o,n),a=Nd(a),a=Gg(a,n),a=Wg(a,n),o=jg(o),a=jg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+o,y=v+h+a,C=Bg(r,r.VERTEX_SHADER,_),T=Bg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(T).trim();let Z=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,T);else{const ee=Vg(r,C,"vertex"),U=Vg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ee+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||V==="")&&(q=!1);q&&(L.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(C),r.deleteShader(T),R=new Ul(r,x),M=AR(r,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,vR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let OR=0;class zR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BR(e),n.set(e,i)),i}}class BR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function HR(t,e,n,i,r,s,o){const a=new qf,l=new zR,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,H,z){const V=H.fog,Z=z.geometry,q=M.isMeshStandardMaterial?H.environment:null,ee=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),U=ee&&ee.mapping===Rc?ee.image.height:null,$=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ae=Q!==void 0?Q.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let $e,X,oe,ve;if($){const nt=Jn[$];$e=nt.vertexShader,X=nt.fragmentShader}else $e=M.vertexShader,X=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const ue=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Qe=z.isInstancedMesh===!0,De=z.isBatchedMesh===!0,mt=!!M.map,gt=!!M.matcap,Je=!!ee,D=!!M.aoMap,qt=!!M.lightMap,et=!!M.bumpMap,lt=!!M.normalMap,Me=!!M.displacementMap,Ye=!!M.emissiveMap,Re=!!M.metalnessMap,Be=!!M.roughnessMap,Rt=M.anisotropy>0,P=M.clearcoat>0,E=M.dispersion>0,B=M.iridescence>0,Y=M.sheen>0,J=M.transmission>0,j=Rt&&!!M.anisotropyMap,Te=P&&!!M.clearcoatMap,he=P&&!!M.clearcoatNormalMap,Se=P&&!!M.clearcoatRoughnessMap,Ae=B&&!!M.iridescenceMap,te=B&&!!M.iridescenceThicknessMap,me=Y&&!!M.sheenColorMap,Ne=Y&&!!M.sheenRoughnessMap,Le=!!M.specularMap,le=!!M.specularColorMap,Fe=!!M.specularIntensityMap,I=J&&!!M.transmissionMap,de=J&&!!M.thicknessMap,ne=!!M.gradientMap,xe=!!M.alphaMap,re=M.alphaTest>0,K=!!M.alphaHash,_e=!!M.extensions;let ke=ar;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ke=t.toneMapping);const ut={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:X,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:De,batchingColor:De&&z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&z.instanceColor!==null,instancingMorph:Qe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:qs,alphaToCoverage:!!M.alphaToCoverage,map:mt,matcap:gt,envMap:Je,envMapMode:Je&&ee.mapping,envMapCubeUVHeight:U,aoMap:D,lightMap:qt,bumpMap:et,normalMap:lt,displacementMap:d&&Me,emissiveMap:Ye,normalMapObjectSpace:lt&&M.normalMapType===vT,normalMapTangentSpace:lt&&M.normalMapType===t_,metalnessMap:Re,roughnessMap:Be,anisotropy:Rt,anisotropyMap:j,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:he,clearcoatRoughnessMap:Se,dispersion:E,iridescence:B,iridescenceMap:Ae,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:me,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:le,specularIntensityMap:Fe,transmission:J,transmissionMap:I,thicknessMap:de,gradientMap:ne,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:re,alphaHash:K,combine:M.combine,mapUv:mt&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:qt&&x(M.lightMap.channel),bumpMapUv:et&&x(M.bumpMap.channel),normalMapUv:lt&&x(M.normalMap.channel),displacementMapUv:Me&&x(M.displacementMap.channel),emissiveMapUv:Ye&&x(M.emissiveMap.channel),metalnessMapUv:Re&&x(M.metalnessMap.channel),roughnessMapUv:Be&&x(M.roughnessMap.channel),anisotropyMapUv:j&&x(M.anisotropyMap.channel),clearcoatMapUv:Te&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(M.sheenRoughnessMap.channel),specularMapUv:Le&&x(M.specularMap.channel),specularColorMapUv:le&&x(M.specularColorMap.channel),specularIntensityMapUv:Fe&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:de&&x(M.thicknessMap.channel),alphaMapUv:xe&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(lt||Rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(mt||xe),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:mt&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:Ye&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yi,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let L;if(S){const H=Jn[S];L=c2.clone(H.uniforms)}else L=M.uniforms;return L}function C(M,S){let L;for(let H=0,z=u.length;H<z;H++){const V=u[H];if(V.cacheKey===S){L=V,++L.usedTimes;break}}return L===void 0&&(L=new kR(t,S,M,s),u.push(L)),L}function T(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:R}}function VR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function GR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,x,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||GR),i.length>1&&i.sort(d||$g),r.length>1&&r.sort(d||$g)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function WR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yg,t.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function jR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ve};break;case"SpotLight":n={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function XR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $R=0;function YR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qR(t){const e=new jR,n=XR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new at,o=new at;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,v=0,_=0,y=0,C=0,T=0,b=0;c.sort(YR);for(let M=0,S=c.length;M<S;M++){const L=c[M],H=L.color,z=L.intensity,V=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*z,f+=H.g*z,d+=H.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],z);b++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,U=n.get(L);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[x]=q;const ee=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,ee.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[x]=ee.matrix,L.castShadow){const U=n.get(L);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=Z,y++}x++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const ee=L.shadow,U=n.get(L);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[h]=q,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=b,i.version=$R++)}function l(c,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const _=c[h];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function qg(t){const e=new qR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qg(t),e.set(r,[a])):s>=o.length?(a=new qg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ZR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JR(t,e,n){let i=new Zf;const r=new je,s=new je,o=new ot,a=new y2({depthPacking:gT}),l=new S2,c={},u=n.maxTextureSize,f={[ur]:tn,[tn]:ur,[yi]:yi},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ZR,fragmentShader:QR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new gr;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wx;let h=this.type;this.render=function(T,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(or),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=h!==vi&&this.type===vi,V=h===vi&&this.type!==vi;for(let Z=0,q=T.length;Z<q;Z++){const ee=T[Z],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();if(r.multiply($),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,U.mapSize.y=s.y)),U.map===null||z===!0||V===!0){const ae=this.type!==vi?{minFilter:Sn,magFilter:Sn}:{};U.map!==null&&U.map.dispose(),U.map=new jr(r.x,r.y,ae),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Q=U.getViewportCount();for(let ae=0;ae<Q;ae++){const we=U.getViewport(ae);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),H.viewport(o),U.updateMatrices(ee,ae),i=U.getFrustum(),y(b,R,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&v(U,R),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(M,S,L)};function v(T,b){const R=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,R,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,R,p,x,null)}function _(T,b,R,M){let S=null;const L=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const H=S.uuid,z=b.uuid;let V=c[H];V===void 0&&(V={},c[H]=V);let Z=V[z];Z===void 0&&(Z=S.clone(),V[z]=Z,b.addEventListener("dispose",C)),S=Z}if(S.visible=b.visible,S.wireframe=b.wireframe,M===vi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=R}return S}function y(T,b,R,M,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const z=e.update(T),V=T.material;if(Array.isArray(V)){const Z=z.groups;for(let q=0,ee=Z.length;q<ee;q++){const U=Z[q],$=V[U.materialIndex];if($&&$.visible){const Q=_(T,$,M,S);T.onBeforeShadow(t,T,b,R,z,Q,U),t.renderBufferDirect(R,null,z,Q,T,U),T.onAfterShadow(t,T,b,R,z,Q,U)}}}else if(V.visible){const Z=_(T,V,M,S);T.onBeforeShadow(t,T,b,R,z,Z,null),t.renderBufferDirect(R,null,z,Z,T,null),T.onAfterShadow(t,T,b,R,z,Z,null)}}const H=T.children;for(let z=0,V=H.length;z<V;z++)y(H[z],b,R,M,S)}function C(T){T.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const e3={[jh]:Xh,[$h]:Kh,[Yh]:Zh,[Xs]:qh,[Xh]:jh,[Kh]:$h,[Zh]:Yh,[qh]:Xs};function t3(t,e){function n(){let I=!1;const de=new ot;let ne=null;const xe=new ot(0,0,0,0);return{setMask:function(re){ne!==re&&!I&&(t.colorMask(re,re,re,re),ne=re)},setLocked:function(re){I=re},setClear:function(re,K,_e,ke,ut){ut===!0&&(re*=ke,K*=ke,_e*=ke),de.set(re,K,_e,ke),xe.equals(de)===!1&&(t.clearColor(re,K,_e,ke),xe.copy(de))},reset:function(){I=!1,ne=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,de=!1,ne=null,xe=null,re=null;return{setReversed:function(K){if(de!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=K;const ke=re;re=null,this.setClear(ke)}},getReversed:function(){return de},setTest:function(K){K?ue(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(K){ne!==K&&!I&&(t.depthMask(K),ne=K)},setFunc:function(K){if(de&&(K=e3[K]),xe!==K){switch(K){case jh:t.depthFunc(t.NEVER);break;case Xh:t.depthFunc(t.ALWAYS);break;case $h:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case Yh:t.depthFunc(t.EQUAL);break;case qh:t.depthFunc(t.GEQUAL);break;case Kh:t.depthFunc(t.GREATER);break;case Zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=K}},setLocked:function(K){I=K},setClear:function(K){re!==K&&(de&&(K=1-K),t.clearDepth(K),re=K)},reset:function(){I=!1,ne=null,xe=null,re=null,de=!1}}}function r(){let I=!1,de=null,ne=null,xe=null,re=null,K=null,_e=null,ke=null,ut=null;return{setTest:function(nt){I||(nt?ue(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(nt){de!==nt&&!I&&(t.stencilMask(nt),de=nt)},setFunc:function(nt,Un,hi){(ne!==nt||xe!==Un||re!==hi)&&(t.stencilFunc(nt,Un,hi),ne=nt,xe=Un,re=hi)},setOp:function(nt,Un,hi){(K!==nt||_e!==Un||ke!==hi)&&(t.stencilOp(nt,Un,hi),K=nt,_e=Un,ke=hi)},setLocked:function(nt){I=nt},setClear:function(nt){ut!==nt&&(t.clearStencil(nt),ut=nt)},reset:function(){I=!1,de=null,ne=null,xe=null,re=null,K=null,_e=null,ke=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,v=null,_=null,y=null,C=null,T=null,b=new Ve(0,0,0),R=0,M=!1,S=null,L=null,H=null,z=null,V=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=ee>=1):U.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=ee>=2);let $=null,Q={};const ae=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),$e=new ot().fromArray(ae),X=new ot().fromArray(we);function oe(I,de,ne,xe){const re=new Uint8Array(4),K=t.createTexture();t.bindTexture(I,K),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<ne;_e++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(de+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return K}const ve={};ve[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),o.setFunc(Xs),et(!1),lt(Xm),ue(t.CULL_FACE),D(or);function ue(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function be(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Qe(I,de){return f[I]!==de?(t.bindFramebuffer(I,de),f[I]=de,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function De(I,de){let ne=p,xe=!1;if(I){ne=d.get(de),ne===void 0&&(ne=[],d.set(de,ne));const re=I.textures;if(ne.length!==re.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let K=0,_e=re.length;K<_e;K++)ne[K]=t.COLOR_ATTACHMENT0+K;ne.length=re.length,xe=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ne)}function mt(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const gt={[Cr]:t.FUNC_ADD,[Gw]:t.FUNC_SUBTRACT,[Ww]:t.FUNC_REVERSE_SUBTRACT};gt[jw]=t.MIN,gt[Xw]=t.MAX;const Je={[$w]:t.ZERO,[Yw]:t.ONE,[qw]:t.SRC_COLOR,[Gh]:t.SRC_ALPHA,[tT]:t.SRC_ALPHA_SATURATE,[Jw]:t.DST_COLOR,[Zw]:t.DST_ALPHA,[Kw]:t.ONE_MINUS_SRC_COLOR,[Wh]:t.ONE_MINUS_SRC_ALPHA,[eT]:t.ONE_MINUS_DST_COLOR,[Qw]:t.ONE_MINUS_DST_ALPHA,[nT]:t.CONSTANT_COLOR,[iT]:t.ONE_MINUS_CONSTANT_COLOR,[rT]:t.CONSTANT_ALPHA,[sT]:t.ONE_MINUS_CONSTANT_ALPHA};function D(I,de,ne,xe,re,K,_e,ke,ut,nt){if(I===or){x===!0&&(be(t.BLEND),x=!1);return}if(x===!1&&(ue(t.BLEND),x=!0),I!==Vw){if(I!==m||nt!==M){if((h!==Cr||y!==Cr)&&(t.blendEquation(t.FUNC_ADD),h=Cr,y=Cr),nt)switch(I){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $m:t.blendFunc(t.ONE,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $m:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,_=null,C=null,T=null,b.set(0,0,0),R=0,m=I,M=nt}return}re=re||de,K=K||ne,_e=_e||xe,(de!==h||re!==y)&&(t.blendEquationSeparate(gt[de],gt[re]),h=de,y=re),(ne!==v||xe!==_||K!==C||_e!==T)&&(t.blendFuncSeparate(Je[ne],Je[xe],Je[K],Je[_e]),v=ne,_=xe,C=K,T=_e),(ke.equals(b)===!1||ut!==R)&&(t.blendColor(ke.r,ke.g,ke.b,ut),b.copy(ke),R=ut),m=I,M=!1}function qt(I,de){I.side===yi?be(t.CULL_FACE):ue(t.CULL_FACE);let ne=I.side===tn;de&&(ne=!ne),et(ne),I.blending===Fs&&I.transparent===!1?D(or):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const xe=I.stencilWrite;a.setTest(xe),xe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function lt(I){I!==zw?(ue(t.CULL_FACE),I!==L&&(I===Xm?t.cullFace(t.BACK):I===Bw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),L=I}function Me(I){I!==H&&(q&&t.lineWidth(I),H=I)}function Ye(I,de,ne){I?(ue(t.POLYGON_OFFSET_FILL),(z!==de||V!==ne)&&(t.polygonOffset(de,ne),z=de,V=ne)):be(t.POLYGON_OFFSET_FILL)}function Re(I){I?ue(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function Be(I){I===void 0&&(I=t.TEXTURE0+Z-1),$!==I&&(t.activeTexture(I),$=I)}function Rt(I,de,ne){ne===void 0&&($===null?ne=t.TEXTURE0+Z-1:ne=$);let xe=Q[ne];xe===void 0&&(xe={type:void 0,texture:void 0},Q[ne]=xe),(xe.type!==I||xe.texture!==de)&&($!==ne&&(t.activeTexture(ne),$=ne),t.bindTexture(I,de||ve[I]),xe.type=I,xe.texture=de)}function P(){const I=Q[$];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){$e.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function Ne(I){X.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Le(I,de){let ne=c.get(de);ne===void 0&&(ne=new WeakMap,c.set(de,ne));let xe=ne.get(I);xe===void 0&&(xe=t.getUniformBlockIndex(de,I.name),ne.set(I,xe))}function le(I,de){const xe=c.get(de).get(I);l.get(de)!==xe&&(t.uniformBlockBinding(de,xe,I.__bindingPointIndex),l.set(de,xe))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},$=null,Q={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,v=null,_=null,y=null,C=null,T=null,b=new Ve(0,0,0),R=0,M=!1,S=null,L=null,H=null,z=null,V=null,$e.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:be,bindFramebuffer:Qe,drawBuffers:De,useProgram:mt,setBlending:D,setMaterial:qt,setFlipSided:et,setCullFace:lt,setLineWidth:Me,setPolygonOffset:Ye,setScissorTest:Re,activeTexture:Be,bindTexture:Rt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:Ae,texImage3D:te,updateUBOMapping:Le,uniformBlockBinding:le,texStorage2D:he,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:me,viewport:Ne,reset:Fe}}function n3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):uc("canvas")}function x(P,E,B){let Y=1;const J=Rt(P);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Y*J.width),Te=Math.floor(Y*J.height);f===void 0&&(f=g(j,Te));const he=E?g(j,Te):f;return he.width=j,he.height=Te,he.getContext("2d").drawImage(P,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Te+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps}function h(P){t.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,E,B,Y,J=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=E;if(E===t.RED&&(B===t.FLOAT&&(j=t.R32F),B===t.HALF_FLOAT&&(j=t.R16F),B===t.UNSIGNED_BYTE&&(j=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.R8UI),B===t.UNSIGNED_SHORT&&(j=t.R16UI),B===t.UNSIGNED_INT&&(j=t.R32UI),B===t.BYTE&&(j=t.R8I),B===t.SHORT&&(j=t.R16I),B===t.INT&&(j=t.R32I)),E===t.RG&&(B===t.FLOAT&&(j=t.RG32F),B===t.HALF_FLOAT&&(j=t.RG16F),B===t.UNSIGNED_BYTE&&(j=t.RG8)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RG8UI),B===t.UNSIGNED_SHORT&&(j=t.RG16UI),B===t.UNSIGNED_INT&&(j=t.RG32UI),B===t.BYTE&&(j=t.RG8I),B===t.SHORT&&(j=t.RG16I),B===t.INT&&(j=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGB8UI),B===t.UNSIGNED_SHORT&&(j=t.RGB16UI),B===t.UNSIGNED_INT&&(j=t.RGB32UI),B===t.BYTE&&(j=t.RGB8I),B===t.SHORT&&(j=t.RGB16I),B===t.INT&&(j=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),B===t.UNSIGNED_INT&&(j=t.RGBA32UI),B===t.BYTE&&(j=t.RGBA8I),B===t.SHORT&&(j=t.RGBA16I),B===t.INT&&(j=t.RGBA32I)),E===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),E===t.RGBA){const Te=J?lc:Ke.getTransfer(Y);B===t.FLOAT&&(j=t.RGBA32F),B===t.HALF_FLOAT&&(j=t.RGBA16F),B===t.UNSIGNED_BYTE&&(j=Te===st?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(P,E){let B;return P?E===null||E===Wr||E===oa?B=t.DEPTH24_STENCIL8:E===ni?B=t.DEPTH32F_STENCIL8:E===sa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wr||E===oa?B=t.DEPTH_COMPONENT24:E===ni?B=t.DEPTH_COMPONENT32F:E===sa&&(B=t.DEPTH_COMPONENT16),B}function C(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){const E=P.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&u.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),S(E)}function R(P){const E=i.get(P);if(E.__webglInit===void 0)return;const B=P.source,Y=d.get(B);if(Y){const J=Y[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(P),Object.keys(Y).length===0&&d.delete(B)}i.remove(P)}function M(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const B=P.source,Y=d.get(B);delete Y[E.__cacheKey],o.memory.textures--}function S(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let J=0;J<E.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)t.deleteFramebuffer(E.__webglFramebuffer[Y]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=P.textures;for(let Y=0,J=B.length;Y<J;Y++){const j=i.get(B[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(P)}let L=0;function H(){L=0}function z(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function V(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Z(P,E){const B=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,P,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function q(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ve(B,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function ee(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ve(B,P,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function U(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ue(B,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const $={[ed]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},Q={[Sn]:t.NEAREST,[pT]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[ti]:t.LINEAR,[du]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},ae={[xT]:t.NEVER,[wT]:t.ALWAYS,[_T]:t.LESS,[n_]:t.LEQUAL,[yT]:t.EQUAL,[ET]:t.GEQUAL,[ST]:t.GREATER,[MT]:t.NOTEQUAL};function we(P,E){if(E.type===ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===du||E.magFilter===Ga||E.magFilter===Ur||E.minFilter===ti||E.minFilter===du||E.minFilter===Ga||E.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,$[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,$[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,$[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Ga&&E.minFilter!==Ur||E.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function $e(P,E){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));const Y=E.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const j=V(E);if(j!==P.__cacheKey){J[j]===void 0&&(J[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[j].usedTimes++;const Te=J[P.__cacheKey];Te!==void 0&&(J[P.__cacheKey].usedTimes--,Te.usedTimes===0&&M(E)),P.__cacheKey=j,P.__webglTexture=J[j].texture}return B}function X(P,E,B){return Math.floor(Math.floor(P/B)/E)}function oe(P,E,B,Y){const j=P.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,B,Y,E.data);else{j.sort((te,me)=>te.start-me.start);let Te=0;for(let te=1;te<j.length;te++){const me=j[Te],Ne=j[te],Le=me.start+me.count,le=X(Ne.start,E.width,4),Fe=X(me.start,E.width,4);Ne.start<=Le+1&&le===Fe&&X(Ne.start+Ne.count-1,E.width,4)===le?me.count=Math.max(me.count,Ne.start+Ne.count-me.start):(++Te,j[Te]=Ne)}j.length=Te+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Se=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let te=0,me=j.length;te<me;te++){const Ne=j[te],Le=Math.floor(Ne.start/4),le=Math.ceil(Ne.count/4),Fe=Le%E.width,I=Math.floor(Le/E.width),de=le,ne=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Fe,I,de,ne,B,Y,E.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function ve(P,E,B){let Y=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=t.TEXTURE_3D);const J=$e(P,E),j=E.source;n.bindTexture(Y,P.__webglTexture,t.TEXTURE0+B);const Te=i.get(j);if(j.version!==Te.__version||J===!0){n.activeTexture(t.TEXTURE0+B);const he=Ke.getPrimaries(Ke.workingColorSpace),Se=E.colorSpace===qi?null:Ke.getPrimaries(E.colorSpace),Ae=E.colorSpace===qi||he===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let te=x(E.image,!1,r.maxTextureSize);te=Be(E,te);const me=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let Le=_(E.internalFormat,me,Ne,E.colorSpace,E.isVideoTexture);we(Y,E);let le;const Fe=E.mipmaps,I=E.isVideoTexture!==!0,de=Te.__version===void 0||J===!0,ne=j.dataReady,xe=C(E,te);if(E.isDepthTexture)Le=y(E.format===la,E.type),de&&(I?n.texStorage2D(t.TEXTURE_2D,1,Le,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Le,te.width,te.height,0,me,Ne,null));else if(E.isDataTexture)if(Fe.length>0){I&&de&&n.texStorage2D(t.TEXTURE_2D,xe,Le,Fe[0].width,Fe[0].height);for(let re=0,K=Fe.length;re<K;re++)le=Fe[re],I?ne&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,le.width,le.height,me,Ne,le.data):n.texImage2D(t.TEXTURE_2D,re,Le,le.width,le.height,0,me,Ne,le.data);E.generateMipmaps=!1}else I?(de&&n.texStorage2D(t.TEXTURE_2D,xe,Le,te.width,te.height),ne&&oe(E,te,me,Ne)):n.texImage2D(t.TEXTURE_2D,0,Le,te.width,te.height,0,me,Ne,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Le,Fe[0].width,Fe[0].height,te.depth);for(let re=0,K=Fe.length;re<K;re++)if(le=Fe[re],E.format!==Xn)if(me!==null)if(I){if(ne)if(E.layerUpdates.size>0){const _e=Ag(le.width,le.height,E.format,E.type);for(const ke of E.layerUpdates){const ut=le.data.subarray(ke*_e/le.data.BYTES_PER_ELEMENT,(ke+1)*_e/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,ke,le.width,le.height,1,me,ut)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,me,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Le,le.width,le.height,te.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,me,Ne,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Le,le.width,le.height,te.depth,0,me,Ne,le.data)}else{I&&de&&n.texStorage2D(t.TEXTURE_2D,xe,Le,Fe[0].width,Fe[0].height);for(let re=0,K=Fe.length;re<K;re++)le=Fe[re],E.format!==Xn?me!==null?I?ne&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,le.width,le.height,me,le.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Le,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ne&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,le.width,le.height,me,Ne,le.data):n.texImage2D(t.TEXTURE_2D,re,Le,le.width,le.height,0,me,Ne,le.data)}else if(E.isDataArrayTexture)if(I){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Le,te.width,te.height,te.depth),ne)if(E.layerUpdates.size>0){const re=Ag(te.width,te.height,E.format,E.type);for(const K of E.layerUpdates){const _e=te.data.subarray(K*re/te.data.BYTES_PER_ELEMENT,(K+1)*re/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,me,Ne,_e)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Ne,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,me,Ne,te.data);else if(E.isData3DTexture)I?(de&&n.texStorage3D(t.TEXTURE_3D,xe,Le,te.width,te.height,te.depth),ne&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Ne,te.data)):n.texImage3D(t.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,me,Ne,te.data);else if(E.isFramebufferTexture){if(de)if(I)n.texStorage2D(t.TEXTURE_2D,xe,Le,te.width,te.height);else{let re=te.width,K=te.height;for(let _e=0;_e<xe;_e++)n.texImage2D(t.TEXTURE_2D,_e,Le,re,K,0,me,Ne,null),re>>=1,K>>=1}}else if(Fe.length>0){if(I&&de){const re=Rt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,xe,Le,re.width,re.height)}for(let re=0,K=Fe.length;re<K;re++)le=Fe[re],I?ne&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,me,Ne,le):n.texImage2D(t.TEXTURE_2D,re,Le,me,Ne,le);E.generateMipmaps=!1}else if(I){if(de){const re=Rt(te);n.texStorage2D(t.TEXTURE_2D,xe,Le,re.width,re.height)}ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ne,te)}else n.texImage2D(t.TEXTURE_2D,0,Le,me,Ne,te);m(E)&&h(Y),Te.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ue(P,E,B){if(E.image.length!==6)return;const Y=$e(P,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+B);const j=i.get(J);if(J.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);const Te=Ke.getPrimaries(Ke.workingColorSpace),he=E.colorSpace===qi?null:Ke.getPrimaries(E.colorSpace),Se=E.colorSpace===qi||Te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Ae&&!te?me[K]=x(E.image[K],!0,r.maxCubemapSize):me[K]=te?E.image[K].image:E.image[K],me[K]=Be(E,me[K]);const Ne=me[0],Le=s.convert(E.format,E.colorSpace),le=s.convert(E.type),Fe=_(E.internalFormat,Le,le,E.colorSpace),I=E.isVideoTexture!==!0,de=j.__version===void 0||Y===!0,ne=J.dataReady;let xe=C(E,Ne);we(t.TEXTURE_CUBE_MAP,E);let re;if(Ae){I&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Fe,Ne.width,Ne.height);for(let K=0;K<6;K++){re=me[K].mipmaps;for(let _e=0;_e<re.length;_e++){const ke=re[_e];E.format!==Xn?Le!==null?I?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,ke.width,ke.height,Le,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Fe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,ke.width,ke.height,Le,le,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Fe,ke.width,ke.height,0,Le,le,ke.data)}}}else{if(re=E.mipmaps,I&&de){re.length>0&&xe++;const K=Rt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(te){I?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,Le,le,me[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,me[K].width,me[K].height,0,Le,le,me[K].data);for(let _e=0;_e<re.length;_e++){const ut=re[_e].image[K].image;I?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ut.width,ut.height,Le,le,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Fe,ut.width,ut.height,0,Le,le,ut.data)}}else{I?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,le,me[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Le,le,me[K]);for(let _e=0;_e<re.length;_e++){const ke=re[_e];I?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Le,le,ke.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Fe,Le,le,ke.image[K])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),j.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function be(P,E,B,Y,J,j){const Te=s.convert(B.format,B.colorSpace),he=s.convert(B.type),Se=_(B.internalFormat,Te,he,B.colorSpace),Ae=i.get(E),te=i.get(B);if(te.__renderTarget=E,!Ae.__hasExternalTextures){const me=Math.max(1,E.width>>j),Ne=Math.max(1,E.height>>j);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,j,Se,me,Ne,E.depth,0,Te,he,null):n.texImage2D(J,j,Se,me,Ne,0,Te,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,te.__webglTexture,0,Me(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,te.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(P,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const Y=E.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,j=y(E.stencilBuffer,J),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Me(E);Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,j,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,j,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,j,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,P)}else{const Y=E.textures;for(let J=0;J<Y.length;J++){const j=Y[J],Te=s.convert(j.format,j.colorSpace),he=s.convert(j.type),Se=_(j.internalFormat,Te,he,j.colorSpace),Ae=Me(E);B&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Se,E.width,E.height):Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const J=Y.__webglTexture,j=Me(E);if(E.depthTexture.format===aa)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===la)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function mt(P){const E=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Y}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=P.texture.mipmaps;Y&&Y.length>0?De(E.__webglFramebuffer[0],P):De(E.__webglFramebuffer,P)}else if(B){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=t.createRenderbuffer(),Qe(E.__webglDepthbuffer[Y],P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,j)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Qe(E.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(P,E,B){const Y=i.get(P);E!==void 0&&be(Y.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&mt(P)}function Je(P){const E=P.texture,B=i.get(P),Y=i.get(E);P.addEventListener("dispose",b);const J=P.textures,j=P.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=E.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let Se=0;Se<E.mipmaps.length;Se++)B.__webglFramebuffer[he][Se]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let he=0,Se=J.length;he<Se;he++){const Ae=i.get(J[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Ye(P)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const Se=J[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ae=s.convert(Se.format,Se.colorSpace),te=s.convert(Se.type),me=_(Se.internalFormat,Ae,te,Se.colorSpace,P.isXRRenderTarget===!0),Ne=Me(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Qe(B.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),we(t.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)be(B.__webglFramebuffer[he][Se],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else be(B.__webglFramebuffer[he],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let he=0,Se=J.length;he<Se;he++){const Ae=J[he],te=i.get(Ae);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),we(t.TEXTURE_2D,Ae),be(B.__webglFramebuffer,P,Ae,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Ae)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Y.__webglTexture),we(he,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)be(B.__webglFramebuffer[Se],P,E,t.COLOR_ATTACHMENT0,he,Se);else be(B.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,he,0);m(E)&&h(he),n.unbindTexture()}P.depthBuffer&&mt(P)}function D(P){const E=P.textures;for(let B=0,Y=E.length;B<Y;B++){const J=E[B];if(m(J)){const j=v(P),Te=i.get(J).__webglTexture;n.bindTexture(j,Te),h(j),n.unbindTexture()}}}const qt=[],et=[];function lt(P){if(P.samples>0){if(Ye(P)===!1){const E=P.textures,B=P.width,Y=P.height;let J=t.COLOR_BUFFER_BIT;const j=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(P),he=E.length>1;if(he)for(let Ae=0;Ae<E.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=P.texture.mipmaps;Se&&Se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const te=i.get(E[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,t.NEAREST),l===!0&&(qt.length=0,et.length=0,qt.push(t.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(qt.push(j),et.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,qt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<E.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const te=i.get(E[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Me(P){return Math.min(r.maxSamples,P.samples)}function Ye(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Be(P,E){const B=P.colorSpace,Y=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==qs&&B!==qi&&(Ke.getTransfer(B)===st?(Y!==Xn||J!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=U,this.rebindTextures=gt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function i3(t,e){function n(i,r=qi){let s;const o=Ke.getTransfer(r);if(i===ai)return t.UNSIGNED_BYTE;if(i===Hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yx)return t.BYTE;if(i===qx)return t.SHORT;if(i===sa)return t.UNSIGNED_SHORT;if(i===Bf)return t.INT;if(i===Wr)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===_a)return t.HALF_FLOAT;if(i===Zx)return t.ALPHA;if(i===Qx)return t.RGB;if(i===Xn)return t.RGBA;if(i===aa)return t.DEPTH_COMPONENT;if(i===la)return t.DEPTH_STENCIL;if(i===Gf)return t.RED;if(i===Wf)return t.RED_INTEGER;if(i===Jx)return t.RG;if(i===jf)return t.RG_INTEGER;if(i===Xf)return t.RGBA_INTEGER;if(i===Pl||i===Ll||i===Nl||i===Dl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===od||i===ad||i===ld)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===od||i===ad)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ld)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cd||i===ud||i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===vd||i===xd||i===_d||i===yd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Ed||i===wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Il)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===e_||i===Td||i===Ad||i===bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Il)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const r3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:r3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new Pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a3 extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const x=new o3,m=n.getContextAttributes();let h=null,v=null;const _=[],y=[],C=new je;let T=null;const b=new xn;b.viewport=new ot;const R=new xn;R.viewport=new ot;const M=[b,R],S=new A2;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=_[X];return oe===void 0&&(oe=new Du,_[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=_[X];return oe===void 0&&(oe=new Du,_[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=_[X];return oe===void 0&&(oe=new Du,_[X]=oe),oe.getHandSpace()};function z(X){const oe=y.indexOf(X.inputSource);if(oe===-1)return;const ve=_[oe];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<_.length;X++){const oe=y[X];oe!==null&&(y[X]=null,_[X].disconnect(oe))}L=null,H=null,x.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ue=null,be=null;m.depth&&(be=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=m.stencil?la:aa,ue=m.stencil?oa:Wr);const Qe={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jr(d.textureWidth,d.textureHeight,{format:Xn,type:ai,depthTexture:new p_(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let oe=0;oe<X.removed.length;oe++){const ve=X.removed[oe],ue=y.indexOf(ve);ue>=0&&(y[ue]=null,_[ue].disconnect(ve))}for(let oe=0;oe<X.added.length;oe++){const ve=X.added[oe];let ue=y.indexOf(ve);if(ue===-1){for(let Qe=0;Qe<_.length;Qe++)if(Qe>=y.length){y.push(ve),ue=Qe;break}else if(y[Qe]===null){y[Qe]=ve,ue=Qe;break}if(ue===-1)break}const be=_[ue];be&&be.connect(ve)}}const q=new O,ee=new O;function U(X,oe,ve){q.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const ue=q.distanceTo(ee),be=oe.projectionMatrix.elements,Qe=ve.projectionMatrix.elements,De=be[14]/(be[10]-1),mt=be[14]/(be[10]+1),gt=(be[9]+1)/be[5],Je=(be[9]-1)/be[5],D=(be[8]-1)/be[0],qt=(Qe[8]+1)/Qe[0],et=De*D,lt=De*qt,Me=ue/(-D+qt),Ye=Me*-D;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ye),X.translateZ(Me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Re=De+Me,Be=mt+Me,Rt=et-Ye,P=lt+(ue-Ye),E=gt*mt/Be*Re,B=Je*mt/Be*Re;X.projectionMatrix.makePerspective(Rt,P,E,B,Re,Be),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let oe=X.near,ve=X.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),S.near=R.near=b.near=oe,S.far=R.far=b.far=ve,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),b.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,S.layers.mask=b.layers.mask|R.layers.mask;const ue=X.parent,be=S.cameras;$(S,ue);for(let Qe=0;Qe<be.length;Qe++)$(be[Qe],ue);be.length===2?U(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),Q(X,S,ue)};function Q(X,oe,ve){ve===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ca*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ae=null;function we(X,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let De=0;De<ve.length;De++){const mt=ve[De];let gt=null;if(p!==null)gt=p.getViewport(mt);else{const D=f.getViewSubImage(d,mt);gt=D.viewport,De===0&&(e.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(v))}let Je=M[De];Je===void 0&&(Je=new xn,Je.layers.enable(De),Je.viewport=new ot,M[De]=Je),Je.matrix.fromArray(mt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(mt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(gt.x,gt.y,gt.width,gt.height),De===0&&(S.matrix.copy(Je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Je)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const De=f.getDepthInformation(ve[0]);De&&De.isValid&&De.texture&&x.init(e,De,r.renderState)}}for(let ve=0;ve<_.length;ve++){const ue=y[ve],be=_[ve];ue!==null&&be!==void 0&&be.update(ue,oe,c||o)}ae&&ae(X,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const $e=new v_;$e.setAnimationLoop(we),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const wr=new li,l3=new at;function c3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,c_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,wr.copy(y),wr.x*=-1,wr.y*=-1,wr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(l3.makeRotationFromEuler(wr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function u3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),C=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,b=y.length;T<b;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,S=R.length;M<S;M++){const L=R[M];if(p(L,T,M,C)===!0){const H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let Z=0;Z<z.length;Z++){const q=z[Z],ee=x(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,H+V,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,C){const T=v.value,b=_+"_"+y;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{const R=C[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(v){const _=v.uniforms;let y=0;const C=16;for(let b=0,R=_.length;b<R;b++){const M=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,L=M.length;S<L;S++){const H=M[S],z=Array.isArray(H.value)?H.value:[H.value];for(let V=0,Z=z.length;V<Z;V++){const q=z[V],ee=x(q),U=y%C,$=U%ee.boundary,Q=U+$;y+=$,Q!==0&&C-Q<ee.storage&&(y+=C-Q),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ee.storage}}}const T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class h3{constructor(e={}){const{canvas:n=HT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=vn;let T=0,b=0,R=null,M=-1,S=null;const L=new ot,H=new ot;let z=null;const V=new Ve(0);let Z=0,q=n.width,ee=n.height,U=1,$=null,Q=null;const ae=new ot(0,0,q,ee),we=new ot(0,0,q,ee);let $e=!1;const X=new Zf;let oe=!1,ve=!1;const ue=new at,be=new at,Qe=new O,De=new ot,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Je(){return R===null?U:1}let D=i;function qt(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",K,!1),D===null){const F="webgl2";if(D=qt(F,A),D===null)throw qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,lt,Me,Ye,Re,Be,Rt,P,E,B,Y,J,j,Te,he,Se,Ae,te,me,Ne,Le,le,Fe,I;function de(){et=new SC(D),et.init(),le=new i3(D,et),lt=new pC(D,et,e,le),Me=new t3(D,et),lt.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Ye=new wC(D),Re=new VR,Be=new n3(D,et,Me,Re,lt,le,Ye),Rt=new gC(y),P=new yC(y),E=new P2(D),Fe=new dC(D,E),B=new MC(D,E,Ye,Fe),Y=new AC(D,B,E,Ye),me=new TC(D,lt,Be),Se=new mC(Re),J=new HR(y,Rt,P,et,lt,Fe,Se),j=new c3(y,Re),Te=new WR,he=new KR(et),te=new hC(y,Rt,P,Me,Y,p,l),Ae=new JR(y,Y,lt),I=new u3(D,Ye,lt,Me),Ne=new fC(D,et,Ye),Le=new EC(D,et,Ye),Ye.programs=J.programs,y.capabilities=lt,y.extensions=et,y.properties=Re,y.renderLists=Te,y.shadowMap=Ae,y.state=Me,y.info=Ye}de();const ne=new a3(y,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(q,ee,!1))},this.getSize=function(A){return A.set(q,ee)},this.setSize=function(A,F,G=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,ee=F,n.width=Math.floor(A*U),n.height=Math.floor(F*U),G===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(q*U,ee*U).floor()},this.setDrawingBufferSize=function(A,F,G){q=A,ee=F,U=G,n.width=Math.floor(A*G),n.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,F,G,W){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,F,G,W),Me.viewport(L.copy(ae).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,F,G,W){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,F,G,W),Me.scissor(H.copy(we).multiplyScalar(U).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){Me.setScissorTest($e=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let k=!1;if(R!==null){const se=R.texture.format;k=se===Xf||se===jf||se===Wf}if(k){const se=R.texture.type,fe=se===ai||se===Wr||se===sa||se===oa||se===Hf||se===Vf,ye=te.getClearColor(),ge=te.getClearAlpha(),Ie=ye.r,Ue=ye.g,Ce=ye.b;fe?(g[0]=Ie,g[1]=Ue,g[2]=Ce,g[3]=ge,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ie,x[1]=Ue,x[2]=Ce,x[3]=ge,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",K,!1),te.dispose(),Te.dispose(),he.dispose(),Re.dispose(),Rt.dispose(),P.dispose(),Y.dispose(),Fe.dispose(),I.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",np),ne.removeEventListener("sessionend",ip),vr.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=Ye.autoReset,F=Ae.enabled,G=Ae.autoUpdate,W=Ae.needsUpdate,k=Ae.type;de(),Ye.autoReset=A,Ae.enabled=F,Ae.autoUpdate=G,Ae.needsUpdate=W,Ae.type=k}function K(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){const F=A.target;F.removeEventListener("dispose",_e),ke(F)}function ke(A){ut(A),Re.remove(A)}function ut(A){const F=Re.get(A).programs;F!==void 0&&(F.forEach(function(G){J.releaseProgram(G)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,k,se){F===null&&(F=mt);const fe=k.isMesh&&k.matrixWorld.determinant()<0,ye=C_(A,F,G,W,k);Me.setMaterial(W,fe);let ge=G.index,Ie=1;if(W.wireframe===!0){if(ge=B.getWireframeAttribute(G),ge===void 0)return;Ie=2}const Ue=G.drawRange,Ce=G.attributes.position;let We=Ue.start*Ie,it=(Ue.start+Ue.count)*Ie;se!==null&&(We=Math.max(We,se.start*Ie),it=Math.min(it,(se.start+se.count)*Ie)),ge!==null?(We=Math.max(We,0),it=Math.min(it,ge.count)):Ce!=null&&(We=Math.max(We,0),it=Math.min(it,Ce.count));const vt=it-We;if(vt<0||vt===1/0)return;Fe.setup(k,W,ye,G,ge);let Mt,qe=Ne;if(ge!==null&&(Mt=E.get(ge),qe=Le,qe.setIndex(Mt)),k.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*Je()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(k.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*Je()),k.isLineSegments?qe.setMode(D.LINES):k.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else k.isPoints?qe.setMode(D.POINTS):k.isSprite&&qe.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pe=k._multiDrawStarts,Ot=k._multiDrawCounts,tt=k._multiDrawCount,Fn=ge?E.get(ge).bytesPerElement:1,Kr=Re.get(W).currentProgram.getUniforms();for(let dn=0;dn<tt;dn++)Kr.setValue(D,"_gl_DrawID",dn),qe.render(Pe[dn]/Fn,Ot[dn])}else if(k.isInstancedMesh)qe.renderInstances(We,vt,k.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ot=Math.min(G.instanceCount,Pe);qe.renderInstances(We,vt,Ot)}else qe.render(We,vt)};function nt(A,F,G){A.transparent===!0&&A.side===yi&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,wa(A,F,G),A.side=ur,A.needsUpdate=!0,wa(A,F,G),A.side=yi):wa(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),h=he.get(G),h.init(F),_.push(h),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ye=se[fe];nt(ye,G,k),W.add(ye)}else nt(se,G,k),W.add(se)}),h=_.pop(),W},this.compileAsync=function(A,F,G=null){const W=this.compile(A,F,G);return new Promise(k=>{function se(){if(W.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){k(A);return}setTimeout(se,10)}et.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Un=null;function hi(A){Un&&Un(A)}function np(){vr.stop()}function ip(){vr.start()}const vr=new v_;vr.setAnimationLoop(hi),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(A){Un=A,ne.setAnimationLoop(A),A===null?vr.stop():vr.start()},ne.addEventListener("sessionstart",np),ne.addEventListener("sessionend",ip),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,F,R),h=he.get(A,_.length),h.init(F),_.push(h),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(be),ve=this.localClippingEnabled,oe=Se.init(this.clippingPlanes,ve),m=Te.get(A,v.length),m.init(),v.push(m),ne.enabled===!0&&ne.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&Nc(se,F,-1/0,y.sortObjects)}Nc(A,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,Q),gt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,gt&&te.addToRenderList(m,A),this.info.render.frame++,oe===!0&&Se.beginShadows();const G=h.state.shadowsArray;Ae.render(G,A,F),oe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(h.setupLights(),F.isArrayCamera){const se=F.cameras;if(k.length>0)for(let fe=0,ye=se.length;fe<ye;fe++){const ge=se[fe];sp(W,k,A,ge)}gt&&te.render(A);for(let fe=0,ye=se.length;fe<ye;fe++){const ge=se[fe];rp(m,A,ge,ge.viewport)}}else k.length>0&&sp(W,k,A,F),gt&&te.render(A),rp(m,A,F);R!==null&&b===0&&(Be.updateMultisampleRenderTarget(R),Be.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,F),Fe.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(h=_[_.length-1],oe===!0&&Se.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Nc(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){W&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const fe=Y.update(A),ye=A.material;ye.visible&&m.push(A,fe,ye,G,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const fe=Y.update(A),ye=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),De.copy(fe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(ye)){const ge=fe.groups;for(let Ie=0,Ue=ge.length;Ie<Ue;Ie++){const Ce=ge[Ie],We=ye[Ce.materialIndex];We&&We.visible&&m.push(A,fe,We,G,De.z,Ce)}}else ye.visible&&m.push(A,fe,ye,G,De.z,null)}}const se=A.children;for(let fe=0,ye=se.length;fe<ye;fe++)Nc(se[fe],F,G,W)}function rp(A,F,G,W){const k=A.opaque,se=A.transmissive,fe=A.transparent;h.setupLightsView(G),oe===!0&&Se.setGlobalState(y.clippingPlanes,G),W&&Me.viewport(L.copy(W)),k.length>0&&Ea(k,F,G),se.length>0&&Ea(se,F,G),fe.length>0&&Ea(fe,F,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function sp(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new jr(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?_a:ai,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const se=h.state.transmissionRenderTarget[W.id],fe=W.viewport||L;se.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const ye=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(V),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),gt&&te.render(G);const ge=y.toneMapping;y.toneMapping=ar;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),oe===!0&&Se.setGlobalState(y.clippingPlanes,W),Ea(A,G,W),Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ce=0,We=F.length;Ce<We;Ce++){const it=F[Ce],vt=it.object,Mt=it.geometry,qe=it.material,Pe=it.group;if(qe.side===yi&&vt.layers.test(W.layers)){const Ot=qe.side;qe.side=tn,qe.needsUpdate=!0,op(vt,G,W,Mt,qe,Pe),qe.side=Ot,qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se))}y.setRenderTarget(ye),y.setClearColor(V,Z),Ie!==void 0&&(W.viewport=Ie),y.toneMapping=ge}function Ea(A,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,se=A.length;k<se;k++){const fe=A[k],ye=fe.object,ge=fe.geometry,Ie=fe.group;let Ue=fe.material;Ue.allowOverride===!0&&W!==null&&(Ue=W),ye.layers.test(G.layers)&&op(ye,F,G,ge,Ue,Ie)}}function op(A,F,G,W,k,se){A.onBeforeRender(y,F,G,W,k,se),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(y,F,G,W,A,se),k.transparent===!0&&k.side===yi&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,y.renderBufferDirect(G,F,W,k,A,se),k.side=ur,k.needsUpdate=!0,y.renderBufferDirect(G,F,W,k,A,se),k.side=yi):y.renderBufferDirect(G,F,W,k,A,se),A.onAfterRender(y,F,G,W,k,se)}function wa(A,F,G){F.isScene!==!0&&(F=mt);const W=Re.get(A),k=h.state.lights,se=h.state.shadowsArray,fe=k.state.version,ye=J.getParameters(A,k.state,se,F,G),ge=J.getProgramCacheKey(ye);let Ie=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?P:Rt).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",_e),Ie=new Map,W.programs=Ie);let Ue=Ie.get(ge);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===fe)return lp(A,ye),Ue}else ye.uniforms=J.getUniforms(A),A.onBeforeCompile(ye,y),Ue=J.acquireProgram(ye,ge),Ie.set(ge,Ue),W.uniforms=ye.uniforms;const Ce=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),lp(A,ye),W.needsLights=P_(A),W.lightsStateVersion=fe,W.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function ap(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function lp(A,F){const G=Re.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function C_(A,F,G,W,k){F.isScene!==!0&&(F=mt),Be.resetTextureUnits();const se=F.fog,fe=W.isMeshStandardMaterial?F.environment:null,ye=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qs,ge=(W.isMeshStandardMaterial?P:Rt).get(W.envMap||fe),Ie=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,it=!!G.morphAttributes.color;let vt=ar;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(vt=y.toneMapping);const Mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=Mt!==void 0?Mt.length:0,Pe=Re.get(W),Ot=h.state.lights;if(oe===!0&&(ve===!0||A!==S)){const Kt=A===S&&W.id===M;Se.setState(W,A,Kt)}let tt=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ot.state.version||Pe.outputColorSpace!==ye||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==ge||W.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Se.numPlanes||Pe.numIntersection!==Se.numIntersection)||Pe.vertexAlphas!==Ie||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ce||Pe.morphNormals!==We||Pe.morphColors!==it||Pe.toneMapping!==vt||Pe.morphTargetsCount!==qe)&&(tt=!0):(tt=!0,Pe.__version=W.version);let Fn=Pe.currentProgram;tt===!0&&(Fn=wa(W,F,k));let Kr=!1,dn=!1,oo=!1;const ft=Fn.getUniforms(),Tn=Pe.uniforms;if(Me.useProgram(Fn.program)&&(Kr=!0,dn=!0,oo=!0),W.id!==M&&(M=W.id,dn=!0),Kr||S!==A){Me.buffers.depth.getReversed()?(ue.copy(A.projectionMatrix),GT(ue),WT(ue),ft.setValue(D,"projectionMatrix",ue)):ft.setValue(D,"projectionMatrix",A.projectionMatrix),ft.setValue(D,"viewMatrix",A.matrixWorldInverse);const on=ft.map.cameraPosition;on!==void 0&&on.setValue(D,Qe.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,dn=!0,oo=!0)}if(k.isSkinnedMesh){ft.setOptional(D,k,"bindMatrix"),ft.setOptional(D,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ft.setValue(D,"boneTexture",Kt.boneTexture,Be))}k.isBatchedMesh&&(ft.setOptional(D,k,"batchingTexture"),ft.setValue(D,"batchingTexture",k._matricesTexture,Be),ft.setOptional(D,k,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",k._indirectTexture,Be),ft.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",k._colorsTexture,Be));const An=G.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&me.update(k,G,Fn),(dn||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,ft.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Tn.envMap.value=ge,Tn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Tn.envMapIntensity.value=F.environmentIntensity),dn&&(ft.setValue(D,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&R_(Tn,oo),se&&W.fog===!0&&j.refreshFogUniforms(Tn,se),j.refreshMaterialUniforms(Tn,W,U,ee,h.state.transmissionRenderTarget[A.id]),Ul.upload(D,ap(Pe),Tn,Be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ul.upload(D,ap(Pe),Tn,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(D,"center",k.center),ft.setValue(D,"modelViewMatrix",k.modelViewMatrix),ft.setValue(D,"normalMatrix",k.normalMatrix),ft.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Kt=W.uniformsGroups;for(let on=0,Dc=Kt.length;on<Dc;on++){const xr=Kt[on];I.update(xr,Fn),I.bind(xr,Fn)}}return Fn}function R_(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function P_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,G){const W=Re.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Re.get(A.texture).__webglTexture=F,Re.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const G=Re.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const L_=D.createFramebuffer();this.setRenderTarget=function(A,F=0,G=0){R=A,T=F,b=G;let W=!0,k=null,se=!1,fe=!1;if(A){const ge=Re.get(A);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)Be.setupRenderTarget(A);else if(ge.__hasExternalTextures)Be.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&Re.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const Ue=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?k=Ue[F][G]:k=Ue[F],se=!0):A.samples>0&&Be.useMultisampledRTT(A)===!1?k=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[G]:k=Ue,L.copy(A.viewport),H.copy(A.scissor),z=A.scissorTest}else L.copy(ae).multiplyScalar(U).floor(),H.copy(we).multiplyScalar(U).floor(),z=$e;if(G!==0&&(k=L_),Me.bindFramebuffer(D.FRAMEBUFFER,k)&&W&&Me.drawBuffers(A,k),Me.viewport(L),Me.scissor(H),Me.setScissorTest(z),se){const ge=Re.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,G)}else if(fe){const ge=Re.get(A.texture),Ie=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,G,Ie)}else if(A!==null&&G!==0){const ge=Re.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(A,F,G,W,k,se,fe,ye=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Me.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Ie=A.textures[ye],Ue=Ie.format,Ce=Ie.type;if(!lt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-k&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(F,G,W,k,le.convert(Ue),le.convert(Ce),se))}finally{const Ie=R!==null?Re.get(R).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,k,se,fe,ye=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-k){Me.bindFramebuffer(D.FRAMEBUFFER,ge);const Ie=A.textures[ye],Ue=Ie.format,Ce=Ie.type;if(!lt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(F,G,W,k,le.convert(Ue),le.convert(Ce),0);const it=R!==null?Re.get(R).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,it);const vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await VT(D,vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(We),D.deleteSync(vt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,G=0){const W=Math.pow(2,-G),k=Math.floor(A.image.width*W),se=Math.floor(A.image.height*W),fe=F!==null?F.x:0,ye=F!==null?F.y:0;Be.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,fe,ye,k,se),Me.unbindTexture()};const N_=D.createFramebuffer(),D_=D.createFramebuffer();this.copyTextureToTexture=function(A,F,G=null,W=null,k=0,se=null){se===null&&(k!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let fe,ye,ge,Ie,Ue,Ce,We,it,vt;const Mt=A.isCompressedTexture?A.mipmaps[se]:A.image;if(G!==null)fe=G.max.x-G.min.x,ye=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,Ue=G.min.y,Ce=G.isBox3?G.min.z:0;else{const An=Math.pow(2,-k);fe=Math.floor(Mt.width*An),ye=Math.floor(Mt.height*An),A.isDataArrayTexture?ge=Mt.depth:A.isData3DTexture?ge=Math.floor(Mt.depth*An):ge=1,Ie=0,Ue=0,Ce=0}W!==null?(We=W.x,it=W.y,vt=W.z):(We=0,it=0,vt=0);const qe=le.convert(F.format),Pe=le.convert(F.type);let Ot;F.isData3DTexture?(Be.setTexture3D(F,0),Ot=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Be.setTexture2DArray(F,0),Ot=D.TEXTURE_2D_ARRAY):(Be.setTexture2D(F,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=D.getParameter(D.UNPACK_ROW_LENGTH),Fn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kr=D.getParameter(D.UNPACK_SKIP_PIXELS),dn=D.getParameter(D.UNPACK_SKIP_ROWS),oo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const ft=A.isDataArrayTexture||A.isData3DTexture,Tn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const An=Re.get(A),Kt=Re.get(F),on=Re.get(An.__renderTarget),Dc=Re.get(Kt.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,on.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let xr=0;xr<ge;xr++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(A).__webglTexture,k,Ce+xr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(F).__webglTexture,se,vt+xr)),D.blitFramebuffer(Ie,Ue,fe,ye,We,it,fe,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||Re.has(A)){const An=Re.get(A),Kt=Re.get(F);Me.bindFramebuffer(D.READ_FRAMEBUFFER,N_),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,D_);for(let on=0;on<ge;on++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,An.__webglTexture,k,Ce+on):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,An.__webglTexture,k),Tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,se,vt+on):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,se),k!==0?D.blitFramebuffer(Ie,Ue,fe,ye,We,it,fe,ye,D.COLOR_BUFFER_BIT,D.NEAREST):Tn?D.copyTexSubImage3D(Ot,se,We,it,vt+on,Ie,Ue,fe,ye):D.copyTexSubImage2D(Ot,se,We,it,Ie,Ue,fe,ye);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ot,se,We,it,vt,fe,ye,ge,qe,Pe,Mt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,se,We,it,vt,fe,ye,ge,qe,Mt.data):D.texSubImage3D(Ot,se,We,it,vt,fe,ye,ge,qe,Pe,Mt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,We,it,fe,ye,qe,Pe,Mt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,We,it,Mt.width,Mt.height,qe,Mt.data):D.texSubImage2D(D.TEXTURE_2D,se,We,it,fe,ye,qe,Pe,Mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kr),D.pixelStorei(D.UNPACK_SKIP_ROWS,dn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oo),se===0&&F.generateMipmaps&&D.generateMipmap(Ot),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,W=null,k=0){return ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,G,W,k)},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&Be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){T=0,b=0,R=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}class d3 extends d_{constructor(){super();const e=new ro;e.deleteAttribute("uv");const n=new Rd({side:tn}),i=new Rd,r=new g_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ft(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new f_(e,i,6),a=new Ht;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Ft(e,fs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ft(e,fs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Ft(e,fs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new Ft(e,fs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const d=new Ft(e,fs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new Ft(e,fs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function fs(t){const e=new Kf;return e.color.setScalar(t),e}class f3{constructor(e){this.size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0},this.render=this.defaultRender,this.onBeforeRender=()=>{},this.onAfterRender=()=>{},this.onAfterResize=()=>{},this.isVisible=!1,this.isRunning=!1,this.isDisposed=!1,this.clock=new b2,this.time={elapsed:0,delta:0},this.config={...e},this.initCamera(),this.initScene(),this.initRenderer(),this.resize(),this.initObservers()}initCamera(){this.camera=new xn,this.cameraFov=this.camera.fov}initScene(){this.scene=new d_}initRenderer(){if(this.config.canvas)this.canvas=this.config.canvas;else if(this.config.id)this.canvas=document.getElementById(this.config.id);else{console.error("Three: Missing canvas or id parameter");return}this.canvas.style.display="block";const e={canvas:this.canvas,powerPreference:"high-performance",...this.config.rendererOptions??{}};this.renderer=new h3(e),this.renderer.outputColorSpace=vn}initObservers(){this.config.size instanceof Object||(window.addEventListener("resize",this.handleResize.bind(this)),this.config.size==="parent"&&this.canvas.parentNode&&(this.resizeObserver=new ResizeObserver(this.handleResize.bind(this)),this.resizeObserver.observe(this.canvas.parentNode))),this.intersectionObserver=new IntersectionObserver(this.handleIntersection.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.intersectionObserver.observe(this.canvas),document.addEventListener("visibilitychange",this.handleVisibilityChange.bind(this))}removeObservers(){var e,n;window.removeEventListener("resize",this.handleResize.bind(this)),(e=this.resizeObserver)==null||e.disconnect(),(n=this.intersectionObserver)==null||n.disconnect(),document.removeEventListener("visibilitychange",this.handleVisibilityChange.bind(this))}handleIntersection(e){this.isVisible=e[0].isIntersecting,this.isVisible?this.start():this.stop()}handleVisibilityChange(){this.isVisible&&(document.hidden?this.stop():this.start())}handleResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.resize.bind(this),100)}resize(){let e,n;if(this.config.size instanceof Object)e=this.config.size.width,n=this.config.size.height;else if(this.config.size==="parent"&&this.canvas.parentNode){const i=this.canvas.parentNode;e=i.offsetWidth,n=i.offsetHeight}else e=window.innerWidth,n=window.innerHeight;this.size.width=e,this.size.height=n,this.size.ratio=e/n,this.updateCamera(),this.updateRenderer(),this.onAfterResize(this.size)}updateCamera(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.adjustFov(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.adjustFov(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}adjustFov(e){const n=Math.tan(Cd.degToRad(this.cameraFov/2))/(this.camera.aspect/e);this.camera.fov=2*Cd.radToDeg(Math.atan(n))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const e=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(e/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}}updateRenderer(){var n;this.renderer.setSize(this.size.width,this.size.height),(n=this.postprocessingInstance)==null||n.setSize(this.size.width,this.size.height);let e=window.devicePixelRatio;this.maxPixelRatio&&e>this.maxPixelRatio?e=this.maxPixelRatio:this.minPixelRatio&&e<this.minPixelRatio&&(e=this.minPixelRatio),this.renderer.setPixelRatio(e),this.size.pixelRatio=e}get postprocessing(){return this.postprocessingInstance}set postprocessing(e){this.postprocessingInstance=e,this.render=e.render.bind(e)}start(){if(this.isRunning)return;const e=()=>{this.animationId=requestAnimationFrame(e),this.time.delta=this.clock.getDelta(),this.time.elapsed+=this.time.delta,this.onBeforeRender(this.time),this.render(),this.onAfterRender(this.time)};this.isRunning=!0,this.clock.start(),e()}stop(){this.isRunning&&this.animationId&&(cancelAnimationFrame(this.animationId),this.isRunning=!1,this.clock.stop())}defaultRender(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(e=>{if(e instanceof Ht&&"isMesh"in e&&e.isMesh){const n=e;n.material&&typeof n.material=="object"&&(Object.keys(n.material).forEach(i=>{const r=n.material[i];r&&typeof r=="object"&&typeof r.dispose=="function"&&r.dispose()}),n.material.dispose(),n.geometry.dispose())}}),this.scene.clear()}dispose(){var e;this.removeObservers(),this.stop(),this.clear(),(e=this.postprocessingInstance)==null||e.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Fr=new Map,Xr=new je;let Gu=!1;function p3(t){const e={position:new je,nPosition:new je,hover:!1,onEnter:()=>{},onMove:()=>{},onClick:()=>{},onLeave:()=>{}};return Fr.has(t.domElement)||(Fr.set(t.domElement,e),Gu||(document.body.addEventListener("pointermove",Kg),document.body.addEventListener("pointerleave",Qg),document.body.addEventListener("click",Zg),Gu=!0)),e.dispose=()=>{Fr.delete(t.domElement),Fr.size===0&&(document.body.removeEventListener("pointermove",Kg),document.body.removeEventListener("pointerleave",Qg),document.body.removeEventListener("click",Zg),Gu=!1)},e}function Kg(t){Xr.x=t.clientX,Xr.y=t.clientY;for(const[e,n]of Fr){const i=e.getBoundingClientRect();E_(i)?(M_(n,i),n.hover||(n.hover=!0,n.onEnter()),n.onMove()):n.hover&&(n.hover=!1,n.onLeave())}}function Zg(t){Xr.x=t.clientX,Xr.y=t.clientY;for(const[e,n]of Fr){const i=e.getBoundingClientRect();M_(n,i),E_(i)&&n.onClick()}}function Qg(){for(const t of Fr.values())t.hover&&(t.hover=!1,t.onLeave())}function M_(t,e){t.position.x=Xr.x-e.left,t.position.y=Xr.y-e.top,t.nPosition.x=t.position.x/e.width*2-1,t.nPosition.y=-t.position.y/e.height*2+1}function E_(t){const{x:e,y:n}=Xr;return e>=t.left&&e<=t.left+t.width&&n>=t.top&&n<=t.top+t.height}const{randFloat:m3,randFloatSpread:Wu}=Cd,ju=new O,wt=new O,dl=new O,g3=new O,Tt=new O,fl=new O,ps=new O,Hi=new O,pl=new O,Jg=new O;class v3{constructor(e){this.config=e,this.positionData=new Float32Array(3*e.count).fill(0),this.velocityData=new Float32Array(3*e.count).fill(0),this.sizeData=new Float32Array(e.count).fill(1),this.center=new O,this.initializePositions(),this.setSizes()}initializePositions(){const{config:e,positionData:n}=this;this.center.toArray(n,0);for(let i=1;i<e.count;i++){const r=3*i;n[r]=Wu(2*e.maxX),n[r+1]=Wu(2*e.maxY),n[r+2]=Wu(2*e.maxZ)}}setSizes(){const{config:e,sizeData:n}=this;n[0]=e.size0;for(let i=1;i<e.count;i++)n[i]=m3(e.minSize,e.maxSize)}update(e){const{config:n,center:i,positionData:r,sizeData:s,velocityData:o}=this;let a=0;n.controlSphere0&&(a=1,ju.fromArray(r,0),ju.lerp(i,.1).toArray(r,0),g3.set(0,0,0).toArray(o,0));for(let l=a;l<n.count;l++){const c=3*l;wt.fromArray(r,c),Tt.fromArray(o,c),Tt.y-=e.delta*n.gravity*s[l],Tt.multiplyScalar(n.friction),Tt.clampLength(0,n.maxVelocity),wt.add(Tt),wt.toArray(r,c),Tt.toArray(o,c)}for(let l=a;l<n.count;l++){const c=3*l;wt.fromArray(r,c),Tt.fromArray(o,c);const u=s[l];for(let d=l+1;d<n.count;d++){const p=3*d;dl.fromArray(r,p),fl.fromArray(o,p);const g=s[d];ps.copy(dl).sub(wt);const x=ps.length(),m=u+g;if(x<m){const h=m-x;Hi.copy(ps).normalize().multiplyScalar(.5*h),pl.copy(Hi).multiplyScalar(Math.max(Tt.length(),1)),Jg.copy(Hi).multiplyScalar(Math.max(fl.length(),1)),wt.sub(Hi),Tt.sub(pl),wt.toArray(r,c),Tt.toArray(o,c),dl.add(Hi),fl.add(Jg),dl.toArray(r,p),fl.toArray(o,p)}}if(n.controlSphere0){ps.copy(ju).sub(wt);const d=ps.length(),p=u+s[0];if(d<p){const g=p-d;Hi.copy(ps.normalize()).multiplyScalar(g),pl.copy(Hi).multiplyScalar(Math.max(Tt.length(),2)),wt.sub(Hi),Tt.sub(pl)}}Math.abs(wt.x)+u>n.maxX&&(wt.x=Math.sign(wt.x)*(n.maxX-u),Tt.x=-Tt.x*n.wallBounce),n.gravity===0?Math.abs(wt.y)+u>n.maxY&&(wt.y=Math.sign(wt.y)*(n.maxY-u),Tt.y=-Tt.y*n.wallBounce):wt.y-u<-n.maxY&&(wt.y=-n.maxY+u,Tt.y=-Tt.y*n.wallBounce);const f=Math.max(n.maxZ,n.maxSize||1);Math.abs(wt.z)+u>f&&(wt.z=Math.sign(wt.z)*(n.maxZ-u),Tt.z=-Tt.z*n.wallBounce),wt.toArray(r,c),Tt.toArray(o,c)}}}class x3 extends _2{constructor(e){super(e),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines={...this.defines,USE_UV:""},this.onBeforeCompile=n=>{Object.assign(n.uniforms,this.uniforms),n.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
      `+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
        `);const i=Oe.lights_fragment_begin.replace(/RE_Direct\( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight \);/g,`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_begin>",i)}}}const _3={count:200,colors:[0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},ms=new Ht;class y3 extends f_{constructor(e,n={}){const i={..._3,...n},r=new d3,o=new Ld(e).fromScene(r).texture,a=new Qf,l=new x3({envMap:o,...i.materialParams});l.envMapRotation.x=-Math.PI/2,super(a,l,i.count),this.config=i,this.physics=new v3(i),this.setupLights(),this.setColors(i.colors||[0])}setupLights(){var e;this.ambientLight=new T2(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new g_(((e=this.config.colors)==null?void 0:e[0])||0,this.config.lightIntensity),this.add(this.light)}setColors(e){if(Array.isArray(e)&&e.length>1){const n=S3(e);for(let i=0;i<this.count;i++){const r=n.getColorAt(i/this.count);this.setColorAt(i,r),i===0&&this.light.color.copy(r)}this.instanceColor&&(this.instanceColor.needsUpdate=!0)}}update(e){this.physics.update(e);for(let n=0;n<this.count;n++)ms.position.fromArray(this.physics.positionData,3*n),n===0&&this.config.followCursor===!1?ms.scale.setScalar(0):ms.scale.setScalar(this.physics.sizeData[n]),ms.updateMatrix(),this.setMatrixAt(n,ms.matrix),n===0&&this.light.position.copy(ms.position);this.instanceMatrix.needsUpdate=!0}}function S3(t){let e,n;function i(r){e=r,n=e.map(s=>new Ve(s))}return i(t),{setColors:i,getColorAt(r,s=new Ve){const a=Math.max(0,Math.min(1,r))*(e.length-1),l=Math.floor(a);if(l>=e.length-1)return n[n.length-1].clone();const c=a-l,u=n[l],f=n[l+1];return s.r=u.r+c*(f.r-u.r),s.g=u.g+c*(f.g-u.g),s.b=u.b+c*(f.b-u.b),s}}}function M3(t,e={}){const n=new f3({canvas:t,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let i;n.renderer.toneMapping=Xx,n.camera.position.set(0,0,20),n.camera.lookAt(0,0,0),n.cameraMaxAspect=1.5,n.resize(),c(e);const r=new C2,s=new Xi(new O(0,0,1),0),o=new O;let a=!1;const l=p3({domElement:t});l.onMove=()=>{r.setFromCamera(l.nPosition,n.camera),n.camera.getWorldDirection(s.normal),r.ray.intersectPlane(s,o),i.physics.center.copy(o),i.config.controlSphere0=!0},l.onLeave=()=>{i.config.controlSphere0=!1};function c(u){i&&(n.clear(),n.scene.remove(i)),i=new y3(n.renderer,u),n.scene.add(i)}return n.onBeforeRender=u=>{a||i.update(u)},n.onAfterResize=u=>{i.config.maxX=u.wWidth/2,i.config.maxY=u.wHeight/2},{three:n,get spheres(){return i},setCount(u){c({...i.config,count:u})},togglePause(){a=!a},dispose(){var u;(u=l.dispose)==null||u.call(l),n.dispose()}}}const E3=({className:t="",followCursor:e=!0,...n})=>{const i=N.useRef(null),r=N.useRef(null);return N.useEffect(()=>{const s=i.current;if(s)return r.current=M3(s,{followCursor:e,...n}),()=>{r.current&&r.current.dispose()}},[]),w.jsx("canvas",{className:t,ref:i,style:{width:"100%",height:"100%"}})},w3=()=>{const{openChat:t}=Ff(),{observeElements:e}=Di(),n=N.useRef(null),i=N.useRef(null),r=N.useRef(null),s=N.useRef(null),o=N.useRef(null);return N.useEffect(()=>{const a=[i.current,r.current,s.current,o.current].filter(l=>l!==null);e(a)},[e]),w.jsxs("section",{id:"home",ref:n,className:"min-h-screen flex items-center justify-center relative pt-20 pb-32 bg-black overflow-hidden",children:[w.jsxs("div",{className:"absolute inset-0 w-full h-full z-0",children:[w.jsx("div",{style:{transform:"scaleY(-1)",width:"100%",height:"100%"},children:w.jsx(Of,{colorStops:["#0052D4","#4364F7","#6FB1FC"],blend:.9,amplitude:1,speed:.5})}),w.jsx("div",{className:"absolute inset-0 w-full h-full bg-black/30 pointer-events-none"})]}),w.jsx("div",{className:"container mx-auto px-4 sm:px-6 text-center relative z-10",children:w.jsxs("div",{children:[w.jsxs("div",{ref:i,className:"scroll-animate inline-flex items-center px-4 py-2 mb-16 mt-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300",children:[w.jsx("span",{className:"text-sm font-bold dynamic-gradient-text tracking-wide",children:"2025"}),w.jsx("span",{className:"mx-2 text-gray-500",children:"•"}),w.jsx("span",{className:"text-xs font-light text-gray-300 tracking-wide",children:"Next-Gen Ai Integrations"})]}),w.jsxs("h1",{ref:r,className:"scroll-animate text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight",children:[w.jsx("span",{className:"block text-white",children:"AI-Driven Success"}),w.jsx("span",{className:"block dynamic-gradient-text",children:"Redefining the Future."})]}),w.jsxs("p",{ref:s,className:"scroll-animate text-sm sm:text-base md:text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide",children:["Creating latest solutions that redefine innovation.",w.jsx("br",{className:"hidden sm:block"}),"Stay ahead with AI-powered technology for the future."]}),w.jsx("div",{ref:o,className:"scroll-animate flex flex-col items-center justify-center gap-4",children:w.jsxs("button",{onClick:()=>t("Book A Call"),className:"premium-button w-[200px] sm:w-auto px-8 py-4 gradient-cta-btn text-white font-normal flex items-center justify-center gap-2 animate-gradient-shift",children:[w.jsx(xa,{className:"w-5 h-5 mr-1"}),"Book A Call"]})})]})}),w.jsx("div",{className:"w-full absolute left-0 z-20 pointer-events-none hidden md:block",style:{top:0,height:"100%",mixBlendMode:"screen",opacity:.8},children:w.jsx(E3,{count:30,colors:[parseInt("0052D4",16),parseInt("4364F7",16),parseInt("6FB1FC",16),parseInt("0052D4",16),parseInt("4364F7",16)]})})]})},T3=()=>{const t=[{icon:Ux,title:"Mission",description:"Our mission is to empower businesses of all sizes with intelligent automation. We turn complex operational challenges into growth opportunities, freeing human potential to focus on what matters most: innovation."},{icon:kx,title:"Expert Team",description:"We are a collective of AI specialists, data scientists, and automation engineers. Our team's deep experience allows us to transform cutting-edge academic research into real-world, reliable business solutions."},{icon:QM,title:"Collaborative Approach",description:"From initial discovery to deployment and ongoing support, we follow a clear, agile methodology. We keep you involved and informed at every step, guaranteeing the final solution exceeds your expectations."},{icon:Fx,title:"Commitment to Your Success",description:"Our relationship doesn't end at deployment. We provide continuous support and strategic guidance to ensure your AI solutions evolve, adapt, and continue to deliver value as your business scales."}],{observeElements:e}=Di(),n=N.useRef(null),i=N.useRef(null),r=N.useRef(null),s=N.useRef(null);return N.useEffect(()=>{const o=[i.current,r.current,s.current].filter(a=>a!==null);e(o)},[e]),w.jsx("section",{id:"about",ref:n,className:"py-32 relative bg-black",children:w.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[w.jsxs("div",{className:"text-center mb-20",children:[w.jsxs("h2",{ref:i,className:"scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide",children:["About ",w.jsx("span",{className:"dynamic-gradient-text",children:"Us"})]}),w.jsx("p",{ref:r,className:"scroll-animate text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide",children:"We are a dedicated team of AI experts, data scientists, and engineers. We leverage our deep expertise to build and integrate custom automation solutions that solve your most complex business challenges and drive measurable growth."})]}),w.jsx("div",{ref:s,className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children scroll-animate",children:t.map((o,a)=>w.jsxs("div",{className:"unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group",children:[w.jsx("div",{className:"w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon",children:w.jsx(o.icon,{className:"w-8 h-8 text-white"})}),w.jsx("h3",{className:"text-xl font-semibold mb-4 text-white tracking-wide",children:o.title}),w.jsx("p",{className:"text-gray-400 font-light leading-relaxed tracking-wide",children:o.description})]},a))})]})})},w_=({className:t=""})=>w.jsxs("div",{className:`absolute inset-0 w-full h-full z-0 pointer-events-none ${t}`,children:[w.jsx("div",{className:"blob blob1"}),w.jsx("div",{className:"blob blob2"}),w.jsx("div",{className:"blob blob3"})]}),T_=[{icon:iE,title:"AI Chatbots",description:"Instant AI-powered chatbots that handle customer inquiries, book appointments, qualify leads, and provide 24/7 support across websites and messaging platforms."},{icon:xa,title:"AI Voice Agents",description:"Intelligent voice assistants that manage phone calls, schedule appointments, take orders, and provide customer service through natural speech conversations."},{icon:YM,title:"Smart Development",description:"AI-enhanced websites and applications that learn user behavior, personalize content, optimize performance, and adapt interfaces for maximum engagement and conversion."},{icon:Dx,title:"Email Marketing Automation",description:"Intelligent email campaigns that segment audiences, trigger personalized messages based on behavior, recover abandoned carts, and nurture leads automatically."},{icon:cE,title:"Social Media Management Automation",description:"AI-powered social media tools that schedule content across platforms, monitor engagement, generate posts, analyze performance, and maintain consistent brand presence."},{icon:lE,title:"AI-Driven Automations",description:"Custom workflow automation solutions that streamline operations, process data intelligently, manage inventory, and eliminate repetitive tasks to boost productivity."}],A3=()=>{const{observeElements:t}=Di(),e=N.useRef(null),n=N.useRef(null),i=N.useRef(null),r=N.useRef(null),s=N.useRef(null);return N.useEffect(()=>{const o=[n.current,i.current,r.current,s.current].filter(a=>a!==null);t(o)},[t]),w.jsxs("section",{id:"services",ref:e,className:"py-20 relative bg-black overflow-hidden",children:[w.jsx(w_,{className:"blob-bg-services"}),w.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[w.jsxs("div",{className:"text-center mb-20",children:[w.jsxs("h2",{ref:n,className:"scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide",children:["AI-Powered Services for",w.jsx("br",{}),w.jsx("span",{className:"dynamic-gradient-text",children:"Future-Driven Businesses"})]}),w.jsx("p",{ref:i,className:"scroll-animate text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide",children:"Our cutting-edge AI solutions are designed to transform businesses, enhance efficiency, and drive innovation."})]}),w.jsx("div",{ref:r,className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-animate",children:T_.map((o,a)=>w.jsxs("div",{className:"unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group",children:[w.jsx("div",{className:"w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon",children:w.jsx(o.icon,{className:"w-8 h-8 text-white"})}),w.jsx("h3",{className:"text-xl font-semibold mb-4 text-white tracking-wide",children:o.title}),w.jsx("p",{className:"text-gray-400 font-light leading-relaxed tracking-wide",children:o.description})]},a))}),w.jsx("div",{className:"text-center mt-16",children:w.jsx(Dr,{to:"/specservices",className:"premium-button inline-block px-8 py-4 gradient-cta-btn text-white font-normal",children:"Load More"})})]})]})},Cn=[{name:"Sales",plans:[{name:"Basic Bundle",price:"$97-147/month",description:"Essential sales automation tools",features:["Lead capture forms with basic qualification","3-sequence email automation (welcome, nurture, follow-up)","Simple CRM setup and contact tagging","Basic pipeline tracking","Monthly performance report"]},{name:"Pro Bundle",price:"$247-347/month",description:"Advanced sales automation suite",features:["Everything in Basic plus:","Lead scoring system","Email + SMS automation","Meeting booking integration","Simple proposal templates","Sales performance dashboard","Priority support"]}]},{name:"Coaching",plans:[{name:"Basic Bundle",price:"$77-127/month",description:"Essential coaching automation",features:["Client intake form automation","Basic scheduling system","Payment collection setup","Simple progress check-in emails","Monthly client report"]},{name:"Pro Bundle",price:"$197-297/month",description:"Complete coaching automation",features:["Everything in Basic plus:","Client onboarding sequence","Resource delivery automation","Progress tracking workflows","Retention email campaigns","Basic client portal","Weekly optimization calls"]}]},{name:"Real Estate",plans:[{name:"Basic Bundle",price:"$127-177/month",description:"Essential real estate automation",features:["Lead capture and basic qualification","Buyer/seller email sequences","Showing request automation","Simple follow-up system","Monthly lead report"]},{name:"Pro Bundle",price:"$297-447/month",description:"Advanced real estate automation",features:["Everything in Basic plus:","Multi-source lead integration","Property alert system","Transaction milestone automation","Past client nurturing","Referral request campaigns","Bi-weekly strategy calls"]}]}],b3=()=>{const[t,e]=N.useState("Sales"),[n,i]=N.useState(null),[r,s]=N.useState(!1),[o,a]=N.useState(!1),[l,c]=N.useState(t),[u,f]=N.useState(""),[d,p]=N.useState("right"),g=N.useRef(),{observeElements:x}=Di(),m=N.useRef(null),h=N.useRef(null),v=N.useRef(null),_=N.useRef(null),y=N.useRef(null),C=Cn.find(M=>M.name===t);N.useEffect(()=>{const M=[h.current,v.current,_.current,y.current].filter(S=>S!==null);x(M)},[x]),N.useEffect(()=>{const M=()=>{s(window.innerWidth<768)};return M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),N.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);const T=M=>{e(M)},b=M=>{if(o)return;const S=Cn.findIndex(H=>H.name===t);let L=S;M==="left"?L=(S-1+Cn.length)%Cn.length:L=(S+1)%Cn.length,p(M),f(Cn[L].name),a(!0),g.current=setTimeout(()=>{e(Cn[L].name),c(Cn[L].name),a(!1)},300)},R=()=>{const M=n||t;return Cn.findIndex(L=>L.name===M)/Cn.length*100};return C?w.jsx("section",{id:"pricing",ref:m,className:"py-32 relative bg-black",children:w.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[w.jsxs("div",{className:"text-center mb-20",children:[w.jsxs("h2",{ref:h,className:"scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide",children:["Transparent ",w.jsx("span",{className:"dynamic-gradient-text",children:"Pricing"})]}),w.jsx("p",{ref:v,className:"scroll-animate text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide",children:"Choose the perfect automation package for your business needs. All plans include setup, training, and ongoing support."})]}),w.jsxs("div",{ref:_,className:"max-w-4xl mx-auto scroll-animate mb-16",children:[!r&&w.jsx("div",{className:"relative bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10 mb-8",onMouseLeave:()=>i(null),children:w.jsxs("div",{className:"flex relative",children:[w.jsx("div",{className:"absolute inset-y-0 gradient-cta-btn transition-all duration-300 ease-in-out rounded-full px-2",style:{left:`${R()}%`,width:`${100/Cn.length}%`}}),Cn.map(M=>w.jsx("button",{onClick:()=>T(M.name),onMouseEnter:()=>i(M.name),className:"relative z-10 flex-1 py-4 px-6 text-sm font-bold tracking-wide transition-all duration-300 rounded-full text-white whitespace-nowrap",children:M.name},M.name))]})}),r&&w.jsxs("div",{className:"flex items-center justify-center mb-8 space-x-4",children:[w.jsx("button",{onClick:()=>b("left"),disabled:o,className:"w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:w.jsx(Lx,{className:"w-6 h-6 text-white"})}),w.jsxs("div",{className:"relative overflow-hidden rounded-full px-8 py-4 min-w-[200px] text-center h-[52px] flex items-center justify-center",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] animate-gradient-shift"}),w.jsxs("div",{className:"relative w-full h-full flex items-center justify-center overflow-hidden",children:[w.jsx("div",{className:`absolute w-full transition-all duration-300 ease-in-out ${o?d==="left"?"-translate-x-full":"translate-x-full":"translate-x-0"}`,children:w.jsx("span",{className:"block text-white font-bold tracking-wide",children:l})}),o&&w.jsx("div",{className:"absolute w-full transition-all duration-300 ease-in-out",style:{transform:d==="left"?"translateX(100%)":"translateX(-100%)",animation:d==="left"?"slide-in-left 300ms ease-in-out forwards":"slide-in-right 300ms ease-in-out forwards"},children:w.jsx("span",{className:"block text-white font-bold tracking-wide",children:u})})]})]}),w.jsx("button",{onClick:()=>b("right"),disabled:o,className:"w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:w.jsx(Nx,{className:"w-6 h-6 text-white"})})]})]}),w.jsx("div",{ref:y,className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children scroll-animate",children:C.plans.map((M,S)=>w.jsxs("div",{className:`unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group relative ${S===1?"md:transform md:scale-105":""}`,children:[S===1&&w.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2",children:w.jsx("span",{className:"bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white px-4 py-1 rounded-full text-sm font-bold",children:"Most Popular"})}),w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("h3",{className:"text-2xl font-bold text-white mb-2 tracking-wide",children:M.name}),w.jsx("div",{className:"text-3xl font-bold dynamic-gradient-text mb-2",children:M.price}),w.jsx("p",{className:"text-gray-400 font-light",children:M.description})]}),w.jsx("div",{className:"space-y-4",children:M.features.map((L,H)=>w.jsxs("div",{className:"flex items-start",children:[w.jsx("div",{className:"w-5 h-5 dynamic-gradient-icon rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0",children:w.jsx($M,{className:"w-3 h-3 text-white"})}),w.jsx("span",{className:`text-gray-300 font-light leading-relaxed ${L.startsWith("Everything in Basic")?"font-semibold text-white":""}`,children:L})]},H))})]},S))})]})}):null},C3=[{question:"What types of businesses can benefit from AI automation?",answer:"AI automation works for businesses of all sizes across industries - from retail and healthcare to manufacturing and professional services. Whether you're looking to improve customer service, streamline operations, or enhance decision-making, our solutions adapt to your specific industry needs and challenges."},{question:"How long does it take to implement AI automation solutions?",answer:"Implementation timelines vary based on project complexity. Simple solutions like chatbots can be deployed in 1-2 weeks, while comprehensive automation systems typically take 4-12 weeks. We provide clear project timelines and keep you updated throughout the entire development process."},{question:"Will AI automation replace our employees?",answer:"AI automation enhances your team's capabilities rather than replacing jobs. It handles repetitive, time-consuming tasks, allowing your employees to focus on strategic thinking, creativity, and building relationships. Most clients find their teams become more productive and engaged in higher-value work."},{question:"How do you ensure our data remains secure with AI systems?",answer:"We prioritize data security with enterprise-grade protection including encryption, secure connections, and compliance with privacy regulations like GDPR. All systems are built with robust security measures, and we can integrate with your existing security protocols and requirements."},{question:"What kind of support do you provide after implementation?",answer:"We offer comprehensive ongoing support including system monitoring, performance optimization, updates, and training for your team. Our solutions are designed to learn and improve over time, and we provide continuous maintenance to ensure optimal performance as your business grows."},{question:"Can AI solutions be integrated with existing systems?",answer:"Yes, our AI solutions are designed for seamless integration with existing systems. We use standard APIs and protocols to ensure compatibility with your current infrastructure while maintaining data integrity and system performance."}],R3=()=>{const{observeElements:t}=Di(),e=N.useRef(null),n=N.useRef(null),i=N.useRef(null),r=N.useRef(null),[s,o]=N.useState(null);N.useEffect(()=>{const l=[n.current,i.current,r.current].filter(c=>c!==null);t(l)},[t]);const a=l=>{o(s===l?null:l)};return w.jsxs("section",{ref:e,className:"py-20 px-4 md:px-8 max-w-7xl mx-auto",id:"faq",children:[w.jsxs("div",{className:"text-center mb-12",children:[w.jsxs("h2",{ref:n,className:"scroll-animate text-4xl md:text-5xl font-bold mb-4",children:["Frequently Asked ",w.jsx("span",{className:"dynamic-gradient-text",children:"Questions"})]}),w.jsx("p",{ref:i,className:"scroll-animate text-lg text-gray-400 max-w-2xl mx-auto",children:"Find answers to common questions about our AI solutions and services"})]}),w.jsx("div",{ref:r,className:"space-y-4 stagger-children scroll-animate",children:C3.map((l,c)=>w.jsxs("div",{className:`unified-card bg-white/5 border border-white/10 rounded-lg overflow-hidden group ${s===c?"open":""}`,children:[w.jsxs("button",{className:"w-full px-6 py-4 text-left flex items-center justify-between bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-none",onClick:()=>a(c),"aria-expanded":s===c,"aria-controls":`faq-answer-${c}`,children:[w.jsx("div",{className:"flex-1",children:w.jsx("span",{className:"text-lg font-medium text-white",children:l.question})}),w.jsx("div",{className:"w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center card-icon flex-shrink-0 ml-4 transition-transform duration-300 ease-out",children:s===c?w.jsx(rE,{className:"w-5 h-5 text-white transform transition-transform duration-300 ease-out"}):w.jsx(aE,{className:"w-5 h-5 text-white transform transition-transform duration-300 ease-out"})})]}),w.jsx("div",{id:`faq-answer-${c}`,className:`px-6 overflow-hidden transition-all duration-300 ease-out ${s===c?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,"aria-hidden":s!==c,children:w.jsx("p",{className:"py-4 text-gray-300",children:l.answer})})]},c))})]})},P3=()=>{const{openChat:t}=Ff(),{observeElements:e}=Di(),n=N.useRef(null),i=N.useRef(null),r=N.useRef(null),s=N.useRef(null);return N.useEffect(()=>{const o=[i.current,r.current,s.current].filter(a=>a!==null);e(o)},[e]),w.jsxs("section",{id:"readytotransform",ref:n,className:"py-32 relative bg-black overflow-hidden",children:[w.jsx(w_,{className:"blob-bg-services"}),w.jsx("div",{className:"container mx-auto px-6 relative z-10",children:w.jsxs("div",{className:"text-center",children:[w.jsxs("h2",{ref:i,className:"scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide",children:["Ready To Transform",w.jsx("br",{}),w.jsx("span",{className:"dynamic-gradient-text",children:"Your Business?"})]}),w.jsx("p",{ref:r,className:"scroll-animate text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide",children:"Let's discuss how AI can revolutionize your operations and drive unprecedented growth for your company."}),w.jsxs("div",{ref:s,className:"scroll-animate flex flex-row gap-4 justify-center items-center stagger-children",children:[w.jsxs("button",{onClick:()=>t("Book A Call"),className:"premium-button px-6 py-4 gradient-cta-btn text-white font-normal flex items-center justify-center gap-2 text-sm sm:text-base",children:[w.jsx(xa,{className:"w-5 h-5 mr-1"}),"Book A Call"]}),w.jsxs("button",{onClick:()=>t(),className:"premium-button px-6 py-4 white-cta-btn font-normal flex items-center justify-center gap-2 text-sm sm:text-base",children:[w.jsx(nE,{className:"w-5 h-5 mr-1"}),"Chat With Our Bot"]})]})]})})]})},L3=()=>{const{observeElements:t}=Di(),e=N.useRef(null),n=N.useRef(null),i=N.useRef(null),r=N.useRef(null);return N.useEffect(()=>{const s=[n.current,i.current,r.current].filter(o=>o!==null);t(s)},[t]),w.jsx("section",{id:"contact",ref:e,className:"py-32 relative bg-black",children:w.jsx("div",{className:"container mx-auto px-6 relative z-10",children:w.jsxs("div",{children:[w.jsxs("div",{className:"text-center mb-16",children:[w.jsxs("h2",{ref:n,className:"scroll-animate text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide",children:["Get in ",w.jsx("span",{className:"cta-headline",children:"Touch"})]}),w.jsx("p",{ref:i,className:"scroll-animate text-lg font-light text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide",children:"Ready to transform your business with AI? Let's discuss your project and explore the possibilities."})]}),w.jsxs("div",{ref:r,className:"flex flex-wrap justify-center gap-8 max-w-4xl mx-auto stagger-children scroll-animate",children:[w.jsxs("div",{className:"unified-card flex items-center bg-white/5 border border-white/10 rounded-2xl p-6 group",children:[w.jsx("div",{className:"w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 card-icon",children:w.jsx(xa,{className:"w-6 h-6 text-white"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-semibold tracking-wide",children:"Call Us"}),w.jsx("p",{className:"text-gray-400 font-light tracking-wide",children:"+1 (555) 123-4567"})]})]}),w.jsxs("div",{className:"unified-card flex items-center bg-white/5 border border-white/10 rounded-2xl p-6 group",children:[w.jsx("div",{className:"w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 card-icon",children:w.jsx(Dx,{className:"w-6 h-6 text-white"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-semibold tracking-wide",children:"Email Us"}),w.jsx("p",{className:"text-gray-400 font-light tracking-wide",children:"hello@aistudio.com"})]})]}),w.jsxs("div",{className:"unified-card flex items-center bg-white/5 border border-white/10 rounded-2xl p-6 group",children:[w.jsx("div",{className:"w-12 h-12 dynamic-gradient-icon rounded-lg flex items-center justify-center mr-4 card-icon",children:w.jsx(eE,{className:"w-6 h-6 text-white"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-semibold tracking-wide",children:"Visit Us"}),w.jsx("p",{className:"text-gray-400 font-light tracking-wide",children:"San Francisco, CA"})]})]})]})]})})})},ep=()=>{const t=Pf(),e=n=>{if(window.location.pathname!=="/"){t("/"),setTimeout(()=>{const r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})},100);return}const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth"})};return w.jsx("footer",{className:"py-10 border-t border-white/10 relative bg-black",children:w.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[w.jsxs("div",{className:"grid md:grid-cols-4 gap-6 mb-8",children:[w.jsxs("div",{className:"md:col-span-1",children:[w.jsx("h3",{className:"text-lg font-bold tracking-wider text-white mb-3",children:"NileByte"}),w.jsx("p",{className:"text-gray-400 font-light leading-relaxed tracking-wide mb-3 max-w-sm text-sm",children:"Building the future with AI-powered solutions"})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-white font-semibold mb-3 tracking-wide text-sm",children:"Pages"}),w.jsx("ul",{className:"space-y-1.5",children:["home","about","services","pricing","contact","faq"].map(n=>w.jsx("li",{children:w.jsx("button",{onClick:()=>e(n),className:"footer-link text-gray-400 hover:text-white font-light tracking-wide relative py-0.5 px-0 rounded transition-colors duration-200 block text-left text-sm",children:n.charAt(0).toUpperCase()+n.slice(1)})},n))})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-white font-semibold mb-3 tracking-wide text-sm",children:"Social"}),w.jsx("ul",{className:"space-y-1.5",children:["Twitter (X)","Instagram","LinkedIn"].map(n=>w.jsx("li",{children:w.jsx("button",{className:"footer-link text-gray-400 hover:text-white font-light tracking-wide py-0.5 px-0 rounded transition-colors duration-200 block text-left text-sm",children:n})},n))})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-white font-semibold mb-3 tracking-wide text-sm",children:"Subscribe Form"}),w.jsxs("div",{className:"flex flex-col space-y-4",children:[w.jsx("input",{type:"email",placeholder:"Enter Your Email...",className:"bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 font-light text-sm"}),w.jsx("button",{className:"premium-button px-6 py-2 gradient-cta-btn text-white font-normal text-sm",children:"Subscribe"})]})]})]}),w.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/5",children:[w.jsx("p",{className:"text-gray-400 font-light tracking-wide text-xs",children:"© 2024 Nilebyte"}),w.jsxs("div",{className:"flex items-center space-x-4 mt-2 md:mt-0",children:[w.jsx("button",{className:"footer-link text-gray-400 hover:text-white font-light tracking-wide text-xs px-2 py-0.5 rounded transition-colors duration-200",children:"Terms & Conditions"}),w.jsx("button",{className:"footer-link text-gray-400 hover:text-white font-light tracking-wide text-xs px-2 py-0.5 rounded transition-colors duration-200",children:"Privacy Policy"})]})]})]})})},tp=()=>{const{isOpen:t,closeChat:e,toggleChat:n,prefilledMessage:i}=Ff(),[r,s]=N.useState([{type:"bot",text:"Hello! I'm Nilebyte AI assistant. How can I help with AI automation today?"}]),[o,a]=N.useState(""),[l,c]=N.useState(!1),[u,f]=N.useState(!1),[d,p]=N.useState(!1),[g,x]=N.useState(""),m=N.useRef(null);N.useEffect(()=>{if(!g){const T=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);x(T)}},[]),N.useEffect(()=>{if(t){c(!1);const T=setTimeout(()=>f(!0),10);return i&&_(i),()=>clearTimeout(T)}else f(!1)},[t,i]),N.useEffect(()=>{var T;(T=m.current)==null||T.scrollIntoView({behavior:"smooth"})},[r]);const h=T=>{var R,M;const b=Array.isArray(T)?T[0]:T;return(R=b==null?void 0:b.parsedResponse)!=null&&R.response?b.parsedResponse.response:(M=b==null?void 0:b.parsedResponse)!=null&&M.message?b.parsedResponse.message:b!=null&&b.message?b.message:b!=null&&b.response?b.response:"Thanks for your message! Our team will get back to you shortly."},v=T=>T.split(`
`).map((R,M)=>R.trim().endsWith(":")&&!R.includes("--")?w.jsx("div",{className:"font-semibold text-blue-300 mt-3 mb-1",children:R.trim()},M):R.trim().startsWith("--")?w.jsx("div",{className:"text-gray-400 mb-2",children:R.trim()},M):/^\d+\.\s/.test(R.trim())?w.jsx("div",{className:"font-medium text-white mt-2 mb-1",children:R.trim()},M):R.trim()===""?w.jsx("div",{className:"h-2"},M):w.jsx("div",{className:"text-gray-300 mb-1 ml-4",children:R.trim()},M)),_=async T=>{if(T.trim()){s(b=>[...b,{type:"user",text:T}]),a(""),p(!0);try{const b=await fetch("https://dahyy.app.n8n.cloud/webhook/911243ee-72f2-4da5-b523-a542e5e54d90/chat",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("nilebytee:nilebyte55")},body:JSON.stringify({chatInput:T,sessionId:g,action:"sendMessage"})});if(!b.ok)throw new Error(`HTTP error! status: ${b.status}`);const R=await b.json();console.log("Webhook response:",R);const M=h(R);s(S=>[...S,{type:"bot",text:M}])}catch(b){console.error("Error sending message:",b),s(R=>[...R,{type:"bot",text:"Sorry, I encountered an error. Please try again later."}])}finally{p(!1)}}},y=()=>{o.trim()&&_(o.trim())},C=()=>{c(!0),setTimeout(()=>{e(),c(!1)},400)};return w.jsxs(w.Fragment,{children:[t&&w.jsxs("div",{className:`chatbot-container fixed bottom-24 right-6 w-80 h-96 bg-black/80 border border-white/20 rounded-xl backdrop-blur-md z-50 flex flex-col ${u&&!l?"open":""}`,children:[w.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-white/10",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx("div",{className:"w-8 h-8 dynamic-gradient-icon rounded-full flex items-center justify-center mr-3",children:w.jsx(Tm,{className:"w-4 h-4 text-white"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-white font-light",children:"Nilebyte AI"}),w.jsx("p",{className:"text-xs text-gray-400",children:"AI Automation Specialist"})]})]}),w.jsx("button",{onClick:C,className:"text-gray-400 hover:text-white transition-colors duration-200",children:w.jsx(Ox,{className:"w-5 h-5"})})]}),w.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-3",style:{scrollBehavior:"smooth"},children:[r.map((T,b)=>w.jsx("div",{className:`flex ${T.type==="user"?"justify-end":"justify-start"}`,children:w.jsx("div",{className:`max-w-[80%] p-3 rounded-lg ${T.type==="user"?"bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white":"bg-white/10 text-gray-200"}`,children:T.type==="bot"?w.jsx("div",{className:"text-sm font-light",children:v(T.text)}):w.jsx("p",{className:"text-sm font-light",children:T.text})})},b)),d&&w.jsx("div",{className:"flex justify-start",children:w.jsx("div",{className:"bg-white/10 text-gray-200 p-3 rounded-lg max-w-[80%]",children:w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-400 animate-bounce"}),w.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-400 animate-bounce",style:{animationDelay:"0.2s"}}),w.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-400 animate-bounce",style:{animationDelay:"0.4s"}})]})})}),w.jsx("div",{ref:m})]}),w.jsx("div",{className:"p-4 border-t border-white/10",children:w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("input",{type:"text",value:o,onChange:T=>a(T.target.value),onKeyPress:T=>T.key==="Enter"&&y(),placeholder:"Ask about AI automation...",className:"flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm transition-colors duration-200",disabled:d}),w.jsx("button",{onClick:y,disabled:d||!o.trim(),className:"w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100",children:w.jsx(Ix,{className:"w-4 h-4 text-white"})})]})})]}),w.jsx("button",{onClick:n,className:"fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 shadow-xl rounded-full p-4 gradient-cta-btn border border-white/10 backdrop-blur-lg transition-all duration-300 hover:scale-105 focus:outline-none","aria-label":"Open chatbot",children:w.jsx(Tm,{className:"w-7 h-7 text-white"})})]})};function N3(){return N.useEffect(()=>{window.scrollTo(0,0)},[]),w.jsx(kf,{children:w.jsx("div",{className:"min-h-screen bg-black text-white overflow-x-hidden relative",children:w.jsxs("div",{className:"relative z-10",children:[w.jsx(Uf,{}),w.jsxs("main",{children:[w.jsx(w3,{}),w.jsx(T3,{}),w.jsx(A3,{}),w.jsx(b3,{}),w.jsx(R3,{}),w.jsx(P3,{}),w.jsx(L3,{})]}),w.jsx(ep,{}),w.jsx(tp,{})]})})})}const mn=[{name:"Sales",features:[{name:"CRM Data Automation",description:"Automated contact management, follow-up scheduling, and sales activity tracking.",icon:jM},{name:"Proposal Generation",description:"AI-powered custom quotes, contracts, and sales document creation.",icon:KM},{name:"Sales Call Analysis",description:"Conversation insights, sentiment analysis, and performance coaching recommendations.",icon:xa}]},{name:"Coaching",features:[{name:"Client Progress Tracking",description:"Automated goal monitoring, milestone tracking, and progress report generation.",icon:Fx},{name:"Session Scheduling & Reminders",description:"Smart calendar management with automated booking and follow-up communications.",icon:XM},{name:"Personalized Content Delivery",description:"AI-curated learning materials and resources based on individual client needs.",icon:ZM}]},{name:"Real Estate",features:[{name:"Property Valuation AI",description:"Automated market analysis and property pricing based on comparable sales data.",icon:JM},{name:"Lead Management System",description:"Automated buyer/seller qualification and nurturing workflows.",icon:kx},{name:"Document Processing",description:"Automated contract generation, compliance checking, and transaction management.",icon:qM}]},{name:"Marketing",features:[{name:"Content Generation",description:"AI-created marketing copy, social media posts, and campaign materials.",icon:oE},{name:"Lead Scoring & Qualification",description:"Automated prospect evaluation and sales pipeline management.",icon:Ux},{name:"Email Campaign Automation",description:"Personalized email sequences based on customer behavior and preferences.",icon:Ix}]},{name:"E-Commerce",features:[{name:"Review & Rating Management",description:"Automated review collection, sentiment analysis, and response generation for customer feedback.",icon:hE},{name:"Abandoned Cart Recovery",description:"Automated email and SMS sequences that re-engage customers who left items in their cart with personalized offers and reminders.",icon:uE},{name:"Inventory Management & Forecasting",description:"Automated stock level monitoring, demand prediction, and supplier reordering to prevent stockouts and overstock situations.",icon:sE}]}],D3=mn.map(t=>t.name),I3=()=>{const{nicheId:t}=YS(),e=D3.includes(t||"")?t:"Sales",[n,i]=N.useState(e),[r,s]=N.useState(null),[o,a]=N.useState(!1),{observeElements:l}=Di(),c=N.useRef(null),u=N.useRef(null),f=N.useRef(null),[d,p]=N.useState(!1),[g,x]=N.useState(n),[m,h]=N.useState(""),[v,_]=N.useState("right"),y=N.useRef(),C=mn.find(M=>M.name===n),T=M=>{i(M)},b=M=>{if(d)return;const S=mn.findIndex(H=>H.name===n);let L=S;M==="left"?L=(S-1+mn.length)%mn.length:L=(S+1)%mn.length,_(M),h(mn[L].name),p(!0),y.current=setTimeout(()=>{i(mn[L].name),x(mn[L].name),p(!1)},300)},R=()=>{const M=r||n;return mn.findIndex(L=>L.name===M)/mn.length*100};return N.useEffect(()=>{const M=()=>{a(window.innerWidth<768)};return M(),window.addEventListener("resize",M),setTimeout(()=>{document.querySelectorAll(".scroll-animate").forEach(H=>{H.classList.add("slow-fade-blur")})},100),()=>{window.removeEventListener("resize",M)}},[]),N.useEffect(()=>{window.scrollTo(0,0);const M=[c.current,u.current,f.current].filter(S=>S!==null);l(M)},[l]),N.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),N.useEffect(()=>{window.scrollTo(0,0)},[]),C?w.jsx(kf,{children:w.jsxs("div",{className:"min-h-screen bg-black relative",children:[w.jsxs("div",{className:"fixed inset-0 w-full h-full z-0",children:[w.jsx("div",{style:{transform:"scaleY(-1)",width:"100%",height:"100%"},children:w.jsx(Of,{colorStops:["#0052D4","#4364F7","#6FB1FC"],blend:.9,amplitude:1,speed:.5})}),w.jsx("div",{className:"absolute inset-0 w-full h-full bg-black/30 pointer-events-none"})]}),w.jsxs("div",{className:"relative z-20",children:[w.jsx(Uf,{}),w.jsxs("main",{children:[w.jsx("section",{className:"pt-32 pb-8 relative",children:w.jsx("div",{className:"container mx-auto px-6 text-center relative z-10",children:w.jsxs("div",{ref:c,className:"scroll-animate slow-fade-blur",children:[w.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight",children:w.jsx("span",{className:"dynamic-gradient-text",children:"Specific Niche Services"})}),w.jsx("p",{className:"text-lg font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide",children:"Industry-focused AI solutions tailored to meet the unique challenges and opportunities of your specific sector."})]})})}),w.jsx("section",{className:"pb-16 relative",children:w.jsx("div",{className:"container mx-auto px-6 relative z-10",children:w.jsxs("div",{ref:u,className:"max-w-4xl mx-auto scroll-animate slow-fade-blur",children:[!o&&w.jsx("div",{className:"relative bg-black/20 backdrop-blur-sm rounded-full p-4 border border-white/10 mb-8",onMouseLeave:()=>s(null),children:w.jsxs("div",{className:"flex relative",children:[w.jsx("div",{className:"absolute inset-y-0 gradient-cta-btn niche-selector-indicator transition-all duration-300 ease-in-out niche-selector-glow rounded-full px-2",style:{left:`${R()}%`,width:`${100/mn.length}%`}}),mn.map((M,S)=>w.jsx("button",{onClick:()=>T(M.name),onMouseEnter:()=>s(M.name),className:"relative z-10 flex-1 py-4 px-6 text-sm font-bold tracking-wide transition-all duration-300 rounded-full text-white whitespace-nowrap",children:M.name},M.name))]})}),o&&w.jsxs("div",{className:"flex items-center justify-center mb-8 space-x-4",children:[w.jsx("button",{onClick:()=>b("left"),disabled:d,className:"w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:w.jsx(Lx,{className:"w-6 h-6 text-white"})}),w.jsxs("div",{className:"relative overflow-hidden rounded-full px-8 py-4 min-w-[200px] text-center h-[52px] flex items-center justify-center",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] animate-gradient-shift"}),w.jsxs("div",{className:"relative w-full h-full flex items-center justify-center overflow-hidden",children:[w.jsx("div",{className:`absolute w-full transition-all duration-300 ease-in-out ${d?v==="left"?"-translate-x-full":"translate-x-full":"translate-x-0"}`,children:w.jsx("span",{className:"block text-white font-bold tracking-wide",children:g})}),d&&w.jsx("div",{className:"absolute w-full transition-all duration-300 ease-in-out translate-x-0",style:{transform:v==="left"?"translateX(100%)":"translateX(-100%)",animation:v==="left"?"slide-in-left 300ms ease-in-out forwards":"slide-in-right 300ms ease-in-out forwards"},children:w.jsx("span",{className:"block text-white font-bold tracking-wide",children:m})})]})]}),w.jsx("button",{onClick:()=>b("right"),disabled:d,className:"w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:w.jsx(Nx,{className:"w-6 h-6 text-white"})})]}),w.jsx("div",{ref:f,className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 stagger-children scroll-animate",children:C.features.map((M,S)=>w.jsxs("div",{className:"unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group",children:[w.jsx("div",{className:"w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon",children:w.jsx(M.icon,{className:"w-8 h-8 text-white"})}),w.jsx("h3",{className:"text-xl font-semibold mb-4 text-white tracking-wide",children:M.name}),w.jsx("p",{className:"text-gray-400 font-light leading-relaxed tracking-wide",children:M.description})]},S))})]})})})]}),w.jsx(ep,{}),w.jsx(tp,{})]})]})}):w.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black text-white",children:w.jsx("p",{children:"Niche not found."})})},U3=()=>{const{observeElements:t}=Di(),e=N.useRef(null),n=N.useRef(null);return N.useEffect(()=>{window.scrollTo(0,0);const i=[e.current,n.current].filter(s=>s!==null);t(i),setTimeout(()=>{document.querySelectorAll(".scroll-animate").forEach(o=>{o.classList.add("slow-fade-blur")})},100)},[t]),w.jsx(kf,{children:w.jsxs("div",{className:"min-h-screen bg-black text-white overflow-x-hidden relative overflow-hidden",children:[w.jsxs("div",{className:"absolute inset-0 w-full h-full z-0",children:[w.jsx("div",{style:{transform:"scaleY(-1)",width:"100%",height:"100%"},children:w.jsx(Of,{colorStops:["#0052D4","#4364F7","#6FB1FC"],blend:.9,amplitude:1,speed:.5})}),w.jsx("div",{className:"absolute inset-0 w-full h-full bg-black/30 pointer-events-none"})]}),w.jsxs("div",{className:"relative z-20",children:[w.jsx(Uf,{}),w.jsxs("main",{children:[w.jsx("section",{className:"pt-32 pb-8 relative",children:w.jsx("div",{className:"container mx-auto px-6 text-center relative z-10",children:w.jsxs("div",{ref:e,className:"scroll-animate slow-fade-blur",children:[w.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight",children:w.jsx("span",{className:"dynamic-gradient-text",children:"General Services"})}),w.jsx("p",{className:"text-lg font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide",children:"Comprehensive AI solutions designed to transform your business operations and drive innovation across all sectors."})]})})}),w.jsx("section",{className:"pb-16 relative",children:w.jsx("div",{className:"container mx-auto px-6 relative z-10",children:w.jsx("div",{ref:n,className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-animate",children:T_.map((i,r)=>w.jsxs("div",{className:"unified-card p-8 bg-white/5 border border-white/10 rounded-2xl group",children:[w.jsx("div",{className:"w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 card-icon",children:w.jsx(i.icon,{className:"w-8 h-8 text-white"})}),w.jsx("h3",{className:"text-xl font-semibold mb-4 text-white tracking-wide",children:i.title}),w.jsx("p",{className:"text-gray-400 font-light leading-relaxed tracking-wide",children:i.description})]},r))})})})]}),w.jsx(ep,{}),w.jsx(tp,{})]})]})})};var F3="1.3.4";function A_(t,e,n){return Math.max(t,Math.min(e,n))}function k3(t,e,n){return(1-n)*t+n*e}function O3(t,e,n,i){return k3(t,e,1-Math.exp(-n*i))}function z3(t,e){return(t%e+e)%e}var B3=class{constructor(){Ee(this,"isRunning",!1);Ee(this,"value",0);Ee(this,"from",0);Ee(this,"to",0);Ee(this,"currentTime",0);Ee(this,"lerp");Ee(this,"duration");Ee(this,"easing");Ee(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=A_(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=O3(this.value,this.to,this.lerp*60,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function H3(t,e){let n;return function(...i){let r=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(r,i)},e)}}var V3=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Ee(this,"width",0);Ee(this,"height",0);Ee(this,"scrollHeight",0);Ee(this,"scrollWidth",0);Ee(this,"debouncedResize");Ee(this,"wrapperResizeObserver");Ee(this,"contentResizeObserver");Ee(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ee(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ee(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=H3(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},b_=class{constructor(){Ee(this,"events",{})}emit(t,...e){var i;let n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){var n;return(n=this.events[t])!=null&&n.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(r=>e!==r)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}},e0=100/6,Vi={passive:!1},G3=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Ee(this,"touchStart",{x:0,y:0});Ee(this,"lastDelta",{x:0,y:0});Ee(this,"window",{width:0,height:0});Ee(this,"emitter",new b_);Ee(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Ee(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Ee(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Ee(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=i===1?e0:i===2?this.window.width:1,s=i===1?e0:i===2?this.window.height:1;e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Ee(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vi),this.element.addEventListener("touchstart",this.onTouchStart,Vi),this.element.addEventListener("touchmove",this.onTouchMove,Vi),this.element.addEventListener("touchend",this.onTouchEnd,Vi)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Vi),this.element.removeEventListener("touchstart",this.onTouchStart,Vi),this.element.removeEventListener("touchmove",this.onTouchMove,Vi),this.element.removeEventListener("touchend",this.onTouchEnd,Vi)}},t0=t=>Math.min(1,1.001-Math.pow(2,-10*t)),W3=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:x=!0,prevent:m,virtualScroll:h,overscroll:v=!0,autoRaf:_=!1,anchors:y=!1,autoToggle:C=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:b=!1}={}){Ee(this,"_isScrolling",!1);Ee(this,"_isStopped",!1);Ee(this,"_isLocked",!1);Ee(this,"_preventNextNativeScrollEvent",!1);Ee(this,"_resetVelocityTimeout",null);Ee(this,"__rafID",null);Ee(this,"isTouching");Ee(this,"time",0);Ee(this,"userData",{});Ee(this,"lastVelocity",0);Ee(this,"velocity",0);Ee(this,"direction",0);Ee(this,"options");Ee(this,"targetScroll");Ee(this,"animatedScroll");Ee(this,"animate",new B3);Ee(this,"emitter",new b_);Ee(this,"dimensions");Ee(this,"virtualScroll");Ee(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Ee(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ee(this,"onTransitionEnd",t=>{if(t.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",n=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(n)?this.stop():this.start()}});Ee(this,"onClick",t=>{const n=t.composedPath().find(i=>{var r,s,o;return i instanceof HTMLAnchorElement&&(((r=i.getAttribute("href"))==null?void 0:r.startsWith("#"))||((s=i.getAttribute("href"))==null?void 0:s.startsWith("/#"))||((o=i.getAttribute("href"))==null?void 0:o.startsWith("./#")))});if(n){const i=n.getAttribute("href");if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${i.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(i)&&(s=0),this.scrollTo(s,r)}}});Ee(this,"onPointerDown",t=>{t.button===1&&this.reset()});Ee(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var h,v,_;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((h=m.hasAttribute)==null?void 0:h.call(m,"data-lenis-prevent"))||r&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||s&&((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.preventDefault();const p=r&&this.options.syncTouch,x=r&&i.type==="touchend"&&Math.abs(d)>5;x&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...p?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ee(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ee(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=F3,(!t||t===document.documentElement)&&(t=window),typeof a=="number"&&typeof l!="function"?l=t0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:p,wheelMultiplier:g,autoResize:x,prevent:m,virtualScroll:h,overscroll:v,autoRaf:_,anchors:y,autoToggle:C,allowNestedScroll:T,__experimental__naiveDimensions:b},this.dimensions=new V3(t,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new G3(n,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,duration:r=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof t=="string"&&["top","left","start"].includes(t))t=0;else if(typeof t=="string"&&["bottom","right","end"].includes(t))t=this.limit;else{let d;if(typeof t=="string"?d=document.querySelector(t):t instanceof HTMLElement&&(t!=null&&t.nodeType)&&(d=t),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const p=d.getBoundingClientRect();t=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=t-this.animatedScroll;d>this.limit/2?t=t-this.limit:d<-this.limit/2&&(t=t+this.limit)}}else t=A_(0,t,this.limit);if(t===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},n){this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=t),typeof r=="number"&&typeof s!="function"?s=t0:typeof s=="function"&&typeof r!="number"&&(r=1),this.animate.fromTo(this.animatedScroll,t,{duration:r,easing:s,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),p||this.emit(),p&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now(),r=t._lenis??(t._lenis={});let s,o,a,l,c,u,f,d;const p=this.options.gestureOrientation;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(t);r.computedStyle=C;const T=C.overflowX,b=C.overflowY;if(s=["auto","overlay","scroll"].includes(T),o=["auto","overlay","scroll"].includes(b),r.hasOverflowX=s,r.hasOverflowY=o,!s&&!o||p==="vertical"&&!o||p==="horizontal"&&!s)return!1;c=t.scrollWidth,u=t.scrollHeight,f=t.clientWidth,d=t.clientHeight,a=c>f,l=u>d,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=c,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=d}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,d=r.clientHeight;if(!s&&!o||!a&&!l||p==="vertical"&&(!o||!l)||p==="horizontal"&&(!s||!a))return!1;let g;if(p==="horizontal")g="x";else if(p==="vertical")g="y";else{const C=e!==0,T=n!==0;C&&s&&a&&(g="x"),T&&o&&l&&(g="y")}if(!g)return!1;let x,m,h,v,_;if(g==="x")x=t.scrollLeft,m=c-f,h=e,v=s,_=a;else if(g==="y")x=t.scrollTop,m=u-d,h=n,v=o,_=l;else return!1;return(h>0?x<m:x>0)&&v&&_}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?z3(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};let Gi=null;const j3=()=>{if(typeof window>"u")return;Gi=new W3({lerp:.1,wheelMultiplier:1,touchMultiplier:2,infinite:!1});function t(e){Gi==null||Gi.raf(e),requestAnimationFrame(t)}return requestAnimationFrame(t),()=>{Gi==null||Gi.destroy(),Gi=null}};function X3(){return N.useEffect(()=>j3(),[]),w.jsx(w.Fragment,{children:w.jsxs(cM,{children:[w.jsx(bl,{path:"/",element:w.jsx(N3,{})}),w.jsx(bl,{path:"/specservices",element:w.jsx(I3,{})}),w.jsx(bl,{path:"/genservices",element:w.jsx(U3,{})})]})})}Xu.createRoot(document.getElementById("root")).render(w.jsx(Q_.StrictMode,{children:w.jsx(DM,{children:w.jsx(X3,{})})}));
