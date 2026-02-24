//Знайти та вивести довжину наступних стрінгових значень
// let str1 = "hello world";
// let str2 = "lorem ipsum";
// let str3 = "javascript is cool";
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

//Перевести до великого регістру наступні стрінгові значення
// let str1 = "hello world";
// let str2 = "lorem ipsum";
// let str3 = "javascript is cool";
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

//Перевести до нижнього регістру наступні стрінгові значення
// let str1 = "HELLO WORLD";
// let str2 = "LOREM IPSUM";
// let str3 = "JAVASCRIPT IS COOL";
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

//Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = "Ревуть воли як ясла повні";
// function stringToarray(str) {
//     return str.split(" ")
// }
// console.log(stringToarray(str));

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let strArr= arr.map((value)=>`${value}`)
// console.log(strArr);

// створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// let nums = [11, 3, 21];
// function sortNums(array, direction) {
//   switch (direction) {
//     case "+":
//       return array.sort((a, b) => a - b);
//     case "-":
//       return array.sort((a, b) => b - a);
//   }
// }
// console.log(sortNums(nums, "+"));

// — відсортувати його за спаданням за monthDuration
//— відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
//let sortArr=coursesAndDurationArray.sort( (a, b)=> b.monthDuration- a.monthDuration)
// console.log(sortArr);
// let filterArr=coursesAndDurationArray.filter((element)=>element.monthDuration>5)
// console.log(filterArr);
// let newArr = coursesAndDurationArray.map((element, index) => {
//   element.id = index + 1;
//   return element;
// });
// console.log(newArr);

//–написати пошук всіх об’єктів, в яких в modules є sass
//–написати пошук всіх об’єктів, в яких в modules є docker
// let coursesArray = [
//   {
//     title: "JavaScript Complex",
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: [
//       "html",
//       "css",
//       "js",
//       "mysql",
//       "mongodb",
//       "react",
//       "angular",
//       "aws",
//       "docker",
//       "git",
//       "node.js",
//     ],
//   },
//   {
//     title: "Java Complex",
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: [
//       "html",
//       "css",
//       "js",
//       "mysql",
//       "mongodb",
//       "angular",
//       "aws",
//       "docker",
//       "git",
//       "java core",
//       "java advanced",
//     ],
//   },
//   {
//     title: "Python Complex",
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: [
//       "html",
//       "css",
//       "js",
//       "mysql",
//       "mongodb",
//       "angular",
//       "aws",
//       "docker",
//       "python core",
//       "python advanced",
//     ],
//   },
//   {
//     title: "QA Complex",
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
//   },
//   {
//     title: "FullStack",
//     monthDuration: 7,
//     hourDuration: 909,
//     modules: [
//       "html",
//       "css",
//       "js",
//       "mysql",
//       "mongodb",
//       "react",
//       "angular",
//       "aws",
//       "docker",
//       "git",
//       "node.js",
//       "python",
//       "java",
//     ],
//   },
//   {
//     title: "Frontend",
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: [
//       "html",
//       "css",
//       "js",
//       "mysql",
//       "mongodb",
//       "react",
//       "angular",
//       "aws",
//       "docker",
//       "git",
//       "sass",
//     ],
//   },
// ];
// let searchValue = "docker";
// console.log(coursesArray.filter((element) => element.modules.includes(searchValue)));

// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Масть карти: ”, // ‘бубна’, ‘серця’,  ‘піка’, ‘трефи’
let cardSuit = ["diamond", "heart", "spade", "clubs"];
let partValue = ["ace", "jack", "queen", "king"];
let color = ["red", "black"];
let cards = [];
cardSuit.forEach((value, index) => {
  for (let i = 6; i <= 14; i++) {
    let obj;
    let cardValue;
    let cardColor;
    i <= 10 ? (cardValue = i) : (cardValue = partValue[i - 11]);
    index < 2 ? (cardColor = color[0]) : (cardColor = color[1]);
    obj = {
      cardSuit: value,
      value: cardValue,
      color: cardColor,
    };
    cards.push(obj);
  }
});
// console.log(cards);
//console.log(cards.find((element) => element.cardSuit == "spade" && element.value == "ace"))
//console.log(cards.filter((element) => element.value == 6));
//console.log(cards.filter((element) => element.color == 'red'));
// console.log(cards.filter((element) => element.cardSuit == 'diamond'));
// console.log(
//   cards.filter(
//     (element) =>
//       element.cardSuit == "clubs" &&
//       element.value != 6 &&
//       element.value != 7 &&
//       element.value != 8,
//   ),
// );

let objCards = cards.reduce(
  (total, element) => {
    switch (element.cardSuit) {
      case "diamond":
        total.diamond.push(element);
        break;
      case "heart":
        total.heart.push(element);
        break;
      case "spade":
        total.spade.push(element);
        break;
      case "clubs":
        total.clubs.push(element);
        break;
    }
    return total;
  },
  {
    diamond: [],
    heart: [],
    spade: [],
    clubs: [],
  },
);
console.log(objCards);
