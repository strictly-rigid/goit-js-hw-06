const form = document.querySelector('.login-form')

form.addEventListener('submit', handleFormSubmit)

const handleFormSubmit = function (event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "")
    { return alert("Заповніть всі поля!"); }

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
    email,
    password
  };

    console.log(formData);

    form.reset();
}