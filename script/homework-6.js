// ЗАДАНИЕ 3
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

// ЗАДАНИЕ 4
const car = {
  brand: "Hyundai",
  model: "Solaris",
  year: 2018,
  color: "серебристый",
  transmission: "автоматическая",
  owner: userProfile,
};

// ЗАДАНИЕ 5
function ensureMaxSpeed(carObject) {
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = "185 км/ч";
  }
}

ensureMaxSpeed(car);

// ЗАДАНИЕ 6
function getPropertyValue(obj, propertyName) {
  return obj[propertyName];
}

// ЗАДАНИЕ 7
const products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Помидоры", "Огурцы"];

// ЗАДАНИЕ 8
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

books.push({
  title: "Тихий Дон",
  author: "Михаил Шолохов",
  year: 1940,
  coverColor: "зеленый",
  genre: "роман-эпопея",
});

// ЗАДАНИЕ 9
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

const allBooks = [...books, ...sciFiBooks];

// ЗАДАНИЕ 10
function getBooksWithRareProperty(booksArray) {
  return booksArray.map((book) => ({
    ...book,
    isRare: book.year < 1950,
  }));
}

const booksWithRareProperty = getBooksWithRareProperty(allBooks);
