const getData = 'scripts/data.json';
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
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let space = document.createElement('br');
      
    name.textContent = `${sponsor.name}`;
    logo.textContent = `${sponsor.logo}`;
    address.textContent = `${sponsor.address}`;
    phone.textContent = `${sponsor.phone}`;
    website.textContent = `${sponsor.website}`;
  
    logo.setAttribute('src', sponsor.logo);
    website.setAttribute('src', sponsor.website);
  
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(space);
    card.appendChild(logo);
  
    document.querySelector('div.cards').appendChild(cards);
  }