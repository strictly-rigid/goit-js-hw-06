const InputEl = document.querySelector('#name-input');
const OutputEl = document.querySelector('#name-output');

InputEl.addEventListener('input', () => {
 
    InputEl.value ? OutputEl.textContent = InputEl.value : OutputEl.textContent = 'Anonymous';

  });