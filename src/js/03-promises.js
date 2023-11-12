const submitBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');
let inProgress = false;

submitBtn.addEventListener('click', async e => {
  e.preventDefault();

  if (inProgress) {
    return;
  }

  let delay = form.elements.delay.value;
  let step = form.elements.step.value;
  let amount = form.elements.amount.value;

  if (!delay || !step || !amount) {
    alert('Please fill in all values');
    return;
  }

  delay = Number(delay);
  step = Number(step);
  amount = Number(amount);

  if (delay <= 0) {
    alert('Delay must be greater than zero');
    return;
  }

  if (step <= 0) {
    alert('Step must be greater than zero');
    return;
  }

  if (amount <= 0) {
    alert('Amount must be greater than zero');
    return;
  }

  inProgress = true;

  for (let i = 0; i <= amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  inProgress = false;
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
