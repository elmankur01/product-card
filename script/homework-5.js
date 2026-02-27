//задание 5.3
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city}
    температура ${temperature} градусов по 
    цельсию`);
}
showWeather("Москва", 20);
showWeather("Питер", 15);

//задание 5.4

const speedOfLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(100);
checkSpeed(299792458);
checkSpeed(300000000);

//задание 5.5

const productName = "Финики";

const productPrice = 250;

function buyProduct(myBudget) {
  if (myBudget >= productPrice) {
    // Хватает денег
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - myBudget;
    console.log(`Вам не хватает ${difference}₽, пополните баланс`);
  }
}

buyProduct(500);
buyProduct(250);
buyProduct(100);

//задание 5.6

function myDrink() {
  let drinkName = "Чай";
  let temperature = 60;

  console.log("У меня " + drinkName);
  console.log("Температура: " + temperature + "°C");

  if (temperature > 80) {
    console.log("Горячо! Обожжешься, подожди немного");
  } else if (temperature > 50) {
    console.log("Самое то! Можно пить");
  } else if (temperature > 30) {
    console.log("Чуть теплый. Лучше подогрей");
  } else {
    console.log("Совсем холодный. Сделай новый!");
  }
}
myDrink();

//задание 5.7

let teaBrand = "Липтон";
let teaCups = 3;
let teaTime = "вечер";

console.log("Бренд чая: " + teaBrand);
console.log("Выпито чашек: " + teaCups);
console.log("Время: " + teaTime);
