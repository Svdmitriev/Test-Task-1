document.querySelector(".burger-btn").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");

  // Добавляем проверку на существование .nav-overlay
  const navOverlay = document.querySelector(".nav-overlay");
  if (navOverlay) {
    navOverlay.classList.toggle("active");
  }
});

const navOverlay = document.querySelector(".nav-overlay");
if (navOverlay) {
  navOverlay.addEventListener("click", function () {
    document.querySelector(".burger-btn").classList.remove("active");
    document.querySelector(".nav-links").classList.remove("active");
    this.classList.remove("active");
  });
}
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Проверка чекбокса
  const privacyCheckbox = document.getElementById("privacy");
  if (!privacyCheckbox.checked) {
    document.getElementById("privacyError").textContent =
      "You must accept the privacy policy.";
    return;
  } else {
    document.getElementById("privacyError").textContent = "";
  }

  // Блокируем кнопку на время обработки
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("submitBtn").textContent = "Отправка...";

  setTimeout(() => {
    showSuccessMessage();
    document.getElementById("submitBtn").disabled = false;
    document.getElementById("submitBtn").textContent = "Отправить";
  }, 1500);
});

function showSuccessMessage() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("successMessage").style.display = "block";

  setTimeout(() => {
    document.getElementById("myForm").reset();
    document.getElementById("myForm").style.display = "block";
    document.getElementById("successMessage").style.display = "none";
  }, 3000);
}

// Валидация чекбокса при изменении
document.getElementById("privacy").addEventListener("change", function () {
  if (!this.checked) {
    document.getElementById("privacyError").textContent =
      "You must accept the privacy policy.";
  } else {
    document.getElementById("privacyError").textContent = "";
  }
});
