const plate = document.getElementById("plate");
const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

plate.addEventListener("dragover", dragOver);
plate.addEventListener("drop", drop);

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

  // Add bounce animation
  img.classList.add("bouncing");

  // Remove the bounce class after animation ends
  img.addEventListener("animationend", () => {
    img.classList.remove("bouncing");
  });

  plate.appendChild(img);
}
