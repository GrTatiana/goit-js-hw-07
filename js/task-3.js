const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');
inputElem.addEventListener('input', event => {
  event.preventDefault();
  const value = inputElem.value.trim();
  if (value === '') {
    spanElem.textContent = 'Anonymous';
  } else {
    spanElem.textContent = value;
  }
  inputElem.reset;
});
