document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector('button[type="submit"]');
  const city = document.querySelector("#city");
  const cloud_pct = document.querySelector("#cloud_pct");
  const temp = document.querySelector("#temp");
  const feels_like = document.querySelector("#feels_like");
  const humidity = document.querySelector("#humidity");
  const min_temp = document.querySelector("#min_temp");
  const max_temp = document.querySelector("#max_temp");
  const wind_speed = document.querySelector("#wind_speed");
  const wind_degrees = document.querySelector("#wind_degrees");
  const sunrise = document.querySelector("#sunrise");
  const sunset = document.querySelector("#sunset");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f9f898988cmsh58fc915af1e4e01p102010jsn737add4b3a1f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        //sunrise.innerHTML = response.sunrise;
        //sunset.innerHTML = response.sunset;
        // convert sunset time to human-readable time
      const sunsetTime = new Date(response.sunset * 1000);
      sunset.innerHTML = sunsetTime.toLocaleTimeString();
      
      // convert sunrise time to human-readable time
      const sunriseTime = new Date(response.sunrise * 1000);
      sunrise.innerHTML = sunriseTime.toLocaleTimeString();
      })
      .catch((err) => console.error(err));
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });

  getWeather("Rajkot");
});
