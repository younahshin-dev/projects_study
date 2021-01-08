"use strict";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    drawItems(jsonData);
  });

/** 아이템 그리기*/
function drawItems(items) {
  if (items.length === 0) {
    return;
  }
  const itemContainer = document.querySelector(".items");
  let itemsHTML = "";
  for (let item of items) {
    itemsHTML += `<img class='${item.key}' src='${item.image}'/>`;
  }
  itemContainer.innerHTML = itemsHTML;
}

const btnFindRabbit = document.querySelector(".btnFindRabbit");
btnFindRabbit.addEventListener("click", () => {
  const elRabbit = document.querySelector(".rabbit");
  let xPosition = elRabbit.offsetTop;

  elRabbit.scrollIntoView({ block: "center", behavior: "smooth" });
});
