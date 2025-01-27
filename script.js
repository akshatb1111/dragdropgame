function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const plate = event.target.closest('.plate');

  if (plate && !plate.contains(draggedElement)) {
    plate.appendChild(draggedElement);
    draggedElement.style.position = "absolute";
    draggedElement.style.top = `${event.offsetY - 30}px`;
    draggedElement.style.left = `${event.offsetX - 30}px`;
  }
}

function resetPlate() {
  const plate = document.querySelector('.plate');
  const itemsContainer = document.querySelector('.items');
  const items = plate.querySelectorAll('.item');

  items.forEach(item => {
    item.style.position = "static";
    itemsContainer.appendChild(item);
  });
}
