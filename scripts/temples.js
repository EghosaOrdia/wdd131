const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const toggleBtn = document.querySelector("#toggleBtn");
const dropDownLinks = document.querySelector("#dropDownLinks");

const today = new Date();

currentYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;
toggleBtn.addEventListener("click", function () {
  dropDownLinks.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
