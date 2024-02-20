/* This code is selecting all elements with the class "slide-button" and assigning them to the variable
`slideBtn`. It is also selecting the element with the id "login-container" and assigning it to the
variable `loginContainer`, and selecting the element with the id "overlay" and assigning it to the
variable `overlay`. */
let slideBtn = document.querySelectorAll(".slide-button");
let loginContainer = document.getElementById("login-container");
let overlay = document.getElementById("overlay");
slideBtn.forEach((element) => {
  element.addEventListener("click", function () {
    overlay.classList.toggle("slide-left");
  });
});
