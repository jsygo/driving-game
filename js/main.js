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
    if (data.currentDirection === 'up') {
      $car.setAttribute('class', 'car right-from-up');
    } else {
      $car.setAttribute('class', 'car right');
    }
    data.currentDirection = 'right';
  }
  if (event.key === 'ArrowUp') {
    if (data.currentDirection === 'right') {
      $car.setAttribute('class', 'car up-from-right');
    } else {
      $car.setAttribute('class', 'car up');
    }
    data.currentDirection = 'up';
  }
})
;
