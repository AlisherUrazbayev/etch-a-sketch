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
  console.log(items);
  items.forEach((element) => {
    element.style["backgroundColor"] = "white";
  });
}

function toggleEraser() {
  currentColor = "white";
}

let currentColor = "grey";
createGrid(32, sketchContainer);

const gridSquares = document.querySelectorAll(".grid-square");
const btnClear = document.querySelector("#button-clear");
const btnEraser = document.querySelector("#button-eraser");
const btnChangeColor = document.querySelector("#button-change-color");
const colorInput = document.querySelector("#current-color");

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
  currentColor = colorInput.value;
});
