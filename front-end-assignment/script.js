
/*  fetch() if done by an API endpoint

fetch('api_endpoint')
  .then(response => response.json())
  .then(result => {
    data = result; // Assuming the fetched data is an array of objects
    renderCarousel();
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });

  */

//Hardcoded Data
const data = ['1.png', '2.png', '3.png', '4.png', '5.png','6.png','7.png','8.png','9.png']; 



const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselUl = document.getElementById('carousel-ul');
const navigationDots = document.getElementById('navigation-dots');


//By default, we start at the initial 3 values in the carousel
let currentIndex = 0;

//Calculate number of dots to be displayed as a function of total carousel length
var numberOfDots = (data.length / 3);

//Create span element which will be our dot under the class 'dot'
for (var i = 0; i < numberOfDots; i++) {

    var dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('index', i); // Set index attribute with the index value for navigation later
    dot.addEventListener('click', dotClick); // Attach click event listener to the dot
    navigationDots.appendChild(dot);
}


function renderCarousel(){

const slicedData = data.slice(currentIndex, currentIndex+3);  //CAROUSEL LENGTH CAN BE CHANGED BY CHANGING SPLICE TO WHATEVER WE NEED
let carouselUl = document.getElementById('carousel-ul');  
let carouselHtml = '';

// Add the images as list elements to the carousel-ul div

for (let i = 0; i < slicedData.length; i++) {
    carouselHtml += `<li><img width=90 height=90 src ='${slicedData[i]}'></li>`;
  }

carouselUl.innerHTML = carouselHtml;


// To add an increase in dot size for the corresponding carousel being displayed

var dots = document.getElementsByClassName('dot');
var dotIndex = currentIndex/3;

for (var i = 0; i < dots.length; i++) {
    if (i === dotIndex) {
      dots[i].classList.add('large');
    } else {
      dots[i].classList.remove('large');
    }
  }

};


//Shift carousel according to the index which we get from the index attribute on dot click
function dotClick(event) {
    var dotIndex = parseInt(event.target.getAttribute('index'));
    currentIndex=dotIndex*3;
    renderCarousel();
}

//Button event listeners

prevBtn.addEventListener('click', () => {
    if (currentIndex >2) {
      currentIndex-=3;}
    else currentIndex=data.length-3;
      renderCarousel();
   
    }
  )
;

nextBtn.addEventListener('click', () => {
    if (currentIndex < data.length - 3) {
      currentIndex+=3;
    } 
      else currentIndex=0;
      renderCarousel();   
  })
  
;


window.onload = renderCarousel();