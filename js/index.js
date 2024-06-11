const bodyElement = document.querySelector('[data-js="body"]');

const showAnswer = document.querySelector('[data-js="show-button"]');
const homePage = document.querySelector('[data-js="home-link"]');
const hideAnswer = document.querySelector('[data-js="hide-button"]');
const profilePage = document.querySelector('[data-js="user-link"]');
showAnswer.addEventListener("click", () => {
  showAnswer.classList.add("button--color");
  window.open("http://127.0.0.1:5501/answer.html");
});
hideAnswer.addEventListener("click", () => {
  window.open("http://127.0.0.1:5501/bookmark.html");
});
homePage.addEventListener("click", () => {
  window.open("http://127.0.0.1:5501/home.html");
});
profilePage.addEventListener("click", () => {
  window.open("http://127.0.0.1:5501/profile.html");
});
