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

//DESTINATIONS DATA HANDLING

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
//get the data of the destinations on json file
const destinationData = data.data.destinations;

destinations.forEach((destination, index) => {
  destination.addEventListener('click', () => {
    //change data html
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

//CREW DATA HANDLING

//crew html
const crewImgContainer = document.querySelector('.crew__img');
const crewImg = document.querySelector('.crew__img img');
const crewPosition = document.querySelector('.crew .heading-4');
const crewName = document.querySelector('.crew .heading-3');
const crewDesc = document.querySelector('.crew .body-text');
const crewCircle = document.querySelectorAll('.crew .circle');
//get the data of the crew from json file
const crewData = data.data.crew;

crewCircle.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    //change data html
    crewImgContainer.className = `crew__img ${crewData[
      index
    ].position.toLowerCase()}`;
    crewImg.src = crewData[index].img;
    crewImg.alt = `Image: ${crewData[index].position} ${crewData[index].name}`;
    crewPosition.innerHTML = crewData[index].position;
    crewName.innerHTML = crewData[index].name;
    crewDesc.innerHTML = crewData[index].description;
    //change circle colour
    crewCircle.forEach((circle) => circle.classList.add('opacity-5'));
    circle.classList.remove('opacity-5');
  });
});

//TECHNOLOGY DATA HANDLING

//technology html
const tecnhologyImgMobile = document.querySelector('.technology .img-mobile');
const tecnhologyImgDesktop = document.querySelector('.technology .img-desktop');
const technologyCircles = document.querySelectorAll('.technology .circle');
const technologyName = document.querySelector('.technology .heading-3');
const technologyDesc = document.querySelector('.technology .body-text');
//get the data of the technologies from json file
const technologyData = data.data.technologies;

technologyCircles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    //change data html
    tecnhologyImgMobile.src = technologyData[index].imgMobile;
    tecnhologyImgDesktop.src = technologyData[index].imgDesktop;
    tecnhologyImgMobile.alt = `Image: ${technologyData[index].name}`;
    tecnhologyImgDesktop.alt = `Image: ${technologyData[index].name}`;
    technologyName.innerHTML = technologyData[index].name;
    technologyDesc.innerHTML = technologyData[index].description;
    //change circle colour
    technologyCircles.forEach((circle) => circle.classList.remove('active'));
    circle.classList.add('active');
  });
});
