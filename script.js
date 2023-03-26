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

// creates the variable for the #brew-btn
var searchFormEl = document.querySelector("#brew-btn");

var city = "";
var searchCity = $("#search");
var currentCity = $("#results");

function displayBreweries(event) {
  event.preventDefault();
  if (searchCity.val().trim() !== "") {
    city = searchCity.val().trim();
    searchResult(city);
  }
}

function searchResult(city) {
  var queryURL =
    "https://api.openbrewerydb.org/breweries?q=" + "by_city" + "=&per_page=3";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    $(currentCity).html(response.name);
  });
}

$("#search").on("click", displayBreweries);
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

      for (let index = 0; index < response.length; index++) {
        const beer = response[index];
        var beerCard = `<div class="card has-background-success" style="width:15rem; height:auto; margin:8px;">
        <div class="card-content">
        <h5 class="card-header">${beer.name}</h5>
        <p class="card-text">ABV: ${beer.abv}</p>
        <p class="card-text">Tagline: ${beer.tagline}</p>
        <p class="card-text">Description: ${beer.description}</p>
        <img src=${beer.image_url} alt=${beer.tagline}/>
        </div>
        `;
        resultsArea.innerHTML += beerCard;
      }
    });
}
//End Nick Loeffler 3-24 JS

$("#brew-search").on("click", displayBreweries);
