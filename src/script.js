/*let menu = function (icon) {
  icon.classList.toggle("fa-times");
};

menu = (icon) => icon.classList.toggle("fa-times");*/

function showMenu() {
  const items = document.querySelector(".items");
  items.computedStyleMap.display = "flex";
}
function hideMenu() {
  const items = document.querySelector(".items");
  items.computedStyleMap.display = "none";
}
