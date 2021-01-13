const btnContainer = document.querySelector(".btns");
const startbutton = document.querySelector("#startBtn");

const field = document.querySelector(".gameField");

const bgm = new Audio("./sound/bg.mp3");
const deadSound = new Audio("./sound/alert.wav");

const carrotObj = new Image(30, 50);
carrotObj.src = "./img/carrot.png";

function onClickBtn(btnElement) {
  toggleBtn(btnElement);

  if (btnElement.id === "startBtn") {
    clearfield();
    startGame();
  }

  if (btnElement.id === "stopBtn") {
    endGame();
  }
}

function clearfield() {
  field.innerHTML = "";
}

function startGame() {
  countDown(1);
  let x = 0;
  let y = 0;

  for (let i = 0; i < 5; i++) {
    const bug = document.createElement("img");
    x = getRandomInt(field.clientWidth - 50);
    y = getRandomInt(field.clientHeight - 50);

    bug.setAttribute("src", "./img/bug.png");
    bug.style.transform = `translate(${x}px, ${y}px)`;
    bug.style.position = "absolute";

    bug.setAttribute("data-id", i);
    field.append(bug);

    let carrot = document.createElement("img");

    x = getRandomInt(field.clientWidth - 80);
    y = getRandomInt(field.clientHeight - 80);
    carrot.setAttribute("src", "./img/carrot.png");
    carrot.style.transform = `translate(${x}px, ${y}px)`;
    carrot.style.position = "absolute";
    carrot.setAttribute("data-id", i);
    field.append(carrot);
  }

  bgm.play();
}

let myVar;
function countDown(timeoutMinute) {
  let timeout = timeoutMinute * 60;
  let seconds = timeoutMinute % 60;
  function tick() {
    const counter = document.querySelector(".timer");
    seconds--;
    timeout--;

    minute = Math.trunc(timeout / 60);
    counter.innerHTML =
      minute + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    console.log(timeout);
    if (timeout >= 0) {
      myVar = setTimeout(tick, 1000);
    } else {
      endGame();
      timeout = timeoutMinute;
      myVar.clearTimeout();
      return;
    }
    if (seconds === 0) {
      seconds = 60;
    }
  }
  tick();
}

function endGame() {
  bgm.pause();
  deadSound.play();
  myVar.clearTimeout();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function toggleBtn(btnElement) {
  const buttons = document.querySelectorAll(".btns .button");
  buttons.forEach((button) => {
    if (button.id === btnElement.id) {
      button.setAttribute("style", "display:none;");
    } else {
      button.setAttribute("style", "display:block;");
    }
  });
}

btnContainer.addEventListener("click", (event) => {
  if (event.target.id === "startBtn" || event.target.id === "stopBtn") {
    onClickBtn(event.target);
  }

  return;
});
