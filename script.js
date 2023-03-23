
// creates the variable for the #brew-btn
var searchFormEl = document.querySelector('#brew-btn');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#brew-search').value;

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
var sCity=[];

function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}

function displayBreweries(event) {
    event.preventDefault();
    if (searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        searchResult(city);
    }
}

function searchResult(city){
    var queryURL="https://api.openbrewerydb.org/breweries?by_city=" + city + "=&per_page=3";
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
        console.log(response);

        $(currentCity).html(response.name)

        Results(response.id);
        if(response.cod==200){
            sCity=JSON.parse(localStorage.getItem("cityname"));
            console.log(sCity);
        if (sCity==null){
            sCity=[];
            sCity.push(city.toUpperCase());
            localStorage.setItem("cityname",JSON.stringify(sCity));
            addToList(city);
        }else {
            if(find(city)>0){
                sCity.push(city.toUpperCase());
                localStorage.setItem("cityname",JSON.stringify(sCity));
                addToList(city);
                }
            }
        }
    }); 
}


$("#search").on("click",displayBreweries);


