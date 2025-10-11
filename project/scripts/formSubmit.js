let messages = JSON.parse(localStorage.getItem("messages"));

if (!Array.isArray(messages)) {
  messages = [];
}

const submitBtn = document.querySelector("#postbutton");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const message = {
    name: document.querySelector("#name").value,
    review: document.querySelector("#review").value,
    services: [],
  };

  if (document.querySelector("#upgrade").checked)
    message.services.push("upgrade");
  if (document.querySelector("#servicing").checked)
    message.services.push("servicing");
  if (document.querySelector("#replacement").checked)
    message.services.push("Replacement of parts");
  if (document.querySelector("#refurbishing").checked)
    message.services.push("refurbishing");

  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));

  console.log("Saved messages:", messages);
});
