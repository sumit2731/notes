const Draggables = document.querySelectorAll(".draggable");

const Containers = document.querySelectorAll(".container");

Draggables.forEach((dragable) => {
  dragable.addEventListener("dragstart", () => {
    dragable.classList.add("dragging");
  });
  dragable.addEventListener("dragend", () => {
    dragable.classList.remove("dragging");
  });
});

Containers.forEach((Container) => {
  Container.addEventListener("dragover", (event) => {
    event.preventDefault();
    const currentDraggable = document.querySelector(".dragging");
    const closestElement = getClosesElement(Container, event.clientY);
    if (closestElement)
      Container.insertBefore(currentDraggable, closestElement);
    else Container.append(currentDraggable);
  });
});

function getClosesElement(container, y) {
  const allDraggables = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return allDraggables.reduce(
    (closest, currentElement) => {
      const boundingClientRect = currentElement.getBoundingClientRect();
      const centerCoordinates =
        boundingClientRect.y + boundingClientRect.height / 2;
      const offSet = centerCoordinates - y;
      if (offSet > 0 && closest.smallestOffset > offSet)
        return { smallestOffset: offSet, element: currentElement };
      return closest;
    },
    { smallestOffset: Infinity }
  ).element;
}
