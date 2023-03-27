// ABOUT US MODAL

const aboutBtn = document.querySelector("#about");
const modalBg = document.querySelector(".modal-background");
const aboutModal = document.querySelector(".modal");

aboutBtn.addEventListener("click", () => {
  aboutModal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  aboutModal.classList.remove("is-active");
});

// Nick Loeffler 3-26 How To Modal

const howToBtn = document.querySelector("#how-to");
const howToBg = document.querySelector("#how-bg");
const howToModal = document.querySelector("#modal2");

howToBtn.addEventListener("click", () => {
  howToModal.classList.add("is-active");
});

howToBg.addEventListener("click", () => {
  howToModal.classList.remove("is-active");
});

// TOGGLE BURGER DROP DOWN MENU

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

// Brew button color change !!WIP!!!

const brewButton = document.querySelector("#brew-btn");

brewButton.addEventListener("click", () => {
  brewButton.classList.toggle("is-success");
});



//Open Brewery API
//Mary Dault 3/26 JS

function searchResult(city){  
  var brewURL= `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=5`;

  fetch(brewURL)
  .then((result) => result.json())
  .then(response => { 
    console.log(response); 
    const resultsArea = document.querySelector("#results-area");
    
    for (let index = 0; index < response.length; index++) {
      const city = response[index];
      var cityCard = `<div class="card has-background-success" style="width:15rem; height:auto; margin:8px;">
        <div class="card-content">
        <h5 class="card-header">${city.name}</h5>
        <p class="card-text">Address: ${city.address_1}</p>
        <p class="card-text">City: ${city.city}</p>
        <p class="card-text">Website: ${city.website_url}</p>
        </div>
        `;
        resultsArea.innerHTML += cityCard;
    }
  })  
}



var searchBreweryEl = document.querySelector("#brew-btn");

function displayBreweries(event) {
  event.preventDefault();
  
  var searchInputVal = document.querySelector("#brew-search").value;

  if(!searchInputVal) console.log("Submit a city name!");

  console.log("You submitted a city!");
  searchResult(searchInputVal);
  var localSt = JSON.parse(localStorage.getItem("citySearchHistory")) || [];

  localSt.push(searchInputVal);
  localStorage.setItem("citySearchHistory", JSON.stringify(localSt));
}

//event listener
searchBreweryEl.addEventListener("click", displayBreweries);


// Punk API
// Nick Loeffler 3-25 JS
var searchBeerEl = document.querySelector("#beer-btn");

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector("#beer-value").value;
  // This will log into the console if something invalid is entered into the search bar. Gate statement.
  if (!searchInputVal) console.log("You need to search something buddy!");

  console.log("You Submitted");
  getAPIData(searchInputVal);
  var localSt = JSON.parse(localStorage.getItem("alcoholSearchHistory")) || [];

  localSt.push(searchInputVal);
  localStorage.setItem("alcoholSearchHistory", JSON.stringify(localSt));
}
// This will add the click event to the button for searching beer
searchBeerEl.addEventListener("click", handleSearchFormSubmit);

// This function will get the API data for the beer
function getAPIData(beer) {
  var beerURL = `https://api.punkapi.com/v2/beers?abv_gt=${beer}&per_page=5`;
  fetch(beerURL)
    .then((result) => result.json())
    .then((response) => {
      console.log(response);
      const resultsArea = document.querySelector("#results-area");
      // This for loop will create the cards and set up what will be pulled from the API using "function getAPIData(beer)"
      for (let index = 0; index < response.length; index++) {
        const beer = response[index];
        var beerCard = `<div class="card  has-background-grey-dark" style="width:15rem; height:auto; margin:8px;">
        <div class="card-content has-text-white-ter">
        <h5 class="card-header has-background-success-light has-text-black">${beer.name}</h5>
        <p class="card-text">${beer.abv} ABV%</p>
        <p class="card-text">${beer.tagline}</p>
        <p class="card-text">Description: ${beer.description}</p>
        <img style="height: 10rem; width: 3.5rem"src=${beer.image_url} alt=${beer.tagline}/>
        </div>
        `;
        resultsArea.innerHTML += beerCard;
      }
    });
}
//End Nick Loeffler 3-24 JS

