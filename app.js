document.getElementById('weather-button').addEventListener('click', getCityWeather);

function getCityWeather() {
  //const API_KEY = config.API_KEY;
  const API_KEY = "65ae2827c08292c4e3592fbd7ab94941";
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  fetch(url).then(response => {
    if(!response.ok){
      throw new Error('City not found')
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('display-city').textContent = data.name;
    document.getElementById('display-temperature').textContent = `Temperature: ${data.main. temp}°C`;
    document.getElementById('display-condition').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('display-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  })

}
