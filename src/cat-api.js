

function fetchBreeds() {
   return  fetch("https://api.thecatapi.com/v1/breeds")
  .then(response => {
   return response.json();
  })
     .then(data => {
    const breedIds = data.map(breed => (
     breed.id , breed.name
    ))
  })
  .catch(error => {
    console.log(error)
  })
}

 
function fetchCatByBreed(breedId) {
   fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_Zkffa83a5wqga5Z3mg9N1ZDEoOUSuy6ds2V0xPCqZmPPIwcuRmqJ7PlGY4VyH995`)
  .then(response => {
     return response.json();
  })
     .then(data => {
       const divEl = document.querySelector('.cat-info')
       console.log(data)
       const catData = data[0];
       const dataUrl = catData.url;
       const breedName = catData.breeds[0].name;
       const breedDescription = catData.breeds[0].description;
      const breedTemperament = catData.breeds[0].temperament;
       const markup = `<img src="${dataUrl}" alt="${breedName}" width='320'>
            <h1 class="title">${breedName}</h1><p class="text">${breedDescription}</p>
            <p class="text">Temperament: ${breedTemperament}</p>`
       divEl.insertAdjacentHTML("afterbegin", markup);

       
     })
     .catch(error => {
       const errorEl = document.querySelector('.error')
       errorEl.classList.remove('is-hedden')
       Notify.failure('Oops! Something went wrong! Try reloading the page!');
    console.log(error)
  });
}

export { fetchBreeds, fetchCatByBreed };