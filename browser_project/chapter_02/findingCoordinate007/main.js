const coordinateValue = document.querySelector(".coordinateValue");
const verticalLine = document.querySelector(".verticalLine");
const horizenLine = document.querySelector(".horizenLine");

document.addEventListener("mousemove", (event) => {
  let eventX = event.pageX;
  let eventY = event.pageY;
  coordinateValue.innerText = `x : ${eventX}, y : ${eventY}`;
  coordinateValue.style.top = eventY + 5 + "px";
  coordinateValue.style.left = eventX + 5 + "px";

  verticalLine.style.left = eventX + "px";
  horizenLine.style.top = eventY + "px";
});
