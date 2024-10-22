const form = document.querySelector('.feedback-form');
const msg = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey)) {
  msg.value = JSON.parse(localStorage.getItem(localStorageKey)).msg;
  email.value = JSON.parse(localStorage.getItem(localStorageKey)).email;
} else {
  msg.value = '';
  email.value = '';
}

email.addEventListener('input', evt => {
  const formData = { msg: msg.value, email: evt.target.value.trim() };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
msg.addEventListener('input', evt => {
  const formData = { msg: evt.target.value.trim(), email: email.value };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (msg.value === '' || email.value === '') {
    alert('Check the form, one of the fields has not been filled in.!');
    return;
  } else {
    console.log(
      `Email: ${
        JSON.parse(localStorage.getItem(localStorageKey)).email
      } \nMessage: ${JSON.parse(localStorage.getItem(localStorageKey)).msg}`
    );
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
