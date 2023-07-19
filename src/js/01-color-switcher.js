const bodyEl = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let timerId = null;

buttonStart.addEventListener('click', onClickStart);
buttonStop.addEventListener('click', onClickStop);


function onClickStart(){
buttonStart.setAttribute('disablet', 'disablet');
timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
}, 1000);
};

function onClickStop(){
buttonStop.removeAttribute('disabled');
clearInterval(timerId);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }