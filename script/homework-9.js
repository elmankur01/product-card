// ========= ФОРМА ПОДПИСКИ (задание 4) ========
const subscribeForm = document.getElementById("subscribeForm");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("subEmail");
    if (!emailInput) return;

    const email = emailInput.value.trim();
    // проверка email
    const isValid = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email);
    if (!email || !isValid) {
      alert("Введите корректный email (например, name@domain.com)");
      return;
    }
    console.log({ email });
    emailInput.value = "";
    alert("Спасибо за подписку!");
  });
}
// ========== МОДАЛЬНОЕ ОКНО (задание 5) =========
const modal = document.getElementById("modal");
const registerBtn = document.getElementById("registerBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.querySelector(".modal__overlay");

if (registerBtn && modal) {
  const openModal = () => modal.classList.add("modal-showed"); // изменено
  const closeModal = () => modal.classList.remove("modal-showed"); // изменено

  registerBtn.addEventListener("click", openModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal-showed")) {
      closeModal();
    }
  });
}
// ========== ФОРМА РЕГИСТРАЦИИ (задание 6) ==========
const registerForm = document.getElementById("registerForm");
let user = null;
let isSubmitting = false; // защита от двойной отправки

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isSubmitting) return; // уже отправляется
    isSubmitting = true;

    // Получаем поля с проверкой на существование
    const firstNameField = registerForm.querySelector('[name="firstName"]');
    const lastNameField = registerForm.querySelector('[name="lastName"]');
    const birthDateField = registerForm.querySelector('[name="birthDate"]');
    const loginField = registerForm.querySelector('[name="login"]');
    const passwordField = registerForm.querySelector('[name="password"]');
    const confirmPasswordField = registerForm.querySelector(
      '[name="confirmPassword"]',
    );

    // Если какого-то поля нет – прерываем
    if (
      !firstNameField ||
      !lastNameField ||
      !birthDateField ||
      !loginField ||
      !passwordField ||
      !confirmPasswordField
    ) {
      alert("Ошибка: не все поля найдены на странице");
      isSubmitting = false;
      return;
    }

    const firstName = firstNameField.value.trim();
    const lastName = lastNameField.value.trim();
    const birthDate = birthDateField.value;
    const login = loginField.value.trim();
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    const isFormValid = registerForm.checkValidity();
    const doPasswordsMatch = password === confirmPassword;

    if (!isFormValid) {
      alert("Пожалуйста, заполните все поля корректно.");
      isSubmitting = false;
      return;
    }
    if (!doPasswordsMatch) {
      alert("Пароли не совпадают!");
      isSubmitting = false;
      return;
    }

    user = {
      firstName,
      lastName,
      birthDate,
      login,
      password,
      createdOn: new Date(),
    };
    console.log("Регистрация успешна:", user);

    // Закрыть модалку и очистить форму
    if (modal) modal.classList.remove("modal--active");
    registerForm.reset();
    alert("Добро пожаловать! Регистрация прошла успешно.");

    isSubmitting = false;
  });
}
