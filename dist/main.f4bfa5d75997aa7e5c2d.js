!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var r=n(2),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function s(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){s(t[r])&&s(n)?t[r]=e(t[r],n):s(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.QuestionApi=t.questionType=t.questionDifficulty=void 0;var i,a,u=n(14);!function(e){e.all="all",e.easy="easy",e.medium="medium",e.hard="hard"}(i=t.questionDifficulty||(t.questionDifficulty={})),function(e){e.all="all",e.multiple="multiple",e.boolean="boolean"}(a=t.questionType||(t.questionType={}));var s=function(){function e(e,t,n,r){void 0===e&&(e=5),void 0===t&&(t=0),void 0===n&&(n=i.all),void 0===r&&(r=a.all),this.baseUrl="https://opentdb.com/api.php?",this.setAmount(e),this.categoryId=t,this.difficulty=n,this.type=r}return e.prototype.setAmount=function(e){this.amount=e<1?1:e},e.prototype.getAmount=function(){return this.amount},e.prototype.setCategory=function(e){this.categoryId=e<1?1:e},e.prototype.getCategory=function(){return this.categoryId},e.prototype.setDifficulty=function(e){this.difficulty=e},e.prototype.getDifficulty=function(){return this.difficulty},e.prototype.setQuestionType=function(e){this.type=e},e.prototype.getQuestionType=function(){return this.type},e.prototype.requestForSessionToken=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return"0",[4,u.default.get("https://opentdb.com/api_token.php?command=request").then((function(e){return e.data.token})).catch((function(e){return alert("Something went wrong try again later"+e)}))];case 1:return[2,e.sent()]}}))}))},e.prototype.setSessionToken=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return e=this,[4,this.requestForSessionToken()];case 1:return e.token=t.sent(),[2]}}))}))},e.prototype.getSessionToken=function(){return this.token},e.prototype.getAllCategories=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("https://opentdb.com/api_category.php").then((function(e){return e.data.trivia_categories})).catch((function(e){return alert("Something went wrong try again later"+e)}))];case 1:return[2,e.sent()]}}))}))},e.prototype.getAllQuestionsData=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("https://opentdb.com/api_count_global.php").then((function(e){return e.data})).catch((function(e){return alert("Something went wrong try again later"+e)}))];case 1:return[2,e.sent()]}}))}))},e.prototype.getQuestionForCategory=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,u.default.get("https://opentdb.com/api_count.php?category="+e).then((function(e){return e.data.category_question_count})).catch((function(e){return alert("Something went wrong try again later"+e)}))];case 1:return[2,t.sent()]}}))}))},e.prototype.constructRequestString=function(){var e=this.baseUrl+"amount="+this.amount;return 0!==this.categoryId&&(e+="&category="+this.categoryId),this.difficulty!==i.all&&(e+="&difficulty="+this.difficulty),this.type!==a.all&&(e+="&type="+this.type),"0"!==this.token&&void 0!==this.token&&(e+="&token="+this.token),e},e.prototype.getQuizQuestions=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get(this.constructRequestString()).then((function(e){return e.data.results})).catch((function(e){return alert("Something went wrong try again later"+e)}))];case 1:return[2,e.sent()]}}))}))},e}();t.QuestionApi=s},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(21),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,s={adapter:("undefined"!=typeof XMLHttpRequest?u=n(6):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(u=n(6)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(i)})),e.exports=s}).call(this,n(20))},function(e,t,n){"use strict";var r=n(0),o=n(22),i=n(24),a=n(3),u=n(25),s=n(28),c=n(29),l=n(7);e.exports=function(e){return new Promise((function(t,n){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var y=u(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(y,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,i),p=null}},p.onabort=function(){p&&(n(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||c(y))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),f||(f=null),p.send(f)}))}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),r.forEach(i,c),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(void 0,t[o])})),r.forEach(u,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var l=o.concat(i).concat(a).concat(u),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,c),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(11);var r=n(13).StartQuizForm();document.body.appendChild(r)},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StartQuizForm=void 0;var r=n(1),o=n(33),i=n(34),a=n(35),u=n(39);t.StartQuizForm=function(){var e=document.createElement("div");e.classList.add("container");var t=document.createElement("form");t.classList.add("startQuizForm");var n=document.createElement("h2");n.textContent="Choose quiz parameters",t.appendChild(n),t.appendChild(a.btnToCategoryGallery());var s=document.createElement("p");return s.id="currentCategory",s.textContent="Current category: all",t.appendChild(s),t.appendChild(o.chooseDifficulty(r.questionDifficulty)),t.appendChild(i.chooseQuestionType(r.questionType)),t.appendChild(u.submitFormBtn()),e.appendChild(t),e}},function(e,t,n){e.exports=n(15)},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(16),a=n(8);function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var s=u(n(5));s.Axios=i,s.create=function(e){return u(a(s.defaults,e))},s.Cancel=n(9),s.CancelToken=n(30),s.isCancel=n(4),s.all=function(e){return Promise.all(e)},s.spread=n(31),s.isAxiosError=n(32),e.exports=s,e.exports.default=s},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(17),a=n(18),u=n(8);function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(u(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,r){return this.request(u(r||{},{method:e,url:t,data:n}))}})),e.exports=s},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(19),i=n(4),a=n(5);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,c=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(26),o=n(27);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(9);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chooseDifficulty=void 0,t.chooseDifficulty=function(e){var t=document.createElement("div");t.classList.add("formRow");var n=document.createElement("label");n.textContent="Difficulty: ",n.htmlFor="difficulty";var r=document.createElement("select");for(var o in r.name="difficulty",e){var i=document.createElement("option");i.value=o,i.text=o,r.appendChild(i)}return t.appendChild(n),t.appendChild(r),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chooseQuestionType=void 0,t.chooseQuestionType=function(e){var t=document.createElement("div");t.classList.add("formRow");var n=document.createElement("label");n.textContent="Question type: ",n.htmlFor="type";var r=document.createElement("select");for(var o in r.name="type",e){var i=document.createElement("option");i.value=o,i.text=o,r.appendChild(i)}return t.appendChild(n),t.appendChild(r),t}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.btnToCategoryGallery=void 0;var i=n(36);t.btnToCategoryGallery=function(){var e=document.createElement("button");return e.classList.add("cta"),e.textContent="Choose category",e.addEventListener("click",(function(e){e.preventDefault(),r(void 0,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:return document.querySelector(".startQuizForm").style.display="none",(e=document.createElement("p")).textContent="Loading...",e.style.textAlign="center",e.style.color="white",document.body.appendChild(e),[4,i.generateCategoryGallery()];case 1:return t=n.sent(),document.body.appendChild(t),document.body.removeChild(e),[2]}}))}))})),e}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.generateCategoryGallery=void 0;var i=n(1),a=n(37);t.generateCategoryGallery=function(){return r(void 0,void 0,void 0,(function(){var e,t,n;return o(this,(function(u){switch(u.label){case 0:return(e=document.createElement("div")).classList.add("gallery"),[4,r(void 0,void 0,void 0,(function(){var e,t,n;return o(this,(function(r){switch(r.label){case 0:return[4,(new i.QuestionApi).getAllCategories()];case 1:for(e=r.sent(),t=[],n=0;n<Object.values(e).length;n++)t.push(Object.values(e)[n]);return[2,t]}}))}))];case 1:return t=u.sent(),n=t.map((function(e){return a.categoryGalleryElement(Object(e).id,Object(e).name)})),[4,Promise.all(n)];case 2:return u.sent().map((function(t){return e.appendChild(t)})),[2,e]}}))}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.categoryGalleryElement=void 0;var i=n(1),a=n(38),u=function(e){return{totalQuestions:Object(e).total_question_count,easyQuestions:Object(e).total_easy_question_count,mediumQuestions:Object(e).total_medium_question_count,hardQuestions:Object(e).total_hard_question_count}},s=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return[4,(new i.QuestionApi).getQuestionForCategory(e)];case 1:return t=n.sent(),[2,u(t)]}}))}))};t.categoryGalleryElement=function(e,t){return r(void 0,void 0,void 0,(function(){var n,r,i,u,c,l,f,d,p;return o(this,(function(o){switch(o.label){case 0:return(n=document.createElement("div")).classList.add("gallery__item"),(r=document.createElement("h2")).textContent=t,r.dataset.id=e.toString(),[4,s(e)];case 1:return i=o.sent(),u=i.totalQuestions,c=i.easyQuestions,l=i.mediumQuestions,f=i.hardQuestions,(d=document.createElement("p")).textContent="Total: "+u,d.classList.add("gallery__total"),n.appendChild(r),n.appendChild(d),n.appendChild(a.questionsByDifficulty(c,l,f)),(p=document.createElement("button")).textContent="Choose me!",p.classList.add("gallery__cta"),p.addEventListener("click",(function(e){return function(e){var t=e.target.parentNode,n=t.querySelector("h2").dataset.id,r=t.querySelector("h2").textContent;document.querySelector("#currentCategory").textContent="Current category: "+r,sessionStorage.setItem("categoryId",n),document.querySelector(".startQuizForm").style.display="flex",document.body.removeChild(document.querySelector(".gallery"))}(e)})),n.appendChild(p),[2,n]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.questionsByDifficulty=void 0;var r=function(e,t){var n=document.createElement("div"),r=document.createElement("p");r.textContent=""+e;var o=document.createElement("p");switch(o.textContent=""+t,e){case"Easy:":o.classList.add("gallery__easy");break;case"Medium:":o.classList.add("gallery__medium");break;case"Hard:":o.classList.add("gallery__hard")}return n.appendChild(r),n.appendChild(o),n};t.questionsByDifficulty=function(e,t,n){var o=document.createElement("div");return o.classList.add("gallery__difficultyContainer"),o.appendChild(r("Easy:",e)),o.appendChild(r("Medium:",t)),o.appendChild(r("Hard:",n)),o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.submitFormBtn=void 0;var r=n(40);t.submitFormBtn=function(){var e=document.createElement("input");return e.setAttribute("type","submit"),e.value="Start quiz",e.addEventListener("click",(function(e){e.preventDefault(),sessionStorage.setItem("quizDifficulty",document.querySelector("select[name='difficulty']").value),sessionStorage.setItem("quizType",document.querySelector("select[name='type']").value),sessionStorage.setItem("points","0"),document.querySelector(".startQuizForm").style.display="none",r.startGame()})),e}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.startGame=void 0;var i=n(1),a=n(41);t.startGame=function(){return r(void 0,void 0,void 0,(function(){var e,t,n,r,u;return o(this,(function(o){switch(o.label){case 0:return e=null===sessionStorage.getItem("categoryId")?0:parseInt(sessionStorage.getItem("categoryId")),t=function(){switch(sessionStorage.getItem("quizDifficulty")){case"all":return i.questionDifficulty.all;case"easy":return i.questionDifficulty.easy;case"medium":return i.questionDifficulty.medium;case"hard":return i.questionDifficulty.hard}}(),n=function(){switch(sessionStorage.getItem("quizType")){case"all":return i.questionType.all;case"multiple":return i.questionType.multiple;case"boolean":return i.questionType.boolean}}(),[4,(r=new i.QuestionApi(5,e,t,n)).setSessionToken()];case 1:return o.sent(),[4,r.getQuizQuestions()];case 2:return function(e){for(var t=Object(e),n=[],r=[],o=0;o<t.length;o++)n.push(Object(e)[o].correct_answer),r.push(Object(e)[o].question);sessionStorage.setItem("correct",JSON.stringify(n)),sessionStorage.setItem("question",JSON.stringify(r))}(u=o.sent()),a.duringGame(u),[2]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duringGame=void 0;var r=n(42),o=n(45);t.duringGame=function(e){var t=Object(e),n=document.createElement("div");n.classList.add("duringGame");var i=1;t.map((function(e){n.appendChild(r.quizAnswerBlock(function(e){return{category:Object(e).category,correct_answer:Object(e).correct_answer,difficulty:Object(e).difficulty,incorrect_answers:Object(e).incorrect_answers,question:Object(e).question,questionType:Object(e).type}}(e),i)),i++})),n.appendChild(o.finishQuizBtn()),document.body.appendChild(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.quizAnswerBlock=void 0;var r=n(43),o=n(44);t.quizAnswerBlock=function(e,t){var n=document.createElement("div");n.classList.add("duringGame__item"),n.dataset.id=t.toString();var i=document.createElement("h3");return i.textContent=e.category,n.appendChild(i),n.appendChild(r.questionDescription(e.question,e.difficulty)),n.appendChild(o.questionAnswers(e.correct_answer,e.incorrect_answers,e.questionType)),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.questionDescription=void 0,t.questionDescription=function(e,t){var n=document.createElement("p");switch(n.innerHTML=e,n.classList.add("duringGame--margin"),t){case"easy":n.classList.add("gallery__easy");break;case"medium":n.classList.add("gallery__medium");break;case"hard":n.classList.add("gallery__hard")}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.questionAnswers=void 0;var r=function(e){var t=e.target;!function(e){Array.from(e.querySelectorAll("button")).map((function(e){return e.classList.remove("duringGame__answerBtn--clicked")}))}(t.parentNode),t.classList.add("duringGame__answerBtn--clicked")};t.questionAnswers=function(e,t,n){var o=document.createElement("div");o.classList.add("duringGame--bottom");for(var i=[],a="multiple"===n?4:2,u=0;u<a;u++)i[u]=document.createElement("button"),i[u].classList.add("duringGame__answerBtn"),i[u].addEventListener("click",(function(e){return r(e)}));if(2===a)i[0].innerHTML=e,o.appendChild(i[0]),i[1].innerHTML=t[0],o.appendChild(i[1]);else{var s=Math.floor(4*Math.random());i[s].innerHTML=e;var c=i.indexOf(i[s]);o.appendChild(i[s]),c>-1&&i.splice(c,1);for(u=0;u<i.length;u++)i[u].innerHTML=t[u],o.appendChild(i[u])}return o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.finishQuizBtn=void 0;var r=n(46);t.finishQuizBtn=function(){var e=document.createElement("button");return e.textContent="Finish Quiz!",e.classList.add("duringGame__finish"),e.addEventListener("click",(function(){r.quizSummary(function(){for(var e=[],t=1;t<6;t++){var n=document.querySelector(".duringGame__item[data-id='"+t+"'] > .duringGame--bottom > button.duringGame__answerBtn--clicked");e[t-1]=null===n?null:n.textContent}return e}())})),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.quizSummary=void 0;var r=n(47),o=n(48),i=function(e,t,n){console.log("Question:",e,"User:",t,"Correct:",n);var r=document.createElement("div");r.classList.add("finalView__item");var o=document.createElement("p");o.innerHTML=e;var i=document.createElement("p");if(i.innerHTML="Your answer: "+(null===t?"none":t),t===n){i.classList.add("gallery__easy");var a=parseInt(sessionStorage.getItem("points"));a++,sessionStorage.setItem("points",a.toString())}else i.classList.add("gallery__hard");var u=document.createElement("p");return u.innerHTML="Answer: "+n,u.classList.add("gallery__easy"),r.appendChild(o),r.appendChild(i),r.appendChild(u),r};t.quizSummary=function(e){document.body.removeChild(document.querySelector(".duringGame"));var t=JSON.parse(sessionStorage.getItem("correct")),n=JSON.parse(sessionStorage.getItem("question")),a=document.createElement("div");a.classList.add("finalView");for(var u=0;u<n.length;u++)a.appendChild(i(n[u],e[u],t[u]));a.appendChild(r.userPoints()),a.appendChild(o.btnCloseSummary()),document.body.appendChild(a)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userPoints=void 0,t.userPoints=function(){var e=document.createElement("div"),t=document.createElement("p");return t.textContent="Your score: "+sessionStorage.getItem("points"),t.classList.add("finalView__points"),e.appendChild(t),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.btnCloseSummary=void 0;t.btnCloseSummary=function(){var e=document.createElement("div");e.style.display="flex",e.style.justifyContent="center";var t=document.createElement("button");return t.classList.add("finalView__btn"),t.textContent="Close summary",t.addEventListener("click",(function(){return document.querySelector(".startQuizForm").style.display="flex",void document.body.removeChild(document.querySelector(".finalView"))})),e.appendChild(t),e}}]);