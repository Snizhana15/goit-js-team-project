function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequire09c9;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire09c9=s),s.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("fQE3M",(function(e,t){var n=s("epB3k"),i=s("fHPRY");const r={openModalFilm:document.querySelector(".card-set"),closeModalFilm:document.querySelector(".film-card__button-close"),body:document.querySelector("body"),backdropModalFilm:document.querySelector(".backdrop"),modalFilm:document.querySelector(".film-card__box")},o=document.querySelector(".spinner--modal"),a=e=>{const{poster_path:t,title:n,id:i,vote_average:s,vote_count:o,popularity:a,original_title:l,genres:c,overview:d}=e,u=`<div class="film-card__image-block">\n      <img\n        class="film-card__image"\n        src="https://image.tmdb.org/t/p/original${t}"\n        alt="film"\n      />\n    </div>\n    <div class="film-card__description">\n      <h1 class="film-card__description-title">${n}</h1>\n      <ul class="film-card__description-set">\n        <li class="description-set">\n          <p class="description-set__text">Vote / Votes</p>\n          <p class="description-set__value">\n            <span class="description-set__rating">${s}</span>\n            <span class="description-set__separator">/</span>\n            <span class="description-set__vote">${o}</span>\n          </p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Popularity</p>\n          <p class="description-set__value">${a}</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Original Title</p>\n          <p class="description-set__value">${l}</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Genre</p>\n          <p class="description-set__value">${c.map((e=>e.name)).join(", ")}</p>\n        </li>\n      </ul>\n      <div class="film-card__description-about">\n        <h2 class="description-about__title">About</h2>\n        <p class="description-about__text">${d}</p>\n      </div>\n      <div class="film-card__description-button">\n        <button class="description-button description-button__watched" data-id="${i}">\n          add to Watched\n        </button>\n        <button class="description-button description-button__queue" data-id="${i}">\n          add to queue\n        </button>\n      </div>\n    </div>\n  </div>`;r.modalFilm.insertAdjacentHTML("beforeend",u)},l=e=>{"Escape"===e.code&&(console.log(e.code),r.backdropModalFilm.classList.add("visually-hidden"),r.body.style.overflow="visible",r.body.removeEventListener("keydown",l))},c=e=>{e.target.closest(".film-card")||(r.backdropModalFilm.classList.add("visually-hidden"),r.body.style.overflow="visible")};r.openModalFilm.addEventListener("click",(async e=>{if(o.classList.add("spinner"),!e.target.closest(".card-set__item"))return;r.modalFilm.innerHTML="",r.backdropModalFilm.classList.remove("visually-hidden"),r.body.style.overflow="hidden";const t=e.target.closest(".card-set__item").dataset.id,s=await(0,n.getMovieById)(t);a(s);const d=document.querySelector(".description-button__watched"),u=document.querySelector(".description-button__queue");(0,i.changeWatchedButtonCondition)(t,d),(0,i.changeQueueButtonCondition)(t,u),o.classList.remove("spinner"),r.body.addEventListener("keydown",l),r.backdropModalFilm.addEventListener("click",c)})),r.closeModalFilm.addEventListener("click",(()=>{r.backdropModalFilm.classList.add("visually-hidden"),r.body.style.overflow="visible"}))})),s.register("epB3k",(function(t,n){e(t.exports,"getPopularMovies",(function(){return s})),e(t.exports,"getSearchQuery",(function(){return r})),e(t.exports,"getMovieById",(function(){return o})),e(t.exports,"getGenreList",(function(){return a}));const i="fadee9dfff8cb6b1bff36771479589d6";function s(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${i}&page=${e}`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}function r(e,t=1){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${i}&query=${e}&language=eng&page=${t}&include_adult=false`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}function o(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${i}&language=eng`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}function a(){return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${i}&language=eng`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}})),s.register("fHPRY",(function(t,n){e(t.exports,"changeWatchedButtonCondition",(function(){return i})),e(t.exports,"changeQueueButtonCondition",(function(){return s}));const i=(e,t)=>{const n=localStorage.getItem("watched"),i=JSON.parse(n);i&&i.includes(e)&&(t.textContent="in watched",t.style.backgroundColor="lightgray",t.setAttribute("disabled",""))},s=(e,t)=>{const n=localStorage.getItem("queue"),i=JSON.parse(n);i&&i.includes(e)&&(t.textContent="in queue",t.style.backgroundColor="lightgray",t.setAttribute("disabled",""))}})),s.register("31u3U",(function(e,t){const n=document.querySelector(".film-card__box");n.addEventListener("click",(function(e){if(!e.target.closest(".description-button__watched"))return;const t=e.target.closest(".description-button__watched").dataset.id,n=JSON.parse(localStorage.getItem("watched")||"[]"),i=t,s=e.target.closest(".description-button__watched");if(n.includes(i))return;s.textContent="in watched",s.style.backgroundColor="lightgray",s.setAttribute("disabled",""),n.push(i),localStorage.setItem("watched",JSON.stringify(n))})),n.addEventListener("click",(function(e){if(!e.target.closest(".description-button__queue"))return;const t=e.target.closest(".description-button__queue").dataset.id,n=JSON.parse(localStorage.getItem("queue")||"[]"),i=t,s=e.target.closest(".description-button__queue");if(n.includes(i))return;s.textContent="in queue",s.style.backgroundColor="lightgray",s.setAttribute("disabled",""),n.push(i),localStorage.setItem("queue",JSON.stringify(n))}))})),s.register("cddKH",(function(e,t){const n={openModalHeart:document.querySelector(".heart"),openModalBtn:document.querySelector("[data-modal-opens]"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};function i(){n.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),n.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(n.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),n.body.removeEventListener("keyup",e))})),n.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(n.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),n.modal.removeEventListener("click",e))}))}n.openModalBtn.addEventListener("click",i),n.openModalHeart.addEventListener("click",i)})),s.register("2rqRD",(function(t,n){e(t.exports,"changeMoviesPage",(function(){return a}));var i=s("k3W4E");const r=`<li class="movies-navigation__item">\n    <button\n      type="button"\n      class="movies-navigation__arrow-btn"\n      data-move="backward"\n    >\n      <svg class="movies-navigation__icon-arrow">\n        <use href="${i}#icon-arrow-left"></use>\n      </svg>\n    </button>\n  </li>\n  <li class="movies-navigation__item">\n    <ul class="number-page">\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">1</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">13</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">14</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">15</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">16</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">17</button>\n      </li>\n      <li class="number-page__item">\n        <button type="button" class="number-page__btn">20</button>\n      </li>\n    </ul>\n  </li>\n  <li class="movies-navigation__item">\n    <button\n      type="button"\n      class="movies-navigation__arrow-btn"\n      data-move="forward"\n    >\n      <svg class="movies-navigation__icon-arrow">\n        <use href="${i}#icon-arrow-right"></use>\n      </svg>\n    </button>\n  </li>`,o=document.querySelector(".movies-navigation");function a(e,t){let n=1;o.innerHTML="",o.insertAdjacentHTML("afterbegin",r);const i=document.querySelector('[data-move="backward"]'),s=document.querySelector('[data-move="forward"]'),a=document.querySelector(".number-page"),l=document.querySelector(".card-set");function c(e){e.removeAttribute("disabled"),e.classList.remove("movies-navigation__arrow-btn--disabled")}function d(e){e.setAttribute("disabled",""),e.classList.add("movies-navigation__arrow-btn--disabled")}function u(){if(e<6)return s.style.display="none",i.style.display="none",function(){let t="";a.innerHTML="";for(let n=0;n<e+2;n+=1)t+=`<li class="number-page__item">\n                <button type="button" class="number-page__btn">${n}</button>\n              </li>`;a.insertAdjacentHTML("afterbegin",t)}(),b(),g(),void a.children[1].firstElementChild.classList.add("number-page__btn--current");b(),v(),a.children[1].firstElementChild.classList.add("number-page__btn--current"),a.lastElementChild.firstElementChild.textContent=String(e),d(i),c(s),y(),L()}function p(){document.querySelector(".number-page__btn--current").classList.remove("number-page__btn--current")}function m(){p(),a.children[n].firstElementChild.classList.add("number-page__btn--current")}function _(){p(),a.children[n-e+5].firstElementChild.classList.add("number-page__btn--current")}function g(){a.lastElementChild.style.display="none",a.children[a.children.length-2].style.marginRight="0px"}function b(){a.firstElementChild.style.display="none"}function f(){a.firstElementChild.style.display="list-item"}function v(){a.lastElementChild.style.display="list-item",a.children[a.children.length-2].style.marginRight="16px"}function h(){for(let e=1;e<a.children.length-1;e+=1){const t=n-3+e;a.children[e].firstElementChild.textContent=t.toString()}}function y(){for(let e=1;e<a.children.length-1;e+=1){const t=e;a.children[e].firstElementChild.textContent=t.toString()}}function w(){for(let t=1;t<a.children.length-1;t+=1){const n=e-5+t;a.children[t].firstElementChild.textContent=n.toString()}}function L(){window.innerWidth<768&&(b(),g())}u(),i.addEventListener("click",(function(){n-=1,t(n),l.scrollIntoView(),c(s),1===n&&d(i);if(n>e-3)return void _();n<4&&(b(),m());n>=3&&n<=e-3&&(v(),h());L()})),s.addEventListener("click",(function(){n+=1,t(n),l.scrollIntoView(),c(i),n===e&&d(s);if(n<4)return void m();n>e-3&&(g(),_());n>=4&&n<=e-2&&(f(),h());L()})),a.addEventListener("click",(function(r){if("BUTTON"!==r.target.nodeName)return;if(r.target.classList.contains("number-page__btn--current"))return;if(n=Number(r.target.textContent),t(n),l.scrollIntoView(),1===n)return p(),void u();if(n===e)return p(),void function(){g(),e>5&&f();if(a.children[e>=5?5:e].firstElementChild.classList.add("number-page__btn--current"),c(i),d(s),e<=5)return void y();w()}();n>=4&&n<=e-3&&(p(),a.children[3].firstElementChild.classList.add("number-page__btn--current"),f(),v(),c(s),c(i),h());if(n<4)return m(),b(),e>5&&v(),c(s),void y();n>e-3&&(_(),g(),e>5&&f(),c(s),c(i),w());L()}))}})),s.register("k3W4E",(function(e,t){e.exports=new URL(s("kyEFX").resolve("iYZjP"),import.meta.url).toString()})),s.register("93eWd",(function(t,n){e(t.exports,"renderPopularMovies",(function(){return a})),e(t.exports,"getGenresMarkup",(function(){return l}));var i=s("epB3k");const r=document.querySelector(".card-set"),o=document.getElementById("spinner");async function a(e){o.classList.add("spinner");const t=await async function(){try{const{genres:e}=await(0,i.getGenreList)();return e}catch(e){alert(e)}}(),{movies:n,totalPages:s}=await async function(e){try{const{results:t,total_pages:n}=await(0,i.getPopularMovies)(e);return{movies:t,totalPages:n}}catch(e){alert(e)}}(e),a=n.map((e=>function(e,t){const{genre_ids:n,original_title:i,id:s,release_date:r,title:o,poster_path:a}=e,c=l(function(e,t){return e.map((e=>t.find((t=>t.id===e)).name))}(n,t)),d=new Date(r).getFullYear().toString();return`\n        <li class="card-set__item" data-id="${s}">\n            <div class="card-set__box-img">\n            <img\n                loading="lazy"\n                src="https://image.tmdb.org/t/p/original${a}"\n                alt="${i}"\n                class="card-set__img"\n                \n            />\n            </div>\n            <h3 class="card-set__title">${o}</h3>\n            <div class="card-set__description">\n            <ul class="card-set__genre">\n                ${c}\n            </ul>\n            <span class="card-set__genre-movie">&nbsp| ${d}</span>\n            </div>\n        </li>`}(e,t))).join("");return r.innerHTML="",r.insertAdjacentHTML("afterbegin",a),o.classList.remove("spinner"),s}function l(e){let t="";switch(e.length){case 1:t=`<li class="card-set__genre-movie">${e[0]}</li>`;break;case 2:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]}</li>`;break;case 3:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[2]}</li>`;break;default:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]},&nbsp</li>\n                      <li class="card-set__genre-movie">Other</li>`}return t}})),s("kyEFX").register(JSON.parse('{"eM9ss":"library.fdf1ecc2.js","iYZjP":"symbol.e0e566b2.svg"}'));
//# sourceMappingURL=library.fdf1ecc2.js.map
