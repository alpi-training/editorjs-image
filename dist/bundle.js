!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImageTool=t():e.ImageTool=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}([function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var o=n(2),i=setTimeout;function r(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void c(t.promise,e)}l(t.promise,o)}else(1===e._state?l:c)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void f((o=n,i=t,function(){o.apply(i,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}var o,i}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return;n=!0,c(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(r);return s(this,new d(e,t,n)),n},a.prototype.finally=o.a,a.all=function(e){return new a((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function r(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){r(e,t)}),n)}o[e]=a,0==--i&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)r(a,o[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var o=0,i=e.length;o<i;o++)e[o].then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){i(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var i,r,a,s,l,c,u,d=n(8),f=(r=function(e){return new Promise((function(t,n){e=s(e),(e=l(e)).beforeSend&&e.beforeSend();var o=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");o.open(e.method,e.url),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t];o.setRequestHeader(t,n)}));var i=e.ratio;o.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),o=Math.ceil(n*i/100);e.progress(Math.min(o,100))}),!1),o.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),o=Math.ceil(n*(100-i)/100)+i;e.progress(Math.min(o,100))}),!1),o.onreadystatechange=function(){if(4===o.readyState){var e=o.response;try{e=JSON.parse(e)}catch(e){}var i=d.parseHeaders(o.getAllResponseHeaders()),r={body:e,code:o.status,headers:i};u(o.status)?t(r):n(r)}},o.send(e.data)}))},a=function(e){return e.method="POST",r(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==o(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(i).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},l=function(e){switch(e.method){case"GET":var t=c(e.data,i.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||i.JSON}(e);(d.isFormData(e.data)||d.isFormElement(e.data))&&(n=i.FORM),e.data=c(e.data,n),n!==f.contentType.FORM&&(e.headers["content-type"]=n)}return e},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case i.URLENCODED:return d.urlEncode(e);case i.JSON:return d.jsonEncode(e);case i.FORM:return d.formEncode(e);default:return e}},u=function(e){return e>=200&&e<300},{contentType:i={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:r,get:function(e){return e.method="GET",r(e)},post:a,transport:function(e){return e=s(e),d.selectFiles(e).then((function(t){for(var n=new FormData,o=0;o<t.length;o++)n.append(e.fieldName,t[o],t[o].name);d.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var o=e.data[t];n.append(t,o)}));var i=e.beforeSend;return e.beforeSend=function(){return i(t)},e.data=n,a(e)}))},selectFiles:function(e){return delete(e=s(e)).beforeSend,d.selectFiles(e)}});e.exports=f},function(e,t,n){"use strict";n.r(t);var o=n(1);window.Promise=window.Promise||o.a},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,i,r,a,s,l=1,c={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){h(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),o=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){r.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(h,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[l]=i,o(l),l++},f.clearImmediate=p}function p(e){delete c[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var l,c=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"urlEncode",value:function(e){return i(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach((function(n){var o=e[n];t.append(n,o)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){var o=document.createElement("INPUT");o.type="file",e.multiple&&o.setAttribute("multiple","multiple"),e.accept&&o.setAttribute("accept",e.accept),o.style.display="none",document.body.appendChild(o),o.addEventListener("change",(function(e){var n=e.target.files;t(n),document.body.removeChild(o)}),!1),o.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach((function(e){var t=e.split(": "),o=t.shift(),i=t.join(": ");o&&(n[o]=i)})),n}}])&&o(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},o=function(e,t,i,r){return t=t||null,i=i||"&",r=r||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map((function(a){var s,l,c=a;if(r&&(c=r+"["+c+"]"),"object"==typeof e[a]&&null!==e[a])s=o(e[a],null,i,c);else{t&&(l=c,c=!isNaN(parseFloat(l))&&isFinite(l)?t+Number(c):c);var u=e[a];u=(u=0===(u=!1===(u=!0===u?"1":u)?"0":u)?"0":u)||"",s=n(c)+"="+n(u)}return s}))).join(i).replace(/[!'()*]/g,""):""};e.exports=o}])},function(e,t){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>'},function(e,t){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>'},function(e,t){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>'},function(e,t){e.exports='<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>'},function(e,t){e.exports='<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>'},function(e,t,n){var o=n(7),i=n(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:g(f,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(e,t){var n,o,i;if(t.singleton){var r=m++;n=h||(h=c(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=c(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},function(e,t,n){(t=n(9)(!1)).push([e.i,'.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));n(6);var o=n(1),i=n.n(o);class r{constructor({api:e,config:t,onSelectFile:n,readOnly:o}){this.api=e,this.config=t,this.onSelectFile=n,this.readOnly=o,this.nodes={wrapper:a("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:a("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:a("div",this.CSS.imagePreloader),caption:a("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}static get status(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}render(e){return e.file&&0!==Object.keys(e.file).length?this.toggleStatus(r.status.UPLOADING):this.toggleStatus(r.status.EMPTY),this.nodes.wrapper}createFileButton(){const e=a("div",[this.CSS.button]);return e.innerHTML=this.config.buttonContent||`${i.a} ${this.api.i18n.t("Select an Image")}`,e.addEventListener("click",()=>{this.onSelectFile()}),e}showPreloader(e){this.nodes.imagePreloader.style.backgroundImage=`url(${e})`,this.toggleStatus(r.status.UPLOADING)}hidePreloader(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(r.status.EMPTY)}fillImage(e){const t=/\.mp4$/.test(e)?"VIDEO":"IMG",n={src:e};let o="load";"VIDEO"===t&&(n.autoplay=!0,n.loop=!0,n.muted=!0,n.playsinline=!0,o="loadeddata"),this.nodes.imageEl=a(t,this.CSS.imageEl,n),this.nodes.imageEl.addEventListener(o,()=>{this.toggleStatus(r.status.FILLED),this.nodes.imagePreloader&&(this.nodes.imagePreloader.style.backgroundImage="")}),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}fillCaption(e){this.nodes.caption&&(this.nodes.caption.innerHTML=e)}toggleStatus(e){for(const t in r.status)Object.prototype.hasOwnProperty.call(r.status,t)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${r.status[t]}`,e===r.status[t])}applyTune(e,t){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`,t)}}const a=function(e,t=null,n={}){const o=document.createElement(e);Array.isArray(t)?o.classList.add(...t):t&&o.classList.add(t);for(const e in n)o[e]=n[e];return o};var s=n(2),l=n.n(s),c=n(3),u=n.n(c),d=n(4),f=n.n(d);class p{constructor({api:e,actions:t,onChange:n}){this.api=e,this.actions=t,this.onChange=n,this.buttons=[]}static get tunes(){return[{name:"withBorder",icon:u.a,title:"With border"},{name:"stretched",icon:f.a,title:"Stretch image"},{name:"withBackground",icon:l.a,title:"With background"}]}get CSS(){return{wrapper:"",buttonBase:this.api.styles.settingsButton,button:"image-tool__tune",buttonActive:this.api.styles.settingsButtonActive}}render(e){const t=a("div",this.CSS.wrapper);return this.buttons=[],p.tunes.concat(this.actions).forEach(n=>{const o=this.api.i18n.t(n.title),i=a("div",[this.CSS.buttonBase,this.CSS.button],{innerHTML:n.icon,title:o});i.addEventListener("click",()=>{this.tuneClicked(n.name,n.action)}),i.dataset.tune=n.name,i.classList.toggle(this.CSS.buttonActive,e[n.name]),this.buttons.push(i),this.api.tooltip.onHover(i,o,{placement:"top"}),t.appendChild(i)}),t}tuneClicked(e,t){if("function"==typeof t&&!t(e))return!1;const n=this.buttons.find(t=>t.dataset.tune===e);n.classList.toggle(this.CSS.buttonActive,!n.classList.contains(this.CSS.buttonActive)),this.onChange(e)}}var h=n(5),m=n.n(h),g=n(0),v=n.n(g);class y{constructor({config:e,onUpload:t,onError:n}){this.config=e,this.onUpload=t,this.onError=n}uploadSelectedFile({onPreview:e}){const t=function(t){e(t.file.url)};let n;n=this.config.uploader&&"function"==typeof this.config.uploader.selectFiles&&"function"==typeof this.config.uploader.uploadByFile?this.config.uploader.selectFiles({accept:this.config.types}).then(e=>{t(e);const n=this.config.uploader.uploadByFile(e);return b(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n}):v.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:e=>{t(e[0])},fieldName:this.config.field}).then(e=>e.body),n.then(e=>{this.onUpload(e)}).catch(e=>{this.onError(e)})}uploadByUrl(e){let t;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?(t=this.config.uploader.uploadByUrl(e),b(t)||console.warn("Custom uploader method uploadByUrl should return a Promise")):t=v.a.post({url:this.config.endpoints.byUrl,data:Object.assign({url:e},this.config.additionalRequestData),type:v.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(e=>e.body),t.then(e=>{this.onUpload(e)}).catch(e=>{this.onError(e)})}uploadByFile(e,{onPreview:t}){const n=new FileReader;let o;if(n.readAsDataURL(e),n.onload=e=>{t(e.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)o=this.config.uploader.uploadByFile(e),b(o)||console.warn("Custom uploader method uploadByFile should return a Promise");else{const t=new FormData;t.append(this.config.field,e),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach(([e,n])=>{t.append(e,n)}),o=v.a.post({url:this.config.endpoints.byFile,data:t,type:v.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(e=>e.body)}o.then(e=>{this.onUpload(e)}).catch(e=>{this.onError(e)})}}function b(e){return e&&"function"==typeof e.then}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */class w{static get isReadOnlySupported(){return!0}static get toolbox(){return{icon:m.a,title:"Image"}}constructor({data:e,config:t,api:n,readOnly:o}){this.api=n,this.readOnly=o,this.config={endpoints:t.endpoints||"",additionalRequestData:t.additionalRequestData||{},additionalRequestHeaders:t.additionalRequestHeaders||{},field:t.field||"image",types:t.types||"image/*",captionPlaceholder:this.api.i18n.t(t.captionPlaceholder||"Caption"),buttonContent:t.buttonContent||"",uploader:t.uploader||void 0,actions:t.actions||[]},this.uploader=new y({config:this.config,onUpload:e=>this.onUpload(e),onError:e=>this.uploadingFailed(e)}),this.ui=new r({api:n,config:this.config,onSelectFile:()=>{this.uploader.uploadSelectedFile({onPreview:e=>{this.ui.showPreloader(e)}})},readOnly:o}),this.tunes=new p({api:n,actions:this.config.actions,onChange:e=>this.tuneToggled(e)}),this._data={},this.data=e}render(){return this.ui.render(this.data)}validate(e){return e.file&&e.file.url}save(){const e=this.ui.nodes.caption;return this._data.caption=e.innerHTML,this.data}renderSettings(){return this.tunes.render(this.data)}appendCallback(){this.ui.nodes.fileButton.click()}static get pasteConfig(){return{tags:["img"],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},files:{mimeTypes:["image/*"]}}}async onPaste(e){switch(e.type){case"tag":{const t=e.detail.data;if(/^blob:/.test(t.src)){const e=await fetch(t.src),n=await e.blob();this.uploadFile(n);break}this.uploadUrl(t.src);break}case"pattern":{const t=e.detail.data;this.uploadUrl(t);break}case"file":{const t=e.detail.file;this.uploadFile(t);break}}}set data(e){this.image=e.file,this._data.caption=e.caption||"",this.ui.fillCaption(this._data.caption),p.tunes.forEach(({name:t})=>{const n=void 0!==e[t]&&(!0===e[t]||"true"===e[t]);this.setTune(t,n)})}get data(){return this._data}set image(e){this._data.file=e||{},e&&e.url&&this.ui.fillImage(e.url)}onUpload(e){e.success&&e.file?this.image=e.file:this.uploadingFailed("incorrect response: "+JSON.stringify(e))}uploadingFailed(e){console.log("Image Tool: uploading failed because of",e),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()}tuneToggled(e){this.setTune(e,!this._data[e])}setTune(e,t){this._data[e]=t,this.ui.applyTune(e,t),"stretched"===e&&Promise.resolve().then(()=>{const e=this.api.blocks.getCurrentBlockIndex();this.api.blocks.stretchBlock(e,t)}).catch(e=>{console.error(e)})}uploadFile(e){this.uploader.uploadByFile(e,{onPreview:e=>{this.ui.showPreloader(e)}})}uploadUrl(e){this.ui.showPreloader(e),this.uploader.uploadByUrl(e)}}}]).default}));