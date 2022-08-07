function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorBackGraund = document.querySelector(".color");


buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = backgroundColor;
  colorBackGraund.textContent = backgroundColor;
  console.log(backgroundColor);
}