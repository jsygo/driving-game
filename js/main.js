/* global data */
/* exported data */

var $car = document.querySelector('.car');

window.addEventListener('keydown', function () {
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
})
;
