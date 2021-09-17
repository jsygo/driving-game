/* global data */
/* exported data */

var $car = document.querySelector('.car');
var $carStyle = $car.style;
var $windowWidth = window.innerWidth;
var intervalId = null;

function moveCar() {
  $carStyle.left = `${data.location.x + 5}px`;
  data.location.x += 5;
  if ((data.location.x + 160) > $windowWidth) {
    clearInterval(intervalId);
  }
}

document.addEventListener('keydown', function () {
  if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car down');
    data.currentDirection = 'down';
  }
  if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car left');
    data.currentDirection = 'left';
  }
  if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car right');
    data.currentDirection = 'right';
  }
  if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car up');
    data.currentDirection = 'up';
  }
  if (event.key === ' ') {
    intervalId = setInterval(moveCar, 16);
  }
})
;
