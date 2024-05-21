const FormEl = document.querySelector('.login-form');
FormEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(FormEl);
  const data = {};
  if (
    FormEl.elements.email.value === '' ||
    FormEl.elements.password.value === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    formData.forEach((value, key) => {
      data[key] = value;
    });
  }
  console.log(data);
  FormEl.reset();
});
