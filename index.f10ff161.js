!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired7c6=o),o.register("ke5Oc",(function(e,t){"use strict";var n=o("c4C4W"),r=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=r(i.prototype.request,o);return n.extend(s,i.prototype,o),n.extend(s,o),s.create=function(n){return e(a(t,n))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var n,r=o("lGmLA"),i=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=s("Date"),p=s("File"),v=s("Blob"),m=s("FileList");function y(e){return"[object Function]"===i.call(e)}var g=s("URLSearchParams");function _(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var k,b=(k="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return k&&e instanceof k});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:v,isFunction:y,isStream:function(e){return h(e)&&y(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function e(){var t={};function n(n,r){f(t[r])&&f(n)?t[r]=e(t[r],n):f(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return t},extend:function(e,t,n){return _(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,a={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=r[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:b,isFileList:m}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("9jbh3",(function(e,t){"use strict";var n=o("c4C4W"),r=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var h=[a,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(u),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var f=t;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(e){p(e);break}}try{o=a(f)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},h.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("6d5Pb",(function(e,t){"use strict";var n=o("c4C4W");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var n=o("c4C4W");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("k04r0",(function(e,t){"use strict";var n=o("c4C4W"),r=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var n=o("c4C4W"),r=o("c74ni");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var n=o("6qd2L"),r=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,f={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("btSY7")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("5TB86",(function(e,t){"use strict";var n=o("c4C4W");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,a,s,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var n=o("3aNd6").Buffer,r=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,a){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+a);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var s,u=a?a+"."+i:i;if(n&&!a&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(a,o(n))}(e),t}})),o.register("3aNd6",(function(n,r){var i,a;t(n.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(n.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var s=o("5d11t"),u=o("7rddL"),c=o("7a8JG");function l(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function h(e,t){if(l()<t)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=f.prototype:(null===e&&(e=new f(t)),e.length=t),e}function f(e,t,n){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return v(this,e)}return d(this,e,t,n)}function d(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r);f.TYPED_ARRAY_SUPPORT?(e=t).__proto__=f.prototype:e=m(e,t);return e}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!f.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|g(t,n),i=(e=h(e,r)).write(t,n);i!==r&&(e=e.slice(0,i));return e}(e,t,n):function(e,t){if(f.isBuffer(t)){var n=0|y(t.length);return 0===(e=h(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?h(e,0):m(e,t);if("Buffer"===t.type&&c(t.data))return m(e,t.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function v(e,t){if(p(t),e=h(e,t<0?0:0|y(t)),!f.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function m(e,t){var n=t.length<0?0:0|y(t.length);e=h(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function y(e){if(e>=l())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l().toString(16)+" bytes");return 0|e}function g(e,t){if(f.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return K(e).length;default:if(r)return V(e).length;t=(""+t).toLowerCase(),r=!0}}function _(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return L(this,t,n);case"utf8":case"utf-8":return N(this,t,n);case"ascii":return O(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return R(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function k(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function b(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=f.from(t,r)),f.isBuffer(t))return 0===t.length?-1:w(e,t,n,r,i);if("number"==typeof t)return t&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):w(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function w(e,t,n,r,i){var o,a=1,s=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=n;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(n+u>s&&(n=s-u),o=n;o>=0;o--){for(var h=!0,f=0;f<u;f++)if(c(e,o+f)!==c(t,f)){h=!1;break}if(h)return o}return-1}function x(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;a<r;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[n+a]=s}return a}function I(e,t,n,r){return G(V(t,e.length-n),e,n,r)}function C(e,t,n,r){return G(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function T(e,t,n,r){return C(e,t,n,r)}function E(e,t,n,r){return G(K(t),e,n,r)}function S(e,t,n,r){return G(function(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function R(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function N(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o,a,s,u,c=e[i],l=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=n)switch(h){case 1:c<128&&(l=c);break;case 2:128==(192&(o=e[i+1]))&&(u=(31&c)<<6|63&o)>127&&(l=u);break;case 3:o=e[i+1],a=e[i+2],128==(192&o)&&128==(192&a)&&(u=(15&c)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:o=e[i+1],a=e[i+2],s=e[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(l=u)}null===l?(l=65533,h=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=h}return function(e){var t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=P));return n}(r)}i=f,a=50,f.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),l(),f.poolSize=8192,f._augment=function(e){return e.__proto__=f.prototype,e},f.from=function(e,t,n){return d(null,e,t,n)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(e,t,n){return function(e,t,n,r){return p(t),t<=0?h(e,t):void 0!==n?"string"==typeof r?h(e,t).fill(n,r):h(e,t).fill(n):h(e,t)}(null,e,t,n)},f.allocUnsafe=function(e){return v(null,e)},f.allocUnsafeSlow=function(e){return v(null,e)},f.isBuffer=function(e){return!(null==e||!e._isBuffer)},f.compare=function(e,t){if(!f.isBuffer(e)||!f.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(e,t){if(!c(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return f.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=f.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(!f.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length}return r},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)k(this,t,t+1);return this},f.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)k(this,t,t+3),k(this,t+1,t+2);return this},f.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)k(this,t,t+7),k(this,t+1,t+6),k(this,t+2,t+5),k(this,t+3,t+4);return this},f.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?N(this,0,e):_.apply(this,arguments)},f.prototype.equals=function(e){if(!f.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===f.compare(this,e)},f.prototype.inspect=function(){var e="",t=a;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},f.prototype.compare=function(e,t,n,r,i){if(!f.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0),s=Math.min(o,a),u=this.slice(r,i),c=e.slice(t,n),l=0;l<s;++l)if(u[l]!==c[l]){o=u[l],a=c[l];break}return o<a?-1:a<o?1:0},f.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},f.prototype.indexOf=function(e,t,n){return b(this,e,t,n,!0)},f.prototype.lastIndexOf=function(e,t,n){return b(this,e,t,n,!1)},f.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return x(this,e,t,n);case"utf8":case"utf-8":return I(this,e,t,n);case"ascii":return C(this,e,t,n);case"latin1":case"binary":return T(this,e,t,n);case"base64":return E(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function O(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function A(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function L(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=H(e[o]);return i}function D(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function M(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function U(e,t,n,r,i,o){if(!f.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function F(e,t,n,r){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-n,2);i<o;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function j(e,t,n,r){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-n,4);i<o;++i)e[n+i]=t>>>8*(r?i:3-i)&255}function B(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function W(e,t,n,r,i){return i||B(e,0,n,4),u.write(e,t,n,r,23,4),n+4}function q(e,t,n,r,i){return i||B(e,0,n,8),u.write(e,t,n,r,52,8),n+8}f.prototype.slice=function(e,t){var n,r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),f.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=f.prototype;else{var i=t-e;n=new f(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+e]}return n},f.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},f.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},f.prototype.readUInt8=function(e,t){return t||M(e,1,this.length),this[e]},f.prototype.readUInt16LE=function(e,t){return t||M(e,2,this.length),this[e]|this[e+1]<<8},f.prototype.readUInt16BE=function(e,t){return t||M(e,2,this.length),this[e]<<8|this[e+1]},f.prototype.readUInt32LE=function(e,t){return t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},f.prototype.readUInt32BE=function(e,t){return t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},f.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},f.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||M(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},f.prototype.readInt8=function(e,t){return t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){t||M(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},f.prototype.readInt16BE=function(e,t){t||M(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},f.prototype.readInt32LE=function(e,t){return t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},f.prototype.readInt32BE=function(e,t){return t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},f.prototype.readFloatLE=function(e,t){return t||M(e,4,this.length),u.read(this,e,!0,23,4)},f.prototype.readFloatBE=function(e,t){return t||M(e,4,this.length),u.read(this,e,!1,23,4)},f.prototype.readDoubleLE=function(e,t){return t||M(e,8,this.length),u.read(this,e,!0,52,8)},f.prototype.readDoubleBE=function(e,t){return t||M(e,8,this.length),u.read(this,e,!1,52,8)},f.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||U(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},f.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||U(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},f.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,1,255,0),f.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},f.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):F(this,e,t,!0),t+2},f.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):F(this,e,t,!1),t+2},f.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):j(this,e,t,!0),t+4},f.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},f.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);U(this,e,t,n,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},f.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);U(this,e,t,n,i-1,-i)}var o=n-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},f.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,1,127,-128),f.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},f.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):F(this,e,t,!0),t+2},f.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):F(this,e,t,!1),t+2},f.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):j(this,e,t,!0),t+4},f.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||U(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),f.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},f.prototype.writeFloatLE=function(e,t,n){return W(this,e,t,!0,n)},f.prototype.writeFloatBE=function(e,t,n){return W(this,e,t,!1,n)},f.prototype.writeDoubleLE=function(e,t,n){return q(this,e,t,!0,n)},f.prototype.writeDoubleBE=function(e,t,n){return q(this,e,t,!1,n)},f.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},f.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!f.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=f.isBuffer(e)?e:V(new f(e,r).toString()),s=a.length;for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this};var z=/[^+\/0-9A-Za-z-_]/g;function H(e){return e<16?"0"+e.toString(16):e.toString(16)}function V(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function K(e){return s.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(z,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function G(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}})),o.register("5d11t",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),t(e.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],u=new s(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=a[e.charCodeAt(n)]<<18|a[e.charCodeAt(n+1)]<<12|a[e.charCodeAt(n+2)]<<6|a[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(n)]<<2|a[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(n)]<<10|a[e.charCodeAt(n+1)]<<4|a[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],a=16383,s=0,u=n-r;s<u;s+=a)i.push(f(e,s,s+a>u?u:s+a));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var r,i,a=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(e){return r=e})),t(e.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=e[t+h];for(h+=f,o=d&(1<<-l)-1,d>>=-l,l+=s;l>0;o=256*o+e[t+h],h+=f,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+e[t+h],h+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=l?(s=0,a=l):a+h>=1?(s=(t*u-1)*Math.pow(2,i),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+d]=255&a,d+=p,a/=256,c-=8);e[n+d-p]|=128*v}})),o.register("7a8JG",(function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}})),o.register("btSY7",(function(e,t){"use strict";var n=o("c4C4W"),r=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),h=o("5TB86"),f=o("dW1zJ"),d=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var p,v=e.data,m=e.headers,y=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(v)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var k=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(k+":"+b)}var w=s(e.baseURL,e.url);function x(){if(_){var n="getAllResponseHeaders"in _?u(_.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};r((function(e){t(e),g()}),(function(e){o(e),g()}),i),_=null}}if(_.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=x:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(x)},_.onabort=function(){_&&(o(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},n.isStandardBrowserEnv()){var I=(e.withCredentials||c(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;I&&(m[e.xsrfHeaderName]=I)}"setRequestHeader"in _&&n.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:_.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),y&&"json"!==y&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){_&&(o(!e||e&&e.type?new f:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),v||(v=null);var C=d(w);C&&-1===["http","https","file"].indexOf(C)?o(new h("Unsupported protocol "+C+":",h.ERR_BAD_REQUEST,e)):_.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var n=o("5TB86");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("jFG8L",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var n=o("7xjuH"),r=o("ftRZn");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var n=o("c4C4W"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var n=o("5TB86");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function a(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("9SeBc",(function(e,t){var r=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(i){return(void 0===i?"undefined":n(r)(i))===e||"a"+(t<1?"n ":" ")+e}}));var u={};s.transitional=function(e,t,n){function r(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,o){if(!1===e)throw new a(r(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var n=o("dW1zJ");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}}));var a={};function s(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)}))}};var u={},c=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function g(){}var _={};u(_,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(R([])));b&&b!==n&&r.call(b,o)&&(_=b);var w=g.prototype=m.prototype=Object.create(_);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function C(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return y.prototype=g,u(w,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(I.prototype),u(I.prototype,a,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new I(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(u);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var h={};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&f(e.prototype,t);n&&f(e,n);return e};var d;d=o("ke5Oc");var p="dad2725b968ab7e952dfbc80999b3d08";n(d).defaults.baseURL="https://api.themoviedb.org/3";var v=function(){"use strict";function e(){n(l)(this,e),this.searchQuery=""}return n(h)(e,[{key:"fetchTrendingMovies",value:function(e){return n(a)(n(u).mark((function t(){var r,i,o,a;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(d)("/trending/movie/day?api_key=".concat(p,"&page=").concat(e));case 3:return r=t.sent,console.log(r.data),i=r.data,o=i.results,a=i.total_pages,t.abrupt("return",{results:o,total_pages:a});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},{key:"fetchMoviesByKeyWord",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o,a,s;return n(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n(d)("/search/movie?&api_key=".concat(p,"&query=").concat(t.searchQuery,"&page=").concat(e));case 3:return i=r.sent,console.log(i.data),o=i.data,a=o.results,s=o.total_pages,r.abrupt("return",{results:a,total_pages:s});case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0.message);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}},{key:"fetchMovieInfo",value:function(e){return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(d)("movie/".concat(e,"?api_key=").concat(p));case 3:return r=t.sent,console.log(r.data),t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},{key:"getPage",value:function(){return this.page}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}(),m=o("hKHmD"),y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e){return g.default(e)||_.default(e)||b.default(e)||k.default()};var g=w(o("kMC0W")),_=w(o("7AJDX")),k=w(o("8CtQK")),b=w(o("auk6i"));function w(e){return e&&e.__esModule?e:{default:e}}var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e,t){return I.default(e)||C.default(e,t)||E.default(e,t)||T.default()};var I=S(o("8slrw")),C=S(o("7AJDX")),T=S(o("ifqQW")),E=S(o("auk6i"));function S(e){return e&&e.__esModule?e:{default:e}}var R=o("ds8z5"),N={};Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O.default(e,t)};var P,O=(P=o("gD1JV"))&&P.__esModule?P:{default:P};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(e){return j(e)};var L=F(o("ge8co")),D=F(o("cZGw3")),M=F(o("fVNic")),U=F(o("gD1JV"));function F(e){return e&&e.__esModule?e:{default:e}}function j(e){var t="function"==typeof Map?new Map:void 0;return j=function(e){if(null===e||!D.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return L.default(e,arguments,M.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),U.default(n,e)},j(e)}var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){var t=W.default();return function(){var n,r=q.default(e);if(t){var i=q.default(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return z.default(this,n)}};var W=H(o("aTHs7")),q=H(o("fVNic")),z=H(o("jmhxu"));function H(e){return e&&e.__esModule?e:{default:e}}
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
 */var V=!1,K=!1,G="${JSCORE_VERSION}",Y=function(e,t){if(!e)throw J(t)},J=function(e){return new Error("Firebase Database ("+G+") INTERNAL ASSERT FAILED: "+e)},Q=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},X={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,h=(3&o)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Q(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},$=function(e){var t=Q(e);return X.encodeByteArray(t,!0)},Z=function(e){return $(e).replace(/\./g,"")},ee=function(e){try{return X.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function te(e){return ne(void 0,e)}function ne(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ne(e[n],t[n]));return e}
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
var re=function(){"use strict";function e(){var t=this;n(l)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return n(h)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
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
function ie(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function oe(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function ae(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function se(){return!0===V||!0===K}
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
var ue=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i,o){var a;return n(l)(this,r),(a=t.call(this,i)).code=e,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(n(R)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(n(R)(a),ce.prototype.create),a}return r}(n(A)(Error)),ce=function(){"use strict";function e(t,r,i){n(l)(this,e),this.service=t,this.serviceName=r,this.errors=i}return n(h)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?le(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new ue(o,u,i);return c}}]),e}();function le(e,t){return e.replace(he,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var he=/\{\$([^}]+)}/g;
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
 */function fe(e){return JSON.parse(e)}function de(e){return JSON.stringify(e)}
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
 */var pe=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=fe(ee(o[0])||""),n=fe(ee(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ve=function(e){var t=pe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
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
function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ge(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _e(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ke(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(be(l)&&be(h)){if(!ke(l,h))return!1}else if(l!==h)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var f=!0,d=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){d=!0,p=e}finally{try{f||null==m.return||m.return()}finally{if(d)throw p}}return!0}function be(e){return null!==e&&"object"==typeof e}
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
 */function we(e){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(e,r){var i=n(x)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){t.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(e)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t.length?"&"+t.join("&"):""}function xe(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=n(x)(e.split("="),2),i=r[0],o=r[1];t[decodeURIComponent(i)]=decodeURIComponent(o)}})),t}function Ie(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Ce=function(){"use strict";function e(){n(l)(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}return n(h)(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):p<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),e}();var Te=function(){"use strict";function e(t,r){var i=this;n(l)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return n(h)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ee),void 0===r.error&&(r.error=Ee),void 0===r.complete&&(r.complete=Ee);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Ee(){}
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
 */function Se(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
var Re=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,Y(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ne=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Pe(e){return e&&e._delegate?e._delegate:e}var Oe=function(){"use strict";function e(t,r,i){n(l)(this,e),this.name=t,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return n(h)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Ae="[DEFAULT]",Le=function(){"use strict";function e(t,r){n(l)(this,e),this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return n(h)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new re;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch(e){}var t=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=n(x)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Array.from(e.instances.values()),t.next=3,Promise.all(n(y)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(n(y)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=n(x)(c.value,2),f=h[0],d=h[1],p=this.normalizeInstanceIdentifier(f);i===p&&d.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ae?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return this.component?this.component.multipleInstances?e:Ae:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
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
 */var De,Me,Ue=function(){"use strict";function e(t){n(l)(this,e),this.name=t,this.providers=new Map}return n(h)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Le(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Fe=(m=o("hKHmD"),[]);(Me=De||(De={}))[Me.DEBUG=0]="DEBUG",Me[Me.VERBOSE=1]="VERBOSE",Me[Me.INFO=2]="INFO",Me[Me.WARN=3]="WARN",Me[Me.ERROR=4]="ERROR",Me[Me.SILENT=5]="SILENT";var je,Be={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},We=De.INFO,qe=(je={},n(m)(je,De.DEBUG,"log"),n(m)(je,De.VERBOSE,"log"),n(m)(je,De.INFO,"info"),n(m)(je,De.WARN,"warn"),n(m)(je,De.ERROR,"error"),je),ze=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=qe[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(n(y)(i)))}},He=function(){"use strict";function e(t){n(l)(this,e),this.name=t,this._logLevel=We,this._logHandler=ze,this._userLogHandler=null,Fe.push(this)}return n(h)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in De))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Be[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.DEBUG].concat(n(y)(t))),this._logHandler.apply(this,[this,De.DEBUG].concat(n(y)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.VERBOSE].concat(n(y)(t))),this._logHandler.apply(this,[this,De.VERBOSE].concat(n(y)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.INFO].concat(n(y)(t))),this._logHandler.apply(this,[this,De.INFO].concat(n(y)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.WARN].concat(n(y)(t))),this._logHandler.apply(this,[this,De.WARN].concat(n(y)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.ERROR].concat(n(y)(t))),this._logHandler.apply(this,[this,De.ERROR].concat(n(y)(t)))}}]),e}();var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ke.default(e,t,n[t])}))}return e};var Ke=function(e){return e&&e.__esModule?e:{default:e}}(o("hKHmD"));var Ge,Ye;var Je=new WeakMap,Qe=new WeakMap,Xe=new WeakMap,$e=new WeakMap,Ze=new WeakMap;var et={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Qe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Xe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function tt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ye||(Ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(it(this),n),rt(Je.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return rt(e.apply(it(this),n))}:function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=e).call.apply(a,[it(this),t].concat(n(y)(i)));return Xe.set(s,t.sort?t.sort():[t]),rt(s)}}function nt(e){return"function"==typeof e?tt(e):(e instanceof IDBTransaction&&function(e){if(!Qe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Qe.set(e,t)}}(e),t=e,(Ge||(Ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,et):e);var t}function rt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(rt(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&Je.set(e,t)})).catch((function(){})),Ze.set(n,t),n;var t,n;if($e.has(e))return $e.get(e);var r=nt(e);return r!==e&&($e.set(e,r),Ze.set(r,e)),r}var it=function(e){return Ze.get(e)};function ot(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=rt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(rt(s.result),e.oldVersion,e.newVersion,rt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var at=["get","getKey","getAll","getAllKeys","count"],st=["put","add","delete","clear"],ut=new Map;function ct(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(ut.get(t))return ut.get(t);var r=t.replace(/FromIndex$/,""),i=t!==r,o=st.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||at.includes(r))){var s,c=(s=n(a)(n(u).mark((function e(t){var a,s,c,l,h,f,d=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=d.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=d[c];return h=this.transaction(t,o?"readwrite":"readonly"),f=h.store,i&&(f=f.index(s.shift())),e.next=7,Promise.all([(l=f)[r].apply(l,n(y)(s)),o&&h.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)});return ut.set(t,c),c}}}et=function(e){return n(Ve)({},e,{get:function(t,n,r){return ct(t,n)||e.get(t,n,r)},has:function(t,n){return!!ct(t,n)||e.has(t,n)}})}(et);
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
var lt=function(){"use strict";function e(t){n(l)(this,e),this.container=t}return n(h)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var ht,ft,dt="@firebase/app",pt="0.7.26",vt=new He("@firebase/app"),mt="[DEFAULT]",yt=(ht={},n(m)(ht,dt,"fire-core"),n(m)(ht,"@firebase/app-compat","fire-core-compat"),n(m)(ht,"@firebase/analytics","fire-analytics"),n(m)(ht,"@firebase/analytics-compat","fire-analytics-compat"),n(m)(ht,"@firebase/app-check","fire-app-check"),n(m)(ht,"@firebase/app-check-compat","fire-app-check-compat"),n(m)(ht,"@firebase/auth","fire-auth"),n(m)(ht,"@firebase/auth-compat","fire-auth-compat"),n(m)(ht,"@firebase/database","fire-rtdb"),n(m)(ht,"@firebase/database-compat","fire-rtdb-compat"),n(m)(ht,"@firebase/functions","fire-fn"),n(m)(ht,"@firebase/functions-compat","fire-fn-compat"),n(m)(ht,"@firebase/installations","fire-iid"),n(m)(ht,"@firebase/installations-compat","fire-iid-compat"),n(m)(ht,"@firebase/messaging","fire-fcm"),n(m)(ht,"@firebase/messaging-compat","fire-fcm-compat"),n(m)(ht,"@firebase/performance","fire-perf"),n(m)(ht,"@firebase/performance-compat","fire-perf-compat"),n(m)(ht,"@firebase/remote-config","fire-rc"),n(m)(ht,"@firebase/remote-config-compat","fire-rc-compat"),n(m)(ht,"@firebase/storage","fire-gcs"),n(m)(ht,"@firebase/storage-compat","fire-gcs-compat"),n(m)(ht,"@firebase/firestore","fire-fst"),n(m)(ht,"@firebase/firestore-compat","fire-fst-compat"),n(m)(ht,"fire-js","fire-js"),n(m)(ht,"firebase","fire-js-all"),ht),gt=new Map,_t=new Map;function kt(e,t){try{e.container.addComponent(t)}catch(n){vt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function bt(e){var t=e.name;if(_t.has(t))return vt.debug("There were multiple attempts to register component ".concat(t,".")),!1;_t.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=gt.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){kt(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function wt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var xt=(ft={},n(m)(ft,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),n(m)(ft,"bad-app-name","Illegal App name: '{$appName}"),n(m)(ft,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),n(m)(ft,"app-deleted","Firebase App named '{$appName}' already deleted"),n(m)(ft,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n(m)(ft,"invalid-log-argument","First argument to `onLog` must be null or a function."),n(m)(ft,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),n(m)(ft,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),n(m)(ft,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),n(m)(ft,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),ft),It=new ce("app","Firebase",xt),Ct=function(){"use strict";function e(t,r,i){var o=this;n(l)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oe("app",(function(){return o}),"PUBLIC"))}return n(h)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}]),e}(),Tt="9.8.3";function Et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=gt.get(e);if(!t)throw It.create("no-app",{appName:e});return t}function St(e,t,n){var r,i=null!==(r=yt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void vt.warn(s.join(" "))}bt(new Oe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var Rt="firebase-heartbeat-store",Nt=null;function Pt(){return Nt||(Nt=ot("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Rt)}}).catch((function(e){throw It.create("storage-open",{originalErrorMessage:e.message})}))),Nt}function Ot(e){return At.apply(this,arguments)}function At(){return(At=n(a)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Pt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Rt).objectStore(Rt).get(Mt(t)));case 8:throw e.prev=8,e.t0=e.catch(1),It.create("storage-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Lt(e,t){return Dt.apply(this,arguments)}function Dt(){return(Dt=n(a)(n(u).mark((function e(t,r){var i,o,a,s;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Pt();case 4:return o=e.sent,a=o.transaction(Rt,"readwrite"),s=a.objectStore(Rt),e.next=9,s.put(r,Mt(t));case 9:return e.abrupt("return",a.done);case 12:throw e.prev=12,e.t0=e.catch(1),It.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Mt(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var Ut=function(){"use strict";function e(t){var r=this;n(l)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Wt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return n(h)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i,o;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=Ft(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i,o,a,s;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=Ft(),i=jt(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=Z(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function Ft(){return(new Date).toISOString().substring(0,10)}function jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),qt(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),qt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var Bt,Wt=function(){"use strict";function e(t){n(l)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return n(h)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Ot(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return o=n.sent,n.abrupt("return",Lt(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return n.stop()}}),r)})))()}},{key:"add",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o;return n(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return o=r.sent,r.abrupt("return",Lt(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:n(y)(o.heartbeats).concat(n(y)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function qt(e){return Z(JSON.stringify({version:2,heartbeats:e})).length}
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
 */Bt="",bt(new Oe("platform-logger",(function(e){return new lt(e)}),"PRIVATE")),bt(new Oe("heartbeat",(function(e){return new Ut(e)}),"PRIVATE")),St(dt,pt,Bt),St(dt,pt,"esm2017"),St("fire-js","");
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
St("firebase","9.8.3","app");R=o("ds8z5"),m=o("hKHmD");var zt={};Object.defineProperty(zt,"__esModule",{value:!0}),zt.default=function(e,t,n){return Vt(e,t,n)};var Ht=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function Vt(e,t,n){return(Vt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Ht.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Kt=o("fVNic");function Gt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Yt(){return n(m)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Jt=Yt,Qt=new ce("auth","Firebase",Yt()),Xt=new He("@firebase/auth");function $t(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o;Xt.logLevel<=De.ERROR&&(o=Xt).error.apply(o,["Auth (".concat(Tt,"): ").concat(e)].concat(n(y)(r)))}
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
 */function Zt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw nn.apply(void 0,[e].concat(n(y)(r)))}function en(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return nn.apply(void 0,[e].concat(n(y)(r)))}function tn(e,t,r){var i=Object.assign(Object.assign({},Jt()),n(m)({},t,r));return new ce("auth","Firebase",i).create(t,{appName:e.name})}function nn(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=r[0],u=n(y)(r.slice(1));return u[0]&&(u[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(n(y)(u)))}return(o=Qt).create.apply(o,[e].concat(n(y)(r)))}function rn(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!e)throw nn.apply(void 0,[t].concat(n(y)(i)))}function on(e){var t="INTERNAL ASSERTION FAILED: "+e;throw $t(t),new Error(t)}function an(e,t){e||on(t)}
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
 */var sn=new Map;function un(e){an(e instanceof Function,"Expected a class definition");var t=sn.get(e);return t?(an(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sn.set(e,t),t)}
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
 */function cn(e,t){var n=wt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ke(n.getOptions(),null!=t?t:{}))return r;Zt(r,"already-initialized")}return n.initialize({options:t})}
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
function ln(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function hn(){return"http:"===fn()||"https:"===fn()}function fn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function dn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!hn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var pn=function(){"use strict";function e(t,r){n(l)(this,e),this.shortDelay=t,this.longDelay=r,an(r>t,"Short delay should be less than long delay!"),this.isMobile=oe()||ae()}return n(h)(e,[{key:"get",value:function(){return dn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
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
 */function vn(e,t){an(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var mn,yn=function(){"use strict";function e(){n(l)(this,e)}return n(h)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),gn=(mn={},n(m)(mn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),n(m)(mn,"MISSING_CUSTOM_TOKEN","internal-error"),n(m)(mn,"INVALID_IDENTIFIER","invalid-email"),n(m)(mn,"MISSING_CONTINUE_URI","internal-error"),n(m)(mn,"INVALID_PASSWORD","wrong-password"),n(m)(mn,"MISSING_PASSWORD","internal-error"),n(m)(mn,"EMAIL_EXISTS","email-already-in-use"),n(m)(mn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),n(m)(mn,"INVALID_IDP_RESPONSE","invalid-credential"),n(m)(mn,"INVALID_PENDING_TOKEN","invalid-credential"),n(m)(mn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),n(m)(mn,"MISSING_REQ_TYPE","internal-error"),n(m)(mn,"EMAIL_NOT_FOUND","user-not-found"),n(m)(mn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),n(m)(mn,"EXPIRED_OOB_CODE","expired-action-code"),n(m)(mn,"INVALID_OOB_CODE","invalid-action-code"),n(m)(mn,"MISSING_OOB_CODE","internal-error"),n(m)(mn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),n(m)(mn,"INVALID_ID_TOKEN","invalid-user-token"),n(m)(mn,"TOKEN_EXPIRED","user-token-expired"),n(m)(mn,"USER_NOT_FOUND","user-token-expired"),n(m)(mn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),n(m)(mn,"INVALID_CODE","invalid-verification-code"),n(m)(mn,"INVALID_SESSION_INFO","invalid-verification-id"),n(m)(mn,"INVALID_TEMPORARY_PROOF","invalid-credential"),n(m)(mn,"MISSING_SESSION_INFO","missing-verification-id"),n(m)(mn,"SESSION_EXPIRED","code-expired"),n(m)(mn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),n(m)(mn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),n(m)(mn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),n(m)(mn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),n(m)(mn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),n(m)(mn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),n(m)(mn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),n(m)(mn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),n(m)(mn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),n(m)(mn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),n(m)(mn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),mn),_n=new pn(3e4,6e4);function kn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function bn(e,t,n,r){return wn.apply(this,arguments)}function wn(){return wn=n(a)(n(u).mark((function e(t,r,i,o){var s,c=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",xn(t,s,n(a)(n(u).mark((function e(){var a,s,c,l;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),c=we(Object.assign({key:t.config.apiKey},s)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",yn.fetch()(En(t,t.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),wn.apply(this,arguments)}function xn(e,t,n){return In.apply(this,arguments)}function In(){return(In=n(a)(n(u).mark((function e(t,r,i){var o,a,s,c,l,h,f,d,p;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,o=Object.assign(Object.assign({},gn),r),e.prev=2,a=new Sn(t),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw Rn(t,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,h=n(x)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw Rn(t,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw Rn(t,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw Rn(t,"user-disabled",c);case 29:if(p=o[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw tn(t,p,d);case 34:Zt(t,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof ue)){e.next=41;break}throw e.t0;case 41:Zt(t,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Cn(e,t,n,r){return Tn.apply(this,arguments)}function Tn(){return Tn=n(a)(n(u).mark((function e(t,r,i,o){var a,s,c=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,bn(t,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Tn.apply(this,arguments)}function En(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?vn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Sn=function(){"use strict";function e(t){var r=this;n(l)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(en(n.auth,"network-request-failed"))}),_n.get())}))}return n(h)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Rn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=en(e,t,r);return i.customData._tokenResponse=n,i}function Nn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=
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
n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bn(t,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function On(e,t){return An.apply(this,arguments)}function An(){return(An=n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bn(t,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */function Ln(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Dn(){return Dn=n(a)(n(u).mark((function e(t){var r,i,o,a,s,c,l=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Pe(t),e.next=4,i.getIdToken(r);case 4:return o=e.sent,rn((a=Un(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:Ln(Mn(a.auth_time)),issuedAtTime:Ln(Mn(a.iat)),expirationTime:Ln(Mn(a.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Dn.apply(this,arguments)}function Mn(e){return 1e3*Number(e)}function Un(e){var t=n(x)(e.split("."),3),r=t[0],i=t[1],o=t[2];if(void 0===r||void 0===i||void 0===o)return $t("JWT malformed, contained fewer than 3 sections"),null;try{var a=ee(i);return a?JSON.parse(a):($t("Failed to decode base64 JWT payload"),null)}catch(e){return $t("Caught error parsing JWT payload as JSON",e),null}}function Fn(e,t){return jn.apply(this,arguments)}function jn(){return jn=
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
n(a)(n(u).mark((function e(t,r){var i=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ue&&Bn(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),jn.apply(this,arguments)}function Bn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Wn=function(){"use strict";function e(t){n(l)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n(h)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout(n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===t.t0.code&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}]),e}(),qn=function(){"use strict";function e(t,r){n(l)(this,e),this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}return n(h)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
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
 */function zn(e){return Hn.apply(this,arguments)}function Hn(){return(Hn=
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
n(a)(n(u).mark((function e(t){var r,i,o,a,s,c,l,h,f,d,p;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return o=e.sent,e.next=7,Fn(t,On(i,{idToken:o}));case 7:rn(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],t._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Gn(s.providerUserInfo):[],l=Kn(t.providerData,c),h=t.isAnonymous,f=!(t.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qn(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(t,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Vn(){return(Vn=n(a)(n(u).mark((function e(t){var r;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Pe(t),e.next=3,zn(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Kn(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return n(y)(r).concat(n(y)(t))}function Gn(e){return e.map((function(e){var t=e.providerId,n=Gt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Yn(e,t){return Jn.apply(this,arguments)}function Jn(){return(Jn=
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
n(a)(n(u).mark((function e(t,r){var i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xn(t,{},n(a)(n(u).mark((function e(){var i,o,a,s,c,l;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=we({grant_type:"refresh_token",refresh_token:r}).slice(1),o=t.config,a=o.tokenApiHost,s=o.apiKey,c=En(t,a,"/v1/token","key=".concat(s)),e.next=5,t._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",yn.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var Qn=function(){"use strict";function e(){n(l)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return n(h)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){rn(e.idToken,"internal-error"),rn(void 0!==e.idToken,"internal-error"),rn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,rn(n=Un(t),"internal-error"),rn(void 0!==n.exp,"internal-error"),rn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(a)(n(u).mark((function i(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(rn(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired){n.next=3;break}return n.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){n.next=7;break}return n.next=6,r.refresh(e,r.refreshToken);case 6:return n.abrupt("return",r.accessToken);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n(a)(n(u).mark((function i(){var o,a,s,c;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Yn(e,t);case 2:o=n.sent,a=o.accessToken,s=o.refreshToken,c=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(c));case 7:case"end":return n.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return on("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(rn("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(rn("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(rn("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
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
 */function Xn(e,t){rn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var $n=function(){"use strict";function e(t){n(l)(this,e);var r=t.uid,i=t.auth,o=t.stsTokenManager,a=Gt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?n(y)(a.providerData):[],this.metadata=new qn(a.createdAt||void 0,a.lastLoginAt||void 0)}return n(h)(e,[{key:"getIdToken",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Fn(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(rn(i=n.sent,t.auth,"internal-error"),t.accessToken===i){n.next=9;break}return t.accessToken=i,n.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Dn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Vn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(rn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){rn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(a)(n(u).mark((function i(){var o;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),o=!0),!t){n.next=5;break}return n.next=5,zn(r);case 5:return n.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return n.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,Fn(e,Nn(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,x=n.stsTokenManager;rn(_&&x,t,"internal-error");var I=Qn.fromJSON(this.name,x);rn("string"==typeof _,t,"internal-error"),Xn(h,t.name),Xn(f,t.name),rn("boolean"==typeof k,t,"internal-error"),rn("boolean"==typeof b,t,"internal-error"),Xn(d,t.name),Xn(p,t.name),Xn(v,t.name),Xn(m,t.name),Xn(y,t.name),Xn(g,t.name);var C=new e({uid:_,auth:t,email:f,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:I,createdAt:y,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(a)(n(u).mark((function o(){var a,s;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new Qn).updateFromServerResponse(r),s=new e({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:i}),n.next=5,zn(s);case 5:return n.abrupt("return",s);case 6:case"end":return n.stop()}}),o)})))()}}]),e}(),Zn=function(){"use strict";function e(){n(l)(this,e),this.type="NONE",this.storage={}}return n(h)(e,[{key:"_isAvailable",value:function(){return n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var r=this;return n(a)(n(u).mark((function i(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.storage[e]=t;case 1:case"end":return n.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.storage[e],n.abrupt("return",void 0===i?null:i);case 2:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:delete t.storage[e];case 1:case"end":return n.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */Zn.type="NONE";var er=Zn;
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
 */function tr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var nr=function(){"use strict";function e(t,r,i){n(l)(this,e),this.persistence=t,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=tr(this.userKey,a.apiKey,s),this.fullPersistenceKey=tr("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n(h)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?$n._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.persistence!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.getCurrentUser();case 4:return i=n.sent,n.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){n.next=10;break}return n.abrupt("return",t.setCurrentUser(i));case 10:case"end":return n.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n(a)(n(u).mark((function o(){var s,c,l,h,f,d,p,v,m,y,g,_,k;return n(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new e(un(er),t,i));case 2:return o.next=4,Promise.all(r.map(function(){var e=n(a)(n(u).mark((function e(t){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),c=s[0]||un(er),l=tr(i,t.config.apiKey,t.name),h=null,f=!0,d=!1,p=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(f=(m=v.next()).done){o.next=29;break}return y=m.value,o.prev=13,o.next=16,y._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return _=$n._fromJSON(t,g),y!==c&&(h=_),c=y,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,p=o.t1;case 35:o.prev=35,o.prev=36,f||null==v.return||v.return();case 38:if(o.prev=38,!d){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new e(c,t,i));case 46:if(c=k[0],!h){o.next=50;break}return o.next=50,c._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var e=n(a)(n(u).mark((function e(t){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===c){e.next=8;break}return e.prev=1,e.next=4,t._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(c,t,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
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
 */function rr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ir(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cr(t))return"Blackberry";if(lr(t))return"Webos";if(or(t))return"Safari";if((t.includes("chrome/")||ar(t))&&!t.includes("edge/"))return"Chrome";if(ur(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function ir(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/firefox\//i.test(e)}function or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ar(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/crios\//i.test(e)}function sr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/iemobile/i.test(e)}function ur(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/android/i.test(e)}function cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/blackberry/i.test(e)}function lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/webos/i.test(e)}function hr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/iphone|ipad|ipod/i.test(e)}function fr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return hr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function dr(){return((e=ie()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return hr(e)||ur(e)||lr(e)||cr(e)||/windows phone/i.test(e)||sr(e)}
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
function vr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=rr(ie());break;case"Worker":t="".concat(rr(ie()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Tt,"/").concat(r)}
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
 */var mr=function(){"use strict";function e(t){n(l)(this,e),this.auth=t,this.queue=[]}return n(h)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o,a,s,c,l,h,f,d,p,v,m,y,g;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.auth.currentUser!==e){n.next=3;break}return n.abrupt("return");case 3:o=[],n.prev=4,a=!0,s=!1,c=void 0,n.prev=6,l=t.queue[Symbol.iterator]();case 8:if(a=(h=l.next()).done){n.next=16;break}return f=h.value,n.next=12,f(e);case 12:f.onAbort&&o.push(f.onAbort);case 13:a=!0,n.next=8;break;case 16:n.next=22;break;case 18:n.prev=18,n.t0=n.catch(6),s=!0,c=n.t0;case 22:n.prev=22,n.prev=23,a||null==l.return||l.return();case 25:if(n.prev=25,!s){n.next=28;break}throw c;case 28:return n.finish(25);case 29:return n.finish(22);case 30:n.next=53;break;case 32:for(n.prev=32,n.t1=n.catch(4),o.reverse(),d=!0,p=!1,v=void 0,n.prev=36,m=o[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){g=y.value;try{g()}catch(e){}}n.next=44;break;case 40:n.prev=40,n.t2=n.catch(36),p=!0,v=n.t2;case 44:n.prev=44,n.prev=45,d||null==m.return||m.return();case 47:if(n.prev=47,!p){n.next=50;break}throw v;case 50:return n.finish(47);case 51:return n.finish(44);case 52:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=n.t1)||void 0===i?void 0:i.message});case 53:case"end":return n.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),yr=function(){"use strict";function e(t,r,i){n(l)(this,e),this.app=t,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _r(this),this.idTokenSubscription=new _r(this),this.beforeStateQueue=new mr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return n(h)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=un(t));var r=this;return this._initializationPromise=this.queue(n(a)(n(u).mark((function i(){var o,a;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,nr.create(r,e);case 5:if(r.persistenceManager=n.sent,!r._deleted){n.next=8;break}return n.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){n.next=16;break}return n.prev=9,n.next=12,r._popupRedirectResolver._initialize(r);case 12:n.next=16;break;case 14:n.prev=14,n.t0=n.catch(9);case 16:return n.next=18,r.initializeCurrentUser(t);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){n.next=21;break}return n.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return n.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o,a,s,c,l,h;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t.assertedPersistence.getCurrentUser();case 3:if(o=n.sent,a=o,s=!1,!e||!t.config.authDomain){n.next=15;break}return n.next=9,t.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==a?void 0:a._redirectEventId,n.next=13,t.tryRedirectSignIn(e);case 13:h=n.sent,c&&c!==l||!(null==h?void 0:h.user)||(a=h.user,s=!0);case 15:if(a){n.next=17;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 17:if(a._redirectEventId){n.next=33;break}if(!s){n.next=28;break}return n.prev=19,n.next=22,t.beforeStateQueue.runMiddleware(a);case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(19),a=o,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(n.t0)}));case 28:if(!a){n.next=32;break}return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(a));case 32:return n.abrupt("return",t.directlySetCurrentUser(null));case 33:return rn(t._popupRedirectResolver,t,"argument-error"),n.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==a._redirectEventId){n.next=38;break}return n.abrupt("return",t.directlySetCurrentUser(a));case 38:return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return n.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=null,n.prev=1,n.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=n.sent,n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,t._setRedirectUser(null);case 11:return n.abrupt("return",i);case 12:case"end":return n.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,zn(e);case 3:n.next=9;break;case 5:if(n.prev=5,n.t0=n.catch(0),"auth/network-request-failed"===n.t0.code){n.next=9;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 9:return n.abrupt("return",t.directlySetCurrentUser(e));case 10:case"end":return n.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=e?Pe(e):null)&&rn(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),n.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return n.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(a)(n(u).mark((function i(){return n(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&rn(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.assertedPersistence.setPersistence(un(e));case 2:case"end":return n.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ce("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n(a)(n(u).mark((function i(){var o;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getOrInitRedirectPersistenceManager(t);case 2:return o=n.sent,n.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return n.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.redirectPersistenceManager){n.next=9;break}return rn(i=e&&un(e)||t._popupRedirectResolver,t,"argument-error"),n.next=5,nr.create(t,[un(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=n.sent,n.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=n.sent;case 9:return n.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return n.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o;return n(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t._isInitialized){r.next=4;break}return r.next=4,t.queue(n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",t._currentUser);case 6:if((null===(o=t.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",t.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==t.currentUser){r.next=2;break}return r.abrupt("return",t.queue(n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return n.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return rn(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.currentUser&&t.currentUser!==e&&(t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh()),t.currentUser=e,!e){n.next=7;break}return n.next=5,t.assertedPersistence.setCurrentUser(e);case 5:n.next=9;break;case 7:return n.next=9,t.assertedPersistence.removeCurrentUser();case 9:case"end":return n.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return rn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i,o;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n(m)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=t.sent)&&(i["X-Firebase-Client"]=o),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
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
 */function gr(e){return Pe(e)}var _r=function(){"use strict";function e(t){var r,i,o=this;n(l)(this,e),this.auth=t,this.observer=null,this.addObserver=(i=new Te((function(e){return o.observer=e}),r)).subscribe.bind(i)}return n(h)(e,[{key:"next",get:function(){return rn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
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
var kr=function(){"use strict";function e(t,r){n(l)(this,e),this.providerId=t,this.signInMethod=r}return n(h)(e,[{key:"toJSON",value:function(){return on("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return on("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return on("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return on("not implemented")}}]),e}();function br(e,t){return wr.apply(this,arguments)}function wr(){return(wr=n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bn(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xr(e,t){return Ir.apply(this,arguments)}function Ir(){return(Ir=
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
n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cn(t,"POST","/v1/accounts:signInWithPassword",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Cr(e,t){return Tr.apply(this,arguments)}function Tr(){return(Tr=
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
n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cn(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Er(e,t){return Sr.apply(this,arguments)}function Sr(){return(Sr=n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cn(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var Rr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n(l)(this,r),(a=t.call(this,"password",o))._email=e,a._password=i,a._tenantId=s,a}return n(h)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",xr(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return n.abrupt("return",Cr(e,{email:t._email,oobCode:t._password}));case 5:Zt(e,"internal-error");case 6:case"end":return n.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n(a)(n(u).mark((function i(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",br(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return n.abrupt("return",Er(e,{idToken:t,email:r._email,oobCode:r._password}));case 5:Zt(e,"internal-error");case 6:case"end":return n.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(kr);function Nr(e,t){return Pr.apply(this,arguments)}function Pr(){return(Pr=
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
n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cn(t,"POST","/v1/accounts:signInWithIdp",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var Or=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){var e;return n(l)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return n(h)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Nr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Nr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Nr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=we(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=Gt(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(kr);function Ar(e,t){return Lr.apply(this,arguments)}function Lr(){return(Lr=
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
n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bn(t,"POST","/v1/accounts:sendVerificationCode",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Dr(){return(Dr=n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cn(t,"POST","/v1/accounts:signInWithPhoneNumber",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mr(){return(Mr=n(a)(n(u).mark((function e(t,r){var i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Cn(t,"POST","/v1/accounts:signInWithPhoneNumber",kn(t,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Rn(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ur=n(m)({},"USER_NOT_FOUND","user-not-found");function Fr(){return(Fr=n(a)(n(u).mark((function e(t,r){var i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Cn(t,"POST","/v1/accounts:signInWithPhoneNumber",kn(t,i),Ur));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var jr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e){var i;return n(l)(this,r),(i=t.call(this,"phone","phone")).params=e,i}return n(h)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Dr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Mr.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Fr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(kr);
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
 */var Br=function(){"use strict";function e(t){var r,i,o,a,s,u;n(l)(this,e);var c=xe(Ie(t)),h=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);rn(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return n(h)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=xe(Ie(e)).link,n=t?xe(Ie(t)).deep_link_id:null,r=xe(Ie(e)).deep_link_id;return(r?xe(Ie(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var Wr=function(){"use strict";function e(){n(l)(this,e),this.providerId=e.PROVIDER_ID}return n(h)(e,null,[{key:"credential",value:function(e,t){return Rr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Br.parseLink(t);return rn(n,"argument-error"),Rr._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();Wr.PROVIDER_ID="password",Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var qr=function(){"use strict";function e(t){n(l)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return n(h)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),zr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){var e;return n(l)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return n(h)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return n(y)(this.scopes)}}]),r}(qr),Hr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.call(this,"facebook.com")}return n(h)(r,null,[{key:"credential",value:function(e){return Or._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zr);
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
 */Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com",Hr.PROVIDER_ID="facebook.com";
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
var Vr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){var e;return n(l)(this,r),(e=t.call(this,"google.com")).addScope("profile"),e}return n(h)(r,null,[{key:"credential",value:function(e,t){return Or._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zr);Vr.GOOGLE_SIGN_IN_METHOD="google.com",Vr.PROVIDER_ID="google.com";
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
var Kr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.call(this,"github.com")}return n(h)(r,null,[{key:"credential",value:function(e){return Or._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zr);Kr.GITHUB_SIGN_IN_METHOD="github.com",Kr.PROVIDER_ID="github.com";
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
var Gr=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.call(this,"twitter.com")}return n(h)(r,null,[{key:"credential",value:function(e,t){return Or._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zr);function Yr(e,t){return Jr.apply(this,arguments)}function Jr(){return(Jr=
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
n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cn(t,"POST","/v1/accounts:signUp",kn(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */Gr.TWITTER_SIGN_IN_METHOD="twitter.com",Gr.PROVIDER_ID="twitter.com";var Qr=function(){"use strict";function e(t){n(l)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return n(h)(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n(a)(n(u).mark((function a(){var s,c,l;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$n._fromIdTokenResponse(t,i,o);case 2:return s=n.sent,c=Xr(i),l=new e({user:s,providerId:c,_tokenResponse:i,operationType:r}),n.abrupt("return",l);case 6:case"end":return n.stop()}}),a)})))()}},{key:"_forOperation",value:function(t,r,i){return n(a)(n(u).mark((function o(){var a;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._updateTokensIfNecessary(i,!0);case 2:return a=Xr(i),n.abrupt("return",new e({user:t,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return n.stop()}}),o)})))()}}]),e}();function Xr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var $r=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i,o,a){var s,u;return n(l)(this,r),(s=t.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(n(R)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return n(h)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ue);function Zr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw $r._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function ei(e,t){return ti.apply(this,arguments)}function ti(){return ti=n(a)(n(u).mark((function e(t,r){var i,o,a=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=Fn,e.t1=t,e.t2=r,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",Qr._forOperation(t,"link",o));case 14:case"end":return e.stop()}}),e)}))),ti.apply(this,arguments)}function ni(e,t){return ri.apply(this,arguments)}function ri(){return ri=
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
n(a)(n(u).mark((function e(t,r){var i,o,a,s,c,l,h=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],o=t.auth,a="reauthenticate",e.prev=3,e.next=6,Fn(t,Zr(o,a,r,t),i);case 6:return rn((s=e.sent).idToken,o,"internal-error"),rn(c=Un(s.idToken),o,"internal-error"),l=c.sub,rn(t.uid===l,o,"user-mismatch"),e.abrupt("return",Qr._forOperation(t,a,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Zt(o,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),ri.apply(this,arguments)}function ii(e,t){return oi.apply(this,arguments)}function oi(){return oi=
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
n(a)(n(u).mark((function e(t,r){var i,o,a,s,c=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,Zr(t,o,r);case 4:return a=e.sent,e.next=7,Qr._fromIdTokenResponse(t,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),oi.apply(this,arguments)}function ai(e,t){return si.apply(this,arguments)}function si(){return(si=n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ii(gr(t),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ui(e,t,n){return ci.apply(this,arguments)}function ci(){return(ci=n(a)(n(u).mark((function e(t,r,i){var o,a,s;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=gr(t),e.next=3,Yr(o,{returnSecureToken:!0,email:r,password:i});case 3:return a=e.sent,e.next=6,Qr._fromIdTokenResponse(o,"signIn",a);case 6:return s=e.sent,e.next=9,o._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function li(e,t,n){return ai(Pe(e),Wr.credential(t,n))}function hi(e,t,n,r){return Pe(e).onAuthStateChanged(t,n,r)}function fi(e){return Pe(e).signOut()}
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
function di(e,t){return bn(e,"POST","/v2/accounts/mfaEnrollment:start",kn(e,t))}new WeakMap;var pi="__sak",vi=function(){"use strict";function e(t,r){n(l)(this,e),this.storageRetriever=t,this.type=r}return n(h)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var mi=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){var e,i;return n(l)(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(or(i=ie())||hr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=pr(),e._shouldAllowMigration=!0,e}return n(h)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);dr()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,o=this;return n(a)(n(u).mark((function a(){return n(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(zt)(n(Kt)(r.prototype),"_set",i).call(o,e,t);case 2:o.localCache[e]=JSON.stringify(t);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var t=this,i=this;return n(a)(n(u).mark((function o(){var a;return n(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(zt)(n(Kt)(r.prototype),"_get",t).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return n(a)(n(u).mark((function o(){return n(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(zt)(n(Kt)(r.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(vi);mi.type="LOCAL";var yi=mi,gi=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return n(h)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(vi);
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
 */gi.type="SESSION";var _i=gi;
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
 */function ki(e){return Promise.all(e.map((t=n(a)(n(u).mark((function e(t){var r;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
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
 */var bi=function(){"use strict";function e(t){n(l)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return n(h)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o,s,c,l,h,f,d;return n(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=e).data,s=o.eventId,c=o.eventType,l=o.data,null==(h=t.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),f=Array.from(h).map(function(){var e=n(a)(n(u).mark((function e(t){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,ki(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
function wi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */bi.receivers=[];var xi=function(){"use strict";function e(t){n(l)(this,e),this.target=t,this.handlers=new Set}return n(h)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return n(a)(n(u).mark((function o(){var a,s,c;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){n.next=3;break}throw new Error("connection_unavailable");case 3:return n.abrupt("return",new Promise((function(n,o){var u=wi("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);c={messageChannel:a,onMessage:function(e){var t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),n(t.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:u,data:t},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return n.stop()}}),o)})))()}}]),e}();
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
 */function Ii(){return window}
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
 */
function Ci(){return void 0!==Ii().WorkerGlobalScope&&"function"==typeof Ii().importScripts}function Ti(){return Ei.apply(this,arguments)}function Ei(){return(Ei=n(a)(n(u).mark((function e(){var t;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
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
var Si="firebaseLocalStorageDb",Ri="firebaseLocalStorage",Ni="fbase_key",Pi=function(){"use strict";function e(t){n(l)(this,e),this.request=t}return n(h)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Oi(e,t){return e.transaction([Ri],t?"readwrite":"readonly").objectStore(Ri)}function Ai(){var e=indexedDB.deleteDatabase(Si);return new Pi(e).toPromise()}function Li(){var e=indexedDB.open(Si,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Ri,{keyPath:Ni})}catch(e){r(e)}})),e.addEventListener("success",n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((i=e.result).objectStoreNames.contains(Ri)){n.next=12;break}return i.close(),n.next=5,Ai();case 5:return n.t0=t,n.next=8,Li();case 8:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 12:t(i);case 13:case"end":return n.stop()}}),r)}))))}))}function Di(e,t,n){return Mi.apply(this,arguments)}function Mi(){return(Mi=n(a)(n(u).mark((function e(t,r,i){var o,a;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Oi(t,!0).put((o={},n(m)(o,Ni,r),n(m)(o,"value",i),o)),e.abrupt("return",new Pi(a).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ui(e,t){return Fi.apply(this,arguments)}function Fi(){return(Fi=n(a)(n(u).mark((function e(t,r){var i,o;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Oi(t,!1).get(r),e.next=3,new Pi(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ji(e,t){var n=Oi(e,!0).delete(t);return new Pi(n).toPromise()}var Bi=function(){"use strict";function e(){n(l)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return n(h)(e,[{key:"_openDb",value:function(){var e=this;return n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Li();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=0;case 1:return n.prev=2,n.next=5,t._openDb();case 5:return o=n.sent,n.next=8,e(o);case 8:return n.abrupt("return",n.sent);case 11:if(n.prev=11,n.t0=n.catch(2),!(i++>3)){n.next=15;break}throw n.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:n.next=1;break;case 18:case"end":return n.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ci()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=bi._getInstance(Ci()?self:null),e.receiver._subscribe("keyChanged",function(){var t=n(a)(n(u).mark((function t(r,i){var o;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=n(a)(n(u).mark((function e(t,r){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i,o;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Ti();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new xi(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.sender&&t.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===t.activeServiceWorker)){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(2);case 9:case"end":return n.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return n(a)(n(u).mark((function e(){var t;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Li();case 5:return t=e.sent,e.next=8,Di(t,pi,"1");case 8:return e.next=10,ji(t,pi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.pendingWrites++,n.prev=1,n.next=4,e();case 4:return n.prev=4,t.pendingWrites--,n.finish(4);case 7:case"end":return n.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var r=this;return n(a)(n(u).mark((function i(){return n(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(n(a)(n(u).mark((function i(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._withRetries((function(n){return Di(n,e,t)}));case 2:return r.localCache[e]=t,n.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return Ui(t,e)}));case 2:return i=n.sent,t.localCache[e]=i,n.abrupt("return",i);case 5:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(a)(n(u).mark((function r(){return n(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t._withPendingWrite(n(a)(n(u).mark((function r(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return ji(t,e)}));case 2:return delete t.localCache[e],n.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i,o,a,s,c,l,h,f,d,p,v,m,y,g,_,k;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Oi(e,!1).getAll();return new Pi(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,c=void 0,t.prev=10,l=r[Symbol.iterator]();!(a=(h=l.next()).done);a=!0)f=h.value,d=f.fbase_key,p=f.value,o.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(p)&&(e.notifyListeners(d,p),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,c=t.t0;case 18:t.prev=18,t.prev=19,a||null==l.return||l.return();case 21:if(t.prev=21,!s){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,y=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(_=g.next()).done);v=!0)k=_.value,e.localCache[k]&&!o.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,y=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!m){t.next=41;break}throw y;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n(a)(n(u).mark((function t(){return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Bi.type="LOCAL";var Wi=Bi;
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
 */function qi(e,t){return bn(e,"POST","/v2/accounts/mfaSignIn:start",kn(e,t))}function zi(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=en("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function Hi(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Hi("rcb"),new pn(3e4,6e4);var Vi="recaptcha";
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
 */function Ki(e,t,n){return Gi.apply(this,arguments)}function Gi(){return(Gi=n(a)(n(u).mark((function e(t,r,i){var o,a,s,c,l,h,f,d;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,rn("string"==typeof a,t,"argument-error"),rn(i.type===Vi,t,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return rn("enroll"===c.type,t,"internal-error"),e.next=15,di(t,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return rn("signin"===c.type,t,"internal-error"),rn(h=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,qi(t,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:a}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Ar(t,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Yi=function(){"use strict";function e(t){n(l)(this,e),this.providerId=e.PROVIDER_ID,this.auth=gr(t)}return n(h)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Ki(this.auth,e,Pe(t))}}],[{key:"credential",value:function(e,t){return jr._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?jr._fromTokenResponse(n,r):null}}]),e}();
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
function Ji(e,t){return t?un(t):(rn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Yi.PROVIDER_ID="phone",Yi.PHONE_SIGN_IN_METHOD="phone";var Qi=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e){var i;return n(l)(this,r),(i=t.call(this,"custom","custom")).params=e,i}return n(h)(r,[{key:"_getIdTokenResponse",value:function(e){return Nr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Nr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Nr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(kr);function Xi(e){return ii(e.auth,new Qi(e),e.bypassAuthState)}function $i(e){var t=e.auth,n=e.user;return rn(n,t,"internal-error"),ni(n,new Qi(e),e.bypassAuthState)}function Zi(e){return eo.apply(this,arguments)}function eo(){return(eo=n(a)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,rn(i=t.user,r,"internal-error"),e.abrupt("return",ei(i,new Qi(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var to=function(){"use strict";function e(t,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n(l)(this,e),this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return n(h)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n(a)(n(u).mark((function e(r,i){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o,a,s,c,l,h;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,c=e.error,l=e.type,!c){n.next=4;break}return t.reject(c),n.abrupt("return");case 4:return h={auth:t.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:t.user,bypassAuthState:t.bypassAuthState},n.prev=5,n.t0=t,n.next=9,t.getIdpTask(l)(h);case 9:n.t1=n.sent,n.t0.resolve.call(n.t0,n.t1),n.next=16;break;case 13:n.prev=13,n.t2=n.catch(5),t.reject(n.t2);case 16:case"end":return n.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xi;case"linkViaPopup":case"linkViaRedirect":return Zi;case"reauthViaPopup":case"reauthViaRedirect":return $i;default:Zt(this.auth,"internal-error")}}},{key:"resolve",value:function(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),no=new pn(2e3,1e4);
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
 */var ro=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i,o,a,s){var u;return n(l)(this,r),(u=t.call(this,e,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=n(R)(u),u}return n(h)(r,[{key:"executeNotNull",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return rn(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return an(1===e.filter.length,"Popup operations only handle one event"),r=wi(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(en(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(en(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(en(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,no.get())};t()}}]),r}(to);ro.currentPopupAction=null;
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
var io=new Map,oo=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(l)(this,r),(o=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return n(h)(r,[{key:"execute",value:function(){var e=this,t=this;return n(a)(n(u).mark((function i(){var o,a;return n(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=io.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ao(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,n(zt)(n(Kt)(r.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:io.set(t.auth._key(),o);case 21:return t.bypassAuthState||io.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,o=function(){return n(zt)(n(Kt)(r.prototype),"onAuthEvent",t)};return n(a)(n(u).mark((function t(){var r;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(to);function ao(e,t){return so.apply(this,arguments)}function so(){return(so=n(a)(n(u).mark((function e(t,r){var i,o,a;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=lo(r),o=co(t),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function uo(e,t){io.set(e._key(),t)}function co(e){return un(e._redirectPersistence)}function lo(e){return tr("pendingRedirect",e.config.apiKey,e.name)}
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
 */function ho(e,t){return fo.apply(this,arguments)}function fo(){return fo=n(a)(n(u).mark((function e(t,r){var i,o,a,s,c,l=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=gr(t),a=Ji(o,r),s=new oo(o,a,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),fo.apply(this,arguments)}
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
var po=function(){"use strict";function e(t){n(l)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n(h)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mo(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!mo(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(en(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(vo(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(vo(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function vo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function mo(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function yo(e){return go.apply(this,arguments)}function go(){return go=
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
n(a)(n(u).mark((function e(t){var r,i=arguments;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",bn(t,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),go.apply(this,arguments)}
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
 */var _o=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ko=/^https?/;function bo(){return(bo=n(a)(n(u).mark((function e(t){var r,i,o,a,s,c,l;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,yo(t);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!wo(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Zt(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function wo(e){var t=ln(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!ko.test(r))return!1;if(_o.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
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
 */var xo=new pn(3e4,6e4);function Io(){var e=Ii().___jsl,t=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=n(y)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}var Co=null;function To(e){return Co=Co||function(e){return new Promise((function(t,n){var r,i,o;function a(){Io(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Io(),n(en(e,"network-request-failed"))},timeout:xo.get()})}if(null===(i=null===(r=Ii().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ii().gapi)||void 0===o?void 0:o.load)){var s=Hi("iframefcb");return Ii()[s]=function(){gapi.load?a():n(en(e,"network-request-failed"))},zi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Co=null,e}))}(e),Co}
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
 */var Eo=new pn(5e3,15e3),So={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ro=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function No(e){var t=e.config;rn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?vn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Tt},i=Ro.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(we(r).slice(1))}function Po(e){return Oo.apply(this,arguments)}function Oo(){return Oo=n(a)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,To(t);case 2:return r=e.sent,rn(i=Ii().gapi,t,"internal-error"),e.abrupt("return",r.open({where:document.body,url:No(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:So,dontclear:!0},(function(e){return new Promise((r=n(a)(n(u).mark((function r(i,o){var a,s,c;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(){Ii().clearTimeout(s),i(e)},n.next=3,e.restyle({setHideOnLeave:!1});case 3:a=en(t,"network-request-failed"),s=Ii().setTimeout((function(){o(a)}),Eo.get()),e.ping(c).then(c,(function(){o(a)}));case 7:case"end":return n.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Oo.apply(this,arguments)}
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
 */var Ao={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lo="_blank",Do="http://localhost",Mo=function(){"use strict";function e(t){n(l)(this,e),this.window=t,this.associatedEvent=null}return n(h)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Uo(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ao),{width:i.toString(),height:o.toString(),top:a,left:s}),l=ie().toLowerCase();r&&(u=ar(l)?Lo:r),ir(l)&&(t=t||Do,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,t){var r=n(x)(t,2),i=r[0],o=r[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(fr(l)&&"_self"!==u)return Fo(t||"",u),new Mo(null);var f=window.open(t||"",u,h);rn(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Mo(f)}function Fo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var jo="__/auth/handler",Bo="emulator/auth/handler";function Wo(e,t,r,i,o,a){rn(e.config.authDomain,e,"auth-domain-config-required"),rn(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:Tt,eventId:o};if(t instanceof qr){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ge(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(a||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=n(x)(h.value,2),p=d[0],v=d[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(t instanceof zr){var m=t.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var y,g,_=s,k=!0,b=!1,w=void 0;try{for(var I,C=Object.keys(_)[Symbol.iterator]();!(k=(I=C.next()).done);k=!0){var T=I.value;void 0===_[T]&&delete _[T]}}catch(e){b=!0,w=e}finally{try{k||null==C.return||C.return()}finally{if(b)throw w}}return"".concat((y=e,g=y.config,g.emulator?vn(g,Bo):"https://".concat(g.authDomain,"/").concat(jo)),"?").concat(we(_).slice(1))}
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
var qo="webStorageSupport",zo=function(){"use strict";function e(){n(l)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_i,this._completeRedirectFn=ho,this._overrideRedirectResult=uo}return n(h)(e,[{key:"_openPopup",value:function(e,t,r,i){var o=this;return n(a)(n(u).mark((function a(){var s,c;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return an(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=Wo(e,t,r,ln(),i),n.abrupt("return",Uo(e,c,wi()));case 4:case"end":return n.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,t,r,i){var o=this;return n(a)(n(u).mark((function a(){return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o._originValidation(e);case 2:return a=Wo(e,t,r,ln(),i),Ii().location.href=a,n.abrupt("return",new Promise((function(){})));case 4:case"end":return n.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(an(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i,o;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Po(e);case 2:return i=n.sent,o=new po(e),i.register("authEvent",(function(t){return rn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:o},t.iframes[e._key()]=i,n.abrupt("return",o);case 8:case"end":return n.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(qo,{type:qo},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Zt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return bo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return pr()||or()||hr()}}]),e}(),Ho=zo,Vo=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e){var i;return n(l)(this,r),(i=t.call(this,"phone")).credential=e,i}return n(h)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return bn(e,"POST","/v2/accounts/mfaEnrollment:finalize",kn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return bn(e,"POST","/v2/accounts/mfaSignIn:finalize",kn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(t){n(l)(this,e),this.factorId=t}return n(h)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return on("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){n(l)(this,e)}return n(h)(e,null,[{key:"assertion",value:function(e){return Vo._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Ko,Go="@firebase/auth",Yo="0.20.3",Jo=function(){"use strict";function e(t){n(l)(this,e),this.auth=t,this.internalListeners=new Map}return n(h)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n(a)(n(u).mark((function r(){var i;return n(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.assertAuthConfigured(),n.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){n.next=5;break}return n.abrupt("return",null);case 5:return n.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=n.sent,n.abrupt("return",{accessToken:i});case 9:case"end":return n.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){rn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();Ko="Browser",bt(new Oe("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){rn(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),rn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:Ko,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vr(Ko)},i=new yr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),bt(new Oe("auth-internal",(function(e){var t=gr(e.getProvider("auth").getImmediate());return new Jo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),St(Go,Yo,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ko)),St(Go,Yo,"esm2017");R=o("ds8z5");var Qo=o("l5bVx"),Xo=o("6qd2L"),$o="@firebase/database",Zo="0.13.1",ea="";
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
var ta,na=function(){"use strict";function e(t){n(l)(this,e),this.domStorage_=t,this.prefix_="firebase:"}return n(h)(e,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:fe(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),e}(),ra=function(){"use strict";function e(){n(l)(this,e),this.cache_={},this.isInMemoryStorage=!0}return n(h)(e,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return me(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),e}(),ia=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new na(t)}}catch(e){}return new ra},oa=ia("localStorage"),aa=ia("sessionStorage"),sa=new He("@firebase/database"),ua=(ta=1,function(){return ta++}),ca=function(e){var t=Re(e),n=new Ce;n.update(t);var r=n.digest();return X.encodeByteArray(r)},la=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var o=t[i];Array.isArray(o)||o&&"object"==typeof o&&"number"==typeof o.length?r+=la.apply(null,o):r+="object"==typeof o?de(o):o,r+=" "}return r},ha=null,fa=!0,da=function(e,t){Y(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(sa.logLevel=De.VERBOSE,ha=sa.log.bind(sa),t&&aa.set("logging_enabled",!0)):"function"==typeof e?ha=e:(ha=null,aa.remove("logging_enabled"))},pa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===fa&&(fa=!1,null===ha&&!0===aa.get("logging_enabled")&&da(!0)),ha){var r=la.apply(null,t);ha(r)}},va=function(e){return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];pa.apply(void 0,[e].concat(n(y)(r)))}},ma=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+la.apply(void 0,n(y)(t));sa.error(i)},ya=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(la.apply(void 0,n(y)(t)));throw sa.error(i),new Error(i)},ga=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i="FIREBASE WARNING: "+la.apply(void 0,n(y)(t));sa.warn(i)},_a=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ka="[MIN_NAME]",ba="[MAX_NAME]",wa=function(e,t){if(e===t)return 0;if(e===ka||t===ba)return-1;if(t===ka||e===ba)return 1;var n=Oa(e),r=Oa(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},xa=function(e,t){return e===t?0:e<t?-1:1},Ia=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+de(t))},Ca=function(e){if("object"!=typeof e||null===e)return de(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=de(t[i]),r+=":",r+=Ca(e[t[i]]);return r+="}"},Ta=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
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
 */function Ea(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Sa=function(e){Y(!_a(e),"Invalid JSON number");var t,n,r,i,o,a=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),a))+a,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;o-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(o=0;o<64;o+=8){var l=parseInt(u.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Ra=new RegExp("^-?(0*)\\d{1,10}$"),Na=-2147483648,Pa=2147483647,Oa=function(e){if(Ra.test(e)){var t=Number(e);if(t>=Na&&t<=Pa)return t}return null},Aa=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw ga("Exception was thrown by user callback.",t),e}),Math.floor(0))}},La=function(e,t){var n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n},Da=function(){"use strict";function e(t,r){var i=this;n(l)(this,e),this.appName_=t,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return n(h)(e,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){ga('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),e}(),Ma=function(){"use strict";function e(t,r,i){var o=this;n(l)(this,e),this.appName_=t,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return o.auth_=e}))}return n(h)(e,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(pa("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ga(e)}}]),e}(),Ua=function(){"use strict";function e(t){n(l)(this,e),this.accessToken=t}return n(h)(e,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),e}();Ua.OWNER="owner";
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
var Fa="5",ja=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ba="websocket",Wa="long_polling",qa=function(){"use strict";function e(t,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];n(l)(this,e),this.secure=r,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oa.get("host:"+t)||this._host}return n(h)(e,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oa.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),e}();function za(e,t,n){var r;if(Y("string"==typeof t,"typeof type must == string"),Y("object"==typeof n,"typeof params must == object"),t===Ba)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Wa)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Ea(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
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
 */var Ha=function(){"use strict";function e(){n(l)(this,e),this.counters_={}}return n(h)(e,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return te(this.counters_)}}]),e}(),Va={},Ka={};
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
 */function Ga(e){var t=e.toString();return Va[t]||(Va[t]=new Ha),Va[t]}
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
var Ya=function(){"use strict";function e(t){n(l)(this,e),this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return n(h)(e,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Aa((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var o=0;o<i.length;++o)n(o);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),e}(),Ja="start",Qa="close",Xa=function(){"use strict";function e(t,r,i,o,a,s,u){var c=this;n(l)(this,e),this.connId=t,this.repoInfo=r,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=va(t),this.stats_=Ga(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),za(r,Wa,e)}}return n(h)(e,[{key:"open",value:function(e,t){var r=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ya(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(se()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var e=r;if(!r.isClosed_){r.scriptTagHolder=new $a((function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o=n(x)(r,5),a=o[0],s=o[1],u=o[2];o[3],o[4];if(e.incrementIncomingBytes_(r),e.scriptTagHolder)if(e.connectTimeoutTimer_&&(clearTimeout(e.connectTimeoutTimer_),e.connectTimeoutTimer_=null),e.everConnected_=!0,a===Ja)e.id=s,e.password=u;else{if(a!==Qa)throw new Error("Unrecognized command received: "+a);if(s){var c=e;e.scriptTagHolder.sendNewPolls=!1,e.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else e.onClosed_()}}),(function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o=n(x)(r,2),a=o[0],s=o[1];e.incrementIncomingBytes_(r),e.myPacketOrderer.handleResponse(a,s)}),(function(){e.onClosed_()}),r.urlFn);var t={start:"t"};t.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=r.scriptTagHolder.uniqueCallbackIdentifier),t.v=Fa,r.transportSessionId&&(t.s=r.transportSessionId),r.lastSessionId&&(t.ls=r.lastSessionId),r.applicationId&&(t.p=r.applicationId),r.appCheckToken&&(t.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&ja.test(location.hostname)&&(t.r="f");var i=r.urlFn(t);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=$(t),r=Ta(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!se()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=de(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){e.forceAllow_=!0}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!se()&&(!!e.forceAllow_||!(e.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),e}(),$a=function(){"use strict";function e(t,r,i,o){if(n(l)(this,e),this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,se())this.commandCB=t,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=ua(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=e.createIFrame_();var a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))a='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){pa("frame writing exception"),e.stack&&pa(e.stack),pa(e)}}}return n(h)(e,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;se()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){pa("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||pa("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),e}(),Za=null;
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
 */"undefined"!=typeof MozWebSocket?Za=MozWebSocket:"undefined"!=typeof WebSocket&&(Za=WebSocket);var es=function(){"use strict";function e(t,r,i,o,a,s,u){n(l)(this,e),this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=va(this.connId),this.stats_=Ga(r),this.connURL=e.connectionURL_(r,s,u,o,i),this.nodeAdmin=r.nodeAdmin}return n(h)(e,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oa.set("previous_websocket_failure",!0);try{if(se()){var r=this.nodeAdmin?"AdminNode":"Node",i={headers:{"User-Agent":"Firebase/".concat(Fa,"/").concat(ea,"/").concat(Xo.platform,"/").concat(r),"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(i.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);var o={},a=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;a&&(i.proxy={origin:a})}this.mySock=new Za(this.connURL,[],undefined)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){oa.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=fe(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(Y(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Ta(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var o={};return o.v=Fa,!se()&&"undefined"!=typeof location&&location.hostname&&ja.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),za(e,Ba,o)}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Za&&!e.forceDisallow_}},{key:"previouslyFailed",value:function(){return oa.isInMemoryStorage||!0===oa.get("previous_websocket_failure")}}]),e}();es.responsesRequiredToBeHealthy=2,es.healthyTimeout=3e4;
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
var ts=function(){"use strict";function e(t){n(l)(this,e),this.initTransports_(t)}return n(h)(e,[{key:"initTransports_",value:function(t){var n=es&&es.isAvailable(),r=n&&!es.previouslyFailed();if(t.webSocketOnly&&(n||ga("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[es];else{var i=this.transports_=[],o=!0,a=!1,s=void 0;try{for(var u,c=e.ALL_TRANSPORTS[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}e.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[Xa,es]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),e}();ts.globalTransportInitialized_=!1;
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
var ns=function(){"use strict";function e(t,r,i,o,a,s,u,c,h,f){n(l)(this,e),this.id=t,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=va("c:"+this.id+":"),this.transportManager_=new ts(r),this.log_("Connection created"),this.start_()}return n(h)(e,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=La((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Ia("t",e),n=Ia("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Ia("t",e),n=Ia("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Ia("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ma("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ma("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fa!==n&&ga("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),La((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),e}(),rs=function(){"use strict";function e(){n(l)(this,e)}return n(h)(e,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),e}(),is=function(){"use strict";function e(t){n(l)(this,e),this.allowedEvents_=t,this.listeners_={},Y(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}return n(h)(e,[{key:"trigger",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[e]))for(var o=n(y)(this.listeners_[e]),a=0;a<o.length;a++)o[a].callback.apply(o[a].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){Y(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),e}(),os=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){var e;return n(l)(this,r),(e=t.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||oe()||(window.addEventListener("online",(function(){e.online_||(e.online_=!0,e.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){e.online_&&(e.online_=!1,e.trigger("online",!1))}),!1)),e}return n(h)(r,[{key:"getInitialEvent",value:function(e){return Y("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(is),as=function(){"use strict";function e(t,r){if(n(l)(this,e),void 0===r){this.pieces_=t.split("/");for(var i=0,o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=r}return n(h)(e,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),e}();function ss(){return new as("")}function us(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function cs(e){return e.pieces_.length-e.pieceNum_}function ls(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new as(e.pieces_,t)}function hs(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function fs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function ds(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new as(t,0)}function ps(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof as)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var o=t.split("/"),a=0;a<o.length;a++)o[a].length>0&&n.push(o[a]);return new as(n,0)}function vs(e){return e.pieceNum_>=e.pieces_.length}function ms(e,t){var n=us(e),r=us(t);if(null===n)return t;if(n===r)return ms(ls(e),ls(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ys(e,t){if(cs(e)!==cs(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function gs(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(cs(e)>cs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var _s=function e(t,r){"use strict";n(l)(this,e),this.errorPrefix_=r,this.parts_=fs(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ne(this.parts_[i]);ks(this)};function ks(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+bs(e))}function bs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */var ws=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){var e,i,o;return n(l)(this,r),e=t.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(o="visibilitychange",i="hidden"):void 0!==document.mozHidden?(o="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(o="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(o="webkitvisibilitychange",i="webkitHidden")),e.visible_=!0,o&&document.addEventListener(o,(function(){var t=!document[i];t!==e.visible_&&(e.visible_=t,e.trigger("visible",t))}),!1),e}return n(h)(r,[{key:"getInitialEvent",value:function(e){return Y("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(is),xs=1e3,Is=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i,o,a,s,u,c,h){var f;if(n(l)(this,r),(f=t.call(this)).repoInfo_=e,f.applicationId_=i,f.onDataUpdate_=o,f.onConnectStatus_=a,f.onServerInfoUpdate_=s,f.authTokenProvider_=u,f.appCheckTokenProvider_=c,f.authOverride_=h,f.id=r.nextPersistentConnectionId_++,f.log_=va("p:"+f.id+":"),f.interruptReasons_={},f.listens=new Map,f.outstandingPuts_=[],f.outstandingGets_=[],f.outstandingPutCount_=0,f.outstandingGetCount_=0,f.onDisconnectRequestQueue_=[],f.connected_=!1,f.reconnectDelay_=xs,f.maxReconnectDelay_=3e5,f.securityDebugCallback_=null,f.lastSessionId=null,f.establishConnectionTimer_=null,f.visible_=!1,f.requestCBHash_={},f.requestNumber_=0,f.realtime_=null,f.authToken_=null,f.appCheckToken_=null,f.forceTokenRefresh_=!1,f.invalidAuthTokenCount_=0,f.invalidAppCheckTokenCount_=0,f.firstConnection_=!0,f.lastConnectionAttemptTime_=null,f.lastConnectionEstablishedTime_=null,h&&!se())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return ws.getInstance().on("visible",f.onVisible_,n(R)(f)),-1===e.host.indexOf("fblocal")&&os.getInstance().on("online",f.onOnline_,n(R)(f)),f}return n(h)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(de(i)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){var t=this;this.initConnection_();var n=new re,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:function(e){var i=e.d;"ok"===e.s?(t.onDataUpdate_(r.p,i,!1,null),n.resolve(i)):n.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;var o=this.outstandingGets_.length-1;return this.connected_||setTimeout((function(){var e=t.outstandingGets_[o];void 0!==e&&i===e&&(delete t.outstandingGets_[o],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),t.log_("get "+o+" timed out on connection"),n.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(o),n.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,(function(a){var s=a.d,u=a.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",a),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=pe(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=ve(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+de(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ma("Unrecognized action received from server: "+de(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=xs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var e=this;return n(a)(n(u).mark((function t(){var i,o,a,s,c,l,h,f,d,p,v,m,y;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.shouldReconnect_()){t.next=31;break}return e.log_("Making a connection attempt"),e.lastConnectionAttemptTime_=(new Date).getTime(),e.lastConnectionEstablishedTime_=null,i=e.onDataMessage_.bind(e),o=e.onReady_.bind(e),a=e.onRealtimeDisconnect_.bind(e),s=e.id+":"+r.nextConnectionId_++,c=e.lastSessionId,l=!1,h=null,f=function(){h?h.close():(l=!0,a())},d=function(e){Y(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},e.realtime_={close:f,sendRequest:d},p=e.forceTokenRefresh_,e.forceTokenRefresh_=!1,t.prev=16,t.t0=n(x),t.next=20,Promise.all([e.authTokenProvider_.getToken(p),e.appCheckTokenProvider_.getToken(p)]);case 20:t.t1=t.sent,v=(0,t.t0)(t.t1,2),m=v[0],y=v[1],l?pa("getToken() completed but was canceled"):(pa("getToken() completed. Creating connection."),e.authToken_=m&&m.accessToken,e.appCheckToken_=y&&y.token,h=new ns(s,e.repoInfo_,e.applicationId_,e.appCheckToken_,e.authToken_,i,o,a,(function(t){ga(t+" ("+e.repoInfo_.toString()+")"),e.interrupt("server_kill")}),c)),t.next=31;break;case 27:t.prev=27,t.t2=t.catch(16),e.log_("Failed to get token: "+t.t2),l||(e.repoInfo_.nodeAdmin&&ga(t.t2),f());case 31:case"end":return t.stop()}}),t,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){pa("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){pa("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ge(this.interruptReasons_)&&(this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Ca(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new as(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){pa("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){pa("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,o=void 0;try{for(var a,s=this.listens.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";se()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ea.replace(/\./g,"-")]=1,oe()?e["framework.cordova"]=1:ae()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=os.getInstance().currentlyOnline();return ge(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&me(e,"w")){var n=ye(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ga("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(rs);
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
 */Is.nextPersistentConnectionId_=0,Is.nextConnectionId_=0;
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
var Cs,Ts=function(){"use strict";function e(t,r){n(l)(this,e),this.name=t,this.node=r}return n(h)(e,null,[{key:"Wrap",value:function(t,n){return new e(t,n)}}]),e}(),Es=function(){"use strict";function e(){n(l)(this,e)}return n(h)(e,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Ts(ka,e),r=new Ts(ka,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Ts.MIN}}]),e}(),Ss=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.apply(this,arguments)}return n(h)(r,[{key:"compare",value:function(e,t){return wa(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw J("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Ts.MIN}},{key:"maxPost",value:function(){return new Ts(ba,Cs)}},{key:"makePost",value:function(e,t){return Y("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ts(e,Cs)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Cs},set:function(e){Cs=e}}]),r}(Es),Rs=new Ss,Ns=function(){"use strict";function e(t,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;n(l)(this,e),this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];for(var s=1;!t.isEmpty();)if(s=r?i(t.key,r):1,o&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}return n(h)(e,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),e}(),Ps=function(){"use strict";function e(t,r,i,o,a){n(l)(this,e),this.key=t,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=o?o:Ls.EMPTY_NODE,this.right=null!=a?a:Ls.EMPTY_NODE}return n(h)(e,[{key:"copy",value:function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Ls.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ls.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight_",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),e}();
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
 */Ps.RED=!0,Ps.BLACK=!1;var Os,As=function(){"use strict";function e(){n(l)(this,e)}return n(h)(e,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Ps(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),e}(),Ls=function(){"use strict";function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.EMPTY_NODE;n(l)(this,e),this.comparator_=t,this.root_=r}return n(h)(e,[{key:"insert",value:function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ps.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ps.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Ns(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Ns(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Ns(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Ns(this.root_,null,this.comparator_,!0,e)}}]),e}();
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
function Ds(e,t){return wa(e.name,t.name)}function Ms(e,t){return wa(e,t)}
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
 */Ls.EMPTY_NODE=new As;var Us,Fs,js,Bs=function(e){return"number"==typeof e?"number:"+Sa(e):"string:"+e},Ws=function(e){if(e.isLeafNode()){var t=e.val();Y("string"==typeof t||"number"==typeof t||"object"==typeof t&&me(t,".sv"),"Priority must be a string or number.")}else Y(e===Os||e.isEmpty(),"priority of unexpected type.");Y(e===Os||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},qs=function(){"use strict";function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.__childrenNodeConstructor.EMPTY_NODE;n(l)(this,e),this.value_=t,this.priorityNode_=r,this.lazyHash_=null,Y(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ws(this.priorityNode_)}return n(h)(e,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(t){return new e(this.value_,t)}},{key:"getImmediateChild",value:function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(t){return vs(t)?this:".priority"===us(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(t,n){var r=us(t);return null===r?n:n.isEmpty()&&".priority"!==r?this:(Y(".priority"!==r||1===cs(t),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ls(t),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bs(this.priorityNode_.val())+":");var t=n(Qo)(this.value_);e+=t+":",e+="number"===t?Sa(this.value_):this.value_,this.lazyHash_=ca(e)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(Y(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}},{key:"compareToLeafNode_",value:function(t){var r=n(Qo)(t.value_),i=n(Qo)(this.value_),o=e.VALUE_TYPE_ORDER.indexOf(r),a=e.VALUE_TYPE_ORDER.indexOf(i);return Y(o>=0,"Unknown leaf type: "+r),Y(a>=0,"Unknown leaf type: "+i),o===a?"object"===i?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:a-o}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Us},set:function(e){Us=e}}]),e}();qs.VALUE_TYPE_ORDER=["object","boolean","number","string"];var zs,Hs,Vs=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.apply(this,arguments)}return n(h)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?wa(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Ts.MIN}},{key:"maxPost",value:function(){return new Ts(ba,new qs("[PRIORITY-POST]",js))}},{key:"makePost",value:function(e,t){var n=Fs(e);return new Ts(t,new qs("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Es),Ks=new Vs,Gs=Math.log(2),Ys=function(){"use strict";function e(t){n(l)(this,e);var r;this.count=(r=t+1,parseInt(Math.log(r)/Gs,10)),this.current_=this.count-1;var i,o=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=t+1&o}return n(h)(e,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),e}(),Js=function(e,t,n,r){e.sort(t);var i=function(t,r){var o,a,s=r-t;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ps(a,o.node,Ps.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return o=e[u],a=n?n(o):o,new Ps(a,o.node,Ps.BLACK,c,l)},o=function(t){for(var r=null,o=null,a=e.length,s=function(t,r){var o=a-t,s=a;a-=t;var c=i(o+1,s),l=e[o],h=n?n(l):l;u(new Ps(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Ps.BLACK):(s(h,Ps.BLACK),s(h,Ps.RED))}return o}(new Ys(e.length));return new Ls(r||t,o)},Qs={},Xs=function(){"use strict";function e(t,r){n(l)(this,e),this.indexes_=t,this.indexSet_=r}return n(h)(e,[{key:"get",value:function(e){var t=ye(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ls?t:null}},{key:"hasIndex",value:function(e){return me(this.indexSet_,e.toString())}},{key:"addIndex",value:function(t,n){Y(t!==Rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],o=!1,a=n.getIterator(Ts.Wrap),s=a.getNext();s;)o=o||t.isDefinedOn(s.node),i.push(s),s=a.getNext();r=o?Js(i,t.getCompare()):Qs;var u=t.toString(),c=Object.assign({},this.indexSet_);c[u]=t;var l=Object.assign({},this.indexes_);return l[u]=r,new e(l,c)}},{key:"addToIndexes",value:function(t,n){var r=this;return new e(_e(this.indexes_,(function(e,i){var o=ye(r.indexSet_,i);if(Y(o,"Missing index implementation for "+i),e===Qs){if(o.isDefinedOn(t.node)){for(var a=[],s=n.getIterator(Ts.Wrap),u=s.getNext();u;)u.name!==t.name&&a.push(u),u=s.getNext();return a.push(t),Js(a,o.getCompare())}return Qs}var c=n.get(t.name),l=e;return c&&(l=l.remove(new Ts(t.name,c))),l.insert(t,t.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(t,n){return new e(_e(this.indexes_,(function(e){if(e===Qs)return e;var r=n.get(t.name);return r?e.remove(new Ts(t.name,r)):e})),this.indexSet_)}}],[{key:"Default",get:function(){return Y(Qs&&Ks,"ChildrenNode.ts has not been loaded"),zs=zs||new e({".priority":Qs},{".priority":Ks})}}]),e}(),$s=function(){"use strict";function e(t,r,i){n(l)(this,e),this.children_=t,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ws(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return n(h)(e,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Hs}},{key:"updatePriority",value:function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Hs:t}},{key:"getChild",value:function(e){var t=us(e);return null===t?this:this.getImmediateChild(t).getChild(ls(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(t,n){if(Y(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r,i,o=new Ts(t,n);n.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(o,this.children_)):(r=this.children_.insert(t,n),i=this.indexMap_.addToIndexes(o,this.children_));var a=r.isEmpty()?Hs:this.priorityNode_;return new e(r,a,i)}},{key:"updateChild",value:function(e,t){var n=us(e);if(null===n)return t;Y(".priority"!==us(e)||1===cs(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(ls(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(Ks,(function(a,s){n[a]=s.val(t),r++,o&&e.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):o=!1})),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Bs(this.getPriority().val())+":"),this.forEachChild(Ks,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ca(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ts(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Ts(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Ts(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Ts.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Ts.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zs?-1:0}},{key:"withIndex",value:function(t){if(t===Rs||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Rs||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Ks),r=t.getIterator(Ks),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Rs?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Hs||(Hs=new e(new Ls(Ms),null,Xs.Default))}}]),e}();$s.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Zs=new(function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.call(this,new Ls(Ms),$s.EMPTY_NODE,Xs.Default)}return n(h)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return $s.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}($s));Object.defineProperties(Ts,{MIN:{value:new Ts(ka,$s.EMPTY_NODE)},MAX:{value:new Ts(ba,Zs)}}),Ss.__EMPTY_NODE=$s.EMPTY_NODE,qs.__childrenNodeConstructor=$s,Os=Zs,function(e){js=e}(Zs);function eu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return $s.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Y(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+(void 0===t?"undefined":n(Qo)(t))),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){var r=e;return new qs(r,eu(t))}if(e instanceof Array){var i=$s.EMPTY_NODE;return Ea(e,(function(t,n){if(me(e,t)&&"."!==t.substring(0,1)){var r=eu(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(t,r))}})),i.updatePriority(eu(t))}var o=[],a=!1,s=e;if(Ea(s,(function(e,t){if("."!==e.substring(0,1)){var n=eu(t);n.isEmpty()||(a=a||!n.getPriority().isEmpty(),o.push(new Ts(e,n)))}})),0===o.length)return $s.EMPTY_NODE;var u=Js(o,Ds,(function(e){return e.name}),Ms);if(a){var c=Js(o,Ks.getCompare());return new $s(u,eu(t),new Xs({".priority":c},{".priority":Ks}))}return new $s(u,eu(t),Xs.Default)}!function(e){Fs=e}(eu);
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
var tu,nu,ru=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e){var i;return n(l)(this,r),(i=t.call(this)).indexPath_=e,Y(!vs(e)&&".priority"!==us(e),"Can't create PathIndex with empty path or .priority key"),i}return n(h)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?wa(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=eu(e),r=$s.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ts(t,r)}},{key:"maxPost",value:function(){var e=$s.EMPTY_NODE.updateChild(this.indexPath_,Zs);return new Ts(ba,e)}},{key:"toString",value:function(){return fs(this.indexPath_,0).join("/")}}]),r}(Es),iu=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(){return n(l)(this,r),t.apply(this,arguments)}return n(h)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?wa(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Ts.MIN}},{key:"maxPost",value:function(){return Ts.MAX}},{key:"makePost",value:function(e,t){var n=eu(e);return new Ts(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Es),ou=new iu,au="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */tu=0,nu=[];
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
function su(e){return{type:"value",snapshotNode:e}}function uu(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function cu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function lu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
var hu=function(){"use strict";function e(){n(l)(this,e),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ks}return n(h)(e,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ka}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ba}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Ks}},{key:"copy",value:function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}]),e}();
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
 */function fu(e){var t,n={};return e.isDefault()||(e.index_===Ks?t="$priority":e.index_===ou?t="$value":e.index_===Rs?t="$key":(Y(e.index_ instanceof ru,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=de(t),e.startSet_&&(n.startAt=de(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+de(e.indexStartName_))),e.endSet_&&(n.endAt=de(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+de(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function du(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ks&&(t.i=e.index_.toString()),t}
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
 */var pu=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i,o,a){var s;return n(l)(this,r),(s=t.call(this)).repoInfo_=e,s.onDataUpdate_=i,s.authTokenProvider_=o,s.appCheckTokenProvider_=a,s.log_=va("p:rest:"),s.listens_={},s}return n(h)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var o=this,a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=fu(e._queryParams);this.restRequest_(a+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&o.onDataUpdate_(a,r,!1,n),ye(o.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=fu(e._queryParams),r=e._path.toString(),i=new re;return this.restRequest_(r+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(r,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(o){var a=n(x)(o,2),s=a[0],u=a[1],c=i;s&&s.accessToken&&(t.auth=s.accessToken),u&&u.token&&(t.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+e+"?ns="+i.repoInfo_.namespace+we(t);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=fe(h.responseText)}catch(e){ga("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&ga("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(Y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(rs),vu=function(){"use strict";function e(){n(l)(this,e),this.rootNode_=$s.EMPTY_NODE}return n(h)(e,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),e}();
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
function mu(){return{value:null,children:new Map}}function yu(e,t,n){if(vs(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=us(t);e.children.has(r)||e.children.set(r,mu()),yu(e.children.get(r),t=ls(t),n)}}function gu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
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
 */(e,(function(e,r){gu(r,new as(t.toString()+"/"+e),n)}))}var _u,ku,bu=function(){"use strict";function e(t){n(l)(this,e),this.collection_=t,this.last_=null}return n(h)(e,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ea(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),e}(),wu=function(){"use strict";function e(t,r){n(l)(this,e),this.server_=r,this.statsToReport_={},this.statsListener_=new bu(t);var i=1e4+2e4*Math.random();La(this.reportStats_.bind(this),Math.floor(i))}return n(h)(e,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Ea(t,(function(t,i){i>0&&me(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),e}();
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
 */function xu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(ku=_u||(_u={}))[ku.OVERWRITE=0]="OVERWRITE",ku[ku.MERGE=1]="MERGE",ku[ku.ACK_USER_WRITE=2]="ACK_USER_WRITE",ku[ku.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Iu,Cu=function(){"use strict";function e(t,r,i){n(l)(this,e),this.path=t,this.affectedTree=r,this.revert=i,this.type=_u.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return n(h)(e,[{key:"operationForChild",value:function(t){if(vs(this.path)){if(null!=this.affectedTree.value)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new as(t));return new e(ss(),n,this.revert)}return Y(us(this.path)===t,"operationForChild called for unrelated child."),new e(ls(this.path),this.affectedTree,this.revert)}}]),e}(),Tu=function(){"use strict";function e(t,r,i){n(l)(this,e),this.source=t,this.path=r,this.snap=i,this.type=_u.OVERWRITE}return n(h)(e,[{key:"operationForChild",value:function(t){return vs(this.path)?new e(this.source,ss(),this.snap.getImmediateChild(t)):new e(this.source,ls(this.path),this.snap)}}]),e}(),Eu=function(){"use strict";function e(t,r,i){n(l)(this,e),this.source=t,this.path=r,this.children=i,this.type=_u.MERGE}return n(h)(e,[{key:"operationForChild",value:function(t){if(vs(this.path)){var n=this.children.subtree(new as(t));return n.isEmpty()?null:n.value?new Tu(this.source,ss(),n.value):new e(this.source,ss(),n)}return Y(us(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,ls(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),e}(),Su=function(){"use strict";function e(t,r,i){n(l)(this,e),this.node_=t,this.fullyInitialized_=r,this.filtered_=i}return n(h)(e,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(vs(e))return this.isFullyInitialized()&&!this.filtered_;var t=us(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),e}();
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
 */function Ru(e,t,n,r,i,o){var a=r.filter((function(e){return e.type===n}));a.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw J("Should only compare child_ events.");var r=new Ts(t.childName,t.snapshotNode),i=new Ts(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n)})),a.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Nu(e,t){return{eventCache:e,serverCache:t}}function Pu(e,t,n,r){return Nu(new Su(t,n,r),e.serverCache)}function Ou(e,t,n,r){return Nu(e.eventCache,new Su(t,n,r))}function Au(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Lu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */var Du=function(){return Iu||(Iu=new Ls(xa)),Iu},Mu=function(){"use strict";function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Du();n(l)(this,e),this.value=t,this.children=r}return n(h)(e,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:ss(),value:this.value};if(vs(e))return null;var n=us(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(ls(e),t);return null!=i?{path:ps(new as(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(t){if(vs(t))return this;var n=us(t),r=this.children.get(n);return null!==r?r.subtree(ls(t)):new e(null)}},{key:"set",value:function(t,n){if(vs(t))return new e(n,this.children);var r=us(t),i=(this.children.get(r)||new e(null)).set(ls(t),n),o=this.children.insert(r,i);return new e(this.value,o)}},{key:"remove",value:function(t){if(vs(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=us(t),r=this.children.get(n);if(r){var i,o=r.remove(ls(t));return i=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&i.isEmpty()?new e(null):new e(this.value,i)}return this}},{key:"get",value:function(e){if(vs(e))return this.value;var t=us(e),n=this.children.get(t);return n?n.get(ls(e)):null}},{key:"setTree",value:function(t,n){if(vs(t))return n;var r,i=us(t),o=(this.children.get(i)||new e(null)).setTree(ls(t),n);return r=o.isEmpty()?this.children.remove(i):this.children.insert(i,o),new e(this.value,r)}},{key:"fold",value:function(e){return this.fold_(ss(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(ps(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,ss(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(vs(e))return null;var i=us(e),o=this.children.get(i);return o?o.findOnPath_(ls(e),ps(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,ss(),t)}},{key:"foreachOnPath_",value:function(t,n,r){if(vs(t))return this;this.value&&r(n,this.value);var i=us(t),o=this.children.get(i);return o?o.foreachOnPath_(ls(t),ps(n,i),r):new e(null)}},{key:"foreach",value:function(e){this.foreach_(ss(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(ps(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(t){var n=new e(null);return Ea(t,(function(e,t){n=n.set(new as(e),t)})),n}}]),e}(),Uu=function(){"use strict";function e(t){n(l)(this,e),this.writeTree_=t}return n(h)(e,null,[{key:"empty",value:function(){return new e(new Mu(null))}}]),e}();function Fu(e,t,n){if(vs(t))return new Uu(new Mu(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,o=r.value,a=ms(i,t);return o=o.updateChild(a,n),new Uu(e.writeTree_.set(i,o))}var s=new Mu(n),u=e.writeTree_.setTree(t,s);return new Uu(u)}function ju(e,t,n){var r=e;return Ea(n,(function(e,n){r=Fu(r,ps(t,e),n)})),r}function Bu(e,t){if(vs(t))return Uu.empty();var n=e.writeTree_.setTree(t,new Mu(null));return new Uu(n)}function Wu(e,t){return null!=qu(e,t)}function qu(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ms(n.path,t)):null}function zu(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ks,(function(e,n){t.push(new Ts(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ts(e,n.value))})),t}function Hu(e,t){if(vs(t))return e;var n=qu(e,t);return new Uu(null!=n?new Mu(n):e.writeTree_.subtree(t))}function Vu(e){return e.writeTree_.isEmpty()}function Ku(e,t){return Gu(ss(),e.writeTree_,t)}function Gu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(Y(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Gu(ps(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ps(e,".priority"),r)),n}
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
 */function Yu(e,t){return uc(t,e)}function Ju(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Qu(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));Y(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,o=!1,a=e.allWrites.length-1;i&&a>=0;){var s=e.allWrites[a];s.visible&&(a>=n&&Xu(s,r.path)?i=!1:gs(r.path,s.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=Zu(e.allWrites,$u,ss()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=Bu(e.visibleWrites,r.path):Ea(r.children,(function(t){e.visibleWrites=Bu(e.visibleWrites,ps(r.path,t))}));return!0}return!1}function Xu(e,t){if(e.snap)return gs(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&gs(ps(e.path,n),t))return!0;return!1}function $u(e){return e.visible}function Zu(e,t,n){for(var r=Uu.empty(),i=0;i<e.length;++i){var o=e[i];if(t(o)){var a=o.path,s=void 0;if(o.snap)gs(n,a)?r=Fu(r,s=ms(n,a),o.snap):gs(a,n)&&(s=ms(a,n),r=Fu(r,ss(),o.snap.getChild(s)));else{if(!o.children)throw J("WriteRecord should have .snap or .children");if(gs(n,a))r=ju(r,s=ms(n,a),o.children);else if(gs(a,n))if(vs(s=ms(a,n)))r=ju(r,ss(),o.children);else{var u=ye(o.children,us(s));if(u){var c=u.getChild(ls(s));r=Fu(r,ss(),c)}}}}}return r}function ec(e,t,n,r,i){if(r||i){var o=Hu(e.visibleWrites,t);if(!i&&Vu(o))return n;if(i||null!=n||Wu(o,ss())){return Ku(Zu(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(gs(e.path,t)||gs(t,e.path))}),t),n||$s.EMPTY_NODE)}return null}var a=qu(e.visibleWrites,t);if(null!=a)return a;var s=Hu(e.visibleWrites,t);return Vu(s)?n:null!=n||Wu(s,ss())?Ku(s,n||$s.EMPTY_NODE):null}function tc(e,t,n,r){return ec(e.writeTree,e.treePath,t,n,r)}function nc(e,t){return function(e,t,n){var r=$s.EMPTY_NODE,i=qu(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ks,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var o=Hu(e.visibleWrites,t);return n.forEachChild(Ks,(function(e,t){var n=Ku(Hu(o,new as(e)),t);r=r.updateImmediateChild(e,n)})),zu(o).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return zu(Hu(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function rc(e,t,n,r){return function(e,t,n,r,i){Y(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=ps(t,n);if(Wu(e.visibleWrites,o))return null;var a=Hu(e.visibleWrites,o);return Vu(a)?i.getChild(n):Ku(a,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function ic(e,t){return function(e,t){return qu(e.visibleWrites,t)}(e.writeTree,ps(e.treePath,t))}function oc(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){var s,u=Hu(e.visibleWrites,t),c=qu(u,ss());if(null!=c)s=c;else{if(null==n)return[];s=Ku(u,n)}if((s=s.withIndex(a)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=a.getCompare(),f=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,o)}function ac(e,t,n){return function(e,t,n,r){var i=ps(t,n),o=qu(e.visibleWrites,i);return null!=o?o:r.isCompleteForChild(n)?Ku(Hu(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function sc(e,t){return uc(ps(e.treePath,t),e.writeTree)}function uc(e,t){return{treePath:e,writeTree:t}}
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
 */var cc=function(){"use strict";function e(){n(l)(this,e),this.changeMap=new Map}return n(h)(e,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;Y("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Y(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,lu(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,cu(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,uu(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw J("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,lu(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),e}(),lc=new(function(){"use strict";function e(){n(l)(this,e)}return n(h)(e,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),e}()),hc=function(){"use strict";function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n(l)(this,e),this.writes_=t,this.viewCache_=r,this.optCompleteServerCache_=i}return n(h)(e,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Su(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ac(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Lu(this.viewCache_),i=oc(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),e}();
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
 */function fc(e,t,n,r,i){var o,a,s=new cc;if(n.type===_u.OVERWRITE){var u=n;u.source.fromUser?o=vc(e,t,u.path,u.snap,r,i,s):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!vs(u.path),o=pc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===_u.MERGE){var c=n;c.source.fromUser?o=function(e,t,n,r,i,o,a){var s=t;return r.foreach((function(r,u){var c=ps(n,r);mc(t,us(c))&&(s=vc(e,s,c,u,i,o,a))})),r.foreach((function(r,u){var c=ps(n,r);mc(t,us(c))||(s=vc(e,s,c,u,i,o,a))})),s}(e,t,c.path,c.children,r,i,s):(Y(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=gc(e,t,c.path,c.children,r,i,a,s))}else if(n.type===_u.ACK_USER_WRITE){var l=n;o=l.revert?function(e,t,n,r,i,o){var a;if(null!=ic(r,n))return t;var s,u=new hc(r,t,i),c=t.eventCache.getNode();if(vs(n)||".priority"===us(n)){var l;if(t.serverCache.isFullyInitialized())l=tc(r,Lu(t));else{var h=t.serverCache.getNode();Y(h instanceof $s,"serverChildren would be complete if leaf node"),l=nc(r,h)}s=e.filter.updateFullNode(c,l,o)}else{var f=us(n),d=ac(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,ls(n),u,o):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,$s.EMPTY_NODE,ls(n),u,o):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(a=tc(r,Lu(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,a,o))}return a=t.serverCache.isFullyInitialized()||null!=ic(r,ss()),Pu(t,s,a,e.filter.filtersNodes())}
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,o,a){if(null!=ic(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(vs(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return pc(e,t,n,u.getNode().getChild(n),i,o,s,a);if(vs(n)){var c=new Mu(null);return u.getNode().forEachChild(Rs,(function(e,t){c=c.set(new as(e),t)})),gc(e,t,n,c,i,o,s,a)}return t}var l=new Mu(null);return r.foreach((function(e,t){var r=ps(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),gc(e,t,n,l,i,o,s,a)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==_u.LISTEN_COMPLETE)throw J("Unknown operation type: "+n.type);o=function(e,t,n,r,i){var o=t.serverCache,a=Ou(t,o.getNode(),o.isFullyInitialized()||vs(n),o.isFiltered());return dc(e,a,n,r,lc,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Au(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(su(Au(t)))}}(t,o,h),{viewCache:o,changes:h}}function dc(e,t,n,r,i,o){var a,s,u=t.eventCache;if(null!=ic(r,n))return t;if(vs(n))if(Y(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Lu(t),l=nc(r,c instanceof $s?c:$s.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),l,o)}else{var h=tc(r,Lu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var f=us(n);if(".priority"===f){Y(1===cs(n),"Can't have a priority with additional path components");var d=u.getNode(),p=rc(r,n,d,s=t.serverCache.getNode());a=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,m=ls(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var y=rc(r,n,u.getNode(),s);v=null!=y?u.getNode().getImmediateChild(f).updateChild(m,y):u.getNode().getImmediateChild(f)}else v=ac(r,f,t.serverCache);a=null!=v?e.filter.updateChild(u.getNode(),f,v,m,i,o):u.getNode()}}return Pu(t,a,u.isFullyInitialized()||vs(n),e.filter.filtersNodes())}function pc(e,t,n,r,i,o,a,s){var u,c=t.serverCache,l=a?e.filter:e.filter.getIndexedFilter();if(vs(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=us(n);if(!c.isCompleteForPath(n)&&cs(n)>1)return t;var d=ls(n),p=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),f,p,d,lc,null)}var v=Ou(t,u,c.isFullyInitialized()||vs(n),l.filtersNodes());return dc(e,v,n,i,new hc(i,v,o),s)}function vc(e,t,n,r,i,o,a){var s,u,c=t.eventCache,l=new hc(i,t,o);if(vs(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,a),s=Pu(t,u,!0,e.filter.filtersNodes());else{var h=us(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Pu(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=ls(n),p=c.getNode().getImmediateChild(h);if(vs(d))f=r;else{var v=l.getCompleteChild(h);f=null!=v?".priority"===hs(d)&&v.getChild(ds(d)).isEmpty()?v:v.updateChild(d,r):$s.EMPTY_NODE}if(p.equals(f))s=t;else s=Pu(t,e.filter.updateChild(c.getNode(),h,f,d,l,a),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function mc(e,t){return e.eventCache.isCompleteForChild(t)}function yc(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function gc(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=vs(n)?r:new Mu(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=yc(0,t.serverCache.getNode().getImmediateChild(n),r);c=pc(e,c,new as(n),u,i,o,a,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!u){var h=yc(0,t.serverCache.getNode().getImmediateChild(n),r);c=pc(e,c,new as(n),h,i,o,a,s)}})),c}var _c;function kc(e,t){var n=Lu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vs(t)&&!n.getImmediateChild(us(t)).isEmpty())?n.getChild(t):null}function bc(e,t,n,r){t.type===_u.MERGE&&null!==t.source.queryId&&(Y(Lu(e.viewCache_),"We should always have a full cache before handling merges"),Y(Au(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,o,a=e.viewCache_,s=fc(e.processor_,a,t,n,r);return i=e.processor_,o=s.viewCache,Y(o.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),Y(o.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),Y(s.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,wc(e,s.changes,s.viewCache.eventCache.getNode(),null)}function wc(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ru(e,i,"child_removed",t,r,n),Ru(e,i,"child_added",t,r,n),Ru(e,i,"child_moved",o,r,n),Ru(e,i,"child_changed",t,r,n),Ru(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */var xc;function Ic(e,t,n,r){var i=t.source.queryId;if(null!==i){var o=e.views.get(i);return Y(null!=o,"SyncTree gave us an op for an invalid query."),bc(o,t,n,r)}var a=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a=a.concat(bc(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return a}function Cc(e,t){var n=null,r=!0,i=!1,o=void 0;try{for(var a,s=e.views.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;n=n||kc(u,t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}var Tc=function e(t){"use strict";n(l)(this,e),this.listenProvider_=t,this.syncPointTree_=new Mu(null),this.pendingWriteTree_={visibleWrites:Uu.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function Ec(e,t,n,r,i){return function(e,t,n,r,i){Y(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Fu(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Pc(e,new Tu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Sc(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Ju(e.pendingWriteTree_,t),i=Qu(e.pendingWriteTree_,t);if(i){var o=new Mu(null);return null!=r.snap?o=o.set(ss(),!0):Ea(r.children,(function(e){o=o.set(new as(e),!0)})),Pc(e,new Cu(r.path,o,n))}return[]}function Rc(e,t,n){return Pc(e,new Tu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Nc(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=Cc(n,ms(e,t));if(r)return r}));return ec(r,t,i,n,!0)}function Pc(e,t){return Oc(t,e.syncPointTree_,null,Yu(e.pendingWriteTree_,ss()))}function Oc(e,t,n,r){if(vs(e.path))return Ac(e,t,n,r);var i=t.get(ss());null==n&&null!=i&&(n=Cc(i,ss()));var o=[],a=us(e.path),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var c=n?n.getImmediateChild(a):null,l=sc(r,a);o=o.concat(Oc(s,u,c,l))}return i&&(o=o.concat(Ic(i,e,r,n))),o}function Ac(e,t,n,r){var i=t.get(ss());null==n&&null!=i&&(n=Cc(i,ss()));var o=[];return t.children.inorderTraversal((function(t,i){var a=n?n.getImmediateChild(t):null,s=sc(r,t),u=e.operationForChild(t);u&&(o=o.concat(Ac(u,i,a,s)))})),i&&(o=o.concat(Ic(i,e,r,n))),o}function Lc(e,t){return e.tagToQueryMap.get(t)}function Dc(e){var t=e.indexOf("$");return Y(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new as(e.substr(0,t))}}function Mc(e,t,n){var r=e.syncPointTree_.get(t);return Y(r,"Missing sync point for query tag that we're tracking"),Ic(r,n,Yu(e.pendingWriteTree_,t),null)}
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
var Uc=function(){"use strict";function e(t){n(l)(this,e),this.node_=t}return n(h)(e,[{key:"getImmediateChild",value:function(t){return new e(this.node_.getImmediateChild(t))}},{key:"node",value:function(){return this.node_}}]),e}(),Fc=function(){"use strict";function e(t,r){n(l)(this,e),this.syncTree_=t,this.path_=r}return n(h)(e,[{key:"getImmediateChild",value:function(t){var n=ps(this.path_,t);return new e(this.syncTree_,n)}},{key:"node",value:function(){return Nc(this.syncTree_,this.path_)}}]),e}(),jc=function(e,t,n){return e&&"object"==typeof e?(Y(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Bc(e[".sv"],t,n):"object"==typeof e[".sv"]?Wc(e[".sv"],t):void Y(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Bc=function(e,t,n){if("timestamp"===e)return n.timestamp;Y(!1,"Unexpected server value: "+e)},Wc=function(e,t,n){e.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&Y(!1,"Unexpected increment value: "+r);var i=t.node();if(Y(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r},qc=function(e,t,n,r){return Hc(t,new Fc(n,e),r)},zc=function(e,t,n){return Hc(e,new Uc(t),n)};function Hc(e,t,n){var r,i=e.getPriority().val(),o=jc(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var a=e,s=jc(a.getValue(),t,n);return s!==a.getValue()||o!==a.getPriority().val()?new qs(s,eu(o)):e}var u=e;return r=u,o!==u.getPriority().val()&&(r=r.updatePriority(new qs(o))),u.forEachChild(Ks,(function(e,i){var o=Hc(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}
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
 */var Vc=function e(){"use strict";var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};n(l)(this,e),this.name=t,this.parent=r,this.node=i};function Kc(e,t){for(var n=t instanceof as?t:new as(t),r=e,i=us(n);null!==i;){var o=ye(r.node.children,i)||{children:{},childCount:0};r=new Vc(i,r,o),i=us(n=ls(n))}return r}function Gc(e){return e.node.value}function Yc(e,t){e.node.value=t,Zc(e)}function Jc(e){return e.node.childCount>0}function Qc(e,t){Ea(e.node.children,(function(n,r){t(new Vc(n,e,r))}))}function Xc(e,t,n,r){n&&!r&&t(e),Qc(e,(function(e){Xc(e,t,!0,r)})),n&&r&&t(e)}function $c(e){return new as(null===e.parent?e.name:$c(e.parent)+"/"+e.name)}function Zc(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Gc(e)&&!Jc(e)}(n),i=me(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Zc(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Zc(e))}
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
 */(e.parent,e.name,e)}var el=/[\[\].#$\/\u0000-\u001F\u007F]/,tl=/[\[\].#$\u0000-\u001F\u007F]/,nl=10485760,rl=function(e){return"string"==typeof e&&0!==e.length&&!el.test(e)},il=function(e){return"string"==typeof e&&0!==e.length&&!tl.test(e)},ol=function(e,t,n){var r=n instanceof as?new _s(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+bs(r));if("function"==typeof t)throw new Error(e+"contains a function "+bs(r)+" with contents = "+t.toString());if(_a(t))throw new Error(e+"contains "+t.toString()+" "+bs(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ne(t)>nl)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+bs(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,o=!1;if(Ea(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!rl(t)))throw new Error(e+" contains an invalid key ("+t+") "+bs(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=Ne(s),ks(a),ol(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ne(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&o)throw new Error(e+' contains ".value" child '+bs(r)+" in addition to actual children.")}},al=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!rl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),il(e)}(n))throw new Error(Se(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},sl=function e(){"use strict";n(l)(this,e),this.eventLists_=[],this.recursionDepth_=0};function ul(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],o=i.getPath();null===n||ys(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function cl(e,t,n){ul(e,n),ll(e,(function(e){return gs(e,t)||gs(t,e)}))}function ll(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(hl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function hl(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();ha&&pa("event: "+n.toString()),Aa(r)}}}
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
 */var fl="repo_interrupt",dl=function(){"use strict";function e(t,r,i,o){n(l)(this,e),this.repoInfo_=t,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mu(),this.transactionQueueTree_=new Vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return n(h)(e,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),e}();function pl(e,t,n){if(e.stats_=Ga(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new pu(e.repoInfo_,(function(t,n,r,i){yl(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return gl(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Is(e.repoInfo_,t,(function(t,n,r,i){yl(e,t,n,r,i)}),(function(t){gl(e,t)}),(function(t){!function(e,t){Ea(t,(function(t,n){_l(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new wu(e.stats_,e.server_)},o=r.toString(),Ka[o]||(Ka[o]=i()),Ka[o]),e.infoData_=new vu,e.infoSyncTree_=new Tc({startListening:function(t,n,r,i){var o=[],a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=Rc(e.infoSyncTree_,t._path,a),setTimeout((function(){i("ok")}),0)),o},stopListening:function(){}}),_l(e,"connected",!1),e.serverSyncTree_=new Tc({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var o=i(n,r);cl(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function vl(e){var t=e.infoData_.getNode(new as(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ml(e){return(t=(t={timestamp:vl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function yl(e,t,n,r,i){e.dataUpdateCount++;var o=new as(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var a=[];if(i)if(r){var s=_e(n,(function(e){return eu(e)}));a=function(e,t,n,r){var i=Lc(e,r);if(i){var o=Dc(i),a=o.path,s=o.queryId,u=ms(a,t),c=Mu.fromObject(n);return Mc(e,a,new Eu(xu(s),u,c))}return[]}(e.serverSyncTree_,o,s,i)}else{var u=eu(n);a=function(e,t,n,r){var i=Lc(e,r);if(null!=i){var o=Dc(i),a=o.path,s=o.queryId,u=ms(a,t);return Mc(e,a,new Tu(xu(s),u,n))}return[]}(e.serverSyncTree_,o,u,i)}else if(r){var c=_e(n,(function(e){return eu(e)}));a=function(e,t,n){var r=Mu.fromObject(n);return Pc(e,new Eu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,c)}else{var l=eu(n);a=Rc(e.serverSyncTree_,o,l)}var h=o;a.length>0&&(h=Tl(e,o)),cl(e.eventQueue_,h,a)}function gl(e,t){_l(e,"connected",t),!1===t&&function(e){wl(e,"onDisconnectEvents");var t=ml(e),n=mu();gu(e.onDisconnect_,ss(),(function(r,i){var o=qc(r,i,e.serverSyncTree_,t);yu(n,r,o)}));var r=[];gu(n,ss(),(function(t,n){r=r.concat(Rc(e.serverSyncTree_,t,n));var i=Pl(e,t);Tl(e,i)})),e.onDisconnect_=mu(),cl(e.eventQueue_,ss(),r)}(e)}function _l(e,t,n){var r=new as("/.info/"+t),i=eu(n);e.infoData_.updateSnapshot(r,i);var o=Rc(e.infoSyncTree_,r,i);cl(e.eventQueue_,r,o)}function kl(e){return e.nextWriteId_++}function bl(e){e.persistentConnection_&&e.persistentConnection_.interrupt(fl)}function wl(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o="";e.persistentConnection_&&(o=e.persistentConnection_.id+":"),pa.apply(void 0,[o].concat(n(y)(r)))}function xl(e,t,n){return Nc(e.serverSyncTree_,t,n)||$s.EMPTY_NODE}function Il(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Nl(e,t),Gc(t)){var n=Sl(e,t);Y(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Cl(e,$c(t),n)}else Jc(t)&&Qc(t,(function(t){Il(e,t)}))}function Cl(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=xl(e,t,r),o=i,a=i.hash(),s=0;s<n.length;s++){var u=n[s];Y(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=ms(t,u.path);o=o.updateChild(c,u.currentOutputSnapshotRaw)}var l=o.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){wl(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var o=function(t){n[t].status=2,i=i.concat(Sc(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&a.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=[],s=0;s<n.length;s++)o(s);Nl(e,Kc(e.transactionQueueTree_,t)),Il(e,e.transactionQueueTree_),cl(e.eventQueue_,t,i);for(var u=0;u<a.length;u++)Aa(a[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{ga("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Tl(e,t)}}),a)}function Tl(e,t){var n=El(e,t),r=$c(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=ms(n,u.path),l=!1,h=void 0;if(Y(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,o=o.concat(Sc(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",o=o.concat(Sc(e.serverSyncTree_,u.currentWriteId,!0));else{var f=xl(e,u.path,a);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){ol("transaction failed: Data returned ",d,u.path);var p=eu(d);"object"==typeof d&&null!=d&&me(d,".priority")||(p=p.updatePriority(f.getPriority()));var v=u.currentWriteId,m=ml(e),y=zc(p,f,m);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=y,u.currentWriteId=kl(e),a.splice(a.indexOf(v),1),o=(o=o.concat(Ec(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(Sc(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",o=o.concat(Sc(e.serverSyncTree_,u.currentWriteId,!0))}cl(e.eventQueue_,n,o),o=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],o=[],a=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Nl(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Aa(i[u]);Il(e,e.transactionQueueTree_)}(e,Sl(e,n),r),r}function El(e,t){var n,r=e.transactionQueueTree_;for(n=us(t);null!==n&&void 0===Gc(r);)r=Kc(r,n),n=us(t=ls(t));return r}function Sl(e,t){var n=[];return Rl(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Rl(e,t,n){var r=Gc(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Qc(t,(function(t){Rl(e,t,n)}))}function Nl(e,t){var n=Gc(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Yc(t,n.length>0?n:void 0)}Qc(t,(function(t){Nl(e,t)}))}function Pl(e,t){var n=$c(El(e,t)),r=Kc(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ol(e,t)})),Ol(e,r),Xc(r,(function(t){Ol(e,t)})),n}function Ol(e,t){var n=Gc(t);if(n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)3===n[a].status||(1===n[a].status?(Y(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=3,n[a].abortReason="set"):(Y(0===n[a].status,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(Sc(e.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Yc(t,void 0):n.length=o+1,cl(e.eventQueue_,$c(t),i);for(var s=0;s<r.length;s++)Aa(r[s])}}
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
 */var Al=function(e,t){var n=Ll(e),r=n.namespace;"firebase.com"===n.domain&&ya(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ya("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ga("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new qa(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new as(n.pathString)}},Ll=function(e){var t="",n="",r="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var o,a=e.split("&")[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):ga("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}},Dl=function(){"use strict";function e(t,r,i,o){n(l)(this,e),this._repo=t,this._path=r,this._queryParams=i,this._orderByCalled=o}return n(h)(e,[{key:"key",get:function(){return vs(this._path)?null:hs(this._path)}},{key:"ref",get:function(){return new Ml(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=du(this._queryParams),t=Ca(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return du(this._queryParams)}},{key:"isEqual",value:function(t){if(!((t=Pe(t))instanceof e))return!1;var n=this._repo===t._repo,r=ys(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),e}();var Ml=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i){return n(l)(this,r),t.call(this,e,i,new hu,!1)}return n(h)(r,[{key:"parent",get:function(){var e=ds(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Dl);!function(e){Y(!_c,"__referenceConstructor has already been defined"),_c=e}(Ml),function(e){Y(!xc,"__referenceConstructor has already been defined"),xc=e}(Ml);
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
var Ul={},Fl=!1;function jl(e,t,n,r,i){var o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||ya("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pa("Using default host for project ",e.options.projectId),o="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var a,s=Al(o,i),u=s.repoInfo,c=void 0;void 0!==Xo&&Xo.env&&(c=Xo.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Al(o,i)).repoInfo):a=!s.repoInfo.secure;var l=i&&a?new Ua(Ua.OWNER):new Ma(e.name,e.options,t);al("Invalid Firebase Database URL",s),vs(s.path)||ya("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Ul[t.name];i||(i={},Ul[t.name]=i);var o=i[e.toURLString()];o&&ya("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new dl(e,Fl,n,r),i[e.toURLString()]=o,o}(u,e,l,new Da(e.name,n));return new Bl(h,e)}var Bl=function(){"use strict";function e(t,r){n(l)(this,e),this._repoInternal=t,this.app=r,this.type="database",this._instanceStarted=!1}return n(h)(e,[{key:"_repo",get:function(){return this._instanceStarted||(pl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Ml(this._repo,ss())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Ul[t])&&n[e.key]===e||ya("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),bl(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&ya("Cannot call "+e+" on a deleted database.")}}]),e}();Is.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Is.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){ea=Tt,bt(new Oe("database",(function(e,t){var n=t.instanceIdentifier;return jl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),St($o,Zo,e),St($o,Zo,"esm2017")}
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
 */();R=o("ds8z5");
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
 */var Wl="firebasestorage.googleapis.com",ql=function(e){"use strict";n(N)(r,e);var t=n(B)(r);function r(e,i){var o;return n(l)(this,r),(o=t.call(this,zl(e),"Firebase Storage: ".concat(i," (").concat(zl(e),")"))).customData={serverResponse:null},o._baseMessage=o.message,Object.setPrototypeOf(n(R)(o),r.prototype),o}return n(h)(r,[{key:"_codeEquals",value:function(e){return zl(e)===this.code}},{key:"serverResponse",get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}]),r}(ue);function zl(e){return"storage/"+e}function Hl(){return new ql("unknown","An unknown error occurred, please check the error payload for server response.")}function Vl(){return new ql("canceled","User canceled the upload/download.")}function Kl(e){return new ql("invalid-argument",e)}function Gl(){return new ql("app-deleted","The Firebase app was deleted.")}
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
var Yl,Jl,Ql=function(){"use strict";function e(t,r){n(l)(this,e),this.bucket=t,this.path_=r}return n(h)(e,[{key:"path",get:function(){return this.path_}},{key:"isRoot",get:function(){return 0===this.path.length}},{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}}],[{key:"makeFromBucketSpec",value:function(t,n){var r;try{r=e.makeFromUrl(t,n)}catch(n){return new e(t,"")}if(""===r.path)return r;throw new ql("invalid-default-bucket","Invalid default bucket '"+t+"'.")}},{key:"makeFromUrl",value:function(t,n){var r=null,i="([A-Za-z0-9.\\-_]+)";var o=new RegExp("^gs://"+i+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}for(var s=n.replace(/[.]/g,"\\."),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://".concat(s,"/").concat("v[A-Za-z0-9_]+","/b/").concat(i,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:a},{regex:new RegExp("^https?://".concat(n===Wl?"(?:storage.googleapis.com|storage.cloud.google.com)":n,"/").concat(i,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:a}],c=0;c<u.length;c++){var l=u[c],h=l.regex.exec(t);if(h){var f=h[l.indices.bucket],d=h[l.indices.path];d||(d=""),r=new e(f,d),l.postModify(r);break}}if(null==r)throw function(e){return new ql("invalid-url","Invalid URL '"+e+"'.")}(t);return r}}]),e}(),Xl=function(){"use strict";function e(t){n(l)(this,e),this.promise_=Promise.reject(t)}return n(h)(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){}}]),e}();function $l(e,t,n,r){if(r<t)throw Kl("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(r>n)throw Kl("Invalid value for '".concat(e,"'. Expected ").concat(n," or less."))}
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
 */function Zl(e){var t=encodeURIComponent,n="?";for(var r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1)}
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
 */(Jl=Yl||(Yl={}))[Jl.NO_ERROR=0]="NO_ERROR",Jl[Jl.NETWORK_ERROR=1]="NETWORK_ERROR",Jl[Jl.ABORT=2]="ABORT";
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
var eh=function(){"use strict";function e(t,r,i,o,a,s,u,c,h,f,d){var p=this;n(l)(this,e),this.url_=t,this.method_=r,this.headers_=i,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=s,this.callback_=u,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return n(h)(e,[{key:"start_",value:function(){var e=this,t=function(t,n){var r=e.resolve_,i=e.reject_,o=n.connection;if(n.wasSuccessCode)try{var a=e.callback_(o,o.getResponse());void 0!==a?r(a):r()}catch(e){i(e)}else if(null!==o){var s=Hl();s.serverResponse=o.getErrorText(),e.errorCallback_?i(e.errorCallback_(o,s)):i(s)}else if(n.canceled){i(e.appDelete_?Gl():Vl())}else{i(new ql("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new th(!1,null,!0)):this.backoffId_=
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
function(e,t,r){var i=1,o=null,a=null,s=!1,u=0;function c(){return 2===u}var l=!1;function h(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];l||(l=!0,t.apply(null,n))}function f(t){o=setTimeout((function(){o=null,e(p,c())}),t)}function d(){a&&clearTimeout(a)}function p(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(l)d();else{var a,p,v;if(e)return d(),void(a=h).call.apply(a,[null,e].concat(n(y)(r)));if(c()||s)return d(),void(p=h).call.apply(p,[null,e].concat(n(y)(r)));i<64&&(i*=2),1===u?(u=2,v=0):v=1e3*(i+Math.random()),f(v)}}var v=!1;function m(e){v||(v=!0,d(),l||(null!==o?(e||(u=2),clearTimeout(o),f(0)):e||(u=1)))}return f(0),a=setTimeout((function(){s=!0,m(!0)}),r),m}((function(t,n){var r=e;if(n)t(!1,new th(!1,null,!0));else{var i=e.connectionFactory_();e.pendingConnection_=i;var o=function(e){var t=e.loaded,n=e.lengthComputable?e.total:-1;null!==r.progressCallback_&&r.progressCallback_(t,n)};null!==e.progressCallback_&&i.addUploadProgressListener(o),i.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==r.progressCallback_&&i.removeUploadProgressListener(o),r.pendingConnection_=null;var e=i.getErrorCode()===Yl.NO_ERROR,n=i.getStatus();if(e&&!r.isRetryStatusCode_(n)){var a=-1!==r.successCodes_.indexOf(n);t(!0,new th(a,i))}else{var s=i.getErrorCode()===Yl.ABORT;t(!1,new th(!1,null,s))}}))}}),t,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&function(e){e(!1)}
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
 */(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}},{key:"isRetryStatusCode_",value:function(e){var t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}]),e}(),th=function e(t,r,i){"use strict";n(l)(this,e),this.wasSuccessCode=t,this.connection=r,this.canceled=!!i};function nh(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
var rh=function(){"use strict";function e(t,r){n(l)(this,e),this._service=t,this._location=r instanceof Ql?r:Ql.makeFromUrl(r,t.host)}return n(h)(e,[{key:"toString",value:function(){return"gs://"+this._location.bucket+"/"+this._location.path}},{key:"_newRef",value:function(t,n){return new e(t,n)}},{key:"root",get:function(){var e=new Ql(this._location.bucket,"");return this._newRef(this._service,e)}},{key:"bucket",get:function(){return this._location.bucket}},{key:"fullPath",get:function(){return this._location.path}},{key:"name",get:function(){return nh(this._location.path)}},{key:"storage",get:function(){return this._service}},{key:"parent",get:function(){var t=
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
function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var n=new Ql(this._location.bucket,t);return new e(this._service,n)}},{key:"_throwIfRoot",value:function(e){if(""===this._location.path)throw new ql("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}]),e}();
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
 */function ih(e,t){var n=null==t?void 0:t.storageBucket;return null==n?null:Ql.makeFromBucketSpec(n,e)}var oh=function(){"use strict";function e(t,r,i,o,a){n(l)(this,e),this.app=t,this._authProvider=r,this._appCheckProvider=i,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=Wl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=o?Ql.makeFromBucketSpec(o,this._host):ih(this._host,this.app.options)}return n(h)(e,[{key:"host",get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=Ql.makeFromBucketSpec(this._url,e):this._bucket=ih(e,this.app.options)}},{key:"maxUploadRetryTime",get:function(){return this._maxUploadRetryTime},set:function(e){$l("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}},{key:"maxOperationRetryTime",get:function(){return this._maxOperationRetryTime},set:function(e){$l("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}},{key:"_getAuthToken",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._overrideAuthToken){t.next=2;break}return t.abrupt("return",e._overrideAuthToken);case 2:if(!(r=e._authProvider.getImmediate({optional:!0}))){t.next=9;break}return t.next=6,r.getToken();case 6:if(null===(i=t.sent)){t.next=9;break}return t.abrupt("return",i.accessToken);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return n(a)(n(u).mark((function t(){var r,i;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e._appCheckProvider.getImmediate({optional:!0}))){t.next=6;break}return t.next=4,r.getToken();case 4:return i=t.sent,t.abrupt("return",i.token);case 6:return t.abrupt("return",null);case 7:case"end":return t.stop()}}),t)})))()}},{key:"_delete",value:function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()}},{key:"_makeStorageReference",value:function(e){return new rh(this,e)}},{key:"_makeRequest",value:function(e,t,n,r){if(this._deleted)return new Xl(Gl());var i=this,o=function(e,t,n,r,i,o){var a=Zl(e.urlParams),s=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new eh(s,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
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
 */(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((function(){return i._requests.delete(o)}),(function(){return i._requests.delete(o)})),o}},{key:"makeRequestWithTokens",value:function(e,t){var r=this;return n(a)(n(u).mark((function i(){var o,a,s;return n(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=n(x),i.next=3,Promise.all([r._getAuthToken(),r._getAppCheckToken()]);case 3:return i.t1=i.sent,o=(0,i.t0)(i.t1,2),a=o[0],s=o[1],i.abrupt("return",r._makeRequest(e,t,a,s).getPromise());case 8:case"end":return i.stop()}}),i)})))()}}]),e}(),ah="@firebase/storage",sh="0.9.7",uh="storage";function ch(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new oh(r,i,o,n,Tt)}bt(new Oe(uh,ch,"PUBLIC").setMultipleInstances(!0)),St(ah,sh,""),St(ah,sh,"esm2017");var lh,hh,fh={};lh=void 0!==e?e:"undefined"!=typeof window?window:fh,hh=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",o="Info",a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,f=function(s,l,f,p){if(!u("body"))return!1;t||d.Notify.init({});var v=c(!0,t,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof p&&!Array.isArray(p)){var m={};"object"==typeof f?m=f:"object"==typeof p&&(m=p),t=c(!0,t,m)}var y,g,_=t[s.toLocaleLowerCase("en")];h++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(y=l,(g=e.document.createElement("div")).innerHTML=y,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(_.fontAwesomeIconColor=_.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(a.wrapID)||e.document.createElement("div");if(k.id=a.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,"center-center"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):"center-top"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):"center-bottom"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):"right-bottom"===t.position?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):"left-top"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):"left-bottom"===t.position?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var b=e.document.getElementById(a.overlayID)||e.document.createElement("div");b.id=a.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=t.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=_.backOverlayColor||t.backOverlayColor,b.className=t.cssAnimation?"nx-with-animation":"",b.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(a.overlayID)||e.document.body.appendChild(b)}e.document.getElementById(a.wrapID)||e.document.body.appendChild(k);var w=e.document.createElement("div");w.id=t.ID+"-"+h,w.className=t.className+" "+_.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=_.textColor,w.style.background=_.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var x="";if(t.closeButton&&"function"!=typeof f&&(x='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+_.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)w.innerHTML='<i style="color:'+_.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+_.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?x:"");else{var I="";s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===o&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?x:"")}else w.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?x:"");if("left-bottom"===t.position||"right-bottom"===t.position){var C=e.document.getElementById(a.wrapID);C.insertBefore(w,C.firstChild)}else e.document.getElementById(a.wrapID).appendChild(w);var T=e.document.getElementById(w.id);if(T){var E,S,R=function(){T.classList.add("nx-remove");var t=e.document.getElementById(a.overlayID);t&&k.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(E)},N=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),k.childElementCount<=0&&null!==k.parentNode){k.parentNode.removeChild(k);var t=e.document.getElementById(a.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(S)};if(t.closeButton&&"function"!=typeof f&&e.document.getElementById(w.id).querySelector("span.nx-close-button").addEventListener("click",(function(){R();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof f||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof f&&f(),R();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof f){var P=function(){E=setTimeout((function(){R()}),t.timeout),S=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};P(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(E),clearTimeout(S)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),P()})))}}if(t.showOnlyTheLastOne&&h>0)for(var O=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),A=0;A<O.length;A++){var L=O[A];null!==L.parentNode&&L.parentNode.removeChild(L)}t=c(!0,t,v)},d={Notify:{init:function(n){t=c(!0,a,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){f(n,e,t,r)},failure:function(e,t,n){f(r,e,t,n)},warning:function(e,t,n){f(i,e,t,n)},info:function(e,t,n){f(o,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return hh(lh)})):"object"==typeof fh?fh=hh(lh):lh.Notiflix=hh(lh);var dh=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:mt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw It.create("bad-app-name",{appName:String(i)});var o=gt.get(i);if(o){if(ke(e,o.options)&&ke(r,o.config))return o;throw It.create("duplicate-app",{appName:i})}var a=new Ue(i),s=!0,u=!1,c=void 0;try{for(var l,h=_t.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;a.addComponent(f)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var d=new Ct(e,r,a);return gt.set(i,d),d}({apiKey:"AIzaSyBAGTQ42yHhlq8cz77MV0dJG1B6OSt6PVk",authDomain:"filmoteca-db.firebaseapp.com",projectId:"filmoteca-db",storageBucket:"filmoteca-db.appspot.com",messagingSenderId:"11660297526",appId:"1:11660297526:web:617fc6ad62f4d10da81f97"}),ph=
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
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et(),t=wt(e,"auth");return t.isInitialized()?t.getImmediate():cn(e,{popupRedirectResolver:Ho,persistence:[Wi,yi,_i]})}(dh),vh=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et(),t=arguments.length>1?arguments[1]:void 0;wt(e,"database").getImmediate({identifier:t})}(dh),new v),mh=document.querySelector(".grid"),yh=document.querySelector(".home-grid"),gh=document.querySelector(".search-form"),_h=document.querySelector(".form-wrap"),kh=document.querySelector(".header__failure-message"),bh=document.querySelector(".gallery__failure-message"),wh=document.querySelector(".nav__btn--home"),xh=document.querySelector(".nav__btn--library"),Ih=document.querySelector(".header"),Ch=document.querySelector(".buttons"),Th=document.querySelector(".movie-card"),Eh=document.querySelector("[data-modal]"),Sh=document.querySelector("[data-modal-close]"),Rh=document.querySelector("[data-auth-close]"),Nh=document.getElementById("next-page"),Ph=document.getElementById("prev-page"),Oh=document.querySelector(".pagination__page-buttons"),Ah=document.querySelector("[data-auth]"),Lh=document.querySelector(".auth__wrap"),Dh=document.getElementById("txtEmail"),Mh=document.getElementById("txtPassword"),Uh=document.getElementById("btnLogin"),Fh=document.getElementById("btnSignup"),jh=document.getElementById("btnLogout"),Bh=document.querySelector(".auth__success-msg"),Wh=document.querySelector(".auth__logout");gh.addEventListener("submit",(function(e){return af.apply(this,arguments)})),wh.addEventListener("click",(function(){yh.innerHTML="",Oh.innerHTML="",rf(),Ih.classList.replace("library-header","header"),wh.parentElement.classList.add("nav__item--active"),xh.parentNode.classList.remove("nav__item--active"),Ch.classList.add("hidden"),_h.classList.remove("hidden"),mh.classList.add("home-grid"),mh.classList.remove("library-grid")})),xh.addEventListener("click",(function(){Oh.innerHTML="",yh.innerHTML="",Ih.classList.replace("header","library-header"),xh.parentNode.classList.add("nav__item--active"),wh.parentNode.classList.remove("nav__item--active"),_h.classList.add("hidden"),Ch.classList.remove("hidden"),mh.classList.remove("home-grid"),mh.classList.add("library-grid")})),Uh.addEventListener("click",(function(){return Jh.apply(this,arguments)})),Fh.addEventListener("click",(function(){return Qh.apply(this,arguments)})),jh.addEventListener("click",(function(){return Kh.apply(this,arguments)})),Nh.addEventListener("click",(function(){if(Number(qh.textContent)%5==0){var e=Number(qh.textContent)+1;return Oh.innerHTML="",$h(e,5),void(!1===Vh?Zh(e):tf(e))}(qh=qh.nextElementSibling).classList.add("pagination__activ"),qh.previousElementSibling.classList.remove("pagination__activ");var t=qh.textContent;!1===Vh?Zh(t):tf(t),Number(qh.textContent)===Hh?Nh.disabled=!0:1===Number(qh.textContent)?Ph.disabled=!0:Ph.disabled=!1})),Ph.addEventListener("click",(function(){if((Number(qh.textContent)-1)%5==0){var e=Number(qh.textContent)-1;return Oh.innerHTML="",$h(e-5+1,5),!1===Vh?Zh(e):tf(e),qh=Oh.lastElementChild,Oh.firstElementChild.classList.remove("pagination__activ"),void qh.classList.add("pagination__activ")}qh.classList.remove("pagination__activ"),(qh=qh.previousElementSibling).classList.add("pagination__activ");var t=qh.textContent;!1===Vh?Zh(t):tf(t),1===Number(qh.textContent)?Ph.disabled=!0:Ph.disabled=!1})),Oh.addEventListener("click",(function(e){if(qh.classList.remove("pagination__activ"),"BUTTON"!==e.target.nodeName)return;(qh=e.target).classList.add("pagination__activ");var t=qh.textContent;!1===Vh?Zh(t):tf(t),1===Number(qh.textContent)?Ph.disabled=!0:Ph.disabled=!1})),wh.parentElement.classList.add("nav__item--active"),Ch.classList.add("hidden"),mh.classList.add("home-grid"),rf(),mh.addEventListener("click",(function(e){return sf.apply(this,arguments)})),Sh.addEventListener("click",(function(){Eh.classList.toggle("is-hidden")})),Rh.addEventListener("click",(function(){Ah.classList.toggle("is-hidden")}));var qh=null,zh=[],Hh=0,Vh=!1;function Kh(){return(Kh=n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fi(ph);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Gh(){return Yh.apply(this,arguments)}function Yh(){return(Yh=n(a)(n(u).mark((function e(){return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:hi(ph,(function(e){e?(console.log(e),Bh.textContent="You've entered with email ".concat(e.email),Lh.classList.add("hidden"),Wh.classList.remove("hidden"),Rh.classList.remove("hidden")):(Lh.classList.remove("hidden"),Wh.classList.add("hidden"),Rh.classList.add("hidden"))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Jh(){return(Jh=n(a)(n(u).mark((function e(){var t,r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Dh.value,r=Mh.value,e.prev=2,e.next=5,li(ph,t,r);case 5:i=e.sent,Bh.textContent="You've signed in with email ".concat(i.user.email),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),fh.Notify.failure("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function Qh(){return(Qh=n(a)(n(u).mark((function e(){var t,r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Dh.value,r=Mh.value,e.prev=2,e.next=5,ui(ph,t,r);case 5:i=e.sent,Bh.textContent="You've created account with email ".concat(i.user.email),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),fh.Notify.failure("".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function Xh(){Ah.classList.remove("is-hidden"),Rh.classList.add("hidden")}function $h(e,t){var n=function(e,t){for(var n=[],r=e;r<=t;r+=1)n.push('<button type="button" class="pagination__btn page">'.concat(r,"</button>"));return n.join("")}(e,e+t-1);Oh.insertAdjacentHTML("beforeend",n),zh=document.querySelectorAll(".page"),(qh=zh[0]).classList.add("pagination__activ")}function Zh(e){return ef.apply(this,arguments)}function ef(){return(ef=n(a)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return yh.innerHTML="",e.next=3,vh.fetchTrendingMovies(t);case 3:r=e.sent,i=r.results,r.total_pages,uf(i,yh);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tf(e){return nf.apply(this,arguments)}function nf(){return(nf=n(a)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return yh.innerHTML="",e.next=3,vh.fetchMoviesByKeyWord(t);case 3:r=e.sent,i=r.results,r.total_pages,uf(i,yh);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rf(){return of.apply(this,arguments)}function of(){return(of=n(a)(n(u).mark((function e(){var t,r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Xh(),Gh(),e.prev=2,e.next=5,vh.fetchTrendingMovies(1);case 5:t=e.sent,r=t.results,i=t.total_pages,uf(r,yh),Hh=i,$h(1,5),Vh=!1,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}function af(){return(af=n(a)(n(u).mark((function e(t){var r,i,o;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),vh.query=t.currentTarget.elements.searchQuery.value,console.log(vh.query),bh.textContent="",kh.textContent="",""===vh.query&&(bh.textContent="Oops, something went wrong!"),e.prev=6,e.next=9,vh.fetchMoviesByKeyWord(1);case 9:r=e.sent,i=r.results,o=r.total_pages,0===i.length&&(kh.textContent="Search result not successful. Enter the correct movie name and"),console.log(i),Hh=o,Oh.innerHTML="",yh.innerHTML="",uf(i,yh),$h(1,5),Vh=!0,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[6,22]])})))).apply(this,arguments)}function sf(){return(sf=n(a)(n(u).mark((function e(t){var r,i;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===t.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return r=t.target.id,console.log(r),e.next=6,vh.fetchMovieInfo(r);case 6:i=e.sent,Eh.classList.remove("is-hidden"),cf(i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function uf(e,t){var n=function(e){return e.map((function(e){var t=e.release_date.slice(0,4);return'\n               <a class="film">\n                  <img class="film__poster" src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" id = "').concat(e.id,'" alt="').concat(e.title,'" loading="lazy" />\n                  <div class="film__info">\n                        <p class="film__title">').concat(e.title,'</p>\n                        <p class="film__genre">').concat(e.genre_ids,"<span>| ").concat(t,"</span></p>\n                  </div>\n               </a>")})).join("")}(e);t.insertAdjacentHTML("beforeend",n)}function cf(e){Th.innerHTML="";var t=function(e){var t=e.genres.map((function(e){return e.name})).join(", "),n=Number(e.popularity).toFixed(1).toString();return'\n      <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" id = "').concat(e.id,'" alt="').concat(e.title,'"/>\n      <div class="film-card__info">\n            <h2 class="film-card__title">').concat(e.title,'</h2>\n            <div class="film-card__details">\n                  <p>\n                        <span class="film-card__detail">Vote / Votes</span>\n                        <b class = "film-card__value"><span class="film-card__value--accent">').concat(e.vote_average,"</span>/").concat(e.vote_count,'</b>\n                   </p>\n                  <p>\n                        <span class="film-card__detail">Popularity</span>\n                        <b class = "film-card__value">').concat(n,'</b>\n                  </p>\n                  <p>\n                      <span class="film-card__detail">Original Title</span>\n                      <b class = "film-card__value film-card__value--upper">').concat(e.original_title,'</b>\n                  </p>\n                  <p>\n                      <span class="film-card__detail">Genre</span>\n                      <b class = "film-card__value">').concat(t,'</b>\n                  </p>\n            </div>\n            <h3 class="film-card__about">About</h3>\n            <p class="film-card__description">').concat(e.overview,'</p>\n            <ul class="modal__option-buttons">\n                  <button type="button" class="btn-modal">add to Watched</button>\n                  <button type="button" class="btn-modal ">add to queue</button>\n            </ul>\n      </div>')}(e);console.log(t),Th.insertAdjacentHTML("beforeend",t)}}();
//# sourceMappingURL=index.f10ff161.js.map
