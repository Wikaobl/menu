const burger = document.querySelector(".burger");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-times");
const menu = document.querySelector("nav ul");

const show = () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  bars.classList.toggle("hide");
  xmark.classList.toggle("hide");
};

burger.addEventListener("click", show);
