const selectEl = document.querySelector('.breed-select')

fetch("https://api.thecatapi.com/v1/breeds")
  .then(response => {
     return response.json();
  })
    .then(data => {
        const cats = data.map((breed) => {
            const markup = ` <option value=${breed.id}>${breed.name}</option>`;
            selectEl.insertAdjacentHTML("afterbegin", markup);
        })
  })
  .catch(error => {
    console.log(error)
  });