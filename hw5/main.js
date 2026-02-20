//– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
// let area = (a, b) => a * b;
// console.log(area(2, 5));

//створити функцію, яка обчислює та повертає площу кола з радіусом r
// let area=(r)=>(Math.PI*r**2).toFixed(2)
// console.log(area(5))

//створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// let area = (h, r) => 2 * Math.PI * h * r;
// console.log(area(4,3));

//створити функцію, яка приймає масив та виводить кожен його елемент
// let showElemnt = (arr) => {
//   for (const element of arr) {
//     console.log(element);
//   }
// };
// showElemnt([4, 5, 9, 0]);

//створити функцію, яка створює параграф з текстом. Текст задати через аргумент
// let addP = (text) => (document.body.innerHTML += `<p>${text}</p>`);
// addP("Lorem ipsum dolor sit amet consectetur adipisicing elit.");

//створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (text) => {
//   document.body.innerHTML = `<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`;
// };
// list("Lorem ipsum");

//створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, count) => {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < count; i++) {
//     let li = document.createElement("li");
//     li.textContent = text;
//     ul.append(li);
//   }
//   document.body.append(ul);
// };
// list("Lorem ipsum", 5);

//створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = (arr) => {
//   let ul = document.createElement("ul");
//   for (const element of arr) {
//     let li = document.createElement("li");
//     li.textContent = element;
//     ul.append(li);
//   }
//   document.body.append(ul);
// };
// list([1, 2, "a", false, true]);

//– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
// let users = [
//   { id: 1, name: "Olya", age: 25 },
//   { id: 2, name: "Ivan", age: 30 },
//   { id: 3, name: "Kolya", age: 28 },
// ];
// let objectOfArr = (arr) => {
//   for (const element of arr) {
//     let div = document.createElement("div");
//     for (const key in element) {
//       const elementObject = element[key];
//       div.innerHTML += `<p>${key} - ${elementObject}</p>`;
//     }
//     document.body.append(div);
//   }
// };
// objectOfArr(users);

//створити функцію яка повертає найменьше число з масиву
// let minValue = (arr) => Math.min(...arr);
// console.log(minValue([9, 1, 2, 3, 8, 6, 0]));

//створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = (arr) => {
//   let sum = 0;
//   for (const element of arr) {
//     sum += element;
//   }
//   return sum;
// };
// console.log(sum([1, 2, 5, 8]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// let swap = (arr, index1, index2) => {
//  let value = arr[index1];
//   let newArr = arr;
//   newArr[index1] = newArr[index2];
//   newArr[index2] = value;
//   return newArr;
// };
// console.log(swap([11, 22, 33, 44], 0, 1));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//   for (const element of currencyValues) {
//     if (element.currency == exchangeCurrency) {
//       return sumUAH / element.value;
//     }
//   }
// };
// console.log(
//   exchange(
//     10000,
//     [
//       { currency: "USD", value: 40 },
//       { currency: "EUR", value: 42 },
//     ],
//     "USD",
//   ),
// );
