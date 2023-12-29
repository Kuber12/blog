let slideBtn = document.querySelectorAll(".slide-button");
let loginContainer = document.getElementById("login-container");
let overlay = document.getElementById("overlay");
slideBtn.forEach((element) => {
  element.addEventListener("click", function () {
    overlay.classList.toggle("slide-left");
  });
});
