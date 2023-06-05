!function(){var n=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds").then((function(n){return n.json()})).then((function(t){t.map((function(t){var e=" <option value=".concat(t.id,">").concat(t.name,"</option>");n.insertAdjacentHTML("afterbegin",e)}))})).catch((function(n){console.log(n)}))}();
//# sourceMappingURL=index.8dff2875.js.map
