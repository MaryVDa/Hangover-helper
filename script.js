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