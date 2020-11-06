const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let timerId = null;
let isActive = false;

// функ. генерування випадк. числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

start.addEventListener('click',bodyColorChange);
stop.addEventListener('click', bodyColorChangeStop);

function bodyColorChange() {
  if (isActive) { return; }
  isActive = true;
  timerId = setInterval(() => colorBgChange (), 1000);
  
}
function bodyColorChangeStop() {
  clearTimeout(timerId)
  isActive = false;
}

// функція для генерування кольору
function colorBgChange() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = colors[colorIndex];
};
