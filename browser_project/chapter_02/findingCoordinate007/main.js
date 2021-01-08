const coordinateValue = document.querySelector(".coordinateValue");
const verticalLine = document.querySelector(".verticalLine");
const horizenLine = document.querySelector(".horizenLine");

document.addEventListener("mousemove", (event) => {
  coordinateValue.innerText = `x : ${event.pageX}, y : ${event.pageY}`;
  coordinateValue.style.top = event.pageY + 5 + "px";
  coordinateValue.style.left = event.pageX + 5 + "px";

  verticalLine.style.left = event.pageX + "px";
  horizenLine.style.top = event.pageY + "px";
});
