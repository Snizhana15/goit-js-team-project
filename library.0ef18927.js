!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire09c9;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire09c9=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.0ef18927.js","i6tR9":"movie.a3f3b783.jpg","7nwxg":"library.d0ae2bd3.js"}')),a("73ES2"),a("UL92Z"),a("hJTci"),a("ivF4K");var c,o=a("8nrFW"),s=a("dXyXQ");c=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("i6tR9");var u={cardSet:document.querySelector(".card-set"),showWatchedBtn:document.querySelector(".header-library__button--watched"),showQueueBtn:document.querySelector(".header-library__button--queue"),paginationSet:document.querySelector(".pagination")},l=document.querySelector(".header-library--watched--spinner"),d=document.querySelector(".header-library--queue--spinner"),g=0,p=function(){return JSON.parse(localStorage.getItem("watched")||"[]")},f=function(){return JSON.parse(localStorage.getItem("queue")||"[]")},v=function(){var e=JSON.parse(localStorage.getItem("watched")||"[]"),n=JSON.parse(localStorage.getItem("queue")||"[]");return t(o)(e).concat(t(o)(n)).filter((function(e,t,n){return n.findIndex((function(t){return t.id===e.id}))===n.indexOf(e)}))},_=function(e){e.map(m)},m=function(e){var t=e.id,n=e.poster_path,r=e.original_title,i=e.title,a=e.release_date,c=e.genres,o=e.vote_average,g=new Date(a).getFullYear().toString(),p=function(e,t){return e.map((function(e){return t.find((function(t){return t.id===e})).name}))}(c.map((function(e){return e.id})),c),f=(0,s.getGenresMarkup)(p),v='<li class="card-set__item" data-id="'.concat(t,'">\n                <div class="card-set__box-img"">\n                <img src="https://image.tmdb.org/t/p/original').concat(n,'" alt="').concat(r,'"\n                class="card-set__img"\n                />\n                </div>\n                <h3 class="card-set__title">').concat(i,'</h3>\n                <div class="card-set__description">\n                <ul class="card-set__genre">\n                    ').concat(f,'\n                </ul>\n                    <span class="card-set__production-year">&nbsp| ').concat(g,'&nbsp</span>\n                    <span class="card-set__rating">').concat(o,"</span>\n                </div>\n                </li>");u.cardSet.insertAdjacentHTML("afterbegin",v),l.classList.remove("spinner"),d.classList.remove("spinner")},b=function(e){g=Math.ceil(e.length/6)};u.showWatchedBtn.addEventListener("click",(function(){l.classList.add("spinner"),u.paginationSet.removeEventListener("click",L),u.paginationSet.removeEventListener("click",y);var e=p(),t=e.slice(0,6);u.cardSet.innerHTML="",b(e),_(t),E(g),u.paginationSet.addEventListener("click",h)})),u.showQueueBtn.addEventListener("click",(function(){d.classList.add("spinner"),u.paginationSet.removeEventListener("click",L),u.paginationSet.removeEventListener("click",h);var e=f(),t=e.slice(0,6);u.cardSet.innerHTML="",b(e),_(t),E(g),u.paginationSet.addEventListener("click",y)}));var S=function(e,t){var n=6*e-6,r=t.splice(n,6);u.cardSet.innerHTML="",_(r),E(g),document.querySelector(".pagination__button--current").classList.remove("pagination__button--current"),document.querySelector('[id="'.concat(e,'"]')).classList.add("pagination__button--current")},h=function(e){var t=p();getNumberPage=Number(e.target.closest(".pagination__button").id),S(getNumberPage,t)},y=function(e){var t=f();getNumberPage=Number(e.target.closest(".pagination__button").id),S(getNumberPage,t)},L=function(e){var t=v();getNumberPage=Number(e.target.closest(".pagination__button").id),S(getNumberPage,t)},E=function(e){for(var t=[],n=1;n<=e;n++){var r="";r=1===n?'<li class="pagination__item">\n        <button class="pagination__button pagination__button--current" id="'.concat(n,'">').concat(n,"</button>\n      </li>"):'<li class="pagination__item">\n        <button class="pagination__button" id="'.concat(n,'">').concat(n,"</button>\n      </li>"),t.push(r)}var i=t.join("");u.paginationSet.innerHTML="",u.paginationSet.insertAdjacentHTML("afterbegin",i)};(function(){u.paginationSet.removeEventListener("click",h),u.paginationSet.removeEventListener("click",y);var e=v(),t=e.slice(0,6);if(u.cardSet.innerHTML="",0!==e.length)b(e),_(t),E(g),u.paginationSet.addEventListener("click",L);else{var n='<div class="library__empty-container">\n                          <p class="library__empty-text">Your library is empty. Please, add some movies!!!</p>\n                          <img src="'.concat(c,'" alt="Empty library image" width="500" height="500">\n                        </div>');u.cardSet.insertAdjacentHTML("afterbegin",n)}})()}();
//# sourceMappingURL=library.0ef18927.js.map
