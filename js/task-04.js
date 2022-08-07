let counterValue = 0;
const buttonDecrEl = document.querySelector('[data-action="decrement"]')
const buttonIncrEl = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector("#value")
// console.log(buttonDecrEl);
// console.log(buttonIncrEl);
// console.log(valueEl);
function increment(){
	counterValue +=1;
  console.log(valueEl.textContent = counterValue);
}
function decrement(){
	counterValue -=1;
	console.log(valueEl.textContent = counterValue);
}
buttonDecrEl.addEventListener('click', decrement);
buttonIncrEl.addEventListener('click', increment);