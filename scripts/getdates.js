const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");

const today = new Date();

currentYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;
