const elements = Array.from(document.querySelectorAll('animate'));
const rangeInput = document.querySelector('input[type="range"]');

const updateDuration = (event) => {
  const {
    currentTarget: { value },
  } = event;
  const newValue = `${Math.abs(value)}ms`;
  elements.forEach((element) => element.setAttribute('dur', newValue));
};

rangeInput.addEventListener('change', updateDuration);
