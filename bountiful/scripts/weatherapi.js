const currentTemp = document.querySelector('#current-temp');
const currentCond = document.querySelector('#current-cond');
const weatherIcon = document.querySelector('#weather-icon');
const currentHumidity = document.querySelector('#current-hum');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=aaf7272ebbe454c23a30e327f99ef0bd'

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
    currentHumidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`;

  }

  apiFetch();