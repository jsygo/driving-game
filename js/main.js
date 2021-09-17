/* global data */
/* exported data */

var $car = document.querySelector('.car');
var $carStyle = $car.style;
var $windowWidth = window.innerWidth;
var $windowHeight = window.innerHeight;
var intervalId = null;

function moveCar() {
  if (data.currentDirection === 'right') {
    $carStyle.left = `${data.location.x + 5}px`;
    data.location.x += 5;
    if ((data.location.x + 160) > $windowWidth) {
      clearInterval(intervalId);
      data.moving = false;
    }
  }
  if (data.currentDirection === 'left') {
    $carStyle.left = `${data.location.x - 5}px`;
    data.location.x -= 5;
    if (data.location.x < 0) {
      clearInterval(intervalId);
      data.moving = false;
    }
  }
  if (data.currentDirection === 'up') {
    $carStyle.top = `${data.location.y - 5}px`;
    data.location.y -= 5;
    if (data.location.y < 0) {
      clearInterval(intervalId);
      data.moving = false;
    }
  }
  if (data.currentDirection === 'down') {
    $carStyle.top = `${data.location.y + 5}px`;
    data.location.y += 5;
    if ((data.location.y + 160) > $windowHeight) {
      clearInterval(intervalId);
      data.moving = false;
    }
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
    if (data.moving === false) {
      intervalId = setInterval(moveCar, 16);
      data.moving = true;
    } else {
      clearInterval(intervalId);
      data.moving = false;
    }
  }
})
;
