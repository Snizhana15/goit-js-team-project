var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire09c9;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire09c9=a),a("fQE3M"),a("31u3U"),a("fHPRY"),a("cddKH");var i=a("epB3k"),r=a("93eWd");const s={cardSet:document.querySelector(".card-set"),showWatchedBtn:document.querySelector(".header-library__button--watched"),showQueueBtn:document.querySelector(".header-library__button--queue"),paginationSet:document.querySelector(".pagination")},o=document.querySelector(".header-library--watched--spinner"),c=document.querySelector(".header-library--queue--spinner");let l=0;const d=()=>JSON.parse(localStorage.getItem("watched")||"[]"),g=()=>JSON.parse(localStorage.getItem("queue")||"[]"),p=()=>[...JSON.parse(localStorage.getItem("watched")||"[]"),...JSON.parse(localStorage.getItem("queue")||"[]")].filter(((e,t,n)=>n.indexOf(e)===t)),u=async e=>{await e.map((e=>(0,i.getMovieById)(e).then((e=>m(e)))))},m=e=>{const{id:t,poster_path:n,original_title:a,title:i,release_date:l,genres:d,vote_average:g}=e,p=new Date(l).getFullYear().toString(),u=((e,t)=>e.map((e=>t.find((t=>t.id===e)).name)))(d.map((e=>e.id)),d),m=`<li class="card-set__item" data-id="${t}">\n                <div class="card-set__box-img"">\n                <img src="https://image.tmdb.org/t/p/original${n}" alt="${a}"\n                class="card-set__img"\n                />\n                </div>\n                <h3 class="card-set__title">${i}</h3>\n                <div class="card-set__description">\n                <ul class="card-set__genre">\n                    ${(0,r.getGenresMarkup)(u)}\n                </ul>\n                    <span class="card-set__production-year">&nbsp| ${p}&nbsp</span>\n                    <span class="card-set__rating">${g}</span>\n                </div>\n                </li>`;s.cardSet.insertAdjacentHTML("afterbegin",m),o.classList.remove("spinner"),c.classList.remove("spinner")},_=e=>{l=Math.ceil(e.length/10)};s.showWatchedBtn.addEventListener("click",(()=>{o.classList.add("spinner"),s.paginationSet.removeEventListener("click",h),s.paginationSet.removeEventListener("click",v);const e=d(),t=e.slice(0,10);s.cardSet.innerHTML="",_(e),u(t),L(l),s.paginationSet.addEventListener("click",S)})),s.showQueueBtn.addEventListener("click",(()=>{c.classList.add("spinner"),s.paginationSet.removeEventListener("click",h),s.paginationSet.removeEventListener("click",S);const e=g(),t=e.slice(0,10);s.cardSet.innerHTML="",_(e),u(t),L(l),s.paginationSet.addEventListener("click",v)}));const b=(e,t)=>{const n=10*e-10,a=t.splice(n,10);s.cardSet.innerHTML="",u(a),L(l)},S=e=>{const t=d();getNumberPage=Number(e.target.closest(".pagination__button").id),b(getNumberPage,t)},v=e=>{const t=g();getNumberPage=Number(e.target.closest(".pagination__button").id),b(getNumberPage,t)},h=e=>{const t=p();getNumberPage=Number(e.target.closest(".pagination__button").id),btn=e.target.closest(".pagination__button"),console.log(btn),btn.classList.add("pagination__button--current"),b(getNumberPage,t)},L=e=>{markupEmpty=[];for(let t=1;t<=e;t++){const e=`<li class="pagination__item">\n        <button class="pagination__button" id="${t}">${t}</button>\n      </li>`;markupEmpty.push(e)}const t=markupEmpty.join("");s.paginationSet.innerHTML="",s.paginationSet.insertAdjacentHTML("afterbegin",t)};(()=>{s.paginationSet.removeEventListener("click",S),s.paginationSet.removeEventListener("click",v);const e=p(),t=e.slice(0,10);s.cardSet.innerHTML="",_(e),u(t),L(l),s.paginationSet.addEventListener("click",h)})();
//# sourceMappingURL=library.69348c05.js.map
