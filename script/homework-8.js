import { products } from "./products.js";

// ЗАДАНИЕ 3: Шаблон карточки
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const compositionList = product.composition
    .map((item) => `<li class="product-card_item">${item}</li>`)
    .join("");

  card.innerHTML = `
        <img src="${product.image}" class="product-card-img" alt="${product.name}" title="${product.name}">
        <p class="product-card_for-skin">${product.skinType}</p>
        <h2 class="product-card_title">${product.name}</h2>
        <p class="product-card_desci">${product.description}</p>
        <div class="product-card__all-compound">
            <span class="product-card_text">Состав</span>
            <ul class="product-card_composition">
                ${compositionList}
            </ul>
        </div>
        <div class="product-card_prise-wrapper">
            <h2 class="product-card_prise-text">цена</h2>
            <h2 class="product-card_prise">${product.price} ₽</h2>
        </div>
    `;

  return card;
}

// ЗАДАНИЕ 4 reduce
const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log("ЗАДАНИЕ 4 - Результат reduce:", productDescriptions);

// ЗАДАНИЕ 5 Функция получения количества
function getNumberOfCards() {
  let userInput;
  let isValid = false;
  let result = 5;

  while (!isValid) {
    userInput = prompt("Сколько карточек отобразить? От 1 до 5");

    if (userInput === null) {
      result = 5;
      break;
    }

    const num = Number(userInput);

    if (!isNaN(num) && Number.isInteger(num) && num >= 1 && num <= 5) {
      isValid = true;
      result = num;
    } else {
      alert("Пожалуйста, введите целое число от 1 до 5");
    }
  }

  return result;
}

// Функция рендеринга
function renderProducts(productsArray, count) {
  const container = document.querySelector(".product-card-wrapper");

  if (!container) {
    console.error("Контейнер .product-card-wrapper не найден!");
    return;
  }

  container.innerHTML = "";
  const productsToShow = productsArray.slice(0, count);

  productsToShow.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// КОД ДЛЯКНОПОК
const firstCardRecolorButton = document.getElementById(
  "recolor-first-card-button",
);
const firstProductCard = document.querySelector(".product-card");
const redColor = "#ff0000";

if (firstCardRecolorButton) {
  firstCardRecolorButton.addEventListener("click", () => {
    if (firstProductCard) {
      firstProductCard.style.backgroundColor = redColor;
    }
  });
}

const greenColor = "#00ff44";
const allCardRecolorButton = document.getElementById("recolor-all-card-button");

if (allCardRecolorButton) {
  allCardRecolorButton.addEventListener("click", () => {
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => {
      card.style.backgroundColor = greenColor;
    });
  });
}

const googleOpenButton = document.getElementById("open-google-button");
if (googleOpenButton) {
  googleOpenButton.addEventListener("click", openGoogle);
}

function openGoogle() {
  if (confirm("Вы действительно хотите перейти на сайт Google?")) {
    window.open("https://google.com");
  } else {
    console.log("Пользователь отменил переход на сайт");
  }
}

// ЗАПУСК
const cardsCount = getNumberOfCards();
renderProducts(products, cardsCount);
console.log(`Отображено ${cardsCount} карточек из ${products.length}`);
