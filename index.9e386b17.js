!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire09c9;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequire09c9=o),o.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,i)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}})),o.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(t,e,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(q([])));w&&w!==n&&r.call(w,o)&&(b=w);var x=y.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,a,c){var s=u(t[i],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function q(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=y,s(x,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,c,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=q,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("fkvfI",(function(e,n){t(e.exports,"getPopularMovies",(function(){return i})),t(e.exports,"getSearchQuery",(function(){return o})),t(e.exports,"getMovieById",(function(){return a})),t(e.exports,"getGenreList",(function(){return c}));var r="fadee9dfff8cb6b1bff36771479589d6";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r,"&page=").concat(t)).then((function(t){return t.json()})).then((function(t){var e;if(null!==(e=t.success)&&void 0!==e&&!e)throw new Error(t.status_message);return t}))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="https://api.themoviedb.org/3";return fetch("".concat(n,"/search/movie?api_key=").concat(r,"&query=").concat(t,"&language=uk&page=").concat(e,"&include_adult=false")).then((function(t){return t.json()})).then((function(t){var e;if(null!==(e=t.success)&&void 0!==e&&!e)throw new Error(t.status_message);return t}))}function a(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r,"&language=uk")).then((function(t){return t.json()})).then((function(t){var e;if(null!==(e=t.success)&&void 0!==e&&!e)throw new Error(t.status_message);return t}))}function c(){return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(r,"&language=uk")).then((function(t){return t.json()})).then((function(t){var e;if(null!==(e=t.success)&&void 0!==e&&!e)throw new Error(t.status_message);return t}))}})),o.register("dpMWy",(function(e,n){t(e.exports,"changeMoviesPage",(function(){return s}));var r=1,i=document.querySelector('[data-move="backward"]'),o=document.querySelector('[data-move="forward"]'),a=document.querySelector(".number-page"),c=document.querySelector(".card-set");function s(t,e){function n(t){t.removeAttribute("disabled"),t.classList.remove("movies-navigation__arrow-btn--disabled")}function s(t){t.setAttribute("disabled",""),t.classList.add("movies-navigation__arrow-btn--disabled")}function l(){if(t<6)return o.style.display="none",i.style.display="none",function(){var e="";a.innerHTML="";for(var n=0;n<t+2;n+=1)e+='<li class="number-page__item">\n                <button type="button" class="number-page__btn">'.concat(n,"</button>\n              </li>");a.insertAdjacentHTML("afterbegin",e)}(),p(),h(),void a.children[1].firstElementChild.classList.add("number-page__btn--current");p(),g(),a.children[1].firstElementChild.classList.add("number-page__btn--current"),a.lastElementChild.firstElementChild.textContent=String(t),s(i),n(o),y(),_()}function u(){document.querySelector(".number-page__btn--current").classList.remove("number-page__btn--current")}function d(){u(),a.children[r].firstElementChild.classList.add("number-page__btn--current")}function f(){u(),a.children[r-t+5].firstElementChild.classList.add("number-page__btn--current")}function h(){a.lastElementChild.style.display="none",a.children[a.children.length-2].style.marginRight="0px"}function p(){a.firstElementChild.style.display="none"}function v(){a.firstElementChild.style.display="list-item"}function g(){a.lastElementChild.style.display="list-item",a.children[a.children.length-2].style.marginRight="16px"}function m(){for(var t=1;t<a.children.length-1;t+=1){var e=r-3+t;a.children[t].firstElementChild.textContent=e.toString()}}function y(){for(var t=1;t<a.children.length-1;t+=1){var e=t;a.children[t].firstElementChild.textContent=e.toString()}}function b(){for(var e=1;e<a.children.length-1;e+=1){var n=t-5+e;a.children[e].firstElementChild.textContent=n.toString()}}function _(){window.innerWidth<768&&(p(),h())}l(),i.addEventListener("click",(function(){e(r-=1),c.scrollIntoView(),n(o),1===r&&s(i);if(r>t-3)return void f();r<4&&(p(),d());r>=3&&r<=t-3&&(g(),m());_()})),o.addEventListener("click",(function(){e(r+=1),c.scrollIntoView(),n(i),r===t&&s(o);if(r<4)return void d();r>t-3&&(h(),f());r>=4&&r<=t-2&&(v(),m());_()})),a.addEventListener("click",(function(w){if("BUTTON"!==w.target.nodeName)return;if(w.target.classList.contains("number-page__btn--current"))return;if(r=Number(w.target.textContent),e(r),c.scrollIntoView(),1===r)return u(),void l();if(r===t)return u(),void function(){h(),t>5&&v();if(a.children[t>=5?5:t].firstElementChild.classList.add("number-page__btn--current"),n(i),s(o),t<=5)return void y();b()}();r>=4&&r<=t-3&&(u(),a.children[3].firstElementChild.classList.add("number-page__btn--current"),v(),g(),n(o),n(i),m());if(r<4)return d(),p(),t>5&&g(),n(o),void y();r>t-3&&(f(),h(),t>5&&v(),n(o),n(i),b());_()}))}})),o.register("73ES2",(function(t,n){var r,i=o("bpxeT"),a=o("2TvXO"),c=o("fkvfI"),s=o("hJTci"),l=(s=o("hJTci"),{openModalFilm:document.querySelector(".card-set"),closeModalFilm:document.querySelector(".film-card__button-close"),body:document.querySelector("body"),backdropModalFilm:document.querySelector(".backdrop"),modalFilm:document.querySelector(".film-card__box")}),u=document.querySelector(".spinner--modal"),d=(r=e(i)(e(a).mark((function t(n){var r,i,o,d;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u.classList.add("spinner"),n.target.closest(".card-set__item")){t.next=3;break}return t.abrupt("return");case 3:return l.modalFilm.innerHTML="",l.backdropModalFilm.classList.remove("visually-hidden"),l.body.style.overflow="hidden",r=n.target.closest(".card-set__item").dataset.id,t.next=9,(0,c.getMovieById)(r);case 9:i=t.sent,f(i),o=document.querySelector(".description-button__watched"),d=document.querySelector(".description-button__queue"),(0,s.changeWatchedButtonCondition)(r,o),(0,s.changeQueueButtonCondition)(r,d),u.classList.remove("spinner"),l.body.addEventListener("keydown",h),l.backdropModalFilm.addEventListener("click",p);case 18:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),f=function(t){var e=t.poster_path,n=t.title,r=t.id,i=t.vote_average,o=t.vote_count,a=t.popularity,c=t.original_title,s=t.genres,u=t.overview,d=s.map((function(t){return t.name})).join(", "),f='<div class="film-card__image-block">\n      <img\n        class="film-card__image"\n        src="https://image.tmdb.org/t/p/original'.concat(e,'"\n        alt="film"\n      />\n    </div>\n    <div class="film-card__description">\n      <h1 class="film-card__description-title">').concat(n,'</h1>\n      <ul class="film-card__description-set">\n        <li class="description-set">\n          <p class="description-set__text">Vote / Votes</p>\n          <p class="description-set__value">\n            <span class="description-set__rating">').concat(i,'</span>\n            <span class="description-set__separator">/</span>\n            <span class="description-set__vote">').concat(o,'</span>\n          </p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Popularity</p>\n          <p class="description-set__value">').concat(a,'</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Original Title</p>\n          <p class="description-set__value">').concat(c,'</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Genre</p>\n          <p class="description-set__value">').concat(d,'</p>\n        </li>\n      </ul>\n      <div class="film-card__description-about">\n        <h2 class="description-about__title">About</h2>\n        <p class="description-about__text">').concat(u,'</p>\n      </div>\n      <div class="film-card__description-button">\n        <button class="description-button description-button__watched" data-id="').concat(r,'">\n          add to Watched\n        </button>\n        <button class="description-button description-button__queue" data-id="').concat(r,'">\n          add to queue\n        </button>\n      </div>\n    </div>\n  </div>');l.modalFilm.insertAdjacentHTML("beforeend",f)},h=function(t){"Escape"===t.code&&(console.log(t.code),l.backdropModalFilm.classList.add("visually-hidden"),l.body.style.overflow="visible",l.body.removeEventListener("keydown",h))},p=function(t){t.target.closest(".film-card")||(l.backdropModalFilm.classList.add("visually-hidden"),l.body.style.overflow="visible")};l.openModalFilm.addEventListener("click",d),l.closeModalFilm.addEventListener("click",(function(){l.backdropModalFilm.classList.add("visually-hidden"),l.body.style.overflow="visible"}))})),o.register("hJTci",(function(e,n){t(e.exports,"changeWatchedButtonCondition",(function(){return r})),t(e.exports,"changeQueueButtonCondition",(function(){return i}));var r=function(t,e){var n=localStorage.getItem("watched"),r=JSON.parse(n);r&&r.includes(t)&&(e.textContent="in watched",e.style.backgroundColor="lightgray",e.setAttribute("disabled",""))},i=function(t,e){var n=localStorage.getItem("queue"),r=JSON.parse(n);r&&r.includes(t)&&(e.textContent="in queue",e.style.backgroundColor="lightgray",e.setAttribute("disabled",""))}})),o.register("UL92Z",(function(t,e){var n=document.querySelector(".film-card__box");n.addEventListener("click",(function(t){if(!t.target.closest(".description-button__watched"))return;var e=t.target.closest(".description-button__watched").dataset.id,n=JSON.parse(localStorage.getItem("watched")||"[]"),r=e;if(n.includes(r))return;n.push(r),localStorage.setItem("watched",JSON.stringify(n)),alert("Ви дадали даний фільм до Watched")})),n.addEventListener("click",(function(t){if(!t.target.closest(".description-button__queue"))return;var e=t.target.closest(".description-button__queue").dataset.id,n=JSON.parse(localStorage.getItem("queue")||"[]"),r=e;if(n.includes(r))return;n.push(r),localStorage.setItem("queue",JSON.stringify(n)),alert("Ви дадали даний фільм до Queue")}))}))}();
//# sourceMappingURL=index.9e386b17.js.map
