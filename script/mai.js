const recolorFirstCardButton = document.getElementById(
  "recolor-first-card-button",
);
const firstProductCard = document.querySelector(".product-card");
const blueHashColor = "#ff0000";

recolorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

const greenHashColor = "#00ff44";

const productCards = document.querySelectorAll(".product-card");
const recolorAllCardButton = document.getElementById("recolor-all-card-button");

recolorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = greenHashColor;
  });
});

const googleOpenButton = document.getElementById("open-google-button");
googleOpenButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("вы действительно хотите перейти на сайт Google ");

  if (answer === true) {
    window.open("https://google.com");
  } else {
    console.log("пользователь отменил переход на сайт");
  }
}
