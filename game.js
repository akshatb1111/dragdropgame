const plate = document.getElementById("plate");
const items = document.querySelectorAll(".item");
const resetButton = document.getElementById("resetButton");

// Add event listeners for drag events on food items
items.forEach(item => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

// Plate event listeners
plate.addEventListener("dragover", dragOver);
plate.addEventListener("drop", drop);

// Reset button event listener
resetButton.addEventListener("click", resetPlate);

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.src);
}

function dragEnd() {
  // Optional: Add animations or styles after dragging ends
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  const itemSrc = e.dataTransfer.getData("text");
  const img = document.createElement("img");
  img.src = itemSrc;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.position = "absolute";
  img.style.left = `${e.offsetX - 25}px`;
  img.style.top = `${e.offsetY - 25}px`;

  // Prevent dragging the item out of the plate
  img.setAttribute("draggable", "false");

  // Add bounce animation
  img.classList.add("bouncing");

  // Remove the bounce class after animation ends
  img.addEventListener("animationend", () => {
    img.classList.remove("bouncing");
  });

  // Add the item to the plate
  plate.appendChild(img);
}

function resetPlate() {
  // Remove all items from the plate
  while (plate.firstChild) {
    plate.removeChild(plate.firstChild);
  }
}

