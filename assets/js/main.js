const menu = document.querySelector("#menu-bar");
const nav = document.querySelector(".nav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
};