parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"\n  ".concat(n," promise was ").concat(t?"rejected":"resolved","\n")},t=new Promise(function(t,e){document.addEventListener("mousedown",function(e){0===e.button&&t(n("First"))}),setTimeout(function(){return e(n("First",!0))},3e3)}),e=new Promise(function(t){document.addEventListener("mousedown",function(e){1!==e.button&&t(n("Second"))})}),o={},i=new Promise(function(t){document.addEventListener("mousedown",function(e){0===e.button&&(o[1]=!0),2===e.button&&(o[2]=!0),o[1]&&o[2]&&t(n("Third"))})});function r(n){var t="resolved"===n.split(" ").pop()?"success":"error",e=document.createElement("div");e.classList.add(t),e.setAttribute("data-qa","notification"),e.innerHTML=n,document.body.append(e)}t.then(r,r),e.then(r),i.then(r);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f83983bd.js.map