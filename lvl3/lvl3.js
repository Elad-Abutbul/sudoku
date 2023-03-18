const matValid = [
  [7, 3, 5, 6, 1, 4, 8, 9, 2],
  [8, 4, 2, 9, 7, 3, 5, 6, 1],
  [9, 6, 1, 2, 8, 5, 3, 7, 4],
  [2, 8, 6, 3, 4, 9, 1, 5, 7],
  [4, 1, 3, 8, 5, 7, 9, 2, 6],
  [5, 7, 9, 1, 2, 6, 4, 3, 8],
  [1, 5, 7, 4, 9, 2, 6, 8, 3],
  [6, 9, 4, 7, 3, 8, 2, 1, 5],
  [3, 2, 8, 5, 6, 1, 7, 4, 9],
];
const mat = [
  [7, 0, 0, 0, 0, 0, 8, 0, 2],
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 8, 0, 0, 7, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 6],
  [5, 0, 9, 0, 0, 0, 0, 0, 8],
  [0, 5, 0, 0, 0, 2, 0, 8, 0],
  [6, 0, 0, 0, 0, 8, 0, 1, 0],
  [0, 2, 0, 0, 0, 0, 7, 0, 9],
];
const matValid1 = [
  [4, 5, 3, 8, 2, 6, 1, 9, 7],
  [8, 9, 2, 5, 7, 1, 6, 3, 4],
  [1, 6, 7, 4, 9, 3, 5, 2, 8],
  [7, 1, 4, 9, 5, 2, 8, 6, 3],
  [5, 8, 6, 1, 3, 7, 2, 4, 9],
  [3, 2, 9, 6, 8, 4, 7, 5, 1],
  [9, 3, 5, 2, 1, 8, 4, 7, 6],
  [6, 7, 1, 3, 4, 5, 9, 8, 2],
  [2, 4, 8, 7, 6, 9, 3, 1, 5],
];
const mat1 = [
  [0, 5, 0, 0, 2, 6, 1, 0, 0],
  [8, 0, 0, 0, 0, 1, 0, 3, 4],
  [0, 0, 0, 4, 9, 0, 0, 0, 0],
  [0, 0, 0, 9, 0, 0, 0, 6, 0],
  [5, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 6],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 8, 0, 0, 0, 0, 1, 0],
];
const matValid2 = [
  [5, 7, 4, 1, 2, 9, 6, 8, 3],
  [8, 2, 6, 4, 3, 5, 9, 7, 1],
  [1, 9, 3, 6, 8, 7, 2, 4, 5],
  [9, 1, 8, 7, 4, 2, 3, 5, 6],
  [6, 5, 2, 3, 1, 8, 7, 9, 4],
  [3, 4, 7, 9, 5, 6, 1, 2, 8],
  [4, 6, 5, 2, 7, 1, 8, 3, 9],
  [7, 3, 1, 8, 9, 4, 5, 6, 2],
  [2, 8, 9, 5, 6, 3, 4, 1, 7],
];
const mat2 = [
  [5, 0, 4, 0, 0, 0, 0, 0, 3],
  [8, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 0, 0],
  [3, 0, 0, 0, 5, 6, 0, 2, 8],
  [4, 0, 0, 0, 0, 0, 0, 0, 9],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [2, 8, 0, 0, 0, 0, 0, 1, 7],
];

const matRandom = [mat, mat1, mat2];
const matrizaValid = [matValid, matValid1, matValid2];
const random = Math.floor(Math.random() * matRandom.length);
function start() {
  let table = document.getElementById("tab");
  for (let i = 0; i < 9; i++) {
    let tr = document.createElement("tr");
    tr.classList.add("tr");
    for (let j = 0; j < 9; j++) {
      let td = document.createElement("td");
      td.classList.add("td");
      td.innerHTML = matRandom[random][i][j];

      if (matRandom[random][i][j] == 0) {
        let inp = document.createElement("input");
        inp.addEventListener("input", () => {
          matRandom[random][i][j] = inp.value;
          if (inp.value > 9 || inp.value < 1) {
            inp.value = "";
          }
        });
        td.replaceChildren(inp);
        inp.setAttribute("type", "number");
        inp.setAttribute("min", "1");
        inp.setAttribute("max", "9");
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
 
}
start();

function check() {
  let counter = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matRandom[random][i][j] == matrizaValid[random][i][j]) {
        counter++;
      }
    }
  }
  if (counter == 81) {
    alert("WELL DONE!!!");
  } else {
    alert("Maybe next time :(");
  }
  counter = 0;
}
function again() {
  document.querySelectorAll("input").forEach((element) => clear(element));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (typeof matRandom[random][i][j] == "string") {
        matRandom[random][i][j] = "";
      }
    }
  }
  console.log(matRandom[random]);
}
function clear(input) {
  input.value = "";
}
