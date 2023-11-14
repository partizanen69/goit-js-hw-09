import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

let dateSelected = null;

const datePicker = flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: onDatePickerClose,
});

startBtn.addEventListener('click', onStart);

function onDatePickerClose(selectedDates) {
  dateSelected = selectedDates[0];

  if (dateSelected < new Date()) {
    alert('Please choose a date in the future');
    startBtn.disabled = true;
    return;
  }

  startBtn.disabled = false;
}

function onStart() {
  startBtn.disabled = true;
  dateInput.disabled = true;

  const timer = setInterval(() => {
    const remainingMs = dateSelected - new Date();
    const { days, hours, minutes, seconds } = convertMs(remainingMs);

    daysSpan.innerText = addLeadingZero(days);
    hoursSpan.innerText = addLeadingZero(hours);
    minutesSpan.innerText = addLeadingZero(minutes);
    secondsSpan.innerText = addLeadingZero(seconds);

    if (!days && !hours && !minutes && !seconds) {
      clearInterval(timer);
      startBtn.disabled = false;
      dateInput.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = num => {
  return String(num).padStart(2, '0');
};
