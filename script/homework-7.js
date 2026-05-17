// ЗАДАНИЕ 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);

console.log("Задание 2:");
console.log("Отфильтрованный массив (начиная с 5):", filteredNumbers);

// ЗАДАНИЕ3
const kitchenUtensils = [
  "Нож",
  "Разделочная доска",
  "Сковорода",
  "Кастрюля",
  "Лопатка",
  "Половник",
  "Терка",
  "Венчик",
];
const searchItem = "Сковорода";
const isExists = kitchenUtensils.includes(searchItem);

console.log("Задание 3:");
console.log(
  `Прибор "${searchItem}" ${isExists ? "присутствует" : "отсутствует"} в массиве`,
);

// ЗАДАНИЕ 4
function reverseArray(arr) {
  return [...arr].reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedUtensils = reverseArray(kitchenUtensils);

import { firstTenComments } from "./comments.js";

// Задание 7
const commentsWithCom = firstTenComments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log("Комментарии с email содержащим .com:", commentsWithCom);

// Задание 8
const updatedComments = firstTenComments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));
console.log("Обновленные комментарии с измененным postId:", updatedComments);

// Задание 9
const idAndNameOnly = firstTenComments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log("Объекты только с id и name:", idAndNameOnly);

// Задание 10
const commentsWithInvalidFlag = firstTenComments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));
console.log("Комментарии с флагом isInvalid:", commentsWithInvalidFlag);

// Задание 11
// С помощью reduce
const emailsReduce = firstTenComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log("Массив почт через reduce:", emailsReduce);

// С помощью map
const emailsMap = firstTenComments.map((comment) => comment.email);
console.log("Массив почт через map:", emailsMap);

// Задание 12
// Через toString()
const emailsToString = emailsMap.toString();
console.log("Массив почт через toString():", emailsToString);

// Через join()
const emailsJoin = emailsMap.join(", ");
console.log("Массив почт через join():", emailsJoin);
