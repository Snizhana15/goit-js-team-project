!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire09c9;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire09c9=a);var i,o=a("bpxeT"),c=a("2TvXO"),s=a("dXyXQ"),u=a("dpMWy"),l=(o=a("bpxeT"),c=a("2TvXO"),a("fkvfI")),d=(u=a("dpMWy"),{});Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,_="object"==typeof self&&self&&self.Object===Object&&self,h=g||_||Function("return this")(),b=Object.prototype.toString,x=Math.max,w=Math.min,L=function(){return h.Date.now()};function T(t){var n=void 0===t?"undefined":e(d)(t);return!!t&&("object"==n||"function"==n)}function M(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(T(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=T(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=v.test(t);return r||m.test(t)?y(t.slice(2),r?2:8):p.test(t)?NaN:+t}i=function(e,t,n){var r,a,i,o,c,s,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=a;return r=a=void 0,u=t,o=e.apply(i,n)}function v(e){return u=e,c=setTimeout(y,t),l?p(e):o}function m(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function y(){var e=L();if(m(e))return g(e);c=setTimeout(y,function(e){var n=t-(e-s);return d?w(n,i-(e-u)):n}(e))}function g(e){return c=void 0,f&&r?p(e):(r=a=void 0,o)}function _(){var e=L(),n=m(e);if(r=arguments,a=this,s=e,n){if(void 0===c)return v(s);if(d)return c=setTimeout(y,t),p(s)}return void 0===c&&(c=setTimeout(y,t)),o}return t=M(t)||0,T(n)&&(l=!!n.leading,i=(d="maxWait"in n)?x(M(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),_.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=s=a=c=void 0},_.flush=function(){return void 0===c?o:g(L())},_};var k=document.querySelector(".card-set");document.querySelector(".header__form-input").addEventListener("input",e(i)((function(e){e.preventDefault(),S=e.target.value,(0,l.getSearchQuery)(),function(){W.apply(this,arguments)}()}),1e3));var S="";function j(){return O.apply(this,arguments)}function O(){return(O=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.getGenreList)();case 3:return n=e.sent.genres,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function E(e){return q.apply(this,arguments)}function q(){return(q=e(o)(e(c).mark((function t(n){var r,a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.getSearchQuery)(S,n);case 3:return r=e.sent,a=r.results,i=r.total_pages,0===r.total_results?F():Q(),e.abrupt("return",{movies:a,totalPages:i});case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function P(e){return N.apply(this,arguments)}function N(){return(N=e(o)(e(c).mark((function t(n){var r,a,i,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return r=e.sent,e.next=5,E(n);case 5:return a=e.sent,i=a.movies,o=a.totalPages,s=i.map((function(e){return D(e,r)})).join(""),k.innerHTML="",k.insertAdjacentHTML("afterbegin",s),e.abrupt("return",o);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(e,t){var n=e.genre_ids,r=e.original_title,a=e.id,i=e.release_date,o=e.title,c=e.poster_path,s=function(e,t){return e.map((function(e){return t.find((function(t){return t.id===e})).name}))}(n,t),u=function(e){var t="";switch(e.length){case 1:t='<li class="card-set__genre-movie">'.concat(e[0],"</li>");break;case 2:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],"</li>");break;case 3:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[2],"</li>");break;default:t='<li class="card-set__genre-movie">'.concat(e[0],',&nbsp</li>\n                      <li class="card-set__genre-movie">').concat(e[1],',&nbsp</li>\n                      <li class="card-set__genre-movie">Інші</li>')}return t}(s),l=new Date(i).getFullYear().toString();return'\n        <li class="card-set__item" data-id="'.concat(a,'">\n            <div class="card-set__box-img">\n            <img\n                loading="lazy"\n                src="https://image.tmdb.org/t/p/original').concat(c,'"\n                alt="').concat(r,'"\n                class="card-set__img"\n                \n            />\n            </div>\n            <h3 class="card-set__title">').concat(o,'</h3>\n            <div class="card-set__description">\n            <ul class="card-set__genre">\n                ').concat(u,'\n            </ul>\n            <span class="card-set__genre-movie">&nbsp| ').concat(l,"</span>\n            </div>\n        </li>")}function W(){return(W=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,(0,u.changeMoviesPage)(n>50?50:n,P);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var X=document.querySelector(".header__error-text"),$=document.querySelector(".img-search-error");function F(){X.classList.remove("is-hidden"),$.classList.remove("is-hidden")}function Q(){X.classList.add("is-hidden"),$.classList.add("is-hidden")}a("73ES2");var U={openModalBtn:document.querySelector("[data-modal-opens]"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};function B(){return(B=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.renderPopularMovies)();case 2:n=e.sent,(0,u.changeMoviesPage)(n>50?50:n,s.renderPopularMovies);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}U.openModalBtn.addEventListener("click",(function(){U.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),U.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(U.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),U.body.removeEventListener("keyup",e))})),U.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(U.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),U.modal.removeEventListener("click",e))}))})),a("UL92Z"),a("hJTci"),function(){B.apply(this,arguments)}()}();
//# sourceMappingURL=index.40f15d31.js.map
