const getData = 'https://chellewalker.github.io/wdd230/chamber/scripts/data.json';
const cards = document.querySelector('.cards');

fetch(getData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const sponsors = jsonObject['businesses'];
    sponsors.forEach(displaySponsor);
  });
  
  function displaySponsor(sponsorInfo) {
    // Create properties
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let space = document.createElement('br');
      
    name.textContent = `${sponsorInfo.name}`;
    address.textContent = `${sponsorInfo.address}`;
    phone.textContent = `${sponsorInfo.phone}`;
    website.textContent = `${sponsorInfo.website}`;
  
    logo.setAttribute('src', sponsorInfo.logo);
    logo.setAttribute('alt', `Sponsor Image`);
    logo.setAttribute('loading', `lazy`);
  
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(space);
    card.appendChild(logo);
  
    document.querySelector('div.cards').appendChild(sponsorInfo);
  }