const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let inputs = document.querySelectorAll(".form__input");
  event.preventDefault();

  for (let input = 0; input < inputs.length; input++) {
    let errorSpan = document.querySelector(".error-message");

    if (!inputs[input].checkValidity()) {
      inputs[input].classList.add("error");
      errorSpan.innerHTML = inputs[input].validationMessage;
    }
  }
});

//Ниже старый вариант кода, он тоже у меня не сработал, был в отдельной функции

//if (validity.patternMismatch) {
//  input.classList.add("error");
// errorSpan.innerHTML = "Wrong format";
//}

//if (validity.rangeOverflow) {
// let max = input.max;
//input.classList.add("error");
//errorSpan.innerHTML = "Maximum possible value is " + max;
//}

//if (validity.rangeUnderflow) {
// let min = input.min;
//input.classList.add("error");
//errorSpan.innerHTML = "Minimum possible value is " + min;
// }

//if (validity.valueMissing) {
// input.classList.add("error");
//errorSpan.innerHTML = "Value is missing";
//}

//if (validity.typeMismatch) {
// input.classList.add("error");
//errorSpan.innerHTML = "Wrong type of data";
//}

//if (validity.tooLong) {
// input.classList.add("error");
//errorSpan.innerHTML = "Value is too long";
//}

//if (validity.tooShort) {
// input.classList.add("error");
//errorSpan.innerHTML = "Value is too short";
//}

//if (validity.stepMismatch) {
//input.classList.add("error");
//errorSpan.innerHTML = "Step is wrong";
//}

//if (validity.badInput) {
// input.classList.add("error");
//errorSpan.innerHTML = "Wrong format";
// }
//}
