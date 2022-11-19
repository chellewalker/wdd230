const currentTemp = document.querySelector('#current-temp');
const currentCond = document.querySelector('#current-cond');
const windSpeed   = document.querySelector('#wind-speed');
const windChill   = document.querySelector('#wind-chill');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=aaf7272ebbe454c23a30e327f99ef0bd'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentCond.innerHTML = `<strong>${weatherData.weather[0].description}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
    if (weatherData.wind.speed.toFixed(1) != 0.0) {
    windChill.innerHTML = `<strong>${(35.74+(0.6215*currentTemp)-(35.75*(windSpeed**0.16))+(0.4275*currentTemp*(windSpeed**0.16))).toFixed(1)}</strong>`;
    }
    else {
        windChill.innerHTML = 'N/A'
    }


  }

  apiFetch();