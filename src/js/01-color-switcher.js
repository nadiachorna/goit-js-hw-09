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

function onStartBtnClick(e) {
    e.preventDefault();
    intervalId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.startBtn.removeEventListener('click', onStartBtnClick);
};

function onStopBtnClick(e) {
    e.preventDefault();
    clearInterval(intervalId);

    refs.startBtn.disabled = false;
    refs.startBtn.addEventListener('click', onStartBtnClick);
     
}
