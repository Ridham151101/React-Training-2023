function addElement() {
  const selectedElement = document.getElementById("element-select").value;
  const elementText = document.getElementById("element-text").value;
  const elementColor = document.getElementById("element-color").value;

  const element = document.createElement(selectedElement);
  element.innerHTML = elementText;
  element.style.color = elementColor;
  // element.className = "added-element";

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function () {
    editElement(element);
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    deleteElement(element);
  }

  const container = document.createElement("div");
  container.appendChild(element);
  container.appendChild(editButton);
  container.appendChild(deleteButton);
  // container.className = "edit-delete-buttons";

  document.getElementById("elementContainer").appendChild(container);

  document.getElementById("element-select").selectedIndex = 0;
  document.getElementById("element-text").value = "";
  document.getElementById("element-color").value = "#000000";
}

function editElement(element) {
  const editContainer = document.getElementById("editContainer");
  const editTextarea = document.getElementById("editText");
  const editColor = document.getElementById("editColor");

  editTextarea.value = element.innerHTML;
  editColor.value = element.style.color;

  editContainer.style.display = "block";

  const updateButton = document.getElementById("updateButton");
  updateButton.onclick = function () {
    updateElement(element, editTextarea.value, editColor.value);
  };
}


function updateElement(element, newText, newColor) {
  element.innerText = newText;
  element.style.color = newColor;
  document.getElementById("editContainer").style.display = "none";
}

function deleteElement(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}
