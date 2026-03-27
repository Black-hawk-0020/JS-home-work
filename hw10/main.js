// 1 #sH8c4er
// let div=document.getElementById("text")
// let button = document.getElementsByTagName("button")[0];
// console.log(button);
//  button.addEventListener ("click",function () {
//     div.style.display="none"
//  })


// 2 #j693ca8
// document.forms.age.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let value=  this.ageNum.value;
//   let p = document.getElementsByClassName("p")[0];
//   if (value<18) {
//     p.textContent="Вік меньший 18"
//   } else p.textContent="Повнолітній"
// });


// 3 #ymAmN2xJ
// document.forms.person.addEventListener("submit", function (e) {
//   e.preventDefault();
//   document.body.innerHTML += `<p>name: ${this.name.value}</p>
// <p>surname: ${document.forms.person.surname.value}</p>
// <p>age: ${document.forms.person.age.value}</p>`;
// });


// 4 #2VaLt4vDczH
// let number = +localStorage.getItem("number") || 0;
// number += 1;
// localStorage.setItem("number", number);
// let div = document.createElement("div");
// div.textContent = number;
// document.body.appendChild(div);


// 5 #LhSfdhM3
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// for (const element of sessionsList) {
//     document.body.innerHTML+=`<p>${element}</p>`}


// 6 #Jg0gPO00
// let input = document.getElementById("number");
// let timerId;
// input.addEventListener("input", function () {
//   clearTimeout(timerId);
//   timerId = setTimeout(function () {
//     let ib = +input.value * 2.2;
//     document.body.innerHTML += `<p>${ib}</p>`;
//   }, 1000);
// });


// 7 #RbQGnH5DuC
// function addToLocalStorage(arrayName, objToAdd) {
//   let arr = JSON.parse(localStorage.getItem(arrayName)) || [];
//   arr.push(objToAdd);
//   localStorage.setItem(arrayName, JSON.stringify(arr));
// }
// addToLocalStorage("q", { q: 1 });
// addToLocalStorage("q", { q: 2 });
// addToLocalStorage("w", { w: 1 });


// 8 #kUSgFqWY
// function createRow(countCell, text) {
//   let tr = document.createElement("tr");
//   for (let i = 0; i < countCell; i++) {
//     let td = document.createElement("td");
//     td.textContent = text;
//     tr.appendChild(td);
//   }
//   return tr;
// }
// function createTable(countrow, countCell, text) {
//   let table = document.createElement("table");
//   for (let i = 0; i < countrow; i++) {
//     table.appendChild(createRow(countCell, text));
//   }
//   document.body.appendChild(table);
// }
// let form = document.forms.dateTable;
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let countRow = this.countRow.value;
//   let countCell = this.countCell.value;
//   let content = this.content.value;
//   createTable(countRow, countCell, content);
// });


// 9 #bq1zkx7WP
// let time = JSON.parse(localStorage.getItem("time")) || [];
// time.push(new Date());
// localStorage.setItem("time", JSON.stringify(time));
// let timelast = new Date(time[time.length - 1]).getTime();
// let beforeTimelast = new Date(time[time.length - 2]).getTime();
// let interval = +((timelast - beforeTimelast) / 1000).toFixed();
// let money = 100;
// if (interval > 10) money += 10;
// console.log(interval);
// document.body.innerHTML += `<p>${money}грн</p>`;


// 10 #NKB0tgWIK1G
// let firstName = [
//   "Микола",
//   "Іван",
//   "Степан",
//   "Олександр",
//   "Святослав",
//   "Мирослав",
//   "Владислав",
//   "Микола",
//   "Дмитро",
//   "Денис",
//   "Богдан",
//   "Сергій",
//   "Володимир",
//   "Богдан",
// ];
// let lastName = [
//   "Миколайович",
//   "Васильович",
//   "Валентинович",
//   "Степанович",
//   "Євгенович",
//   "Олександрович",
//   "Дмитрович",
//   "Іванович",
//   "Ігорович",
//   "Анатолійович",
//   "Мирославович",
//   "Святославович",
//   `Сергійович`,
//   "Володимирович",
// ];
// let sity = [
//   "Київ",
//   "Житомир",
//   "Миколаїв",
//   "Одеса",
//   "Ічня",
//   "Борисполь",
//   "Вижгород",
//   "Львів",
//   "Стрий",
//   "Мукачево",
//   "Коломия",
//   "Тернопіль",
//   "Чортків",
//   "Дунаївці",
//   "Гусятин",
//   "Надвірна",
//   "Бурштин",
//   "Галич",
//   "Делятин",
//   "Бучач",
//   "Калуш",
//   "Гусятин",
//   "Смотрич",
// ];
// let users = [];
// for (let i = 1; i < 101; i++) {
//   users.push({
//     id: i,
//     firstName: firstName[Math.floor(Math.random() * firstName.length)],
//     lastName: lastName[Math.floor(Math.random() * lastName.length)],
//     sity: sity[Math.floor(Math.random() * lastName.length)],
//   });
// }
// let prev = document.getElementById("prev");
// let next = document.getElementById("next");
// let block = document.getElementById("block");
// let i = 0;
// showUsers(i, users);
// next.addEventListener("click", function () {
//   if (i < 90) i += 10;
//   showUsers(i, users);
// });
// prev.addEventListener("click", function () {
//   if (i > 0) i -= 10;
//   showUsers(i, users);
// });
// function showUsers(i, arr) {
//   block.innerHTML = null;
//   let max = i + 10;
//   for (; i < max; i++) {
//     let obj = arr[i];
//     block.innerHTML += `<p> id: ${obj.id} ${obj.firstName} ${obj.    lastName} місто: ${obj.sity}</p>`;
//   }
// }
