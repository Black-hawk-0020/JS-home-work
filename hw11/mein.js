//#HmvAfRQM
// fetch("https://dummyjson.com/carts")
//   .then((response) => response.json())
//   .then((date) => {
//     for (const cart of date.carts) {
//       let divBlock = document.createElement("div");
//       Object.assign(divBlock.style, {
//         backgroundColor: "rgb(232, 223, 223)",
//         marginTop: "10px",
//         width: "130%",
//       });
//       document.body.appendChild(divBlock);
//       for (const key in cart) {
//         const element = cart[key];
//         if (Array.isArray(element)) {
//           let divFlex = document.createElement("div");
//           Object.assign(divFlex.style, {
//             display: "flex",
//             gap: "30px",
//           });
//           divBlock.appendChild(divFlex);
//           for (const value of element) {
//             let div = document.createElement("div");
//             for (const key in value) {
//               const element = value[key];
//               if (key == "thumbnail") {
//                 let img = document.createElement("img");
//                 img.src = element;
//                 div.appendChild(img);
//                 divFlex.appendChild(div);
//               } else {
//                 let p = document.createElement("p");
//                 p.innerText = `${key}: ${element}`;
//                 div.appendChild(p);
//               }
//             }
//           }
//         } else {
//           let p = document.createElement("p");
//           p.innerText = `${key}: ${element}`;
//           divBlock.appendChild(p);
//         }
//       }
//     }
//   });

//#whXxOBlYS0H
fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((json) => {
    for (const obj of json.recipes) {
      let divBlock = document.createElement("div");
      divBlock.style.display = "flex";
      divBlock.style.marginTop = "10px";
      document.body.appendChild(divBlock);
      let ul = document.createElement("ul");
      ul.style.listStyle = "none";
      ul.style.marginTop = 0;
      divBlock.appendChild(ul);
      for (const key in obj) {
        const element = obj[key];
        switch (key) {
          case "ingredients":
            divBlock.appendChild(createList(key, element));
            break;
          case "instructions":
            divBlock.appendChild(createList(key, element));
            break;
          case "image":
            let img = document.createElement("img");
            Object.assign(img.style, {
              maxWidth: "300px",
              maxHeight: "300px",
            });
            img.src = element;
            divBlock.prepend(img);
            break
          case "tags":
            let li = document.createElement("li");
            li.innerText = `${key}: ${element.join(", ")}` ;
            ul.appendChild(li);
            break;
          default:{
            let li = document.createElement("li");
            li.innerText = `${key}: ${element}`;
            ul.appendChild(li)};
            break;
        }
      }
    }
  });

function createList(key, arr) {
  let ol = document.createElement("ol");
  let li = document.createElement("li");
  li.innerText = key + ":";
  ol.appendChild(li);
  ol.children[0].style.listStyle = "none";
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    ol.appendChild(li);
    ol.style.marginTop = 0;
    ol.style.listStylePosition = "inside";
  });
  ol.children[1].setAttribute("value", "1");
  return ol;
}

