document.querySelector('.block').onmousemove = function (event) {
  event = event || window.event;
  console.log(event);
  document.querySelector('.x').innerHTML = event.offsetX;
  document.querySelector('.y').innerHTML = event.offsetY;
};
