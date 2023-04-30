




/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
const cityname = document.getElementById('city-name') 
const weathertype = document.getElementById('weather-type') 
const temp = document.getElementById('temp') 
const mintemp = document.getElementById('min-temp') 
const maxtemp = document.getElementById('max-temp') 




/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  
  //HINT: Use template literals to create a url with input and an API key
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '16734a3093msh7a04fca561fce38p1d6ff5jsncb2ac628d9e8',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      showWeatherData(result);
  } catch (error) {
      console.error(error);
  }
  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  cityname.innerHTML = `<h4>${weatherData.name}</h4>`
  weathertype.innerHTML = `<h1>${weatherData.weather[0].main}</h1>`
  temp.innerText = `${weatherData.main.temp}`
  mintemp.innerText = `${weatherData.main.temp_min}`
  maxtemp.innerText = `${weatherData.main.temp_max}`
}

