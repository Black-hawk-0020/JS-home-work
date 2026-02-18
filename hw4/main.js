//створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
// function area(a, b) {
//   return a * b;
// }

//створити функцію, яка обчислює та повертає площу кола з радіусом r
// function area(r) {
//   return Math.PI*r**2;
//  }

//створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// function area(h, r) {
//   return (2 * Math.PI * r * h).toFixed(2);
// }
// console.log(area(5, 9));

//створити функцію, яка приймає масив та виводить кожен його елемент
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// function showArr(arr) {
//     for (const element of arr) {
//         console.log(element);

//     }
// }
// showArr(array1)

//створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function addP(text) {
//   let p = document.createElement("p");
//   p.textContent = text;
//   document.body.append(p);
// }
// addP("Lorem ipsum dolor sit amet consectetur adipisicing elit. ");

//– створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function createUl(text) {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < 3; i++) {
//     let li = document.createElement("li");
//     li.textContent = text;
//     ul.append(li);
//   }
//   document.body.append(ul);
// }
// createUl("Lorem ipsum dolor");

// створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function createUl(text,num) {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < num; i++) {
//     let li = document.createElement("li");
//     li.textContent = text;
//     ul.append(li);
//   }
//   document.body.append(ul);
// }
// createUl("Lorem ipsum dolor",5);

//створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// function createUl(arr) {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     ul.innerHTML += `<li>${element} </li>`;
//   }
//   document.body.append(ul);
// }
// let arr2 = [1, 2, true, false, "a"];
// createUl(arr2);

//створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
// let users = [
//   { id: 1, name: "Olya", age: 25 },
//   { id: 2, name: "Ivan", age: 30 },
//   { id: 3, name: "Kolya", age: 28 },
// ];
// function objectOfArr(arr) {
//   for (const element of arr) {
//     let div = document.createElement("div");
//     for (const key in element) {
//       const elementObject = element[key];
//       div.innerHTML += `<p>${key} - ${elementObject}</p>`;
//     }
//     document.body.append(div);
//   }
// }
// objectOfArr(users);

//створити функцію яка повертає найменьше число з масиву
// function minValue(arr) {
//     return Math.min(...arr)
// }
// console.log(minValue([9,1,2,3,8,6,0]));

//створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//   let sum = 0;
//   for (const element of arr) {
//     sum += element;
//   }
//   return sum;
// }
// console.log(sum([1, 2, 5, 8]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// function swap(arr, index1, index2) {
//   let newArr = arr;
//   let value = newArr[index1];
//   newArr.splice(index1, 1);
//   arr.splice(index2, 0, value);
//   return newArr;
// }
// console.log(swap([11, 22, 33, 44], 0,2));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    return sumUAH/exchangeCurrency+currencyValues
}
console.log( exchange(10000,"USD",25))