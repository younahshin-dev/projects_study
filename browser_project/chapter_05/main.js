function checkValidation() {
  const textInput = document.querySelector(".inputItem");
  const itemValue = textInput.value;

  if ("" === itemValue) {
    return false;
  }

  return true;
}

function addItem() {
  if (!checkValidation()) {
    alert("Please enter your Shopping Item");
    return;
  }

  const itemList = document.querySelector(".shoppingItems");
  const textInput = document.querySelector(".inputItem");
  const itemValue = textInput.value;
  const itemElement = document.createElement("li");

  itemElement.className = "item";
  itemElement.innerHTML = `<span>${itemValue}</span><button class="btnTrash"><i class="fas fa-trash-alt"></i></button>`;
  itemList.appendChild(itemElement);

  bindTrashEvent();

  textInput.value = "";
}

function bindTrashEvent() {
  const trashIcons = document.querySelectorAll(".fa-trash-alt");
  for (trashIcon of trashIcons) {
    trashIcon.addEventListener("click", (event) => {
      const currentTarget = event.currentTarget;
      const removeItem = currentTarget.closest("li");
      removeItem.remove();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector(".addBtn");
  addBtn.addEventListener("click", () => {
    addItem();
  });

  const textInput = document.querySelector(".inputItem");
  textInput.addEventListener("keydown", (event) => {
    if (13 !== event.keyCode) {
      return;
    }
    addItem();
  });

  bindTrashEvent();
});
