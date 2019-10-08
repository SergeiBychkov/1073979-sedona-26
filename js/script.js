var search = document.querySelector(".button-active");

var popup = document.querySelector(".pop-up");

var datein = document.querySelector("[name=arrival-date]");

var dateout = document.querySelector("[name=departure-date]");

var form = popup.querySelector("form");

function closeModal() {
  popup.classList.add("modal-hide");
};

closeModal();

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains("modal-hide")) {
    popup.classList.add("modal-close");
    setTimeout(function () {
      popup.classList.add("modal-hide");
    }, 600);
  }
  else {
    popup.classList.remove("modal-hide");
    setTimeout(function () {
      popup.classList.remove("modal-close");
    }, 600);
  }
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    setTimeout(function () {
      popup.classList.remove("modal-error")
    }, 550);
    console.log("нужно выбрать даты");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!popup.classList.contains("modal-close")) {
      popup.classList.add("modal-close");
    }
  }
});

