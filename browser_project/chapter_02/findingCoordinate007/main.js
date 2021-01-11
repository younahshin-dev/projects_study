"use strict";
const coordinateValue = document.querySelector(".coordinateValue>span");
const coordinateImg = document.querySelector(".coordinateValue>img");
const verticalLine = document.querySelector(".verticalLine");
const horizenLine = document.querySelector(".horizenLine");

addEventListener('load', () => {
  const targetRect = coordinateImg.getBoundingClientRect();
  const targetHalfWidth = targetRect.width/2;
  const targetHalfHeight = targetRect.height/2;

  document.addEventListener("mousemove", (event) => {

    const eventX = event.clientX;
    const eventY = event.clientY;
    coordinateValue.innerText = `x : ${eventX}, y : ${eventY}`;

    
    coordinateValue.style.transform = `translate(${eventX}px, ${eventY}px)`;
    coordinateImg.style.transform = `translate(${eventX-targetHalfWidth}px, ${eventY-targetHalfHeight}px)`;

    horizenLine.style.transform = `translateY(${eventY}px)`;
    verticalLine.style.transform = `translateX(${eventX}px)`;
  });

});