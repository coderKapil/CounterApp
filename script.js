let counter = document.querySelector("#counter");
let currentValue = 0;
let btnIncrement = document.querySelector("#increment");
let btnReset = document.querySelector("#reset");
let btndecrement = document.querySelector("#decrement");

btnIncrement.addEventListener("click", () => {
  currentValue += 1;
  counter.textContent = currentValue;
});

btnReset.addEventListener("click", () => {
  currentValue = 0;
  counter.textContent = currentValue;
});

btndecrement.addEventListener("click", () => {
  currentValue -= 1;
  counter.textContent = currentValue;
});
