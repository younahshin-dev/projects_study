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
    const textInput = document.querySelector(".inputItem");
    textInput.focus();
    return;
  }

  const itemList = document.querySelector(".shoppingItems");
  const textInput = document.querySelector(".inputItem");
  const itemValue = textInput.value;
  const itemElement = document.createElement("li");

  itemElement.className = "item";
  itemElement.innerHTML = `<span>${itemValue}</span><button class="btnTrash"><i class="fas fa-trash-alt"></i></button>`;
  itemList.appendChild(itemElement);

  itemElement.scrollIntoView();
  bindTrashEvent();

  textInput.value = "";
  textInput.focus();
}

function bindTrashEvent() {
  const listItems = document.querySelector(".shoppingItems");
  
  listItems.addEventListener("click", (event) => {
    if ( event.target.tagName === "BUTTON" || event.target.tagName === "I"){
      const removeItem = event.target.closest("li");
      removeItem.remove();
    }
  });
  
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


});
