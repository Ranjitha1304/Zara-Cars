const rentalBtn = document.getElementById("rentalCarsBtn");
const dropdown = document.getElementById("dropdownMenu");

rentalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (!e.target.matches('#rentalCarsBtn')) {
    dropdown.classList.remove('show');
  }
});
