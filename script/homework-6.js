// ЗАДАНИЕ 3 - Объект с данными Эльмана
console.log("ЗАДАНИЕ 3 - Объект пользователя:");

const userProfile = {
  firstName: "Эльман",
  lastName: "Эльманов",
  email: "elman.elmanov@example.com",
  jobTitle: "Менеджер",
  company: 'ООО "Бизнес-Решения"',
  age: 41,
  country: "Россия",
  city: "Москва",
  relationshipStatus: "женат",
  phone: "+7 (999) 888-77-66",
};

console.log(userProfile);

// ЗАДАНИЕ 4)
console.log("ЗАДАНИЕ 4 - Объект автомобиля с владельцем:");

const car = {
  brand: "Hyundai",
  model: "Solaris",
  year: 2018,
  color: "серебристый",
  transmission: "автоматическая",
};

car.owner = userProfile;

console.log(car);

// ЗАДАНИЕ 5
console.log("ЗАДАНИЕ 5 - Функция добавления максимальной скорости:");

function addMaxSpeedIfMissing(carObject) {
  if (carObject.hasOwnProperty("maxSpeed")) {
    console.log('Свойство "maxSpeed" уже существует. Функция завершена.');
    return;
  } else {
    carObject.maxSpeed = "185 км/ч";
    console.log('Свойство "maxSpeed" успешно добавлено!');
  }
}

console.log('Проверка наличия свойства "maxSpeed" до вызова функции:');
console.log('car.hasOwnProperty("maxSpeed"):', car.hasOwnProperty("maxSpeed")); // false

console.log("Первый вызов функции:");
addMaxSpeedIfMissing(car);

console.log("Проверка после первого вызова:");
console.log('car.hasOwnProperty("maxSpeed"):', car.hasOwnProperty("maxSpeed")); // true
console.log("car.maxSpeed:", car.maxSpeed);

console.log("Второй вызов функции (пытаемся добавить снова):");
addMaxSpeedIfMissing(car);

console.log("Проверка после второго вызова:");
console.log("car.maxSpeed:", car.maxSpeed);

// ЗАДАНИЕ 6
console.log("ЗАДАНИЕ 6 - Функция для вывода значения свойства:");

function getPropertyValue(obj, propertyName) {
  console.log(`Значение свойства "${propertyName}":`, obj[propertyName]);
  return obj[propertyName];
}

console.log("Получаем свойства из объекта userProfile:");
getPropertyValue(userProfile, "firstName");
getPropertyValue(userProfile, "city");
getPropertyValue(userProfile, "age");

console.log("Получаем свойства из объекта car:");
getPropertyValue(car, "brand");
getPropertyValue(car, "maxSpeed");

// ЗАДАНИЕ 7
console.log("ЗАДАНИЕ 7 - Массив продуктов:");

const products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Помидоры", "Огурцы"];

console.log("Продукты:", products);

// ЗАДАНИЕ 8 - Массив книг (объектов)
console.log("ЗАДАНИЕ 8 - Массив книг:");

const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "темно-синий",
    genre: "роман-эпопея",
  },
  {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
    coverColor: "черный",
    genre: "роман",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "красный",
    genre: "роман",
  },
];

console.log("Исходный массив книг:");
console.log(books);

books.push({
  title: "Тихий Дон",
  author: "Михаил Шолохов",
  year: 1940,
  coverColor: "зеленый",
  genre: "роман-эпопея",
});

console.log("Массив книг после добавления:");
console.log(books);

// ЗАДАНИЕ 9
console.log("ЗАДАНИЕ 9 - Объединение массивов книг:");

const sciFiBooks = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "серый",
    genre: "антиутопия",
  },
  {
    title: "451 градус по Фаренгейту",
    author: "Рэй Брэдбери",
    year: 1953,
    coverColor: "оранжевый",
    genre: "антиутопия",
  },
  {
    title: "Солярис",
    author: "Станислав Лем",
    year: 1961,
    coverColor: "синий",
    genre: "научная фантастика",
  },
];

console.log("Массив фантастических книг:");
console.log(sciFiBooks);

const allBooks = [...books, ...sciFiBooks];

console.log("Объединенный массив всех книг:");
console.log(allBooks);

// ЗАДАНИЕ 10
console.log("ЗАДАНИЕ 10 - Добавление свойства isRare (редкая книга):");

function addRareProperty(booksArray) {
  return booksArray.map((book) => {
    return {
      ...book,

      isRare: book.year < 1950,
    };
  });
}

const booksWithRareProperty = addRareProperty(allBooks);

console.log("Книги с добавленным свойством isRare (редкая, если год < 1950):");
console.log(booksWithRareProperty);

console.log("Список книг с указанием редкости:");
booksWithRareProperty.forEach((book) => {
  console.log(
    `"${book.title}" (${book.year}) - ${book.isRare ? "🔴 РЕДКАЯ" : "⚪ Обычная"}`,
  );
});

console.log("ИТОГОВАЯ ИНФОРМАЦИЯ:");
console.log("Владелец авто:", userProfile.firstName, userProfile.lastName);
console.log("Автомобиль:", car.brand, car.model, car.year, car.color);
console.log("Максимальная скорость:", car.maxSpeed);
console.log("Всего книг в библиотеке:", allBooks.length);
console.log(
  "Редких книг:",
  booksWithRareProperty.filter((book) => book.isRare).length,
);
