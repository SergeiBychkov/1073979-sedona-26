var search = document.querySelector(".button-active");

var popup = document.querySelector(".pop-up");

var datein = document.querySelector("[name=arrival-date]")

var dateout = document.querySelector("[name=departure-date]")

var form = popup.querySelector("form")


search.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  datein.focus ();
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("нужно выбрать даты");
  }
});





/* клавиши ескейпа
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("pop-up")) {
      popup.classList.remove("pop-up");
    }
  }
});
*/
