//Accesing DOM Elements
const sketchContainer = document.querySelector(".container");

function createGrid(dimensions, container) {
  for (let i = 0; i < dimensions; i++) {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("style", " display: flex");
    gridRow.style["flex-grow"] = 1;
    gridRow.className = "row";
    container.appendChild(gridRow);
    for (let j = 0; j < dimensions; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.setAttribute("style", "");
      gridSquare.style["flex-grow"] = 1;
      gridSquare.className = "grid-square";
      gridSquare.id = `id: ${i}${j}`;
      gridRow.appendChild(gridSquare);
    }
  }
}

function changeColor(item, color) {
  item.style["backgroundColor"] = color;
}

function clearCanvas(items) {
  items.forEach((element) => {
    element.style["backgroundColor"] = "white";
  });
}

function toggleEraser() {
  currentColor = "white";
}

function deleteGrid(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const sizeInput = document.querySelector("#grid-size");
const colorInput = document.querySelector("#current-color");
let currentColor = colorInput.value;

createGrid(sizeInput.value, sketchContainer);

let gridSquares = document.querySelectorAll(".grid-square");
const btnClear = document.querySelector("#button-clear");
const btnEraser = document.querySelector("#button-eraser");
const btnChangeColor = document.querySelector("#button-change-color");
const btnChangeSize = document.querySelector("#button-change-size");

gridSquares.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    changeColor(element, currentColor);
  });
});

btnClear.addEventListener("click", () => {
  clearCanvas(gridSquares);
});

btnEraser.addEventListener("click", () => {
  toggleEraser();
});

btnChangeColor.addEventListener("click", () => {
  console.log(currentColor);
  currentColor = colorInput.value;
});

btnChangeSize.addEventListener("click", () => {
  deleteGrid(sketchContainer);
  createGrid(sizeInput.value, sketchContainer);
  gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      changeColor(element, currentColor);
    });
  });
});
