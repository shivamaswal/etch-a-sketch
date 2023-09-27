const grid = document.querySelector(".grid");
const slider = document.querySelector(".slider");
const button = document.querySelector(".btn-clear");
const userColorPicker = document.querySelector("#input-color");
const eraser = document.querySelector(".btn-eraser");
var color = "black";

function createGrid(num) {
  let gridRow = num;
  let gridArea = gridRow * gridRow;

  for (let j = 0; j < gridArea; j++) {
    const div = document.createElement("div");
    div.classList.add("grid-items");
    grid.style.gridTemplateColumns = `repeat(${num},1fr)`;
    grid.style.gridTemplateRows = `repeat(${num},1fr)`;
    grid.appendChild(div);
  }
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseover", () => {
      gridPixel.style.backgroundColor = color;
    })
  );
}

function pixelSize() {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) => gridPixel.remove());
  createGrid(slider.value);
}

function clearGrid() {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach(
    (gridPixel) => (gridPixel.style.backgroundColor = "white")
  );
}

function userColorSelection(event) {
  color = event.target.value;
}

function erasePixel() {
  color = "white";
}

//on page load
createGrid(10);

slider.addEventListener("mouseup", pixelSize);
button.addEventListener("click", clearGrid);
eraser.addEventListener("click", erasePixel);
userColorPicker.addEventListener("change", userColorSelection, false);
userColorPicker.addEventListener("input", userColorSelection, false);
