const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successModal = document.getElementById("success-modal");
const confirmedEmailElement = document.getElementById("confirmed-email");
const dismissButton = document.getElementById("dismiss-button");

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

function showError() {
  emailInput.classList.add("error");
  errorMessage.style.display = "block";
}

function hideError() {
  emailInput.classList.remove("error");
  errorMessage.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    showError();
    return;
  }

  hideError();

  successModal.style.display = "flex";

  confirmedEmailElement.textContent = email;
});

dismissButton.addEventListener("click", () => {
  successModal.style.display = "none";
});

emailInput.addEventListener("input", hideError);
