//navbar logic

const navbar = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeNavButton = document.querySelector('.close-nav');

hamburger.addEventListener('click', () => {
  navbar.classList.add('active');
});

closeNavButton.addEventListener('click', () => {
  navbar.classList.remove('active');
});

//from here on out there's data handling for the pages
import data from './data.json' assert { type: 'json' };

//destinations
const destinationHeading = document.querySelector('#destinationHeading');
const destinationDescription = document.querySelector(
  '#destinationDescription'
);
const destinationDistance = document.querySelector('#destinationDistance');
const destinationTime = document.querySelector('#destinationTime');
const destinationsImage = document.querySelector('.destinations__img img');
const destinations = document.querySelectorAll('.destination');
//data needed for the destinations
const destinationData = data.data.destinations;

console.log(destinations);

destinations.forEach((destination, index) => {
  destination.addEventListener('click', () => {
    destinationHeading.innerHTML = destinationData[index].header;
    destinationDescription.innerHTML = destinationData[index].description;
    destinationDistance.innerHTML = destinationData[index].distance;
    destinationTime.innerHTML = destinationData[index].time;
    destinationsImage.src = destinationData[index].img;
    destinationsImage.alt = destinationData[index].alt;
  });
  return;
});

data.data.destinations.map((item) => console.log(item));
