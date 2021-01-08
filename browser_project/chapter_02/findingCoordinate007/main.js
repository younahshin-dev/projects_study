"use strict";
const coordinateValue = document.querySelector(".coordinateValue>span");
const coordinateImg = document.querySelector(".coordinateValue>img");
const verticalLine = document.querySelector(".verticalLine");
const horizenLine = document.querySelector(".horizenLine");

document.addEventListener("mousemove", (event) => {
  let eventX = event.pageX;
  let eventY = event.pageY;
  coordinateValue.innerText = `x : ${eventX}, y : ${eventY}`;
  coordinateValue.style.top = eventY + 5 + "px";
  coordinateValue.style.left = eventX + 5 + "px";
  console.log(coordinateImg.height);
  console.log(coordinateImg.style.height / 2);

  coordinateImg.style.top = eventY - coordinateImg.height / 2 + "px";
  coordinateImg.style.left = eventX - coordinateImg.width / 2 + "px";

  horizenLine.style.top = eventY + "px";
  verticalLine.style.left = eventX + "px";
});
