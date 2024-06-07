!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(T){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=L(a,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=s(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var h={};function y(){}function v(){}function p(){}var d={};f(d,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==n&&o.call(m,a)&&(d=m);var w=p.prototype=y.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,u,c){var f=s(r[i],r,a);if("throw"!==f.type){var l=f.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=p,f(w,"constructor",p),f(p,"constructor",v),v.displayName=f(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,f(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),f(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),f(w,c,"Generator"),f(w,a,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,r)||o(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.01548f9a.js"],(function(t){"use strict";var o,i,a,u,c,f,l,s;return{setters:[function(t){o=t.e,i=t.dt,a=t.du,u=t.x,c=t.r,f=t.k,l=t.m,s=t.i}],execute:function(){t({a:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.length)return;t=t.map((function(t){return t.toUpperCase()}));var n=e.preventDefault,o=void 0===n||n,i=g(),a=b(),f=!1,l=function(e){if(!e.length)return f=!1;if(!f){var n=i();e.length<t.length?d(e,t.slice(0,e.length))?o&&n&&n.preventDefault():f=!0:(f=!0,d(e,t)&&(o&&n&&n.preventDefault(),r(n)))}},s=function(e){var n=e.at(-1);if(n){var a=i();if(o&&n.length<t.length)h(n,t.slice(0,t.length-1))&&a&&a.preventDefault();else if(h(n,t)){var u=e.at(-2);u&&!h(u,t.slice(0,t.length-1))||(o&&a&&a.preventDefault(),r(a))}}};u(c(a,e.requireReset?l:s))},c:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t.toUpperCase();var e=r.preventDefault,n=void 0===e||e,o=g(),i=w();return f((function(){var r;return i()===t&&(n&&null!==(r=o())&&void 0!==r&&r.preventDefault(),!0)}))}});var h=function(t,r){return t===r||t.length===r.length&&t.every((function(t,e){return t===r[e]}))},y=o;function v(t,r,e,n){return t.addEventListener(r,e,n),y(t.removeEventListener.bind(t,r,e,n))}function p(t){var r,e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a(),u=0;return function(){return u++,o((function(){u--,queueMicrotask((function(){!u&&e&&(e(),e=r=void 0)}))})),e||i((function(n){return r=t(e=n)}),n),r}}function d(t,r){for(var e=t.length-1;e>=0;e--){var n=r.slice(0,e+1);if(!h(t[e],n))return!1}return!0}var g=p((function(){var t=n(l(null),2),r=t[0],e=t[1];return v(window,"keydown",(function(t){e(t),setTimeout((function(){return e(null)}))})),r})),m=p((function(){var t=n(l([]),2),o=t[0],i=t[1],a=function(){return i([])},u=g();return v(window,"keydown",(function(t){if(!t.repeat&&"string"==typeof t.key){var r=t.key.toUpperCase(),n=o();if(!n.includes(r)){var a=[].concat(e(n),[r]);0===n.length&&"ALT"!==r&&"CONTROL"!==r&&"META"!==r&&"SHIFT"!==r&&(t.shiftKey&&a.unshift("SHIFT"),t.altKey&&a.unshift("ALT"),t.ctrlKey&&a.unshift("CONTROL"),t.metaKey&&a.unshift("META")),i(a)}}})),v(window,"keyup",(function(t){if("string"==typeof t.key){var r=t.key.toUpperCase();i((function(t){return t.filter((function(t){return t!==r}))}))}})),v(window,"blur",a),v(window,"contextmenu",(function(t){t.defaultPrevented||a()})),o[0]=o,o[1]={event:u},o[Symbol.iterator]=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o[0];case 2:return t.next=4,o[1];case 4:case"end":return t.stop()}}),t)})),o})),w=p((function(){var t=m(),r=s(t);return f((function(){var e=t(),n=r;return r=e,0===n.length&&1===e.length?e[0]:null}))})),b=p((function(){var t=m();return f((function(r){return 0===t().length?[]:[].concat(e(r),[t()])}),[])}))}}}))}();
