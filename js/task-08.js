const form = document.querySelector('.login-form')



const handleFormSubmit = function (event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "")
    { return alert("Заповніть всі поля!"); }

  

    const formData = {
    email: email.value,
    password: password.value
  };

    console.log(formData);

    form.reset();
}

form.addEventListener('submit', handleFormSubmit)