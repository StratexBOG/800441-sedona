  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".search-apartment");
  var form = document.querySelector("form");
  var hotel = popup.querySelector("[name=hotel-arrival]");
  var arrival = popup.querySelector("[name=hotel-arrival]");
  var departure = popup.querySelector("[name=hotel-departure]");
  var adults = popup.querySelector("[name=hotel-adults]");
  var children = popup.querySelector("[name=hotel-children]");

   	popup.classList.add("search-apartment-none");

   	link.addEventListener("click", function (evt) {
   	    evt.preventDefault();
   		popup.classList.toggle("search-apartment-none");
   		hotel.focus();
   	});

   	form.addEventListener("submit", function (evt) {
     if (!arrival.value || !departure.value || !adults.value || !children.value) {
      evt.preventDefault();
    }
  });

   	window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("search-apartment")) {
        popup.classList.toggle("search-apartment-none");
      }
    }
  });