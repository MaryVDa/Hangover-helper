// creates the variable for the #brew-btn
var searchFormEl = document.querySelector('#brew-btn');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-value').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }
    console.log("You Submitted");
    getAPIData(searchInputVal)
    getAPI5Data(searchInputVal)
    var localSt = JSON.parse(localStorage.getItem("weather-dashboard")) || []
    localSt.push(searchInputVal)
    localStorage.setItem("weather-dashboard",JSON.stringify(localSt))
    displayLS()
}

var city="";
var searchCity = $("#search");
var currentCity = $("#results")

function displayBreweries(event) {
    event.preventDefault();
    if (searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        searchResult(city);
    }
}

function searchResult(city){
    var queryURL="https://api.openbrewerydb.org/breweries?q=" + "by_city" + "=&per_page=3";
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);

        $(currentCity).html(response.name)
    })
}

$("#search").on("click",displayBreweries);
