const body = document.querySelector('body');
let startBtn = null;
let stopBtn = null;
let timer = null;

window.onload = () => {
  startBtn = document.querySelector('button[data-start]');
  stopBtn = document.querySelector('button[data-stop]');

  console.log({ startBtn, stopBtn });

  startBtn.addEventListener('click', startOnClick);
  stopBtn.addEventListener('click', stopOnClick);
};

const startOnClick = e => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopOnClick = e => {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
