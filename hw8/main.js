//#iz6emEsP2BA
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
// let newArr = coursesAndDurationArray.map((value, index) => ({
//   id: index + 1,
//   ...value,
// }));
// console.log(newArr);

//#AiN5CoUQ
let obj = { title: "JavaScript Complex", monthDuration: 5, function() {} };
function deepCopy(obj) {
  let newObj;
  if (obj) {
    newObj = JSON.parse(JSON.stringify(obj));
  }
  for (const key in obj) {
    const element = obj[key];
    if (typeof element == "function") {
      newObj[key] = element;
    }
  }
  return newObj;
}
let copyObj = deepCopy(obj);
console.log(copyObj);
