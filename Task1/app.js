function Rand() {
  let max = 100;
  return Math.round(Math.random() * max);
}

const rand = document.getElementById('button');
const prin = document.getElementById('div');

rand.onclick = function () {
  prin.innerHTML = Rand();
};
