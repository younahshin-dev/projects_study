const btnContainer = document.querySelector(".btns");
const popupContainer = document.querySelector(".popup");
const field = document.querySelector(".gameField");

const bgm = new Audio("./sound/bg.mp3");
const deadSound = new Audio("./sound/alert.wav");
const bugPullSound = new Audio("./sound/bug_pull.mp3");
const carrotPullSound = new Audio("./sound/carrot_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");
let playing = false;

function onClickBtn(btnElement) {
  toggleBtn();

  if (btnElement.id === "startBtn") {
    clearfield();
    startGame();
  }

  if (btnElement.id === "stopBtn") {
    stopGame();
  }
}

function clearfield() {
  field.innerHTML = "";
}

function startGame() {
  playing = true;
  countDown(1);
  let x = 0;
  let y = 0;

  for (let i = 0; i < 5; i++) {
    const bug = document.createElement("img");
    x = getRandomInt(field.clientWidth - 50);
    y = getRandomInt(field.clientHeight - 50);

    bug.setAttribute("src", "./img/bug.png");
    bug.setAttribute("name", "bug");
    bug.style.transform = `translate(${x}px, ${y}px)`;
    bug.style.position = "absolute";

    bug.setAttribute("data-id", i);
    field.append(bug);

    let carrot = document.createElement("img");

    x = getRandomInt(field.clientWidth - 80);
    y = getRandomInt(field.clientHeight - 80);
    carrot.setAttribute("src", "./img/carrot.png");
    carrot.setAttribute("name", "carrot");
    carrot.style.transform = `translate(${x}px, ${y}px)`;
    carrot.style.position = "absolute";
    carrot.setAttribute("data-id", i);
    field.append(carrot);
  }

  bgm.play();
}

field.addEventListener("click", (event) => {
  if (playing === false) {
    return;
  }
  onPullTarget(event.target);
});

function onPullTarget(clickTarget) {
  if (playing === false) {
    return;
  }
  if (clickTarget.name === "bug") {
    bugPullSound.play();
    endGame();
    toggleBtn();
  }

  if (clickTarget.name === "carrot") {
    clickTarget.remove();
    carrotPullSound.play().then(() => {
      checkAllCarrotPulled();
    });
  }
}

function checkAllCarrotPulled() {
  const carrotList = document.querySelectorAll("img[name='carrot']");
  if (carrotList.length > 0) {
    return;
  }
  toggleBtn();
  winThisGame();
}

function winThisGame() {
  bgm.pause();
  winSound.play();
  playing = false;
  const winPopup = popupContainer.querySelector(".winPopup");
  popupContainer.classList.add("active");
  winPopup.classList.add("active");
}

let myVar;
function countDown(timeoutMinute) {
  let timeout = timeoutMinute * 60;
  let seconds = timeoutMinute % 60;
  function tick() {
    if (playing === false) {
      return;
    }

    const counter = document.querySelector(".timer");
    seconds--;
    minute = Math.trunc(timeout / 60);

    counter.innerHTML =
      minute + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    console.log(timeout);
    timeout--;
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

function stopGame() {
  playing = false;
  bgm.pause();
  deadSound.play();
}

function endGame() {
  playing = false;
  bgm.pause();
  deadSound.play();
  const loosePopup = popupContainer.querySelector(".loosePopup");
  popupContainer.classList.add("active");
  loosePopup.classList.add("active");
  // myVar.clearTimeout();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function toggleBtn() {
  const buttons = document.querySelectorAll(".btns .button");
  buttons.forEach((button) => {
    const buttonClassList = button.classList;
    buttonClassList.toggle("active");
  });
}

btnContainer.addEventListener("click", (event) => {
  if (event.target.id === "startBtn" || event.target.id === "stopBtn") {
    onClickBtn(event.target);
  }

  return;
});

popupContainer.addEventListener("click", (event) => {
  if (event.target.name === "reStartBtn") {
    popupContainer.classList.remove("active");
    const winPopup = popupContainer.querySelector(".winPopup");
    const loosePopup = popupContainer.querySelector(".loosePopup");

    winPopup.classList.remove("active");
    loosePopup.classList.remove("active");
    clearfield();
    toggleBtn();
    startGame();
  }
});
