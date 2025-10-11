const messageContainer = document.querySelector("#messageContainer");

let messages = JSON.parse(localStorage.getItem("messages")) || [];

const displayMessages = () => {
  messageContainer.innerHTML = "";

  messages.forEach((msg) => {
    // Create wrapper
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    // Sender
    const senderP = document.createElement("p");
    senderP.classList.add("message-p");

    const senderLabel = document.createElement("span");
    senderLabel.classList.add("message-label");
    senderLabel.textContent = "Name: ";

    const senderName = document.createElement("span");
    senderName.classList.add("message-name");
    senderName.textContent = msg.name;

    senderP.append(senderLabel, senderName);

    // Review
    const reviewP = document.createElement("p");
    reviewP.classList.add("message-p");

    const reviewLabel = document.createElement("span");
    reviewLabel.classList.add("message-label");
    reviewLabel.textContent = "Review: ";

    const reviewText = document.createElement("span");
    reviewText.classList.add("message-name");
    reviewText.textContent = msg.review;

    reviewP.append(reviewLabel, reviewText);

    // Services
    const serviceP = document.createElement("p");
    serviceP.classList.add("message-p");

    const serviceLabel = document.createElement("span");
    serviceLabel.classList.add("message-label");
    serviceLabel.textContent = "Services: ";

    const serviceText = document.createElement("span");
    serviceText.classList.add("message-name");
    serviceText.textContent = msg.services.join(", ");

    serviceP.append(serviceLabel, serviceText);

    // Put everything together
    messageDiv.append(senderP, reviewP, serviceP);
    messageContainer.appendChild(messageDiv);
  });
};

displayMessages();
