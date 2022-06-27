const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
    intervalId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
        refs.startBtn.setAttribute('disabled', true)
    }, 1000);
};

function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
}