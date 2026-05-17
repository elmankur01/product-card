const firstCardRecolorButton = document.getElementById(
  "recolor-first-card-button",
);
const firstProductCard = document.querySelector(".product-card");
const blueHashColor = "#ba1a1a";

firstCardRecolorButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

const greenHashColor = "#00ff44";

const productCards = document.querySelectorAll(".product-card");
const allCardRecolorButton = document.getElementById("recolor-all-card-button");

allCardRecolorButton.addEventListener("click", () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = greenHashColor;
  });
});

const googleOpenButton = document.getElementById("open-google-button");
googleOpenButton.addEventListener("click", openGoogle);

function openGoogle() {
  if (confirm("вы действительно хотите перейти на сайт Google")) {
    window.open("https://google.com");
  } else {
    console.log("пользователь отменил переход на сайт");
  }
}
