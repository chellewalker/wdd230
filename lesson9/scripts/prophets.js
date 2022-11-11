const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });
  
  function displayProphets(prophet) {
    // Create properties
    let card = document.createElement('section');
    let title = document.createElement('h2');
    let portrait = document.createElement('img');
    let date = document.createElement('p');
    let place = document.createElement('p');
    let space = document.createElement('br');
      
    title.textContent = `${prophet.name} ${prophet.lastname}`;
    date.textContent = `Birthday: ${prophet.birthdate}.`;
    place.textContent = `Birthplace: ${prophet.birthplace}.`;
  
    portrait.setAttribute('src', prophet.imageurl);

    if (prophet.order == 1) {
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President `);
    } else if (prophet.order == 2) {
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President `);
    } else if (prophet.order == 3) {
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President `);
    } else {
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President `);
    }
    portrait.setAttribute('loading', 'lazy');
    place.setAttribute('class', 'para');
  
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(place);
    card.appendChild(space);
    card.appendChild(portrait);
  
    document.querySelector('div.cards').appendChild(card);
  }