/* global data */
/* exported data */

var $car = document.querySelector('.car');
var $carStyle = $car.style;
var $windowWidth = window.innerWidth;
var $windowHeight = window.innerHeight;
var intervalId = null;

function moveCarRight() {
  $carStyle.left = `${data.location.x + 5}px`;
  data.location.x += 5;
  if ((data.location.x + 160) > $windowWidth) {
    clearInterval(intervalId);
    data.moving = false;
  }
}

function moveCarLeft() {
  $carStyle.left = `${data.location.x - 5}px`;
  data.location.x -= 5;
  if (data.location.x < 0) {
    clearInterval(intervalId);
    data.moving = false;
  }
}

function moveCarUp() {
  $carStyle.top = `${data.location.y - 5}px`;
  data.location.y -= 5;
  if (data.location.y < 0) {
    clearInterval(intervalId);
    data.moving = false;
  }
}

function moveCarDown() {
  $carStyle.top = `${data.location.y + 5}px`;
  data.location.y += 5;
  if ((data.location.y + 160) > $windowHeight) {
    clearInterval(intervalId);
    data.moving = false;
  }
}

function moveCar() {
  if (data.currentDirection === 'right') {
    moveCarRight();
  } else if (data.currentDirection === 'left') {
    moveCarLeft();
  } else if (data.currentDirection === 'up') {
    moveCarUp();
  } else if (data.currentDirection === 'down') {
    moveCarDown();
  }
}

document.addEventListener('keydown', function () {
  if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car down');
    data.currentDirection = 'down';
  } else if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car left');
    data.currentDirection = 'left';
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car right');
    data.currentDirection = 'right';
  } else if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car up');
    data.currentDirection = 'up';
  } else if (event.key === ' ') {
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
