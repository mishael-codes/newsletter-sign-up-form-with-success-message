let btn = document.getElementById("btn");
let form = document.querySelector(".form");
let error = document.getElementById("error");
let userEmail = document.getElementById("userEmail");

// pages
let signupPage = document.querySelector(".signupPage");
let successPage = document.querySelector(".successPage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let emailValue = email.value;
  let checkForAt = emailValue.indexOf("@");
  let checkForDot = emailValue.indexOf(".");
  if (
    emailValue === "" ||
    checkForAt < 1 ||
    checkForDot < checkForAt + 2 ||
    checkForDot + 2 >= emailValue.length
  ) {
    navigator.vibrate(200);
    error.textContent = "Valid email required";
    email.classList.add("bg-lightTomato");
    email.classList.add("border-tomato");
  } else {
    userEmail.textContent = emailValue.trim();
    signupPage.classList.remove("md:flex");
    signupPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    successPage.classList.add("flex");
  }
});

// uses the enter key as a submit button
form.addEventListener("keypress", (e) => {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let checkForAt = emailValue.indexOf("@");
  let checkForDot = emailValue.indexOf(".");

  if (e.key === "Enter") {
    if (
      emailValue === "" ||
      checkForAt < 1 ||
      checkForDot < checkForAt + 2 ||
      checkForDot + 2 >= emailValue.length
    ) {
      navigator.vibrate(200);
      error.textContent = "Valid email required";
      email.classList.add("bg-lightTomato");
      email.classList.add("border-tomato");
    } else {
      alert("Form Submitted!");
    }
  } else return false;
});
