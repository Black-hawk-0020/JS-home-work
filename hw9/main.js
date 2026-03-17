//#8Nmt60ZT
// let div = document.createElement("div");
// Object.assign(div.style, {
//   width: "200px",
//   height: "200px",
//   backgroundColor: "aqua",
//   color: "brown",
//   fontSize: "18px",
//   padding: "5px",
//   marginTop: "10px",
// });
// div.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// div.classList.add("wrap", "collapse", "alpha", "beta");
// document.body.appendChild(div);
// let div2 = div.cloneNode(true);
// document.body.appendChild(div2);

//#OPLI89c9G
// let arr = ["Main", "Products", "About us", "Contacts"];
// let ul = document.createElement("ul");
// document.body.appendChild(ul);
// arr.forEach((element) => {
//   let li = document.createElement("li");
//   li.textContent = element;
//   ul.appendChild(li);
// });

//#jeBqHV525U5
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
// for (const element of coursesAndDurationArray) {
//   let div=document.createElement("div")
//   Object.assign(div.style,{
//     backgroundColor: "aqua",
//     width: "max-content",
//     marginTop: "5px"
//   })
//   document.body.appendChild(div)
//   div.textContent=`${element.title} - ${element.monthDuration}`
// }

//#Kx1xgoKy8
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
// for (const element of coursesAndDurationArray) {
//   document.body.innerHTML += `
//     <div class="item">
//         <h1 class="heading">${element.title}</h1>
//         <p class="description">${element.monthDuration}</p>
//     </div>
//     `;
// }

//================
let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

for (const element of coursesArray) {
  let divCours = document.createElement("div");
  divCours.classList.add("cours");
  document.body.appendChild(divCours);
  let h2 = document.createElement("h2");
  h2.textContent = element.title;
  let divFlex = document.createElement("div");
  divFlex.classList.add("flex");
  let div1 = document.createElement("div");
  div1.textContent = `Month duration: ${element.monthDuration}`;
  let div2 = document.createElement("div");
  div2.textContent = `Hour duration:${element.hourDuration}`;
  divFlex.append(div1, div2);
  let divModules = document.createElement("div");
  divModules.classList.add("modules");
  let ul = document.createElement("ul");
  for (const value of element.modules) {
    let li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
  }
  divModules.appendChild(ul);
  divCours.append(h2, divFlex, divModules);
}
