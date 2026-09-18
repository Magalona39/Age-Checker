let ageInput = document.querySelector("#age");
let result = document.querySelector("#message");
let submitButton = document.querySelector("#submitBtn");

function checkAge() {
  let yourAge = Number(ageInput.value);

  if (ageInput.value === "") {
    result.textContent = "Please Input your age first.";
    result.style.color = "red"
    result.style.fontStyle = "Italic"
  } else if (yourAge <= 0) {
    result.textContent = "Hey please enter a valid age";
    result.style.color = "red"
    result.style.fontStyle = "Italic"
  } else if (yourAge >= 18) {
    result.textContent = "You are an adult";
    result.style.color = "green"
    
  } else {
    result.textContent = "You are a minor";
    result.style.color = "red"
    result.style.fontStyle = "Italic"
  }
}

submitButton.addEventListener("click", checkAge);
