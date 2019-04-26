var toCart = document.querySelector(".modal-adding");
var toCartOpenList = document.querySelectorAll(".js-cart");
var toCartOpen = Array.prototype.slice.call(toCartOpenList);
var toCartAdd = toCart.querySelector(".modal-adding__order");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < toCartOpen.length; i++) {
  toCartOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    toCart.classList.add("modal-adding_show");
    overlay.classList.add("overlay_show");
  });
}

toCartAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  toCart.classList.remove("modal-adding_show");
  overlay.classList.remove("overlay_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && toCart.classList.contains("modal-adding_show")) {
    evt.preventDefault();
    toCart.classList.remove("modal-adding_show");
    overlay.classList.remove("overlay_show");
  }
});
