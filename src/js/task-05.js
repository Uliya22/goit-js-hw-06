const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);

inputEl.addEventListener('input', newInputEl)

function newInputEl(event) {
    console.log(event.currentTarget.value);
    if (inputEl.value === '') {
        return spanEl.textContent = 'Anonymous'
    }
    return spanEl.textContent = event.currentTarget.value;

};
