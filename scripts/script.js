const form = document.querySelector("form");
const checkbox = document.querySelector("#checkbox");
const checkboxError = document.querySelector("#agreement-error");

form.addEventListener("submit", function (event) {
  let errorSpan = document.querySelectorAll(".error-message");
  let inputs = document.querySelectorAll(".form__input");

  event.preventDefault();

  for (let input = 0; input < inputs.length; input++) {
    if (!inputs[input].validity.valid) {
      inputs[input].classList.add("error");
      errorSpan[input].innerHTML = inputs[input].validationMessage;
    }
    if (inputs[input].validity.valid) {
      inputs[input].classList.remove("error");
      errorSpan[input].innerHTML = "+";
    } else if (!checkbox.checked) {
      checkboxError.classList.add("error");
      checkbox.innerHTML = checkbox.validationMessage;
    } else if (inputs[input].validity.valid) {
      console.log(inputs[input].value);
    }
  }
  form.reset();
});
