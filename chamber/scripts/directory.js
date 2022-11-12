const getData = 'https://chellewalker.github.io/wdd230/chamber/scripts/data.json';
const cards = document.querySelector('.cards');

fetch(getData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const sponsors = jsonObject['sponsors'];
    sponsors.forEach(displaySponsors);
  });
  
  function displaySponsors(sponsor) {
    // Create properties
    let card = document.createElement('section');
    let title = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let space = document.createElement('br');
      
    logo.textContent = `${sponsor.logo}`;
    address.textContent = `${sponsor.address}`;
    phone.textContent = `${sponsor.phone}`;
    website.textContent = `${sponsor.website}`;
  
    portrait.setAttribute('src', sponsor.imageurl);

    if (sponsor.order == 1) {
      portrait.setAttribute('alt', `Portrait of ${sponsor.name} ${prophet.lastname} - ${prophet.order}st Latter-day President `);
    } else if (sponsor.order == 2) {
      portrait.setAttribute('alt', `Portrait of ${sponsor.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President `);
    } else if (sponsor.order == 3) {
      portrait.setAttribute('alt', `Portrait of ${sponsor.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President `);
    } else {
      portrait.setAttribute('alt', `Portrait of ${sponsor.name} ${prophet.lastname} - ${prophet.order}th Latter-day President `);
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