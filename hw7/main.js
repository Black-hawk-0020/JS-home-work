//Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об’єктами new User(….)
// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
// let users = [];
// users.push(
//   new User(1, "Іван", "Петров", "ivan@gamil.com", +380671234567),
//   new User(2, "Марія", "Ковальчук", "maria.@gmail.com", +380501112233),
//   new User(3, "Олег", "Мельник", "oleg@gmail.com", +380931234567),
//   new User(4, "Анна", "Свириденко", "anna@gmail.com", +380661234567),
//   new User(5, "Дмитро", "Бондар", "dmytro@gmail.com", +380971234567),
//   new User(6, "Наталія", "Ткаченко", "nataliia@gmail.com", +380631234567),
//   new User(7, "Василь", "Кравець", "vasyl@gmail.com", +380991234567),
//   new User(8, "Софія", "Олійник", "sofiia.@gmail.com", +380681234567),
//   new User(9, "Артем", "Лисенко", "artem@gmail.com", +380951234567),
//   new User(10, "Ірина", "Романюк", "iryna@gmail.com", +380731234567),
// );

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//let even= users.filter(element=>element.id%2==0)

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortArr= users.sort((a, b)=>a.id-b.id)
// console.log(sortArr)

//створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// function Client(id, name, surname, email, phone, order) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
//   this.order = order;
// }
// let clients = [];
// clients.push(
//   new Client(1, "Іван", "Петров", "ivan@gamil.com", +380671234567, [
//     "tv",
//     "phone",
//   ]),
//   new Client(2, "Марія", "Ковальчук", "maria.@gmail.com", +380501112233, [
//     "pen",
//     "pencil",
//     "notebook",
//   ]),
//   new Client(3, "Олег", "Мельник", "oleg@gmail.com", +380931234567, [
//     "notebook",
//     "tv",
//     "pencil",
//     "book",
//   ]),
//   new Client(4, "Анна", "Свириденко", "anna@gmail.com", +380661234567, [
//     "pen",
//     "pencil",
//     "notebook",
//   ]),
//   new Client(5, "Дмитро", "Бондар", "dmytro@gmail.com", +380971234567, [
//     "notebook",
//     "tv",
//     "pencil",
//     "book",
//   ]),
//   new Client(6, "Наталія", "Ткаченко", "nataliia@gmail.com", +380631234567,[
//     "pen",
//     "pencil",
//     "notebook",
//   ]),
//   new Client(7, "Василь", "Кравець", "vasyl@gmail.com", +380991234567, [
//     "pen",
//     "pencil",
//     "notebook",
//   ]),
//   new Client(8, "Софія", "Олійник", "sofiia.@gmail.com", +380681234567, [
//     "notebook",
//     "tv",
//     "pencil",
//   ]),
//   new Client(9, "Артем", "Лисенко", "artem@gmail.com", +380951234567, [
//     "tv",
//     "phone",
//   ]),
//   new Client(10, "Ірина", "Романюк", "iryna@gmail.com", +380731234567, [
//     "notebook",
//     "tv",
//     "pencil",
//     "book",
//   ]),
// );
//console.log(clients);
//Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
// let upSortCpients=clients.sort((a,b)=>a.order.length-b.order.length)
// console.log(upSortCpients);

//Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна.
// function Car(modal, year, maxSpeed, engine) {
//   this.modal = modal;
//   this.year = year;
//   this.maxSpeed = maxSpeed;
//   this.engine = engine;
//   this.drive = function () {
//   console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   };
//   this.info = function () {
//     for (const key in this) {
//       const element = this[key];
//       console.log(key, element);
//       this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//       };
//     }
//   };
//   this.changeYear = function (newValue) {
//     this.year = newValue;
//   };
//   this.addDriver = function (driver) {
//     this.driver = driver;
//   };
// }

// let Car1 = new Car("megane", 2010, 180, 1.5);
//Car1.info();
//Car1.increaseMaxSpeed(20);
//Car1.info();
//Car1.changeYear(2011)
//Car1.info()
// Car1.addDriver({ name: "Ivan", surname: "petrov" });
// Car1.info();

// class Car {
//   constructor(modal, year, maxSpeed, engine) {
//     this.modal = modal;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//   }
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   }
//   info() {
//     for (const key in this) {
//       const element = this[key];
//       console.log(key, element)
//       };
//     }
//   increaseMaxSpeed(newSpeed) {
//     this.maxSpeed += newSpeed;
//   }
//   changeYear(newValue) {
//     this.year = newValue;
//   }
//   addDriver(driver) {
//     this.driver = driver;
//   }
// }
// let car2 = new Car("megane", 2010, 180, 1.5);

//#zg6Fifnqig
// class Cinderella {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }
// class Prince extends Cinderella {
//   constructor(name, age, foundBoot) {
//     super(name, age);
//     this.foundBoot = foundBoot;
//   }
// }
// let cinderellas = [
//   new Cinderella("Аня", 20, 35),
//   new Cinderella("Марія", 21, 36),
//   new Cinderella("Віта", 22, 37),
//   new Cinderella("Іра", 23, 38),
//   new Cinderella("Софія", 24, 39),
//   new Cinderella("Надія", 25, 40),
//   new Cinderella("Оксана", 26, 41),
//   new Cinderella("Юля", 27, 42),
//   new Cinderella("Віка", 30, 43),
//   new Cinderella("Оля", 31, 44),
// ];
// let prince = new Prince("Kolya", 35, 35);
// for (const element of cinderellas) {
//     if (element.footSize==prince.foundBoot) {
//         console.log(`Принц повинен бути з ${element.name}`);
//     }
// }
//   cinderellas.find((element) => {
//     if (element.footSize == prince.foundBoot) {
//       console.log(`Принц повинен бути з ${element.name}`) }
//   });

//*Через Array.prototype. створити власний foreach, filter
let users = [
  { id: 1, name: "Ivan", age: 25 },
  { id: 2, name: "Olena", age: 30 },
  { id: 3, name: "Petro", age: 22 },
  { id: 4, name: "Iryna", age: 27 },
  { id: 5, name: "Maksym", age: 35 },
  { id: 6, name: "Petro", age: 27 },
];
Array.prototype.forEachArr = function (callback) {
  for (const element of this) {
    callback(element);
  }
};
users.forEachArr((element) => console.log(element));
Array.prototype.filterArr = function (callback) {
  let newArr = [];
  for (const element of this) {
    if (callback(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};
console.log(users.filterArr((element) => element.name == "Petro"));
