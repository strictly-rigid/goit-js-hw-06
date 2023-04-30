let counterValue = 0;
let showValue = document.querySelector('#value');

const decrBtn = document.querySelector('button[data-action="decrement"]');

const decrementHandler = function () {
    counterValue -= 1;
    showValue.textContent = counterValue;
}

decrBtn.addEventListener("click", decrementHandler)

const incrBtn = document.querySelector('button[data-action="increment"]');

const incrementHandler = function () {
    counterValue += 1;
    showValue.textContent = counterValue;
}

incrBtn.addEventListener("click", incrementHandler)




