import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    datePickerTimer: document.querySelector('#datetime-picker'),
startBtn: document.querySelector('button[data-start]'), 
secTimer: document.querySelector('[data-seconds]'),
minTimer: document.querySelector('[data-minutes]'),
hourTimer: document.querySelector('[data-hours]'),
dayTimer: document.querySelector('[data-days]'),
}

let targetDate = null;
let deltaTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
          Notiflix.Notify.warning("Please choose a date in the future")
      } else {
          targetDate = selectedDates[0];
          refs.startBtn.disabled = false;
      }
      
  },
};

class Timer {
    constructor() {
        this.intervalId = null;
    };
   
    start() {
        this.intervalId = setInterval(() => {
            deltaTime = targetDate - Date.now();
            const dateComponents = convertMs(deltaTime);
            if (dateComponents.seconds < 0) {
                clearInterval(this.intervalId);
                return;
        } 
            updateTimer(dateComponents);
        }, 1000);
    };
    // // stop() {
    // clearInterval(this.intervalId);
    // // }
}

const timer = new Timer();

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
    timer.start();
    refs.startBtn.disabled = true;
}
)

flatpickr(refs.datePickerTimer, options);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute)) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(deltaTime) {
    refs.secTimer.innerHTML = deltaTime.seconds;
    refs.minTimer.innerHTML = deltaTime.minutes;
    refs.hourTimer.innerHTML = deltaTime.hours;
    refs.dayTimer.innerHTML = deltaTime.days;
}