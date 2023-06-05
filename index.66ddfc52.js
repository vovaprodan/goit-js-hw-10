const e=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((t=>{t.map((t=>{const n=` <option value=${t.id}>${t.name}</option>`;e.insertAdjacentHTML("afterbegin",n)}))})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.66ddfc52.js.map
