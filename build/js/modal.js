let openModalbtn = document.querySelector(".modal__btn");
let openModalWindow = document.querySelector(".modal");
let hideModalBtn = document.querySelector(".modal__close");

openModalbtn.addEventListener("click", () => {
  openModalWindow.classList.add("open");
});

hideModalBtn.addEventListener("click", () => {
  openModalWindow.classList.remove("open");
});
