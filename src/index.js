function updateWeather(response)
{let temperatureElement=document.querySelector("#app-temperature");
let appTemperature=response.data.temperature.current;
temperatureElement.innerHTML=Math.round(appTemperature);}


function searchCity(city)
{let apiKey="87d8tfb7621601o0c3b65f9a2b473214";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(updateWeather);
}





function handleSearchSubmit(event)
{event.preventDefault();
let inputSearch =document.querySelector("#app-search-input");
let  cityElement=document.querySelector("#weather-city");
cityElement.innerHTML=inputSearch.value;
searchCity(inputSearch.value)
}

let searchFormElement= document.querySelector("#search-input");
searchFormElement.addEventListener("submit",handleSearchSubmit);