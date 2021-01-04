'use strict'

const screenWH = document.querySelector(".screen");
const outerWH = document.querySelector(".outer");
const innerWH = document.querySelector(".inner");
const clientWH = document.querySelector(".clientWidth");

function setSize() {
    screenWH.innerHTML = `window.screen : ${window.screen.width}, ${window.screen.height}`;
    outerWH.innerHTML = `window.outer : ${window.outerWidth}, ${window.outerWidth}`;
    innerWH.innerHTML = `window.inner : ${window.innerWidth}, ${window.innerHeight}`;
    clientWH.innerHTML = `documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}

window.addEventListener("resize", setSize());

setSize();
