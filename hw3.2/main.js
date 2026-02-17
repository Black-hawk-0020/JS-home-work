//WpkK0ZH1
// let arr1 = [1, 2, 3, 4, 5];
// for (const element of arr1) {
//   console.log(element);
// }
// let arr2 = ["a", "b", "c", "d", "e"];
// for (const element of arr2) {
//   console.log(element);
// }
// let arr3 = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   1,
//   2,
//   3,
//   4,
//   5,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// for (const element of arr3) {
//   console.log(element);
// }

//#4aDbSgh
// let arr4 = [];
// arr4[0] = "q";
// arr4[1] = 1;
// arr4[2] = 2;
// arr4[3] = true;
// arr4[4] = false;
// for (const element of arr4) {
//   console.log(element);
// }

//#qLQLJSeN7i
// arr3q = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// let ilast=arr3q.length;

//1
// while (i<arr3q.length) {
//     console.log(arr3q[i]);
//     i++
// }
// while (ilast>=0) {
//     console.log(arr3q[ilast-1]);
//     ilast--
// }

//2
// for (let index = 0; index < arr3q.length; index++) {
//     const element = arr3q[index];
//     console.log(element)
// }
// for (let index = arr3q.length; index >0; index--) {
//     const element = arr3q[index-1];
//     console.log(element)
// }

//3
// while (i<arr3q.length) {
//     if (i%2==1) {
//         console.log(arr3q[i]);
//     }
//     i++
// }
// while (ilast>0) {
//     if (ilast%2==1) {
//         console.log(arr3q[ilast]);
//     }
//     ilast--
// }

//4
// for (let index = 0; index < arr3q.length; index++) {
//   const element = arr3q[index];
//   if (index % 2 == 1) {
//     console.log(element);
//   }
// }
// for (let index = arr3q.length-1; index >0 ; index--) {
//   const element = arr3q[index];
//   if (index % 2 == 1) {
//     console.log(element);
//   }
// }

//5
// while (i < arr3q.length) {
//   if (arr3q[i] % 2 == 0) {
//     console.log(arr3q[i]);
//   }
//   i++;
// }
// while (ilast > 0) {
//   if (arr3q[ilast-1] % 2 == 0) {
//     console.log(arr3q[ilast-1]);
//   }
//   ilast--;
// }

//6
// for (let index = 0; index < arr3q.length; index++) {
//     const element = arr3q[index];
//     if (element%2==0) {
//         console.log(element);
//     }
// }
// for (let index =arr3q.length; index >0; index--) {
//     const element = arr3q[index-1];
//     if (element%2==0) {
//         console.log(element);
//     }
// }

//7
// arr7 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let index = 0; index < arr7.length; index++) {
//     const element = arr7[index];
//     if (element%3==0) {
//         arr7[index]='okten'
//     }
// }
// console.log(arr7);
// for (let index = arr7.length; index >0 ; index--) {
//     const element = arr7[index-1];
//     if (element%3==0) {
//         arr7[index-1]='okten'
//     }
// }
// console.log(arr7);

//8
// for (let index = arr3q.length; index >0; index--) {
//     const element = arr3q[index-1];
//     console.log(element);
// }

//#mDMWMW5a
// for (let index = 0; index < 10; index++) {
//     console.log(index);
//     document.write(index)
// }

//#zananT5FR1
// for (let i = 1; i <= 100; i ++) {
//   if (i % 2 == 0) {
//     console.log(i);
//      document.write(`<span>${i} </span>`)
//   }
// }

//#Tfrwls7FM
// for (let i = 1; i <= 100; i ++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//      document.write(`<span>${i} </span>`)
//   }
// }

//1. Створити пустий масив
//a
// let arr1 = [];
// for (let i = 1; ; i++) {
//   if (arr1.length == 50) {
//     break;
//   } else if (i % 2 == 0) {
//     arr1.push(i);
//   }
// }
// console.log(arr1);

//b
// let arr1 = [];
// for (let i = 1; ; i++) {
//   if (arr1.length == 50) {
//     break;
//   } else if (i % 2 !== 0) {
//     arr1.push(i);
//   }
// }
// console.log(arr1);

//c
// let arrc=[];
// for(let i=1;i<21;i++){
//     arrc.push(Math.ceil(Math.random()*20))
// }
// console.log(arrc);

//d
// let arrd=[];
// for(let i=1;i<21;i++){
//     arrd.push(Math.ceil(Math.random()*(732-8)+8))
// }
// console.log(arrd);

// 2. Вивести за допомогою console.log кожен третій елемент
// let arr2 = [];
// for (let i = 1;i<20; i++) {
//     arr2.push(i);
//   }
// console.log(arr2);
// for(let i=0;i<arr2.length;i+=3){
//     console.log(arr2[i])
// }

//4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// let arr3 = [];
// let newarr = [];
// for (let i = 1; i < 20; i++) {
//   arr3.push(i);
// }
// console.log(arr3);
// for (let i = 0; i < arr3.length; i += 3) {
//   if (arr3[i] % 2 == 0) {
//     newarr.push(arr3[i]);
//     console.log(arr3[i]);
//   }
// }

//5. Вивести кожен елемент масиву, сусід справа якого є парним
// let arr5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for(let i=0;i<arr5.length;i++){
//   if (arr5[i]%2==0) {
//     console.log(arr5[i-1])
//   }
// }

//6 Обрахувати середній чек.
// let arr6 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// let totel = 0;
// for (const element of arr6) {
//   totel += element;
// }
// let average =totel / arr6.length;
// console.log(average.toFixed(2));
