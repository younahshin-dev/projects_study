'use strict'

const screenWH = document.querySelector(".screen");
const outerWH = document.querySelector(".outer");
const innerWH = document.querySelector(".inner");
const clientWH = document.querySelector(".clientWidth");

screenWH.innerHTML = `window.screen : ${window.screen.width}, ${window.screen.height}`;
outerWH.innerHTML = `window.outer : ${window.outerWidth}, ${window.outerWidth}`;
innerWH.innerHTML = `window.outer : ${window.innerWidth}, ${window.innerWidth}`;
clientWH.innerHTML = `window.outer : ${window.outerWidth}, ${window.outerWidth}`;
