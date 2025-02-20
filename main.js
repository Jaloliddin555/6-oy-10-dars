// const numbers = [100, 546 , 1 , 98 , 21];
// const tartib = numbers.sort(function (a, b) { 
//     return a - b
// }); 
// console.log(tartib);

const pocemonForm = document.querySelector("#form");
const poceInput = document.querySelector("#input");
const poceSort = document.querySelector("#select");
const pocebox = document.querySelector("#pokewrapper");
console.log(pocemonForm, poceInput, poceSort, pocebox);
function renderPokemon (poke){
    pocebox.innerHTML = ""
    poke.forEach(Obyektlar => {
        pocebox.innerHTML +=
        `
        <li>

        <span>${Obyektlar.num}</span>
        <h2>${Obyektlar.name}</h2>
        <img src="${Obyektlar.img}" alt="${Obyektlar.name}">
        <span>${Obyektlar.type.join("||")}</span>
        `
    });
}

renderPokemon(pokemons);




searchBtn.addEventListener("click", (e)=> {

    e.preventDefault();
  
    const inputQiymati = searchInput.value.toLowerCase();
  
    const filterLanganlar = pokemons.filter(item => {
  
      return item.name.toLowerCase().includes (inputQiymati);
  
    })
  
    renderPokemon (filterLanganlar)
  
  })
  
  searchBtn.addEventListener("click", (e)=> {

    e.preventDefault();
  
    const inputQiymati = searchInput.value.toLowerCase();
  
    const filterLanganlar = pokemons.filter(item => {
  
      return item.name.toLowerCase().includes (inputQiymati);
  
    })
  
    renderPokemon (filterLanganlar)
  
  })
  
searchBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const inputQiymati = searchInput.value.toLowerCase();

    const filterLanganlar = pokemons.filter(item => {
    return item.name.toLowerCase().includes(inputQiymati);  
    })
    renderPokemon(filterLanganlar);
 })


