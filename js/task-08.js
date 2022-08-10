const form = document.querySelector('.login-form');
let valuesForm = {};
// console.log(valuesForm);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const mail = formEl.email.value;
    const password = formEl.password.value;
    valuesForm.email = mail;
    valuesForm.password = password;

    if (mail === '' || password === '') {
        return alert('fill in all fields, please')
    }
    // console.log(`Email: ${mail}, Password: ${password}`);
      console.log(valuesForm);  
    form.reset();
    };


