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

//DESTINATIONS HANDLING

//destinations html
const destinationHeading = document.querySelector('#destinationHeading');
const destinationDescription = document.querySelector(
  '#destinationDescription'
);
const destinationDistance = document.querySelector('#destinationDistance');
const destinationTime = document.querySelector('#destinationTime');
const destinationsImage = document.querySelector('.destinations__img img');
const destinations = document.querySelectorAll('.destination');
const destinationTextColor = document.querySelectorAll('.destination-text');
let destinationActive = document.querySelector('.destination.active');
//get the data of the destinations
const destinationData = data.data.destinations;

destinations.forEach((destination, index) => {
  destination.addEventListener('click', () => {
    //change data
    destinationHeading.innerHTML = destinationData[index].header;
    destinationDescription.innerHTML = destinationData[index].description;
    destinationDistance.innerHTML = destinationData[index].distance;
    destinationTime.innerHTML = destinationData[index].time;
    destinationsImage.src = destinationData[index].img;
    destinationsImage.alt = ` Image: ${destinationData[index].header}`;
    //change active line
    destinationActive.classList.remove('active');
    destination.classList.add('active');
    destinationActive = document.querySelector('.destination.active');
    //change active color
    destinationTextColor.forEach((text) => text.classList.add('light-blue'));
    destinationTextColor[index].classList.contains('light-blue')
      ? destinationTextColor[index].classList.remove('light-blue')
      : null;
  });
  return;
});
