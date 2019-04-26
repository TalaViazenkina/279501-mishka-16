var navMain = document.querySelector(".header__inner");
var navToggle = document.querySelector(".header__toggle");

navMain.classList.remove("header__inner_nojs");

if(navMain.classList.contains("header__inner_opened")) {
  navMain.classList.remove("header__inner_opened");
  navMain.classList.add("header__inner_closed");
}

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navMain.classList.contains("header__inner_closed")) {
    navMain.classList.remove("header__inner_closed");
    navMain.classList.add("header__inner_opened");
  } else {
    navMain.classList.add("header__inner_closed");
    navMain.classList.remove("header__inner_opened");
  }
});
