import { fetchBreeds, fetchCatByBreed } from './cat-api.js'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectEl = document.querySelector('.breed-select')
 const divEl = document.querySelector('.cat-info')
const loaderEl = document.querySelector('.loader')
const errorEl = document.querySelector('.error')

errorEl.classList.add('is-hedden')
selectEl.classList.add('is-hedden')



fetch("https://api.thecatapi.com/v1/breeds")
  .then(response => {
     return response.json();
  })
  .then(data => {
    selectEl.classList.remove('is-hedden')
    loaderEl.classList.add('is-hedden')
        const cats = data.map((breed) => {
            const markup = ` <option value=${breed.id}>${breed.name}</option>`;
            selectEl.insertAdjacentHTML("afterbegin", markup);
        })
  })
  .catch(error => {
     selectEl.classList.add('is-hedden')
    errorEl.classList.remove('is-hedden')
   Notify.failure('Oops! Something went wrong! Try reloading the page!');
    console.log(error)
  });

selectEl.addEventListener("change",onChangeSelect)


function onChangeSelect() {
  
  divEl.innerHTML = '';
  const breedId = selectEl.value
  fetchCatByBreed(breedId)
  
}