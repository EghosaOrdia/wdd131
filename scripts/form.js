const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const select = document.querySelector("#productName");
const submitButton = document.querySelector("#postbutton");


const today = new Date();
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

currentYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;

products.forEach((product) => {
  let option = document.createElement("option");
  option.setAttribute("value", product.id);
  option.textContent = product.name;
  select.appendChild(option);
});

submitButton.addEventListener("click", () => {
  alert("Thank you for your review!");
  const review = Number(localStorage.getItem("review")) + 1;
  localStorage.setItem("review", review);
});
