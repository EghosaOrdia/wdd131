const counter = document.querySelector("#counter");
counter.textContent = localStorage.getItem("review") || 0;
