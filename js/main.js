/* global data */
/* exported data */

var $car = document.querySelector('.car');
var $carStyle = $car.style;

function moveCar() {
  console.log('move car!');
  $carStyle.left = `${data.location.x + 5}px`;
  data.location.x += 5;
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
    var intervalId = setInterval(moveCar, 16);
  }
})
;
