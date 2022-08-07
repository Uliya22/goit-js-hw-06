const input = document.querySelector("#font-size-control")
// console.log(input);
const span = document.querySelector("#text")

input.addEventListener('input', spanReng)

function spanReng(event) {
    span.style.fontSize = `${event.currentTarget.value}px`
}