!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.44fee37b.js","./File-legacy.4c5835e0.js","./icon-legacy.38d1bd33.js","./index-legacy.445ff6b7.js","./Layout-legacy.72e1d8ec.js","./useTitle-legacy.8b5cd268.js","./index-legacy.8fcb7b7a.js","./FolderTree-legacy.4aae376f.js","./index-legacy.e7da8262.js"],(function(e){"use strict";var t,r,i,a,o,c;return{setters:[function(n){t=n.a,r=n.m,i=n.h,a=n.C,o=n.a1},function(n){c=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),u=n(r(!1),2),l=u[0],f=u[1];return i(c,{get children(){return i(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
